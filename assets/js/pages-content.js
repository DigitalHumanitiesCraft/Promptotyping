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
    "praxis-vorlagen-fuer-promptotyping-documents": "praxis-templates-for-knowledge-documents",
    /* Anchor published between the English pass and the terminology change
       to Knowledge Documents of 2026-07-31. */
    "praxis-templates-for-promptotyping-documents": "praxis-templates-for-knowledge-documents"
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
     Index intro, the installable skill package and two system prompts use the
     stable #skills-promptotyping / #skills-coding / #skills-writing anchors. */

  /* Both sub-block files head their text with an H1, so the merged page would
     carry three. Their headings move down one level at render time through the
     same helper foldParts uses on the specification parts. The content files
     stay untouched and the attributes travel with the heading, so nothing
     addressable moves; the block anchors sit on the hosts and are unaffected
     either way. */
  function renderSkillsBlock(el) {
    A.demoteHeadings(el);
    A.addCodeCopyButtons(el);
  }

  /* The canonical skill lives in its own repository (operator decision
     2026-10-19). The page fetches its SKILL.md from there; relative links in
     that file point into the package and are rebased onto it here, because
     they would otherwise resolve against this site. */
  var SKILL_REPOSITORY = "https://github.com/DigitalHumanitiesCraft/promptotyping-skill";
  var SKILL_PACKAGE = SKILL_REPOSITORY + "/tree/main/promptotyping";
  var SKILL_SOURCE = "https://raw.githubusercontent.com/DigitalHumanitiesCraft/promptotyping-skill/main/promptotyping/SKILL.md";

  function rebaseSkillLinks(el) {
    el.querySelectorAll("a[href]").forEach(function (link) {
      var href = link.getAttribute("href");
      if (/^(?:[a-z][a-z0-9+.-]*:|#|\/)/i.test(href)) {
        return;
      }
      link.href = SKILL_REPOSITORY + "/blob/main/promptotyping/" + href;
      link.target = "_blank";
      link.rel = "noopener";
    });
  }

  function renderSkillPackage(el, text) {
    renderSkillsBlock(el);
    rebaseSkillLinks(el);

    var actions = document.createElement("div");
    actions.className = "skill-actions";

    var copy = document.createElement("button");
    copy.type = "button";
    copy.className = "skill-copy";
    copy.textContent = "Copy SKILL.md";
    copy.addEventListener("click", function () {
      A.copyText(text, copy, "Copy SKILL.md");
    });
    actions.appendChild(copy);

    /* Browsers ignore the download attribute on a cross-origin link, so the
       fetched text is offered as a same-origin blob. */
    var download = document.createElement("a");
    download.href = URL.createObjectURL(new Blob([text], { type: "text/markdown" }));
    download.download = "SKILL.md";
    download.textContent = "Download SKILL.md";
    actions.appendChild(download);

    var repository = document.createElement("a");
    repository.href = SKILL_PACKAGE;
    repository.target = "_blank";
    repository.rel = "noopener";
    repository.textContent = "Open package";
    actions.appendChild(repository);

    var heading = el.querySelector("h2");
    if (heading && heading.nextSibling) {
      el.insertBefore(actions, heading.nextSibling);
    } else {
      el.appendChild(actions);
    }
  }

  function renderSkills() {
    var host = document.getElementById("skills");
    if (!host) {
      return Promise.resolve();
    }
    host.classList.remove("placeholder-section");
    host.innerHTML =
      '<div id="skills-intro"></div>' +
      '<div class="skills-block" id="skills-promptotyping" data-term-index-skip></div>' +
      '<div class="skills-block" id="skills-coding"></div>' +
      '<div class="skills-block" id="skills-writing"></div>';

    /* The canonical skill comes from another host. It loads only once the
       Skills page is shown, so a visitor who never opens it makes no request
       to raw.githubusercontent.com, and the boot never waits for it: a blocked
       or slow raw.githubusercontent.com
       would otherwise hold back folding, module boot and hash resolution on
       every page. The host element stands already, so #skills-promptotyping
       resolves; a failed fetch shows the shared load error in the block alone. */
    var skillRequested = false;
    function loadSkill() {
      if (skillRequested) {
        return;
      }
      skillRequested = true;
      document.removeEventListener("promptotyping:page-shown", onPageShown);
      A.renderMarkdownInto("skills-promptotyping", SKILL_SOURCE, renderSkillPackage);
    }
    function onPageShown(event) {
      if (event.detail && event.detail.page === "skills") {
        loadSkill();
      }
    }
    if (host.closest(".doc-page.is-active")) {
      loadSkill();
    } else {
      document.addEventListener("promptotyping:page-shown", onPageShown);
    }

    return Promise.all([
      A.renderMarkdownInto("skills-intro", "_content/skills/index.md"),
      A.renderMarkdownInto("skills-coding", "_content/skills/coding.md", renderSkillsBlock),
      A.renderMarkdownInto("skills-writing", "_content/skills/writing.md", renderSkillsBlock)
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
      "<p>A curated selection of publicly documented projects, grouped by the role each case " +
      "plays in the paper's argument and ordered within each group by the artefact's epistemic " +
      "function. The comparative account stands in the " +
      'paper, section 3.</p>' +
      '<div class="case-filter-host"></div>' +
      '<div class="case-list-host"></div>' +
      '<h2>Continue your evaluation</h2>' +
      '<p>Trace the paper\'s load-bearing statements through the <a href="#vault">Vault</a>, ' +
      'or move from assessment to a first iteration with the <a href="#tutorial">tutorial</a>.</p>';
  }

  /* ---- Epistemic function marks ----
     The five interface categories of the site's own typology (artefakt page;
     operator decision 2026-07-31) are the one nominal scale on this site, so
     they are the one place a hue carries meaning. */

  /* The vocabulary and its order; the use-case gallery sorts and filters by the
     same five and adds only its display labels. */
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
  A.FUNCTIONS = FUNCTION_SLUGS;
  A.functionVar = functionVar;
  A.markFunctionList = markFunctionList;
})(window.PromptotypingApp = window.PromptotypingApp || {});
