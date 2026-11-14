# explore

Establishes what the research data can and cannot support, so that the project learns what it had not yet recorded about its material. It is the form of work Exploration.

Call it in a new project, when research data are added or changed, when a new question is put to the data, or when a finding from checking or from work with the artefact contradicts an assumption about the data.

## Preparation in a new project

In a new project the material and the purpose are made explicit first. This is the researchers' work, and the agent helps.

1. Initialise a Git repository where none exists. Create the folders `data/`, `knowledge/`, `scripts/` and `generated/`, and add a `.gitignore` for operating-system and editor files.
2. Ask for the purpose, the research question and two or three user stories in the researchers' words, and for the provenance of the material, its known limits and the rights under which it may be processed and published. Write the answers into `project.md` in the knowledge folder, keep the wording, and mark the user stories as provisional.
3. Make the material technically accessible, for instance by unpacking a dump or converting a format. Copy it into `data/`, leave the original where the researchers keep it, and ask where that is. Never change the files in `data/`.
4. Commit the knowledge folder and the `.gitignore`. Ask before committing anything in `data/`. Where the researchers do not want the data in the repository, add `data/` to `.gitignore` and note in `project.md` where the data lie.

## Procedure

1. Read `project.md` first, so that the examination follows the purpose and the user stories.
2. Examine the files in `data/` with small, documented scripts under `scripts/` rather than reading them whole, so that only the profile and selected examples enter the context. A single text or a small collection may be read directly.
3. Let the scripts write the figures that change with the data, such as counts, value ranges, cardinalities and distributions, to `generated/data-profile.md`.
4. Write or revise `data.md` on provenance, structure, meaning, relations, gaps and anomalies. It points to the profile instead of repeating its numbers, names the file and the rows or elements behind every statement that is not obvious, and marks every interpretation as an inference.
5. Trace the path from each research question to the data. Say which fields the question needs, where they stand, in what form, and what is missing, uncertain or encoded ambiguously. What the data do not support is a finding of equal value.
6. Name the three statements in `data.md` you are least sure of, with the file and rows behind each, and put to the researchers the questions that only knowledge of the domain and the sources can settle.
7. Record the step in the journal, with the questions that wait for the researchers under `## Open`, and commit scripts, profile and documents.

## Result

Scripts, a data profile and `data.md` state what the data afford and where they end. The files in `data/` are unchanged.

## Complete when

Exploration is complete for the moment when the researchers have checked the account against what they know of the material, including the statements the agent is least sure of, and confirm that nothing they consider essential is missing or wrong. That judgement is theirs, and it is recorded in the journal in their words. Any later finding may return the project to `explore`. Then continue with `distill`.

## Distinct from

`orient` reads the state of the project and changes nothing. `distill` selects, for a purpose, from what exploration found. `curate` corrects a single statement about the data, and a finding that puts the account of the data as a whole in question returns the project to `explore`.
