# Promptotyping Paper: Canonical Knowledge Document

**Updated:** 29 July 2026, night, after intake of the operator's integrated final version (`Promptotyping_Paper_Final_Integrated_2026-07-29.md`) as `knowledge/paper-draft.md`.

**Status:** Canonical working specification for the final manuscript candidate. The working text is `knowledge/paper-draft.md`, since the night intake with six embedded figures whose image files are adopted under `assets/figures/` (register in `assets/figures/PROVENANCE.md`). The site keeps rendering `knowledge/paper.md` until chapter-wise author acceptance is complete, then the files are swapped.

**Function:** Governs the paper's central argument, terminology, method structure, chapter boundaries, evidence handling, repository interpretation, and final quality assurance.

## Authority and Maintenance

The latest accepted manuscript wording governs passages already revised. This document governs unresolved and cross-cutting decisions. Update it whenever a manuscript revision changes the canonical argument, terminology, architecture, evidence base, or quality-control rules.

This document is not a chronological session log. Process history belongs in the journal. Only current governing knowledge remains here.

---

# 1. Paper Identity

## 1.1 Title

**Promptotyping. Translating Research Data into Research Artefacts through Context Engineering and Agentic Engineering**

## 1.2 Object of the paper

The paper presents **Promptotyping** as an iterative, knowledge-driven method for translating structured research data and documented project knowledge into project-specific digital research artefacts through Context Engineering and Agentic Engineering.

Its central organising structure is an evolving, inspectable, and versioned project knowledge base maintained through interrelated Markdown documents. LLM-based AI agents work from task-specific context selected from this knowledge base. Findings from implementation, testing, assessment, review, and verification are written back when they change the maintained understanding of the project.

Each accepted iteration yields an identifiable and versioned **promptotype** that connects:

- maintained project knowledge;
- the resulting digital research artefact;
- the referenced research-data state;
- the documented grounds of acceptance.

Accountable researchers and technical contributors remain responsible for the scholarly and technical judgements through which a promptotype is specified, verified, and accepted.

## 1.3 Type of contribution

The contribution is **conceptual and methodological**. The paper:

- defines Promptotyping, Promptotyping Documents, Promptotyping iterations, and promptotypes;
- explains the relation among Scholar-Centred Design, Context Engineering, Agentic Engineering, AI harnesses, and Critical Expert judgement;
- establishes the project knowledge base as the persistent reference from which implementation proceeds;
- defines Preparation, Exploration, Distillation, Implementation, write-back, verification, acceptance, and version identification;
- distinguishes deterministic validation, agentic review, Critical Expert verification, and acceptance;
- analyses digital research artefacts as operational scholarly arguments;
- consolidates recurrent document functions, artefact forms, and project cases;
- establishes the method's empirical scope, conditions of applicability, limitations, and evaluation priorities.

## 1.4 Explicit non-claims

The paper does **not** claim that Promptotyping is generally:

- faster;
- cheaper;
- easier;
- more efficient;
- more reliable;
- more sustainable;
- superior to conventional development or Research Software Engineering.

The principal claim concerns **implementation capacity**, not comparative performance.

The project inventory establishes feasibility and recurring patterns within one practitioner's documented work. It does not establish general efficacy, independent transferability, or disciplinary superiority.

---

# 2. Canonical Argument

## 2.1 Problem

Scholarly work with digital research data proceeds through software. Software can operate only on distinctions represented in the data and supported by its own structures and functions.

Generic software must serve heterogeneous projects. It can therefore operationalise project data only through the categories, relations, formats, and operations supported by its own data model. Mapping project-specific research data into those structures requires both scholarly interpretation and technical implementation.

A correct mapping does not establish that the target software adequately supports the project's semantics, uncertainty, research questions, or scholarly practices. Project-specific distinctions may be flattened, omitted, or rendered only indirectly.

## 2.2 Reversal of adaptation

LLM-based implementation increasingly permits a reversal in the primary direction of adaptation:

- instead of adapting research data principally to the categories of generic software;
- a project-specific digital research artefact can be adapted to the structures, semantics, uncertainty, and scholarly requirements of the project.

This reversal defines the practical opportunity addressed by Promptotyping.

## 2.3 Why generative implementation alone is insufficient

Generative implementation is underdetermined. The same data and requirement can support several technically functioning but epistemically different artefacts. Generated code can reproduce undocumented assumptions, conventional representations, model defaults, or incorrect interpretations.

A running artefact is therefore not evidence that the scholarly problem has been represented adequately.

Generative implementation becomes methodically responsible only where:

- project knowledge is externalised, maintained, inspectable, and versioned;
- agents work from that knowledge rather than from transient prompts alone;
- working context remains selective and task-specific;
- validation, review, verification, and acceptance are differentiated;
- implementation findings are written back into maintained project knowledge;
- an accountable person or group explicitly accepts an identifiable state for a defined purpose.

## 2.4 Primary contribution claim

Promptotyping enables a class of project-specific digital research artefacts to be developed within the research process where researchers and small projects could previously specify such artefacts but lacked the implementation capacity to realise them.

The claim concerns which artefacts can become practically implementable under suitable conditions. It does not imply a general comparative advantage in cost, speed, quality, reliability, or long-term sustainability.

## 2.5 Strongest formulation of the thesis

Promptotyping makes semi-formal scholarly project knowledge operational through agentic implementation. Because this translation remains underdetermined, maintained documentation, systematic write-back, differentiated checking, and accountable acceptance become constitutive parts of the method.

---

# 3. Conceptual Architecture

The paper's terminology operates on three levels.

## 3.1 Foundations and operational environment

- Scholar-Centred Design
- Context Engineering
- Agentic Engineering
- AI harness

## 3.2 Recurrent forms of work

- Preparation
- Exploration
- Distillation
- Implementation
- write-back

## 3.3 Responsibility and accepted result

- Critical Expert
- deterministic validation
- agentic review
- Critical Expert verification
- acceptance
- promptotype

This hierarchy should remain visible in the manuscript. Do not present all terms as equivalent components of one undifferentiated framework.

---

# 4. Canonical Definitions

## 4.1 Research data

Within the paper, **research data** means structured representations that provide the scholarly basis of a project. They selectively make aspects of sources, observations, or research objects computationally addressable through tabular, hierarchical, relational, graph-based, or comparable models.

Research data embody decisions about:

- identification;
- categorisation;
- relationships;
- provenance;
- uncertainty;
- missingness;
- evidential qualification.

Software operates on these represented distinctions rather than directly on research objects.

## 4.2 Digital research artefact

A **digital research artefact** is a project-specific documentary or technical form that operationalises research data and associated scholarly decisions for a research activity.

It may be:

- a project document;
- a conceptual model;
- a transformation;
- a workflow;
- a processing pipeline;
- a capture environment;
- an analytical or verification interface;
- a scholarly edition;
- a publication interface;
- a software application.

Its defining property is adaptation to project-specific questions and practices, not its technical format.

A digital research artefact is not a neutral presentation layer. Its selections, operations, aggregations, interfaces, and representations embody scholarly and technical claims.

## 4.3 Project knowledge

