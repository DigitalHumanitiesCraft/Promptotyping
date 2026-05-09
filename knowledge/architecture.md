---
title: Architecture
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
  name: Vorlage Architecture
  version: 0.1
  url: https://dhcraft.org/Promptotyping/#vorlage-architecture-v0.1
topics: ["[[Web Standards]]", "[[Static Sites]]", "[[GitHub Pages]]"]
knowledge-sources:
  standards:
    HTML5: https://html.spec.whatwg.org/
    CSS3: https://www.w3.org/Style/CSS/
    Markdown: https://daringfireball.net/projects/markdown/
    JSON Schema: https://json-schema.org/
    IntersectionObserver API: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
  vocabularies:
    GitHub Pages: https://docs.github.com/en/pages
    marked.js: https://marked.js.org/
related: [INDEX, project, specification, design, journal]
---

# Architecture

Bauplan der Site. Vanilla Tech-Stack, GitHub-Pages-natives Hosting, Single-Page mit clientseitigem Routing.

## Stack

- **Hosting**: GitHub Pages, Branch `main`, Source Root
- **HTML5/CSS3/JS**: Vanilla, kein Framework, kein Build-Step
- **Markdown-Parser**: marked.js v9.1.6, vendoriert in `assets/vendor/marked.min.js`
- **Custom-Extension** für Klassen-Tags (siehe Sektion *Custom-Extension* unten)
- **Schriften**: Inter (Google Fonts oder lokal hostbar), Consolas (System-Fallback) für Code

## Komponenten

### `index.html`
Einstiegspunkt. Lädt CSS, vendored JS, Custom JS. Enthält Skeleton mit drei Spalten (Inhaltsverzeichnis links, Lesefluss zentral, Side-Panel rechts) plus Phasen-Provenance-Lane als CSS-Schicht. Lädt initial das Paper aus `_content/paper/`.

### `404.html`
Subpath-Routing-Fallback. Identische Struktur wie `index.html`, aber mit zusätzlichem JavaScript am Anfang, das den angefragten Pfad parst und auf den entsprechenden Anker rewritet. Details in Sektion *URL-Routing*.

### `assets/css/style.css`
DHCraft-Designsystem. CSS-Variablen für Farben, Schriften, Spacings. Phasen-Lane-CSS (`.phase-preparation` etc.). Side-Panel-Layout (transform-basierter Slider). Mobile-Breakpoints.

### `assets/js/app.js`
Hauptlogik. Beim `DOMContentLoaded`:
1. Paper-Sektionen laden und rendern (sequenziell aus `_content/paper/01-introduction.md` bis `06-discussion.md`)
2. Vorlagen-Tabelle und Case-Study-Karten in die entsprechenden Sektionen einfügen
3. Glossar-Trigger-Spans aktivieren (Hover-Tooltips, Klick-Side-Panels)
4. URL-Hash auswerten und ggf. Side-Panel öffnen
5. IntersectionObserver für Lazy-Loading der unteren Paper-Sektionen registrieren

### `assets/js/modules/frontmatter-inspector.js`
Komponente in der Vorlagen-Sektion. Texteingabe für `template:`-URI (z.B. `https://dhcraft.org/Promptotyping/#vorlage-data-v0.2`). Bei Eingabe extrahiert es den Anker-Namen, lädt die entsprechende Vorlagen-Markdown-Datei und rendert sie live darunter.

### `assets/js/modules/case-study-filter.js`
Komponente in der Case-Study-Sektion. Filter-Bar (Genre, Status, Demo-Verfügbarkeit) und Sortierung. Liest `data/case-studies.json` und filtert client-seitig.

### `assets/vendor/marked.min.js`
Vendored Markdown-Parser. Custom-Extension in `app.js` registriert für Klassen-Tags.

## Custom-Extension für marked.js

marked.js parst out-of-the-box keinen Pandoc-style-Class-Syntax `{:.klassen-name}`. Diese Erweiterung ist nötig, weil die Phasen-Provenance-Lane Klassen pro Absatz braucht.

**Implementierungsweg.** marked.js v9 unterstützt eine Tokenizer-API. Ein Tokenizer für Paragraph wird erweitert, der vor dem Standard-Paragraph-Match nach `{:.klassenname}\n` am Absatz-Anfang sucht. Wenn gefunden, wird die Klasse extrahiert und der Rest als normaler Paragraph getokenized. Der `paragraph`-Renderer-Hook fügt dann das `class="..."`-Attribut ans `<p>`-Element.

