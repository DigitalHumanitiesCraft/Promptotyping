---
section: 4
title: Projects and Evidence
anchor: abschnitt-4-projects
source: Pollin 2026
source-lines: 182-266
subsections:
  - { id: 4.1, anchor: projects-overview, title: Overview }
  - { id: 4.2, anchor: projects-progression, title: Development and Progression }
  - { id: 4.3, anchor: projects-typology, title: Use Case Typology }
---

# 4. Projects and Evidence

The method has been applied across 20 projects spanning from 2023 to early 2026. Each is documented through publicly accessible GitHub repositories containing Promptotyping Documents, code, and data. Several are additionally documented through video recordings of the working process.[^video-note] The following presentation selects projects that each contribute a distinct methodological insight. A complete project catalogue with repository URLs, interface classifications, and document inventories is maintained separately.[^evidence-catalogue]

All quantitative figures in this section were verified against the repositories in July 2026; the verification protocol is itself a document in this paper's own Promptotyping knowledge base (Section 6.1). Several repositories have kept growing since the build states described here. In those cases the figures report the verified build state, and the continued growth is named in the text, since it is itself part of the evidence that the tools remain in active use.

[^video-note]: Process documentation videos are available on the Digital Humanities Craft YouTube channel: https://www.youtube.com/@DigitalHumanitiesCraft
[^evidence-catalogue]: The full evidence table, interface catalogue, and document inventory are available in the project repository.

## 4.1 Overview

