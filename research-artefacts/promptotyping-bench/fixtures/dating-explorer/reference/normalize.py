"""Organiser reference implementation; never export into an agent trial."""

import argparse
import csv
import datetime as dt
import json
import re
from pathlib import Path

MONTHS = {name: n for n, name in enumerate(
    "Januar Februar März April Mai Juni Juli August September Oktober November Dezember".split(), 1)}


def base_date(value):
    """Return (ISO value, precision), None if unsupported; ValueError if invalid."""
    if re.fullmatch(r"[0-9]{4}-[0-9]{2}-[0-9]{2}", value):
        return dt.date.fromisoformat(value).isoformat(), "day"
    if re.fullmatch(r"[0-9]{2}\.[0-9]{2}\.[0-9]{4}", value):
        day, month, year = map(int, value.split("."))
        return dt.date(year, month, day).isoformat(), "day"
    if re.fullmatch(r"[0-9]{4}", value):
        dt.date(int(value), 1, 1)
        return value, "year"
    match = re.fullmatch(r"([A-Za-zäöüÄÖÜ]+) ([0-9]{4})", value)
    if match and match[1] in MONTHS:
        year, month = int(match[2]), MONTHS[match[1]]
        dt.date(year, month, 1)
        return f"{year:04d}-{month:02d}", "month"
    return None


def normalize(row, version):
    result = {key: row[key] for key in ("record_id", "date_literal", "source_ref", "collection")}
    result.update(date_value=None, precision="unknown", certainty="unknown",
                  status="ambiguous", reason="unresolved")
    value = row["date_literal"].strip()
    if not value or value == "o. D.":
        result.update(status="missing", reason="missing")
        return result
    certainty, reason = "certain", "direct"
    if value.startswith("[") and value.endswith("]"):
        if version != "v2" or row["collection"] != "register":
            return result
        value = value[1:-1].strip()
        certainty, reason = "uncertain", "editorial_supplied"
    else:
        if value.startswith("ca. ") and value.endswith("?"):
            return result
        if value.startswith("ca. "):
            value, certainty, reason = value[4:], "approximate", "approximate"
        elif value.endswith("?"):
            value, certainty, reason = value[:-1], "uncertain", "questioned"
    try:
        parsed = base_date(value)
    except ValueError:
        result.update(status="invalid", reason="invalid_calendar")
        return result
    if parsed:
        result.update(date_value=parsed[0], precision=parsed[1], certainty=certainty,
                      status="normalized", reason=reason)
    return result


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--input", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--policy", type=Path, required=True)
    args = parser.parse_args()
    match = re.search(r"^Policy version: (v[12])$", args.policy.read_text(encoding="utf-8"), re.M)
    if not match:
        parser.error("Unsupported or absent policy version")
    with args.input.open(encoding="utf-8", newline="") as source:
        rows = list(csv.DictReader(source))
    result = [normalize(row, match[1]) for row in rows]
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
