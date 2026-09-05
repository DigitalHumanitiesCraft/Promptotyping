"""Software tests with synthetic XML only; authentic study data is exported separately."""

import importlib.util
import json
from pathlib import Path
import shutil
import tempfile
import unittest
from unittest.mock import patch
import xml.etree.ElementTree as ET

TASK = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location("szd_rehearsal", TASK / "tools/prepare_rehearsal.py")
package = importlib.util.module_from_spec(spec)
spec.loader.exec_module(package)

XML = b'''<TEI xmlns="http://www.tei-c.org/ns/1.0"><teiHeader><fileDesc>
<titleStmt><title>Software test fixture</title></titleStmt></fileDesc></teiHeader>
<text><body><listBibl><biblFull xml:id="TEST.1"><profileDesc>
<correspDesc type="ambiguous"><correspAction type="sent">
<persName ref="urn:sender"><surname/></persName>
<date when="1941-07" ana="supplied/verified" xml:lang="de">15158</date>
<date when="1941-07" xml:lang="en">15158</date></correspAction>
<correspAction type="received"><persName ref="urn:first"><surname>One</surname></persName></correspAction>
<correspAction type="received"><persName ref="urn:second"><surname>Two</surname></persName></correspAction>
</correspDesc></profileDesc></biblFull><biblFull xml:id="TEST.2"><profileDesc>
<correspDesc><correspAction type="sent"><date when="1942" xml:lang="de">1942</date>
</correspAction></correspDesc></profileDesc></biblFull></listBibl></body></text></TEI>'''


class SZDRehearsalTests(unittest.TestCase):
    def setUp(self):
        temporary = tempfile.TemporaryDirectory(prefix="szd-packaging-test-")
        self.addCleanup(temporary.cleanup)
        self.directory = Path(temporary.name)
        self.task = self.directory / "task"
        shutil.copytree(TASK, self.task, ignore=shutil.ignore_patterns("__pycache__"))
        self.selection = json.loads((self.task / "source-selection.json").read_text())
        self.selection.update(source_sha256=package.sha256(XML),
                              initial_record_ids=["TEST.1"], continuation_record_ids=["TEST.2"])
        package.write_json(self.task / "source-selection.json", self.selection)
        self.output = self.directory / "prepared"
        self.source_repo = self.directory / "source"
        for target, name, value in ((package, "TASK", self.task),
                                    (package.subprocess, "check_output", lambda *a, **k: XML)):
            active = patch.object(target, name, value)
            active.start()
            self.addCleanup(active.stop)

    def test_all_recipients_empty_labels_annotations_and_literals_survive(self):
        package.prepare(self.source_repo, self.output)
        row = json.loads((self.output / "workspace/data/initial.jsonl").read_text())
        actions = row["correspondence"][0]["actions"]
        self.assertEqual(len(actions), 3)
        self.assertEqual([a["persons"][0]["attributes"]["ref"] for a in actions[1:]],
                         ["urn:first", "urn:second"])
        self.assertEqual(actions[0]["persons"][0]["surnames"][0]["text"], "")
        date = actions[0]["dates"][0]
        self.assertEqual(date, {"text": "15158", "attributes": {
            "when": "1941-07", "ana": "supplied/verified", "xml:lang": "de"}})
        subtree = ET.parse(self.output / "workspace/sources/initial.xml").getroot()
        self.assertIsNotNone(subtree.find("./t:teiHeader", package.NS))
        self.assertEqual(len(subtree.findall(".//t:correspAction", package.NS)), 3)

    def test_future_records_and_assessment_stay_outside_workspace(self):
        package.prepare(self.source_repo, self.output)
        paths = [p for p in (self.output / "workspace").rglob("*") if p.is_file()]
        combined = "\n".join(p.read_text(encoding="utf-8") for p in paths)
        self.assertNotIn("TEST.2", combined)
        self.assertFalse((self.output / "workspace/GUIDE.md").exists())
        later = json.loads((self.output / "materials/continuation/data/continuation.jsonl").read_text())
        self.assertEqual(later["id"], "TEST.2")
        record = json.loads((self.output / "facilitator/run-record.json").read_text())
        self.assertEqual(record["status"], "prepared-not-started")
        self.assertIs(record["include_in_comparative_results"], False)
        self.assertIsNone(record["episodes"]["initial"]["input_tokens"])

    def test_conditions_share_factual_inputs(self):
        package.prepare(self.source_repo, self.output, "A")
        other = self.directory / "condition-b"
        package.prepare(self.source_repo, other, "B")
        for path in (self.output / "workspace").rglob("*"):
            if path.is_file() and path.name != "PROTOCOL.md":
                self.assertEqual(path.read_bytes(), (other / path.relative_to(self.output)).read_bytes())

    def test_bad_source_hash_fails_before_output_creation(self):
        self.selection["source_sha256"] = "0" * 64
        package.write_json(self.task / "source-selection.json", self.selection)
        with self.assertRaisesRegex(ValueError, "source bytes"):
            package.prepare(self.source_repo, self.output)
        self.assertFalse(self.output.exists())

    def test_missing_and_overlapping_ids_fail_before_output_creation(self):
        for selected in (["ABSENT"], ["TEST.1"]):
            with self.subTest(selected=selected):
                self.selection["continuation_record_ids"] = selected
                package.write_json(self.task / "source-selection.json", self.selection)
                with self.assertRaises(ValueError):
                    package.prepare(self.source_repo, self.output)
                self.assertFalse(self.output.exists())

    def test_modified_frozen_material_is_detected(self):
        package.prepare(self.source_repo, self.output)
        (self.output / "materials/initial/data/initial.jsonl").write_text("[]\n")
        with self.assertRaisesRegex(ValueError, "Frozen material changed"):
            package.verify(self.output)

    def test_existing_and_repository_outputs_are_rejected(self):
        for output in (self.directory, package.REPOSITORY / "never-created", self.source_repo / "run"):
            with self.subTest(output=output), self.assertRaises(ValueError):
                package.prepare(self.source_repo, output)


if __name__ == "__main__":
    unittest.main()
