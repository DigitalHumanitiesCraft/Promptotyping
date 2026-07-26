/* Glossary page. Renders the entries from data/glossar.json, emits the concept
   alias anchors, marks the first occurrence of every term in a rendered section
   as a trigger and wires the hover tooltip and the panel. */

(function (A) {
  "use strict";

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

  function konzeptSlug(alias) {
    return KONZEPT_ALIASES[alias] || alias;
  }

  function renderGlossar() {
    var el = document.getElementById("glossar");
    if (!el) {
      return Promise.resolve();
    }
    return A.fetchJson("data/glossar.json")
      .then(function (data) {
        glossarEntries = (data.eintraege || []).slice().sort(function (a, b) {
          return a.begriff.localeCompare(b.begriff, "de");
        });
        glossarEntries.forEach(function (e) { glossarBySlug[e.slug] = e; });

        var items = glossarEntries.map(function (e) {
          return '<div class="glossar-entry" id="glossar-' + e.slug + '">' +
            '<h3 class="glossar-term">' + A.escapeHtml(e.begriff) + "</h3>" +
            '<p class="glossar-kurz">' + A.escapeHtml(e.kurz) + "</p>" +
            '<p class="glossar-voll">' + A.escapeHtml(e.voll) + "</p>" +
            '<p class="glossar-quelle">Source: ' + A.escapeHtml(e.quelle) + "</p>" +
            "</div>";
        }).join("");

        // Concept alias anchor targets (empty spans) so #konzept-{name} resolves
        // into the glossar entry via scroll. Each points at its glossar entry.
        var aliasAnchors = Object.keys(KONZEPT_ALIASES).map(function (alias) {
          return '<span class="konzept-alias" id="konzept-' + alias +
            '" data-glossar="' + KONZEPT_ALIASES[alias] + '"></span>';
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
        A.showLoadError(el, err);
      });
  }

  function openGlossarPanel(slug) {
    var e = glossarBySlug[slug];
    if (!e) {
      return;
    }
    var html =
      '<p class="glossar-kurz">' + A.escapeHtml(e.kurz) + "</p>" +
      "<p>" + A.escapeHtml(e.voll) + "</p>" +
      '<p class="glossar-quelle">Source: ' + A.escapeHtml(e.quelle) + "</p>" +
      '<p class="panel-footer"><a href="#glossar-' + e.slug + '">Show in the glossary</a></p>';
    A.openSidePanel(e.begriff, html);
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

  /* ---- Trigger interaction ---- */

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

  function triggerOf(e) {
    return e.target.closest && e.target.closest(".glossar-trigger");
  }

  function setupGlossarInteraction(contentEl) {
    contentEl.addEventListener("mouseover", function (e) {
      var trigger = triggerOf(e);
      if (!trigger) {
        return;
      }
      var entry = glossarBySlug[trigger.getAttribute("data-glossar")];
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
      if (!triggerOf(e)) {
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
      var trigger = triggerOf(e);
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
      var trigger = triggerOf(e);
      if (!trigger) {
        return;
      }
      e.preventDefault();
      openGlossarPanel(trigger.getAttribute("data-glossar"));
    });
  }

  A.renderGlossar = renderGlossar;
  A.openGlossarPanel = openGlossarPanel;
  A.decorateGlossarTriggers = decorateGlossarTriggers;
  A.setupGlossarInteraction = setupGlossarInteraction;
  A.konzeptSlug = konzeptSlug;
})(window.PromptotypingApp = window.PromptotypingApp || {});
