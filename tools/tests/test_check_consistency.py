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
import io
import json
import pathlib
import sys
import tempfile
import unittest
from contextlib import redirect_stdout
from unittest import mock

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

    def setUp(self) -> None:
        self.patch("failures", [])
        self.patch("notes", [])

    def patch(self, name: str, value: object) -> None:
        original = getattr(cc, name)
        setattr(cc, name, value)
        self.addCleanup(setattr, cc, name, original)

    def tempdir(self) -> pathlib.Path:
        directory = tempfile.TemporaryDirectory()
        self.addCleanup(directory.cleanup)
        return pathlib.Path(directory.name)

    def only_failure(self) -> str:
        self.assertEqual(len(cc.failures), 1, cc.failures)
        return cc.failures[0]

    def write(self, path: pathlib.Path, text: str = "") -> pathlib.Path:
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(text, encoding="utf-8")
        return path


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


class CatalogueFilesTest(CheckCase):
    """V2, whose two directions fail for different repository states."""

    def setUp(self) -> None:
        super().setUp()
        self.patch("TEMPLATE_DIR", self.tempdir())

    def test_a_catalogue_entry_without_a_file_fails(self) -> None:
        cc.check_files_exist([{"slug": "missing"}])
        self.assertIn("no _content", self.only_failure())

    def test_an_unlisted_template_file_fails(self) -> None:
        self.write(cc.TEMPLATE_DIR / "orphan.md")
        cc.check_files_exist([])
        self.assertIn("no catalogue entry", self.only_failure())

    def test_a_held_back_template_is_a_note(self) -> None:
        self.write(cc.TEMPLATE_DIR / "held.md")
        self.patch("HELD_BACK", {"held": "not published yet"})
        cc.check_files_exist([])
        self.assertEqual(cc.failures, [])
        self.assertIn("not published yet", cc.notes[0])


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

    def test_a_renamed_assertion_slug_fails(self):
        self.doctored_index(
            lambda index: index["assertions"][0].update(slug="renamed"))
        cc.check_vault_index_current()
        self.assertIn("renamed", self.only_failure())


class CatalogueTypeTest(CheckCase):
    """V1, the catalogue and the convention on the analytical type."""

    def test_a_type_the_convention_contradicts_fails(self):
        documents = copy.deepcopy(cc.load_catalogue())
        documents[0]["typ"] = "Bogus document"
        cc.check_types_agree(documents, cc.convention_function_types())
        self.assertIn(documents[0]["slug"], self.only_failure())


class NamingContractTest(CheckCase):
    """V17, the mandatory Inbox, catalogue size, types, and current names."""

    def documents(self):
        return copy.deepcopy(cc.load_catalogue())

    def test_the_catalogue_has_seventeen_entries(self) -> None:
        documents = self.documents()
        documents.pop()
        cc.check_catalogue_contract(documents)
        self.assertTrue(any("expected 17" in failure for failure in cc.failures))

    def test_handoff_is_the_mandatory_process_slug(self) -> None:
        documents = self.documents()
        handoff = next(document for document in documents
                       if document["slug"] == "handoff")
        handoff["typ"] = "Declarative"
        cc.check_catalogue_contract(documents)
        self.assertTrue(any("handoff typ" in failure for failure in cc.failures))

    def test_testing_is_an_action_document(self) -> None:
        documents = self.documents()
        testing = next(document for document in documents
                       if document["slug"] == "testing")
        testing["typ"] = "Declarative"
        cc.check_catalogue_contract(documents)
        self.assertTrue(any("testing is" in failure for failure in cc.failures))

    def test_each_retired_normative_name_is_reported(self) -> None:
        root = self.tempdir()
        templates = root / "templates"
        templates.mkdir()
        self.patch("TEMPLATE_DIR", templates)
        for retired in cc.RETIRED_GENERIC_NAMES:
            with self.subTest(retired=retired):
                cc.failures.clear()
                surface = self.write(root / "surface.md", retired + "\n")
                self.patch("NORMATIVE_FILES", (surface,))
                cc.check_normative_names()
                self.assertIn(retired, self.only_failure())


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

    def test_a_duplicate_card_id_fails(self) -> None:
        data = self.cases()
        data["caseStudies"].append(copy.deepcopy(data["caseStudies"][0]))
        cc.check_gallery(data)
        self.assertIn("duplicate card id", self.only_failure())

    def test_an_evidence_card_without_a_paper_row_fails(self) -> None:
        data = {
            "_meta": {"role_labels": {"evidence": "Evidence"}},
            "caseStudies": [{"id": "case", "role": "evidence"}],
        }
        self.patch("CASE_DIR", self.tempdir())
        cc.check_gallery(data)
        self.assertIn("claims no case-table row", self.only_failure())

    def test_a_depth_page_claim_without_a_file_fails(self) -> None:
        data = {
            "_meta": {"role_labels": {"context": "Context"}},
            "caseStudies": [{
                "id": "case",
                "role": "context",
                "deep_page": True,
            }],
        }
        self.patch("CASE_DIR", self.tempdir())
        cc.check_gallery(data)
        self.assertIn("no _content/case-studies/case.md", self.only_failure())


