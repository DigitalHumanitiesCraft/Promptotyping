# Setup

Instantiate the template by setting a small number of parameters. Everything else, the layer model, the anchor mechanics, the check contracts and the status progression, is invariant and stays untouched.

## Parameters

Decide these before filling anything:

1. **Topic and topic backbone** — the controlled list of topics; each becomes one `MOC-<Topic>.md` in `20_claims/`.
2. **Active source types** — `document`, `publication`, `data`; activate what the project needs.
3. **Deliverable genre and chapter register** — strategy, proposal, report or scholarly synthesis, and its chapters.
4. **Working language of content** — deliverable, claims and distillates; `knowledge/` and `CLAUDE.md` stay English.
5. **Verification role** — who holds the authority to establish evidence (role and institution).
6. **Check mechanisms** — validation is `tools/validate.py`; choose the machine review mechanism (reviewer model, ideally from a different family than the producing agent).

## Fill-in order

1. Replace the `{{…}}` placeholders in `knowledge/specification.md` with the parameters; this is the single place they live.
2. Fill the remaining placeholders in `knowledge/index.md`, `state.md`, `journal.md`, `CLAUDE.md`, `HOME.md` (project name, repository, date, language).
3. Create one `MOC-<Topic>.md` per backbone topic in `20_claims/` (schema in `knowledge/schema.md` § Topic map).
4. Write the chapter register into `knowledge/state.md`.
5. Delete `examples/` and, if unwanted, `docs/`.
6. Run `python tools/validate.py .` — an empty, correctly instantiated vault passes clean.
7. Commit as the instantiation milestone; note it in `knowledge/journal.md`.

## First production cycle

Acquire one source, ingest it, distill it, build one claim, write one paragraph with one grounded footnote and, if honest, one posit. Run the validator after each step. This smallest full pass exercises every layer and every rule before scale does.
