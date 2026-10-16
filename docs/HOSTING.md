# Hosting for a stunt: decision and runbook

Researched 16 Oct 2026. Sources are listed at the end. Nothing here has been switched over. **The decision is yours.**

## The problem in numbers

**Netlify Free** gives 300 credits a month. You can't buy more on this plan. What uses them:

| Usage | Cost in credits |
|---|---|
| A production deploy | 15 (so 20 deploys and nothing else uses the month) |
| Bandwidth | 20 per GB |
| Web requests | 2 per 10,000 |
| Function compute | 10 per GB-hour, charged on the *configured* memory (default 1 GB), not on what the function actually uses |
| Forms | free |
| Previews and branch deploys | free |

**At the limit, every site on the team pauses.** Visitors see "Site not available". Form submissions are dropped and deploys are blocked. No source says the old version keeps serving.

| Traffic | Credits needed | Fits on Free? |
|---|---|---|
| ~15,000 visits (0.7 MB each, ~30 requests) | ~300 | Uses up the month |
| 200,000 visits in a stunt week | ~4,000 | 13× over |
| 20,000 instant checks (2 s × 1 GB) | ~111 | On its own, yes |

## Options

| | Monthly cost | Survives 200k visits | Effort | Main risk |
|---|---|---|---|---|
| **A. Stay on Netlify Free, deploy at most once a day** | £0 | No | None | Site pauses at the peak of the stunt |
| **B. Netlify Pro** ($20 for 3,000 credits, +1,500 per $10) | ~$30–40 in a stunt month | Yes | None: upgrade in Netlify → Billing | Cost scales with success |
| **C. Cloudflare Pages for www, Netlify only redirects the bare domain** | £0 | Yes. Static files are free and unlimited; functions get 100,000 requests a day | About 1 hour of settings, already built and tested here | See the risks below |

**Recommendation: C at £0. Use B if you'd rather pay to avoid any switch-over.** B works in two minutes and can be cancelled afterwards. C is ready to switch on.

**Risks with option C:**
- **Shopify may block Cloudflare's servers.** Shopify could rate-limit or block requests from Cloudflare's network. Test with 10 real stores on the preview address before switching DNS (step 4). If many fail with "turning away automated requests", keep `/api/check` on Netlify (see the fallback below).
- **CPU limit on the free plan.** Each request gets 10 ms of CPU. The check therefore reads the first 250 products, not 500, and says so on the page. Waiting on the network doesn't count toward the 10 ms.
- **Daily function quota.** If the 100,000-requests-a-day function quota runs out, set the project to "fail open" so pages keep serving and only the check pauses. Workers Paid ($5/month) lifts the quota.
- **Bare-domain redirect.** The apex still depends on Netlify. If the Netlify team pauses, `clarkesystemsgroup.com` stops redirecting, but `www` stays up. So put `https://www.` in every stunt link.

## What is already built (branch `stunt-foundations`)

| File | What it does |
|---|---|
| `functions/api/check.js` | The instant check as a Cloudflare Pages Function. It uses the same `check-core.mjs` as Netlify, resolves DNS over HTTPS, uses the edge cache for the 15-minute result cache and the rate limit, and reads 1 page (set `CHECK_MAX_PAGES=2` on the paid plan). |
| `functions/api/lead.js` | Stores both site forms (catalogue-check and the contact brief) in Cloudflare D1. It stores no IP address and has a honeypot. |
| `functions/api/leads.js` | `GET /api/leads` with `Authorization: Bearer <LEADS_KEY>` returns the CSV the engine reads (`python -m outreach inbound leads.csv`). `?mark=1` marks rows as exported; `?form=brief` returns contact requests. Without the key it returns 404. |
| `scripts/build-pages.mjs` | Builds `dist/`: public files only, extensionless URLs (Pages redirects `/x.html` to `/x`), forms pointed at `/api/lead`. The build fails on any broken link. |
| `apex-redirect` branch | A Netlify site that only 301s the bare domain to www. |

**Tests:**
- `tests/pages-functions.test.mjs` runs the functions in Node against a real SQLite.
- The functions were also run in Cloudflare's own runtime locally (`wrangler pages dev`). Pages, headers, the `.html` → extensionless redirect, the repo-file 404s, the lead form, the CSV export and its key check all passed.
- A live store check from Cloudflare's runtime could not be tested from this workspace, because the network blocks it. That is step 4 below.

## Runbook for option C

Keep the one.com nameservers and leave the email records (MX, SPF, DKIM, DMARC) alone throughout.

1. **Create the Pages project.**
   - Cloudflare dashboard → Workers & Pages → Create → Pages → connect GitHub repo `ac02309/CSG`.
   - Project name: `clarkesystemsgroup`. The functions only accept requests from that name's `pages.dev` addresses.
   - Production branch: `main`.
   - Build command: `node scripts/configure.mjs && node scripts/build-pages.mjs`.
   - Output directory: `dist`.
   - Environment variable: `NODE_VERSION = 22`.
2. **Set up lead storage.**
   - Workers & Pages → D1 → Create database `csg-leads`.
   - In the Pages project → Settings → Bindings → add a D1 binding named `LEADS` pointing to `csg-leads`.
   - Under Variables, add `LEADS_KEY` as a secret: a random string of 32 or more characters. Keep it in a password manager.
3. **Set the project to fail open.** Settings → Functions → Fail open, so pages still load if the daily quota runs out.
4. **Test on `<project>.pages.dev` before touching DNS.**
   - Run the instant check on 10 real Shopify stores.
   - Submit both forms.
   - Run `curl -H "Authorization: Bearer $KEY" https://<project>.pages.dev/api/leads` and confirm the rows are there.
   - If checks fail with "turning away automated requests", stop and use the fallback below.
