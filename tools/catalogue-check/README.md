# Catalogue check

The engine behind the free catalogue check offered on `catalogue-check.html`. It reads the catalogue a Shopify or WooCommerce store already publishes, checks every product for the data errors that break stock sync, shipping rates, Google Shopping and collections, and writes a branded report, a PDF and a CSV.

It uses read-only public endpoints. It needs no admin access, no API keys and no paid services.

## Run it

```sh
node tools/catalogue-check/check.mjs https://example-store.com
node tools/catalogue-check/check.mjs example-store.com --out ~/checks/example
```

Options:

| Option | Meaning |
| --- | --- |
| `--out dir` | Output folder. Default `./reports/<domain>-<date>/` (relative to where you run it). |
| `--no-pdf` | Skip the PDF. The HTML and CSV are still written. |
| `--max N` | Stop after N products. The ceiling is 10,000. |

Output:

- `report.html`: the client report. Summary, store-wide notes, then one table per issue type with product (linked), variant, SKU, the problem and a suggested fix. Self-contained: Inter is embedded, with no scripts or external requests.
- `report.pdf`: the same report on A4, rendered with the repo's Playwright (`/home/user/CSG/node_modules/playwright`, browsers in `/opt/pw-browsers`). If Playwright is missing, the PDF is skipped with a message.
- `issues.csv`: one row per flagged item: issue type, severity, product title, product URL, variant title, SKU, detail, suggested fix. UTF-8 with BOM so Excel opens it cleanly. HTML tables are capped at 500 rows per issue type; the CSV always has everything.

Requirements: Node 18 or later. No npm dependencies.

Behind a corporate or sandbox proxy, Node's built-in `fetch` ignores `HTTPS_PROXY`. On Node 22.21 or later, run with `NODE_USE_ENV_PROXY=1`.

## How it reads the store

1. **Shopify**: `GET /products.json?limit=250&page=N`, then `/collections/all/products.json` if that fails. It pages until the store returns an empty page.
2. **WooCommerce**: `GET /wp-json/wc/store/v1/products?per_page=100&page=N` (the public Store API), with a `?rest_route=` fallback for sites without pretty permalinks. If there are variable products, it also tries `type=variation` to read variation SKUs and prices.
3. If neither answers, it exits with a clear message, the last response it got, and writes nothing.

It is polite by design: one request at a time, 600 to 1000 ms apart, the User-Agent `CSG-Catalogue-Check/1.0 (+https://www.clarkesystemsgroup.com)`, it backs off on 429 or 503 (honouring `Retry-After`), and it stops at 10,000 products.

## The checks

| Check | Severity | What it flags |
| --- | --- | --- |
| Shared SKUs | Error | The same SKU on more than one variant or product. Every item in the group is listed. |
| Missing SKUs | Error | Variants with an empty SKU. On WooCommerce variable products whose variations are not published, the parent SKU is optional, so it is not flagged; the report notes it instead. |
| Missing barcodes (GTINs) | Error | Variants with an empty barcode, only where the field is published. Shopify's public JSON often omits `barcode`. If it is absent store-wide, the report says "not visible publicly" and flags nothing. On WooCommerce it looks for `global_unique_id`, `gtin`, `ean`, `upc`, `isbn`, `barcode` or a matching attribute. |
| Products with no images | Error | Products with zero images. |
| Variants without their own image | Notice | On Shopify only: a variant with no image of its own when a sibling variant has one. WooCommerce does not publish this reliably, so it is reported as not visible. |
| Shipped products with no weight | Error | Shopify variants with `requires_shipping: true` and `grams` of 0. WooCommerce only if a `weight` field is published (the standard Store API does not publish one). |
| Missing product types | Warning | Empty `product_type` (Shopify), or no category or only "Uncategorised" (WooCommerce). |
| Clashing product types | Warning | Types or categories that differ only by case, spacing, punctuation or plural ("T-Shirt", "Tshirt", "T-shirts"). The most-used spelling is kept; products using the other spellings are listed with the suggested change. |
| No description | Warning | Empty `body_html` (Shopify) or empty description and short description (WooCommerce). |
| Duplicate titles | Warning | Two or more products with the same title, ignoring case and spacing. |
| Zero or blank prices | Error | A price of 0 or no price. The report says to ignore it if the item is meant to be free. |
| "Was" price lower than the price | Warning | `compare_at_price` (Shopify) or a sale's regular price (WooCommerce) below the selling price. |

**Store-wide notes.** If a field is empty on more than 90% of the eligible items (with at least 10 items), we report it once as a store-wide note, not as hundreds of errors. A field that is empty almost everywhere usually reflects a deliberate setup. The site promises this. The threshold is set in `runChecks(norm, { noteThreshold, noteMinItems })`.

## Limits

- **Only public data.** The check sees what the store publishes to every visitor. Unpublished, draft and hidden products are not checked.
- **Some fields are not visible publicly.** Shopify usually omits barcodes and inventory. WooCommerce's Store API omits weight and variant images. Where a field cannot be seen, the report says "not visible publicly" and never guesses. These can be checked later with read-only access or a product export.
- **Only what the data can prove.** For example, a zero weight on a non-shipped item (a gift card or download) is not flagged, and a missing parent SKU on a WooCommerce variable product is not flagged.
- Stores that block `/products.json` or the Store API, or sit behind bot protection, cannot be checked this way.
- At 10,000 products the check stops and the report says so.

## Tests

```sh
node tools/catalogue-check/test.mjs          # offline, no network
node tools/catalogue-check/test.mjs --pdf    # also renders a PDF with Playwright
```

The fetcher is injectable (`createHttp({ fetchImpl, sleep })`), so the tests run against `fixtures/shopify-products.json` and `fixtures/woocommerce-products.json` through a fake `fetch`. Both fixtures are synthetic. Between them they exercise every check, pagination, the `/collections/all` fallback, 429 back-off, the "not visible publicly" and store-wide-note paths, and the HTML and CSV output.

## Layout

```
check.mjs          CLI
lib/fetch.mjs      polite HTTP client, platform detection, Shopify and WooCommerce paging
lib/checks.mjs     normalisation and the checks (issue types, costs, suggested fixes)
lib/report.mjs     HTML report and CSV
lib/pdf.mjs        PDF via Playwright
test.mjs           offline tests
fixtures/          synthetic test data
```

## Ethics

Only run it for stores that asked for a check, or on public data for demonstration without publishing the store's name. Do not commit or publish reports about third-party stores. The default `reports/` folder is git-ignored inside this tool folder; when running from the repo root, pass `--out` to a folder outside the repo.
