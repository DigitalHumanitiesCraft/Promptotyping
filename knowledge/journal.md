---
title: Journal
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: active
language: de
version: 0.2
created: 2026-05-09
updated: 2026-05-09
authors: [Christopher Pollin]
generated-with: Claude Code mit Claude Opus 4.7
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
template:
  name: Vorlage Journal
  version: 0.1
  url: https://dhcraft.org/Promptotyping/#vorlage-journal-v0.1
related: [INDEX, project, specification, architecture, design]
---

# Journal

Chronologische Dokumentation des Refactor-Verlaufs.

## 2026-05-09 — Phasen 0, 2, 3 in einer Session, danach Critical-Expert-Korrektur

### Ziel der Session

Plan-Dokument im Vault unter `C:\Users\Chrisi\.claude\plans\ich-m-chte-dass-du-lovely-kazoo.md` umsetzen. Phasen 0, 2, 3 in einer zusammenhängenden Session, beginnend im Vault, dann ins Repo wechselnd. Anschließend Critical-Expert-Prüfung der angelegten Wissensbasis.

### Phase 0 — Vault-Reparatur

Korrektur der Source-of-Truth-Formulierung in mehreren Vault-Dokumenten. Die Aussage *"Promptotyping Documents sind die Source of Truth, Code ist deterministisch erzeugbar"* wurde im Wissensdokument `Applied Generative AI/Promptotyping.md` als methodisch ungenau identifiziert — das Pollin-2026-Paper formuliert wörtlich: *"the Promptotyping Documents ... are the primary artifact. The prototype is a functional by-product that may be discarded and regenerated from the documents."* Die paper-konforme Aussage trägt damit weniger als die "Source of Truth"-Rhetorik suggeriert.

Korrigiert in drei Vault-Dateien (sieben Stellen): `Applied Generative AI/Promptotyping.md` (Summary, Synthese), `Projects/Promptotyping/Vibe Coding, Promptotyping und AI Stewardship.md` (vier Stellen, plus zwei Wikilinks zur atomaren Quelle), `Patreon/Proto-AGI rollt schneller heran als erwartet.md` (eine Stelle).

Bewusst nicht angetastet: Vault-Operationen-Dokumente (verwenden "Source of Truth" für Repos/Schemas in anderer Bedeutung), historische Vortragsfolien (Leipzig 2025-12-02, Stand-Snapshot), VetMedAI-Archiv-Glossar.

### Phase 2 — Repo-Inventur und Bereinigung

Bestehender Repo-Stand vom November 2025: 6-Phasen-Methode, Living Paper v0.2 mit drei dekorativen Modulen, sieben alte Use Cases, paper-draft.md als zentrale Quelle. Methodisch überholt.

Entscheidung mit dem Critical Expert: **Radikaler Schnitt statt Archivierung**. Was nicht ins neue interaktive Paper gehört, wird gelöscht (Git-History bleibt natürlich erhalten).

Gelöscht:
- Top-Level: `README.md`, `DATA.md`, `DESIGN.md`, `INSTRUCTIONS.md`, `JOURNAL.md`, `REQUIREMENTS.md`, `paper-content.md`, `paper-draft.md`, `CHANGELOG_SESSION.md`, `install.sh` (VoiceMode-Installer, fremder Inhalt), `go` (leere Datei)
- Verzeichnisse: `herdata-knowledge/`, `paper-knowledge/`, `prototype/`, `public/`, `use cases/`, `.claude/worktrees/`

Behalten: `assets/promptotyping-logo.png`, `.claude/` (außer worktrees), `.git/`.

Gesichert als Schablone: `prototype/data.json` → `c:\tmp\promptotyping-old-data-schablone.json` (18 Case-Studies-JSON aus Living Paper, dient als Format-Vorlage für die neue `data/case-studies.json`).

### Phase 3 — knowledge/-Wissensbasis erste Fassung

Sieben Promptotyping-Documents nach den Vault-Vorlagen geschrieben:
1. `INDEX.md` (Vorlage Index v0.1)
2. `project.md` (Vorlage Projekt-Wissensdokument v0.1)
3. `data.md` (Vorlage Datengrundlage v0.2)
4. `specification.md` (Vorlage Specification v0.1)
5. `architecture.md` (Vorlage Architecture v0.1)
6. `design.md` (Vorlage Design v0.1)
7. `journal.md` (Vorlage Journal v0.1)

