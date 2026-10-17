# CSG marketing assets

Every file in this folder, its size and where to use it. Colours, type and copy follow the website (assets/site.css). Facts and prices match the site.


## Brand

- `brand/logo.svg` (vector, 28 KB). Primary logo (mark and wordmark, text as outlines). Website, documents, light backgrounds.
- `brand/logo-white.svg` (vector, 28 KB). Logo with white wordmark. Dark (ink) backgrounds only.
- `brand/logo-mark.svg` (vector, 469 bytes). Mark only, vector. Favicons, app icons, small spaces.
- `brand/logo-512.png` (512x512, 21 KB). Mark on white. Profile pictures, directory listings, email signatures.
- `brand/logo-mark-dark-512.png` (512x512, 21 KB). Mark on ink. Dark-mode avatars and dark slides.
- `brand/brand-sheet.png` (1600x1000, 167 KB). Logo, colours, type scale, taglines and usage rules. Share with anyone making CSG material.

## LinkedIn

- `social/linkedin/01-intro.png` (1200x1200, 113 KB). LinkedIn post 1: introduction.
- `social/linkedin/02-proof-180.png` (1200x1200, 91 KB). LinkedIn post 2: 180+ errors stopped in a 30+ market launch.
- `social/linkedin/03-proof-290.png` (1200x1200, 94 KB). LinkedIn post 3: 290+ client projects planned, no unresolved clashes.
- `social/linkedin/04-proof-3-models.png` (1200x1200, 103 KB). LinkedIn post 4: 3 AI model families tested on accuracy and cost.
- `social/linkedin/05-catalogue-check.png` (1200x1200, 126 KB). LinkedIn post 5: free catalogue check for Shopify and WooCommerce.
- `social/linkedin/06-how-it-works.png` (1200x1200, 111 KB). LinkedIn post 6: the four steps.
- `social/linkedin/07-pricing.png` (1200x1200, 107 KB). LinkedIn post 7: published prices.
- `social/linkedin/08-cost-of-manual.png` (1200x1200, 101 KB). LinkedIn post 8: cost of manual work, links to the calculator.
- `social/linkedin/09-six-solutions.png` (1200x1200, 116 KB). LinkedIn post 9: the six solutions.
- `social/linkedin/10-rules.png` (1200x1200, 117 KB). LinkedIn post 10: six rules for every project.
- `social/linkedin/linkedin-banner.png` (1584x396, 47 KB). LinkedIn company page cover image. Text is centred so the logo overlay and mobile crop do not cover it.
- `social/linkedin/linkedin-logo.png` (400x400, 14 KB). LinkedIn company page logo.

## Video

- `video/csg-journey-film-16x9.mp4` (1920x1080, 63 s, H.264, music and synced sound design). **The main brand film:** one invoice followed from a manual mistake to our system catching it. Website (home page), YouTube, LinkedIn, presentations. Source and rebuild steps: `explainer/README.md`.
- `video/csg-journey-film-16x9-poster.jpg`. Poster frame for the main brand film.
- `video/csg-journey-film-9x16.mp4` (1080x1920, 63 s). The same film, vertical. Stories, Reels, Shorts, LinkedIn mobile.
- `video/csg-journey-film-9x16-poster.jpg`. Poster frame for the vertical film.
- `video/csg-film-16x9.mp4` (1920x1080, 16.0 s, H.264, no audio, 6.7 MB). Full brand film, 16:9. Website, YouTube, presentations, LinkedIn.
- `video/csg-film-16x9-poster.png` (1920x1080, 704 KB). Poster frame for the full film.
- `video/csg-teaser-15s-16x9.mp4` (1920x1080, 15.0 s, H.264, no audio, 4.2 MB). 15-second teaser, 16:9. Ends on the demo offer and URL. LinkedIn and X feed, ads.
- `video/csg-teaser-15s-16x9-poster.png` (1920x1080, 735 KB). Poster frame for the teaser.
- `video/csg-film-square-1080.mp4` (1080x1080, 22.3 s, H.264, no audio, 2.9 MB). Square cut with title and end cards. LinkedIn and Instagram feed.
- `video/csg-film-square-1080-poster.png` (1080x1080, 366 KB). Poster frame for the square cut.
- `video/csg-film-vertical-1080x1920.mp4` (1080x1920, 22.3 s, H.264, no audio, 3.0 MB). Vertical cut with title and end cards. Stories, Reels, Shorts, LinkedIn mobile.
- `video/csg-film-vertical-1080x1920-poster.png` (1080x1920, 531 KB). Poster frame for the vertical cut.

## Print

- `print/one-pager.pdf` (A4, 1 page, 332 KB). A4 capability sheet. Print, or attach to emails after a first call.
- `print/one-pager.png` (1588x2246, 380 KB). Preview of the one-pager. Email bodies, proposals, web.
- `print/sample-catalogue-check.pdf`. An example catalogue-check report on sample data, labelled as such. Attach to outreach so a prospect sees exactly what the free check returns.

## Notes

- LinkedIn posts are exact 1200x1200 pixels. Post them in number order.
- Square and vertical cuts open on "Less admin. Fewer errors. Same team." and end on "Free 20-minute demo. clarkesystemsgroup.com".
- Use amber only to show errors.

## Audio (marketing/audio/)

Every film carries an original score: calm felt piano, composed in code by `score.py`, so the business owns it outright (no samples, no stock library, no licence). Each is levelled to -16 LUFS, the loudness social platforms expect.

There is no voiceover yet. Generated voices were tried and rejected as not human enough; the voice will be a real person's recording. `mix_voice.sh` puts a recorded voice over any film (cleans it, lowers the music under each line, levels the result), working from the music-free masters in `video/silent/`.

| File | Length | Used in |
| --- | --- | --- |
| score-16x9.m4a | 16 s | csg-film-16x9.mp4 (resolves as the logo forms, 14 s) |
| score-teaser.m4a | 15 s | csg-teaser-15s-16x9.mp4 (resolves at 11.5 s) |
| score-social.m4a | 22.3 s | the square and vertical cuts (resolves on the end card, 17.3 s) |
