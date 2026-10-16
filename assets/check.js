/* Instant catalogue check: calls /api/check and renders the findings, then offers the full list. */
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
    var head = el("div", "chk-head");
    head.appendChild(el("p", "chk-kicker", r.capped ? "First " + fmt(r.products) + " products checked" : fmt(r.products) + " products checked"));
    var h = el("h2", "h3 chk-title");
    var real = r.findings.filter(function (f) { return !f.setup_choice; });
    h.textContent = real.length ? r.store + ": " + real.length + (real.length === 1 ? " issue type" : " issue types") + " found"
                                : r.store + ": no common catalogue errors found";
    head.appendChild(h);
    out.appendChild(head);
    if (!r.findings.length) {
      out.appendChild(el("p", "chk-why", "The public catalogue looks clean on the checks we run here. The full check goes deeper: barcodes (GTINs), images, descriptions and the whole catalogue."));
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
    out.appendChild(list);
    if (r.capped) out.appendChild(el("p", "chk-note", "Large catalogue: this instant check reads the first " + fmt(r.products) + " products. The full check covers every product."));
    out.hidden = false;
    lead.hidden = false;
    lead.querySelector("fieldset").disabled = false;   // a second store can be requested after the first
    leadNote.textContent = "";
    leadBusy = false;
    document.getElementById("leadStore").value = r.store;
    document.getElementById("leadSummary").value = r.findings.map(function (f) { return f.count + " " + f.label; }).join("; ").slice(0, 900);
    out.focus();
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
        leadNote.setAttribute("tabindex", "-1");
        leadNote.textContent = "Done. The product-level list for " + last.store + " will be with you within two business days.";
        leadNote.focus();                         // focus moves to the confirmation before the form is locked
        lead.querySelector("fieldset").disabled = true;
        if (window.csgTrack) window.csgTrack("Catalogue check list requested", {});
      })
      .catch(function () {
        leadBusy = false;
        leadNote.textContent = "That did not send. Email enquiries@clarkesystemsgroup.com with your store address instead.";
      });
  });
})();
