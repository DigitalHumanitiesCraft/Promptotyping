/* Paper page. Renders the canonical paper from knowledge/paper.md, groups it
   into one section per H2, builds its table of contents, keeps the published
   pre-revision anchors alive and decorates glossary triggers and citations. */

(function (A) {
  "use strict";

  /* The paper is rendered from its canonical source, so the site text cannot
     drift away from the knowledge base. */
  var PAPER_FILE = "knowledge/paper.md";

  /* Published anchors of the pre-revision section cut, mapped onto the section
     of the current structure that succeeds them. Renaming them is not allowed
     (CLAUDE.md, URL anchor scheme), so they stay as alias targets. */
  var PAPER_ANCHOR_ALIASES = {
    "abschnitt-2-terms-positioning": "abschnitt-2-the-epistemic-frame",
    "abschnitt-3-four-phases": "abschnitt-3-the-method",
    "abschnitt-4-projects": "abschnitt-5-evidence-the-documented-projects",
    "abschnitt-5-epistemic-infrastructure": "abschnitt-4-the-artefact-type"
  };

  /* Part-2 video sits with the project inventory that lists the demonstrated case. */
  var PAPER_VIDEO = {
    youtubeId: "hd_a-NBO_S4",
    title: "Promptotyping Teil 2 (Claude Code)",
    anchorText: "VetMedAI Wissensbilanz"
  };

  function renderPaper() {
    var host = document.getElementById(A.PAPER_HOST_ID);
    if (!host) {
      return Promise.resolve();
    }
    return A.fetchMarkdown(PAPER_FILE)
      .then(function (text) {
        host.innerHTML = A.renderPaperMarkdown(A.stripFrontmatter(text));
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
          A.decorateGlossarTriggers(section);
          decorateCitations(section);
        });
      })
      .catch(function (err) {
        A.showLoadError(host, err);
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
        subs += '<li><a href="#' + h3.id + '">' + A.escapeHtml(h3.textContent) + "</a></li>";
      });
      items += '<li><a href="#' + section.id + '">' + A.escapeHtml(h2.textContent) + "</a>" +
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

  function evidenceSection(host) {
    return document.getElementById(PAPER_ANCHOR_ALIASES["abschnitt-4-projects"]) ||
      host.querySelector(".paper-section");
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
    var video = A.buildVideoFacade(PAPER_VIDEO.youtubeId, PAPER_VIDEO.title);
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

  A.renderPaper = renderPaper;
})(window.PromptotypingApp = window.PromptotypingApp || {});
