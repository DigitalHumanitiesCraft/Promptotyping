"""Regression tests for tools/check_consistency.py.

Each test takes the repository's own data as the fixture, corrupts one field of
a copy, and asserts that the check reports it. The positive direction is covered
by the script's own run before every commit, so what is tested here is that a
check still speaks when its subject is wrong; a check that has quietly stopped
deciding anything passes a green run and says nothing.

Written with unittest rather than pytest so that tools/ stays free of
dependencies, unlike vault/, which is a template instance with its own
dependency set.

    python -m unittest discover tools/tests
"""

import copy
import json
import pathlib
import sys
import tempfile
import unittest

TESTS = pathlib.Path(__file__).resolve().parent
ROOT = TESTS.parent.parent
sys.path.insert(0, str(TESTS.parent))

import build_glossar  # noqa: E402
import check_consistency as cc  # noqa: E402


class CheckCase(unittest.TestCase):
    """A test of one check group.

    The script collects its verdicts in two module-level lists, the way a single
    run wants them; a test therefore starts from empty lists and restores what
    it patched.
    """

    def setUp(self):
        self.patch("failures", [])
        self.patch("notes", [])

    def patch(self, name, value):
        original = getattr(cc, name)
        setattr(cc, name, value)
        self.addCleanup(setattr, cc, name, original)

    def tempdir(self):
        directory = tempfile.TemporaryDirectory()
        self.addCleanup(directory.cleanup)
        return pathlib.Path(directory.name)

    def only_failure(self):
        self.assertEqual(len(cc.failures), 1, cc.failures)
        return cc.failures[0]


class PortSelfTest(CheckCase):
    """The three ports of the JavaScript, which decide the anchor set of V8."""

    def test_the_tables_hold_for_the_current_ports(self):
        cc.check_ports()
        self.assertEqual(cc.failures, [])

    def test_a_drifting_slugify_is_reported(self):
        self.patch("SLUGIFY_CASES", (("Straße", "not-what-the-port-gives"),))
        cc.check_ports()
        self.assertIn("slugify", self.only_failure())

    def test_a_drifting_heading_id_is_reported(self):
        self.patch("HEADING_ID_CASES", (("1. Introduction", {}, "introduction"),))
        cc.check_ports()
        self.assertIn("heading_id", self.only_failure())

    def test_a_drifting_collision_suffix_is_reported(self):
        self.patch("UNIQUE_ID_CASES", ((["a", "a"], ["a", "a"]),))
        cc.check_ports()
        self.assertIn("unique_ids", self.only_failure())


class SlugListTest(CheckCase):
    """V3, which lost its subject silently until 2026-07-31."""

    def documents(self):
        return cc.load_catalogue()

    def test_the_action_layer_lists_every_catalogue_slug(self):
        cc.check_claude_md_slugs(self.documents())
        self.assertEqual(cc.failures, [])

    def test_an_action_layer_without_a_slug_list_fails(self):
        action_layer = self.tempdir() / "CLAUDE.md"
        action_layer.write_text("# CLAUDE.md\n\nNo slug list here.\n",
                                encoding="utf-8")
        self.patch("CLAUDE_MD", action_layer)
        cc.check_claude_md_slugs(self.documents())
        self.assertIn("no slug list", self.only_failure())

    def test_a_slug_missing_from_the_list_fails(self):
        documents = copy.deepcopy(self.documents())
        documents[0]["slug"] = "no-such-template"
        cc.check_claude_md_slugs(documents)
        self.assertIn("no-such-template", self.only_failure())


class VaultIndexTest(CheckCase):
    """V14, which passed over exactly the entries the index is least sure of."""

    def doctored_index(self, mutate):
        index = json.loads(cc.VAULT_JSON.read_text(encoding="utf-8"))
        mutate(index)
        path = self.tempdir() / "vault.json"
        path.write_text(json.dumps(index), encoding="utf-8")
        self.patch("VAULT_JSON", path)

    def test_the_committed_index_still_resolves(self):
        cc.check_vault_index_current()
        self.assertEqual(cc.failures, [])

    def test_an_entry_without_a_path_fails(self):
        self.doctored_index(lambda index: index["sources"][0].update(path=""))
        cc.check_vault_index_current()
        self.assertIn("without a path", self.only_failure())

    def test_a_path_that_is_no_file_fails(self):
        self.doctored_index(
            lambda index: index["distillates"][0].update(path="vault/gone.md"))
        cc.check_vault_index_current()
        self.assertIn("vault/gone.md", self.only_failure())

    def test_a_renamed_claim_slug_fails(self):
        self.doctored_index(lambda index: index["claims"][0].update(slug="renamed"))
        cc.check_vault_index_current()
        self.assertIn("renamed", self.only_failure())


