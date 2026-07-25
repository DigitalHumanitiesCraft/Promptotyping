"""Tests for tools/bibliography.py against fixtures written for each rule.

The fixtures are small and local; the real reference stock and the real paper
stay out of the suite, so that a bibliography edit never breaks a test.
"""

import json
import sys
from pathlib import Path

REPO = Path(__file__).parents[1]
sys.path.insert(0, str(REPO / "tools"))

from bibliography import (  # noqa: E402
    compare,
    paper_entries,
    render_entry,
    sort_records,
)

JOURNAL = {
    "id": "berners-lee-2001",
    "type": "article-journal",
    "title": "The Semantic Web",
    "author": [
        {"family": "Berners-Lee", "given": "Tim"},
        {"family": "Hendler", "given": "James"},
        {"family": "Lassila", "given": "Ora"},
    ],
    "container-title": "Scientific American",
    "volume": "284",
    "issue": "5",
    "page": "34-43",
    "issued": {"date-parts": [[2001]]},
}


def test_journal_article_carries_volume_issue_year_and_en_dashed_pages() -> None:
    assert render_entry(JOURNAL) == (
        "Berners-Lee, Tim, James Hendler, and Ora Lassila. "
        '"The Semantic Web." *Scientific American* 284, no. 5 (2001): 34–43.'  # noqa: RUF001
    )


def test_two_authors_keep_the_comma_before_and() -> None:
    record = {
        "id": "collins-1993",
        "type": "article-journal",
        "title": "Epistemic Forms and Epistemic Games",
        "author": [
            {"family": "Collins", "given": "Allan"},
            {"family": "Ferguson", "given": "William"},
        ],
        "container-title": "Educational Psychologist",
        "issued": {"date-parts": [[1993]]},
    }
    assert render_entry(record).startswith("Collins, Allan, and William Ferguson. ")


def test_an_initial_ending_the_name_absorbs_the_closing_period() -> None:
    record = {
        "id": "borgman-2015",
        "type": "book",
        "title": "Big Data, Little Data, No Data",
        "author": [{"family": "Borgman", "given": "Christine L."}],
        "publisher": "MIT Press",
        "publisher-place": "Cambridge, MA",
        "issued": {"date-parts": [[2015]]},
    }
    assert render_entry(record).startswith("Borgman, Christine L. *Big Data")


def test_editors_are_marked_and_the_book_title_is_italic() -> None:
    record = {
        "id": "flanders-2019",
        "type": "book",
        "title": "The Shape of Data in Digital Humanities",
        "editor": [
            {"family": "Flanders", "given": "Julia"},
            {"family": "Jannidis", "given": "Fotis"},
        ],
        "publisher": "Routledge",
        "publisher-place": "London/New York",
        "issued": {"date-parts": [[2019]]},
        "URL": "https://doi.org/10.4324/9781315552941",
    }
    assert render_entry(record) == (
        "Flanders, Julia, and Fotis Jannidis, eds. "
        "*The Shape of Data in Digital Humanities.* "
        "London/New York: Routledge, 2019. https://doi.org/10.4324/9781315552941"
    )


def test_book_series_precedes_place_and_publisher() -> None:
    record = {
        "id": "kemman-2021",
        "type": "book",
        "title": "Trading Zones of Digital History",
        "author": [{"family": "Kemman", "given": "Max"}],
        "collection-title": "Studies in Digital History and Hermeneutics",
        "collection-number": "1",
        "publisher": "De Gruyter Oldenbourg",
        "publisher-place": "Berlin/Boston",
        "issued": {"date-parts": [[2021]]},
    }
    assert render_entry(record) == (
        "Kemman, Max. *Trading Zones of Digital History.* "
        "Studies in Digital History and Hermeneutics 1. "
        "Berlin/Boston: De Gruyter Oldenbourg, 2021."
    )


def test_preprint_prints_its_number_and_note_and_suppresses_the_url() -> None:
    record = {
        "id": "liu-2024",
        "type": "report",
        "title": "Large Language Model-Based Agents for Software Engineering: A Survey",
        "author": [{"family": "Liu", "given": "Junwei"}],
        "number": "arXiv:2409.02977",
        "note": "Accepted at ACM Transactions on Software Engineering and Methodology",
        "issued": {"date-parts": [[2024]]},
        "URL": "https://arxiv.org/abs/2409.02977",
    }
    assert render_entry(record) == (
        "Liu, Junwei. "
        '"Large Language Model-Based Agents for Software Engineering: A Survey." '
        "arXiv:2409.02977 (2024). "
        "Accepted at ACM Transactions on Software Engineering and Methodology."
    )


