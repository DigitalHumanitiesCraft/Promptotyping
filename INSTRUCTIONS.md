# INSTRUCTIONS.md - Implementierungsplan MVP

## Übersicht

Dieser Plan führt schrittweise zur Umsetzung des MVP (Minimum Viable Product) für das interaktive Paper. Fokus auf **umsetzbare Features** mit **Vanilla JS + CSS**.

---

## Phase 1: Projektstruktur & Setup (30 Min)

### 1.1 Ordnerstruktur erstellen

```
interactive-paper/
├── prototype/
│   ├── index.html          # Haupt-HTML-Datei
│   ├── styles.css          # Alle Styles
│   ├── app.js              # Hauptlogik
│   ├── data.json           # Strukturierte Use Cases + Paper-Sektionen
│   └── lib/
│       └── marked.min.js   # Markdown-Parser (CDN oder lokal)
├── use cases/              # Bestehende MD-Dateien
├── paper-draft.md          # Bestehend
├── README.md               # Bestehend
├── DATA.md                 # Bestehend
├── REQUIREMENTS.md         # Bestehend
├── DESIGN.md               # Bestehend
└── INSTRUCTIONS.md         # Diese Datei
```

### 1.2 Grund-HTML-Struktur

**prototype/index.html**:

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Promptotyping in den Digital Humanities</title>
  <link rel="stylesheet" href="styles.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
  <!-- Fixed Header -->
  <header class="header">
    <span class="header-title">Promptotyping</span>
    <div class="header-progress">
      <div class="progress-bar" id="progress-bar"></div>
    </div>
  </header>

  <!-- Main Content -->
  <main class="main-content" id="main-content">
    <!-- Paper-Content wird hier per JS eingefügt -->
  </main>

  <!-- Use Case Slide-In Panels (werden per JS generiert) -->
  <div id="slide-panels"></div>

  <!-- Scripts -->
  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
  <script src="app.js"></script>
</body>
</html>
```

---

## Phase 2: Daten aufbereiten (1h)

### 2.1 Use Cases als JSON strukturieren

**Manuelle Extraktion** aus `use cases/*.md` → `prototype/data.json`

Struktur (siehe DATA.md):

```json
{
  "useCases": [
    {
      "id": "szd",
      "title": "Stefan Zweig Digital Annotation Tool",
      "context": "Timeline-basiertes Annotationstool...",
      "timeInvestment": 2,
      "documentCount": 0,
      "iteration": 1,
      "category": "experimental",
      "repository": "https://github.com/...",
      "demo": "https://dhcraft.org/...",
      "blog": "https://dhcraft.org/...",
      "llms": ["Claude 4 Sonnet"],
      "tags": ["Timeline", "Annotations"],
      "processNotes": [
        "Experimentelles Vibe Coding",
        "Von Konzept zu Prototyp in 2 Stunden"
      ],
      "documents": []
    },
    {
      "id": "realonline",
      "title": "REALonline Rauminventar-Analyse Dashboard",
      "context": "Mittelalterliche Rauminventare...",
      "timeInvestment": 5,
      "documentCount": 6,
      "iteration": 1,
      "scope": "Österreichische Adelshäuser, Spätmittelalter",
      "category": "optimal",
      "repository": "https://github.com/chpollin/imareal-room-object",
      "demo": "https://chpollin.github.io/imareal-room-object/",
      "llms": ["Claude Opus 4.1", "Claude Sonnet 4.5"],
      "tags": ["Treemap", "Visualisierung", "Neo4j"],
      "processNotes": [
        "JOURNAL.md erstmals als aktives Dokument",
        "GitHub Commits als Savepoints"
      ],
      "documents": [
        {"type": "DATA", "filename": "DATA.md", "phase": "DATA"},
        {"type": "DESIGN", "filename": "DESIGN.md", "phase": "IMPLEMENTATION"},
        {"type": "INSTRUCTIONS", "filename": "INSTRUCTIONS.md", "phase": "IMPLEMENTATION"},
        {"type": "JOURNAL", "filename": "JOURNAL.md", "phase": "PROTOTYPE"},
        {"type": "REQUIREMENTS", "filename": "REQUIREMENTS.md", "phase": "REQUIREMENTS"}
      ]
    }
    // ... weitere 4 Use Cases (km, lucina, cvma, aldersbach)
  ]
}
```

**Validierung**:
- Alle 6 Use Cases vorhanden
- Alle Pflichtfelder ausgefüllt
- URLs korrekt

---

### 2.2 Paper-Content einbinden

**Option A** (Einfach): Direktes Einbetten als Markdown-String in `app.js`

```javascript
const paperContent = `
# Promptotyping
Ein Praxisbericht zur strukturierten LLM-assistierten Entwicklung in den Digital Humanities

## Abstract
Large Language Models transformieren die Softwareentwicklung fundamental...

## 1. Einleitung
Digital Humanities-Forschende benötigen...

## 2. Entwicklung des Ansatzes
...

<!-- Use Case Placeholder -->
<div class="use-case-placeholder" data-id="szd"></div>

...weiter im Text...

<div class="use-case-placeholder" data-id="realonline"></div>

...
`;
```

**Option B** (Besser): Fetch `paper-draft.md` und parsen

```javascript
async function loadPaper() {
  const response = await fetch('../paper-draft.md');
  const markdown = await response.text();
  return markdown;
}
```

**Empfehlung**: Option A für MVP (schneller), Option B für v1.1

---

## Phase 3: CSS implementieren (1.5h)

### 3.1 Variablen & Reset

**prototype/styles.css**:

```css
/* === Variablen === */
:root {
  /* Farben */
  --color-bg: #fafafa;
  --color-text: #1a1a1a;
  --color-text-muted: #737373;
  --color-border: #e5e5e5;
  --color-primary: #2563eb;
  --color-primary-hover: #1d4ed8;
  --color-accent: #0891b2;

  /* Kategorien */
  --color-experimental: #f97316;
  --color-minimal: #eab308;
  --color-optimal: #22c55e;
  --color-complex: #a855f7;

  /* Typografie */
  --font-base: 'Inter', -apple-system, sans-serif;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.563rem;
  --text-3xl: 1.953rem;
  --text-4xl: 2.441rem;

  /* Spacing */
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
}

