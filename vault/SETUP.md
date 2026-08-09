# Setup

Instantiate the template by setting a small number of parameters. Everything else, the layer model, the anchor mechanics, the check contracts and the status progression, is invariant and stays untouched.

## Placeholders

Every `{{…}}` marker in the repository belongs to one of two classes. Class A is instance data that follows from the repository itself. Class B is a project decision that has to be taken before anything is filled. A third group is derived content, produced from the class B decisions rather than substituted for a marker.

### Class A, instance data

| Marker | Definition |
|---|---|
| `{{PROJECT_NAME}}` | The name of this vault instance, used as the title of `HOME.md` and `CLAUDE.md` and in the Promptotyping header of every knowledge document. |
| `{{REPOSITORY}}` | The repository this instance lives in, as a URL or an `owner/name` slug. |
| `{{DATE}}` | The instantiation date in ISO 8601, written into `created` and `updated` and into the first entry of the settled decisions. |

### Class B, project decisions

| Marker | Definition |
|---|---|
| `{{PURPOSE}}` | One paragraph on what output this vault produces, for whom and under which evidence obligation, whose first sentence names the overall topic of the vault. |
| `{{TOPICS}}` | The controlled topic set, meaning the closed list of topics that assertions may be filed under; each topic becomes one `MOC-<Topic>.md` in `30_assertions/`. |
| `{{SOURCE_TYPES}}` | The source types this project activates out of `document`, `publication` and `data`. |
| `{{GENRE}}` | The genre of the output, such as strategy, proposal, report or scholarly synthesis. |
| `{{LANGUAGE}}` | The working language of the content, meaning output, assertions and distillates; `knowledge/` and `CLAUDE.md` stay English. |
| `{{VERIFICATION_ROLE}}` | The role and institution holding the authority to establish evidence. |
| `{{REVIEW_MECHANISM}}` | The mechanism fulfilling the machine review contract, meaning the reviewer model and the pairing tooling; a reviewer from a different model family than the producing agent decorrelates error modes. |
| `{{STYLE_SHEET}}` | The rules for the output prose, covering register, citation display and terminology choices. |
| `{{HARNESS_RULES}}` | The harness-specific rules of the exchangeable block at the end of `CLAUDE.md`, such as which commands an agent may run unasked. |

### Derived content

Three things are written rather than substituted. One `MOC-<Topic>.md` per topic of the controlled topic set in `30_assertions/`, schema in `knowledge/schema.md` § Topic map. The topic map link list under "Explore the knowledge" in `HOME.md`, one wikilink per MOC file. The chapter register in `knowledge/state.md`, one row per chapter of the output.

## Fill-in order

1. Replace the class B markers in `knowledge/specification.md`; this is the single place the decisions live.
2. Replace the class A markers in `knowledge/index.md`, `schema.md`, `operations.md`, `state.md`, `journal.md`, `specification.md`, `CLAUDE.md` and `HOME.md`. The markers `{{LANGUAGE}}` and `{{HARNESS_RULES}}` in `CLAUDE.md` take the class B decisions from step 1. Remove the template note comment at the top of `CLAUDE.md`.
3. Create one `MOC-<Topic>.md` per topic in `30_assertions/` and write the matching link list into `HOME.md`.
4. Write the chapter register into `knowledge/state.md`.
5. Leave `tests/fixtures/` in place; it is test accessory the validator's own suite runs against, and it stays in an instance. Delete `docs/` if unwanted.
6. Run `python tools/validate.py .` and `python -m pytest tests`. The template declares the three warnings a fresh instance raises under `expected-warnings` in `knowledge/specification.md`, `W-EMPTY` until the first document enters the production chain, `W-NO-OUTPUT` until the first chapter exists and `W-PLACEHOLDER` until every placeholder is replaced. Once instantiation has satisfied a declaration, the validator reports it as `W-STALE-EXPECTATION`; remove the satisfied entry then, so that any further warning stands out as a finding.
7. Commit as the instantiation milestone; note it in `knowledge/journal.md`.

## Conditional folders

Two folders across the chain are used only where the project calls for them. `references/` holds the CSL JSON records of citable-only sources and is needed only when the source type `publication` is active. `glossary/` holds one document per central technical term of the content and is used as the need arises; an empty glossary is no defect.

