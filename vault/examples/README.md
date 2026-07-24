# Examples

Two example instances, the fixtures `tests/test_validate.py` runs against and documentation of the schema by example. Their content is fictional and belongs to no source of this vault; it is a garden water report, small enough that one case passes through every layer at once.

- `minimal/` — a complete valid pass through every layer: one source per source type (document, publication, data), one distillate each, one claim grounded across all three, one deliverable paragraph with a grounded footnote and a posit. `python tools/validate.py examples/minimal --run-computations` passes clean.
- `broken/` — one specimen per defect class the validator must catch: dead block reference, topic outside the backbone, orphan claim, one-sided contested relation, illegal frontmatter, status without recorded checks, missing computation script, unrecorded quotation check, footnote without keyword, marker without definition, mirror out of sync. Each fixture names its own defect in its lead sentence.

Both folders come from the Grounded Vault template, which ships them and instructs an instance to delete them after instantiation. This instance keeps them, because the suite that proves the validator catches anything at all has no other subject. Without them `python -m pytest tests` gives three tests that pass on a directory that does not exist and one that fails.

The validator reads only the content folders at the root it is given, so these fixtures stay invisible to a run over the vault itself and can be broken deliberately without touching the evidence layer.
