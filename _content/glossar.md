---
title: Glossary
slug: glossar
version: "0.4"
status: complete
source: data/glossar.json (authoritative data source); generated, not maintained by hand
mirrored: 2026-07-31
machine-url: https://dhcraft.org/Promptotyping/_content/glossar.md
---

# Glossary

Terms of the Promptotyping method and of the methodology site. The authoritative data source is `data/glossar.json`; this file is generated from it and carries the same content. Each entry gives the kind of thing the term names, a short definition for tooltips, a full definition and its sources. A source that this site holds an address for carries it as a hash anchor; the rest stay text. Terms the paper text does not carry are marked as site vocabulary in their source list.

### Action Document

Kind: Document function

Knowledge document that holds knowledge about what agents may do within the project.

An Action Document is the specialisation of the knowledge document towards knowledge about how to act. It describes what agents may do within the project and how. It covers the action layer, the testing strategy, the technology baseline, and in multi-agent projects the role definitions and orchestration rules. Examples are instructions.md, rules.md, cloud-commands.md and CLAUDE.md, which typically sit in the repository root. For diagnostic use, formally wrong output sends the reader to the Action Document first.

Source: [Paper, Section 2.1](#abschnitt-2-1-promptotyping-and-the-project-knowledge-base); [Konvention Knowledge Documents](#konvention-v0.1)

### Action Layer

Kind: Document function

The imperative CLAUDE.md in the repository root that socialises the coding agent.

The action layer is the imperative document in the repository root, usually CLAUDE.md, that socialises the coding agent. It routes to knowledge and translates it into imperatives while carrying no knowledge itself. It consists of a portable method core (knowledge-base routing, journal obligation, verification rules, design principles, scope, truth hierarchy) and an exchangeable tooling block (commands, hooks, permissions, platform conventions).

Source: [Paper, Section 2.1](#abschnitt-2-1-promptotyping-and-the-project-knowledge-base); [Vorlage Action-Layer](#promptotyping-document-action-layer)

### Agent Socialisation

Kind: Form of work

Aesthetic and behavioural shaping of a coding agent through the composition of design.md and CLAUDE.md.

Agent socialisation denotes the aesthetic and behavioural shaping of a coding agent that arises as a reading effect when an action document in the repository root points at a declarative design document. In that translation the design rationale becomes the equivalent of values in an agent profile, from which the agent decides even in unforeseen situations. Knowledge stays knowledge and action stays action; the socialisation arises from the interplay.

Source: [Paper, Section 2.1](#abschnitt-2-1-promptotyping-and-the-project-knowledge-base); Vault Agent-Sozialisierung

### Agentic Coding

Kind: Form of work

LLM agents that navigate file systems autonomously, run scripts, execute tests and iterate.

Agentic coding denotes the use of LLM agents such as Claude Code that navigate a repository, run scripts, execute tests, interpret error messages and iterate on their own outputs. Between mid-2023 and late 2025 the coding capability of frontier LLMs converged with such agentic harnesses, which is what carries the Implementation phase of the method. What this changes is the span over which an agent works without human intervention, and with it how much intent has to exist in writing beforehand. Multi-agent operation remains one of the tools the method uses.

Source: [Paper, Section 1.2](#abschnitt-1-2-context-engineering-agentic-engineering-and-ai-harnesses); Anthropic 2025

### Agentic Engineering

Kind: Form of work

Development practice in which LLM agents are the executing instance and the human work becomes specifying, steering and checking.

Agentic Engineering names the development practice in which LLM agents are the executing instance and the human work shifts to specifying, steering and checking. An agent in this sense is a language model that works towards a goal across several steps by calling tools in an environment and taking their responses back into its own context, without being instructed step by step. Four features span a gradient, tool access, the feedback of the environment's response, goal pursuit across several steps, and the span of autonomy between two human interventions. Chat has none of them, chat with tools has the first two, and an agentic coding environment has all four. The span of autonomy is what matters methodologically, because it determines how much intent has to exist in writing before work begins.

Source: [Paper, Section 1.2](#abschnitt-1-2-context-engineering-agentic-engineering-and-ai-harnesses)

### Agentic Review

Kind: Checking and acceptance

Bounded, tool-supported investigation in which LLM-based agents examine an artefact against its sources, references and criteria.

Agentic review is a bounded, tool-supported investigation in which one or more LLM-based agents examine outputs, data states, implementations or research artefacts against the relevant sources, references, requirements and criteria. It may locate project files, compare sources and outputs, execute formal checks, investigate discrepancies, or coordinate specialised, parallel or adversarial reviewers. It extends agent-based code review while keeping the wider sense of review as criteria-guided examination. An LLM-as-a-Judge, which scores a supplied output against a reference or rubric, can be one operation within agentic review but does not exhaust it. Its findings stay probabilistic evidence and never constitute authorised verification, scholarly validation or acceptance.

Source: [Paper, Section 2.3.1](#abschnitt-2-3-1-agentic-data-production-and-curation-in-the-szd-and-jeanne-hersch-workflows); [Specification, part 5, Checking](#verifikation)

### Anchor Scheme

Kind: Infrastructure and environment

System of stable URL anchors through which the site addresses templates, concepts, case studies and terms.

The anchor scheme is the system of permanently stable URL anchors on the single-page site. One stable anchor exists per template, concept, case study and term, among them #promptotyping-document-data, #konzept-eil and #case-herdata. Every addressable content item exists in two equally canonical forms, a hash anchor and a subpath URL. Repositories that link through the frontmatter field template: address these anchors, so they may not be renamed without discussion.

Source: knowledge/specification.md, requirement A4

### Asymmetric Amplification

Kind: Failure mode and limit

LLMs amplify computer-based research work along existing gradients of expertise, access and epistemic selectivity.

Asymmetric amplification names the dynamic by which LLMs amplify computer-based research work along existing gradients of expertise, access and epistemic selectivity (Pollin 2026a). Training corpora privilege English-language, digitised, well-published knowledge, and the same technology produces autonomy where verification competence exists and dependence where it is absent. A method built on these systems inherits the problem and cannot solve it. In the paper the term carries the ethical dimension of the access limit.

Source: [Paper, Section 4.2](#abschnitt-4-2-labour-infrastructure-and-responsible-use); [Pollin 2026a](#ref-pollin-2026a); [Vault: LLMs amplify research work rather than automate it](#vault-llms-amplify-research-not-automate-it)

### Claim Verification as a Document Function

Kind: Checking and acceptance

Adversarial checking of a project's own empirical and novelty claims in dedicated knowledge documents.

Claim verification as a document function denotes the checking of a project's own empirical and novelty claims in a dedicated document that records what claim was checked, against what evidence, by what procedure, and with what verdict. Three building blocks carry it, the recomputation of every headline figure from the raw data by an independent instance with a source path per figure, research against the project's own novelty claim with the aim of refuting it, and a conformance audit against the standards claimed. Claims used externally may be used only in the form these documents license. The vocabulary of claim, grounds, warrant and backing comes from Toulmin's layout of arguments, where each element answers a specific challenge to an assertion (Hitchcock 2003). The recording form stands close to the nanopublication, which binds a single statement to the annotations that carry its provenance so that it becomes citable, attributable and reviewable (Groth et al. 2010). The function is to be held apart from the software test, which checks an artefact against its specification, while what is checked here are statements about the world. Verdict vocabulary and procedure follow from neither model and are the site's own. The pattern emerged in FemPrompt SozArb and is now a document function of the catalogue in its own right.

Source: [Paper, Section 2.1](#abschnitt-2-1-promptotyping-and-the-project-knowledge-base); [Paper, Section 3.1](#abschnitt-3-1-evidence-and-comparison); [Best Practices, claims verification](#praxis-claims-verification-as-a-document-function); [Vault: Toulmin's layout of arguments (Hitchcock 2003)](#vault-toulmin-layout-separates-claim-grounds-warrant-and-backing); [Vault: the nanopublication model (Groth et al. 2010)](#vault-nanopublication-binds-a-statement-to-the-annotations-that-carry-its-context)

### Co-Intelligence

Kind: Role and authority

Framework for human-LLM collaboration that emphasises amplification over automation.

Co-Intelligence (Mollick 2024) is a framework for the collaboration of human and LLM that emphasises amplification over automation. The site carries the term as a precursor of its own account of the role. The paper text does not carry it, because there the Critical Expert in the Loop and asymmetric amplification do the work this framework performs.

Source: Site vocabulary, not carried in the paper text; Mollick 2024, Co-Intelligence (not in the paper's reference list)

### Confabulation

Kind: Failure mode and limit

Generation of plausible but false outputs by LLMs, commonly called hallucination.

Confabulation, commonly called hallucination, is the generation of plausible but false outputs (Summerfield 2025). The LLM fills a gap with what fits rather than reporting what it lacks. In research contexts this is particularly dangerous where the output concerns contextualisation, periodisation or attribution, domains in which plausibility and correctness can come apart. Confabulation belongs beside sycophancy to the structural failure modes the Critical Expert in the Loop addresses.

Source: Site vocabulary, not carried in the paper text; Summerfield 2025, These Strange New Minds (not in the paper's reference list)

### Context Engineering

Kind: Form of work

Systematic design and management of the contextual information LLMs receive at inference time.

Context engineering denotes the systematic design and management of the contextual information provided to LLMs at inference time (Mei et al. 2025). It covers context retrieval, context processing, context management and integration through RAG, memory systems and multi-agent architectures. The shift from prompt engineering to context engineering reflects that production-grade LLM applications require a systematic information architecture beyond individual prompt optimisation. Promptotyping is a domain-specific instance of context engineering.

Source: [Paper, Section 1.2](#abschnitt-1-2-context-engineering-agentic-engineering-and-ai-harnesses); [Mei et al. 2025](#ref-mei-2025); [Vault: context engineering as the design of the inference context](#vault-context-engineering-systematic-inference-context)

### Context Memory

Kind: Document function

Interplay of journal and git history that enables reliable session resumption.

Context memory denotes the interplay of journal and git history that enables reliable session resumption, where the journal documents why decisions were taken and the commits document what was done. The Process Documents of the method carry this function. The pattern was observed among others in the imareal-room-object dashboard, where the agent documented in the journal on its own initiative.

Source: [Paper, Section 2.1](#abschnitt-2-1-promptotyping-and-the-project-knowledge-base)

### Context Rot

Kind: Failure mode and limit

Decline of LLM performance as context length grows, even on simple tasks.

Context rot denotes the empirically documented decline of LLM performance as input length grows, even on simple tasks such as retrieving text (Hong et al. 2025). The study across eighteen models shows non-uniform performance under growing context and refutes the assumption that more information yields better results. Context rot supplies the technical rationale for the Distillation phase, whose principle is maximum information with minimum tokens. In CorrespExplorer the degradation was observed well inside the advertised context window, qualitatively and without measurement.

Source: [Paper, Section 2.1](#abschnitt-2-1-promptotyping-and-the-project-knowledge-base); [Hong et al. 2025](#ref-hong-2025); [Vault: non-uniform degradation as input length grows](#vault-context-rot-nonuniform-degradation-with-length)

### Critical Expert in the Loop (EIL)

Kind: Role and authority

Role that validates LLM output at defined points and combines domain expertise with knowledge of LLM failure modes.

The Critical Expert in the Loop is the role that validates LLM output at defined points. Unlike the generic human in the loop it requires domain expertise together with awareness of LLM-specific failure modes and metacognitive vigilance. The Critical Expert's task extends beyond checking the correctness of outputs. The more consequential blind spot lies in the possibility space that was not explored, in the questions not asked and the alternatives not generated. This metareflexive capacity distinguishes the role from a reviewer who checks correctness alone.

Source: [Paper, Section 2.2.4](#abschnitt-2-2-4-implementation); Pollin 2025, Critical Vibing blog (not in the paper's reference list); [Vault: the double reflection loop of the role](#vault-critical-expert-in-the-loop-double-reflection-loop)

### Declarative Document

Kind: Document function

Knowledge document that holds knowledge about data, domain and research context.

A Declarative Document is the specialisation of the knowledge document towards knowledge about the subject matter. It describes what is known about the data, the domain and the research context. Examples are README.md, project.md, data.md, requirements.md, architecture.md, design.md, editorial guidelines, mapping rules and verification documents. Declarative Documents are curated by the Critical Expert and constitute the persistent artefact of context engineering, because the knowledge they encode survives changes in code, model versions and tools. For diagnostic use, factually wrong output sends the reader to the Declarative Document first. The site carried this type under the name Knowledge Document until July 2026, when the name moved to the generic term.

Source: [Paper, Section 2.1](#abschnitt-2-1-promptotyping-and-the-project-knowledge-base); [Konvention Knowledge Documents](#konvention-v0.1)

### Demo Repository Reduction

Kind: Form of work

Teaching pattern in which the demo repository is deliberately left unconfigured.

Demo repository reduction is a teaching pattern for Promptotyping workshops in which participants rebuild the method themselves on a real project. The demo repository is deliberately left unconfigured, an initial state with raw data, a terse idea.md and an empty knowledge/ folder, without CLAUDE.md, without custom commands and without an output structure. The learning gain comes from building the Promptotyping architecture under guidance rather than from reading a finished one. Tested in the SuGW and the ZBZ workshop.

Source: Site vocabulary, not carried in the paper text; [Best Practices, demo repository reduction](#praxis-demo-repository-reduction-in-teaching); Promptotyping MOC

### Distillation

Kind: Form of work

Third of the four recurrent forms of work, pragmatic modelling that selects and organises the project knowledge implementation proceeds from.

Distillation is the third of Promptotyping's four recurrent forms of work and the principal documentary operation of Context Engineering. It translates what Preparation and Exploration taught into the document set. This is pragmatic modelling, a selective representation for particular addressees at a particular point in the project; the intellectual work lies in deciding which distinctions, constraints, uncertainties, examples and exceptions must remain available for implementation and verification, and it is not reducible to summarisation or token minimisation. Encoding decisions are epistemic decisions that determine what information will be available to all downstream steps, and context rot supplies a technical rationale for selection. The work is provisionally sufficient when a new agent instance, given the documents and access to the data, could take up the project's logic.

Source: [Paper, Section 2.2](#abschnitt-2-2-forms-of-work-and-iteration); [Hong et al. 2025](#ref-hong-2025)

### Documented Grounds of Acceptance

Kind: Checking and acceptance

The record of why, for what purpose and by whom an iteration was accepted; the fourth member of the promptotype relation.

Acceptance is the accountable decision that an identifiable state is adequate for a stated purpose, and it is only reconstructable if its grounds are written down. The record names the intended purpose, the applicable criteria, the accepting person or group, the known limitations, the version reference and, where relevant, the referenced research-data state. It may take the form of an acceptance note, a dated journal entry, a numbered decision record, a verification document or an equivalent project record. Together with the maintained project knowledge, the referenced research-data state and the resulting artefact it forms the four-member relation that makes an accepted iteration a promptotype.

Source: [Paper, Section 2.2.4](#abschnitt-2-2-4-implementation); [Paper, Section 4.3](#abschnitt-4-3-transferability-and-evaluation); [Specification, part 5, Checking](#verifikation)

### Epistemic Infrastructure

Kind: Infrastructure and environment

Site term for the interplay of verification points, interfaces, documents and version history in complex pipelines.

Epistemic infrastructure denotes the interplay that arises in complex Promptotyping pipelines when verification points, interfaces, Knowledge Documents, version history and agentic tooling mesh and keep the process of inquiry traceable across sessions. In the ZBZ OCR/TEI project and in FemPrompt SozArb the repository itself carries this function. The term was deliberately removed from the paper text, because the method supplies only one part of an epistemic infrastructure; the site keeps it as descriptive vocabulary for these cases.

Source: Site vocabulary, not carried in the paper text; Vault Epistemic Infrastructure

### Exploration

Kind: Form of work

Second of Promptotyping's four recurrent forms of work, probing the interface between data and research context and documenting the dead ends.

Exploration is the second of Promptotyping's four recurrent forms of work, formerly called Exploration and Mapping on the site. It probes the interface between data and research context under the guiding question whether the abstract research question can be mapped concretely onto the available data structure. The researcher inspects the data, scripts written for the purpose traverse the corpus and render compact aggregations, and the LLM generates mapping hypotheses that are evaluated against domain criteria. Understanding what the data cannot support is as valuable as knowing what is possible. It is provisionally sufficient with a documented understanding of what is feasible, what is not and why, and it is skipped where the data is familiar and Preparation has settled these questions.

Source: [Paper, Section 2.2](#abschnitt-2-2-forms-of-work-and-iteration)

### Frontmatter Inspector

Kind: Artefact and interface

Site module that resolves a template: URI in real time and renders the referenced template live.

The Frontmatter Inspector is a module of the templates section that accepts a whole YAML frontmatter block, extracts template.url or template.alias, validates the URL against the anchor scheme and opens the side panel with the rendered template. It demonstrates the frontmatter indirection concretely, since pasting a real frontmatter from another repository makes visible how repositories use the site as a machine-readable endpoint.

Source: [Templates, machine access](#vorlagen-maschinenzugriff); knowledge/specification.md, requirement A11 and ADR-7

### Implementation

Kind: Form of work

Fourth of Promptotyping's four recurrent forms of work, iterative development with the Knowledge Documents as context.

Implementation is the fourth of Promptotyping's four recurrent forms of work. The document set is handed to an agentic coding tool operating inside the project repository, and the researcher steers the generation of code through structured context and evaluative feedback. Three mechanisms carry the loop, deterministic feedback from schema validation, test suites and builds, visual feedback from screenshots of the running artefact, and expert feedback from domain judgement. When the artefact is wrong, the specification was wrong or incomplete, and it is the specification that is fixed; new knowledge goes back into the documents, which thereby stay living artefacts.

Source: [Paper, Section 2.2](#abschnitt-2-2-forms-of-work-and-iteration)

### Informed Vibe Coding

Kind: Form of work

Vibe coding grounded in computer literacy and computational thinking as competence prerequisites.

Informed Vibe Coding denotes vibe coding that rests on a three-layer competence model, computer literacy, then computational thinking, then informed vibe coding. It separates the competent, methodologically reflected form of LLM-supported development from the naive one. The lower layer carries the upper one, since without basic technical understanding vibe coding stays blind to the consequences of the generated solution.

Source: Site vocabulary, not carried in the paper text; Vault Informed Vibe Coding

### Interface Typology

Kind: Artefact and interface

Classification of generated interfaces by epistemic function, verification, exploration, edition, capture and audit.

The interface typology sorts the generated interfaces by the epistemic function they serve, data format and visualisation technique having proved weaker ordering principles. Verification Interfaces check pipeline outputs at defined milestones. Exploration Interfaces open up existing structured data through coordinated multiple views. Edition Interfaces render scholarly editions with facsimile synchronisation and editorial correction. Capture Interfaces support structured input, annotation and metadata creation. Audit Interfaces make an entire research process inspectable. The categories are not mutually exclusive; a pipeline project combines them.

Source: [Specification, part 4, Artefact and boundary](#artefakt); Site vocabulary since the promotion of 2026-07-30; descends from an earlier version of the paper, whose Table 1 has named six operational forms of its own since 2026-07-31

### Knowledge Curation

Kind: Form of work

Systematic maintenance of the networked knowledge model at the vault layer and at the repository layer.

Knowledge curation is the systematic maintenance of the networked knowledge model on two layers, the personal vault as a second brain and the project-specific knowledge vaults in repositories. It knows three types of operation (script-based, semantic, structural) and treats links as navigable context paths for agentic systems. As a cross-cutting practice it is what makes Promptotyping accumulate beyond the individual session.

Source: Site vocabulary, not carried in the paper text; [Best Practices, knowledge curation](#praxis-knowledge-curation); Promptotyping MOC

### Knowledge Document

Kind: Document function

Structured, LLM-optimised Markdown document in the knowledge/ folder of a Promptotyping repository; formerly called Promptotyping Document.

A Knowledge Document is a structured, LLM-optimised Markdown document in the knowledge/ folder of a Promptotyping repository that compresses and distils context. The class was formerly called Promptotyping Document, and the published template anchors keep that segment. By the kind of knowledge they hold, Knowledge Documents fall into three specialisations, Declarative Documents for knowledge about the subject matter, Process Documents for knowledge about the course of the work, and Action Documents for knowledge about how to act. These documents are context-adapted artefacts of context engineering, generated with LLM support and curated by experts. Classical documentation is a different genre.

Source: [Paper, Section 2.1](#abschnitt-2-1-promptotyping-and-the-project-knowledge-base); [Vault: the documents are the primary artefact](#vault-promptotyping-documents-are-the-primary-artifact); knowledge/INDEX.md

### Knowledge-Action Composition

Kind: Document function

Structural principle that keeps knowledge and action separate and socialises coding agents through their combination.

The knowledge-action composition is the structural principle by which declarative knowledge and imperative steering stay separate and together socialise a coding agent. Concretely, design.md stays a Declarative Document while CLAUDE.md as an Action Document points at it as a source of values and translates the design stance into imperative principles. The aesthetic and factual steering arises from the composition of two documents rather than from a hybrid type. The same axis separates technical documentation in Diátaxis, action against cognition, knowing how against knowing that (Procida 2024). Two things shift with a machine addressee. That framework's second axis falls away, acquisition against application, because a model loads the documents per session and acquires nothing that persists. And the reason for the separation inverts, since Diátaxis separates so that a reader finds the form their situation calls for, while a knowledge base separates so that a stable description is not overwritten by a volatile instruction.

Source: Procida 2024, Diátaxis (not in the paper's reference list); [Konvention Knowledge Documents](#konvention-v0.1); [Vault: Diátaxis separates along action and cognition](#vault-diataxis-separates-documentation-along-action-and-cognition)

### Konvention Knowledge Documents

Kind: Document function

Descriptive account of the functions of a knowledge base, of the frontmatter schema and of the structural principles.

The Konvention Knowledge Documents describes descriptively which functions a knowledge base in the knowledge/ folder covers, which frontmatter vocabulary applies and which structural principles hold. It prescribes no fixed list of documents and instead supplies trigger criteria per function, so that a coding agent can decide for itself which documents a repository needs. It is derived from the HerData reference implementation and mirrored on the site as an external specification.

Source: [Konvention Knowledge Documents, version 0.1](#konvention-v0.1)

### Phase Provenance Lane

Kind: Artefact and interface

Removed design element of the site that marked the Promptotyping phase described by each paragraph in the margin.

The phase provenance lane was a design element of the first deploy. A narrow left column showed a monochrome mark in four shades of grey at every paragraph, corresponding to the Promptotyping phase the paragraph described, and made the methodological distribution of the paper visually legible. It was removed in full by operator decision in June 2026, together with legend, tooltip and filter mode (ADR-4). Since then the phase tags in the paper Markdown are only stripped at render time. The entry remains so that the decision stays traceable.

Source: knowledge/specification.md, ADR-4 (removed feature)

### Preparation

Kind: Form of work

First of Promptotyping's four recurrent forms of work, collecting all raw materials before technical decisions are made.

Preparation is the first of Promptotyping's four recurrent forms of work. All relevant materials are collected before technical decisions are made, research data in original formats, documentation of standards and data models, research questions and domain knowledge. The work typically begins with requirements engineering, articulating user stories and mapping data to questions. Vagueness at this point cascades through all subsequent work. It ends when the repository structure exists, the source data is accessible and initial requirements are documented.

Source: [Paper, Section 2.2](#abschnitt-2-2-forms-of-work-and-iteration)

### Process Document

Kind: Document function

Knowledge document that holds knowledge about the course of the work.

A Process Document is the specialisation of the knowledge document towards knowledge about the course of the work. It records how the work proceeded, chronologically or analytically. Examples are journal.md, learnings.md and plan.md. Together with the git history they form a context memory that enables reliable session resumption, where the journal documents why and the commits document what. For diagnostic use, unclear decision logic sends the reader to the Process Document first. The VetMedAI-Wissensbilanz project introduced learnings as a Process Document type of its own.

Source: [Paper, Section 2.1](#abschnitt-2-1-promptotyping-and-the-project-knowledge-base); [Konvention Knowledge Documents](#konvention-v0.1)

### Promptotype

Kind: Artefact and interface

The identifiable and versioned state an accepted Promptotyping iteration yields.

A promptotype is the accepted state of one Promptotyping iteration. It connects the maintained project knowledge, the referenced research-data state, the resulting digital research artefact and the documented grounds of acceptance into a coherent and identifiable whole for a stated purpose. A runnable or plausible artefact does not reach this threshold as long as that relation cannot be reconstructed. Acceptance is purpose-specific, so a promptotype may be accepted as an exploratory interface, an internal production workflow, a proposal-stage demonstrator, a handover state or a public research artefact, and it does not imply that project knowledge, data or artefact have become final. Re-implementing with another model, harness or project state is a new iteration rather than a reproduction of the earlier promptotype.

Source: [Paper, Section 2.2.4](#abschnitt-2-2-4-implementation); [Paper, Section 2.3.4](#abschnitt-2-3-4-from-complementary-cases-to-the-promptotype); knowledge/INDEX.md

### Promptotyping

Kind: Form of work

Iterative, knowledge-driven method organised around four recurrent forms of work that develops project-specific research artefacts from structured research data and maintained project knowledge.

The name combines *prompt* and *prototyping* and retains the established function of a prototype as a provisional implementation through which requirements and design possibilities can be examined and refined. Promptotyping is an iterative, knowledge-driven method organised around four recurrent forms of work (Preparation, Exploration, Distillation, Implementation) with which researchers develop project-specific research artefacts from structured research data and maintained project knowledge. Its working material is a small set of versioned Markdown documents carrying requirements, data descriptions and design decisions, from which an LLM-supported agent derives the artefact. The documents are what the method maintains, and the artefact is regenerated from them. What separates it from vibe coding is the structured preparation, the persistent documents and the validation at defined checkpoints.

Source: [Paper, Section 2.2](#abschnitt-2-2-forms-of-work-and-iteration); [Vault: the four-phase context-engineering technique](#vault-promptotyping-is-a-four-phase-context-engineering-technique); knowledge/INDEX.md

### Promptotyping Interface

Kind: Artefact and interface

Browser-based validation tool that makes intermediate results visible, comparable and correctable.

Promptotyping Interfaces are the browser-based artefacts of the method, as a rule self-contained static HTML, CSS and JavaScript tools with research data embedded or loaded from flat files. They make data and intermediate results visible, comparable and correctable. In the ZBZ OCR/TEI project a pipeline viewer renders facsimile, layout overlay and OCR/TEI side by side. The interface typology sorts them into five categories by the epistemic function they serve.

Source: [Paper, Section 3.2](#abschnitt-3-2-project-conditions-functions-and-artefact-forms); [Best Practices, Promptotyping Interfaces](#praxis-promptotyping-interfaces)

### Research Artefact

Kind: Artefact and interface

Project-bound software that works on a project's own data and makes it explorable, analysable or editable.

A research artefact in the sense of the method is what the documents are made for in the research context of a project, software bound to that project's data and working on it so that the data becomes explorable, analysable or editable. Its scholarly standing comes from that binding, because the distinctions it preserves are the ones the project's data model carries. The same derivation brings forth the forms that stand beside it, the processing pipeline upstream of the artefact and the description rendered from the source data. The default is a self-contained static web tool.

Source: [Paper, Section 1](#abschnitt-1-introduction); [Paper, Section 3.2](#abschnitt-3-2-project-conditions-functions-and-artefact-forms)

### Research Compendium as a Promptotyping Pattern

Kind: Artefact and interface

Recurring structural feature, a static website plus a standalone research dataset in the repository.

The research compendium as a Promptotyping pattern denotes the recurring structural feature that a Promptotyping artefact consists of a static website and a standalone research dataset in the repository. It appears in two variants, as a JSON-LD knowledge graph with strong RDF semantics, as in M3GIM, or as a data-structure JSON serving as a plain data source with external identifiers as strings, as in HerData. The dataset carries the whole data holding of the project. The arrangement carries an established name in the reproducibility discussion. Marwick, Boettiger and Mullen (2018) define the research compendium by three principles, that its files follow the conventions of the scholarly community, that data, method and output stay separate with the relation between them stated unambiguously, which treats the data as read-only and documents every modification in the code, and that the computational environment of the original analysis is specified. The convergence on static deployment is argued in the same discourse under the name minimal computing (Risam and Gil 2022).

Source: Marwick et al. 2018 (not in the paper's reference list); Risam and Gil 2022 (not in the paper's reference list); [Vault: the research compendium separates data, method and output](#vault-research-compendium-separates-data-method-and-output); [Vault: minimal computing reduces code and dependencies](#vault-minimal-computing-reduces-code-and-dependencies); Promptotyping MOC

### Scholar-Centred Design

Kind: Form of work

Design approach in which the system adapts to the working practices of researchers.

Scholar-Centred Design is a design approach developed in Pollin (2025b) in which the system adapts to the working practices of researchers rather than the other way round. It produces user stories, personas and epics from collaborative sessions with domain experts and draws on Marchionini's exploratory search and Bates' berrypicking model. In the DEPCHA project deep-dive sessions produced structured requirements that could not have been derived from the data alone. It supplies the structured contexts that Promptotyping uses for LLM-supported production.

Source: [Paper, Section 1.1](#abschnitt-1-1-translating-research-data-into-digital-research-artefacts-through-scholar-centred-design); [Pollin 2025b](#ref-pollin-2025b); [Vault: requirements from deep-dive sessions](#vault-dissertation-requirements-from-deep-dive-sessions)

### Script versus LLM Division

Kind: Form of work

Assignment of tasks by unambiguity, algorithmically unambiguous work to scripts, semantically interpretive work to the LLM.

The script versus LLM division assigns algorithmically unambiguous tasks to scripts and semantically interpretive tasks to the LLM. The dividing line runs along unambiguity rather than along complexity. It appears twice in the method, as deterministically generated documents that are rendered from the source data and committed alongside the curated layer, and as the resolution of the token economy, where the LLM reads over the data and writes code that reads the data. The line is no coinage of the method. Requirements engineering draws it for its own tools, where the QUS tool checks the criteria a rule can decide and excludes the semantic ones on the stated ground that they require deep understanding of the requirement's content (Lucassen et al. 2016). Evaluation research measures the other end, where a strong judging model matches human preference at the level at which humans agree with one another, under named position, verbosity and self-enhancement biases (Zheng et al. 2023).

Source: [Paper, Section 2.1](#abschnitt-2-1-promptotyping-and-the-project-knowledge-base); [Best Practices, script versus LLM separation](#praxis-script-versus-llm-separation); Lucassen et al. 2016 (not in the paper's reference list); Krumdick et al. 2025 (not in the paper's reference list); Zheng et al. 2023 (not in the paper's reference list); [Vault: the QUS tool checks only what a rule can decide](#vault-aqusa-checks-the-criteria-a-rule-can-decide); [Vault: a judging model matches human preference under known biases](#vault-llm-judgement-approximates-human-preference-and-carries-known-biases)

### Side Panel

Kind: Artefact and interface

Right-hand sliding panel of the site that carries context-specific depth without interrupting the reading flow.

The side panel is the right-hand sliding panel of the single-page site. It carries context-specific depth, a glossary entry, a template specification, a case-study deep page or a literature detail, and it opens on click without interrupting the reading flow. On mobile devices it appears as a bottom sheet.

Source: knowledge/specification.md

### Spec-Driven Development

Kind: Form of work

The software industry's corrective to unreviewed generation, with the specification as the source of truth for agents.

Spec-Driven Development names the corrective the software industry developed against the reliability problems of unreviewed generation. Through 2024 and 2025 agentic coding frameworks converged on maintaining specifications as the source of truth from which LLM-supported agents implement, among them Tessl, BMAD, AWS Kiro, OpenSpec and GitHub Spec Kit. Promptotyping belongs to this movement and shares its core commitments, the versioned document set as the governing unit, the separation of intent from implementation, and a human checkpoint between generation and acceptance. Three things that sit at the periphery there are constitutive here. The data layer describes sources that precede the artefact and carry their own semantics and their own uncertainty, in place of the system under construction. The specification is bound to scholarly verification duties. And the Critical Expert in the Loop is installed as a role holding domain authority over the subject matter.

Source: Site vocabulary, not carried in the paper text; [Vault: the frameworks converge on specification over prompt](#vault-sdd-frameworks-converge-on-specification-over-prompt); [Vault: no framework defines a subject-matter checking role](#vault-sdd-no-subject-matter-verification-role)

### Sub-Agents and Role Simulation

Kind: Role and authority

Specialised agent roles with differentiated permissions or, without predefined roles, a simulation of them within one session.

Sub-agents are defined agent roles with graded permissions, for instance a read-only analysis, a writing implementation and a synthesis. They load only if the definitions exist before the session starts; otherwise a role simulation runs within a single session. The method knows this multi-agent mode as a second mode of operation beside the default of one researcher and one agent instance, and the evidence lies overwhelmingly with the first. In the wiiw FIGARO project three roles were separated so that the analysis agent held read permissions only. The graded permissions are least privilege in the sense of Saltzer and Schroeder (1975), where every program and every user operates with the least set of privileges the job needs, which bounds the damage an error can do and narrows what an audit has to cover. Splitting roles across separate instances is what multi-agent frameworks do when they assign roles along an encoded working procedure so that intermediate results are checked by an agent other than their producer (Hong et al. 2023). The simulation within one session is called role play in the literature, and that literature's own correction bounds the term, because a role set by a prompt stays a distribution of characters that the conversation keeps reshaping (Shanahan et al. 2023).

Source: [Paper, Section 2.2](#abschnitt-2-2-forms-of-work-and-iteration); [Best Practices, subagents and role simulation](#praxis-subagents-and-role-simulation); [Saltzer and Schroeder 1975](#ref-saltzer-1975); [Vault: least privilege bounds damage and narrows the audit](#vault-least-privilege-bounds-damage-and-narrows-the-audit); [Vault: multi-agent frameworks assign roles along a procedure (Hong et al. 2023)](#vault-multi-agent-frameworks-assign-roles-along-an-encoded-procedure); [Vault: dialogue-agent behaviour as role play (Shanahan et al. 2023)](#vault-dialogue-agent-behaviour-is-described-as-role-play)

### Sycophancy

Kind: Failure mode and limit

Tendency of LLMs to agree with user assumptions instead of challenging them.

Sycophancy is the tendency of LLMs to agree with the assumptions of their users instead of challenging them (Sharma et al. 2023; Fanous et al. 2025). Beside confabulation it is one of the two structural failure modes the Critical Expert in the Loop addresses. The Critical Expert has to recognise that an absence of contradiction from the LLM constitutes no validation. In CorrespExplorer the LLM agreed with suboptimal decisions as soon as they were phrased as a proposal.

Source: Site vocabulary, not carried in the paper text; Sharma et al. 2024 (not in the paper's reference list); Fanous et al. 2025 (not in the paper's reference list); [Vault: agreement with the user over the truthful answer](#vault-sycophancy-agreement-over-truth)

### Template (Knowledge Document)

Kind: Document function

Fillable structural specification for one function of a Promptotyping knowledge base.

A template is a fillable structural specification for one function of a Promptotyping knowledge base. The function names have been English since July 2026, among them Navigation, Charter, Material, Specification, Architecture, Domain Knowledge, Design, Quality Assurance, Verification, Provenance, Planning, Reporting, Integration and Agent Instructions. The catalogue is open; a template arises once a function carrier repeats comparably across at least two repositories, and its requirements are checked against the empirical record instead of prescribed in advance. A template carries a function and no fixed file name, and it holds only where its trigger is met.

Source: [Specification, part 2, Templates](#vorlagen); [Konvention Knowledge Documents](#konvention-v0.1); [Vault: the first description declared the documents form-free](#vault-promptotyping-documents-form-freedom); knowledge/INDEX.md

### template: field

Kind: Infrastructure and environment

Frontmatter field in Knowledge Documents that points at the authoritative template specification on the site.

The template: field is a frontmatter field in Knowledge Documents that refers to the authoritative template specification on the methodology site. It carries name, version, url (subpath form, canonical) and optionally alias (hash form, equivalent). A coding agent that encounters the field can retrieve the full template without prior knowledge of the project. The same frontmatter fields can be rendered into citation metadata that harvesters read.

Source: [Paper, Section 2.1](#abschnitt-2-1-promptotyping-and-the-project-knowledge-base); [Templates, machine access](#vorlagen-maschinenzugriff); knowledge/specification.md, requirement A5

### User Story (Epistemic Status)

Kind: Checking and acceptance

Every user story is a hypothesis about the user until the named user confirms it.

In the Promptotyping context every user story is a hypothesis about the user until the named user has confirmed it. In the agentic setting the implementing conversation that would correct wrong stories within a team falls away, so unvalidated stories have to be marked as assumptions and carry an observation point. This status is a stipulation of the site and takes no support from the QUS framework, since each of its criteria judges the intrinsic quality of the story text and none asks whether the story holds of the user it names; it comes from the FemPrompt case. The review criteria for a user-stories document are listed with the Vorlage User Stories, taken from QUS (Lucassen et al. 2016) along the division that framework itself draws between what a tool can decide and what requires understanding of the content, and extended by what the agentic setting demands.

Source: Site vocabulary, not carried in the paper text; [Best Practices, the epistemic status of user stories](#praxis-the-epistemic-status-of-user-stories); [Vorlage User Stories](#promptotyping-document-user-stories); Lucassen et al. 2016 (not in the paper's reference list); [Vault: the thirteen QUS quality criteria](#vault-qus-defines-thirteen-user-story-quality-criteria)

### Verification and Validation

Kind: Checking and acceptance

Verification is the check by a formal rule, validation the check by domain expertise.

The method distinguishes two kinds of check. Verification is what a formal rule decides, a schema, a test or a constraint, and it runs unsupervised because the feedback loop is closed. Validation is what domain expertise decides against the sources and against scholarly judgement, and it does not delegate. The pair operates at three levels, data fidelity, requirement satisfaction and design conformance, and each level has its own zone of agent autonomy. This usage follows the norm of software and systems engineering, where verification names the check against the specification and validation the check against intended use and user needs (IEEE Std 1012). Schema validation, the established XML term for an automatic check against a schema, keeps its name as a term of art and is in this sense a form of verification.

Source: [Paper, Section 2.3.1](#abschnitt-2-3-1-agentic-data-production-and-curation-in-the-szd-and-jeanne-hersch-workflows); [Specification, part 5, Checking](#verifikation)

### Verification Milestone

Kind: Checking and acceptance

Defined checkpoint in the workflow at which domain expertise is applied systematically.

Verification milestones are defined checkpoints in the workflow at which domain expertise is applied systematically. They turn the Critical Expert in the Loop into a process step, since at a milestone the work stops, is verified with deterministic tools and validated by expert judgement before it continues. The Implementation phase advances in such small, checkable steps. Where the check is deferred, a verification debt arises that has to be settled before use or handover. In the ZBZ OCR/TEI project an interface at every pipeline stage serves as such a milestone.

Source: [Paper, Section 2.2](#abschnitt-2-2-forms-of-work-and-iteration); [Best Practices, verification milestones](#praxis-verification-milestones)

### Vibe Coding

Kind: Form of work

Practice of generating code through natural language and accepting it without thorough review.

Vibe Coding denotes a practice in which code is generated through instructions in natural language and accepted without thorough review (Karpathy 2025). Sarkar and Drosos (2025) describe iterative goal-satisfaction cycles and material disengagement. Promptotyping shares the premise that LLMs can generate functional code from natural language, and it differs through the upstream Preparation and Exploration phases, persistent documentation and systematic verification. Vibe Coding survives inside Promptotyping as an exploratory mode.

Source: Site vocabulary, not carried in the paper text; Sarkar and Drosos 2025 (not in the paper's reference list); [Vault: the first empirical study of vibe coding](#vault-sarkar-vibe-coding-material-disengagement); Karpathy 2025

### Working Context

Kind: Infrastructure and environment

The information and project access assembled for one agent assignment, distinct from the persistent knowledge base.

The working context holds what an agent needs for a particular assignment, the relevant information and the access to project resources. It is assembled per task and must be kept apart from the persistent project knowledge base, which preserves the project's maintained understanding and its decisions. Material may be drawn from maintained documents and derived project artefacts, or obtained through retrieval and direct access to project resources; Retrieval-Augmented Generation can supply task-relevant material from collections that no maintained summary represents adequately. These mechanisms combine, and none of them replaces the maintained account of purpose, data semantics and criteria of assessment. Selection into the working context is itself part of Context Engineering, which is why accumulation is no substitute for it.

Source: [Paper, Section 2.1](#abschnitt-2-1-promptotyping-and-the-project-knowledge-base); [Working environment](#arbeitsumgebung)

### Write-back

Kind: Form of work

Incorporating a finding from implementation into the maintained project knowledge, so later work proceeds from the revised understanding.

A correction becomes methodologically consequential when it enters the maintained project knowledge instead of staying local to the current implementation. Write-back is that operation. It is no additional phase but the mechanism through which findings from Implementation become durable project knowledge. It must be directed at the level where the underlying problem arises, which may be the account of the research material, a conceptual model, a capture practice, a requirement, a mapping, an interface decision, an agent instruction, a checking procedure, or the documented boundary of acceptance. Its purpose is to carry the interpreted consequence of a finding forward, not to preserve every observation. Promptotyping further distinguishes project-level write-back from method-level write-back; a project-specific solution does not by itself become a transferable methodological rule.

Source: [Paper, Section 2.2.4](#abschnitt-2-2-4-implementation); [Paper, Section 3.3](#abschnitt-3-3-findings-attribution-and-learning)
