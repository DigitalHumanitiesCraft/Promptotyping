---
title: Architecture
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
  name: Vorlage Architecture
  version: 0.1
  url: https://dhcraft.org/Promptotyping/#vorlage-architecture-v0.1
topics: ["[[Web Standards]]", "[[Static Sites]]", "[[GitHub Pages]]"]
knowledge-sources:
  standards:
    HTML5: https://html.spec.whatwg.org/
    CSS3: https://www.w3.org/Style/CSS/
    Markdown: https://daringfireball.net/projects/markdown/
  vocabularies:
    GitHub Pages: https://docs.github.com/en/pages
    marked.js: https://marked.js.org/
related: [INDEX, project, data, specification, design, journal]
---

# Architecture

Bauplan der Site. Vanilla Tech-Stack, GitHub-Pages-natives Hosting, Single-Page mit clientseitigem Routing.

## Stack

- **Hosting**: GitHub Pages, Branch `main`, Source Root
- **HTML5/CSS3/JS**: Vanilla, kein Framework, kein Build-Step
- **Markdown-Parser**: marked.js v9.1.6, vendoriert in `assets/vendor/marked.min.js`
- **Custom-Extension** für Klassen-Tags (`{:.phase-preparation}`) — ergänzt marked.js um den Pandoc-style-Class-Syntax
- **Schriften**: Inter (Google Fonts) für Fließtext, Consolas (System-Fallback) für Code

## Komponenten

### `index.html`
Einstiegspunkt. Lädt CSS, vendored JS, Custom JS. Enthält Skeleton mit drei Spalten (Inhaltsverzeichnis links, Lesefluss zentral, Side-Panel rechts) plus Phasen-Provenance-Lane als CSS-Schicht. Lädt initial das Paper aus `_content/paper/`.

### `assets/css/style.css`
DHCraft-Designsystem. Variablen für Farben, Schriften, Spacings. Phasen-Lane-CSS (`.phase-preparation` etc.). Side-Panel-Layout (transform-basierter Slider). Mobile-Breakpoints (Side-Panel zu Bottom-Sheet, Phasen-Lane zu Top-Bar).

### `assets/js/app.js`
Hauptlogik. Beim `DOMContentLoaded`:
1. Paper-Sektionen laden und rendern (sequenziell aus `_content/paper/01-introduction.md` bis `06-discussion.md`)
2. Vorlagen-Tabelle und Case-Study-Karten in die entsprechenden Sektionen einfügen
3. Glossar-Trigger-Spans aktivieren (Hover-Tooltips, Klick-Side-Panels)
4. URL-Hash auswerten und ggf. Side-Panel öffnen
5. Subpath-URL-Rewrite (`/vorlagen/data/v0.2` → `#vorlage-data-v0.2`)

### `assets/js/modules/frontmatter-inspector.js`
Komponente in der Vorlagen-Sektion. Texteingabe für `template:`-URI (z.B. `https://dhcraft.org/Promptotyping/#vorlage-data-v0.2`). Bei Eingabe extrahiert es den Anker-Namen, lädt die entsprechende Vorlagen-Markdown-Datei und rendert sie live darunter. ~100 Zeilen.

### `assets/js/modules/case-study-filter.js`
Komponente in der Case-Study-Sektion. Filter-Bar (Genre, Status, Demo-Verfügbarkeit) und Sortierung. Liest `data/case-studies.json` und filtert client-seitig. ~50 Zeilen.

### `assets/vendor/marked.min.js`
Vendored Markdown-Parser. Custom-Extension in `app.js` registriert für Klassen-Tags.

## Datenfluss

```
_content/                           Build-Artefakt-Spiegel des Vault
├── paper/01-introduction.md        ← Vault: Pollin 2026 Section 1
├── paper/02-terms-positioning.md   ← Vault: Pollin 2026 Section 2
├── paper/03-four-phases.md         ← Vault: Pollin 2026 Section 3
├── paper/04-projects.md            ← Vault: Pollin 2026 Section 4
├── paper/05-epistemic-infrastructure.md  ← Vault: Pollin 2026 Section 5
├── paper/06-discussion.md          ← Vault: Pollin 2026 Section 6
├── vorlagen/data-v0.2.md           ← Vault: Vorlage Datengrundlage v0.2
├── vorlagen/journal-v0.1.md        ← Vault: Vorlage Journal v0.1
├── ... (sechs weitere Vorlagen)
├── case-studies/herdata.md         ← Vault: Case Studies/herdata.md
├── ... (24+ weitere Case Studies)
├── glossar.md                      ← Synthese aus Vault-Wissensdokumenten
└── literatur.md                    ← aus Pollin 2026 Sources

data/                               JSON-Datenfutter für JavaScript
├── glossar.json                    ← strukturierte Form von glossar.md
├── vorlagen.json                   ← strukturierte Form der Vorlagen-Tabelle
└── case-studies.json               ← strukturierte Form der Case-Study-Karten
```

Beim Build (manuell, nicht automatisiert): Markdown-Dateien werden gespiegelt, JSON-Dateien werden aus den Markdown-Frontmatters extrahiert.

## URL-Routing

