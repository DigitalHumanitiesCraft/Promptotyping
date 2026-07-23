---
title: Register of Paper Sources
project:
  name: "Promptotyping Paper Vault"
  repository: "https://github.com/DigitalHumanitiesCraft/Promptotyping"
status: active
language: en
created: "2026-07-23"
updated: "2026-07-23"
related: [state, specification]
---

# Register of Paper Sources

Working register of the bibliography-traceability sweep (operator decision 2026-07-23, see [[knowledge/specification]]). One row per work cited in the paper's References (`knowledge/paper.md`). Canonical inventory rows stay in [[knowledge/state]]; this register is the sweep's overview and backlog. Coordinator-maintained; production subagents report row updates and never write this file.

Access classes. **A** openly readable online (agent-ingestible). **B** operator-supplied local copy required (place in `_sources/`). **C** not accessible (paywall or print without local copy); no distillate is faked, the paper's citation stands on its own and the row keeps the gap visible.

Status values. `registered` (row exists) → `csl` (reference record in `references/`) → `ingested` (source in `_sources/`) → `distilled` (distillate with quote-checked statements) → `claimed` (≥1 claim grounded and MOC-listed).

## Cited works

| CSL id | Work | Paper role | Class | Status | Distillate | Claims |
|---|---|---|---|---|---|---|
| abdurahman-2025 | Abdurahman et al. 2025, LLM evaluation primer | 6.3 | A | claimed | [[10_distillates/publications/abdurahman-2025-primer-llm-evaluation]] | llm-reproducibility-transparency-recommendations |
| andorfer-2026 | Andorfer 2026, static TEI editions (ZfdG) | 4.1, 4.3 | A | claimed | [[10_distillates/publications/andorfer-2026-static-tei-editions]] | digital-editing-converges-on-static-self-contained-artefact, static-client-side-editions-reach-tens-of-thousands-of-units |
| barbot-2024 | Barbot et al. 2024, SSH Open Marketplace workflows | 4.2 | A | claimed | [[10_distillates/publications/barbot-2024-ssh-open-marketplace]] | ssh-open-marketplace-models-workflows-as-step-sequences |
| baxter-2012 | Baxter et al. 2012, The Research Software Engineer | 1 | C | registered | | catalogue record only; talk text not public |
| berners-lee-2001 | Berners-Lee/Hendler/Lassila 2001, The Semantic Web | 2.3 | C | registered | | Scientific American paywall |
| berners-lee-2025 | Berners-Lee 2025, This Is for Everyone | 2.3 | B | registered | | operator heard audiobook; print copy needed for quotes |
| bleier-2018 | Bleier et al. 2018, Editions as Interfaces | 4.2 | A | claimed | [[10_distillates/publications/bleier-2018-editions-interfaces]] | digital-edition-is-interface-gui-and-api, edition-interface-embodies-editorial-decisions |
| borek-2016 | Borek et al. 2016, TaDiRAH (DHQ) | 4.2 | A | claimed | [[10_distillates/publications/borek-2016-tadirah]] | tadirah-classifies-dh-research-activities |
| borgman-2015 | Borgman 2015, Big Data Little Data No Data | 2.3 | B | registered | | MIT Press book |
| broy-2021 | Broy/Kuhrmann 2021, Softwaretechnik | 1 | B | registered | | Springer book |
| chuehong-2022 | Chue Hong et al. 2022, FAIR4RS | 4.1 | A | claimed | [[10_distillates/publications/chuehong-2022-fair4rs]] | fair4rs-provenance-and-identifier-principles |
| cohen-2021 | Cohen et al. 2021, Four Pillars of RSE | 1 | A | claimed | [[10_distillates/publications/cohen-2021-four-pillars-rse]] | rse-institutionalised-intermediary-profession |
| collectionsasdata-2019 | Santa Barbara Statement 2019 | fn [^posner] (2.3) | A | claimed | [[10_distillates/publications/collectionsasdata-2019-santa-barbara]] | collections-as-data-are-intentional, humanities-data-is-constructed-not-given |
| collins-1993 | Collins/Ferguson 1993, Epistemic Forms | 4.2 | C | registered | | Taylor & Francis paywall |
| cremer-2025 | Cremer/Paulmann 2025, Quellen- und Datenkritik (ZfdG) | 2.3 | A | claimed | [[10_distillates/publications/cremer-2025-quellen-und-datenkritik]] | making-source-data-machine-addressable-is-interpretive-modelling |
| drucker-2011 | Drucker 2011, Humanities Approaches (DHQ) | 2.1 | A | claimed | [[10_distillates/publications/drucker-2011-humanities-approaches]] | humanities-data-are-capta-not-given, inherited-visualisation-conventions-carry-positivist-assumptions |
| drucker-2014 | Drucker 2014, Graphesis | 2.1 | B | registered | | Harvard UP book |
| edmond-2005 | Edmond 2005, Professional Intermediary | 1, 2.4 | C | registered | | LLC/OUP paywall |
| fanous-2025 | Fanous et al. 2025, SycEval | 2.5 | A | claimed | [[10_distillates/publications/fanous-2025-syceval]] | fanous-frontier-models-sycophantic-in-most-cases, sycophancy-agreement-over-truth |
| fawzy-2025 | Fawzy et al. 2025, Vibe Coding in Practice | 2.5 | A | claimed | [[10_distillates/publications/fawzy-2025-vibe-coding-in-practice]] | vibe-coding-speed-quality-tradeoff |
| fischer-2025 | Fischer/Kimmel/Puppe 2025, Bildkarten (ZfdG) | 6.2 | A | claimed | [[10_distillates/publications/fischer-2025-bildkarten]] | glam-practice-layers-llm-extraction-with-deterministic-checks-and-expert-review |
| flanders-2019 | Flanders/Jannidis 2019, Shape of Data | 2.3 | B | registered | | Routledge book |
| galey-2010 | Galey/Ruecker 2010, How a Prototype Argues | 2.2 | C | registered | | LLC/OUP paywall |
| grallert-2026 | Grallert et al. 2026, Open Tool Registries (DHQ) | 4.2, 6.3 | A | claimed | [[10_distillates/publications/grallert-2026-open-tool-registries]] | tadirah-most-adopted-yet-under-maintained, wikidata-tool-registries-as-commons |
| gruber-1993 | Gruber 1993, Translation Approach to Ontology | 3.4 | A | claimed | [[10_distillates/publications/gruber-1993-ontolingua]] | ontologies-are-shared-vocabularies-for-reuse, ontology-is-explicit-specification-of-conceptualization |
| hinrichs-2019 | Hinrichs et al. 2019, Sandcastles (DSH) | 2.1, 6.1 | A | claimed | [[10_distillates/publications/hinrichs-2019-sandcastles]] | discarded-visualisations-retain-epistemic-value, visualisation-is-research-process-not-means |
| holmes-2023 | Holmes/Takeda 2023, Endings (DHQ) | 4.1 | A | claimed | [[10_distillates/publications/holmes-2023-endings-principles]] | endings-durability-through-static-no-dependencies, endings-static-artefacts-minimise-maintenance |
| hong-2025 | Hong et al. 2025, Context Rot | 2.3, 4.1 | A | claimed | [[10_distillates/publications/hong-2025-context-rot]] | context-rot-nonuniform-degradation-with-length |
| kemman-2021 | Kemman 2021, Trading Zones | 1, 2.4 | A | claimed | [[10_distillates/publications/kemman-2021-trading-zones]] | digital-history-collaboration-is-a-trading-zone |
| koenig-2026 | König 2026, Fertig vorerst (ZfdG) | 6.1 | A | claimed | [[10_distillates/publications/koenig-2026-fertig-vorerst]] | unfinishedness-is-an-epistemic-value-in-the-digital-humanities |
| koolen-2019 | Koolen et al. 2019, Tool Criticism (DSH) | 2.2 | C | registered | | OUP paywall |
| lang-2026 | Lang/Suárez Cronauer 2026, Beyond Data Feminism (ZfdG) | 6.4 | A | claimed | [[10_distillates/publications/lang-2026-beyond-data-feminism]] | well-modelled-data-does-not-discharge-critical-data-work |
| leipold-2026 | Leipold et al. 2026, WikiFAIR (ZfdG) | fn [^precedent] (4.1) | A | claimed | [[10_distillates/publications/leipold-2026-wikifair]] | shared-infrastructure-is-the-opposite-longevity-answer-to-the-self-contained-artefact |
| liu-2024 | Liu et al. 2024, LLM Agents for SE Survey | 2.5 | A | claimed | [[10_distillates/publications/liu-2024-llm-agents-se-survey]] | llm-based-agents-for-software-engineering |
| macedo-2026 | Macedo 2026, From Prompt to Process | 2.5 | A | claimed | [[10_distillates/publications/macedo-2026-from-prompt-to-process]] | macedo-first-process-taxonomy-sdd-frameworks, sdd-frameworks-converge-on-specification-over-prompt |
| maehr-2026 | Mähr/Federer/Kaspar 2026, Forschungsdatenbank (ZfdG) | 2.3, 2.4 | A | claimed | [[10_distillates/publications/maehr-2026-forschungsdatenbank]] | form-based-data-entry-merges-source-work-and-modelling, trading-zone-applied-to-data-harmonisation-as-methodological-core |
| mariani-2025 | Mariani 2025, PROV-A (ZfdG) | fn [^precedent] (4.1) | A | claimed | [[10_distillates/publications/mariani-2025-prov-a]] | client-side-provenance-tool-is-a-precedent-for-server-free-artefacts |
| mayr-2021 | Mayr/Thalheim 2021, Triptych of Conceptual Modeling | 3.4 | A | claimed | [[10_distillates/publications/mayr-2021-triptych-conceptual-modeling]] | conceptual-model-links-language-and-domain-concepts |
| mei-2025 | Mei et al. 2025, Context Engineering Survey | 2.5 | A | claimed | [[10_distillates/publications/mei-2025-context-engineering]] | context-engineering-systematic-inference-context |
| miksa-2019 | Miksa et al. 2019, Machine-Actionable DMPs | 3.4 | A | claimed | [[10_distillates/publications/miksa-2019-machine-actionable-dmps]] | madmps-demand-documents-infrastructure-can-act-on, traditional-dmps-are-unused-compliance-documents |
| owens-2011 | Owens 2011, Defining Data for Humanists | 2.3 | A | claimed | [[10_distillates/publications/owens-2011-defining-data]] | humanities-data-is-constructed-not-given, owens-data-holds-evidentiary-value |
| pierazzo-2015 | Pierazzo 2015, Digital Scholarly Editing | 4.2 | A | claimed | [[10_distillates/publications/pierazzo-2015-digital-editing]] | edition-interface-embodies-editorial-decisions |
| pollin-2019 | Pollin 2019, DEPCHA and Bookkeeping Ontology | 2.6 | A | claimed | [[10_distillates/publications/pollin-2019-depcha-bookkeeping]] | deep-dive-process-documented-2019, ontologies-are-shared-vocabularies-for-reuse |
| pollin-2024 | Pollin 2024, Workshopreihe (Zenodo) | 1 | A | claimed | [[10_distillates/publications/pollin-2024-workshopreihe]] | applied-genai-dh-workshop-series-2024 |
| pollin-2025a | Pollin et al. 2025a, When it was 2024 (ZfdG) | 2.6, 6.2, 6.3 | A | claimed | [[10_distillates/publications/pollin-2025a-when-it-was-2024]] | edition-ai-benchmarks-lacking-and-reproducibility-favours-local-models, field-literature-records-llm-code-generation-and-tei-agent-line-by-2024 |
| pollin-2025b | Pollin 2025b, Dissertation | 1, 2.3, 2.6, 3.4 | A | **claimed** | [[10_distillates/publications/pollin-2025b-dissertation]] | see MOC-Genealogy, MOC-Concepts |
| pollin-2025c | Pollin 2025c, Critical Vibing blog | 2.5 | A | claimed | [[10_distillates/publications/pollin-2025c-critical-vibing]] | critical-expert-in-the-loop-double-reflection-loop, szd-experiment-structured-vibe-coding |
| pollin-2025d | Pollin 2025d, Promptotyping blog | 1 | A | **claimed** | [[10_distillates/publications/pollin-2025d-promptotyping-blog]] | see MOC-Genealogy |
| pollin-2026a | Pollin 2026a, Asymmetric Amplification blog | 6.4 | A | claimed | [[10_distillates/publications/pollin-2026a-asymmetric-amplification]] | llms-amplify-research-not-automate-it |
| pollin-2026b | Pollin 2026b, L.I.S.A. positioning | 1 | A | claimed | [[10_distillates/publications/pollin-2026b-lisa-positioning]] | llms-amplify-research-not-automate-it, promptotyping-documents-are-the-primary-artifact, promptotyping-is-a-four-phase-context-engineering-technique, reproducibility-shifts-to-documented-justification |
| posner-2015 | Posner 2015, Necessary Contradiction blog | 1, 2.3 | A | claimed | [[10_distillates/publications/posner-2015-necessary-contradiction]] | humanities-data-is-constructed-not-given, reproducibility-shifts-to-documented-justification |
| risam-2022 | Risam/Gil 2022, Minimal Computing (DHQ) | 4.1 | A | claimed | [[10_distillates/publications/risam-2022-minimal-computing]] | minimal-computing-reduces-code-and-dependencies, minimal-computing-resists-scale-as-innovation |
| roberts-2007 | Roberts 2007, Coordinated Multiple Views | 4.2 | A | claimed | [[10_distillates/publications/roberts-2007-coordinated-multiple-views]] | coordinated-multiple-views-enable-exploration |
| ruecker-2015 | Ruecker 2015, Taxonomy of Prototypes | 2.2 | A | claimed | [[10_distillates/publications/ruecker-2015-taxonomy-prototypes]] | experimental-prototype-yields-knowledge-not-product |
| sacha-2014 | Sacha et al. 2014, Knowledge Generation Model | 4.2 | C | registered | | IEEE paywall |
| sarkar-2025 | Sarkar/Drosos 2025, Vibe Coding (PPIG) | 2.5 | A | claimed | [[10_distillates/publications/sarkar-2025-vibe-coding]] | sarkar-vibe-coding-material-disengagement |
| schoech-2013 | Schöch 2013, Big Smart Clean Messy | 2.3 | A | claimed | [[10_distillates/publications/schoech-2013-big-smart-clean-messy]] | humanities-data-is-constructed-not-given, schoech-distinguishes-smart-and-big-data |
| schonhardt-2026 | Schonhardt 2026, Do One Thing (ZfdG) | 4.2 | A | claimed | [[10_distillates/publications/schonhardt-2026-do-one-thing]] | do-one-thing-well-favours-small-specialised-tools-over-monolithic-platforms |
| sharma-2023 | Sharma et al. 2023, Sycophancy | 2.5 | A | claimed | [[10_distillates/publications/sharma-2023-sycophancy]] | sycophancy-agreement-over-truth |
| siemens-2009 | Siemens 2009, Reply All Teams | 1, 2.4 | C | registered | | OUP paywall |
| soiland-2022 | Soiland-Reyes et al. 2022, RO-Crate | 3.3 | A | claimed | [[10_distillates/publications/soiland-2022-ro-crate]] | ro-crate-packages-artefacts-with-machine-readable-metadata |
| stachowiak-1973 | Stachowiak 1973, Allgemeine Modelltheorie | 3.4 | B | registered | | Springer print, German |
| stanicka-2026 | Stanicka-Brzezicka 2026, Vocabularies (ZfdG) | 1, 6.2, fn [^stanicka] | A | claimed | [[10_distillates/publications/stanicka-2026-cross-linking-vocabularies]] | llm-vocabulary-test-2025-fell-short-of-thesaurus-interoperability, semantic-vocabulary-matching-stays-a-human-interpretive-task |
| star-1989 | Star/Griesemer 1989, Boundary Objects | 2.4 | C | registered | | Sage paywall |
| unsworth-2000 | Unsworth 2000, Scholarly Primitives | 4.2 | A | claimed | [[10_distillates/publications/unsworth-2000-scholarly-primitives]] | scholarly-primitives-classify-activities-not-interfaces |
| vanes-2018 | van Es et al. 2018, Tool Criticism | 2.2 | C | registered | | ACM paywall |
| whitelaw-2015 | Whitelaw 2015, Generous Interfaces (DHQ) | 2.1, 4.2 | A | claimed | [[10_distillates/publications/whitelaw-2015-generous-interfaces]] | generous-interfaces-reveal-collection-through-browsing, search-cannot-represent-collection-abundance |
| wilkinson-2016 | Wilkinson et al. 2016, FAIR Principles | 2.3 | A | claimed | [[10_distillates/publications/wilkinson-2016-fair-principles]] | fair-emphasises-machine-actionability-of-data, fair-principles-findable-accessible-interoperable-reusable |
| windhager-2019 | Windhager et al. 2019, Visualization of CH Collections | 2.1 | C | registered | | IEEE paywall |

## Footnote-only resources (no intake)

Tools, videos, standards, and repositories the paper carries in footnotes as tool evidence. Outside intake per the scope decision of 2026-07-23; listed for completeness against the paper's footnote apparatus.

Gephi [^1], frontier-model gloss [^2], Claude Code [^3], specification gloss [^4], Spec Kit [^5], Grounded Vault template [^6], SZD-HTR repo [^7], CorrespExplorer [^8] (CMIF), M³GIM [^9] (RiC-O), SDD wave tools [^sdd] (Tessl, BMAD, Kiro, OpenSpec), Karpathy post [^vibe], intro videos [^videos], teiCrafter [^teicrafter], Notker repo [^notker], DEPCHA [^depcha], TEI [^tei], XML [^xml], RDF [^rdf], OWL [^owl], TaDiRAH [^tadirah], Kurrent gloss [^kurrent], reasoning-model gloss [^reasoning], ZBZ frontend [^zbz], AI Winter School dataset [^winterschool], Museumsbund screencast [^museum], PROV-A/WikiFAIR [^precedent] (the two cited works behind this footnote are registered above), Posner/Santa Barbara [^posner] (registered above), Stanicka detail [^stanicka] (registered above).
