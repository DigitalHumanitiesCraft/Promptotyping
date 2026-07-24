"""Percent reduction of water use 2024 -> 2025 from the quarterly readings."""

import csv
from pathlib import Path

DATA = (
    Path(__file__).parents[2] / "00_representation" / "data" / "water-readings-2025.csv"
)


def main() -> None:
    totals = {"2024": 0, "2025": 0}
    with DATA.open(newline="", encoding="utf-8") as f:
        for row in csv.DictReader(f):
            totals[row["quarter"][:4]] += int(row["cubic_metres"])
    reduction = round((1 - totals["2025"] / totals["2024"]) * 100, 1)
    print(reduction)


if __name__ == "__main__":
    main()
