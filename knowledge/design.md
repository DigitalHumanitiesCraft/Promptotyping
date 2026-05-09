---
title: Design
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
  name: Vorlage Design
  version: 0.1
  url: https://dhcraft.org/Promptotyping/#vorlage-design-v0.1
topics: ["[[Information Visualisation]]", "[[Scholar-Centered Design]]", "[[Typography]]"]
knowledge-sources:
  standards:
    CSS3: https://www.w3.org/Style/CSS/
    WCAG 2.1 AA: https://www.w3.org/WAI/WCAG21/quickref/?levels=aa
  vocabularies:
    Inter Font: https://rsms.me/inter/
related: [INDEX, project, specification, architecture, journal]
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
Hintergrund:        #ffffff
Text:               #1a1a1a
Akzent (Hover):     #d5d5d5
Akzent (subtler):   #e0e0e0   (Borders)
Code-Hintergrund:   #f5f5f5
```

Phasen-Provenance-Lane (siehe Sektion unten):
```
Preparation:        #2a2a2a    (dunkelster Ton)
Exploration:        #525252
Distillation:       #8a8a8a
Implementation:     #b8b8b8    (hellster Ton, vor Weiß)
```

Kein Teal, kein Türkis, kein Akzent in Bunt. Anders als bei den DHCraft-Slides, wo Teal für Datum verwendet wurde, kommt auf der Site keine Akzentfarbe vor. Die monochrome Strenge ist Programm.

### Typografie

- **Inter** für Fließtext, alle Gewichte (Regular 400, Medium 500, Semibold 600, Bold 700). Über Google Fonts oder lokal hostbar (Phase-1-Entscheidung: Google Fonts wegen Subset-Optimierung; bei DSGVO-Bedenken Wechsel auf lokal).
- **Consolas** für Code, monospace, System-Font (kein Download).
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

Vertikales Spacing folgt einem **8px-Basisgrid mit zusätzlichem 4px-Halbschritt** für Feinabstimmung. Alle Werte als rem-Vielfache:

| rem | px | Verwendung |
|---|---|---|
| 0.25rem | 4px | Mikro-Spacing (Hover-States, dünne Linien) |
| 0.5rem | 8px | Inline-Spacing zwischen verwandten Elementen |
| 1rem | 16px | Standard-Absatz-Spacing, Listen-Einrückung |
| 1.5rem | 24px | Lese-Spalten-Padding mobile |
| 2rem | 32px | Lese-Spalten-Padding desktop, Sektions-Innenabstand |
| 3rem | 48px | Sektions-Außenabstand |
| 4rem | 64px | Hero-Abstände, große Übergänge |

(Die Vorgängerversion v0.1 dieser Spec sprach von "4px-Grid", war aber tatsächlich 8px-Grid mit 4px-Halbschritt. Bezeichnung in v0.2 korrigiert.)

### Layout

Drei-Spalten-Grid auf Desktop:
```
| Inhaltsverzeichnis | Lesefluss      | Side-Panel  |
| 240px (sticky)     | 720px max      | 360px slide |
```

Die Inhaltsverzeichnis-Spalte links zeigt aktuelle Paper-Sektion, scrollt sticky mit. Die Lese-Spalte zentriert. Die Side-Panel-Spalte rechts ist standardmäßig zugeklappt (off-screen rechts), schiebt herein bei Klick auf einen Trigger.

Mobile (<768px): Inhaltsverzeichnis als Hamburger-Menü oben, Lesefluss volle Breite (mit `1.5rem` horizontal padding), Side-Panel als Bottom-Sheet.

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

Im Markdown-Quelltext der Paper-Sektionen wird jeder Absatz mit einem Klassen-Tag versehen (Pandoc-style, geparst von Custom marked.js-Extension — siehe [architecture.md](architecture.md), Sektion *Custom-Extension*):

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

Die marked.js-Custom-Extension produziert beim Render:
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

### Absätze ohne Phasen-Klasse

Code-Blöcke, Listen, Zitate, Tabellen, Hero-Video-Embed haben **keine Phasen-Klasse und keine Lane-Markierung**. Konsequenz: Die Lane ist über den Lesefluss nicht durchgängig, sondern unterbrochen an strukturellen Elementen. Das ist akzeptabel und sinnvoll, weil:

- Phasen-Zuordnung für Code-Blöcke ist methodisch leer (Code ist kein Phase-Statement, sondern ein Beispiel innerhalb eines Phase-Statements)
- Listen und Tabellen tragen oft Phase-übergreifende Information
- Hero-Video ist Meta-Material *über* die Methode, nicht ein Methode-Schritt

Die Lane bekommt damit ihren eigenen Rhythmus: lange durchgehende Strecken in Fließtext, Pausen an strukturellen Elementen. Das ist visuell ruhig und funktional sinnvoll.

### Interaktion

**Hover**: Tooltip erscheint rechts neben der Lane mit Phasennamen plus "Springe zu allen Absätzen dieser Phase". Tooltip hat dezenten Schatten, Hellgrau-Border, kein Pfeil. Erscheint nach 300ms Verzögerung, um versehentliche Anzeige beim Über-Hovern zu vermeiden.

**Klick**: Aktiviert Phasen-Filter-Modus. Im Filter-Modus werden Absätze, die nicht zur ausgewählten Phase gehören, auf `opacity: 0.25` reduziert. Eine kleine Filter-Indikator-Leiste oben (sticky) zeigt: "Filter: Distillation. [Filter aufheben]".

**Klick auf Filter aufheben**: zurück zum Normalzustand, alle Absätze auf `opacity: 1`.

### Mobile Phasen-Indikator

Auf Mobile (<768px) wird die Lane zur **Top-Bar**: eine schmale horizontale Leiste oben (Höhe `2rem`), sticky beim Scrollen. Sie zeigt vier nebeneinanderliegende Streifen in den vier Phasen-Tönen. Jeder Streifen nimmt 25% der Bildschirmbreite ein.

```
[████████ Preparation] [████████ Exploration] [████████ Distillation] [████████ Implementation]
```

Beim Scrollen ermittelt JavaScript via IntersectionObserver, welcher Absatz im Viewport am meisten Platz einnimmt. Die zugehörige Phase wird hervorgehoben — der zugehörige Streifen verbreitert sich auf 40% der Breite, die anderen drei teilen sich die restlichen 60%. Übergang in 200ms.

```css
.mobile-phase-bar {
  position: sticky;
  top: 0;
  display: flex;
  height: 2rem;
  z-index: 10;
}

