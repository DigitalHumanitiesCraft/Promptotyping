---
title: DEPCHA Aldersbach Dashboard
id: aldersbach
paper: none
source: Projects/Promptotyping/Case Studies/aldersbach.md
---

# DEPCHA Aldersbach Dashboard

## Context

A dashboard for the financial transactions of the Cistercian abbey of Aldersbach in Lower Bavaria in the year 1557. The accounts are encoded to the DEPCHA standard, whose semantic layer is the Bookkeeping Ontology, and reach the application as RDF/XML that the browser parses client-side. The material carries the properties that make the source difficult, a four-unit currency system of florin, schilling, denarius and groschen, grain trade as the dominant income, and transaction descriptions in the German of the period. The artefact is a frontend-only static site in vanilla JavaScript on GitHub Pages, offering filtered views of the transactions, their temporal distribution, their categorisation into income and expenditure, and the persons and places extracted from the descriptions.

The data model is the same one the method's genealogy runs through. The step towards the Knowledge Documents is on record as the rewriting of the Bookkeeping Ontology into compact Markdown in 2023, so this case works on the operationalised form of the ontology whose compaction produced the document idea.

## Contribution

The document set is where the case carries. It holds a data document for the RDF/XML schema and the ontology mapping, an architecture document with the grounds for the frontend-only decision, a technical specification for the conversion and extraction logic, user stories written from the historians' perspective, a testing strategy, and a fixes document recording the bugs and dead ends. The last of these is the unusual one, since a record that keeps only working states cannot show that the method is iterative, and this project kept its corrections.

The currency conversion is a documented instance of domain expertise entering as a correction. The model first proposed modern conversion rates, which are wrong for the sixteenth century, and usable approximate rates appeared only after the historical context was made explicit in the prompt. A calibration value of this kind comes from the domain and cannot be inferred from the data by the agent working on it.

The case also states the enabling condition plainly. The TEI encoding and the semantic clarity of the ontology are what make the mapping onto visualisation layers tractable, and an unstructured source would not sustain the same workflow.

## Limits

The paper does not carry the case. No chapter names it and no table lists it, and it was dropped as too old for the evidence layer. It stands in the gallery for the genealogy alone.

The code is not production-ready by the project's own account, with no comprehensive tests, minimal error handling and no commentary in the code itself. That is acceptable in a research prototype, and the passage from a prototype of this kind to sustainable research software is the open question the project names and does not answer.

The currency conversion runs on approximate historical rates. Aggregate sums the dashboard displays are indicative, and no economic-historical claim can rest on them without an independent conversion.

Two records of the development time exist, one from a conference account and one from the commit history, and they diverge. The case therefore carries no measurement of effort.

The paper compresses the early experiments into a single sentence at the opening of its second chapter and attributes no method component to any one project. The gallery card credits this case with the retrospective writing of the record's first Knowledge Documents, which is a convenience of the catalogue.
