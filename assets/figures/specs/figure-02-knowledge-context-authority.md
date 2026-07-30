---
figure_file: figure-02-knowledge-context-authority
manuscript_number: 2
id: knowledge-context-authority
title: Project knowledge, working context, implementation, and authority in Promptotyping
svg: ../svg/figure-02-knowledge-context-authority.svg
supersedes: ../figure-02-knowledge-context-authority.png
canvas: 960 x 640
status: draft
revision: 2
---

# Specification, Figure 2

## Caption this figure must satisfy

**Figure 2. Project knowledge, working context, implementation, and authority in Promptotyping.** Task-specific working context is assembled from the versioned project knowledge base and, where required, from retrieved source material or derived context artefacts. An AI agent operating within a harness carries out bounded implementation and revision tasks that produce or modify a digital research artefact. Deterministic validation and agentic review provide evidence about the artefact but do not authorise scholarly claims. Critical Expert verification assesses source fidelity, design, and interpretation, and only responsible human contributors accept an iteration for its stated purpose.

## Purpose

Separate four things that a single flow diagram of agentic development would otherwise conflate, namely persistent knowledge, the context selected for one task, the implementing agent, and the authority that verifies and accepts. The figure summarises the checking taxonomy of the manuscript's Table 1 without enumerating every form of checking.

## Series grammar, revision 2 of 2026-07-30

This section binds all five figures of the series and is repeated in each specification.

The series carries two stroke weights. Primary weight, 2.5px, belongs to the operational chain and to the boxes that stand in it. Secondary weight, 1.25px, belongs to returns, evidence relations, constituent boxes drawn inside a container, and bordered annotations. Every figure legend draws its samples at the weight they carry, so the two weights are readable from the legend alone.

Box titles are set at 17px semibold, secondary text inside a box stays at 13px, edge labels and legend rows are 12px in grey. Padding inside a box is generous enough that the box reads as a station rather than as a label with a frame.

Each figure emphasises exactly one element, drawn with a light grey fill (#eeeeee) behind the primary stroke. In this figure the emphasised element is the Acceptance box. The fill marks the element the caption is about and carries no further information, and no second element in a figure may take it.

Because the light grey fill is now reserved for the single emphasised element, tint no longer marks containers. A container is a white box at primary weight whose constituents are white boxes at secondary weight. In this figure that rule applies to the knowledge base and to the harness, both of which lose their tint and keep their nesting.

The palette is black (#111111), three greys (#666666, #d9d9d9, #eeeeee), and white. One arrowhead geometry serves the whole series in a filled variant for flow and a hollow variant for supporting relations, drawn at a fixed size independent of stroke weight. Every label is a real text element, the canvas is declared by viewBox, and nothing is drawn that carries no statement.

## Layout, revision 2

The layout of revision 1 is accepted and stays. Revision 2 changes the grammar only, so stroke weights, title sizes, box padding, and the emphasis of the Acceptance box are the whole of the change. No station moves and no relation is rerouted.

## Reading direction

The upper band reads left to right, from the knowledge base through the working context and the harness to the artefact. The lower part reads downward and then to the right, from the artefact through the two evidence-producing checks and Critical Expert verification into acceptance. One long return at the bottom reads right to left, back into the knowledge base.

## Elements

1. Container box, versioned project knowledge base, at primary weight, containing three secondary-weight boxes for the three document layers.
2. Working context box, marked as task-specific.
3. Container box, AI harness, at primary weight, containing a nested secondary-weight AI agent box.
4. Digital research artefact box.
5. Deterministic validation box and agentic review box, both fed from the artefact.
6. Evidence box, fed by both checks, stating what evidence is and what it is not.
7. Critical Expert verification box, fed directly from the artefact, carrying the authority mark and naming its three objects of assessment.
8. Acceptance box, stating that the decision is purpose-specific and made by accountable humans. This is the emphasised element and carries the light grey fill.
9. Return from acceptance into the knowledge base, labelled as write-back, drawn at secondary weight.
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

Two structural relations carry the caption's central distinction. Deterministic validation and agentic review reach the Evidence box by solid arrows at primary weight, because they produce evidence. Evidence reaches Critical Expert verification by a dashed arrow at secondary weight labelled "informs", because it enters a judgement without settling it. Critical Expert verification reaches acceptance by a solid arrow at primary weight labelled "authorises".

## Visual grammar

Solid line with a filled head marks operational flow and authorising acts. Dashed line with an open head marks a supporting relation, which here covers the evidence relation and the write-back. The filled disc inside a circle appears once, on Critical Expert verification. The light grey fill appears once, on the Acceptance box, because acceptance is the state the caption ends on. Nesting marks a container whose named constituents are drawn inside it, which applies to the knowledge base and to the harness.

## What the figure must not imply

- The agent does not authorise anything. No arrow leaves the agent or the harness towards acceptance.
- Evidence is not acceptance. The dashed arrow into verification is the only path evidence takes, and it does not reach the acceptance box.
- The knowledge base and the working context are distinct. The selection arrow between them is labelled per-task, and the working context is never drawn as a copy of the base.
- The harness is not the agent. The agent is nested inside it, and the harness carries the mediating role.
- The arrangement is not a one-way pipeline. Acceptance returns into the knowledge base.
- The two checks are not an exhaustive taxonomy of checking. The figure names the two that produce evidence and the one that carries authority.
- Retrieved source material and derived context artefacts are named in the caption as further inputs to the working context; the figure does not draw them as boxes, so no reader may take the knowledge base to be the only possible source of context.
- The emphasis on the Acceptance box is a hierarchy of reading and no claim that acceptance outranks verification.

## Acceptance checks

- The four upper-band elements appear in the order knowledge base, working context, harness with nested agent, artefact.
- Exactly one filled disc, on Critical Expert verification.
- Exactly one element carries the light grey fill, the Acceptance box.
- The Evidence box carries the negative statement "never an authorisation".
- The return line reaches the knowledge base and crosses no box.
