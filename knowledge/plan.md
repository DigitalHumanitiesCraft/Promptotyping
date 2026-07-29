---
title: Plan
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: active
language: en
version: "0.1"
created: 2026-07-29
updated: 2026-07-29
authors: [Christopher Pollin]
generated-with: Claude Code (Claude Fable 5)
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
template:
  name: Vorlage Plan
  version: 0.1
  url: https://dhcraft.org/Promptotyping/promptotyping-document/plan
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-plan
related: [INDEX, specification, architecture, design, journal, paper-knowledge]
---

# Plan

Frontend work packages agreed with the operator on 2026-07-29, in the order they should run. Each package states its scope, where it touches the specification, and which operator decision it still needs. The two-track regime holds throughout: the site renders `knowledge/paper.md` until chapter-wise acceptance, and everything bound to the new manuscript ships with the swap (F6).

## F1 — Paper chapter tracking in the sidebar

When the paper page is active, the Paper entry in the navigation tree expands into the paper's section list, and scrolling the reading column highlights the section currently in view. The reader always sees where in the paper they are, in the tree they already use.

- Implementation: subtree built after `promptotyping:content-ready` from the rendered `.paper-section` elements (same headings that mint the `#abschnitt-*` anchors), rendered permanently under the Paper entry. Nothing collapses or expands; the operator ruled out collapsing sidebar behaviour on 2026-07-29, so the tree simply always shows the paper's structure and the scrollspy only moves the current-marker. IntersectionObserver toggles the marker class, `aria-current="location"` on the current link. No new module, the logic belongs to the navigation owner `registry.js`, styles in `style.css`. No animation, a class toggle only.
- Specification: new requirement (next free A number) recording that this revises the flat-tree rule of A27 for the Paper entry only, and recording the no-collapse rule as a navigation principle. A23 stands unchanged, no third column returns, and the in-page table of contents stays.
- Follow-up check from the same operator ruling: sweep the existing UI for collapse patterns and remove any beyond the two accepted devices, the side panel (slide-in, the design system's one animation) and its mobile bottom-sheet form.
- Operator decision needed: none, requested 2026-07-29.

## F2 — Glossary source lines become resolvable links

Every `Source:` line in a glossary entry (tooltip and register) links to its carriers. The addresses already exist: paper sections as `#abschnitt-{n}-{slug}`, literature entries as `#ref-{surname}-{year}` (A30), vault claims as `#vault-{claim-slug}`, site pages as their page anchors.

- Implementation: replace the free-text `quelle` field in `data/glossar.json` with a structured source list (type plus target anchor plus display text), keep a text fallback for sources without an address; render as links in the tooltip and on the glossary page. `_content/glossar.md` is generated from the JSON and follows.
- Same package, same nature (existing addresses, missing links): the project names in Table 1 of the rendered paper link to their gallery cards (`#case-{slug}`), raised 2026-07-29. The mapping already exists as the `paper_row` field in `data/case-studies.json`, which V5 holds in both directions; the paper renderer linkifies the first column at render time, so the Markdown source stays plain.
- Dependency: paper-section anchors move at the swap; using anchors plus the alias mechanism (F6) keeps the links stable, so F2 can run before the swap.
- Operator decision needed: none on the mechanism; per-entry curation happens during implementation and is reviewable in the diff.

## F3 — Glossary symbol system from a controlled taxonomy

The glossary currently carries no category field, so symbols would have nothing to encode. The package introduces a small controlled taxonomy as a new field per entry and renders it as a monochrome glyph plus the category word, in tooltip and register, so a reader learns to see at a glance whether a term names a form of work, a document, a role, an artefact, a checking form, or a risk.

- Candidate vocabulary (operator decides the final set): form of work; document/knowledge function; role/authority; artefact/interface; checking/acceptance; failure mode/limit; infrastructure/environment.
- Design constraints that bind the glyphs: monochrome geometric marks only, colour stays reserved for the five epistemic functions (A22), the category always also stands as a word (the WCAG 1.4.1 rule the design system already follows), no decorative variation.
- Operator decision needed: the taxonomy vocabulary and the assignment review; the assignment itself is proposed entry by entry in the implementation diff.

## F4 — Constructive vault view with network exploration

The vault page keeps its list as the primary form and gains a secondary exploration view over the anchor structure, claim to distillate to source to representation, so the provenance network becomes explorable instead of only enumerable. The earlier exploratory vault visualisation from the grounded-vault work is the reference, deliberately reduced: no physics playground, a static layout with pan, hover detail, and click-through to the claim in the side panel.

- Implementation: `data/vault.json` already carries the anchors per claim; if edge data is missing, `vault/tools/build_site_index.py` is extended (vault tool, the permitted exception to the no-build rule) and the result committed. Rendering vanilla SVG, no new library, monochrome, 200ms rules of the design system, list view untouched. This extends the existing vault-view module, which is in scope since the operator decision of 2026-07-25.
- Operator guardrail, stated 2026-07-29: do not overdo it; the view must answer "what rests on what" and nothing more.
- Operator decision needed: acceptance of a small mock or first pass before it ships.

## F5 — Interactive companion for the paper (decision pending)

The requested right-hand interactive animation conflicts with three documented decisions: the third column was removed and stays removed (A23), the module set is closed except by operator decision, and the design system forbids scroll-linked animation. Three options, one recommendation:

1. **Interactive method figure in the reading column (recommended).** After the swap, Figure 1 (the method loop) renders as an interactive figure: its stations link to the sections that treat them, hover names the write-back paths. Orientation where the reader already is, no new track, no scroll coupling.
2. **On-demand side panel.** A deliberately opened panel "where am I in the method" using the existing side-panel device. Heavier, and it covers the text the reader came from, the reason the glossary panel was dropped in A6.
3. **Drop it.** F1 already answers the orientation need structurally.

- Operator decision needed: pick an option; option 1 additionally waits for the swap because it builds on the new Figure 1.

## F6 — The swap package (bound to chapter acceptance)

Collected here from `paper-knowledge.md` so the frontend view of the swap is complete; nothing in this package runs early.

1. `#abschnitt-*` alias table for every moved section slug, plus re-anchoring of the V10 anchor phrases.
2. Gallery admission rule A7 re-decided: the fourteen-project inventory left the manuscript, and the card-per-Table-1-row rule loses its referent; likewise the promptotype-status classification.
3. A22 vocabulary against the new 4.2: Scholarly Workbenches joined the four interface types as a fifth artefact form, and the five-hue nominal scale plus `FUNCTION_SLUGS` must follow whatever the accepted text carries; the old Audit-Interfaces question folds into this.
4. Glossary entries on the new definitional layer: `promptotype` (missing entirely), and the stale artefact-reading of the existing promptotyping entries; add `working context`, `documented grounds of acceptance`, `agentic review`, `write-back` (also F3/F2 carriers).
5. The six figures go live with the new paper text; `figure-1-phases.png` and `figure-2-document-types.png` retire with the old one.
6. Section-number references on the overview, application, and practice pages re-checked against the accepted numbering.

## F7 — Tutorial closure

The page is live as `draft` (A31). Remaining: operator acceptance of the page text, then status `complete`; the `promptotype` glossary link target sharpens with F6.4. No further build work in this package; the multimedia layer is F8.

## F8 — Multimedia layer for the tutorial from the teaching materials

The tutorial steps gain curated slides from the operator's teaching decks. The source material lives in the Obsidian vault, the Knowledge-Engineering and Agentic-Engineering teaching materials and the workshop decks; the vault is read from outside under the vault-orient rules, and the selection is made per tutorial step, one or two slides where a slide genuinely carries the step's concept better than prose.

- Implementation: selected slides export as images under `assets/` with a provenance note (deck, date, slide) in the same discipline as the figure layer; embedded per step with a caption naming the source deck. Where a step is better served by the existing videos, the click-to-load facade of A8 is reused instead of a new device.
- Language: the decks are German. The precedent is A26, which exempts teaching material (the skills files) from the English rule; the embedded slides stay German with an English caption, unless the operator decides otherwise.
- Operator decisions needed: which decks are in scope, the slide selection (proposed as a reviewable list before any export), and the language call.
- Dependency: none on the swap; runs after F7's text acceptance so slides land in an accepted step structure.

## F9 — Information-architecture consolidation (raised 2026-07-29, decision package)

Two questions the operator raised while reading the tree. First, whether the five specification parts (Application, Templates, Convention, Artefact and boundary, Verification) should merge into one specification page, so that "the specification" is one readable document with five sections rather than five sibling pages. Second, whether the remaining pages (Glossary, Vault, Worked workflow, Use Cases, Tutorial, Best Practices, Skills, Working environment, Paper) can be grouped or merged so their roles read more clearly.

- What this revises: the one-page-at-a-time model and the flat tree (operator decisions of 2026-07-25/26, A27); a merge turns the five parts into sections of one page, and the tree entry Specification would carry them the way F1 carries the paper sections. A13's generated five-part index would then point into one page.
- The binding constraint: published anchors never break. All five page ids stay as element ids inside the merged page, which the routing already resolves through its DOM fallback, and the subpath forms stay via `resolveTemplateUrl`; the same holds for any merge among the informative pages.
- Merge candidates to decide, none of them decided yet: Worked workflow with Tutorial (one learning path, watching and doing); Best Practices with Skills (one practice section); Glossary with Vault (one reference layer, the term register over the evidence layer). Each merge is a separate operator decision, and "no merge, only sharper one-line notes and grouping" is a valid outcome.
- Operator decision needed: the specification merge yes/no first, since F1's subtree pattern and A13's index depend on it; then the candidate merges one by one.

## Order

F1, then F2, then F4, then F3, with F5 decided along the way; F6 fires with the chapter acceptance, F7 with the operator's page acceptance, F8 after F7. F9 is a decision package that should be settled before F1 ships, because the subtree pattern of F1 is the same device a merged specification page would use, and building it once for both is the smaller diff. F1, F2, F3, and F4 are independent of the swap and safe to ship on the rendered canonical text.
