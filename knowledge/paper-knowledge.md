# Promptotyping Paper: Canonical Knowledge Document

**Updated:** 31 July 2026, during the operator's end-to-end read; Abstract, the whole §1, and the verification/validation terminology revised (Section 19, decisions 15 to 21).

**Status:** The single steering document of the paper. The manuscript is `knowledge/paper.md`, promoted on 2026-07-30 from the operator's externally revised, sanitised, verified, and literature-anchored text of the same day; the site renders that file directly, so the deployed text is the canonical text. The two-track regime of 2026-07-29/30 (`paper-draft.md` steered by this document beside `paper.md` steered by `paper-writing.md`) ended with the promotion; the working records of the revision round live commit-pinned in git history (see the provenance section at the end). The figure series is the authored monochrome SVG set under `assets/figures/svg/` with one written specification per figure under `assets/figures/specs/`.

**Function:** Governs the paper's central argument, terminology, method structure, chapter boundaries, evidence handling, language rules, apparatus conventions, repository interpretation, submission route, and final quality assurance.

## Authority and Maintenance

The latest accepted manuscript wording governs passages already revised. This document governs unresolved and cross-cutting decisions. Update it whenever a manuscript revision changes the canonical argument, terminology, architecture, evidence base, or quality-control rules.

This document is not a chronological session log. Process history belongs in the journal. Only current governing knowledge remains here.

---

# 1. Paper Identity

## 1.1 Title

**Promptotyping. Translating Research Data into Research Artefacts through Context Engineering and Agentic Engineering**

## 1.2 Object of the paper

The paper presents **Promptotyping** as an iterative, knowledge-driven method for translating structured research data and documented project knowledge into project-specific digital research artefacts through Context Engineering and Agentic Engineering.

Its central organising structure is an evolving, inspectable, and versioned project knowledge base maintained through interrelated Markdown documents. LLM-based AI agents work from task-specific context selected from this knowledge base. Findings from implementation, testing, assessment, review, and validation are written back when they change the maintained understanding of the project.

Each accepted iteration yields an identifiable and versioned **promptotype** that connects:

- maintained project knowledge;
- the resulting digital research artefact;
- the referenced research-data state;
- the documented grounds of acceptance.

Accountable researchers and technical contributors remain responsible for the scholarly and technical judgements through which a promptotype is specified, validated, and accepted.

## 1.3 Type of contribution

The contribution is **conceptual and methodological**. The paper:

- defines Promptotyping, Promptotyping Documents, Promptotyping iterations, and promptotypes;
- explains the relation among Scholar-Centred Design, Context Engineering, Agentic Engineering, AI harnesses, and Critical Expert judgement;
- establishes the project knowledge base as the persistent reference from which implementation proceeds;
- defines Preparation, Exploration, Distillation, Implementation, write-back, checking, acceptance, and version identification;
- distinguishes deterministic verification, agentic review, Critical Expert validation, and acceptance;
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
- verification, review, validation, and acceptance are differentiated;
- implementation findings are written back into maintained project knowledge;
- an accountable person or group explicitly accepts an identifiable state for a defined purpose.

## 2.4 Primary contribution claim

Promptotyping enables a class of project-specific digital research artefacts to be developed within the research process where researchers and small projects could previously specify such artefacts but lacked the implementation capacity to realise them.

The claim concerns which artefacts can become practically implementable under suitable conditions. It does not imply a general comparative advantage in cost, speed, quality, reliability, or long-term sustainability.

## 2.5 Strongest formulation of the thesis

Promptotyping makes semi-formal scholarly project knowledge operational through agentic implementation. Because this translation remains underdetermined, maintained documentation, systematic write-back, differentiated checking, and accountable acceptance become constitutive parts of the method.

## 2.6 Operator core formulation (2026-07-31)

Promptotyping serves the rapid, iterative creation of project-specific research artefacts that function as instruments of understanding. Working with them clarifies which requirements the project actually pursues, what the research data can warrantably support, and what the researchers require. The LLM-supported work is documented as fully as practicable. Later chapters are measured against this core. Accountability mechanisms remain part of the method but are supporting apparatus; the research question no longer carries them.

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
- deterministic verification
- agentic review
- Critical Expert validation
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
- revisable when implementation or checking changes the maintained understanding;
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
- schema-validation summaries;
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
- preserves traceability between descriptions, decisions, implementation, and checking.

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

