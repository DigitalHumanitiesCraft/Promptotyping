---
title: State
project:
  name: "Promptotyping Paper Vault"
  repository: "https://github.com/DigitalHumanitiesCraft/Promptotyping"
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
status: draft
language: en
created: "2026-07-19"
updated: "2026-07-23"
related: [operations, journal]
---

# State

Everything volatile in one place, so the rule documents stay stable. Update rows here as work proceeds; never record processing state anywhere else.

## Source inventory

One row per source. Processing status: `new` → `ingested` → `distilled`.

| Source | Type | Channel | Representation | Distillate | Status |
|---|---|---|---|---|---|
| GM-DH `prompts/PRISM.md` (public repo, commit 2025-01-21) | document | collection | [[00_representation/documents/gm-dh-prism-prompt-2025-01]] | [[10_distillates/documents/gm-dh-prism-prompt-2025-01]] | distilled |
| LLM Summer School DH 2025 site (chpollin.github.io/llmdh, September 8-11, 2025) | document | collection | [[00_representation/documents/llmdh-summer-school-2025]] | [[10_distillates/documents/llmdh-summer-school-2025]] | distilled |
| Dissertation (Pollin 2025b) | publication | collection | CSL `pollin-2025b` in `references/` | [[10_distillates/publications/pollin-2025b-dissertation]] | distilled |
| Initial method description, blog post 2025 (Pollin 2025d) | publication | collection | CSL `pollin-2025d` in `references/` | [[10_distillates/publications/pollin-2025d-promptotyping-blog]] | distilled |
| Section-4 figures verification findings (Promptotyping repo, `knowledge/verification-paper-figures.md`, 2026-07-19; file removed from `knowledge/` 2026-07-23, identifier pinned to commit 7c20964) | document | handover | [[00_representation/documents/verification-paper-figures-2026-07-19]] | [[10_distillates/documents/verification-paper-figures-2026-07-19]] | distilled |
| Project repositories of the Section 4 evidence table | data | collection | — | — | new (activated only when a concrete claim needs a computation; the verified figures are carried by the verification-findings source) |
| SZD-HTR FAIR4RS audit (szd-htr repo, `knowledge/verification-fair4rs.md`, 2026-07-23, commit-pinned) | document | handover | [[00_representation/documents/szd-htr-fair4rs-audit-2026-07-23]] | [[10_distillates/documents/szd-htr-fair4rs-audit-2026-07-23]] | distilled |
| KE master deck, LLM-characterisation slide (DHCraft workshop deck, snapshot 2026-07-19) | document | handover | [[00_representation/documents/ke-master-deck-2026-07-19]] | [[10_distillates/documents/ke-master-deck-2026-07-19]] | distilled |
| Frontmatter practice across Promptotyping repos (method-development note, 2026-05-09) | document | handover | [[00_representation/documents/frontmatter-practice-2026-05]] | [[10_distillates/documents/frontmatter-practice-2026-05]] | distilled |
| Promptotyping knowledge-base content audit (method-development note, 2026-07-19) | document | handover | [[00_representation/documents/knowledge-base-content-audit-2026-07-19]] | [[10_distillates/documents/knowledge-base-content-audit-2026-07-19]] | distilled |

The bibliography-traceability sweep of 2026-07-23 added fifty publication sources in one pass; their per-source rows (access class, distillate, claims) live in [[knowledge/register-paper-sources]], which is the canonical inventory for that sweep. Fifteen cited works remain without distillate there, six awaiting an operator-supplied copy (class B) and nine inaccessible (class C).

## Chapter register

One row per chapter of the deliverable. Writing status mirrors the chapter's frontmatter.

The deliverable is external (settled decision in [[knowledge/specification]]); files live in `_content/paper/` at the root of this repository.

| Chapter | File | Status | Notes |
|---|---|---|---|
| Abstract | `00-abstract.md` | draft | created 2026-07-19 |
| 1 Introduction | `01-introduction.md` | revised draft | genealogy reweighted 2026-07-19 |
| 2 Terms and Positioning | `02-terms-positioning.md` | revised draft | 2.6 rewritten 2026-07-19 (dissertation origin, PRISM side line); grounding available via MOC-Genealogy claims |
| 3 Four Phases | `03-four-phases.md` | revised draft | standardisation stage 3.3; figure echoes corrected; form-freedom pole grounded in [[20_claims/promptotyping-documents-form-freedom]], metadata-standard attribution open (see Open work) |
| 4 Projects and Evidence | `04-projects.md` | revised draft | figures verified and corrected 2026-07-19; grounding available via MOC-Evidence claims |
| 5 Epistemic Infrastructure | `05-epistemic-infrastructure.md` | draft | |
| 6 Discussion | `06-discussion.md` | in revision | tightening, limitations passage pending |
| 7 Conclusion | `07-conclusion.md` | revised draft | stale figure corrected 2026-07-19 |

