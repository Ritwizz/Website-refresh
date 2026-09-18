Assets used by ritwizsharma.com, grouped by file type.
Original folder paths are preserved inside each type folder, so converted
files can be dropped straight back into the site at the same path.

294 files total

  jpg  221  -> convert to WebP, max 1600px, quality 80
  png   27  -> convert to WebP (the snapin/ renders are the heaviest stills)
  webp  27  -> already optimised, no action
  gif    9  -> convert to WebM (CRF ~34) + MP4 fallback (CRF ~26)
  mp4    9  -> already video, no action
  pdf    1  -> CV, no action

Priority: the 9 GIFs are ~68 MB, most of the site's total weight.
Do those first — Shutter Encoder, function WebM, then again as H.264.
Stills: XnConvert or ImageMagick, resize longest side 1600 "reduce only".

Send the converted folders back and the markup will be rewired to match.
