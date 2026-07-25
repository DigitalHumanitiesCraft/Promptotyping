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
        html = "<em>Fussnotendefinition fehlt (" + escapeHtml(name) + ").</em>";
      }
      var backs = "";
      for (var k = 1; k <= (footnoteRefCount[name] || 0); k++) {
        backs += ' <a class="footnote-back" href="#' + footnoteRefId(num, k) +
          '" aria-label="Zurueck zur Textstelle">↩</a>';
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
          // is blank nor starts the next definition.
          var match = /^\[\^([^\]\s]+)\]:[ \t]*([^\n]*(?:\n(?!\s*$|\[\^)[^\n]*)*)(?:\n+|$)/.exec(src);
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
        throw new Error("Konnte " + file + " nicht laden (" + res.status + ").");
      }
      return res.text();
    });
  }

  /* Normalise line endings and strip a leading YAML frontmatter block.
     knowledge/paper.md is headerless and starts with its H1. */
  function stripFrontmatter(text) {
    return text.replace(/\r\n?/g, "\n").replace(/^---\n[\s\S]*?\n---\n?/, "");
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
        sectionizePaper(host);
        addPaperAnchorAliases(host);
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
    facade.setAttribute("aria-label", "Video laden: " + title);
    facade.innerHTML =
      '<span class="video-facade-title">' + title + "</span>" +
      '<span class="video-facade-note">Klick laedt das Video von youtube-nocookie.com. ' +
      "Vor dem Klick wird keine Verbindung zu YouTube aufgebaut und es findet kein Tracking statt.</span>" +
      '<span class="video-facade-play">Video laden</span>';

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
      "<p>Die in diesem Abschnitt genannten Projekte sind in der kuratierten " +
      '<a href="#use-cases">Use-Case-Galerie</a> dokumentiert, gruppiert danach, wo im ' +
      "Forschungsdaten-Lebenszyklus die Methode operiert. Jede Karte traegt einen stabilen " +
      "Anker und, soweit belegt, Links zu Repository, Demo und Prozessvideo.</p>" +
      '<p class="usecase-reference-links">' +
      '<a href="#case-herdata">HerData</a>' +
      '<a href="#case-klawiter-rescue">Klawiter Bibliography Rescue</a>' +
      '<a href="#case-coocr-htr">coOCR-HTR</a>' +
      '<a href="#case-m3gim">M3GIM</a>' +
      '<a href="#use-cases">Zur vollstaendigen Galerie</a>' +
      "</p>";
    sectionEl.appendChild(block);
  }

  /* ---- Hash handling ----
     Everything is rendered before this runs, so a hash either opens a panel or
     scrolls to an element that exists. */

  function handleHash(hash) {
    if (!hash) {
      return;
    }
    if (handleSpecialAnchor(hash)) {
      return;
    }
    var el = document.getElementById(hash);
    if (el) {
      el.scrollIntoView();
    }
  }

  /* ---- TOC scroll-spy ---- */

  function setupScrollSpy() {
    var links = Array.prototype.slice.call(document.querySelectorAll(".toc a[data-target]"));
    if (!links.length) {
      return;
    }

    var paperHost = document.getElementById(PAPER_HOST_ID);

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }
        var id = entry.target.id;
        // A paper section also marks the parent "Paper" entry.
        var inPaper = !!(paperHost && paperHost.contains(entry.target));
        links.forEach(function (link) {
          var target = link.getAttribute("data-target");
          link.classList.toggle("active",
            target === id || (inPaper && target === PAPER_HOST_ID));
        });
      });
    }, { rootMargin: "-40% 0px -55% 0px" });

    // Sections of the paper carry the sub-entries; the other sections their own.
    document.querySelectorAll(".paper-section, .placeholder-section").forEach(function (el) {
      if (el.id) {
        observer.observe(el);
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
    // Already a hash-form anchor passed without leading '#'.
    if (/^(promptotyping-document|konzept|case|konvention|abschnitt)-/.test(rest) ||
        rest === "glossar" || rest === "literatur" || rest === "arbeitsumgebung" ||
        rest === "paper") {
      return rest;
    }
    return null;
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

  /* ---- Vorlagen-Daten und Side-Panel ---- */

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
      "  # machine-url (statischer Rohtext, ohne JavaScript abrufbar):\n" +
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
    var title = doc ? doc.title : "Vorlage";

    if (templatePanelCache[slug]) {
      openSidePanel(title, templatePanelCache[slug]);
      setHashSilently("promptotyping-document-" + slug);
      return;
    }

    openSidePanel(title, '<p class="section-loading">Wird geladen.</p>');
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
        encodeURIComponent(block) + '">Frontmatter-Block kopieren</button> ' +
      '<a href="' + doc.machineUrl + '" target="_blank" rel="noopener">Markdown abrufen</a>' +
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
        copyText(text, btn, "Frontmatter-Block kopieren");
      });
    }
  }

  function copyText(text, btn, resetLabel) {
    function done() {
      if (btn) {
        btn.textContent = "Kopiert";
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

  /* ---- Static section rendering (Ueberblick, Praxis, Skills, Konvention) ---- */

  function renderMarkdownInto(sectionId, file, after) {
    var el = document.getElementById(sectionId);
    if (!el) {
      return Promise.resolve();
    }
    return fetchMarkdown(file)
      .then(function (text) {
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
      btn.textContent = "Kopieren";
      btn.addEventListener("click", function () {
        var code = pre.querySelector("code");
        copyText(code ? code.textContent : pre.textContent, btn, "Kopieren");
      });
      pre.appendChild(btn);
    });
  }

  /* ---- Vorlagen-Tabelle ---- */

  function renderVorlagen() {
    var el = document.getElementById("vorlagen");
    if (!el) {
      return Promise.resolve();
    }
    return fetch("data/promptotyping-documents.json")
      .then(function (res) {
        if (!res.ok) {
          throw new Error("Konnte promptotyping-documents.json nicht laden (" + res.status + ").");
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
            "<td><code>" + escapeHtml(d.datei) + "</code></td>" +
            "<td>" + escapeHtml(d.typ) + "</td>" +
            "<td>" + escapeHtml(d.version) + "</td>" +
            "<td>" + escapeHtml(d.status) + "</td>" +
            "</tr>";
        }).join("");

        el.classList.remove("placeholder-section");
        el.innerHTML =
          '<img class="vorlagen-icon" src="assets/promptotyping-logo.png" ' +
          'alt="Promptotyping-Marke" width="100" height="100">' +
          "<h2>Vorlagen</h2>" +
          "<p>Diese Sektion buendelt die Spezifikation der Methode, den ausfuellbaren Vorlagen-Katalog, " +
          "die zugrunde liegende Konvention, den maschinellen Zugriff ueber das <code>template:</code>-Feld " +
          "und die Technology Baseline fuer statische Web-Tools.</p>" +
          '<nav class="vorlagen-subnav" aria-label="Spezifikations-Navigation">' +
          '<a href="#vorlagen-katalog">Katalog</a>' +
          '<a href="#vorlagen-konvention">Konvention</a>' +
          '<a href="#vorlagen-maschinenzugriff">Maschinenzugriff</a>' +
          '<a href="#vorlagen-technology-baseline">Technology Baseline</a>' +
          "</nav>" +

          '<div class="vorlagen-block" id="vorlagen-katalog">' +
          "<h3>Katalog</h3>" +
          "<p>Ausfuellbare Vorlagen fuer die Promptotyping Documents im <code>knowledge/</code>-Ordner " +
          "eines Repos. Jede Vorlage adressiert eine Funktion, nicht einen festen Dateinamen. Ein Klick auf " +
          "eine Zeile oeffnet die volle Vorlagen-Spezifikation im Side-Panel.</p>" +
          '<table class="vorlagen-table"><thead><tr>' +
          "<th>Vorlage</th><th>Funktion</th><th>Empfohlene Datei</th><th>Typ</th><th>Version</th><th>Status</th>" +
          "</tr></thead><tbody>" + rows + "</tbody></table>" +
          "</div>" +

          '<div class="vorlagen-block" id="vorlagen-konvention">' +
          "<h3>Konvention</h3>" +
          "<p>Die Konvention Promptotyping Documents beschreibt, welche Funktionen eine Wissensbasis im " +
          "<code>knowledge/</code>-Ordner eines Repos abdeckt, von der Navigation ueber Specification und " +
          "Architecture bis zur Provenance. Sie legt das Frontmatter-Vokabular fest, mit dem ein Dokument " +
          "seine Herkunft, seine Vorlage und seine Maschinenadresse deklariert, und ordnet jede Funktion " +
          "einem der drei analytischen Dokumenttypen Knowledge, Process oder Action zu. Zu jeder Funktion " +
          "nennt sie ein Triggerkriterium, nach dem ein Agent entscheidet, ob ein konkretes Repo das Dokument " +
          "braucht. Der Vorlagen-Katalog oben ist der ausfuellbare Auszug dieser Funktionen. Die vollstaendige " +
          'Konvention steht <a href="#konvention-v0.1">weiter unten auf dieser Seite</a>.</p>' +
          "</div>" +

          '<div class="vorlagen-block" id="vorlagen-maschinenzugriff">' +
          "<h3>Maschinenzugriff</h3>" +
          renderInspector() +
          '<p class="vorlagen-machine-note">Fuer Maschinen ist die kanonische Abrufform jeder Vorlage die ' +
          'statische Markdown-URL unter <code>_content/</code>. Sie liefert den rohen Markdown-Text direkt ' +
          "aus dem GitHub-Pages-Repo-Root, ohne dass das Single-Page-JavaScript laufen muss. Muster: " +
          "<code>https://dhcraft.org/Promptotyping/_content/promptotyping-document/{slug}.md</code>. Die im " +
          "<code>template:</code>-Feld gefuehrten Subpath- und Hash-Formen sind die menschenlesbaren Adressen; " +
          "ihre Subpath-Aufloesung setzt JavaScript voraus. Wer den Rohtext deterministisch und ohne " +
          "Browser-Umgebung braucht, verwendet die statische <code>_content/</code>-Markdown-URL.</p>" +
          "</div>" +

          '<div class="vorlagen-block" id="vorlagen-technology-baseline">' +
          "<h3>Technology Baseline</h3>" +
          "<p>Eine Technology Baseline traegt das projektunabhaengige Technologie-Wissen fuer einen " +
          "wiederkehrenden Artefakttyp, damit eine einzelne Projektinstanz in ihrer <code>architecture.md</code> " +
          "nur noch ihre Abweichungen dokumentiert statt die Stack-Argumentation neu zu fuehren. Dieses Repo " +
          "fuehrt eine solche Baseline fuer den haeufigsten Artefakttyp der Methode, das selbststaendige " +
          "statische Web-Tool aus HTML, CSS und JavaScript ohne Build-Step. Sie haelt die Regeln fest, kein " +
          "Build, Vanilla als Default, vendorierte Bibliotheken nur unter einer Kompromissregel, keine externen " +
          "Laufzeitaufrufe, und begruendet sie aus Generierbarkeit, Publizierbarkeit und Haltbarkeit. " +
          "Status Entwurf.</p>" +
          '<p class="vorlagen-tb-links">' +
          '<a href="https://dhcraft.org/Promptotyping/_content/technology-baseline.md" target="_blank" rel="noopener">Maschinenadresse</a>' +
          '<a href="_content/technology-baseline.md" target="_blank" rel="noopener">Im Repo abrufen</a>' +
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
      "<h3>Frontmatter-Inspector</h3>" +
      "<p>Ein Promptotyping-Repo verlinkt die massgebliche Vorlagen-Spezifikation ueber ein " +
      "<code>template:</code>-Feld im Frontmatter. Hier kann ein ganzer Frontmatter-Block eingefuegt werden: " +
      "der Inspector liest <code>template.url</code> oder <code>template.alias</code>, prueft die URL gegen das " +
      "Anker-Schema der Site und oeffnet die referenzierte Vorlage im Side-Panel.</p>" +
      '<textarea name="frontmatter" rows="9" spellcheck="false" ' +
      'aria-label="YAML-Frontmatter-Block"></textarea>' +
      '<div class="inspector-controls">' +
      '<button type="button" class="inspector-resolve">Vorlage aufloesen</button>' +
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

  /* ---- Use-Cases-Sektion (host markup; module renders cards) ---- */

  function renderUseCasesHost() {
    var el = document.getElementById("use-cases");
    if (!el) {
      return;
    }
    el.classList.remove("placeholder-section");
    el.setAttribute("data-component", "case-study-filter");
    el.innerHTML =
      "<h2>Use Cases</h2>" +
      "<p>Eine kuratierte Auswahl oeffentlich dokumentierter Projekte, gruppiert danach, wo im " +
      "Forschungsdaten-Lebenszyklus die Methode operiert. Das vollstaendige Evidenz-Korpus steht im " +
      '<a href="#abschnitt-5-evidence-the-documented-projects">Paper, Abschnitt 5</a>.</p>' +
      '<div class="case-filter-host"></div>' +
      '<div class="case-list-host"></div>';
  }

  /* ---- Glossar (A6) ---- */

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
          throw new Error("Konnte glossar.json nicht laden (" + res.status + ").");
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
            '<p class="glossar-quelle">Quelle: ' + escapeHtml(e.quelle) + "</p>" +
            "</div>";
        }).join("");

        // Concept alias anchor targets (empty spans) so #konzept-{name} resolves
        // into the glossar entry via scroll. Each points at its glossar entry.
        var aliasAnchors = Object.keys(KONZEPT_ALIASES).map(function (alias) {
          var slug = KONZEPT_ALIASES[alias];
          return '<span class="konzept-alias" id="konzept-' + alias +
            '" data-glossar="' + slug + '"></span>';
        }).join("");

        el.classList.remove("placeholder-section");
        el.innerHTML =
          "<h2>Glossar</h2>" +
          "<p>Konstitutive Begriffe des Promptotyping-Papers und der Methodik-Site, alphabetisch geordnet. " +
          "Im Paper-Lesefluss ist das erste Vorkommen eines Begriffs als Trigger markiert.</p>" +
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
      '<p class="glossar-quelle">Quelle: ' + escapeHtml(e.quelle) + "</p>" +
      '<p class="panel-footer"><a href="#glossar-' + e.slug + '">Im Glossar anzeigen</a></p>';
    openSidePanel(e.begriff, html);
  }

  /* ---- Glossar-Trigger im Paper-Lesefluss ----
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
      span.setAttribute("aria-label", "Begriff im Glossar: " + matched);
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

  /* ---- Literatur-Verweise: inline "Autor Jahr" zu #literatur-Sprunglinks ----
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
     Vorlagen rows, glossar entries, konzept aliases open or scroll directly;
     these anchors live in already-rendered sections (no lazy paper load). */
  function handleSpecialAnchor(hash) {
    if (/^promptotyping-document-/.test(hash)) {
      openTemplatePanel(hash);
      var row = document.getElementById(hash);
      if (row) { row.scrollIntoView(); }
      return true;
    }
    if (/^glossar-/.test(hash)) {
      var gEl = document.getElementById(hash);
      if (gEl) { gEl.scrollIntoView(); }
      return true;
    }
    if (/^konzept-/.test(hash)) {
      var alias = hash.replace(/^konzept-/, "");
      var slug = KONZEPT_ALIASES[alias] || alias;
      var target = document.getElementById("glossar-" + slug);
      if (target) {
        target.scrollIntoView();
      } else {
        openGlossarPanel(slug);
      }
      return true;
    }
    return false;
  }

  /* ---- Init ---- */

  /* ---- TOC hamburger (mobile) ---- */

  function setupTocToggle() {
    var btn = document.getElementById("toc-toggle");
    var list = document.getElementById("toc-nav-list");
    if (!btn || !list) {
      return;
    }
    btn.addEventListener("click", function () {
      var isOpen = list.classList.contains("open");
      list.classList.toggle("open", !isOpen);
      btn.setAttribute("aria-expanded", isOpen ? "false" : "true");
    });
    // Close TOC when a link inside it is activated.
    list.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        list.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  }

  function init() {
    configureMarked();
    setupSidePanel();
    setupTocToggle();
    setupGlossarInteraction(document.getElementById("content"));

    // Glossar must be loaded before paper sections render, so the trigger
    // post-processing can mark terms. Render the static sections in parallel,
    // then start the paper lazy loading and resolve the initial hash.
    var ready = Promise.all([
      renderGlossar(),
      renderMarkdownInto("ueberblick", "_content/ueberblick.md"),
      renderVorlagen(),
      renderMarkdownInto("konvention-v0.1", "_content/konvention.md", function (el) {
        var note = document.createElement("p");
        note.className = "vorlagen-machine-note";
        note.innerHTML = '<a href="_content/konvention.md" target="_blank" rel="noopener">' +
          "Konvention als Markdown abrufen</a>";
        el.insertBefore(note, el.firstChild ? el.firstChild.nextSibling : null);
      }),
      renderPraxis(),
      renderSkills(),
      renderMarkdownInto("arbeitsumgebung", "_content/arbeitsumgebung.md")
    ]);
    renderUseCasesHost();

    ready.then(function () {
      // Host markup for the two modules is now in the DOM; let them boot.
      document.dispatchEvent(new Event("promptotyping:sections-ready"));
      // The paper renders after the glossar, so its terms can be marked.
      return renderPaper();
    }).then(function () {
      setupScrollSpy();
      handleHash(window.location.hash.replace(/^#/, ""));
    });

    window.addEventListener("hashchange", function () {
      if (suppressHashChange) {
        return;
      }
      handleHash(window.location.hash.replace(/^#/, ""));
    });
  }

  // Expose shared helpers for vendored/later-work-package modules.
  window.PromptotypingApp = {
    resolveTemplateUrl: resolveTemplateUrl,
    openTemplatePanel: openTemplatePanel,
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
