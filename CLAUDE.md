<!-- template: Vorlage Action-Layer v0.5, https://dhcraft.org/Promptotyping/promptotyping-document/action-layer -->

# Project instructions for the Promptotyping Promptotyping portal

This repository is `DigitalHumanitiesCraft/Promptotyping`, the public portal for Promptotyping. It renders at https://dhcraft.org/Promptotyping/ as the specification documentation of the practice, with glossary, embedded templates, vault view and use-case gallery. The documents in `knowledge/` specify the site, and the implementation follows from them.

## Manuscript publication boundary

The paper is maintained outside this repository and will be published in the journal. Paper work does not happen here, and manuscript text, its apparatus and paper-specific tooling do not enter the repository. The removal history (14 and 28 October 2026) is recorded in `knowledge/specification.md`, Manuscript publication boundary.

## Knowledge base

At every session start, after this file, read in this order:

1. `knowledge/INDEX.md`, navigation and term lexicon
2. `knowledge/handoff.md`, open handoff points; an empty state is valid
3. `knowledge/plan.md`, accepted work and its order
4. `knowledge/governance.md` before changes that affect practice content, evidence, public outputs, permissions or publication
5. the document relevant to the task:
   - what the site must do: `knowledge/specification.md`
   - how it is built: `knowledge/architecture.md`
   - how it looks: `knowledge/design.md`
   - what is checked and how: `knowledge/verification.md`
   - benchmark work: `knowledge/benchmark-specification.md`, then `knowledge/benchmark-plan.md`; `research-artefacts/promptotyping-bench/README.md` separates real tasks under `tasks/` from synthetic tool tests under `fixtures/`
   - where a decision comes from: `knowledge/journal.md`

## Working rules

- Work incrementally, one bounded step after the state documented in the knowledge base, one commit per finished step.
- Consult the knowledge base before taking a design decision. Ask when scope, order or architecture are unclear.
- Handoff. Check source and current target of a point, integrate durable content first or reject it with a reason, then write the journal record and remove the point completely.
- Journal. One entry per coherent transition with the fields of template 0.6 that have content (Anlass, Befund, Entschieden, Korrigiert, Geändert, Belege) and at least one checkable piece of evidence; compact semantically when the journal loses its function, and create no archive. Until the migration recorded in `knowledge/plan.md`, new entries follow the existing oldest-first order of `knowledge/journal.md`.
- Do not cite from the operator's vault without a Markdown link. Vault wikilinks mean nothing in the repository.
- Do not reactivate the old living-paper material of November 2025. Reviving old modules starts a new discussion.
- No branches. All changes go directly to `main`.
- Commits with agent involvement end with `Co-Authored-By: Claude <model actually used> <noreply@anthropic.com>`.

## Vault and repository conflicts

Vault templates are the source of truth for the templates themselves. When mirroring a template reveals a discrepancy:

1. If the vault template is wrong, correct the vault, then mirror into the repository.
2. If the repository mirror is wrong, correct the repository; the vault stays.
3. If it is unclear, ask the operator.

Never let them diverge silently.

## Design principles

Source of values: `knowledge/design.md`. Read it before UI work. The site is calm. Binding:

- The portal stands on the shared DHCraft tokens and building blocks, copied unchanged into `assets/dhcraft/` from the brand-assets repository (folder `web/`) and loaded before `assets/css/style.css` (A49, 2026-11-10). Change a shared value by overriding its custom property in `style.css` and recording it in `knowledge/design.md`; do not edit the copies.
- Use no colours other than the tokens. Write no hex value outside the token block of `style.css`; the portal's roles resolve onto the `--dh-*` roles, whose `light-dark()` values follow `data-theme`.
- Beyond the brand roles (accent for the primary action, focus and links), colour means exactly one thing, the epistemic function of an artefact (`--fn-verification`, `--fn-exploration`, `--fn-edition`, `--fn-capture`, `--fn-audit`), on the Artefakt page and the card edge of the use cases only, and always with the category as a word beside it. Do not colour the five parts of the specification.
- `--signature` is the one loud place, a 2px band at the foot of the header, once per page. Use it nowhere else.
- Fonts are Sora for headings and the site name, Instrument Sans for text and the system monospace for code, all from `assets/dhcraft/`.
- The only movement animation is the side-panel slide (200ms ease-out). Short hover transitions are permitted micro-affordances as `knowledge/design.md` lists them.
- Nothing collapses (A33). The side panel with its mobile bottom-sheet form and the click-to-load video facade are the only two devices that hide content; add no third.
- Add no decorative elements.
- The introduction page under `intro/` (A47) keeps its own copy of the DHCraft tokens and fonts, an English default with `?lang=de`, and its own rules in `knowledge/design.md`, section Introduction page; moving it onto `assets/dhcraft/` is open.

## Scope

- The site is English (A26). The templates and the files under `_content/skills/` stay German, and template names and published anchors stay German identifiers. All templates except `technology` are vault mirrors whose translation belongs in a vault session.
- The canonical skill lives in `skills/promptotyping/` (A42, revised 2026-11-10). It is English and portable, so it names no path or rule bound to one machine.
- No modules beyond the Frontmatter-Inspector, case-study filter, term index and vault view.

