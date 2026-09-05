"""Evaluation-instrument tests, not agent-performance measurements."""

import copy
import importlib.util
import json
import shutil
import sys
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

PACKAGE = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(PACKAGE / "tools"))
import bench
import grader
from grader import expected_records, grade

spec = importlib.util.spec_from_file_location("date_oracle", PACKAGE / "reference" / "normalize.py")
oracle = importlib.util.module_from_spec(spec)
spec.loader.exec_module(oracle)


class BenchmarkTests(unittest.TestCase):
    def setUp(self):
        self.temporary = tempfile.TemporaryDirectory(prefix="promptotyping-eval-test-")
        self.addCleanup(self.temporary.cleanup)
        self.run = Path(self.temporary.name) / "trial"
        self.workspace = bench.prepare(self.run, "A")
        bench.run_reference(self.workspace, "initial")

    def submit(self, rows):
        (self.workspace / "output" / "normalized.json").write_text(
            json.dumps(rows, ensure_ascii=False), encoding="utf-8")

    def test_reference_all_stages_both_conditions(self):
        result = bench.selfcheck()
        self.assertEqual(len(result["results"]), 6)
        self.assertEqual([r["correct_records"] for r in result["results"]], [24, 24, 6] * 2)
        self.assertIn("not-agent-evidence", result["kind"])

    def test_export_does_not_include_future_or_answers(self):
        files = {p.relative_to(self.workspace).as_posix() for p in self.workspace.rglob("*") if p.is_file()}
        self.assertNotIn("reference/normalize.py", files)
        self.assertNotIn("data/continuation.csv", files)
        self.assertEqual(len(list(self.workspace.glob("**/PROTOCOL.md"))), 1)
        self.assertNotIn("v2", (self.workspace / "sources/editorial-policy.md").read_text())
        other = bench.prepare(Path(self.temporary.name) / "B", "B")
        for relative in bench.sources_for("initial", "A"):
            if relative != "PROTOCOL.md":
                self.assertEqual((other / relative).read_bytes(), (self.workspace / relative).read_bytes())

    def test_only_declared_records_change_after_amendment(self):
        initial = {r["record_id"]: r for r in expected_records("initial")}
        changed = [r["record_id"] for r in expected_records("revision") if r != initial[r["record_id"]]]
        self.assertEqual(changed, ["D013", "D014", "D016", "D024"])

    def test_order_extra_fields_and_utf8_are_permitted(self):
        rows = list(reversed(expected_records("initial")))
        for row in rows:
            row["explanation"] = "Independently formatted: März"
        self.submit(rows)
        result = grade(self.workspace, "initial", "A")
        self.assertTrue(result["automatic_checks_pass"])
        self.assertEqual(result["researcher_scenarios"], "not_assessed")

    def test_critical_mutations_are_detected(self):
        base = expected_records("initial")
        cases = [("D005", "certainty", "certain", "uncertainty_lost"),
                 ("D012", "date_value", "1830", "invented_date"),
                 ("D003", "date_value", "1830-05-01", "wrong_date"),
                 ("D023", "date_literal", "1830", "source_changed"),
                 ("D001", "source_ref", "another-source", "source_changed")]
        for record_id, field, value, category in cases:
            with self.subTest(record_id=record_id, field=field):
                rows = copy.deepcopy(base)
                next(r for r in rows if r["record_id"] == record_id)[field] = value
                self.submit(rows)
                result = grade(self.workspace, "initial", "A")
                self.assertFalse(result["automatic_checks_pass"])
                self.assertIn(record_id, result["critical_record_ids"][category])

    def test_missing_duplicate_unexpected_ids_and_wrong_types(self):
        base = expected_records("initial")
        wrong_type = copy.deepcopy(base)
        wrong_type[3]["date_value"] = 1830
        missing_field = copy.deepcopy(base)
        del missing_field[0]["precision"]
        for rows in (base[:-1], base + [base[0]], base + [{"record_id": "extra"}],
                     wrong_type, missing_field, base + [42]):
            with self.subTest(rows=len(rows)):
                self.submit(rows)
                self.assertFalse(grade(self.workspace, "initial", "A")["data_output_pass"])

    def test_malformed_and_duplicate_key_json_fail_without_crashing(self):
        for payload in ('{}', '[', '[{"record_id":"D001","record_id":"D002"}]', '[NaN]'):
            with self.subTest(payload=payload):
                (self.workspace / "output/normalized.json").write_text(payload)
                self.assertFalse(grade(self.workspace, "initial", "A")["data_output_pass"])

    def test_empty_interface_does_not_pass_file_checks(self):
        (self.workspace / "index.html").write_text("")
        result = grade(self.workspace, "initial", "A")
        self.assertTrue(result["data_output_pass"])
        self.assertFalse(result["automatic_checks_pass"])

    def test_integrity_violation_blocks_advance(self):
        (self.workspace / "data/dates.csv").write_text("altered")
        self.assertTrue(grade(self.workspace, "initial", "A")["integrity_errors"])
        with self.assertRaisesRegex(ValueError, "integrity"):
            bench.advance(self.run)
        self.assertTrue((self.run / "reports/initial.json").exists())

    def test_scored_failure_is_retained_and_can_advance(self):
        self.submit([])
        bench.advance(self.run)
        report = json.loads((self.run / "reports/initial.json").read_text())
        self.assertFalse(report["automatic_checks_pass"])
        self.assertEqual(json.loads((self.run / "snapshots/initial/output/normalized.json").read_text()), [])
        self.assertEqual(bench.load_state(self.run)[1]["episode"], "revision")

    def test_existing_and_repository_paths_are_rejected(self):
        with self.assertRaisesRegex(ValueError, "already exists"):
            bench.prepare(self.run, "A")
        for path in (PACKAGE / "never-created", bench.REPOSITORY / "never-created"):
            with self.assertRaisesRegex(ValueError, "outside"):
                bench.prepare(path, "A")
        self.assertFalse((PACKAGE / "never-created").exists())
        self.assertTrue((bench.REPOSITORY / "knowledge/governance.md").is_file())

    def test_fixture_identity_and_ineligibility_travel_with_results(self):
        report = bench.score(self.run)
        state = json.loads((self.run / "state.json").read_text())
        record = json.loads((self.run / "record.json").read_text())
        for result in (report, state, record):
            self.assertEqual(result["task_id"], "dh-dating-explorer-001")
            self.assertEqual(result["data_origin"], "synthetic")
            self.assertIs(result["benchmark_eligible"], False)
        self.assertEqual(record["run_kind"], "tooling-fixture")

    def test_authoring_edits_do_not_invalidate_a_prepared_run(self):
        copied = Path(self.temporary.name) / "fixture"
        shutil.copytree(PACKAGE, copied, ignore=shutil.ignore_patterns("__pycache__"))
        with patch.object(bench, "PACKAGE", copied), patch.object(grader, "PACKAGE", copied):
            run = Path(self.temporary.name) / "copied-run"
            bench.prepare(run, "A")
            # Neither documentation/tests nor another task is part of this run.
            for relative in ("README.md", "tests/new_test.py", "szd-correspondence/README.md"):
                path = copied / relative
                path.parent.mkdir(parents=True, exist_ok=True)
                path.write_text("Unrelated authoring change.\n", encoding="utf-8")
            self.assertEqual(bench.load_state(run)[1]["episode"], "initial")

    def test_task_and_evaluator_edits_invalidate_a_prepared_run(self):
        copied = Path(self.temporary.name) / "fixture"
        shutil.copytree(PACKAGE, copied, ignore=shutil.ignore_patterns("__pycache__"))
        with patch.object(bench, "PACKAGE", copied), patch.object(grader, "PACKAGE", copied):
            run = Path(self.temporary.name) / "copied-run"
            bench.prepare(run, "A")
            for relative in ("task.json", "participant/task.md", "conditions/B.md",
                             "data/initial.csv", "reference/expected-revision.json",
                             "rubric.md", "human-protocol.md", "tools/grader.py"):
                with self.subTest(relative=relative):
                    path = copied / relative
                    original = path.read_bytes()
                    path.write_bytes(original + b"\n")
                    with self.assertRaisesRegex(ValueError, "Task package changed"):
                        bench.load_state(run)
                    path.write_bytes(original)

    def test_reference_generalises_beyond_authored_ids(self):
        probes = [
            ("März 1841", "letter", "v1", "1841-03", "certain", "normalized"),
            ("29.02.1900", "letter", "v1", None, "unknown", "invalid"),
            ("29.02.2000", "letter", "v2", "2000-02-29", "certain", "normalized"),
            ("[April 1843]", "register", "v2", "1843-04", "uncertain", "normalized"),
            ("[April 1843]", "letter", "v2", None, "unknown", "ambiguous"),
            ("[31.02.1830]", "register", "v1", None, "unknown", "ambiguous"),
            ("[ca. 1843]", "register", "v2", None, "unknown", "ambiguous"),
            ("ca. 1842?", "letter", "v2", None, "unknown", "ambiguous"),
            ("0000", "letter", "v2", None, "unknown", "invalid"),
            (" 1842 ", "letter", "v2", "1842", "certain", "normalized"),
        ]
        for literal, collection, version, value, certainty, status in probes:
            with self.subTest(literal=literal, collection=collection, version=version):
                row = dict(record_id="UNSEEN", collection=collection, date_literal=literal, source_ref="NEW")
                output = oracle.normalize(row, version)
                self.assertEqual((output["date_value"], output["certainty"], output["status"]),
                                 (value, certainty, status))
                self.assertEqual(output["date_literal"], literal)


if __name__ == "__main__":
    unittest.main()
