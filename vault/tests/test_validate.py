"""Fixture tests for tools/validate.py against the shipped example instances.

examples/minimal is the positive fixture and must pass clean; examples/broken
carries one specimen per defect class and every class must be caught. The
warning tests use temporary vaults, because a warning states that a check found
no subject, which neither shipped fixture can show.
"""

import sys
from pathlib import Path

REPO = Path(__file__).parents[1]
sys.path.insert(0, str(REPO / "tools"))

from validate import validate  # noqa: E402

MINIMAL = REPO / "examples" / "minimal"
BROKEN = REPO / "examples" / "broken"

EXPECTED_BROKEN_CODES = {
    "E-ANCHOR",  # dead block reference
    "E-TOPIC",  # topic outside the backbone
    "E-ORPHAN",  # claim in no topic map
    "E-CONTESTED",  # one-sided contested relation
    "E-FRONTMATTER",  # illegal status value
    "E-STATUS",  # status without recorded checks
    "E-FOOTNOTE",  # wrong keyword and undefined marker
    "E-MIRROR",  # frontmatter mirror out of sync
    "E-COMPUTATION",  # computation script missing
    "E-QUOTE",  # intake-time quotation check not recorded
    "E-INVENTORY",  # document in no inventory register
}

SPECIFICATION = """---
title: Specification
expected-warnings: [{expected}]
---

# Specification
"""


def _declare_expected_warnings(root: Path, expected: str) -> None:
    (root / "knowledge").mkdir(exist_ok=True)
    (root / "knowledge" / "specification.md").write_text(
        SPECIFICATION.format(expected=expected), encoding="utf-8"
    )


def test_minimal_is_clean() -> None:
    report = validate(MINIMAL)
    assert report.errors == [], report.errors


def test_minimal_computations_reproduce() -> None:
    report = validate(MINIMAL, run_computations=True)
    assert report.errors == [], report.errors


def test_minimal_raises_no_warning() -> None:
    report = validate(MINIMAL)
    assert report.warnings == [], report.warnings


def test_broken_catches_every_defect_class() -> None:
    report = validate(BROKEN)
    missing = EXPECTED_BROKEN_CODES - report.codes()
    assert not missing, f"defect classes not caught: {missing}"


def test_broken_reports_no_false_alarms_outside_expected_classes() -> None:
    report = validate(BROKEN)
    unexpected = report.codes() - EXPECTED_BROKEN_CODES
    assert not unexpected, f"unexpected error classes: {unexpected}"


def test_instance_is_clean_and_its_one_warning_is_declared() -> None:
    report = validate(REPO)
    assert report.errors == [], report.errors
    assert {code for code, _, _ in report.warnings} == {"W-NO-DELIVERABLE"}
    assert report.unexpected_warnings() == []


def test_an_empty_vault_says_which_checks_had_no_subject(tmp_path: Path) -> None:
    report = validate(tmp_path)
    assert {code for code, _, _ in report.warnings} == {
        "W-NO-INVENTORY",
        "W-NO-DELIVERABLE",
    }


def test_an_empty_vault_is_an_error_rather_than_a_green_run(tmp_path: Path) -> None:
    """A path with no documents used to pass every check vacuously and print OK."""
    report = validate(tmp_path)
    assert report.codes() == {"E-NO-SUBJECT"}


def test_a_declared_warning_is_not_reported_as_unexpected(tmp_path: Path) -> None:
    _declare_expected_warnings(tmp_path, "W-NO-INVENTORY, W-NO-DELIVERABLE")
    report = validate(tmp_path)
    assert report.unexpected_warnings() == []


def test_an_undeclared_warning_stays_unexpected(tmp_path: Path) -> None:
    _declare_expected_warnings(tmp_path, "W-NO-INVENTORY")
    report = validate(tmp_path)
    assert [code for code, _, _ in report.unexpected_warnings()] == ["W-NO-DELIVERABLE"]


def test_a_declaration_that_no_longer_fires_is_reported(tmp_path: Path) -> None:
    _declare_expected_warnings(tmp_path, "W-NO-INVENTORY, W-NO-DELIVERABLE, W-GONE")
    report = validate(tmp_path)
    assert "W-STALE-EXPECTATION" in {code for code, _, _ in report.warnings}
