---
title: Stefan Zweig Digital Annotation Tool
id: szd
paper: none
source: Projects/Promptotyping/Case Studies/szd.md
---

# Stefan Zweig Digital Annotation Tool

## Context

A timeline-based annotation tool over the correspondence metadata of Stefan Zweig Digital, the digital reconstruction of the Zweig estate at the Literaturarchiv Salzburg. The XML metadata carries title, date, creator and contributors, and the tool fetches it directly from the GAMS asset management system in which the project publishes. The artefact is a single-page application without external dependencies; a researcher marks letters with a research status, tags and notes, the annotations are kept in browser storage, and JSON export and import move them between sessions. The prototype was built in about two hours and is the first publicly documented experiment of the working mode that later became the method, with its account published as a blog post.

## Contribution

The case shows what precision in the prompt does. Naming the architecture in the terms of the trade, fetching and single-page application, fixed the shape of the artefact before any code existed, and the session used technical vocabulary as a steering instrument. The implementation was staged accordingly, first the data fetch against the live metadata, then the layout against a screenshot of the project website as design reference, then the functionality.

Scope reduction is the second contribution. Assistive AI inside the tool, collaboration features and extended visualisations were dropped deliberately, and the two hours are a consequence of that cut.

The session recorded a failure mode that later projects handle structurally. Manual edits to the code have to be communicated back to the model, because otherwise its picture of the artefact diverges from the file on disk and its next edit is written against a state that no longer exists.

## Limits

No Knowledge Documents were written. The whole specification sat in one structured prompt with sample XML, and the README followed after the fact, so the case demonstrates the working mode without the document layer that carries the method's claim about derivation.

The annotations live in browser storage. Research data produced with the tool is bound to one browser profile, travels only as an exported file, and the tool holds no shared state that two researchers could work in.

The paper treats the experiments of this phase as one body of early work and fixes no method component to a single project. The gallery card credits this case with the verifying expert in the loop, a convenience of the catalogue that rests on the project record alone.

The record consists of a blog account, the repository and the README. No check of the tool's output against the source metadata is documented, so the reliability of what the timeline displays was never established beyond the session.