**Project knowledge** is the maintained understanding required to interpret, implement, assess, and continue the project. It includes:

- research data and sources;
- domain concepts and contextual information;
- scholarly purposes and requirements;
- assumptions, uncertainty, and known absences;
- design and implementation decisions;
- procedures and constraints;
- unresolved questions;
- verification and acceptance criteria;
- findings that alter the project's current understanding.

Project knowledge is not identical with the research data. The data remain the project's source basis. Project knowledge records how those data are understood and used.

## 4.4 Project knowledge base

The **project knowledge base** is the evolving, inspectable, and versioned collection of documents in which project knowledge is maintained.

It is:

- the persistent reference from which task-specific working context is selected;
- available across sessions, models, agents, and contributors;
- revisable when implementation or verification changes the maintained understanding;
- inspectable by accountable scholarly and technical contributors.

It is not:

- identical with one context window;
- a substitute for the full research data;
- an autonomous source of scholarly authority;
- guaranteed to be complete merely because it is documented.

The knowledge base governs implementation only through the accountable engagement of contributors who inspect, question, revise, and accept its contents.

## 4.5 Working context

**Working context** is the task-specific selection of project knowledge supplied to an agent for a particular activity.

The working context may include selected documents, examples, constraints, tool instructions, current findings, and relevant data summaries. It is derived from the project knowledge base but remains narrower than it.

Context Engineering does not mean loading all available material into a context window.

## 4.6 Promptotyping Document

A **Promptotyping Document** is a Markdown document within the project knowledge base that fulfils a defined knowledge function for human contributors and LLM-based agents.

Promptotyping Documents are dually readable but need not address both audiences in the same way. A scholar reads them to assess whether the project has been represented adequately. An agent reads them to determine how to act.

Markdown is used for practical reasons:

- direct human readability;
- versionability;
- compatibility with current coding agents;
- support for headings, lists, tables, examples, metadata, and cross-references;
- low conversion overhead.

Markdown is not epistemically privileged and provides no formal guarantee of correctness.

### Functional classes

**Declarative Documents** state what is currently understood to be the case. Examples include:

- `data.md`;
- `requirements.md`;
- `design.md`;
- `verification.md`;
- editorial guidelines;
- mapping rules;
- pipeline descriptions.

**Process Documents** record how the work proceeded, which findings emerged, and why decisions were made. Examples include:

- `journal.md`;
- `decisions.md`;
- `learnings.md`;
- handover records.

**Action Documents** state how agents and contributors should act. Examples include:

- `CLAUDE.md`;
- `AGENTS.md`;
- `commands.md`;
- `workflows.md`;
- `prompts.md`;
- repository-specific agent instructions.

The categories are functional rather than exclusive. A document may have one dominant function while containing elements of another.

### Diagnostic use

- If an output is factually or conceptually wrong, inspect the declarative layer.
- If it violates a required workflow, format, tool, technology, or behavioural rule, inspect the action layer.
- If the rationale is unclear or inconsistent, inspect the process layer.

Corrections should update the knowledge function that failed rather than accumulate only as local code patches.

## 4.7 Curated and generated documents

The distinction between **curated** and **generated** concerns provenance rather than knowledge function.

A curated document contains judgements maintained by accountable contributors, even when an LLM assisted with drafting or restructuring.

A generated document is deterministically rendered from source material by a named script or command and will be overwritten by the next execution of that process.

Generated documents are useful for:

- corpus inventories;
- schema-versus-corpus comparisons;
- controlled-value reports;
- anomaly reports;
- usage statistics;
- validation summaries;
- quality and coverage reports.

Generated documents must be clearly marked and must not be edited manually.

## 4.8 Context Engineering

**Context Engineering** is the systematic organisation, maintenance, selection, and provision of the information an LLM-based system requires for its work.

It extends Prompt Engineering from individual inputs to the wider informational environment in which tasks are performed.

Within Promptotyping, Context Engineering:

- maintains the project knowledge base;
- separates stable and volatile knowledge;
- selects task-relevant working context;
- refreshes context when project knowledge changes;
- avoids treating context accumulation as a substitute for context design;
- preserves traceability between descriptions, decisions, implementation, and verification.

Distillation is its principal documentary operation, but Context Engineering continues throughout Preparation, Exploration, Implementation, and write-back.

## 4.9 Agentic Engineering

**Agentic Engineering** is used as an analytical term for the deliberate organisation of extended, tool-mediated work performed with LLM-based AI agents.

It concerns:

- task decomposition;
- tool access;
- permissions;
- intermediate feedback;
- continuation across several actions;
- testing and review;
- expert intervention;
- handover;
- write-back;
- coordination among agent instances where necessary.

The term is broader than agentic software engineering because Promptotyping agents may work on:

- data descriptions;
- requirements;
- designs;
- mappings;
- process records;
- verification concepts;
- transformations;
- tests;
- code;
- running artefacts.

The paper does not claim that Agentic Engineering is already a fully stabilised discipline.

## 4.10 AI harness

An **AI harness** is the operational environment through which an AI agent:

- receives context;
- accesses project resources;
- uses tools;
- executes actions;
- maintains task state;
- obtains feedback;
- inspects running artefacts.

The harness provides technical conditions. It does not decide:

- which project knowledge is relevant;
- how the scholarly problem should be represented;
- how the work should be organised;
- whether a result is scholarly adequate;
- whether a state should be accepted.

Model, harness, and environment should be treated as experimental and historical variables rather than neutral infrastructure.

## 4.11 Scholar-Centred Design

**Scholar-Centred Design** establishes the scholarly purposes, requirements, and criteria by which a project-specific digital research artefact is assessed.

It combines requirements engineering with sustained engagement with scholars, source material, research practices, and domain models. It does not merely elicit preferences for a predefined system. Modelling and prototyping may cause researchers to articulate and revise their understanding of sources, data, and requirements.

Within Promptotyping:

- Scholar-Centred Design establishes the scholarly problem and evaluation criteria;
- Context Engineering maintains the knowledge required for the work;
- Agentic Engineering organises how agents act on that knowledge;
- the AI harness provides the operational environment;
- the Critical Expert retains responsibility for judgement and acceptance.

## 4.12 Critical Expert

The **Critical Expert** is an accountable human role responsible for the judgements through which project knowledge and artefacts are specified, challenged, verified, and accepted.

The role may be distributed across several contributors. It does not require one person to possess all relevant expertise.

Relevant responsibilities may be divided among:

- domain researchers;
- editors;
- scholar-developers;
- developers;
- Research Software Engineers;
- data stewards;
- other qualified contributors.

Two broad forms of judgement must remain distinguishable:

**Scholarly judgement** concerns whether the artefact:

- represents the sources appropriately;
- addresses the research question;
- handles uncertainty and provenance adequately;
- supports warranted interpretation;
- communicates necessary qualifications.

**Agentic-engineering judgement** concerns:

- task decomposition;
- tool and harness selection;
- permissions;
- tests and checkpoints;
- diagnosis of failures;
- formulation of actionable corrections;
- technical handover.

Human presence alone is insufficient. The relevant person or group must be competent to assess the claim or artefact at issue.

## 4.13 Promptotyping iteration

