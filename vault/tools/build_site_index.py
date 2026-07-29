"""Render the vault's claim layer into the site's data file.

The Promptotyping site is served straight from the repository with no build
step at request time. This script is a generator in the same sense as the
vault's deterministically generated documents: it runs on demand, its output
`data/vault.json` is committed, and the site fetches that one static file
instead of the several hundred Markdown files behind it.

Run from the repository root:

    python vault/tools/build_site_index.py

The index carries the topic maps, the claims with their statements, their
status and their grounding anchors, and the source each distillate condenses,
so the site can draw the grounding chain from a claim down to its source.
Distillate bodies stay out; the side panel fetches the distillate Markdown on
demand, the way the template panel does.
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
    reference = scalar(frontmatter, "reference")
    representation = scalar(frontmatter, "representation")
    m = WIKILINK.match(representation) if representation else None
    representation = (m.group(1) if m else representation).split("/")[-1]
    return {
        "slug": path.stem,
        "title": title.group(1).strip() if title else path.stem,
        "kind": path.parent.name,
        "reference": reference,
        # A distillate condenses exactly one source, addressed either as a
        # bibliographic reference or as an archived representation. Both resolve
        # into the same source layer of the index, keyed by `source`.
        "source": reference or representation,
        "sourceKind": "publication" if reference else ("representation" if representation else ""),
        "summary": " ".join(lead.group(1).split()) if lead else "",
        "path": f"vault/10_distillates/{path.parent.name}/{path.name}",
    }


def cite_label(entry: dict) -> str:
    """Author-and-year label of a CSL-JSON entry, the way the paper cites it."""
    names = [a.get("family") or a.get("literal") or "" for a in entry.get("author") or []]
    names = [n for n in names if n] or [
        e.get("family") or e.get("literal") or "" for e in entry.get("editor") or []
    ]
    names = [n for n in names if n]
    if len(names) == 1:
        who = names[0]
    elif len(names) == 2:
        who = f"{names[0]} and {names[1]}"
    elif names:
        who = f"{names[0]} et al."
    else:
        who = str(entry.get("publisher") or "").strip()
    parts = (entry.get("issued") or {}).get("date-parts") or [[]]
    year = str(parts[0][0]) if parts and parts[0] else ""
    return " ".join(p for p in (who, year) if p).strip()


def read_references(vault: Path) -> dict:
    """Index every CSL-JSON entry under `references/` by its citation id."""
    out: dict[str, dict] = {}
    for path in sorted(vault.glob("references/*.json")):
        try:
            entries = json.loads(path.read_text(encoding="utf-8"))
        except json.JSONDecodeError as exc:
            print(f"warning: {path.name} is not valid JSON: {exc}", file=sys.stderr)
            continue
        for entry in entries if isinstance(entries, list) else [entries]:
            key = str(entry.get("id") or "").strip()
            if not key:
                continue
            out[key] = {
                "slug": key,
                "kind": "publication",
                "title": str(entry.get("title") or key).strip(),
                "label": cite_label(entry) or key,
                "path": f"vault/references/{path.name}",
            }
    return out


def read_representation(path: Path) -> dict:
    _, body = split_frontmatter(path.read_text(encoding="utf-8"))
    m = re.search(r"^# (.+)$", body, re.M)
    title = m.group(1).strip() if m else path.stem
    return {
        "slug": path.stem,
        "kind": "representation",
        "title": title,
        # An archived document has no author-and-year form; its own title is the
        # shortest thing that still names it.
        "label": title,
        "path": f"vault/00_representation/{path.parent.name}/{path.name}",
    }


def collect_sources(vault: Path, distillates: list[dict]) -> list[dict]:
    """The source layer, reduced to the sources the distillates actually name."""
    references = read_references(vault)
    representations = {
        p.stem: read_representation(p)
        for p in sorted(vault.glob("00_representation/*/*.md"))
        if p.name != "README.md"
    }
    sources: dict[str, dict] = {}
    for dist in distillates:
        key = dist["source"]
        if not key:
            print(f"warning: {dist['slug']} names no source", file=sys.stderr)
            continue
        known = references if dist["sourceKind"] == "publication" else representations
        source = known.get(key)
        if source is None:
            print(f"warning: {dist['slug']} names unknown source {key!r}", file=sys.stderr)
            source = {"slug": key, "kind": dist["sourceKind"], "title": key,
                      "label": key, "path": ""}
        if sources.setdefault(key, source)["kind"] != source["kind"]:
            print(f"warning: source slug {key!r} used at two layers", file=sys.stderr)
    return sorted(sources.values(), key=lambda s: s["slug"])


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
    sources = collect_sources(vault, distillates)

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
                            "vault/20_claims, vault/10_distillates, vault/references und "
                            "vault/00_representation durch vault/tools/build_site_index.py; "
                            "nicht von Hand pflegen.",
            "quelle": "vault/",
            "generator": "vault/tools/build_site_index.py",
        },
        "topics": topics,
        "claims": claims,
        "distillates": distillates,
        "sources": sources,
    }
    out = root / "data" / "vault.json"
    out.write_text(json.dumps(index, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    print(f"{out.relative_to(root)}: {len(topics)} topics, {len(claims)} claims, "
          f"{len(distillates)} distillates, {len(sources)} sources, "
          f"{out.stat().st_size // 1024} KB")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
