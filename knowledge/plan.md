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
- Same package, same nature (existing addresses, missing links): the project names in Table 3 of the rendered paper link to their gallery cards (`#case-{slug}`), raised 2026-07-29. The mapping already exists as the `paper_row` field in `data/case-studies.json`, which V5 holds in both directions; the paper renderer linkifies the first column at render time, so the Markdown source stays plain.
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

### Proposed slide selection (2026-07-29, for operator review)

Three teaching documents in the vault hold slide material that touches the tutorial's subject. The master deck for the workshop series is `Teaching/Workshops/2026-07-14 - Master-Foliensatz Knowledge und Context Engineering Folientexte.md`, a working document that carries the slide text, the speaker notes, and the provenance per slide across its six sections. The production version of the shorter course deck is `Teaching/Knowledge and Context Engineering (Foliensatz).md`, which numbers its slides 0 to 13 and adds an image concept and a figure sketch per slide. The derived workshop deck is `Teaching/Workshops/2026-07-18 - GDA Göttingen Workshop Folientexte.md`, which reuses master slides under the delta model of `Teaching/Slide Library.md`. Nothing else in the vault carries slide-level material on the six steps.

One finding governs everything below. The vault holds no `.pptx`, no `.pdf`, and no exported slide image anywhere; the decks live in Google Slides and the vault holds only their texts, and the master deck's own working document records that the operator carries the texts into the deck. Every proposal below therefore rests on the slide text and is unverified at the image level, meaning the rendered slide was not seen. Identification runs over the slide title in the working document, because the master deck's slides carry neither numbers nor Google Slides slide-IDs; the Slide Library registers IDs only for the LLM-basics slides of the TEMPLATE deck. Where a proposal has an equivalent in the numbered production version, the number is given as the more precise address.

**Step 1, Prepare.** One proposal, the master deck slide "Scholar-Centred Design und Requirements Engineering" from the Promptotyping section. It carries the acquisition practice (deep dives, expert interview, literature review), personas, the "As a … I want to … so that …" form, and four user stories from documented research projects across two personas. The tutorial gives the form and one worked example and then hands the reader the hardest part of the step. Four stories from real projects show the range of what a usable story looks like, at the point where the reader has to produce one alone.

**Step 2, Explore.** Two proposals. The first is the master deck slide "Wie transformiert ein Agent Forschungsdaten?" from the Workflows section, present in the Göttingen deck under the same question. It states the division of labour, the agent characterises the data, writes a transformation script, writes tests against known cases, and runs both, while token-by-token transformation by the model stays limited to small individually verifiable units. Step 2 instructs the profiling-script route in a single clause of its prompt and never says why; the slide is that reason as a scheme. The second is the production-version slide 5, "Datenaufbereitung, von der Vorlage zu adressierbaren Daten", equivalent to the master slide "Daten als capta: Datenaufbereitung". It carries the argument that an unstructured source persists no machine-readable structure, so the model re-derives it on every run, together with the capta position and the rule that provenance is part of the datum, and it comes with a before-and-after figure. The step asks the reader to check the agent's claims against named evidence, and the slide supplies the ground for that demand.

**Step 3, Distil.** One proposal, the master deck slide "Der knowledge-Ordner: Funktion vor Dateiname". It lists the document repertoire by function, project, data, specification, design, verification, journal, plan, and action layer, with the note that the list is a repertoire from which a project selects. The tutorial creates four documents plus the action document and defers the mapping onto the template catalogue to its closing section, where the reader has already chosen filenames. A slide that puts function before filename resolves that mismatch at the moment the files are created.

**Step 4, Reduce and test the knowledge base.** One proposal, the master deck slide "Context Rot", whose fuller treatment is production-version slide 8 with the Lost-in-the-Middle curve as a figure. It distinguishes overflow from collapse, gives the position effect with its corrected figures, and states the rule to curate the context and keep it lean. The step gives a cutting criterion and never says why a smaller knowledge base works better for the agent, and this is the one slide in the material with a measured curve behind that claim. The fresh-instance test itself has no counterpart in any deck; the nearest thing is the document-level test question in production-version slide 7. The prose carries the test, and no slide is proposed for it.

**Step 5, Implement.** One proposal, the master deck slide "Drei Dokumenttypen und ihre Diagnostik", carried in the production version inside the speaker notes of slide 7. It names the declarative knowledge document, the imperative action document, and the chronological process document, and attaches the diagnostic that a materially wrong output points at the knowledge document while a formally wrong one points at the action document. That diagnostic is the tutorial's routing rule stated as running prose, and as a three-way scheme it stays visible while the reader works through milestones. The step's three feedback channels (screenshot back to the agent, fault report naming element and expected behaviour, operating the artefact in the role of the user story) have no slide anywhere in the decks, and the prose carries them.

