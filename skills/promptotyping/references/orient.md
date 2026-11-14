# orient

Establishes where the project stands before any work begins. It changes no file.

Call it when a session begins or the task changes.

## Procedure

1. Read the agent instructions in the repository root, `CLAUDE.md` or `AGENTS.md`, where they exist.
2. Find the knowledge folder, `knowledge/` or else `docs/` or `promptotyping-docs/`, and list its Markdown documents with their headings. Read `INDEX.md` where one exists.
3. Read the beginning of `journal.md`, the section `## Open` and the newest entry. Read older entries only when the ground of a decision is needed, and `journal-archive.md` only then.
4. Read the documents the task needs and leave the others unread.
5. Inspect the actual state of the folder. Where it is a Git repository, run `git status`, and where it is none, report that. Check that the files the documents name exist. Look at the research data only on the surface, meaning which files exist, in which formats and of what size. Examining their content is `explore`.
6. Name what is there and the step that comes next.

| What is there | Next |
|---|---|
| nothing, or only an idea | help the researchers name data, question and artefact, then Preparation as in `references/explore.md` |
| research data, no knowledge documents | Preparation, then `explore` |
| an account of the data, no specification | `distill` |
| knowledge documents, no artefact or an early one | build under the rules for building |
| an artefact, no knowledge documents | `explore`, then `distill`, before building further |
| a Promptotype with open findings | `curate` where knowledge is wrong, otherwise build |
| a Promptotype with nothing open | ask the researchers what they want to learn or change next |

The forms of work recur, so the table names the next step and no stage the project has left behind.

## Result

A short report.

- what the project is and what the artefact is for
- what exists, meaning data, documents, code and checks
- what the journal lists as open
- the suggested next step
- what the documents do not state although the work needs it, as a gap that `explore`, `distill` or `curate` would close

Then wait for direction.

## Distinct from

`orient` reads what the project already knows, so that an agent with a fresh context catches up, and it needs no decision from the researchers. `explore` examines the material, so that the project learns what it had not yet recorded.
