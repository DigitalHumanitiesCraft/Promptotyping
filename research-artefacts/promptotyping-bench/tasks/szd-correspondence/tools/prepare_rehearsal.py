"""Prepare or verify local SZD rehearsal materials. No model calls or study scoring."""

import argparse
import copy
import hashlib
import json
import shutil
import subprocess
import sys
from datetime import datetime, timezone
from pathlib import Path
import xml.etree.ElementTree as ET

TASK = Path(__file__).resolve().parents[1]
REPOSITORY = TASK.parents[3]
TEI = "http://www.tei-c.org/ns/1.0"
XML = "http://www.w3.org/XML/1998/namespace"
NS = {"t": TEI}
ET.register_namespace("", TEI)


def sha256(data):
    return hashlib.sha256(data).hexdigest()


def write_json(path, value):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2) + "\n",
                    encoding="utf-8", newline="\n")


def attributes(element):
    return {key.replace("{" + XML + "}", "xml:"): value
            for key, value in element.attrib.items()}


def leaf(element):
    return {"attributes": attributes(element), "text": "".join(element.itertext())}


def leaves(element, path):
    return [leaf(item) for item in element.findall(path, NS)]


def project_record(record):
    """Preserve multiplicity and source strings; perform no semantic correction."""
    base = "./t:fileDesc/t:sourceDesc/t:msDesc"
    identifier = base + "/t:msIdentifier"
    result = {
        "id": record.get("{" + XML + "}id"),
        "titles": leaves(record, "./t:fileDesc/t:titleStmt/t:title"),
        "description_types": leaves(record, "./t:fileDesc/t:publicationStmt/t:ab"),
        "repositories": leaves(record, identifier + "/t:repository"),
        "signatures": leaves(record, identifier + "/t:idno[@type='signature']"),
        "facsimile_pids": leaves(record, identifier + "/t:altIdentifier/t:idno[@type='PID']"),
        "extents": leaves(record, base + "/t:physDesc/t:objectDesc/t:supportDesc/t:extent/t:span"),
        "correspondence": [],
    }
    for description in record.findall("./t:profileDesc/t:correspDesc", NS):
        entry = {"attributes": attributes(description), "actions": []}
        for action in description.findall("./t:correspAction", NS):
            people = []
            for person in action.findall("./t:persName", NS):
                people.append({**leaf(person), "forenames": leaves(person, "./t:forename"),
                               "surnames": leaves(person, "./t:surname")})
            entry["actions"].append({"attributes": attributes(action), "persons": people,
                                     "dates": leaves(action, "./t:date"),
                                     "places": leaves(action, "./t:placeName")})
        result["correspondence"].append(entry)
    return result


def load_source(source_repo, selection):
    blob = subprocess.check_output(
        ["git", "show", selection["source_commit"] + ":" + selection["source_path"]],
        cwd=source_repo, timeout=30)
    if sha256(blob) != selection["source_sha256"]:
        raise ValueError("Committed source bytes do not match the selection manifest")
    root = ET.fromstring(blob)
    records = root.findall(".//t:body//t:biblFull", NS)
    indexed = {}
    for record in records:
        record_id = record.get("{" + XML + "}id")
        if not record_id or record_id in indexed:
            raise ValueError("Missing or duplicate source record ID")
        indexed[record_id] = record
    selected = selection["initial_record_ids"] + selection["continuation_record_ids"]
    if len(selected) != len(set(selected)):
        raise ValueError("Duplicate or overlapping episode selection")
    missing = set(selected) - indexed.keys()
    if missing:
        raise ValueError("Selected source IDs are missing: " + ", ".join(sorted(missing)))
    if root.find("./t:teiHeader", NS) is None:
        raise ValueError("Source header missing")
    return blob, root, indexed


