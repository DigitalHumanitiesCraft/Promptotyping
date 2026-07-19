"""Fixture tests for tools/validate.py against the shipped example instances.

examples/minimal is the positive fixture and must pass clean; examples/broken
carries one specimen per defect class and every class must be caught.
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
