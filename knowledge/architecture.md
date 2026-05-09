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
  url: https://dhcraft.org/Promptotyping/promptotyping-document/architecture
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-architecture
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
- **YAML-Parser**: js-yaml v4.1.0, vendoriert in `assets/vendor/js-yaml.min.js` (für Frontmatter-Inspector)
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
1. Paper-Sektionen laden und rendern (sequenziell aus `_content/paper/01-introduction.md` bis `_content/paper/07-conclusion.md`, References als `_content/literatur.md`)
2. Vorlagen-Tabelle und Case-Study-Karten in die entsprechenden Sektionen einfügen
3. Glossar-Trigger-Spans aktivieren (Hover-Tooltips, Klick-Side-Panels)
4. URL-Hash auswerten und ggf. Side-Panel öffnen
5. IntersectionObserver für Lazy-Loading der unteren Paper-Sektionen registrieren

### `assets/js/modules/frontmatter-inspector.js`
Paste-Live-Render-Modul in der Vorlagen-Sektion. Textarea für ganzen YAML-Frontmatter-Block, nicht nur die URL. Beim Eingeben (debounced, 300ms): js-yaml parst, extrahiert `template.url` (oder `template.alias`), validiert URL gegen Site-Anker-Schema, öffnet Side-Panel mit gerenderter Vorlage. Default-Wert ist ein Beispiel-Frontmatter mit korrekt gesetztem `template:`-Feld. Implementations-Details in Sektion *Frontmatter-Inspector-Implementation* unten.

### `assets/js/modules/case-study-filter.js`
Komponente in der Case-Study-Sektion. Filter-Bar (Genre, Status, Demo-Verfügbarkeit) und Sortierung. Liest `data/case-studies.json` und filtert client-seitig.

### `assets/vendor/marked.min.js`
Vendored Markdown-Parser. Custom-Extension in `app.js` registriert für Klassen-Tags.

### `assets/vendor/js-yaml.min.js`
Vendored YAML-Parser (js-yaml v4.1.0). Verwendet im Frontmatter-Inspector, um eingegebene YAML-Blöcke robust zu parsen — eigene Regex-Lösung wäre fragil bei verschachtelten Mappings, Quoting, Multi-Line-Strings. Bibliotheksgröße ca. 40KB minified.

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
_content/                                       Markdown-Inhalte (gespiegelt aus Vault)
├── paper/01-introduction.md                    ← Pollin 2026 Section 1
├── paper/02-terms-positioning.md               ← Pollin 2026 Section 2
├── paper/03-four-phases.md                     ← Pollin 2026 Section 3
├── paper/04-projects.md                        ← Pollin 2026 Section 4
├── paper/05-epistemic-infrastructure.md        ← Pollin 2026 Section 5
├── paper/06-discussion.md                      ← Pollin 2026 Section 6
├── paper/07-conclusion.md                      ← Pollin 2026 Section 7
├── literatur.md                                ← Pollin 2026 References (separater Anker)
├── promptotyping-document/data.md              ← Vault: Vorlage Datengrundlage v0.1
├── promptotyping-document/journal.md           ← Vault: Vorlage Journal v0.1
├── ... (sechs weitere Vorlagen, ein Slug pro File)
├── case-studies/herdata.md                     ← Vault: Case Studies/herdata.md
├── ... (24+ weitere Case Studies)
└── glossar.md                                  ← Synthese aus Vault-Wissensdokumenten

data/                                           JSON-Datenfutter für JavaScript
├── glossar.json                                ← strukturierte Form von glossar.md
├── promptotyping-documents.json                ← strukturierte Form der Vorlagen-Tabelle
└── case-studies.json                           ← strukturierte Form der Case-Study-Karten
```

Status zum Sprint-1-Start: `_content/paper/01-…07-…md` und `_content/literatur.md` sind angelegt (8 Files, ohne Phasen-Klassen-Tags). Sektionen `_content/promptotyping-document/`, `_content/case-studies/`, `_content/glossar.md` werden in Sprint 2-4 angelegt.

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
Browser-natives `location.hash`. Beispiel: `https://dhcraft.org/Promptotyping/#promptotyping-document-data` lädt die Single-Page, scrollt zum Element mit ID `promptotyping-document-data`, JavaScript erkennt den Anker-Typ (`promptotyping-document-*`) und öffnet automatisch das Side-Panel mit der vollen Vorlagen-Spec. Snapshot-Anker `#promptotyping-document-data-v0.1` zeigt auf denselben Sektions-Container, springt aber an die Versions-Markierung innerhalb der Vorlagen-Sektion.

### Subpath-Aliase via `404.html`
GitHub Pages liefert für jede Pfad-Anfrage standardmäßig eine 404-Seite, wenn die Datei nicht existiert. Der Trick: `404.html` ist eine Kopie von `index.html` mit JavaScript am Anfang, das den Pfad parst und auf den entsprechenden Anker rewritet.

