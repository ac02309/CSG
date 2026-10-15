# Launch playbook

Everything on the site that only the business owner can supply is controlled from one file, **`site.config.json`**. This playbook explains each item in it, what to decide, and exactly what to do. Work through it in order. Items 1 to 3 are launch blockers. Items 4 to 7 are what take the site from good to exceptional.

> General information, not legal advice. Where a section touches on law, it says so; check anything you are unsure of with an accountant or solicitor.

---

## How the config works

1. Open `site.config.json` on GitHub (click the file, then the pencil icon).
2. Fill in the values for the item you are working on. Leave anything you are not ready for empty: empty means switched off, and nothing half-finished ever appears on the site.
3. Commit the change. Netlify rebuilds the site and applies the config (`netlify.toml` runs `node scripts/configure.mjs` on every deploy). GitHub Actions runs the same step and then checks every page, so a mistake shows up as a red cross on the commit.

If you work locally, run `node scripts/configure.mjs` yourself. It prints a status board:

```
  off  Business address
  off  Founder section
  off  Founder photo
  off  LinkedIn
  off  Booking link
  off  Analytics
  off  Founding client programme
  off  Testimonials (0)
```

The aim is every line reading `on`.

What the config controls:

| Config | Where it appears |
|---|---|
| `business.address` | Terms, privacy notice, structured data for search engines |
| `business.linkedin` | Footer of every page, structured data |
| `founder.*` | "Who you work with" section on the home page, the FAQ answer about who runs the business, structured data |
| `booking.url` | "Choose a time now" button after a demo request is sent |
| `analytics.*` | Tracking script on every page, the Content-Security-Policy, the privacy notice |
| `foundingClients.*` | Founding client programme section on the services page, plus a contact form topic |
| `testimonials[]` | "What clients say" section on the home and services pages |

---

## 1. Switch on the contact form (10 minutes, launch blocker)

The form already posts to Netlify Forms. Until form detection is switched on, Netlify rejects the post and the form falls back to opening the visitor's email app. That works, but loses most enquiries from people on webmail or phones.

**Steps**

