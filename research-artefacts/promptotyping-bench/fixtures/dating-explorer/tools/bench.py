"""Local episode packaging and scoring. No paid model calls or OS sandbox."""

import argparse
import hashlib
import json
import shutil
import subprocess
import sys
import tempfile
from datetime import datetime, timezone
from pathlib import Path

from grader import EPISODES, PACKAGE, grade, safe_path, sources_for, task_metadata

# Package lives at research-artefacts/promptotyping-bench/fixtures/dating-explorer.
REPOSITORY = PACKAGE.parents[3]


def timestamp():
    return datetime.now(timezone.utc).isoformat()


def write_json(path, value):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def package_digest():
    """Freeze task inputs, assessment material and executable tooling only."""
    paths = [PACKAGE / name for name in ("task.json", "rubric.md", "human-protocol.md")]
    for directory in ("participant", "conditions", "data", "reference", "tools"):
        paths.extend(path for path in (PACKAGE / directory).rglob("*")
                     if path.is_file() and "__pycache__" not in path.parts)
    digest = hashlib.sha256()
    for path in sorted(paths):
        digest.update(path.relative_to(PACKAGE).as_posix().encode())
        digest.update(b"\0")
        digest.update(hashlib.sha256(path.read_bytes()).digest())
    return digest.hexdigest()


def external_path(run_dir):
    path = Path(run_dir)
    if not path.is_absolute():
        raise ValueError("Run directory must be absolute")
    if path.resolve().is_relative_to(REPOSITORY.resolve()):
        raise ValueError("Trial directory must be outside the methodology repository")
    return path.resolve()


def install_sources(workspace, episode, condition):
    for relative, source in sources_for(episode, condition).items():
        destination = safe_path(workspace, relative)
        destination.parent.mkdir(parents=True, exist_ok=True)
        destination.write_bytes((PACKAGE / source).read_bytes())


def prepare(run_dir, condition):
    run_dir = external_path(run_dir)
    if condition not in ("A", "B"):
        raise ValueError("Condition must be A or B")
    if run_dir.exists():
        raise ValueError("Run directory already exists; choose a fresh directory")
    workspace = run_dir / "workspace"
    workspace.mkdir(parents=True)
    install_sources(workspace, "initial", condition)
    state = {**task_metadata(),
             "package_sha256": package_digest(), "condition": condition,
             "episode": "initial", "finished": False, "created": timestamp()}
    write_json(run_dir / "state.json", state)
    write_json(run_dir / "record.json", {
        **task_metadata(),
        "run_kind": "tooling-fixture", "model_id": None, "harness_version": None,
        "reasoning_setting": None, "tool_permissions": None, "isolation": None,
        "limits_enforced_by": None, "participant_id": None, "training_minutes": None,
        "episodes": {episode: {
            "trace_path": None, "input_tokens": None, "output_tokens": None,
            "cached_input_tokens_subset": None, "reasoning_tokens_subset": None,
            "billed_cost": None, "currency": None, "active_human_seconds": None,
            "agent_seconds": None, "termination_reason": None,
            "fresh_session_evidence": None, "human_interventions": [],
            "browser_scenarios": None, "unseen_script_check": None,
            "human_acceptance": None,
        } for episode in EPISODES},
    })
    return workspace


def load_state(run_dir):
    run_dir = external_path(run_dir)
    if (run_dir / "workspace").is_symlink():
        raise ValueError("Workspace must not be a symlink")
    if not (run_dir / "workspace").resolve().is_relative_to(run_dir):
        raise ValueError("Workspace escapes run directory")
    state = json.loads((run_dir / "state.json").read_text(encoding="utf-8"))
    if (any(state.get(key) != value for key, value in task_metadata().items())
            or state["package_sha256"] != package_digest()):
        raise ValueError("Task package changed; do not mix versions within a trial")
    if state["episode"] not in EPISODES or state["condition"] not in ("A", "B"):
        raise ValueError("Invalid trial state")
    return run_dir, state


def score(run_dir):
    run_dir, state = load_state(run_dir)
    result = grade(run_dir / "workspace", state["episode"], state["condition"])
    write_json(run_dir / "reports" / f"{state['episode']}.json", result)
    return result


def snapshot(run_dir, episode):
    workspace = run_dir / "workspace"
    for path in workspace.rglob("*"):
        safe_path(workspace, path.relative_to(workspace))
    destination = run_dir / "snapshots" / episode
    if destination.exists():
        raise ValueError("Snapshot already exists; refusing to overwrite it")
    shutil.copytree(workspace, destination)


