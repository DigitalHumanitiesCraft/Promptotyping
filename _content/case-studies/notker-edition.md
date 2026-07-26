---
title: Notker Edition
id: notker-edition
paper: "5.2, Table 1"
---

# Notker Edition

## Context and research question

The Notker Edition is a digital edition of Notker's psalm commentary on Psalm 2, built as a promptotype for a third-party funding application at the Institute of German Studies of the University of Graz. The research question concerns the presentation of interwoven text layers, since the Latin psalm quotation, the Old High German translation and the exegetical commentary each have to become visible and controllable on their own. Editorial decisions stay with the editor, and the execution is machine work.

## Data

The point of origin is a word-processor sample page on Psalm 2 with its thirteen verses. A rule-based pipeline of four Python scripts leads from parsing through layer classification and TEI build to the JSON derivation. TEI-XML is the canonical source, a decision that revised an earlier JSON-first choice. A IIIF facsimile connection to the abbey library of St. Gallen through e-codices completes the edition.

## Approach

The edition is a single-file web application without a framework and without a build step. Orthogonal toggles switch the three functional text layers independently of one another and switch the display modes alongside them, and the colour logic follows the function of the text. A configurable three-slot layout allows the source apparatus, the facsimile and comparative views to be arranged freely. The whole state is encoded in the URL hash. What is worth recording is the handover between two Claude Code sessions run by different people, where the action layer was the only context anchor and carried it.

## Methodological contribution

The case shows data production as an edition problem with a pronounced layer-toggle architecture, where orthogonal controls make the editorial layering of the source interactively accessible. The review workflow with the commissioning scholar runs through a shared document whose corrections the agent works systematically into the canonical TEI and checks against a verified build. A public research vault makes the design decisions citable for the colleagues on the application.

## Limits

The edition rests on a sample page. What the pipeline demonstrates is that the layering of this psalm can be carried from a word-processor file into TEI and made controllable, and how the arrangement behaves across the whole commentary is not part of the case.

The artefact is a promptotype for an application, so it argues for the feasibility of an edition rather than delivering one. The editorial decisions it presents were taken for a demonstration, and an edition of the full commentary would have to take them again under the weight of the whole text.

The review workflow was checked against a verified build, which decides that the corrections arrived in the TEI. Whether the corrections were right stays with the commissioning scholar, and the case documents the path rather than the judgement.