```javascript
// In assets/js/app.js
marked.use({
  extensions: [{
    name: 'classedParagraph',
    level: 'block',
    start(src) { return src.match(/^\{:\.[a-z-]+\}/)?.index; },
    tokenizer(src, tokens) {
      const match = /^\{:\.([a-z-]+)\}\n([\s\S]+?)(?:\n\n|$)/.exec(src);
      if (match) {
        return {
          type: 'classedParagraph',
          raw: match[0],
          className: match[1],
          tokens: this.lexer.inline(match[2])
        };
      }
    },
    renderer(token) {
      const inner = this.parser.parseInline(token.tokens);
      return `<p class="${token.className}">${inner}</p>\n`;
    }
  }]
});
```

**Akzeptierte Klassen** (validiert beim Tokenizer): `phase-preparation`, `phase-exploration`, `phase-distillation`, `phase-implementation`. Andere Klassen werden ignoriert (Fallback auf normalen Paragraph), um nicht versehentlich beliebige CSS-Klassen ins HTML einzuschleusen.

**Absätze ohne Phasen-Klasse**: Code-Blöcke, Listen, Zitate, Tabellen. Sie haben keine Phasen-Lane-Markierung — die Lane ist also nicht durchgängig, sondern bedeckt nur Fließtext-Absätze. Das ist akzeptabel, weil Phasen-Zuordnung für strukturelle Elemente ohnehin keinen Sinn ergibt.

## Datenfluss

```
_content/                           Markdown-Inhalte (gespiegelt aus Vault)
├── paper/01-introduction.md        ← Pollin 2026 Section 1
├── paper/02-terms-positioning.md   ← Pollin 2026 Section 2
├── paper/03-four-phases.md         ← Pollin 2026 Section 3
├── paper/04-projects.md            ← Pollin 2026 Section 4
├── paper/05-epistemic-infrastructure.md
├── paper/06-discussion.md
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

Beim manuellen Spiegeln: Markdown-Dateien werden gespiegelt, JSON-Dateien werden aus den Markdown-Frontmatters extrahiert.

## JSON-Schema für `data/case-studies.json`

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["version", "case_studies"],
  "properties": {
    "version": {"type": "string", "description": "Schema-Version, z.B. '0.2'"},
    "generated": {"type": "string", "format": "date", "description": "Datum der Generierung"},
    "case_studies": {
      "type": "array",
      "items": {
        "type": "object",
        "required": ["id", "name", "genre", "status"],
        "properties": {
          "id": {"type": "string", "description": "Anker-Name, z.B. 'herdata' (für #case-herdata)"},
          "name": {"type": "string", "description": "Anzeige-Name, z.B. 'HerData'"},
          "genre": {
            "type": "string",
            "enum": ["HerData-Genre", "Editions-Genre", "Externdaten-Genre", "Klawiter-Typ", "Sonderfall"]
          },
          "status": {
            "type": "string",
            "enum": ["aktiv", "abgeschlossen", "archiviert", "wartend"]
          },
          "summary": {"type": "string", "description": "Ein-Satz-Charakterisierung für die Karte"},
          "repo_url": {"type": "string", "format": "uri"},
          "demo_url": {"type": "string", "format": "uri", "description": "Optional"},
          "vault_doc": {"type": "string", "description": "Pfad zur Vault-Quelle"},
          "deep_page": {
            "type": "boolean",
            "description": "Ob diese Case Study eine Tiefenseite mit ausführlicher Charakterisierung hat"
          },
          "deep_content": {
            "type": "string",
            "description": "Markdown-Inhalt für die Tiefenseite, falls deep_page=true"
          }
        }
      }
    }
  }
}
```

Acht Case Studies haben `deep_page: true` (HerData, Klawiter-Rescue, zbz-ocr-tei, M3GIM, Notker-Edition, CorrespExplorer, VetMedAI-Wissensbilanz, Agentic Edition Pipeline). Die übrigen 16+ haben `deep_page: false` und erscheinen nur als Karten in der Listenübersicht.

## URL-Routing

### Anker-Routing (Standard)
Browser-natives `location.hash`. Beispiel: `https://dhcraft.org/Promptotyping/#vorlage-data-v0.2` lädt die Single-Page, scrollt zum Element mit ID `vorlage-data-v0.2`, JavaScript erkennt den Anker-Typ (`vorlage-*`) und öffnet automatisch das Side-Panel mit der vollen Vorlagen-Spec.

