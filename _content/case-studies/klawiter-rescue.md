---
title: Klawiter Bibliography Rescue
id: klawiter-rescue
paper: "5.2, Table 1"
source: Projects/Promptotyping/Case Studies/klawiter-rescue.md
---

# Klawiter Bibliography Rescue

## Context and research question

The project extracts and restructures the Klawiter bibliography, one of the most comprehensive bibliographical resources on Stefan Zweig, out of a decommissioned MediaWiki database. The question is how bibliographical knowledge compiled over decades can be rescued from a legacy system that no longer runs and carried into a sustainable, connectable form. The bibliography belongs to the Stefan Zweig Digital ecosystem, where it serves as the reception layer of the estate ontology.

## Data

The point of origin is a set of SQL dumps and binary BLOB files with no external dependencies. Both were parsed directly with the Python standard library, without MySQL. The material covers entries in more than forty languages and a fixed set of entity types inherited from the source system. A dedicated pipeline stage repaired mojibake encoding damage that the legacy database had accumulated.

## Approach

A staged pipeline runs from extraction through encoding repair, parsing, normalisation, optional LLM enrichment, classification and JSON-LD generation to validation. The enrichment is optional and fills gaps in the metadata, and the procedure is laid out deterministically first. The front end is a vanilla JavaScript static site without a build step, in the design language of the Stefan Zweig ecosystem. Quality assurance combines a test suite with an LLM-as-a-judge validation and a round-trip verification against the source.

## Methodological contribution

This is the paradigmatic case of data rescue and transformation, where a legacy system becomes structured and connectable knowledge. Two devices carry it. The blended vocabulary draws on Schema.org, Dublin Core and a project-specific namespace, and a provenance trail per value records where that value came from, which is necessary because values are combined from regular expressions, from the model and from reconciliation. JSON-LD as the output format allows direct integration into the work layer of the estate ontology, and the curation interface makes the extraction quality checkable by the expert.

## Limits

The provenance trail per value exists because the values are of mixed origin, and it records that origin without deciding correctness. A field filled by the optional enrichment carries the same weight in the output as a field parsed deterministically, and only the trail distinguishes them.

The LLM-as-a-judge step in the quality assurance ranks below human verification for the reasons Section 6.2 of the paper gives. The round-trip verification is the stronger of the two, because it decides against the source.

Whether the extraction is complete cannot be established from inside the project. The source system is decommissioned, so the pipeline output is compared against the dump and not against the bibliography as its compiler maintained it.
