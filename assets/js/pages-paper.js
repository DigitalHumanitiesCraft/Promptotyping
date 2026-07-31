/* Paper page. Renders the canonical paper from knowledge/paper.md, groups it
   into one section per H2, builds its table of contents, keeps the published
   pre-revision anchors alive and decorates glossary triggers and citations. */

(function (A) {
  "use strict";

  /* The paper is rendered from its canonical source, so the site text cannot
     drift away from the knowledge base. */
  var PAPER_FILE = "knowledge/paper.md";

  /* Published anchors of the two earlier section cuts (pre-revision, and the
     seven-chapter text canonical until 2026-07-30), mapped onto the section of
     the current five-chapter structure that carries their content. Renaming is
     not allowed (CLAUDE.md, URL anchor scheme), so they stay as alias targets. */
  var PAPER_ANCHOR_ALIASES = {
    "abschnitt-2-terms-positioning": "abschnitt-1-1-translating-research-data-into-digital-research-artefacts-through-scholar-centred-design",
    "abschnitt-3-four-phases": "abschnitt-2-promptotyping-as-a-method",
    "abschnitt-4-projects": "abschnitt-4-promptotyping-in-practice",
    "abschnitt-5-epistemic-infrastructure": "abschnitt-4-2-artefact-forms-and-documented-projects",
    "abschnitt-2-the-epistemic-frame": "abschnitt-1-1-translating-research-data-into-digital-research-artefacts-through-scholar-centred-design",
    "abschnitt-2-1-exploration-building-and-their-correctives": "abschnitt-1-1-translating-research-data-into-digital-research-artefacts-through-scholar-centred-design",
    "abschnitt-2-2-llms-and-research-data": "abschnitt-1-1-translating-research-data-into-digital-research-artefacts-through-scholar-centred-design",
    "abschnitt-2-3-the-translation-problem-and-documents-as-conceptual-models": "abschnitt-3-2-research-data-and-project-knowledge-as-mediating-structures",
    "abschnitt-2-4-position-in-the-ai-discourse": "abschnitt-1-2-context-engineering-agentic-engineering-and-ai-harnesses",
    "abschnitt-2-5-genealogy": "abschnitt-2-promptotyping-as-a-method",
    "abschnitt-3-the-method": "abschnitt-2-promptotyping-as-a-method",
    "abschnitt-3-1-status-and-provenance": "abschnitt-4-1-cases-and-evidential-status",
    "abschnitt-3-2-the-four-phases": "abschnitt-2-2-forms-of-work-and-iteration",
    "abschnitt-3-3-the-promptotyping-documents": "abschnitt-2-1-promptotyping-and-the-project-knowledge-base",
    "abschnitt-3-4-a-worked-example-the-stefan-zweig-htr-pipeline": "abschnitt-2-3-from-project-knowledge-to-an-accepted-promptotype",
    "abschnitt-4-the-artefact-type": "abschnitt-4-2-artefact-forms-and-documented-projects",
    "abschnitt-4-1-self-contained-static-web-tools": "abschnitt-4-2-artefact-forms-and-documented-projects",
    "abschnitt-4-2-a-typology-of-promptotyping-interfaces": "abschnitt-4-2-artefact-forms-and-documented-projects",
    "abschnitt-4-3-limits-of-the-format-and-the-handover-point": "abschnitt-5-1-scope-limits-and-conditions-of-applicability",
    "abschnitt-5-evidence-the-documented-projects": "abschnitt-4-promptotyping-in-practice",
    "abschnitt-5-1-principle-of-presentation": "abschnitt-4-1-cases-and-evidential-status",
    "abschnitt-5-2-the-project-inventory": "abschnitt-4-2-artefact-forms-and-documented-projects",
    "abschnitt-5-3-worked-cases-by-epistemic-function": "abschnitt-4-2-artefact-forms-and-documented-projects",
    "abschnitt-5-4-teaching-and-collaboration-cases": "abschnitt-4-3-cross-case-findings",
    "abschnitt-5-5-reading-the-evidence": "abschnitt-4-3-cross-case-findings",
    "abschnitt-6-discussion": "abschnitt-5-scope-limits-evaluation-and-conclusion",
    "abschnitt-6-1-process-and-publication": "abschnitt-3-4-acceptance-reconstructability-and-the-status-of-the-promptotype",
    "abschnitt-6-2-verification-and-validation": "abschnitt-2-3-from-project-knowledge-to-an-accepted-promptotype",
    "abschnitt-6-3-reproducibility-and-llm-dependence": "abschnitt-3-4-acceptance-reconstructability-and-the-status-of-the-promptotype",
    "abschnitt-6-4-limits": "abschnitt-5-1-scope-limits-and-conditions-of-applicability",
    "abschnitt-6-5-transferability": "abschnitt-5-2-transferability-and-priorities-for-evaluation",
    "abschnitt-7-conclusion": "abschnitt-5-3-conclusion",
    "acknowledgements": "ai-use-and-research-provenance"
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
        attachFigures(host);
        sectionizePaper(host);
        addPaperAnchorAliases(host);
        buildPaperToc(host);
        indexReferences(host);
        markReferenceLinks();
        injectUseCaseReference(host);
        // Before the text decorations, so a project name is a link rather than
        // a cell that already carries a glossary trigger.
        return linkifyProjectTable(host);
      })
      .then(function () {
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

  /* Join an image to the caption paragraph that follows it. The image and its
     alt text stand in knowledge/paper.md, which is the canonical machine
     address (ADR-10), so a consumer that fetches the Markdown gets the figure
     too; this only supplies the semantics Markdown cannot express. A caption
     with no image before it stays a paragraph, which is how an undrawn figure
     degrades. */
  function attachFigures(host) {
    host.querySelectorAll("p > strong:first-child").forEach(function (strong) {
      var match = /^Figure (\d+)\.$/.exec(strong.textContent.trim());
      if (!match) {
        return;
      }
      var para = strong.parentNode;
      var prev = para.previousElementSibling;
      if (!prev || prev.tagName !== "P" || prev.children.length !== 1
          || prev.firstElementChild.tagName !== "IMG") {
        return;
      }
      var img = prev.firstElementChild;
      img.loading = "lazy";

      var figure = document.createElement("figure");
      figure.className = "paper-figure";
      figure.id = "figure-" + match[1];
      figure.appendChild(img);

      var caption = document.createElement("figcaption");
      while (para.firstChild) {
        caption.appendChild(para.firstChild);
      }
      figure.appendChild(caption);
      para.parentNode.replaceChild(figure, para);
      prev.parentNode.removeChild(prev);
    });
  }

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

  /* ---- Table 1: project names into gallery links ----
     Every project of the inventory has a card, and data/case-studies.json holds
     that correspondence in its paper_row field, which V5 of verification.md
     keeps true in both directions. The first column becomes the way to the card
     at render time, so knowledge/paper.md stays plain Markdown and the machine
     address of ADR-10 serves the same text it always did (A35). A row whose name
     no card claims stays plain text, which is the failure the consistency check
     reports separately. */
  function linkifyProjectTable(host) {
    return A.fetchJson("data/case-studies.json")
      .then(function (data) {
        var cardFor = {};
        (data.caseStudies || []).forEach(function (c) {
          if (c.paper_row) {
            cardFor[c.paper_row] = c.id;
          }
        });
        host.querySelectorAll("table tbody tr > td:first-child").forEach(function (cell) {
          var name = cell.textContent.trim();
          var id = cardFor[name];
          if (!id || cell.querySelector("a")) {
            return;
          }
          var link = document.createElement("a");
          link.href = "#case-" + id;
          link.textContent = name;
          cell.textContent = "";
          cell.appendChild(link);
        });
      })
      .catch(function () {
        // The gallery data is a second file; without it the table stays as the
        // paper writes it.
      });
  }

  /* Reference anchors. Every entry of the reference list gets an id built from
     the first author's surname and the year, so a citation in the text lands on
     the entry rather than at the head of the list. Built once, after the paper
     renders; a citation whose key is not in the map keeps pointing at the list. */
  var referenceIds = {};

  function referenceKey(surname, year) {
    return A.slugify(surname) + "-" + year;
  }

  function indexReferences(host) {
    referenceIds = {};
    var section = document.getElementById("literatur");
    var items = section ? section.querySelectorAll("li") : [];
    Array.prototype.forEach.call(items, function (li) {
      var text = li.textContent.trim();
      var m = /^([^,]+),.*?\((\d{4}[a-z]?)\)/.exec(text) ||
              /^([^,]+),.*?\b(\d{4}[a-z]?)\b/.exec(text);
      if (!m) {
        return;
      }
      var key = referenceKey(m[1], m[2]);
      if (referenceIds[key]) {
        return;
      }
      var id = "ref-" + key;
      if (!li.id) {
        li.id = id;
      }
      referenceIds[key] = li.id;
      li.classList.add("reference-entry");
    });
  }

  /* Where a reference carries a URL, the entry's title becomes the way there.
     marked already autolinks the bare URL at the end of an entry; this only
     marks it, so the stylesheet can set it apart from an internal jump. */
  function markReferenceLinks() {
    var section = document.getElementById("literatur");
    if (!section) {
      return;
    }
    section.querySelectorAll("li a[href^='http']").forEach(function (a) {
      a.classList.add("reference-link");
      a.target = "_blank";
      a.rel = "noopener";
    });
  }

  function decorateCitations(sectionEl) {
    if (!sectionEl) {
      return;
    }
    // Matches the common parenthetical citation form: a capitalised author name,
    // optionally followed by "et al." or a co-author joined by und/and/&, then a
    // four-digit year with an optional disambiguation letter.
    var MONTH = /^(January|February|March|April|May|June|July|August|September|October|November|December)$/;
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
      if (MONTH.test(m[1])) {
        return;
      }
      var surname = m[1].replace(/\s+et al\.$/, "").split(/\s+(?:und|and|&)\s+/)[0];
      var target = referenceIds[referenceKey(surname, m[2])];
      var link = document.createElement("a");
      link.className = "citation-link";
      link.href = "#" + (target || "literatur");
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