A **Promptotyping iteration** is a bounded cycle in which project knowledge and a digital research artefact are brought into a coherent relation for a defined purpose.

One iteration may contain several internal cycles of:

- Distillation;
- Implementation;
- testing;
- assessment;
- agentic review;
- Critical Expert verification;
- correction;
- write-back.

The iteration ends only when the maintained project knowledge, artefact, referenced research-data state, and documented grounds of acceptance form a coherent and identifiable state.

## 4.14 Promptotype

A **promptotype** is the identifiable state produced by an accepted Promptotyping iteration.

It connects:

- maintained project knowledge;
- the digital research artefact derived from it;
- the referenced research-data state;
- the documented grounds of acceptance.

A functioning interface, generated codebase, prompt sequence, notebook, repository, or Custom GPT alone is not a promptotype.

Acceptance closes an iteration for a defined purpose. It does not imply:

- final truth;
- completion of the research project;
- publication;
- long-term maintainability;
- institutional readiness;
- suitability for purposes outside the acceptance decision.

## 4.15 Canonical terminology for acceptance

Use **documented grounds of acceptance** throughout the Abstract, definition, method, figures, and Conclusion.

Use narrower alternatives only where a specific record is being described, such as:

- acceptance note;
- decision record;
- dated journal entry;
- verification document.

Do not alternate casually among:

- basis of acceptance;
- verification record;
- recorded checks;
- acceptance record;
- acceptance evidence.

---

# 5. Recurrent Forms of Work

The method is organised around four recurrent forms of work. They are analytically distinct but do not constitute a rigid linear sequence.

## 5.1 Preparation

Preparation establishes the material, conceptual, technical, and institutional basis of the project.

It includes:

- research data and sources;
- standards, schemas, and formal models;
- source and corpus descriptions;
- research context;
- scholarly purposes and initial requirements;
- editorial, annotation, and mapping guidelines;
- access conditions;
- legal, ethical, contractual, and institutional constraints;
- repository and project-environment setup.

Requirements Engineering belongs here because the artefact cannot be specified independently of the scholarly activities it should support.

Preparation is sufficient when:

- relevant data, sources, and documentation are accessible;
- the project environment exists;
- the current purpose and initial assumptions are explicit enough to support systematic exploration;
- later changes can be identified as revisions rather than absorbed invisibly into implementation.

Preparation does not require all research questions to be fixed permanently.

## 5.2 Exploration

Exploration examines the relation between the research purpose and the available material.

Its central questions are:

- What can the data support?
- What can they not support?
- Which assumptions are currently being made?
- Which additional modelling or contextualisation is required?
- Which representational alternatives remain plausible?
- Where must authoritative checking enter the workflow?

Exploration may combine:

- direct scholarly inspection;
- deterministic corpus profiling;
- schema-versus-data comparison;
- anomaly and value-distribution reports;
- generated mappings or interface proposals;
- model experiments;
- comparison of alternative representations.

LLM-generated proposals are hypotheses about the relation between data and inquiry. They are not findings that can be accepted without domain judgement.

The depth of Exploration varies:

- it may be brief where the researcher already knows the data and requirements;
- it may be substantial for unfamiliar, heterogeneous, or weakly documented material;
- it may recur during Implementation when the artefact reveals previously unnoticed properties or limits.

Exploration ends with a documented account of:

- feasibility;
- limitations;
- relevant alternatives;
- assumptions;
- unresolved questions.

## 5.3 Distillation

Distillation turns the current project understanding into Promptotyping Documents.

It is not simple compression. It is **pragmatic modelling**: a task-specific representation preserves the distinctions required for a particular use while leaving the fuller source material and formal data model intact.

Canonical arrangement:

> The LLM reads about the data and writes code that reads the data.

The research data remain available as the project's source basis. The agent receives a selected account of:

- structure;
- semantics;
- provenance;
- exceptions;
- uncertainty;
- requirements;
- design decisions;
- constraints;
- verification criteria;
- current feedback.

Generated code then processes the full data through explicit transformations and operations.

The practical completion criterion is:

> A new agent instance, supplied with the relevant knowledge base and access to project resources, should be able to understand the project's current logic and continue the work without an undocumented oral explanation.

This criterion does not guarantee completeness. It makes omissions visible when the agent cannot act, produces implausible output, or requires knowledge the project has not documented.

## 5.4 Implementation

Implementation makes the maintained project knowledge actionable through an LLM-based agent operating in an AI harness.

Agents may generate or revise:

- project documents;
- models;
- mappings;
- schemas;
- transformations;
- queries;
- tests;
- processing pipelines;
- interfaces;
- software applications;
- verification environments.

The methodologically relevant variable is the amount and variety of work performed between two human interventions. As this span increases, more of the project's intent, constraints, and evaluation criteria must be represented in the maintained knowledge base.

Implementation should proceed through inspectable milestones. Each milestone should remain small enough for the relevant contributor to assess before further dependencies accumulate.

A first implementation pass may prioritise producing a running artefact, but deferred inspection must be completed before the artefact is:

- accepted;
- used as evidence;
- published;
- handed over;
- deployed for supported use.

## 5.5 Write-back

Write-back is the defining return path from Implementation, assessment, review, and verification into maintained project knowledge.

Persistent findings belong in the knowledge base when they concern:

- missing requirements;
- undocumented data characteristics;
- incorrect assumptions;
- representational problems;
- improved design decisions;
- new constraints;
- revised procedures;
- recurrent failure modes;
- verification criteria;
- corrected source material;
- changed research questions.

The depth of return depends on the finding:

- inadequate specification returns to Distillation;
- revised understanding of data returns to Exploration;
- new or corrected source material returns to Preparation.

The frequent return to Distillation reflects the common case in which implementation reveals that the specification is incomplete or ambiguous.

Local code fixes do not complete write-back when the underlying project understanding has changed.

---

# 6. Checking, Verification, and Acceptance

## 6.1 General rule

The paper must distinguish:

- deterministic validation;
- assessment;
- agentic review;
- Critical Expert verification;
- acceptance.

Do not collapse these into a generic category such as checking, quality assurance, or confidence.

## 6.2 Deterministic validation

**Deterministic validation** applies executable rules whose outcomes can be reproduced under the same conditions.

Examples include:

- parsing;
- schema validation;
- tests;
- invariants;
- constraints;
- expected-file checks;
- roundtrip checks;
- coverage checks;
- build integrity;
- reproducible transformations.

An agent may run these checks and act on unambiguous failures.

Deterministic validation establishes only what has been formalised into the rule.

## 6.3 Assessment

**Assessment** is the broader collection of evidence about the quality, behaviour, or adequacy of an output.

It may include:

- test results;
- visual inspection;
- comparisons;
- benchmarks;
- error reports;
- interface walkthroughs;
- source samples;
- user-story checks.

Assessment can inform verification and acceptance but does not itself authorise the state.

## 6.4 Agentic review

**Agentic review** uses an LLM-based agent to compare outputs with:

- sources;
- project documents;
- rules;
- user stories;
- acceptance criteria;
- expected interface behaviour.

Agentic review may extend the coverage of checking and identify plausible failures.

