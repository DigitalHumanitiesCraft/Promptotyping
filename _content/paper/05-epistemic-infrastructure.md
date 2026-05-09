---
section: 5
title: Epistemic Infrastructure
anchor: abschnitt-5-epistemic-infrastructure
source: Pollin 2026
source-lines: 268-314
subsections:
  - { id: 5.1, anchor: ei-from-documents, title: From Documents to Infrastructure }
  - { id: 5.2, anchor: ei-components, title: Components }
  - { id: 5.3, anchor: ei-typology-interfaces, title: A Typology of Promptotyping Interfaces }
---

# 5. Epistemic Infrastructure

## 5.1 From Documents to Infrastructure

In simple projects, Promptotyping Documents are sufficient as working context. As project complexity increases — particularly in multi-stage pipelines where errors cascade — an additional layer of structure emerges. We call this _epistemic infrastructure_, borrowing a concept from science and technology studies (Edwards 2010; Borgman 2015) and adapting it to the specific conditions of LLM-assisted research.

In general terms, epistemic infrastructure refers to enabling structures that determine which knowledge-related actions are possible within a given domain, how their results are validated, and who can carry them out.

The necessity of such infrastructure follows from a principle formalised in information science. Langefors' (1980) infological equation I=i(D,S,t) conceptualises information as a function of available data (D), existing knowledge structures (S), and temporal constraints on communication (t) (Kettinger and Li 2010; Pollin 2025b, Ch. 3). In Promptotyping, D corresponds to the research data and source materials, S to the Promptotyping Documents and the model's pre-trained knowledge, and t to the context window limitations empirically documented as Context Rot (Section 2.3). The Distillation phase (Section 3.3) is, in these terms, an optimisation of S under the constraint that t is bounded and non-negotiable. As long as projects remain simple, optimising individual documents is sufficient. When the interaction between multiple data sources, processing stages, and verification requirements exceeds what a single document can encode, epistemic infrastructure emerges — not as a design choice but as a structural necessity.

In the projects documented here, this infrastructure was not prior to the work but co-constructed with it — emerging and being revised as the project progressed.

## 5.2 Components

Five components constitute the epistemic infrastructure observed across the documented projects.

Verification Milestones are defined checkpoints at pipeline transitions where domain expertise is systematically applied. They combine deterministic tools (schema validation, test suites) with expert judgement. Their function is to interrupt the error cascade that characterises multi-stage automated pipelines, where mistakes at one stage propagate and become harder to identify downstream. The ZBZ pipeline (Section 4.2) implements milestones at each of its nine stages.

Promptotyping Interfaces are browser-based tools that make intermediate or final results visible, comparable, and in some cases correctable. Over 20 such interfaces have been built across the documented projects, falling into five categories classified by epistemic function: Verification, Exploration, Edition, Capture, and Audit (Section 5.3). All are static HTML/CSS/JavaScript, deployable via GitHub Pages, and built through the Promptotyping process itself. A detailed catalogue is maintained in the evidence table.[^evidence-catalogue]

Promptotyping Documents in the three-type classification (Knowledge, Process, Action) provide the documentation layer (Section 3.3). The documents serve simultaneously as human documentation and as context for LLM-assisted processing steps — they are the persistent artifacts that survive changes in code, model versions, and implementation tools.

Version control connects all components. Git commits function as implicit Process Documents. Every state of pipeline artifacts, knowledge documents, interfaces, and code is recoverable. The interplay between `journal.md` (what was tried and why) and the Git history (what was committed and when) provides two complementary perspectives on the same process.

Agentic coding as a development practice means that the code producing pipeline outputs is itself LLM-generated. The `CLAUDE.md` file configures the agent's relationship to the repository. In mature projects, additional Action Documents extend this configuration to define invocable commands and methodology documentation accessible to the agent. Code review becomes part of the epistemic infrastructure rather than a separate software engineering concern.

## 5.3 A Typology of Promptotyping Interfaces

The interfaces documented across the 20 projects emerge from a chain of three context transformations. The first translates research context into structured requirements — through requirements engineering or, in its full form, through Scholar-Centred Design (Section 2.5). This transformation was performed empirically in the dissertation (Pollin 2025b, Ch. 4.6). Two contrasting personas for the same source types — a social historian interested in community networks, gender roles, and labour exchange practices; an economic historian interested in hierarchical fiscal structures, currency systems, and revenue patterns — produced fundamentally different requirements for visualisation and interaction, despite operating on the same underlying data. This divergence is the empirical reason why the monolithic dashboard failed and why question-specific, generated interfaces are more effective. The first context transformation cannot be skipped, because it determines which epistemic function the interface will serve.