```javascript
// Erste Zeile in 404.html, vor dem normalen app.js
(function() {
  // Hash-Suffix (z.B. "v0.1") muss vor pathname-Auswertung erhalten bleiben,
  // damit /promptotyping-document/data#v0.1 als Snapshot adressierbar ist.
  const incomingHash = window.location.hash.replace(/^#/, '');
  const path = window.location.pathname.replace(/^\/Promptotyping\//, '').replace(/\/$/, '');
  const segments = path.split('/');

  let anchor = null;
  if (segments[0] === 'promptotyping-document' && segments[1]) {
    // /promptotyping-document/data       → promptotyping-document-data
    // /promptotyping-document/data#v0.1  → promptotyping-document-data-v0.1
    anchor = incomingHash.match(/^v[\d.]+$/)
      ? `promptotyping-document-${segments[1]}-${incomingHash}`
      : `promptotyping-document-${segments[1]}`;
  } else if (segments[0] === 'konzepte' && segments[1]) {
    anchor = `konzept-${segments[1]}`;
  } else if (segments[0] === 'case-studies' && segments[1]) {
    anchor = `case-${segments[1]}`;
  } else if (segments[0] === 'konvention' && segments[1]) {
    anchor = `konvention-${segments[1]}`;
  } else if (segments[0] === 'paper' && segments[1]) {
    // /paper/3-four-phases → abschnitt-3-four-phases
    anchor = `abschnitt-${segments[1]}`;
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

## Frontmatter-Inspector-Implementation

Der Inspector implementiert die Selbstdemonstration aus A11. Eine Textarea, ein Status-Feld, ein Side-Panel-Trigger.

```javascript
// assets/js/modules/frontmatter-inspector.js
import { resolveTemplateUrl, openTemplatePanel } from '../app.js';

const DEFAULT_FRONTMATTER = `---
title: Datengrundlage
template:
  name: Vorlage Datengrundlage
  version: 0.1
  url: https://dhcraft.org/Promptotyping/promptotyping-document/data
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-data
---`;

const SITE_BASE = 'https://dhcraft.org/Promptotyping/';

function initInspector(rootEl) {
  const textarea = rootEl.querySelector('textarea[name="frontmatter"]');
  const statusEl = rootEl.querySelector('.inspector-status');
  textarea.value = DEFAULT_FRONTMATTER;

  let timer = null;
  textarea.addEventListener('input', () => {
    clearTimeout(timer);
    timer = setTimeout(() => parseAndResolve(textarea.value, statusEl), 300);
  });

  // Initialer Render mit Default-Frontmatter
  parseAndResolve(textarea.value, statusEl);
}

function parseAndResolve(input, statusEl) {
  // 1. YAML-Frontmatter aus Block extrahieren (zwischen --- ... ---)
  const fmMatch = /^---\n([\s\S]+?)\n---/.exec(input);
  if (!fmMatch) {
    statusEl.textContent = 'Kein Frontmatter-Block gefunden (--- ... ---).';
    return;
  }

  // 2. js-yaml parst den YAML-Inhalt
  let parsed;
  try {
    parsed = jsyaml.load(fmMatch[1]);
  } catch (e) {
    statusEl.textContent = `YAML-Fehler: ${e.message}`;
    return;
  }

  // 3. template.url oder template.alias extrahieren
  const tmpl = parsed?.template;
  if (!tmpl || (!tmpl.url && !tmpl.alias)) {
    statusEl.textContent = 'Kein template:-Feld mit url oder alias gefunden.';
    return;
  }
  const url = tmpl.url || tmpl.alias;

  // 4. URL gegen Site-Anker-Schema validieren
  if (!url.startsWith(SITE_BASE)) {
    statusEl.textContent = `URL zeigt nicht auf ${SITE_BASE}.`;
    return;
  }

  // 5. Anker oder Subpath in Anker-Form normalisieren
  const anchor = resolveTemplateUrl(url);
  if (!anchor) {
    statusEl.textContent = 'URL passt nicht zum Vorlagen-Anker-Schema.';
    return;
  }

  statusEl.textContent = `Vorlage erkannt: ${tmpl.name} v${tmpl.version}`;
  openTemplatePanel(anchor);
}

document.querySelectorAll('[data-component="frontmatter-inspector"]')
  .forEach(initInspector);
```

`resolveTemplateUrl(url)` ist eine Helper-Funktion in `app.js`, die sowohl Subpath-URLs (`/promptotyping-document/data` oder `/promptotyping-document/data#v0.1`) als auch Hash-URLs (`#promptotyping-document-data`, `#promptotyping-document-data-v0.1`) auf den kanonischen Hash-Anker abbildet. Das ist dieselbe Logik, die `404.html` für Subpath-Aliase verwendet — ausgelagert in eine wiederverwendbare Funktion.

`openTemplatePanel(anchor)` öffnet das Side-Panel mit der gerenderten Vorlage. Die Vorlagen-Markdown-Datei wird per `fetch('_content/promptotyping-document/data.md')` geladen (Slug-zu-Datei-Mapping eindeutig: ein File pro Slug, derzeit alle in v0.1), durch marked.js gerendert, ins Side-Panel injiziert. Cache nach erstem Öffnen.

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
│   ├── paper/                      # 7 Section-Files (01-07)
│   ├── promptotyping-document/     # 8 Vorlagen-Spiegel (ein File pro Slug)
│   ├── case-studies/               # 24+ Case Studies
│   ├── glossar.md
│   └── literatur.md                # References, eigener Anker
├── assets/
│   ├── css/style.css
│   ├── js/
│   │   ├── app.js
│   │   └── modules/
│   │       ├── frontmatter-inspector.js
│   │       └── case-study-filter.js
│   ├── vendor/
│   │   ├── marked.min.js
│   │   └── js-yaml.min.js
│   └── promptotyping-logo.png
└── data/
    ├── glossar.json
    ├── promptotyping-documents.json
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
