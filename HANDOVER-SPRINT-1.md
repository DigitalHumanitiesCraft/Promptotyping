# Handover für Sprint 1

**Stand**: 2026-05-09, nach Commit `7927ab8` (gepusht auf `origin/main`)
**Lebensdauer dieser Datei**: bis Sprint 1 abgeschlossen ist; dann löschen.
**Adressat**: nächste Claude-Code-Session, die Sprint 1 implementiert.

Dieses Dokument fasst zusammen, was in der Vorbereitungs-Session passiert ist und was Sprint 1 als Eingang bekommt. Es ist nicht der vollständige Plan — der Plan steht in `knowledge/specification.md`, `knowledge/architecture.md`, `knowledge/design.md`. Dieses Dokument ist die Beschleunigungs-Notiz: was wurde bewusst entschieden, was bleibt offen, wo sind die Stolperstellen.

## Zustand des Repos

Drei Commits auf `main`, alle gepusht:
- `fe2d479` Refactor-Initial: alte Living-Paper-Substanz gelöscht, knowledge/-Wissensbasis erste Fassung
- `7d95d76` Wissensbasis-Refactor: data.md gelöscht (Vorlagen-Trigger-Korrektur), knowledge/-Documents auf v0.2 gehoben, Critical-Expert-Prüfung dokumentiert
- `7927ab8` Sprint-1-Vorbereitung: Pollin-2026-Sektionierung in `_content/paper/`, URL-Schema-Korrektur, `template:`-Feld-Schema in Konvention und Vorlagen

Was im Repo liegt:
```
.claude/                     Claude-Code-Konfiguration (unverändert)
.git/
_content/
  paper/01-introduction.md           Pollin 2026 Section 1
  paper/02-terms-positioning.md      Pollin 2026 Section 2 (mit 6 Subsections 2.1-2.6)
  paper/03-four-phases.md            Pollin 2026 Section 3 (mit 5 Subsections 3.1-3.5)
  paper/04-projects.md               Pollin 2026 Section 4
  paper/05-epistemic-infrastructure.md Pollin 2026 Section 5
  paper/06-discussion.md             Pollin 2026 Section 6
  paper/07-conclusion.md              Pollin 2026 Section 7
  literatur.md                       Pollin 2026 References
assets/
  promptotyping-logo.png             Logo (existiert bereits)
knowledge/
  INDEX.md
  project.md
  specification.md
  architecture.md
  design.md
  journal.md
README.md
CLAUDE.md                            Action-Layer mit Designprinzipien
```

Was Sprint 1 anlegt:
```
index.html                           Site-Einstieg
404.html                             Subpath-Routing-Fallback
assets/css/style.css                 DHCraft-Designsystem
assets/js/app.js                     Hauptlogik
assets/js/modules/                   leer am Anfang von Sprint 1
assets/vendor/marked.min.js          marked.js v9.1.6
assets/vendor/js-yaml.min.js         js-yaml v4.1.0 (für Sprint 2 Frontmatter-Inspector)
```

## URL-Schema (verbindlich)

Das Schema wurde in dieser Session zweimal entwickelt — die zweite Form ist die kanonische, die erste ist verworfen. Beim Lesen alter Plan-Dokumente ist das verwirrend; deshalb hier eindeutig.

**Verworfen** (aus dem ersten Anlauf):
- ~~`/vorlagen/{name}/{version}`~~ Subpath-Form mit Versions-Suffix war pflegeaufwändig (jedes Repo-Update bei jedem Vorlagen-Refactor)
- ~~`#vorlage-{name}-{version}`~~ Hash-Form mit Versions-Suffix als Default
- ~~Datengrundlage v0.2~~ war Vault-internes Refactor-Artefakt; mit dem Public-Launch heute werden alle Vorlagen einheitlich v0.1

**Kanonisch** (Stand jetzt, alle v0.1):
| Ressource | Subpath (Latest) | Hash (Latest) |
|---|---|---|
| Promptotyping-Document | `/promptotyping-document/{slug}` | `#promptotyping-document-{slug}` |
| Konzept | `/konzepte/{name}` | `#konzept-{name}` |
| Case Study | `/case-studies/{name}` | `#case-{name}` |
| Konvention | `/konvention/{version}` | `#konvention-{version}` |
| Glossar | `/glossar` | `#glossar` |
| Literatur | `/literatur` | `#literatur` |
| Paper-Sektion | `/paper/{n}-{slug}` | `#abschnitt-{n}-{slug}` |

**Snapshot-Adressierung** für ältere Vorlagen-Versionen (heute noch nicht relevant, weil alle v0.1):
- Subpath: `/promptotyping-document/{slug}#v0.1`
- Hash: `#promptotyping-document-{slug}-v0.1`
- Liegt als Sub-Anker auf der Vorlagen-Seite, nicht als eigene Seite.

