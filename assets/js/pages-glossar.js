/* Glossary page. Renders the entries from data/glossar.json, marks the first
   occurrence of every term in a rendered section as a trigger and wires the
   hover tooltip. */

(function (A) {
  "use strict";

  var glossarEntries = [];
  var glossarBySlug = {};

  /* Concept aliases: the two published #konzept-{name} anchors whose name is not
     the glossary slug it means. Every other concept anchor is the slug itself
     and needs no entry, since konzeptSlug falls back to identity. */
  var KONZEPT_ALIASES = {
    "eil": "critical-expert-in-the-loop",
    "co-intelligence-eil": "co-intelligence"
  };

  function konzeptSlug(alias) {
    return KONZEPT_ALIASES[alias] || alias;
  }

  /* ---- Sources ----
     Every carrier of an entry that this site holds an address for renders as a
     link; the ones it holds none for stay text (A34). The anchor comes from the
     data, so the address families are curated in data/glossar.json rather than
     here. */

  function sourceHtml(source) {
    var text = A.escapeHtml(source.text || "");
    return source.anker
      ? '<a href="#' + A.escapeHtml(source.anker) + '">' + text + "</a>"
      : text;
  }

  function sourcesHtml(entry, className) {
    var list = entry.quellen || [];
    if (!list.length) {
      return "";
    }
    return '<p class="' + className + '">Source: ' +
      list.map(sourceHtml).join("; ") + "</p>";
  }

  /* ---- Category marks ----
     The controlled taxonomy of A36. Every category owns exactly one monochrome
     geometric mark, drawn in currentColor, and the category word always stands
     beside it, since neither colour nor shape may be the only carrier of an
     information (WCAG 2.1, 1.4.1). Hue stays reserved for the five epistemic
     functions of A22, so no mark takes one. The vocabulary and its wording are
     data and live in _meta.kategorien of data/glossar.json; what stands here is
     the mark per value, which is presentation. */

  var CATEGORY_MARKS = {
    "form-of-work": '<circle cx="7" cy="7" r="4.75"/>',
    "document-function": '<rect x="2.25" y="2.25" width="9.5" height="9.5"/>',
    "role": '<path d="M7 2 12 11.5 2 11.5Z"/>',
    "artefact": '<path d="M7 1.75 12.25 7 7 12.25 1.75 7Z"/>',
    "checking": '<path d="M7 1.75 11.5 4.375 11.5 9.625 7 12.25 2.5 9.625 2.5 4.375Z"/>',
    "failure-mode": '<path d="M2.75 2.75 11.25 11.25M11.25 2.75 2.75 11.25"/>',
    "infrastructure": '<path d="M2 4h10M2 7h10M2 10h10"/>'
  };

  var categoryLabels = {};

  function categoryLabel(slug) {
    return categoryLabels[slug] || "";
  }

  function categoryHtml(slug) {
    var label = categoryLabel(slug);
    var mark = CATEGORY_MARKS[slug];
    if (!label || !mark) {
      return "";
    }
    return '<span class="glossar-kategorie">' +
      '<svg class="glossar-kategorie-mark" viewBox="0 0 14 14" width="12" height="12" ' +
      'aria-hidden="true" focusable="false">' + mark + "</svg>" +
      A.escapeHtml(label) + "</span>";
  }

  /* One request and one sort for the glossary file, which the page and the term
     index both read. The promise is the cache; a later caller gets the entries
     the first one already sorted. */
  var glossarLoad = null;

  function loadGlossarEntries() {
    if (!glossarLoad) {
      glossarLoad = A.fetchJson("data/glossar.json").then(function (data) {
        categoryLabels = (data._meta && data._meta.kategorien) || {};
        glossarEntries = (data.eintraege || []).slice().sort(function (a, b) {
          return a.begriff.localeCompare(b.begriff, "de");
        });
        glossarEntries.forEach(function (e) { glossarBySlug[e.slug] = e; });
        return glossarEntries;
      });
    }
    return glossarLoad;
  }

  function renderGlossar() {
    var el = document.getElementById("glossar");
    if (!el) {
      return Promise.resolve();
    }
    return loadGlossarEntries()
      .then(function (entries) {
        var items = entries.map(function (e) {
          return '<div class="glossar-entry" id="glossar-' + e.slug + '">' +
            '<h3 class="glossar-term">' + A.escapeHtml(e.begriff) + "</h3>" +
            categoryHtml(e.kategorie) +
            '<p class="glossar-kurz">' + A.escapeHtml(e.kurz) + "</p>" +
            '<p class="glossar-voll">' + A.escapeHtml(e.voll) + "</p>" +
            sourcesHtml(e, "glossar-quelle") +
            "</div>";
        }).join("");

        // Sub-navigation: one entry per initial, so the list is navigable
        // without scrolling through it.
        var seen = {};
        var initials = [];
        entries.forEach(function (e) {
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
          '<div class="glossar-list">' + items + "</div>";
      })
      .catch(function (err) {
        A.showLoadError(el, err);
      });
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
      // Following a source link out of the tooltip has to close it; the guard
      // in the document listener below keeps clicks inside from closing it.
      glossarTooltipEl.addEventListener("click", function (e) {
        if (e.target.closest && e.target.closest("a")) {
          hideGlossarTip();
        }
      });
      document.body.appendChild(glossarTooltipEl);
    }
    return glossarTooltipEl;
  }

  function triggerOf(e) {
    return e.target.closest && e.target.closest(".glossar-trigger");
  }

  /* Show the tooltip for a trigger and keep it there until something else
     takes over. The tooltip carries the short definition and a link to the full
     glossary entry, which is the whole interaction; the side panel that used to
     open on click is gone (operator decision, 26 July 2026). */
  function showGlossarTip(trigger) {
    var slug = trigger.getAttribute("data-glossar");
    var entry = glossarBySlug[slug];
    if (!entry) {
      return;
    }
    var tip = ensureGlossarTooltip();
    tip.innerHTML = '<span class="glossar-tooltip-term">' + A.escapeHtml(entry.begriff) +
      "</span>" + categoryHtml(entry.kategorie) + A.escapeHtml(entry.kurz) +
      sourcesHtml(entry, "glossar-tooltip-quelle") +
      '<a class="glossar-tooltip-more" href="#glossar-' + A.escapeHtml(slug) + '">Full entry</a>';
    var rect = trigger.getBoundingClientRect();
    tip.style.left = Math.max(8, Math.min(rect.left + window.scrollX,
      window.scrollX + document.documentElement.clientWidth - tip.offsetWidth - 8)) + "px";
    tip.style.top = (rect.bottom + window.scrollY + 6) + "px";
    tip.classList.add("visible");
    activeTrigger = trigger;
  }

  function hideGlossarTip() {
    if (glossarHoverTimer) {
      clearTimeout(glossarHoverTimer);
      glossarHoverTimer = null;
    }
    if (glossarTooltipEl) {
      glossarTooltipEl.classList.remove("visible");
    }
    activeTrigger = null;
  }

  var activeTrigger = null;

  function setupGlossarInteraction(contentEl) {
    if (!contentEl) {
      return;
    }
    contentEl.addEventListener("mouseover", function (e) {
      var trigger = triggerOf(e);
      if (!trigger || trigger === activeTrigger) {
        return;
      }
      glossarHoverTimer = setTimeout(function () { showGlossarTip(trigger); }, 400);
    });

    contentEl.addEventListener("mouseout", function (e) {
      if (!triggerOf(e)) {
        return;
      }
      if (glossarHoverTimer) {
        clearTimeout(glossarHoverTimer);
        glossarHoverTimer = null;
      }
      // Leaving the trigger for the tooltip itself must not close it, or the
      // link inside is unreachable.
      var to = e.relatedTarget;
      if (glossarTooltipEl && to && glossarTooltipEl.contains(to)) {
        return;
      }
      hideGlossarTip();
    });

    // Click and keyboard both toggle the tooltip. Touch has no hover, so the
    // click is the only way in there.
    function toggle(e) {
      var trigger = triggerOf(e);
      if (!trigger) {
        return;
      }
      e.preventDefault();
      if (trigger === activeTrigger) {
        hideGlossarTip();
      } else {
        showGlossarTip(trigger);
      }
    }

    contentEl.addEventListener("click", toggle);
    contentEl.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        hideGlossarTip();
        return;
      }
      if (e.key === "Enter" || e.key === " ") {
        toggle(e);
      }
    });

    document.addEventListener("click", function (e) {
      if (!activeTrigger) {
        return;
      }
      if (triggerOf(e) || (glossarTooltipEl && glossarTooltipEl.contains(e.target))) {
        return;
      }
      hideGlossarTip();
    });
  }

  A.renderGlossar = renderGlossar;
  /* The term index reads the same entries; the file is fetched and sorted once. */
  A.glossarEntries = loadGlossarEntries;
  A.decorateGlossarTriggers = decorateGlossarTriggers;
  A.setupGlossarInteraction = setupGlossarInteraction;
  A.konzeptSlug = konzeptSlug;
  /* The term index renders the same mark in its own table; the taxonomy stays
     declared here, where the glossary lives. */
  A.glossarCategoryHtml = categoryHtml;
  A.glossarCategoryLabel = categoryLabel;
})(window.PromptotypingApp = window.PromptotypingApp || {});