5. **Add the custom domain in Pages first.** Custom domains → add `www.clarkesystemsgroup.com`. Cloudflare then shows the CNAME target.
6. **Switch www at one.com.** In the one.com DNS panel, change `www` to a CNAME pointing to `<project>.pages.dev`.
   - Check for CAA records. If one exists, it must allow Cloudflare's certificate authorities.
   - Wait until `https://www.clarkesystemsgroup.com` shows a valid certificate.
7. **Wait 24–48 hours for DNS to propagate,** then point Netlify at the redirect-only branch:
   - Netlify → Site configuration → Build & deploy → Branches → production branch `apex-redirect`.
   - Domain management → remove `www` from Netlify's domains.
   - Deploy once (15 credits).
8. **Run the smoke test.**
   - `curl -I https://clarkesystemsgroup.com/services` should return 301 to `https://www.clarkesystemsgroup.com/services`.
   - `curl -I https://www.clarkesystemsgroup.com/` should return 200 and include `strict-transport-security`.
   - Run one instant check and submit one lead.
9. **Morning routine after the switch.** Download the leads with the curl command from step 4 (`/api/leads?mark=1`), save the CSV, and run `python -m outreach inbound leads.csv`. Run it for the contact brief with `?form=brief`.

**Rollback:** at one.com, change `www` back to the Netlify target, and set Netlify's production branch back to `main`. Nothing is deleted on either side.

**Fallback if Shopify blocks Cloudflare (built):** keep the pages on Cloudflare and serve only the instant check from Netlify.
1. In the Pages project, add the environment variable `CHECK_ENDPOINT = https://clarkesystemsgroup.com/api/check` and redeploy.
2. In step 7, keep Netlify on `main` instead of `apex-redirect`, so the Netlify function stays live, and add this rule at the top of `_redirects` on `main`: `https://clarkesystemsgroup.com/*  https://www.clarkesystemsgroup.com/:splat  301!`. Netlify's request-chain documentation lists functions ahead of redirects, so `/api/check` should keep working. Confirm it with one POST to `https://clarkesystemsgroup.com/api/check` after the change.
3. The Netlify function already answers cross-origin requests from www and the `pages.dev` addresses, and refuses every other site.

Netlify then pays only for checks, about 111 credits for 20,000.

## Measuring the stunt (applies to every option)

GoatCounter is built in and switched off.
- **What it is:** free, no cookies, data stored in the EU (Finland and Germany).
- **What it records:** visits, referrers, `utm_` campaign tags, and the events "catalogue-check" (a check run), "catalogue-check-failed/<reason>" and "catalogue-check-list-requested" (a lead).
- **Who is counted:** visitors with automation flags, previews and localhost are never counted.

**UK law:**
- **Consent.** PECR as amended by the Data (Use and Access) Act 2025, in force since 5 Feb 2026, exempts statistics-only analytics from consent. The conditions: clear information, a free way to object, aggregate use, and the provider acting only for you. The ICO's April 2026 guidance confirms that third-party tools qualify on those terms.
- **What the privacy notice must say.** When you switch GoatCounter on, the privacy notice automatically gets a paragraph covering the purpose, provider, storage location, retention and an opt-out link. The opt-out link (`#toggle-goatcounter`) works on any page.
- **Data processing agreement.** GoatCounter publishes none. Its position is that it stores no personal data, so this is a judgement call rather than a breach. If you want a signed DPA, Fathom costs $15–25 a month.

**To switch it on:**
1. Sign up at goatcounter.com and choose a code, for example `csg`.
2. In `site.config.json`, set `"provider": "goatcounter"` and `"goatcounterCode": "csg"`.
3. Commit. A production deploy costs 15 credits on Netlify.
4. Put `?utm_source=<channel>&utm_campaign=<stunt>` on every stunt link.

## Sources

- **Netlify:**
  - docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/credit-based-pricing-plans/
  - …/how-credits-work/
  - …/billing-faq-for-credit-based-plans/
  - docs.netlify.com/manage/forms/usage-and-billing/
  - docs.netlify.com/build/functions/usage-and-billing/
  - netlify.com/pricing
- **Cloudflare:**
  - developers.cloudflare.com/pages/functions/pricing/
  - /pages/platform/limits/
  - /workers/platform/limits/
  - /workers/platform/pricing/
  - /pages/configuration/redirects/
  - /pages/configuration/headers/
  - /pages/configuration/serving-pages/
  - /pages/configuration/custom-domains/
  - /d1/platform/pricing/
  - /email-routing/email-workers/send-email-workers/
  - cloudflare.com/terms
- **Ruled out:**
  - Vercel Hobby is non-commercial only: vercel.com/docs/plans/hobby
  - GitHub Pages is not meant for business sites: docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
  - Firebase Spark is capped at 10 GB: firebase.google.com/docs/hosting/usage-quotas-pricing
- **one.com CNAME and web forwarding:** third-party guides only; one.com's own help site could not be read. UNVERIFIED.
- **Analytics law and guidance:**
  - legislation.gov.uk/ukpga/2025/18/schedule/12
  - ico.org.uk storage and access technologies guidance (exceptions page, April 2026)
  - goatcounter.com/help/privacy
  - goatcounter.com/help/events
  - goatcounter.com/help/campaigns
  - goatcounter.com/help/gdpr
  - usefathom.com/pricing
