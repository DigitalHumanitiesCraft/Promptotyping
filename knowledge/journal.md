---
title: Journal
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: active
language: de
version: 0.1
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
related: [INDEX, project, data, specification, architecture, design]
---

# Journal

Chronologische Dokumentation des Refactor-Verlaufs.

## 2026-05-09 — Phase 0 abgeschlossen, Phase 2 und 3 durchlaufen

### Ziel der Session

Plan-Dokument im Vault unter `C:\Users\Chrisi\.claude\plans\ich-m-chte-dass-du-lovely-kazoo.md` umsetzen. Phasen 0, 2, 3 in einer zusammenhängenden Session, beginnend im Vault, dann ins Repo wechselnd.

### Phase 0 — Vault-Reparatur

Korrektur der Source-of-Truth-Formulierung in mehreren Vault-Dokumenten. Die Aussage *"Promptotyping Documents sind die Source of Truth, Code ist deterministisch erzeugbar"* wurde im Wissensdokument [Promptotyping](Applied%20Generative%20AI/Promptotyping.md) als methodisch ungenau identifiziert — das Pollin-2026-Paper formuliert wörtlich: *"the Promptotyping Documents ... are the primary artifact. The prototype is a functional by-product that may be discarded and regenerated from the documents."* Die paper-konforme Aussage trägt damit weniger als die "Source of Truth"-Rhetorik suggeriert.

Korrigiert:
- `Applied Generative AI/Promptotyping.md` (Summary, Synthese)
- `Projects/Promptotyping/Vibe Coding, Promptotyping und AI Stewardship.md` (vier Stellen, plus Wikilinks zur atomaren Quelle eingefügt)
- `Patreon/Proto-AGI rollt schneller heran als erwartet.md` (eine Stelle)

Bewusst nicht angetastet: Vault-Operationen-Dokumente (verwenden "Source of Truth" für Repos/Schemas in anderer Bedeutung), historische Vortragsfolien (Leipzig 2025-12-02, Stand-Snapshot), VetMedAI-Archiv-Glossar.

### Phase 2 — Repo-Inventur und Bereinigung

Bestehender Repo-Stand vom November 2025: 6-Phasen-Methode, Living Paper v0.2 mit drei dekorativen Modulen, sieben alte Use Cases, paper-draft.md als zentrale Quelle. Methodisch überholt.

Entscheidung mit dem Critical Expert: **Radikaler Schnitt statt Archivierung**. Was nicht ins neue interaktive Paper gehört, wird gelöscht (Git-History bleibt natürlich erhalten).

Gelöscht:
- Top-Level: `README.md`, `DATA.md`, `DESIGN.md`, `INSTRUCTIONS.md`, `JOURNAL.md`, `REQUIREMENTS.md`, `paper-content.md`, `paper-draft.md`, `CHANGELOG_SESSION.md`, `install.sh` (VoiceMode-Installer, fremder Inhalt), `go` (leere Datei)
- Verzeichnisse: `herdata-knowledge/`, `paper-knowledge/`, `prototype/`, `public/`, `use cases/`, `.claude/worktrees/`, `_archive/` (zwischendrin angelegt, dann obsolet)

Behalten:
- `assets/promptotyping-logo.png` — Logo bleibt
- `.claude/` (außer worktrees), `.git/`

Gesichert als Schablone für späteren Aufbau:
- `prototype/data.json` → `c:\tmp\promptotyping-old-data-schablone.json` (18 Case-Studies-JSON aus Living Paper, dient als Struktur-Vorlage für die neue `data/case-studies.json`)

### Phase 3 — knowledge/-Wissensbasis befüllt

Sieben Promptotyping-Documents nach den Vault-Vorlagen geschrieben. Jedes Dokument trägt das Frontmatter-Pflichtkern aus der Konvention plus das neu eingeführte `template:`-Feld, das auf die zukünftigen Site-Anker zeigt.

Documents in der Reihenfolge des Schreibens:
1. `INDEX.md` (nach Vorlage Index v0.1) — Navigation, Begriffslexikon, Verhältnis zur Vault-Wissensbasis
2. `project.md` (nach Vorlage Projekt-Wissensdokument v0.1) — Identität, Adressaten, Scope, Outcome
3. `data.md` (nach Vorlage Datengrundlage v0.2) — Substrat (Pollin 2026, Vault-Vorlagen, Case Studies, Videos), Spiegel-Pipeline, vier strukturelle Grenzen
4. `specification.md` (nach Vorlage Specification v0.1) — 10 Anforderungen, Funktionsumfang pro Sektion, 8 ADRs
5. `architecture.md` (nach Vorlage Architecture v0.1) — Vanilla-Stack, Datenfluss, URL-Routing, Subpath-Aliase via 404.html
6. `design.md` (nach Vorlage Design v0.1) — DHCraft-Designsystem, ausführliche Phasen-Provenance-Lane-Spezifikation, Side-Panel-Verhalten
7. `journal.md` (dieses Dokument) — Genese ab Refactor-Start

