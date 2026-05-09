---
title: Design
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
  name: Vorlage Design
  version: 0.1
  url: https://dhcraft.org/Promptotyping/#vorlage-design-v0.1
topics: ["[[Information Visualisation]]", "[[Scholar-Centered Design]]", "[[Typography]]"]
related: [INDEX, project, data, specification, architecture, journal]
---

# Design

Designhaltung, Designsystem, Interaktionsmuster für die interaktive-Paper-Site. Action-Layer-Anbindung in `CLAUDE.md` im Repo-Root.

## Designhaltung

Die Site soll **ruhig** sein. Sehr ruhig. Schwarz auf Weiß, eine Schrift, ein Akzent in Hellgrau, eine monochrome Phasen-Lane links. Keine Farbflut, keine Animationen außer minimalen Übergängen, keine dekorativen Linien, keine Akzent-Boxen.

Drei Begründungen:

1. **Lesbarkeit ist die Hauptfunktion**. Ein wissenschaftliches Paper liest man, man durchscrollt es nicht. Alles, was vom Lesen ablenkt, ist störend.
2. **DHCraft-Designsystem ist konsequent ruhig**. Die Hellgrau-Inter-Schwarz-Linie aus den Bibliotheksinformatik-Slides und HerData ist die etablierte Form. Die Site setzt sie fort.
3. **Methode wird durch Form sichtbar, nicht durch Schmuck**. Die Phasen-Provenance-Lane (siehe unten) trägt Information durch Anwesenheit, nicht durch Auffälligkeit.

## Designsystem

### Farbe

```
Hintergrund:    #ffffff
Text:           #1a1a1a
Akzent (Hover): #d5d5d5
Code-Hintergrund: #f5f5f5
Border (Side-Panel): #e0e0e0
```

Phasen-Provenance-Lane (siehe Sektion unten):
```
Preparation:    #2a2a2a    (dunkelster Ton)
Exploration:    #525252
Distillation:   #8a8a8a
Implementation: #b8b8b8    (hellster Ton, vor Weiß)
```

Kein Teal, kein Türkis, kein Akzent in Bunt. (Unterschied zu DHCraft-Slides, wo Teal für Datum erlaubt war — auf der Site nicht nötig.)

### Typografie

- **Inter** für Fließtext, alle Gewichte (Regular 400, Medium 500, Semibold 600, Bold 700). Über Google Fonts (oder lokal hostbar — Entscheidung beim Implementieren).
- **Consolas** für Code, monospace, System-Font (kein Download nötig).
- **Größen**:
  - Body: `1rem` (16px)
  - H1 Paper-Titel: `2.25rem`, weight 700
  - H2 Sektionsüberschriften: `1.75rem`, weight 600
  - H3: `1.375rem`, weight 600
  - H4: `1.125rem`, weight 600
  - Code-inline und Code-Blöcke: `0.9375rem` (15px)
  - Side-Panel-Inhalt: `0.9375rem`
- **Zeilenhöhe**: 1.6 für Fließtext, 1.4 für Code, 1.3 für Headlines

### Spacing

Vertikales Spacing folgt 4px-Grid: `0.25rem`, `0.5rem`, `1rem`, `1.5rem`, `2rem`, `3rem`, `4rem`. Lese-Spalte hat horizontalen Padding `1.5rem` mobile, `2rem` desktop.

### Layout

Drei-Spalten-Grid auf Desktop:
```
| Inhaltsverzeichnis | Lesefluss | Side-Panel  |
| 240px (sticky)     | 720px max | 360px slide |
```

Die Inhaltsverzeichnis-Spalte links zeigt aktuelle Paper-Sektion, scrollt sticky mit. Die Lese-Spalte zentriert. Die Side-Panel-Spalte rechts ist standardmäßig zugeklappt (off-screen rechts), schiebt herein bei Klick auf einen Trigger (Begriff, Vorlage, Case Study).

Mobile: Inhaltsverzeichnis als Hamburger-Menü oben, Lesefluss volle Breite, Side-Panel als Bottom-Sheet (von unten herein).

