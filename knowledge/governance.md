---
title: Project Governance
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: draft
language: en
created: 2026-08-17
updated: 2026-08-17
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
topics: ["[[Promptotyping]]", "[[Agentic Knowledge Engineering]]", "[[Research Mission Control]]"]
related: [INDEX, project, specification, verification, journal, paper-knowledge]
---

# Project Governance

This Action Document defines the project-wide rules under which people and LLM-based agents read, change, check, accept, and publish the Promptotyping method, paper, site, and evidence layer. It binds the repository action layer and provides a reusable governance instance for Promptotyping projects with distributed knowledge, delegated work, writing tools, sensitive material, or public outputs.

## Governing model

Promptotyping organises iterative development. The project knowledge base records the maintained understanding from which artefacts are derived. The Grounded Vault records source, representation, distillate, assertion, and output relations. Project Governance defines authority, status, permissions, write-back, rights, publication, and escalation. Research Mission Control may coordinate these functions in complex multi-agent projects.

Research Mission Control is an optional orchestration architecture. A smaller Promptotyping project may assign several governance roles to the same person or agent while preserving their distinct responsibilities and checks.

## Authority

### Critical Expert

The Critical Expert holds final authority over scholarly interpretations, canonical definitions, evidential sufficiency, consequential design choices, rights decisions, and public release. They validate the scholarly adequacy of representations and accept or reject an iteration.

### Research Orchestrator

The Research Orchestrator maintains the research question, terminology, argument, sources, evidence status, uncertainty, and method or teaching decisions. They prepare a versioned Research Brief and return implementation findings to the appropriate knowledge document.

### Operational Orchestrator

The Operational Orchestrator translates accepted research commitments into bounded changes to files, repositories, data, slides, documents, interfaces, and other artefacts. They may decide reversible implementation details within the authorised scope and must report the real end state, checks, deviations, and new findings.

### Verification and Integration

Verification and Integration independently compare claims, artefacts, sources, schemas, tests, renderings, and cross-document consistency. This role records findings and verdicts. Scholarly direction remains with the Critical Expert and Research Orchestrator.

### Specialist agents

Specialist agents receive a bounded goal, authorised sources, writable locations, expected outputs, acceptance criteria, and required evidence. Their reports remain provisional until checked against the cited artefacts.

## Authority order

When two instructions conflict, apply this order and record the resolution:

1. current, explicit decision of the Critical Expert;
2. this governance document;
3. accepted specification, domain knowledge, and verification documents;
4. active plan and journal entries;
5. generated outputs and conversational summaries.

A current Critical Expert decision that changes a standing rule triggers write-back into this document or the affected canonical document.

## Epistemic governance

### Source status

Every consequential statement identifies the kind of support on which it rests:

- **primary source:** original research material or authoritative record;
- **representation:** transcription, OCR, encoding, image derivative, or structured conversion of a source;
- **distillate:** bounded synthesis of identified source passages;
- **assertion:** explicit project claim with scope and grounding;
- **interpretation:** expert judgement whose warrant depends on disciplinary reasoning;
- **generated proposal:** model output awaiting verification or validation.

Derived material keeps a stable link to its source and transformation. A repository location establishes availability. Evidential authority follows from provenance and review.

### Checking and acceptance

- **Deterministic verification** tests conformity to formalised requirements such as schemas, constraints, mappings, tests, or build rules.
- **Agentic review** provides a structured probabilistic assessment and records the model, prompt, inputs, criteria, and output.
- **Scholarly validation** assesses whether a representation or interpretation is warranted by the sources and fit for its research purpose.
- **Acceptance** records the accountable decision to use a particular versioned state for its stated purpose.

These decisions remain separately recorded. Passing a technical check supplies evidence for conformity. Scholarly validity and release require the responsible judgement defined above.

### Uncertainty

Uncertain readings, inferred entities, topic labels, approximate mappings, contested definitions, and missing rights information receive an explicit status and a reason. Confidence values supplement the evidence record when their scale and interpretation are documented.

## Operational governance

### Least authority

Each task receives the smallest practical set of tools, data, permissions, and writable paths. Read-only inspection is the default for repositories and systems owned by another lane. Destructive, external, public, identity-bearing, or difficult-to-reverse operations require an explicit Critical Expert gate.

### Canonical locations

Each project records one canonical location per artefact class. Repository knowledge holds versioned project rules and artefacts. The Obsidian Vault holds portfolio knowledge and cross-project synthesis. Grounded Vault instances hold evidence relations. Google Docs and Slides are publication or collaboration copies unless a project decision assigns them another role.

### End-state verification

An implementation report cites the actual files, diffs, commits, data, tests, generated outputs, and renderings that establish the result. A self-report is an input to verification. The verified end state is the operative record.

## Write-back

Every accepted implementation finding has a named destination:

- corrections to source representations return to the representation and its provenance record;
- clarified requirements return to `specification.md` or the responsible domain document;
- project-wide authority or status rules return to `governance.md`;
- reusable methodological findings return to the Promptotyping method knowledge;
- chronological decisions and failed approaches return to `journal.md`;
- evidence relations return to the Grounded Vault instance;
- changes relevant to another project cross the boundary through an integration document or explicit handoff.

The implementation report proposes write-backs. The responsible authority confirms those with scholarly or public consequences.

## Rights, privacy, and disclosure

Every source and output carries a documented rights basis before public distribution. Personal, confidential, contract-bound, culturally sensitive, or restricted material remains within its authorised environment. Public examples use cleared material or synthetic substitutes and state which one applies. Model and tool use is disclosed at the level needed to understand authorship, transformation, and verification.

## Publication

A public release requires:

1. an identified version of the content and artefacts;
2. resolved or explicitly disclosed verification and validation findings;
3. confirmed rights and privacy status;
4. checked citations, links, and licences;
5. a rendered preview where layout or interaction carries meaning;
6. explicit release by the Critical Expert.

## Escalation

Work returns to the Critical Expert when it encounters:

- conflicting source interpretations or definitions with scholarly consequences;
- insufficient evidence for a load-bearing claim;
- uncertain rights, privacy, attribution, or disclosure conditions;
- an external, public, destructive, identity-bearing, or difficult-to-reverse action;
- a requested change outside the authorised artefact or repository scope;
- disagreement between epistemic validity and operational correctness;
- a proposed method change that would alter Promptotyping's general claims.

The escalation object contains the context, recommended position, concrete artefact, checking criterion, consequence, and a short response form.

## Action-layer binding

Repository action layers such as `CLAUDE.md` or `AGENTS.md` load this document before changes that affect method content, evidence, public outputs, permissions, or publication. They may narrow permissions for a session or tool. Any expansion of authority requires a recorded Critical Expert decision and a corresponding governance update.

## Acceptance criteria

This governance instance is adequate when:

- every consequential action maps to an authorised role;
- every public or scholarly claim maps to a source, assertion, or explicit expert judgement;
- verification, scholarly validation, acceptance, and publication remain distinguishable;
- every accepted finding has a write-back destination;
- rights and privacy constraints are visible before distribution;
- escalation produces a self-contained decision object;
- action layers refer to this document and preserve its authority boundaries.