class CatalogueTypeTest(CheckCase):
    """V1, the catalogue and the convention on the analytical type."""

    def test_a_type_the_convention_contradicts_fails(self):
        documents = copy.deepcopy(cc.load_catalogue())
        documents[0]["typ"] = "Bogus document"
        cc.check_types_agree(documents, cc.convention_function_types())
        self.assertIn(documents[0]["slug"], self.only_failure())


class GalleryTest(CheckCase):
    """V4, the two closed vocabularies whose violation is silent in the browser."""

    def cases(self):
        return copy.deepcopy(cc.load_cases())

    def test_a_role_outside_the_label_table_fails(self):
        data = self.cases()
        card = next(c for c in data["caseStudies"] if c.get("role") != "evidence")
        card["role"] = "no-such-role"
        cc.check_gallery(data)
        self.assertIn("role_labels", self.only_failure())

    def test_an_interface_type_outside_the_five_fails(self):
        data = self.cases()
        card = next(c for c in data["caseStudies"] if c.get("interfaceTypes"))
        card["interfaceTypes"] = [*card["interfaceTypes"], "annotation"]
        cc.check_gallery(data)
        self.assertIn("annotation", self.only_failure())


class RequirementNumberTest(CheckCase):
    """V13, whose citing set is derived from the folder since 2026-07-31."""

    def knowledge_base(self, documents):
        """A stand-in repository root with a specification and the given documents."""
        root = self.tempdir()
        knowledge = root / "knowledge"
        knowledge.mkdir()
        (knowledge / "specification.md").write_text(
            "# Specification\n\n### A1 — First\n\n### A2 — Second\n", encoding="utf-8")
        for name, text in documents.items():
            (knowledge / name).write_text(text, encoding="utf-8")
        (root / "CLAUDE.md").write_text("# Action layer\n", encoding="utf-8")
        self.patch("ROOT", root)
        self.patch("KNOWLEDGE_DIR", knowledge)
        self.patch("CLAUDE_MD", root / "CLAUDE.md")

    def test_the_real_knowledge_base_cites_only_numbers_that_exist(self):
        cc.check_requirement_numbers()
        self.assertEqual(cc.failures, [])

    def test_a_document_the_old_closed_list_did_not_name_is_checked(self):
        self.knowledge_base({"newcomer.md": "Raised in A47, which does not exist.\n"})
        cc.check_requirement_numbers()
        self.assertIn("newcomer.md", self.only_failure())

    def test_a_dated_record_may_name_an_audit_by_number(self):
        self.knowledge_base(
            {"journal.md": "Four audits ran, A0 as a free edit.\n"})
        cc.check_requirement_numbers()
        self.assertEqual(cc.failures, [])

    def test_a_duplicated_heading_fails(self):
        self.knowledge_base({})
        (cc.KNOWLEDGE_DIR / "specification.md").write_text(
            "### A1 — First\n\n### A1 — Again\n", encoding="utf-8")
        cc.check_requirement_numbers()
        self.assertIn("twice", self.only_failure())


class GlossaryGeneratorTest(unittest.TestCase):
    """A1a, the generator that died on a missing field before the check spoke."""

    def entry(self):
        data = json.loads(
            (ROOT / "data" / "glossar.json").read_text(encoding="utf-8"))
        return copy.deepcopy(data["eintraege"][0])

    def test_an_entry_without_a_required_field_names_the_entry_and_the_field(self):
        entry = self.entry()
        del entry["voll"]
        with self.assertRaises(build_glossar.EntryError) as caught:
            build_glossar.render([entry], {})
        self.assertIn(entry["slug"], str(caught.exception))
        self.assertIn("voll", str(caught.exception))

    def test_a_source_without_text_names_the_entry(self):
        entry = self.entry()
        entry["quellen"] = [{"typ": "text"}]
        with self.assertRaises(build_glossar.EntryError) as caught:
            build_glossar.render([entry], {})
        self.assertIn(entry["slug"], str(caught.exception))

    def test_a_complete_entry_renders(self):
        rendered = build_glossar.render([self.entry()], {})
        self.assertIn("### ", rendered)


if __name__ == "__main__":
    unittest.main()
