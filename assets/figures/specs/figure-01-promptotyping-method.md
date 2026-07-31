---
figure_file: figure-01-promptotyping-method
manuscript_number: 1
id: promptotyping-method
title: The Promptotyping method
svg: ../svg/figure-01-promptotyping-method.svg
supersedes: ../figure-01-promptotyping-method.png
canvas: 960 x 600
status: draft
revision: 4
---

# Specification, Figure 1

## Caption this figure must satisfy

**Figure 1. The Promptotyping method.** Preparation, Exploration, Distillation, and Implementation are recurrent forms of work rather than fixed stages. Findings arising from Implementation may return the work to earlier forms, most frequently to Distillation. The Critical Expert specifies and revises the knowledge documents and validates the resulting artefact. Purpose-specific acceptance connects maintained project knowledge, the digital research artefact, the referenced research-data state, and the documented grounds of acceptance as an identifiable promptotype.

Caption alignment is pending one operator decision. The figure carries the relation label "verifies and accepts" (operator instruction of 2026-07-31), while the caption sentence above still says "validates the resulting artefact"; whichever wording the paper settles on, caption and figure must use the same verb.

## Purpose

Define the method by naming its four forms of work, the digital research artefact that Implementation produces, the acceptance under which the artefact becomes part of a promptotype, the returns that carry findings back into maintained knowledge, and the human role that specifies and accepts.

## Series grammar, revision 2 of 2026-07-30

This section binds all five figures of the series and is repeated in each specification.

The series carries two stroke weights. Primary weight, 2.5px, belongs to the operational chain and to the boxes that stand in it. Secondary weight, 1.25px, belongs to returns, evidence relations, constituent boxes drawn inside a container, and bordered annotations. Every figure legend draws its samples at the weight they carry, so the two weights are readable from the legend alone.

Box titles are set at 17px semibold, secondary text inside a box stays at 13px, edge labels and legend rows are 12px in grey. Padding inside a box is generous enough that the box reads as a station rather than as a label with a frame.