## Continuous checking

`.github/workflows/checks.yml` runs the validator and the test suite on every push. An instance that does not want it deletes the file.

## Prompt for the first agent session

Start an agent session in the repository root and give it this prompt.

```
Instantiate this Grounded Vault template for my project.

Read SETUP.md, knowledge/index.md and knowledge/schema.md first, then work in
this order and stop for me where the instructions say so.

1. Ask me for the class B decisions from SETUP.md, one question at a time, in
   the order PURPOSE, TOPICS, SOURCE_TYPES, GENRE, LANGUAGE, VERIFICATION_ROLE,
   REVIEW_MECHANISM, STYLE_SHEET, HARNESS_RULES. Propose a concrete default
   where my answer allows one, and do not invent a decision I have not given.
2. Read the class A values off the repository and the current date, and confirm
   them with me in one step.
3. Replace every {{...}} placeholder in the repository with the agreed values
   and remove the TEMPLATE NOTE comment at the top of CLAUDE.md. Do not touch
   tests/ or tools/.
4. Create one MOC-<Topic>.md file in 30_assertions/ per topic of the controlled
   topic set, following the topic map schema, and replace the topic map line in
   HOME.md with one wikilink per MOC file.
5. Write the chapter register into knowledge/state.md, one row per chapter of
   the output, all rows at writing status planned.
6. Run `python tools/validate.py .`. Fix every error. Then check the declared
   expected-warnings in knowledge/specification.md against the run and remove
   every declaration the validator reports as W-STALE-EXPECTATION.
7. Commit the instantiation as one milestone and append a dated entry to
   knowledge/journal.md naming the decisions taken.

Report what you filled, which MOC files you created and the final validator
output.
```

## Installing the dependencies

The validator needs PyYAML, the test suite additionally pytest. With uv, `uv sync` installs both from `pyproject.toml`. Without uv, `pip install pyyaml pytest` covers the same set.

## First production cycle

The smallest full pass carries one source from the ground to a written paragraph and exercises every layer and every rule before scale does. The document skeletons belong to `knowledge/schema.md`, the procedures to `knowledge/operations.md`; the sequence is this.

1. **Acquire.** Place the original in `00_sources/`, or, for a citable-only source, export its CSL JSON record into `references/`. Add the row to the source inventory in `knowledge/state.md` at status `new`, with the acquisition channel. The `.gitignore` keeps `00_sources/` uncommitted by default because third-party rights usually forbid redistribution, and an original whose rights the project holds is committed by force-adding it.
2. **Ingest.** Convert the original into its Markdown representation in `10_markdown/documents/` (or place the data file in `10_markdown/data/` with its schema description of the same slug), fill the metadata block, and stamp a block ID onto every anchor-relevant paragraph. A publication has no representation, because its record in `references/` is the root of that source type. Set the inventory row to `ingested`. From here on the representation is never edited; a revised source enters as a new file with a date-suffixed slug.
3. **Distill.** Write one distillate of the same slug in `20_distillates/<source-type>s/`, one core statement per anchor, each ending in a statement ID. The anchor is a block reference for a document, a verbatim quotation for a publication, a declared computation for data. Record the quotation check as `checked.quote` now, while the full text is at hand. The distillate enters at `status: grounded`; set the inventory row to `distilled`.
4. **Build one assertion.** Synthesize one atomic statement in `30_assertions/`, grounded in at least one distillate statement, filed under a topic of the controlled topic set, and list it in that topic's `MOC-<Topic>.md`.
5. **Write one chapter.** Create the first file in `40_output/`, write one paragraph in which the load-bearing sentence carries a footnote `Grounded in [[…]]` and, where the synthesis calls for one, a second footnote `Posit: …`. Mirror the referenced assertions and the posit count in the frontmatter and update the chapter register in `knowledge/state.md`.
6. **Check.** Run `python tools/validate.py .` after each step, and treat every warning that is not declared under `expected-warnings` as a finding. The first ingested representation satisfies `W-EMPTY` and the first chapter satisfies `W-NO-OUTPUT`; each satisfied declaration is removed once the validator reports it as `W-STALE-EXPECTATION`.