def selected_xml(root, indexed, ids):
    selected = ET.Element("{" + TEI + "}TEI", root.attrib)
    selected.append(copy.deepcopy(root.find("./t:teiHeader", NS)))
    text = ET.SubElement(selected, "{" + TEI + "}text")
    body = ET.SubElement(text, "{" + TEI + "}body")
    listing = ET.SubElement(body, "{" + TEI + "}listBibl")
    for record_id in ids:
        listing.append(copy.deepcopy(indexed[record_id]))
    return ET.tostring(selected, encoding="utf-8", xml_declaration=True)


def write_episode(directory, name, ids, root, indexed):
    (directory / "data").mkdir(parents=True, exist_ok=True)
    (directory / "sources").mkdir(parents=True, exist_ok=True)
    lines = [json.dumps(project_record(indexed[record_id]), ensure_ascii=False,
                        separators=(",", ":")) for record_id in ids]
    (directory / "data" / f"{name}.jsonl").write_text("\n".join(lines) + "\n",
                                                     encoding="utf-8", newline="\n")
    (directory / "sources" / f"{name}.xml").write_bytes(selected_xml(root, indexed, ids))


def prepare(source_repo, output, condition="B"):
    output = Path(output)
    if not output.is_absolute():
        raise ValueError("Output must be an absolute path")
    output = output.resolve()
    if output.is_relative_to(REPOSITORY.resolve()) or output.is_relative_to(Path(source_repo).resolve()):
        raise ValueError("Local rehearsal must be outside the authoring and source repositories")
    if output.exists():
        raise ValueError("Output already exists; choose a fresh directory")
    if condition not in ("A", "B"):
        raise ValueError("Unknown condition")
    selection = json.loads((TASK / "source-selection.json").read_text(encoding="utf-8"))
    blob, root, indexed = load_source(source_repo, selection)
    static = {
        "materials/initial/TASK.md": "participant/TASK.md",
        "materials/initial/CONTRACT.md": "participant/TASK.md",
        "materials/initial/DATA.md": "participant/DATA.md",
        "materials/initial/PROTOCOL.md": f"conditions/{condition}.md",
        "materials/initial/record.schema.json": "record.schema.json",
        "materials/revision/TASK.md": "participant/REVISION.md",
        "materials/continuation/TASK.md": "participant/CONTINUATION.md",
        "facilitator/GUIDE.md": "review/GUIDE.md",
    }
    # Load every authored input before creating the destination.
    copies = {target: (TASK / relative).read_bytes() for target, relative in static.items()}
    output.mkdir(parents=True)
    for target, data in copies.items():
        path = output / target
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_bytes(data)
    for episode in ("initial", "continuation"):
        write_episode(output / "materials" / episode, episode,
                      selection[episode + "_record_ids"], root, indexed)
    source_context = {key: selection[key] for key in
                      ("collection", "source_repository", "source_commit", "source_path",
                       "source_sha256", "source_hash_basis", "source_object_pid", "rights_evidence")}
    source_context["selection_scope"] = "Purposive developmental sample; not the whole konvolut"
    write_json(output / "materials/initial/SOURCE.json", source_context)
    write_json(output / "facilitator/source-selection.json", selection)
    (output / "facilitator/original-source.xml").write_bytes(blob)
    (output / "facilitator/prepare_rehearsal.py").write_bytes(Path(__file__).read_bytes())
    shutil.copytree(output / "materials/initial", output / "workspace")
    now = datetime.now(timezone.utc).isoformat()
    write_json(output / "facilitator/run-record.json", {
        "task_id": selection["task_id"], "task_version": selection["version"],
        "run_kind": "author-rehearsal", "include_in_comparative_results": False,
        "condition": condition, "status": "prepared-not-started", "prepared_at": now,
        "model_id": None, "harness_version": None, "reasoning_setting": None,
        "tool_permissions": None, "isolation": "not-provided-by-preparer",
        "planned_session_minutes": 60, "token_limit": None,
        "reviewer_ids": [], "reference_review_status": "pending",
        "episodes": {name: {"started_at": None, "finished_at": None,
                            "checkpoint_path": None, "input_tokens": None,
                            "output_tokens": None, "active_human_seconds": None,
                            "termination_reason": None, "fresh_session_evidence": None,
                            "scenario_results": None, "expert_ratings": None}
                     for name in ("initial", "revision", "continuation")},
    })
    for name in ("usage.jsonl", "interventions.jsonl"):
        (output / "facilitator" / name).write_text("", encoding="utf-8")
    (output / "START-HERE.md").write_text(
        "# Local SZD author rehearsal\n\n"
        "Prepared materials only: no model or participant has run this task.\n\n"
        "1. Review facilitator/GUIDE.md and the candidate source expectations.\n"
        "2. Record the chosen model/harness in facilitator/run-record.json.\n"
        "3. Give the agent access only to workspace/ and ask it to read TASK.md.\n"
        "4. Save the complete workspace and timestamp before each episode transition.\n"
        "5. For revision, copy materials/revision/TASK.md over workspace/TASK.md.\n"
        "6. For continuation, copy materials/continuation/ into workspace/, preserving\n"
        "   existing files, and begin a fresh agent session. Keep initial records.\n"
        "7. Log interventions and actual model usage, retain failed/incomplete states,\n"
        "   and review the saved artefacts. Unknown usage is not zero.\n\n"
        "materials/ holds frozen task inputs. workspace/ is the working copy.\n"
        "facilitator/ includes later-task information and source/assessment material;\n"
        "it must not be exposed to a comparative agent. This directory separation is\n"
        "not an OS sandbox. The rehearsal is excluded from comparative results.\n"
        "Metadata redistribution remains unresolved; this is a local package.\n",
        encoding="utf-8", newline="\n")
    immutable = list((output / "materials").rglob("*")) + [
        output / "facilitator" / name for name in
        ("GUIDE.md", "source-selection.json", "original-source.xml", "prepare_rehearsal.py")]
    manifest = {
        "kind": "local-rehearsal-materials", "public_release_ready": False,
        "created_at": now, "source_sha256": sha256(blob),
        "extraction": "TEI leaf text and attributes retained; all actions/people retained; no corrections",
        "xml_serialization": "ElementTree; copied header and selected subtrees; namespace/empty-element syntax may differ",
        "record_counts": {name: len(selection[name + "_record_ids"])
                          for name in ("initial", "continuation")},
        "files": {path.relative_to(output).as_posix(): {"sha256": sha256(path.read_bytes()),
                                                        "bytes": path.stat().st_size}
                  for path in sorted(immutable) if path.is_file()},
    }
    write_json(output / "package-manifest.json", manifest)
    return verify(output)


