"""Fixture tests for the deterministic parts of tools/review.py.

Covered are pair cutting, prompt construction, verdict parsing and the booking
of checked.machine-review, all against tests/fixtures/minimal. The judging
mechanism itself is not exercised here: no test calls a model, and the batch
path is driven with hand-written verdict records.
"""

import shutil
import sys
from pathlib import Path

import pytest

REPO = Path(__file__).parents[1]
sys.path.insert(0, str(REPO / "tools"))

from review import (  # noqa: E402
    VERDICTS,
    book_results,
    build_prompt,
    cut_pairs,
    parse_verdict,
    set_checked_date,
)

MINIMAL = REPO / "tests" / "fixtures" / "minimal"

DOC_DISTILLATE = "20_distillates/documents/report-garden-water-2026"
DATA_DISTILLATE = "20_distillates/data/water-readings-2025"
PUB_DISTILLATE = "20_distillates/publications/example-2024-metering"
ASSERTION = "30_assertions/metering-reduces-water-use"


@pytest.fixture(scope="module")
def pairs():
    return cut_pairs(MINIMAL)


def _by_id(pairs, pair_id):
    found = [p for p in pairs if p.id == pair_id]
    assert len(found) == 1, f"{pair_id} not cut exactly once: {len(found)}"
    return found[0]


def test_every_statement_and_every_grounding_becomes_one_pair(pairs) -> None:
    source_pairs = [p for p in pairs if p.kind == "source"]
    assertion_pairs = [p for p in pairs if p.kind == "assertion"]
    assert len(source_pairs) == 5  # 3 document, 1 data, 1 publication statements
    assert len(assertion_pairs) == 3  # one per grounding anchor of the assertion
    assert len({p.id for p in pairs}) == len(pairs)


def test_pair_cutting_is_deterministic() -> None:
    first = cut_pairs(MINIMAL)
    second = cut_pairs(MINIMAL)
    assert [p.id for p in first] == [p.id for p in second]
    assert [p.location for p in first] == [p.location for p in second]


def test_document_pair_is_block_plus_heading_path(pairs) -> None:
    pair = _by_id(pairs, f"{DOC_DISTILLATE}#^s1")
    assert pair.anchor == "10_markdown/documents/report-garden-water-2026#^a1b2"
    assert "Annual Water Report of the Example Community Garden 2026" in pair.location
    assert (
        "Water meters were installed on all forty plots in January 2025."
        in pair.location
    )
    assert pair.claim == "Water meters were installed on all plots in January 2025."


def test_publication_pair_is_the_verbatim_quotation(pairs) -> None:
    pair = _by_id(pairs, f"{PUB_DISTILLATE}#^s1")
    assert (
        '"Metering alone reduced irrigation volumes in nine of eleven surveyed gardens."'
        in pair.location
    )
    assert "example2024metering, p. 4" in pair.location
    assert pair.claim.startswith("In the surveyed gardens, metering alone")


def test_data_pair_is_the_computation_and_its_result(pairs) -> None:
    pair = _by_id(pairs, f"{DATA_DISTILLATE}#^s1")
    assert "python tools/analysis/reduction.py" in pair.location
    assert "31.4" in pair.location
    assert pair.claim == "Water use in 2025 was 31.4 percent below 2024."


def test_assertion_pair_holds_statement_and_assertion_sentence(pairs) -> None:
    pair = _by_id(pairs, f"{ASSERTION}<-{DATA_DISTILLATE}#^s1")
    assert pair.location == "Water use in 2025 was 31.4 percent below 2024."
    assert pair.claim == (
        "Plot metering coincided with a water use reduction of roughly a third"
    )
    assert pair.document == ASSERTION


def test_anti_anchoring_keeps_the_producing_reasoning_out(pairs) -> None:
    """Nothing but location and claim enters the pair, so no link, anchor or Support text."""
    for pair in pairs:
        assert "[[" not in pair.location and "[[" not in pair.claim
        assert "^s" not in pair.claim
        assert "## Support" not in pair.prompt
        assert "what this anchor contributes" not in pair.prompt
    contribution = "the readings reproduce the drop as 31.4 percent"
    assert all(contribution not in pair.prompt for pair in pairs)


def test_prompts_follow_the_skeletons_of_operations_md(pairs) -> None:
    source = _by_id(pairs, f"{DOC_DISTILLATE}#^s1").prompt
    assertion = _by_id(pairs, f"{ASSERTION}<-{DATA_DISTILLATE}#^s1").prompt
    for prompt in (source, assertion):
        assert prompt.startswith("You are an adversarial reviewer.")
        for verdict in VERDICTS:
            assert verdict in prompt
    assert "PASSAGE:" in source and "STATEMENT:" in source
    assert "ASSERTION:" not in source
    assert "STATEMENT:" in assertion and "ASSERTION:" in assertion
    assert "PASSAGE:" not in assertion


def test_build_prompt_is_a_pure_function_of_the_pair(pairs) -> None:
    for pair in pairs:
        assert build_prompt(pair) == pair.prompt