### Beobachtungen aus Phase 3

**Die `template:`-Feld-Adressierung wird wirklich substantiell**. Jedes der sieben Documents zeigt im Frontmatter auf seinen zukünftigen Site-Anker (`https://dhcraft.org/Promptotyping/#vorlage-data-v0.2` etc.). Die Adressierung ist meta-rekursiv: Die Wissensbasis dieses Repos verlinkt auf Vorlagen, die noch nicht existieren — die Site, die sie hosten wird, ist erst zu bauen. Das ist die Probe aufs Exempel der Methode: Wenn beim Implementieren der Site die Anker tatsächlich an den geplanten Stellen entstehen, hat die Wissensbasis Vorhersagekraft. Falls nicht, wird sie korrigiert.

**Vorlage Datengrundlage v0.2 in der Praxis getestet**. Der `data.md` trägt die vier Pflichtsektionen (Gegenstand, Quellen, Modell, Grenzen) plus zwei optionale (Verhältnis zur externen Datenquelle, Workflow). Die optionale Sektion `Verzerrungen` trägt für dieses Projekt nicht — das ist gemäß Vorlage v0.2 explizit zulässig und dokumentiert. Das ist ein guter Validierungsfall: Die Vorlage funktioniert für Methodik-Material, nicht nur für historische Daten.

**Specification mit 8 ADRs**. Die Promptotyping-Methode rät zu Decision Records statt eingebauten Begründungen — und tatsächlich: Die ADR-Form trägt das Reasoning besser als versteckte Implizita. Speziell ADR-6 (Vault-Explorer-Modul ganz weglassen) hätte ohne ADR-Form als beiläufige Designentscheidung später unklar gewirkt.

### Dead Ends und Korrekturen

**Erste Source-of-Truth-Korrektur war Symptombehandlung**. Ich hatte zunächst nur die Formulierungen ersetzt, ohne zu prüfen, ob die anderen Vault-Dokumente auch betroffen sind. Der Critical Expert wies darauf hin, dass bei sauberer Vault-Architektur nur ein Wissensdokument die Definition trägt und alle anderen verlinken. Korrektur: Wikilinks zu `[[Promptotyping]]` in den anderen Vault-Stellen ergänzt, Definitions-Texte aber kompakt gelassen (Aggregat-Dokumente brauchen Kurzform, sonst sind es Linklisten).

**Plan-Iteration**. Der initiale Plan war zu groß — sechs Top-Level-Sektionen, drei interaktive Module, zweisprachig, voller knowledge/-Aufwand. Nach Critical-Expert-Feedback radikal reduziert: Single-Page interaktives Paper, deutsch zuerst, zwei sinnvolle Module, knappe knowledge/-Wissensbasis. Aufwand-Schätzung sank von 33-44h auf 25-35h.

**Ästhetischer Kniff**. Erster Vorschlag (Knowledge Trace mit Vier-Phasen-Farbcodierung) wurde abgelehnt, weil ich die Methode falsch zitiert hatte ("Documents als Source of Truth", paper-konform aber: "primary artifact"). Korrigiert. Phasen-Provenance-Lane bleibt der Kniff, aber die Begründung wurde paper-konform reformuliert.

### Stand am Ende der Session

Repo-Verzeichnis nach `ls -la`:
```
.claude/      .git/      assets/     knowledge/    CLAUDE.md (folgt)    README.md (folgt)
```

`knowledge/` enthält sieben Documents, alle mit konsistentem Frontmatter, alle mit `template:`-Feld auf zukünftige Site-Anker. Die Wissensbasis ist die Specification, aus der Phase 4 Sprint 1 startet.

### Nächste Schritte

1. `CLAUDE.md` im Repo-Root als Action-Layer schreiben
2. Neue knappe `README.md` im Repo-Root
3. Erster Commit auf `main` mit Message "Refactor: Repo zu interaktivem Paper, knowledge/-Wissensbasis angelegt, alter Stand entfernt"
4. Phase 4 Sprint 1 in eigener Session: Site-Skeleton, Paper-Lesefluss, Phasen-Provenance-Lane

Die Session endet hier. Phase 4 wird in einer eigenen Repo-fokussierten Claude-Code-Session weitergeführt.
