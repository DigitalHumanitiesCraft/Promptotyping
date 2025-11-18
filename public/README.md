# The Living Paper - Promptotyping

**Interaktives wissenschaftliches Paper: "Jenseits von Vibe Coding"**

Eine explorable explanation zur Promptotyping-Methode mit drei interaktiven Modulen.

---

## 📖 Übersicht

Dieses Projekt transformiert einen statischen wissenschaftlichen Artikel in eine "Living Paper" - eine interaktive Single-Page-Application ohne Frameworks (Vanilla JS/CSS).

### Kernkonzept

**Von statischer Dokumentation zu interaktiver Exploration:**
- Traditionelle Papers präsentieren Konzepte passiv
- The Living Paper macht Konzepte **erlebbar**
- Interaktive Module illustrieren epistemische Herausforderungen

---

## 🎯 Implementierte Module

### 1. Context Rot Visualization
**Zweck:** Visualisiert das "Lost in the Middle" Phänomen

**Features:**
- Canvas-basierte U-Kurve-Visualisierung
- Interaktiver Slider (1k-128k Tokens)
- Farbcodierung: Grün (gut) → Rot (verloren)
- Dynamische "Danger Zone" im mittleren Bereich

**Technologie:** HTML5 Canvas + Vanilla JS

**Datei:** [app.js:549-723](../prototype/app.js)

---

### 2. Vault Explorer
**Zweck:** Zeigt "Source Available Literacy" durch Markdown-Vault

**Features:**
- Obsidian-inspiriertes Dark Theme
- File-Browser mit Sidebar
- Markdown-Rendering mit marked.js
- 5 Promptotyping-Dokumente:
  - DATA.md
  - REQUIREMENTS.md
  - DESIGN.md
  - JOURNAL.md
  - INSTRUCTIONS.md

**Technologie:** Fetch API + Markdown Parsing

**Datei:** [app.js:725-806](../prototype/app.js)

**Datenquelle:** [mock_vault.json](../prototype/mock_vault.json)

---

### 3. Sycophancy Trap Simulator
**Zweck:** Demonstriert LLM-Sycophancy durch Simulation

**Features:**
- Chat-Interface mit User/Assistant Messages
- Pattern-basierte Manipulation-Erkennung:
  - Bribing (Geld-Angebote)
  - Authority Bias ("Ich bin Experte")
  - Agreement Seeking ("oder?")
- Zweifarbige Responses:
  - Gelb: Sycophantic (falsche Zustimmung)
  - Blau: Critical (korrekte Antwort)
- Suggestion-Buttons für schnelle Tests

**Technologie:** DOM Manipulation + Regex-Pattern-Matching

**Datei:** [app.js:808-983](../prototype/app.js)

---

## 🏗️ Architektur

### Dateistruktur
```
public/
├── index.html              # Entry Point
├── styles.css              # Design System
├── app.js                  # Application Logic
├── paper-content-living.md # Paper Content
├── mock_vault.json         # Vault Data
└── data/
    ├── paper.json          # (Optional) Structured Paper Data
    └── vault.json          # (Optional) Real Project Data
```

### Module-System

**Initialisierung:**
```javascript
// 1. Page Load
document.addEventListener('DOMContentLoaded', async () => {
  await loadData();
  await renderPaperContent();  // Loads paper-content-living.md
  initInteractiveModules();    // Finds placeholders, renders modules
});

// 2. Module Rendering
initInteractiveModules() {
  // Find all <div class="module-placeholder" data-module="...">
  // Replace with interactive component
}
```

**Module-Placeholder-Syntax (in Markdown):**
```markdown
<div class="module-placeholder" data-module="context-rot-viz"></div>
<div class="module-placeholder" data-module="vault-explorer"></div>
<div class="module-placeholder" data-module="sycophancy-trap"></div>
```

---

## 🎨 Design-System

### Farbpalette
Inspiriert vom Promptotyping-Logo (Waldgrün + Goldgelb):

```css
--color-primary: #2d5016       /* Deep Forest Green */
--color-accent: #d4a017        /* Golden Yellow */
--color-text: #1a1a1a          /* Near Black */
--color-text-muted: #5a6c57    /* Moss Green */
--color-border: #d4d8d0        /* Light Grey-Green */
```

### Typografie
- **Serif:** Crimson Text (Headings, Reading Content)
- **Sans:** Inter (UI Elements, Navigation)
- **Mono:** Monaco (Code, Technical Content)

### Layout
- **Grid-basiert:** 1fr 800px 320px 1fr
  - Col 1: Spacer
  - Col 2: Reading Area (Paper Content)
  - Col 3: Meta Sidebar (Tutorial)
  - Col 4: Spacer
- **Sticky Elements:** Header, Narrative Nav, Sidebar

---

## 🔧 Technologie-Stack

**Core:**
- Vanilla JavaScript (ES6+)
- HTML5 Canvas (Context Rot Viz)
- CSS Grid/Flexbox
- Marked.js (Markdown Rendering)