/* === Reset === */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-base);
  font-size: var(--text-base);
  line-height: 1.75;
  color: var(--color-text);
  background: var(--color-bg);
  padding-top: 50px; /* Header-Höhe */
}

h1, h2, h3, h4, h5, h6 {
  line-height: 1.3;
  margin-bottom: 1rem;
}

h1 { font-size: var(--text-4xl); font-weight: 700; }
h2 { font-size: var(--text-3xl); font-weight: 600; margin-top: 3rem; }
h3 { font-size: var(--text-2xl); font-weight: 600; margin-top: 2rem; }

p { margin-bottom: 1.25rem; }

a {
  color: var(--color-primary);
  text-decoration: none;
}
a:hover { color: var(--color-primary-hover); text-decoration: underline; }

ul, ol { margin-left: 1.5rem; margin-bottom: 1.25rem; }
li { margin-bottom: 0.5rem; }
```

---

### 3.2 Header

```css
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  background: var(--color-bg);
  border-bottom: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--spacing-xl);
  z-index: 100;
}

.header-title {
  font-weight: 600;
  font-size: var(--text-lg);
}

.header-progress {
  width: 200px;
  height: 3px;
  background: var(--color-border);
  border-radius: 2px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: var(--color-primary);
  width: 0%;
  transition: width 0.3s ease;
}
```

---

### 3.3 Main Content

```css
.main-content {
  max-width: 700px;
  margin: 0 auto;
  padding: var(--spacing-2xl) var(--spacing-xl);
}

@media (max-width: 768px) {
  .main-content {
    padding: var(--spacing-lg) var(--spacing-md);
  }
}
```

---

### 3.4 Use Case Card

```css
.use-case-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-lg);
  margin: var(--spacing-2xl) 0;
  padding: var(--spacing-lg);
  border: 2px solid var(--color-border);
  border-left: 4px solid var(--color-accent);
  border-radius: 8px;
  background: white;
  transition: all 0.2s;
}

.use-case-card:hover {
  border-left-width: 8px;
  transform: translateX(4px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.card-content {
  flex: 1;
}

.card-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-sm);
}

.card-header h4 {
  margin: 0;
  font-size: var(--text-lg);
}

.category-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: var(--text-sm);
  font-weight: 500;
  color: white;
}