The **Critical Expert** is an accountable human role responsible for the judgements through which project knowledge and artefacts are specified, challenged, validated, and accepted (decision 21).

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
- Critical Expert validation;
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

Use **documented grounds of acceptance** throughout the definition, method, figures, and Conclusion. Since the operator decision of 2026-07-31 the Abstract carries no acceptance enumeration; its accountability statement is the responsibility sentence on consequential judgements.

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

Write-back is the defining return path from Implementation, assessment, review, and validation into maintained project knowledge.

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

- deterministic verification;
- assessment;
- agentic review;
- Critical Expert validation;
- acceptance.

*Verification* names conformity to formalised requirements, technical and deterministic. *Validation* names the adequacy judgement that requires expert authority, scholarly in kind. The direction follows IEEE Std 1012 (IEEE 2017), which the manuscript cites in §2.3 (decision 21).

Do not collapse these into a generic category such as checking, quality assurance, or confidence.

## 6.2 Deterministic verification

**Deterministic verification** applies executable rules whose outcomes can be reproduced under the same conditions.

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

Deterministic verification establishes only what has been formalised into the rule.

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

Assessment can inform validation and acceptance but does not itself authorise the state.

## 6.4 Agentic review

**Agentic review** uses an LLM-based agent to compare outputs with:

- sources;
- project documents;
- rules;
- user stories;
- acceptance criteria;
- expected interface behaviour.

Agentic review may extend the coverage of checking and identify plausible failures.

It never authorises. It remains a generative operation and does not become scholarly validation merely because:

- a second model is used;
- several agents agree;
- the output receives a confidence score;
- the review appears systematic.

## 6.5 Critical Expert validation

**Critical Expert validation** applies where adequacy depends on contextual, domain-specific, interpretative, editorial, representational, or technical judgement that cannot be reduced adequately to deterministic rules.

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

Deterministic verification, assessment, agentic review, and Critical Expert validation contribute evidence. None automatically constitutes acceptance.

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

Critical Expert validation may become deterministic verification when the relevant judgement has been formalised into executable rules.

The conversion does not run in the opposite direction. A deterministic check does not acquire scholarly authority merely because it is automated or repeatedly passed.

## 6.8 Canonical table terminology

Use:

**Table title:** Forms and objects of checking in Promptotyping

**First column:** Object of checking

**Fidelity category:** Source fidelity requiring judgement

Preferred rows:

| Object of checking | Form | What decides | Agent autonomy |
|---|---|---|---|
| Deterministically decidable data fidelity | Verification | Schemas, tests, constraints, builds | Agent may run checks and act on unambiguous failures |
| Source fidelity requiring judgement | Validation | Critical Expert comparing output with sources | Agentic review may assist but remains subordinate |
| Requirement satisfaction | Acceptance testing | Acceptance criteria in the requirements document | Agent may operate the artefact and report results |
| Design conformance | Validation | Critical Expert against the design document | Requires human assessment |
| Interpretation and contextualisation | Validation | Scholarly judgement against sources and research context | Cannot be delegated for final acceptance |

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
- how an artefact should be checked.

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
- automatic verification of every claim.

Their residual ambiguity explains why implementation remains variable and checking remains necessary.

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
- validated;
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

| Case | Artefact | Critical documents | Implementation finding | Write-back | Validation authority | Promptotype status |
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

teiCrafter stands in the manuscript's case set (Table 3, Section 4.3) since the promoted text; its two software states, the 2023 Custom GPT precursor and the 2026 browser workbench, are kept explicitly distinct in Section 4.2 and must not be merged into one project history.

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
- ability to validate scholarly and technical adequacy;
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
- validation;
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
- no accountable expert can validate the resulting claims;
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
- validate scholarly adequacy;
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

# 13. Manuscript Architecture (as promoted, 2026-07-30)

