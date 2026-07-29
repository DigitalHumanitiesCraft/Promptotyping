---
title: INDEX
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: complete
language: en
version: 0.9
created: 2026-05-09
updated: 2026-07-29
authors: [Christopher Pollin]
generated-with: Claude Code (Claude Fable 5, Claude Opus 5)
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
template:
  name: Vorlage Index
  version: 0.2
  url: https://dhcraft.org/Promptotyping/promptotyping-document/index
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-index
related: [project, specification, architecture, design, journal, paper, paper-draft, paper-knowledge, paper-writing, verification-draft-sources, paper-argument-map, report, submission-zfdg, revision, skriptum-video-1, skriptum-video-2]
---

# INDEX

Navigation and glossary of this repository's knowledge base. The repository `DigitalHumanitiesCraft/Promptotyping` renders as an interactive paper at https://dhcraft.org/Promptotyping/ and is the public methodology site for Promptotyping. The `knowledge/` base is the method's self-application; the site is specified as a Promptotyping knowledge base first and implemented from it.

## Language regime

By operator decision of 2026-07-23 the core knowledge documents (INDEX, project, specification, architecture, design) are English, since they are the public showcase of the self-application. The process and steering documents stay German as working instruments, which covers journal, paper-writing, paper-argument-map, report, submission-zfdg, the two video scripts, and revision. The `template:` frontmatter blocks keep the German template names until the template catalogue itself renames them in the vault; the glossary below gives the English function names.

## Status vocabulary

`status:` names the maturity of the document rather than the state of the project. The vocabulary is `idea`, `draft`, `stub`, `complete`, `reviewed`, `archived`, since 2026-07-19 additionally `active` for a document written on continuously and `snapshot` for a document tied to a reporting date. The convention text under `_content/konvention.md` still abbreviates the enumeration to `draft`, `active`, `archived`; the templates carry the full list, and it is the templates that govern.

## Contents

- **INDEX** (this document). Navigation and glossary.
- **[project.md](project.md)** — what the site is, its audiences, material basis, and current state (function: Charter).
- **[specification.md](specification.md)** — what the site can do: anchor schema, `template:` resolution, sections, side panels, decision records (function: Specification).
- **[architecture.md](architecture.md)** — how the site is built: URL structure, tech stack, module inventory (function: Architecture).
- **[verification.md](verification.md)** — which claims the site makes about itself, what each is checked against, by what procedure and with what verdict; the automatic part runs as `tools/check_consistency.py` (function: Verification).
- **[design.md](design.md)** — how the site looks and behaves: DHCraft design system, side panels, typography (function: Design).
- **[journal.md](journal.md)** — chronological process record, German (function: Provenance).
- **[paper.md](paper.md)** — the full English paper text as one document, the canonical text after the revision rounds of 2026-07-24 and 2026-07-25; headerless by design for copy-out. The site renders this file directly, so the deployed text is the canonical text.
- **[paper-writing.md](paper-writing.md)** — what holds for the paper text: working mode, core statements, section mirror, the language rule catalogue, the binding decisions by subject, open decisions and checkpoints, and the route to submission. German. It deliberately carries no history; the course of the work is in `journal.md` and in the git history. Its opening note records the transitional regime of 2026-07-29.
- **[paper-draft.md](paper-draft.md)** — the restructured manuscript of 2026-07-29 in six chapters, taken in as a working file beside the canonical text. It becomes `paper.md` when the chapter-wise acceptance has run to the end; until then the site keeps rendering the canonical file.
- **[paper-knowledge.md](paper-knowledge.md)** — the steering document that governs the draft during the transition, with the revision boundary, the placeholder convention, and the acceptance state per chapter. German.
- **[verification-draft-sources.md](verification-draft-sources.md)** — verdict table for the draft's 2025 and 2026 sources, one row per work with the check that ran and what it found. German.
- **[paper-argument-map.md](paper-argument-map.md)** — the concept model of the paper, one argument chain per block in compact notation with confirmation status, German. Serves the operator as a review instrument and an agent as a generation basis.
- **[skriptum-video-1.md](skriptum-video-1.md)** and **[skriptum-video-2.md](skriptum-video-2.md)** — the cleaned scripts of the two introductory videos, German. They are the source from which the worked-workflow page was written and, through their representations in the vault, the ground of the claims that rest on the videos.
- **[report.md](report.md)** — snapshot report of the lane run towards the ZfdG submission (2026-07-23), German; carries a dated addendum on what the revision round settled and is not otherwise updated.
- **[submission-zfdg.md](submission-zfdg.md)** — submission package for the Zeitschrift für digitale Geisteswissenschaften: exposé with outline and literature selection, short abstracts in German and English, formalities checklist; German.
- **[revision.md](revision.md)** — the revision round in one document, since the consolidation of 2026-07-26. It carries the steering knowledge that binds future review commissions, what was carried into the paper and where it now sits, the evidence layer with its counting methods and provenance grades, the negative findings that protect the text from being weakened, and what stayed open; German (function: Verification).

The paper work follows a two-document model, the text in `paper.md` and the knowledge about it in `paper-writing.md`; the argument map is the third, optional layer over both. Since 2026-07-29 a transitional second track runs beside it, the draft in `paper-draft.md` steered by `paper-knowledge.md`, and the two tracks merge when the draft replaces the canonical text. A `data.md` deliberately does not exist; the Material template does not carry for method repositories, and the material basis lives in `project.md` (journal entry of 2026-05-09).