.category-badge.experimental { background: var(--color-experimental); }
.category-badge.minimal { background: var(--color-minimal); }
.category-badge.optimal { background: var(--color-optimal); }
.category-badge.complex { background: var(--color-complex); }

.card-meta {
  display: flex;
  gap: var(--spacing-md);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.card-explore {
  flex-shrink: 0;
  background: var(--color-accent);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 500;
  font-size: var(--text-base);
  cursor: pointer;
  transition: background 0.2s;
}

.card-explore:hover {
  background: #0e7490;
}

@media (max-width: 640px) {
  .use-case-card {
    flex-direction: column;
    align-items: stretch;
  }
  .card-explore {
    width: 100%;
  }
}
```

---

### 3.5 Slide Panel

```css
.slide-panel {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
  pointer-events: none;
}

.slide-panel.active {
  pointer-events: all;
}

.panel-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  opacity: 0;
  transition: opacity 0.3s;
}

.slide-panel.active .panel-overlay {
  opacity: 1;
}

.panel-content {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 500px;
  max-width: 90vw;
  background: white;
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  padding: var(--spacing-xl);
  transform: translateX(100%);
  transition: transform 0.3s ease;
}

.slide-panel.active .panel-content {
  transform: translateX(0);
}

.panel-close {
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-md);
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--color-text-muted);
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: background 0.2s;
}

.panel-close:hover {
  background: var(--color-bg);
}

.panel-header {
  margin-bottom: var(--spacing-xl);
  padding-right: 2rem; /* Space for close button */
}

.panel-header h2 {
  margin: 0 0 var(--spacing-md) 0;
  font-size: var(--text-2xl);
}

