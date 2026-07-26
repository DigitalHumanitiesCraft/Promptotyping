/* Promptotyping Site main logic. Vanilla JS, no build step.
   Renders the canonical paper (knowledge/paper.md) and the static content
   files via marked.js, extended with a footnote apparatus, heading ids and a
   tag-stripper for legacy {:.phase-*} markers, drives the TOC scroll-spy and
   the reusable side panel. */

(function () {
  "use strict";

  /* Legacy phase tags ({:.phase-*}) are recognised only to strip them. The
     provenance lane was removed on 2026-06-10 by operator decision; the
     extension stays as a defensive stripper so any residual tag renders as a
     plain paragraph with no visible effect. */
  var STRIPPABLE_PHASE_CLASSES = [
    "phase-preparation",
    "phase-exploration",
    "phase-distillation",
    "phase-implementation"
  ];

  /* The paper is rendered from its canonical source, so the site text cannot
     drift away from the knowledge base. */
  var PAPER_FILE = "knowledge/paper.md";
  var PAPER_HOST_ID = "paper";

  /* Published anchors of the pre-revision section cut, mapped onto the section
     of the current structure that succeeds them. Renaming them is not allowed
     (CLAUDE.md, URL anchor scheme), so they stay as alias targets. */
  var PAPER_ANCHOR_ALIASES = {
    "abschnitt-2-terms-positioning": "abschnitt-2-the-epistemic-frame",
    "abschnitt-3-four-phases": "abschnitt-3-the-method",
    "abschnitt-4-projects": "abschnitt-5-evidence-the-documented-projects",
    "abschnitt-5-epistemic-infrastructure": "abschnitt-4-the-artefact-type"
  };

  /* Headings whose slug is overridden, so a published anchor keeps resolving. */
  var HEADING_ID_OVERRIDES = {
    "references": "literatur"
  };

  /* Part-2 video sits with the project inventory that lists the demonstrated case. */
  var PAPER_VIDEO = {
    youtubeId: "hd_a-NBO_S4",
    title: "Promptotyping Teil 2 (Claude Code)",
    anchorText: "VetMedAI Wissensbilanz"
  };

  /* ---- Page registry ----
     The site is a specification documentation: one page is visible at a time,
     the sidebar tree is the table of contents, and the hash names the page.
     This registry is the single source for the page hosts, the sidebar and the
     route resolution, so index.html and 404.html carry no navigation markup and
     cannot drift apart. */

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

  var PAGE_GROUPS = ["Specification", "Reference", "Evidence", "Tools and practice", "Paper"];
  var HOME_PAGE = "ueberblick";

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

  /* ---- Footnote apparatus ----
     marked v9 has no footnote support. Two extensions cover the Pandoc-style
     syntax: a block tokenizer that consumes the definition lines "[^name]: text"
     and a inline tokenizer that turns each "[^name]" marker into a numbered
     reference. Numbers follow the order of first occurrence in the text; the
     apparatus is appended after the parse, since the definitions may stand
     anywhere in the source. */

  var footnoteDefs = {};       // name -> raw markdown of the definition
  var footnoteOrder = [];      // names in order of first reference
  var footnoteRefCount = {};   // name -> number of references seen
  var footnoteSuppress = false; // true while the apparatus itself is rendered

  function resetFootnotes() {
    footnoteDefs = {};
    footnoteOrder = [];
    footnoteRefCount = {};
  }

  function footnoteNumber(name) {
    var idx = footnoteOrder.indexOf(name);
    if (idx === -1) {
      footnoteOrder.push(name);
      idx = footnoteOrder.length - 1;
    }
    return idx + 1;
  }

  function footnoteRefId(num, occurrence) {
    return "fnref-" + num + (occurrence > 1 ? "-" + occurrence : "");
  }

  function renderFootnoteApparatus() {
    if (!footnoteOrder.length) {
      return "";
    }
    var items = footnoteOrder.map(function (name, i) {
      var num = i + 1;
      var body = footnoteDefs[name];
      var html;
      if (typeof body === "string") {
        footnoteSuppress = true;
        html = marked.parseInline(body);
        footnoteSuppress = false;
      } else {
        html = "<em>Footnote definition missing (" + escapeHtml(name) + ").</em>";
      }
      var backs = "";
      for (var k = 1; k <= (footnoteRefCount[name] || 0); k++) {
        backs += ' <a class="footnote-back" href="#' + footnoteRefId(num, k) +
          '" aria-label="Back to the text">↩</a>';
      }
      return '<li class="footnote-item" id="fn-' + num + '">' + html + backs + "</li>";
    }).join("");

    return '<section class="paper-section footnotes" id="fussnoten">' +
      "<h2>Notes</h2>" +
      '<ol class="footnote-list">' + items + "</ol></section>";
  }

  /* ---- Heading ids ----
     Only enabled while the paper is parsed: the static content files render
     into sections that already own ids like #ueberblick, and a heading of the
     same slug would duplicate them. */

  var headingIdsEnabled = false;
  var headingIdsUsed = {};

  function headingId(plainText) {
    var text = String(plainText).replace(/<[^>]*>/g, "").trim();
    var numbered = /^(\d+(?:\.\d+)*)\.?\s+([\s\S]*)$/.exec(text);
    var id = numbered
      ? "abschnitt-" + numbered[1].replace(/\./g, "-") + "-" + slugify(numbered[2])
      : slugify(text);
    if (HEADING_ID_OVERRIDES[id]) {
      id = HEADING_ID_OVERRIDES[id];
    }
    return id;
  }

  function uniqueHeadingId(id) {
    if (!headingIdsUsed[id]) {
      headingIdsUsed[id] = 1;
      return id;
    }
    headingIdsUsed[id] += 1;
    return id + "-" + headingIdsUsed[id];
  }

  /* ---- marked.js configuration ---- */

  function configureMarked() {
    marked.use({
      gfm: true,
      breaks: false,
      renderer: {
        heading: function (text, level, raw) {
          if (!headingIdsEnabled) {
            return "<h" + level + ">" + text + "</h" + level + ">\n";
          }
          var id = uniqueHeadingId(headingId(raw || text));
          return "<h" + level + ' id="' + id + '">' + text + "</h" + level + ">\n";
        }
      },
      extensions: [{
        name: "classedParagraph",
        level: "block",
        start: function (src) {
          var m = src.match(/^\{:\.[a-z-]+\}/);
          return m ? m.index : undefined;
        },
        tokenizer: function (src) {
          var match = /^\{:\.([a-z-]+)\}\n([\s\S]+?)(?:\n\n|$)/.exec(src);
          if (match) {
            // Only the legacy phase tags are stripped here; anything else falls
            // through to the standard paragraph tokenizer.
            if (STRIPPABLE_PHASE_CLASSES.indexOf(match[1]) === -1) {
              return undefined;
            }
            return {
              type: "classedParagraph",
              raw: match[0],
              tokens: this.lexer.inline(match[2])
            };
          }
        },
        renderer: function (token) {
          // Strip the tag: render a plain paragraph, no class, no lane effect.
          var inner = this.parser.parseInline(token.tokens);
          return "<p>" + inner + "</p>\n";
        }
      }, {
        name: "footnoteDef",
        level: "block",
        start: function (src) {
          var m = src.match(/^\[\^[^\]\s]+\]:/m);
          return m ? m.index : undefined;
        },
        tokenizer: function (src) {
          // One definition: its own line plus any continuation line that neither
          // is blank nor starts the next definition. The blank-line guard must
          // be anchored per line; an unanchored \s*$ only ever matches the end
          // of the whole document, which let a trailing definition swallow the
          // rest of the paper.
          var match = /^\[\^([^\]\s]+)\]:[ \t]*([^\n]*(?:\n(?![ \t]*(?:\n|$)|\[\^)[^\n]*)*)(?:\n+|$)/.exec(src);
          if (!match) {
            return undefined;
          }
          footnoteDefs[match[1]] = match[2].replace(/\n[ \t]*/g, " ").trim();
          return { type: "footnoteDef", raw: match[0] };
        },
        renderer: function () {
          // The definition is not rendered in place; it feeds the apparatus.
          return "";
        }
      }, {
        name: "footnoteRef",
        level: "inline",
        start: function (src) {
          var i = src.indexOf("[^");
          return i === -1 ? undefined : i;
        },
        tokenizer: function (src) {
          if (footnoteSuppress) {
            return undefined;
          }
          var match = /^\[\^([^\]\s]+)\]/.exec(src);
          if (!match) {
            return undefined;
          }
          var name = match[1];
          var num = footnoteNumber(name);
          footnoteRefCount[name] = (footnoteRefCount[name] || 0) + 1;
          return {
            type: "footnoteRef",
            raw: match[0],
            num: num,
            occurrence: footnoteRefCount[name]
          };
        },
        renderer: function (token) {
          return '<sup class="footnote-ref" id="' + footnoteRefId(token.num, token.occurrence) +
            '"><a href="#fn-' + token.num + '">' + token.num + "</a></sup>";
        }
      }]
    });
  }

  /* Render the canonical paper: footnote state and heading ids are scoped to
     this one parse, the apparatus is appended after it. */
  function renderPaperMarkdown(markdown) {
    resetFootnotes();
    headingIdsUsed = {};
    headingIdsEnabled = true;
    var html;
    try {
      html = marked.parse(markdown);
    } finally {
      headingIdsEnabled = false;
    }
    return html + renderFootnoteApparatus();
  }

  /* ---- Section loading and rendering ---- */

  function fetchMarkdown(file) {
    return fetch(file).then(function (res) {
      if (!res.ok) {
        throw new Error("Could not load " + file + " (" + res.status + ").");
      }
      return res.text();
    });
  }

  /* Normalise line endings and strip a leading YAML frontmatter block.
     knowledge/paper.md is headerless and starts with its H1. */
  function stripFrontmatter(text) {
    return text.replace(/\r\n?/g, "\n").replace(/^---\n[\s\S]*?\n---\n?/, "");
  }

  /* Flat scalar fields of a leading frontmatter block. Enough for the page
     status line; nested structures are not used there and stay unparsed. */
  var pageFrontmatter = {};

  function readFrontmatter(text) {
    var m = /^---\n([\s\S]*?)\n---/.exec(text.replace(/\r\n?/g, "\n"));
    if (!m) {
      return {};
    }
    var out = {};
    m[1].split("\n").forEach(function (line) {
      var f = /^([a-zA-Z][\w-]*):[ \t]*(.*)$/.exec(line);
      if (f && f[2]) {
        out[f[1]] = f[2].trim().replace(/^["']|["']$/g, "");
      }
    });
    return out;
  }

  /* ---- Paper view ---- */

  function renderPaper() {
    var host = document.getElementById(PAPER_HOST_ID);
    if (!host) {
      return Promise.resolve();
    }
    return fetchMarkdown(PAPER_FILE)
      .then(function (text) {
        host.innerHTML = renderPaperMarkdown(stripFrontmatter(text));
        host.classList.remove("placeholder-section");
        sectionizePaper(host);
        addPaperAnchorAliases(host);
        buildPaperToc(host);
        injectPaperVideo(host);
        injectUseCaseReference(host);
        // Post-processing per section. The reference list is the citation target
        // itself and the apparatus carries the source notes, so both stay out.
        host.querySelectorAll(".paper-section").forEach(function (section) {
          if (section.id === "literatur" || section.id === "fussnoten") {
            return;
          }
          decorateGlossarTriggers(section);
          decorateCitations(section);
        });
      })
      .catch(function (err) {
        host.innerHTML = '<p class="section-loading">' + err.message + "</p>";
      });
  }

  /* Group the flat rendered paper into one section element per H2, so every
     top-level section is an addressable and observable block. The heading id
     moves to the section; the reading order of the DOM is preserved. */
  function sectionizePaper(host) {
    var nodes = Array.prototype.slice.call(host.childNodes);
    var current = null;
    nodes.forEach(function (node) {
      // The footnote apparatus already is a section; it closes the grouping.
      if (node.nodeType === 1 && node.classList && node.classList.contains("paper-section")) {
        current = null;
        host.appendChild(node);
        return;
      }
      if (node.nodeType === 1 && node.nodeName === "H2") {
        current = document.createElement("section");
        current.className = "paper-section";
        if (node.id) {
          current.id = node.id;
          node.removeAttribute("id");
        }
        host.appendChild(current);
      }
      if (current) {
        current.appendChild(node);
      }
    });
  }

  /* Table of contents of the paper page, built from the same headings the
     anchors are generated from. Sits under the title; the status line is
     inserted between the two later by addPageStatusLines. */
  function buildPaperToc(host) {
    if (host.querySelector(".paper-toc")) {
      return;
    }
    var items = "";
    host.querySelectorAll(".paper-section").forEach(function (section) {
      var h2 = section.querySelector("h2");
      if (!section.id || !h2) {
        return;
      }
      var subs = "";
      section.querySelectorAll("h3[id]").forEach(function (h3) {
        subs += '<li><a href="#' + h3.id + '">' + escapeHtml(h3.textContent) + "</a></li>";
      });
      items += '<li><a href="#' + section.id + '">' + escapeHtml(h2.textContent) + "</a>" +
        (subs ? '<ul class="paper-toc-sub">' + subs + "</ul>" : "") + "</li>";
    });
    if (!items) {
      return;
    }
    var nav = document.createElement("nav");
    nav.className = "paper-toc";
    nav.setAttribute("aria-label", "Contents");
    // The headings carry their own numbering, so the list must not add a second.
    nav.innerHTML = '<p class="paper-toc-title">Contents</p>' +
      '<ul class="paper-toc-list">' + items + "</ul>";
    var h1 = host.querySelector("h1");
    if (h1) {
      h1.insertAdjacentElement("afterend", nav);
    } else {
      host.insertBefore(nav, host.firstChild);
    }
  }

  /* Empty anchor targets for the published pre-revision section anchors. */
  function addPaperAnchorAliases(host) {
    Object.keys(PAPER_ANCHOR_ALIASES).forEach(function (alias) {
      if (document.getElementById(alias)) {
        return;
      }
      var target = document.getElementById(PAPER_ANCHOR_ALIASES[alias]);
      if (!target || !host.contains(target)) {
        return;
      }
      var span = document.createElement("span");
      span.className = "anchor-alias";
      span.id = alias;
      target.insertBefore(span, target.firstChild);
    });
  }

  /* ---- YouTube click-to-load facade ---- */

  function buildVideoFacade(youtubeId, title) {
    var wrap = document.createElement("div");
    wrap.className = "video-embed";

    var facade = document.createElement("button");
    facade.type = "button";
    facade.className = "video-facade";
    facade.setAttribute("aria-label", "Load video: " + title);
    facade.innerHTML =
      '<span class="video-facade-title">' + title + "</span>" +
      '<span class="video-facade-note">A click loads the video from youtube-nocookie.com. ' +
      "Before the click no connection to YouTube is made and no tracking takes place.</span>" +
      '<span class="video-facade-play">Load video</span>';

    facade.addEventListener("click", function () {
      var iframe = document.createElement("iframe");
      iframe.src = "https://www.youtube-nocookie.com/embed/" + youtubeId + "?autoplay=1&rel=0";
      iframe.setAttribute("title", title);
      iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
      iframe.setAttribute("allowfullscreen", "");
      wrap.innerHTML = "";
      wrap.appendChild(iframe);
    });

    wrap.appendChild(facade);
    return wrap;
  }

  /* Place the part-2 video after the block that names the demonstrated case
     (the project inventory), falling back to the end of the evidence section. */
  function injectPaperVideo(host) {
    if (host.querySelector(".video-embed")) {
      return;
    }
    var evidence = evidenceSection(host);
    if (!evidence) {
      return;
    }
    var video = buildVideoFacade(PAPER_VIDEO.youtubeId, PAPER_VIDEO.title);
    var blocks = evidence.querySelectorAll("p, table");
    var target = null;
    for (var i = 0; i < blocks.length; i++) {
      if (blocks[i].textContent.indexOf(PAPER_VIDEO.anchorText) !== -1) {
        target = blocks[i];
        break;
      }
    }
    if (target) {
      target.parentNode.insertBefore(video, target.nextSibling);
    } else {
      evidence.appendChild(video);
    }
  }

  function evidenceSection(host) {
    return document.getElementById(PAPER_ANCHOR_ALIASES["abschnitt-4-projects"]) ||
      host.querySelector(".paper-section");
  }

  /* Append a compact reference block to the end of the evidence section,
     pointing the in-text projects at the curated use-case gallery (original
     project vision: case studies as cards within the paper text). */
  function injectUseCaseReference(host) {
    var sectionEl = evidenceSection(host);
    if (!sectionEl || sectionEl.querySelector(".usecase-reference")) {
      return;
    }
    var block = document.createElement("aside");
    block.className = "usecase-reference";
    block.innerHTML =
      "<p>The projects named in this section are documented in the curated " +
      '<a href="#use-cases">use-case gallery</a>, grouped by where in the research data ' +
      "lifecycle the method operates. Every card carries a stable anchor and, where " +
      "cleared, links to repository, demo and process video.</p>" +
      '<p class="usecase-reference-links">' +
      '<a href="#case-herdata">HerData</a>' +
      '<a href="#case-klawiter-rescue">Klawiter Bibliography Rescue</a>' +
      '<a href="#case-coocr-htr">coOCR-HTR</a>' +
      '<a href="#case-m3gim">M3GIM</a>' +
      '<a href="#use-cases">To the full gallery</a>' +
      "</p>";
    sectionEl.appendChild(block);
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

  function pageTitle(id) {
    var entry = PAGES.filter(function (p) { return p.id === id; })[0];
    return id === HOME_PAGE || !entry
      ? "Promptotyping. Specification of the Method"
      : entry.label + " — Promptotyping";
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

  /* ---- Theme ----
     The stored choice wins over the system preference. The document class is
     set in an inline prelude before first paint; this only wires the toggle. */

  var THEME_KEY = "promptotyping-theme";

  function currentTheme() {
    var set = document.documentElement.getAttribute("data-theme");
    if (set) {
      return set;
    }
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark" : "light";
  }

  function setupThemeToggle() {
    var btn = document.getElementById("theme-toggle");
    if (!btn) {
      return;
    }
    var label = function () {
      btn.setAttribute("title", currentTheme() === "dark"
        ? "Switch to the light theme" : "Switch to the dark theme");
    };
    label();
    btn.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem(THEME_KEY, next);
      } catch (e) {
        // Private mode: the choice holds for this page load only.
      }
      label();
    });
  }

  /* ---- Epistemic function marks ----
     The five interface categories of paper section 4.2 are the one nominal
     scale on this site, so they are the one place a hue carries meaning. */

  var FUNCTION_SLUGS = ["verification", "exploration", "edition", "capture", "audit"];

  function functionVar(name) {
    var slug = String(name).trim().toLowerCase();
    return FUNCTION_SLUGS.indexOf(slug) === -1 ? null : "var(--fn-" + slug + ")";
  }

  /* Artefakt page: the bullet list of the five functions carries its hue on
     the marker, the category name stays in the text beside it. */
  function markFunctionList(host) {
    var lists = host.querySelectorAll("ul");
    for (var i = 0; i < lists.length; i++) {
      var items = lists[i].querySelectorAll(":scope > li");
      var hits = 0;
      items.forEach(function (li) {
        var b = li.querySelector("strong");
        if (b && functionVar(b.textContent.replace(/\.$/, ""))) {
          hits += 1;
        }
      });
      if (hits < 3) {
        continue;
      }
      lists[i].classList.add("fn-list");
      items.forEach(function (li) {
        var b = li.querySelector("strong");
        var v = b && functionVar(b.textContent.replace(/\.$/, ""));
        if (v) {
          li.style.setProperty("--fn", v);
        }
      });
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
      if (!host || p.id === HOME_PAGE || host.querySelector(".page-status")) {
        return;
      }
      var fm = pageFrontmatter[p.id] || {};
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
          f[0] + "</span> " + escapeHtml(f[1]) + "</span>";
      }).join("");
      if (machine) {
        var href = /^https?:/.test(machine) ? machine : machine;
        html += '<span class="page-status-item"><span class="page-status-key">Source</span> ' +
          '<a href="' + escapeHtml(href) + '" target="_blank" rel="noopener"><code>' +
          escapeHtml(machine.replace(/^https:\/\/dhcraft\.org\/Promptotyping\//, "")) +
          "</code></a></span>";
      }
      var block = document.createElement("p");
      block.className = "page-status";
      block.innerHTML = html;
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

  /* ---- Specification index ----
     The start page carries an index of the specification, generated from the
     page registry so it cannot fall behind the sidebar. Placed after the status
     table, the way an ontology document leads with its term index. */

  function buildSpecIndex(host) {
    if (host.querySelector(".spec-index")) {
      return;
    }
    var anchorEl = host.querySelector("table");
    var html = "";
    PAGE_GROUPS.forEach(function (group) {
      var pages = PAGES.filter(function (p) {
        return p.group === group && p.id !== HOME_PAGE;
      });
      if (!pages.length) {
        return;
      }
      html += '<div class="spec-index-group"><p class="spec-index-title">' +
        escapeHtml(group) + "</p><ul>";
      pages.forEach(function (p) {
        var num = p.part ? '<span class="spec-index-part">' + p.part + "</span>" : "";
        html += '<li><a href="#' + p.id + '">' + num + escapeHtml(p.label) + "</a>" +
          '<span class="spec-index-note">' + escapeHtml(p.note || "") + "</span></li>";
      });
      html += "</ul></div>";
    });
    var block = document.createElement("section");
    block.className = "spec-index";
    block.innerHTML = '<h2 id="inhalt-der-spezifikation">Contents of the specification</h2>' +
      '<div class="spec-index-cols">' + html + "</div>";
    if (anchorEl && anchorEl.nextSibling) {
      host.insertBefore(block, anchorEl.nextSibling);
    } else {
      host.appendChild(block);
    }
  }

  /* ---- Sidebar tree ---- */

  function buildNav() {
    var nav = document.getElementById("docs-nav");
    if (!nav) {
      return;
    }
    var html = "";
    PAGE_GROUPS.forEach(function (group) {
      var pages = PAGES.filter(function (p) { return p.group === group; });
      if (!pages.length) {
        return;
      }
      html += '<p class="docs-nav-group">' + escapeHtml(group) + "</p><ul>";
      pages.forEach(function (p) {
        var num = p.part ? '<span class="docs-nav-part">' + p.part + "</span>" : "";
        html += '<li><a href="#' + p.id + '" data-page="' + p.id + '">' +
          num + escapeHtml(p.label) + "</a></li>";
      });
      html += "</ul>";
    });
    nav.innerHTML = html;
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

  /* ---- Template URL resolution (shared with 404.html and Sprint-2 inspector) ---- */

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


  /* ---- Vault sub-view ----
     The Grounded Vault under the paper, read from the generated index
     data/vault.json (vault/tools/build_site_index.py). The section lists the
     topic maps with their claims; a claim opens in the side panel with its
     statement and its grounding anchors, and the anchors link to the distillate
     Markdown in the repository. */

  var vaultClaimsBySlug = {};
  var vaultDistillatesBySlug = {};

  function renderVault() {
    var el = document.getElementById("vault");
    if (!el) {
      return Promise.resolve();
    }
    return fetch("data/vault.json")
      .then(function (res) {
        if (!res.ok) {
          throw new Error("Could not load vault.json (" + res.status + ").");
        }
        return res.json();
      })
      .then(function (data) {
        (data.claims || []).forEach(function (c) { vaultClaimsBySlug[c.slug] = c; });
        (data.distillates || []).forEach(function (d) { vaultDistillatesBySlug[d.slug] = d; });

        var blocks = (data.topics || []).map(function (topic) {
          var items = topic.claims.map(function (slug) {
            var claim = vaultClaimsBySlug[slug];
            if (!claim) {
              return "";
            }
            return '<li class="vault-claim-item" id="vault-' + slug + '">' +
              '<button type="button" class="vault-claim" data-claim="' + slug + '">' +
              escapeHtml(claim.title) + "</button>" +
              '<span class="vault-claim-meta">' + claim.grounding.length +
              (claim.grounding.length === 1 ? " anchor" : " anchors") + "</span></li>";
          }).join("");
          return '<section class="vault-topic" id="vault-topic-' +
            topic.topic.toLowerCase() + '">' +
            "<h3>" + escapeHtml(topic.topic) + "</h3>" +
            '<p class="vault-topic-desc">' + escapeHtml(topic.description) + "</p>" +
            '<ul class="vault-claim-list">' + items + "</ul></section>";
        }).join("");

        el.classList.remove("placeholder-section");
        el.innerHTML =
          "<h1>Vault</h1>" +
          "<p>The evidence layer under the paper. Sources are condensed into distillates " +
          "of quotation-checked single statements, and the claims that the paper's " +
          "load-bearing sentences rest on are built from those statements. The anchors " +
          "resolve downwards only, from the assertion to the source. A claim opens in the " +
          "side panel with its statement and its anchors.</p>" +
          '<p class="vault-repo-note"><a href="vault/" target="_blank" rel="noopener">' +
          "Vault in the repository</a></p>" +
          '<div class="vault-topics">' + blocks + "</div>";

        el.addEventListener("click", function (ev) {
          var btn = ev.target.closest(".vault-claim");
          if (btn) {
            openVaultClaim(btn.getAttribute("data-claim"));
          }
        });
      })
      .catch(function (err) {
        el.innerHTML = '<p class="section-loading">' + err.message + "</p>";
      });
  }

  function openVaultClaim(slug) {
    var claim = vaultClaimsBySlug[slug];
    if (!claim) {
      return;
    }
    var anchors = claim.grounding.map(function (g) {
      var dist = vaultDistillatesBySlug[g.distillate];
      var label = dist ? dist.title : g.distillate;
      var href = dist ? dist.path : null;
      var stmt = g.statement ? ' <span class="vault-anchor-id">' + escapeHtml(g.statement) + "</span>" : "";
      return "<li>" + (href
        ? '<a href="' + href + '" target="_blank" rel="noopener">' + escapeHtml(label) + "</a>"
        : escapeHtml(label)) + stmt + "</li>";
    }).join("");

    var contested = claim.contestedWith.length
      ? '<p class="vault-panel-contested">Contested with ' +
        claim.contestedWith.map(escapeHtml).join(", ") + "</p>"
      : "";

    openSidePanel(claim.title,
      '<p class="vault-panel-status">Status ' + escapeHtml(claim.status) +
      (claim.topics.length ? " &middot; " + claim.topics.map(escapeHtml).join(", ") : "") + "</p>" +
      "<p>" + escapeHtml(claim.statement) + "</p>" +
      contested +
      "<h3>Grounding</h3><ul class=\"vault-anchor-list\">" + anchors + "</ul>");
  }

  /* ---- Reusable side panel ---- */

  /* Generic slide-in panel. Later work packages (Vorlagen, Glossar, Cases)
     call this with a rendered title and HTML body. */

  var panelOpenerEl = null; // element that triggered the panel, for focus return

  function openSidePanel(title, html) {
    var panel = document.getElementById("side-panel");
    var backdrop = document.getElementById("side-panel-backdrop");
    var titleEl = document.getElementById("side-panel-title");
    var bodyEl = document.getElementById("side-panel-body");
    if (!panel || !bodyEl) {
      return;
    }
    // Track the element that opened the panel so focus can return on close.
    panelOpenerEl = document.activeElement || null;
    titleEl.textContent = title || "";
    bodyEl.innerHTML = html || "";
    panel.classList.add("open");
    panel.setAttribute("aria-hidden", "false");
    if (backdrop) {
      backdrop.classList.add("visible");
    }
    // Move focus into the panel: prefer close button, fall back to panel itself.
    var closeBtn = document.getElementById("side-panel-close");
    if (closeBtn) {
      closeBtn.focus();
    } else {
      panel.setAttribute("tabindex", "-1");
      panel.focus();
    }
  }

  function closeSidePanel() {
    var panel = document.getElementById("side-panel");
    var backdrop = document.getElementById("side-panel-backdrop");
    if (!panel) {
      return;
    }
    panel.classList.remove("open");
    panel.setAttribute("aria-hidden", "true");
    if (backdrop) {
      backdrop.classList.remove("visible");
    }
    // Return focus to the trigger element.
    if (panelOpenerEl && typeof panelOpenerEl.focus === "function") {
      panelOpenerEl.focus();
      panelOpenerEl = null;
    }
  }

  function setupSidePanel() {
    var closeBtn = document.getElementById("side-panel-close");
    var backdrop = document.getElementById("side-panel-backdrop");
    if (closeBtn) {
      closeBtn.addEventListener("click", closeSidePanel);
    }
    if (backdrop) {
      backdrop.addEventListener("click", closeSidePanel);
    }
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeSidePanel();
      }
    });
  }

  /* ---- Template data and side panel ---- */

  var templateDocs = [];
  var templateBySlug = {};
  var templatePanelCache = {};

  /* Build the copyable template: frontmatter block for a document, with the
     machine-url as a comment line so an agent sees the deterministic .md URL. */
  function templateFrontmatterBlock(doc) {
    return "template:\n" +
      "  name: " + doc.title + "\n" +
      "  version: " + doc.version + "\n" +
      "  url: https://dhcraft.org/Promptotyping/promptotyping-document/" + doc.slug + "\n" +
      "  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-" + doc.slug + "\n" +
      "  # machine-url (static raw text, retrievable without JavaScript):\n" +
      "  # " + doc.machineUrl;
  }

  /* Open the side panel with the fully rendered template mirror. anchor is the
     canonical hash anchor, e.g. promptotyping-document-data. */
  function openTemplatePanel(anchor) {
    if (!anchor) {
      return;
    }
    var slug = anchor.replace(/^promptotyping-document-/, "").replace(/-v[\d.]+$/, "");
    var doc = templateBySlug[slug];
    var title = doc ? doc.title : "Template";

    if (templatePanelCache[slug]) {
      openSidePanel(title, templatePanelCache[slug]);
      setHashSilently("promptotyping-document-" + slug);
      return;
    }

    openSidePanel(title, '<p class="section-loading">Loading.</p>');
    fetchMarkdown("_content/promptotyping-document/" + slug + ".md")
      .then(function (text) {
        var html = marked.parse(stripFrontmatter(text));
        var footer = doc ? renderTemplateFooter(doc) : "";
        var full = html + footer;
        templatePanelCache[slug] = full;
        openSidePanel(title, full);
        wireTemplatePanelFooter(doc);
        setHashSilently("promptotyping-document-" + slug);
      })
      .catch(function (err) {
        openSidePanel(title, '<p class="section-loading">' + err.message + "</p>");
      });
  }

  function renderTemplateFooter(doc) {
    var block = templateFrontmatterBlock(doc);
    return '<div class="panel-footer">' +
      '<button type="button" class="panel-copy" data-copy="' +
        encodeURIComponent(block) + '">Copy frontmatter block</button> ' +
      '<a href="' + doc.machineUrl + '" target="_blank" rel="noopener">Open markdown</a>' +
      '<pre class="panel-frontmatter"><code>' + escapeHtml(block) + "</code></pre>" +
      "</div>";
  }

  /* The panel body is replaced on each open, so wire the copy button after the
     content for this doc is injected. */
  function wireTemplatePanelFooter() {
    var bodyEl = document.getElementById("side-panel-body");
    if (!bodyEl) {
      return;
    }
    var btn = bodyEl.querySelector(".panel-copy");
    if (btn) {
      btn.addEventListener("click", function () {
        var text = decodeURIComponent(btn.getAttribute("data-copy"));
        copyText(text, btn, "Copy frontmatter block");
      });
    }
  }

  function copyText(text, btn, resetLabel) {
    function done() {
      if (btn) {
        btn.textContent = "Copied";
        setTimeout(function () { btn.textContent = resetLabel; }, 1500);
      }
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text, done); });
    } else {
      fallbackCopy(text, done);
    }
  }

  function fallbackCopy(text, done) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (e) { /* ignore */ }
    document.body.removeChild(ta);
    if (done) { done(); }
  }

  function escapeHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  /* Update the hash without triggering the global hashchange reload handler. */
  var suppressHashChange = false;
  function setHashSilently(anchor) {
    suppressHashChange = true;
    window.location.hash = anchor;
    setTimeout(function () { suppressHashChange = false; }, 0);
  }

  /* ---- Static section rendering (overview, practice, skills, convention) ---- */

  function renderMarkdownInto(sectionId, file, after) {
    var el = document.getElementById(sectionId);
    if (!el) {
      return Promise.resolve();
    }
    return fetchMarkdown(file)
      .then(function (text) {
        pageFrontmatter[sectionId] = readFrontmatter(text);
        el.innerHTML = marked.parse(stripFrontmatter(text));
        el.classList.remove("placeholder-section");
        if (typeof after === "function") {
          after(el);
        }
      })
      .catch(function (err) {
        el.innerHTML = '<p class="section-loading">' + err.message + "</p>";
      });
  }

  function slugify(text) {
    return text.toLowerCase()
      .replace(/[ä]/g, "ae").replace(/[ö]/g, "oe").replace(/[ü]/g, "ue")
      .replace(/[ß]/g, "ss")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  /* Praxis: each section heading gets a stable #praxis-{slug} anchor matching
     the 404 route /praxis/{slug}. praxis.md uses H2 for its sections (H1 is the
     page title), so anchor H2 and H3 alike. */
  function renderPraxis() {
    return renderMarkdownInto("praxis", "_content/praxis.md", function (el) {
      el.querySelectorAll("h2, h3").forEach(function (h) {
        h.id = "praxis-" + slugify(h.textContent);
        h.classList.add("anchored-heading");
      });
    });
  }

  /* Skills: index intro, then coding and writing as sub-blocks with stable
     anchors #skills-coding / #skills-writing; prompt code blocks get a copy
     button. */
  function renderSkills() {
    var host = document.getElementById("skills");
    if (!host) {
      return Promise.resolve();
    }
    host.classList.remove("placeholder-section");
    host.innerHTML =
      '<div id="skills-intro"></div>' +
      '<div class="skills-block" id="skills-coding"></div>' +
      '<div class="skills-block" id="skills-writing"></div>';

    return Promise.all([
      renderMarkdownInto("skills-intro", "_content/skills/index.md"),
      renderMarkdownInto("skills-coding", "_content/skills/coding.md", addCodeCopyButtons),
      renderMarkdownInto("skills-writing", "_content/skills/writing.md", addCodeCopyButtons)
    ]);
  }

  function addCodeCopyButtons(el) {
    el.querySelectorAll("pre").forEach(function (pre) {
      if (pre.querySelector(".code-copy")) {
        return;
      }
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "code-copy";
      btn.textContent = "Copy";
      btn.addEventListener("click", function () {
        var code = pre.querySelector("code");
        copyText(code ? code.textContent : pre.textContent, btn, "Copy");
      });
      pre.appendChild(btn);
    });
  }

  /* ---- Template table ---- */

  function renderVorlagen() {
    var el = document.getElementById("vorlagen");
    if (!el) {
      return Promise.resolve();
    }
    return fetch("data/promptotyping-documents.json")
      .then(function (res) {
        if (!res.ok) {
          throw new Error("Could not load promptotyping-documents.json (" + res.status + ").");
        }
        return res.json();
      })
      .then(function (data) {
        templateDocs = data.documents || [];
        templateDocs.forEach(function (d) { templateBySlug[d.slug] = d; });

        var rows = templateDocs.map(function (d) {
          return '<tr class="vorlage-row" id="promptotyping-document-' + d.slug + '" ' +
            'tabindex="0" role="button" data-slug="' + d.slug + '">' +
            "<td>" + escapeHtml(d.title) + "</td>" +
            "<td>" + escapeHtml(d.funktion) + "</td>" +
            '<td class="vorlagen-trigger">' + escapeHtml(d.trigger || "") + "</td>" +
            "<td><code>" + escapeHtml(d.datei) + "</code></td>" +
            "<td>" + escapeHtml(d.typ) + "</td>" +
            "<td>" + escapeHtml(d.version) + "</td>" +
            "<td>" + escapeHtml(d.status) + "</td>" +
            "</tr>";
        }).join("");

        el.classList.remove("placeholder-section");
        el.innerHTML =
          '<img class="vorlagen-icon" src="assets/promptotyping-logo.png" ' +
          'alt="Promptotyping mark" width="100" height="100">' +
          "<h1>Templates</h1>" +
          "<p>This page gathers the specification of the method, the fillable template " +
          "catalogue, the underlying convention, machine access through the " +
          "<code>template:</code> field, and the technology baseline for static web tools.</p>" +
          '<nav class="vorlagen-subnav" aria-label="Specification navigation">' +
          '<a href="#vorlagen-katalog">Catalogue</a>' +
          '<a href="#vorlagen-konvention">Convention</a>' +
          '<a href="#vorlagen-maschinenzugriff">Machine access</a>' +
          '<a href="#vorlagen-technology-baseline">Technology Baseline</a>' +
          "</nav>" +

          '<div class="vorlagen-block" id="vorlagen-katalog">' +
          "<h3>Catalogue</h3>" +
          "<p>Fillable templates for the Promptotyping Documents in the <code>knowledge/</code> " +
          "folder of a repository. Each template addresses a function rather than a fixed file " +
          "name. A click on a row opens the full template specification in the side panel.</p>" +
          '<table class="vorlagen-table"><thead><tr>' +
          "<th>Template</th><th>Function</th><th>Applies when</th><th>Recommended file</th><th>Type</th><th>Version</th><th>Status</th>" +
          "</tr></thead><tbody>" + rows + "</tbody></table>" +
          "</div>" +

          '<div class="vorlagen-block" id="vorlagen-konvention">' +
          "<h3>Convention</h3>" +
          "<p>The Konvention Promptotyping Documents describes which functions a knowledge base " +
          "in the <code>knowledge/</code> folder of a repository covers, from navigation through " +
          "specification and architecture to provenance. It fixes the frontmatter vocabulary with " +
          "which a document declares its origin, its template and its machine address, and assigns " +
          "each function to one of the three analytical document types Knowledge, Process or " +
          "Action. For every function it names a trigger criterion by which an agent decides " +
          "whether a given repository needs the document. The template catalogue above is the " +
          "fillable extract of these functions. The full convention stands " +
          '<a href="#konvention-v0.1">further down on this page</a>.</p>' +
          "</div>" +

          '<div class="vorlagen-block" id="vorlagen-maschinenzugriff">' +
          "<h3>Machine access</h3>" +
          renderInspector() +
          '<p class="vorlagen-machine-note">For machines the canonical retrieval form of every ' +
          "template is the static markdown URL under <code>_content/</code>. It delivers the raw " +
          "markdown text straight from the GitHub Pages repository root, without the single-page " +
          "JavaScript having to run. Pattern: " +
          "<code>https://dhcraft.org/Promptotyping/_content/promptotyping-document/{slug}.md</code>. " +
          "The subpath and hash forms carried in the <code>template:</code> field are the " +
          "human-readable addresses; resolving a subpath presupposes JavaScript. Whoever needs the " +
          "raw text deterministically and without a browser environment uses the static " +
          "<code>_content/</code> markdown URL.</p>" +
          "</div>" +

          '<div class="vorlagen-block" id="vorlagen-technology-baseline">' +
          "<h3>Technology Baseline</h3>" +
          "<p>A Technology Baseline carries the project-independent technology knowledge for a " +
          "recurring artefact type, so that a single project instance documents only its " +
          "deviations in its <code>architecture.md</code> instead of arguing the stack again. This " +
          "repository carries such a baseline for the method's most frequent artefact type, the " +
          "self-contained static web tool of HTML, CSS and JavaScript without a build step. It " +
          "records the rules, no build, vanilla as the default, vendored libraries only under a " +
          "compromise rule, no external runtime calls, and grounds them in generatability, " +
          "publishability and durability. Status draft.</p>" +
          '<p class="vorlagen-tb-links">' +
          '<a href="https://dhcraft.org/Promptotyping/_content/technology-baseline.md" target="_blank" rel="noopener">Machine address</a>' +
          '<a href="_content/technology-baseline.md" target="_blank" rel="noopener">Open in the repository</a>' +
          "</p>" +
          "</div>";

        wireVorlagenRows(el);
      })
      .catch(function (err) {
        el.innerHTML = '<p class="section-loading">' + err.message + "</p>";
      });
  }

  function renderInspector() {
    return '<div class="frontmatter-inspector" data-component="frontmatter-inspector">' +
      "<h3>Frontmatter inspector</h3>" +
      "<p>A Promptotyping repository links the authoritative template specification through a " +
      "<code>template:</code> field in its frontmatter. A whole frontmatter block can be pasted " +
      "here. The inspector reads <code>template.url</code> or <code>template.alias</code>, checks " +
      "the URL against the anchor scheme of this site, and opens the referenced template in the " +
      "side panel.</p>" +
      '<textarea name="frontmatter" rows="9" spellcheck="false" ' +
      'aria-label="YAML frontmatter block"></textarea>' +
      '<div class="inspector-controls">' +
      '<button type="button" class="inspector-resolve">Resolve template</button>' +
      '<span class="inspector-status" role="status" aria-live="polite"></span>' +
      "</div></div>";
  }

  function wireVorlagenRows(el) {
    el.querySelectorAll(".vorlage-row").forEach(function (row) {
      var slug = row.getAttribute("data-slug");
      function open() { openTemplatePanel("promptotyping-document-" + slug); }
      row.addEventListener("click", open);
      row.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open();
        }
      });
    });
  }

  /* ---- Use-cases section (host markup; module renders cards) ---- */

  function renderUseCasesHost() {
    var el = document.getElementById("use-cases");
    if (!el) {
      return;
    }
    el.classList.remove("placeholder-section");
    el.setAttribute("data-component", "case-study-filter");
    el.innerHTML =
      "<h1>Use Cases</h1>" +
      "<p>A curated selection of publicly documented projects, grouped by where in the research " +
      "data lifecycle the method operates. The full body of evidence stands in the " +
      '<a href="#abschnitt-5-evidence-the-documented-projects">paper, section 5</a>.</p>' +
      '<div class="case-filter-host"></div>' +
      '<div class="case-list-host"></div>';
  }

  /* ---- Glossary (A6) ---- */

  var glossarEntries = [];
  var glossarBySlug = {};

  /* Concept alias anchors so /konzepte/{name} routing resolves. Maps the
     #konzept-{name} alias to the canonical glossar slug. */
  var KONZEPT_ALIASES = {
    "context-engineering": "context-engineering",
    "vibe-coding": "vibe-coding",
    "eil": "critical-expert-in-the-loop",
    "critical-expert-in-the-loop": "critical-expert-in-the-loop",
    "asymmetric-amplification": "asymmetric-amplification",
    "epistemic-infrastructure": "epistemic-infrastructure",
    "scholar-centered-design": "scholar-centered-design",
    "context-rot": "context-rot",
    "co-intelligence-eil": "co-intelligence",
    "agentic-engineering": "agentic-engineering",
    "spec-driven-development": "spec-driven-development",
    "verification-validation": "verification-validation",
    "forschungsartefakt": "forschungsartefakt"
  };

  function renderGlossar() {
    var el = document.getElementById("glossar");
    if (!el) {
      return Promise.resolve();
    }
    return fetch("data/glossar.json")
      .then(function (res) {
        if (!res.ok) {
          throw new Error("Could not load glossar.json (" + res.status + ").");
        }
        return res.json();
      })
      .then(function (data) {
        glossarEntries = (data.eintraege || []).slice().sort(function (a, b) {
          return a.begriff.localeCompare(b.begriff, "de");
        });
        glossarEntries.forEach(function (e) { glossarBySlug[e.slug] = e; });

        var items = glossarEntries.map(function (e) {
          return '<div class="glossar-entry" id="glossar-' + e.slug + '">' +
            '<h3 class="glossar-term">' + escapeHtml(e.begriff) + "</h3>" +
            '<p class="glossar-kurz">' + escapeHtml(e.kurz) + "</p>" +
            '<p class="glossar-voll">' + escapeHtml(e.voll) + "</p>" +
            '<p class="glossar-quelle">Source: ' + escapeHtml(e.quelle) + "</p>" +
            "</div>";
        }).join("");

        // Concept alias anchor targets (empty spans) so #konzept-{name} resolves
        // into the glossar entry via scroll. Each points at its glossar entry.
        var aliasAnchors = Object.keys(KONZEPT_ALIASES).map(function (alias) {
          var slug = KONZEPT_ALIASES[alias];
          return '<span class="konzept-alias" id="konzept-' + alias +
            '" data-glossar="' + slug + '"></span>';
        }).join("");

        // Sub-navigation: one entry per initial, so the list is navigable
        // without scrolling through it.
        var seen = {};
        var initials = [];
        glossarEntries.forEach(function (e) {
          var letter = e.begriff.charAt(0).toUpperCase();
          if (!seen[letter]) {
            seen[letter] = e.slug;
            initials.push(letter);
          }
        });
        var jumpBar = '<nav class="glossar-jump" aria-label="Glossary by initial letter">' +
          initials.map(function (letter) {
            return '<a href="#glossar-' + seen[letter] + '">' + letter + "</a>";
          }).join("") + "</nav>";

        el.classList.remove("placeholder-section");
        el.innerHTML =
          "<h1>Glossary</h1>" +
          "<p>Terms of the Promptotyping method and of this site, in alphabetical order. In the " +
          "reading flow of the paper the first occurrence of a term is marked as a trigger. Terms " +
          "the paper text does not carry declare themselves as site vocabulary in their source " +
          "line.</p>" +
          jumpBar +
          aliasAnchors +
          '<div class="glossar-list">' + items + "</div>";
      })
      .catch(function (err) {
        el.innerHTML = '<p class="section-loading">' + err.message + "</p>";
      });
  }

  function openGlossarPanel(slug) {
    var e = glossarBySlug[slug];
    if (!e) {
      return;
    }
    var html =
      '<p class="glossar-kurz">' + escapeHtml(e.kurz) + "</p>" +
      "<p>" + escapeHtml(e.voll) + "</p>" +
      '<p class="glossar-quelle">Source: ' + escapeHtml(e.quelle) + "</p>" +
      '<p class="panel-footer"><a href="#glossar-' + e.slug + '">Show in the glossary</a></p>';
    openSidePanel(e.begriff, html);
  }

  /* ---- Glossary triggers in the paper reading flow ----
     After a paper section renders, mark the first occurrence of each glossar
     term in that section (text-node scan, case-insensitive, outside links, code,
     headings). One pass per section; terms matched longest-first to avoid
     swallowing shorter terms; no overlaps. */

  function decorateGlossarTriggers(sectionEl) {
    if (!glossarEntries.length || !sectionEl) {
      return;
    }
    var terms = glossarEntries.map(function (e) {
      return { term: e.begriff, slug: e.slug, lc: e.begriff.toLowerCase() };
    }).sort(function (a, b) { return b.term.length - a.term.length; });

    var used = {};

    var walker = document.createTreeWalker(sectionEl, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        var p = node.parentNode;
        while (p && p !== sectionEl) {
          var tag = p.nodeName;
          if (tag === "A" || tag === "CODE" || tag === "PRE" ||
              tag === "H1" || tag === "H2" || tag === "H3" || tag === "H4" ||
              (p.classList && p.classList.contains("glossar-trigger"))) {
            return NodeFilter.FILTER_REJECT;
          }
          p = p.parentNode;
        }
        return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });

    var textNodes = [];
    var n;
    while ((n = walker.nextNode())) {
      textNodes.push(n);
    }

    textNodes.forEach(function (node) {
      var text = node.nodeValue;
      var lower = text.toLowerCase();
      // Find the earliest unused term match in this node.
      var best = null;
      terms.forEach(function (t) {
        if (used[t.slug]) {
          return;
        }
        var idx = lower.indexOf(t.lc);
        // Require a word boundary before the match to avoid matching inside words.
        while (idx !== -1) {
          var before = idx === 0 ? " " : text.charAt(idx - 1);
          if (/[\s.,;:()\[\]"'–—/]/.test(before)) {
            break;
          }
          idx = lower.indexOf(t.lc, idx + 1);
        }
        if (idx !== -1 && (!best || idx < best.idx)) {
          best = { idx: idx, len: t.term.length, slug: t.slug };
        }
      });

      if (!best) {
        return;
      }
      used[best.slug] = true;

      var matched = text.substr(best.idx, best.len);
      var span = document.createElement("span");
      span.className = "glossar-trigger";
      span.setAttribute("data-glossar", best.slug);
      span.setAttribute("tabindex", "0");
      span.setAttribute("role", "button");
      span.setAttribute("aria-label", "Glossary term: " + matched);
      span.textContent = matched;

      var afterText = text.substr(best.idx + best.len);
      node.nodeValue = text.substr(0, best.idx);
      node.parentNode.insertBefore(span, node.nextSibling);
      if (afterText) {
        node.parentNode.insertBefore(document.createTextNode(afterText), span.nextSibling);
      }
    });
  }

  var glossarTooltipEl = null;
  var glossarHoverTimer = null;

  function ensureGlossarTooltip() {
    if (!glossarTooltipEl) {
      glossarTooltipEl = document.createElement("div");
      glossarTooltipEl.className = "glossar-tooltip";
      document.body.appendChild(glossarTooltipEl);
    }
    return glossarTooltipEl;
  }

  function setupGlossarInteraction(contentEl) {
    contentEl.addEventListener("mouseover", function (e) {
      var trigger = e.target.closest && e.target.closest(".glossar-trigger");
      if (!trigger) {
        return;
      }
      var slug = trigger.getAttribute("data-glossar");
      var entry = glossarBySlug[slug];
      if (!entry) {
        return;
      }
      var rect = trigger.getBoundingClientRect();
      glossarHoverTimer = setTimeout(function () {
        var tip = ensureGlossarTooltip();
        tip.textContent = entry.kurz;
        tip.style.left = (rect.left + window.scrollX) + "px";
        tip.style.top = (rect.bottom + window.scrollY + 6) + "px";
        tip.classList.add("visible");
      }, 500);
    });

    contentEl.addEventListener("mouseout", function (e) {
      var trigger = e.target.closest && e.target.closest(".glossar-trigger");
      if (!trigger) {
        return;
      }
      if (glossarHoverTimer) {
        clearTimeout(glossarHoverTimer);
        glossarHoverTimer = null;
      }
      if (glossarTooltipEl) {
        glossarTooltipEl.classList.remove("visible");
      }
    });

    contentEl.addEventListener("click", function (e) {
      var trigger = e.target.closest && e.target.closest(".glossar-trigger");
      if (!trigger) {
        return;
      }
      openGlossarPanel(trigger.getAttribute("data-glossar"));
    });

    // Keyboard activation: Enter/Space on a focused glossar-trigger opens the panel.
    contentEl.addEventListener("keydown", function (e) {
      if (e.key !== "Enter" && e.key !== " ") {
        return;
      }
      var trigger = e.target.closest && e.target.closest(".glossar-trigger");
      if (!trigger) {
        return;
      }
      e.preventDefault();
      openGlossarPanel(trigger.getAttribute("data-glossar"));
    });
  }

  /* ---- Literature references: inline "author year" into #literatur jump links ----
     Conservative pass: only matches the common parenthetical pattern and links
     to the literature section anchor. Runs after a paper section renders. */

  function decorateCitations(sectionEl) {
    if (!sectionEl) {
      return;
    }
    // Matches the common parenthetical citation form: a capitalised author name,
    // optionally followed by "et al." or a co-author joined by und/and/&, then a
    // four-digit year with an optional disambiguation letter.
    var pattern = /\(([A-Z][A-Za-zÄÖÜäöü'’-]+(?:\s+et al\.| (?:und|and|&) [A-Z][A-Za-zÄÖÜäöü'’-]+)?),?\s+(\d{4}[a-z]?)\)/;

    var walker = document.createTreeWalker(sectionEl, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        var p = node.parentNode;
        while (p && p !== sectionEl) {
          var tag = p.nodeName;
          if (tag === "A" || tag === "CODE" || tag === "PRE" ||
              (p.classList && p.classList.contains("glossar-trigger"))) {
            return NodeFilter.FILTER_REJECT;
          }
          p = p.parentNode;
        }
        return pattern.test(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });

    var nodes = [];
    var n;
    while ((n = walker.nextNode())) {
      nodes.push(n);
    }

    nodes.forEach(function (node) {
      var text = node.nodeValue;
      var m = pattern.exec(text);
      if (!m) {
        return;
      }
      var idx = m.index;
      var matched = m[0];
      var link = document.createElement("a");
      link.className = "citation-link";
      link.href = "#literatur";
      link.textContent = matched;

      var afterText = text.substr(idx + matched.length);
      node.nodeValue = text.substr(0, idx);
      node.parentNode.insertBefore(link, node.nextSibling);
      if (afterText) {
        node.parentNode.insertBefore(document.createTextNode(afterText), link.nextSibling);
      }
    });
  }

  /* ---- Hash handling for non-paper anchor types ----
     Template rows, glossary entries, concept aliases open or scroll directly;
     these anchors live in already-rendered sections (no lazy paper load). */
  function handleSpecialAnchor(hash) {
    if (/^promptotyping-document-/.test(hash)) {
      showPage("vorlagen");
      openTemplatePanel(hash);
      scrollToAnchor(hash);
      return true;
    }
    if (/^glossar-/.test(hash)) {
      showPage("glossar");
      scrollToAnchor(hash);
      return true;
    }
    if (/^konzept-/.test(hash)) {
      var alias = hash.replace(/^konzept-/, "");
      var slug = KONZEPT_ALIASES[alias] || alias;
      if (document.getElementById("glossar-" + slug)) {
        showPage("glossar");
        scrollToAnchor("glossar-" + slug);
      } else {
        openGlossarPanel(slug);
      }
      return true;
    }
    return false;
  }

  /* ---- Init ---- */

  /* Module scripts that the page shell does not declare. Loading them from here
     keeps index.html and 404.html identical shells, the same reason the page
     registry owns the navigation markup. The load is awaited before
     promptotyping:sections-ready, so a module cannot miss its boot event. */
  var LATE_MODULES = ["assets/js/modules/term-index.js"];

  function loadLateModules() {
    return Promise.all(LATE_MODULES.map(function (src) {
      return new Promise(function (resolve) {
        var s = document.createElement("script");
        s.src = src;
        s.onload = resolve;
        s.onerror = resolve; // a missing module must not stop the page
        document.body.appendChild(s);
      });
    }));
  }

  function init() {
    configureMarked();
    mountPages();
    buildNav();
    setupSidePanel();
    setupThemeToggle();
    setupGlossarInteraction(document.getElementById("content"));

    // Show the routed page immediately, so the shell is never a blank frame
    // while the content files are still in flight.
    showPage(pageForAnchor(window.location.hash.replace(/^#/, "")) || HOME_PAGE);

    // Glossar must be loaded before paper sections render, so the trigger
    // post-processing can mark terms. Render the static sections in parallel,
    // then start the paper lazy loading and resolve the initial hash.
    var ready = Promise.all([
      renderGlossar(),
      renderMarkdownInto("ueberblick", "_content/ueberblick.md", buildSpecIndex),
      renderMarkdownInto("anwendung", "_content/anwendung.md"),
      renderMarkdownInto("workflow", "_content/workflow.md", function (el) {
        // Part 1 introduces the method and the four phases; it sits with the
        // worked case rather than in a hero above the specification.
        var intro = el.querySelector("p");
        var video = buildVideoFacade("8sUe4Jkh3uQ", "Einführung in Promptotyping, Teil 1");
        if (intro && intro.nextSibling) {
          el.insertBefore(video, intro.nextSibling);
        } else {
          el.appendChild(video);
        }
      }),
      renderMarkdownInto("artefakt", "_content/artefakt.md", markFunctionList),
      renderMarkdownInto("verifikation", "_content/verifikation.md"),
      renderVorlagen(),
      renderMarkdownInto("konvention-v0.1", "_content/konvention.md", function (el) {
        var note = document.createElement("p");
        note.className = "vorlagen-machine-note";
        note.innerHTML = '<a href="_content/konvention.md" target="_blank" rel="noopener">' +
          "Open the convention as markdown</a>";
        el.insertBefore(note, el.firstChild ? el.firstChild.nextSibling : null);
      }),
      renderPraxis(),
      renderSkills(),
      renderMarkdownInto("arbeitsumgebung", "_content/arbeitsumgebung.md")
    ]);
    renderUseCasesHost();

    Promise.all([ready, loadLateModules()]).then(function () {
      // Host markup for the modules is now in the DOM; let them boot.
      document.dispatchEvent(new Event("promptotyping:sections-ready"));
      // The paper renders after the glossar, so its terms can be marked.
      return renderPaper();
    }).then(function () {
      return renderVault();
    }).then(function () {
      addPageStatusLines();
      // Rebuild the rail now that the active page actually has headings, then
      // resolve the initial hash against the fully rendered DOM.
      handleHash(window.location.hash.replace(/^#/, ""));
      // Everything addressable is in the DOM now; the term index reads it.
      document.dispatchEvent(new Event("promptotyping:content-ready"));
    });

    window.addEventListener("hashchange", function () {
      if (suppressHashChange) {
        return;
      }
      handleHash(window.location.hash.replace(/^#/, ""), true);
    });
  }

  // Expose shared helpers for vendored/later-work-package modules.
  window.PromptotypingApp = {
    // Copy: the registry stays the single source and is not written from outside.
    listPages: function () {
      return PAGES.map(function (p) {
        return { id: p.id, label: p.label, group: p.group };
      });
    },
    resolveTemplateUrl: resolveTemplateUrl,
    openTemplatePanel: openTemplatePanel,
    functionVar: functionVar,
    openSidePanel: openSidePanel,
    closeSidePanel: closeSidePanel,
    buildVideoFacade: buildVideoFacade
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
