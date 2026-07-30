/* The content pages that carry no data source of their own: practice, skills,
   the host markup for the use-case module, and the hue marks of the artefact
   page. */

(function (A) {
  "use strict";

  /* ---- Practice ----
     Each section heading gets a stable #praxis-{slug} anchor matching the 404
     route /praxis/{slug}. praxis.md uses H2 for its sections (H1 is the page
     title), so anchor H2 and H3 alike. */

  /* Anchors published before the English pass of 2026-07-26. The slugs derive
     from the headings, so translating a heading moved its address; foreign
     repos may still link the old one. */
  var PRAXIS_ALIASES = {
    "praxis-subagents-und-rollensimulation": "praxis-subagents-and-role-simulation",
    "praxis-skript-vs-llm-trennung": "praxis-script-versus-llm-separation",
    "praxis-demo-repo-reduktion-in-der-schulung": "praxis-demo-repository-reduction-in-teaching",
    "praxis-claims-verifikation-als-dokumentfunktion": "praxis-claims-verification-as-a-document-function",
    "praxis-epistemischer-status-von-user-stories": "praxis-the-epistemic-status-of-user-stories",
    "praxis-vorlagen-fuer-promptotyping-documents": "praxis-templates-for-promptotyping-documents"
  };

  function renderPraxis() {
    return A.renderMarkdownInto("praxis", "_content/praxis.md", function (el) {
      el.querySelectorAll("h2, h3").forEach(function (h) {
        h.id = "praxis-" + A.slugify(h.textContent);
        h.classList.add("anchored-heading");
      });
      Object.keys(PRAXIS_ALIASES).forEach(function (old) {
        var target = el.querySelector("#" + PRAXIS_ALIASES[old]);
        if (!target || document.getElementById(old)) { return; }
        var anchor = document.createElement("span");
        anchor.id = old;
        anchor.className = "anchor-alias";
        target.insertAdjacentElement("beforebegin", anchor);
      });
    });
  }

  /* ---- Skills ----
     Index intro, then coding and writing as sub-blocks with stable anchors
     #skills-coding / #skills-writing; prompt code blocks get a copy button. */

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
      A.renderMarkdownInto("skills-intro", "_content/skills/index.md"),
      A.renderMarkdownInto("skills-coding", "_content/skills/coding.md", A.addCodeCopyButtons),
      A.renderMarkdownInto("skills-writing", "_content/skills/writing.md", A.addCodeCopyButtons)
    ]);
  }

  /* ---- Use cases (host markup; assets/js/modules/case-study-filter.js renders
     the cards on promptotyping:sections-ready) ---- */

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
      '<a href="#abschnitt-4-promptotyping-in-practice">paper, section 4</a>.</p>' +
      '<div class="case-filter-host"></div>' +
      '<div class="case-list-host"></div>';
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

  A.renderPraxis = renderPraxis;
  A.renderSkills = renderSkills;
  A.renderUseCasesHost = renderUseCasesHost;
  A.functionVar = functionVar;
  A.markFunctionList = markFunctionList;
})(window.PromptotypingApp = window.PromptotypingApp || {});