Plus `CLAUDE.md` im Repo-Root als Action-Layer und neue knappe `README.md`.

Erster Commit auf `main` (`fe2d479`): 74 Dateien, +1.136 / −19.001 Zeilen.

### Critical-Expert-Prüfung der Wissensbasis

Nach Anlage der Wissensbasis Prüfung gegen die Vorlagen-Konvention. Ergebnis: substanzielle Inkonsistenzen in mehreren Dokumenten. Die Prüfung folgt der Maßgabe der Konvention — *"Trigger pro optionaler Sektion prüfen"* — und stellt fest, dass auch die Vorlagen-Wahl als Ganzes triggerbedingt ist.

Befunde:

**Hauptbefund: Vorlage Datengrundlage trägt nicht.** Die Vorlage selbst sagt im Geltungsbereich: *"Die Vorlage trägt, sobald das Projekt Daten verarbeitet oder produziert. Bei reinen Tool-, Bibliotheks- oder Methoden-Repos entfällt sie; das Identitätsdokument trägt die Materialgrundlage dann selbst in einer kompakten Sektion."* Das Promptotyping-Repo verarbeitet keine Forschungsdaten — es spiegelt Wissen. Die Vorlage Datengrundlage hätte also nicht angewendet werden dürfen. Die Materialgrundlage gehört in `project.md`.

