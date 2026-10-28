---
title: Glossary
slug: glossar
version: "0.5"
status: complete
source: data/glossar.json (authoritative data source); generated, not maintained by hand
mirrored: 2026-09-27
machine-url: https://dhcraft.org/Promptotyping/_content/glossar.md
---

# Glossary

Terms of the Promptotyping method and of the methodology site. The authoritative data source is `data/glossar.json`; this file is generated from it and carries the same content. Each entry gives the kind of thing the term names, a short definition for tooltips, a full definition and its sources. A source that this site holds an address for carries it as a hash anchor; the rest stay text. Terms the paper text does not carry are marked as site vocabulary in their source list.

### Action Document

Kind: Document function

Site name for the knowledge document that translates project knowledge into operational guidance for agents, which the paper calls an agent instruction document.

Action Document is the site's class name for the knowledge document that translates maintained project knowledge into operational guidance for agentic work. The paper calls this class agent instruction documents. Files such as CLAUDE.md or AGENTS.md may define the technical baseline, working procedures, constraints and checks governing an agent's work. Keeping these comparatively volatile instructions separate from more stable accounts of the data and scholarly purpose prevents temporary implementation directives from silently altering the project's maintained understanding. The Konvention Knowledge Documents also assigns the action layer, the testing strategy and, in multi-agent projects, role definitions and orchestration rules to this class, and it supplies the diagnostic rule that formally wrong output sends the reader to the Action Document first.