def advance(run_dir, finish=False):
    run_dir, state = load_state(run_dir)
    if state["finished"]:
        raise ValueError("Trial already finished")
    if finish != (state["episode"] == "continuation"):
        raise ValueError("Use finish after continuation; advance after earlier episodes")
    result = score(run_dir)
    if result["integrity_errors"]:
        raise ValueError("Input integrity failed; report retained, advancement stopped")
    snapshot(run_dir, state["episode"])
    if finish:
        state["finished"] = True
        state["finished_at"] = timestamp()
    else:
        state["episode"] = EPISODES[EPISODES.index(state["episode"]) + 1]
        install_sources(run_dir / "workspace", state["episode"], state["condition"])
    write_json(run_dir / "state.json", state)
    return state


def run_reference(workspace, episode):
    """Only for selfcheck/tests. Never invoke as a participant or score evidence."""
    shutil.copyfile(PACKAGE / "reference" / "normalize.py", workspace / "normalize.py")
    html = (PACKAGE / "reference" / "index.html").read_text(encoding="utf-8")
    if episode == "continuation":
        html = html.replace('value="1830-05"', 'value="1832-02"')
    (workspace / "index.html").write_text(html, encoding="utf-8")
    data_name = "continuation.csv" if episode == "continuation" else "dates.csv"
    subprocess.run([sys.executable, str(workspace / "normalize.py"),
                    "--input", str(workspace / "data" / data_name),
                    "--output", str(workspace / "output" / "normalized.json"),
                    "--policy", str(workspace / "sources" / "editorial-policy.md")],
                   check=True, timeout=10, cwd=workspace)


def selfcheck():
    results = []
    with tempfile.TemporaryDirectory(prefix="promptotyping-bench-selfcheck-") as directory:
        for condition in ("A", "B"):
            run_dir = Path(directory) / condition
            workspace = prepare(run_dir, condition)
            for episode in EPISODES:
                run_reference(workspace, episode)
                report = score(run_dir)
                if not report["automatic_checks_pass"]:
                    raise ValueError(json.dumps(report))
                results.append({"condition": condition, "episode": episode,
                                "correct_records": report["correct_records"]})
                advance(run_dir, finish=episode == "continuation")
    return {**task_metadata(),
            "kind": "reference-selfcheck-not-agent-evidence", "results": results,
            "browser_scenarios": "not_assessed_by_this_command"}


def preview(run_dir, episode):
    workspace = prepare(run_dir, "A")
    for stage in EPISODES:
        run_reference(workspace, stage)
        if stage == episode:
            break
        advance(run_dir)
    run_dir = external_path(run_dir)
    record = json.loads((run_dir / "record.json").read_text(encoding="utf-8"))
    record["run_kind"] = "reference-preview-not-agent-evidence"
    write_json(run_dir / "record.json", record)
    score(run_dir)
    return {"kind": record["run_kind"], "workspace": str(workspace), "episode": episode,
            "next": "Serve workspace with python -m http.server to inspect the reference artefact."}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    sub = parser.add_subparsers(dest="command", required=True)
    sub.add_parser("selfcheck")
    preview_parser = sub.add_parser("preview")
    preview_parser.add_argument("--run-dir", type=Path, required=True)
    preview_parser.add_argument("--episode", choices=EPISODES, default="initial")
    for command in ("prepare", "grade", "advance", "finish"):
        child = sub.add_parser(command)
        child.add_argument("--run-dir", type=Path, required=True)
        if command == "prepare":
            child.add_argument("--condition", choices=("A", "B"), required=True)
    args = parser.parse_args()
    try:
        if args.command == "selfcheck":
            result = selfcheck()
        elif args.command == "preview":
            result = preview(args.run_dir, args.episode)
        elif args.command == "prepare":
            result = {"workspace": str(prepare(args.run_dir, args.condition)),
                      "next": "Expose only workspace to the selected agent; fill record.json from logs."}
        elif args.command == "grade":
            result = score(args.run_dir)
        else:
            result = advance(args.run_dir, finish=args.command == "finish")
        print(json.dumps(result, ensure_ascii=False, indent=2))
        return 1 if args.command == "grade" and not result["automatic_checks_pass"] else 0
    except (OSError, ValueError, KeyError, subprocess.SubprocessError) as error:
        parser.exit(2, f"Evaluation runner error: {error}\n")


if __name__ == "__main__":
    raise SystemExit(main())
