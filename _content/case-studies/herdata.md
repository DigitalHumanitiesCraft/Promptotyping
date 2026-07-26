---
title: HerData
id: herdata
paper: "5.2, Table 1"
source: Projects/Promptotyping/Case Studies/herdata.md
---

# HerData

## Context and research question

HerData is a static web application for the visualisation and prosopographical treatment of Goethe's female correspondents. The question is how women in Goethe's correspondence can be made visible without concealing the representational limits of the source. What marks the case is epistemic visibility, since a map-bias section addresses data completeness and representational limits before the visualisation is used.

## Data

The basis is CMIF letter metadata from the PROPYLÄEN platform, TEI-XML under CC BY 4.0, together with a curated person export from the Goethe and Schiller Archive of the Klassik Stiftung Weimar. A four-stage Python pipeline runs identification, letter matching through GND, enrichment with geocoordinates and AgRelOn relations, and JSON export, and it produces a standalone JSON dataset that carries the whole data holding of the project. The decision went deliberately against the full holdings and for a curated set, because quality and provenance rank ahead of completeness here.

## Approach

Development ran in three large iterations through Claude Code with changing frontier models. A first version established the architecture. A review meeting set the strategic course, stabilise the core features before the experimental ones, sharpen the research questions, and add a validation window onto the raw data. A third iteration closed the tester feedback round of the Klassik Stiftung Weimar and a refactoring pass. A vanilla JavaScript front end carries the dataset into coordinated areas, among them a map, a letter explorer, narrative entries and a knowledge basket.

## Methodological contribution

Two patterns typical of the method appear. The knowledge base is the source of truth, since one folder of Promptotyping Documents is at once the working basis for the model sessions and the public project documentation, each document carrying machine-readable provenance in its frontmatter. A content layer allows non-technical maintenance, so the data partners edit editorial text without touching code. The core methodological contribution is the map-bias section, which makes the systematic distortion of the data explicit before use instead of hiding it behind the visualisation.

## Limits

Nothing about this case can be inspected from outside. The repository is closed, and the demo that the site once advertised answers with an error and has been taken down, which the verification record holds as an operator matter. Every statement on this page rests on the local working copy.

The curated set is a deliberate restriction and bounds what the visualisation can show. A map built on selected persons carries the selection into every pattern a reader believes to see in it, and the map-bias section names that condition without removing it.

The enrichment steps that match letters through GND and attach coordinates were not audited against an independent source. What the pipeline asserts about a person rests on the reconciliation it performed.