1. Log in to [app.netlify.com](https://app.netlify.com) and open the site.
2. Go to **Forms** in the left sidebar. If you see **Enable form detection**, click it.
3. Trigger a new deploy: **Deploys → Trigger deploy → Deploy site**. Netlify scans the HTML during the deploy and registers a form called **`brief`**.
4. Back in **Forms**, confirm `brief` is listed.
5. Set up email: **Project configuration** (called **Site configuration** in older accounts) **→ Notifications → Emails and webhooks → Form submission notifications → Add notification → Email notification**. Event: *New form submission*. Email: `enquiries@clarkesystemsgroup.com`. Form: `brief`.
6. Test it end to end. Open the live contact page in a private window, fill in the form with your own details and submit. You should see **Request received.** on the page, the submission under **Forms → brief**, and an email in the enquiries inbox within a minute.
7. Submit once more from your phone on mobile data, to test a different network and device.

**Spam.** The form has a hidden trap field (`website`) that bots fill in and people never see; Netlify discards those submissions. Netlify also runs its own spam filter. If spam still gets through, turn on reCAPTCHA in Netlify's form settings, but only if needed, because it adds friction for genuine buyers.

**What each submission contains:** name, work email, role, company, team size, what the business does, the process, hours a week, tools, desired outcome, whether it is a demo or written assessment, the topic they came from, and a subject line in the form `Demo request: Company name`.

**Your reply standard.** The site promises a response within one business day. Set a rule: every submission answered the same day where possible. A fast, specific first reply is one of the easiest ways for a small firm to stand out.

---

## 2. Business address (launch blocker)

**Why it is required.** Both legal pages say *"[Business address: add before launch]"*. Under the Electronic Commerce (EC Directive) Regulations 2002 (regulation 6), a business offering services online must make its geographic address easily accessible. Separately, a sole trader trading under a business name (Clarke Systems Group) must show their own name and an address where documents can be served on business letters, orders, invoices, receipts and written demands (Companies Act 2006, Part 41). A PO box does not meet either requirement.

**Your options**

| Option | Pros | Cons |
|---|---|---|
| Home address | Free, immediate | Your home address is published online and in search results |
| Virtual office or business address service | Keeps home private, often includes mail scanning, looks established | Annual fee; check it explicitly permits use as a service address for a sole trader |
| Accountant's or solicitor's address | Professional, sometimes free for clients | Needs their written agreement, and post must reach you promptly |
| Coworking membership with a business address | A real place to meet clients | Monthly cost |

**Recommendation:** a business address service with mail forwarding or scanning, in a recognisable town. It protects your privacy and it is the address buyers will see. Choose one that confirms in writing that it accepts service of legal documents.

**Then fill in the config:**

```json
"address": {
  "line1": "Suite 4, 12 Example Street",
  "line2": "",
  "town": "Leeds",
  "postcode": "LS1 1AA",
  "country": "United Kingdom"
}
```

At least `line1`, `town` and `postcode` are required. The address then appears in the terms, the privacy notice and the structured data search engines read, and the CI warning about the placeholder disappears.

**Also:** put the same name and address on your invoices and proposal templates.

---

## 3. Your name and face on the site

This is the single biggest trust gain available. Buyers hiring a one-person consultancy are hiring a person. An anonymous "founder" reads as either hiding something or not being real.

### Decide first: is it safe to be named?

The case studies describe work done at a previous or current employer. Before naming yourself, check:

- **Your employment contract**, if you are still employed: clauses on outside business activity, conflicts of interest, confidentiality and intellectual property. Some contracts require written permission for any side business.
- **Non-solicitation and non-compete clauses**, current or post-employment, especially before approaching your employer's clients or suppliers.
- **Confidentiality.** The case studies already avoid naming the employer and its clients. Naming yourself makes the employer easy to identify through LinkedIn, so make sure every figure on the site is something you are free to share.
- **LinkedIn consistency.** If your LinkedIn says you work full-time elsewhere and the site says you lead every project personally, a buyer will notice. Make the two tell the same story.

If any of these is uncertain, get a quick view from an employment solicitor first. It is cheap insurance.

### Choose a level

| Level | What shows | Trust |
|---|---|---|
| **A. Full** (recommended) | Name, photo, role, bio, proof points, LinkedIn | Highest |
| **B. Name and photo** | Same, without LinkedIn | High |
| **C. Name only** | Name with initials instead of a photo | Moderate |
| Current | Anonymous | Low |

### The photo

- **Format:** portrait, 6:7 ratio (for example 960 × 1120 px), JPEG at about 80% quality, under 200 KB.
- **Content:** head and shoulders, looking at the camera, natural light, plain or softly blurred background, dressed as you would for a client meeting.
- **Quality:** a recent phone photo in good daylight is fine. A professional headshot is better. Avoid cropped holiday photos and heavy filters.
- **Save it as** `assets/img/founder.jpg` (upload it to that folder on GitHub).

### The bio

The config already contains a factual default bio built from the case studies. Edit it if you like. Guidelines:

- Third person ("Alex designed…"), two or three sentences.
- Lead with what you have done, not adjectives about yourself.
- End with what it means for the buyer: they deal with the engineer doing the work.
- Keep it consistent with your LinkedIn.

The three `proof` lines appear as bullet points. Keep them to facts from the case studies.

### LinkedIn

1. **Your profile:** a headline that matches the site (for example, *Founder, Clarke Systems Group · Automation and AI for operations teams*), the website in your contact info and Featured section, and an About section echoing the bio.
2. **A company page** for Clarke Systems Group: logo (`apple-touch-icon.png`), the same one-line description as the site, and a website link. Put its URL in `business.linkedin`.

### Then fill in the config

```json
"founder": {
  "show": true,
  "name": "Alex Clarke",
  "role": "Founder and lead engineer",
  "photo": "assets/img/founder.jpg",
  "photoAlt": "Alex Clarke, founder of Clarke Systems Group",
  "linkedin": "https://www.linkedin.com/in/your-profile",
  ...
}
```

With `show: true` and no photo, the section shows your initials on the brand gradient, so you can go live with level C and add the photo later.

---

## 4. Your first client result and testimonial

Every case study on the site is, honestly, from previous employment. One real Clarke Systems Group client result changes the site from "capable engineer" to "proven supplier". The site is already built for it: the founding client programme brings the client in, and the testimonials section displays the result.

### Step 1: Decide the founding client offer

A founding client programme is a standard, transparent way to win the first clients: a clear benefit in exchange for being a reference.

| Decision | Recommendation | Why |
|---|---|---|
| Number of places | 3 | Scarce enough to be credible, enough to produce 2 to 3 results |
| The offer | 20% off the first build, or a fixed founding price (for example, the first build at £1,000) | Meaningful but not desperate. Avoid "free": unpaid clients are less committed and their testimonials carry less weight |
| What you ask | A case study and testimonial once the system is live and has a measured result, approved in writing; named or anonymised, their choice | Keeps it fair and voluntary |
| Closing date | 3 months from launch | Creates a reason to act now |

Fill in the config:

```json
"foundingClients": {
  "show": true,
  "places": 3,
  "offer": "20% off your first build",
  "closes": "31 January 2027"
}
```

This adds a section to the services page and a "Founding client programme" topic on the contact form. When the places are filled, set `show` to `false`.

### Step 2: Find the first clients

Start warm. Your best first clients are people who already trust you.

1. **List 30 people** you have worked with who now run, or work in, operations, ecommerce, finance or data teams at other businesses. Exclude anyone covered by a non-solicitation clause.
2. **Prioritise** businesses of 20 to 500 people with an obvious manual process: re-keying orders, weekly reports built by hand, product data spreadsheets, rotas.
3. **Message each one personally.** Not a template blast; one person at a time.

A message you can adapt:

> Hi Sam, I've started Clarke Systems Group, building automation for operations teams, the same kind of systems I built at [previous employer type], like the launch QA that caught 180+ errors before release.
>
> I'm taking on three founding clients at 20% off the first build, in exchange for a case study once it's delivered results. Is there a process at [Company] that eats hours every week, such as reports, re-keying or data checks? If so, I'd happily look at it and tell you honestly whether it's worth automating. No obligation.

4. **Post on LinkedIn** once a week: a short, practical lesson from your experience (the three guides on the site are ready-made source material), ending with a link to the guides or the founding client programme.
5. **Follow up once** after a week. Then stop.

### Step 3: Measure before you build (this is what makes the testimonial work)

A testimonial with a number in it is worth many without one. Before any build, record a baseline with the client:

- Hours spent on the process each week, and by whom.
- Error count over the last month (wrong orders, failed records, credit notes, missed deadlines).
- Turnaround time (for example, report ready at 11:00, not 09:00).

Write it into the written plan. After go-live, measure the same things for four weeks.

### Step 4: Ask for the testimonial

**When:** two to four weeks after go-live, once the result is measurable and the client is happy.

**How:** send three questions, not a request to "write something nice":

1. What was the process like before?
2. What changed after the system went live? (Ask for a number: hours, errors, days.)
3. What would you say to someone considering working with us?

Edit their answers into two or three sentences, keeping their words, and send the final version back for approval.

**Consent wording** (get this in writing; an email reply is enough):

> I confirm the quote below, my name, job title and company name may be published on clarkesystemsgroup.com and in Clarke Systems Group marketing. I can ask for it to be removed at any time.

**The law.** Testimonials must be genuine and must reflect the client's real experience. If the client received a discount or anything else in return, that must be disclosed (the Digital Markets, Competition and Consumers Act 2024 and the CMA's guidance on fake and incentivised reviews). The site handles this: set `foundingClient: true` and the testimonial carries a short disclosure line.