The manuscript uses five chapters. This is the realised structure of `knowledge/paper.md`; the site derives the `#abschnitt-{n}-{slug}` anchors from these headings, so renaming a heading moves its address and requires an alias in `PAPER_ANCHOR_ALIASES` (`assets/js/pages-paper.js`).

- **Abstract**
- **1. Introduction** — problem, operationalisation, claim with its limits
  - 1.1 Translating Research Data into Digital Research Artefacts through Scholar-Centred Design
  - 1.2 Context Engineering, Agentic Engineering, and AI Harnesses
- **2. Promptotyping as a Method** — genealogy in the chapter opening
  - 2.1 Promptotyping and the Project Knowledge Base
  - 2.2 Forms of Work and Iteration (Figure 1)
  - 2.3 From Project Knowledge to an Accepted Promptotype — SZD worked example, checking architecture, Table 1, Figure 2
  - 2.4 Documentation, Accountability, and the Limits of AI-Assisted Development
- **3. Epistemic and Methodological Implications**
  - 3.1 Research Artefacts and the Amplification of Computer-Based Research
  - 3.2 Research Data and Project Knowledge as Mediating Structures
  - 3.3 Amplification, Competence, and the Limits of Externalisation
  - 3.4 Acceptance, Reconstructability, and the Status of the Promptotype
- **4. Promptotyping in Practice**
  - 4.1 Cases and Evidential Status
  - 4.2 Artefact Forms and Documented Projects — Table 2 (artefact forms), seven worked cases, Figures 3 to 5
  - 4.3 Cross-Case Findings — Table 3, teaching and collaboration paragraph
- **5. Scope, Limits, Evaluation, and Conclusion**
  - 5.1 Scope, Limits, and Conditions of Applicability
  - 5.2 Transferability and Priorities for Evaluation
  - 5.3 Conclusion
- **AI Use and Research Provenance**, **References**, **Figure files**

The former fourteen-project inventory left the manuscript with the integrated version of 2026-07-29; Table 3 is the only project table. The site gallery followed on 2026-07-30: the seven cases of Table 3 carry the evidence role, the eight former inventory projects moved to the role `further` with their cards intact, and the admission rule in `data/case-studies.json` and V5 of `knowledge/verification.md` are re-keyed accordingly.

---

# 14. Redundancy-Control Map

Each recurring claim has one primary argumentative location.

| Claim | Primary location | Later treatment |
|---|---|---|
| Expertise is not replaced | Section 3.3 | Brief cross-reference only |
| Knowledge base has no autonomous authority | Section 2.1 | Do not redevelop repeatedly |
| Agentic review does not authorise | Section 2.3 checking architecture | Use concise reminder elsewhere |
| Promptotyping does not replace RSE | Section 2.4 RSE boundary | Mention once in 1.1 |
| Externalisation is incomplete | Section 3.3 | Do not repeat in every document discussion |
| Artefacts embody scholarly decisions | Section 3.1 | Apply through examples elsewhere |
| Implementation produces knowledge | Write-back in Section 2.2 | Reference in cases |
| Transferability is unproven | Section 5.2 | State briefly in Abstract and Conclusion |
| Capacity rather than speed | Sections 1.1 and 5.3 | Enforce through style rules |
| Acceptance is not finality or publication | Section 2.3 | Do not re-explain at every occurrence |

When revising the manuscript, remove repeated full explanations and replace them with concise cross-references.

## 14.1 The canonical promptotype relation and its homes

The relation has four members, maintained project knowledge, the resulting digital research artefact, the referenced research-data state, and the documented grounds of acceptance. Member naming is uniform. Three locations carry the enumeration in full and are its canonical homes, the §2.2 definition, the §2.3 operative elaboration with the increment about checking evidence, and the §3.4 statement of epistemic status. The Abstract carries neither the enumeration nor the term promptotype since the operator decision of 2026-07-31; it states responsibility for the consequential judgements of validation and acceptance instead, and the term is first announced in the §1 section preview and introduced at its definition site in §2.2. Three further full statements are licensed exceptions, the Figure 1 caption under the convention that captions stand alone, the §2.3 instantiation with SZD content, and the relation statement in the Conclusion restored after the operator's external review (2026-07-30); none of them may be re-trimmed by a later redundancy pass. Every other occurrence is a reference to the §2.2 definition, and an edit that reintroduces an enumeration elsewhere breaks the arrangement. The §3.4 statement was collapsed from six members to the canonical four (code absorbed by the artefact member, verification evidence by the grounds of acceptance), confirmed by the operator on 2026-07-30.

