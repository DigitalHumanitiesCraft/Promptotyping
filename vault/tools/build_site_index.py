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

Exit code 0 when the index was written without complaint, 1 when there is no
claim layer to read, 2 when the index was written but a warning stands against
it. A warning here means the index carries something the vault could not
resolve, which V14 of the site's verification document then reports as well.
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

import yaml
from _vaultmd import (
    CLAIMS,
    DISTILLATES,
    REFERENCES,
    REPRESENTATIONS,
    WIKILINK,
    load_reference_records,
)


class VaultFileError(Exception):
    """A vault file the generator cannot read, named in the message."""


def repo_root() -> Path:
    here = Path(__file__).resolve()
    return here.parent.parent.parent


def read_document(path: Path) -> tuple[dict, str]:
    """Frontmatter and body of a vault document, the file named on any failure.

    The frontmatter is read with the YAML parser the vault already depends on
    and validate.py already uses, so the two scripts agree on what a field says.
    """
    text = path.read_text(encoding="utf-8")
    if not text.startswith("---"):
        return {}, text
    end = text.find("\n---", 3)
    if end < 0:
        raise VaultFileError(f"{path.name}: frontmatter has no closing --- line")
    try:
        frontmatter = yaml.safe_load(text[4:end]) or {}
    except yaml.YAMLError as exc:
        raise VaultFileError(f"{path.name}: frontmatter is not valid YAML: {exc}") from exc
    if not isinstance(frontmatter, dict):
        raise VaultFileError(f"{path.name}: frontmatter is not a mapping")
    return frontmatter, text[end + 4 :]


def scalar(frontmatter: dict, key: str) -> str:
    value = frontmatter.get(key)
    return "" if value is None else str(value).strip()


def sequence(frontmatter: dict, key: str) -> list[str]:
    value = frontmatter.get(key)
    if not value:
        return []
    if isinstance(value, str):
        return [value.strip()]
    return [str(item).strip() for item in value if str(item).strip()]


def section(body: str, heading: str) -> str:
    m = re.search(rf"^## {re.escape(heading)}[ \t]*$\n(.*?)(?=^## |\Z)", body, re.M | re.S)
    return m.group(1).strip() if m else ""


def read_claim(path: Path) -> dict:
    frontmatter, body = read_document(path)
    title = re.search(r"^# (.+)$", body, re.M)
    grounding = []
    for anchor in sequence(frontmatter, "grounding"):
        m = WIKILINK.search(anchor)
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
    frontmatter, body = read_document(path)
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
    frontmatter, body = read_document(path)
    title = re.search(r"^# (.+)$", body, re.M)
    lead = re.search(r"^# .+$\n+(.*?)(?=\n\n)", body, re.M | re.S)
    reference = scalar(frontmatter, "reference")
    representation = scalar(frontmatter, "representation")
    m = WIKILINK.search(representation) if representation else None
    representation = (m.group(1) if m else representation).split("/")[-1]
    return {
        "slug": path.stem,
        "title": title.group(1).strip() if title else path.stem,
        "kind": path.parent.name,
        # A distillate condenses exactly one source, addressed either as a
        # bibliographic reference or as an archived representation. Both resolve
        # into the same source layer of the index, keyed by `source`.
        "source": reference or representation,
        "sourceKind": "publication" if reference else ("representation" if representation else ""),
        "summary": " ".join(lead.group(1).split()) if lead else "",
        "path": f"vault/{DISTILLATES}/{path.parent.name}/{path.name}",
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


def read_references(vault: Path) -> tuple[dict[str, dict], list[str]]:
    """Index every CSL-JSON entry under `references/` by its citation id."""
    out: dict[str, dict] = {}
    records, warnings = load_reference_records(vault / REFERENCES)
    for path, entry in records:
        key = str(entry.get("id") or "").strip()
        if not key:
            continue
        out[key] = {
            "slug": key,
            "kind": "publication",
            "title": str(entry.get("title") or key).strip(),
            "label": cite_label(entry) or key,
            "path": f"vault/{REFERENCES}/{path.name}",
        }
    return out, warnings


def read_representation(path: Path) -> dict:
    _, body = read_document(path)
    m = re.search(r"^# (.+)$", body, re.M)
    title = m.group(1).strip() if m else path.stem
    return {
        "slug": path.stem,
        "kind": "representation",
        "title": title,
        # An archived document has no author-and-year form; its own title is the
        # shortest thing that still names it.
        "label": title,
        "path": f"vault/{REPRESENTATIONS}/{path.parent.name}/{path.name}",
    }


def collect_sources(vault: Path, distillates: list[dict]) -> tuple[list[dict], list[str]]:
    """The source layer, reduced to the sources the distillates actually name."""
    references, warnings = read_references(vault)
    representations = {
        p.stem: read_representation(p)
        for p in sorted(vault.glob(f"{REPRESENTATIONS}/*/*.md"))
        if p.name != "README.md"
    }
    sources: dict[str, dict] = {}
    for dist in distillates:
        key = dist["source"]
        if not key:
            warnings.append(f"{dist['slug']} names no source")
            continue
        known = references if dist["sourceKind"] == "publication" else representations
        source = known.get(key)
        if source is None:
            warnings.append(f"{dist['slug']} names unknown source {key!r}")
            # The entry stays in the index so the site can still draw the chain
            # down to a named source, and the empty path is what marks it as
            # unresolved; V14 of the site's verification reports it from there.
            source = {"slug": key, "kind": dist["sourceKind"], "title": key,
                      "label": key, "path": ""}
        if sources.setdefault(key, source)["kind"] != source["kind"]:
            warnings.append(f"source slug {key!r} used at two layers")
    return sorted(sources.values(), key=lambda s: s["slug"]), warnings


def main() -> int:
    root = repo_root()
    vault = root / "vault"
    claims_dir = vault / CLAIMS
    if not claims_dir.is_dir():
        print(f"no claim layer at {claims_dir}", file=sys.stderr)
        return 1

    try:
        topics = [read_moc(p) for p in sorted(claims_dir.glob("MOC-*.md"))]
        claims = [read_claim(p) for p in sorted(claims_dir.glob("*.md"))
                  if not p.name.startswith("MOC-")]
        distillates = [read_distillate(p) for p in sorted(vault.glob(f"{DISTILLATES}/*/*.md"))
                       if p.name != "README.md"]
        sources, warnings = collect_sources(vault, distillates)
    except VaultFileError as error:
        print(f"cannot read the vault: {error}", file=sys.stderr)
        return 1

    known = {c["slug"] for c in claims}
    for topic in topics:
        missing = [s for s in topic["claims"] if s not in known]
        if missing:
            warnings.append(f"{topic['slug']} lists unknown claims: {missing}")
        topic["claims"] = [s for s in topic["claims"] if s in known]

    orphans = sorted(known - {s for t in topics for s in t["claims"]})
    if orphans:
        warnings.append(f"claims in no topic map: {orphans}")

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
    for message in warnings:
        print(f"warning: {message}", file=sys.stderr)
    # A warning names something the index carries but the vault could not
    # resolve, so the run is not clean and must not look clean to a caller.
    return 2 if warnings else 0


if __name__ == "__main__":
    raise SystemExit(main())
