---
title: State
project:
  name: Promptotyping Grounded Vault
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
status: draft
language: en
created: '2026-07-19'
updated: '2026-10-28'
related:
- operations
- journal
---

# State

Everything volatile in one place, so the rule documents stay stable. Update rows here as work proceeds; never record processing state anywhere else.

## Source inventory

One row per source. Processing status: `new` → `ingested` → `distilled`.

| Source | Type | Channel | Representation | Distillate | Status |
|---|---|---|---|---|---|
| LLM Summer School DH 2025 site (chpollin.github.io/llmdh, September 8-11, 2025) | document | collection | [[10_markdown/documents/llmdh-summer-school-2025]] | [[20_distillates/documents/llmdh-summer-school-2025]] | distilled |
| Carver et al. 2022, state of the practice for research software (PeerJ CS) | publication | deep-research | CSL `carver-2022` in `references/` | [[20_distillates/publications/carver-2022-state-of-practice]] | distilled |
| Dissertation (Pollin 2025b) | publication | collection | CSL `pollin-2025b` in `references/` | [[20_distillates/publications/pollin-2025b-dissertation]] | distilled |
| Initial method description, blog post 2025 (Pollin 2025d) | publication | collection | CSL `pollin-2025d` in `references/` | [[20_distillates/publications/pollin-2025d-promptotyping-blog]] | distilled |
| SZD-HTR FAIR4RS audit (szd-htr repo, `knowledge/verification-fair4rs.md`, 2026-07-23, commit-pinned) | document | handover | [[10_markdown/documents/szd-htr-fair4rs-audit-2026-07-23]] | [[20_distillates/documents/szd-htr-fair4rs-audit-2026-07-23]] | distilled |
| KE master deck, LLM-characterisation slide (DHCraft workshop deck, snapshot 2026-07-19) | document | handover | [[10_markdown/documents/ke-master-deck-2026-07-19]] | [[20_distillates/documents/ke-master-deck-2026-07-19]] | distilled |
| Frontmatter practice across Promptotyping repos (method-development note, 2026-05-09) | document | handover | [[10_markdown/documents/frontmatter-practice-2026-05]] | [[20_distillates/documents/frontmatter-practice-2026-05]] | distilled |
| Promptotyping knowledge-base content audit (method-development note, 2026-07-19) | document | handover | [[10_markdown/documents/knowledge-base-content-audit-2026-07-19]] | [[20_distillates/documents/knowledge-base-content-audit-2026-07-19]] | distilled |
| SZD-HTR evaluation results, error typology and CER baseline (szd-htr repo, `knowledge/evaluation-results.md`, 2026-06-10, commit-pinned) | document | handover | [[10_markdown/documents/szd-htr-evaluation-results-2026-06-10]] | [[20_distillates/documents/szd-htr-evaluation-results-2026-06-10]] | distilled |
| GitHub Spec Kit documentation (announcement post 2025-09-02, repository at release v0.14.1; retrieved 2026-07-24) | document | collection | [[10_markdown/documents/sdd-spec-kit-2026-07-24]] | [[20_distillates/documents/sdd-spec-kit-2026-07-24]] | distilled |
| AWS Kiro documentation (launch post 2025-07-14, Feature Specs and Steering pages; retrieved 2026-07-24) | document | collection | [[10_markdown/documents/sdd-kiro-2026-07-24]] | [[20_distillates/documents/sdd-kiro-2026-07-24]] | distilled |
| BMAD-METHOD documentation (repository created 2025-04-13, agents reference and workflow map; retrieved 2026-07-24) | document | collection | [[10_markdown/documents/sdd-bmad-method-2026-07-24]] | [[20_distillates/documents/sdd-bmad-method-2026-07-24]] | distilled |
| OpenSpec documentation (repository created 2025-08-05, README; retrieved 2026-07-24) | document | collection | [[10_markdown/documents/sdd-openspec-2026-07-24]] | [[20_distillates/documents/sdd-openspec-2026-07-24]] | distilled |
| M³GIM vocabulary-derivation findings (m3gim repo, `knowledge/vocab-derivation-findings.md`, 2026-07-24, commit-pinned) | document | collection | [[10_markdown/documents/m3gim-vocab-derivation-2026-07-24]] | [[20_distillates/documents/m3gim-vocab-derivation-2026-07-24]] | distilled |
| Video 1, introduction to Promptotyping (recorded January 2026, https://youtu.be/8sUe4Jkh3uQ) | document | handover | [[10_markdown/documents/promptotyping-video-1-introduction]] | [[20_distillates/documents/promptotyping-video-1-introduction]] | distilled |
| Video 2, live demonstration with an agentic coding tool (recorded January 2026, https://youtu.be/hd_a-NBO_S4) | document | handover | [[10_markdown/documents/promptotyping-video-2-live-demo]] | [[20_distillates/documents/promptotyping-video-2-live-demo]] | distilled |
| Frontmatter-core survey over the local knowledge bases (subagent run 2026-07-26, working copies under `Documents/GitHub/`; snapshot without retained script or file list, not recomputable) | document | handover | [[10_markdown/documents/frontmatter-core-survey-2026-07-26]] | [[20_distillates/documents/frontmatter-core-survey-2026-07-26]] | distilled |
| Lucassen et al. 2016, Quality User Story framework and AQUSA (Requirements Engineering 21(3), open access) | publication | deep-research | CSL `lucassen-2016` in `references/` | [[20_distillates/publications/lucassen-2016-quality-user-story]] | distilled |
| Zheng et al. 2023, Judging LLM-as-a-Judge (NeurIPS Datasets and Benchmarks) | publication | deep-research | CSL `zheng-2023` in `references/` | [[20_distillates/publications/zheng-2023-llm-as-a-judge]] | distilled |
| Saltzer and Schroeder 1975, The Protection of Information in Computer Systems (Proc. IEEE 63(9)) | publication | deep-research | CSL `saltzer-1975` in `references/` | [[20_distillates/publications/saltzer-1975-protection-of-information]] | distilled |
| Shanahan, McDonell and Reynolds 2023, Role play with large language models (Nature 623) | publication | deep-research | CSL `shanahan-2023` in `references/` | [[20_distillates/publications/shanahan-2023-role-play]] | distilled |
| Hong et al. 2024, MetaGPT (ICLR; arXiv:2308.00352) | publication | deep-research | CSL `hong-2023-metagpt` in `references/` | [[20_distillates/publications/hong-2023-metagpt]] | distilled |
| Hitchcock 2003, Toulmin's Warrants (author copy), carrying Toulmin 1958 with page locators | publication | deep-research | CSL `hitchcock-2003` in `references/` | [[20_distillates/publications/hitchcock-2003-toulmins-warrants]] | distilled |
| Groth, Gibson and Velterop 2010, The anatomy of a nanopublication (v3 manuscript on the W3C wiki) | publication | deep-research | CSL `groth-2010` in `references/` | [[20_distillates/publications/groth-2010-nanopublication]] | distilled |
| Marwick, Boettiger and Mullen 2018, research compendium (The American Statistician 72(1)) | publication | deep-research | CSL `marwick-2018` in `references/` | [[20_distillates/publications/marwick-2018-research-compendium]] | distilled |
| Procida, Diátaxis documentation framework (diataxis.fr, retrieved 2026-07-26) | publication | collection | CSL `procida-2024` in `references/` | [[20_distillates/publications/procida-2024-diataxis]] | distilled |

The nine rows above entered on 2026-07-26 with the site-vocabulary literature sweep, which tested five coinages of the public site against the research literature. Two further CSL records were laid down without a distillate, because no open copy was found, `toulmin-1958` (the layout is carried through `hitchcock-2003`) and `winograd-1975` (the declarative/procedural axis is carried through `procida-2024`).

The distilled publications have their per-source rows, with access class, distillate and assertions, in [[knowledge/register-literature]], which is the canonical inventory for them.

## Benchmark research intake

[[30_assertions/MOC-Benchmark]] routes the research basis of the repository's
[draft proposal](../../research-artefacts/promptotyping-bench-proposal.md).
Existing assertion and distillate statuses are unchanged. No new publication
intake, benchmark result ingestion or human verification is recorded by this update.

| Literature starting point | Existing carrier or next required operation |
|---|---|
| Strutz 2026, TEI evaluation; Strutz 2025 dataset | Existing records and distillates in [[knowledge/register-literature]]; reuse within their stated source scope |
| Yehudai et al. 2025, agent-evaluation survey | Existing CSL record and abstract-level distillate; inspect full text before grounding section-level design claims |
| Sterz et al. 2024, human oversight | Existing CSL record; relevant passage intake and distillation remain necessary |
| Gloaguen et al., Evaluating AGENTS.md; Kapoor et al., AI Agents That Matter; Vaccaro et al., human–AI combinations; Merrill et al., Terminal-Bench; Anthropic's agent-evaluation guide | Candidates linked in the repository specification; no corresponding source record or distillate found here on 2026-09-05; follow acquire and distill before building assertions |

Future ingested sources for benchmark work belong in
this document's source inventory. No self-authored proposal is a substitute for
the research publications it discusses.

## Open work

<!-- Short, current list; done items are deleted, decisions go to the journal. -->

- Ingest the remaining `new` sources of the inventory. The B/C acquisition sweep of 2026-07-23 found most of the works it went after in legitimate open copies and distilled them; the works that remain acquisition open and need operator copies are berners-lee-2025 (trade book; the publisher essay carries the personal-agent line but not the agent-realisation claim), borgman-2015, broy-2021, drucker-2014 (the capta argument is already carried by the drucker-2011 distillate), plus stachowiak-1973 as the standing operator-copy item. Two carrier-provenance flags from the sweep for the verification role: galey-2010 is taken from a research-group blog copy of the published article (weakest host of the set) and berners-lee-2001 from a mirror PDF anchored on co-author Lassila's own hosting; both are flagged in the source-file headers. edmond-2005 and baxter-2012 are distilled abstract-only, sufficient for their current use but capped there.
- Machine review is operator-gated (mechanism per [[knowledge/specification]]); until released, documents stay `grounded` with `checked.validation` dates.
- Open contradictions between the videos and the method description stay in the Open questions of [[20_distillates/documents/promptotyping-video-2-live-demo]] and are not resolved by a claim, among them the phase order of Exploration and the milestone-verification rule.
- Evidential limit of the frontmatter-core survey of 2026-07-26. The run read local working copies, kept no script and recorded no file list, so its figures cannot be recomputed and a repetition would measure a changed stock. Its base excludes documents without frontmatter, which the audit of 2026-07-19 found in roughly a third of the knowledge bases, so the rate of about half describes the documents that already carry frontmatter. [[30_assertions/reduced-frontmatter-core-met-in-about-half-the-documents-2026-07-26]] states the limit in the claim itself and is not to be read as an externally checkable measurement. Upgrade path if the figure is to carry more weight: a retained script under `tools/analysis/` over a pinned file list, which would turn the source into a data source with a reproducible computation.