## Phasen-Provenance-Lane

Der ästhetische Kniff der Site. Detaillierte Spezifikation, weil dies die einzige nicht-triviale visuelle Komponente ist.

### Was es ist

Links neben jedem Paper-Absatz erscheint eine vertikale Markierung:

- **Position**: 12px links der Lese-Spalten-Kante, also außerhalb des Lesetextes
- **Breite**: 4px
- **Höhe**: ca. 80% der Absatzhöhe (10% oben und unten Padding)
- **Farbe**: einer der vier Phasen-Töne (`#2a2a2a` bis `#b8b8b8`)
- **Form**: gerade vertikale Linie, kein Radius, keine Kappung

### Wie es funktioniert

Im Markdown-Quelltext der Paper-Sektionen wird jeder Absatz mit einem Klassen-Tag versehen:

```markdown
{:.phase-preparation}
The Preparation phase collects and structures all materials before technical decisions are made...

{:.phase-exploration}
The Exploration phase is a systematic investigation of the interface between data and research context...

{:.phase-distillation}
The Distillation phase compresses the knowledge gained during Exploration...

{:.phase-implementation}
Implementation iterates on the artifact, with the LLM as collaborator and the Critical Expert as validator...
```

Die marked.js-Custom-Extension parst den Tag und produziert beim Render:
```html
<p class="phase-preparation">The Preparation phase...</p>
```

CSS rendert die Lane:
```css
.phase-preparation,
.phase-exploration,
.phase-distillation,
.phase-implementation {
  position: relative;
  padding-left: 1.5rem;
}

.phase-preparation::before,
.phase-exploration::before,
.phase-distillation::before,
.phase-implementation::before {
  content: '';
  position: absolute;
  left: 0;
  top: 10%;
  bottom: 10%;
  width: 4px;
  background: var(--lane-color);
}

.phase-preparation { --lane-color: #2a2a2a; }
.phase-exploration { --lane-color: #525252; }
.phase-distillation { --lane-color: #8a8a8a; }
.phase-implementation { --lane-color: #b8b8b8; }
```

### Interaktion

**Hover**: Tooltip erscheint rechts neben der Lane mit Phasennamen plus "Springe zu allen Absätzen dieser Phase". Tooltip hat dezenten Schatten, Hellgrau-Border, kein Pfeil.

**Klick**: Aktiviert Phasen-Filter-Modus. Im Filter-Modus werden Absätze, die nicht zur ausgewählten Phase gehören, auf `opacity: 0.25` reduziert. Eine kleine Filter-Indikator-Leiste oben (sticky) zeigt: "Filter: Distillation. [Filter aufheben]".

**Klick auf Filter aufheben**: zurück zum Normalzustand, alle Absätze auf `opacity: 1`.

### Mobile

Auf Mobile wird die Lane zur **Top-Bar**: Eine schmale horizontale Leiste oben am Bildschirm zeigt vier Phasen-Indikatoren als horizontale Streifen-Reihe. Beim Scrollen aktualisiert sich die Position des "aktuellen Absatzes" — die zugehörige Phase wird hervorgehoben (volle Breite, andere drei verkleinert). Klick auf einen Indikator springt zum nächsten Absatz dieser Phase.

### Was die Lane *nicht* tut

- Keine Animation beim Scrollen (kein Scroll-Linked-Animation)
- Keine Farbverläufe innerhalb eines Strichs (jeder Strich ist einfarbig)
- Keine zusätzlichen Beschriftungen direkt am Strich (Labels nur in Tooltip)
- Kein Cursor-Change beim Hover über die Lane (Standard-Cursor)

## Side-Panels

Rechtes Panel, slidet von rechts herein bei Klick auf einen Trigger.

### Trigger

- Begriff im Lesefluss (gepunktete Unterlinie, Cursor `pointer`)
- Vorlagen-Tabellen-Eintrag (klickbare Zeile)
- Case-Study-Karten-"Mehr →"-Button
- Literatur-Verweis im Paper

### Verhalten