**Step 6, Verify, accept, version.** Two proposals. The first is the master deck slide "Artefakte gegen den Bestand prüfen", present in the Göttingen deck as "Wie werden Artefakte gegen den Bestand geprüft?". It separates formal validation (schema, linter, tests, automatable as hooks) from content validation (coherence and fit with the research context, requiring domain expertise), and names the knowledge documents as the reference for both. Step 6 separates its checks by who can decide them, and this slide is that separation with the automation boundary drawn. The second is the master deck slide "Critical Expert in the Loop" with its four check questions, on contradiction against the reader's own assumption, on independent verifiability, on leading prompts, and on what a repeated prompt produces. The step tells the reader to use the artefact on well-known cases including one it should get wrong; the four questions add the checks against sycophancy and non-determinism that the tutorial does not carry.

Three points for the review. The proposed slides are German, which the F8 language line already anticipates under the A26 precedent, and the master deck's slide texts run to full paragraphs, so the exported image may need a reduced variant of the slide rather than the working version. No screencast or recorded video of any deck is registered in the vault, only the fallback cascade that prepares one per event, so the A8 video route has nothing to draw on and no step is proposed for it. The export itself waits for the operator to open the decks, confirm that each proposed slide exists in built form, and record its slide-ID, which the Slide Library still lacks for the relevant clusters.

## F9 — Information-architecture consolidation (raised 2026-07-29, decision package)

Two questions the operator raised while reading the tree. First, whether the five specification parts (Application, Templates, Convention, Artefact and boundary, Verification) should merge into one specification page, so that "the specification" is one readable document with five sections rather than five sibling pages. Second, whether the remaining pages (Glossary, Vault, Worked workflow, Use Cases, Tutorial, Best Practices, Skills, Working environment, Paper) can be grouped or merged so their roles read more clearly.

- What this revises: the one-page-at-a-time model and the flat tree (operator decisions of 2026-07-25/26, A27); a merge turns the five parts into sections of one page, and the tree entry Specification would carry them the way F1 carries the paper sections. A13's generated five-part index would then point into one page.
- The binding constraint: published anchors never break. All five page ids stay as element ids inside the merged page, which the routing already resolves through its DOM fallback, and the subpath forms stay via `resolveTemplateUrl`; the same holds for any merge among the informative pages.
- Merge candidates to decide, none of them decided yet: Worked workflow with Tutorial (one learning path, watching and doing); Best Practices with Skills (one practice section); Glossary with Vault (one reference layer, the term register over the evidence layer). Each merge is a separate operator decision, and "no merge, only sharper one-line notes and grouping" is a valid outcome.
- Operator decision needed: the specification merge yes/no first, since F1's subtree pattern and A13's index depend on it; then the candidate merges one by one.

## Order

F1, then F2, then F4, then F3, with F5 decided along the way; F6 fires with the chapter acceptance, F7 with the operator's page acceptance, F8 after F7. F9 is a decision package that should be settled before F1 ships, because the subtree pattern of F1 is the same device a merged specification page would use, and building it once for both is the smaller diff. F1, F2, F3, and F4 are independent of the swap and safe to ship on the rendered canonical text.

## State after the run of 2026-07-29

The operator released the plan for execution as a whole on the evening of 2026-07-29; the run was orchestrated over Opus subagents and is recorded in [journal.md](journal.md), entries Nacht VI to Nacht VIII.

- **F9** ran as the specification merge (A32). The three candidate merges among the informative pages were left undone and remain separate operator decisions; the tree carries sharper grouping and notes instead.
- **F1** ran with it (A33), including the collapse sweep.
- **F2** and **F3** ran (A34, A35, A36). The taxonomy assignment per entry and the per-entry source curation are proposals standing in the diff for operator review.
- **F4** ran as a first pass (A37) and awaits the operator's acceptance of the view.
- **F8** stands as the reviewable slide selection under its section above; the export is blocked on access to the decks themselves, since the Obsidian vault holds slide texts without any image form.
- **F5, F6, F7** remain open as specified, bound to the operator's option pick, the chapter acceptance, and the page-text acceptance.
- The knowledge-base coherence pass from the same release ran after the session close, in the main session because the subagent route was blocked by API overload: `tools/check_consistency.py` gained the groups V12 to V14 of [verification.md](verification.md), and the coherence findings are recorded in the journal.
