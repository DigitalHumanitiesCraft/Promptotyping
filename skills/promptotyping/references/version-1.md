# Projects and calls from version 1

Read this file for a project built with version 1 of the skill or with an earlier form of the Promptotyping convention, and for a call that version 1 introduced. Such a project stays in its form. The skill works with what is there.

## Folder and document names

The knowledge folder is `docs/` or `promptotyping-docs/`, and it stays the knowledge folder. Do not create `knowledge/` beside it. The documents are found by their function.

- `knowledge.md` carries what `data.md` and `project.md` carry in a new project.
- `requirements.md` is the specification.
- `design.md` and `implementation.md` keep their names and functions.
- `journal.md` is the journal.

## The journal

A journal of version 1 has its entries oldest first, each closing with open issues and next steps, and has no section `## Open`.

- `orient` reads the most recent handoff entry with its open issues and next steps.
- The first `handoff` adds `## Open` at the beginning and carries the open issues and next steps of that entry into it. New entries go below `## Open` and above the earlier ones.
- The earlier entries keep their form and order, and a section of condensed history stays where it is.
- An existing `journal-archive.md` is the archive that condensing appends to.

## A handoff.md in the knowledge folder

An earlier form of the convention kept received points in `handoff.md`. `orient` reads its open points as open. The next `handoff` carries them into `## Open` of the journal and proposes the removal of the file to the user.

## Calls

- `check` leads to `curate review`. As in version 1 it reports and changes no document.
- `verify` leads to `curate ground`.
- `compact` leads to the section Condensing the journal in `references/handoff.md` and runs only those steps. A number after the call is ignored, since condensing keeps the five newest entries.
- `distil` is the same as `distill`.
