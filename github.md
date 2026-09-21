repo: Ritwizz/Website-refresh
branch: main
path: (repo root — Netlify publishes the root; the nine `.dc.html` pages are served at clean slugs via `_redirects`)

## Last sync
date: 2026-09-21T12:54:47Z
commit: 872bda7500c7 (tree at `main` when read; the ten restored images came from `main~1` = 9d302c2101c1)

### Updated in this project (Sep 21, later)
- Restored ten `uploads/opt/` images from `main~1` after a cleanup pass deleted them: a filename scan missed them because `shenanigans-sets.js` writes space-containing names `%20`-encoded. XOOX is back to 8 images, Artime 8, Praan HIVE 4, Snapin' Select 6. A comment at the top of that file now warns against scanning it without decoding.
- Off Hours a11y: only the first pass through a band's unique images is exposed — repeat-to-fill copies now carry `aria-hidden` like the drift duplicates.
- Live: ritwizsharma.com now resolves to Netlify (A `@` → 75.2.60.5, CNAME `www` → imaginative-jalebi-2ab705.netlify.app, DNS still hosted at Wix); HTTPS provisioned for apex + www.

### Updated in this project (Sep 21)
- Source/deploy duplication removed: the nine generated slug pages (`index.html`, `about.html`, …) are deleted and the `.dc.html` pages are now served directly at clean URLs by `_redirects` 200-rewrites.
- `-minimal` dropped from the six project page filenames.
- `nav-slugs.js` added — routes slug links to sibling `.dc.html` files when a page is opened as a file, so editor-preview navigation still works.
- `scraps/` deleted (102 working files, unreferenced).

### Updated in the Sep 19 sync

### Updated in this project
- Site-wide consistency pass: one shell on all nine pages (sticky header, 1440px measure, `clamp(20px,3vw,48px)` padding, scroll-progress hairline, active-nav marker), one breakpoint set (1024/760/480), one loading plate, one five-step type scale, and a .62 contrast floor.
- Home rebuilt: mosaic alternates viewable and confidential work newest-first, Future Unit credits on the three collaborations, bottom index removed, hover veil no longer repeats the caption.
- Project pages: title/credits span the full content column, images wait for decode before revealing and fetch ~2.5 screens ahead, the `warm()` prefetch and the 120ms progress poll are gone.
- Off Hours back on-token (.16 hairlines, single #0B0B0B ground, full-opacity frames), keyboard-scrubbable filmstrips that run edge to edge and repeat to fill short sets.
- All CV artifacts deleted (`CV.dc.html`, `.tex`, `doc-page.js`, the PDF); `export/` was removed in the Sep 18 cleanup, so there is no deploy build to push — regenerate one when a deploy is wanted.
- Deploy pages regenerated at the repo root (nine slugged `.html` files + `_redirects`) after Netlify 404'd on a root with no `index.html`. They reuse the existing asset folders in place, so no media is duplicated.
- Push is still manual: I can read repos but not commit.

## Screen map
Generated from the sources; regenerate after any source edit.

| Project screen | Deploy file → slug |
| --- | --- |
| Home.dc.html | / |
| About.dc.html | /about (+ about-plate.js) |
| OffHours.dc.html | /off-hours (+ shenanigans-sets.js; 301 from /shenanigans) |
| Aakaar.dc.html | /aakaar |
| Ergoplay.dc.html | /ergoplay |
| Vita.dc.html | /vita |
| Altr.dc.html | /altr |
| ArtOfConcealing.dc.html | /art-of-concealing |
| Snapin.dc.html | /snapin |

## Sync history
- 2026-09-13T00:00:00Z — Shenanigans renamed Off Hours; GIFs → WebM and stills → WebP; six project pages flipped dark; asset folders pruned 1,240 → 334 files.
- 2026-08-20T00:00:00Z — About rebuilt as a CV table; Shenanigans responsive pass; about-plate.js + CV PDF added to the build.
- 2026-08-19T00:00:00Z — Home narrow layout 1d, project-page nav wrap, Shenanigans reel rebuild, all 9 pages re-exported.
- 2026-08-04T16:40:00Z — Home list-view fit pass; all 9 pages re-exported; 16 media files still absent on remote.
- 2026-08-04T12:15:00Z — full `export/netlify/` rebuild (283 assets at real paths, `assets/` removed); uploaded manually, media files did not transfer.
- 2026-07-28T20:45:00Z — connected the empty `Website-refresh` repo as deploy source; first `export/netlify/` build (no commits in repo yet).