**Weitere Befunde**:
- Stand-Inkonsistenz zwischen `project.md` (sagte "Phase 3 läuft mit Anlage dieses Dokuments") und `journal.md` (sagte "Phase 3 abgeschlossen") — bei Lektüre nach Session-Ende verwirrend
- Begriffslexikon in `INDEX.md` ohne mehrere konstitutive Begriffe (Frontmatter-Inspector, Case-Study-Filter, Subpath-Alias, Genre)
- "Lese-Reihenfolge" in `INDEX.md` ohne Selbst-Erwähnung als Einstiegspunkt
- A4 in `specification.md` nur für Vorlagen-Subpaths, nicht für andere Anker-Typen (Konzepte, Case Studies, Glossar)
- A8 in `specification.md` ungelöste Frage zur Phasen-Klasse des Hero-Videos
- ADR-7 in `specification.md` mit unsauberer Zeilenschätzung "~100 Zeilen JS"
- Vault-Pfade in `data.md` falsch (relative Pfade `../../obsidian/`, real wäre `..\..\..\..\obsidian\`)
- Custom-Extension für marked.js in `architecture.md` erwähnt, aber nicht spezifiziert
- Lazy-Loading-Behauptung in `architecture.md` ohne Implementations-Spezifikation (IntersectionObserver fehlte)
- JSON-Schema für `data/case-studies.json` in `architecture.md` nicht definiert
- Spacing-System in `design.md` als "4px-Grid" beschrieben, faktisch 8px-Grid mit 4px-Halbschritt
- Mobile-Layout in `design.md` nur erwähnt, nicht spezifiziert
- Phasen-Klassen-Lücken (Code-Blöcke, Listen, Tabellen) in `design.md` nicht festgehalten
- Frontmatter-Inkonsistenz: `topics:` und `knowledge-sources:` nicht überall sinnvoll gesetzt
- `template:`-Feld zeigt auf nicht-existierende Anker (bewusst meta-rekursiv, aber funktional kaputt bis Sprint 1+2)
- Selbstgefällige Aussagen in `journal.md` ("Das ist die Probe aufs Exempel der Methode")

### Phase 3.5 — Refactor der Wissensbasis (Vorlagen-Trigger-Korrektur)

Lösung für den Hauptbefund: **`data.md` löschen, Inhalt in `project.md` als Materialgrundlage-Sektion integrieren**. Sechs Documents statt sieben. Die Vorlage selbst empfiehlt diesen Weg explizit ("das Identitätsdokument trägt die Materialgrundlage dann selbst").

Lösung für die anderen Befunde:
- `project.md` Stand auf "Phase 3 abgeschlossen" gesetzt, konsistent mit `journal.md`
- `INDEX.md` Begriffslexikon um sieben Begriffe erweitert (Frontmatter-Inspector, Case-Study-Filter, Subpath-Alias, Genre, `template:`-Feld plus Schärfung von "Vorlage" um Trigger-Logik)
- `INDEX.md` Lese-Reihenfolge schärft Selbst-Erwähnung
- `specification.md` A4 mit voller Subpath-Konvention für alle Anker-Typen (Tabelle)
- `specification.md` A8 mit expliziter Phasen-Klassen-Behandlung für Hero-Video
- `specification.md` ADR-7 ohne Zeilenschätzung, verweist auf `architecture.md` für Implementation
- `architecture.md` mit vollständiger Custom-Extension-Spezifikation (Tokenizer + Renderer für marked.js v9)
- `architecture.md` mit IntersectionObserver-basiertem Lazy-Loading-Code
- `architecture.md` mit JSON-Schema für `data/case-studies.json`
- `architecture.md` mit `404.html`-Routing-Code für alle Anker-Typen
- `design.md` Spacing-System als "8px-Grid mit 4px-Halbschritt" korrigiert
- `design.md` Mobile-Layout vollständig spezifiziert (Top-Bar mit IntersectionObserver, Bottom-Sheet mit Drag-Handle)
- `design.md` Phasen-Klassen-Lücken explizit dokumentiert (Code-Blöcke etc. ohne Lane)
- Alle Documents auf `version: 0.2` gehoben (Repo-weite Schema-Version)
- Frontmatter-Konsistenz: `topics:` und `knowledge-sources:` selektiv ergänzt wo sinnvoll, weggelassen wo nicht trägt
- `journal.md` Selbst-Lob entfernt, Beobachtungen sachlich formuliert

### Beobachtungen

**Die Critical-Expert-Prüfung war nötig**, nicht überflüssig. Eine LLM-generierte Wissensbasis kann substanziell, aber nicht selbstkonsistent sein. Die Prüfung fand zwölf inhaltliche Schwächen, eine davon strukturell (Vorlagen-Trigger). Ohne Prüfung wäre Phase 4 mit einer falsch fundierten Specification gestartet — speziell die fehlende JSON-Schema-Spezifikation und die fehlende Custom-Extension-Implementation hätten Sprint 1 oder 2 blockiert.

**Vorlagen tragen nicht automatisch.** Die Methode verlangt Trigger-Prüfung pro Sektion und pro Vorlage. Die Vorlage Datengrundlage v0.2 hat einen klaren Trigger formuliert ("Daten verarbeitet oder produziert"). Beim ersten Anlauf habe ich diesen Trigger ignoriert — vermutlich, weil "data.md" als Dateiname so etabliert ist, dass die Frage nach dem Trigger nicht aktiv gestellt wurde. Der Critical Expert hat sie gestellt.

**`template:`-Feld ist meta-rekursiv konstruktiv.** Die Verlinkung auf zukünftige Site-Anker zwingt, das Anker-Schema vor der Implementation festzulegen. In `specification.md` wird die Konvention für *alle* Anker-Typen definiert, was Sprint 1+2 die Arbeit erleichtert.

### Stand am Ende der Session

Repo-Verzeichnis nach Refactor:
```
.claude/    .git/    assets/    knowledge/    CLAUDE.md    README.md
```

`knowledge/` enthält **sechs** Documents (nicht sieben), alle auf `version: 0.2`. Die Wissensbasis ist die Specification, aus der Phase 4 Sprint 1 startet — diesmal mit gerechtfertigter Vorlagen-Wahl, vollständigem JSON-Schema, spezifizierter Custom-Extension und konsistentem Anker-Schema.

### Nächste Schritte

1. Zweiter Commit auf `main` mit der Refactor-Korrektur
2. Phase 4 Sprint 1 in eigener Session: Site-Skeleton, Paper-Lesefluss, Phasen-Provenance-Lane

Phase 4 wird in einer eigenen Repo-fokussierten Claude-Code-Session weitergeführt.
