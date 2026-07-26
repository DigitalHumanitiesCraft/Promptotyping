/* Page registry and routing.

   The site is a specification documentation: one page is visible at a time,
   the sidebar tree is the table of contents, and the hash names the page. The
   registry PAGES is the single source for the page hosts, the sidebar, the
   route resolution and the generated specification index, so index.html and
   404.html carry no navigation markup and cannot drift apart. */

(function (A) {
  "use strict";

  var PAGES = [
    { id: "ueberblick", label: "Overview", group: "Specification", kind: "normative",
      note: "What the method is and where it applies" },
    { id: "anwendung", label: "Application", group: "Specification", part: "1", kind: "normative",
      note: "The four phases resolved into actions" },
    { id: "vorlagen", label: "Templates", group: "Specification", part: "2", kind: "normative",
      note: "The full document set and its triggers",
      machine: "data/promptotyping-documents.json" },
    { id: "konvention-v0.1", label: "Convention", group: "Specification", part: "3", kind: "normative",
      note: "Frontmatter, addressing, reading heuristic" },
    { id: "artefakt", label: "Artefact and boundary", group: "Specification", part: "4", kind: "normative",
      note: "Artefact type and handover point" },
    { id: "verifikation", label: "Verification", group: "Specification", part: "5", kind: "normative",
      note: "Kinds of check, levels of check, zones of autonomy" },

    { id: "glossar", label: "Glossary", group: "Reference", kind: "informative",
      note: "Term register of the method", machine: "data/glossar.json" },
    { id: "vault", label: "Vault", group: "Reference", kind: "informative",
      note: "Claims and distillates under the paper", machine: "data/vault.json" },

    { id: "workflow", label: "Worked workflow", group: "Evidence", kind: "informative",
      note: "One case carried from raw data to artefact" },
    { id: "use-cases", label: "Use Cases", group: "Evidence", kind: "informative",
      note: "Documented projects", machine: "data/case-studies.json" },

    { id: "praxis", label: "Best Practices", group: "Tools and practice", kind: "informative",
      note: "Working practices from application" },
    { id: "skills", label: "Skills", group: "Tools and practice", kind: "informative",
      note: "Reusable agent instructions", machine: "_content/skills/index.md" },
    { id: "arbeitsumgebung", label: "Working environment", group: "Tools and practice", kind: "informative",
      note: "Tools around the method" },

    { id: "paper", label: "Paper", group: "Paper", kind: "informative",
      note: "Why the method is built this way", machine: "knowledge/paper.md" }
  ];

  var HOME_PAGE = "ueberblick";
  var PAPER_HOST_ID = "paper";

  /* Sub-anchor prefixes and their owning page. Order matters only in that the
     exact page id is tried first. */
  var ANCHOR_OWNER = [
    [/^abschnitt-/, "paper"],
    [/^(abstract|acknowledgements|literatur|fussnoten|fn-|fnref-)/, "paper"],
    [/^case-/, "use-cases"],
    [/^praxis-/, "praxis"],
    [/^skills-/, "skills"],
    [/^(glossar-|konzept-)/, "glossar"],
    [/^vault-/, "vault"],
    [/^promptotyping-document-/, "vorlagen"],
    [/^konvention-/, "konvention-v0.1"]
  ];

  function isPageId(id) {
    return PAGES.some(function (p) { return p.id === id; });
  }

  /* Which page owns an anchor. Falls back to the DOM, so an anchor that only
     the rendered content knows about still resolves. */
  function pageForAnchor(anchor) {
    if (!anchor) {
      return HOME_PAGE;
    }
    if (isPageId(anchor)) {
      return anchor;
    }
    for (var i = 0; i < ANCHOR_OWNER.length; i++) {
      if (ANCHOR_OWNER[i][0].test(anchor)) {
        return ANCHOR_OWNER[i][1];
      }
    }
    var el = document.getElementById(anchor);
    var host = el && el.closest ? el.closest(".doc-page") : null;
    return host ? host.id : null;
  }

  /* ---- Page hosts ----
     Mounted before any rendering runs, so the render functions find their
     targets by id exactly as before. */

  function mountPages() {
    var main = document.getElementById("content");
    if (!main) {
      return;
    }
    var REFERENCE_PAGES = ["glossar", "vault", "vorlagen", "use-cases"];
    PAGES.forEach(function (p) {
      var el = document.createElement("section");
      // The paper host keeps its own class: renderPaper sectionizes into it.
      el.className = "doc-page placeholder-section" +
        (p.id === PAPER_HOST_ID ? " paper" : "") +
        (REFERENCE_PAGES.indexOf(p.id) !== -1 ? " is-reference" : "");
      el.id = p.id;
      // Focus target on a page switch; never in the tab order itself.
      el.setAttribute("tabindex", "-1");
      main.appendChild(el);
    });
  }

  /* ---- Sidebar tree ---- */

  function navItem(p) {
    var num = p.part ? '<span class="docs-nav-part">' + p.part + "</span>" : "";
    return '<li><a href="#' + p.id + '" data-page="' + p.id + '">' +
      num + A.escapeHtml(p.label) + "</a></li>";
  }

  /* Two blocks. The specification proper keeps its heading because the numbers
     only mean something under one, everything else is a flat list. Five group
     labels for fourteen pages read as more structure than the site has
     (operator decision 2026-07-26). */
  function buildNav() {
    var nav = document.getElementById("docs-nav");
    if (!nav) {
      return;
    }
    var spec = PAGES.filter(function (p) { return p.group === "Specification"; });
    var rest = PAGES.filter(function (p) { return p.group !== "Specification"; });
    nav.innerHTML =
      '<p class="docs-nav-group">Specification</p><ul>' +
      spec.map(navItem).join("") + "</ul>" +
      '<ul class="docs-nav-rest">' + rest.map(navItem).join("") + "</ul>";
  }

  function markNavActive(page) {
    document.querySelectorAll("#docs-nav a[data-page]").forEach(function (a) {
      var on = a.getAttribute("data-page") === page;
      a.classList.toggle("is-active", on);
      if (on) {
        a.setAttribute("aria-current", "page");
      } else {
        a.removeAttribute("aria-current");
      }
    });
  }

  /* ---- Specification index ----
     The start page carries an index of the specification, generated from the
     page registry so it cannot fall behind the sidebar. Placed after the status
     table, the way an ontology document leads with its term index. */

  function buildSpecIndex(host) {
    if (host.querySelector(".spec-index")) {
      return;
    }
    var anchorEl = host.querySelector("table");
    // Only the numbered parts. The sidebar tree already lists every page; what
    // it cannot say is that the specification proper is an ordered set of five,
    // and it carries no one-line note per entry.
    var html = "";
    PAGES.filter(function (p) { return p.part; }).forEach(function (p) {
      html += '<li><a href="#' + p.id + '">' +
        '<span class="spec-index-part">' + p.part + "</span>" +
        A.escapeHtml(p.label) + "</a>" +
        '<span class="spec-index-note">' + A.escapeHtml(p.note || "") + "</span></li>";
    });
    var block = document.createElement("section");
    block.className = "spec-index";
    block.innerHTML = '<h2 id="inhalt-der-spezifikation">The specification in five parts</h2>' +
      '<div class="spec-index-cols"><ul>' + html + "</ul></div>";
    if (anchorEl && anchorEl.nextSibling) {
      host.insertBefore(block, anchorEl.nextSibling);
    } else {
      host.appendChild(block);
    }
  }

  /* ---- Page status line ----
     Every page states what a published specification states per part: whether
     it binds, which version it is, when it last changed, and where the machine
     address of its substrate lies. The start page carries the same fields in
     its own status table and is therefore skipped. */

  function addPageStatusLines() {
    PAGES.forEach(function (p) {
      var host = document.getElementById(p.id);
      if (!host || p.id === HOME_PAGE || host.querySelector(".page-head")) {
        return;
      }
      var fm = A.pageFrontmatter[p.id] || {};
      var machine = fm["machine-url"] || p.machine;
      var fields = [
        ["Standing", p.kind === "normative"
          ? "normative, part of the specification"
          : "informative"],
        ["Version", fm.version || null],
        ["Updated", fm.updated || fm.mirrored || null]
      ];
      var html = fields.filter(function (f) { return f[1]; }).map(function (f) {
        return '<span class="page-status-item"><span class="page-status-key">' +
          f[0] + "</span> " + A.escapeHtml(f[1]) + "</span>";
      }).join("");
      if (machine) {
        html += '<span class="page-status-item"><span class="page-status-key">Source</span> ' +
          '<a href="' + A.escapeHtml(machine) + '" target="_blank" rel="noopener"><code>' +
          A.escapeHtml(machine.replace(/^https:\/\/dhcraft\.org\/Promptotyping\//, "")) +
          "</code></a></span>";
      }
      var block = document.createElement("div");
      block.className = "page-head";
      // The registry note says what the page is about. It belongs where the
      // reader stands when asking whether this is the right page, which is the
      // page itself rather than only the index that led here.
      block.innerHTML =
        (p.note ? '<p class="page-note">' + A.escapeHtml(p.note) + "</p>" : "") +
        '<p class="page-status">' + html + "</p>";
      // Insert next to the heading itself. Several renderers wrap the H1 in a
      // block of their own, so the host is not necessarily its parent.
      var h1 = host.querySelector("h1");
      if (h1) {
        h1.insertAdjacentElement("afterend", block);
      } else {
        host.insertBefore(block, host.firstChild);
      }
    });
  }

  /* ---- Routing ----
     A hash names either a page or an anchor inside one. Switching pages is a
     visibility change; everything is rendered once at boot, so every published
     anchor keeps resolving no matter which page is showing. */

  var activePage = null;

  function scrollToAnchor(anchor) {
    var el = anchor && document.getElementById(anchor);
    if (!el) {
      window.scrollTo(0, 0);
      return;
    }
    el.scrollIntoView();
    // Web fonts and late images reflow the page after this first scroll, which
    // leaves a deep link short of its target. Repeat once they have settled.
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () {
        requestAnimationFrame(function () { el.scrollIntoView(); });
      });
    }
  }

  /* Carry the focus over to the page that was just routed to; without it a
     keyboard user stays in the sidebar tree and starts over at its top. The
     hosts are focusable through tabindex="-1" set in mountPages, and
     preventScroll keeps the scroll position that scrollToAnchor just set. */
  function focusActivePage() {
    var el = document.getElementById(activePage) || document.getElementById("content");
    if (!el || typeof el.focus !== "function") {
      return;
    }
    try {
      el.focus({ preventScroll: true });
    } catch (e) {
      el.focus();
    }
  }

  function pageTitle(id) {
    var entry = PAGES.filter(function (p) { return p.id === id; })[0];
    return id === HOME_PAGE || !entry
      ? "Promptotyping. Specification of the Method"
      : entry.label + " — Promptotyping";
  }

  function showPage(id, anchor, moveFocus) {
    var page = isPageId(id) ? id : HOME_PAGE;
    var changed = page !== activePage;
    if (changed) {
      document.querySelectorAll(".doc-page").forEach(function (el) {
        el.classList.toggle("is-active", el.id === page);
      });
      activePage = page;
      markNavActive(page);
      document.title = pageTitle(page);
    }
    scrollToAnchor(anchor && anchor !== page ? anchor : null);
    if (moveFocus && changed) {
      focusActivePage();
    }
  }

  /* Anchor types that do more than reveal a page: a template row opens its
     panel, a concept alias resolves onto its glossary entry. */
  function handleSpecialAnchor(hash) {
    if (/^promptotyping-document-/.test(hash)) {
      showPage("vorlagen");
      A.openTemplatePanel(hash);
      scrollToAnchor(hash);
      return true;
    }
    if (/^glossar-/.test(hash)) {
      showPage("glossar");
      scrollToAnchor(hash);
      return true;
    }
    if (/^konzept-/.test(hash)) {
      var slug = A.konzeptSlug(hash.replace(/^konzept-/, ""));
      if (document.getElementById("glossar-" + slug)) {
        showPage("glossar");
        scrollToAnchor("glossar-" + slug);
      } else {
        A.openGlossarPanel(slug);
      }
      return true;
    }
    return false;
  }

  function handleHash(hash, moveFocus) {
    if (handleSpecialAnchor(hash)) {
      return;
    }
    var page = pageForAnchor(hash);
    if (!page) {
      return;
    }
    showPage(page, hash, moveFocus);
  }

  /* ---- Template URL resolution (shared with 404.html and the inspector) ---- */

  var SITE_BASE = "https://dhcraft.org/Promptotyping/";

  /* Map a Subpath or Hash template URL to its canonical hash anchor.
     Returns the anchor string without the leading '#', or null if no match. */
  function resolveTemplateUrl(url) {
    var rest = url;
    if (rest.indexOf(SITE_BASE) === 0) {
      rest = rest.slice(SITE_BASE.length);
    }
    rest = rest.replace(/^\//, "");

    // Hash form: #promptotyping-document-data or bare promptotyping-document-data
    if (rest.charAt(0) === "#") {
      return rest.slice(1) || null;
    }

    // Subpath form, optionally with a trailing #v0.1 snapshot suffix.
    var hashSuffix = "";
    var hashIdx = rest.indexOf("#");
    if (hashIdx !== -1) {
      hashSuffix = rest.slice(hashIdx + 1);
      rest = rest.slice(0, hashIdx);
    }
    rest = rest.replace(/\/$/, "");
    var segments = rest.split("/");

    if (segments[0] === "promptotyping-document" && segments[1]) {
      var base = "promptotyping-document-" + segments[1];
      return /^v[\d.]+$/.test(hashSuffix) ? base + "-" + hashSuffix : base;
    }
    if (segments[0] === "konzepte" && segments[1]) {
      return "konzept-" + segments[1];
    }
    if (segments[0] === "case-studies" && segments[1]) {
      return "case-" + segments[1];
    }
    if (segments[0] === "konvention" && segments[1]) {
      return "konvention-" + segments[1];
    }
    if (segments[0] === "paper") {
      return segments[1] ? "abschnitt-" + segments[1] : "paper";
    }
    if (segments[0] === "glossar") {
      return "glossar";
    }
    if (segments[0] === "literatur") {
      return "literatur";
    }
    if (segments[0] === "arbeitsumgebung") {
      return "arbeitsumgebung";
    }
    if (segments[0] === "anwendung" || segments[0] === "artefakt" ||
        segments[0] === "verifikation" || segments[0] === "workflow") {
      return segments[0];
    }
    if (segments[0] === "vault") {
      return segments[1] ? "vault-" + segments[1] : "vault";
    }
    // Already a hash-form anchor passed without leading '#'.
    if (/^(promptotyping-document|konzept|case|konvention|abschnitt)-/.test(rest) ||
        rest === "glossar" || rest === "literatur" || rest === "arbeitsumgebung" ||
        rest === "anwendung" || rest === "artefakt" || rest === "verifikation" ||
        rest === "workflow" ||
        rest === "vault" || /^vault-/.test(rest) ||
        rest === "paper") {
      return rest;
    }
    return null;
  }

  A.HOME_PAGE = HOME_PAGE;
  A.PAPER_HOST_ID = PAPER_HOST_ID;
  // Copy: the registry stays the single source and is not written from outside.
  A.listPages = function () {
    return PAGES.map(function (p) {
      return { id: p.id, label: p.label, group: p.group };
    });
  };
  A.pageForAnchor = pageForAnchor;
  A.mountPages = mountPages;
  A.buildNav = buildNav;
  A.buildSpecIndex = buildSpecIndex;
  /* The footer states the version of the specification, which the start page
     already states from its frontmatter. Reading it from the same place keeps
     the two from drifting, as they had by 2026-07-26. */
  function fillFooterState() {
    var fm = A.pageFrontmatter[HOME_PAGE] || {};
    var version = document.getElementById("footer-version");
    var updated = document.getElementById("footer-updated");
    if (version && fm.version) { version.textContent = "Version " + fm.version; }
    if (updated && fm.updated) { updated.textContent = "Updated " + fm.updated; }
  }

  A.addPageStatusLines = addPageStatusLines;
  A.fillFooterState = fillFooterState;
  A.showPage = showPage;
  A.handleHash = handleHash;
  A.resolveTemplateUrl = resolveTemplateUrl;
})(window.PromptotypingApp = window.PromptotypingApp || {});