.mobile-phase-bar > div {
  flex: 1;
  transition: flex 200ms ease-out;
}

.mobile-phase-bar > div.active {
  flex: 1.6; /* 40% statt 25% */
}

.mobile-phase-bar .preparation { background: #2a2a2a; }
.mobile-phase-bar .exploration { background: #525252; }
.mobile-phase-bar .distillation { background: #8a8a8a; }
.mobile-phase-bar .implementation { background: #b8b8b8; }
```

Klick auf einen Streifen springt zum nächsten Absatz dieser Phase im Lesefluss.

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

### Mobile Bottom-Sheet

Auf Mobile wird das Panel zum **Bottom-Sheet**: Slide-in von unten, max. 80% Bildschirmhöhe, Drag-Handle oben zum Schließen. Hintergrund halbtransparent abgedunkelt (`rgba(0,0,0,0.3)`).

```css
@media (max-width: 768px) {
  .side-panel {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    max-height: 80vh;
    transform: translateY(100%);
    transition: transform 200ms ease-out;
    border-radius: 0.5rem 0.5rem 0 0;
    z-index: 20;
  }

  .side-panel.open {
    transform: translateY(0);
  }

  .side-panel-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: opacity 200ms;
    pointer-events: none;
    z-index: 19;
  }

  .side-panel-backdrop.visible {
    opacity: 1;
    pointer-events: auto;
  }
}
```

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

Karten haben Border `#e0e0e0`, kein Schatten, padding `1rem`, Hover-State mit hellgrauem Hintergrund. "Mehr →"-Button nur bei den acht Tiefenseiten-Case-Studies sichtbar.

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
- Kein Dark Mode (Phase 1 nur Light Mode)
- Keine WebGL, keine 3D-Effekte
- Keine Sound-Effekte
