---
title: Checking
slug: verifikation
status: complete
language: en
version: "0.5"
created: 2026-07-25
updated: 2026-07-31
source: knowledge/paper.md, sections 2.2.4, 2.3.1 and 3.3
machine-url: https://dhcraft.org/Promptotyping/_content/verifikation.md
---

# Checking

The obvious objection to generated research artefacts is quality. The method answers with checks anchored in the maintained project knowledge. Those checks are systematically necessary because the mapping from a semi-formal document set onto a running artefact is executed stochastically, so its fidelity is not secured by construction.

## Verification and validation

The method separates what a rule decides from what a person vouches for. Verification asks whether an output or implementation conforms to a formalised requirement, a schema, a test, a constraint or a specified mapping. Validation asks whether the underlying representation is warranted by the source material and adequate for the research purpose it serves. An implementation can be technically correct and still fail validation, because the requirement it faithfully realises may itself be inadequate.

This usage follows the norm of software and systems engineering, where verification names the check against the specification and validation the check against intended use (IEEE Std 1012). Schema validation, the established XML term for an automatic check against a schema, keeps its name as a term of art and is in this sense a form of verification.

## Four forms of checking

Verification and validation are the two poles. Between them the documented practice has settled four distinguishable forms, each with its own evidential scope and its own authority. They are not interchangeable, and treating them as one collapses the difference between inspecting an output and being answerable for it.

- **Deterministic verification** tests conformity to formalised requirements through schemas, constraints, transformation tests, structural audits and reproducible measurements. Its conclusions reach exactly as far as the properties the check encodes. An agent runs these unsupervised and acts on unambiguous failures within its assigned scope.
- **Agentic review** is a bounded, tool-supported investigation in which one or more LLM-based agents examine outputs, data states, implementations or artefacts against the relevant sources, references, requirements and criteria. It may locate project files, compare sources and outputs, execute formal checks, investigate discrepancies, or coordinate specialised, parallel or adversarial reviewers. Its findings remain probabilistic evidence for a later judgement.
- **Critical Expert verification and adjudication** is the accountable examination of particular outputs against their sources and the resolution of cases that no deterministic or probabilistic procedure can decide. It can confirm, correct or reject an earlier finding, and it records who carries the resulting judgement.
- **Scholarly validation** assesses whether the representations, requirements, evaluation criteria and artefacts governing a workflow are warranted by the research material and adequate for their intended purpose.

An LLM-as-a-Judge evaluates a supplied output under a given reference or rubric and returns a score, a ranking or a verdict. That is one operation an agentic reviewer can perform among others, and the wider sense of review as criteria-guided examination, familiar from reviews of digital editions and resources, is what the term is meant to keep.

How much an agentic review is worth depends on how the investigation is organised. Agentic Engineering settles how review tasks are delimited and decomposed, which project knowledge and sources reach the reviewer, which tools and permissions it holds, how several reviewers are coordinated, and when an unresolved case goes to a person for adjudication.

## Acceptance is separate

Acceptance is the accountable decision by which an identifiable iteration state becomes a promptotype for a stated purpose. It stands apart from all four forms of checking, and it is bounded: an artefact can be accepted as an experimental processing pipeline or as a handover state without being accepted as a publication-ready scholarly edition.

A deterministic metric shows the boundary clearly. Once reference text, extraction rules, normalisation, comparison scope and calculation procedure are specified, a character error rate can be computed reproducibly. It still measures deviation from a selected reference rather than transcription correctness. The choice of reference, the treatment of corrections and annotations, the exclusion of particular textual phenomena and the reading of the resulting value stay technical and editorial decisions.

## The authority rule

One project failure produced the method's sharpest rule. In the ZBZ workflow an agent-screening stage assigned approval labels although no responsible contributor had granted approval. The labels were abolished and agent findings reclassified as provisional evidence pending operator adjudication. Generalised, the rule reads: **agents may assemble evidence, compare materials, investigate discrepancies, execute checks and record provisional assessments, but they may not independently assign an authorised verification status, scholarly validation, approval or acceptance.**

The capacity to inspect an output is thereby separated from the authority to record it as verified. Where a workflow carries checking states, they stay distinguishable by the procedure that produced them. Combining them into one confidence score destroys exactly the information that makes the state readable.

## The Critical Expert in the Loop

The role that carries the accountable judgements is the Critical Expert in the Loop. It differs from the generic human in the loop by requiring domain expertise together with awareness of LLM-specific failure modes. Two of those are structural in current systems.

- **Sycophancy** is the tendency to agree with user assumptions instead of challenging them. Absence of objection is therefore no confirmation.
- **Confabulation** is the generation of plausible but false output. The term fits the behaviour more closely than hallucination, because the model fills a gap with what fits and does not report what it lacks.

The role's task extends beyond checking outputs into the unexplored possibility space, into the questions not asked and the alternatives not generated. Alternatives may have been excluded, conventions reproduced without justification, and absences concealed behind an artefact that looks coherent.

Two kinds of judgement sit in this role, and they separate as soon as two people hold it. One decides whether the artefact answers the research question, whether the data are represented correctly, and what a figure needs by way of context before it may be read. The other decides workflow, technology and the form of the artefact, and it is this judgement that reports a fault to the agent in the terms the agent works in, by element identifier. Where both coincide in one person, that is the hybrid case. Where the second is absent lies the boundary of what the method reaches.

## What the method does not do

It does not make validation automatic, and it should not pretend to. Validation is the scholarly labour that the division of responsibility assigns to the human, and its cost is the honest price of the method. Benchmarks for evaluating AI-generated results in digital-edition tasks are still lacking. The method answers on other ground, assigning the check to the Critical Expert and to the deterministic layer, so that validation does not wait on a benchmark that does not yet exist.
