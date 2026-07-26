/* Markdown pipeline: the marked.js configuration with the footnote apparatus,
   the heading-id generator and the stripper for legacy {:.phase-*} markers,
   plus the one function that renders a content file into a page host. */

(function (A) {
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

  /* Headings whose slug is overridden, so a published anchor keeps resolving. */
  var HEADING_ID_OVERRIDES = {
    "references": "literatur"
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
        html = "<em>Footnote definition missing (" + A.escapeHtml(name) + ").</em>";
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
      ? "abschnitt-" + numbered[1].replace(/\./g, "-") + "-" + A.slugify(numbered[2])
      : A.slugify(text);
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

  /* Render a content file into its page host (overview, application, practice,
     skills, convention, artefact, verification, working environment). */
  function renderMarkdownInto(sectionId, file, after) {
    var el = document.getElementById(sectionId);
    if (!el) {
      return Promise.resolve();
    }
    return A.fetchMarkdown(file)
      .then(function (text) {
        A.pageFrontmatter[sectionId] = A.readFrontmatter(text);
        el.innerHTML = marked.parse(A.stripFrontmatter(text));
        el.classList.remove("placeholder-section");
        if (typeof after === "function") {
          after(el);
        }
      })
      .catch(function (err) {
        A.showLoadError(el, err);
      });
  }

  A.configureMarked = configureMarked;
  A.renderPaperMarkdown = renderPaperMarkdown;
  A.renderMarkdownInto = renderMarkdownInto;
})(window.PromptotypingApp = window.PromptotypingApp || {});
