# Promptotyping Paper: Knowledge Document

**Updated:** 29 July 2026, after conceptual revision of *promptotype*, iteration, versioning, and figure integration.

**Status:** This document records the current authoritative understanding for the revised manuscript. The Introduction, Sections 1.1–1.2, and the historical genesis before Section 2.1 remain substantively unchanged. The revised definition and all consequences from Section 2.1 onward are consolidated here and implemented in `Promptotyping_Paper_revised.md`. Author acceptance is still required before the complete manuscript becomes canonical.

**Function:** Governing knowledge for completing the paper, preserving its strongest established arguments, preventing duplication, and synchronising terminology, figures, cases, citations, and revision boundaries.

**Authority rule:** Within accepted manuscript sections, the manuscript is canonical. In sections still awaiting acceptance, this document governs the intended argument and terminology. Completed repair history belongs in an archive, not in this active document.

---

## 1. Purpose and Contribution

The paper introduces *Promptotyping* as a knowledge-driven method for translating structured research data, domain knowledge, and project-specific requirements into digital research artefacts adapted to particular research questions and practices.

The central contribution is not that LLMs can generate code. It is that **maintained project knowledge, rather than an individual prompt or generated code, becomes the revisable centre of LLM-based research-artefact development**.

Promptotyping:

- combines Scholar-Centred Design, Context Engineering, and Agentic Engineering;
- organises work around an evolving and versioned project knowledge base;
- differentiates Preparation, Exploration, Distillation, and Implementation;
- makes project knowledge operative through LLM-based AI agents and an AI harness;
- writes implementation findings and verification results back into maintained documents;
- distinguishes deterministic validation, agentic review, and Critical Expert verification;
- produces identifiable versioned promptotypes across accepted iterations;
- redistributes implementation work without transferring responsibility for interpretation, verification, and acceptance.

The paper reconstructs and consolidates a method from documented practice. It does not present a controlled comparative evaluation and does not claim general superiority, speed, economy, reliability, or transferability.

---

## 2. Paper Architecture

The six-chapter structure is retained:

1. **Foundations:** research data, digital research artefacts, Scholar-Centred Design, Context Engineering, Agentic Engineering, AI harnesses, and the Critical Expert.
2. **Promptotyping:** genesis, definition, recurring forms of work, Promptotyping Documents, agentic implementation, checking, acceptance, write-back, and versioned promptotypes.
3. **Epistemic and Methodological Implications:** artefacts as arguments, semantic explicitness, documents as conceptual models, distributed judgement, acceptance and publication, reconstructability.
4. **Promptotyping in Practice:** technical defaults, interface typology, project inventory, worked cases, teaching and collaboration, cross-case observations.
5. **Limits and Priorities for Evaluation:** empirical, epistemic, technical, organisational, infrastructural, and transfer limits.
6. **Conclusion:** concise statement of contribution, responsibility, evidential reach, and evaluation priorities.

### Chapter-boundary rule

Chapter 1 establishes why project-specific artefacts are needed and which methodological and technical foundations Promptotyping draws upon. Chapter 2 defines the method. Chapter 3 develops implications without re-deriving the method. Chapter 4 provides practical evidence without converting breadth into efficacy claims. Chapter 5 states limits and open evaluation questions. Chapter 6 summarises without introducing new theory.

---

## 3. Preserved Strengths from the Earlier Manuscript

The restructuring and present revision must not weaken the following established strengths:

- structured research data are selective, modelled representations rather than transparent reproductions of research objects;
- data models, technical formats, and standards remain distinct concepts;
- explicit semantics can be represented in RDF, ontologies, vocabularies, provenance structures, and constraints;
- formal semantics do not determine project-specific scholarly operations or representations;
- digital research artefacts are situated operational forms, not merely presentation layers;
- Scholar-Centred Design translates scholarly perspectives into requirements and evaluation criteria;
- Context Engineering organises and maintains knowledge, Agentic Engineering organises work, and the AI harness provides the operational environment;
- the Critical Expert is an accountable role, not a generic human checkpoint;
- Semantic Markdown is pragmatic remodelling for a different addressee and use, not merely compression;
- Promptotyping Documents remain dually readable by researchers and agents;
- declarative, process, and action documents serve different functions;
- curated and generated documents are distinguished by provenance and overwrite behaviour;
- implementation findings must be written back into the relevant knowledge layer;
- static artefacts are preferred defaults in many cases, not constitutive requirements;
- published and maintained systems may require Research Software Engineering;
- the empirical basis demonstrates breadth within one practitioner’s work, not comparative efficacy or general transfer.

