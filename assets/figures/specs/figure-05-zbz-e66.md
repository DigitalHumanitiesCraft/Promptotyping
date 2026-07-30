---
figure_file: figure-05-zbz-e66
manuscript_number: 4
id: zbz-e66
title: The ZBZ OCR/TEI workflow before and after decision E66
svg: ../svg/figure-05-zbz-e66.svg
supersedes: ../figure-05-zbz-e66.png
canvas: 960 x 640
status: draft
---

# Specification, Figure 4 (file figure-05)

## Caption this figure must satisfy

**Figure 4. The ZBZ OCR/TEI workflow before and after decision E66.** Before E66, an agent-generated assessment could appear as an authorised approval state. In the revised workflow, deterministic validation and agentic review contribute evidence, while only accountable editors authorise verification and acceptance. The project-specific failure also produced method-level write-back in the rule that an agent must never record approval, verification, or acceptance that a responsible person has not explicitly granted.

## Purpose

Show one failure and its correction as a change in where authority sits. The two sides are comparable only if the reader can see that the same generated output enters both and that the difference lies in what may follow it.

## Reading direction

Two panels separated by a vertical rule that carries the decision. Each panel reads downward. The left panel is short, because the failure state is short, and its collapse of production into approval is the point. The right panel branches, converges into evidence, and then passes through a single human mark before a status is recorded.

## Elements

Left panel, headed Before E66:

1. Generated output
2. Agent screening
3. Agent-recorded approval status
4. A prose note below the chain stating that production and verification collapsed into one operation and that no responsible person authorised the status.

Divider, labelled Decision E66, drawn as a vertical rule from the top of the panels to their foot.

Right panel, headed After E66:

1. Generated output
2. Workflow state, per stream, fed directly from the generated output
3. Deterministic validation and agentic review, both fed from the generated output
4. Evidence, fed by both, stating that it reports about the output and is never an authorisation
5. Critical Expert verification, carrying the authority mark
6. Human-authorised verification status, only accountable editors

## Relations and labels

Verbatim labels are the element names above. Edge labels on the right panel are "informs" on the dashed arrow from evidence into verification, and "authorises" on the solid arrow from verification into the status. The left panel carries no edge labels, because every one of its transitions is an unbroken machine sequence and naming them would suggest deliberation the case did not contain.

## Visual grammar

Solid line with a filled head marks operational flow and authorising acts. Dashed line with an open head marks the evidence relation. The filled disc inside a circle appears once in the whole figure, on Critical Expert verification in the right panel; its absence on the left is the visual statement of the failure. The two panel headings and the divider label are set in the same weight as node names, because they are structural labels rather than titles.

## What the figure must not imply

- The left panel is not a design that anyone authorised. It is a state that arose and was corrected.
- Agentic review is not abolished by E66. It appears in the right panel; what it lost is the power to record approval.
- E66 is a documented decision that entered the process and action documents before the pipeline changed. The divider is therefore a decision boundary rather than a release boundary.
- The right panel is not the concrete ZBZ pipeline. Its stages of OCR, layout, entity extraction, and TEI are abstracted away, and the worked case in the manuscript carries them.
- The workflow-state box is a per-stream state, and it does not represent an approval.
- The absence of a disc on the left does not mean that no human was present in the earlier workflow. It means that the recorded approval status carried no human authorisation.

## Acceptance checks

- Exactly one filled disc in the figure, in the right panel.
- The left chain terminates in a status, and no path leads from it to a verified state.
- Both checks in the right panel converge in the evidence box before any human mark.
- The divider label names the decision, and both panel headings name the sides.
