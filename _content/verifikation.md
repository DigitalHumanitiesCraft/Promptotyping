---
title: Verification
slug: verifikation
status: complete
language: en
version: "0.2"
created: 2026-07-25
updated: 2026-07-26
source: knowledge/paper.md, sections 2.4 and 6.2
machine-url: https://dhcraft.org/Promptotyping/_content/verifikation.md
---

# Verification

The obvious objection to generated research artefacts is quality. The method answers with a check anchored in the documents. That check is systematically necessary because the mapping from the semi-formal document set onto the running artefact is executed stochastically, so its fidelity is not secured by construction.

## Two kinds of check

The method separates what a rule decides from what a person vouches for.

- **Validation** is what a formal rule decides, a schema, a test or a constraint. It runs unsupervised, because the feedback loop is closed and the agent can read the result itself.
- **Verification** is what domain expertise decides against the sources and against scholarly judgement. It does not delegate.

This usage departs deliberately from the norm of software engineering, where verification names the check against the specification and validation the check against intended use. It follows the word roots instead, *verus* for a truth claim a judgement has to carry, and *validus* for what holds under a rule that has been set. The departure applies to the checking of generated output and leaves untouched the ordinary sense in which cases validate a method.

## Three levels of checking with their zones of autonomy

The pair operates at three levels, and each carries its own zone of agent autonomy.

**Data fidelity.** Whether the artefact's renderings match the source data is checked by sampling, and wherever correctness is deterministically decidable, by schema validation, test suites and builds that the agent runs unsupervised. Where fidelity is not decidable that way, as in text-recognition results, annotations and transformations, an adversarial machine review can be interposed, an LLM instructed to attack an output against its sources. That instance is released case by case and ranks below human verification in authority.

**Requirement satisfaction.** The check runs against the acceptance criteria of the requirements, which is what user stories with acceptance criteria are for. This is the level the method has begun to delegate to an agent instance that operates the running artefact against those criteria.

**Design conformance.** It stays in the domain expert's zone and is checked by reading the artefact against the design document. Here tool criticism becomes a routine act, because the tool's explicit assumptions are in writing for once. Interpretation, contextualisation and the judgement of whether the right questions are being asked remain here too. Determining whether a person named in one document is the same as a similarly named person in another is an act of historical contextualisation, and the documented projects mark it explicitly as a decision reserved for the domain expert.

## The Critical Expert in the Loop

The role that carries these duties is the Critical Expert in the Loop. It differs from the generic human in the loop by requiring domain expertise together with awareness of LLM-specific failure modes. Two failure modes are structural in current LLMs.

- **Sycophancy** is the tendency to agree with user assumptions instead of challenging them. Absence of objection is therefore no confirmation.
- **Confabulation** is the generation of plausible but false output. The term fits the behaviour more closely than hallucination, because the LLM fills a gap with what fits and does not report what it lacks.

The role's task extends beyond checking outputs into the unexplored possibility space, into the questions not asked and the alternatives not generated.

Two kinds of judgement sit in this role, and they separate as soon as two people hold it. One decides whether the artefact answers the research question, whether the data is represented correctly, and what a figure needs by way of context before it may be read. The other decides workflow, technology and the form of the artefact, and it is this judgement that reports a fault to the agent in the terms the agent works in, by element identifier. Where both judgements coincide in one person, that is the hybrid case. Where the second is absent lies the boundary of what the method reaches.

## What the method does not do

It does not make verification automatic, and it should not pretend to. Verification is precisely the scholarly labour that the division of responsibility assigns to the human, and its cost is the honest price of the method. Benchmarks for evaluating AI-generated results in digital-edition tasks are still lacking. The method answers on other ground, assigning the check to the Critical Expert and to the deterministic layer, so that verification does not wait on a benchmark that does not yet exist.
