/* Term index. Builds a register term -> pages at runtime and hangs it on the
   glossary page: for every entry of data/glossar.json it lists the pages whose
   rendered text carries the term. This is the site's substitute for a full-text
   search, and it needs no index file and no request beyond the glossary JSON,
   because every page is already mounted in the DOM (the inactive ones as
   display: none, which is what makes the scan possible at all).
   No ES modules; uses window.PromptotypingApp. */

(function () {
  "use strict";

  var App = window.PromptotypingApp || {};

  var HOST_ID = "term-index";
  var SOURCE = "data/glossar.json";
  /* The glossary page defines every term, so listing it would say nothing. */
  var SKIP_PAGES = ["glossar"];

  function escapeHtml(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function escapeRegExp(s) {
    return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  /* Search form of a term: a trailing parenthetical is a disambiguation of the
     glossary entry, not part of the wording that occurs in the text. */
  function searchForm(term) {
    return String(term).replace(/\s*\([^)]*\)\s*$/, "").trim();
  }

  function termPattern(term) {
    return new RegExp("(^|[^\\p{L}\\p{N}])" + escapeRegExp(term.toLowerCase()) +
      "([^\\p{L}\\p{N}]|$)", "u");
  }

  /* The forms an entry is searched under. A long nominal phrase never occurs in
     running text as the word sequence the glossary heads it with, so an entry
     may carry an optional shorter `suchform` in data/glossar.json; a hit on
     either form counts. Entries without the field behave as before. */
  function searchForms(entry) {
    return [entry.begriff, entry.suchform].map(function (t) {
      return t ? searchForm(t) : "";
    }).filter(function (t) { return t; });
  }

  /* One lowercased text snapshot per page, taken once. The paper alone is well
     over a hundred kilobytes, so the terms are matched against these strings
     rather than walking the DOM per term. */
  function collectPages() {
    var labels = typeof App.listPages === "function" ? App.listPages() : [];
    var out = [];
    labels.forEach(function (p) {
      if (SKIP_PAGES.indexOf(p.id) !== -1) {
        return;
      }
      var el = document.getElementById(p.id);
      if (!el) {
        return;
      }
      out.push({ id: p.id, label: p.label, text: (el.textContent || "").toLowerCase() });
    });
    return out;
  }

  /* The taxonomy of A36 is declared once, in pages-glossar.js; this module
     renders the same mark and word so the register can be scanned by kind. */
  function categoryCell(entry) {
    return typeof App.glossarCategoryHtml === "function"
      ? App.glossarCategoryHtml(entry.kategorie)
      : "";
  }

  function categoryLabel(entry) {
    return typeof App.glossarCategoryLabel === "function"
      ? App.glossarCategoryLabel(entry.kategorie)
      : "";
  }

  function buildRows(entries, pages) {
    return entries.map(function (entry) {
      var patterns = searchForms(entry).map(termPattern);
      var hits = patterns.length ? pages.filter(function (p) {
        return patterns.some(function (re) { return re.test(p.text); });
      }) : [];
      var links = hits.map(function (p) {
        return '<a href="#' + p.id + '">' + escapeHtml(p.label) + "</a>";
      }).join("");
      // The filter runs over the term, its kind and the pages it occurs on, so
      // a reader can narrow the register by any of the three.
      var haystack = [entry.begriff, categoryLabel(entry)]
        .concat(hits.map(function (p) { return p.label; })).join(" ");
      return '<tr class="term-index-row" data-term="' +
        escapeHtml(haystack.toLowerCase()) +
        '"><th scope="row"><a href="#glossar-' + escapeHtml(entry.slug) + '">' +
        escapeHtml(entry.begriff) + "</a></th>" +
        '<td class="term-index-kind">' + categoryCell(entry) + "</td>" +
        '<td class="term-index-pages">' +
        (links || '<span class="term-index-none">only on this page</span>') +
        "</td></tr>";
    }).join("");
  }

  function mountHost() {
    var page = document.getElementById("glossar");
    if (!page || document.getElementById(HOST_ID)) {
      return null;
    }
    var host = document.createElement("section");
    host.className = "term-index";
    host.id = HOST_ID;
    host.innerHTML =
      "<h2>Term index</h2>" +
      "<p>Every glossary term with the kind of thing it names and the pages that " +
      "use it. The register is built in the browser from the rendered pages and " +
      "stands in for a full-text search.</p>";
    // After the intro and the initials bar, ahead of the entries the register
    // links into.
    var list = page.querySelector(".glossar-list");
    if (list) {
      page.insertBefore(host, list);
    } else {
      page.appendChild(host);
    }
    return host;
  }

  function renderInto(host, entries) {
    var pages = collectPages();
    if (!pages.length) {
      return;
    }
    host.insertAdjacentHTML("beforeend",
      '<div class="term-index-controls">' +
      '<input type="search" class="term-index-filter" ' +
      'placeholder="Filter terms" aria-label="Filter terms" spellcheck="false">' +
      "</div>" +
      '<table class="term-index-table"><thead><tr>' +
      "<th>Term</th><th>Kind</th><th>Occurs on</th></tr></thead>" +
      "<tbody>" + buildRows(entries, pages) + "</tbody></table>");

    var filter = host.querySelector(".term-index-filter");
    var rows = host.querySelectorAll(".term-index-row");
    filter.addEventListener("input", function () {
      var q = filter.value.trim().toLowerCase();
      rows.forEach(function (row) {
        row.hidden = q !== "" && row.getAttribute("data-term").indexOf(q) === -1;
      });
    });
  }

  var host = null;

  function boot() {
    host = mountHost();
  }

  /* The paper renders after promptotyping:sections-ready, so the scan waits for
     the event that reports the whole content as mounted. */
  function build() {
    if (!host || host.querySelector(".term-index-table")) {
      return;
    }
    fetch(SOURCE)
      .then(function (res) {
        if (!res.ok) {
          throw new Error("glossar.json " + res.status);
        }
        return res.json();
      })
      .then(function (data) {
        var entries = (data.eintraege || []).slice().sort(function (a, b) {
          return a.begriff.localeCompare(b.begriff, "de");
        });
        if (entries.length) {
          renderInto(host, entries);
        }
      })
      .catch(function () {
        // The glossary itself is rendered by app.js from the same file; a
        // failure here costs the register only.
        host.remove();
        host = null;
      });
  }

  document.addEventListener("promptotyping:sections-ready", boot);
  document.addEventListener("promptotyping:content-ready", build);
})();