.panel-meta {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

.panel-body section {
  margin-bottom: var(--spacing-xl);
}

.panel-body h3 {
  font-size: var(--text-xl);
  margin: 0 0 var(--spacing-md) 0;
  border-bottom: 2px solid var(--color-border);
  padding-bottom: var(--spacing-sm);
}

.doc-list {
  list-style: none;
  margin: 0;
}

.doc-list li {
  display: flex;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  border-radius: 6px;
  margin-bottom: var(--spacing-sm);
}

.doc-list li:hover {
  background: var(--color-bg);
}

.link-row {
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

.btn-link {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 2px solid var(--color-primary);
  border-radius: 6px;
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s;
}

.btn-link:hover {
  background: var(--color-primary);
  color: white;
  text-decoration: none;
}

.note-list {
  list-style: disc;
  margin-left: 1.5rem;
}
```

---

### 3.6 Comparison Table

```css
.table-filters {
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
  flex-wrap: wrap;
}

.filter-chip {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s;
  font-size: var(--text-sm);
}

.filter-chip input[type="checkbox"] {
  margin: 0;
}

.filter-chip:has(input:checked) {
  background: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: var(--spacing-lg);
}

.comparison-table th {
  text-align: left;
  padding: 0.75rem;
  background: white;
  border-bottom: 2px solid var(--color-border);
  font-weight: 600;
}

.comparison-table td {
  padding: 0.75rem;
  border-bottom: 1px solid var(--color-border);
}

.comparison-table tr:hover {
  background: var(--color-bg);
}

@media (max-width: 768px) {
  .comparison-table {
    font-size: var(--text-sm);
  }
  .comparison-table th,
  .comparison-table td {
    padding: 0.5rem;
  }
}
```

---

## Phase 4: JavaScript-Logik (2h)

### 4.1 App-Struktur

**prototype/app.js**:

```javascript
// === Globale State ===
let useCasesData = [];
let currentPanel = null;

// === Initialisierung ===
document.addEventListener('DOMContentLoaded', async () => {
  await loadData();
  renderPaperContent();
  renderUseCaseCards();
  initScrollProgress();
  initPanelHandlers();
});

// === Daten laden ===
async function loadData() {
  const response = await fetch('data.json');
  const data = await response.json();
  useCasesData = data.useCases;
}

// === Paper-Content rendern ===
function renderPaperContent() {
  const mainContent = document.getElementById('main-content');

  // Option 1: Inline Markdown-String
  const paperMarkdown = `
# Promptotyping
Ein Praxisbericht zur strukturierten LLM-assistierten Entwicklung in den Digital Humanities

## Abstract
Large Language Models transformieren die Softwareentwicklung fundamental...

## 1. Einleitung
...

## 2. Entwicklung des Ansatzes

### 2.1 Praktische Erfahrungen

Zwischen Oktober 2024 und Januar 2025 entwickelten wir iterativ die Promptotyping-Methode...

<!-- Use Case Placeholder -->
<div class="use-case-placeholder" data-id="szd"></div>
<div class="use-case-placeholder" data-id="realonline"></div>
...

### 2.2 Kernerkenntnisse
...
  `;

  // Markdown zu HTML parsen (marked.js)
  const html = marked.parse(paperMarkdown);
  mainContent.innerHTML = html;
}

// === Use Case Cards rendern ===
function renderUseCaseCards() {
  useCasesData.forEach(useCase => {
    const placeholder = document.querySelector(`[data-id="${useCase.id}"]`);
    if (!placeholder) return;

    const card = createUseCaseCard(useCase);
    placeholder.replaceWith(card);
  });
}

function createUseCaseCard(useCase) {
  const card = document.createElement('div');
  card.className = 'use-case-card';
  card.innerHTML = `
    <div class="card-content">
      <div class="card-header">
        <h4>${useCase.title}</h4>
        <span class="category-badge ${useCase.category}">${capitalize(useCase.category)}</span>
      </div>
      <div class="card-meta">
        <span>⏱️ ${useCase.timeInvestment}h</span>
        <span>📄 ${useCase.documentCount} Docs</span>
        <span>🔄 Iteration ${useCase.iteration}</span>
      </div>
    </div>
    <button class="card-explore" data-panel-id="${useCase.id}">
      Explore →
    </button>
  `;

  // Event Listener für Explore-Button
  const exploreBtn = card.querySelector('.card-explore');
  exploreBtn.addEventListener('click', () => openPanel(useCase.id));

  return card;
}

// === Slide Panel öffnen ===
function openPanel(useCaseId) {
  const useCase = useCasesData.find(uc => uc.id === useCaseId);
  if (!useCase) return;

  // Panel erstellen falls noch nicht vorhanden
  let panel = document.getElementById(`panel-${useCaseId}`);
  if (!panel) {
    panel = createPanel(useCase);
    document.getElementById('slide-panels').appendChild(panel);
  }

  // Panel öffnen
  panel.classList.add('active');
  document.body.style.overflow = 'hidden';
  currentPanel = panel;
}

function createPanel(useCase) {
  const panel = document.createElement('div');
  panel.className = 'slide-panel';
  panel.id = `panel-${useCase.id}`;

  // Dokumente-Liste generieren
  const documentsHTML = useCase.documents.map(doc => `
    <li>
      <span class="doc-icon">📄</span>
      <div>
        <strong>${doc.filename}</strong><br>
        <small>${doc.phase} • ${doc.type}</small>
      </div>
    </li>
  `).join('');

  // Links generieren
  const demoLinks = Array.isArray(useCase.demo)
    ? useCase.demo.map((url, i) => `<a href="${url}" class="btn-link" target="_blank">🔗 Demo ${i+1}</a>`).join('')
    : `<a href="${useCase.demo}" class="btn-link" target="_blank">🔗 Demo</a>`;

  const extraLinks = [];
  if (useCase.video) extraLinks.push(`<a href="${useCase.video}" class="btn-link" target="_blank">🎥 Video</a>`);
  if (useCase.blog) extraLinks.push(`<a href="${useCase.blog}" class="btn-link" target="_blank">📝 Blog</a>`);
  if (useCase.slides) extraLinks.push(`<a href="${useCase.slides}" class="btn-link" target="_blank">📊 Slides</a>`);

  panel.innerHTML = `
    <div class="panel-overlay"></div>
    <div class="panel-content">
      <button class="panel-close">✕</button>

      <div class="panel-header">
        <h2>${useCase.title}</h2>
        <div class="panel-meta">
          <span class="category-badge ${useCase.category}">${capitalize(useCase.category)}</span>
          <span class="meta-text">${useCase.timeInvestment}h • ${useCase.documentCount} Docs • Iteration ${useCase.iteration}</span>
        </div>
      </div>

      <div class="panel-body">
        <section>
          <h3>Kontext</h3>
          <p>${useCase.context}</p>
          ${useCase.scope ? `<p><strong>Umfang:</strong> ${useCase.scope}</p>` : ''}
        </section>

        ${useCase.documents.length > 0 ? `
          <section>
            <h3>Promptotyping-Dokumente</h3>
            <ul class="doc-list">
              ${documentsHTML}
            </ul>
          </section>
        ` : ''}

        <section>
          <h3>Links</h3>
          <div class="link-row">
            ${demoLinks}
            <a href="${useCase.repository}" class="btn-link" target="_blank">💻 Repository</a>
            ${extraLinks.join('')}
          </div>
        </section>

        <section>
          <h3>Prozessnotizen</h3>
          <ul class="note-list">
            ${useCase.processNotes.map(note => `<li>${note}</li>`).join('')}
          </ul>
        </section>

        <section>
          <h3>Tools & LLMs</h3>
          <p><strong>LLMs:</strong> ${useCase.llms.join(', ')}</p>
          <p><strong>Tags:</strong> ${useCase.tags.join(', ')}</p>
        </section>
      </div>
    </div>
  `;

  // Event Listeners
  panel.querySelector('.panel-close').addEventListener('click', closePanel);
  panel.querySelector('.panel-overlay').addEventListener('click', closePanel);

  return panel;
}

function closePanel() {
  if (currentPanel) {
    currentPanel.classList.remove('active');
    document.body.style.overflow = '';
    currentPanel = null;
  }
}

// Escape-Taste schließt Panel
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && currentPanel) {
    closePanel();
  }
});

