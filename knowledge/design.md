---
title: Design
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: complete
language: de
version: 0.3
created: 2026-05-09
updated: 2026-07-19
authors: [Christopher Pollin]
generated-with: Claude Code mit Claude Opus 4.7
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
template:
  name: Vorlage Design
  version: 0.2
  url: https://dhcraft.org/Promptotyping/promptotyping-document/design
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-design
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

Die Site soll **ruhig** sein. Sehr ruhig. Schwarz auf Weiß, eine Schrift, ein Akzent in Hellgrau. Keine Farbflut, keine Animationen außer minimalen Übergängen, keine dekorativen Linien, keine Akzent-Boxen.

Drei Begründungen:

1. **Lesbarkeit ist die Hauptfunktion**. Ein wissenschaftliches Paper liest man, man durchscrollt es nicht. Alles, was vom Lesen ablenkt, ist störend.
2. **DHCraft-Designsystem ist konsequent ruhig**. Die Hellgrau-Inter-Schwarz-Linie aus den Bibliotheksinformatik-Slides und HerData ist die etablierte Form. Die Site setzt sie fort.
3. **Methode wird durch Struktur sichtbar, nicht durch Schmuck**. Die Gliederung in Paper, Vorlagen, Use Cases und Praxis trägt die Methode; ein zusätzlicher visueller Kniff ist nicht nötig. Die frühere Phasen-Provenance-Lane wurde nach dem Erstdeploy auf Operator-Entscheidung entfernt (A2 in [specification.md](specification.md), 2026-06-10), zugunsten eines ungestörten Leseflusses.

## Designsystem

### Farbe

```
Hintergrund:        #ffffff
Text:               #1a1a1a
Akzent (Hover):     #d5d5d5
Akzent (subtler):   #e0e0e0   (Borders)
Code-Hintergrund:   #f5f5f5
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
- URL-Update: Wenn ein Panel geöffnet wird, ändert sich der URL-Hash entsprechend (`#promptotyping-document-data`). Browser-Back schließt das Panel.

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

Im Paper-Section-3-Bereich erscheint eine Tabelle aller gespiegelten Vorlagen (Katalog und Funktionsnamen aus der Vault-Konvention, seit 2026-07-19 englisch):

| Vorlage | Funktion | Datei | Typ | Version |
|---|---|---|---|---|
| Index | Navigation, Begriffslexikon | `INDEX.md` | Knowledge | … |
| Project | Charter | `project.md` | Knowledge | … |
| ... | ... | ... | ... | ... |

Klickbare Zeilen, beim Klick öffnet das Side-Panel mit der vollen Vorlagen-Spec.

### Case-Study-Karten

Im Paper-Section-4-Bereich erscheinen Case-Study-Karten, gruppiert nach der Use-Case-Typologie des Papers (ADR-8-Nachtrag; das interne Genre-Vokabular erscheint nicht in der öffentlichen UI):

```
Origin Point
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

Karten haben Border `#e0e0e0`, kein Schatten, padding `1rem`, Hover-State mit hellgrauem Hintergrund. "Mehr →"-Button nur bei Case Studies mit Tiefenseite sichtbar (`deep_page` in `data/case-studies.json`).

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