### Step 5: Publish it

```json
"testimonials": [
  {
    "consent": true,
    "quote": "Our weekly sales report used to take Tom most of Monday. Now it's in everyone's inbox at 8am, and the numbers match the till system every time.",
    "name": "Sam Taylor",
    "role": "Operations Manager",
    "company": "Example Ltd",
    "result": "6 hours",
    "resultLabel": "saved every week",
    "caseStudy": "work-example.html",
    "foundingClient": true
  }
]
```

A testimonial only appears when `consent` is `true` and it has a quote and a name. Add more by adding more entries.

### Step 6: Turn it into a case study

1. Copy `work-launch-qa.html` to a new file, for example `work-example.html`.
2. Replace the title, description, headline, metrics, *The problem*, *The system* and *The result*. Keep the same structure.
3. Replace the disclosure paragraph: this one *is* client work, so say so (for example, *"Delivered by Clarke Systems Group for Example Ltd. Published with their permission."*).
4. Add it to `work.html` and the home page track record, ahead of the employment-era cases.
5. Add it to `sitemap.xml`.
6. Put the filename in the testimonial's `caseStudy` field.

Ask for help with any of this and it is a short job.

---

## 5. Booking link (15 minutes)

After someone sends a demo request, the confirmation can offer **Choose a time now**. That turns "we'll reply within a business day" into a booked meeting while the buyer is still keen.

