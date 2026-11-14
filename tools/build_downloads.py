"""Build the template archive the start page offers.

The Pages workflow runs this on the assembled tree, so the archive is made at
delivery and never committed. Locally it writes into ``downloads/`` (ignored by
Git) for a preview. ``tools/check_consistency.py`` reuses ``archive_members``
to hold the archive against the single download links of the start page.
The skill is not packed here, since it lives in the repository
promptotyping-skill (2026-11-14).

Usage: python tools/build_downloads.py [output directory]
"""

from __future__ import annotations

import json
import sys
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CATALOGUE = ROOT / "data" / "promptotyping-documents.json"
TEMPLATE_DIR = ROOT / "_content" / "promptotyping-document"
TEMPLATES_ZIP = "promptotyping-templates.zip"
# A fixed timestamp keeps the archive byte-identical across builds.
STAMP = (2026, 1, 1, 0, 0, 0)


def template_members() -> list[tuple[str, Path]]:
    """One entry per catalogue template, under the name its single link downloads."""
    documents = json.loads(CATALOGUE.read_text(encoding="utf-8"))["documents"]
    return [("promptotyping-templates/%s.md" % d["slug"], TEMPLATE_DIR / ("%s.md" % d["slug"]))
            for d in documents]


def archive_members() -> dict[str, list[tuple[str, Path]]]:
    return {TEMPLATES_ZIP: template_members()}


def write_archive(target: Path, members: list[tuple[str, Path]]) -> None:
    with zipfile.ZipFile(target, "w", compression=zipfile.ZIP_DEFLATED) as archive:
        for name, source in members:
            info = zipfile.ZipInfo(name, date_time=STAMP)
            info.compress_type = zipfile.ZIP_DEFLATED
            archive.writestr(info, source.read_bytes())


def main(argv: list[str]) -> int:
    out = Path(argv[1]) if len(argv) > 1 else ROOT / "downloads"
    out.mkdir(parents=True, exist_ok=True)
    for name, members in archive_members().items():
        missing = [str(source) for _, source in members if not source.is_file()]
        if missing:
            print("missing source files: %s" % ", ".join(missing), file=sys.stderr)
            return 1
        write_archive(out / name, members)
        print("%s: %d files" % (out / name, len(members)))
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