### Literature grounding by paper section

Generated from [[knowledge/register-paper-sources]] on 2026-07-23; one row per paper section, listing the claims that ground the literature statements the paper makes there. Sections 5 and 7 draw on the Evidence and Genealogy claims of the earlier waves; footnote-carried works appear under their footnote label.

| Paper section | Claims |
|---|---|
| 1 | [[20_claims/applied-genai-dh-workshop-series-2024]], [[20_claims/digital-history-collaboration-is-a-trading-zone]], [[20_claims/humanities-data-is-constructed-not-given]], [[20_claims/llm-vocabulary-test-2025-fell-short-of-thesaurus-interoperability]], [[20_claims/llms-amplify-research-not-automate-it]], [[20_claims/promptotyping-documents-are-the-primary-artifact]], [[20_claims/promptotyping-is-a-four-phase-context-engineering-technique]], [[20_claims/reproducibility-shifts-to-documented-justification]], [[20_claims/rse-institutionalised-intermediary-profession]], [[20_claims/semantic-vocabulary-matching-stays-a-human-interpretive-task]] |
| 2.1 | [[20_claims/discarded-visualisations-retain-epistemic-value]], [[20_claims/generous-interfaces-reveal-collection-through-browsing]], [[20_claims/humanities-data-are-capta-not-given]], [[20_claims/inherited-visualisation-conventions-carry-positivist-assumptions]], [[20_claims/search-cannot-represent-collection-abundance]], [[20_claims/visualisation-is-research-process-not-means]] |
| 2.2 | [[20_claims/experimental-prototype-yields-knowledge-not-product]] |
| 2.3 | [[20_claims/context-rot-nonuniform-degradation-with-length]], [[20_claims/fair-emphasises-machine-actionability-of-data]], [[20_claims/fair-principles-findable-accessible-interoperable-reusable]], [[20_claims/form-based-data-entry-merges-source-work-and-modelling]], [[20_claims/humanities-data-is-constructed-not-given]], [[20_claims/making-source-data-machine-addressable-is-interpretive-modelling]], [[20_claims/owens-data-holds-evidentiary-value]], [[20_claims/reproducibility-shifts-to-documented-justification]], [[20_claims/schoech-distinguishes-smart-and-big-data]], [[20_claims/trading-zone-applied-to-data-harmonisation-as-methodological-core]] |
| 2.4 | [[20_claims/digital-history-collaboration-is-a-trading-zone]], [[20_claims/form-based-data-entry-merges-source-work-and-modelling]], [[20_claims/trading-zone-applied-to-data-harmonisation-as-methodological-core]] |
| 2.5 | [[20_claims/context-engineering-systematic-inference-context]], [[20_claims/critical-expert-in-the-loop-double-reflection-loop]], [[20_claims/fanous-frontier-models-sycophantic-in-most-cases]], [[20_claims/llm-based-agents-for-software-engineering]], [[20_claims/macedo-first-process-taxonomy-sdd-frameworks]], [[20_claims/sarkar-vibe-coding-material-disengagement]], [[20_claims/sdd-frameworks-converge-on-specification-over-prompt]], [[20_claims/sycophancy-agreement-over-truth]], [[20_claims/szd-experiment-structured-vibe-coding]], [[20_claims/vibe-coding-speed-quality-tradeoff]] |
| 2.6 | [[20_claims/deep-dive-process-documented-2019]], [[20_claims/edition-ai-benchmarks-lacking-and-reproducibility-favours-local-models]], [[20_claims/field-literature-records-llm-code-generation-and-tei-agent-line-by-2024]], [[20_claims/ontologies-are-shared-vocabularies-for-reuse]] |
| 3.3 | [[20_claims/ro-crate-packages-artefacts-with-machine-readable-metadata]] |
| 3.4 | [[20_claims/conceptual-model-links-language-and-domain-concepts]], [[20_claims/madmps-demand-documents-infrastructure-can-act-on]], [[20_claims/ontologies-are-shared-vocabularies-for-reuse]], [[20_claims/ontology-is-explicit-specification-of-conceptualization]], [[20_claims/traditional-dmps-are-unused-compliance-documents]] |
| 4.1 | [[20_claims/context-rot-nonuniform-degradation-with-length]], [[20_claims/digital-editing-converges-on-static-self-contained-artefact]], [[20_claims/endings-durability-through-static-no-dependencies]], [[20_claims/endings-static-artefacts-minimise-maintenance]], [[20_claims/fair4rs-provenance-and-identifier-principles]], [[20_claims/minimal-computing-reduces-code-and-dependencies]], [[20_claims/minimal-computing-resists-scale-as-innovation]], [[20_claims/static-client-side-editions-reach-tens-of-thousands-of-units]] |
| 4.2 | [[20_claims/coordinated-multiple-views-enable-exploration]], [[20_claims/digital-edition-is-interface-gui-and-api]], [[20_claims/do-one-thing-well-favours-small-specialised-tools-over-monolithic-platforms]], [[20_claims/edition-interface-embodies-editorial-decisions]], [[20_claims/generous-interfaces-reveal-collection-through-browsing]], [[20_claims/scholarly-primitives-classify-activities-not-interfaces]], [[20_claims/search-cannot-represent-collection-abundance]], [[20_claims/ssh-open-marketplace-models-workflows-as-step-sequences]], [[20_claims/tadirah-classifies-dh-research-activities]], [[20_claims/tadirah-most-adopted-yet-under-maintained]], [[20_claims/wikidata-tool-registries-as-commons]] |
| 4.3 | [[20_claims/digital-editing-converges-on-static-self-contained-artefact]], [[20_claims/static-client-side-editions-reach-tens-of-thousands-of-units]] |
| 6.1 | [[20_claims/discarded-visualisations-retain-epistemic-value]], [[20_claims/unfinishedness-is-an-epistemic-value-in-the-digital-humanities]], [[20_claims/visualisation-is-research-process-not-means]] |
| 6.2 | [[20_claims/edition-ai-benchmarks-lacking-and-reproducibility-favours-local-models]], [[20_claims/field-literature-records-llm-code-generation-and-tei-agent-line-by-2024]], [[20_claims/glam-practice-layers-llm-extraction-with-deterministic-checks-and-expert-review]], [[20_claims/llm-vocabulary-test-2025-fell-short-of-thesaurus-interoperability]], [[20_claims/semantic-vocabulary-matching-stays-a-human-interpretive-task]] |
| 6.3 | [[20_claims/edition-ai-benchmarks-lacking-and-reproducibility-favours-local-models]], [[20_claims/field-literature-records-llm-code-generation-and-tei-agent-line-by-2024]], [[20_claims/llm-reproducibility-transparency-recommendations]], [[20_claims/tadirah-most-adopted-yet-under-maintained]], [[20_claims/wikidata-tool-registries-as-commons]] |
| 6.4 | [[20_claims/llms-amplify-research-not-automate-it]], [[20_claims/well-modelled-data-does-not-discharge-critical-data-work]] |
| fn [^posner] (2.3) | [[20_claims/collections-as-data-are-intentional]], [[20_claims/humanities-data-is-constructed-not-given]] |
| fn [^precedent] (4.1) | [[20_claims/client-side-provenance-tool-is-a-precedent-for-server-free-artefacts]], [[20_claims/shared-infrastructure-is-the-opposite-longevity-answer-to-the-self-contained-artefact]] |
| fn [^stanicka] | [[20_claims/llm-vocabulary-test-2025-fell-short-of-thesaurus-interoperability]], [[20_claims/semantic-vocabulary-matching-stays-a-human-interpretive-task]] |

