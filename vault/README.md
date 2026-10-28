# Promptotyping Grounded Vault

A [Grounded Vault](https://github.com/DigitalHumanitiesCraft/grounded-vault) instance that carries the grounded evidence layer of the Promptotyping method. It anchors the method's load-bearing assertions (genealogy, method, concepts, limitations, the surrounding discourse) to the source material that supports them, layer by layer, so that human expert review can proceed statement by statement. The method paper is maintained outside this repository and will be published in a journal.

Layer model, anchor mechanics, check contracts, and status progression are the template's invariants; see [SETUP.md](SETUP.md) for how this instance was parameterised and `knowledge/specification.md` for what this project decided. Humans start at [HOME.md](HOME.md), agents at [CLAUDE.md](CLAUDE.md).

The [benchmark research map](30_assertions/MOC-Benchmark.md) also connects this
source base to the repository's draft Promptotyping Bench proposal. The proposal,
study plan and executable task package stay at their canonical repository locations.
Hypotheses and reference checks are not entered as evidence of method effectiveness.

## What each folder holds

Four folders carry the evidence chain, and their numbers state the direction material travels through it. A source becomes a representation in `10_markdown/`, a representation becomes a distillate with quote-checked statements in `20_distillates/`, a distillate becomes an atomic assertion in `30_assertions/`, and assertions carry the output in `40_output/`. Anchors resolve backwards along this chain and never forwards, which is the rule the numbering makes visible. The steps of ten leave room for a layer between two existing ones.

The numbering covers the chain and nothing else, and three content folders stand outside it. `references/` holds one CSL record per cited work, `00_sources/` the local originals they were read from, and both together are the entry route for published literature, where `10_markdown/` is the entry route for project documents. `glossary/` holds one entry per term the method sets on its own authority, terms no external source grounds; a term that a distillate and an assertion already carry stays out of it.

`knowledge/` steers this vault and is not a second copy of the repository's own knowledge base one level up. It holds the rulebook, the operations playbook, the parameters and settled decisions of this instance, the volatile state, the vault's own journal, and the register of literature sources.

`tools/` holds the read-only scripts. `validate.py` checks the vault against its schema, `review.py` cuts and books the machine-review pairs, and `build_site_index.py` renders the assertion layer into the site's `data/vault.json`. `tests/` holds the suite that proves the validator catches anything at all, with the template's fixtures under `tests/fixtures/`.

## License

Documentation, templates and examples are CC BY 4.0; code in `tools/` and `tests/` is MIT. See [LICENSE](LICENSE).
