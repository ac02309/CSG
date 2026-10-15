# Clarke Systems Group website

The marketing site for [clarkesystemsgroup.com](https://www.clarkesystemsgroup.com/): plain HTML, CSS and JavaScript, hosted on Netlify. There is no build step, so what is in this repository is what is served.

## Layout

| Path | Contents |
|---|---|
| `*.html` | One file per page. `404.html` is served by Netlify for missing pages. |
| `assets/site.css` | All styles, light and dark themes. |
| `assets/site.js` | Shared behaviour: navigation, counters, contact form. |
| `assets/sort.js` | The scroll-driven WebGL background on the home page. |
| `og/` | Per-page social share images (1200×630). |
| `_headers` | Netlify security and caching headers. |
| `scripts/check-site.mjs` | Dependency-free site checks, also run in CI. |

## Before you push

```sh
node scripts/check-site.mjs        # links, anchors, structured data, page essentials, placeholders
npx html-validate@8.24.1 "*.html"  # HTML validity
```

Both run automatically on every push and pull request (`.github/workflows/checks.yml`).

When you change `assets/site.css`, `assets/site.js` or `assets/sort.js`, update the `?v=` value on every page that references it, so returning visitors don't get a stale copy.

## Contact form

The request form posts to **Netlify Forms**. If a submission can't be sent (for example when the page is opened locally), it falls back to opening a pre-written email in the visitor's email app, so no enquiry is lost.

To switch it on, in the Netlify dashboard:

1. **Forms → Enable form detection**, then redeploy. A form named `brief` should appear.
2. **Forms → Form notifications → Add notification → Email**, to `enquiries@clarkesystemsgroup.com`.

Optional attributes on `<form id="brief">` in `contact.html`:

- `data-booking="https://…"`: a scheduling link (Cal.com, Calendly, etc.). After a demo request is submitted, the confirmation offers a "Choose a time now" button.
- `data-endpoint="https://…"`: post to a different form service instead of Netlify Forms (JSON body). If you use one, name it in the privacy notice.

## Launch checklist

These need information only the business owner has:

- [ ] Business address in `terms.html` and `privacy.html` (CI warns while the placeholder remains).
- [ ] Enable Netlify form detection and email notifications (above).
- [ ] Optional: add a booking link via `data-booking`.
- [ ] Optional: privacy-friendly analytics (for example Plausible or Netlify Analytics). Add the provider's script domain to the Content-Security-Policy `<meta>` on each page, and mention it in the privacy notice.
