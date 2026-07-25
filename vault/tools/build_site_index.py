"""Render the vault's claim layer into the site's data file.

The Promptotyping site is served straight from the repository with no build
step at request time. This script is a generator in the same sense as the
vault's deterministically generated documents: it runs on demand, its output
`data/vault.json` is committed, and the site fetches that one static file
instead of the several hundred Markdown files behind it.

Run from the repository root:

    python vault/tools/build_site_index.py

The index carries the topic maps, the claims with their statements, their
status and their grounding anchors. Distillate bodies stay out; the side panel
fetches the distillate Markdown on demand, the way the template panel does.
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

WIKILINK = re.compile(r"\[\[([^\]|#]+)(?:#\^?([^\]|]+))?(?:\|[^\]]+)?\]\]")


def repo_root() -> Path:
    here = Path(__file__).resolve()
    return here.parent.parent.parent


def split_frontmatter(text: str) -> tuple[str, str]:
    if not text.startswith("---"):
        return "", text
    end = text.index("\n---", 3)
    return text[4:end], text[end + 4 :]


def scalar(frontmatter: str, key: str) -> str:
    m = re.search(rf"^{re.escape(key)}:[ \t]*(.+)$", frontmatter, re.M)
    return m.group(1).strip().strip("\"'") if m else ""


def sequence(frontmatter: str, key: str) -> list[str]:
    """Read either a flow sequence or a block sequence under `key`."""
    m = re.search(rf"^{re.escape(key)}:[ \t]*(\[.*\])[ \t]*$", frontmatter, re.M)
    if m:
        return [i.strip().strip("\"'") for i in m.group(1)[1:-1].split(",") if i.strip()]
    m = re.search(rf"^{re.escape(key)}:[ \t]*$\n((?:[ \t]+-.*\n?)*)", frontmatter, re.M)
    if not m:
        return []
    return [re.sub(r"^[ \t]+-[ \t]*", "", line).strip().strip("\"'")
            for line in m.group(1).splitlines() if line.strip()]


def section(body: str, heading: str) -> str:
    m = re.search(rf"^## {re.escape(heading)}[ \t]*$\n(.*?)(?=^## |\Z)", body, re.M | re.S)
    return m.group(1).strip() if m else ""


def read_claim(path: Path) -> dict:
    frontmatter, body = split_frontmatter(path.read_text(encoding="utf-8"))
    title = re.search(r"^# (.+)$", body, re.M)
    grounding = []
    for anchor in sequence(frontmatter, "grounding"):
        m = WIKILINK.match(anchor) or WIKILINK.search(anchor)
        target = (m.group(1) if m else anchor).strip()
        statement = (m.group(2) if m and m.group(2) else "").strip()
        grounding.append({"distillate": target.split("/")[-1], "path": target, "statement": statement})
    return {
        "slug": path.stem,
        "title": title.group(1).strip() if title else path.stem,
        "statement": " ".join(section(body, "Statement").split()),
        "status": scalar(frontmatter, "status"),
        "topics": [t.strip("[]") for t in sequence(frontmatter, "topics")],
        "contestedWith": [t.strip("[]").split("/")[-1] for t in sequence(frontmatter, "contested-with")],
        "grounding": grounding,
    }


def read_moc(path: Path) -> dict:
    frontmatter, body = split_frontmatter(path.read_text(encoding="utf-8"))
    title = re.search(r"^# (.+)$", body, re.M)
    lead = re.search(r"^# .+$\n+([^\n-].*?)(?=\n\n|\n- )", body, re.M | re.S)
    claims = [m.group(1).split("/")[-1] for m in WIKILINK.finditer(body)]
    return {
        "slug": path.stem,
        "topic": scalar(frontmatter, "topic") or path.stem.replace("MOC-", ""),
        "title": title.group(1).strip() if title else path.stem,
        "description": " ".join(lead.group(1).split()) if lead else "",
        "claims": claims,
    }


def read_distillate(path: Path) -> dict:
    frontmatter, body = split_frontmatter(path.read_text(encoding="utf-8"))
    title = re.search(r"^# (.+)$", body, re.M)
    lead = re.search(r"^# .+$\n+(.*?)(?=\n\n)", body, re.M | re.S)
    return {
        "slug": path.stem,
        "title": title.group(1).strip() if title else path.stem,
        "kind": path.parent.name,
        "reference": scalar(frontmatter, "reference"),
        "summary": " ".join(lead.group(1).split()) if lead else "",
        "path": f"vault/10_distillates/{path.parent.name}/{path.name}",
    }


def main() -> int:
    root = repo_root()
    vault = root / "vault"
    claims_dir = vault / "20_claims"
    if not claims_dir.is_dir():
        print(f"no claim layer at {claims_dir}", file=sys.stderr)
        return 1

    topics = [read_moc(p) for p in sorted(claims_dir.glob("MOC-*.md"))]
    claims = [read_claim(p) for p in sorted(claims_dir.glob("*.md")) if not p.name.startswith("MOC-")]
    distillates = [read_distillate(p) for p in sorted(vault.glob("10_distillates/*/*.md"))
                   if p.name != "README.md"]

    known = {c["slug"] for c in claims}
    for topic in topics:
        missing = [s for s in topic["claims"] if s not in known]
        if missing:
            print(f"warning: {topic['slug']} lists unknown claims: {missing}", file=sys.stderr)
        topic["claims"] = [s for s in topic["claims"] if s in known]

    orphans = sorted(known - {s for t in topics for s in t["claims"]})
    if orphans:
        print(f"warning: claims in no topic map: {orphans}", file=sys.stderr)

    index = {
        "_meta": {
            "beschreibung": "Claim-Schicht des Grounded Vault unter dem Paper. Erzeugt aus "
                            "vault/20_claims und vault/10_distillates durch "
                            "vault/tools/build_site_index.py; nicht von Hand pflegen.",
            "quelle": "vault/",
            "generator": "vault/tools/build_site_index.py",
        },
        "topics": topics,
        "claims": claims,
        "distillates": distillates,
    }
    out = root / "data" / "vault.json"
    out.write_text(json.dumps(index, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    print(f"{out.relative_to(root)}: {len(topics)} topics, {len(claims)} claims, "
          f"{len(distillates)} distillates, {out.stat().st_size // 1024} KB")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