## 14.2 Protected repetitions and one conditional deletion

Repetition is permitted where an editorial convention overrides deduplication, namely abstract self-containment, figure captions that must stand alone, the research question, and the definitional sentences named in the operator plan of the 2026-07-30 round; seventeen components are protected on that ground and may not be removed as duplicates (their inventory is pinned, see the provenance section). One deletion is conditional. The claim that documentation is necessary to the organisation of the work without establishing accountability was deleted from §2.4 only because the three-limb statement in the same section retains all three limbs; trimming that triad restores the loss and requires the deleted sentence back.

## 14.3 Residual redundancy held under the frozen wording

The operator freeze of 2026-07-30 fixed the retained wording of §1, §1.1, §2.1, and §2.2. Seven components carry an inventory action the verbatim rule blocked; they are the residual redundancy of the deduplication pass and need a decision only if the operator reopens the frozen prose: the three continuity conditions in §2.1 (C-08), Distillation's addressee-indexed selectivity in §2.2 (I-03), the generic-tools adaptation sentence in §1.1 (J-03), the implementation-reduction sentence in §1.1 (K-03), the knowledge-base account sentence in §2.1 (O-02), the method gloss in §1 reduced only by its divergent tail (Q-02), and the harness enumeration in §2.2 repeating the §1.2 definition (R-03). Q-02 is resolved by acceptance, the operator permits Abstract–Introduction doublets (2026-07-31), and the §1 method gloss stands; J-03 and K-03 are superseded by the §1 rewrite of the same day.

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
- deterministic verification from agentic review;
- assessment from validation;
- validation from acceptance;
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
- describe agentic review as approval or validation;
- imply that passing tests establishes scholarly adequacy;
- describe the knowledge base as independently authoritative;
- imply that Markdown guarantees precision;
- imply that a release or Git tag is constitutive;
- use **human in the loop** where the argument requires qualified Critical Expert judgement;
- alternate among several definitions of the same term.

## 16.5 Citation and footnote practice

- Literature supports conceptual and factual claims through the author–year system, without page numbers (2026-07-25). The locator belongs in the register row of the vault (`vault/knowledge/register-paper-sources.md`) and, where a verbatim quotation was checked, in the distillate; the paper argues at the level of the statement while the evidence layer lives in the companion.
- Footnotes document the method's own genesis, presentations, project records, repositories, and persistent research objects. Every named tool and every technical standard carries a footnote with a compact definition and current URL at its first mention, unless the substantial treatment sits later, then the footnote sits there; everyday formats (CSV, JSON, HTML, CSS, JavaScript, Markdown) carry none.
- Author–year in the text writes out up to three names and abbreviates from four with "et al."; the reference list carries full author lists and abbreviates only for large collectives.
- Self-citation density is justified where the paper reconstructs its own documented development, but provenance claims must remain clearly separated from external theoretical support.
- No source should remain cited merely because it appeared in an earlier draft; orphaned entries are cited or removed. After the apparatus cleaning of 2026-07-30 the reference list is clean in both directions; keep it so.
- Every 2025–2026 source and every repository-specific claim requires verification before final submission; never cite FrontierMath (Glazer et al. 2024) for its abstract's solve-rate percentage, which ages.
- The Doctoral Congress presentation remains transparently cited as author-retained material until a persistent public record is deposited.

## 16.6 Sentence-level rule catalogue

Carried over from the German steering document at consolidation (2026-07-30); the four core prohibitions of the operator's global style rules apply in English too. The catalogue runs per chapter at any future revision.