|Project|Data|Interface Type(s)|Methodological Contribution|Repository|
|---|---|---|---|---|
|teiCrafter|Transcribed texts|—|Origin point (2023): Vibe Coding without method|[DigitalHumanitiesCraft/teiCrafter](https://github.com/DigitalHumanitiesCraft/teiCrafter)|
|Wheaton Network Vis|TEI-XML, 1,124 transactions|Exploration|First Promptotype (Jan 2025): dissertation data + GPT o1|[chpollin/HistInfo](https://github.com/chpollin/HistInfo)|
|Stefan Zweig Digital|XML correspondence metadata|Capture|Critical Expert in the Loop (2h experiment, first blog post)[^vid-szd]|[DigitalHumanitiesCraft/excellence](https://github.com/DigitalHumanitiesCraft/excellence/tree/main/promptotyping/szd-annotation-timeline)|
|DEPCHA Aldersbach|TEI-XML/RDF, monastery accounts|Exploration|First Promptotyping Documents (post-hoc)|[chpollin/depcha-aldersbach](https://github.com/chpollin/depcha-aldersbach)|
|CVMA Stained Glass|JSON-LD (NFDI4Culture)|Capture|First `knowledge/` folder, SPARQL-based extraction|[chpollin/stained-glass-metadata-annotation-tool](https://github.com/chpollin/stained-glass-metadata-annotation-tool)|
|imareal-room-object|REALonline metadata|Exploration|Context Memory: journal + git history for session resumption|[chpollin/imareal-room-object](https://github.com/chpollin/imareal-room-object)|
|Hans Gross Kriminalmuseum|TEI + LIDO, 3,892 objects|Exploration|Dual paradigm: search + Canvas-based spatial exploration|[chpollin/km](https://github.com/chpollin/km)|
|CorrespExplorer|CMIF/TEI, 11,576 letters|Exploration|First complete vault (initially 7 docs, 46 journal phases, 74+ tests)|[DigitalHumanitiesCraft/CorrespExplorer](https://github.com/DigitalHumanitiesCraft/CorrespExplorer)|
|Lucina Digital Edition|128 neo-Latin poems|Edition|Multi-iteration (5 iterations, multi-LLM workflow)[^vid-tei]|[chpollin/diged-neolat](https://github.com/chpollin/diged-neolat)|
|HerData|TEI/Wikidata, 1,793 women-related letters (of 15,312)|Exploration|Gender-focused network with "Map Bias" transparency section|[chpollin/HerData](https://github.com/chpollin/HerData)|
|coOCR-HTR|OCR/HTR outputs|Verification|Prototype in one day, 567 tests, community fork (ÖAW)[^vid-coocr]|[DigitalHumanitiesCraft/co-ocr-htr](https://github.com/DigitalHumanitiesCraft/co-ocr-htr)|
|VetMedAI Wissensbilanz|~80 Excel files, 22 universities|Exploration|Largest knowledge base (~30 documents, hierarchical structure)|[DigitalHumanitiesCraft/vetmed-wissensbilanz](https://github.com/DigitalHumanitiesCraft/vetmed-wissensbilanz)|
|Kulturpool Explorer|Kulturpool API, ~19k objects|Exploration|Parallel agent orchestration (2 Claude Code instances)[^vid-kulturpool]|—|
|wiiw Patent Analysis|Patent cooperation CSV|Exploration|Promptotyping outside DH (economic research data)|[DigitalHumanitiesCraft/wiiw-patent-analysis-demo](https://github.com/DigitalHumanitiesCraft/wiiw-patent-analysis-demo)|
|Medieval Legal Transactions|~3,600 TEI-XML (~3,100 released)|Edition|Agentic Edition Workflow (~190-test regression suite)[^vid-sugw]|[chpollin/db_for_medieval_legal_transactions](https://github.com/chpollin/db_for_medieval_legal_transactions)|
|M³GIM|RiC-O/JSON-LD, archival data|Exploration, Capture|Data model evolves through interface (49 decisions at build state)|[DigitalHumanitiesCraft/m3gim](https://github.com/DigitalHumanitiesCraft/m3gim)|
|ZBZ OCR/TEI Pipeline|286 PDFs, ~4,150 pages|Verification, Edition|Full epistemic infrastructure (13 knowledge docs)|[chpollin/zbz-ocr-tei](https://github.com/chpollin/zbz-ocr-tei)|
|Notker Edition|DOCX, Psalm 2 (13 verses)|Edition|Layer-toggle edition: 6 orthogonal text-layer controls, IIIF, TEI-first|[DigitalHumanitiesCraft/notker-edition](https://github.com/DigitalHumanitiesCraft/notker-edition)|
|Klawiter Bibliography Rescue|MediaWiki SQL/BLOB, 6,296 entries|Verification, Capture|Data rescue: 7-stage pipeline + EIL curation interface (1 day, ~250 tests)[^vid-klawiter]|[chpollin/klawiter-rescue](https://github.com/chpollin/klawiter-rescue)|
|FemPrompt SozArb|326 academic papers|Audit|Beyond DH: literature review infrastructure (505-file vault)|[chpollin/FemPrompt_SozArb](https://github.com/chpollin/FemPrompt_SozArb)|
|Austrian University Dashboard|~80 Excel files|Exploration|Didactic baseline (full process in video)[^vid-intro]|—|

[^vid-klawiter]: Klawiter Bibliography Rescue: From MediaWiki to JSON-LD. YouTube, March 2026. https://youtu.be/KG35VGVctJw
[^vid-szd]: Blog post: Promptotyping mit Claude Sonnet 4. Vibe-Coding erfordert den Critical-Expert-in-the-Loop. DHCraft Blog, May 2025. https://dhcraft.org/excellence/blog/Critical-Vibing-Claude-4/
[^vid-intro]: Einführung in Promptotyping, Teil 1. YouTube, February 2026. https://youtu.be/8sUe4Jkh3uQ — Promptotyping Teil 2 (Claude Code). YouTube, February 2026. https://youtu.be/hd_a-NBO_S4
[^vid-kulturpool]: Live Hands-On: Von der Kulturpool-API zum explorativen Sammlungsinterface. YouTube, March 2026.
[^vid-coocr]: Live Hands-On: coOCR/HTR. YouTube, February 2026. https://youtu.be/VJyhVc_ujeA
[^vid-tei]: Promptotyping: TEI-Edition aus Word in 60 Minuten (Claude Opus 4.1). YouTube, October 2025. https://youtu.be/0DtX0pLv4TA
[^vid-sugw]: Arbeitsbericht zum Agentic Edition Workflow der prosopographischen Datenbank mittelalterlicher Wiener Rechtsgeschäfte. YouTube, March 2026.

## 4.2 Development and Progression

The method did not precede the practice — it crystallised from it. The following narrative traces 14 distinct methodological insights, each emerging from a specific project. Projects that confirm an existing pattern without adding a new insight are noted as additional evidence rather than described in full.

**Insight 1: Domain knowledge as prerequisite.** The theoretical foundation developed during the author's doctoral research on interactive visualisations for historical financial sources (Pollin 2025b). The dissertation formulated Scholar-Centred Design, developed the Bookkeeping Ontology for historical transactions, and built coordinated visualisations for DEPCHA data — producing exactly the kind of structured domain knowledge that would later become Promptotyping Documents. The **Wheaton Network Visualisation** (January 2025) was the first Promptotype in the tool-building sense. Using GPT o1, TEI-XML-encoded financial transactions from the Laban Morey Wheaton Day Book (1828–1859, 1,124 transactions, 718 individuals) were translated into an interactive D3.js network visualisation in one to two days. The project demonstrates the central mechanism: deep domain knowledge combined with LLM-assisted implementation produces a research interface that neither the researcher alone nor the model alone could have built in this timeframe.

**Insight 2: The Critical Expert in the Loop.** The **Stefan Zweig Digital** annotation tool (May 2025, ~2 hours) was the first publicly documented experiment (Pollin 2025c). The prompt contained the XML data structure, a concrete task ("I want to generate a timeline of all these letters"), and precise technical framing ("fetch the XML directly with JavaScript and create a Single Page Application"). The term "Single Page Application" triggered single-file HTML/JS generation; "Web App" would have triggered a React-based architecture — a distinction invisible to non-developers but consequential for the resulting solution. After the initial timeline, a follow-up prompt asked whether the tool could become an annotation interface. Claude proposed AI-assisted features, collaboration, and visualisation. The Critical Expert's intervention was to _reduce complexity_: "Make a simple version without AI support, collaboration, and without visualisation." Knowing what to remove is as important as knowing what to build. The experiment demonstrated that Promptotyping requires both technical literacy (knowing that terminology shapes generation) and domain judgement (knowing what the research context actually needs).

**Insight 3: Post-hoc documentation stabilises the process.** **DEPCHA Aldersbach** (~3 hours) produced the first Promptotyping Documents (`data.md`, `architecture.md`, `user-stories.md`), though the documentation was written after the fact rather than driving the process. The **CVMA stained glass tool** (~8 hours) then introduced a `knowledge/` folder with structured documents that preceded implementation.

**Insight 4: Context Memory enables session resumption.** In the **imareal-room-object** dashboard (~5 hours), Claude Code documented autonomously in `JOURNAL.md` without developer correction. The interplay of journal (documenting _why_) and git history (documenting _what_) enabled reliable session resumption — a pattern we call _Context Memory_.

**Insight 5: A complete vault as systematic practice.** The **CorrespExplorer** (late 2025) is the first project with a complete Promptotyping vault, in its initial state 7 documents, 34 user stories, 46 journal phases, and 74+ tests; the vault has since roughly doubled its document count. Built in approximately two afternoons with Claude Code, the project maps 11,576 CMIF-encoded letters to 12 coordinated visualisation views. The Exploration phase evaluated six visualisation types; two were discarded with documented reasoning. The project also provided the first empirical observations of context rot at approximately 50% of the advertised context window capacity.

**Insight 6: Multi-iteration and multi-LLM workflows.** The **Lucina digital edition** (5 iterations, ~25 hours) used Claude for structural decisions, Gemini for long-context processing, and GPT for corrections. Metrical analysis of 128 neo-Latin poems — Elegiac Distichen, Sapphic Strophes, Hendecasyllables — was implemented without prior expertise in Latin versification through a Deep Research synthesis document. The HerData correspondence map and the Hans Gross Kriminalmuseum (dual paradigm: search + Canvas-based spatial exploration) confirm the pattern with different data and different analytical questions.

**Insight 7: From prototype to production in weeks.** **coOCR-HTR** was prototyped in a single working day and developed into ~17,000 lines of production JavaScript over two months (197 commits): 567 tests, 6 LLM providers, hybrid validation, full internationalisation, Progressive Web App support — zero npm production dependencies.[^vid-coocr] A community fork by Robert Klugseder (Austrian Academy of Sciences) contributed 67 commits. The project illustrates that a single domain expert with methodological literacy can produce research tools that approach the scope of traditional development projects.

**Insight 8: Parallel agent orchestration.** The **Kulturpool Explorer** used two Claude Code instances simultaneously — one on API exploration (~19,000 objects), the other on design research (simulating an interdisciplinary expert group).[^vid-kulturpool] Knowledge was merged before implementation. The cognitive demands are explicitly noted as unsustainable for extended periods (Section 6.4).

**Insight 9: The agent as repository interface.** In the **Medieval Legal Transactions edition**, Claude Code reads 6 knowledge documents, then executes a defined workflow: place TEI-XML → validate → fix → commit → update registers → transform → run a ~190-test regression suite → build frontend → verify.[^vid-sugw] The editor interacts with ~3,600 documents through the agent. Interpretive tasks (person identification across documents) are explicitly excluded.

**Insight 10: The interface reveals the data model's limits.** **M³GIM** (25+ sessions, 49 documented decisions at the verified build state; the decision register has since more than doubled) builds an 8-tab archive explorer for RiC-O/JSON-LD archival data. The interface reveals what the current data model can and cannot express — making it an instrument for iterative model refinement rather than a presentation of a finished model.

**Insight 11: Full epistemic infrastructure.** The **ZBZ OCR/TEI Pipeline** processes 286 PDF scans (~4,150 pages) through nine stages with 13 knowledge documents. Over 30 Python scripts were generated and maintained entirely through Claude Code. Verification is handled through Promptotyping Interfaces at each pipeline stage. OCR processing cost less than 10 EUR. The initial build took approximately six weeks (128 commits); development has continued since and has more than doubled the commit history. The **VetMedAI Wissensbilanz** (~30 documents in a hierarchical structure) confirms the pattern with different data and introduces Learnings as a distinct Process Document type.

**Insight 12: Reflexive method documentation.** The **DHd Landscape** (7 iterations) operates simultaneously as research resource and methodological mirror. It aggregates 7 LOD sources into 52 institutional profiles of the DH landscape in the DACH region. A separate `Journal-Promptotyping.md` documents 25 methodological observations — "materialisation before critique" (seeing the interface is necessary to know what does not work), "ethical intuition as design driver" (the decision to use institutions rather than individuals emerged from ethical reflection, not requirements analysis), "scaling changes the interface" (5 example points to 130 real entries required fundamental UI changes). A `Knowledge/Promptotyping.md` describes the method with which the project was built — Promptotyping reflecting on itself within its own interface.

**Insight 13: Transfer beyond Digital Humanities.** **FemPrompt SozArb** extends the method into social work research. A 5-stage LLM pipeline processes 326 academic papers through identification (Deep Research across four systems), extraction, and dual-track assessment (human experts and LLM independently, identical 10-category schemas). The dual assessment design produces quantified epistemic asymmetry — 68% LLM inclusion rate versus 42% human — with the divergence analysis as primary research output. The Obsidian vault (505 files) and Evidence Companion constitute an epistemic infrastructure with three views (Korpus, Wissensnetz, Bewertungsvergleich). The **wiiw Patent Analysis** (economic research data) provides additional evidence of cross-domain applicability.

## 4.3 Use Case Typology

The projects do not all use Promptotyping for the same purpose. Six use cases emerge, distinguished by where in the research data lifecycle the method operates.

In _data production_, research data does not yet exist and must be generated from source material. The ZBZ pipeline is the paradigmatic case. Interfaces function as Verification Milestones, and the Promptotype is not the final product but the curated data.

In _data modelling and knowledge formalisation_, research data is being created while the data model itself is still evolving — or the research artifact is the formal knowledge model itself. In M³GIM, the interface reveals what the current model can and cannot express, serving as an instrument for iterative model refinement. The CVMA stained glass annotator and Stefan Zweig annotation tool are earlier instances of this pattern. The Bookkeeping Ontology developed during the dissertation (Pollin 2025b) illustrates the same mechanism without LLM assistance: deep-dive sessions revealed representation needs (collective actors, economic rights, agency attribution) that iteratively shaped the ontology. Today, this process would be promptotypable — the ontology is a Knowledge Document that has taken formal shape. Promptotyping is therefore not restricted to generating interfaces and pipelines; ontologies, annotation schemas, and data models are equally valid research artifacts produced through the same context transformation mechanism.

In _workflow construction_, research data already exists in good quality, but the workflow for maintaining and extending it does not. In the Medieval Legal Transactions project, the primary artifact is the pipeline itself. Claude Code becomes an interface to the repository through which editors interact with the data.

In _data exploration_, research data exists in a standard format, and the task is to make it explorable from new perspectives. Here, the interface is the research artifact. The CorrespExplorer maps CMIF metadata to 12 coordinated views. HerData, VetMedAI Wissensbilanz, Aldersbach, wiiw Patent Analysis, and Hans Gross Kriminalmuseum follow the same pattern with different data and different analytical questions.

In _process visualisation_, the task is to understand a specific working process. The coOCR-HTR workbench is a rapid prototype for testing whether a transcription workflow works, explicitly not a final product but a tool for understanding.

In _literature review infrastructure_, the method extends beyond code generation into knowledge synthesis. FemPrompt SozArb processes 326 papers through a 5-stage pipeline, and the repository itself constitutes epistemic infrastructure.

These use cases are not mutually exclusive. The ZBZ project combines data production (OCR pipeline), workflow construction (editorial curation), and data exploration (the final edition reader).

This typology describes _where_ in the research data lifecycle the method operates. A complementary question — what _epistemic function_ do the resulting interfaces serve? — is addressed in Section 5.3, where a typology of interface categories is developed from the same evidence base.