### Anker-Routing (Standard)
Browser-natives `location.hash`. Beispiel: `https://dhcraft.org/Promptotyping/#vorlage-data-v0.2` lädt die Single-Page, scrollt zum Element mit ID `vorlage-data-v0.2`, JavaScript erkennt den Anker-Typ (vorlage-*) und öffnet automatisch das Side-Panel mit der vollen Vorlagen-Spec.

### Subpath-Aliase
GitHub Pages liefert für jede Pfad-Anfrage standardmäßig eine 404-Seite, wenn die Datei nicht existiert. Lösung: `404.html` rewrite — die 404-Seite ist eine Kopie von `index.html` mit JavaScript, das den Pfad parst und auf den entsprechenden Anker scrollt.

Beispiel-Logik in `404.html`:
```javascript
// /vorlagen/data/v0.2 → /#vorlage-data-v0.2
const path = window.location.pathname.replace(/^\/Promptotyping\//, '');
const match = path.match(/^vorlagen\/(\w+)\/(v[\d.]+)$/);
if (match) {
  window.location.replace(`/Promptotyping/#vorlage-${match[1]}-${match[2]}`);
}
```

Alternative: GitHub Actions, das beim Push die Subpath-Verzeichnisse als statische Verweis-Dateien generiert. Nicht für Phase 1 vorgesehen — `404.html`-Trick reicht.

## Build und Deployment

**Lokale Entwicklung**: `python -m http.server 8000` im Repo-Root, Browser auf `http://localhost:8000` öffnen.

**Deployment**: Push auf `main`, GitHub Pages baut automatisch. Source ist Repo-Root (kein `/docs`, kein `/_site`). Custom Domain `dhcraft.org/Promptotyping/` ist via DNS und CNAME konfiguriert.

**Kein Build-Step**: Keine npm-Abhängigkeiten, kein Webpack, kein Bundler. Was im Repo liegt, wird gerendert.

## Verzeichnis-Struktur

```
DigitalHumanitiesCraft/Promptotyping/
├── index.html                      # Site-Einstieg
├── 404.html                        # Subpath-Routing-Fallback
├── README.md                       # Repo-README
├── CLAUDE.md                       # Action-Layer
├── knowledge/                      # Diese Wissensbasis
│   ├── INDEX.md
│   ├── project.md
│   ├── data.md
│   ├── specification.md
│   ├── architecture.md
│   ├── design.md
│   └── journal.md
├── _content/                       # Markdown-Inhalte
│   ├── paper/
│   ├── vorlagen/
│   ├── case-studies/
│   ├── glossar.md
│   └── literatur.md
├── assets/
│   ├── css/style.css
│   ├── js/
│   │   ├── app.js
│   │   └── modules/
│   │       ├── frontmatter-inspector.js
│   │       └── case-study-filter.js
│   ├── vendor/marked.min.js
│   ├── fonts/                      # Falls Inter lokal hostet (statt Google Fonts)
│   └── promptotyping-logo.png
└── data/
    ├── glossar.json
    ├── vorlagen.json
    └── case-studies.json
```

## Performance-Erwägungen

- **Initiale Last**: HTML + CSS + JS + erste Paper-Sektion lädt sofort. Restliche Paper-Sektionen werden lazy-loaded beim Scrollen.
- **Side-Panel-Inhalte**: Werden erst geladen, wenn das Panel geöffnet wird. Cache nach erstem Öffnen.
- **Marked.js**: ~50KB, vendoriert. Kein CDN-Risiko.
- **Schriften**: Inter via Google Fonts (oder lokal gehostet, Entscheidung in `design.md`). Consolas als System-Font (kein Download).

## Sicherheit und Datenschutz

- **Kein Backend**: Keine Server-Side-Logik, keine API-Calls, keine Datenbank.
- **YouTube-Embeds**: Variante `youtube-nocookie.com` für Datenschutz.
- **Kein Tracking**: Kein Google Analytics, kein Fingerprinting.
- **Externe Links**: Live-Demo-iframes mit `sandbox`-Attribut, wo möglich.

## Browser-Kompatibilität

- Modern Browsers (Chrome 100+, Firefox 100+, Safari 15+, Edge 100+)
- Mobile Safari iOS 15+, Chrome Android 100+
- Keine IE-Unterstützung
- Kein Polyfill für `IntersectionObserver` (nativer Support in allen Targets)

## Build und Deployment-Workflow

1. Markdown-Dateien in `_content/` bearbeiten
2. JSON-Dateien in `data/` ggf. manuell synchronisieren (oder Build-Skript schreiben — out of scope für Phase 1)
3. Lokal mit `python -m http.server` testen
4. Commit auf `main`, Push
5. GitHub Pages deployt automatisch

## Migration der bestehenden Komponenten

- Altes `prototype/data.json` → `data/case-studies.json` (Schablone gesichert in `c:\tmp`)
- Altes `prototype/styles.css` → vollständig neu in `assets/css/style.css` (DHCraft-Designsystem)
- Altes `prototype/app.js` → vollständig neu in `assets/js/app.js`
- Alte Module (`Vault-Explorer`, `Context-Rot-Viz`, `Sycophancy-Trap`): gelöscht, nicht migriert