1. No aphorism as opener or paragraph close; pointed formulations only where they carry a real definition or image, and rarely.
2. No trailing negative apposition, including "X rather than Y" as a reflex; real contrasts as their own sentence. Licensed exception: Drucker's "capta rather than given data".
3. No empty labelling sentences (reification of the preceding passage plus an evaluative adjective); paragraph transitions carry themselves through the factual relation of the statements.
4. No announcement sentences about the paper's own text; no First/Second/Third scaffolding where the statements carry themselves.
5. Semicolon only in genuinely parallel series; colon permitted as explication of the immediately preceding term, excluded as a connector between equal-ranking statements and as a series announcement in running prose.
6. No anaphora or rhetorical parallelism; series run through one governing verb.
7. Vary word repetitions in neighbouring sentences.
8. "I/my" throughout, never "the author".
9. No verbatim doublets among section openings; cross-references instead of repetition. Doublets between the Abstract and the Introduction are permitted, since the Abstract stands alone (operator decision 2026-07-31).
10. At most one enumeration per paragraph.
11. Make jargon self-explanatory; replace vague categories with concrete tools, where the example respects the paragraph's category boundary or the boundary violation becomes explicit argument.
12. Present tense rather than perfect passive for persisting conditions.
13. Cut irrelevant details that smuggle in a foreign argument.
14. Sharpen attackable absolutes; replace empirical posits ("typically", "often") with self-carrying justifications; mark inferences with "I infer", without double marking.
15. Avoid opaque idioms for international reviewers.
16. No superlatives.
17. No volatile quantities in running prose; numbers only in verified form in the case table.
18. Italics for adopted discourse terms at first introduction and for first introductions of the paper's own terms at their definition site; bold only for structural labels (forms of work, document types, case labels). Sentence-level bold in the working manuscript is the operator's revision aid marking core statements; a de-bolding pass over the whole manuscript belongs to the final production step before submission (operator note 2026-07-31).
19. British spelling throughout.
20. "LLM" rather than "model" where a language model is meant; "model" stays reserved for the data model, the conceptual model, and Stachowiak's model concept, and established compound terms of other origin (vision-language model, reasoning model) are unaffected.

**Self-check.** Before a revision round is delivered, the check patterns run over every changed sentence (dash and colon connectors, "X, not Y", rhetorical triads, aphorism closes, British spelling), plus mechanically the footnote balance (every label exactly one definition and at least one use), the section references against the headings, and the search for open `[...]` markers.

---

# 17. Figures and Tables Quality Assurance

The promoted manuscript carries five figures as an authored monochrome SVG series: the method loop (Figure 1, file 01), knowledge–context–authority (Figure 2, file 02), the M³GIM loop (Figure 3, file 04), ZBZ before/after E66 (Figure 4, file 05), and the Notker acceptance (Figure 5, file 06). The manuscript numbering diverges from the file numbering after Figure 2 because file 03 (comparative anatomy) is retired; `assets/figures/manifest.yaml` records the mapping in its `manuscript_number` field, and the manuscript's closing section "Figure files" states the arrangement.

The series is authored, one hand-written SVG per figure from a written specification under `assets/figures/specs/`, with the acceptance proof sheet at `assets/figures/proof-sheet.html`. The earlier generated PNG series (ChatGPT Images 2.0) remains archived under `assets/figures/` with its records in `manifest.yaml` and `PROVENANCE.md`; the manuscript embeds the SVG files. The revision of 2026-07-30 established the visual hierarchy, two stroke weights, one legend vocabulary (operational flow, evidence relation and write-back, accountable human authority), and per-figure layout corrections. Whoever changes a figure edits its specification first, then the SVG, and re-renders the proof sheet.

Before release, verify:

- arrows in the four-form figure point to the intended form of work or accepted state;
- the stronger return path points from Implementation to Distillation;
- the Critical Expert's authority arrow terminates at the promptotype state and reads "validates and accepts" (wording migrated under decision 21; operator decision 2026-07-30: the arrow carries the acceptance semantics, the caption stands unchanged);
- figures distinguish the digital research artefact from the promptotype;
- captions use **Promptotyping Documents** and the promptotype caption uses **documented grounds of acceptance**;
- no alt text appears as ordinary manuscript prose;
- figure numbers and references are sequential in the manuscript numbering;
- Table 1 uses the terminology fixed in Section 6.8;
- embedded labels contain no superseded wording.

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

