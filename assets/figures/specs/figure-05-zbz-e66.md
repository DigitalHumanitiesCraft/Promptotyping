---
figure_file: figure-05-zbz-e66
manuscript_number: 4
id: zbz-e66
title: The ZBZ OCR/TEI workflow before and after decision E66
svg: ../svg/figure-05-zbz-e66.svg
supersedes: ../figure-05-zbz-e66.png
canvas: 960 x 700
status: draft
revision: 2
---

# Specification, Figure 4 (file figure-05)

## Caption this figure must satisfy

**Figure 4. The ZBZ OCR/TEI workflow before and after decision E66.** Before E66, an agent-generated assessment could appear as an authorised approval state. In the revised workflow, deterministic verification and agentic review contribute evidence, while only accountable editors authorise validation and acceptance. The project-specific failure also produced method-level write-back in the rule that an agent must never record approval, validation, or acceptance that a responsible person has not explicitly granted.

## Purpose

Show one failure and its correction as a change in where authority sits. The two sides are comparable only if the reader can see that the same generated output enters both and that the difference lies in what may follow it.

## Series grammar, revision 2 of 2026-07-30

This section binds all five figures of the series and is repeated in each specification.

The series carries two stroke weights. Primary weight, 2.5px, belongs to the operational chain and to the boxes that stand in it. Secondary weight, 1.25px, belongs to returns, evidence relations, constituent boxes drawn inside a container, and bordered annotations. Every figure legend draws its samples at the weight they carry, so the two weights are readable from the legend alone.

Box titles are set at 17px semibold, secondary text inside a box stays at 13px, edge labels and legend rows are 12px in grey. Padding inside a box is generous enough that the box reads as a station rather than as a label with a frame. The two column heads of this figure are the one place in the series where type goes above the title size, at 18px semibold, because they name the comparison the whole figure makes.

Each figure emphasises exactly one element, drawn with a light grey fill (#eeeeee) behind the primary stroke. In this figure the emphasised element is the Critical Expert validation box together with the authority disc it carries. The fill marks the element the caption is about and carries no further information, and no second element in a figure may take it.

Because the light grey fill is now reserved for the single emphasised element, tint no longer marks containers. A container is a white box at primary weight whose constituents are white boxes at secondary weight. This figure has no container.

The palette is black (#111111), three greys (#666666, #d9d9d9, #eeeeee), and white. One arrowhead geometry serves the whole series in a filled variant for flow and a hollow variant for supporting relations, drawn at a fixed size independent of stroke weight. Every label is a real text element, the canvas is declared by viewBox, and nothing is drawn that carries no statement.

## Layout, revision 2

The figure is rebuilt as a symmetric two-column comparison. Revision 1 drew two panels of unequal presence, and the right side towered over the left, which made the correction look like the whole subject and the failure like a marginal note.

The two columns are equal in width and stand at equal distance from the divider. Each carries a column head, "Before E66" on the left and "After E66" on the right, at 18px semibold, both on the same baseline.

Both columns start their chain at the same y with the box "Generated output", which is the visual form of the claim that the same output enters both workflows.

The central vertical divider runs from above the column heads' chains to the foot of both columns and carries the label "Decision E66" at its vertical centre, knocked out of the rule.

The failure diagnosis of the left column is a bordered annotation box at secondary weight, standing at the foot of the left column with its bottom edge aligned to the bottom edge of the right column's final station. It holds the diagnosis in the manuscript's words and gives the left side a real terminal presence.

The empty span between the left chain's last station and the annotation box stays empty. It is the visual form of the statement that the failure state was short, and nothing may be moved into it.

The authority disc appears exactly once, on the right, inside the Critical Expert validation box, which is the emphasised element.

## Reading direction

Two columns separated by a vertical rule that carries the decision. Each column reads downward. The left column is short, because the failure state is short, and its collapse of production into approval is the point. The right column branches, converges into evidence, and then passes through a single human mark before a status is recorded.

## Elements

Left column, headed Before E66:

1. Generated output
2. Agent screening
3. Agent-recorded approval status
4. A bordered annotation box at the foot of the column stating that production and checking collapse into one operation and that no responsible person authorised the status.

Divider, labelled Decision E66, drawn as a vertical rule from the top of the columns to their foot.

Right column, headed After E66:

1. Generated output
2. Workflow state, per stream, fed directly from the generated output
3. Deterministic verification and agentic review, both fed from the generated output
4. Evidence, fed by both, stating that it reports about the output and is never an authorisation
5. Critical Expert validation, carrying the authority mark, emphasised by the light grey fill
6. Human-authorised validation status, only accountable editors

## Relations and labels

Verbatim labels are the element names above. The annotation box carries the diagnosis verbatim, "production and checking collapse into one operation; no responsible person authorised the status". Edge labels on the right column are "informs" on the dashed arrow from evidence into validation, and "authorises" on the solid arrow from validation into the status. The left column carries no edge labels, because every one of its transitions is an unbroken machine sequence and naming them would suggest deliberation the case did not contain.

## Visual grammar

Solid line with a filled head at primary weight marks operational flow and authorising acts. Dashed line with an open head at secondary weight marks the evidence relation. The filled disc inside a circle appears once in the whole figure, on Critical Expert validation in the right column; its absence on the left is the visual statement of the failure. The light grey fill appears once, on the same box. The two column heads carry the one type size above the title size, and the divider label is set at title size, because it is a structural label rather than a title.

## What the figure must not imply

- The left column is not a design that anyone authorised. It is a state that arose and was corrected.
- Agentic review is not abolished by E66. It appears in the right column; what it lost is the power to record approval.
- E66 is a documented decision that entered the process and action documents before the pipeline changed. The divider is therefore a decision boundary rather than a release boundary.
- The right column is not the concrete ZBZ pipeline. Its stages of OCR, layout, entity extraction, and TEI are abstracted away, and the worked case in the manuscript carries them.
- The workflow-state box is a per-stream state, and it does not represent an approval.
- The absence of a disc on the left does not mean that no human was present in the earlier workflow. It means that the recorded approval status carried no human authorisation.
- The equal width of the two columns is not a claim that the two states are equally good. It is the condition under which they can be compared at all.

## Acceptance checks

- Exactly one filled disc in the figure, in the right column.
- Exactly one element carries the light grey fill, the Critical Expert validation box.
- Both columns are equal in width, both column heads sit on one baseline, and both chains begin at one y with the box Generated output.
- The annotation box at the foot of the left column has its bottom edge on the bottom edge of the right column's final station.
- The left chain terminates in a status, and no path leads from it to a validated state.
- Both checks in the right column converge in the evidence box before any human mark.
- The divider label names the decision, and both column heads name the sides.