**Acht Promptotyping-Document-Slugs**:
- `data` (Vorlage Datengrundlage)
- `index` (Vorlage Index)
- `project` (Vorlage Projekt-Wissensdokument)
- `specification` (Vorlage Specification)
- `architecture` (Vorlage Architecture)
- `design` (Vorlage Design)
- `journal` (Vorlage Journal)
- `user-stories` (Vorlage User Stories)

Beide URL-Formen (Subpath und Hash) sind gleichberechtigt kanonisch. Im `template:`-Feld eines Repo-`knowledge/`-Dokuments wird Subpath als `url:` geführt, Hash als `alias:`. Beide werden vom 404.html-Routing aufgelöst.

## Was Sprint 1 baut

Aus `knowledge/specification.md` ergeben sich zehn Anforderungen (A1-A12, mit den heutigen Erweiterungen). Sprint 1 deckt davon ab:
- A1 (Paper-Lesefluss): `_content/paper/01-…07-…md` rendern in zentrale Lese-Spalte
- A2 (Phasen-Provenance-Lane): vier monochrome Stufen, Hover-Tooltip, Klick-Filter
- A8 (YouTube-Hero-Embed): Teil 1 oben, Teil 2 in Section 4 (kommt erst, wenn der Lesefluss steht)
- A9 (DHCraft-Designsystem): Hellgrau, Inter, Schwarz auf Weiß
- A10 (Vanilla Tech-Stack): kein Build, marked.js + js-yaml vendoriert
- A4 + ADR-3 (URL-Routing): 404.html mit Subpath-zu-Hash-Auflösung

Was Sprint 1 NICHT baut (kommt in späteren Sprints):
- Vorlagen-Sektion + Side-Panels + Frontmatter-Inspector (Sprint 2)
- Case-Studies-Karten + Filter (Sprint 3)
- Glossar + Literatur als Side-Panels (Sprint 4)
- Mobile-Layout + SEO + Politur (Sprint 5)

## Wo es heikel wird

### Phasen-Provenance-Lane: Klassifizierung pro Absatz

Die sieben Paper-Files sind im Substrat-Zustand, ohne `{:.phase-*}`-Klassen-Tags. Die Klassifizierung (jeden Absatz einer der vier Phasen zuordnen) ist in Sprint 1 zu leisten. Das ist Critical-Expert-Arbeit: Christopher Pollin oder Claude in Critical-Expert-Rolle. Aufwand: 30-60 Minuten laut Plan, plus marked.js-Custom-Extension.

Vier Phasen-Klassen (in `architecture.md` als CSS spezifiziert):
- `phase-preparation` — `#2a2a2a` (gedämpftes Grau-Schwarz)
- `phase-exploration` — `#525252` (gedämpftes Anthrazit)
- `phase-distillation` — `#8a8a8a` (Mittelgrau)
- `phase-implementation` — `#b8b8b8` (Helles Stein-Grau)

Heuristik (aus `design.md`):
- Section 2.x klassifiziert sich meist als Preparation (Grundbegriffe vor der Methode)
- Section 3.1-3.2 als Preparation und Exploration entsprechend ihrer Bezeichnung
- Section 3.3 als Distillation
- Section 3.4-3.5 als Implementation
- Section 4 (Projekte) gemischt — pro Insight die Phase, die der Insight beschreibt
- Section 5-6 reflexiv über die Methode, oft Distillation oder Implementation
- Section 1 und 7 oft ohne klare Phase — Plan sagt: Hero-Video bekommt keine Lane (Begründung in `specification.md` A8); analog können Intro/Outro-Absätze ohne Klasse bleiben

Code-Blöcke, Listen, Tabellen, Zitate haben keine Phasen-Lane (siehe `architecture.md`, "Custom-Extension"). Die Lane ist nicht durchgehend, sondern nur an Fließtext-Absätzen sichtbar.

### marked.js Custom-Extension

Der vollständige Code steht in `architecture.md` unter "Custom-Extension für marked.js". Sprint 1 muss ihn nur kopieren. Die Extension parst `{:.klassenname}` am Absatz-Anfang und produziert `<p class="klassenname">...</p>`. Akzeptierte Klassen sind nur die vier `phase-*` — andere werden ignoriert (Sicherheit gegen versehentliche CSS-Klassen-Injektion).

### 404.html-Routing-Trick

Der Code steht in `architecture.md` unter "URL-Routing", mit allen sechs Anker-Typen (Vorlage, Konzept, Case-Study, Konvention, Paper-Sektion, Glossar, Literatur). Wichtig: GitHub Pages liefert `404.html` für jeden nicht-existierenden Pfad aus, das ist der Mechanismus. Test mit lokalem `python -m http.server` reicht nicht — der lokale Server gibt eine eigene 404 zurück, nicht unsere. Lokal muss man entweder URL mit Hash testen oder einen Live-Server verwenden, der die `404.html` ausliefert.