## Checking and acceptance

- Are deterministic verification, agentic review, Critical Expert validation, and acceptance distinguished?
- Is agentic review consistently prevented from authorising?
- Is acceptance distinguished from validation, publication, finality, and truth?
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

# 19. Operator Decisions of 2026-07-30 and Open Flags

The promotion closed the two-track regime. The operator's decisions of that day, recorded here so they are not re-litigated:

1. **Promotion executed.** The five-chapter text is `knowledge/paper.md`; every published anchor of both earlier section cuts resolves through `PAPER_ANCHOR_ALIASES`.
2. **Footnote 23 residue accepted.** "Security" and "operational reliability" in the §2.4 sentence are not covered by the two retained sources; the footnote is a see-note and does not have to carry the sentence exhaustively, so the wording stands.
3. **Figure 1 stands.** The caption's "verifies the resulting artefact" is realised by the authority arrow "verifies and accepts" terminating at the promptotype state; caption unchanged.
4. **Figure format is SVG.** The manuscript embeds the authored SVG series; the PNG series stays archived.
5. **Russell and Norvig keeps 2020**, matching the in-text citation and the trade data; the Library of Congress CIP record giving 2021 stays recorded as a reservation in the vault register and CSL record, to be settled at the operator's physical copy.
6. **The §3.4 member collapse is confirmed** (see Section 14.1).
7. **Four works survive in footnotes alone** (Galey and Ruecker 2010 in fn26 with Whitelaw 2015; Wilkinson et al. 2016 in fn7; Borek et al. 2021 in fn1), which bounds what a claim grounded in them can be said to support.
8. **Flanders and Jannidis 2015/2019 and Pichler and Reiter 2022 stand as the manuscript cites them**; the vault register rows follow the manuscript.
9. **The one-page German distillate was deleted** with the consolidation (dated snapshot, ages with every text change; pinned in git history).

Decisions of the acceptance round of 2026-07-31:

10. **The site keeps its own interface typology** (verification, exploration, edition, capture, audit) as site vocabulary; the paper's Table 2 names artefact forms, and the two stand side by side. The former open flag is closed.
11. **The gallery is a curated showcase** of the documented practice, broader than the paper. The eight former inventory projects keep their cards under the role `further`; the evidence block couples strictly to Table 3.
12. **The part-2 demo video moved from the paper page to the tutorial page.** The paper page carries the academic text alone; academic content and tutorial are separated (A8 updated in the site specification).
13. **The "Figure files" closing section stays in the rendered text** as the repository-facing note on the file/manuscript numbering; it falls away in the submission export.
14. **`paper-argument-map.md` and `submission-zfdg.md` were deleted with pins** (Section 24). The argument map described the seven-chapter text; the submission package derives fresh from Section 21 and the final text at submission time.
15. **Abstract revised in the read round of 2026-07-31.** The promptotype sentence left the Abstract; neither the term nor the four-member relation appears there. It is replaced by the responsibility sentence "Responsibility for the consequential judgements through which each iteration is verified and accepted remains with accountable contributors.", and "arising from" left the write-back sentence. Sections 4.15 and 14.1 are re-keyed accordingly.
16. **§1 opening revised by the operator (2026-07-31).** Paragraph 1 narrows *operationalisation* to the Pichler-Reiter sense and broadens to general software mediation in a second step; the Gephi and TEI examples are technically explicit (node or edge table, graph model and input format); the closing constraint sentence is bold. Paragraph 2 separates the probabilistic recognition step into its own two sentences and hedges the effort claim ("parts of the effort"). Paragraph 3 stands unchanged after an editing doublet was reverted. The section preview reads "The paper proceeds in five sections." Footnotes 3 to 5 adjusted (modular encoding framework; hedged LLM definition; processed or made usable). The §1 freeze of 2026-07-30 is superseded for these passages by the operator's own revision.
17. **Research question refocused (2026-07-31).** The responsibility clause left the question. It now asks how scholars, research software engineers, and AI agents collaborate through documented project knowledge to develop artefacts that help a project clarify its requirements and examine what its research data can warrantably support. Accountability is a supporting concern of the paper; the consistency chain (Abstract responsibility sentence, §2.3 and §2.4 checking architecture, §5.3 authority sentence) is checked when the read reaches Chapter 2.
18. **§1 restructured to five paragraphs (2026-07-31).** Problem; LLM routes in lean form; confinement and capacity thesis with "develop and compare"; checking paragraph using "checking" as umbrella word, "verified by experts" against "technical validation", and "as specified"; method paragraph with etymology, refocused research question, and active section preview. [The V&V assignment of the checking paragraph is superseded by decision 21, 2026-07-31; the five-paragraph structure stands.]
19. **Etymology stated at the term's introduction (2026-07-31).** The name combines prompt and prototyping and retains the prototype's clarifying function. First explanation anywhere; the site glossary mirrors it.
20. **Preview conventions (2026-07-31).** The roadmap announcement sentence is deleted; preview sentences are active with Section subjects; the promptotype is announced with the gloss "the identifiable and versioned state that an accepted iteration yields", which is the canonical short form of the §2.2 definition; the closing sentence reads "the method's scope and limits".
21. **The V&V pair follows the engineering standard (2026-07-31).** The assignment adopted earlier in this read round (experts verify, technology validates) is reversed: *verification* names conformity to formalised requirements (technical, deterministic), *validation* names the adequacy judgement that requires expert authority (scholarly). Rationale: §2.3 cites IEEE Std 1012 (IEEE 2017), whose definitions run in this direction; the previous usage cited the standard against its own definitions and would have provoked reviewer friction. Consequences: the checking taxonomy renames to *deterministic verification* and *Critical Expert validation*; §1 introduces the pair as *technical verification* and *scholarly validation* with a footnote anchoring the adaptation to IEEE 2017. Retained as proper names: *Verification Interface* (artefact category, site colour token, published anchors), the *Verification* Promptotyping Document type, the site part title *Verification*, project document names such as the SZD *verification concept*, and *schema validation* as the XML term of art. Supersedes decision 18.

Open flags that survive:

1. **Summerfield 2025** left the reference list with the operator's own revision; the confabulation term thereby has no source in the manuscript and the term itself no longer appears. Reopen only if the term returns.
2. **Doctoral Congress presentation** still needs a deposited persistent identifier (the footnote wording stays provisional until then).
3. **Vault claim follow-up.** The audit of 2026-07-31 ran over all 153 claims (36 carried, 36 moved, 68 orphaned, 13 internal); verdicts, defect list, and routing stand in `vault/knowledge/claim-audit-2026-07-31.md`. Open is the follow-up vault session: re-key `vault/knowledge/state.md` to the five-chapter structure and edit the claim files whose prose contradicts it.
4. **Final read-acceptance.** The operator has not yet read the promoted text end to end as the published version; the site renders it in the meantime by the promotion decision.

Evidence and production tasks that remain from the earlier list: the M³GIM `knowledge/domain.md` derivation question, the Notker verification and acceptance reconstruction, repository-visibility verification for restricted repositories, and the rights-clearance list (Section 22).

A manuscript section is accepted only when its conceptual and terminological decisions match this document, its citations and footnotes have been verified, no unresolved placeholder remains, figures are introduced and interpreted in prose, and the author has accepted the prose as the current manuscript version.

---

# 20. Next Work Block

1. Operator's end-to-end read of `knowledge/paper.md` as rendered on the site; findings return through the ordinary revision path with the rule catalogue of Section 16.6.
2. Vault claim follow-up from the audit of 2026-07-31 (open flag 3), in a vault session.
3. Submission package derived fresh from Section 21 and the final text, then venue submission (operator-gated).

---

# 21. Submission Route

**Venue (2026-07-23): ZfdG**, Zeitschrift für digitale Geisteswissenschaften. English submission possible, diamond OA, moderated multi-stage review. Documented fallbacks: DHQ, IJDH (OA-cost reservation), DSH, and the TGDK special issue Semantic Digital Humanities.