def verify(output):
    output = Path(output).resolve()
    manifest = json.loads((output / "package-manifest.json").read_text(encoding="utf-8"))
    for relative, expected in manifest["files"].items():
        path = output / relative
        if not path.resolve().is_relative_to(output) or path.is_symlink():
            raise ValueError("Material path escapes the package")
        if sha256(path.read_bytes()) != expected["sha256"]:
            raise ValueError("Frozen material changed: " + relative)
    return {"kind": "material-integrity-check-not-study-result", "pass": True,
            "files_checked": len(manifest["files"]), "record_counts": manifest["record_counts"],
            "public_release_ready": False, "participant_output_assessed": False,
            "workspace": str(output / "workspace")}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    commands = parser.add_subparsers(dest="command", required=True)
    create = commands.add_parser("prepare")
    create.add_argument("--source-repo", type=Path, required=True)
    create.add_argument("--output", type=Path, required=True)
    create.add_argument("--condition", choices=("A", "B"), default="B")
    check = commands.add_parser("verify")
    check.add_argument("--output", type=Path, required=True)
    args = parser.parse_args()
    try:
        result = (prepare(args.source_repo, args.output, args.condition) if args.command == "prepare"
                  else verify(args.output))
        print(json.dumps(result, ensure_ascii=False, indent=2))
    except (OSError, ValueError, KeyError, ET.ParseError, subprocess.SubprocessError) as error:
        parser.exit(2, f"Rehearsal preparation error: {error}\n")


if __name__ == "__main__":
    main()