**Recommended: Google Calendar appointment schedules.** You already use Google for business email, so it is usually included in your plan (custom booking-form questions need a paid Google Workspace plan) and puts bookings straight into your calendar.

1. In Google Calendar, click **Create → Appointment schedule**.
2. **Title:** *Solution demo: Clarke Systems Group*. **Duration:** 20 minutes.
3. **Availability:** the hours you want to offer, for example Tuesday to Thursday, 10:00 to 16:00 UK time.
4. **Booking window:** at least 24 hours' notice, up to 30 days ahead. **Buffer:** 10 minutes. **Maximum bookings per day:** 3.
5. **Location:** Google Meet.
6. **Booking form:** add *Company* and *Which process should we look at?* (required).
7. **Confirmation and reminders:** on.
8. Save, open the booking page, and copy its URL.

**Alternatives:** Cal.com (free plan, more control) or Calendly. Any https link works.

```json
"booking": { "url": "https://calendar.app.google/your-link" }
```

The flow stays brief-first: the buyer still sends the brief, so you can prepare the demo around their process, then books straight away.

---

## 6. Analytics and conversion tracking

You cannot improve what you do not measure. The site already emits conversion events; it needs a provider to receive them.

| Provider | Cost | Custom events | Notes |
|---|---|---|---|
| **Plausible** (recommended) | Paid monthly subscription | Yes | Cookie-free, so no cookie banner is needed. Records every conversion event below |
| Cloudflare Web Analytics | Free | No | Cookie-free. Page views only. Add the site in Cloudflare and copy the token |
| Netlify Analytics | Paid add-on | No | Server-side, so no script. Page views only |

**Plausible setup**

1. Create an account at plausible.io and add the site `www.clarkesystemsgroup.com`.
2. Set the config:
   ```json
   "analytics": { "provider": "plausible", "domain": "www.clarkesystemsgroup.com", "cloudflareToken": "" }
   ```
3. In Plausible, go to **Site settings → Goals** and add these custom events:

| Event | Fires when |
|---|---|
| `Demo request` | A demo request is sent successfully |
| `Assessment request` | A written assessment request is sent successfully |
| `Email fallback` | The form fell back to the email app (watch this; it should be near zero) |
| `CTA click` | Any link to the contact page is clicked (with page and label) |
| `Email click` | Any email link is clicked |
| `LinkedIn click` | A LinkedIn link is clicked |
| `ROI to demo` | Someone uses the calculator, then clicks *Get a real figure* |

