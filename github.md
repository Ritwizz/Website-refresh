repo: Ritwizz/Website-refresh
branch: main
path: (repo root — no build in this project right now; sources are the `.dc.html` files)

## Last sync
date: 2026-09-19T00:00:00Z

### Updated in this project
- Site-wide consistency pass: one shell on all nine pages (sticky header, 1440px measure, `clamp(20px,3vw,48px)` padding, scroll-progress hairline, active-nav marker), one breakpoint set (1024/760/480), one loading plate, one five-step type scale, and a .62 contrast floor.
- Home rebuilt: mosaic alternates viewable and confidential work newest-first, Future Unit credits on the three collaborations, bottom index removed, hover veil no longer repeats the caption.
- Project pages: title/credits span the full content column, images wait for decode before revealing and fetch ~2.5 screens ahead, the `warm()` prefetch and the 120ms progress poll are gone.
- Off Hours back on-token (.16 hairlines, single #0B0B0B ground, full-opacity frames), keyboard-scrubbable filmstrips that run edge to edge and repeat to fill short sets.
- All CV artifacts deleted (`CV.dc.html`, `.tex`, `doc-page.js`, the PDF); `export/` was removed in the Sep 18 cleanup, so there is no deploy build to push — regenerate one when a deploy is wanted.
- Push is still manual: I can read repos but not commit.

## Screen map
No build exists at the moment — these are the deploy slugs to rebuild against.

| Project screen | Deploy slug |
| --- | --- |
| Home.dc.html | / |
| About.dc.html | /about (+ about-plate.js) |
| OffHours.dc.html | /off-hours (+ shenanigans-sets.js; 301 from /shenanigans) |
| Aakaar-minimal.dc.html | /aakaar |
| Ergoplay-minimal.dc.html | /ergoplay |
| Vita-minimal.dc.html | /vita |
| Altr-minimal.dc.html | /altr |
| ArtOfConcealing-minimal.dc.html | /art-of-concealing |
| Snapin-minimal.dc.html | /snapin |

## Sync history
- 2026-09-13T00:00:00Z — Shenanigans renamed Off Hours; GIFs → WebM and stills → WebP; six project pages flipped dark; asset folders pruned 1,240 → 334 files.
- 2026-08-20T00:00:00Z — About rebuilt as a CV table; Shenanigans responsive pass; about-plate.js + CV PDF added to the build.
- 2026-08-19T00:00:00Z — Home narrow layout 1d, project-page nav wrap, Shenanigans reel rebuild, all 9 pages re-exported.
- 2026-08-04T16:40:00Z — Home list-view fit pass; all 9 pages re-exported; 16 media files still absent on remote.
- 2026-08-04T12:15:00Z — full `export/netlify/` rebuild (283 assets at real paths, `assets/` removed); uploaded manually, media files did not transfer.
- 2026-07-28T20:45:00Z — connected the empty `Website-refresh` repo as deploy source; first `export/netlify/` build (no commits in repo yet).