## Site model

- The start page is the site, and Use cases is the one further page in the navigation (A50). The header carries anchors on the start page and the link to the use cases; the other pages stay mounted and addressable and are reached from links. The five parts of the specification are sections of one page under `#specification`.
- `PAGES` in `assets/js/registry.js` is the single source for page hosts and route resolution, and it keeps every page mounted whether or not the header lists it. When touching a part, check `isPageId`, `hostPage` and `isRouteId`.
- Inactive pages stay in the DOM as `display: none`, so every published anchor resolves. Do not lazy-mount pages.
- The start page `#overview` is static markup in `index.html` with the seven parts of a DHCraft method page (A48), and `_content/overview.md` is its machine-readable twin. Its template entries, skill operations, cases and download archives repeat their sources, and each example step names in `data-skill` the section of `skills/promptotyping/SKILL.md` that carries its procedure; `tools/check_consistency.py` holds them, so change the source and the page together. The example shows short sentences in the user's own words (A51), and a procedure belongs in the skill, never in a prompt on the page or in the tutorial. Recurring entries have at most three visual levels.
- `vault/` is a Grounded Vault instance with its own action layer `vault/CLAUDE.md`, which governs all work there. Its Python tools under `vault/tools/` are the permitted exceptions to the no-build rule. After changing the assertion layer, rerun `vault/tools/build_site_index.py`, which writes the committed `data/vault.json`.

## URL anchor scheme

Anchors are not renamed without discussion, because repositories link them as `template:` URIs. The full scheme and its rationale are in `knowledge/specification.md`, A4, A5 and ADR-2, ADR-3, ADR-10. `tools/check_consistency.py` reads this list.

- Templates: subpath `/promptotyping-document/{slug}` (latest, canonical), equivalent hash `#promptotyping-document-{slug}`; snapshots only on a version change as `#promptotyping-document-{slug}-v{version}`. Slugs: `data`, `index`, `project`, `specification`, `architecture`, `technology`, `design`, `journal`, `handoff`, `user-stories`, `action-layer`, `testing`, `plan`, `report`, `domain-knowledge`, `verification`, `integration`.
- Machine address (ADR-10): `https://dhcraft.org/Promptotyping/_content/promptotyping-document/{slug}.md`. The Pages workflow publishes `_content/` raw; `.nojekyll` stays for the legacy build.
- Practice anchors derive from headings at render time. Changing an anchor-bearing heading needs an entry in `PRAXIS_ALIASES` in `assets/js/pages-content.js`.
- Concepts `#konzept-{name}`, case studies `#case-{name}`, vault `#vault` and `#vault-{assertion-slug}` (subpaths `/vault`, `/vault/{assertion-slug}`).
- Specification `#specification`; its parts `#application` (legacy `#anwendung`), `#vorlagen`, `#konvention-v0.1`, `#artefakt`, `#verifikation`, each with the same subpath.
- Glossary `#glossar`; overview `#overview` (legacy `#ueberblick`); use cases `#use-cases`; worked workflow `#workflow`; practice `#praxis` and `#praxis-{slug}`; skills `#skills`, `#skills-promptotyping`, `#skills-{slug}`; working environment `#arbeitsumgebung`; tutorial `#tutorial`.

## Tools

Before dependent steps, check the available tools, runtimes and connections. A missing binding rule source holds the dependent change. Name checks you did not run.

### Stack

- Vanilla HTML5, CSS3 and JavaScript, no framework, no build step, no npm.
- Core scripts under `assets/js/` are IIFEs extending `window.PromptotypingApp`, no ES modules. `app.js` loads last among the core scripts. `404.html` is a stub that hands the path as `?p=` to `index.html`; the subpath vocabulary lives only in `resolveTemplateUrl`.
- marked.js and js-yaml are vendored under `assets/vendor/`. No CDN. Custom marked extensions stay in `assets/js/markdown.js`.
- Routing uses browser-native `location.hash`. GitHub Pages publishes the tree that `.github/workflows/pages.yml` assembles from an explicit folder list; `skills/` and `CITATION.cff` are published, while `knowledge/`, this file, `tools/`, tests, `snapshots/`, `research-artefacts/`, `source-material/` and the vault's own knowledge, tools and assertions stay out. A new folder or root file the site loads must be added to that list.
- `assets/promptotyping-logo.png` stays.

### Checks

`python tools/check_consistency.py` runs before every commit that touches the catalogue, convention, template folder or use-case gallery. The combined regression run from the repository root is:

```sh
python -m pytest tools/tests vault/tests research-artefacts/promptotyping-bench intro/tests -q -p no:cacheprovider
python tools/check_consistency.py
python vault/tools/validate.py vault
```

Add `--check-urls` to `check_consistency.py` when an address in `data/case-studies.json` changes; it needs the network. What each check covers is in `knowledge/verification.md`.

Local preview: `python -m http.server 8000`.
