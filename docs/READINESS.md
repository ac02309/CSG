# Production readiness: line by line

What this is: the Clarke Systems Group marketing website, version on `main` at the date below. It has 23 static pages hosted on Netlify. It has no user accounts, logins, database, payments, API or AI features. There is one form (a demo request), which Netlify stores and emails.

That shapes every answer below. Most of the checklist describes a software product with customers logging in. For those lines the honest answer is **not applicable**, with the reason. Nothing is marked done without evidence you can check in this repository.

| Mark | Meaning |
| --- | --- |
| ✅ | In place, with the evidence named |
| ➖ | Not applicable to a static marketing site, with the reason |
| ⚠️ | Outside this repository: the owner must do or confirm it |
| ❌ | A real gap |

Checked on 2026-10-15.

## Summary

- **Accounts, data and payments:** not applicable. The site never stores customer data itself.
- **The form:** submits exactly once, even on repeated clicks. It keeps what people typed if a field fails, and falls back to email if sending fails. Names with apostrophes, accents, emoji and right-to-left text arrive exactly as typed. Typed HTML is never run (`form3.js` test, results below).
- **Security:** headers on every response, a strict Content Security Policy, and no third-party scripts.
  - No secrets in the code or its history.
  - `npm audit` reports 0 vulnerabilities, and CI now fails if one appears.
  - Monthly dependency updates (Dependabot).
  - A published vulnerability-disclosure process.
- **Accessibility:** 0 axe violations (WCAG 2.2 AA) on all 23 pages. Full keyboard navigation and screen-reader support.
- **Layout and motion:**
  - Tested at 11 browser zoom levels (50% to 300%) and on phone, small-phone, tablet and 2560px screens: no sideways scrolling, overlapping text or wrapped navigation.
  - All scroll-driven motion is a pure function of scroll position. 150 random scroll jumps per page leave every element in its correct state.
- **The real gaps:**
  - The site's owner-side tasks (marked ⚠️).
  - No uptime monitoring.
  - No error tracking.
  - No second reviewer on changes.
  - A bus factor of one.

## Accounts and access

| Item | | Why |
| --- | --- | --- |
| A schema someone designed | ➖ | No database. Content is generated HTML. |
| Login that works with a plus sign in the email | ➖ | No login. The contact form accepts `name+tag@domain` (tested: `siobhan+ops@example.co.uk` arrives intact). |
| Password reset links that expire and work once | ➖ | No accounts. |
| MFA, and a recovery path for a lost phone | ⚠️ | No site accounts. The owner must have MFA on GitHub, Netlify, the domain registrar and Google Workspace, with recovery codes stored offline. |
| Session timeouts, and a way to kill every session | ➖ | No sessions. |
| SSO, SAML, SCIM | ➖ | No sign-in. |
| Roles and permissions | ⚠️ | No site roles. On GitHub and Netlify, the owner should give each person only the access they need. |
| Stop user A reading user B's data by changing a URL | ➖ | No per-user data. The only URL parameter (`?topic=`) is matched against a fixed list. It never selects data (`assets/site.js`, `applyPrefill`). |
| Tenant isolation | ➖ | No tenants. |
| "Log in as this user", with an audit trail | ➖ | No users. |
| Rate limits on login | ➖ | No login. Form spam is handled by Netlify's filtering and a hidden honeypot field (`.trap` in `contact.html`). |
| Lockouts that don't lock out the CFO | ➖ | No login. |

## Data

