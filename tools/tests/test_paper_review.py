"""Regression tests for the sentence-level paper review inventory."""

import pathlib
import sys
import tempfile
import unittest

TESTS = pathlib.Path(__file__).resolve().parent
ROOT = TESTS.parent.parent
sys.path.insert(0, str(TESTS.parent))

import paper_review


class SentenceSplitTest(unittest.TestCase):
    def test_split_preserves_footnotes_and_emphasis(self):
        text = "First claim.[^1] **Second claim.** Third claim?"
        self.assertEqual(
            paper_review.split_review_units(text),
            ("First claim.[^1]", "**Second claim.**", "Third claim?"),
        )

    def test_split_does_not_break_common_abbreviations(self):
        text = "Smith et al. 2025 provide evidence. The result stands."
        self.assertEqual(
            paper_review.split_review_units(text),
            ("Smith et al. 2025 provide evidence.", "The result stands."),
        )

    def test_split_preserves_decimal_numbers(self):
        text = "Version 0.9.1 is current. Version 1.0 requires acceptance."
        self.assertEqual(
            paper_review.split_review_units(text),
            ("Version 0.9.1 is current.", "Version 1.0 requires acceptance."),
        )


class InventoryTest(unittest.TestCase):
    def fixture(self, text: str) -> pathlib.Path:
        directory = tempfile.TemporaryDirectory()
        self.addCleanup(directory.cleanup)
        path = pathlib.Path(directory.name) / "paper.md"
        path.write_text(text, encoding="utf-8")
        return path

    def test_inventory_separates_body_and_apparatus(self):
        path = self.fixture(
            "# Title\n\n## Abstract\n\nOne sentence. Another.\n\n"
            "## References\n\n- One reference.\n\n[^1]: One note.\n"
        )
        inventory = paper_review.build_inventory(path)
        result = paper_review.summary(inventory)
        self.assertEqual(result["sections"], 1)
        self.assertEqual(result["blocks"], 1)
        self.assertEqual(result["review_units"], 2)
        self.assertEqual(result["references"], 1)
        self.assertEqual(result["footnotes"], 1)

    # The manuscript left the public repository on 2026-10-14; the inventory
    # then runs on the author's copy through --paper, outside this suite.
    @unittest.skipUnless(paper_review.PAPER.exists(),
                         "manuscript withdrawn from the repository")
    def test_current_paper_has_expected_review_sections(self):
        inventory = paper_review.build_inventory()
        section_ids = {section.id for section in inventory.sections}
        self.assertEqual(len(inventory.sections), 26)
        self.assertIn("abstract", section_ids)
        self.assertIn("2.3.4", section_ids)
        self.assertIn("authors-note", section_ids)
        self.assertGreater(inventory.references, 40)
        self.assertGreater(inventory.footnotes, 30)

    def test_inventory_is_deterministic(self):
        path = self.fixture(
            "# Title\n\n## 1. Introduction\n\nOne claim.[^1] Another, et al. 2025.\n\n"
            "## References\n\n- One reference.\n\n[^1]: One note.\n"
        )
        first = paper_review.build_inventory(path)
        second = paper_review.build_inventory(path)
        self.assertEqual(first, second)


if __name__ == "__main__":
    unittest.main()
