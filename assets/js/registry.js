/* Page registry and routing.

   The site is a specification documentation: one page is visible at a time,
   the sidebar tree is the table of contents, and the hash names the page. The
   registry PAGES is the single source for the page hosts, the sidebar, the
   route resolution and the generated specification index, so index.html and
   404.html carry no navigation markup and cannot drift apart. */

(function (A) {
  "use strict";

  /* An entry with a `parent` is a part rather than a page: it is mounted as a
     section inside its parent's host and keeps its own id, so every address
     published under the five part slugs resolves after the merge of F9
     (operator decision 2026-07-29). */
  var PAGES = [
    { id: "ueberblick", label: "Overview", group: "Specification", kind: "normative",
      note: "What the method is and where it applies" },
    { id: "specification", label: "Specification", group: "Specification", kind: "normative",
      note: "The five normative parts, from application to verification" },

    { id: "anwendung", label: "Application", group: "Specification", parent: "specification",
      part: "1", kind: "normative",
      note: "The four phases resolved into actions" },
    { id: "vorlagen", label: "Templates", group: "Specification", parent: "specification",
      part: "2", kind: "normative",
      note: "The full document set and its triggers",
      machine: "data/promptotyping-documents.json" },
    { id: "konvention-v0.1", label: "Convention", group: "Specification", parent: "specification",
      part: "3", kind: "normative",
      note: "Frontmatter, addressing, reading heuristic" },
    { id: "artefakt", label: "Artefact and boundary", group: "Specification", parent: "specification",
      part: "4", kind: "normative",
      note: "Artefact type and handover point" },
    { id: "verifikation", label: "Checking", group: "Specification", parent: "specification",
      part: "5", kind: "normative",
      note: "Kinds of check, levels of check, zones of autonomy" },

    { id: "glossar", label: "Glossary", group: "Reference", kind: "informative",
      note: "Every term of the method defined, with the pages that use it",
      machine: "data/glossar.json" },
    { id: "vault", label: "Vault", group: "Reference", kind: "informative",
      note: "The sources under the load-bearing claims of the paper",
      machine: "data/vault.json" },

    { id: "workflow", label: "Worked workflow", group: "Evidence", kind: "informative",
      note: "A completed case narrated through the four phases" },
    { id: "use-cases", label: "Use Cases", group: "Evidence", kind: "informative",
      note: "The projects the method is documented on", machine: "data/case-studies.json" },

    { id: "tutorial", label: "Tutorial", group: "Tools and practice", kind: "informative",
      note: "Your own first pass, step by step from dataset to promptotype" },
    { id: "praxis", label: "Best Practices", group: "Tools and practice", kind: "informative",
      note: "Method extensions that grew out of applying it" },
    { id: "skills", label: "Skills", group: "Tools and practice", kind: "informative",
      note: "Reusable system prompts for coding and writing",
      machine: "_content/skills/index.md" },
    { id: "arbeitsumgebung", label: "Working environment", group: "Tools and practice", kind: "informative",
      note: "Vault, agent interface and AI harness around the method" },

    { id: "paper", label: "Paper", group: "Paper", kind: "informative",
      note: "Why the method is built this way, and whether it holds",
      machine: "research-artefacts/promptotyping-paper.md" }
  ];

  var HOME_PAGE = "ueberblick";
  var SPEC_PAGE_ID = "specification";
  var PAPER_HOST_ID = "paper";
  /* Host for an address that resolved to nothing. It is a page host like any
     other, but deliberately not a registry entry: it has no place in the
     sidebar tree, in the specification index or in the term index. */
  var NOT_FOUND_PAGE = "not-found";

  /* Sub-anchor families. Each carries the anchor prefix, the registry entry that
     owns every anchor under it, which may be a page or a part, and the URL
     segment that addresses the family as a subpath, or null where the family has
     no subpath form. This is the single
     source for the route resolution and for resolveTemplateUrl below, which is
     why the segment name sits here rather than in a table of its own. */
  var ANCHOR_FAMILIES = [
    { prefix: "abschnitt-", page: "paper", segment: "paper" },
    { prefix: "case-", page: "use-cases", segment: "case-studies" },
    { prefix: "praxis-", page: "praxis", segment: "praxis" },
    { prefix: "skills-", page: "skills", segment: "skills" },
    { prefix: "glossar-", page: "glossar", segment: null },
    { prefix: "konzept-", page: "glossar", segment: "konzepte" },
    { prefix: "vault-", page: "vault", segment: "vault" },
    { prefix: "promptotyping-document-", page: "vorlagen", segment: "promptotyping-document" },
    { prefix: "konvention-", page: "konvention-v0.1", segment: "konvention" }
  ];

  /* The one absolute form of a site address. Everything that prints or reads a
     full URL builds it from here, so the host and the path prefix stand once. */
  var SITE_BASE = "https://dhcraft.org/Promptotyping/";

  /* Anchors of the paper that are not a family: the unnumbered sections and the
     apparatus. */
  var PAPER_ANCHOR = /^(abstract|acknowledgements|literatur|fussnoten|fn-|fnref-)/;

  function entryFor(id) {
    for (var i = 0; i < PAGES.length; i++) {
      if (PAGES[i].id === id) {
        return PAGES[i];
      }
    }
    return null;
  }

  /* Every registry entry is addressable; only an entry without a parent is a
     page host that can be shown. hostPage answers which host an address lands
     in, which is the entry itself for a page and the parent for a part. */
  function isRouteId(id) {
    return !!entryFor(id);
  }

  function isPageId(id) {
    var entry = entryFor(id);
    return !!entry && !entry.parent;
  }

  function hostPage(id) {
    var entry = entryFor(id);
    return entry && entry.parent ? entry.parent : id;
  }

  function partsOf(pageId) {
    return PAGES.filter(function (p) { return p.parent === pageId; });
  }

  function topLevelPages() {
    return PAGES.filter(function (p) { return !p.parent; });
  }

  function familyForAnchor(anchor) {
    for (var i = 0; i < ANCHOR_FAMILIES.length; i++) {
      if (anchor.indexOf(ANCHOR_FAMILIES[i].prefix) === 0) {
        return ANCHOR_FAMILIES[i];
      }
    }
    return null;
  }

  function familyForSegment(segment) {
    for (var i = 0; i < ANCHOR_FAMILIES.length; i++) {
      if (ANCHOR_FAMILIES[i].segment && ANCHOR_FAMILIES[i].segment === segment) {
        return ANCHOR_FAMILIES[i];
      }
    }
    return null;
  }

  /* Which page owns an anchor. Falls back to the DOM, so an anchor that only
     the rendered content knows about still resolves. */
  function pageForAnchor(anchor) {
    if (!anchor) {
      return HOME_PAGE;
    }
    if (isRouteId(anchor)) {
      return hostPage(anchor);
    }
    if (PAPER_ANCHOR.test(anchor)) {
      return PAPER_HOST_ID;
    }
    var family = familyForAnchor(anchor);
    if (family) {
      return hostPage(family.page);
    }
    var el = document.getElementById(anchor);
    var host = el && el.closest ? el.closest(".doc-page") : null;
    return host ? host.id : null;
  }

  /* ---- Page hosts ----
     Mounted before any rendering runs, so the render functions find their
     targets by id exactly as before. */

  /* Directories are scanned rather than read, so they are set tighter. The class
     sits on the host of a page and on the section of a part alike. */
  var REFERENCE_HOSTS = ["glossar", "vault", "vorlagen", "use-cases"];

  function mountPages() {
    var main = document.getElementById("content");
    if (!main) {
      return;
    }
    topLevelPages().forEach(function (p) {
      var el = document.createElement("section");
      // The paper host keeps its own class: renderPaper sectionizes into it.
      el.className = "doc-page placeholder-section" +
        (p.id === PAPER_HOST_ID ? " paper" : "") +
        (REFERENCE_HOSTS.indexOf(p.id) !== -1 ? " is-reference" : "");
      el.id = p.id;
      // Focus target on a page switch; never in the tab order itself.
      el.setAttribute("tabindex", "-1");
      main.appendChild(el);
      mountParts(el, p);
    });
    mountNotFound(main);
  }

  /* A page that holds parts carries its own title and nothing else; the parts
     render into the sections mounted under it, each from its own substrate. */
  function mountParts(host, page) {
    var parts = partsOf(page.id);
    if (!parts.length) {
      return;
    }
    host.classList.remove("placeholder-section");
    host.innerHTML = "<h1>" + A.escapeHtml(page.label) + "</h1>";
    parts.forEach(function (part) {
      var el = document.createElement("section");
      el.className = "spec-part placeholder-section" +
        (REFERENCE_HOSTS.indexOf(part.id) !== -1 ? " is-reference" : "");
      el.id = part.id;
      host.appendChild(el);
    });
  }

  /* Once the parts are rendered, their headings move down one level so the
     merged page has a single H1, and the part number stands at the head of each
     part the way it stands in the tree. The content files are untouched by
     this; heading ids are minted for the paper alone, so nothing addressable
     moves. */
  function foldParts() {
    PAGES.forEach(function (p) {
      var el = p.parent && document.getElementById(p.id);
      if (!el || el.getAttribute("data-folded")) {
        return;
      }
      demoteHeadings(el);
      var head = el.querySelector("h2");
      if (head && p.part) {
        head.insertAdjacentHTML("afterbegin",
          '<span class="spec-part-number">' + A.escapeHtml(p.part) + "</span>");
      }
      el.setAttribute("data-folded", "1");
    });
  }

  function demoteHeadings(el) {
    var found = Array.prototype.slice.call(el.querySelectorAll("h1, h2, h3, h4, h5"));
    found.forEach(function (heading) {
      var level = Number(heading.nodeName.charAt(1)) + 1;
      var lower = document.createElement("h" + level);
      Array.prototype.forEach.call(heading.attributes, function (attr) {
        lower.setAttribute(attr.name, attr.value);
      });
      lower.innerHTML = heading.innerHTML;
      heading.parentNode.replaceChild(lower, heading);
    });
  }

  /* Since 404.html hands every unresolved subpath to the application, the
     not-found state is a state of this page rather than a second document. */
  function mountNotFound(main) {
    var el = document.createElement("section");
    el.className = "doc-page";
    el.id = NOT_FOUND_PAGE;
    el.setAttribute("tabindex", "-1");
    el.innerHTML = "<h1>Address not found</h1>" +
      "<p>This address does not resolve to a page of this specification. " +
      'Start at the <a href="#' + HOME_PAGE + '">overview</a>, or pick a page ' +
      "from the navigation tree.</p>";
    main.appendChild(el);
  }

  function showNotFound(path) {
    var host = document.getElementById(NOT_FOUND_PAGE);
    if (!host) {
      return;
    }
    var line = host.querySelector(".not-found-address");
    if (path && !line) {
      line = document.createElement("p");
      line.className = "not-found-address";
      host.querySelector("h1").insertAdjacentElement("afterend", line);
    }
    if (line) {
      line.innerHTML = "<code>" + A.escapeHtml(path || "") + "</code>";
    }
    showPage(NOT_FOUND_PAGE);
  }

  /* ---- Sidebar tree ---- */

  function subItem(id, number, label) {
    return '<li><a href="#' + id + '" data-section="' + id + '">' +
      (number ? '<span class="docs-nav-part">' + A.escapeHtml(number) + "</span>" : "") +
      A.escapeHtml(label) + "</a></li>";
  }

  /* Two entries carry an inner structure: the specification with its five parts,
     which the registry knows, and the paper with its sections, which only the
     rendered text knows. Both subtrees stand permanently. Nothing in the tree
     opens or closes (operator decision 2026-07-29); the only state it holds is
     which entry the reader is in, and the scrollspy below moves that marker. */
  function navItem(p) {
    var parts = partsOf(p.id);
    var sub = parts.length || p.id === PAPER_HOST_ID
      ? '<ul class="docs-nav-sub" data-subtree="' + p.id + '">' +
        parts.map(function (s) { return subItem(s.id, s.part, s.label); }).join("") +
        "</ul>"
      : "";
    return '<li><a href="#' + p.id + '" data-page="' + p.id + '">' +
      A.escapeHtml(p.label) + "</a>" + sub + "</li>";
  }

  /* One flat list per group run, separated by a gap and carrying no label. Group
     labels read as more structure than the site has (operator decision
     2026-07-26), and since the five parts moved into the specification page the
     heading over them would name a run of two. What the runs do instead is put
     the pages that answer the same kind of question next to each other. */
  function buildNav() {
    var nav = document.getElementById("docs-nav");
    if (!nav) {
      return;
    }
    var html = "";
    var group = null;
    topLevelPages().forEach(function (p) {
      if (p.group !== group) {
        html += (group === null ? "" : "</ul>") + '<ul class="docs-nav-run">';
        group = p.group;
      }
      html += navItem(p);
    });
    nav.innerHTML = html + (group === null ? "" : "</ul>");
  }

  /* ---- Sub-navigation and scrollspy ----
     The paper subtree is built from the rendered sections, the same elements
     that carry the #abschnitt-* anchors, once the content is in the DOM. */

  function buildPaperSubtree() {
    var host = document.querySelector('.docs-nav-sub[data-subtree="' + PAPER_HOST_ID + '"]');
    var paper = document.getElementById(PAPER_HOST_ID);
    if (!host || !paper || host.childNodes.length) {
      return;
    }
    var items = "";
    paper.querySelectorAll(".paper-section").forEach(function (section) {
      var h2 = section.querySelector("h2");
      if (section.id && h2) {
        items += subItem(section.id, null, h2.textContent);
      }
    });
    host.innerHTML = items;
  }

  var spyObserver = null;
  var spyTargets = [];

  function markCurrentSection() {
    var current = null;
    for (var i = 0; i < spyTargets.length; i++) {
      if (spyTargets[i].visible) {
        current = spyTargets[i].id;
        break;
      }
    }
    document.querySelectorAll("#docs-nav a[data-section]").forEach(function (a) {
      var on = a.getAttribute("data-section") === current;
      a.classList.toggle("is-current", on);
      if (on) {
        a.setAttribute("aria-current", "location");
      } else {
        a.removeAttribute("aria-current");
      }
    });
  }

  /* One observer over every section the tree lists. It watches the band under
     the fixed header rather than the whole viewport, so the marked entry is the
     one being read. The inactive pages are display: none and never intersect,
     so a page change clears the marker of the page left behind by itself. */
  function setupScrollspy() {
    if (spyObserver) {
      spyObserver.disconnect();
      spyObserver = null;
    }
    spyTargets = [];
    document.querySelectorAll("#docs-nav a[data-section]").forEach(function (a) {
      var el = document.getElementById(a.getAttribute("data-section"));
      if (el) {
        spyTargets.push({ id: el.id, el: el, visible: false });
      }
    });
    if (!spyTargets.length || typeof IntersectionObserver !== "function") {
      return;
    }
    var header = document.querySelector(".docs-header");
    var top = header ? header.offsetHeight : 52;
    spyObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        spyTargets.forEach(function (t) {
          if (t.el === entry.target) {
            t.visible = entry.isIntersecting;
          }
        });
      });
      markCurrentSection();
    }, { rootMargin: "-" + top + "px 0px -65% 0px", threshold: 0 });
    spyTargets.forEach(function (t) { spyObserver.observe(t.el); });
  }

  document.addEventListener("promptotyping:content-ready", function () {
    buildPaperSubtree();
    setupScrollspy();
  });

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
    // Only the numbered parts, and since the merge of F9 they are sections of
    // the specification page, so each entry addresses a part of one document.
    // The sidebar carries the same five without their one-line notes.
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
      if (!host || p.id === HOME_PAGE || host.querySelector(":scope > .page-head")) {
        return;
      }
      var fm = A.pageFrontmatter[p.id] || {};
      var machine = fm["machine-url"] || p.machine;
      // A part states the version, date and substrate of its own text; that it
      // binds is stated once, by the page it is a part of.
      var fields = p.parent ? [] : [
        ["Standing", p.kind === "normative"
          ? "normative, part of the specification"
          : "informative"]
      ];
      fields = fields.concat([
        ["Version", fm.version || null],
        ["Updated", A.formatDate(fm.updated || fm.mirrored || null)]
      ]);
      var html = fields.filter(function (f) { return f[1]; }).map(function (f) {
        return '<span class="page-status-item"><span class="page-status-key">' +
          f[0] + "</span> " + A.escapeHtml(f[1]) + "</span>";
      }).join("");
      if (machine) {
        var shown = machine.indexOf(SITE_BASE) === 0
          ? machine.slice(SITE_BASE.length) : machine;
        html += '<span class="page-status-item"><span class="page-status-key">Source</span> ' +
          '<a href="' + A.escapeHtml(machine) + '" target="_blank" rel="noopener"><code>' +
          A.escapeHtml(shown) + "</code></a></span>";
      }
      var block = document.createElement("div");
      block.className = "page-head";
      // The registry note says what the page is about. It belongs where the
      // reader stands when asking whether this is the right page, which is the
      // page itself rather than only the index that led here.
      block.innerHTML =
        (p.note ? '<p class="page-note">' + A.escapeHtml(p.note) + "</p>" : "") +
        '<p class="page-status">' + html + "</p>";
      // Insert next to the heading itself. Several renderers wrap the heading in
      // a block of their own, so the host is not necessarily its parent, and a
      // part heads its text with an H2 since foldParts moved it down a level.
      var heading = host.querySelector("h1, h2");
      if (heading) {
        heading.insertAdjacentElement("afterend", block);
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
    if (id === NOT_FOUND_PAGE) {
      return "Address not found — Promptotyping";
    }
    var entry = entryFor(id);
    return id === HOME_PAGE || !entry
      ? "Promptotyping. Specification of the Method"
      : entry.label + " — Promptotyping";
  }

  /* An id that names a part is shown by showing the page it sits in, so a caller
     may pass either without knowing which of the two it holds. */
  function showPage(id, anchor, moveFocus) {
    var target = hostPage(id);
    var page = isPageId(target) || target === NOT_FOUND_PAGE ? target : HOME_PAGE;
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
    if (/^konzept-/.test(hash)) {
      var slug = A.konzeptSlug(hash.replace(/^konzept-/, ""));
      showPage("glossar");
      if (document.getElementById("glossar-" + slug)) {
        scrollToAnchor("glossar-" + slug);
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

  /* ---- Template URL resolution ----
     The one place a subpath is translated into an anchor. The frontmatter
     inspector reads it, and so does the boot in app.js for the path that
     404.html hands over as ?p=, so the subpath vocabulary stands exactly
     once. */

  /* Map a Subpath or Hash template URL to its canonical hash anchor.
     Returns the anchor string without the leading '#', or null if no match.
     The two tables it reads are the ones routing already reads, PAGES for the
     bare page slugs and ANCHOR_FAMILIES for the prefixed families, so the
     subpath vocabulary is stated once. */
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

    // Prefixed family: /paper/{n-slug}, /konzepte/{name}, /vault/{assertion}, ...
    var family = familyForSegment(segments[0]);
    if (family && segments[1]) {
      var anchor = family.prefix + segments[1];
      // Only templates mint snapshot anchors, and only in the form -v{n}.
      if (family.segment === "promptotyping-document" && /^v[\d.]+$/.test(hashSuffix)) {
        anchor += "-" + hashSuffix;
      }
      return anchor;
    }
    if (segments[1]) {
      return null;
    }
    // Bare registry slug, page or part. The five part slugs were page slugs
    // until the merge of F9 and are published as such, so they resolve here
    // exactly as before; the routing then lands them in the page they sit in.
    if (isRouteId(rest)) {
      return rest;
    }
    // The convention is the one part whose id carries a version that its
    // address does not.
    if (rest === "konvention") {
      return "konvention-v0.1";
    }
    // Already a hash-form anchor passed without a leading '#'.
    if (PAPER_ANCHOR.test(rest) || familyForAnchor(rest)) {
      return rest;
    }
    return null;
  }

  /* The twin of resolveTemplateUrl, and the direction it does not cover: the
     address forms of a template, built from the same family table and the same
     base. Whoever prints a template: block, seeds an example or tests an anchor
     for the family reads them here rather than spelling them out again. A call
     without a slug answers with the bare forms, which is how the family prefix
     is asked for. */
  var TEMPLATE_SEGMENT = "promptotyping-document";

  function templateUrls(slug) {
    var family = familyForSegment(TEMPLATE_SEGMENT);
    var name = slug || "";
    return {
      prefix: family.prefix,
      anchor: family.prefix + name,
      subpath: SITE_BASE + family.segment + "/" + name,
      hash: SITE_BASE + "#" + family.prefix + name
    };
  }

  A.HOME_PAGE = HOME_PAGE;
  A.SITE_BASE = SITE_BASE;
  A.PAPER_HOST_ID = PAPER_HOST_ID;
  /* Copy: the registry stays the single source and is not written from outside.
     The term index reads this, and it reads the entries a term can be reported
     on, so a page that holds parts steps back in favour of its parts; naming
     the whole specification would say less than naming the part. */
  A.listPages = function () {
    return PAGES.filter(function (p) { return !partsOf(p.id).length; })
      .map(function (p) {
        return { id: p.id, label: p.label, group: p.group };
      });
  };
  A.pageForAnchor = pageForAnchor;
  A.mountPages = mountPages;
  A.foldParts = foldParts;
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
    if (updated && fm.updated) { updated.textContent = "Updated " + A.formatDate(fm.updated); }
  }

  A.addPageStatusLines = addPageStatusLines;
  A.fillFooterState = fillFooterState;
  A.showPage = showPage;
  A.showNotFound = showNotFound;
  A.handleHash = handleHash;
  A.resolveTemplateUrl = resolveTemplateUrl;
  A.templateUrls = templateUrls;
})(window.PromptotypingApp = window.PromptotypingApp || {});