### The revision round

Nine working records of the revision round that ran on the finished draft in July 2026 were consolidated into [revision.md](revision.md) on 2026-07-26 and deleted. That document now carries the steering knowledge that binds future review commissions, every finding with its origin and its checked implementation state, the evidence layer with its counting methods, and the open points. The wording of a single record is in the git history at commit `07a736c`, the last state that carries them.

Two of them live on in the evidence layer regardless. Audits A1 and A2 are ingested into `vault/` as commit-pinned representations with distillates, and three claims rest on them; a pinned anchor points at a commit rather than at a present path, which is why the deletion left the chain intact.

The `revision-decisions.md` that the process description of the round foresaw never entered the repository; the operator decisions were taken in chat and recorded in the commit messages and in `paper-writing.md`.

## Reading order

1. INDEX (orientation)
2. **project.md** (what the site is)
3. **specification.md** (what it can do)
4. **architecture.md** (how it is built)
5. **design.md** (how it looks)
6. **journal.md** (what happened)
7. **paper-writing.md** (state and steering of the paper work, leading into **paper.md**)
8. **paper-argument-map.md** (the paper's argument in compact notation, for review or regeneration)
9. **revision.md** (what the revision round settled and what it left open)


## Glossary

Terms constitutive for this knowledge base. Canonical definitions live in the linked vault knowledge documents; this is the short form relevant here.

**Promptotyping.** Iterative context-engineering method in four phases, Preparation, Exploration & Mapping, Distillation, Implementation, producing research artefacts from data and frontier LLMs. The `knowledge/` folder is the curated knowledge artefact of a project, holding the domain knowledge and the specification the implementation is derived from; its coverage ends where decisions taken during building are not written back into it. A single iteration of a prototype stays cheap to abandon, and what it taught goes into the documents.

**Promptotyping Document.** Structured Markdown document in a repository's `knowledge/` folder. All of them are Knowledge Documents, specialised by the kind of knowledge they carry into three analytical types, Declarative (subject matter), Process (chronological), Action (imperative). Until July 2026 the declarative type itself was called Knowledge Document; the name moved to the umbrella term.

**Template (Vorlage).** Fillable structural pattern for one function of a Promptotyping knowledge base. The function names have been English since 2026-07-19 (Navigation, Charter, Material, Specification, Architecture, Technology Baseline, Domain Knowledge, Design, Quality Assurance, Verification, Provenance, Planning, Reporting, Integration, Agent Instructions). The catalogue lives in the vault; the site mirrors the templates as versioned anchors. A template carries only where its trigger holds.

**Konvention Promptotyping Documents.** The description of knowledge-base functions, the frontmatter schema, and the structural principles. Lives in the vault, mirrored on the public site as an external specification.

**Anchor schema.** System of permanently stable URL anchors on the site (`#promptotyping-document-data`, `#case-herdata`, `#konzept-eil`). Version snapshots add sub-anchors (`#promptotyping-document-data-v0.1`). Repositories linking via the `template:` field address these anchors; anchors are never renamed. Since the rebuild of 2026-07-25 the site shows one page at a time and holds the inactive pages in the DOM, which is what keeps every published anchor resolvable (`specification.md`, `architecture.md`).

**Subpath alias.** Machine-readable URL form (`/promptotyping-document/data`) routed to the anchor via `404.html`. The canonical machine address for HTTP retrieval without JavaScript is the static Markdown URL (`/_content/promptotyping-document/{slug}.md`).

**Side panel.** Right sliding panel carrying context-specific depth; a bottom sheet on mobile. What it holds is owned by `specification.md`.

**Frontmatter-Inspector.** Module on the templates section resolving a `template:` URI live and rendering the referenced template beneath it.

**Case-study filter.** Module of the use-case section filtering the curated cards by use-case typology (primary), interface type, and demo availability.

**Phase provenance lane.** Historical design device of the first deploy, removed by operator decision 2026-06-10 (A2, ADR-4). The `{:.phase-*}` tags it read are gone from the paper Markdown, and the stripper that had covered for them was deleted on 2026-07-27.

**Critical Expert in the Loop (EIL).** The role that verifies LLM output at defined points; here Christopher Pollin is the Critical Expert.

**`template:` field.** Frontmatter field pointing to the authoritative template specification on this site. Format `template: { name, version, url, alias }`; `url` is the latest subpath form, `alias` the latest hash anchor.

**Grounded Vault (`vault/`).** Instance of the Grounded Vault template carrying the provenance layer beneath the paper: sources, distillates, and claims with grounding anchors, validated by `vault/tools/validate.py`. Its own action layer `vault/CLAUDE.md` governs all work there.

## Relation to the vault knowledge base

This repository knowledge base is a self-application of the method. The vault templates guiding it are the source of the template mirror; discrepancies flow back to the vault first, then into the repo. The Critical Expert check made visible that not every template carries; method repositories skip the Material template, which sharpened the trigger rule in the convention itself.

## Related

- External convention: dhcraft.org/Promptotyping/#konvention-v0.1
- Vault substrate: the Pollin 2026 paper, the vault template catalogue, the vault convention