No central argument from the previous strong version has been removed. Material has been relocated, deduplicated, qualified, or given a more precise function.

---

## 4. Research Data and Digital Research Artefacts

Within the paper, *research data* refers to structured representations that provide the scholarly basis of a project. Through tabular, hierarchical, relational, graph-based, or other formal models, researchers determine which phenomena are represented, how they can be identified and related, and which operations become computationally possible.

Structured research data do not reproduce their objects in their entirety. They make selected aspects computationally addressable while leaving others implicit or unrepresented. Their modelling therefore embodies decisions about relevant distinctions, relations, absence, ambiguity, provenance, and uncertainty.

A *digital research artefact* is a project-specific documentary or technical form that operationalises research data and associated scholarly decisions for particular research activities. It may be a model, mapping, workflow, pipeline, verification environment, capture tool, edition, interface, or software application. Its defining property is adaptation to a project’s questions and practices, not a particular technical format.

Research data remain the source basis. The project knowledge base records how the project understands and uses them. A promptotype refers to the data state on which its artefact operates; it need not physically contain all research data.

---

## 5. Canonical Method Definition

Promptotyping is an iterative, knowledge-driven method for translating structured research data and documented project knowledge into digital research artefacts through Context Engineering and Agentic Engineering. Its central organising structure is an evolving and versioned project knowledge base of interrelated Markdown documents. AI agents create and revise documentary and technical artefacts from this knowledge base, while implementation findings, assessments, and verification results are written back into it. Responsibility remains with accountable researchers and technical contributors.

### 5.1 Promptotyping iteration

A *Promptotyping iteration* may contain several internal cycles. It does not end when the first implementation runs. It ends when:

- relevant project knowledge is sufficiently explicit and internally coherent for the intended purpose;
- the artefact derived from it satisfies the applicable functional and representational criteria;
- deterministic checks and required expert verification have been completed;
- corrections have been written back into the maintained documents;
- the accepted state can be identified and versioned.

Acceptance is purpose-specific. A state may be accepted for exploration, a proposal demonstrator, an internal workflow, publication, or handover under different criteria.

### 5.2 Promptotype

A *promptotype* is the identifiable and versioned state produced by an accepted Promptotyping iteration. It connects:

- the maintained project knowledge;
- the digital research artefact derived from it;
- the recorded basis for assessment, verification, and acceptance;
- a reference to the research-data state on which the artefact operates.

A promptotype is therefore not only a user interface, generated code, or an unfinished prototype. It is the coherent accepted relation among project knowledge, implementation, verification, and data reference at a particular iteration state.

A project may produce several promptotypes. A later iteration may revise documents, code, checks, artefact, assumptions, or source-data references and yield another promptotype.

### 5.3 Versioning

Versioning is constitutive at the level of identifiable iteration states but is not tied to a platform or numbering convention.

Possible mechanisms include:

- Git tags;
- GitHub or GitLab releases;
- archived repository snapshots;
- Zenodo versions;
- institutional deposits;
- another persistent versioning mechanism.

A commit is usually more fine-grained than a promptotype. A tag, release, or archived snapshot can mark the accepted state of an iteration. Semantic Versioning labels such as `v0.0.1`, `v0.0.2`, or `v0.1.0` are illustrative and optional, not defining features of the method.

### 5.4 Publication and software status

A promptotype can remain internal, be published, support a handover, or initiate another iteration. Publication is not part of the definition of a promptotype. It adds obligations for stable identification, provenance, citation metadata, licensing, accessibility, data availability where possible, and preservation.

A promptotype may become the basis of maintained research software. Once obligations of dependable operation, security, multi-user access, institutional deployment, continuing support, or long-term maintenance arise, Research Software Engineering standards apply regardless of how the first implementation was produced.

---

## 6. Four Recurrent Forms of Work

