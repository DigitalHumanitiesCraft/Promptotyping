---
title: INDEX
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: complete
language: en
version: 1.1
created: 2026-05-09
updated: 2026-10-28
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
related: [project, governance, specification, architecture, design, verification, handoff, journal, plan, benchmark-specification, benchmark-plan]
---

# INDEX

## Manuscript publication boundary

The operator withdrew the manuscript from the current public repository and GitHub Pages on 14 October 2026. The public repository carries the specification of the Promptotyping practice, and the manuscript is maintained outside it. The former Paper route and section links show an availability notice without loading manuscript prose. The manuscript file is absent from the deployed tree. Earlier commits and historical publication records are retained, so this removal does not undo prior public availability.

For manuscript work, obtain the current author-controlled text before editing. Historical references below to the repository manuscript and its rendering describe the earlier arrangement and do not authorise restoring it. The journal's acceptance of the expose does not establish acceptance of the full manuscript or resolve eligibility of the previously public draft.


Navigation and glossary of this repository's durable knowledge base. The repository `DigitalHumanitiesCraft/Promptotyping` is the public site for the specification of the Promptotyping practice at https://dhcraft.org/Promptotyping/. File names and paths are the primary routing signals; this index confirms each function and separates durable project knowledge from Research Artefacts, Source Material, Snapshots, Handoffs, and generated site data.

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
| [benchmark-specification.md](benchmark-specification.md) | Benchmark Specification (draft) | How will small research-artefact implementation tasks evaluate the method and human–agent work? | pilot design, task contract, evaluation or calibration decision changes |
| [benchmark-plan.md](benchmark-plan.md) | Benchmark Planning | What must be reviewed, built and measured before a comparative or human study? | milestone, readiness or integration decision changes |

The method paper is maintained outside this repository and will be published in the journal; neither its text nor its governing knowledge is part of this knowledge base. A `data.md` does not carry for this method repository because [project.md](project.md) holds the material basis.

## Artefact areas

- `knowledge/` contains durable Knowledge Documents, including `handoff.md` as the live Process Inbox.
- `research-artefacts/` contains scholarly outputs about the method, currently the benchmark proposal and its authoring area. The folder name does not mean digital research artefacts in the method's sense, which are project-specific operational forms such as interfaces, transformations and workflows.
- `research-artefacts/promptotyping-bench/` is the [benchmark authoring area](../research-artefacts/promptotyping-bench/README.md). Real-data task materials live under `tasks/`, beginning with the [SZD correspondence explorer](../research-artefacts/promptotyping-bench/tasks/szd-correspondence/README.md). Synthetic machinery tests live under [fixtures/dating-explorer](../research-artefacts/promptotyping-bench/fixtures/dating-explorer/README.md) and are excluded from study results. The benchmark specification owns shared requirements; task manifests own data provenance and the plan owns readiness.
- [research-artefacts/promptotyping-bench-proposal.md](../research-artefacts/promptotyping-bench-proposal.md) is the draft research proposal. Its rationale links to existing grounded findings through [MOC-Benchmark](../vault/30_assertions/MOC-Benchmark.md); the experimental contract and work sequence remain in the two benchmark knowledge documents.
- `source-material/video-scripts/` contains the cleaned German transcripts [promptotyping-introduction-video-script.md](../source-material/video-scripts/promptotyping-introduction-video-script.md) and [promptotyping-live-demo-video-script.md](../source-material/video-scripts/promptotyping-live-demo-video-script.md).
- `snapshots/` contains the final knowledge record of the retired [Promptotyping Agent Interface](../snapshots/promptotyping-agent-interface-final-record-2026-08-22.md).
  The [historical frontend plan](../snapshots/frontend-plan-history-2026-09-05.md) preserves superseded packages; the [knowledge-refactor audit](../snapshots/project-knowledge-refactor-2026-09-05.md) records the repository-wide inventory, current ownership and verification scope.
  The [SZD data audit](../snapshots/benchmark-szd-data-audit-2026-09-05.md) records the first dated inspection of the SZD data basis for the benchmark.
  The [SZD rehearsal preparation record](../snapshots/benchmark-szd-rehearsal-preparation-2026-09-05.md) records the local real-data package and technical input checks, without claiming a completed study.
