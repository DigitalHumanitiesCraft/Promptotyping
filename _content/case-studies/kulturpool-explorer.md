---
title: Kulturpool Explorer
id: kulturpool-explorer
paper: none
source: Projects/Promptotyping/Case Studies/kulturpool-explorer.md
---

# Kulturpool Explorer

## Context and research question

The Kulturpool Explorer is a static collection interface over the object records that the Austrian Kulturpool aggregation publishes through its API, restricted to the openly licensed holdings of one contributing museum. The run began without prior knowledge of that API, so the first question was empirical, what the aggregation actually returns and which subset of it supports exploratory access. The interface design followed from the answer.

## Data

The records arrive in the Europeana Data Model through the aggregation's API, with licence status, media type, object type, material, dating, place of origin, subject and creator as the fields that carry facets. The chosen holding is dominated by images, with smaller bodies of text documents and three-dimensional objects, and its licence spread runs from public domain through CC BY and CC0 to records that are not freely licensed. Explicit subcollections are absent from the data, since the membership field is empty throughout, so the structure the interface offers had to be derived from object type, subject and identifier prefixes. A harvest script and a transform script render flat JSON files that the static page reads.

## Approach

Exploration ran through the agent as an abstraction layer over the API. The agent issued shell requests against the endpoints and aggregated the responses in its context, which let the API be interrogated in natural language before any client code existed. The overview it produced, total holdings by institution, media type and licence, is what the selection of a subset was decided on, under three criteria, open licences, a self-contained collection, and enough objects for exploratory access to be worth building.

Distillation ran in two agent instances working at the same time on separate knowledge levels. One synthesised the API responses into a data document covering collection areas, object types, metadata structure and the relations between facets. The other simulated an interdisciplinary group of professional roles for the interface concept and researched the current literature on exploratory collection interfaces, producing a design document with principles and reference projects. An explicit consolidation step followed, in which the knowledge folder was read as a whole, its redundancies removed and its structure reduced.

Implementation went from an agent-written plan to harvest, transform and build, as a static page in vanilla JavaScript. The first iteration produced a conventional faceted collection interface; the second, after screenshot feedback, replaced its entry point with coordinated visualisations over a dense image wall.

## Methodological contribution

Parallel agent orchestration is what the case adds to the record. Two instances of the same agentic tool ran concurrently at the level of a single researcher, and the condition that made it work was the separation of knowledge levels, data in one instance and design in the other, so that the two did not write against each other.

The consolidation step carries a second finding. The refactor of the knowledge folder was performed although the context window of the run was large enough to hold everything without it, on the reasoning that redundancy in the knowledge layer degrades the implementation derived from it. Context economy therefore governs the quality of the output, beyond the question of whether the material fits at all.

Verification ran visually. Screenshots of the running artefact were handed back to the model with a request for critical analysis, and questions whose answer was already known were used to force additional reasoning without prescribing the solution.

## Limits

Parallel operation is cognitively expensive, and the record judges it unsustainable over longer stretches. It serves for a bounded phase; as a standing working mode it does not hold.

The first working implementation hung the browser on the real data volume. The generated code was correct and carried no optimisation for the amount of data it would meet, which is the practical shape of the uneven capability profile that makes verification necessary at exactly the points where the output looks finished.

The interface covers the openly licensed holdings of one contributing institution. What it shows about the aggregation is a slice selected for licence clarity and internal coherence, and the harder cases of the aggregation, mixed rights and cross-institutional heterogeneity, stayed outside the run.
