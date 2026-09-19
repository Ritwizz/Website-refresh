repo: Ritwizz/Website-refresh
branch: main
path: (repo root — Netlify publishes the root; generated `*.html` slugs sit beside the `.dc.html` sources)

## Last sync
date: 2026-09-19T00:00:00Z

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
| Home.dc.html | index.html → / |
| About.dc.html | about.html → /about (+ about-plate.js) |
| OffHours.dc.html | off-hours.html → /off-hours (+ shenanigans-sets.js; 301 from /shenanigans) |
| Aakaar-minimal.dc.html | aakaar.html → /aakaar |
| Ergoplay-minimal.dc.html | ergoplay.html → /ergoplay |
| Vita-minimal.dc.html | vita.html → /vita |
| Altr-minimal.dc.html | altr.html → /altr |
| ArtOfConcealing-minimal.dc.html | art-of-concealing.html → /art-of-concealing |
| Snapin-minimal.dc.html | snapin.html → /snapin |

## Sync history
- 2026-09-13T00:00:00Z — Shenanigans renamed Off Hours; GIFs → WebM and stills → WebP; six project pages flipped dark; asset folders pruned 1,240 → 334 files.
- 2026-08-20T00:00:00Z — About rebuilt as a CV table; Shenanigans responsive pass; about-plate.js + CV PDF added to the build.
- 2026-08-19T00:00:00Z — Home narrow layout 1d, project-page nav wrap, Shenanigans reel rebuild, all 9 pages re-exported.
- 2026-08-04T16:40:00Z — Home list-view fit pass; all 9 pages re-exported; 16 media files still absent on remote.
- 2026-08-04T12:15:00Z — full `export/netlify/` rebuild (283 assets at real paths, `assets/` removed); uploaded manually, media files did not transfer.
- 2026-07-28T20:45:00Z — connected the empty `Website-refresh` repo as deploy source; first `export/netlify/` build (no commits in repo yet).
