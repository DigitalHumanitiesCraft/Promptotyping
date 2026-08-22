---
title: INDEX
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: complete
language: en
version: 1.1
created: 2026-05-09
updated: 2026-08-21
authors: [Christopher Pollin]
generated-with: Claude Code (Claude Fable 5, Claude Opus 5)
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
template:
  name: Vorlage Index
  version: 0.4
  url: https://dhcraft.org/Promptotyping/promptotyping-document/index
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-index
related: [project, governance, specification, architecture, design, verification, handoff, journal, plan, paper-specification]
---

# INDEX

Navigation and glossary of this repository's durable knowledge base. The repository `DigitalHumanitiesCraft/Promptotyping` is the public methodology site for Promptotyping and renders the method paper at https://dhcraft.org/Promptotyping/. File names and paths are the primary routing signals; this index confirms each function and separates durable project knowledge from Research Artefacts, Source Material, Snapshots, Handoffs, and generated site data.

## Language regime

The durable core is English because it specifies the public self-application. `journal.md` remains German as the internal provenance record. The live Process Inbox is `knowledge/handoff.md`; the dated handoff snapshot retains the language of the work it records. The German video transcripts are Source Material. Template names remain German identifiers because public URLs and `template:` fields depend on them.

## Status vocabulary

`status:` names document maturity rather than project state. The vocabulary is `idea`, `draft`, `stub`, `complete`, `reviewed`, `archived`, `active` for a continuously maintained Process Document, and `snapshot` for a dated record.

## Document register

| Path | Function | Routing question | Update trigger |
|---|---|---|---|
| `knowledge/INDEX.md` | Navigation | What exists, where does it belong, and how is it read? | path, function, or constitutive term changes |
| [project.md](project.md) | Charter | What is this project, for whom, and on what material basis? | project identity or scope changes |
| [governance.md](governance.md) | Governance | Who may decide and change what, and which source, rights, checking, and escalation rules bind the work? | authority or governance rule changes |
| [specification.md](specification.md) | Specification | What must the site do and why? | requirement or decision changes |
| [architecture.md](architecture.md) | Architecture | How is the site technically realised? | implementation architecture changes |
| [design.md](design.md) | Design | How does the site look and behave? | design-system or interaction changes |
| [verification.md](verification.md) | Verification | Which claims does the site make about itself, and how are they checked? | claim, procedure, or verdict changes |
| [handoff.md](handoff.md) | Handoff | Which received deltas still require integration or rejection? | a handoff point arrives or is resolved |
| [journal.md](journal.md) | Provenance | Which transitions were integrated, rejected, or corrected, and from which source? | a substantively coherent transition closes |
| [plan.md](plan.md) | Planning | Which accepted work remains and in what dependency order? | accepted scope or completion state changes |
| [paper-specification.md](paper-specification.md) | Paper Specification | What must the method paper argue, define, evidence, and satisfy? | manuscript argument, evidence policy, or submission rule changes |

The method paper follows a two-document model. The canonical text is the Research Artefact [research-artefacts/promptotyping-paper.md](../research-artefacts/promptotyping-paper.md); its governing knowledge is [paper-specification.md](paper-specification.md). A `data.md` does not carry for this method repository because [project.md](project.md) holds the material basis.

## Artefact areas

- `knowledge/` contains durable Promptotyping Documents, including `handoff.md` as the live Process Inbox.
- `research-artefacts/` contains the canonical method paper. The site renders [promptotyping-paper.md](../research-artefacts/promptotyping-paper.md) directly while preserving the public `#paper` route and its published section anchors.
- `source-material/video-scripts/` contains the cleaned German transcripts [promptotyping-introduction-video-script.md](../source-material/video-scripts/promptotyping-introduction-video-script.md) and [promptotyping-live-demo-video-script.md](../source-material/video-scripts/promptotyping-live-demo-video-script.md).
- `snapshots/` contains the dated external report [paper-zfdg-submission-report-2026-07-23.md](../snapshots/paper-zfdg-submission-report-2026-07-23.md) and the final knowledge record of the retired [Promptotyping Agent Interface](../snapshots/promptotyping-agent-interface-final-record-2026-08-22.md).
- `handoffs/` contains the exceptional dated transition snapshot [promptotyping-vault-migration-handoff-2026-08-09.md](../handoffs/promptotyping-vault-migration-handoff-2026-08-09.md). It does not replace the live inbox.
- `_content/` contains authored publication pages and the stable public template mirrors. Generated mirrors such as `_content/glossar.md` are rebuilt from their declared source.
- `data/` is the established runtime-data area. Generated members name their producing command in the governing documentation; `data/vault.json` is built by `vault/tools/build_site_index.py`.

### The revision rounds

Two revision rounds ran on the paper in July 2026 and were each consolidated and deleted. The round on the seven-chapter text was consolidated into `revision.md` on 2026-07-26, with its working records pinned at `07a736c`. The round on the externally revised manuscript was consolidated into `revision-2026-07-30.md`. Both consolidations were absorbed into `paper-specification.md`, whose closing provenance section carries every pin; the deleted documents remain available in git history at `7138d2a`.

Two audit records live on in the evidence layer regardless. Audits A1 and A2 are ingested into `vault/` as commit-pinned representations with distillates, and three claims rest on them; a pinned anchor points at a commit rather than at a present path, which is why the deletion left the chain intact.

## Reading order

