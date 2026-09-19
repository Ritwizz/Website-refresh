# Project notes — Ritwiz Sharma portfolio

- Always keep photos/imagery full-color — never grayscale or tint them. Monochrome/B&W directions apply to UI (text, blocks, borders) only.
- Only edit the `.dc.html` sources. There is no deploy build in the project right now (see Sep 18 cleanup); regenerate one only when asked.

## Live page set (Sep 18)
`Home.dc.html`, `About.dc.html`, `OffHours.dc.html`, six `*-minimal.dc.html` project pages (Snapin, Aakaar, Ergoplay, Vita, Altr, ArtOfConcealing). No CV in the project — `CV.dc.html`, `Ritwiz_Sharma_CV.tex`, `doc-page.js` and the PDF were deleted Sep 18; the About page no longer offers a CV download. Revisit when a CV is wanted again.

## Design system
- Dark-only: ground #0B0B0B (the ONLY background — no second dark), ink #F4F2EE, hairlines `rgba(244,242,238,.16)` everywhere. Muted ink has a **hard floor of .62** — nothing below it renders text, ever (.55 survives only on inactive nav links, which are 12.5px/600 on a sticky bar). .62–.74 secondary, .82–.86 body. Site accent #2E6BFF. Per-project accents are gone: they only ever existed in bundler thumbnails, never on a page.
- Overused Grotesk everywhere; headings weight 700; rounded-rect chips (.66em radius); no rounded corners on dropdowns/panels.
- Type scale — five steps, nothing between them: 12.5px/500 (nav, captions, credits, years, footers, labels), 15.5px (body + list items), clamp(17px,1.7vw,24px)/400 (page statements: Home masthead, About intro), clamp(20px,2.3vw,32px)/700 (section statements), clamp(34px,5.6vw,76px)/600 (H1). Off Hours band titles use clamp(26px,3.6vw,48px). Titles are title case — never all caps.
- Shared shell on all nine pages: sticky header, `max-width:1440px`, `padding:clamp(20px,3vw,48px)`, `box-sizing:border-box`, a 1px hairline under the header carrying a white scroll-progress fill, and a footer on the same column. Header is `1fr auto 1fr` (wordmark / nav / Contact); under 760px the nav drops to its own full-width row. Wordmark reads "Ritwiz Sharma — Industrial Designer" on Home only (that's where he introduces himself) and "Ritwiz Sharma" everywhere else. The current section is marked by `font-weight:600` at full ink; the others sit at .55 and brighten to full on hover (`.rwNav a:hover`).
- One breakpoint set site-wide: 1024 (multi-column → stacked), 760 (nav wraps, grids to one column), 480 (tighten). No other values.
- Footers never repeat what the page already says: Home = wordmark + social (LinkedIn/Behance/Instagram); project pages = Email/Behance/LinkedIn (no contact elsewhere on the page); About = onward links only, Index → and Off Hours → (its contact block is already at the top); Off Hours = the email address (Instagram is in the band credits).
- One loading treatment: a fixed #0B0B0B plate, bottom-left label + two-digit %, and a 1px hairline bar that fills, then fades over 720ms. Used by the six project pages and Off Hours. Home has no plate — it stagger-reveals tiles with `clip-path` instead.
- `prefers-reduced-motion` must be honoured on every page: Home kills tile/intro animation, project pages the reveal, Off Hours both the auto-drift interval and the assemble choreography.
- Images are never dimmed, at rest or otherwise (Off Hours used to hold frames at .86 — don't reintroduce it). Hover scales, it does not brighten.
- Emojis live ONLY in the About marquee — nowhere else.
- Confidential (under-agreement) work on Home: company-name links + year + generic descriptor only; hovering those tiles fades in a dark veil reading "Under agreement — work not shown" + domain. On touch (`hover:none`) the veil is hidden, so every caption carries a visible "Under agreement" line as the real signal. The six case-study tiles instead cross-fade to a second render (the Home image fade-in script must keep skipping `img.alt` overlays, or the overlays get pinned visible by an inline opacity).
- Home mosaic alternates viewable and confidential work, newest first, so no two dead-end tiles sit together: Innate (NDA) · Aakaar · Posha (NDA) · Snapin' · Sonic Lamb (NDA) · Ergoplay · Brewtal (NDA) · Vita · Tangible (NDA) · Altr · The art of concealing. Innate, Posha and Tangible are Future Unit collaborations — their captions must credit "with Future Unit ↗" (futureunit.design). Tangible's descriptor says "Home robot" because the firm isn't well known and the imagery alone doesn't read as robotics.
- The Home bottom index was removed Sep 18 — the mosaic captions are the index. Don't re-add it.

## Sep 18 cleanup
- Dead cursor-tag layer removed from all six project pages: `#rwCursorTag` element + media-query rule, the `data-cap` caption-wrapper/`syncCaps` machinery, and the mousemove/scroll/resize handlers with their unmount cleanup. `justifyRows`, the boot screen and the progress bar remain live.
- Deleted: `export/` (stale Netlify build + `missing-media` GIF backups), `wix-embed/`, `25th July/`, `Final 19th July/`, `Home-v1-wordcloud.dc.html`, the superseded `uploads/Ritwiz_Sharma_2026_CV.pdf`.
- `web/aakaar/` IS live (the Aakaar page loads from it) — don't prune it. `uploads/opt/` is live too: `shenanigans-sets.js` references those files as array literals, so a `src="…"`-only scan reports them as orphans.
## Sep 18 consistency pass (audit closed)
Everything the audit listed is now fixed in the sources: one shell (measure, padding, sticky header, progress hairline, active-nav marker), one breakpoint set, one loading treatment, one type scale, a .62 contrast floor, per-page footers, and `og:image` + description on all nine pages. Off Hours is back on-token (.16 hairlines, single #0B0B0B ground, full-opacity frames) and its filmstrips are keyboard-scrubbable (tracks are `tabindex="0"`, arrow keys step one cell and pause the drift; duplicated cells are `aria-hidden`).
- Case-study structure: Snapin (client work) keeps Brief / Constraints; the personal and self-directed projects don't get invented brief sections. What IS uniform is the order — opening statement, then hero, then the work, with the long account reachable rather than buried. Section labels stay as they are; they're deliberately quiet.
- The `warm()` prefetch was deleted from all six project pages — it was force-fetching every `loading="lazy"` image right after boot, which cancelled lazy loading entirely. Lazy loading now actually works; don't re-add a prefetch.
- Scroll-progress bars are driven by a passive `scroll`/`resize` listener, not a `setInterval` poll (the 120ms interval is gone from the project pages).
- The mailto subject prefill ("Ritwiz, work with me!") was removed everywhere — plain `mailto:ritwizsharma1@gmail.com`.
- Name strings are canonical: "Snapin' Street", "Aakaar" (title case), "Tangible Robotics", "Future Unit", "CORE Experience".

## History
- Sep 13: `Shenanigans.dc.html` renamed to `OffHours.dc.html` (nav label and title "Off Hours"); data file is still `shenanigans-sets.js`. Deploy slug should be `/off-hours` with a 301 from `/shenanigans`.
- Sep 12: the six project pages flipped to dark to match the rest of the site.
- Sep 3: all nine GIFs replaced with WebM `<video autoplay loop muted playsinline preload="metadata">`; the Off Hours template has an `im.isVid` branch.
- Aug 18: Off Hours rebuilt on the dark Home language — six horizontal filmstrip bands with auto-drift + drag scrub. Hover tags (`data-cap`) stripped from project pages; project sections use sequential `Images N` labels.
- Aug 3: every Wix CDN image pulled local; no page loads `static.wixstatic.com`.