Each figure emphasises exactly one element, drawn with a light grey fill (#eeeeee) behind the primary stroke. In this figure the emphasised element is the Promptotype box. The fill marks the element the caption is about and carries no further information, and no second element in a figure may take it.

Because the light grey fill is now reserved for the single emphasised element, tint no longer marks containers. A container is a white box at primary weight whose constituents are white boxes at secondary weight.

The palette is black (#111111), three greys (#666666, #d9d9d9, #eeeeee), and white. One arrowhead geometry serves the whole series in a filled variant for flow and a hollow variant for supporting relations, drawn at a fixed size independent of stroke weight. Every label is a real text element, the canvas is declared by viewBox, and nothing is drawn that carries no statement.

### Local deviations, revision 4 of 2026-07-31

Four deviations hold for this figure only.

1. The most frequent return, into Distillation, is drawn at 2px in black with a matching hollow head, so it stands visibly stronger than the two grey returns. This is a third stroke treatment local to this figure; the other figures of the series keep the two-weight rule.
2. The authority arrow "verifies and accepts" is routed orthogonally around the row (right along the canvas top, down the free right corridor, left into its target), because a straight line from the top-centre mark would cross the operational chain.
3. That arrow targets the transition arrow between Digital Research Artefact and Promptotype rather than a box. The arrow-onto-arrow figure encodes that the transition happens only under the Critical Expert's judgement.
4. The two authority arrows carry the hollow head on a solid line at primary weight, so an authorising act is distinguishable from the production flow, whose arrows keep the filled head. The legend shows this in one merged sample, the disc mark followed by a solid hollow-headed line, under the label accountable human authority.

## Reading direction

Left to right along the row of work forms, then down at the right edge, Implementation into the digital research artefact, the artefact into the promptotype. The returns read right to left below the row, and the human role enters from above. A reader who follows only the primary arrows gets the productive path; a reader who follows the dashed band gets the corrective path.

## Elements

1. Four rectangles in one row, equal in size, in this order: Preparation, Exploration, Distillation, Implementation. Each carries its name and a short secondary description of its object. All four stand at primary weight, and the row is the dominant object of the figure.
2. One rectangle below the right end of the row, labelled Digital Research Artefact, connected from Implementation by a vertical flow arrow. It is a state in the operational chain, at primary weight, without secondary description.
3. One rectangle at the bottom right, labelled Promptotype, listing its four constituents as plain lines inside, compact in size and spacing so it does not outweigh the row. This is the emphasised element and carries the light grey fill. A vertical flow arrow leads from the artefact into it, labelled purpose-specific acceptance; this transition arrow is the target of the acceptance relation.
4. One authority mark at the top centre of the canvas above Distillation, an open circle containing a filled disc, with the label Critical Expert set centred beneath it.
5. Three return paths sharing one common stem that leaves the underside of Implementation, with staggered branches re-entering Distillation, Exploration, and Preparation at three depths. The branch into Distillation departs first, and the stem down to that branch and the branch itself are the strong ones (local deviation 1).
6. The return labels set beneath their branches on a common left edge, and the small grey group label write-back set above the topmost branch.
7. A compact one-row legend naming the three visual distinctions the figure uses, with the authority sample merging mark and arrow style (local deviation 4).

## Layout

The main chain must dominate. The row of four forms of work and the arrows between them carry primary weight; the chain turns downward after Implementation, first into the Digital Research Artefact, then into the Promptotype, both connected by vertical flow arrows at primary weight. The returns beneath the row carry secondary weight, so the productive path is legible before the corrective one.

The Critical Expert stands at the top centre above Distillation. The arrow "specifies and revises project knowledge" drops vertically into the top edge of Distillation. The arrow "verifies and accepts" leaves the mark to the right and reaches the artefact-to-promptotype transition by the orthogonal route of local deviation 2; its head meets the transition in its upper part, and the transition label purpose-specific acceptance stands below that meeting point on the transition's left side, so gate label and transition label stay vertically separated.

The three returns share one stem and are grouped rather than scattered. Each label sits under its own branch, all on a common left edge, with the note "most frequent return" under the strong branch's label. The group label write-back stands in small grey type above the strong branch.

The legend is one compact row at the lower left, clear of the returns above it and of the Promptotype box to its right.

## Relations and labels

Verbatim labels, which are terminology and may not be paraphrased in the SVG:

- node names: Preparation, Exploration, Distillation, Implementation, Digital Research Artefact, Promptotype, Critical Expert
- form descriptions: "data, sources, standards, research context" (Preparation); "what the data affords, and what it does not" (Exploration); "Promptotyping Documents" (Distillation); "agentic implementation in an AI harness" (Implementation)
- promptotype constituents: maintained project knowledge, digital research artefact, referenced research-data state, documented grounds of acceptance
- transition label: purpose-specific acceptance (on the artefact-to-promptotype arrow)
- returns: project knowledge revised (Distillation), data understanding revised (Exploration), source basis or conditions revised (Preparation)
- return band: write-back
- human relations: specifies and revises project knowledge (into Distillation), verifies and accepts (onto the artefact-to-promptotype transition)
- legend: flow of work, write-back, accountable human authority

The return into Distillation carries the additional note "most frequent return", which encodes the caption's claim about frequency.

## Visual grammar

Solid line with a filled head marks the flow of work. Solid line with a hollow head marks the acts of the Critical Expert, so authorisation is readable as distinct from production (local deviation 4). Dashed line with an open head marks the returns, which carry findings without themselves producing an artefact state; the strong black dashed branch marks the most frequent one. The filled disc inside a circle is the only filled mark in the figure and denotes accountable human authority. The light grey fill of the Promptotype box marks it as the state the caption is about. The authority arrow ending on the labelled transition arrow, rather than on a box, marks purpose-specific acceptance as a judgement the Critical Expert authorises and denies that it is an automatic step of the production flow.

## What the figure must not imply

- No fixed pipeline. The row shows an order of first passage, and the return paths deny that the order is a schedule.
- Implementation does not directly produce a promptotype. The digital research artefact stands between them, and only its acceptance constitutes the promptotype.
- The transition from artefact to promptotype is not automatic. Verification and acceptance are the Critical Expert's responsible judgements, drawn as the authority arrow onto the transition, and never as an unlabelled process step.
- Write-back is not a fifth form of work. It is drawn as a relation between existing forms and carries no box of its own.
- The Critical Expert is not a final review gate only. One of the two authority arrows enters Distillation, before implementation begins.
- The promptotype is not the artefact. The artefact is one of four constituents inside the promptotype box, and the artefact box and the constituent line name the same thing in two roles.
- Acceptance is not finality. Nothing in the figure marks an end state, and no arrow leaves the promptotype towards publication.
- The relative depth of the three returns encodes which form is re-entered, and it does not encode cost, duration, or severity; frequency is encoded solely by the strong stroke and the note.
- The emphasis on the Promptotype box is a hierarchy of reading and no statement about value. It carries no meaning that the label does not already carry.

## Acceptance checks

- All seven verbatim node names present and spelled as in the manuscript.
- The chain Implementation, Digital Research Artefact, Promptotype is connected by two flow arrows; the second carries the label purpose-specific acceptance, and the authority arrow "verifies and accepts" ends on it above that label.
- Both authority arrows carry the hollow head on a solid line, and no flow arrow does.
- Three returns present, each labelled, each terminating at a different box, all leaving Implementation through one common stem; the Distillation branch is visibly stronger than the other two and carries the note "most frequent return".
- The return labels share one left edge; the group label write-back stands small and grey above the return band.
- The disc appears exactly once outside the legend, in the Critical Expert mark, and the legend explains it.
- Exactly one element carries the light grey fill.
- No label crosses a box edge or another element.
