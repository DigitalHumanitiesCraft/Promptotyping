"""Read-only data/integrity grader. No participant code or LLM is executed."""

import csv
import json
from collections import Counter
from pathlib import Path

PACKAGE = Path(__file__).resolve().parents[1]
EPISODES = ("initial", "revision", "continuation")
IDENTITY = ("record_id", "date_literal", "source_ref", "collection")


def task_metadata():
    """Read identity and study eligibility from the task's owning manifest."""
    task = json.loads((PACKAGE / "task.json").read_text(encoding="utf-8"))
    return {"task_id": task["id"], "task_version": task["version"],
            "data_origin": task["data_origin"],
            "benchmark_eligible": task["benchmark_eligible"]}


def sources_for(episode, condition):
    if episode not in EPISODES or condition not in ("A", "B"):
        raise ValueError("Unknown episode or condition")
    files = {
        "TASK.md": "participant/task.md" if episode == "initial" else f"participant/{episode}.md",
        "CONTRACT.md": "participant/task.md",
        "PROTOCOL.md": f"conditions/{condition}.md",
        "sources/research-brief.md": "participant/research-brief.md",
        "sources/editorial-policy.md": "participant/policy-v1.md" if episode == "initial" else "participant/policy-v2.md",
        "data/dates.csv": "data/initial.csv",
    }
    if episode == "continuation":
        files["data/continuation.csv"] = "data/continuation.csv"
    return files


def safe_path(workspace, relative):
    """Reject linked paths and resolution outside the participant workspace."""
    path = workspace / relative
    for part in (path, *path.parents):
        if part == workspace.parent:
            break
        if part.is_symlink():
            raise ValueError(f"Linked path is not allowed: {relative}")
    if not path.resolve().is_relative_to(workspace.resolve()):
        raise ValueError(f"Path escapes workspace: {relative}")
    return path


def expected_records(episode):
    data_name = "continuation" if episode == "continuation" else "initial"
    with (PACKAGE / "data" / f"{data_name}.csv").open(encoding="utf-8", newline="") as stream:
        inputs = list(csv.DictReader(stream))
    labels = json.loads((PACKAGE / "reference" / f"expected-{episode}.json").read_text(encoding="utf-8"))
    if {row["record_id"] for row in inputs} != set(labels["records"]):
        raise ValueError("Reference coverage differs from input IDs")
    return [{**{key: row[key] for key in IDENTITY},
             **dict(zip(labels["fields"], labels["records"][row["record_id"]], strict=True))}
            for row in inputs]


def unique_object(pairs):
    result = {}
    for key, value in pairs:
        if key in result:
            raise ValueError(f"Duplicate JSON key: {key}")
        result[key] = value
    return result


def reject_constant(value):
    raise ValueError(f"Non-standard JSON constant: {value}")


def grade(workspace, episode, condition):
    workspace = Path(workspace)
    expected = expected_records(episode)
    errors, integrity, correct = [], [], []
    critical = {key: set() for key in ("record_loss", "source_changed", "invented_date",
                                      "uncertainty_lost", "wrong_date")}
    for relative, source in sources_for(episode, condition).items():
        try:
            if safe_path(workspace, relative).read_bytes() != (PACKAGE / source).read_bytes():
                integrity.append(f"Supplied file changed: {relative}")
        except (OSError, ValueError) as error:
            integrity.append(f"{relative}: {error}")
    try:
        path = safe_path(workspace, "output/normalized.json")
        if path.stat().st_size > 2_000_000:
            raise ValueError("Output exceeds the 2 MB evaluator limit")
        actual = json.loads(path.read_text(encoding="utf-8"), object_pairs_hook=unique_object,
                            parse_constant=reject_constant)
        if not isinstance(actual, list):
            raise ValueError("Output must be a JSON array")
    except (OSError, ValueError) as error:
        errors.append({"kind": "output_unreadable", "detail": str(error)})
        actual = []
    valid_objects = []
    for index, row in enumerate(actual):
        if not isinstance(row, dict) or not isinstance(row.get("record_id"), str):
            errors.append({"kind": "invalid_record", "index": index})
        else:
            valid_objects.append(row)
    counts = Counter(row["record_id"] for row in valid_objects)
    by_id = {row["record_id"]: row for row in valid_objects}
    expected_ids = {row["record_id"] for row in expected}
    for record_id, count in counts.items():
        if count != 1:
            errors.append({"kind": "duplicate_id", "record_id": record_id})
        if record_id not in expected_ids:
            errors.append({"kind": "unexpected_id", "record_id": record_id})
    for row in expected:
        record_id = row["record_id"]
        got = by_id.get(record_id)
        if got is None:
            errors.append({"kind": "missing_record", "record_id": record_id})
            critical["record_loss"].add(record_id)
            continue
        differences = [key for key, value in row.items()
                       if key not in got or type(got[key]) is not type(value) or got[key] != value]
        if differences:
            errors.append({"kind": "record_mismatch", "record_id": record_id, "fields": differences})
        elif counts[record_id] == 1:
            correct.append(record_id)
        if any(key in differences for key in IDENTITY):
            critical["source_changed"].add(record_id)
        if row["date_value"] is None and got.get("date_value") is not None:
            critical["invented_date"].add(record_id)
        if row["certainty"] != "certain" and got.get("certainty") == "certain":
            critical["uncertainty_lost"].add(record_id)
        if "date_value" in differences and row["date_value"] is not None:
            critical["wrong_date"].add(record_id)
    artefacts = {}
    for relative in ("index.html", "normalize.py"):
        try:
            path = safe_path(workspace, relative)
            artefacts[relative] = path.is_file() and path.stat().st_size > 0
        except (OSError, ValueError):
            artefacts[relative] = False
    return {
        **task_metadata(),
        "episode": episode, "condition": condition,
        "automatic_checks_pass": not errors and not integrity and all(artefacts.values()),
        "data_output_pass": not errors,
        "correct_records": len(correct), "expected_records": len(expected),
        "correct_record_ids": correct, "errors": errors, "integrity_errors": integrity,
        "artefact_files_present": artefacts,
        "critical_record_ids": {key: sorted(value) for key, value in critical.items()},
        "researcher_scenarios": "not_assessed",
        "script_generalisation": "not_assessed",
        "scholarly_acceptance": "not_assessed",
        "note": "Data and file-presence checks only; not a research-artefact or method-effectiveness verdict.",
    }
