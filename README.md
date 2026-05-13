# Pro Impact Distribuitors — Website

The marketing site for **Pro Impact Distribuitors**, an impact window and door distribution company serving Florida and Texas.

Single-page, static HTML/CSS/JS — no framework, no build step. Just open `index.html`.

## Structure

```
.
├── index.html          # Page markup
├── styles.css          # All styles (CSS variables, responsive grid, animations)
├── script.js           # Nav scroll state, reveal-on-scroll, animated counters
├── assets/
│   └── hero-loop.mp4   # Cinematic looping background video (Seedance 2 generated)
└── README.md
```

## Sections

1. **Hero** — Fullscreen looping video background with animated headline slide-in.
2. **Partner** — Value proposition + animated counter stats.
3. **Products** — Six product categories (windows, doors, sliding, French, commercial, custom).
4. **Why Us** — Six-point advantage grid.
5. **Coverage** — Florida + Texas service areas with stylized map.
6. **Contact / CTA** — Email, phone, hours, request-a-quote button.
7. **Footer** — Brand mark, copyright, tagline.

## Local preview

Open `index.html` directly in a browser, or serve the folder:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Then visit http://localhost:8000.

## Editing copy

- **Headline tagline:** `index.html` → `.hero-title` (line ~50)
- **Tagline / footer:** `index.html` → `.footer-tagline`
- **Contact info:** `index.html` → `.contact-grid` (email, phone, hours)
- **Stats:** `index.html` → `.partner-stats` — change `data-count` values
- **Brand colors:** `styles.css` → `:root` → `--brand-red`, `--brand-blue`

## Hero video

The looping background video lives at `assets/hero-loop.mp4`. To replace it, drop in a new MP4 with the same filename. The CSS expects ~10s loops at 16:9 aspect.

## Deploy

Drop the entire folder on:

- **Netlify** — drag-and-drop deploy
- **Vercel** — `vercel deploy`
- **GitHub Pages** — push to `main`, enable Pages on root
- **Cloudflare Pages** — connect repo

No build step required.