| Item | | Why |
| --- | --- | --- |
| Migrations that roll forward and back; no table locks | ➖ | No database. Every change is a Git commit. A rollback is a revert or a Netlify one-click redeploy. |
| Indexes, connection pooling | ➖ | No database. |
| Nightly backups; tested restore | ✅ | The whole site is in Git, with full history on GitHub and in every clone. A restore is a checkout. That is how every deploy in this project is built, so it is tested every time. |
| Form submissions backed up | ⚠️ | Submissions live in Netlify and arrive by email in Google Workspace. The owner should confirm the mailbox is retained and backed up. |
| Point-in-time recovery | ✅ | Any past version can be restored from Git history or a past Netlify deploy. |
| Soft deletes | ➖ | No user records. |
| Validation on the server | ⚠️ | The form is validated in the browser (`assets/site.js`). Netlify's form handler accepts the post. Its spam filter and the honeypot are the server-side guard. There is no custom server to add more. |
| Timezones stored right | ✅ | The only times shown are live clocks, rendered with the browser's time-zone database (`Intl`, `time[data-tz]`). No times are stored. |
| Apostrophes in names | ✅ | Tested: `Siobhán O'Brien-Núñez` arrives intact. |
| Emoji, accents, right-to-left text | ✅ | Tested: emoji and Arabic text arrive intact. Pages are UTF-8. |
| Money as integers; currency, rounding and tax | ➖ | No payments. Prices are fixed text. The cost calculator is an estimate only, and says so (`services.html#roi`). |
| A data model that survives a second customer | ➖ | No data model. Content is generated from one script and one config file (`site.config.json`). |
| Idempotency keys | ➖ | No payments. |
| Deduplication when someone clicks submit four times | ✅ | The button is disabled while sending. Tested with four rapid clicks: one submission. |
| Pagination on page 400 | ➖ | No lists of records. |
| Exports and imports | ➖ | No customer data. Netlify can export form submissions as CSV. |
| Retention rules, and code that deletes on schedule | ⚠️ | The privacy notice promises deletion within 12 months if there is no reply. The owner must delete from Netlify and the mailbox on that schedule. Nothing does it automatically. |

## Secrets and supply chain

