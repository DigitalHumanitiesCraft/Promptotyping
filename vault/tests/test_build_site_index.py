"""Topic descriptions remain the introductory paragraph as maps grow sections."""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parents[1] / "tools"))

from build_site_index import read_moc  # noqa: E402


def test_topic_description_does_not_drift_to_later_section(tmp_path):
    source = tmp_path / "MOC-Example.md"
    source.write_text(
        "---\ntype: moc\ntopic: Example\n---\n\n# MOC: Example\n\n"
        "Introductory research context\ncontinued on another line.\n\n"
        "## Findings\n\n- [[30_assertions/example-finding]]\n\n"
        "## Questions\n\nA later paragraph must not replace the introduction.\n\n"
        "## Related\n\n- [Another map](MOC-Another.md)\n",
        encoding="utf-8",
    )
    result = read_moc(source)
    assert result["description"] == "Introductory research context continued on another line."
    assert result["assertions"] == ["example-finding"]


def test_topic_without_intro_has_no_heading_as_description(tmp_path):
    source = tmp_path / "MOC-Example.md"
    source.write_text(
        "---\ntype: moc\ntopic: Example\n---\n\n# MOC: Example\n\n"
        "## Findings\n\n- [[30_assertions/example-finding]]\n",
        encoding="utf-8",
    )
    assert read_moc(source)["description"] == ""
