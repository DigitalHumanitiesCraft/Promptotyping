---
title: M3GIM
id: m3gim
paper: "5.2, Table 1"
---

# M3GIM

## Context and research question

M3GIM is the digital collection and multi-view exploration of the Ira Malaniuk archive at the University of Music and Performing Arts Graz. The research question concerns the mobility of a singer, how the stations, relations, works and places of a biographical career can be modelled and explored. The project is funded as a feasibility study for a follow-up application.

## Data

The archival data of the university archive is modelled in RiC-O 1.1, extended by project-specific additions and by AgRelOn, and delivered as JSON-LD with Wikidata reconciliation. The data model is layered. What marks the case is that the model was still under development while the material was being captured. Composite types and role values missing from the controlled vocabulary had to be added as they appeared, and folio granularity turned out to be the most important structural innovation the capture team introduced.

## Approach

The knowledge base carries a document per concern and a numbered register of architectural decisions. The exploration interface is a set of tabs, among them the archive itself, indices, mobility, a time flow, a matrix and a knowledge basket, built with vanilla JavaScript and D3.js without a build tool. A Python pipeline runs exploration, validation, transformation, view build and reconciliation. The second phase of the build followed a test-driven workflow.

## Methodological contribution

The central contribution is that the interface exposes the limits of the data model. It shows what the current model can express and what it cannot, which turns it into an instrument of iterative model refinement instead of a presentation of a finished model. Researchers come to understand the modelling decisions through the visualisation rather than through documentation alone. M3GIM is the semantically rich variant of the standalone research data pattern, with JSON-LD as a knowledge graph, where HerData is the plain variant.

## Limits

The model was moving while the capture was running, so the material and the vocabulary that describes it were produced in the same motion. The decision register records where the vocabulary was extended, and it cannot establish that earlier entries were revisited under the later vocabulary.

Making the limits of a model visible through an interface presupposes a reader who recognises a gap as a gap. The interface shows what the model cannot express as an absence, and an absence is only informative to someone who expected the thing that is missing.

The project is a feasibility study. What it demonstrates is that the arrangement carries far enough to justify a follow-up, and the sustained operation that a full project would require is outside what the case shows.