## Open work

<!-- Short, current list; done items are deleted, decisions go to the journal. -->

- Footnote suggestion for the paper session (Section 2.6, side-line dating): the sentence placing PRISM as the side line can carry a footnote grounded in [[20_claims/prism-prompt-documented-by-january-2025]]. The claim carries only that the PRISM prompt existed in its stated wording in the public GM-DH repository by 2025-01-21 (git-commit dating). It does not carry PRISM's influence on the dissertation or on the four-phase model; those links need their own claims or enter the paper as posits.
- Ingest the remaining `new` sources of the inventory.
- Positioning anchors added to the paper on 2026-07-23 (FAIR in 2.3, FAIR4RS in 4.1 and 6.3, RO-Crate in 3.3, machine-actionable DMPs in 3.3, TaDiRAH/tool-registry passage in 4.2, Spec-Driven Development in 2.5/2.6). These rest on external publications carried as references, not on vault claims; no intake needed for the citations themselves. Of the two statements needing grounding, (1) is done 2026-07-23: the szd-htr FAIR4RS audit is ingested and distilled (see inventory) and carried by [[20_claims/szd-htr-fair4rs-audit-2026-07-23]]. Open remains (2) the claim that verification and audit lack TaDiRAH counterparts — either anchor in a distillate of the TaDiRAH vocabulary or leave as a posit with the paper's own wording. Reference verification of 2026-07-23 (Zenodo workshop record v1.1.0/2024, Berners-Lee title, Barbot et al. 2024, Mayr/Thalheim, Miksa, Broy/Kuhrmann, Macedo, L.I.S.A. single authorship) was carried out against the public records and is documented in `knowledge/paper-writing.md` of the repository; no vault intake required for these citations. Modelling-theory anchors added 2026-07-23 (Stachowiak 1973 and Gruber 1993 in 3.3, DIKW cognitive-agent premise in 2.6, Semantic-Web inversion in 3.3): the citations rest on external publications and on the dissertation, whose PDF is held as a source; page-level verification (Stachowiak p. 57, Gruber p. 199, Mayr/Thalheim pp. 57–59) is documented in `knowledge/paper-writing.md`; the Gruber page was corrected 2026-07-23 against the article PDF during the bibliography sweep (the earlier note said p. 134, the definition opens the article at p. 199). The DIKW passage is groundable via [[20_claims/dissertation-dikw-cognitive-agent-premise]]; the inversion sentence is a sharpening of the paper's own Section 2.3 argument and stays a posit.
- The standardisation stage of Section 3.3 is now grounded via [[20_claims/MOC-Method]]: the frontmatter-practice note (2026-05-09) and the knowledge-base content audit (2026-07-19) carry the six-field frontmatter core, the active/snapshot status extension, and the promotion of Verification to a document function.
- Findings of the bibliography sweep for the paper session (2026-07-23). (1) Barbot et al. 2024 as retrieved does not mention TaDiRAH; the paper's Section 4.2 phrase "chains of TaDiRAH-annotated activities (Barbot et al. 2024)" over-attributes and should be softened or re-grounded ([[10_distillates/publications/barbot-2024-ssh-open-marketplace]], Open questions). (2) Andorfer's 25 MB figure is the serialisation of the denormalised person register; the paper's Section 4.3 attribution "source XML" is imprecise while the order of magnitude holds ([[10_distillates/publications/andorfer-2026-static-tei-editions]]). (3) Mayr/Thalheim could be quote-checked only at abstract level; the semi-formal characterisation continues to rest on the operator's page-level verification. (4) The Liu et al. 2024 citation in Section 2.5 was repositioned the same day so it supports only the agent term. (5) Publication-distillate quotes are checked against rendered or preprint carriers where the version of record is paywalled; each distillate's metadata names its carrier.
- Machine review is operator-gated (mechanism per [[knowledge/specification]]); until released, documents stay `grounded` with `checked.validation` dates.
- Posit candidates for the paper session (claims deliberately not built; own conclusions stay posits): (1) that the PRISM side line contributed the process insight to Promptotyping, a cross-source synthesis without anchor, suggested footnote wording in the claim-cycle report of 2026-07-19; (2) that the dissertation is the origin of the method as a genealogical whole, the vault grounds the components ([[20_claims/dissertation-requirements-from-deep-dive-sessions]], [[20_claims/dissertation-requirements-feed-built-artifacts]], [[20_claims/bookkeeping-ontology-session-driven]], [[20_claims/dissertation-dikw-cognitive-agent-premise]]), the synthesis is the paper's argument; (3) the Cologne location of the summer school, supported only by the `uni-koeln.de` materials host.
- Note for the paper session from the blog intake: the 2025-04-24 post does not pose the open metadata-standard question that the Section 3.3 narrative attributes to "the blog post 2025" (no occurrence of Metadaten/Standard/Schema in the body); the post does carry the form-freedom stance ([[10_distillates/publications/pollin-2025d-promptotyping-blog#^s7]]). If the question appears elsewhere (second blog post 2025-05-27 or the L.I.S.A. article), that source needs its own intake; otherwise the paper wording needs softening.
- Notes for the paper session from the llmdh ingest: the site carries no literal "Cologne"; the location rests on the host domain `uni-koeln.de`. The site heads the session "Advanced Prompting Techniques" (within "Prompt Engineering & AI Engineering"), while the paper's footnote in 2.6 writes "Advanced Prompt Engineering"; the school dates are September 8-11, 2025. Correction candidates for the footnote wording.
- Note for the paper session (Concepts): [[20_claims/deck-characterises-llms-as-jagged-alien]] and [[20_claims/deck-derives-context-and-verification-from-llm-profile]] ground a possible Jagged-Alien-Intelligence passage (attachment points are Sections 2.7 and 6). The claims carry what the teaching material states and dates; whether the characterisation holds of LLMs would need external sources or enters as a posit.