class EvidenceReachabilityTest(CheckCase):
    """V5, coupling the paper table to gallery cards in both directions."""

    def paper_with_cases(self, *names: str) -> None:
        separator = "| --- | --- | --- | --- | --- |"
        rows = [f"| {name} | state | function | form | purpose |" for name in names]
        paper = "\n".join((cc.CASE_TABLE_HEADER, separator, *rows, "", "After"))
        self.patch("PAPER", self.write(self.tempdir() / "paper.md", paper))

    def test_a_paper_case_without_a_card_fails(self) -> None:
        self.paper_with_cases("Alpha")
        cc.check_evidence_reachable({"caseStudies": []})
        self.assertIn("no card claims it", self.only_failure())

    def test_a_card_row_absent_from_the_paper_fails(self) -> None:
        self.paper_with_cases("Alpha")
        data = {"caseStudies": [{"id": "beta", "paper_row": "Beta"},
                                {"id": "alpha", "paper_row": "Alpha"}]}
        cc.check_evidence_reachable(data)
        self.assertIn("paper has no such row", self.only_failure())

    def test_two_cards_claiming_one_row_fail(self) -> None:
        self.paper_with_cases("Alpha")
        data = {"caseStudies": [{"id": "one", "paper_row": "Alpha"},
                                {"id": "two", "paper_row": "Alpha"}]}
        cc.check_evidence_reachable(data)
        self.assertIn("both claim", self.only_failure())


class GlossaryMirrorTest(CheckCase):
    """V7, the generated glossary and its committed mirror."""

    def test_a_stale_mirror_fails_with_the_difference(self) -> None:
        self.patch("GLOSSAR_MD", self.write(self.tempdir() / "glossar.md", "old\n"))
        with mock.patch.object(build_glossar, "build", return_value="new\n"):
            cc.check_glossar_mirror()
        failure = self.only_failure()
        self.assertIn("not what build_glossar.py renders", failure)
        self.assertIn("line", failure)


class BindingTest(CheckCase):
    """V9, prose-to-code bindings used for repository navigation."""

    def setUp(self) -> None:
        super().setUp()
        root = self.tempdir()
        knowledge = root / "knowledge"
        knowledge.mkdir()
        self.patch("ROOT", root)
        self.patch("KNOWLEDGE_DIR", knowledge)
        self.patch("CLAUDE_MD", self.write(root / "CLAUDE.md", "# Action layer\n"))

    def test_a_binding_to_a_missing_file_fails(self) -> None:
        self.write(cc.CLAUDE_MD, "`PAGES` in `assets/js/missing.js`\n")
        cc.check_symbol_bindings()
        self.assertIn("not a file", self.only_failure())

    def test_a_binding_to_a_missing_symbol_fails(self) -> None:
        code = self.write(cc.ROOT / "assets" / "js" / "registry.js", "var OTHER = [];\n")
        self.write(cc.CLAUDE_MD, "`PAGES` in `assets/js/registry.js`\n")
        cc.check_symbol_bindings()
        failure = self.only_failure()
        self.assertIn(code.name, failure)
        self.assertIn("does not carry that name", failure)


class ActionLayerPagesTest(CheckCase):
    """V12, the reverse direction of the anchor documentation contract."""

    def test_a_registry_page_absent_from_the_action_layer_fails(self) -> None:
        root = self.tempdir()
        self.patch("JS_DIR", root / "assets" / "js")
        self.write(cc.JS_DIR / "registry.js", 'var PAGES = [{ id: "new-page" }];\n')
        self.patch("CLAUDE_MD", self.write(root / "CLAUDE.md", "# Action layer\n"))
        cc.check_action_layer_pages()
        self.assertIn("new-page", self.only_failure())


class AnchorTest(CheckCase):
    """V8, hand-written references checked against the site's declarations."""

    def test_an_undeclared_content_anchor_fails(self) -> None:
        links = iter((("_content/broken.md", "no-such-anchor"),))
        with mock.patch.object(cc, "content_anchor_links", return_value=links):
            cc.check_anchors()
        failure = self.only_failure()
        self.assertIn("broken.md", failure)
        self.assertIn("no-such-anchor", failure)


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