1. INDEX (orientation)
2. **handoff.md** (which received deltas are open)
3. **project.md** (what the site is)
4. **governance.md** (who has authority and which rules bind changes)
5. **specification.md** (what it can do)
6. **architecture.md** (how it is built)
7. **design.md** (how it looks)
8. **journal.md** (the provenance of substantive transitions)
9. **paper-specification.md** (governing knowledge for **research-artefacts/promptotyping-paper.md**)


## Glossary

Terms constitutive for this knowledge base. Canonical definitions live in the linked vault knowledge documents; this is the short form relevant here.

**Promptotyping.** Iterative, knowledge-driven method organised around four recurrent forms of work, Preparation, Exploration, Distillation, Implementation, developing project-specific research artefacts from structured research data and maintained project knowledge. The `knowledge/` folder is the curated knowledge artefact of a project, holding the domain knowledge and the specification the implementation is derived from; its coverage ends where decisions taken during building are not written back into it. A single iteration of a prototype stays cheap to abandon, and what it taught goes into the documents.

**Promptotype.** The identifiable and versioned state that an accepted iteration yields; it connects maintained project knowledge, the resulting digital research artefact, the referenced research-data state, and the documented grounds of acceptance. Not every generated artefact reaches this threshold.

**Knowledge Document.** Structured Markdown document in a repository's `knowledge/` folder. All of them are Knowledge Documents, specialised by the kind of knowledge they carry into three analytical types, Declarative (subject matter), Process (workflow state and provenance), Action (imperative). Until July 2026 the declarative type itself was called Knowledge Document; the name moved to the umbrella term.

**Template (Vorlage).** Fillable structural pattern for one function of a Promptotyping knowledge base. The function names are English: Navigation, Charter, Material, Specification, Architecture, Technology Baseline, Domain Knowledge, Design, Quality Assurance, Verification, Provenance, Handoff, Planning, Governance, Reporting, Integration, and Agent Instructions. The catalogue lives in the vault; the site mirrors the templates as versioned anchors. A template carries only where its trigger holds.

**Naming Contract.** Repository rule that makes the file name and path the primary routing signal. Durable single carriers use canonical function names; specialisations follow `<subject>-<function>.md`. `knowledge/handoff.md` is the live inbox, while exceptional dated Handoff snapshots and Reports include scope and date outside `knowledge/`. `INDEX.md` and `CLAUDE.md` are the registered uppercase exceptions.

**ZfdG.** Official abbreviation of *Zeitschrift für digitale Geisteswissenschaften*. It appears in the scope of the dated submission report under `snapshots/`.

**Konvention Knowledge Documents.** The description of knowledge-base functions, the frontmatter schema, and the structural principles. Lives in the vault, mirrored on the public site as an external specification.

**Anchor schema.** System of permanently stable URL anchors on the site (`#promptotyping-document-data`, `#case-herdata`, `#konzept-eil`). Version snapshots add sub-anchors (`#promptotyping-document-data-v0.1`). Repositories linking via the `template:` field address these anchors; anchors are never renamed. Since the rebuild of 2026-07-25 the site shows one page at a time and holds the inactive pages in the DOM, which is what keeps every published anchor resolvable (`specification.md`, `architecture.md`).

**Subpath alias.** Machine-readable URL form (`/promptotyping-document/data`) routed to the anchor via `404.html`. The canonical machine address for HTTP retrieval without JavaScript is the static Markdown URL (`/_content/promptotyping-document/{slug}.md`).

**Side panel.** Right sliding panel carrying context-specific depth; a bottom sheet on mobile. What it holds is owned by `specification.md`.

**Frontmatter-Inspector.** Module on the templates section resolving a `template:` URI live and rendering the referenced template beneath it.

**Case-study filter.** Module of the use-case section filtering the curated cards by use-case typology (primary), interface type, and demo availability.

**Phase provenance lane.** Historical design device of the first deploy, removed by operator decision 2026-06-10 (A2, ADR-4). The `{:.phase-*}` tags it read are gone from the paper Markdown, and the stripper that had covered for them was deleted on 2026-07-27.

**Critical Expert in the Loop (EIL).** The role that validates LLM output at defined points; here Christopher Pollin is the Critical Expert.

**`template:` field.** Frontmatter field pointing to the authoritative template specification on this site. Format `template: { name, version, url, alias }`; `url` is the latest subpath form, `alias` the latest hash anchor.

**Grounded Vault (`vault/`).** Instance of the Grounded Vault template carrying the provenance layer beneath the paper: sources, distillates, and assertions (until August 2026 claims) with grounding anchors, validated by `vault/tools/validate.py`. Migrated onto the renumbered template chain (`00_sources` to `40_output`) on 2026-08-09. Its own action layer `vault/CLAUDE.md` governs all work there.

**Project Governance.** The binding project-level rules for authority, source and evidence status, permissions, checking, acceptance, write-back, rights, publication, and escalation. In this repository they live in [governance.md](governance.md) and are applied through the repository action layer.

## Relation to the vault knowledge base

This repository knowledge base is a self-application of the method. The vault templates guiding it are the source of the template mirror; discrepancies flow back to the vault first, then into the repo. The Critical Expert check made visible that not every template carries; method repositories skip the Material template, which sharpened the trigger rule in the convention itself.

## Related

- External convention: dhcraft.org/Promptotyping/#konvention-v0.1
- Vault substrate: the Pollin 2026 paper, the vault template catalogue, the vault convention
