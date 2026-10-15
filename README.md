# Clarke Systems Group website

The marketing site for [clarkesystemsgroup.com](https://www.clarkesystemsgroup.com/): plain HTML, CSS and JavaScript, hosted on Netlify.

**Business details live in `site.config.json`.** Address, founder section, booking link, analytics, founding client programme and testimonials are all switched on from there. **[LAUNCH.md](LAUNCH.md)** explains every field and the decisions behind it.

## Layout

| Path | Contents |
|---|---|
| `*.html` | One file per page (23). `404.html` is served by Netlify for missing pages. Six solution pages (`integrations.html` … `internal-tools.html`), `solutions.html`, `approach.html`. |
| `assets/site.css` | The design system: mist and white surfaces, midnight ink, one aqua-to-cobalt signal gradient, amber only for errors. Inter, tiles, navigation. |
| `assets/site.js` | Shared behaviour: Solutions menu, mobile menu, local navigation, scroll story, counters, clocks, contact form, ROI calculator. |
| `assets/film.js` | The scene: one transparent 3D layer behind every page. Built from `src/film` (do not edit by hand). |
| `assets/posters/` | A transparent still of each formation, shown when a device cannot run WebGL. |
| `src/partials/` | `header.html` and `footer.html`: the navigation and footer on every page, applied by `configure.mjs`. Edit them here, never in a page. |
| `src/film/` | Scene source: `main.js` (records, formations, the line, globe, gate), `land.js` (generated coastline points). |
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

## The scene

One transparent canvas (`<canvas id="scene">`) sits behind the whole page. It is not in a box: the page's own layout places it. Each `<div class="slot" data-form="…">` in the markup is a place where the 4,000 records gather into a formation, beside the text it illustrates:

| `data-form` | Formation |
| --- | --- |
| `orbit` | The globe, with records orbiting it (worldwide). |
| `line` | Records on one straight conveyor (direct). |
| `gate` | Every record checked; failures held back with the reason (no nonsense). |
| `a` | The result, set by `data-stat-a` on `<body>`: `stacks:1,2,3,4`, `stacks:1,1,1,1,1` (even capacity), `bins:6,3,5,2,4,3,5,2` (classification) or `broken` (404). |
| `b` | The Clarke Systems Group mark (the call to action). |

A single gradient line runs from the top of the page through every slot, weaving through the margins between them, and draws itself as you scroll. As the reader moves from one slot to the next, the formation dissolves, a stream of records rides the line down the page, and the next formation assembles. Slot sizes come from CSS (`.slot`, `.slot.wide`, `.slot.cinema`), so the scene follows every breakpoint.

Text never sits on a formation. The numbers in it are real: 4,000 records (records validated) and 180 errors (errors intercepted), from the launch QA case study. Keep it that way.

To change it:

```sh
npm install                 # once
npm run build:film          # rebuild assets/film.js from src/film
node scripts/configure.mjs  # refresh the ?v= fingerprints
```

Reduced-motion visitors get still formations that only change as they scroll. Devices without WebGL2 get each slot's poster (`assets/posters/<form>.webp`). To regenerate a poster, open a page holding only that slot with `?still=0&poster` (freezes the frame and hides the line) and screenshot it with a transparent background.

## Adding a page

Copy the closest existing page, keep the `<!-- cfg:header -->` and `<!-- cfg:footer -->` markers and set `data-nav` on `<body>` to the navigation section it belongs to (`solutions`, `work`, `services`, `approach`, `guides`, `faq`). Run `node scripts/configure.mjs`, then add the page to `sitemap.xml`.

## Contact form

The request form posts to **Netlify Forms**. If a submission can't be sent (for example when the page is opened locally, or before form detection is switched on), it falls back to opening a pre-written email in the visitor's email app, so no enquiry is lost. Setup steps are in [LAUNCH.md](LAUNCH.md#1-switch-on-the-contact-form-10-minutes-launch-blocker). To post to a different form service, set `data-endpoint` on `<form id="brief">` in `contact.html` (JSON body) and name the service in the privacy notice.

## Adding a guide

Copy an existing `guide-*.html`, replace the head metadata, headline, lede and the `.prose` body, add a card to `guides.html`, and add the page to `sitemap.xml`. Keep to the house style: British English, short declarative sentences, no invented statistics.
