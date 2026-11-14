# Tests

This repository checks its own statements with a script and its test suite that run locally before a commit. They decide consistency and file structure. Whether the description of the practice is right in substance remains scholarly judgement and is not tested. The claims each check covers, with procedure and dated verdict, are listed in [`knowledge/verification.md`](../../knowledge/verification.md).

## Where the tests are

- [`tools/check_consistency.py`](../check_consistency.py) checks that the site's statements agree with their sources: catalogue and templates, convention, the addresses of the retired pages, start page, gallery, anchors, links and the frontmatter of the knowledge documents. Each group answers one claim of the V-series in `verification.md`.
- [`tools/tests/`](.) holds the regression cases for that script. Each case copies the repository's own data, corrupts one field and asserts that the check reports it, because a check that has stopped deciding anything passes a green run as quietly as a correct one.

## How to run them

From the repository root:

```sh
python -m pytest tools/tests -q -p no:cacheprovider
python tools/check_consistency.py
```

`check_consistency.py` and the cases under `tools/tests/` need only the Python standard library, and `python -m unittest discover tools/tests` runs the cases without pytest. `python tools/check_consistency.py --check-urls` adds the resolution of external addresses and needs network access. The local download archive that the start-page check compares are rebuilt with `python tools/build_downloads.py`.

The consistency check runs before every commit that touches the catalogue, the convention, the template folder, the start page or the use-case gallery. A failing check names its group and the file to correct.

## What the tests leave open

The checks decide what a rule can decide. Whether a template, the skill or a case description is adequate, and whether a reader understands the pages, needs reading by people. Browser checks of the portal pages are run when a page changes and recorded with their date in `verification.md`.

## Using the pattern in your own project

The pattern carries over to any Promptotyping repository whose documents repeat each other or make claims a rule can decide.

1. Write down in `knowledge/testing.md` what the project guarantees, how each guarantee is checked, what is deliberately left unchecked, and the commands that run the checks. The [Testing template](https://dhcraft.org/Promptotyping/promptotyping-document/testing) gives the structure. Where the project's claims are used externally, `knowledge/verification.md` records each claim with procedure and dated verdict, as this repository does.
2. Name for each repeated fact its source of truth and the places that repeat it, and write a small script that reads both and fails with a message naming the place to correct. Keep it free of dependencies where you can, so it runs on every machine.
3. Give every check at least one regression case that corrupts one field of a copy of the real data and expects the failure. Take the fixtures from the project's own data rather than invented examples.
4. For an interface, state browser tests as outcomes a user sees, with expectations taken from `design.md` or `specification.md` rather than from the layout code, and let them skip when the browser runtime is missing.
5. Run the checks before every commit, and record a verdict with its date in the document that lists the claims. Acceptance of the artefact stays with the researchers, so no test records it.