**Libraries:**
- [marked.js](https://marked.js.org/) v9.1.6 (Markdown Parser)
- Google Fonts (Crimson Text, Inter)

**No Frameworks:**
- Kein React/Vue/Svelte
- Keine Build-Tools (kein Webpack/Vite)
- Keine State-Management-Libraries

**Warum Vanilla?**
- Demonstriert Promptotyping ohne Framework-Overhead
- Reduziert Dependencies (weniger Context Rot)
- Maximale Performance
- Einfaches Deployment (GitHub Pages)

---

## 🚀 Installation & Ausführung

### Lokale Entwicklung

**Option 1: Python Simple Server**
```bash
cd public
python -m http.server 8000
# Open http://localhost:8000
```

**Option 2: Node.js http-server**
```bash
npm install -g http-server
cd public
http-server -p 8000
# Open http://localhost:8000
```

**Option 3: VS Code Live Server**
1. Installiere Extension: "Live Server"
2. Rechtsklick auf `index.html`
3. "Open with Live Server"

### Deployment (GitHub Pages)

```bash
# 1. Build ist nicht nötig (statische Seite)
# 2. Push to GitHub
git add .
git commit -m "feat: Add Living Paper"
git push origin main

# 3. Enable GitHub Pages
# Settings → Pages → Source: main branch → /public folder
# URL: https://username.github.io/Promptotyping/
```

---

## 📝 Content-Workflow

### Paper-Content bearbeiten

1. Öffne [paper-content-living.md](../prototype/paper-content-living.md)
2. Markdown-Syntax verwenden
3. Module-Platzhalter einfügen:
   ```markdown
   ## Sektion 2
   Text...

   <div class="module-placeholder" data-module="context-rot-viz"></div>

   Mehr Text...
   ```
4. Speichern → Browser refresh

### Neues Modul hinzufügen

**1. CSS hinzufügen** ([styles.css](../prototype/styles.css)):
```css
/* === My New Module === */
.my-module {
  /* Styles... */
}
```

**2. JS-Funktion schreiben** ([app.js](../prototype/app.js)):
```javascript
function renderMyModule(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = `
    <div class="my-module">
      <!-- HTML structure -->
    </div>
  `;

  // Add interactivity
}
```

**3. Registrieren** in `initInteractiveModules()`:
```javascript
if (moduleType === 'my-module') {
  renderMyModule(containerId);
}
```

**4. Verwenden** in Markdown:
```markdown
<div class="module-placeholder" data-module="my-module"></div>
```

---

## 🧪 Testing

### Browser-Kompatibilität
- ✅ Chrome 120+ (tested)
- ✅ Firefox 121+ (tested)
- ✅ Safari 17+ (tested)
- ✅ Edge 120+ (tested)

### Performance-Targets
- Initial Load: < 2s
- Module Render: < 500ms
- Canvas Animation: 60fps
- Lighthouse Score: > 90

### Manual Testing Checklist

**Context Rot Viz:**
- [ ] Canvas rendert bei Page Load
- [ ] Slider-Änderungen updaten Kurve smooth
- [ ] U-Kurve vertieft sich bei höheren Token-Werten
- [ ] "Danger Zone" sichtbar in der Mitte
- [ ] Responsive (funktioniert auf Mobile)

**Vault Explorer:**
- [ ] Dateien laden von mock_vault.json
- [ ] Erster File (DATA.md) ist aktiv bei Load
- [ ] Klick auf File wechselt Content
- [ ] Markdown rendert korrekt (Headings, Listen, Code)
- [ ] Dark Theme konsistent
- [ ] Scrolling funktioniert in Content-Area

**Sycophancy Trap:**
- [ ] Initial Message erscheint
- [ ] Input akzeptiert Text
- [ ] Enter-Taste sendet Message
- [ ] Suggestion-Buttons füllen Input
- [ ] Sycophantic Response (gelb) bei "2+2=5, oder?"
- [ ] Critical Response (blau) bei "Was ist 2+2?"
- [ ] Chat scrollt automatisch nach unten

---

## 📚 Use Cases & Fallstudien

Die Module referenzieren echte Promptotyping-Projekte:

1. **REALonline Rauminventar** (Vault-Daten)
2. **Lucina Digital Edition** (5 Iterationen)
3. **CVMA Stained Glass** (SPARQL-Integration)
4. **Aldersbach Monastery** (Finanzdaten)
5. **Hans Gross Kriminalmuseum** (Spatial Search)
6. **Stefan Zweig Digital** (Timeline-Annotations)

Alle sind verfügbar als Live-Demos und Repositories.

---

## 🔬 Promptotyping-Dokumente

Das Projekt selbst wurde mit Promptotyping entwickelt:

- **DATA.md**: Datenstruktur (Module-Specs)
- **REQUIREMENTS.md**: Funktionale Anforderungen
- **DESIGN.md**: UI/UX-Spezifikationen
- **JOURNAL.md**: Entwicklungsdokumentation
- **INSTRUCTIONS.md**: LLM-Kontext für Claude

Diese sind **sichtbar** im Vault Explorer als Meta-Ebene.

---

## 🤝 Contributing

Dieses Projekt dient als **Referenz-Implementierung** für:
- Explorable Explanations in der Wissenschaft
- Vanilla-JS-Interaktivität ohne Frameworks
- Promptotyping-Methodik in der Praxis

**Pull Requests willkommen für:**
- Neue interaktive Module
- Übersetzungen (EN/DE)
- Performance-Optimierungen
- Accessibility-Verbesserungen

---

## 📄 Lizenz

MIT License

---

## 🙏 Credits

**Entwickelt mit:**
- Claude Sonnet 4.5 (Promptotyping-Assistant)
- Claude Code (Development Environment)
- Marked.js (Markdown Parser)

**Inspiriert von:**
- [Explorable Explanations](https://explorabl.es/) (Bret Victor)
- [Distill.pub](https://distill.pub/) (Interactive ML Papers)
- [Idyll](https://idyll-lang.org/) (Narrative Visualizations)

**Forschungskontext:**
- Zentrum für Informationsmodellierung, Uni Graz
- Digital Humanities Austria
- NFDI4Culture

---

**🌟 "The best way to understand Promptotyping is to experience it."**

[Live Demo](https://dhcraft.org/promptotyping/) | [GitHub](https://github.com/DigitalHumanitiesCraft/excellence)
