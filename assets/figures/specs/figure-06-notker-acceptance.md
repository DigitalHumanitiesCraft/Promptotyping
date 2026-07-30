---
figure_file: figure-06-notker-acceptance
manuscript_number: 5
id: notker-acceptance
title: Purpose-specific acceptance in the Notker edition case
svg: ../svg/figure-06-notker-acceptance.svg
supersedes: ../figure-06-notker-acceptance.png
canvas: 960 x 480
status: draft
revision: 2
---

# Specification, Figure 5 (file figure-06)

## Caption this figure must satisfy

**Figure 5. Purpose-specific acceptance in the Notker edition case.** Editorial guidelines, a TEI source model, and a limited sample were translated into an Edition Interface. The resulting state was accepted as a proposal demonstrator, not as a completed or publication-ready edition.

## Purpose

Show that an acceptance is bounded by a stated purpose, and that the boundary is part of the accepted state. The figure carries the negative statement as an element of equal weight with the positive one, because a reader who sees only the acceptance would read the case as a completed edition.

## Series grammar, revision 2 of 2026-07-30

This section binds all five figures of the series and is repeated in each specification.

The series carries two stroke weights. Primary weight, 2.5px, belongs to the operational chain and to the boxes that stand in it. Secondary weight, 1.25px, belongs to returns, evidence relations, constituent boxes drawn inside a container, and bordered annotations. Every figure legend draws its samples at the weight they carry, so the two weights are readable from the legend alone.

Box titles are set at 17px semibold, secondary text inside a box stays at 13px, edge labels and legend rows are 12px in grey. Padding inside a box is generous enough that the box reads as a station rather than as a label with a frame.

Each figure emphasises exactly one element, drawn with a light grey fill (#eeeeee) behind the primary stroke. In this figure the emphasised element is the Acceptance card. The fill marks the element the caption is about and carries no further information, and no second element in a figure may take it.

Because the light grey fill is now reserved for the single emphasised element, tint no longer marks containers. A container is a white box at primary weight whose constituents are white boxes at secondary weight. In this figure that rule applies to the documents card and to the interface card, both of which lose their tint and keep their nesting.

The palette is black (#111111), three greys (#666666, #d9d9d9, #eeeeee), and white. One arrowhead geometry serves the whole series in a filled variant for flow and a hollow variant for supporting relations, drawn at a fixed size independent of stroke weight. Every label is a real text element, the canvas is declared by viewBox, and nothing is drawn that carries no statement.

## Layout, revision 2

The three cards are equal in width and equal in visual weight, and their top edges lie on one line. Revision 1 drew the acceptance as a text block inside a frame while the other two carried nested structure, so the acceptance read as the lightest of the three where it is the subject of the caption.

The Acceptance card is a real card again. It carries the light grey fill of the emphasised element and an internal horizontal divider that separates the positive half from the negative half.

The positive half holds "Accepted for a stated purpose" and "proposal-stage demonstrator". The negative half holds "Does not imply a completed or publication-ready edition" and "corpus-wide philological verification remains open". Both halves are set in the same type sizes and the same weights, a semibold lead line and regular lines beneath it, so neither half can be read as a qualification of the other.

The cards fill the canvas. The empty margin of revision 1 is reduced, the cards run from near the top edge to near the foot, and the legend sits beneath them.

## Reading direction

Left to right in three cards. The declarative basis on the left, the generated artefact in the middle, the acceptance on the right. Inside the right card the reading continues downward, from what was accepted, across a rule, to what the acceptance does not imply.

## Elements

1. Card, Promptotyping Documents, declarative basis, at primary weight, containing four secondary-weight boxes: Psalm 2 sample, editorial guidelines, TEI source model, layer definitions.
2. Card, Edition Interface, textual layers made operational, at primary weight, containing one secondary-weight list of five rows: Latin psalm, Old High German, commentary, translation, apparatus.
3. Card, Acceptance, at primary weight with the light grey fill, carrying the authority mark, divided by a horizontal rule into a positive and a negative half.
   - Positive half: Accepted for a stated purpose, proposal-stage demonstrator.
   - Negative half: Does not imply a completed or publication-ready edition, and corpus-wide philological verification remains open.

## Relations and labels

Two arrows only. The first, from the documents to the interface, is labelled "generated implementation". The second, from the interface to the acceptance, is labelled "acceptance for a stated purpose". Both are solid and at primary weight, because generation and acceptance are the two productive acts of the case.

Verbatim labels are the element names above. The negative half uses the manuscript's own words, so "completed or publication-ready edition" and "corpus-wide philological verification remains open" may not be shortened.

## Visual grammar

Solid line with a filled head at primary weight marks operational flow. The filled disc inside a circle appears once, on the acceptance card, because the acceptance was a human decision. The light grey fill appears once, on the same card. Nesting marks a container whose named constituents are drawn inside it, which applies to the documents card and the interface card. The horizontal rule inside the acceptance card is a divider of equal halves rather than a hierarchy.

## What the figure must not imply

- Acceptance is not completion. The negative half occupies as much of the card as the positive half and is set in the same weights.
- The middle card is a schematic rendering of the modelled textual layers. It is not a screenshot, and it does not claim that all five layers were populated for the whole corpus.
- The sample is not the corpus. The left card names the Psalm 2 sample as one of four inputs, and the negative half states what remains open for the corpus.
- The five rows are the layers of the editorial model, and their order is the modelled order rather than a ranking.
- Nothing in the figure marks a further stage after acceptance, because the case had none at the point the manuscript describes.
- The emphasis on the Acceptance card is a hierarchy of reading and no claim that the acceptance outranks its own limits, which stand inside the same card.

## Acceptance checks

- Three cards of equal width with their top edges on one line, two arrows, one disc.
- Exactly one card carries the light grey fill, the Acceptance card.
- The negative half is present, legible, and phrased in the manuscript's words.
- The two halves of the acceptance card use the same type sizes and weights.
- The stated purpose appears verbatim as proposal-stage demonstrator.
