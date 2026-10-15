# Clarke Systems Group website

The marketing site for [clarkesystemsgroup.com](https://www.clarkesystemsgroup.com/): plain HTML, CSS and JavaScript, hosted on Netlify.

**Business details live in `site.config.json`.** Address, founder section, booking link, analytics, founding client programme and testimonials are all switched on from there. **[LAUNCH.md](LAUNCH.md)** explains every field and the decisions behind it.

## Layout

| Path | Contents |
|---|---|
| `*.html` | One file per page (23). `404.html` is served by Netlify for missing pages. Six solution pages (`integrations.html` … `internal-tools.html`), `solutions.html`, `approach.html`. |
| `assets/site.css` | The design system: mist and white surfaces, midnight ink, one aqua-to-cobalt signal gradient, amber only for errors. Inter, tiles, navigation. |
| `assets/site.js` | Shared behaviour: Solutions menu, mobile menu, local navigation, scroll story, counters, clocks, contact form, ROI calculator. |
| `assets/film.js` | The 3D formations, one small canvas per slot. Built from `src/film` (do not edit by hand). |
| `assets/motion.js` | Scroll-driven motion for every page. |
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

## The scene and the motion

**3D (`assets/film.js`, source `src/film/main.js`).** Each `<div class="slot" data-form="…">` gets its own small transparent canvas. It scrolls with the page like any other element, so it never lags behind the text. It is only drawn while on screen. Formations:

| `data-form` | Formation |
| --- | --- |
| `orbit` | The globe, with records orbiting it (worldwide). |
| `scatter` | Loose records drifting: the manual work, before. |
| `line` | Records on one straight conveyor (direct). |
| `gate` | Every record checked; failures held back with the reason (no nonsense). |
| `a` | The result, set by `data-stat-a` on `<body>`: `stacks:1,2,3,4`, `stacks:1,1,1,1,1` (even capacity), `bins:6,3,5,2,4,3,5,2` (classification) or `broken` (404). |
| `grid` | A live, tidy sheet of records (reports and dashboards). |
| `b` | The Clarke Systems Group mark (the call to action). |

`data-forms="scatter,line,gate,a"` inside the `[data-drive]` section plays the formations in order, following the step the story is showing.

**Motion (`assets/motion.js`).** Every effect is a pure function of the scroll position, measured against layout read once per resize, so fast, slow or backwards scrolling always shows a correct frame:

- `[data-split]`: headline words rise into place.
- `[data-fill]`: a statement fills in as it is read.
- `[data-drive]`: the home story. All four `[data-step]` items are listed beside the scene; once in view it plays them (about 2.8 seconds each, the whole story in about 11 seconds), then rests on the finished state. It plays again from step 1 whenever it comes back on screen after leaving it. Clicking a step plays from that step. The page itself never stops scrolling.
- `[data-hscroll]`: cards travel sideways on wide screens and become a swipeable row elsewhere.
- `[data-focus]`: a typographic list with the centre line in focus.
- `[data-strike]`: before and after, with today's manual work struck out.
- `[data-draw]`: a process line that draws itself.
- `[data-drift]`: the ethos in giant type that slides with the scroll.
- `[data-tally]`: numbers count up quickly (0.8 s) once in view, and are always complete by the time they reach the middle of the screen.
- `.fold`: every section after the first rises into place, hinged at its top edge, and is perfectly flat by the time it reaches the reading area.
- `.build-rail`: on wide screens, one isometric block per section in the right margin; the page's stack is built as it is read. Hover names the section; click jumps to it.
- `.spot`: cards that catch light under the pointer.

The page generator adds `data-split` to every `h1` and section `h2`.

Each 3D formation is used on one page only (home: orbit, the story and the mark; Integrations: link; AI processing: bins; Reporting: report (data streaming into a dashboard that refreshes itself); Quality checks: scan; Scheduling: gantt; Internal tools: kanban; 404: the broken line). Scenes below the fold are built by the scroll that brings them in, so they cannot finish out of sight. Text never sits on a formation. The numbers in it are real: 4,000 records (records validated) and 180 errors (errors intercepted), from the launch QA case study. Keep it that way.

To change it:

```sh
npm ci                      # once: install the exact build tools from package-lock.json
npm run build:film          # rebuild assets/film.js from src/film
node scripts/configure.mjs  # refresh the ?v= fingerprints
python3 -m http.server 8000 # then open http://localhost:8000
```

Reduced-motion visitors get every element in its finished state, and still formations. Devices without WebGL2 get each slot's poster (`assets/posters/<form>.webp`). To regenerate a poster, open a page holding only that slot with `?still=0&poster` (freezes the frame and hides the line) and screenshot it with a transparent background.

## Adding a page

Copy the closest existing page, keep the `<!-- cfg:header -->` and `<!-- cfg:footer -->` markers and set `data-nav` on `<body>` to the navigation section it belongs to (`solutions`, `work`, `services`, `approach`, `guides`, `faq`). Run `node scripts/configure.mjs`, then add the page to `sitemap.xml`.

## Contact form

The request form posts to **Netlify Forms**. If a submission can't be sent (for example when the page is opened locally, or before form detection is switched on), it falls back to opening a pre-written email in the visitor's email app, so no enquiry is lost. Setup steps are in [LAUNCH.md](LAUNCH.md#1-switch-on-the-contact-form-10-minutes-launch-blocker). To post to a different form service, set `data-endpoint` on `<form id="brief">` in `contact.html` (JSON body) and name the service in the privacy notice.

## Adding a guide

Copy an existing `guide-*.html`, replace the head metadata, headline, lede and the `.prose` body, add a card to `guides.html`, and add the page to `sitemap.xml`. Keep to the house style: British English, short declarative sentences, no invented statistics.

## Security and readiness

- `SECURITY.md` explains how to report a vulnerability. The same contact is published at `/.well-known/security.txt`.
- `docs/READINESS.md` is a line-by-line production-readiness review: what is in place (with evidence), what doesn't apply to a static site, and what the owner still has to do.