The method is organised around four recurring forms of work:

- **Preparation:** data, sources, standards, repository, research context, requirements, and existing guidelines become available for inspection and processing.
- **Exploration:** researchers, deterministic scripts, and LLMs investigate what the data affords, what it does not afford, and which assumptions or modelling changes are required. Depth varies by project familiarity and heterogeneity.
- **Distillation:** the current project understanding is expressed in maintained Promptotyping Documents. Distillation is pragmatic modelling, not simple compression.
- **Implementation:** agents translate the documents into transformations, schemas, tests, code, interfaces, and revised knowledge documents within an AI harness.

Figure 1 is the canonical process figure. It should be introduced in prose before it appears and interpreted immediately afterwards. It shows both the inner revision paths and the distinction between Implementation and the accepted promptotype.

![Four recurrent forms of work within one Promptotyping iteration, their write-back paths, the Critical Expert, and the accepted promptotype.](figures/figure-1-promptotyping-iteration.png)

**Canonical Figure 1 description:** The four columns represent recurrent forms of work, not a rigid one-way lifecycle. The Critical Expert reviews project knowledge, verifies the artefact, and accepts the iteration. Implementation can return the work to Distillation, Exploration, or Preparation. The promptotype is shown separately from the artefact because acceptance and versioning apply to the coherent relation among documents, artefact, checks, and data reference.

The strongest return path points to Distillation because implementation often reveals omissions or ambiguities in the maintained specification. The deeper returns indicate revised assumptions or source material. Internal loops do not automatically create a new promptotype; a promptotype is produced only when an iteration state is accepted and identified.

---

## 7. Versioned Promptotypes Across Iterations

Figure 4 is the canonical versioning figure. It explains the outer loop between accepted iterations and should not duplicate the internal phase logic of Figure 1.

![Three versioned promptotypes connected by write-back and renewed iterations.](figures/figure-4-versioned-promptotypes.png)

**Canonical Figure 4 description:** Each accepted iteration yields an identifiable versioned promptotype. Findings from use, implementation, new sources, revised requirements, or improved checks are written back and initiate renewed Promptotyping work. The resulting state may be recorded as another version. The version labels are examples rather than a mandatory semantic-versioning policy.

### Figure wording decisions

- “Accepted versioned state” is correct.
- “Documents + artefact + recorded checks” is a compact visual simplification; the prose definition must add the data-state reference and purpose-specific acceptance.
- “Release the next version” in the graphic is read broadly as recording or releasing a new identifiable state, not necessarily public publication.
- GitHub is an implementation option, not a methodological requirement.

No third figure is currently required for the lifecycle from promptotype to publication or Research Software Engineering. That relation can remain textual unless it becomes a larger independent argument.

---

## 8. Genesis Before Section 2.1

The historical genesis before Section 2.1 remains substantially unchanged because the new promptotype definition is a consolidated methodological distinction rather than a claim that every early project already used explicit version tags.

The narrative retains these lines:

1. early use of GPT-4 with Advanced Data Analysis for Python analyses and visualisations from structured research data;
2. the FORGE work on converting Hugo Schuchardt correspondence into TEI XML;
3. the mapping table as an early **externalisation** of transformation rules;
4. the psychology workflow in which user stories mediated between questions, data, and visual implementation;
5. Semantic Markdown as **selection and condensation** of project knowledge for a different addressee and use;
6. the progressive externalisation of requirements, data descriptions, design decisions, procedures, and verification criteria;
7. the transition to repository-based agents operating across documents, data, code, tools, and running artefacts;
8. the emergence of a maintained project knowledge base with write-back.

Do not project the complete current method backwards into the 2023 cases. The early cases are evidential stages in the genesis, not already complete implementations of the 2026 definition.

---

## 9. Promptotyping Documents

A *Promptotyping Document* is a Markdown document within the project knowledge base. It represents selected knowledge about research data, domain context, requirements, design, process, agent behaviour, or verification in a form that human contributors can inspect and maintain and agents can use as context.

Markdown is practical rather than epistemically privileged. It is readable without specialised software, versionable, processable by current agents, and sufficiently structured for headings, lists, tables, examples, metadata, and cross-references.

### 9.1 Core document functions

