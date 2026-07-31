---
figure_file: figure-04-m3gim-loop
manuscript_number: null  # retired from the manuscript 2026-07-31; was Figure 3
id: m3gim-loop
title: Prospective Promptotyping during modelling and data capture in M³GIM
svg: ../svg/figure-04-m3gim-loop.svg
supersedes: ../figure-04-m3gim-loop.png
canvas: 960 x 520
status: draft
revision: 2
---

# Specification, Figure 3 (file figure-04)

## Caption this figure must satisfy

**Figure 3. Prospective Promptotyping during modelling and data capture in M³GIM.** The emerging data model shaped the generated exploration and capture environment, while interaction with the environment exposed requirements and limitations that informed documented revisions. The case shows how a promptotype can participate in the formation of project knowledge rather than merely implement an already stabilised model.

## Purpose

Show a closed loop in which the artefact contributes to the formation of the data model instead of only realising it. The loop is the argument; a linear chain from model to interface would state the opposite of the case.

## Series grammar, revision 2 of 2026-07-30

This section binds all five figures of the series and is repeated in each specification.

The series carries two stroke weights. Primary weight, 2.5px, belongs to the operational chain and to the boxes that stand in it. Secondary weight, 1.25px, belongs to returns, evidence relations, constituent boxes drawn inside a container, and bordered annotations. Every figure legend draws its samples at the weight they carry, so the two weights are readable from the legend alone.

Box titles are set at 17px semibold, secondary text inside a box stays at 13px, edge labels and legend rows are 12px in grey. Padding inside a box is generous enough that the box reads as a station rather than as a label with a frame.

Each figure emphasises exactly one element, drawn with a light grey fill (#eeeeee) behind the primary stroke. This figure is the one exception in the series and carries no emphasised element, because its caption makes no claim about a state that the rest of the figure leads to. All six stations stand at equal weight, which is what a closed circuit requires.

Because the light grey fill is reserved for the single emphasised element elsewhere in the series, tint no longer marks containers. A container is a white box at primary weight whose constituents are white boxes at secondary weight. This figure has no container.

The palette is black (#111111), three greys (#666666, #d9d9d9, #eeeeee), and white. One arrowhead geometry serves the whole series in a filled variant for flow and a hollow variant for supporting relations, drawn at a fixed size independent of stroke weight. Every label is a real text element, the canvas is declared by viewBox, and nothing is drawn that carries no statement.

## Layout, revision 2

The racetrack layout of revision 1 is accepted and stays. Revision 2 changes the grammar only, so stroke weights, title sizes, box padding, and the edge-label size are the whole of the change.

## Reading direction

Clockwise on a racetrack layout. The upper row reads left to right from the data model through early capture to the generated interface. The right side descends into the insights that use exposed. The lower row reads right to left through the documentary record into the revised model. The left side ascends back into the data model, which closes the loop.

## Elements

Six rectangles of equal size at primary weight, three in the upper row and three in the lower row, connected by six arrows that form one uninterrupted circuit:

1. Data model, RiC-O and JSON-LD
2. Early data capture, by project partners
3. Generated interface, exploration and capture
4. Modelling and capture insights
5. Decision register and journal
6. Revised data model and capture

## Relations and labels

Verbatim edge labels, in circuit order:

- structures the capture
- populates the interface
- interaction reveals requirements
- findings are documented
- documented revision
- revised model, next iteration

## Visual grammar

Solid line with a filled head at primary weight marks operational flow, which covers the three transitions of the productive half and the return of the revised model into the next round. Dashed line with an open head at secondary weight marks documented write-back, which covers the two transitions in which findings pass through the record before the model changes. The figure carries no authority mark, because the caption makes no claim about who validated or accepted, and inventing one would exceed the source.

## What the figure must not imply

- The loop is not a schedule and not a single pass. The manuscript records overlapping and repeated steps, and the figure idealises them.
- The interface does not produce the data model. It exposes requirements, and the model changes only after the passage through the decision register and journal.
- Documentation is not an optional side branch. It lies on the circuit, so no path leads from an insight to a revised model that bypasses the record.
- Neither row is a phase. The two rows are a layout device for a circle in landscape format.
- The figure makes no claim about acceptance of the M³GIM artefact, and it carries no acceptance element.
- The absence of an emphasised element does not mark the case as less important. It follows from the caption, which names no resulting state.

## Acceptance checks

- Six nodes, six arrows, one circuit, no crossing lines.
- Every arrow labelled.
- The two write-back transitions are the dashed ones and no others.
- No element carries the light grey fill.
