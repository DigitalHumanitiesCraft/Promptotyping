<!-- template: Action-layer template, https://dhcraft.org/Promptotyping/templates/action-layer.md -->

# Project instructions for the Promptotyping repository

This repository is `DigitalHumanitiesCraft/Promptotyping`. It is the single source of the templates of the Promptotyping Documents and of their convention, it documents the practice in its own knowledge base, and it publishes one page at https://dhcraft.org/Promptotyping/. The skill lives in the repository `DigitalHumanitiesCraft/promptotyping-skill` and is not kept here. The paper is maintained outside this repository, and manuscript text does not enter it.

## Knowledge base

At every session start, after this file, read in this order:

1. `knowledge/INDEX.md`, the entry point and the terms
2. `knowledge/journal.md`, the section `## Open` at its beginning. "Nothing open." is a valid state.
3. the document the task needs:
   - what Promptotyping is and what this repository is for: `knowledge/project.md`
   - the practice itself: `knowledge/practice.md`
   - what the repository delivers: `knowledge/specification.md`
   - how it is built: `knowledge/architecture.md`
   - how the page looks: `knowledge/design.md`
   - where a decision comes from: `knowledge/journal.md`, the wording before 2026-11-14 in the Git history (`git show f211631:knowledge/journal.md`)

## Working rules

- Work in bounded steps from the state the knowledge base documents, one commit per finished step, directly on `main`.
- The terms of the paper bind every text: Promptotyping, Promptotype, project knowledge base, the four forms of work Preparation, Exploration, Distillation and Implementation, verification, agentic review, scholarly validation. A text that uses another word for one of them has drifted and is corrected.
- A template, the convention and the page say the same thing. Change a rule in the template or the convention first, then every place that restates it, including the list of templates on the page and the skill repository where it names an address.
- The addresses `https://dhcraft.org/Promptotyping/templates/<name>.md` are stable. Repositories and the skill read them, so a file under `templates/` is not renamed without the operator.
- Journal. One entry per coherent step under `## Entries`, newest first, with the fields that have content among Trigger, Found, Decided, Rejected, Corrected, Changed and Evidence, and at least one checkable piece of evidence. At the end of a session rewrite `## Open` as the complete current list.
- `knowledge/` is published on the site by the operator's decision of 2026-11-14. Nothing goes into it that should not be read publicly: no personal names of third parties, no internal notes, no review markers, no material with unresolved rights.
- Commits with agent involvement end with `Co-Authored-By: Claude <model actually used> <noreply@anthropic.com>`.

## The page

- `index.html` is one hand-written page with the sections Skill, Templates, Knowledge, Use cases and Cite. It has no build step, no framework and no script beyond the copy button of the shared DHCraft files.
- Colours, type and the shared blocks come unchanged from `assets/dhcraft/`, copied from the brand-assets repository. `assets/css/site.css` only lays out the page. Read `knowledge/design.md` before changing how it looks.
- Each row has one target. Templates, knowledge documents and case studies open on GitHub, where Markdown renders.
- A new template, knowledge document or case study gets its row on the page in the same commit.
- The Pages workflow in `.github/workflows/pages.yml` publishes an explicit list of paths. A new top-level folder the site needs is added there.

## Checks

There is no automated check. Before a commit that changes the page, serve the repository root with `python -m http.server 8000`, open the page at a wide and a narrow width, follow every changed link and read the console. Before a commit that changes a template or the convention, search the repository for the changed term and bring every restatement into line.
