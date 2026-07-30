---
figure_file: figure-02-knowledge-context-authority
manuscript_number: 2
id: knowledge-context-authority
title: Project knowledge, working context, implementation, and authority in Promptotyping
svg: ../svg/figure-02-knowledge-context-authority.svg
supersedes: ../figure-02-knowledge-context-authority.png
canvas: 960 x 640
status: draft
---

# Specification, Figure 2

## Caption this figure must satisfy

**Figure 2. Project knowledge, working context, implementation, and authority in Promptotyping.** Task-specific working context is assembled from the versioned project knowledge base and, where required, from retrieved source material or derived context artefacts. An AI agent operating within a harness carries out bounded implementation and revision tasks that produce or modify a digital research artefact. Deterministic validation and agentic review provide evidence about the artefact but do not authorise scholarly claims. Critical Expert verification assesses source fidelity, design, and interpretation, and only responsible human contributors accept an iteration for its stated purpose.

## Purpose

Separate four things that a single flow diagram of agentic development would otherwise conflate, namely persistent knowledge, the context selected for one task, the implementing agent, and the authority that verifies and accepts. The figure summarises the checking taxonomy of the manuscript's Table 1 without enumerating every form of checking.

## Reading direction

The upper band reads left to right, from the knowledge base through the working context and the harness to the artefact. The lower part reads downward and then to the right, from the artefact through the two evidence-producing checks and Critical Expert verification into acceptance. One long return at the bottom reads right to left, back into the knowledge base.

## Elements

1. Tinted panel, versioned project knowledge base, containing three white boxes for the three document layers.
2. Working context box, marked as task-specific.
3. Tinted harness box containing a nested AI agent box.
4. Digital research artefact box.
5. Deterministic validation box and agentic review box, both fed from the artefact.
6. Evidence box, fed by both checks, stating what evidence is and what it is not.
7. Critical Expert verification box, fed directly from the artefact, carrying the authority mark and naming its three objects of assessment.
8. Acceptance box, stating that the decision is purpose-specific and made by accountable humans.
9. Return from acceptance into the knowledge base, labelled as write-back.
10. Legend with three rows.

## Relations and labels

Verbatim labels:

- Versioned project knowledge base, with declarative documents, process documents, action documents
- Working context, task-specific
- AI harness, containing AI agent
- Digital research artefact
- Deterministic validation, formalised checks
- Agentic review, model-mediated checking
- Evidence, reports about the artefact, never an authorisation
- Critical Expert verification, source fidelity, design, interpretation
- Acceptance, purpose-specific decision, by accountable humans
- edge labels: per-task selection, assigned task, produces, informs, authorises
- return label: write-back into project knowledge
- legend: operational flow, evidence relation and write-back, accountable human authority

Two structural relations carry the caption's central distinction. Deterministic validation and agentic review reach the Evidence box by solid arrows, because they produce evidence. Evidence reaches Critical Expert verification by a dashed arrow labelled "informs", because it enters a judgement without settling it. Critical Expert verification reaches acceptance by a solid arrow labelled "authorises".

## Visual grammar

Solid line with a filled head marks operational flow and authorising acts. Dashed line with an open head marks a supporting relation, which here covers the evidence relation and the write-back. The filled disc inside a circle appears once, on Critical Expert verification. Tint marks a container whose named constituents are drawn inside it, which applies to the knowledge base and to the harness.

## What the figure must not imply

- The agent does not authorise anything. No arrow leaves the agent or the harness towards acceptance.
- Evidence is not acceptance. The dashed arrow into verification is the only path evidence takes, and it does not reach the acceptance box.
- The knowledge base and the working context are distinct. The selection arrow between them is labelled per-task, and the working context is never drawn as a copy of the base.
- The harness is not the agent. The agent is nested inside it, and the harness carries the mediating role.
- The arrangement is not a one-way pipeline. Acceptance returns into the knowledge base.
- The two checks are not an exhaustive taxonomy of checking. The figure names the two that produce evidence and the one that carries authority.
- Retrieved source material and derived context artefacts are named in the caption as further inputs to the working context; the figure does not draw them as boxes, so no reader may take the knowledge base to be the only possible source of context.

## Acceptance checks

- The four upper-band elements appear in the order knowledge base, working context, harness with nested agent, artefact.
- Exactly one filled disc, on Critical Expert verification.
- The Evidence box carries the negative statement "never an authorisation".
- The return line reaches the knowledge base and crosses no box.