class RelativeLinkTest(CheckCase):
    """V15, relative Markdown targets across the checked document roots."""

    def repository(self, markdown: str) -> pathlib.Path:
        root = self.tempdir()
        (root / "knowledge").mkdir()
        (root / "_content").mkdir()
        self.write(root / "README.md", markdown)
        self.patch("ROOT", root)
        return root

    def test_a_missing_relative_target_fails(self) -> None:
        self.repository("[missing](knowledge/missing.md)\n")
        cc.check_relative_links()
        self.assertIn("knowledge/missing.md", self.only_failure())

    def test_a_repository_directory_is_a_valid_link_target(self) -> None:
        root = self.repository("[document](knowledge)\n")
        self.assertTrue((root / "knowledge").is_dir())
        cc.check_relative_links()
        self.assertEqual(cc.failures, [])

    def test_an_existing_target_with_a_fragment_passes(self) -> None:
        root = self.repository("[document](knowledge/target.md#section)\n")
        self.write(root / "knowledge" / "target.md", "# Section\n")
        cc.check_relative_links()
        self.assertEqual(cc.failures, [])


class FrontmatterTest(CheckCase):
    """V16, the mandatory structure and value domains of knowledge documents."""

    def setUp(self) -> None:
        super().setUp()
        root = self.tempdir()
        (root / "knowledge").mkdir()
        schema = {
            "required": list(cc.CORE_FIELDS),
            "properties": {"status": {"enum": list(cc.STATUS_VOCABULARY)}},
        }
        self.write(root / "schema" / "knowledge-document.schema.json",
                   json.dumps(schema))
        self.patch("ROOT", root)

    def document(self, frontmatter: str, closing: bool = True) -> None:
        ending = "\n---\n\n# Document\n" if closing else "\n# Document\n"
        self.write(cc.ROOT / "knowledge" / "document.md",
                   "---\n" + frontmatter + ending)

    def valid_frontmatter(self) -> str:
        return """title: Document
project:
  name: Promptotyping
  repository: https://example.test/repository
method:
  name: Promptotyping
  url: https://example.test/method
status: draft
created: 2026-08-17
updated: 2026-08-18"""

    def test_a_valid_document_passes(self) -> None:
        self.document(self.valid_frontmatter())
        cc.check_knowledge_frontmatter()
        self.assertEqual(cc.failures, [])

    def test_an_unclosed_frontmatter_block_fails(self) -> None:
        self.document(self.valid_frontmatter(), closing=False)
        cc.check_knowledge_frontmatter()
        self.assertIn("no complete frontmatter block", self.only_failure())

    def test_project_must_be_a_mapping(self) -> None:
        frontmatter = self.valid_frontmatter().replace(
            "project:\n  name: Promptotyping\n  repository: https://example.test/repository",
            "project: Promptotyping")
        self.document(frontmatter)
        cc.check_knowledge_frontmatter()
        self.assertIn("project is not a mapping", self.only_failure())

    def test_an_impossible_calendar_date_fails(self) -> None:
        frontmatter = self.valid_frontmatter().replace(
            "updated: 2026-08-18", 'updated: "2026-02-31"')
        self.document(frontmatter)
        cc.check_knowledge_frontmatter()
        self.assertIn("not a valid calendar date", self.only_failure())

    def test_missing_yaml_support_fails_closed(self) -> None:
        self.document(self.valid_frontmatter())
        with mock.patch.dict(sys.modules, {"yaml": None}):
            cc.check_knowledge_frontmatter()
        self.assertIn("cannot be checked", self.only_failure())


class MainResultTest(CheckCase):
    """The CLI contract: zero for a clean run and non-zero for any failure."""

    def run_main(self) -> tuple[int, str]:
        output = io.StringIO()
        with mock.patch.object(sys, "argv", ["check_consistency.py"]), redirect_stdout(output):
            result = cc.main()
        return result, output.getvalue()

    def test_the_clean_repository_returns_zero(self) -> None:
        result, output = self.run_main()
        self.assertEqual(result, 0, output)
        self.assertIn("0 failure(s)", output)

    def test_any_failure_returns_one(self) -> None:
        def forced_failure() -> None:
            cc.fail("ports", "forced regression")

        with mock.patch.object(cc, "check_ports", forced_failure):
            result, output = self.run_main()
        self.assertEqual(result, 1)
        self.assertIn("forced regression", output)

    def test_a_second_run_does_not_retain_the_first_verdict(self) -> None:
        def forced_failure() -> None:
            cc.fail("ports", "forced regression")

        with mock.patch.object(cc, "check_ports", forced_failure):
            first, _output = self.run_main()
        second, output = self.run_main()
        self.assertEqual(first, 1)
        self.assertEqual(second, 0, output)


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