def test_report_without_a_number_names_publisher_and_genre_and_keeps_the_url() -> None:
    record = {
        "id": "hong-2025",
        "type": "report",
        "title": "Context Rot",
        "author": [{"family": "Hong", "given": "Kelly"}],
        "publisher": "Chroma",
        "genre": "Technical Report",
        "issued": {"date-parts": [[2025]]},
        "URL": "https://research.trychroma.com/context-rot",
    }
    assert render_entry(record) == (
        'Hong, Kelly. "Context Rot." Chroma Technical Report (2025). '
        "https://research.trychroma.com/context-rot"
    )


def test_a_title_ending_in_a_question_mark_gets_no_period() -> None:
    record = {
        "id": "owens-2011",
        "type": "article-journal",
        "title": "Defining Data for Humanists: Text, Artifact, Information or Evidence?",
        "author": [{"family": "Owens", "given": "Trevor"}],
        "container-title": "Journal of Digital Humanities",
        "volume": "1",
        "issue": "1",
        "issued": {"date-parts": [[2011]]},
    }
    assert render_entry(record).endswith(
        '"Defining Data for Humanists: Text, Artifact, '
        'Information or Evidence?" *Journal of Digital Humanities* 1, no. 1 (2011).'
    )


def test_a_weblog_post_carries_its_date_and_the_disambiguating_year() -> None:
    suffixed = {
        "id": "pollin-2025c",
        "type": "post-weblog",
        "title": "Promptotyping mit Claude Sonnet 4",
        "author": [{"family": "Pollin", "given": "Christopher"}],
        "container-title": "DHCraft Blog",
        "issued": {"date-parts": [[2025, 5, 27]]},
        "URL": "https://dhcraft.org/",
    }
    plain = dict(suffixed, id="posner-2015", issued={"date-parts": [[2015, 6, 25]]})
    assert render_entry(suffixed).endswith(
        "DHCraft Blog, 27 May 2025 (2025c). https://dhcraft.org/"
    )
    assert render_entry(plain).endswith(
        "DHCraft Blog, 25 June 2015. https://dhcraft.org/"
    )


def test_sorting_folds_diacritics_and_puts_the_shorter_author_list_first() -> None:
    def record(rid: str, *families: str, year: int = 2000) -> dict:
        return {
            "id": rid,
            "type": "article-journal",
            "title": rid,
            "author": [{"family": f, "given": "X"} for f in families],
            "issued": {"date-parts": [[year]]},
        }

    records = [
        record("schonhardt", "Schonhardt"),
        record("pollin-b", "Pollin", "Fischer"),
        record("schoech", "Schöch"),
        record("pollin-a", "Pollin", year=1999),
    ]
    assert [r["id"] for r in sort_records(records)] == [
        "pollin-a",
        "pollin-b",
        "schoech",
        "schonhardt",
    ]


def _write_references(directory: Path, records: list[dict]) -> None:
    directory.mkdir(parents=True, exist_ok=True)
    for record in records:
        (directory / f"{record['id']}.json").write_text(
            json.dumps([record]), encoding="utf-8"
        )


def test_compare_reports_both_directions_and_differing_text(tmp_path: Path) -> None:
    paper = tmp_path / "paper.md"
    paper.write_text(
        "# Paper\n\n"
        "Body text.\n\n"
        "## References\n\n"
        "- Berners-Lee, Tim, James Hendler, and Ora Lassila. "
        '"The Semantic Web." *Scientific American* 284, no. 5 (2001): 34-43.\n'
        '- Nobody, Nemo. "A Work Without a Record." *Journal* (2020).\n\n'
        "## Appendix\n\n- not a reference\n",
        encoding="utf-8",
    )
    orphan = dict(JOURNAL, id="orphan-2020", title="A Record Without a Paper Entry")
    entries = paper_entries(paper)
    assert len(entries) == 2

    result = compare([JOURNAL, orphan], entries)
    assert [r["id"] for r in result.records_without_entry] == ["orphan-2020"]
    assert result.entries_without_record == [
        'Nobody, Nemo. "A Work Without a Record." *Journal* (2020).'
    ]
    assert len(result.differing) == 1
    generated, found = result.differing[0]
    assert "34–43" in generated and "34-43" in found  # noqa: RUF001