### Subpath-Aliase via `404.html`
GitHub Pages liefert für jede Pfad-Anfrage standardmäßig eine 404-Seite, wenn die Datei nicht existiert. Der Trick: `404.html` ist eine Kopie von `index.html` mit JavaScript am Anfang, das den Pfad parst und auf den entsprechenden Anker rewritet.

```javascript
// Erste Zeile in 404.html, vor dem normalen app.js
(function() {
  const path = window.location.pathname.replace(/^\/Promptotyping\//, '').replace(/\/$/, '');
  const segments = path.split('/');

  let anchor = null;
  if (segments[0] === 'vorlagen' && segments[1]) {
    anchor = segments[2]
      ? `vorlage-${segments[1]}-${segments[2]}`   // /vorlagen/data/v0.2 → vorlage-data-v0.2
      : `vorlage-${segments[1]}`;                  // /vorlagen/data → vorlage-data
  } else if (segments[0] === 'konzepte' && segments[1]) {
    anchor = `konzept-${segments[1]}`;
  } else if (segments[0] === 'case-studies' && segments[1]) {
    anchor = `case-${segments[1]}`;
  } else if (segments[0] === 'konvention' && segments[1]) {
    anchor = `konvention-${segments[1]}`;
  } else if (segments[0] === 'paper' && segments[1]) {
    anchor = `paper-section-${segments[1]}`;
  } else if (segments[0] === 'glossar') {
    anchor = 'glossar';
  } else if (segments[0] === 'literatur') {
    anchor = 'literatur';
  }

  if (anchor) {
    window.history.replaceState({}, '', `/Promptotyping/#${anchor}`);
  } else {
    // Echter 404, zeige Fehler-Seite
    document.getElementById('error-message').style.display = 'block';
  }
})();
```

Die Anker-Konvention ist in [specification.md](specification.md), A4 dokumentiert.

## Build und Deployment

**Lokale Entwicklung**: `python -m http.server 8000` im Repo-Root, Browser auf `http://localhost:8000`.

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
│   └── promptotyping-logo.png
└── data/
    ├── glossar.json
    ├── vorlagen.json
    └── case-studies.json
```

## Performance

- **Initiale Last**: HTML + CSS + JS + erste Paper-Sektion (Introduction). Ca. 60-80 KB übertragene Größe.
- **Lazy-Loading der späteren Paper-Sektionen** via IntersectionObserver. Sektion wird geladen, wenn der Viewport sich auf 200px Distanz nähert. Implementation:

```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const sectionId = entry.target.dataset.sectionId;
      loadAndRenderSection(sectionId);
      observer.unobserve(entry.target);
    }
  });
}, { rootMargin: '200px' });

document.querySelectorAll('.paper-section-placeholder').forEach(el => observer.observe(el));
```

- **Side-Panel-Inhalte**: Werden erst geladen, wenn das Panel geöffnet wird. Cache nach erstem Öffnen.
- **Marked.js**: ~50KB, vendoriert. Kein CDN-Risiko.

## Sicherheit und Datenschutz

- **Kein Backend**, keine Server-Side-Logik, keine API-Calls, keine Datenbank
- **YouTube-Embeds**: `youtube-nocookie.com`-Variante
- **Kein Tracking**: Kein Google Analytics, kein Fingerprinting
- **Externe Live-Demo-iframes**: mit `sandbox`-Attribut wo möglich

## Browser-Kompatibilität

- Modern Browsers (Chrome 100+, Firefox 100+, Safari 15+, Edge 100+)
- Mobile Safari iOS 15+, Chrome Android 100+
- IntersectionObserver: nativer Support in allen Targets, kein Polyfill nötig

## Migration der bestehenden Komponenten

- Altes `prototype/data.json` → Schablone in `c:\tmp`, neue `data/case-studies.json` wird in Sprint 3 frisch generiert (Schema oben)
- Altes `prototype/styles.css` → vollständig neu, DHCraft-Designsystem (siehe [design.md](design.md))
- Altes `prototype/app.js` → vollständig neu mit Custom-Extension für marked.js
- Alte interaktive Module (Vault-Explorer, Context-Rot-Viz, Sycophancy-Trap): nicht migriert
