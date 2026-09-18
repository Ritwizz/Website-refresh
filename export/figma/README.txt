Ritwiz Sharma — portfolio pages for Figma
=========================================

Figma has no importable ".fig" source format that can be generated outside Figma,
so these are the two routes that actually get these pages onto a Figma canvas as
editable layers (frames, text, images — not a flat screenshot):

1. html.to.design plugin (recommended)
   - Install "html.to.design" in Figma (Community plugins).
   - Easiest: run it on the live site URLs (ritwizsharma.com pages) — it fetches
     and converts the page into Figma layers.
   - Or use its "Import from file / paste code" option with the standalone files
     in this folder:
       Home.html          (word-cloud homepage + new header controls)
       About.html
       Shenanigans.html   (a few images load from the live site)
     Each is one self-contained file — no folder needed.

2. The six project pages (src/ folder)
   These are too image-heavy to inline into single files, so they ship as source:
       src/Aakaar-minimal.dc.html
       src/Ergoplay-minimal.dc.html
       src/Vita-minimal.dc.html
       src/Altr-minimal.dc.html
       src/ArtOfConcealing-minimal.dc.html
       src/Snapin-minimal.dc.html
       src/support.js        (must sit next to them)
   Keep the whole src/ folder together, open any file in a browser, or point
   html.to.design at the matching live URL.

Notes for experimenting in Figma
   - Type: Overused Grotesk (variable). Install it locally before importing or
     Figma will substitute it.
   - Accent colours: violet #9B8CFF, mint #8FD694, clay #F09070.
   - Neutrals: light bg #F7F5F0 / ink #131313 · dark bg #0F0D0C / ink #EDE9E4.
   - Pill radius is fully round (9999px); image corners are 16px.
   - Word-cloud pill fills: #10302B, #CFEBC6, #8A845F, #B7AEFB (cycled).