The second is context engineering: requirements, data documentation, and domain knowledge become Promptotyping Documents optimised for LLM processing. The third is data-to-visual mapping: semantic data structures (TEI-XML, RDF, JSON-LD, CMIF) are mapped to visual encodings and interaction patterns, following the logic that Munzner (2009) formalises in her nested model. Each transformation compresses and restructures context. The interface typology describes what emerges at the end of this chain — determined not by the technology but by the epistemic function the interface serves.

The classification by epistemic function addresses a gap across three converging traditions. Sacha et al.'s (2014) knowledge generation model proposes three nested cognitive loops — exploration, verification, and knowledge generation — that come closest to an epistemic framework but were designed as a process model, not as a classification scheme for interfaces. In the digital humanities, TaDiRAH (Borek et al. 2016) and Unsworth's scholarly primitives (2000) classify research _activities_, not the epistemic work that _interfaces_ enable. Collins and Ferguson (1993) proposed the most directly relevant yet underexploited framework: _epistemic forms_ — target knowledge structures such as comparison tables, stage models, or causal chains — paired with _epistemic games_ as strategies for constructing them. Their classification organises inquiry by the _kind of knowledge produced_, not by user action or system feature. The typology presented here operationalises this principle for research data interfaces.

Five categories have emerged across the documented projects, aligned with the use cases described in Section 4.3.

_Verification Interfaces_ check pipeline outputs at defined milestones. They make intermediate results comparable and correctable before errors propagate downstream. The ZBZ viewer, with its multi-source OCR comparison and layout overlay, is the paradigmatic case. The function corresponds to what Drucker (2011) describes as making the constructed nature of data visible — here applied not to final representations but to production stages.

_Exploration Interfaces_ enable pattern discovery in existing, structured research data through coordinated multiple views (Roberts 2007). Here, the interface is not a presentation layer but the primary research artifact — the means through which the data becomes analytically accessible. The CorrespExplorer maps CMIF metadata to 12 coordinated views; the Hans Gross Kriminalmuseum combines search and spatial exploration for 3,892 objects. This category operationalises what Whitelaw (2015) calls "generous interfaces" — rich, browsable representations that reveal the scale and structure of a collection rather than withholding information behind a search box.

_Edition Interfaces_ render scholarly digital editions with facsimile synchronisation, TEI text display, and editorial correction capabilities. They mediate between the encoded data model and the reader's interpretive engagement. Pierazzo (2015) argues that interface decisions in digital editions are editorial decisions; Bleier et al. (2018) theorise the edition explicitly as an interface — both GUI for human readers and API for machine interaction. The ZBZ reader and the Lucina edition (5 iterations) exemplify this category.

_Capture Interfaces_ enable structured data input, annotation, or metadata creation within a research workflow. Unlike Exploration Interfaces, which operate on existing data, Capture Interfaces produce new data — and in doing so, shape the data model itself. In M³GIM, the archive explorer reveals what the current RiC-O model can and cannot express, making the interface an instrument for iterative model refinement. The CVMA stained glass annotator enables NFDI4Culture-compliant metadata creation through structured forms. Recogito (Simon et al. 2017) and CrowdHeritage (Kanellos et al. 2021) demonstrate this pattern in established DH infrastructure.

_Audit Interfaces_ make an entire research process inspectable and traceable. They address the reproducibility challenge identified by Burghardt and Niekler (2023) by rendering not just results but the path that produced them. The FemPrompt Evidence Companion visualises human-LLM assessment comparison across 326 papers with confusion matrices, kappa statistics, and divergence cases — enabling readers to evaluate the research process, not only its conclusions. Vancisin et al. (2023) demonstrate a related approach through provenance visualisation for historical document collections.

The five categories are not mutually exclusive. The ZBZ project combines Verification Interfaces (pipeline stages), an Edition Interface (the reader), and elements of Capture (the Curation Editor). What the typology makes visible is that the epistemic function — verify, explore, read, capture, audit — determines the interface design, not the underlying data format or visualisation technique. A TEI-XML dataset may require an Edition Interface, an Exploration Interface, or both, depending on the research question that the requirements engineering process has surfaced.
