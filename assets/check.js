/* Instant catalogue check: calls /api/check and renders the findings, then offers the full list.
   The full list is built here in the browser: after the lead form, /api/lead returns a token, every page of the
   catalogue is read through /api/check, and assets/catalogue-rules.mjs (the same rules the server uses) turns it
   into one row per product to fix, shown on the page and offered as a CSV download. */
(function () {
  "use strict";
  var form = document.getElementById("checkForm");
  if (!form) return;
  var input = document.getElementById("checkStore");
  var btn = document.getElementById("checkBtn");
  var status = document.getElementById("checkStatus");
  var out = document.getElementById("checkResult");
  var lead = document.getElementById("leadForm");
  var leadNote = document.getElementById("leadNote");
  var last = null;
  var checking = false;
  var leadBusy = false;
  input.setAttribute("aria-describedby", "checkStatus");
  var leadEmailEl = document.getElementById("leadEmail");
  if (leadEmailEl) leadEmailEl.setAttribute("aria-describedby", "leadNote");

  function setInvalid(el, bad) { if (bad) el.setAttribute("aria-invalid", "true"); else el.removeAttribute("aria-invalid"); }

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function fmt(n) { return Number(n).toLocaleString("en-GB"); }
  function pct(x) { return x < 0.01 ? "under 1%" : Math.round(x * 100) + "%"; }

  function render(r) {
    out.textContent = "";
    findings(out, r, r.capped ? "First " + fmt(r.products) + " products checked" : fmt(r.products) + " products checked");
    if (r.capped) out.appendChild(el("p", "chk-note", "Large catalogue: this instant check reads the first " + fmt(r.products) + " products. The full list below covers every product."));
    out.hidden = false;
    lead.hidden = false;
    lead.querySelector("fieldset").disabled = false;   // a second store can be requested after the first
    leadNote.textContent = "";
    leadBusy = false;
    if (full) { full.hidden = true; full.textContent = ""; }
    document.getElementById("leadStore").value = r.store;
    document.getElementById("leadSummary").value = r.findings.map(function (f) { return f.count + " " + f.label; }).join("; ").slice(0, 900);
    out.focus();
  }

  function findings(box, r, kicker) {
    var head = el("div", "chk-head");
    head.appendChild(el("p", "chk-kicker", kicker));
    var h = el("h2", "h3 chk-title");
    var real = r.findings.filter(function (f) { return !f.setup_choice; });
    h.textContent = real.length ? r.store + ": " + real.length + (real.length === 1 ? " issue type" : " issue types") + " found"
                                : r.store + ": no common catalogue errors found";
    head.appendChild(h);
    box.appendChild(head);
    if (!r.findings.length) {
      box.appendChild(el("p", "chk-why", "The public catalogue looks clean on the checks we run here. The full check goes deeper: barcodes (GTINs), images, descriptions and the whole catalogue."));
    }
    var list = el("ol", "chk-list");
    r.findings.forEach(function (f) {
      var li = el("li", "chk-item" + (f.setup_choice ? " chk-setup" : ""));
      var n = el("span", "chk-n", fmt(f.count));
      var body = el("div", "chk-body");
      body.appendChild(el("p", "chk-label", f.label + (f.share != null ? " (" + pct(f.share) + ")" : "")));
      body.appendChild(el("p", "chk-why", f.setup_choice
        ? "Empty on almost every product, which usually means a deliberate setup rather than an error."
        : f.why));
      if (f.examples && f.examples.length) {
        body.appendChild(el("p", "chk-ex", "For example: " + f.examples.join("; ")));
      }
      li.appendChild(n); li.appendChild(body); list.appendChild(li);
    });
    box.appendChild(list);
  }

  // ------------------------------------------------------------ full list
  var full = document.getElementById("fullList");
  var PREVIEW = 25;

  function fetchPage(endpoint, store, page, token) {
    return fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ store: store, page: page, token: token }) })
      .then(function (res) { return res.json().then(function (j) { if (!res.ok) throw j; return j; }, function () { throw {}; }); });
  }

  function buildFull(store, token) {
    var endpoint = form.getAttribute("data-endpoint") || "/api/check";
    var rulesUrl = new URL(full.getAttribute("data-rules"), document.baseURI).href;   // import() would resolve it from assets/
    var products = [], seen = {}, stopped = null, platform = "shopify";
    full.hidden = false;
    full.textContent = "";
    var progress = el("p", "chk-status", "Reading every product in " + store + "…");
    progress.setAttribute("role", "status");
    full.appendChild(progress);
    function next(page) {
      return fetchPage(endpoint, store, page, token).then(function (j) {
        platform = j.platform || platform;
        j.products.forEach(function (p) { if (!seen[p.id]) { seen[p.id] = 1; products.push(p); } });
        progress.textContent = "Reading every product in " + store + ": " + fmt(products.length) + " so far…";
        if (j.more) return next(page + 1);
      }, function (err) {
        if (page === 1) throw err;
        stopped = err && err.error ? err.error : "The store stopped responding.";
      });
    }
    var rules = import(rulesUrl);                     // loads while the pages are read
    rules.catch(function () {});
    return next(1).then(function () { return rules; }).then(function (m) {
      showFull(m, store, products, stopped, platform);
    }).catch(function (err) {
      progress.textContent = (err && err.error) || "The full list could not be built. Run the check again in a minute.";
    });
  }

  function showFull(rules, store, products, stopped, platform) {
    full.textContent = "";
    var r = rules.analyse(products, platform);
    r.store = store;
    var capped = products.length >= 10000;
    findings(full, r, "Full list: " + fmt(products.length) + " products checked");
    if (stopped) full.appendChild(el("p", "chk-note", "We read " + fmt(products.length) + " products before the store stopped answering, so the list covers those. Run it again later for the rest."));
    else if (capped) full.appendChild(el("p", "chk-note", "This list covers the first 10,000 products. Ask us for the rest."));
    var rows = rules.listRows(products, platform);
    if (!rows.length) { full.focus(); return; }
    var blob = new Blob([rules.toCsv(rows, store)], { type: "text/csv;charset=utf-8" });
    var a = el("a", "btn btn-primary chk-download", "Download the full list (" + fmt(rows.length) + " rows, CSV)");
    a.href = URL.createObjectURL(blob);
    a.download = store.replace(/[^a-z0-9.-]/gi, "") + "-catalogue-check.csv";
    a.addEventListener("click", function () { if (window.csgTrack) window.csgTrack("Catalogue check list downloaded", {}); });
    full.appendChild(a);
    var shown = rows.slice(0, PREVIEW);
    var wrap = el("div", "chk-table-wrap");
    wrap.setAttribute("tabindex", "0");
    wrap.setAttribute("role", "region");
    wrap.setAttribute("aria-label", "First " + shown.length + " rows of the full list");
    var t = el("table", "chk-table");
    var hr = el("tr");
    ["Product", "Variant or SKU", "Issue", "Suggested fix"].forEach(function (h) { var th = el("th", null, h); th.scope = "col"; hr.appendChild(th); });
    var thead = el("thead"); thead.appendChild(hr); t.appendChild(thead);
    var tb = el("tbody");
    shown.forEach(function (row) {
      var tr = el("tr");
      var td = el("td");
      if (row.url || row.handle) {
        var link = el("a", null, row.product);
        link.href = row.url || "https://" + store + "/products/" + encodeURIComponent(row.handle);
        link.rel = "noopener noreferrer"; link.target = "_blank";
        td.appendChild(link);
      } else td.textContent = row.product;
      tr.appendChild(td);
      tr.appendChild(el("td", null, [row.variant, row.sku].filter(Boolean).join(" · ")));
      tr.appendChild(el("td", null, row.issue));
      tr.appendChild(el("td", null, row.fix));
      tb.appendChild(tr);
    });
    t.appendChild(tb); wrap.appendChild(t); full.appendChild(wrap);
    if (rows.length > shown.length) full.appendChild(el("p", "chk-note", "Showing the first " + shown.length + " of " + fmt(rows.length) + " rows. The download has them all, with a link to each product."));
    full.appendChild(el("p", "chk-note", platform === "woocommerce"
      ? "WooCommerce does not publish shipping weights, variation SKUs or barcodes (GTINs), so this list cannot check them. We include them, from your own product export, when we fix the list for you."
      : "Barcodes (GTINs) are not in a store's public catalogue, so checking them needs admin access. We include them when we fix the list for you."));
    full.setAttribute("tabindex", "-1");
    full.focus();
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (checking) return;                       // one check at a time; the button keeps focus (no disabled)
    var store = input.value.trim();
    if (!store) { status.textContent = "Enter your store's web address."; setInvalid(input, true); input.focus(); return; }
    setInvalid(input, false);
    checking = true;
    btn.setAttribute("aria-disabled", "true");
    btn.textContent = "Checking…";
    status.textContent = "Reading your public catalogue. This takes a few seconds.";
    out.hidden = true;
    // a new check replaces the old one entirely: the list form must never carry the previous store
    lead.hidden = true;
    last = null;
    document.getElementById("leadStore").value = "";
    document.getElementById("leadSummary").value = "";
    fetch(form.getAttribute("data-endpoint") || "/api/check", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ store: store }) })
      .then(function (res) { return res.json().then(function (j) { return { ok: res.ok, j: j }; }, function () { return { ok: false, j: {} }; }); })
      .then(function (x) {
        if (!x.ok) {
          status.textContent = x.j.error || "That check did not work. Try again.";
          setInvalid(input, true);
          input.focus();
          if (window.csgTrack) window.csgTrack("Catalogue check failed", { outcome: x.j.code || "error" });
          return;
        }
        status.textContent = "";
        last = x.j;
        render(x.j);
        if (window.csgTrack) window.csgTrack("Catalogue check", { issues: String(x.j.findings.length) });
      })
      .catch(function () { status.textContent = "The check could not run. Try again in a minute."; input.focus(); })
      .then(function () { checking = false; btn.removeAttribute("aria-disabled"); btn.textContent = "Check my store"; });
  });

  lead.addEventListener("submit", function (e) {
    e.preventDefault();
    if (leadBusy) return;                      // one request per click
    var email = document.getElementById("leadEmail");
    if (!email.value || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)) {
      leadNote.textContent = "Enter the email address the list should go to."; setInvalid(email, true); email.focus(); return;
    }
    setInvalid(email, false);
    if (!last) { leadNote.textContent = "Run a check first, so we know which store the list is for."; input.focus(); return; }
    var trap = lead.querySelector('[name="csg_trap"]');
    if (trap && trap.value) { leadNote.textContent = "Done."; return; }   // honeypot
    leadBusy = true;
    leadNote.textContent = "Sending…";
    var data = new URLSearchParams(new FormData(lead)).toString();
    var post = function (url) { return fetch(url, { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: data }); };
    // Netlify Forms by default; the Cloudflare Pages build sets data-endpoint="/api/lead" on the form
    post(lead.getAttribute("data-endpoint") || "/")
      .then(function (res) {
        if (!res.ok) throw new Error();
        return res.json().catch(function () { return {}; });   // Netlify Forms answers with a page, not JSON
      })
      .then(function (j) {
        if (window.csgTrack) window.csgTrack("Catalogue check list requested", {});
        if (j && j.token && full && window.Blob) {
          leadNote.textContent = "";
          lead.querySelector("fieldset").disabled = true;
          return buildFull(last.store, j.token);
        }
        leadNote.setAttribute("tabindex", "-1");
        leadNote.textContent = "Done. The product-level list for " + last.store + " will be with you within two business days.";
        leadNote.focus();                         // focus moves to the confirmation before the form is locked
        lead.querySelector("fieldset").disabled = true;
      })
      .catch(function () {
        leadBusy = false;
        leadNote.textContent = "That did not send. Email enquiries@clarkesystemsgroup.com with your store address instead.";
      });
  });
})();
