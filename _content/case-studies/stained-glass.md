---
title: CVMA Stained Glass Annotation Tool
id: stained-glass
paper: none
source: Projects/Promptotyping/Case Studies/stained-glass.md
---

# CVMA Stained Glass Annotation Tool

## Context

A scholarly annotation tool for medieval stained-glass artefacts from the Corpus Vitrearum Medii Aevi. The metadata sits in the NFDI4Culture knowledge graph and is extracted from it by SPARQL query, then processed from JSON-LD into the payload the static application reads, with Python doing the processing so that the browser does not. The interface filters by period, geographic location, iconographic subject and element type, and lets a researcher annotate an artefact in a fixed set of categories and carry the annotations out again as a file. Two Promptotyping iterations were run, and the published demo is the second.

## Contribution

The case argues the enabling condition of the method from the data side. The modelling in the knowledge graph is of high quality, the vocabularies are controlled, and the transition from the original data source to a working application therefore needed no modelling step of its own. That matches the co-variation Section 5.5 of the paper states across the record, where the artefacts with the most epistemic yield come from the projects with the deepest domain modelling, and this case reaches the same result by inheriting the modelling instead of performing it.

Query development is where the division of labour shows. The SPARQL was refined in a loop in which each result reshaped the next query, the model handled the query language reliably, and the decision about what to select stayed on the domain side. Extraction from a knowledge graph is thus a place where an agent is productive without holding the research question.

The project is also where a structured `knowledge/` folder first appears in the record, with a data document, a design specification for the annotation interface, an implementation document and a requirements document.

## Limits

The data enters the application as an export. What the tool shows is the state of the knowledge graph at extraction time, and later changes in the graph do not reach it without a new extraction and a new deployment.

The knowledge folder holds no journal. The two iterations left their specifications and not their reasoning, so why the second version departs from the first cannot be read off the documentation, and the case is not resumable the way the later projects with an active journal are.

Annotations leave the tool as exported files. Nothing in the artefact holds a shared store, so annotation by several researchers on one body of material is outside what the tool does.

Section 2.5 of the paper declines to attribute one method component to one project of this phase. The gallery card names this case as the first structured knowledge folder, and the paper places that development in the phase without fixing it to a project.