Source: Site vocabulary, not carried in the paper text; Paper, Section 2.1; [Konvention Knowledge Documents](#konvention-v0.1)

### Action Layer

Kind: Document function

The imperative CLAUDE.md in the repository root that socialises the coding agent.

The action layer is the imperative document in the repository root, usually CLAUDE.md, that socialises the coding agent. It routes to knowledge and translates it into imperatives while carrying no knowledge itself. It consists of a portable method core (knowledge-base routing, journal obligation, verification rules, design principles, scope, truth hierarchy) and an exchangeable tooling block (commands, hooks, permissions, platform conventions).

Source: Site vocabulary, not carried in the paper text; Paper, Section 2.1; [Vorlage Action-Layer](#promptotyping-document-action-layer)

### Agent Socialisation

Kind: Practice

Aesthetic and behavioural shaping of a coding agent through the composition of design.md and CLAUDE.md.

Agent socialisation denotes the aesthetic and behavioural shaping of a coding agent that arises as a reading effect when an action document in the repository root points at a declarative design document. In that translation the design rationale becomes the equivalent of values in an agent profile, from which the agent decides even in unforeseen situations. Knowledge stays knowledge and action stays action. The socialisation arises from the interplay.

Source: Site vocabulary, not carried in the paper text; Paper, Section 2.1; Vault Agent-Sozialisierung

### Agentic Coding

Kind: Practice

Site term for LLM agents that navigate a repository, run scripts and tests, and iterate on their own outputs.

Agentic coding is the site's term for the use of LLM agents such as Claude Code that navigate a repository, run scripts, execute tests, interpret error messages and iterate on their own outputs. The paper does not use the term. It speaks of agentic development systems that combine a high-capability LLM with an AI harness giving the agent controlled access to a persistent project environment, and it treats the organisation of such work as Agentic Engineering. What changes with these systems is the amount of work that can be delegated between successive human interventions, and with it how much project knowledge has to exist in writing beforehand.

Source: Site vocabulary, not carried in the paper text; Paper, Section 1.2; Anthropic 2025 (not in the paper's reference list)

### Agentic Engineering

Kind: Practice

Systematic organisation of the extended, multi-step work of LLM-based agents, from task decomposition and tool use to human intervention and inspection.

Agentic Engineering refers in the paper to the systematic organisation of the extended work of AI agents. An AI agent is an LLM-based system that pursues a goal through a sequence of tool-supported actions and adapts to intermediate results, so that it may inspect project resources, act on them, evaluate the results and continue across several steps. Agentic Engineering concerns how tasks are decomposed and coordinated, how agents use tools and respond to intermediate results, when human intervention is required, and how their work is inspected and continued. The term is used broadly because agents work not only on code but also on the documents through which a project is described, directed and assessed. The paper locates the methodologically relevant change in the growing amount of work that can be delegated between successive human interventions, which is why the knowledge guiding that work has to persist beyond individual interactions. Agentic Engineering and Context Engineering are interdependent, since a well-organised agentic workflow cannot compensate for an inadequate account of the data or research purpose.

Source: Paper, Section 1.2; Paper, Section 2.1

### Agentic Review

Kind: Checking and acceptance

Bounded, tool-supported investigation in which LLM-based agents examine an artefact against its sources, references and criteria.

Agentic review is a bounded, tool-supported investigation in which one or more LLM-based agents examine outputs, data states, implementations or research artefacts against the relevant sources, references, requirements and criteria. It may locate project files, compare sources and outputs, execute formal checks, investigate discrepancies, or coordinate specialised, parallel or adversarial reviewers. It extends agent-based code review while keeping the wider sense of review as criteria-guided examination. An LLM-as-a-Judge, which scores a supplied output against a reference or rubric, can be one operation within agentic review but does not exhaust it. Its findings stay probabilistic evidence and never constitute authorised verification, scholarly validation or acceptance.

Source: Paper, Section 2.3.1; [Specification, part 5, Checking](#verifikation)

### Anchor Scheme

Kind: Infrastructure and environment

System of stable URL anchors through which the site addresses templates, concepts, case studies and terms.

The anchor scheme is the system of permanently stable URL anchors on the site. One stable anchor exists per template, concept, case study and term, among them #promptotyping-document-data, #konzept-eil and #case-herdata. Every addressable content item exists in two equally canonical forms, a hash anchor and a subpath URL. Repositories that link through the frontmatter field template: address these anchors, so they may not be renamed without discussion.

Source: Site vocabulary, not carried in the paper text; knowledge/specification.md, requirement A4

### Asymmetric Amplification

Kind: Failure mode and limit

LLMs amplify computer-based research work along existing gradients of expertise, access and epistemic selectivity.

Asymmetric amplification names the dynamic by which LLMs amplify computer-based research work along existing gradients of expertise, access and epistemic selectivity (Pollin 2026b). Training corpora privilege English-language, digitised, well-published knowledge, and the same technology produces autonomy where verification competence exists and dependence where it is absent. A method built on these systems inherits the problem and cannot solve it. In the paper the term carries the ethical dimension of the access limit.

Source: Paper, Section 4.2; Pollin 2026b; [Vault: LLMs amplify research work rather than automate it](#vault-llms-amplify-research-not-automate-it)

### Claim Verification as a Document Function

Kind: Checking and acceptance

Adversarial checking of a project's own empirical and novelty claims in dedicated knowledge documents.

Claim verification as a document function denotes the checking of a project's own empirical and novelty claims in a dedicated document that records what claim was checked, against what evidence, by what procedure, and with what verdict. Three building blocks carry it, the recomputation of every headline figure from the raw data by an independent instance with a source path per figure, research against the project's own novelty claim with the aim of refuting it, and a conformance audit against the standards claimed. Claims used externally may be used only in the form these documents license. The vocabulary of claim, grounds, warrant and backing comes from Toulmin's layout of arguments, where each element answers a specific challenge to an assertion (Hitchcock 2003). The recording form stands close to the nanopublication, which binds a single statement to the annotations that carry its provenance so that it becomes citable, attributable and reviewable (Groth et al. 2010). The function is to be held apart from the software test, which checks an artefact against its specification, while what is checked here are statements about the world. Verdict vocabulary and procedure follow from neither model and are the site's own. The pattern emerged in FemPrompt SozArb and is now a document function of the catalogue in its own right.

Source: Site vocabulary, not carried in the paper text; Paper, Section 2.1; Paper, Section 3.1; [Best Practices, claims verification](#praxis-claims-verification-as-a-document-function); [Vault: Toulmin's layout of arguments (Hitchcock 2003)](#vault-toulmin-layout-separates-claim-grounds-warrant-and-backing); [Vault: the nanopublication model (Groth et al. 2010)](#vault-nanopublication-binds-a-statement-to-the-annotations-that-carry-its-context)

### Co-Intelligence

Kind: Role and authority

Framework for human-LLM collaboration that emphasises amplification over automation.

Co-Intelligence (Mollick 2024) is a framework for the collaboration of human and LLM that emphasises amplification over automation. The site carries the term as a precursor of its own account of the role. The paper text does not carry it, because there the Critical Expert and asymmetric amplification do the work this framework performs.

Source: Site vocabulary, not carried in the paper text; Mollick 2024, Co-Intelligence (not in the paper's reference list)

### Confabulation

Kind: Failure mode and limit

Generation of plausible but false outputs by LLMs, commonly called hallucination.

Confabulation, commonly called hallucination, is the generation of plausible but false outputs (Summerfield 2025). The LLM fills a gap with what fits rather than reporting what it lacks. In research contexts this is particularly dangerous where the output concerns contextualisation, periodisation or attribution, domains in which plausibility and correctness can come apart. Confabulation belongs beside sycophancy to the structural failure modes the Critical Expert addresses.

Source: Site vocabulary, not carried in the paper text; Summerfield 2025, These Strange New Minds (not in the paper's reference list)

### Context Engineering

Kind: Practice

Systematic selection, organisation, maintenance and provision of the information an LLM-based system requires for its work.

Context Engineering refers in the paper to the systematic selection, organisation, maintenance and provision of the information an LLM-based system requires for its work. It extends Prompt Engineering from individual prompts to the wider informational environment in which they are interpreted (Mei et al. 2025). Within Promptotyping this environment is organised around maintained project knowledge that records the project's current understanding of its data and purpose, together with decisions and unresolved questions relevant to implementation. Context Engineering does not consist in placing all available material into a context window. It maintains an inspectable body of project knowledge from which task-specific context can be selected and refreshed, and Distillation is its principal documentary operation within the method. Promptotyping rests on Context Engineering and Agentic Engineering together, which the paper treats as interdependent.

Source: Paper, Section 1.2; Paper, Section 2.1; Mei et al. 2025; [Vault: context engineering as the design of the inference context](#vault-context-engineering-systematic-inference-context)

### Context Memory

Kind: Document function

Division of re-entry context among durable documents, Process Documents and git history.

Context memory denotes the division of re-entry information among durable project knowledge, open received deltas in handoff.md, accepted future work in plan.md, the curated provenance index in journal.md, and earlier wording in git history. This division lets a new session recover current substance, pending inputs, future commitments, and transition grounds from their responsible carriers.

Source: Site vocabulary, not carried in the paper text; Paper, Section 2.1

### Context Rot

Kind: Failure mode and limit

Decline of LLM performance as input length grows, even on simple tasks.

Context rot denotes the empirically documented decline of LLM performance as input length grows, even on simple tasks such as retrieving text (Hong et al. 2025). The study across eighteen models shows non-uniform performance under growing context and contradicts the assumption that more information yields better results. The paper does not use the term in its running text but cites the study in Section 2.2.3, where a model's nominal context capacity does not imply that all supplied information will be used reliably. This supplies a rationale for selection in Distillation, which the paper nonetheless distinguishes from a mere reduction of token use. The site's CorrespExplorer case study reports the degradation well inside the advertised context window, qualitatively and without measurement.

Source: Site vocabulary, not carried in the paper text; Paper, Section 2.2.3; Hong et al. 2025; [Vault: non-uniform degradation as input length grows](#vault-context-rot-nonuniform-degradation-with-length)

### Critical Expert

Kind: Role and authority

Person or group competent and accountable for judging whether project knowledge adequately represents the research material and whether the artefact suits its purpose.

The Critical Expert is the person or group competent and accountable for judging whether the project knowledge adequately represents the research material and whether the artefact is suitable for its intended purpose. Acceptance of an iteration is the Critical Expert's responsibility. An agent may contribute proposals and assessments but cannot assume responsibility for their adequacy. Because formal conformity cannot establish scholarly adequacy, the Critical Expert remains in the loop, and the responsibility extends beyond detecting errors in generated content to examining whether alternatives were excluded, conventions reproduced without justification, or absences concealed by an apparently coherent artefact. Critical expertise may be held by one hybrid scholar-developer or distributed among contributors with complementary scholarly and technical competencies. The site formerly called the role Critical Expert in the Loop (EIL). Beyond the paper, the Critical Vibing blog post describes the role as combining domain expertise with awareness of LLM-specific failure modes and metacognitive vigilance.

Source: Paper, Section 2.2.4; Paper, Section 2.3.4; Pollin 2025, Critical Vibing blog (not in the paper's reference list); [Vault: the double reflection loop of the role](#vault-critical-expert-in-the-loop-double-reflection-loop)

### Declarative Document

Kind: Document function

Knowledge document that states what the project currently takes to be the case and what the artefact is required to realise.

A Declarative Document is the specialisation of the knowledge document that states what the project currently takes to be the case and what the artefact is required to realise. The paper calls this class declarative knowledge documents. A data.md may describe the structure, semantics, provenance, gaps and uncertainties of the research data, a requirements document connects scholarly practices with expected system behaviour, and a design.md records how the project's modelled distinctions should be represented and made actionable in the artefact. Project contributors curate these documents. The Konvention Knowledge Documents adds further examples such as README.md, project.md, specification.md, architecture.md, editorial guidelines, mapping rules and verification documents, and it supplies the diagnostic rule that factually wrong output sends the reader to the Declarative Document first. The site carried this type under the name Knowledge Document until July 2026, when the name moved to the generic term.

Source: Paper, Section 2.1; [Konvention Knowledge Documents](#konvention-v0.1)

### Demo Repository Reduction

Kind: Practice

Teaching pattern in which the demo repository is deliberately left unconfigured.

Demo repository reduction is a teaching pattern for Promptotyping workshops in which participants rebuild the method themselves on a real project. The demo repository is deliberately left unconfigured, an initial state with raw data, a terse idea.md and an empty knowledge/ folder, without CLAUDE.md, without custom commands and without an output structure. The learning gain comes from building the Promptotyping architecture under guidance rather than from reading a finished one. Tested in the SuGW and the ZBZ workshop.

Source: Site vocabulary, not carried in the paper text; [Best Practices, demo repository reduction](#praxis-demo-repository-reduction-in-teaching); Promptotyping MOC

### Distillation

Kind: Form of work

Third of Promptotyping's four recurrent forms of work, which translates the understanding from Preparation and Exploration into maintained knowledge documents.

Distillation is the third of Promptotyping's four recurrent forms of work and the principal documentary operation of Context Engineering within the method. It translates the understanding produced through Preparation and Exploration into maintained knowledge documents from which implementation and verification can proceed, while the fuller sources and research data remain available for direct inspection and computational processing. It is not reducible to summarisation or context compression and does not seek merely to reduce token use. It creates an inspectable and selective representation that preserves the distinctions, conditions and uncertainties required for adequate implementation and verification, and it can therefore be understood as pragmatic modelling for human contributors and agent instances. Findings that models do not use all supplied information reliably (Liu et al. 2024; Hong et al. 2025) supply a rationale for this selection. Sufficiency is practical rather than formal. A new contributor or agent instance, given the relevant knowledge documents and access to the project resources, should be able to reconstruct the project's current logic and continue the assigned work without undocumented explanation. Successful implementation does not by itself establish scholarly adequacy.

Source: Paper, Section 2.2.3; Liu et al. 2024; Hong et al. 2025

### Documented Grounds of Acceptance

Kind: Checking and acceptance

The record of why, for what purpose and by whom an iteration was accepted, which forms the fourth member of the promptotype relation.

Acceptance is the accountable decision that an identifiable state is adequate for a stated purpose, and it is only reconstructable if its grounds are written down. The record names the intended purpose, the applicable criteria, the accepting person or group, the known limitations, the version reference and, where relevant, the referenced research-data state. It may take the form of an acceptance note, a dated journal entry, a numbered decision record, a verification document or an equivalent project record. Together with the maintained project knowledge, the referenced research-data state and the resulting artefact it forms the four-member relation that makes an accepted iteration a promptotype.

Source: Paper, Section 2.2.4; Paper, Section 4.3; [Specification, part 5, Checking](#verifikation)

### Epistemic Infrastructure

Kind: Infrastructure and environment

Site term for the interplay of verification points, interfaces, documents and version history in complex pipelines.

Epistemic infrastructure denotes the interplay that arises in complex Promptotyping pipelines when verification points, interfaces, Knowledge Documents, version history and agentic tooling mesh and keep the process of inquiry traceable across sessions. In the ZBZ OCR/TEI project and in FemPrompt SozArb the repository itself carries this function. The term was deliberately removed from the paper text, because the method supplies only one part of an epistemic infrastructure. The site keeps it as descriptive vocabulary for these cases.

Source: Site vocabulary, not carried in the paper text; Vault Epistemic Infrastructure

### Exploration

Kind: Form of work

Second of Promptotyping's four recurrent forms of work, which examines the prepared material to determine what the project knowledge base must represent.

Exploration is the second of Promptotyping's four recurrent forms of work and was formerly called Exploration and Mapping on the site. It examines the prepared research material for relevant patterns, variations and unresolved problems in order to understand its structure and limitations and to determine what the project knowledge base must represent. Its form depends on the scale and structure of the material. A single text or a small collection may be examined directly, including through an LLM, while large or heterogeneous collections may require computational profiling, for instance code generated by an LLM that extracts and aggregates structural information from thousands of TEI XML documents. The collection stays in the project environment, and the resulting profiles and selected examples can enter the agent's working context. The outputs are provisional observations rather than maintained project knowledge and become part of the knowledge base only through interpretation and Distillation. Exploration is provisionally sufficient when the material has been understood and documented well enough to determine what must be carried forward.

Source: Paper, Section 2.2.2

### Frontmatter Inspector

Kind: Artefact and interface

Site module that resolves a template: URI in real time and renders the referenced template live.

The Frontmatter Inspector is a module of the templates section that accepts a whole YAML frontmatter block, extracts template.url or template.alias, validates the URL against the anchor scheme and opens the side panel with the rendered template. It demonstrates the frontmatter indirection concretely, since pasting a real frontmatter from another repository makes visible how repositories use the site as a machine-readable endpoint.

Source: Site vocabulary, not carried in the paper text; [Templates, machine access](#vorlagen-maschinenzugriff); knowledge/specification.md, requirement A11 and ADR-7

### Implementation

Kind: Form of work

Fourth of Promptotyping's four recurrent forms of work, which makes maintained project knowledge actionable through LLM-supported development in bounded, versioned increments.

Implementation is the fourth of Promptotyping's four recurrent forms of work. It makes maintained project knowledge actionable through LLM-supported development. This may proceed through iterative chat-based interactions in which contributors carry prompts, code and results between model and project environment, or, more effectively where the agent must work directly with project files, execute code and continue across several steps, through an AI harness. Implementation consists of bounded tasks and proceeds through inspectable and versioned increments, each of which should establish a runnable state that can be compared with the maintained project knowledge. Refactoring and executable checks keep the project state intelligible and testable. A finding has to be attributed before it revises anything. Findings that alter the project's maintained understanding are written back to the relevant documents rather than remaining local corrections in the code, whereas a failure to realise an adequate requirement is corrected in the artefact. Implementation is provisionally sufficient when the artefact state is runnable, inspectable and identifiable through versioning, and that state is not yet a promptotype.

Source: Paper, Section 2.2.4; Paper, Section 3.3

### Informed Vibe Coding

Kind: Practice

Vibe coding grounded in computer literacy and computational thinking as competence prerequisites.

Informed Vibe Coding denotes vibe coding that rests on a three-layer competence model, computer literacy, then computational thinking, then informed vibe coding. It separates the competent, methodologically reflected form of LLM-supported development from the naive one. The lower layer carries the upper one, since without basic technical understanding vibe coding stays blind to the consequences of the generated solution.

Source: Site vocabulary, not carried in the paper text; Vault Informed Vibe Coding

### Interface Typology

Kind: Artefact and interface

Classification of generated interfaces by epistemic function, verification, exploration, edition, capture and audit.

The interface typology sorts the generated interfaces by the epistemic function they serve, data format and visualisation technique having proved weaker ordering principles. Verification Interfaces check pipeline outputs at defined milestones. Exploration Interfaces open up existing structured data through coordinated multiple views. Edition Interfaces render scholarly editions with facsimile synchronisation and editorial correction. Capture Interfaces support structured input, annotation and metadata creation. Audit Interfaces make an entire research process inspectable. The categories are not mutually exclusive. A pipeline project combines them.

Source: [Specification, part 4, Artefact and boundary](#artefakt); Site vocabulary since the promotion of 2026-07-30; descends from an earlier version of the paper, whose Table 1 has named six operational forms of its own since 2026-07-31

### Knowledge Curation

Kind: Practice

Systematic maintenance of the networked knowledge model at the vault layer and at the repository layer.

Knowledge curation is the systematic maintenance of the networked knowledge model on two layers, the personal vault as a second brain and the project-specific knowledge vaults in repositories. It knows three types of operation (script-based, semantic, structural) and treats links as navigable context paths for agentic systems. As a cross-cutting practice it is what makes Promptotyping accumulate beyond the individual session.

Source: Site vocabulary, not carried in the paper text; [Best Practices, knowledge curation](#praxis-knowledge-curation); Promptotyping MOC

### Knowledge Document

Kind: Document function

Structured, inspectable document that carries maintained project knowledge, canonically held as Markdown under knowledge/ in repository-based projects.

A Knowledge Document is a structured, inspectable and revisable carrier of maintained project knowledge. The paper describes the project knowledge base as interrelated documents, bounded representations distilled from fuller research material, maintained for human inspection and revision, and made available for inclusion in agents' task-specific working contexts. Repository-based Promptotyping projects canonically hold these documents as Markdown in a knowledge/ folder, and the method permits other documentary environments with the same inspectability and revision properties. The class was formerly called Promptotyping Document, and the published template anchors keep that segment. The site divides Knowledge Documents into three classes, Declarative Documents, Process Documents and Action Documents, which the paper calls declarative knowledge documents, process knowledge documents and agent instruction documents. The paper treats these types as organisational heuristics rather than a prescribed file structure. Project contributors curate the documents, and human contributors or LLM-based agents may carry out the documentary work.

Source: Paper, Section 2.1; Paper, Section 3.3; [Vault: the documents are the primary artefact](#vault-promptotyping-documents-are-the-primary-artifact); knowledge/INDEX.md

### Knowledge-Action Composition

Kind: Document function

Structural principle that keeps knowledge and action separate and socialises coding agents through their combination.

The knowledge-action composition is the structural principle by which declarative knowledge and imperative steering stay separate and together socialise a coding agent. Concretely, design.md stays a Declarative Document while CLAUDE.md as an Action Document points at it as a source of values and translates the design stance into imperative principles. The aesthetic and factual steering arises from the composition of two documents rather than from a hybrid type. The same axis separates technical documentation in Diátaxis, action against cognition, knowing how against knowing that (Procida 2024). Two things shift with a machine addressee. That framework's second axis falls away, acquisition against application, because a model loads the documents per session and acquires nothing that persists. And the reason for the separation inverts, since Diátaxis separates so that a reader finds the form their situation calls for, while a knowledge base separates so that a stable description is not overwritten by a volatile instruction.

Source: Site vocabulary, not carried in the paper text; Procida 2024, Diátaxis (not in the paper's reference list); [Konvention Knowledge Documents](#konvention-v0.1); [Vault: Diátaxis separates along action and cognition](#vault-diataxis-separates-documentation-along-action-and-cognition)

### Konvention Knowledge Documents

Kind: Document function

Descriptive account of the functions of a knowledge base, of the frontmatter schema and of the structural principles.

The Konvention Knowledge Documents describes descriptively which functions a knowledge base in the knowledge/ folder covers, which frontmatter vocabulary applies and which structural principles hold. It prescribes no fixed list of documents and instead supplies trigger criteria per function, so that a coding agent can decide for itself which documents a repository needs. It is derived from the HerData reference implementation and mirrored on the site as an external specification.

Source: Site vocabulary, not carried in the paper text; [Konvention Knowledge Documents, version 0.1](#konvention-v0.1)

### Phase Provenance Lane

Kind: Artefact and interface

Removed design element of the site that marked the Promptotyping phase described by each paragraph in the margin.

The phase provenance lane was a design element of the first deploy. A narrow left column showed a monochrome mark in four shades of grey at every paragraph, corresponding to the Promptotyping phase the paragraph described, and made the methodological distribution of the paper visually legible. It was removed in full by operator decision in June 2026, together with legend, tooltip and filter mode (ADR-4). The phase tags have since left the paper Markdown, and the extension that stripped them at render time was deleted on 2026-07-27. The entry remains so that the decision stays traceable.

Source: Site vocabulary, not carried in the paper text; knowledge/specification.md, A2 and ADR-4 (removed feature)

### Preparation

Kind: Form of work

First of Promptotyping's four recurrent forms of work, which assembles the source basis and research context from which subsequent work proceeds.

Preparation is the first of Promptotyping's four recurrent forms of work. It assembles the source basis and research context, brings the relevant research material into an accessible project environment and makes its current status explicit. Analogue material may first require digitisation, and existing digital material may remain distributed across heterogeneous formats and levels of structure. Preparation does not require the material to be normalised, formally modelled or placed in an agent's working context. It requires the material to remain accessible for inspection and computational use, with its provenance and known limitations documented. It also gathers the scholar's current understanding and the project's provisional purpose as documented in existing working materials, which may already express research questions or preliminary requirements. Exploration refines the relation between material and intended scholarly work, and Distillation incorporates the resulting understanding into maintained project knowledge. Preparation is provisionally sufficient when the source basis and research context are digitally accessible and documented well enough to support systematic examination.

Source: Paper, Section 2.2.1

### Process Document

Kind: Document function

Knowledge document that preserves how the project's understanding developed and why decisions were taken.

A Process Document is the specialisation of the knowledge document that preserves how the project's understanding developed and why decisions were taken. The paper calls this class process knowledge documents. A journal.md may record attempted approaches, failures and unresolved questions, and consequential decisions may be retained in dedicated records. Together with version control and informative commit messages, these documents make changes and their rationale traceable. The Konvention Knowledge Documents adds the mandatory handoff.md for open received deltas and plan.md for accepted future work, treats journal.md as the curated backward provenance index, and routes an overlooked input to handoff.md and unclear transition grounds to journal.md.

Source: Paper, Section 2.1; [Konvention Knowledge Documents](#konvention-v0.1)

### Promptotype

Kind: Checking and acceptance

The identifiable and versioned state an accepted Promptotyping iteration yields.

A promptotype is the accepted state of one Promptotyping iteration. It connects the maintained project knowledge, the referenced research-data state, the resulting digital research artefact and the documented grounds of acceptance into a coherent and identifiable whole for a stated purpose. A runnable or plausible artefact does not reach this threshold as long as that relation cannot be reconstructed. Acceptance is purpose-specific, so a promptotype may be accepted as an exploratory interface, an internal production workflow, a proposal-stage demonstrator, a handover state or a public research artefact, and it does not imply that project knowledge, data or artefact have become final. Re-implementing with another model, harness or project state is a new iteration rather than a reproduction of the earlier promptotype.

Source: Paper, Section 2.2.4; Paper, Section 2.3.4; knowledge/INDEX.md

### Promptotyping

Kind: Practice

Iterative, knowledge-driven method for developing project-specific digital research artefacts from structured research data and maintained project knowledge through Context Engineering and Agentic Engineering.

Promptotyping is an iterative, knowledge-driven method for developing project-specific digital research artefacts from structured research data and maintained project knowledge through Context Engineering and Agentic Engineering. The name combines *prompt* and *prototyping* and retains the function of a prototype as a provisional implementation through which requirements and design possibilities can be examined and refined. Its organising structure is an evolving and versioned project knowledge base, held in versioned files, an interlinked note system or another inspectable and revisable form. Project contributors curate this knowledge and define and oversee the bounded tasks that LLM-based agents carry out, and findings from implementation and examination are written back into it. The work proceeds through four recurrent forms, Preparation, Exploration, Distillation and Implementation. The knowledge base guides implementation without determining a single realisation, so a renewed implementation with another model, harness or project state constitutes a new iteration. An accepted iteration state is a promptotype.

Source: Paper, Section 2.1; Paper, Section 2.2; Paper, Section 2.3.4; knowledge/INDEX.md

### Promptotyping Interface

Kind: Artefact and interface

Browser-based validation tool that makes intermediate results visible, comparable and correctable.

Promptotyping Interfaces are the browser-based artefacts of the method, as a rule self-contained static HTML, CSS and JavaScript tools with research data embedded or loaded from flat files. They make data and intermediate results visible, comparable and correctable. In the ZBZ OCR/TEI project a pipeline viewer renders facsimile, layout overlay and OCR/TEI side by side. The interface typology sorts them into five categories by the epistemic function they serve.

Source: Site vocabulary, not carried in the paper text; Paper, Section 3.2; [Best Practices, Promptotyping Interfaces](#praxis-promptotyping-interfaces)

### Digital Research Artefact

Kind: Artefact and interface

Project-specific operational form through which researchers work with structured research data for a defined scholarly purpose.

Digital research artefacts are, in the paper's definition, project-specific operational forms through which researchers work with structured research data for a defined scholarly purpose. They may take the form of interfaces, transformations, workflows and research tools designed for particular scholarly questions, data models and practices. Research data may themselves be understood as research artefacts in a broad sense, but the paper distinguishes the two by their function within the research process. A project-specific artefact remains selective, yet its selections can be made and examined in relation to the project's own data and purpose rather than to assumptions a generic tool brings with it. No particular software form is constitutive of the method. The operational forms the paper finds across its cases are capture, transformation, exploration, edition, verification and integrated scholarly workbenches. The site's own technical rule for the artefacts it builds defaults to a self-contained static web tool.

Source: Paper, Section 1; Paper, Section 1.1; Paper, Section 3.2; [Specification, part 4, Artefact and boundary](#artefakt)

### Research Compendium as a Promptotyping Pattern

Kind: Artefact and interface

Recurring structural feature, a static website plus a standalone research dataset in the repository.

The research compendium as a Promptotyping pattern denotes the recurring structural feature that a Promptotyping artefact consists of a static website and a standalone research dataset in the repository. It appears in two variants, as a JSON-LD knowledge graph with strong RDF semantics, as in M3GIM, or as a data-structure JSON serving as a plain data source with external identifiers as strings, as in HerData. The dataset carries the whole data holding of the project. The arrangement carries an established name in the reproducibility discussion. Marwick, Boettiger and Mullen (2018) define the research compendium by three principles, that its files follow the conventions of the scholarly community, that data, method and output stay separate with the relation between them stated unambiguously, which treats the data as read-only and documents every modification in the code, and that the computational environment of the original analysis is specified. The convergence on static deployment is argued in the same discourse under the name minimal computing (Risam and Gil 2022).

Source: Site vocabulary, not carried in the paper text; Marwick et al. 2018 (not in the paper's reference list); Risam and Gil 2022 (not in the paper's reference list); [Vault: the research compendium separates data, method and output](#vault-research-compendium-separates-data-method-and-output); [Vault: minimal computing reduces code and dependencies](#vault-minimal-computing-reduces-code-and-dependencies); Promptotyping MOC

### Scholar-Centred Design

Kind: Practice

Design approach in which the system adapts to the working practices of researchers.

Scholar-Centred Design is a design approach developed in Pollin (2025a) in which the system adapts to the working practices of researchers rather than the other way round. It produces user stories, personas and epics from collaborative sessions with domain experts and draws on Marchionini's exploratory search and Bates' berrypicking model. In the DEPCHA project deep-dive sessions produced structured requirements that could not have been derived from the data alone. It supplies the structured contexts that Promptotyping uses for LLM-supported production.

Source: Paper, Section 1.1; Pollin 2025a; [Vault: requirements from deep-dive sessions](#vault-dissertation-requirements-from-deep-dive-sessions)

### Script versus LLM Division

Kind: Practice

Assignment of tasks by unambiguity, algorithmically unambiguous work to scripts, semantically interpretive work to the LLM.

The script versus LLM division assigns algorithmically unambiguous tasks to scripts and semantically interpretive tasks to the LLM. The dividing line runs along unambiguity rather than along complexity. It appears twice in the method, as deterministically generated documents that are rendered from the source data and committed alongside the curated layer, and as the resolution of the token economy, where the LLM reads over the data and writes code that reads the data. The line is no coinage of the method. Requirements engineering draws it for its own tools, where the QUS tool checks the criteria a rule can decide and excludes the semantic ones on the stated ground that they require deep understanding of the requirement's content (Lucassen et al. 2016). Evaluation research measures the other end, where a strong judging model matches human preference at the level at which humans agree with one another, under named position, verbosity and self-enhancement biases (Zheng et al. 2023).

Source: Site vocabulary, not carried in the paper text; Paper, Section 2.1; [Best Practices, script versus LLM separation](#praxis-script-versus-llm-separation); Lucassen et al. 2016 (not in the paper's reference list); Krumdick et al. 2025 (not in the paper's reference list); Zheng et al. 2023 (not in the paper's reference list); [Vault: the QUS tool checks only what a rule can decide](#vault-aqusa-checks-the-criteria-a-rule-can-decide); [Vault: a judging model matches human preference under known biases](#vault-llm-judgement-approximates-human-preference-and-carries-known-biases)

### Side Panel

Kind: Artefact and interface

Right-hand sliding panel of the site that carries context-specific depth without interrupting the reading flow.

The side panel is the right-hand sliding panel of the site. It carries context-specific depth, a template specification, a case-study deep page or a vault assertion, and it opens on click without interrupting the reading flow. On mobile devices it appears as a bottom sheet.

Source: Site vocabulary, not carried in the paper text; knowledge/specification.md

### Spec-Driven Development

Kind: Practice

The software industry's corrective to unreviewed generation, with the specification as the source of truth for agents.

Spec-Driven Development names the corrective the software industry developed against the reliability problems of unreviewed generation. Through 2024 and 2025 agentic coding frameworks converged on maintaining specifications as the source of truth from which LLM-supported agents implement, among them Tessl, BMAD, AWS Kiro, OpenSpec and GitHub Spec Kit. Promptotyping belongs to this movement and shares its core commitments, the versioned document set as the governing unit, the separation of intent from implementation, and a human checkpoint between generation and acceptance. Three things that sit at the periphery there are constitutive here. The data layer describes sources that precede the artefact and carry their own semantics and their own uncertainty, in place of the system under construction. The specification is bound to scholarly verification duties. And the Critical Expert is installed as a role holding domain authority over the subject matter.

Source: Site vocabulary, not carried in the paper text; [Vault: the frameworks converge on specification over prompt](#vault-sdd-frameworks-converge-on-specification-over-prompt); [Vault: no framework defines a subject-matter checking role](#vault-sdd-no-subject-matter-verification-role)

### Sub-Agents and Role Simulation

Kind: Role and authority

Specialised agent roles with differentiated permissions or, without predefined roles, a simulation of them within one session.

Sub-agents are defined agent roles with graded permissions, for instance a read-only analysis, a writing implementation and a synthesis. They load only if the definitions exist before the session starts. Otherwise a role simulation runs within a single session. The method knows this multi-agent mode as a second mode of operation beside the default of one researcher and one agent instance, and the evidence lies overwhelmingly with the first. In the wiiw FIGARO project three roles were separated so that the analysis agent held read permissions only. The graded permissions are least privilege in the sense of Saltzer and Schroeder (1975), where every program and every user operates with the least set of privileges the job needs, which bounds the damage an error can do and narrows what an audit has to cover. Splitting roles across separate instances is what multi-agent frameworks do when they assign roles along an encoded working procedure so that intermediate results are checked by an agent other than their producer (Hong et al. 2023). The simulation within one session is called role play in the literature, and that literature's own correction bounds the term, because a role set by a prompt stays a distribution of characters that the conversation keeps reshaping (Shanahan et al. 2023).

Source: Site vocabulary, not carried in the paper text; Paper, Section 2.3.4; [Best Practices, subagents and role simulation](#praxis-subagents-and-role-simulation); Saltzer and Schroeder 1975; [Vault: least privilege bounds damage and narrows the audit](#vault-least-privilege-bounds-damage-and-narrows-the-audit); [Vault: multi-agent frameworks assign roles along a procedure (Hong et al. 2023)](#vault-multi-agent-frameworks-assign-roles-along-an-encoded-procedure); [Vault: dialogue-agent behaviour as role play (Shanahan et al. 2023)](#vault-dialogue-agent-behaviour-is-described-as-role-play)

### Sycophancy

Kind: Failure mode and limit

Tendency of LLMs to agree with user assumptions instead of challenging them.

Sycophancy is the tendency of LLMs to agree with the assumptions of their users instead of challenging them (Sharma et al. 2023; Fanous et al. 2025). Beside confabulation it is one of the two structural failure modes the Critical Expert addresses. The Critical Expert has to recognise that an absence of contradiction from the LLM constitutes no validation. In CorrespExplorer the LLM agreed with suboptimal decisions as soon as they were phrased as a proposal.

Source: Site vocabulary, not carried in the paper text; Sharma et al. 2023 (not in the paper's reference list); Fanous et al. 2025 (not in the paper's reference list); [Vault: agreement with the user over the truthful answer](#vault-sycophancy-agreement-over-truth)

### Template (Knowledge Document)

Kind: Document function

Fillable structural specification for one function of a Promptotyping knowledge base.

A template is a fillable structural specification for one function of a Promptotyping knowledge base. Function names and subject prefixes are English, including Navigation, Charter, Material, Specification, Architecture, Technology Baseline, Domain Knowledge, Design, Quality Assurance, Verification, Provenance, Handoff, Planning, Governance, Reporting, Integration and Agent Instructions. A single carrier uses its canonical file name. A specialisation follows <subject>-<function>.md. Template names remain stable public identifiers even where their wording is German. The catalogue is open, and a template applies only where its trigger is met.

Source: [Specification, part 2, Templates](#vorlagen); [Konvention Knowledge Documents](#konvention-v0.1); [Vault: the first description declared the documents form-free](#vault-promptotyping-documents-form-freedom); knowledge/INDEX.md

### template: field

Kind: Infrastructure and environment

Frontmatter field in Knowledge Documents that points at the authoritative template specification on the site.

The template: field is a frontmatter field in Knowledge Documents that refers to the authoritative template specification on the methodology site. It carries name, version, url (subpath form, canonical) and optionally alias (hash form, equivalent). A coding agent that encounters the field can retrieve the full template without prior knowledge of the project. The same frontmatter fields can be rendered into citation metadata that harvesters read.

Source: Site vocabulary, not carried in the paper text; Paper, Section 2; [Templates, machine access](#vorlagen-maschinenzugriff); knowledge/specification.md, requirement A5

### User Story (Epistemic Status)

Kind: Checking and acceptance

Every user story is a hypothesis about the user until the named user confirms it.

In the Promptotyping context every user story is a hypothesis about the user until the named user has confirmed it. In the agentic setting the implementing conversation that would correct wrong stories within a team falls away, so unvalidated stories have to be marked as assumptions and carry an observation point. This status is a stipulation of the site and takes no support from the QUS framework, since each of its criteria judges the intrinsic quality of the story text and none asks whether the story holds of the user it names. It comes from the FemPrompt case. The review criteria for a user-stories document are listed with the Vorlage User Stories, taken from QUS (Lucassen et al. 2016) along the division that framework itself draws between what a tool can decide and what requires understanding of the content, and extended by what the agentic setting demands.

Source: Site vocabulary, not carried in the paper text; [Best Practices, the epistemic status of user stories](#praxis-the-epistemic-status-of-user-stories); [Vorlage User Stories](#promptotyping-document-user-stories); Lucassen et al. 2016 (not in the paper's reference list); [Vault: the thirteen QUS quality criteria](#vault-qus-defines-thirteen-user-story-quality-criteria)

### Verification and Validation

Kind: Checking and acceptance

Technical verification checks conformity to formalised requirements, scholarly validation whether a representation is warranted by the sources and adequate for its purpose.

The paper distinguishes technical verification, which assesses whether an output or implementation conforms to formalised requirements such as a schema, test, constraint or specified mapping, from scholarly validation, which assesses whether the underlying representation is warranted by the source material and adequate for its intended research purpose. An implementation can therefore be technically correct and still fail validation, because the requirement it faithfully realises is itself inadequate. The distinction adapts the usage of software and systems engineering, where verification concerns conformity to specified requirements and validation suitability for intended use and user needs (IEEE Std 1012). Scholarly validation requires responsible human judgement wherever adequacy depends on source knowledge, interpretation or design decisions. Section 2.3.1 differentiates checking into four forms, deterministic verification, agentic review, Critical Expert verification and adjudication, and scholarly validation. As a footnote to that section clarifies, verification in the third form names the accountable examination of particular outputs against their sources, whereas technical verification in Section 1 names conformity to formalised requirements. Where such an examination judges whether a representation is warranted by the sources, it belongs in IEEE 1012 terms to validation. Schema validation, the established XML term for an automatic check against a schema, keeps its name as a term of art and is in this sense a form of verification.

Source: Paper, Section 1; Paper, Section 2.3.1; IEEE 2025 (IEEE Std 1012-2024); [Specification, part 5, Checking](#verifikation)

### Verification Milestone

Kind: Checking and acceptance

Defined checkpoint in the workflow at which domain expertise is applied systematically.

Verification milestones are defined checkpoints in the workflow at which domain expertise is applied systematically. They turn the Critical Expert into a process step, since at a milestone the work stops, is verified with deterministic tools and validated by expert judgement before it continues. Implementation advances in such small, checkable steps. Where the check is deferred, a verification debt arises that has to be settled before use or handover. In the ZBZ OCR/TEI project an interface at every pipeline stage serves as such a milestone.

Source: Site vocabulary, not carried in the paper text; Paper, Section 2.2.4; [Best Practices, verification milestones](#praxis-verification-milestones)

### Vibe Coding

Kind: Practice

Practice of generating code through natural language and accepting it without thorough review.

Vibe Coding denotes a practice in which code is generated through instructions in natural language and accepted without thorough review (Karpathy 2025). Sarkar and Drosos (2025) describe iterative goal-satisfaction cycles and material disengagement. Promptotyping shares the premise that LLMs can generate functional code from natural language. Its additional controls are the upstream forms Preparation and Exploration, persistent documentation, systematic verification, purpose-specific acceptance, and write-back. Vibe Coding survives inside Promptotyping as an exploratory mode.

Source: Site vocabulary, not carried in the paper text; Sarkar and Drosos 2025 (not in the paper's reference list); [Vault: the first empirical study of vibe coding](#vault-sarkar-vibe-coding-material-disengagement); Karpathy 2025 (not in the paper's reference list)

### Working Context

Kind: Infrastructure and environment

The information and project access assembled for one agent assignment, distinct from the persistent knowledge base.

The working context holds what an agent needs for a particular assignment, the relevant information and the access to project resources. It is assembled per task and must be kept apart from the persistent project knowledge base, which preserves the project's maintained understanding and its decisions. Material may be drawn from maintained documents and derived project artefacts, or obtained through retrieval and direct access to project resources. Retrieval-Augmented Generation can supply task-relevant material from collections that no maintained summary represents adequately. These mechanisms combine, and none of them replaces the maintained account of purpose, data semantics and criteria of assessment. Selection into the working context is itself part of Context Engineering, which is why accumulation is no substitute for it.

Source: Paper, Section 2.1; [Working environment](#arbeitsumgebung)

### Write-back

Kind: Practice

The return path through which consequential findings enter renewed Distillation and maintained project knowledge.

Write-back carries consequential findings from Implementation, assessment, review, and validation into renewed Distillation. Human contributors or LLM-based agents may carry out the resulting documentary work. Within Promptotyping, knowledge refactoring revises the maintained Markdown documents so that they express the current project understanding coherently. Accountable contributors determine which revised knowledge enters the accepted project state. A project-specific revision supports method-level change when the available evidence warrants a general rule.

Source: Paper, Section 2.2.4; Paper, Section 3.3