It never authorises. It remains a generative operation and does not become scholarly verification merely because:

- a second model is used;
- several agents agree;
- the output receives a confidence score;
- the review appears systematic.

## 6.5 Critical Expert verification

**Critical Expert verification** applies where adequacy depends on contextual, domain-specific, interpretative, editorial, representational, or technical judgement that cannot be reduced adequately to deterministic rules.

It may concern:

- source fidelity requiring judgement;
- design conformance;
- warranted interpretation;
- uncertainty representation;
- contextualisation;
- adequacy for the research question;
- professional technical judgement.

The Critical Expert determines whether the available evidence supports the relevant claim.

## 6.6 Acceptance

**Acceptance** is the accountable decision that an identifiable state is adequate for a stated purpose under documented criteria and limitations.

Validation, assessment, agentic review, and verification contribute evidence. None automatically constitutes acceptance.

Acceptance must be explicit and attributable. The documented grounds of acceptance should identify:

- intended purpose;
- applicable criteria;
- accepting person or group;
- known limitations;
- version reference;
- referenced research-data state where applicable.

The record may take the form of:

- an acceptance note;
- a dated journal entry;
- a numbered decision record;
- a Verification Document;
- an equivalent project record.

## 6.7 Conversion principle

Expert verification may become deterministic validation when the relevant judgement has been formalised into executable rules.

The conversion does not run in the opposite direction. A deterministic check does not acquire scholarly authority merely because it is automated or repeatedly passed.

## 6.8 Canonical table terminology

Use:

**Table title:** Forms and objects of checking in Promptotyping

**First column:** Object of checking

**Fidelity category:** Source fidelity requiring judgement

Preferred rows:

| Object of checking | Form | What decides | Agent autonomy |
|---|---|---|---|
| Deterministically decidable data fidelity | Validation | Schemas, tests, constraints, builds | Agent may run checks and act on unambiguous failures |
| Source fidelity requiring judgement | Verification | Critical Expert comparing output with sources | Agentic review may assist but remains subordinate |
| Requirement satisfaction | Acceptance testing | Acceptance criteria in the requirements document | Agent may operate the artefact and report results |
| Design conformance | Verification | Critical Expert against the design document | Requires human assessment |
| Interpretation and contextualisation | Verification | Scholarly judgement against sources and research context | Cannot be delegated for final acceptance |

---

# 7. Iteration, Version Identification, and Publication

## 7.1 Iteration boundary

One Promptotyping iteration may contain several internal implementation and correction cycles.

The iteration ends only when:

- project knowledge;
- artefact;
- referenced research-data state;
- documented grounds of acceptance

form a coherent and identifiable state for the intended purpose.

## 7.2 Version identification

A Git tag, release, or archived snapshot is a strong implementation of version identification but is not constitutive of a promptotype.

Acceptable identifiers may include:

- Git tag;
- release;
- archived snapshot;
- commit SHA linked to a dated journal entry;
- version field in frontmatter;
- numbered and dated decision record;
- dated iteration designation.

At minimum, the acceptance decision must contain a durable and unambiguous reference to the accepted state.

The method recommends an explicit release or snapshot where feasible.

## 7.3 Repository audit finding

No Git tags, releases, or archive snapshots were found in the fifteen locally audited repositories.

Actual project practice contains weaker but usable identifiers, including:

- commit SHA plus dated journal entry;
- version fields in document frontmatter;
- numbered and dated decision records;
- dated iteration designations.

The manuscript must not imply that the documented projects systematically used releases if they did not.

## 7.4 Early cases

Early notebooks, Custom GPT workflows, FORGE, and comparable experiments are treated as **precursors** unless the surviving record permits an identifiable accepted iteration state to be reconstructed.

Do not project the complete consolidated method backwards into early experiments.

Earlier cases may document the development of individual operations such as:

- externalisation;
- condensation;
- intermediate specification;
- iterative implementation;
- model-assisted analysis;
- generated interface exploration.

## 7.5 Acceptance and publication

Acceptance and publication are distinct.

Acceptance establishes that a state is adequate for a defined purpose under stated criteria and limitations.

Publication adds further obligations, including:

- public interpretability;
- citation and attribution;
- rights and data governance;
- accessibility;
- documentation;
- preservation;
- maintenance expectations;
- communication of limitations;
- responsibility toward third-party users.

An accepted internal promptotype is not automatically ready for publication.

---

# 8. Epistemic Claims

## 8.1 Research data are modelled representations

Research data do not reproduce research objects in their entirety. They make selected aspects computationally addressable for particular purposes.

Their structure embodies scholarly decisions about:

- what exists as an identifiable unit;
- which categories matter;
- which relations are represented;
- how uncertainty and absence are expressed;
- which distinctions remain implicit or unrepresented.

## 8.2 Artefacts are scholarly arguments

Digital research artefacts operationalise distinctions, selections, assumptions, and design decisions. Their behaviour therefore embodies scholarly and technical claims.

Examples include decisions about:

- which entities become nodes;
- whether an edge is directed;
- how observations are aggregated;
- how uncertainty is visualised;
- whether missing values remain visible;
- which filters and comparisons are available;
- which provenance information accompanies a result.

A functioning artefact is not automatically a scholarly contribution. Its research value lies in what can be learned, argued, examined, and verified through building and using it.

## 8.3 Explicit semantics and the limits of context

Standards, schemas, ontologies, and semantically explicit data can make entities, relations, constraints, provenance, and uncertainty machine-addressable.

They do not determine:

- the project's research question;
- which distinctions should be foregrounded;
- which operations should be supported;
- how results should be presented;
- which absences matter;
- how an artefact should be verified.

Explicit modelling changes the work of contextualisation. It does not eliminate it.

Semantic richness and direct suitability for an LLM context are not the same property. Rich serialisations may be unsuitable as working context even when they are essential as source representations.

## 8.4 Documents as conceptual models

Promptotyping Documents are pragmatic conceptual models and mediating structures.

They represent and abbreviate:

- source structures;
- domain concepts;
- research practices;
- requirements;
- intended operations;
- design decisions;
- verification criteria.

Their semi-formality is deliberate. They support communication and implementation without claiming the formal semantics of an ontology or schema.

Promptotyping Documents do not necessarily support:

- formal inference;
- reasoner-based consistency checking;
- complete machine interpretability;
- automatic validation of every claim.

Their residual ambiguity explains why implementation remains variable and verification remains necessary.

## 8.5 Externalisation is incomplete

The knowledge base contains only the part of scholarly and technical understanding that has been articulated and maintained.

Relevant competence may remain tacit, including:

- familiarity with exceptional sources;
- awareness of disciplinary debates;
- recognition of implausible absences;
- sensitivity to material or historical context;
- practical knowledge of tools and workflows.

The limits of externalisation become visible when implementation produces a question or failure for which the documents contain no adequate answer.

## 8.6 Amplification and authority

Promptotyping amplifies scholarly and technical competence and redistributes implementation work.

Agents may:

- generate;
- transform;
- test;
- compare;
- propose;
- revise;
- operate interfaces;
- report findings.

Accountable contributors remain responsible for the judgements through which project knowledge and artefacts are:

- specified;
- contextualised;
- verified;
- accepted;
- published.

Promptotyping does not transfer scholarly authority to AI agents.

## 8.7 Capacity rather than speed

Avoid unsupported claims that Promptotyping is faster, cheaper, easier, or more efficient.

The defensible claim is:

> Promptotyping changes which project-specific digital research artefacts can be realised within a research process under suitable conditions.

---

# 9. Relation to Adjacent Practices

## 9.1 Spec-Driven Development

Promptotyping belongs to the wider movement toward persistent specifications that govern agentic implementation.

Its specifications differ from conventional software specifications because they also describe:

- source material that precedes the system;
- data semantics;
- provenance;
- uncertainty;
- scholarly purposes;
- representational commitments;
- verification criteria.

The researcher is not only a stakeholder requesting functionality. They hold or contribute epistemic authority over statements about the research material.

## 9.2 Vibe Coding

Promptotyping shares with Vibe Coding the possibility of rapidly generating functional code from natural-language instructions.

It differs through:

- preparation of data and context;
- maintained specifications;
- versioned process memory;
- differentiated checking;
- systematic write-back;
- explicit acceptance.

A provisional interface may be generated quickly during Exploration. It does not become a promptotype merely because it runs.

## 9.3 Research Software Engineering

Promptotyping does not replace Research Software Engineering.

The RSE boundary is defined by obligations rather than by a specific technology or codebase.

Research Software Engineering becomes essential where artefacts require:

- durable maintenance;
- security;
- authentication;
- multi-user state;
- institutional integration;
- operational reliability;
- service commitments;
- monitored deployment;
- supported third-party use.

Promptotyping and RSE may overlap.

A promptotype may be professionally engineered. A project knowledge base may support handover to human developers independently of generative implementation.

---

# 10. Project Cases and Evidence Policy

## 10.1 Role of the cases

Worked cases should be selected for distinct methodological and epistemic functions rather than equal project representation.

Current principal cases:

- **ZBZ OCR/TEI:** verification, authority, and the abolition of unauthorised agent screening;
- **CorrespExplorer:** Exploration and selection among generated views;
- **Notker:** edition, proposal-stage artefact, and distributed scholarly and agentic-engineering judgement;
- **M³GIM:** Exploration, capture, modelling, deterministic checks, and manual approvals;
- **Stefan Zweig Digital HTR:** production-scale use of source typology, metadata-controlled context, transcription, and verification architecture;
- **coOCR/HTR:** bounded verification workbench and hybrid checking (added with the integrated version of 2026-07-29);
- **teiCrafter:** bounded TEI generation and correction workbench; the current tool remains historically distinct from the earlier Custom GPT precursor and the two must not be merged into one project history.

The Strutz case is an external domain-specific comparison for evaluation. It is not a Promptotyping project led by the author.

## 10.2 Analytical use of each case

Each worked case should establish at least one of the following:

- a methodological problem;
- a relevant Promptotyping Document function;
- a finding produced through implementation;
- a write-back path;
- a verification boundary;
- a distribution of scholarly and technical judgement;
- an identifiable or reconstructable promptotype.

Avoid project description that does not contribute to one of these functions.

## 10.3 Recommended cross-case structure

Where possible, compare cases through:

| Case | Artefact | Critical documents | Implementation finding | Write-back | Verification authority | Promptotype status |
|---|---|---|---|---|---|---|

This table should function analytically rather than as a project inventory alone.

## 10.4 Inventory claim

The inventory demonstrates breadth within the author's documented practice across heterogeneous data types and artefact functions.

It does not establish:

- comparative efficacy;
- disciplinary transfer;
- independent use;
- general reliability;
- superiority over alternative workflows.

teiCrafter remains outside the manuscript inventory (Table 1); its verified test structures enter only the cross-case observations until its data basis, interface type, and relation to the template convention are established.

## 10.5 Promptotype-status classification

Classify each project as one of:

- documented promptotype;
- retrospectively reconstructable promptotype;
- precursor;
- insufficiently documented.

Apply the canonical definition of promptotype and the version-identification rule consistently.

## 10.6 Repository evidence rule

Repository-wide claims must not be inferred from:

- one repository;
- one directory convention;
- one filename pattern;
- one keyword search;
- an empty search result;
- a configured remote.

Negative findings must state the inspection procedure.

Preferred formulation:

> No matching artefact was found under the applied inspection procedure.

Do not state that an artefact does not exist unless the repository was inspected comprehensively enough to support that conclusion.

## 10.7 Test reconstruction

Do not infer test coverage from filenames alone.

Begin from runner entry points and operational evidence:

- `package.json` scripts;
- `pytest.ini` and comparable configurations;
- dedicated runners such as `run_all.mjs`;
- continuous-integration workflows;
- browser and acceptance checklists;
- project-specific terms such as `proof`, `invariant`, `fidelity`, `audit`, and `roundtrip`;
- commands documented in action or process documents.

## 10.8 Provenance levels

Distinguish:

**Artefact-level provenance**  
Declarations in the delivered site, interface, export, or publication.

**Document-level provenance**  
Model or tool declarations in project documents, such as `generated-with:` in frontmatter.

Document-level declaration is comprehensive in six audited repositories. Artefact-level declaration is less consistent.

Do not transfer evidence from one provenance level to the other.

## 10.9 Corrected repository findings

The canonical repository findings are:

- Branching and merging vary across projects.
- Seventeen merge commits were measured across eight of fifteen repositories.
- The earlier claim of an effectively branchless corpus was false.
- No Git tags or releases were found in the fifteen audited repositories.
- M³GIM contains a substantial deterministic script layer, including view building, transformation, validation, quality reporting, auditing, and verification of manual approvals.
- HerData has frontmatter in all seven inspected knowledge documents and `generated-with:` in all seven.
- `teiCrafter` contains extensive proof, roundtrip, fidelity, invariant, and browser-acceptance checks.
- FemPrompt contains automated tests and a manual checklist.
- The production mode of `M³GIM knowledge/domain.md` remains unresolved: deterministic, agentic, or hybrid derivation must be established from the script, document account, commit diff, and commit sequence.

## 10.10 ZBZ correction

The decision abolishing an unauthorised agent-screening stage belongs to the **ZBZ OCR/TEI pipeline**, not to the Stefan Zweig project.

Canonical record:

- `DHCraft/zbz-ocr-tei/knowledge/decisions.md`
- E66, *Abolish agent screening, introduce per-stream workflow status*
- 26 May 2026

All manuscript passages must use ZBZ and must not describe the decision as SZD-related.

## 10.11 Asymmetric amplification

**Asymmetric amplification** is the author's previously published term. It appeared in a DHCraft blog post on 9 February 2026 and is supported by internal reference records and a source snapshot.

The editorial question is how central the term should be in the paper, not whether it exists or was previously published.

The suffix collision within Pollin 2026 was resolved on 29 July 2026, verified against the live sources: LISA keeps `Pollin 2026a`, Asymmetric Amplification carries `Pollin 2026b`, and the in-text citation in 5.3 was adjusted accordingly. This chronological assignment is the required bibliographic justification; reconcile again only if final bibliography sorting changes the sequence.

