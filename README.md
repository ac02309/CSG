# Clarke Systems Group website

The marketing site for [clarkesystemsgroup.com](https://www.clarkesystemsgroup.com/): plain HTML, CSS and JavaScript, hosted on Netlify.

**Business details live in `site.config.json`.** Address, founder section, booking link, analytics, founding client programme and testimonials are all switched on from there. **[LAUNCH.md](LAUNCH.md)** explains every field and the decisions behind it.

## Layout

| Path | Contents |
|---|---|
| `*.html` | One file per page (23). `404.html` is served by Netlify for missing pages. Six solution pages (`integrations.html` … `internal-tools.html`), `solutions.html`, `approach.html`. |
| `assets/site.css` | The design system: light surfaces, Inter, tiles, stage panels, navigation. |
| `assets/site.js` | Shared behaviour: Solutions menu, mobile menu, local navigation, scroll story, counters, clocks, contact form, ROI calculator. |
| `assets/film.js` | The film: the 3D scene shown in dark stage panels. Built from `src/film` (do not edit by hand). |
| `assets/posters/` | A still of each shot, shown when a device cannot run WebGL. |
| `src/partials/` | `header.html` and `footer.html`: the navigation and footer on every page, applied by `configure.mjs`. Edit them here, never in a page. |
| `src/film/` | Film source: `main.js` (scene, records, globe, camera), `shots.js` (one shot per page), `land.js` (generated coastline points). |
| `og/` | Per-page social share images (1200×630). |
| `_headers` | Netlify security and caching headers. |
| `guides.html`, `guide-*.html` | Guides hub and long-form guides. |
| `site.config.json` | Owner-supplied details and feature switches. |
| `scripts/configure.mjs` | Applies the config to the pages and fingerprints CSS/JS references. Run by Netlify on every deploy. |
| `scripts/check-site.mjs` | Dependency-free site checks, also run in CI. |
| `netlify.toml`, `_redirects` | Netlify build command, and 404s for repository files that must not be served. |

## Before you push

```sh
node scripts/configure.mjs         # apply site.config.json and refresh asset fingerprints
node scripts/check-site.mjs        # links, anchors, structured data, page essentials, placeholders
npx html-validate@8.24.1 "*.html"  # HTML validity
```

All three run automatically on every push and pull request (`.github/workflows/checks.yml`).

Stylesheet and script references carry a content fingerprint (`?v=…`) so returning visitors never get a stale copy. `configure.mjs` updates them automatically, locally and on every Netlify deploy.

## The film

The 3D film plays inside dark, rounded stage panels: `<div class="stage"><canvas data-shot="…"></canvas>…</div>`. Each canvas is its own instance, sized to its panel, and only renders while on screen. The shot names are in `src/film/shots.js`. On the home page, the "From scattered work to finished results" section is a scroll story: its `[data-stage]` steps drive the `story` shot as you scroll.

Text never sits on top of the film. The numbers in it are real: 4,000 records (records validated) and 180 errors (errors intercepted), from the launch QA case study. Keep it that way.

To change it:

```sh
npm install                 # once
npm run build:film          # rebuild assets/film.js from src/film
node scripts/configure.mjs  # refresh the ?v= fingerprints
```

Reduced-motion visitors get a still frame that only changes as they scroll. Devices without WebGL2 get the poster for the shot (`assets/posters/<shot>.webp`); regenerate posters after changing a shot.

## Adding a page

Copy the closest existing page, keep the `<!-- cfg:header -->` and `<!-- cfg:footer -->` markers and set `data-nav` on `<body>` to the navigation section it belongs to (`solutions`, `work`, `services`, `approach`, `guides`, `faq`). Run `node scripts/configure.mjs`, then add the page to `sitemap.xml`.

## Contact form

The request form posts to **Netlify Forms**. If a submission can't be sent (for example when the page is opened locally, or before form detection is switched on), it falls back to opening a pre-written email in the visitor's email app, so no enquiry is lost. Setup steps are in [LAUNCH.md](LAUNCH.md#1-switch-on-the-contact-form-10-minutes-launch-blocker). To post to a different form service, set `data-endpoint` on `<form id="brief">` in `contact.html` (JSON body) and name the service in the privacy notice.

## Adding a guide

Copy an existing `guide-*.html`, replace the head metadata, headline, lede and the `.prose` body, add a card to `guides.html`, and add the page to `sitemap.xml`. Keep to the house style: British English, short declarative sentences, no invented statistics.
