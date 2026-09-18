// Cursor dither plate, lifted from the original About page.
// Cream stipple of the figure is revealed inside a decaying heat trail that follows the cursor.
export function createPlate({ wrap, bg, dither, canvas }) {
  let grid = null, raf = null, t = 0, inside = false;
  let px = null, py = null, qx = null, qy = null;

  const cover = (im, W, H) => {
    const sr = im.naturalWidth / im.naturalHeight, dr = W / H;
    let sw = im.naturalWidth, sh = im.naturalHeight, sx = 0, sy = 0;
    if (sr > dr) { sw = im.naturalHeight * dr; sx = (im.naturalWidth - sw) / 2; }
    else { sh = im.naturalWidth / dr; sy = (im.naturalHeight - sh) / 2; }
    return [sx, sy, sw, sh];
  };

  // pre-composited reveal layer: colour landscape, figure printed over it as pale stipple
  const plate = (dpr) => {
    if (!dither || !dither.naturalWidth || !wrap) return null;
    const W = wrap.clientWidth, H = wrap.clientHeight;
    const c = document.createElement('canvas');
    c.width = Math.round(W * dpr); c.height = Math.round(H * dpr);
    const x = c.getContext('2d');
    x.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (bg && bg.naturalWidth) {
      const [bx, by, bw, bh] = cover(bg, W, H);
      x.drawImage(bg, bx, by, bw, bh, 0, 0, W, H);
    }
    const [dx, dy, dw, dh] = cover(dither, W, H);
    x.imageSmoothingEnabled = false;
    x.drawImage(dither, dx, dy, dw, dh, 0, 0, W, H);
    return c;
  };

  const build = () => {
    if (!canvas || !wrap) return;
    const W = wrap.clientWidth, H = wrap.clientHeight;
    if (!W || !H) return;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const cellW = 10;
    const cols = Math.max(8, Math.ceil(W / cellW)), rows = Math.max(8, Math.ceil(H / cellW));
    const offX = (W - cols * cellW) / 2, offY = (H - rows * cellW) / 2;
    const mask = document.createElement('canvas');
    mask.width = cols; mask.height = rows;
    const maskCtx = mask.getContext('2d');
    const maskData = maskCtx.createImageData(cols, rows);
    const heat = new Float32Array(cols * rows);
    if (grid && grid.cols === cols && grid.rows === rows) heat.set(grid.heat);

    grid = { ctx, mask, maskCtx, maskData, W, H, dpr, cols, rows, cellW, cellH: cellW, offX, offY, heat, plate: plate(dpr) };
    if (!raf) { t = performance.now(); loop(); }
  };

  const loop = () => {
    raf = requestAnimationFrame(loop);
    const g = grid;
    if (!g) return;
    const now = performance.now(), dt = Math.min(64, now - (t || now));
    t = now;
    const decay = Math.pow(0.9962, dt);
    const heat = g.heat;
    let live = 0;

    if (px != null) {
      const x0 = qx != null ? qx : px, y0 = qy != null ? qy : py;
      const steps = Math.min(6, Math.max(1, Math.ceil(Math.hypot(px - x0, py - y0) / (g.cellW * 1.6))));
      for (let s = 0; s <= steps; s++) {
        const cx = x0 + (px - x0) * (s / steps), cy = y0 + (py - y0) * (s / steps);
        const R = g.cellW * 17.2, R2 = R * R;
        const c0 = Math.max(0, Math.floor((cx - R - g.offX) / g.cellW)), c1 = Math.min(g.cols - 1, Math.ceil((cx + R - g.offX) / g.cellW));
        const r0 = Math.max(0, Math.floor((cy - R - g.offY) / g.cellH)), r1 = Math.min(g.rows - 1, Math.ceil((cy + R - g.offY) / g.cellH));
        for (let y = r0; y <= r1; y++) {
          const cpy = g.offY + y * g.cellH + g.cellH / 2;
          for (let x = c0; x <= c1; x++) {
            const cpx = g.offX + x * g.cellW + g.cellW / 2;
            const d2 = (cpx - cx) * (cpx - cx) + (cpy - cy) * (cpy - cy);
            if (d2 > R2) continue;
            const v = 1 - Math.sqrt(d2) / R;
            const i = y * g.cols + x;
            if (v > heat[i]) heat[i] = v;
          }
        }
      }
      qx = px; qy = py;
      if (!inside) { px = null; qx = null; }
    }

    const data = g.maskData.data;
    for (let i = 0, n = g.cols * g.rows; i < n; i++) {
      const h = heat[i];
      if (h <= 0.006) { if (h) heat[i] = 0; if (data[i * 4 + 3]) data[i * 4 + 3] = 0; continue; }
      heat[i] = h * decay;
      live++;
      data[i * 4 + 3] = (Math.min(1, Math.max(0, (h - 0.08) * 5.4)) * 255) | 0;
    }

    const ctx = g.ctx;
    ctx.clearRect(0, 0, g.W, g.H);
    if (live) {
      g.maskCtx.putImageData(g.maskData, 0, 0);
      ctx.imageSmoothingEnabled = true;
      ctx.drawImage(g.mask, g.offX, g.offY, g.cols * g.cellW, g.rows * g.cellW);
      ctx.globalCompositeOperation = 'source-in';
      if (g.plate) ctx.drawImage(g.plate, 0, 0, g.W, g.H);
      ctx.globalCompositeOperation = 'source-over';
    }
    if (!live && !inside && raf) { cancelAnimationFrame(raf); raf = null; }
  };

  const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(build) : null;
  if (ro && wrap) ro.observe(wrap);
  [bg, dither].forEach(im => {
    if (im && !im.complete) im.addEventListener('load', build, { once: true });
  });
  build();

  return {
    enter(){ inside = true; if (!grid || !grid.plate) build(); if (!raf) { t = performance.now(); loop(); } },
    move(e){
      if (!wrap) return;
      const r = wrap.getBoundingClientRect();
      px = e.clientX - r.left; py = e.clientY - r.top;
      inside = true;
      if (!raf) { t = performance.now(); loop(); }
    },
    leave(){ inside = false; },
    destroy(){ if (ro) ro.disconnect(); if (raf) cancelAnimationFrame(raf); raf = null; }
  };
}