## 10.12 Repository visibility

Public or restricted status must not be inferred from configured Git remotes.

Verify visibility through:

- a public repository URL;
- authenticated access where appropriate;
- an authoritative project record;
- explicit author testimony.

---

# 11. Scope and Limitations

## 11.1 Empirical scope

The method was consolidated primarily through projects led by one hybrid scholar-developer.

The documented practice lacks:

- a control condition;
- a common protocol across cases;
- a systematic record of all failures and abandoned attempts;
- stable model and harness conditions;
- independent replication across all cases.

The cases establish feasibility and recurring patterns within this practice. They do not establish comparative efficacy or general transferability.

## 11.2 Conditions of applicability

Promptotyping depends on:

- structured and sufficiently contextualised research data;
- access to relevant sources and documentation;
- domain competence;
- ability to specify intended operations and representations;
- ability to verify scholarly and technical adequacy;
- suitable model and harness access;
- time and organisational capacity for knowledge maintenance and checking;
- acceptable legal, ethical, contractual, and institutional conditions.

The minimum competence required for independent use by domain experts without programming experience remains an empirical question.

## 11.3 Hidden labour

Promptotyping redistributes labour rather than eliminating it.

Substantial work remains in:

- knowledge-base maintenance;
- context selection;
- agent monitoring;
- permissions;
- testing;
- auditing;
- error diagnosis;
- correction;
- verification;
- acceptance;
- documentation;
- handover.

The paper must not equate reduced manual coding with reduced total labour.

## 11.4 Infrastructural and social limits

The documented practice depends substantially on paid access to proprietary frontier models and agentic tools.

This creates dependency on:

- provider-controlled training data;
- model updates;
- pricing;
- access conditions;
- availability;
- platform design;
- data-processing terms;
- opaque system behaviour.

Asymmetric amplification means that actors who already possess structured data, domain expertise, technical literacy, verification capacity, and financial access may gain disproportionately.

Infrastructure concentration, representational defaults, and unequal access are bounded interpretations and research priorities. They are not effects empirically demonstrated by the project inventory.

## 11.5 Ethical and governance boundary

Promptotyping is not a general licence to process any material through an external model.

It is inappropriate where:

- lawful and ethically acceptable processing cannot be established;
- confidential, personal, culturally sensitive, copyrighted, or contractually restricted material cannot be protected adequately;
- no accountable expert can verify the resulting claims;
- the artefact's status and limitations cannot be communicated adequately;
- provider terms conflict with project obligations;
- data governance requirements cannot be met.

Project-specific legal, ethical, institutional, and contractual assessment remains necessary.

## 11.6 Limits of model capability

Model performance is uneven across superficially similar tasks.

Relevant risks include:

- confabulation;
- sycophancy;
- omission;
- unstable interpretation;
- inconsistent rule application;
- long-context degradation;
- tool-use failure;
- plausible but unsupported representation;
- automation bias.

The paper should frame model and harness capability as historically contingent.

---

# 12. Evaluation Agenda

## 12.1 Comparative conditions

A follow-up evaluation should compare at least:

1. conventional work without generative assistance;
2. prompt-based work without a maintained project knowledge base;
3. Promptotyping with explicit documents, write-back, checking distinctions, and acceptance records.

The aim is not to establish a universal winner. It is to identify the conditions under which maintained project knowledge, write-back, and versioned acceptance provide value.

## 12.2 Participant groups

Include:

- domain experts without programming backgrounds;
- hybrid scholar-developers;
- Research Software Engineers.

## 12.3 Knowledge-base quality

Evaluate:

- completeness;
- internal consistency;
- freshness;
- traceability;
- understandability;
- provenance;
- suitability for task-specific context selection;
- ability of a new person or agent to continue the work.

## 12.4 Artefact quality

Evaluate:

- functional conformance;
- source fidelity;
- representational adequacy;
- visibility of uncertainty;
- verifiability;
- usability;
- maintainability;
- correspondence with documented requirements and design.

## 12.5 Process quality

Evaluate:

- number and type of human interventions;
- error categories;
- correction cycles;
- time and expertise required for diagnosis;
- maintenance effort;
- verification effort;
- extent to which corrections become reusable project knowledge;
- independence after initial support;
- handover quality;
- failed and abandoned attempts;
- model and harness dependence.

## 12.6 Transferability test

A strong transferability study should provide independent domain researchers with:

- structured research data;
- the method specification;
- Promptotyping Document templates;
- a bounded research task;
- a controlled agentic environment.

It should then examine whether participants can:

- create and maintain an adequate knowledge base;
- produce a project-specific artefact;
- identify errors;
- revise the relevant knowledge layer;
- verify scholarly adequacy;
- accept an identifiable promptotype;
- continue without sustained intervention by the originating scholar-developer.

Workshop completion alone is not evidence of transferability.

## 12.7 Experimental variables

Record:

- model;
- model version;
- harness;
- tools;
- permissions;
- context configuration;
- human expertise;
- data state;
- task conditions.

Do not treat models and harnesses as neutral or interchangeable infrastructure.

---

# 13. Final Manuscript Architecture

The final manuscript uses five chapters.

## 1. Introduction

### 1.1 Translating Research Data into Digital Research Artefacts through Scholar-Centred Design

Establish:

- research data as modelled representations;
- dependence on software;
- generic-tool constraints;
- reversal of adaptation;
- capacity gap;
- Scholar-Centred Design.

### 1.2 Context Engineering and Agentic Engineering

Define:

- Context Engineering;
- AI agents;
- Agentic Engineering;
- AI harness;
- Critical Expert;
- need for a persistent knowledge base.

The Introduction should state the core thesis before the detailed methodological reconstruction.

## 2. Promptotyping

### 2.1 Development and Definition

Include:

- reconstruction from documented practice;
- canonical definition;
- research data versus project knowledge;
- iteration and promptotype;
- scope boundary;
- four recurrent forms of work.

### 2.2 Preparation and Exploration

### 2.3 Distillation into Promptotyping Documents

### 2.4 Agentic Implementation and Verification

Include:

- implementation;
- checking architecture;
- write-back;
- acceptance;
- version identification;
- organisation and distributed responsibility.

## 3. Epistemic and Methodological Implications

Recommended sequence:

### 3.1 Research Artefacts as Scholarly Arguments  
### 3.2 Semantic Explicitness and the Limits of Context  
### 3.3 Documents as Conceptual Models and Mediating Structures  
### 3.4 Amplification, Distributed Authority, and the Limits of Externalisation  
### 3.5 Acceptance and Publication  
### 3.6 Reconstruction and Reproducibility

Each claim about responsibility, authority, and incomplete externalisation should be developed once here and cross-referenced elsewhere.

## 4. Promptotyping in Practice

Organise around epistemic and methodological functions rather than project chronology.