// === Scroll Progress ===
function initScrollProgress() {
  const progressBar = document.getElementById('progress-bar');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    progressBar.style.width = `${progress}%`;
  });
}

// === Hilfsfunktionen ===
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
```

---

### 4.2 Vergleichstabelle (Optional für MVP)

Falls Tabelle im Paper eingebettet wird:

```javascript
function renderComparisonTable() {
  const tableContainer = document.getElementById('comparison-table');

  // Filter-Checkboxen
  const categories = ['experimental', 'minimal', 'optimal', 'complex'];
  const filtersHTML = categories.map(cat => `
    <label class="filter-chip">
      <input type="checkbox" value="${cat}" checked>
      <span>${capitalize(cat)}</span>
    </label>
  `).join('');

  // Tabellen-Rows
  const rowsHTML = useCasesData.map(uc => `
    <tr data-category="${uc.category}">
      <td>${uc.title}</td>
      <td>${uc.timeInvestment}h</td>
      <td>${uc.documentCount}</td>
      <td><span class="category-badge ${uc.category}">${capitalize(uc.category)}</span></td>
      <td><a href="${Array.isArray(uc.demo) ? uc.demo[0] : uc.demo}" target="_blank">→</a></td>
    </tr>
  `).join('');

  tableContainer.innerHTML = `
    <div class="table-filters">
      ${filtersHTML}
    </div>
    <table class="comparison-table">
      <thead>
        <tr>
          <th>Projekt</th>
          <th>Zeit</th>
          <th>Docs</th>
          <th>Kategorie</th>
          <th>Demo</th>
        </tr>
      </thead>
      <tbody>
        ${rowsHTML}
      </tbody>
    </table>
  `;

  // Filter-Logik
  const checkboxes = tableContainer.querySelectorAll('input[type="checkbox"]');
  const rows = tableContainer.querySelectorAll('tbody tr');

  checkboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      const activeCategories = [...checkboxes]
        .filter(c => c.checked)
        .map(c => c.value);

      rows.forEach(row => {
        const category = row.dataset.category;
        row.style.display = activeCategories.includes(category) ? '' : 'none';
      });
    });
  });
}
```

---

## Phase 5: Testing & Refinement (1h)

### 5.1 Manuelle Tests

**Checkliste**:
- [ ] Paper lädt und wird korrekt gerendert
- [ ] Alle 6 Use Case Cards erscheinen
- [ ] Explore-Button öffnet Slide Panel
- [ ] Panel zeigt korrekte Daten (Titel, Docs, Links)
- [ ] Panel schließt mit X, Overlay-Klick, ESC
- [ ] Scroll Progress funktioniert
- [ ] Responsive auf Mobile (< 768px)
- [ ] Alle externen Links (Demo, Repo) funktionieren

### 5.2 Browser-Kompatibilität

- Chrome (neueste Version)
- Firefox (neueste Version)
- Safari (neueste Version)

### 5.3 Performance

- Lighthouse-Test: Performance > 85
- Bundle Size: JS + CSS < 50 KB

---

## Phase 6: Deployment (30 Min)

### 6.1 GitHub Pages

```bash
# Im Repository-Root
git add prototype/
git commit -m "Add interactive paper MVP"
git push origin main
```

**GitHub Settings**:
- Pages: Source = `main` branch, `/prototype` folder
- URL: `https://YOURUSER.github.io/interactive-paper/`