- `data.md`: structure, semantics, formats, provenance, idiosyncrasies, gaps, uncertainty, examples, mappings, and warnings.
- `requirements.md`: user stories, functional and non-functional requirements, acceptance criteria.
- `design.md`: interface, interaction, visualisation, uncertainty, missingness, hierarchy, comparison, and provenance decisions.
- `journal.md`: sessions, attempts, failures, model and tool use, decisions, unresolved questions, and handovers.
- action documents such as `CLAUDE.md` or `AGENTS.md`: technology baseline, tests, file boundaries, permissions, workflows, conventions, and documentation behaviour.

Names are not constitutive. Small projects may combine functions; complex projects may split them.

### 9.2 Document types

- **Declarative Documents:** what is currently understood about sources, data, requirements, design, mapping, and verification.
- **Process Documents:** how the work proceeded and why decisions were taken.
- **Action Documents:** how agents should act.

The typology has a diagnostic function. Factual or conceptual errors point first to the declarative layer; workflow or technology violations to the action layer; unclear rationale to the process layer.

### 9.3 Curated and generated documents

Curated documents contain judgements maintained by accountable contributors, even when an LLM assists with drafting. Generated documents are deterministically rendered from source data by a named script or command and are overwritten by the next execution. Generated corpus reports can make large datasets available to agents in compact, refreshable form.

### 9.4 Completion criterion

A new agent instance, supplied with the relevant knowledge base and access to the data, should be able to understand the project’s current logic and continue the work without undocumented oral explanation. This criterion exposes omissions; it does not guarantee completeness.

---

## 10. Validation, Agentic Review, and Verification

The checking architecture belongs in Section 2.4 and has one canonical home.

- **Deterministic validation:** formal rules, schemas, constraints, tests, linters, and builds decide whether specified conditions are met.
- **Agentic review:** an agent compares outputs with sources, rules, requirements, or a running artefact and reports results. It extends coverage but never authorises.
- **Critical Expert verification:** accountable domain judgement determines whether representation, interpretation, context, and design are adequate.
- **Acceptance testing:** can establish conformance to stated criteria but cannot establish that the criteria adequately represent scholarly practice.

### Conversion principle

Verified decisions can be converted into deterministic validation once their rules are formalised. The conversion never runs in the opposite direction. Passed checks do not establish scholarly adequacy.

### External domain-specific support: Sabrina Strutz

Strutz’s multidimensional framework for evaluating LLM-generated TEI encodings provides an external example compatible with this architecture. It distinguishes:

- syntactic validity;
- source fidelity;
- schema compliance;
- structural fidelity;
- semantic recognition.

Parsing and schema validation are deterministic. Textual, structural, and semantic comparisons produce assessment evidence. Because TEI permits several potentially defensible encodings, divergence from a reference document may still require expert verification. The framework should be cited in Section 2.4, not treated as general proof of Promptotyping.

Core references:

- Strutz 2026, “A Multi-Dimensional Evaluation Framework for Assessing LLM Performance in TEI Encoding”.
- Strutz 2025, *Hammer-Purgstall Correspondence TEI Evaluation Dataset*.

The broader Strutz research line on editorial interventions and CMIF metadata extraction remains useful for later case discussion but is not required for the compact verification paragraph.

---

## 11. Epistemic and Methodological Implications

### 11.1 Artefacts as scholarly arguments

Generated artefacts embody claims through selection, aggregation, directionality, categorisation, hierarchy, uncertainty, and visual convention. A design document turns model defaults into attributable project decisions. Documents and artefact can therefore be criticised together.

### 11.2 Semantic explicitness and context

Explicit semantics changes rather than eliminates contextualisation. Standards and ontologies can carry structural and terminological commitments but do not state the complete research question, empirical distribution, deliberate absence, or reliability of each observation.

Retain the compact distinction:

> The LLM reads about the data and writes code that reads the data.

The sentence is derived once in Section 2.3 and recalled, not re-derived, in Section 3.2.

### 11.3 Documents as conceptual models

Promptotyping Documents represent, abbreviate, and pragmatically reorganise project knowledge. They are not ontologies and support no formal inference, automated consistency checking, or reasoner-style validation. Their residual ambiguity permits negotiation among scholarly and technical contributors and explains why verification remains necessary.

