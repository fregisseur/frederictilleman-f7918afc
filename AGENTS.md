# Project conventions

- Position margin-only decorative drawings relative to their full-width section, independently of text containers, so cropping never shifts page content.
- Deliver uploaded decorative PNGs (scribbles) as plain files in `public/images/scribbles/` (lowercase, hyphenated) referenced by absolute path, never as Lovable-assets CDN pointers: `/__l5e/...` URLs resolve to the SPA fallback here, so the drawings never render.