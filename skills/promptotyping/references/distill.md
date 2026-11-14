# distill

Models what exploration and checking have shown as the knowledge documents from which the artefact is built. It is the form of work Distillation.

Distillation is a form of modelling, and it reduces and sharpens. It leaves out what the stated purpose does not need, and it makes explicit the distinctions, conditions and uncertainties that the material holds only implicitly and that an adequate implementation requires. Another purpose may call for another distillation. The material itself stays where it is.

Call it in a new project after `explore`, when the purpose changes, when notes or findings have grown past the point where they guide the work, or when a document the project needs is missing. `distil` is the same call.

## Procedure

1. Name the purpose the distillation serves.
2. Decide which documents the project needs by their function, and propose the structure before writing. A project carries `project.md`, `specification.md` and `journal.md` in the knowledge folder and agent instructions in the root. Add `data.md` when the project processes or produces data, `design.md` when the artefact has an interface, and `INDEX.md` as register and reading order once the base has grown past a handful of documents.
3. Revise the account of the material where the purpose needs more precision. `data.md` stays the full account of the data, and the selection for this purpose goes into the specification and the design. Mark what the data show, what the agent infers and what remains open, and name the file and the rows or elements behind every statement that is not obvious.
4. Write what the artefact is to do for the researchers, in `specification.md`, as described under Epics and user stories. Move the provisional user stories from `project.md` there and leave a link. Where the artefact shows data, say how gaps and uncertainty stay visible and how it shows which statements have been confirmed and by whom.
5. Keep each document to one question, and link related documents instead of repeating their content. Prefer a table to prose where items are parallel, an example to an explanation, and the current state to its history.
6. Derive or revise the agent instructions last, so that they route into the knowledge documents. Name the file for the agent in use, `CLAUDE.md` for Claude Code and `AGENTS.md` for Codex CLI, Cursor, Gemini CLI and others that read it. They tell every session to read the beginning of the journal first, name the checks the project runs, and fix the technical baseline, which you ask the researchers for.
7. Say what you are unsure about and present the documents to the researchers.
8. Record the step in the journal and commit the result.

## Epics and user stories

The specification follows Scholar-Centred Design, in which the researchers' domain knowledge, their knowledge of the sources, their methods and their research agenda enter the development.

- A persona names a kind of researcher and the analytical approach they bring, such as a social historian who studies community relations.
- An epic names a large body of work for that persona, such as social networks and community relationships.
- A user story breaks an epic down in the form "As a ..., I want to ..., so that I can ...".
- Each story carries an acceptance criterion the researchers can decide in front of the running artefact.

Stories are elicited with the researchers at their material and are theirs. A story the agent proposes is marked as a proposal until they adopt it. Set priorities with them, and leave out what no story carries, however reasonable it looks.

The specification is provisional. Work with a Promptotype revises it, and it can itself be wrong about the material.

## Result

A bounded set of documents, each answering one question, replaces scattered material as the basis for building.

## Complete when

A new contributor or an agent with a fresh context, given only the documents and access to the project, can continue the work without further explanation, and the researchers confirm that the documents describe their material and their purpose as they understand them.

## Distinct from

`explore` finds out what the data support. `distill` decides what of it becomes the basis for this purpose and turns observations into requirements. `curate` maintains documents that exist.
