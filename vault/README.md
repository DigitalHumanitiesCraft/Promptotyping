# Promptotyping Paper Vault

A [Grounded Vault](https://github.com/DigitalHumanitiesCraft/grounded-vault) instance that carries the provenance layer beneath the Promptotyping paper. The paper itself is maintained canonically in this repository as `knowledge/paper.md`, which the site renders directly; this vault anchors the paper's load-bearing claims (project figures, genealogy, novelty) to the source material that supports them, layer by layer, so that human expert review can proceed passage by passage.

Layer model, anchor mechanics, check contracts, and status progression are the template's invariants; see [SETUP.md](SETUP.md) for how this instance was parameterised and `knowledge/specification.md` for what this project decided. Humans start at [HOME.md](HOME.md), agents at [CLAUDE.md](CLAUDE.md).

## What each folder holds

Four folders carry the evidence chain, and their numbers state the direction material travels through it. A source becomes a representation in `00_representation/`, a representation becomes a distillate with quote-checked statements in `10_distillates/`, a distillate becomes an atomic claim in `20_claims/`, and claims carry the deliverable in `30_deliverable/`. Anchors resolve backwards along this chain and never forwards, which is the rule the numbering makes visible. The steps of ten leave room for a layer between two existing ones.

The numbering covers the chain and nothing else, and three content folders stand outside it. `references/` holds one CSL record per cited work, `_sources/` the local originals they were read from, and both together are the entry route for published literature, where `00_representation/` is the entry route for project documents. `glossary/` holds one entry per term the paper sets on its own authority, terms no external source grounds; a term that a distillate and a claim already carry stays out of it.

`knowledge/` steers this vault and is not a second copy of the repository's own knowledge base one level up. It holds the rulebook, the operations playbook, the parameters and settled decisions of this instance, the volatile state, the vault's own journal, and the register of paper sources.

`tools/` holds three read-only scripts. `validate.py` checks the vault against its schema, `coverage.py` reports which statements of the paper no claim covers, and `bibliography.py` renders the paper's References section from the CSL records in `references/`; with `--compare` the latter names the differences between the two stocks in both directions, so that the hand-maintained section and the records stay comparable without a second copy of the bibliography. None of the three writes to the paper. `tests/` holds the suite that proves the validator catches anything at all and that the bibliography rules hold, and `examples/` the fixtures the validator tests run against. The template ships the fixtures and instructs an instance to delete them; this instance keeps them for that reason, and the validator ignores them because it reads only the content folders at the root it is given.

## License

Documentation, templates and examples are CC BY 4.0; code in `tools/` and `tests/` is MIT. See [LICENSE](LICENSE).