@pytest.mark.parametrize(
    ("response", "expected"),
    [
        ("fully supports", "fully supports"),
        ("Fully supports. The passage states exactly this.", "fully supports"),
        ("**overreaches**\nThe statement widens the finding.", "overreaches"),
        (
            "Verdict: not in the text\nNothing in the passage says so.",
            "not in the text",
        ),
        ("  partially supports  ", "partially supports"),
        (
            "The passage names a different year, so the verdict is contradicts.",
            "contradicts",
        ),
    ],
)
def test_parse_verdict_accepts_the_vocabulary(response: str, expected: str) -> None:
    assert parse_verdict(response) == expected


@pytest.mark.parametrize(
    "response",
    [
        "",
        "supports",
        "yes",
        "mostly supports",
        "It fully supports the first half but overreaches on the second.",
    ],
)
def test_parse_verdict_rejects_everything_else(response: str) -> None:
    with pytest.raises(ValueError):
        parse_verdict(response)


def test_set_checked_date_keeps_the_rest_of_the_frontmatter() -> None:
    text = "---\ntype: distillate\nchecked:\n  quote: 2026-07-11\nupdated: 2026-07-11\n---\n\n# X\n"
    out = set_checked_date(text, "machine-review", "2026-08-09")
    assert "  quote: 2026-07-11\n" in out
    assert "  machine-review: 2026-08-09\n" in out
    assert out.count("checked:") == 1
    assert (
        set_checked_date(out, "machine-review", "2026-08-10").count("machine-review")
        == 1
    )


def test_set_checked_date_expands_an_empty_map() -> None:
    text = "---\ntype: assertion\nchecked: {}\nupdated: 2026-07-11\n---\n\n# X\n"
    out = set_checked_date(text, "machine-review", "2026-08-09")
    assert "checked:\n  machine-review: 2026-08-09\nupdated: 2026-07-11\n" in out


def test_set_checked_date_refuses_a_document_without_the_field() -> None:
    with pytest.raises(ValueError):
        set_checked_date("---\ntype: moc\n---\n\n# X\n", "machine-review", "2026-08-09")


def _all_fully_supports(pairs) -> dict[str, str]:
    return {p.id: "fully supports" for p in pairs}


def test_booking_sets_the_date_only_on_a_clean_document(tmp_path) -> None:
    vault = tmp_path / "vault"
    shutil.copytree(MINIMAL, vault)
    pairs = cut_pairs(vault)
    verdicts = _all_fully_supports(pairs)
    verdicts[f"{DOC_DISTILLATE}#^s3"] = "overreaches"

    outcome = book_results(vault, pairs, verdicts, "2026-08-09", apply=True)

    booked = {r.document for r in outcome.documents if r.booked}
    assert DOC_DISTILLATE not in booked
    assert {DATA_DISTILLATE, PUB_DISTILLATE, ASSERTION} <= booked
    assert [(d.pair_id, d.verdict) for d in outcome.deviations] == [
        (f"{DOC_DISTILLATE}#^s3", "overreaches")
    ]
    assert "machine-review: 2026-08-09" in (vault / f"{ASSERTION}.md").read_text(
        encoding="utf-8"
    )
    assert "machine-review" not in (vault / f"{DOC_DISTILLATE}.md").read_text(
        encoding="utf-8"
    )


def test_booking_without_apply_writes_nothing(tmp_path) -> None:
    vault = tmp_path / "vault"
    shutil.copytree(MINIMAL, vault)
    pairs = cut_pairs(vault)
    before = (vault / f"{ASSERTION}.md").read_text(encoding="utf-8")

    outcome = book_results(
        vault, pairs, _all_fully_supports(pairs), "2026-08-09", apply=False
    )

    assert all(r.booked for r in outcome.documents)
    assert (vault / f"{ASSERTION}.md").read_text(encoding="utf-8") == before


def test_unjudged_pairs_block_the_booking_and_are_reported(tmp_path) -> None:
    vault = tmp_path / "vault"
    shutil.copytree(MINIMAL, vault)
    pairs = cut_pairs(vault)
    verdicts = _all_fully_supports(pairs)
    del verdicts[f"{PUB_DISTILLATE}#^s1"]

    outcome = book_results(vault, pairs, verdicts, "2026-08-09", apply=True)

    assert outcome.unjudged == [f"{PUB_DISTILLATE}#^s1"]
    assert PUB_DISTILLATE not in {r.document for r in outcome.documents if r.booked}


def test_booking_keeps_the_line_endings_of_the_file(tmp_path) -> None:
    vault = tmp_path / "vault"
    shutil.copytree(MINIMAL, vault)
    path = vault / f"{ASSERTION}.md"
    path.write_bytes(
        path.read_text(encoding="utf-8").replace("\n", "\r\n").encode("utf-8")
    )
    pairs = cut_pairs(vault)

    book_results(vault, pairs, _all_fully_supports(pairs), "2026-08-09", apply=True)

    raw = path.read_bytes()
    assert b"machine-review: 2026-08-09" in raw
    assert raw.count(b"\n") == raw.count(b"\r\n")


def test_booked_vault_still_validates(tmp_path) -> None:
    from validate import validate

    vault = tmp_path / "vault"
    shutil.copytree(MINIMAL, vault)
    pairs = cut_pairs(vault)
    book_results(vault, pairs, _all_fully_supports(pairs), "2026-08-09", apply=True)
    assert validate(vault).errors == []
