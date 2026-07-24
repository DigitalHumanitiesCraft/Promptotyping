---
title: INDEX
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: complete
language: en
version: 0.7
created: 2026-05-09
updated: 2026-07-24
authors: [Christopher Pollin]
generated-with: Claude Code mit Claude Fable 5
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
template:
  name: Vorlage Index
  version: 0.2
  url: https://dhcraft.org/Promptotyping/promptotyping-document/index
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-index
related: [project, specification, architecture, design, journal, paper, paper-writing, paper-argument-map, report, submission-zfdg, revision-knowledge]
---

# INDEX

Navigation and glossary of this repository's knowledge base. The repository `DigitalHumanitiesCraft/Promptotyping` renders as an interactive paper at https://dhcraft.org/Promptotyping/ and is the public methodology site for Promptotyping. The `knowledge/` base is the method's self-application; the site is specified as a Promptotyping knowledge base first and implemented from it.

## Language regime

By operator decision of 2026-07-23 the core knowledge documents (INDEX, project, specification, architecture, design) are English, since they are the public showcase of the self-application. The process and steering documents stay German as working instruments, which covers journal, paper-writing, paper-argument-map, report, submission-zfdg, and the revision documents. The `template:` frontmatter blocks keep the German template names until the template catalogue itself renames them in the vault; the glossary below gives the English function names.

## Contents

- **INDEX** (this document). Navigation and glossary.
- **[project.md](project.md)** — what the site is, its audiences, material basis, and current state (function: Charter).
- **[specification.md](specification.md)** — what the site can do: anchor schema, `template:` resolution, sections, side panels, decision records (function: Specification).
- **[architecture.md](architecture.md)** — how the site is built: URL structure, tech stack, module inventory (function: Architecture).
- **[design.md](design.md)** — how the site looks and behaves: DHCraft design system, side panels, typography (function: Design).
- **[journal.md](journal.md)** — chronological process record, German (function: Provenance).
- **[paper.md](paper.md)** — the full English paper text as one document, the canonical text after the revision round of 2026-07-24; headerless by design for copy-out. After release it is decomposed into `_content/paper/`, whose currently deployed cut still carries the pre-revision section structure.
- **[paper-writing.md](paper-writing.md)** — the knowledge about writing the paper: working mode, core statements, language rules, decision state, checkpoints, German.
- **[paper-argument-map.md](paper-argument-map.md)** — the concept model of the paper, one argument chain per block in compact notation with confirmation status, German. Serves the operator as a review instrument and an agent as a generation basis.
- **[report.md](report.md)** — snapshot report of the lane run towards the ZfdG submission (2026-07-23), German; carries a dated addendum on what the revision round settled and is not otherwise updated.
- **[submission-zfdg.md](submission-zfdg.md)** — submission package for the Zeitschrift für digitale Geisteswissenschaften: exposé with outline and literature selection, short abstracts in German and English, formalities checklist; German.
- **[revision-knowledge.md](revision-knowledge.md)** — steering knowledge of the revision phase that ran on the finished draft, kept as a historical document with a dated status note; German.
- **`revision-audit-a0.md`** to **`revision-audit-a3.md`**, **`revision-audit-a4-record-verification.md`**, **`revision-audit-a5-vault-coverage.md`** — the read-only audit reports of the revision phase, German.
- **`revision-frame-proposal.md`** — the mapping and drafts for retiring the translation doubling as the paper's theoretical core, German.
- **`revision-research-sdd.md`** — the sourced examination of the Spec-Driven-Development delimitation, German.

The paper work follows a two-document model, the text in `paper.md` and the knowledge about it in `paper-writing.md`; the argument map is the third, optional layer over both. The operator decisions of the revision phase were taken in chat and recorded in the commit messages and in `paper-writing.md`; the `revision-decisions.md` that the process description in `revision-knowledge.md` foresees was never written. A `data.md` deliberately does not exist; the Material template does not carry for method repositories, and the material basis lives in `project.md` (journal entry of 2026-05-09).