### 11.4 Amplification and distributed judgement

Promptotyping amplifies the range, continuity, and reusability of existing competence. It does not replace missing domain knowledge or technical judgement.

Distinguish:

- **scholarly judgement:** source representation, research question, interpretation, contextualisation, acceptance;
- **agentic-engineering judgement:** task decomposition, tools, tests, permissions, workflow, and actionable correction.

These judgements may be combined in one hybrid practitioner or distributed across contributors. The knowledge base mediates between them.

### 11.5 Acceptance and publication

Iteration acceptance, publication, and transition to maintained software are distinct status changes.

- acceptance produces a promptotype;
- publication creates scholarly-record obligations;
- maintained software creates operational and organisational obligations.

### 11.6 Reconstructability

Reconstructability means tracing an accepted promptotype through its documents, data reference, code, decisions, process record, models, tools, checks, and acceptance basis. It does not mean regenerating identical code from the same prompts. Version tags and archived releases can identify promptotypes.

---

## 12. Practice Chapter

Chapter 4 combines technical form, interface typology, inventory, worked cases, teaching observations, and cross-case observations.

### 12.1 Static artefacts

Self-contained static web artefacts remain a preferred default where the research purpose does not require server-side processing or shared state. Their value lies in inspectability, limited infrastructure, proportionate dependencies, and ease of publication. This is a recurrent technical tendency, not a defining condition of Promptotyping.

Published artefacts **should** include a provenance declaration identifying the promptotype, knowledge base, data state, models, tools, and verification procedures. Do not claim that every historical project already contains such a declaration until repository verification is complete.

### 12.2 Interface typology

Four recurrent types are currently stable:

- Verification Interfaces;
- Exploration Interfaces;
- Edition Interfaces;
- Capture Interfaces.

Audit Interfaces remain a candidate extension represented by one case. Present them as provisional rather than equally established.

### 12.3 Project inventory

The inventory demonstrates breadth within the author’s practice. It does not establish efficacy. teiCrafter remains outside the manuscript inventory until its current repository state, data basis, interface type, and relation to the Promptotyping template convention are verified.

### 12.4 Worked-case selection

The worked cases should be selected because they provide well-documented examples of recurrent epistemic functions while differing in data, maturity, and distribution of scholarly and technical judgement. The current set is ZBZ, CorrespExplorer, Notker, and M³GIM.

### 12.5 Cross-case claims

Safe qualitative observations include:

- convergence on static frontend architectures;
- more differentiated functions in projects with richer domain and process documentation;
- recurrent write-back from implementation into documents;
- prospective use of promptotypes during modelling, proposal development, and data capture;
- survival bias towards projects that reached a functional state.

Do not convert these observations into measured causal relationships.

---

## 13. Limits and Evaluation Priorities

The paper must state clearly:

- single-practitioner development dominates the evidence;
- there is no control condition or common evaluation protocol;
- failed and abandoned attempts were not systematically recorded;
- model capability changed during the study period;
- teaching demonstrates communicability in bounded settings, not independent long-term use;
- access to frontier systems and technical literacy may produce asymmetric amplification;
- transfer beyond Digital Humanities remains a hypothesis.

### Evaluation programme

Future work should distinguish three objects:

**Knowledge-base quality**

- task adequacy;
- internal coherence;
- inspectability;
- freshness;
- explicit unresolved questions;
- ability of a new agent or collaborator to continue the work.

**Promptotype and artefact quality**

- functional conformance;
- data and source fidelity;
- representational adequacy;
- usability for the intended scholarly activity;
- verifiability;
- reconstructability;
- handover and maintenance readiness.

**Method quality**

- distribution of human and agent work;
- intervention frequency and depth;
- error types and correction loops;
- dependence on model and harness;
- independent continuation by third parties;
- comparison with alternative development practices.

---

## 14. Terminology Authority

