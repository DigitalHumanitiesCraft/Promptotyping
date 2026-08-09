---
title: Handoff
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
status: snapshot
language: de
created: 2026-08-09
updated: 2026-08-09
related: [journal, paper-knowledge, INDEX]
---

# Handoff, Lane 4, 2026-08-09

Übergabenotiz der Session, die den Vault migriert, die Site nachgezogen und die Paper-Flags abgearbeitet hat. Eine frische Instanz liest zuerst `CLAUDE.md`, dann diese Notiz, dann `knowledge/journal.md` (Eintrag 2026-08-09 samt Nachtrag).

## Stand

Alles committet und gepusht bis `3e4265d` auf `main`. Der Vault läuft auf der neuen Grounded-Vault-Template-Kette (`00_sources` bis `40_output`, claim heißt assertion); Validator bei null Fehlern und genau der einen deklarierten Warnung `W-NO-OUTPUT`, pytest 59/59, `check_consistency.py` 14 Gruppen ohne Failure (inklusive der neuen Frontmatter-Gruppe V16 mit `schema/knowledge-document.schema.json`). Das Paper (Version 0.9) trägt die geschlossenen Flags 3, 6 und 7, den Stilkonformanz-Pass und den Selbstanwendungssatz in der Conclusion. `vault/knowledge/state.md` ist auf die Vierkapitel-Struktur gekeyt (Zweitaudit: 30 carried, 35 moved, 7 weitere orphaned).

## Entscheidungen dieser Session, mit Grund

- Migration über deklariertes Mapping im Template-Repo (`grounded-vault`, `--instance promptotyping`) statt Handarbeit; Quellen-Originale und Examples vom Content-Pass ausgenommen, weil die YAML-Neuformatierung Originale verändert hätte.
- Publizierte `#vault-{slug}`-Anker blieben stabil, weil die Dateinamen die Umbenennung überlebt haben; nur Pfade und Vokabular wurden nachgezogen.
- Fakhoury 2024 und Hora 2026 aus den References entfernt (Flag 7, unzitiert), Registerzeilen auf `dropped`; reversibel über git.
- Die 68 plus 7 verwaisten Assertions bleiben als geprüftes Material im Vault (Register-Regel), das Audit ist der Record; kein Archiv-Topic eingezogen, das steht als Vorschlag beim Operator.
- `_content/konvention.md` bewusst nicht angefasst (vault-first); der Schema-Verweis im Konventionstext gehört in eine Vault-Session.

## Offene Fäden (alle operator-gated)

Machine-Review-Gate (Batch `vault/review-batch-2026-08-09.jsonl`, 956 Paare, gitignored und über `review.py emit` regenerierbar; Reviewer fremder Modellfamilie nötig, Verdicts bucht `review.py judge`); Flag-5-Literaturauswahl (Kandidaten im Chat-Protokoll der Session: arXiv 2604.03196, arXiv 2602.13377, ESEM 2025, RIDE-Kriterienkatalog); Flags 2, 4, 8, 9 aus `paper-knowledge.md` Abschnitt 19; ZBZ-Projekt-URL für Fußnote 24; Issues #1 und #3 vault-first; CI-Workflow des Templates optional übernehmbar.

## Der eine nächste Schritt

Machine-Review-Lauf fahren, sobald der Operator den Reviewer-Zugang stellt; danach `review.py judge` und die Rework-Fälle.

## Geteilt oder gehalten

Nichts liegt uncommittet außer dem regenerierbaren Review-Batch. Parallele Lanes arbeiten im Template-Repo `grounded-vault` (dort kam nach meinem Mapping-Commit `e1d8be3` ein Follow-up-Scan-Ausbau von fremder Hand) und in KISUG auf `grounded-vault-upgrade`; dieses Repo hier war zuletzt allein bei dieser Lane.
