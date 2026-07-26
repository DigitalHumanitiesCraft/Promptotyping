---
title: Overview
slug: ueberblick
status: complete
language: en
version: "0.2"
updated: 2026-07-26
mirrored: 2026-06-10
machine-url: https://dhcraft.org/Promptotyping/_content/ueberblick.md
---

# Promptotyping

Specification of an iterative context-engineering method in four phases for turning research data and frontier LLMs into research artefacts.

| | |
|---|---|
| Version | 0.2 |
| Last changed | 2026-07-26 |
| Canonical address | `https://dhcraft.org/Promptotyping/` |
| Machine address | `_content/ueberblick.md` |
| Rationale and evidence | [Paper](#paper) |
| Licence | Content CC BY 4.0, code MIT |

## What the method is

Promptotyping produces research artefacts, as a rule software that is bound to the data of one project and makes it explorable, analysable or editable. The `knowledge/` folder is a curated knowledge artefact, written partly by the model and partly by the checking domain expert, held in a format agents process directly. It carries the domain knowledge and the specification from which the implementation is derived, it outlasts the individual session, and it is the part of the process that can be checked, criticised and cited. Further decisions taken while building are held by the documents as far as they are written back into them. What separates the method from Vibe Coding is the structured procedure, the active requirements analysis and the explicit documentation of knowledge.

This page is the specification of the method. It states what Promptotyping is and how it is applied. Why the method is built this way and whether it holds is the business of the [paper](#paper).

## Where to start

Anyone who wants to follow the method in detail reads the [paper](#abschnitt-1-introduction) from the introduction to the conclusion. Anyone who wants to apply it uses the [templates](#vorlagen) for the Promptotyping Documents together with the frontmatter inspector. How the document types differ from one another and which document to check first for a given failure pattern is carried by part 3 of the specification, the [convention](#konvention-v0.1). Anyone looking for evidence turns to the [use cases](#use-cases), a curated selection of publicly documented projects. The method extensions that grew out of practice stand under [best practices](#praxis), the transferable system prompts under [skills](#skills). How vault, agent interface and AI harness work together is described by the [working environment](#arbeitsumgebung).