| Item | | Why |
| --- | --- | --- |
| Secrets out of the code, the repo and the AI chat history | ✅ | Scanned the working tree and full Git history for key patterns (AWS, GitHub, OpenAI, private keys, passwords): none. No `.env` or key files tracked. The site needs no secrets. Analytics, if turned on, uses public site IDs only. |
| Rotate keys the AI pasted into config | ✅ | None exist to rotate. |
| Confirm every package exists and is the one intended | ✅ | 8 build-time dev dependencies, pinned to exact versions. `package-lock.json` has 90 SHA-512 integrity hashes, and CI installs with `npm ci`. The live site ships none of them except three.js, bundled into `assets/film.js` and checked in CI (the bundle must match its source exactly). |
| Dependency scanning | ✅ | `npm audit`: 0 vulnerabilities. Added to CI: any moderate or worse issue fails the build (`.github/workflows/checks.yml`). The one issue found today (esbuild's dev server, which this project never runs) was fixed by upgrading to 0.25.12. |
| Monthly dependency upgrades; framework upgrades | ✅ | Added `.github/dependabot.yml`: monthly update pull requests for npm and GitHub Actions. There is no framework: plain HTML, CSS and JavaScript. |

## Web security

| Item | | Why |
| --- | --- | --- |
| Input sanitisation everywhere a user can type | ✅ | Typed text is never written into the page as HTML. Every `innerHTML` in the scripts writes fixed text only. Tested with `<script>` and `<b>` in fields: nothing runs or renders. |
| SQL injection | ➖ | No database. |
| XSS | ✅ | No user content is rendered. The Content Security Policy blocks inline and third-party scripts (`script-src 'self'`). |
| CSRF | ➖ | No signed-in state to abuse. |
| Rest of the OWASP list | ✅ | No server code, no authentication, no stored user data. Static files only. Clickjacking is blocked (`X-Frame-Options: DENY`, `frame-ancestors 'none'`). |
| File uploads | ➖ | The form takes no files. |
| CORS not "allow everything" | ✅ | No CORS headers are set, so browsers apply their default same-origin rule. |
| Security headers on every response | ✅ | `_headers` sets HSTS, nosniff, frame denial, referrer policy, permissions policy and COOP on every path. Each page carries a CSP. |
| Encryption in transit and at rest | ✅ | HTTPS only: HSTS for a year, and `upgrade-insecure-requests` in the CSP. Netlify encrypts its storage. |
| Least privilege, including AI agents | ⚠️ | The site has no production credentials. The owner should review who has write access to the GitHub repo and Netlify site, and keep AI agents scoped to a single repository (as in this session). |
| Logs without passwords, tokens or card numbers | ✅ | The site collects none of these. |
| Penetration test; security questionnaire | ⚠️ | Not done. For a static brochure site the risk is low. Clients who send questionnaires will mostly ask about how client systems are built, not this site. |
| A disclosure process | ✅ | Added `SECURITY.md` and `/.well-known/security.txt`: one contact, a two-day reply and a seven-day fix target. |
| A stolen laptop with production access | ⚠️ | The owner's plan: revoke GitHub and Netlify sessions and tokens from another device, then rotate any recovery codes. No production secrets live on the laptop for this site. |

## Compliance

| Item | | Why |
| --- | --- | --- |
| SOC 2 | ➖ | Not required for a marketing site. It would apply to the client systems the business builds, under each client's own controls. |
| HIPAA and BAAs | ➖ | No patient data. Don't accept health data through the form. |
| Audit trails of who viewed a record | ➖ | No records. |
| PCI scope | ➖ | No card data. |
| GDPR deletion requests | ⚠️ | The privacy notice explains rights and gives a contact. To delete someone, remove their submission from Netlify and their emails from the mailbox. |
| Data residency | ⚠️ | Netlify serves from a global network, and submissions are stored by Netlify (US-based). The privacy notice names Netlify as a processor. If a client contract requires EU-only handling, use email instead of the form. |
| Quarterly access reviews | ⚠️ | Owner: review GitHub and Netlify access each quarter. |
| Terms and a privacy policy that match the code | ✅ | Checked: the notice says no cookies, no analytics, no on-device storage and self-hosted fonts. The code sets no cookies, writes no browser storage and loads nothing from other companies. Processors named: Netlify and Google. **The business address is still a placeholder** (`[Business address: add before launch]` in privacy and terms). |

## Infrastructure and deploys

| Item | | Why |
| --- | --- | --- |
| Dev, staging and production that match | ✅ | Every pull request gets a Netlify deploy preview built by the same command as production (`netlify.toml`). |
| Infrastructure as code | ✅ | Build, headers and redirects are in the repo (`netlify.toml`, `_headers`, `_redirects`). |
| A pipeline that runs tests before customers see it | ✅ | CI on every push and pull request (`.github/workflows/checks.yml`): dependency audit, bundle check, config, link and structured-data checks, HTML validation. Every change in this project was merged only after CI passed. ⚠️ Netlify builds `main` on its own; it does not wait for CI. Owner: keep merging only green pull requests, or turn on branch protection on `main`. |
| One-click rollbacks | ✅ | Netlify keeps every deploy. "Publish deploy" on an older one is the rollback. |
| Zero-downtime deploys | ✅ | Netlify swaps deploys atomically. |
| Feature flags | ✅ | `site.config.json` switches sections on and off (founder, testimonials, founding offer, analytics, booking link). |
| Autoscaling; a CDN | ✅ | Netlify's global CDN serves the static files. There is no server to scale. |
| DNS, SSL and renewals | ⚠️ | Netlify renews the certificate automatically. The owner must auto-renew the domain at the registrar. |
| Job queues, retries, dead-letter queues, cron | ➖ | No background work. The form falls back to opening an email if sending fails, and keeps the message to copy. |
| Caching, and clearing it when data changes | ✅ | Pages revalidate on every visit. CSS and JS carry a content fingerprint (`?v=`), so a changed file is always fetched fresh (`scripts/configure.mjs`). |
| SPF, DKIM, DMARC | ⚠️ | Can't be checked from here. The owner must set all three for `clarkesystemsgroup.com` in Google Workspace and DNS. |
| Bounce and complaint handling | ➖ | The site sends no email itself. |
| Storage rules; cost alerts | ✅ | Static site on Netlify; nothing accumulates. ⚠️ Owner: set a Netlify usage alert in case a traffic spike exceeds the free tier. |
| A disaster recovery plan, tested yearly | ✅ | Recovery is: connect the GitHub repo to a new Netlify site, then point DNS at it. Every preview deploy in this project exercises the same build. |
| A second region | ➖ | The CDN is multi-region by design. |

## Monitoring

| Item | | Why |
| --- | --- | --- |
| Uptime checks from outside your network | ❌ | None. Add a free external monitor (for example UptimeRobot) on the home page and the contact page. |
| Error tracking that groups the same bug | ❌ | None. Front-end errors are invisible unless a visitor reports them. Adding a tracker means a third-party script and a privacy-notice change. |
| Structured logs, tracing, latency dashboards, on-call, runbooks, postmortems | ➖ | No server and no services. Netlify shows deploy logs and bandwidth. |
| A status page | ➖ | Not needed for a brochure site. |

## Testing

| Item | | Why |
| --- | --- | --- |
| Unit tests for the logic | ✅ | The logic is small: the form, the cost calculator, scroll motion. It is covered by the browser tests below. |
| End-to-end tests for the flows that make money | ✅ | The demo request is tested end to end: successful send, a failed send falling back to email, and hard input with repeated clicks. The test scripts aren't in the repo yet; see the gaps. |
| Integration tests for third-party APIs | ➖ | The only one is Netlify's form endpoint, and the tests above mock it. |
| Load testing | ➖ | Static files on a CDN. |
| Test data that isn't production data | ✅ | The tests use invented names and addresses only. |
| Regression tests | ⚠️ | CI covers links, structured data, HTML validity and the bundle. The browser tests (layout at every zoom, scroll motion, form, axe) run by hand before each release. Next step: commit them and run them in CI. |
| Testing on an old laptop | ✅ | When a device can't run WebGL2, every 3D scene is replaced by a still image (tested). Reduced-motion users get every element in its finished state. Scrolling holds a median 16.7 ms per frame with 3D off. |
| Accessibility compliance | ✅ | axe-core: 0 violations against WCAG 2.0, 2.1 and 2.2 AA on all 23 pages. |

## Billing, API and AI

| Item | | Why |
| --- | --- | --- |
| Subscriptions, dunning, invoices, VAT, refunds, metering, revenue reports | ➖ | The site takes no payments. Invoicing happens outside it. |
| Webhooks, a versioned API, API keys, API rate limits, OAuth, a sandbox | ➖ | The site has no API. |
| Prompt injection, data in prompts, model spend caps, evals, fallback, deprecation plans, prompt logs, human approval | ➖ | The site uses no AI. |

## The visitor's experience

| Item | | Why |
| --- | --- | --- |
| Pages that load on hotel wifi | ✅ | Text renders from about 79 KB compressed (HTML 5 KB, CSS 12 KB, font 57 KB, scripts 5 to 8 KB). The 185 KB 3D bundle loads afterwards and never blocks reading. |
| Empty, loading and error states | ✅ | The form shows "Sending…", then a confirmation. On failure it explains and opens email instead. Every field has its own inline error. There is a custom 404 page. |
| Error messages a customer can act on | ✅ | For example: "We couldn't send that directly, so we're opening your email app instead. Your request is also copied…" |
| Forms that keep what people typed | ✅ | Validation never clears fields. On a failed send, the message is kept and copied. |
| Emails that render everywhere | ➖ | The site sends no email. Netlify's notification goes to the owner. |
| Notifications people can turn off; undo | ➖ | No notifications or editable data. |
| Keyboard navigation and screen readers | ✅ | Skip link, visible focus and labelled controls. The menus have keyboard support, Escape to close and a focus trap on mobile. The 3D canvases are hidden from screen readers. |
| Translations and locale formats | ➖ | English-only by design (UK business). Numbers use `en-GB` formatting. |
| A back button that does what people expect | ✅ | Ordinary links between pages. No history tricks. Back and forward restore the scroll position. |
| Works at every zoom level and scroll speed | ✅ | Tested at 50, 67, 80, 90, 100, 110, 125, 150, 175, 200 and 300% zoom, plus 320, 390, 820 and 2560px screens, across 9 page types. One real defect was found and fixed: a 52px-wide table on 320px phones. Scroll stress test: 150 random jumps per page on 4 pages, at 1440, 390 and 720px wide. Every story step, counter, progress bar and rule line was in its correct state. The 3D also re-measures when zoom changes the pixel density. |

## Code and people

| Item | | Why |
| --- | --- | --- |
| Code a human can read | ✅ | Plain HTML, CSS and JavaScript. Each script opens with a comment that explains what it does and why. |
| Code review on every change | ❌ | Every change went through a pull request with CI, but no second person reviewed it. |
| A branching strategy | ✅ | Work on a branch, open a pull request, CI must pass, then merge to `main`. Netlify deploys `main`. |
| Deleting dead code; splitting giant files | ✅ | Earlier engines and unused CSS were removed as each version replaced them. The largest hand-written file is `assets/site.css` (663 lines, in labelled sections). |
| Architecture decisions written down | ✅ | `README.md` explains the scene and motion design and why: per-section canvases scroll natively, and motion is a pure function of scroll position. |
| A README that gets a new engineer running in an hour | ✅ | `README.md`: `npm ci`, `npm run build:film`, `node scripts/configure.mjs`, then `python3 -m http.server`. `LAUNCH.md` covers the owner's launch steps. |
| An admin panel; support tooling | ✅ | `site.config.json` is the admin panel. Edit it in GitHub's web editor and Netlify applies it on deploy. Form submissions are managed in Netlify. |
| A changelog customers can read | ➖ | Not needed for a marketing site. Git history and pull requests record every change. |
| Every account, domain and repo in the company's name | ⚠️ | The repo is under a personal GitHub account (`ac02309`). Owner: move it to a company organisation, and confirm the domain, Netlify and Google Workspace are registered to the business. |
| A bus factor higher than one | ❌ | One person runs this. This file, the README and LAUNCH.md mean someone else could take it over. A second person with access to GitHub, Netlify and the registrar would remove the risk. |

## The people the checklist names

The site needs none of the specialist roles for a running product: on-call, DevOps for servers, compliance for patient data. It has no servers, payments or sensitive data. What it does need:

- **A second reviewer** for changes before they go live (❌ today).
- **The owner** to complete the ⚠️ items above. The urgent ones:
  - the business address;
  - SPF, DKIM and DMARC;
  - MFA everywhere;
  - domain auto-renewal;
  - account ownership.
- **Uptime monitoring and error tracking** (❌), so problems are found before a visitor reports them.

## How these results were produced

| Check | How to run it | Result on this version |
| --- | --- | --- |
| Links, anchors, structured data, sitemap | `node scripts/check-site.mjs` | 0 errors. 2 warnings: the business-address placeholder in privacy and terms. |
| HTML validity | `npx html-validate "*.html"` | Clean |
| Dependencies | `npm audit` | 0 vulnerabilities |
| Accessibility | axe-core in Chromium, all 23 pages, WCAG 2.2 AA plus best practice | 0 violations |
| Zoom and devices | 15 sizes × 9 page types: sideways scroll, overflow, overlapping text, navigation wrapping | Clean after the table fix |
| Scroll speed | 150 random jumps × 4 pages × 3 sizes, invariants checked after each burst | All hold |
| Form | Hard input, four rapid clicks, a failed send | One submission, exact round-trip, nothing executed |
| Secrets | Pattern scan of the tree and full history | None |

The browser test scripts are not in this repository yet. Committing them and running them in CI is the first item to fix after the ❌ gaps above.
