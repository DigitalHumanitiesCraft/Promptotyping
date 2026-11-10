// The introduction page: language, header, footer, the playable example in the hero, the
// steps to try it and the notes. Text comes from content.js. Classic script without modules,
// following the repository's no-build stack.

(function () {
  "use strict";

  const { FILES, TEXT } = window.PromptotypingIntro;
  // The played example leaves out the generated profile and the index, so that it still fits
  // the first screen at 1440 by 900 (design.md); the reader's own folder shows every file.
  const EXAMPLE_FILES = FILES.filter((file) => file !== "generated/data-profile.md" && file !== "knowledge/INDEX.md");
  const STORE = "promptotyping-intro-lang";
  const NAV = ["top", "try", "notes"];
  const SVG = "http://www.w3.org/2000/svg";

  // Who acts in each example step, and which files it creates (new), edits (changed) or reads.
  // Files not named in any earlier step do not exist yet.
  const STEPS = [
    { actor: "you", new: ["data/letters.csv", "knowledge/project.md"], proto: "empty" },
    { actor: "agent", new: ["knowledge/data.md", "scripts/profile.py"], read: ["data/letters.csv", "knowledge/project.md"], proto: "empty" },
    { actor: "both", new: ["knowledge/specification.md", "knowledge/design.md", "knowledge/verification.md", "knowledge/journal.md", "knowledge/handoff.md", "CLAUDE.md"], read: ["knowledge/project.md", "knowledge/data.md"], proto: "empty" },
    { actor: "agent", new: ["index.html"], read: ["CLAUDE.md", "knowledge/specification.md", "knowledge/design.md", "knowledge/data.md"], proto: "v1" },
    { actor: "you", read: ["knowledge/project.md", "knowledge/specification.md", "index.html"], proto: "flagged" },
    { actor: "both", changed: ["knowledge/specification.md", "knowledge/design.md", "knowledge/verification.md", "knowledge/journal.md"], proto: "waiting" },
    { actor: "agent", changed: ["index.html"], read: ["CLAUDE.md", "knowledge/specification.md", "knowledge/design.md"], proto: "v2" },
  ];

  // What the reader's own folder holds after each step of the try-it section. Each step shows
  // one sentence the reader says to the agent with the skill installed, and what results (A51).
  const TRY_STEPS = [
    {},
    { new: ["data/letters.csv", "knowledge/project.md"] },
    { new: ["knowledge/data.md", "scripts/profile.py", "generated/data-profile.md"], read: ["data/letters.csv", "knowledge/project.md"] },
    { new: ["knowledge/INDEX.md", "knowledge/specification.md", "knowledge/design.md", "knowledge/verification.md", "knowledge/journal.md", "knowledge/handoff.md", "CLAUDE.md"], read: ["knowledge/project.md", "knowledge/data.md"] },
    { changed: ["knowledge/specification.md", "knowledge/design.md", "knowledge/journal.md"] },
    { new: ["index.html"], read: ["CLAUDE.md", "knowledge/specification.md", "knowledge/design.md", "knowledge/data.md"] },
    { changed: ["knowledge/verification.md", "knowledge/journal.md"], read: ["index.html"] },
  ];

  // Synthetic letters. An exact date is [year, month, day]; an uncertain one is a span of
  // decimal years. Version 1 places a span at its start, the mistake the check uncovers.
  const LETTERS = [
    { exact: [1846, 3, 12] },
    { exact: [1846, 9, 2] },
    { span: [1847, 1848] },
    { exact: [1848, 2, 20] },
    { span: [1848, 1849] },
    { span: [1848, 1849] },
    { span: [1848 + 2 / 12, 1848 + 5 / 12] },
    { exact: [1848, 11, 7] },
    { span: [1849, 1852] },
    { exact: [1852, 6, 15] },
    { span: [1853, 1854] },
    { exact: [1854, 1, 30] },
  ];
  const START = 1845;
  const END = 1856;

  function h(tag, attrs, ...children) {
    const node = document.createElement(tag);
    for (const [key, value] of Object.entries(attrs || {})) {
      if (key === "class") node.className = value;
      else if (key === "text") node.textContent = value;
      else node.setAttribute(key, value);
    }
    node.append(...children.filter((child) => child !== null && child !== undefined && child !== ""));
    return node;
  }

  function s(tag, attrs) {
    const node = document.createElementNS(SVG, tag);
    for (const [key, value] of Object.entries(attrs || {})) node.setAttribute(key, String(value));
    return node;
  }

  /** English is the default; ?lang=de or a remembered choice switches to German. */
  function currentLang() {
    const asked = new URLSearchParams(location.search).get("lang");
    if (asked === "de" || asked === "en") return asked;
    try {
      return localStorage.getItem(STORE) === "de" ? "de" : "en";
    } catch {
      return "en";
    }
  }

  function rememberLang(lang) {
    try {
      localStorage.setItem(STORE, lang);
    } catch {
      // Without storage the choice lives in the URL alone.
    }
  }

  function renderHeader(t, lang) {
    const other = lang === "en" ? "de" : "en";
    const url = new URL(location.href);
    url.searchParams.set("lang", other);
    const toggle = h("a", { class: "pill", href: url.pathname + url.search + url.hash, hreflang: other, lang: other, "aria-label": t.switchLabel, text: t.switchTo });
    toggle.addEventListener("click", () => rememberLang(other));
    document.getElementById("site-head").replaceChildren(
      h("a", { class: "brand", href: "#top" },
        h("img", { src: "assets/dhcraft-mark-white.svg", alt: "", width: "28", height: "28" }),
        h("span", { text: "Promptotyping" })),
      h("nav", { class: "site-nav", "aria-label": t.navLabel },
        h("ul", {}, ...NAV.map((id) => h("li", {}, h("a", { href: `#${id}`, text: t.nav[id] }))))),
      h("div", { class: "head-actions" }, toggle, h("a", { class: "pill spec-link", href: "../", text: t.spec })),
    );
    document.querySelector(".skip").textContent = t.skip;
  }

  function initNavState() {
    const links = new Map([...document.querySelectorAll(".site-nav a")].map((link) => [link.hash.slice(1), link]));
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        for (const [id, link] of links) {
          if (id === entry.target.id) link.setAttribute("aria-current", "true");
          else link.removeAttribute("aria-current");
        }
      }
    }, { rootMargin: "-40% 0px -55% 0px" });
    for (const id of links.keys()) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
  }

  function renderHero(t, onPlay) {
    const play = h("button", { type: "button", class: "btn primary", text: t.hero.play });
    play.addEventListener("click", onPlay);
    document.getElementById("hero-text").replaceChildren(
      h("h1", { text: t.hero.title }),
      h("p", { class: "lead", text: t.hero.lead }),
      h("ol", { class: "flow" }, ...t.hero.flow.map(([name, role]) => h("li", {}, h("strong", { text: name }), " ", role))),
      h("p", { class: "who", text: t.hero.who }),
      h("p", { class: "actions" }, play, h("a", { class: "btn", href: "#try", text: t.hero.try })),
    );
  }

  /** The state of every file after a step: absent, new, changed, read or unchanged. */
  function fileStates(steps, index, files) {
    const exists = new Set();
    for (let i = 0; i < index; i += 1) for (const file of steps[i].new || []) exists.add(file);
    const step = steps[index];
    return files.map((file) => {
      if ((step.new || []).includes(file)) return [file, "new"];
      if (!exists.has(file)) return [file, "absent"];
      if ((step.changed || []).includes(file)) return [file, "changed"];
      if ((step.read || []).includes(file)) return [file, "read"];
      return [file, "same"];
    });
  }

  function renderFolder(host, t, index, steps = STEPS, title = t.folder.title, files = EXAMPLE_FILES) {
    const f = t.folder;
    host.replaceChildren(
      h("h3", { class: "pane-title", text: title }),
      h("ul", { class: "files" }, ...fileStates(steps, index, files).map(([file, state]) => {
        const name = file.split("/");
        return h("li", { class: `file is-${state}` },
          h("code", {}, name.length > 1 ? h("span", { class: "dir", text: `${name[0]}/` }) : null, name.at(-1)),
          h("span", { class: "gloss", text: f.glosses[file] }),
          f.states[state] ? h("span", { class: "state", text: f.states[state] }) : null);
      })),
    );
  }

  const x = (year) => 10 + ((year - START) / (END - START)) * 210;
  const decimal = ([year, month, day]) => year + (month - 1) / 12 + (day - 1) / 365;

  /** Draw the timeline. Lanes stack marks that would overlap. */
  function timeline(t, mode) {
    const svg = s("svg", { viewBox: "0 0 230 100", role: "img", "aria-label": t.proto.labels[mode] });
    const axisY = 82;
    svg.append(s("line", { class: "axis", x1: 6, x2: 224, y1: axisY, y2: axisY }));
    for (let year = START; year <= END; year += 1) {
      svg.append(s("line", { class: "tick", x1: x(year), x2: x(year), y1: axisY, y2: axisY + 3 }));
      if ((year - START) % 2 === 1) {
        const label = s("text", { class: "year", x: x(year), y: axisY + 11, "text-anchor": "middle" });
        label.textContent = String(year);
        svg.append(label);
      }
    }
    const lanes = [];
    function lane(from, to) {
      let i = 0;
      while ((lanes[i] || []).some(([a, b]) => from < b + 3 && to > a - 3)) i += 1;
      (lanes[i] = lanes[i] || []).push([from, to]);
      return axisY - 9 - i * 10;
    }
    for (const letter of LETTERS) {
      if (letter.exact) {
        const cx = x(decimal(letter.exact));
        svg.append(s("circle", { class: "mark exact", cx, cy: lane(cx - 3.4, cx + 3.4), r: 3.2 }));
      } else if (mode === "v2") {
        const a = x(letter.span[0]);
        const b = x(letter.span[1]);
        svg.append(s("rect", { class: "mark span", x: a, y: lane(a, b) - 3, width: b - a, height: 6, rx: 3 }));
      } else {
        const cx = x(letter.span[0]);
        const cy = lane(cx - 3.4, cx + 3.4);
        svg.append(s("circle", { class: mode === "v1" ? "mark exact" : "mark flagged", cx, cy, r: 3.2 }));
        if (mode !== "v1") svg.append(s("circle", { class: "flag-ring", cx, cy, r: 5.2 }));
      }
    }
    return svg;
  }

  function legendItem(kind, text) {
    return h("li", {}, h("span", { class: `key ${kind}`, "aria-hidden": "true" }), text);
  }

  function renderProto(host, t, index) {
    const p = t.proto;
    const mode = STEPS[index].proto;
    const children = [h("h3", { class: "pane-title" }, p.title, mode === "empty" ? "" : h("span", { class: "version", text: mode === "v2" ? p.v2 : p.v1 }))];
    if (mode === "empty") {
      children.push(h("p", { class: "proto-empty", text: p.empty }));
    } else {
      const drawn = mode === "v2" ? "v2" : mode === "v1" ? "v1" : "flagged";
      children.push(h("div", { class: "proto-view" }, timeline(t, drawn)));
      const legend = [legendItem("exact", p.dot)];
      if (drawn === "flagged") legend.push(legendItem("flagged", p.flagged));
      if (drawn === "v2") legend.push(legendItem("span", p.span));
      children.push(h("ul", { class: "proto-legend" }, ...legend));
      if (mode === "waiting") children.push(h("p", { class: "proto-note", text: p.waiting }));
      if (mode === "v2") children.push(h("p", { class: "proto-note", text: p.longBar }));
    }
    host.replaceChildren(...children);
  }

  /** The stepper: named steps marked done, current or next, with play, previous and next. */
  function createStepper(t, onShow) {
    const e = t.episode;
    const host = document.getElementById("episode-stepper");
    const list = h("ol", { class: "step-list" });
    const caption = h("p", { class: "step-caption", "aria-live": "polite" });
    const prev = h("button", { type: "button", class: "btn small", text: e.prev });
    const next = h("button", { type: "button", class: "btn primary small", text: e.next });
    const play = h("button", { type: "button", class: "btn small", text: e.play });
    const count = h("span", { class: "step-count" });
    const items = e.steps.map(([title], index) => {
      const pick = h("button", { type: "button", class: "step-pick" }, h("span", { class: "step-mark", "aria-hidden": "true" }), h("span", { class: "step-name", text: title }));
      pick.addEventListener("click", () => show(index, true));
      list.append(h("li", {}, pick));
      return pick;
    });
    // Title and controls share the first row on wide screens, so the panes start higher.
    host.replaceChildren(h("div", { class: "episode-head" }, h("p", { class: "episode-title", text: e.title }), h("div", { class: "step-controls" }, prev, next, play, count)), list, caption);

    /** Actor, step, explanation and instance; the folder change is announced with them, since
     *  the folder pane has no live region. */
    function captionContent(position) {
      const [title, body, example] = e.steps[position];
      const step = STEPS[position];
      const changes = ["new", "changed", "read"].filter((kind) => (step[kind] || []).length)
        .map((kind) => `${e.changeWords[kind]} ${step[kind].map((file) => file.split("/").at(-1)).join(", ")}`);
      return [
        h("strong", { text: `${e.actors[step.actor]}: ${title}. ` }), body,
        h("span", { class: "step-example", text: example }),
        h("span", { class: "visually-hidden", text: e.changes(changes) }),
      ];
    }

    let index = 0;
    let timer = 0;
    function show(target, stopPlaying) {
      if (stopPlaying) stop();
      index = Math.max(0, Math.min(target, e.steps.length - 1));
      items.forEach((item, position) => {
        const state = position < index ? "done" : position === index ? "current" : "upcoming";
        item.dataset.state = state;
        item.querySelector(".step-mark").textContent = state === "done" ? "✓" : String(position + 1);
        item.setAttribute("aria-label", `${position + 1}. ${e.steps[position][0]}, ${e[state]}`);
        if (state === "current") item.setAttribute("aria-current", "step");
        else item.removeAttribute("aria-current");
      });
      caption.replaceChildren(...captionContent(index));
      count.textContent = e.stepOf(index + 1, e.steps.length);
      // A control that is about to be disabled hands its focus to the current step first.
      const focused = document.activeElement;
      prev.disabled = index === 0;
      next.disabled = index === e.steps.length - 1;
      if ((focused === prev && prev.disabled) || (focused === next && next.disabled)) items[index].focus();
      onShow(index);
    }
    function stop() {
      clearTimeout(timer);
      timer = 0;
      play.textContent = e.play;
    }
    function tick() {
      if (index >= e.steps.length - 1) return stop();
      show(index + 1);
      timer = setTimeout(tick, 6000);
      return undefined;
    }
    function start(fromBeginning) {
      play.textContent = e.pause;
      show(fromBeginning || index >= e.steps.length - 1 ? 0 : index + 1);
      timer = setTimeout(tick, 6000);
    }
    // The caption reserves the height of its longest step, so the panes below do not jump
    // while the example plays. A hidden probe of the same width is measured, so the live
    // region announces nothing while this runs. Measured again when the width changes.
    function reserve() {
      caption.style.minBlockSize = "";
      // On a phone the panes sit far below anyway, and a reserved gap would only push them down.
      if (matchMedia("(max-width: 47.99rem)").matches) return;
      const probe = h("p", { class: "step-caption probe", "aria-hidden": "true" });
      probe.style.inlineSize = `${caption.getBoundingClientRect().width}px`;
      host.append(probe);
      let tallest = 0;
      for (let i = 0; i < e.steps.length; i += 1) {
        probe.replaceChildren(...captionContent(i));
        tallest = Math.max(tallest, probe.getBoundingClientRect().height);
      }
      probe.remove();
      caption.style.minBlockSize = `${Math.ceil(tallest)}px`;
    }
    let width = innerWidth;
    addEventListener("resize", () => {
      if (innerWidth !== width) {
        width = innerWidth;
        reserve();
      }
    });
    play.addEventListener("click", () => (timer ? stop() : start(false)));
    prev.addEventListener("click", () => show(index - 1, true));
    next.addEventListener("click", () => show(index + 1, true));
    show(0);
    reserve();
    // The web fonts change line breaks once they arrive, so the reservation is measured again.
    document.fonts?.ready.then(reserve);
    return { start };
  }

  function copyButton(t, value) {
    // Without the Clipboard API the sentence stays selectable text and no button appears.
    if (!navigator.clipboard?.writeText) return null;
    const copy = h("button", { type: "button", class: "btn small", text: t.try.copy });
    copy.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(value);
        copy.textContent = t.try.copied;
      } catch {
        copy.textContent = t.try.copyFailed;
      }
      setTimeout(() => {
        copy.textContent = t.try.copy;
      }, 2500);
    });
    return copy;
  }

  /**
   * A schematic agent window for the set-up step. It is drawn, not captured, so it shows
   * no account or session of a real installation and holds for both agents. The numbered
   * marks in the window and in the key below share their numbers.
   */
  function assistantWindow(w) {
    const mark = (n) => h("span", { class: "win-mark", "aria-hidden": "true", text: String(n) });
    const shown = h("div", { class: "win", role: "img", "aria-label": w.label },
      h("div", { class: "win-bar" }, mark(1),
        h("span", { class: "win-folder" }, h("span", { class: "win-folder-icon", "aria-hidden": "true" }), w.folder)),
      h("div", { class: "win-chat" },
        h("p", { class: "win-you", text: w.you }),
        h("p", { class: "win-reply", text: w.reply }),
        h("div", { class: "win-ask" }, mark(3), h("span", { text: w.ask }),
          h("span", { class: "win-buttons" }, h("span", { class: "win-btn yes", text: w.allow }), h("span", { class: "win-btn", text: w.decline })))),
      h("div", { class: "win-input" }, mark(2), h("span", { text: w.input })));
    return h("figure", { class: "win-figure" }, shown,
      h("figcaption", {},
        h("ol", { class: "win-keys" }, ...w.keys.map((key) => h("li", { text: key }))),
        h("p", { class: "quiet", text: w.caption })));
  }

  function renderTry(t) {
    const r = t.try;
    const tools = h("p", { class: "tools" }, h("span", { class: "tools-label", text: r.toolsLabel }),
      ...r.tools.map(([links, note]) => h("span", { class: "tool" },
        ...links.flatMap(([name, href], i) => [i ? ` ${r.or} ` : "", h("a", { href, text: name })]), ` ${note}`)));
    const steps = r.steps.map((step, index) => h("li", { "data-step": String(index) },
      h("h3", { text: step.title }),
      h("p", { text: step.body }),
      step.links ? h("p", { class: "step-links" }, ...step.links.map(([label, href]) => h("a", { href, text: label }))) : null,
      index === 0 ? assistantWindow(r.window) : null,
      index === 1 ? h("p", {}, h("a", { href: "example/letters.csv", download: "letters.csv", text: r.exampleFile })) : null,
      h("div", { class: "prompt-box" }, h("pre", { class: "prompt" }, h("code", { text: step.prompt })), copyButton(t, step.prompt)),
      h("p", { class: "result" }, h("span", { class: "visually-hidden", text: `${r.resultLabel}. ` }), step.result)));
    document.getElementById("try-body").replaceChildren(
      h("h2", { text: r.title }),
      h("p", { class: "intro", text: r.intro }),
      tools,
      h("ol", { class: "steps" }, ...steps),
      h("p", {}, h("a", { href: "../#tutorial", text: r.more })),
    );
    initGrowth(t, steps);
  }

  /** The folder beside the steps follows the step in the middle of the viewport. */
  function initGrowth(t, steps) {
    const host = document.getElementById("try-folder");
    let current = -1;
    function grow(index) {
      if (index === current) return;
      current = index;
      renderFolder(host, t, index, TRY_STEPS, t.try.folderTitle(t.try.steps[index].title), FILES);
      steps.forEach((step, position) => step.classList.toggle("current", position === index));
    }
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) if (entry.isIntersecting) grow(Number(entry.target.dataset.step));
    }, { rootMargin: "-45% 0px -45% 0px" });
    steps.forEach((step) => {
      observer.observe(step);
      step.addEventListener("focusin", () => grow(Number(step.dataset.step)));
    });
    grow(0);
  }

  function renderNotes(t) {
    const n = t.notes;
    document.getElementById("notes-body").replaceChildren(
      h("h2", { text: n.title }),
      h("div", { class: "columns" },
        h("section", {}, h("h3", { text: n.dataTitle }),
          h("ul", { class: "plain" }, ...n.data.map(([sentence, href]) => h("li", {}, sentence, href ? " " : "", href ? h("a", { href, text: n.source }) : null)))),
        h("section", {}, h("h3", { text: n.scopeTitle }),
          h("ul", { class: "plain" }, ...n.scope.map((sentence) => h("li", { text: sentence })))),
        h("section", {}, h("h3", { text: n.moreTitle }),
          h("ul", { class: "plain links" }, ...n.more.map(([label, href]) => h("li", {}, h("a", { href, text: label })))))),
    );
  }

  function renderFooter(t) {
    const { LINKS } = window.PromptotypingIntro;
    document.getElementById("site-foot").replaceChildren(
      h("div", { class: "foot-grid" },
        h("div", {},
          h("p", {}, `${t.footer.by} `, h("a", { href: "https://dhcraft.org", text: "Digital Humanities Craft" }), `. ${t.footer.license}`),
          h("p", { class: "quiet", text: t.footer.example })),
        h("ul", { class: "foot-links" },
          h("li", {}, h("a", { href: "../", text: t.spec })),
          h("li", {}, h("a", { href: LINKS.repo, text: t.footer.repo }))),
        h("ul", { class: "foot-links", "aria-label": t.footer.related },
          h("li", {}, h("a", { href: LINKS.secondBrain, text: "Second Brain Vault" }), ` ${t.footer.secondBrain}`),
          h("li", {}, h("a", { href: LINKS.groundedVault, text: "Grounded Vault" }), ` ${t.footer.groundedVault}`))),
    );
  }

  function main() {
    const lang = currentLang();
    const t = TEXT[lang];
    document.documentElement.lang = lang;
    document.title = t.title;
    document.querySelector('meta[name="description"]').setAttribute("content", t.description);
    renderHeader(t, lang);
    renderFooter(t);
    const folder = document.getElementById("folder");
    const proto = document.getElementById("proto");
    let stepper = null;
    renderHero(t, () => {
      stepper?.start(true);
      document.getElementById("example").scrollIntoView({ block: "nearest" });
    });
    stepper = createStepper(t, (index) => {
      renderFolder(folder, t, index);
      renderProto(proto, t, index);
    });
    renderTry(t);
    renderNotes(t);
    initNavState();
    if (location.hash) document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView();
  }

  main();
})();
