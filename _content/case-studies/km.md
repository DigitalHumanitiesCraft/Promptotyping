---
title: Hans Gross Kriminalmuseum Digital Archive
id: km
paper: "5.2, Table 1"
source: Projects/Promptotyping/Case Studies/km.md
---

# Hans Gross Kriminalmuseum Digital Archive

## Context and research question

The criminological collection of the Hans Gross Kriminalmuseum at the University of Graz holds case records and physical artefacts from the founding period of scientific criminology, dated between 1890 and 1940. The project opens that collection through two access paradigms at once, a conventional search over the records and a canvas-based spatial exploration of the object stock, and it asks what each paradigm makes askable that the other does not reach.

## Data

Two encodings describe one collection. Criminal case index cards are encoded in TEI and carry crime, suspect, court and legal outcome as structured text; the museum objects are encoded in LIDO and carry materials, measurements, condition reports and digitisation history. Both come from the asset management system of the University of Graz, together with high-resolution images. An extraction script pulls the two encodings into a single index, preserving the full text of the case cards for search. Data fidelity was checked by statistical tests plus a manual verification of a hundred-object sample.

## Approach

The project ran as two Promptotyping iterations two months apart. The first worked without an agentic command-line tool, on deliberately experimental prompts aimed at producing an interface of an unfamiliar kind, and it produced the collection explorer. The second was short, high-frequency detail work with an agentic tool over the result of the first.

The document set stayed minimal, an action layer recording the state of the work for the model, a data document and a design specification. No requirements document was written, and the planning ran inside the session through the model's own plan step.

## Methodological contribution

The case shows one data model carrying two interfaces whose epistemic function differs. The search interface answers a question that is already formed. The canvas explorer addresses the collection before a question exists, and its layout algorithms, categorical by type and period, chronological, radial and clustered, reorder the same objects so that a different property of the stock becomes salient in each.

The explorer also shows how the client-side bound of Section 4.3 of the paper is met by rendering strategy. Spatial search runs over a quadtree so that hit testing avoids the full object set, and only the objects inside the current viewport are drawn.

## Limits

The record judges the case closer to vibe coding than to Promptotyping, since three documents carried a project whose interface decisions were taken in session and left no separate requirements layer. What the case demonstrates about interface paradigms therefore rests on a documentation depth that the method's own argument about domain modelling would call thin.

Both interfaces load one index file at startup and require JavaScript, so the collection size the artefact can carry is bounded by what the browser holds.

Positioning on the canvas comes from a simple clustering algorithm and carries no semantic order. Proximity of two objects on the surface says nothing about a relation between them, and a reader who takes the spatial metaphor at face value will read structure into an arrangement that has none.

Data fidelity was established on a sample, so the extraction is verified for the sample and inferred for the remainder.
