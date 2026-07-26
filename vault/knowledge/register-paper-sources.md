---
title: Register of Paper Sources
project:
  name: "Promptotyping Paper Vault"
  repository: "https://github.com/DigitalHumanitiesCraft/Promptotyping"
status: active
language: en
created: "2026-07-23"
updated: "2026-07-26"
related: [state, specification]
---

# Register of Paper Sources

Working register of the bibliography-traceability sweep (operator decision 2026-07-23, see [[knowledge/specification]]). One row per work cited in the paper's References (`knowledge/paper.md`). Canonical inventory rows stay in [[knowledge/state]]; this register is the sweep's overview and backlog. Coordinator-maintained; production subagents report row updates and never write this file.

Access classes. **A** openly readable online (agent-ingestible). **B** operator-supplied local copy required (place in `_sources/`). **C** not accessible (paywall or print without local copy); no distillate is faked, the paper's citation stands on its own and the row keeps the gap visible.

Status values. `registered` (row exists) → `csl` (reference record in `references/`) → `ingested` (source in `_sources/`) → `distilled` (distillate with quote-checked statements) → `claimed` (≥1 claim grounded and MOC-listed).

Paper roles name the sections of `knowledge/paper.md` in which the work is cited, and they were re-checked against that file on 2026-07-25. Two revisions moved them. The revision of 2026-07-24 merged the former Section 3.4 into what is now 2.3 and moved the data-management-plan passage to 3.3; the revision of 2026-07-25 merged the former Sections 2.1 and 2.2 into one, so every former section from 2.3 onwards now carries a number one lower. A work the revision dropped from the References keeps its row with the role marked `orphaned`, so that its distillate and claims stay findable as checked material without a current use in the paper.

## Cited works

