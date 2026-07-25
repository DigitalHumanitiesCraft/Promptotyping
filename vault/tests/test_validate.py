"""Fixture tests for tools/validate.py against the shipped example instances.

examples/minimal is the positive fixture and must pass clean; examples/broken
carries one specimen per defect class and every class must be caught. Two tests
run against this vault itself, because the expected state of a real instance is
part of what the validator has to get right: no errors, and the one warning the
empty deliverable folder produces (decision of 2026-07-25 in
knowledge/specification.md).
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
    "E-INVENTORY",  # document in neither inventory register
}


def test_minimal_is_clean() -> None:
    report = validate(MINIMAL)
    assert report.errors == [], report.errors


def test_minimal_computations_reproduce() -> None:
    report = validate(MINIMAL, run_computations=True)
    assert report.errors == [], report.errors


def test_broken_catches_every_defect_class() -> None:
    report = validate(BROKEN)
    missing = EXPECTED_BROKEN_CODES - report.codes()
    assert not missing, f"defect classes not caught: {missing}"


def test_broken_reports_no_false_alarms_outside_expected_classes() -> None:
    report = validate(BROKEN)
    unexpected = report.codes() - EXPECTED_BROKEN_CODES
    assert not unexpected, f"unexpected error classes: {unexpected}"


def test_instance_is_clean_and_warns_about_the_empty_deliverable() -> None:
    report = validate(REPO)
    assert report.errors == [], report.errors
    assert {code for code, _, _ in report.warnings} == {"W-NO-DELIVERABLE"}


def test_a_vault_without_registers_says_the_inventory_check_did_not_run(
    tmp_path: Path,
) -> None:
    report = validate(tmp_path)
    assert report.errors == []
    assert {code for code, _, _ in report.warnings} == {
        "W-NO-INVENTORY",
        "W-NO-DELIVERABLE",
    }