### 6.2 Vercel (Alternative)

```bash
npm install -g vercel
cd prototype/
vercel
```

---

## Zeitplan MVP

| Phase | Aufgabe | Zeit | Total |
|-------|---------|------|-------|
| 1 | Projektstruktur | 30 Min | 0.5h |
| 2 | Daten aufbereiten (data.json) | 1h | 1.5h |
| 3 | CSS implementieren | 1.5h | 3h |
| 4 | JavaScript-Logik | 2h | 5h |
| 5 | Testing & Refinement | 1h | 6h |
| 6 | Deployment | 30 Min | 6.5h |

**Gesamt: 6.5 Stunden**

---

## Kritische Datentransformationen

### 1. Markdown → HTML

**Input**: `paper-draft.md` (Markdown-String)
**Transformation**: `marked.parse(markdown)`
**Output**: HTML-String
**Edge Case**: Code-Blöcke mit Backticks → marked.js handled automatisch

---

### 2. Use Cases MD → JSON

**Manuell** via Copy-Paste aus `use cases/*.md` → `data.json`

**Kritische Felder**:
- `demo`: String ODER Array (mehrere Demos bei Lucina)
- `documents`: Array of Objects (kann leer sein bei SZD)
- `scope`, `video`, `blog`, `slides`: Optional

**Validierung**:
```javascript
function validateUseCase(uc) {
  if (!uc.id || !uc.title || !uc.context) throw new Error('Missing required fields');
  if (typeof uc.timeInvestment !== 'number') throw new Error('timeInvestment must be number');
  // ...
}
```

---

### 3. Panel-Generierung

**Input**: `useCase` Object
**Transformation**: Template-String mit dynamischen Werten
**Output**: HTML-Element (DOM Node)

**Edge Cases**:
- Keine Dokumente (SZD): `useCase.documents.length === 0` → Sektion ausblenden
- Mehrere Demos (Lucina): `Array.isArray(useCase.demo)` → Mehrere Buttons
- Fehlende optionale Felder: `useCase.video ? ... : ''`

---

## Fehlerbehandlung

### fetch() fehlschlägt

```javascript
try {
  const response = await fetch('data.json');
  if (!response.ok) throw new Error('Failed to load data');
  const data = await response.json();
} catch (error) {
  console.error('Error loading data:', error);
  document.getElementById('main-content').innerHTML = '<p>Fehler beim Laden der Daten.</p>';
}
```

### Use Case nicht gefunden

```javascript
const useCase = useCasesData.find(uc => uc.id === useCaseId);
if (!useCase) {
  console.warn(`Use Case ${useCaseId} not found`);
  return;
}
```

---

## Post-MVP Features (v1.1+)

- [ ] Vollständiges Paper-Parsing aus `paper-draft.md` (statt Inline-String)
- [ ] Phasen-Flow Visualisierung
- [ ] Template Download (Anhang A)
- [ ] Prompts Copy-to-Clipboard (Anhang B)
- [ ] TOC Floating Menu (rechts unten)
- [ ] Dark Mode
- [ ] Analytics (Plausible)

---

## Zusammenfassung

**MVP umfasst**:
1. Scrollbares Paper (Markdown → HTML)
2. Use Case Cards inline
3. Slide-In Panels für Use Case-Details
4. Scroll Progress Bar
5. Responsive Design
6. < 50 KB Bundle Size

**Technologie**:
- Vanilla JS + CSS (kein Framework)
- marked.js für Markdown-Parsing (3 KB gzipped)
- data.json für Use Cases

**Entwicklungszeit**: 6-7 Stunden

**Ergebnis**: Funktionales interaktives Paper mit explorativen Use Case-Branches.
