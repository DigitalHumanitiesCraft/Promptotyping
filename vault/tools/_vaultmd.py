"""What the vault's tools have to agree on: link form, folders, reference files.

Three things stood in more than one script and had begun to drift. The wikilink
pattern demanded a caret in one script and not in the other; the folder names of
the content layers were a table in one and literals in the other; and a broken
CSL file was skipped, warned about or raised, depending on which script read it.
They are defined here once, and both `validate.py` and `build_site_index.py`
read them from here. The equivalent copy in the site's `tools/check_consistency.py`
stays independent on purpose: that script belongs to the site, this folder to the
vault template, and a module across the two would tie the template to one host.
"""

from __future__ import annotations

import json
import re
from pathlib import Path

REPRESENTATIONS = "10_markdown"
DISTILLATES = "20_distillates"
ASSERTIONS = "30_assertions"
OUTPUT = "40_output"
GLOSSARY = "glossary"
REFERENCES = "references"

CONTENT_FOLDERS = (REPRESENTATIONS, DISTILLATES, ASSERTIONS, OUTPUT, GLOSSARY)

TYPE_FOLDER = {
    "representation": REPRESENTATIONS,
    "distillate": DISTILLATES,
    "assertion": ASSERTIONS,
    "moc": ASSERTIONS,
    "chapter": OUTPUT,
    "glossary": GLOSSARY,
}

# The one wikilink form. `knowledge/schema.md` mints an anchor only as a block
# reference, `[[20_distillates/documents/slug#^s1]]`, so the caret belongs to the
# syntax rather than being optional; no document in this vault carries a heading
# anchor. An alias is read by neither tool and may therefore be anything,
# including empty, which Obsidian accepts.
WIKILINK = re.compile(r"\[\[([^\]#|]+?)(?:#\^([A-Za-z0-9-]+))?(?:\|[^\]]*)?\]\]")


def link_targets(text: str) -> list[tuple[str, str | None]]:
    """Every wikilink in a text as (target, block id), the block id None where absent."""
    return [(m.group(1).strip(), m.group(2)) for m in WIKILINK.finditer(text)]


def load_reference_records(directory: Path) -> tuple[list[tuple[Path, dict]], list[str]]:
    """Every CSL JSON record under `directory`, each with the file it came from.

    A file that does not parse yields no records and one message naming it, so
    the callers report the same defect in the same words. What a caller does
    after that stays its own decision: the validator records the message, the
    generator warns and carries on, the bibliography stops.
    """
    records: list[tuple[Path, dict]] = []
    problems: list[str] = []
    if not directory.is_dir():
        return records, problems
    for path in sorted(directory.glob("*.json")):
        try:
            loaded = json.loads(path.read_text(encoding="utf-8"))
        except json.JSONDecodeError as exc:
            problems.append(f"{path.name} is not valid JSON: {exc}")
            continue
        entries = loaded if isinstance(loaded, list) else [loaded]
        records.extend((path, entry) for entry in entries if isinstance(entry, dict))
    return records, problems