## Reading order

1. INDEX (orientation)
2. **project.md** (what the site is)
3. **specification.md** (what it can do)
4. **architecture.md** (how it is built)
5. **design.md** (how it looks)
6. **journal.md** (what happened)
7. **paper-writing.md** (state and steering of the paper work, leading into **paper.md**)
8. **paper-argument-map.md** (the paper's argument in compact notation, for review or regeneration)

The revision documents are consulted per task rather than read in order. They hold the audits, the frame proposal, and the delimitation research of the revision phase.

## Glossary

Terms constitutive for this knowledge base. Canonical definitions live in the linked vault knowledge documents; this is the short form relevant here.

**Promptotyping.** Iterative context-engineering method in four phases, Preparation, Exploration & Mapping, Distillation, Implementation, producing research artefacts from data and frontier LLMs. The `knowledge/` folder is the curated knowledge artefact of a project, holding the domain knowledge and the specification the implementation is derived from; its coverage ends where decisions taken during building are not written back into it. A single iteration of a prototype stays cheap to abandon, and what it taught goes into the documents.

**Promptotyping Document.** Structured Markdown document in a repository's `knowledge/` folder. Three analytical types: Knowledge (declarative), Process (chronological), Action (imperative).

**Template (Vorlage).** Fillable structural pattern for one function of a Promptotyping knowledge base. The function names have been English since 2026-07-19 (Navigation, Charter, Material, Specification, Architecture, Domain Knowledge, Design, Quality Assurance, Verification, Provenance, Planning, Reporting, Integration, Agent Instructions). The catalogue lives in the vault; the site mirrors the templates as versioned anchors. A template carries only where its trigger holds.

**Konvention Promptotyping Documents.** The description of knowledge-base functions, the frontmatter schema, and the structural principles. Lives in the vault, mirrored on the public site as an external specification.

**Anchor schema.** System of permanently stable URL anchors on the single-page site (`#promptotyping-document-data`, `#case-herdata`, `#konzept-eil`). Version snapshots add sub-anchors (`#promptotyping-document-data-v0.1`). Repositories linking via the `template:` field address these anchors; anchors are never renamed.

**Subpath alias.** Machine-readable URL form (`/promptotyping-document/data`) routed to the anchor via `404.html`. The canonical machine address for HTTP retrieval without JavaScript is the static Markdown URL (`/_content/promptotyping-document/{slug}.md`).

**Side panel.** Right sliding panel of the single page carrying context-specific depth; a bottom sheet on mobile.

**Frontmatter-Inspector.** Module on the templates section resolving a `template:` URI live and rendering the referenced template beneath it.

**Case-study filter.** Module of the use-case section filtering the curated cards by use-case typology (primary), interface type, and demo availability.

**Phase provenance lane.** Historical design device of the first deploy, removed by operator decision 2026-06-10 (A2, ADR-4); the `{:.phase-*}` tags in the paper Markdown remain as methodological annotation and are stripped at render time.

**Critical Expert in the Loop (EIL).** The role that verifies LLM output at defined points; here Christopher Pollin is the Critical Expert.

**`template:` field.** Frontmatter field pointing to the authoritative template specification on this site. Format `template: { name, version, url, alias }`; `url` is the latest subpath form, `alias` the latest hash anchor.

**Grounded Vault (`vault/`).** Instance of the Grounded Vault template carrying the provenance layer beneath the paper: sources, distillates, and claims with grounding anchors, validated by `vault/tools/validate.py`. Its own action layer `vault/CLAUDE.md` governs all work there.

## Relation to the vault knowledge base

This repository knowledge base is a self-application of the method. The vault templates guiding it are the source of the template mirror; discrepancies flow back to the vault first, then into the repo. The Critical Expert check made visible that not every template carries; method repositories skip the Material template, which sharpened the trigger rule in the convention itself.

## Related

- External convention: dhcraft.org/Promptotyping/#konvention
- Vault substrate: the Pollin 2026 paper, the vault template catalogue, the vault convention