- `_content/` contains authored publication pages and the stable public template mirrors. Generated mirrors such as `_content/glossar.md` are rebuilt from their declared source.
- The canonical skill is not in this repository. It is maintained in [DigitalHumanitiesCraft/promptotyping-skill](https://github.com/DigitalHumanitiesCraft/promptotyping-skill); the Skills page fetches and renders its `SKILL.md` (A42).
- `data/` is the established runtime-data area. Generated members name their producing command in the governing documentation; `data/vault.json` is built by `vault/tools/build_site_index.py`.

## Reading order

1. INDEX (orientation)
2. **handoff.md** (which received deltas are open)
3. **project.md** (what the site is)
4. **governance.md** (who has authority and which rules bind changes)
5. **specification.md** (what it can do)
6. **architecture.md** (how it is built)
7. **design.md** (how it looks)
8. **journal.md** (the provenance of substantive transitions)


## Glossary

Terms constitutive for this knowledge base. Canonical definitions live in the linked vault knowledge documents; this is the short form relevant here.

**Promptotyping.** Iterative, knowledge-driven method organised around four recurrent forms of work, Preparation, Exploration, Distillation, Implementation, developing project-specific research artefacts from structured research data and maintained project knowledge. In repository-based projects the `knowledge/` folder holds the maintained project knowledge from which implementation proceeds. Its coverage ends where findings from implementation are not written back into it.

**Promptotype.** The state of an artefact that each iteration yields, valid only together with the project knowledge and the research-data state it was built from. It serves as a means of knowing, because working with it shows which distinctions the data support and where the work fails. A promptotype is finished for its purpose once the accountable expert's scholarly validation has accepted it. Until 2026-10-28 this glossary reserved the term for an accepted iteration with documented grounds of acceptance.

**Knowledge Document.** Structured Markdown document in a repository's `knowledge/` folder. All of them are Knowledge Documents, specialised by the kind of knowledge they carry into three analytical types, Declarative (subject matter), Process (workflow state and provenance), Action (imperative). The paper calls the three types declarative knowledge documents, process knowledge documents and agent instruction documents. Until July 2026 the declarative type itself was called Knowledge Document, and the name then moved to the umbrella term.

**Template (Vorlage).** Fillable structural pattern for one function of a Promptotyping knowledge base. The function names are English: Navigation, Charter, Material, Specification, Architecture, Technology Baseline, Domain Knowledge, Design, Quality Assurance, Verification, Provenance, Handoff, Planning, Governance, Reporting, Integration, and Agent Instructions. The catalogue lives in the vault; the site mirrors the templates as versioned anchors. A template carries only where its trigger holds.

**Naming Contract.** Repository rule that makes the file name and path the primary routing signal. Durable single carriers use canonical function names; specialisations follow `<subject>-<function>.md`. `knowledge/handoff.md` is the live inbox, while exceptional dated Handoff snapshots and Reports include scope and date outside `knowledge/`. `INDEX.md` and `CLAUDE.md` are the registered uppercase exceptions.

**ZfdG.** Official abbreviation of *Zeitschrift für digitale Geisteswissenschaften*. It appears in the scope of the dated submission report under `snapshots/`.

**Konvention Knowledge Documents.** The description of knowledge-base functions, the frontmatter schema, and the structural principles. Lives in the vault, mirrored on the public site as an external specification.

**Anchor schema.** System of permanently stable URL anchors on the site (`#promptotyping-document-data`, `#case-herdata`, `#konzept-eil`). Version snapshots add sub-anchors (`#promptotyping-document-data-v0.1`). Repositories linking via the `template:` field address these anchors; anchors are never renamed. Since the rebuild of 2026-07-25 the site shows one page at a time and holds the inactive pages in the DOM, which is what keeps every published anchor resolvable (`specification.md`, `architecture.md`).

**Subpath form.** Path form of an address (`/promptotyping-document/data`), canonical on equal terms with the hash anchor (A4) and routed to it via `404.html`, which requires JavaScript. The canonical machine address for HTTP retrieval without JavaScript is the static Markdown URL (`/_content/promptotyping-document/{slug}.md`).

**Side panel.** Right sliding panel carrying context-specific depth; a bottom sheet on mobile. What it holds is owned by `specification.md`.

**Frontmatter-Inspector.** Module on the templates section resolving a `template:` URI live and rendering the referenced template beneath it.

**Case-study filter.** Module of the use-case section filtering the curated cards by use-case typology (primary), interface type, and demo availability.

**Phase provenance lane.** Historical design device of the first deploy, removed by operator decision 2026-06-10 (A2, ADR-4). The `{:.phase-*}` tags it read are gone, and the stripper that had covered for them was deleted on 2026-07-27.

**Critical Expert.** The person or group competent and accountable for judging whether the project knowledge adequately represents the research material and whether the artefact suits its stated purpose, and responsible for accepting an iteration. The site formerly called the role Critical Expert in the Loop (EIL), and the anchor `#konzept-eil` keeps that name. In this repository the operator holds the role.

**`template:` field.** Frontmatter field pointing to the authoritative template specification on this site. Format `template: { name, version, url, alias }`; `url` is the latest subpath form, `alias` the latest hash anchor.

**Grounded Vault (`vault/`).** Instance of the Grounded Vault template carrying the grounded evidence layer of the method: sources, distillates, and assertions (until August 2026 claims) with grounding anchors, validated by `vault/tools/validate.py`. Migrated onto the renumbered template chain (`00_sources` to `40_output`) on 2026-08-09. Its own action layer `vault/CLAUDE.md` governs all work there.

The embedded Grounded Vault also supplies existing research grounding for the benchmark proposal. The separate personal Obsidian vault holds cross-project orientation under `Projects/Promptotyping/`, reached through `Promptotyping MOC.md` and `Project Overview Promptotyping.md`. It is not a second copy of the repository or its evidence chain; the integration boundary and canonical destinations are in [benchmark-plan.md](benchmark-plan.md#knowledge-integration).

**Project Governance.** The binding project-level rules for authority, source and evidence status, permissions, checking, acceptance, write-back, rights, publication, and escalation. In this repository they live in [governance.md](governance.md) and are applied through the repository action layer.

## Relation to the vault knowledge base

This repository knowledge base is a self-application of the method. The vault templates guiding it are the source of the template mirror; discrepancies flow back to the vault first, then into the repo. The Critical Expert check made visible that not every template carries; method repositories skip the Material template, which sharpened the trigger rule in the convention itself.

## Related

- External convention: dhcraft.org/Promptotyping/#konvention-v0.1
- Vault substrate: the vault template catalogue, the vault convention
