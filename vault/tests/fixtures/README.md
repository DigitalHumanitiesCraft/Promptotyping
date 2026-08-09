# Validator fixtures

Test data for `tests/test_validate.py`. Two vaults, whose content is fictional and carries no evidential weight.

- `minimal/` — one complete valid pass from source to chapter: one source per source type (document, publication, data), one distillate each, one assertion grounded across all three, one output paragraph with a grounded footnote and a posit. Its `knowledge/state.md` is the inventory register that records the Markdown representations and distillates. `python tools/validate.py tests/fixtures/minimal` passes clean and without a warning, computations included.
- `broken/` — one specimen per defect class the validator must catch: dead block reference, dead frontmatter target, topic outside the controlled topic set, orphan assertion, one-sided contested relation, illegal frontmatter, status without recorded checks, missing computation script, unrecorded quotation check, footnote without keyword, marker without definition, mirror out of sync, document in no inventory register, grounding that skips or sidesteps its layer, empty grounding, duplicate block ID, duplicate statement ID, and the two defects reported as warnings, an unfilled template placeholder and a document whose last check predates its own revision. Each fixture names its own defect in its lead sentence.

The suite runs the validator over both and asserts that `minimal/` produces nothing and that every defect class in `broken/` is caught, which is what establishes that the validator catches anything at all. Deleting the fixtures leaves those tests running against directories that do not exist, where passing means nothing.

The validator reads only the content folders and the inventory register at the root it is given, so the fixtures stay invisible to a run over the vault itself and can be broken deliberately without touching the evidence layer.
