# Stunt readiness

Everything a big marketing moment needs before it is pointed at the site. It applies whatever the stunt turns out to be.

## Built (16 Oct 2026)

| Asset | What it does | Where |
|---|---|---|
| Instant catalogue check | Anyone types a Shopify store address and gets real findings from its public catalogue in about 2 seconds. No sign-up. | `catalogue-check.html#check` → `/api/check` (`netlify/functions/catalogue-check.mjs`) |
| Lead capture | "Get the full product-level list": name, work email, optional marketing consent, plus the store and its headline findings. | Netlify form `catalogue-check` |
| Inbound fulfilment | Turns each request into the full report and a drafted reply. | engine: `python -m outreach inbound export.csv` |
| Press data | "State of UK catalogue data": anonymised aggregates with method, sample size and dates. Marked not publishable under 30 stores. | engine: `python -m outreach insights` |
| Cold engine | Audit-led cold email, hardened and preflight-gated. | `csg-outreach` |

**Instant-check safety:**
- It accepts public web addresses only. Private networks, internal IPs and redirects to them are all blocked.
- It honours robots.txt.
- It is rate limited to 8 checks per visitor every 10 minutes.
- It caches each store's result for 15 minutes, so a crowd checking the same store hits it once.
- It reads the first 500 products and says so.
- It reads as a UK shopper. Shopify hides products by country, and Netlify's servers are in the US.

Tests: `node tests/check-core.test.mjs`, also run in CI.

## Blockers: fix before any stunt

1. **Netlify is not publishing, and the free plan has hard limits.**
   - The free plan gives 300 credits a month. Each production deploy costs 15 credits and bandwidth costs 20 credits per GB.
   - When the credits run out, the site is paused until the next month.
   - `main` received about 33 production deploys on 14 and 15 October, which is roughly 500 credits.
   - That is the likely reason nothing has gone live since 15 Oct 18:01. Check Netlify → Usage.
2. **Capacity for a crowd.** Even with credits restored, at about 0.7 MB per homepage visit (uncached), 300 credits covers roughly 20,000 visits a month and nothing else. A stunt that works will pause the site at its peak. The options:
   - **Netlify Pro** (paid).
   - **Cloudflare Pages** (free, 500 builds a month, no bandwidth limit stated). `www` can point there with a CNAME at one.com, with no nameserver change. The apex domain would need Cloudflare nameservers, so keep the apex at one.com as a redirect to `www`. The instant check would need porting to a Pages Function; its core is plain JavaScript.
   - **Batch deploys.** Merge to `main` once a day at most. Previews and branch deploys don't cost credits.
3. **Netlify Forms detection** must be switched on (Site configuration → Forms), or lead submissions are lost.
4. **Measurement.** No analytics are configured, so a stunt's results couldn't be measured. A cookie-free option avoids a consent banner. The site already has an analytics slot in `site.config.json`.
5. **Business address** on the privacy notice and terms (placeholder still live).

## Response playbook (when a stunt lands)

- **Every morning:**
  1. Download the `catalogue-check` form export from Netlify.
  2. Run `python -m outreach inbound export.csv`.
  3. Send each drafted reply in `inbound/` with its two attachments.
  4. Promise is two business days; aim for the same day.
- People who ticked "occasional notes" may get marketing. Everyone else gets only the list and replies to their questions.
- **Fixed-price work:** the fix kit (`python -m outreach fix ...`). Rehearse on a Shopify development store first.
- **If the site pauses or slows:** switch the stunt's call to action to email (`enquiries@`) until capacity is restored.

## Guardrails for any stunt

- **Never name or shame a specific store publicly** using its audit, and never without written permission. Aggregates only (`insights`). Naming creates legal risk (malicious falsehood) and reputational risk for a new firm.
- **Every claim in marketing must be provable** (CAP Code, enforced by the ASA): keep the insights CSV and method with any published figure.
- **No invented scarcity or fake urgency.**
- **Outbound email** stays under the engine's PECR controls. A stunt is not a reason to email outside them.
- **Before-and-after stories** need the client's written consent.

## Stunt shapes these foundations support

1. **Data story for press and LinkedIn:** "We read N UK online catalogues. X% have products with no shipping weight." Built from `insights` once the sample passes 30 stores, ideally 100+.
2. **Public challenge:** "Check your store in 10 seconds" pointed at `catalogue-check#check`. Every check is a lead opportunity.
3. **Fix-it-live series:** a fixed number of stores cleaned at our cost, with before-and-after counts published with permission. This fills the missing social proof.
4. **Category benchmarks:** anonymised medians by product category (homeware, fashion, food), so a store can see where it stands without anyone being named.
