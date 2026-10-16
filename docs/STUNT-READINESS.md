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
| Benchmarks | Per-check distributions, overall and by sector (withheld under 10 stores). Inbound replies add "higher than N% of the UK stores we have checked" once 30+ stores are in. | engine: `insights` → `insights/benchmarks.json` |
| Case studies | Measured before/after from the fix kit exports, with a claims ledger. Anonymised and stamped NOT FOR PUBLICATION unless written consent is on file. The client always gets a named handover. | engine: `python -m outreach casestudy --store ...` |
| Measurement | GoatCounter visits, sources and check/lead events. Off until configured. | `site.config.json` → `analytics` |
| Cloudflare Pages edition | Static site, instant check, forms in D1, lead CSV export. | `functions/`, `scripts/build-pages.mjs`, `docs/HOSTING.md` |

**Instant-check safety:**
- It accepts public web addresses only. Private networks, internal IPs and redirects to them are all blocked.
- It honours robots.txt by the standard's rules (RFC 9309): groups, wildcards, and the longest rule wins. Redirects of robots.txt are only followed to public https addresses.
- It blocks every private address range, including IPv6 forms (IPv4-mapped, NAT64, 6to4, link and site local). Remaining risk: a store's DNS could change between the address check and the fetch. Every fetch is https to the store's own name, so certificate checks stop it reaching internal services.
- It is rate limited to 8 checks per visitor every 10 minutes.
- It caches each store's result for 15 minutes, so a crowd checking the same store hits it once.
- It reads the first 500 products and says so.
- It reads as a UK shopper. Shopify hides products by country, and Netlify's servers are in the US.

Tests: `node tests/check-core.test.mjs`, also run in CI.

## Blockers: fix before any stunt

1. **Hosting capacity.** See [HOSTING.md](HOSTING.md) for the numbers, the options and a runbook.
   - **Netlify Free:** 300 credits, about 15,000 visits a month. At the limit every site pauses, forms included.
   - **Option C, recommended at £0:** www on Cloudflare Pages, with Netlify only redirecting the bare domain. It is built and tested on this branch.
   - **Option B:** Netlify Pro, about $30–40 in a stunt month.
   - Check Netlify → Usage first: the publishing stall since 15 Oct is most likely credits.
2. **Forms.** On Netlify, switch on form detection (Site configuration → Forms). On Cloudflare Pages, leads go to D1 and download as CSV (HOSTING.md, step 9).
3. **Measurement.** GoatCounter is built in and switched off. Switching it on is two fields in `site.config.json`. It needs no cookie banner under the 2026 PECR exemption, and the privacy-notice wording is generated for you.
4. **Business address** on the privacy notice and terms (placeholder still live).
5. **Prices.** Engine `PRICING.md` has 19 sourced price points. Suggested: £595 / £1,250 / £2,250 clean-up and £200 / £350 a month monitoring. These are your decision; set them in `config.toml` `[offer]`.

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