| Term | Canonical use |
| --- | --- |
| Promptotyping | The full knowledge-driven method |
| Promptotyping iteration | Internal cycles culminating in an accepted versioned state |
| promptotype | Identifiable versioned state produced by an accepted iteration |
| project knowledge base | Persistent maintained source of task-specific context |
| Promptotyping Document | Markdown document serving a defined knowledge function |
| research data | Structured scholarly source basis processed by explicit operations |
| digital research artefact | Documentary or technical operational form adapted to a project |
| externalisation | Making previously implicit knowledge explicit and inspectable |
| condensation | Selecting and reorganising extensive knowledge for a task and addressee |
| assessment | Producing evidence against a mapping, rule, source, or reference |
| deterministic validation | Formal rule decides whether a condition is met |
| agentic review | Agent-assisted comparison or testing that never authorises |
| Critical Expert verification | Accountable expert judgement required for acceptance |
| acceptance | Purpose-specific authorisation of an iteration state |
| publication | Release into a scholarly record with additional obligations |
| reconstructability | Ability to trace an accepted state through data, documents, code, decisions, and provenance |

Capitalisation:

- *Promptotyping* capitalised as method name;
- *Promptotyping Documents* capitalised as defined document class;
- *promptotype* lower-case in running prose unless beginning a sentence;
- Context Engineering, Agentic Engineering, Scholar-Centred Design, Critical Expert, and AI harness according to established manuscript usage.

---

## 15. Citation and Footnote Practice

- Literature supports conceptual and factual claims through the author–year system.
- Footnotes document the method’s own genesis, presentations, project records, repositories, and persistent research objects.
- Self-citation density is justified where the paper reconstructs its own documented development, but provenance claims must remain clearly separated from external theoretical support.
- No source should remain cited merely because it appeared in an earlier draft.
- Every 2025–2026 source and every repository-specific claim requires verification before final submission.
- The Doctoral Congress presentation remains transparently cited as author-retained material until a persistent public record is deposited.

New required references:

- Strutz 2025;
- Strutz 2026.

Potential references must be removed if they remain orphaned or do not support the precise sentence attached to them.

---

## 16. Redundancy Rules

Keep one primary home for each argument:

- method definition and promptotype: Section 2.1;
- four forms of work and Figure 1: Section 2.1;
- document architecture: Section 2.3;
- checking architecture and Strutz comparison: Section 2.4;
- versioned promptotypes and Figure 4: Section 2.4;
- artefacts as arguments: Section 3.1;
- source/context distinction: Section 3.2;
- documents as conceptual models: Section 3.3;
- distributed judgement and amplification: Section 3.4;
- acceptance/publication distinction: Section 3.5;
- reconstructability and version identifiers: Section 3.6;
- static technical form and handover conditions: Section 4.1;
- empirical limits and evaluation priorities: Chapter 5.

The Conclusion may summarise these points in one sentence each but must not redevelop them.

---

## 17. Active Work Block

1. Author review and acceptance of the revised promptotype definition and the two integrated figures.
2. Decide whether Figure 4’s wording “release the next version” remains or is later changed to “record the next version”; the prose currently prevents a publication-only reading.
3. Deposit the Doctoral Congress presentation and replace the provisional footnote wording with a persistent identifier.
4. Verify all 2025–2026 publication details and each citation anchor against the cited work.
5. Verify project repositories, especially provenance declarations, Notker workflow details, and teiCrafter’s current state.
6. Decide whether Audit Interfaces remain a candidate extension or are promoted after additional evidence.
7. Perform a final transition and redundancy pass after author acceptance.
8. Archive restructuring and mechanical repair records outside this active document.

A manuscript section is accepted only when:

- its conceptual and terminological decisions match this document;
- its citations and footnotes have been verified;
- no unresolved placeholder remains;
- figures are introduced and interpreted in prose rather than inserted as detached illustrations;
- the author has accepted the prose as the current manuscript version.

---

## 18. Maintenance Rule

After each revision session:

1. update the status and revision boundary;
2. incorporate accepted conceptual changes immediately;
3. remove completed tasks from the Active Work Block;
4. move repair history and superseded formulations to an archive;
5. keep one current terminology authority;
6. verify that figures, captions, and prose express the same method;
7. update the citation map when new evidence enters;
8. preserve strong accepted passages unless a documented conceptual change requires revision;
9. avoid parallel manuscript copies except temporary exact-wording anchors;
10. keep this document concise enough to read before work begins.
