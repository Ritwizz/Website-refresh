repo: Ritwizz/Website-refresh
branch: main
path: (repo root — deployable site is this project's `export/netlify/`)

## Last sync
date: 2026-09-13T00:00:00Z

### Updated in this project
- Shenanigans renamed Off Hours: `OffHours.dc.html`, deploy slug `/off-hours`, 301s from `/shenanigans` and the old `.dc.html` URLs. Loader count now derives from the set data.
- All nine GIFs replaced with WebM video; all 248 stills converted to WebP. Off Hours gained the Robb's Coffee set (now 7 sets) and per-image aspect ratios so lazy-loading can't deadlock.
- Six project pages flipped to dark; footer "Index", the header year and the duplicate "Off hours" label dropped site-wide; Instagram promoted to a large link under the Off Hours title.
- Dead code pruned (unused keyframes/classes/vars, a broken `shRise` animation, duplicate font preconnects); asset folders pruned 1,240 → 334 files.
- Push is still manual: I can read repos but not commit, so `export/netlify/` has to be pushed or dropped into Netlify by hand.

## Screen map
| Project screen | Deploy file |
| --- | --- |
| Home.dc.html | export/netlify/index.html |
| About.dc.html | export/netlify/about.html (+ about-plate.js) |
| OffHours.dc.html | export/netlify/off-hours.html (+ shenanigans-sets.js) |
| Aakaar-minimal.dc.html | export/netlify/aakaar.html |
| Ergoplay-minimal.dc.html | export/netlify/ergoplay.html |
| Vita-minimal.dc.html | export/netlify/vita.html |
| Altr-minimal.dc.html | export/netlify/altr.html |
| ArtOfConcealing-minimal.dc.html | export/netlify/art-of-concealing.html |
| Snapin-minimal.dc.html | export/netlify/snapin.html |

## Sync history
- 2026-08-20T00:00:00Z — About rebuilt as a CV table; Shenanigans responsive pass; about-plate.js + CV PDF added to the build.
- 2026-08-19T00:00:00Z — Home narrow layout 1d, project-page nav wrap, Shenanigans reel rebuild, all 9 pages re-exported.
- 2026-08-04T16:40:00Z — Home list-view fit pass; all 9 pages re-exported; 16 media files still absent on remote.
- 2026-08-04T12:15:00Z — full `export/netlify/` rebuild (283 assets at real paths, `assets/` removed); uploaded manually, media files did not transfer.
- 2026-07-28T20:45:00Z — connected the empty `Website-refresh` repo as deploy source; first `export/netlify/` build (no commits in repo yet).