Realised in the integrated version of 2026-07-29 as: 4.1 Case Selection, Sources, and Evidential Status (seven cases with evidential-status table); 4.2 Recurrent Artefact Forms (the four interface types plus Scholarly Workbenches); 4.3 Anatomy of an Iteration Across the Cases; 4.4–4.9 worked cases (SZD-HTR, CorrespExplorer, M³GIM, ZBZ, Notker, and the two workbenches coOCR/HTR and teiCrafter); 4.10 Cross-Case Comparison; 4.11 Teaching, Collaboration, and Independent Continuation.

Open architectural consequence: the fourteen-project inventory (former Table 1) left the manuscript with this version; the seven-case table of 4.1 is now the only project table. The promptotype-status classification of Section 10.5 and the site gallery rule keyed to Table 1 (A7 in the site specification) must be re-decided against this reduction at acceptance.

Avoid turning the chapter into a catalogue.

## 5. Scope, Limits, and Priorities for Evaluation

Recommended sequence:

- empirical scope;
- applicability;
- technical and organisational limits;
- RSE boundary;
- infrastructural and social limits;
- ethical and governance boundary;
- evaluation agenda;
- conclusion.

The former separate conclusion chapter remains integrated as the final section of Chapter 5.

---

# 14. Redundancy-Control Map

Each recurring claim has one primary argumentative location.

| Claim | Primary location | Later treatment |
|---|---|---|
| Expertise is not replaced | Section 3.4 | Brief cross-reference only |
| Knowledge base has no autonomous authority | Definition and Section 3.4 | Do not redevelop repeatedly |
| Agentic review does not authorise | Section 2.4 verification architecture | Use concise reminder elsewhere |
| Promptotyping does not replace RSE | Section 5 RSE boundary | Mention once in definition |
| Externalisation is incomplete | Section 3.4 | Do not repeat in every document discussion |
| Artefacts embody scholarly decisions | Section 3.1 | Apply through examples elsewhere |
| Implementation produces knowledge | Write-back in Section 2.4 | Reference in cases |
| Transferability is unproven | Section 5 empirical scope | State briefly in Abstract and Conclusion |
| Capacity rather than speed | Introduction and Section 5 | Enforce through style rules |
| Acceptance is not finality or publication | Promptotype definition and Section 3.5 | Do not re-explain at every occurrence |

When revising the manuscript, remove repeated full explanations and replace them with concise cross-references.

---

# 15. Conclusion Claims

The Conclusion must preserve the following claims and introduce no new argument.

1. Promptotyping addresses the distance between structured research data and the project-specific digital artefacts through which they can be investigated, transformed, enriched, verified, and interpreted.

2. LLM-based implementation permits a reversal in the primary direction of adaptation between project data and software.

3. This reversal is not made responsible by generative implementation alone.

4. Promptotyping externalises the articulable part of project understanding in an evolving, inspectable, and versioned knowledge base.

5. Agents implement from task-specific context selected from that knowledge base.

6. Findings from implementation and checking are written back when they alter the maintained project understanding.

7. Each accepted iteration yields an identifiable promptotype connecting maintained project knowledge, artefact, referenced data state, and documented grounds of acceptance.

8. Nothing less closes an iteration, and nothing more is claimed by it.

9. The contribution concerns implementation capacity rather than demonstrated speed, cost, reliability, or superiority.

10. Models and harnesses are historically contingent. Maintained project knowledge is the component most capable of outlasting individual systems.

11. The documented cases show feasibility and breadth within one practitioner's work, not independent transferability or comparative efficacy.

12. Promptotyping amplifies competence and redistributes implementation work.

13. It does not transfer scholarly authority to AI agents.

14. Accepting a digital research artefact is a scholarly and technical act that remains attributable to accountable people.

---

# 16. Style and Terminology Rules

## 16.1 General style

- Use British English.
- Avoid em dashes in manuscript prose.
- Prefer concrete verbs to nominalisations.
- Avoid totalising and teleological claims.
- Use **can** where evidence establishes possibility rather than universal effect.
- Keep paragraphs focused on one main argumentative function.
- Define each central concept once and use cross-references thereafter.
- Preserve concise, memorable formulations where they carry substantial conceptual work.

## 16.2 Required distinctions

Distinguish consistently:

- research data;
- project knowledge;
- project knowledge base;
- working context;
- digital research artefact;
- Promptotyping iteration;
- promptotype.

Also distinguish:

- mapping from transformation;
- deterministic validation from agentic review;
- assessment from verification;
- verification from acceptance;
- acceptance from publication;
- feasibility from efficacy;
- version identification from release infrastructure.

## 16.3 Preferred terminology

Use:

- **project-specific** rather than alternating unnecessarily with custom, bespoke, tailored, or specialised;
- **documented grounds of acceptance** as the canonical acceptance phrase;
- **Promptotyping Documents** with consistent capitalisation;
- **Critical Expert** for the accountable role;
- **digital research artefact** for the implemented operational form;
- **promptotype** only for an accepted identifiable iteration state.

Capitalisation:

- *Promptotyping* capitalised as method name;
- *Promptotyping Documents* capitalised as defined document class;
- *promptotype* lower-case in running prose unless beginning a sentence;
- Context Engineering, Agentic Engineering, Scholar-Centred Design, Critical Expert, and AI harness according to established manuscript usage.

## 16.4 Prohibited or restricted formulations

Do not:

- claim speed, cost, ease, or efficiency without evidence;
- call early cases promptotypes merely because they used LLMs;
- describe agentic review as approval or verification;
- imply that passing tests establishes scholarly adequacy;
- describe the knowledge base as independently authoritative;
- imply that Markdown guarantees precision;
- imply that a release or Git tag is constitutive;
- use **human in the loop** where the argument requires qualified Critical Expert judgement;
- alternate among several definitions of the same term.

## 16.5 Citation and footnote practice

- Literature supports conceptual and factual claims through the author–year system.
- Footnotes document the method's own genesis, presentations, project records, repositories, and persistent research objects.
- Self-citation density is justified where the paper reconstructs its own documented development, but provenance claims must remain clearly separated from external theoretical support.
- No source should remain cited merely because it appeared in an earlier draft; orphaned entries are cited or removed.
- Every 2025–2026 source and every repository-specific claim requires verification before final submission.
- The Doctoral Congress presentation remains transparently cited as author-retained material until a persistent public record is deposited.

---

# 17. Figures and Tables Quality Assurance

The integrated version of 2026-07-29 carries six figures with adopted image files: the method loop (Figure 1), knowledge–context–authority (Figure 2), the comparative anatomy (Figure 3), the M³GIM loop (Figure 4), ZBZ before/after E66 (Figure 5), and the Notker acceptance (Figure 6). The document-types figure, the versioned-promptotypes figure, and the planned Wheaton figure left the manuscript with that version; checklist items referring to them apply only if they return.

Decision (2026-07-29, integration brief): the figure process records live in the companion repository under `assets/figures/prompts/`, with machine-readable metadata in `assets/figures/manifest.yaml` and the visual grammar in `assets/figures/PROVENANCE.md`; the manuscript carries only the Figure Generation Disclosure, the repository reference, the captions, and the List of Figures. Generator naming is ChatGPT Images 2.0. Prompt texts were not retained, and the records state this rather than reconstructing a prompt history. Figure generation does not transfer responsibility for conceptual content or acceptance to the image-generation system.

Before release, verify:

- arrows in the four-form figure point to the intended form of work or accepted state;
- the stronger return path points from Implementation to Distillation;
- Critical Expert acceptance points to the promptotype rather than to Distillation;
- figures distinguish the digital research artefact from the promptotype;
- captions use **Promptotyping Documents**;
- the promptotype caption uses **documented grounds of acceptance**;
- version flow uses **accept and version the next state**, not **release the next version**, unless a literal release is shown;
- no alt text appears as ordinary manuscript prose;
- figure numbers and references are sequential;
- Table 2 uses the terminology fixed in Section 6.8;
- project inventory classifications match repository evidence;
- embedded labels contain no superseded wording;
- **DEPTH VARIES** remains the Exploration qualifier where used;
- **Promptotyping Documents** replaces earlier variants such as Promptotyping specification.

Existing figure files require a final terminology pass.

---

# 18. Final Claim-Control Checklist

The manuscript is ready for submission only when every answer is yes.

## Argument and terminology

- Is the primary contribution framed as implementation capacity rather than speed or cost?
- Is the reversal of adaptation stated clearly?
- Is generative implementation distinguished from Promptotyping?
- Are all central terms defined once and used consistently?
- Is a digital research artefact consistently distinguished from a promptotype?
- Is working context distinguished from the project knowledge base?

## Verification and acceptance

- Are deterministic validation, agentic review, Critical Expert verification, and acceptance distinguished?
- Is agentic review consistently prevented from authorising?
- Is acceptance distinguished from verification, publication, finality, and truth?
- Are documented grounds of acceptance identifiable and attributable?
- Is version identification defined without making tags or releases constitutive?

## Evidence

- Is feasibility consistently distinguished from efficacy?
- Are all speed and cost claims removed or evidenced?
- Are early cases described as precursors unless acceptance can be reconstructed?
- Are repository absences qualified by the applied inspection procedure?
- Are test claims reconstructed from runner entry points rather than filenames?
- Are provenance claims separated into artefact and document levels?
- Are project-specific facts tied to repository records, public records, or explicit author testimony?
- Are public and restricted repository statuses verified appropriately?

## Corrections

- Are ZBZ and SZD kept distinct?
- Is the E66 decision attributed only to ZBZ?
- Is asymmetric amplification cited with one consistent key?
- Are all Pollin 2026 suffixes reconciled after bibliography sorting?
- Are corrected merge, test, provenance, and release findings reflected consistently?

## Scope and limits

- Are infrastructure and ethics claims framed at the level supported by evidence?
- Is hidden labour acknowledged?
- Is the RSE boundary defined by obligations?
- Is transferability presented as an open empirical question?
- Are models and harnesses treated as contingent variables?

## Production

- Are all references present, cited, and bibliographically consistent?
- Are all figures and captions terminologically current?
- Do inventory classifications match the canonical promptotype criteria?
- Does the Conclusion contain no argument absent from the main text?

---

# 19. Remaining Evidence and Production Tasks

The final candidate can be revised without reopening the canonical definition or central argument. The following tasks remain:

1. Complete the corrected test and verification inventory from runner entry points.
2. Determine whether `M³GIM knowledge/domain.md` was derived deterministically, agentically, or through a mixed process.
3. Complete the Notker function, verification, and acceptance reconstruction.
4. Classify every inventory project under the four promptotype-status categories.
5. Verify public or restricted repository status through HTTP access or authoritative records.
6. Reconcile all Pollin 2026 citation suffixes after full bibliography sorting.
7. Confirm remaining 2025–2026 bibliographic records against final publications.
8. Replace or edit figures whose embedded labels retain superseded terminology.
9. Apply the redundancy-control map to the complete manuscript.
10. Conduct a final terminology pass across Abstract, figures, definitions, case descriptions, and Conclusion.

These are evidence, editorial, and production tasks. They do not reopen the method's canonical definition.

## Repository transition tasks (two-track regime)

1. Author review and acceptance of the integrated version chapter by chapter, with the style-catalogue pass per chapter at acceptance.
2. Orphaned references, cite or remove (state after the night intake of 2026-07-29): Berners-Lee 2025, Flanders and Jannidis 2019, Pichler and Reiter 2022, Pollin 2025c (Critical Vibing), Pollin et al. 2025 (the ZfdG survey), and newly orphaned with the departure of the static-artefact section: Andorfer 2026, Chue Hong et al. 2022, Holmes and Takeda 2023, Marwick, Boettiger, and Mullen 2018, Risam and Gil 2022.
3. Dropped against the earlier drafts, confirm or restore: the Karpathy footnote naming the origin of the term vibe coding (the concept is carried by Sarkar and Drosos 2025 alone), and Summerfield 2025, which leaves the confabulation sentence in 2.4 without a source.
4. Resolve the dangling cross-reference in 5.3, which states that the technical limits of the static artefact form are given in Section 4.1; the integrated version's 4.1 is the case-selection section and no section states those limits any longer. The decision whether the static-artefact passage returns also decides the five newly orphaned references of task 2.
5. Decide the fate of the fourteen-project inventory (former Table 1), which the integrated version no longer carries; the site gallery admission rule (A7) and the promptotype-status classification key to it.
6. Deposit the Doctoral Congress presentation and replace the provisional footnote wording with a persistent identifier.
7. Decide whether Audit Interfaces remain a candidate extension or are promoted after additional evidence; the integrated version's 4.2 carries Scholarly Workbenches as a fifth artefact form instead, which touches the same site vocabulary (the five epistemic functions of A22).
8. Perform a final transition and redundancy pass after author acceptance, then swap `paper.md` and re-key the vault register and the site anchors (the `#abschnitt` aliases and the V10 anchor phrases).

A manuscript section is accepted only when:

- its conceptual and terminological decisions match this document;
- its citations and footnotes have been verified;
- no unresolved placeholder remains;
- figures are introduced and interpreted in prose rather than inserted as detached illustrations;
- the author has accepted the prose as the current manuscript version.

---

# 20. Next Work Block

The next manuscript revision should be a controlled condensation pass.

Proceed in this order:

1. fix the strongest formulation of the thesis in the Abstract, Introduction, and Conclusion;
2. assign each recurring claim to its primary argumentative location;
3. remove repeated full explanations and replace them with cross-references;
4. shorten project descriptions to their methodological function;
5. separate definition, example, qualification, and limitation at paragraph level;
6. standardise the five central objects:
   - Promptotyping;
   - Promptotyping iteration;
   - promptotype;
   - Promptotyping Document;
   - digital research artefact;
7. complete sentence-level compression only after structural redundancy has been removed.

The goal is not merely a shorter manuscript. It is a manuscript with a higher argumentative resolution: fewer words per idea, clearer relations among ideas, and no loss of methodological precision.

---

# 21. Maintenance Rule

After each revision session:

- update the status line;
- record accepted conceptual or architectural changes here;
- move process history to the journal;
- update repository findings only from an explicit audit record;
- update the citation map when a new source enters the manuscript;
- run the claim-control checklist;
- keep one clearly designated next work block;
- remove superseded wording rather than preserving competing formulations.

This document contains the current governing knowledge for the paper.
