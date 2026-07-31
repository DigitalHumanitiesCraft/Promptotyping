---
title: INDEX
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: complete
language: en
version: 1.0
created: 2026-05-09
updated: 2026-07-30
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
related: [project, specification, architecture, design, journal, plan, paper, paper-knowledge, report, skriptum-video-1, skriptum-video-2]
---

# INDEX

Navigation and glossary of this repository's knowledge base. The repository `DigitalHumanitiesCraft/Promptotyping` renders as an interactive paper at https://dhcraft.org/Promptotyping/ and is the public methodology site for Promptotyping. The `knowledge/` base is the method's self-application; the site is specified as a Promptotyping knowledge base first and implemented from it.

## Language regime

By operator decision of 2026-07-23 the core knowledge documents (INDEX, project, specification, architecture, design) are English, since they are the public showcase of the self-application; `paper-knowledge.md` is English since the operator's refactor of 2026-07-29. The process documents stay German as working instruments, which covers journal, report, and the two video scripts. The `template:` frontmatter blocks keep the German template names until the template catalogue itself renames them in the vault; the glossary below gives the English function names.

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
- **[paper.md](paper.md)** — the full English paper text as one document, five chapters, promoted on 2026-07-30 from the operator's externally revised, sanitised, verified, and literature-anchored manuscript; headerless by design for copy-out. The site renders this file directly, so the deployed text is the canonical text.
- **[paper-knowledge.md](paper-knowledge.md)** — the single steering document of the paper: argument, terminology, canonical definitions, checking architecture, evidence policy, language rules, apparatus conventions, submission route, operator decisions, open flags, and the provenance pins of every consolidated predecessor (`paper-writing.md`, `revision.md`, `revision-2026-07-30.md`, `verification-draft-sources.md`). English.
- **[skriptum-video-1.md](skriptum-video-1.md)** and **[skriptum-video-2.md](skriptum-video-2.md)** — the cleaned scripts of the two introductory videos, German. They are the source from which the worked-workflow page was written and, through their representations in the vault, the ground of the claims that rest on the videos.
- **[plan.md](plan.md)** — the frontend work packages agreed on 2026-07-29, F1 to F9 with scope, specification impact, and pending operator decisions per package, plus the state section of the execution run of the same night (function: Planning).
- **[report.md](report.md)** — snapshot report of the lane run towards the ZfdG submission (2026-07-23), German; carries a dated addendum on what the revision round settled and is not otherwise updated.
The paper work follows a two-document model, the text in `paper.md` and the knowledge about it in `paper-knowledge.md`. The two-track transitional regime of 2026-07-29/30 ended with the promotion of 2026-07-30. A `data.md` deliberately does not exist; the Material template does not carry for method repositories, and the material basis lives in `project.md` (journal entry of 2026-05-09).

### The revision rounds

Two revision rounds ran on the paper in July 2026 and were each consolidated and deleted. The round on the seven-chapter text was consolidated into `revision.md` on 2026-07-26 (its nine working records pinned at `07a736c`); the round on the operator's externally revised manuscript was consolidated into `revision-2026-07-30.md` (its six working reports pinned in that document). With the promotion of 2026-07-30 both consolidations were absorbed into `paper-knowledge.md`, whose closing provenance section carries every pin; the deleted documents' full wording lives in git history at `7138d2a`, the last commit that carries them.

Two audit records live on in the evidence layer regardless. Audits A1 and A2 are ingested into `vault/` as commit-pinned representations with distillates, and three claims rest on them; a pinned anchor points at a commit rather than at a present path, which is why the deletion left the chain intact.

## Reading order

1. INDEX (orientation)
2. **project.md** (what the site is)
3. **specification.md** (what it can do)
4. **architecture.md** (how it is built)
5. **design.md** (how it looks)
6. **journal.md** (what happened)
7. **paper-knowledge.md** (steering of the paper work, leading into **paper.md**)


## Glossary

Terms constitutive for this knowledge base. Canonical definitions live in the linked vault knowledge documents; this is the short form relevant here.