| CSL id | Work | Paper role | Class | Status | Distillate | Claims |
|---|---|---|---|---|---|---|
| abdurahman-2025 | Abdurahman et al. 2025, LLM evaluation primer | 6.3 | A | claimed | [[10_distillates/publications/abdurahman-2025-primer-llm-evaluation]] | llm-reproducibility-transparency-recommendations |
| andorfer-2026 | Andorfer 2026, static TEI editions (ZfdG) | 4.1, 4.3 | A | claimed | [[10_distillates/publications/andorfer-2026-static-tei-editions]] | digital-editing-converges-on-static-self-contained-artefact, static-client-side-editions-reach-tens-of-thousands-of-units |
| barbot-2024 | Barbot et al. 2024, SSH Open Marketplace workflows | 4.2 | A | claimed | [[10_distillates/publications/barbot-2024-ssh-open-marketplace]] | ssh-open-marketplace-models-workflows-as-step-sequences |
| baier-2008 | Baier/Katoen 2008, Principles of Model Checking | fn [^vv] (6.2) | C | csl | | textbook, cited for the formal-methods sense of verification; MIT Press print, no open copy |
| baxter-2012 | Baxter et al. 2012, The Research Software Engineer | 1 | C | claimed (abstract-only) | [[10_distillates/publications/baxter-2012-research-software-engineer]] | research-software-engineers-are-scarce |
| berners-lee-2001 | Berners-Lee/Hendler/Lassila 2001, The Semantic Web | 2.2 | A | claimed | [[10_distillates/publications/berners-lee-2001-semantic-web]] | semantic-web-envisioned-agents-over-machine-processable-data |
| berners-lee-2025 | Berners-Lee 2025, This Is for Everyone | 2.2 | B | acquisition open | | no legitimate open copy; publisher essay carries the personal-agent line but not the agent-realisation claim; print copy needed. 2026-07-25: the operator received the book as an audiobook, which yields no citable locator. The paper sentence was first cut back to what the publisher essay carries and then restored in weakened form on the operator's own attestation from that reception, that Berners-Lee reads the current agentic systems as a partial movement towards the agent idea of his vision. The sentence claims that movement and no redemption of the vision, and it rests on the attestation until a text copy supplies a locator |
| bleier-2018 | Bleier et al. 2018, Editions as Interfaces | 4.2 | A | claimed | [[10_distillates/publications/bleier-2018-editions-interfaces]] | digital-edition-is-interface-gui-and-api, edition-interface-embodies-editorial-decisions |
| borek-2016 | Borek et al. 2016, TaDiRAH (DHQ) | 4.2 | A | claimed | [[10_distillates/publications/borek-2016-tadirah]] | tadirah-classifies-dh-research-activities |
| borgman-2015 | Borgman 2015, Big Data Little Data No Data | 2.2 | B | acquisition open | | MIT Press book, no open copy found; operator copy needed |
| broy-2021 | Broy/Kuhrmann 2021, Softwaretechnik | fn [^4] (1) | B | no copy needed | | Springer textbook, no open chapter. 2026-07-25: reclassified. The paper cites it once, for the requirements-engineering sense of specification, without a locator and without a quotation, and states expressly that formal completeness is not claimed. A general textbook reference of that kind carries no statement a distillate could check, so no operator copy is needed |
| carver-2022 | Carver et al. 2022, State of the practice for research software (PeerJ CS) | 1 | A | claimed | [[10_distillates/publications/carver-2022-state-of-practice]] | institutional-research-software-support-falls-short-of-need |
| chuehong-2022 | Chue Hong et al. 2022, FAIR4RS | 4.1 | A | claimed | [[10_distillates/publications/chuehong-2022-fair4rs]] | fair4rs-provenance-and-identifier-principles |
| cohen-2021 | Cohen et al. 2021, Four Pillars of RSE | 1 | A | claimed | [[10_distillates/publications/cohen-2021-four-pillars-rse]] | rse-institutionalised-intermediary-profession |
| collectionsasdata-2019 | Santa Barbara Statement 2019 | fn [^posner] (2.2) | A | claimed | [[10_distillates/publications/collectionsasdata-2019-santa-barbara]] | collections-as-data-are-intentional, humanities-data-is-constructed-not-given |
| collins-1993 | Collins/Ferguson 1993, Epistemic Forms | 4.2 | A | claimed | [[10_distillates/publications/collins-1993-epistemic-forms]] | epistemic-forms-are-target-knowledge-structures |
| cremer-2025 | Cremer/Paulmann 2025, Quellen- und Datenkritik (ZfdG) | 2.2 | A | claimed | [[10_distillates/publications/cremer-2025-quellen-und-datenkritik]] | making-source-data-machine-addressable-is-interpretive-modelling |
| drucker-2011 | Drucker 2011, Humanities Approaches (DHQ) | 2.1 | A | claimed | [[10_distillates/publications/drucker-2011-humanities-approaches]] | humanities-data-are-capta-not-given, inherited-visualisation-conventions-carry-positivist-assumptions |
| drucker-2014 | Drucker 2014, Graphesis | 2.1 | B | no copy needed | | Harvard UP book, no open copy. 2026-07-25: reclassified. The paper names it beside drucker-2011 as the second site of the same capta argument, which the drucker-2011 distillate carries quote-checked; secondary literature confirms the argument recurs in the book, so the joint citation stands and no distillate of its own is needed |
| dellacqua-2023 | Dell'Acqua et al. 2023, Navigating the Jagged Technological Frontier (HBS Working Paper 24-013) | 2.4 | A | claimed | [[10_distillates/publications/dellacqua-2023-jagged-frontier]] | llm-assistance-raises-performance-inside-and-lowers-it-outside-a-jagged-frontier, the-boundary-of-the-jagged-frontier-is-not-readable-from-a-task-in-advance |
| edmond-2005 | Edmond 2005, Professional Intermediary | 1 | C | claimed (abstract-only) | [[10_distillates/publications/edmond-2005-professional-intermediary]] | dh-intermediary-bridges-researchers-and-technical-staff |
| fanous-2025 | Fanous et al. 2025, SycEval | 2.4 | A | claimed | [[10_distillates/publications/fanous-2025-syceval]] | fanous-frontier-models-sycophantic-in-most-cases, sycophancy-agreement-over-truth |
| fawzy-2025 | Fawzy et al. 2025, Vibe Coding in Practice | 2.4 | A | claimed | [[10_distillates/publications/fawzy-2025-vibe-coding-in-practice]] | vibe-coding-speed-quality-tradeoff |
| fischer-2025 | Fischer/Kimmel/Puppe 2025, Bildkarten (ZfdG) | 6.2 | A | claimed | [[10_distillates/publications/fischer-2025-bildkarten]] | glam-practice-layers-llm-extraction-with-deterministic-checks-and-expert-review |
| flanders-2019 | Flanders/Jannidis 2019, Shape of Data | 2.2 | A | claimed (partial, editors' introduction) | [[10_distillates/publications/flanders-2019-shape-of-data]] | humanities-data-modelling-is-interpretive-shaping |
| galey-2010 | Galey/Ruecker 2010, How a Prototype Argues | 2.1 | A | claimed | [[10_distillates/publications/galey-2010-how-a-prototype-argues]] | a-prototype-can-embody-a-peer-reviewable-argument |
| geiger-2023 | Geiger 2023, Daten / Forschungsdaten (ZfdG Working Papers) | 2.2 | A | claimed | [[10_distillates/publications/geiger-2023-daten-forschungsdaten]] | research-data-is-defined-by-the-function-it-serves; the entry withholds a definition on purpose and carries the three functional selection criteria instead |
| grallert-2026 | Grallert et al. 2026, Open Tool Registries (DHQ) | 4.2, 6.3 | A | claimed | [[10_distillates/publications/grallert-2026-open-tool-registries]] | tadirah-most-adopted-yet-under-maintained, wikidata-tool-registries-as-commons |
| gruber-1993 | Gruber 1993, Translation Approach to Ontology | 2.3 | A | claimed | [[10_distillates/publications/gruber-1993-ontolingua]] | ontologies-are-shared-vocabularies-for-reuse, ontology-is-explicit-specification-of-conceptualization |
| hinrichs-2019 | Hinrichs et al. 2019, Sandcastles (DSH) | 2.1, 6.1 | A | claimed | [[10_distillates/publications/hinrichs-2019-sandcastles]] | discarded-visualisations-retain-epistemic-value, visualisation-is-research-process-not-means |
| holmes-2023 | Holmes/Takeda 2023, Endings (DHQ) | 4.1 | A | claimed | [[10_distillates/publications/holmes-2023-endings-principles]] | endings-durability-through-static-no-dependencies, endings-static-artefacts-minimise-maintenance |
| hong-2025 | Hong et al. 2025, Context Rot | 2.2 | A | claimed | [[10_distillates/publications/hong-2025-context-rot]] | context-rot-nonuniform-degradation-with-length |
| ieee-1012-2016 | IEEE Std 1012-2016, Verification and Validation | 6.2 (note) | C | csl | | paywalled; cited for the normative V&V definitions the paper departs from, definitions cross-checked against ISO 9000:2015 |
| iso-9000-2015 | ISO 9000:2015, Quality Management Systems, Vocabulary | 6.2 (note) | C | csl | | paywalled; clauses 3.8.12 and 3.8.13 carry the verification and validation definitions, quoted from the ISO Online Browsing Platform |
| jelodar-2026 | Jelodar et al. 2026, Graphs, LLMs and Agents | fn [^kg] (2.2) | A | csl | | arXiv survey of April 2026, cited as a pointer to the tighter coupling of models and knowledge graphs; the footnote opens no discussion of it |
| kemman-2021 | Kemman 2021, Trading Zones | 1, 2.3 | A | claimed | [[10_distillates/publications/kemman-2021-trading-zones]] | digital-history-collaboration-is-a-trading-zone. Locator for the Galison attribution and the trading-zone definition: p. 4, held here rather than in the paper |
| koenig-2026 | König 2026, Fertig vorerst (ZfdG) | 6.1 | A | claimed | [[10_distillates/publications/koenig-2026-fertig-vorerst]] | unfinishedness-is-an-epistemic-value-in-the-digital-humanities |
| koolen-2019 | Koolen et al. 2019, Tool Criticism (DSH) | 2.1 | A | claimed | [[10_distillates/publications/koolen-2019-digital-tool-criticism]] | digital-tool-criticism-demands-reflection-on-tools |
| lambert-2024 | Lambert et al. 2024, Tülu 3 | fn [^vv] (6.2) | A | csl | | arXiv preprint, introduces reinforcement learning with verifiable rewards; cited for the deterministic sense of verification in LLM post-training |
| lang-2026 | Lang/Suárez Cronauer 2026, Beyond Data Feminism (ZfdG) | 6.4 | A | claimed | [[10_distillates/publications/lang-2026-beyond-data-feminism]] | well-modelled-data-does-not-discharge-critical-data-work |
| leipold-2026 | Leipold et al. 2026, WikiFAIR (ZfdG) | fn [^precedent] (4.1) | A | claimed | [[10_distillates/publications/leipold-2026-wikifair]] | shared-infrastructure-is-the-opposite-longevity-answer-to-the-self-contained-artefact |
| liu-2024 | Liu et al. 2024, LLM Agents for SE Survey | 2.4 | A | claimed | [[10_distillates/publications/liu-2024-llm-agents-se-survey]] | llm-based-agents-for-software-engineering |
| macedo-2026 | Macedo 2026, From Prompt to Process | 2.4 | A | claimed | [[10_distillates/publications/macedo-2026-from-prompt-to-process]] | macedo-first-process-taxonomy-sdd-frameworks, sdd-frameworks-converge-on-specification-over-prompt |
| mariani-2025 | Mariani 2025, PROV-A (ZfdG) | fn [^precedent] (4.1) | A | claimed | [[10_distillates/publications/mariani-2025-prov-a]] | client-side-provenance-tool-is-a-precedent-for-server-free-artefacts |
| mayr-2021 | Mayr/Thalheim 2021, Triptych of Conceptual Modeling | 2.3 | A | claimed | [[10_distillates/publications/mayr-2021-triptych-conceptual-modeling]] | conceptual-model-links-language-and-domain-concepts |
| mei-2025 | Mei et al. 2025, Context Engineering Survey | 2.4 | A | claimed | [[10_distillates/publications/mei-2025-context-engineering]] | context-engineering-systematic-inference-context |
| miksa-2019 | Miksa et al. 2019, Machine-Actionable DMPs | 3.3 | A | claimed | [[10_distillates/publications/miksa-2019-machine-actionable-dmps]] | madmps-demand-documents-infrastructure-can-act-on, traditional-dmps-are-unused-compliance-documents |
| mollick-2024 | Mollick 2024, Co-Intelligence | 2.4 | B | csl | | Portfolio/Penguin trade book, no legitimate open copy with a citable locator; the search of 2026-07-26 found only reviews and second-hand summaries of the principle the paper takes from it. The paper's sentence, that the system sits between an instrument and a counterpart and that its quirks and failure modes are learned in use, stands on the citation until an operator copy supplies a locator. No distillate is faked and no claim is built |
| owens-2011 | Owens 2011, Defining Data for Humanists | 2.2 | A | claimed | [[10_distillates/publications/owens-2011-defining-data]] | humanities-data-is-constructed-not-given, owens-data-holds-evidentiary-value |
| pichler-2022 | Pichler/Reiter 2022, Operationalization (Journal of Cultural Analytics) | 2.2 | A | claimed | [[10_distillates/publications/pichler-2022-operationalization]] | operationalisation-develops-a-measurement-for-a-concept |
| pierazzo-2015 | Pierazzo 2015, Digital Scholarly Editing | 4.2 | A | claimed | [[10_distillates/publications/pierazzo-2015-digital-editing]] | edition-interface-embodies-editorial-decisions |
| pollin-2019 | Pollin 2019, DEPCHA and Bookkeeping Ontology | 2.5 | A | claimed | [[10_distillates/publications/pollin-2019-depcha-bookkeeping]] | deep-dive-process-documented-2019, ontologies-are-shared-vocabularies-for-reuse |
| pollin-2024 | Pollin 2024, Workshopreihe (Zenodo) | 1 | A | claimed | [[10_distillates/publications/pollin-2024-workshopreihe]] | applied-genai-dh-workshop-series-2024 |
| pollin-2025a | Pollin et al. 2025a, When it was 2024 (ZfdG) | 2.5, 6.2, 6.3 | A | claimed | [[10_distillates/publications/pollin-2025a-when-it-was-2024]] | edition-ai-benchmarks-lacking-and-reproducibility-favours-local-models, field-literature-records-llm-code-generation-and-tei-agent-line-by-2024 |
| pollin-2025b | Pollin 2025b, Dissertation | 1, 2.2, 2.3, 2.5 | A | **claimed** | [[10_distillates/publications/pollin-2025b-dissertation]] | see MOC-Genealogy, MOC-Concepts |
| pollin-2025c | Pollin 2025c, Critical Vibing blog | 2.4 | A | claimed | [[10_distillates/publications/pollin-2025c-critical-vibing]] | critical-expert-in-the-loop-double-reflection-loop, szd-experiment-structured-vibe-coding |
| pollin-2025d | Pollin 2025d, Promptotyping blog | 1 | A | **claimed** | [[10_distillates/publications/pollin-2025d-promptotyping-blog]] | see MOC-Genealogy |
| pollin-2026a | Pollin 2026a, Asymmetric Amplification blog | 6.4 | A | claimed | [[10_distillates/publications/pollin-2026a-asymmetric-amplification]] | llms-amplify-research-not-automate-it |
| pollin-2026b | Pollin 2026b, L.I.S.A. positioning | 1 | A | claimed | [[10_distillates/publications/pollin-2026b-lisa-positioning]] | llms-amplify-research-not-automate-it, promptotyping-documents-are-the-primary-artifact, promptotyping-is-a-four-phase-context-engineering-technique, reproducibility-shifts-to-documented-justification |
| posner-2015 | Posner 2015, Necessary Contradiction blog | fn [^posner] (2.2) | A | claimed | [[10_distillates/publications/posner-2015-necessary-contradiction]] | humanities-data-is-constructed-not-given, reproducibility-shifts-to-documented-justification |
| risam-2022 | Risam/Gil 2022, Minimal Computing (DHQ) | 4.1 | A | claimed | [[10_distillates/publications/risam-2022-minimal-computing]] | minimal-computing-reduces-code-and-dependencies, minimal-computing-resists-scale-as-innovation |
| roberts-2007 | Roberts 2007, Coordinated Multiple Views | 4.2 | A | claimed | [[10_distillates/publications/roberts-2007-coordinated-multiple-views]] | coordinated-multiple-views-enable-exploration |
| ruecker-2015 | Ruecker 2015, Taxonomy of Prototypes | 2.1 | A | claimed | [[10_distillates/publications/ruecker-2015-taxonomy-prototypes]] | experimental-prototype-yields-knowledge-not-product |
| sacha-2014 | Sacha et al. 2014, Knowledge Generation Model | 4.2 | A | claimed | [[10_distillates/publications/sacha-2014-knowledge-generation-model]] | visual-analytics-process-models-describe-process-not-interfaces |
| sarkar-2025 | Sarkar/Drosos 2025, Vibe Coding (PPIG) | 2.4 | A | claimed | [[10_distillates/publications/sarkar-2025-vibe-coding]] | sarkar-vibe-coding-material-disengagement |
| schoech-2013 | Schöch 2013, Big Smart Clean Messy | 2.2 | A | claimed | [[10_distillates/publications/schoech-2013-big-smart-clean-messy]] | humanities-data-is-constructed-not-given, schoech-distinguishes-smart-and-big-data |
| schonhardt-2026 | Schonhardt 2026, Do One Thing (ZfdG) | 4.2 | A | claimed | [[10_distillates/publications/schonhardt-2026-do-one-thing]] | do-one-thing-well-favours-small-specialised-tools-over-monolithic-platforms |
| sharma-2023 | Sharma et al. 2023, Sycophancy | 2.4 | A | claimed | [[10_distillates/publications/sharma-2023-sycophancy]] | sycophancy-agreement-over-truth |
| siemens-2009 | Siemens 2009, Reply All Teams | 1 | A | claimed | [[10_distillates/publications/siemens-2009-reply-all-teams]] | dh-projects-build-teams-to-hold-competences-together |
| soiland-2022 | Soiland-Reyes et al. 2022, RO-Crate | orphaned, was 3.3 | A | claimed, no longer cited | [[10_distillates/publications/soiland-2022-ro-crate]] | ro-crate-packages-artefacts-with-machine-readable-metadata |
| stachowiak-1973 | Stachowiak 1973, Allgemeine Modelltheorie | 3.3 | B | registered | | Springer print, German. Locator for the three model properties (representation, abbreviation, pragmatics): pp. 129–131, confirmed by the operator 2026-07-25 from the teaching material the passage was taken into. The paper cites the work without the page numbers by the same decision; the locator is held here |
| stanicka-2026 | Stanicka-Brzezicka 2026, Vocabularies (ZfdG) | 6.2, fn [^stanicka] | A | claimed | [[10_distillates/publications/stanicka-2026-cross-linking-vocabularies]] | llm-vocabulary-test-2025-fell-short-of-thesaurus-interoperability, semantic-vocabulary-matching-stays-a-human-interpretive-task |
| star-1989 | Star/Griesemer 1989, Boundary Objects | orphaned (was 2.3) | A | claimed | [[10_distillates/publications/star-1989-boundary-objects]] | boundary-objects-are-plastic-yet-robust-across-communities; concept removed from the paper 2026-07-25; the CSL record stays as the source record of the distillate and no longer has a References entry |
| summerfield-2025 | Summerfield 2025, These Strange New Minds | 2.4 | C | csl | | trade book; source of the confabulation term for LLM output, received by the operator as an audiobook (2026-07-25), which yields no citable locator, so the paper cites the work without page |
| unsworth-2000 | Unsworth 2000, Scholarly Primitives | 4.2 | A | claimed | [[10_distillates/publications/unsworth-2000-scholarly-primitives]] | scholarly-primitives-classify-activities-not-interfaces |
| vanes-2018 | van Es et al. 2018, Tool Criticism | 2.1 | A | claimed | [[10_distillates/publications/vanes-2018-tool-criticism]] | digital-tool-criticism-demands-reflection-on-tools |
| whitelaw-2015 | Whitelaw 2015, Generous Interfaces (DHQ) | 2.1, 4.2 | A | claimed | [[10_distillates/publications/whitelaw-2015-generous-interfaces]] | generous-interfaces-reveal-collection-through-browsing, search-cannot-represent-collection-abundance |
| wilkinson-2016 | Wilkinson et al. 2016, FAIR Principles | 2.2 | A | claimed | [[10_distillates/publications/wilkinson-2016-fair-principles]] | fair-emphasises-machine-actionability-of-data, fair-principles-findable-accessible-interoperable-reusable |
| windhager-2019 | Windhager et al. 2019, Visualization of CH Collections | 2.1 | A | claimed | [[10_distillates/publications/windhager-2019-visualization-ch-collections]] | exploratory-collection-visualisation-is-a-rich-design-space |

## Footnote-only resources (no intake)

Tools, videos, standards, and repositories the paper carries in footnotes as tool evidence. Outside intake per the scope decision of 2026-07-23; listed for completeness against the paper's footnote apparatus.

Gephi [^1], frontier-model gloss [^2], Claude Code [^3], specification gloss [^4], Spec Kit [^5], Grounded Vault template [^6], SZD-HTR repo [^7], CorrespExplorer [^8] (CMIF), M³GIM [^9] (RiC-O), SDD wave tools [^sdd] (Tessl, BMAD, Kiro, OpenSpec), Karpathy post [^vibe], intro videos [^videos], teiCrafter [^teicrafter], Notker repo [^notker], DEPCHA [^depcha], TEI [^tei], XML [^xml], RDF [^rdf], OWL [^owl], TaDiRAH [^tadirah], Kurrent gloss [^kurrent], reasoning-model gloss [^reasoning], ZBZ frontend [^zbz], AI Winter School dataset [^winterschool], Museumsbund screencast [^museum], PROV-A/WikiFAIR [^precedent] (the two cited works behind this footnote are registered above), Posner/Santa Barbara [^posner] (registered above), Stanicka detail [^stanicka] (registered above).