- Beim Öffnen: Slide-in von rechts in 200ms, ease-out
- Beim Schließen: Slide-out in 200ms, ease-in. ESC-Taste schließt. Klick außerhalb des Panels schließt.
- Mehrere Panels: Nur eines zur Zeit. Neuer Trigger ersetzt das Panel-Inhalt.
- URL-Update: Wenn ein Panel geöffnet wird, ändert sich der URL-Hash entsprechend (`#vorlage-data-v0.2`). Browser-Back schließt das Panel.

### Inhalt

- Header: Titel des Inhalts, Schließen-X oben rechts
- Body: gerenderter Markdown-Inhalt (gleiche Typografie wie Lesefluss, kleinere Schriftgröße)
- Footer (optional): Copy-Button für Frontmatter-Block, Repo-Link, etc.

### Mobile

Auf Mobile wird das Panel zum **Bottom-Sheet**: Slide-in von unten, max. 80% Bildschirmhöhe, Drag-Handle oben zum Schließen. Hintergrund halbtransparent abgedunkelt (`rgba(0,0,0,0.3)`).

## Interaktionsmuster

### Glossar-Trigger im Fließtext

Begriffe, die im Glossar definiert sind, bekommen im Render eine gepunktete Unterlinie:

```css
.glossar-trigger {
  border-bottom: 1px dotted #888;
  cursor: help;
}

.glossar-trigger:hover {
  background: #f5f5f5;
}
```

Beim Hover erscheint nach 500ms ein Tooltip mit Kurzdefinition (max. 2 Zeilen). Beim Klick öffnet das Side-Panel mit Volldefinition.

### Vorlagen-Tabelle

Im Paper-Section-3-Bereich erscheint eine Tabelle aller acht Vorlagen:

| Vorlage | Funktion | Datei | Typ | Version |
|---|---|---|---|---|
| Index | Navigation, Begriffslexikon | `INDEX.md` | Knowledge | 0.1 |
| Project | Identität | `project.md` | Knowledge | 0.1 |
| ... | ... | ... | ... | ... |

Klickbare Zeilen, beim Klick öffnet das Side-Panel mit der vollen Vorlagen-Spec.

### Case-Study-Karten

Im Paper-Section-4-Bereich erscheinen Case-Study-Karten, gruppiert nach Genre:

```
HerData-Genre
┌────────────────────────┐  ┌────────────────────────┐
│ HerData                │  │ M3GIM                  │
│ ─                      │  │ ─                      │
│ Prosopographische      │  │ Ira-Malaniuk-Archiv    │
│ Visualisierung...      │  │ als RiC-O 1.1...       │
│                        │  │                        │
│ [Demo →] [Repo →]     │  │ [Demo →] [Repo →]     │
│ [Mehr →]               │  │                        │
└────────────────────────┘  └────────────────────────┘
```

Karten haben Border `#e0e0e0`, kein Schatten, padding `1rem`, hover-state mit hellgrauem Hintergrund. "Mehr →"-Button nur bei den acht Tiefenseiten-Case-Studies sichtbar.

## Action-Layer-Anbindung

Diese Designhaltung ist *deklarativ* — sie beschreibt, wie die Site aussieht und sich verhält. Die *imperative* Übersetzung für Coding-Agenten lebt in `CLAUDE.md` im Repo-Root. Dort stehen Regeln wie:

- "Bevor du eine neue UI-Komponente baust, lies `knowledge/design.md`."
- "Verwende keine Farben außer den im Designsystem definierten."
- "Animationen: nur Slide-in/out für Side-Panels (200ms ease-out), keine anderen."
- "Schriften: Inter für Text, Consolas für Code, sonst keine."

Die Knowledge-Action-Komposition: `design.md` ist Wertequelle, `CLAUDE.md` ist Verhaltenssteuerung.

## Was das Design *nicht* ist

- Kein Custom Cursor
- Kein Parallax
- Keine Lottie-Illustrationen
- Keine Typografie-Animationen (variable Fonts mit Animationen)
- Keine Dark Mode (Phase 1 nur Light Mode)
- Keine WebGL, keine 3D-Effekte
- Keine Sound-Effekte
