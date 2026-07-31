---
type: derived-project-artefact
derived_from:
  data_state: corpus-v1.4
  commit: 8f31c2a
process: scripts/profile_corpus.py
tools: python 3.12, lxml 5.2
generated_at: 2026-07-31
status: derived-observation
---

# Corpus profile of the letter corpus at corpus-v1.4

> This file is an illustrative example referenced from the [Promptotyping paper](https://dhcraft.org/Promptotyping/#paper). It shows how a *derived project artefact* records document type, referenced project or data state, generation process, and epistemic status in its header. All values are fictional. Regenerating the real counterpart of such a file means checking out the referenced commit and re-running the recorded process with the recorded tools.

## Derived observations

The profile below was produced by `scripts/profile_corpus.py` from the TEI-XML letter corpus at state `corpus-v1.4`.

| Observation | Value |
| :--- | :--- |
| Documents parsed | 412 |
| Documents failing schema validation | 3 |
| `<persName>` elements without `@ref` | 57 |
| Distinct correspondents (by `@ref`) | 48 |
| Letters without a `<date>` in `<correspAction>` | 9 |

## Why this is not maintained project knowledge

The table records what the script observed at the referenced data state. What these observations mean, for example whether the nine undated letters should be dated editorially or left undated, is an interpretive decision. Such decisions belong in the project's maintained knowledge documents once contributors have examined and adopted them. This file only supplies the observation they start from, which is why its header marks it as a derived observation rather than as maintained project knowledge.