### Lazy-Loading mit IntersectionObserver

Code steht in `architecture.md`. Initial wird nur Section 1 (Introduction) geladen, der Rest beim Scrollen. Wichtige Parameter: `rootMargin: '200px'` (Section wird geladen, wenn Viewport sich bis 200px nähert). Bei Hash-Direktverlinkung (z.B. `#abschnitt-3-four-phases`) muss die Sektion sofort geladen werden — der Lazy-Loader muss diese Edge-Case behandeln.

### CLAUDE.md im Repo-Root

Die `CLAUDE.md` enthält Action-Layer-Anweisungen, einschließlich Designprinzipien aus `design.md`. Sprint 1 wird sie als Kontext-Quelle haben. Wichtig: User-Präferenzen sind dort nicht alle dokumentiert — die wesentlichen für diese Site sind:

- Keine Emojis, keine Em-Dashes (Vault-CLAUDE.md §5)
- Inter als Font, Hellgrau `#d5d5d5` als Akzent, Schwarz auf Weiß
- Keine Animationen, keine Parallax-Effekte, keine Cursor-Spielereien
- Mobile-Layout: Phasen-Lane wird zur Top-Bar, Side-Panels werden zu Bottom-Sheets

## Vault-Verbindung

Diese Session hat auch Vault-Dateien geändert (in `c:\Users\Chrisi\Documents\obsidian\Vault Operations\`):

- `Konventionen\Konvention Promptotyping Documents.md` — `template:`-Feld als Pflichtkern + neue Sektion "Vorlagen-Adressierbarkeit"
- `Vorlagen Promptotyping Documents\` — alle 8 Vorlagen mit `template:`-Block im Befüll-Abschnitt
- `Vorlagen Promptotyping Documents\Vorlage Datengrundlage.md` — von v0.2 zurück auf v0.1

Sprint 1 muss den Vault NICHT lesen oder verändern. Die Site-Substanz liegt vollständig im Repo unter `_content/` und `knowledge/`. Wenn Sprint 1 die Vorlagen-Sektion bereitstellen will (kommt erst Sprint 2), würde sie aus dem Vault gespiegelt werden — aber das ist explizit Sprint 2.

## Hero-Video und Section-2-Video

Plan: Teil 1 als Hero-Embed oben (vor Section 1), Teil 2 in Section 4 bei VetMedAI-Wissensbilanz.

URLs aus Pollin 2026:
- Teil 1: https://youtu.be/8sUe4Jkh3uQ
- Teil 2: https://youtu.be/hd_a-NBO_S4

Beide als `youtube-nocookie.com`-Variante einbetten (Datenschutz, siehe `architecture.md` "Sicherheit und Datenschutz"). Hero-Video bekommt keine Phasen-Klasse, weil es Meta-Material *über* die Methode ist — die Lane beginnt mit dem ersten Paper-Absatz (siehe `specification.md` A8).

## Was schon richtig ist und nicht angefasst werden muss

- Die sieben Paper-Files in `_content/paper/` sind exakte Kopien aus Pollin 2026 mit YAML-Frontmatter pro Sektion. Anker-IDs (`abschnitt-1-introduction` etc.) und Subsection-Anker (`konzept-context-engineering` etc.) sind im Frontmatter dokumentiert.
- `_content/literatur.md` enthält die References-Sektion. Inline-Zitate im Paper-Lesefluss können später per Anker-Sprung dorthin verlinkt werden.
- `knowledge/journal.md` ist chronologisch geführt, mit dem heutigen Sprint-1-Vorbereitungs-Eintrag am Ende. Sprint 1 fügt einen neuen Eintrag mit Datum hinzu, nicht überschreiben.

## Was bewusst offen bleibt

- **Englische Fassung**: Phase 2, eigenes Projekt nach Bewährung der deutschen
- **Versions-Sub-Anker konkretisiert**: Snapshot-Adressierung (`#v0.1`) ist konzeptionell festgelegt, aber wird erst implementiert, wenn die erste v0.2-Vorlage entsteht. Heute leer.
- **Konvention-Adressierung**: Die `Konvention Promptotyping Documents.md` selbst sollte auch unter einer URL erreichbar sein (`/konvention/v0.1` oder `#konvention-v0.1`). Diese Sektion ist in `specification.md` A4 angelegt, aber kein Sprint hat sie als Aufgabe — Sprint 4 (Glossar/Literatur) wäre der natürliche Ort.

## Nach Sprint 1

Wenn Sprint 1 fertig ist:
1. Diese `HANDOVER-SPRINT-1.md` löschen
2. Eine neue `HANDOVER-SPRINT-2.md` schreiben für die Vorlagen-Sektion
3. `knowledge/journal.md` mit Sprint-1-Erkenntnissen ergänzen
4. Commit + Push