**ZfdG formal constraints, normative here.** Genre Fachartikel. Exposé first, at most 1,000 words plus literature list and provisional table of contents. Bilingual abstract, German and English, at most 750 characters each. Citation as footnote short reference author–year; official CSL file exists. Decimal section numbering, target depth two levels. Tools as formal software citations in the bibliography. Article licence CC BY-SA 4.0. British spelling stays (the American ZfdG house practice is observation, no requirement).

The applied submission package derives from this section and stands in `knowledge/submission-zfdg.md`.

**Gates.** No claim without a verification note, no submission without operator release. Before submission: novelty check against the current discourse, with outward-facing claims only in the form the check licenses.

---

# 22. Rights, Licensing, and Identity

- Dual licensing: MIT for code, CC BY 4.0 for documentation and Promptotyping Documents; third-party research data excepted per repository with its own rights statement.
- Citation identity: Christopher Pollin, Digital Humanities Craft OG, ORCID 0000-0002-4879-129X, GitHub profile via `sameAs`.
- Releases without a prescribed cadence, cut when the state carries one; a Zenodo DOI presupposes at least one release.
- Rights clearance pending with the operator (state 2026-07-23): wiiw-figaro-nam-demo, fortunoff-dashboard, co-ocr-htr, HerData, the three SuGW repositories, uc3-vetcore-proteomics, kisug-wissensbasis. The three co-authors in `FemPrompt/CITATION.cff` are entered by the operator (names rule).

---

# 23. Review-Commission Rules

Three process rules bind every audit or revision commission on this paper (carried from the July revision round at consolidation):

- Audit commissions are anchor-free. They name goal, context, and quality standard, but no findable passages, example projects, or ready-made solutions, so the commission also tests whether the criticism is discoverable in the text.
- A free lectorate pass (A0) runs before the auditor's first contact with known problem areas.
- Every change proposal carries a steelman of the existing text, and a hard operator gate stands between audit and implementation; no audit finding is implemented without a documented decision.

---

# 24. Provenance of Consolidated Records

The steering and revision documents of the July 2026 rounds were consolidated into this document and deleted; their full wording lives in git history at the pins below.

| Deleted document | What it held beyond this document | Pin |
|---|---|---|
| `paper-writing.md` | The German steering document of the seven-chapter text: its section mirror, core statements, per-decision dates, and open check points of the old text. | `7138d2a` |
| `revision.md` | The consolidated July revision round on the seven-chapter text: findings with implementation state, the evidence layer with counting methods and provenance grades, and the negative findings protecting that text. | `7138d2a` |
| `revision-2026-07-30.md` | The consolidation of the 2026-07-30 round: the ten-flag list with resolution state, the adopted literature with verification provenance, the reserve list, and the pins of the six working reports (`7979625`, `2fd7cd1`, `0a51b2b`, `5b18079`, `e1e0c8d`/`ec8cb33`, `14c9724`). | `7138d2a` |
| `verification-draft-sources.md` | The verdict table for the draft's 2025/2026 sources, one row per work with the check that ran. The surviving essence sits in the vault register's adoption notes. | `7138d2a` |
| `paper-distillate-2026-07-30.md` | The operator's one-page German distillate of the manuscript, a dated snapshot. | `7138d2a` |
| `paper-argument-map.md` | The concept model of the seven-chapter text, one argument chain per block with confirmation status. Historical since the promotion; deleted by operator decision 2026-07-31. | `46bd6ba` |
| `submission-zfdg.md` | The ZfdG submission package for the seven-chapter text (exposé, both short abstracts, formalities checklist). The normative formalities live in Section 21; the package is derived fresh at submission. | `46bd6ba` |

The reserve literature of the 2026-07-30 round (verified, worth keeping findable: Norman et al. 2026; Beck et al. 2026; Li et al. 2025; Chen et al. 2026; Wang et al. 2026; Cutler et al. 2025; Alvite-Díez 2025; Gautam et al. 2026) is recorded with full bibliographic data in the pinned consolidation.

---

# 25. Maintenance Rule

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