The config step also updates the Content-Security-Policy to allow the script, and adds a paragraph to the privacy notice describing it. Nothing else to edit.

**What to watch each month:** visits to the contact page, demo requests, the conversion rate between the two, which pages the requests came from, and the fallback count.

---

## 7. Positioning and pricing

These are business decisions, not technical ones. Here is the analysis, with a recommendation.

### The problem today

The headline *"Less admin. Fewer errors. Same team."* is well written but could belong to any automation supplier. It does not tell a visitor whether this is for them. Meanwhile, all three case studies come from enterprise digital commerce, and the form's examples (furniture online, Shopify, Xero) point to ecommerce and retail. The proof and the message are pointing in different directions.

### Three options

**A. Ecommerce and retail operations (recommended)**

- **Buyer:** operations, ecommerce and finance leads at brands and retailers with 20 to 500 staff, selling online and through marketplaces or retailers.
- **Pain:** product data errors, order re-keying, manual reporting, launch chaos.
- **Headline drafts:**
  - *"Product and order data, handled automatically."*
  - *"Fewer listing errors. Faster launches. Same team."*
  - *"Automation for ecommerce operations teams."*
- **Why:** every case study is direct proof. The guides already speak to this buyer. A narrow niche is easier to win, refer and charge for.
- **Risk:** it excludes non-commerce buyers. In practice they still enquire; the site just stops being written for them.

**B. Data quality specialist**

- **Buyer:** any team where a wrong record is expensive.
- **Headline:** *"Catch data errors before your customers do."*
- **Why:** very distinctive, and the 180+ errors case leads naturally.
- **Risk:** narrower service line; integrations and reporting become secondary.

**C. Operations teams generally (today, sharpened)**

- **Headline:** keep *"Less admin. Fewer errors. Same team."* but make the subline name the buyer: *"Automation and AI for operations teams in growing businesses, from the engineer who built them for global brands."*
- **Why:** the least change.
- **Risk:** stays generic.

### Pricing: does "from £1,250" fit "enterprise-grade"?

It is a deliberate tension. A low published floor brings in small businesses and makes the first yes easy. "Enterprise-grade" invites larger buyers, who may read £1,250 as a signal of a freelancer rather than a firm.

| Option | Effect |
|---|---|
| Keep "from £1,250", change "enterprise-grade" to **"enterprise-proven"** | Honest: the methods were proven in an enterprise. Fits a small-business price. Lowest risk |
| Raise the floor to £2,500 to £3,000 | Fewer, better-qualified enquiries. Harder to win the first clients |
| Replace "from" with typical ranges ("most builds £2,000 to £6,000") | Sets realistic expectations, still transparent |
| Fixed-price packages (for example, *"Automated report: £1,500"*) | Easiest to buy. Needs well-defined scopes |

**Recommendation:** for the next six months, keep the published floor (the founding client programme needs a low barrier), switch the wording to "enterprise-proven", and let the ROI calculator anchor price to value. Once there are three real client results, raise the floor and move to typical ranges.

**To act on this,** reply with the option you choose (for example *"A, second headline, enterprise-proven"*) and the copy changes across the site, meta tags and social images can be made in one pass.

---

## What each item is worth

| Done | Areas that move |
|---|---|
| 1. Form switched on | Conversion |
| 2. Address | Legal |
| 3. Founder named, with photo and LinkedIn | Credibility and trust, Conversion |
| 4. First client result and testimonial | Credibility and trust, Offer, SEO (new case study) |
| 5. Booking link | Conversion |
| 6. Analytics | Performance and tech, Conversion (measured) |
| 7. Positioning and pricing decision | Copy, Offer, Visual design (sharper hero) |
