/* Case-Study-Filter (ADR-8). Renders case-study cards in blocks by what the case
   argues for, ordering within a block by the epistemic function of its
   interface. The filter bar is primary over those five functions, secondary over
   demo availability. Reads data/case-studies.json. Each card carries a
   #case-{id} anchor; "More" opens the side panel with the deep page from
   _content/case-studies/{id}.md. No ES modules; uses window.PromptotypingApp.

   Until 2026-07-26 the gallery grouped and filtered on a nine-value vocabulary
   of its own, which had once been misattributed to a paper section. It now uses
   the five epistemic functions of Section 4.2, so grouping, filtering and the
   hue on the card edge all mean the same thing. */

(function () {
  "use strict";

  var App = window.PromptotypingApp || {};

  /* Block order. Evidence first, since a reader arriving from the paper is
     looking for a project it names. Empty blocks are dropped. */
  var ROLE_ORDER = ["evidence", "genealogy", "teaching", "further"];

  /* Order within a block, and the order of the filter chips. The vocabulary and
     its order are the site's own, declared in pages-content.js; what belongs to
     the gallery is how it labels the five. */
  var FUNCTION_ORDER = App.FUNCTIONS;

  var INTERFACE_LABELS = {
    verification: "Verification",
    exploration: "Exploration",
    edition: "Edition",
    capture: "Capture",
    audit: "Audit"
  };

  var allStudies = [];
  var roleLabels = {};
  var roleNotes = {};
  var state = { fn: "all", demoOnly: false };

  /* Sort key: position of the first interface function, cases without one last,
     alphabetical by name inside a rank so the order does not depend on the file. */
  function functionRank(cs) {
    var types = cs.interfaceTypes || [];
    if (!types.length) { return FUNCTION_ORDER.length; }
    var best = FUNCTION_ORDER.length;
    types.forEach(function (t) {
      var i = FUNCTION_ORDER.indexOf(t);
      if (i !== -1 && i < best) { best = i; }
    });
    return best;
  }

  function byFunctionThenName(a, b) {
    var ra = functionRank(a);
    var rb = functionRank(b);
    if (ra !== rb) { return ra - rb; }
    return a.name.localeCompare(b.name);
  }

  /* Extract the bare YouTube id from a watch/short/embed URL. */
  function youtubeIdOf(url) {
    if (!url) { return null; }
    var m = /(?:youtu\.be\/|v=|embed\/)([\w-]{6,})/.exec(url);
    return m ? m[1] : null;
  }

  function textEl(tag, className, text) {
    var el = document.createElement(tag);
    if (className) { el.className = className; }
    if (text != null) { el.textContent = text; }
    return el;
  }

  function linkEl(text, href) {
    var a = document.createElement("a");
    a.href = href;
    a.textContent = text;
    a.target = "_blank";
    a.rel = "noopener";
    return a;
  }

  function matchesFilter(cs) {
    if (state.fn !== "all") {
      var types = cs.interfaceTypes || [];
      if (types.indexOf(state.fn) === -1) { return false; }
    }
    if (state.demoOnly && !cs.demo_url) { return false; }
    return true;
  }

  function buildCard(cs) {
    var card = document.createElement("article");
    card.className = "case-card";
    card.id = "case-" + cs.id;

    card.appendChild(textEl("h4", "case-card-name", cs.name));
    card.appendChild(textEl("p", "case-card-summary", cs.summary));

    if (cs.interfaceTypes && cs.interfaceTypes.length) {
      var meta = textEl("p", "case-card-meta");
      var labels = cs.interfaceTypes.map(function (t) {
        return INTERFACE_LABELS[t] || t;
      });
      meta.textContent = "Interface: " + labels.join(", ");
      card.appendChild(meta);
      // The card edge carries the hue of the first epistemic function; the
      // category itself stays readable in the line above (WCAG 1.4.1).
      var fn = App.functionVar(cs.interfaceTypes[0]);
      if (fn) {
        card.classList.add("has-fn");
        card.style.setProperty("--fn", fn);
      }
    }

    var links = document.createElement("div");
    links.className = "case-card-links";
    if (cs.demo_url) { links.appendChild(linkEl("Demo", cs.demo_url)); }
    if (cs.repo_url) { links.appendChild(linkEl("Repo", cs.repo_url)); }

    // Video affordance: a button that loads the facade inline under the card,
    // so every case with a video_url is playable without leaving the page.
    var videoId = youtubeIdOf(cs.video_url);
    var videoHost = null;
    if (videoId) {
      videoHost = document.createElement("div");
      videoHost.className = "case-card-video";
      var videoBtn = textEl("button", "case-card-video-toggle", "Video");
      videoBtn.type = "button";
      videoBtn.setAttribute("aria-expanded", "false");
      videoBtn.addEventListener("click", function () {
        if (videoHost.childNodes.length) {
          videoHost.innerHTML = "";
          videoBtn.setAttribute("aria-expanded", "false");
          return;
        }
        videoHost.appendChild(App.buildVideoFacade(videoId, cs.name + " (process video)"));
        videoBtn.setAttribute("aria-expanded", "true");
      });
      links.appendChild(videoBtn);
    }

    if (cs.deep_page) {
      var more = textEl("button", "case-card-more", "More");
      more.type = "button";
      more.addEventListener("click", function () { openDeepPage(cs); });
      links.appendChild(more);
    }
    if (links.childNodes.length) { card.appendChild(links); }
    if (videoHost) { card.appendChild(videoHost); }

    return card;
  }

  /* After the panel HTML is set, prepend a click-to-load video facade if the
     case carries a video_url, so the deep page is playable in place. */
  function injectDeepPageVideo(cs, body) {
    var videoId = youtubeIdOf(cs.video_url);
    if (!videoId || body.querySelector(".video-embed")) { return; }
    body.insertBefore(App.buildVideoFacade(videoId, cs.name + " (process video)"), body.firstChild);
  }

  /* The deep page is a Markdown file in the side panel, the same device the
     template catalogue opens, so the fetching, rendering and caching stand in
     the shell. The hash is written silently: the card is the address, and a
     normal write would send the page under the panel scrolling to it. */
  function openDeepPage(cs) {
    var anchor = "case-" + cs.id;
    App.openMarkdownPanel(cs.name, "_content/case-studies/" + cs.id + ".md", anchor,
      function (body) {
        injectDeepPageVideo(cs, body);
        App.setHashSilently(anchor);
      });
  }

  function renderGroups(container) {
    container.innerHTML = "";
    var visible = allStudies.filter(matchesFilter);

    if (!visible.length) {
      container.appendChild(textEl("p", "case-empty", "No projects for this selection."));
      return;
    }

    ROLE_ORDER.forEach(function (role) {
      var group = visible.filter(function (cs) { return cs.role === role; });
      if (!group.length) { return; }
      group.sort(byFunctionThenName);

      var section = document.createElement("div");
      section.className = "case-group";
      section.appendChild(textEl("h3", "case-group-title", roleLabels[role] || role));
      if (roleNotes[role]) {
        section.appendChild(textEl("p", "case-group-note", roleNotes[role]));
      }

      var grid = document.createElement("div");
      grid.className = "case-grid";
      group.forEach(function (cs) { grid.appendChild(buildCard(cs)); });
      section.appendChild(grid);
      container.appendChild(section);
    });
  }

  function buildFilterBar(container, onChange) {
    var bar = document.createElement("div");
    bar.className = "case-filter-bar";

    // Primary: the five epistemic functions, only those present in the data.
    var presentTypes = {};
    allStudies.forEach(function (cs) {
      (cs.interfaceTypes || []).forEach(function (t) { presentTypes[t] = true; });
    });
    var present = FUNCTION_ORDER.filter(function (t) { return presentTypes[t]; });

    var chips = document.createElement("div");
    chips.className = "case-filter-chips";
    var chipDefs = [{ key: "all", label: "All functions" }].concat(
      present.map(function (t) { return { key: t, label: INTERFACE_LABELS[t] }; })
    );
    chipDefs.forEach(function (def) {
      var chip = textEl("button", "case-chip", def.label);
      chip.type = "button";
      chip.dataset.fn = def.key;
      var isActive = def.key === "all";
      if (isActive) { chip.classList.add("active"); }
      chip.setAttribute("aria-pressed", isActive ? "true" : "false");
      // The chip carries the hue of its function, and the word beside it names
      // the category, so the colour never carries the meaning alone (WCAG 1.4.1).
      if (def.key !== "all") {
        var fnVar = App.functionVar(def.key);
        if (fnVar) {
          chip.classList.add("has-fn");
          chip.style.setProperty("--fn", fnVar);
        }
      }
      chip.addEventListener("click", function () {
        state.fn = def.key;
        chips.querySelectorAll(".case-chip").forEach(function (c) {
          var active = c === chip;
          c.classList.toggle("active", active);
          c.setAttribute("aria-pressed", active ? "true" : "false");
        });
        onChange();
      });
      chips.appendChild(chip);
    });
    bar.appendChild(chips);

    // Secondary control: demo-available checkbox.
    var secondary = document.createElement("div");
    secondary.className = "case-filter-secondary";

    var demoWrap = document.createElement("label");
    demoWrap.className = "case-filter-control";
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
      state.demoOnly = checkbox.checked;
      onChange();
    });
    demoWrap.appendChild(checkbox);
    demoWrap.appendChild(document.createTextNode(" with demo only"));
    secondary.appendChild(demoWrap);

    bar.appendChild(secondary);
    container.appendChild(bar);
  }

  function initFilter(rootEl) {
    var barHost = rootEl.querySelector(".case-filter-host");
    var listHost = rootEl.querySelector(".case-list-host");
    if (!barHost || !listHost) { return; }

    App.fetchJson("data/case-studies.json")
      .then(function (data) {
        allStudies = data.caseStudies || [];
        roleLabels = (data._meta && data._meta.role_labels) || {};
        roleNotes = (data._meta && data._meta.role_notes) || {};
        buildFilterBar(barHost, function () { renderGroups(listHost); });
        renderGroups(listHost);
        // If the initial hash targets a deep-page case, open it.
        maybeOpenFromHash();
      })
      .catch(function (err) {
        listHost.innerHTML = "<p class='section-loading'>" + err.message + "</p>";
      });
  }

  function maybeOpenFromHash() {
    var hash = window.location.hash.replace(/^#/, "");
    var m = /^case-(.+)$/.exec(hash);
    if (!m) { return; }
    var cs = allStudies.filter(function (c) { return c.id === m[1]; })[0];
    if (cs && cs.deep_page) { openDeepPage(cs); }
  }

  var hashWired = false;

  function boot() {
    var roots = document.querySelectorAll("[data-component='case-study-filter']");
    Array.prototype.forEach.call(roots, function (root) {
      if (root.dataset.caseReady) {
        return;
      }
      root.dataset.caseReady = "1";
      initFilter(root);
    });
    if (!hashWired) {
      hashWired = true;
      window.addEventListener("hashchange", maybeOpenFromHash);
    }
  }

  // The host markup is injected by app.js after async rendering, so this event
  // is the earliest moment there is anything to render into, and app.js fires it
  // once the render promises have resolved.
  document.addEventListener("promptotyping:sections-ready", boot);
})();
