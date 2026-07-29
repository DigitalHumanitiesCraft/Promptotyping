/* Promptotyping Site boot. Vanilla JS, no build step.

   The logic is split by responsibility across core.js, markdown.js,
   registry.js, shell.js and the pages-*.js files; all of them extend the shared
   namespace window.PromptotypingApp, which is also the helper surface the three
   modules under assets/js/modules/ read. This file is loaded last and owns the
   one thing the split must not scatter, the order in which the site comes up. */

(function (A) {
  "use strict";

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
    A.configureMarked();
    A.mountPages();
    A.buildNav();
    A.setupSidePanel();
    A.setupThemeToggle();
    A.setupGlossarInteraction(document.getElementById("content"));

    // GitHub Pages has no server-side routing, so 404.html catches every
    // subpath, normalises it and hands it over as ?p=. Translating it here,
    // through the resolver the frontmatter inspector already uses, keeps the
    // subpath vocabulary in one place. replaceState fires no hashchange and so
    // does not collide with the listener below, and it has to happen before
    // promptotyping:sections-ready, where modules read location.hash.
    var handedOver = new URLSearchParams(window.location.search).get("p");
    var unresolved = null;
    if (handedOver) {
      var anchor = A.resolveTemplateUrl(handedOver + window.location.hash);
      history.replaceState(null, "",
        window.location.pathname + (anchor ? "#" + anchor : ""));
      unresolved = anchor ? null : handedOver;
    }

    // Show the routed page immediately, so the shell is never a blank frame
    // while the content files are still in flight.
    if (unresolved) {
      A.showNotFound(unresolved);
    } else {
      A.showPage(A.pageForAnchor(window.location.hash.replace(/^#/, "")) || A.HOME_PAGE);
    }

    // Glossar must be loaded before paper sections render, so the trigger
    // post-processing can mark terms. Render the static sections in parallel,
    // then start the paper lazy loading and resolve the initial hash.
    var ready = Promise.all([
      A.renderGlossar(),
      A.renderMarkdownInto("ueberblick", "_content/ueberblick.md", A.buildSpecIndex),
      A.renderMarkdownInto("anwendung", "_content/anwendung.md"),
      A.renderMarkdownInto("workflow", "_content/workflow.md", function (el) {
        // Part 1 introduces the method and the four phases; it sits with the
        // worked case rather than in a hero above the specification.
        var intro = el.querySelector("p");
        var video = A.buildVideoFacade("8sUe4Jkh3uQ", "Einführung in Promptotyping, Teil 1");
        if (intro && intro.nextSibling) {
          el.insertBefore(video, intro.nextSibling);
        } else {
          el.appendChild(video);
        }
      }),
      A.renderMarkdownInto("artefakt", "_content/artefakt.md", A.markFunctionList),
      A.renderMarkdownInto("verifikation", "_content/verifikation.md"),
      A.renderVorlagen(),
      A.renderMarkdownInto("konvention-v0.1", "_content/konvention.md", function (el) {
        var note = document.createElement("p");
        note.className = "vorlagen-machine-note";
        note.innerHTML = '<a href="_content/konvention.md" target="_blank" rel="noopener">' +
          "Open the convention as markdown</a>";
        el.insertBefore(note, el.firstChild ? el.firstChild.nextSibling : null);
      }),
      // Prompts on the tutorial page are copyable like the skills prompts.
      A.renderMarkdownInto("tutorial", "_content/tutorial.md", A.addCodeCopyButtons),
      A.renderPraxis(),
      A.renderSkills(),
      A.renderMarkdownInto("arbeitsumgebung", "_content/arbeitsumgebung.md")
    ]);
    A.renderUseCasesHost();

    Promise.all([ready, loadLateModules()]).then(function () {
      // The five parts of the specification are rendered; fold them into the
      // one page they are sections of before anything reads the DOM.
      A.foldParts();
      // Host markup for the modules is now in the DOM; let them boot.
      document.dispatchEvent(new Event("promptotyping:sections-ready"));
      // The paper renders after the glossar, so its terms can be marked.
      return A.renderPaper();
    }).then(function () {
      return A.renderVault();
    }).then(function () {
      A.addPageStatusLines();
      A.fillFooterState();
      // Resolve the initial hash against the fully rendered DOM. An address
      // that resolved to nothing left the hash empty, and re-resolving it here
      // would replace the not-found state with the start page.
      if (!unresolved) {
        A.handleHash(window.location.hash.replace(/^#/, ""));
      }
      // Everything addressable is in the DOM now; the term index reads it.
      document.dispatchEvent(new Event("promptotyping:content-ready"));
    });

    window.addEventListener("hashchange", function () {
      if (A.hashChangeSuppressed()) {
        return;
      }
      A.handleHash(window.location.hash.replace(/^#/, ""), true);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})(window.PromptotypingApp = window.PromptotypingApp || {});
