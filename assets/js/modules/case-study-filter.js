/* Case-Study-Filter (ADR-8). Renders case-study cards grouped by use case and a
   filter bar (primary: use case; secondary: interface type, demo available).
   Reads data/case-studies.json. No genre vocabulary. Each card carries a
   #case-{id} anchor; "Mehr" opens the side panel with the deep page from
   _content/case-studies/{id}.md. No ES modules; uses window.PromptotypingApp. */

(function () {
  "use strict";

  var App = window.PromptotypingApp || {};

  /* Group order per the work package; empty groups are dropped. */
  var USE_CASE_ORDER = [
    "data-production",
    "data-modelling-capture",
    "data-exploration",
    "data-rescue-transformation",
    "process-visualisation",
    "literature-review-infrastructure",
    "knowledge-infrastructure",
    "origin-point"
  ];

  var INTERFACE_LABELS = {
    verification: "Verification",
    exploration: "Exploration",
    edition: "Edition",
    capture: "Capture",
    audit: "Audit"
  };

  var deepCache = {};
  var allStudies = [];
  var labelMap = {};
  var state = { useCase: "all", interfaceType: "all", demoOnly: false };

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
    if (state.useCase !== "all" && cs.useCase !== state.useCase) { return false; }
    if (state.interfaceType !== "all") {
      var types = cs.interfaceTypes || [];
      if (types.indexOf(state.interfaceType) === -1) { return false; }
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
    }

    var links = document.createElement("div");
    links.className = "case-card-links";
    if (cs.demo_url) { links.appendChild(linkEl("Demo", cs.demo_url)); }
    if (cs.repo_url) { links.appendChild(linkEl("Repo", cs.repo_url)); }
    if (cs.video_url) { links.appendChild(linkEl("Video", cs.video_url)); }
    if (cs.deep_page) {
      var more = textEl("button", "case-card-more", "Mehr");
      more.type = "button";
      more.addEventListener("click", function () { openDeepPage(cs); });
      links.appendChild(more);
    }
    if (links.childNodes.length) { card.appendChild(links); }

    return card;
  }

  function openDeepPage(cs) {
    if (typeof App.openSidePanel !== "function") { return; }
    if (deepCache[cs.id]) {
      App.openSidePanel(cs.name, deepCache[cs.id]);
      window.location.hash = "case-" + cs.id;
      return;
    }
    App.openSidePanel(cs.name, "<p class='section-loading'>Wird geladen.</p>");
    fetch("_content/case-studies/" + cs.id + ".md")
      .then(function (res) {
        if (!res.ok) { throw new Error("Konnte Tiefenseite nicht laden (" + res.status + ")."); }
        return res.text();
      })
      .then(function (text) {
        var body = text.replace(/^---\n[\s\S]*?\n---\n?/, "");
        var html = window.marked.parse(body);
        deepCache[cs.id] = html;
        App.openSidePanel(cs.name, html);
        window.location.hash = "case-" + cs.id;
      })
      .catch(function (err) {
        App.openSidePanel(cs.name, "<p class='section-loading'>" + err.message + "</p>");
      });
  }

  function renderGroups(container) {
    container.innerHTML = "";
    var visible = allStudies.filter(matchesFilter);

    if (!visible.length) {
      container.appendChild(textEl("p", "case-empty", "Keine Projekte fuer diese Auswahl."));
      return;
    }

    USE_CASE_ORDER.forEach(function (uc) {
      var group = visible.filter(function (cs) { return cs.useCase === uc; });
      if (!group.length) { return; }

      var section = document.createElement("div");
      section.className = "case-group";
      section.appendChild(textEl("h3", "case-group-title", labelMap[uc] || uc));

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

    // Primary: use case chips (only those present in the data, in order).
    var present = USE_CASE_ORDER.filter(function (uc) {
      return allStudies.some(function (cs) { return cs.useCase === uc; });
    });

    var chips = document.createElement("div");
    chips.className = "case-filter-chips";
    var chipDefs = [{ key: "all", label: "Alle Use Cases" }].concat(
      present.map(function (uc) { return { key: uc, label: labelMap[uc] || uc }; })
    );
    chipDefs.forEach(function (def) {
      var chip = textEl("button", "case-chip", def.label);
      chip.type = "button";
      chip.dataset.useCase = def.key;
      var isActive = def.key === "all";
      if (isActive) { chip.classList.add("active"); }
      chip.setAttribute("aria-pressed", isActive ? "true" : "false");
      chip.addEventListener("click", function () {
        state.useCase = def.key;
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

    // Secondary controls: interface type select + demo-available checkbox.
    var secondary = document.createElement("div");
    secondary.className = "case-filter-secondary";

    var ifaceWrap = document.createElement("label");
    ifaceWrap.className = "case-filter-control";
    ifaceWrap.appendChild(document.createTextNode("Interface-Typ "));
    var select = document.createElement("select");
    var presentTypes = {};
    allStudies.forEach(function (cs) {
      (cs.interfaceTypes || []).forEach(function (t) { presentTypes[t] = true; });
    });
    var optAll = document.createElement("option");
    optAll.value = "all";
    optAll.textContent = "alle";
    select.appendChild(optAll);
    Object.keys(INTERFACE_LABELS).forEach(function (t) {
      if (!presentTypes[t]) { return; }
      var opt = document.createElement("option");
      opt.value = t;
      opt.textContent = INTERFACE_LABELS[t];
      select.appendChild(opt);
    });
    select.addEventListener("change", function () {
      state.interfaceType = select.value;
      onChange();
    });
    ifaceWrap.appendChild(select);
    secondary.appendChild(ifaceWrap);

    var demoWrap = document.createElement("label");
    demoWrap.className = "case-filter-control";
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
      state.demoOnly = checkbox.checked;
      onChange();
    });
    demoWrap.appendChild(checkbox);
    demoWrap.appendChild(document.createTextNode(" nur mit Demo"));
    secondary.appendChild(demoWrap);

    bar.appendChild(secondary);
    container.appendChild(bar);
  }

  function initFilter(rootEl) {
    var barHost = rootEl.querySelector(".case-filter-host");
    var listHost = rootEl.querySelector(".case-list-host");
    if (!barHost || !listHost) { return; }

    fetch("data/case-studies.json")
      .then(function (res) {
        if (!res.ok) { throw new Error("Konnte case-studies.json nicht laden (" + res.status + ")."); }
        return res.json();
      })
      .then(function (data) {
        allStudies = data.caseStudies || [];
        labelMap = (data._meta && data._meta.use_case_labels) || {};
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

  // The host markup is injected by app.js after async rendering; boot on its
  // ready event (and once now in case it already fired).
  document.addEventListener("promptotyping:sections-ready", boot);
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
