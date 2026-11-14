# handoff

Closes a session so that the next one can continue from the documents. It is the counterpart of `orient`. What `handoff` writes, the next `orient` reads, whether the next session is the same person with a fresh agent, another agent or another person.

Call it when a session ends, or when a step of the work passes to someone else. Call `handoff deep` before a longer pause, at a milestone, or when the whole work passes to someone else. Text after the subcommand serves as the commit message. The form of the journal stands in `SKILL.md`, section The journal.

## Procedure

1. Where the folder is a Git repository, run `git status`. Run the checks the agent instructions name, and report a failing check in the journal entry.
2. Add entries for the steps of this session that the journal does not yet record, below `## Open`. Create the journal where none exists.
3. Rewrite `## Open`. Be specific enough that the reader can start at once, as in "a quarter of the dates lack a certainty attribute, and how uncertain dates are displayed is undecided".
4. Commit the knowledge documents, the artefact and the data the project produced together, with a concise message. Do not push. The researchers decide when to push.
5. Confirm with the hash of that commit and one line on what is open. Copy hashes from Git and never write one from memory.

## Passing a step to someone else

A handoff to a named recipient is the same procedure. Name the recipient in the point under `## Open`, with what they need in order to start, meaning the source, the state and the evidence. Where the recipient works in another repository, write the point into `## Open` of that repository's journal, if you may write there, or give it to the user to pass on.

## handoff deep

A deep handoff makes sure that the documents carry the project, so that someone who was not part of the last sessions can continue. It runs three steps, each ending in a commit of its own.

1. `curate` in its three kinds, review first, then against the project, then grounding where an outside source can be reached, as `references/curate.md` describes.
2. The procedure above.
3. Condensing the journal, when its older entries no longer help a reader to understand the current state.

## Condensing the journal

Condensing removes detail from `journal.md` only. The full text of every condensed entry stays in `journal-archive.md` and in Git. Called on its own, it runs only these steps.

1. Start from a state in which all work is committed.
2. Leave `## Open` and the five newest entries as they are.
3. Append the full, unchanged text of every older entry to `journal-archive.md` in the same folder, oldest first. Append only entries that are not yet in the archive. The archive is only appended to and never rewritten, and `orient` reads it only when the ground of a decision is needed.
4. Check that the heading of every entry to be condensed occurs in the archive before anything in `journal.md` is changed.
5. Fold related older entries into one entry per milestone, headed by its date range, which keeps the decisions with their reasons, the corrections, the rejected alternatives and the commit hashes, copied verbatim.
6. Add one line that points to the archive, record the condensing in an entry of its own with the number of entries archived, and commit.

## Distinct from

`orient` takes context in and changes nothing. `handoff` gives it out and commits. A plain `handoff` changes only the journal, and `curate` changes the declarative documents.