**Promptotyping.** Iterative, knowledge-driven method organised around four recurrent forms of work, Preparation, Exploration, Distillation, Implementation, developing project-specific research artefacts from structured research data and maintained project knowledge. The `knowledge/` folder is the curated knowledge artefact of a project, holding the domain knowledge and the specification the implementation is derived from; its coverage ends where decisions taken during building are not written back into it. A single iteration of a prototype stays cheap to abandon, and what it taught goes into the documents.

**Promptotype.** The identifiable and versioned state that an accepted iteration yields; it connects maintained project knowledge, the resulting digital research artefact, the referenced research-data state, and the documented grounds of acceptance. Not every generated artefact reaches this threshold.

**Promptotyping Document.** Structured Markdown document in a repository's `knowledge/` folder. All of them are Knowledge Documents, specialised by the kind of knowledge they carry into three analytical types, Declarative (subject matter), Process (chronological), Action (imperative). Until July 2026 the declarative type itself was called Knowledge Document; the name moved to the umbrella term.

**Template (Vorlage).** Fillable structural pattern for one function of a Promptotyping knowledge base. The function names have been English since 2026-07-19 (Navigation, Charter, Material, Specification, Architecture, Technology Baseline, Domain Knowledge, Design, Quality Assurance, Verification, Provenance, Planning, Reporting, Integration, Agent Instructions). The catalogue lives in the vault; the site mirrors the templates as versioned anchors. A template carries only where its trigger holds.

**Konvention Promptotyping Documents.** The description of knowledge-base functions, the frontmatter schema, and the structural principles. Lives in the vault, mirrored on the public site as an external specification.

**Anchor schema.** System of permanently stable URL anchors on the site (`#promptotyping-document-data`, `#case-herdata`, `#konzept-eil`). Version snapshots add sub-anchors (`#promptotyping-document-data-v0.1`). Repositories linking via the `template:` field address these anchors; anchors are never renamed. Since the rebuild of 2026-07-25 the site shows one page at a time and holds the inactive pages in the DOM, which is what keeps every published anchor resolvable (`specification.md`, `architecture.md`).

**Subpath alias.** Machine-readable URL form (`/promptotyping-document/data`) routed to the anchor via `404.html`. The canonical machine address for HTTP retrieval without JavaScript is the static Markdown URL (`/_content/promptotyping-document/{slug}.md`).

**Side panel.** Right sliding panel carrying context-specific depth; a bottom sheet on mobile. What it holds is owned by `specification.md`.

**Frontmatter-Inspector.** Module on the templates section resolving a `template:` URI live and rendering the referenced template beneath it.

**Case-study filter.** Module of the use-case section filtering the curated cards by use-case typology (primary), interface type, and demo availability.

**Phase provenance lane.** Historical design device of the first deploy, removed by operator decision 2026-06-10 (A2, ADR-4). The `{:.phase-*}` tags it read are gone from the paper Markdown, and the stripper that had covered for them was deleted on 2026-07-27.

**Critical Expert in the Loop (EIL).** The role that validates LLM output at defined points; here Christopher Pollin is the Critical Expert.

**`template:` field.** Frontmatter field pointing to the authoritative template specification on this site. Format `template: { name, version, url, alias }`; `url` is the latest subpath form, `alias` the latest hash anchor.

**Grounded Vault (`vault/`).** Instance of the Grounded Vault template carrying the provenance layer beneath the paper: sources, distillates, and claims with grounding anchors, validated by `vault/tools/validate.py`. Its own action layer `vault/CLAUDE.md` governs all work there.

## Relation to the vault knowledge base

This repository knowledge base is a self-application of the method. The vault templates guiding it are the source of the template mirror; discrepancies flow back to the vault first, then into the repo. The Critical Expert check made visible that not every template carries; method repositories skip the Material template, which sharpened the trigger rule in the convention itself.

## Related

- External convention: dhcraft.org/Promptotyping/#konvention-v0.1
- Vault substrate: the Pollin 2026 paper, the vault template catalogue, the vault convention
