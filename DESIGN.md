# DESIGN.md - Storytelling-orientiertes UI/UX Konzept

## Vision: Scrolling Narrative mit explorativen Branches

Das Paper ist ein **vertikaler Erzählstrang**. Use Cases sind **horizontale Abzweigungen** – explorierbare "Geschichten" neben dem Hauptnarr ativ.

---

## Farbkonzept: Professionell & Minimal

**Maximal 3 Hauptfarben** + Graustufen.

```css
:root {
  /* Basis: Graustufen */
  --color-bg: #fafafa;           /* Hintergrund */
  --color-text: #1a1a1a;         /* Haupttext */
  --color-text-muted: #737373;   /* Sekundärtext */
  --color-border: #e5e5e5;       /* Trennlinien */

  /* Akzent 1: Primär (Links, Aktionen) */
  --color-primary: #2563eb;      /* Professionelles Blau */
  --color-primary-hover: #1d4ed8;

  /* Akzent 2: Use Case Highlight */
  --color-accent: #0891b2;       /* Türkis für Use Case-Branches */

  /* Kategorien (nur für Badges, sehr sparsam) */
  --color-experimental: #f97316;
  --color-minimal: #eab308;
  --color-optimal: #22c55e;
  --color-complex: #a855f7;
}
```

**Farblogik**:
- **Haupttext**: Schwarz auf Weiß (max. Lesbarkeit)
- **Primär-Blau**: Nur für interaktive Elemente (Links, Buttons)
- **Türkis**: Nur für Use Case-Abzweigungen (visueller "Branch"-Effekt)
- **Kategorien-Farben**: Nur in kleinen Badges

---

## Layout: Vertikaler Scroll + Horizontale Branches

### Konzept

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   PAPER HAUPTTEXT                                          │
│   ──────────────────────────────────────────────────────── │
│   Abstract                                                 │
│   Einleitung                                               │
│   ...                                                      │
│   ──────────────────────────────────────────────────────── │
│                                                             │
│   2.1 Praktische Erfahrungen                               │
│   ...                                                      │
│                                                             │
│   ┌─────────────────┐                                     │
│   │ SZD Use Case    │ ──────────→ [Slide-In rechts]      │
│   │ 2h • 0 Docs     │                                     │
│   │ [Explore →]     │                                     │
│   └─────────────────┘                                     │
│                                                             │
│   ...Text fortsetzt...                                     │
│                                                             │
│   ┌─────────────────┐                                     │
│   │ REALonline      │ ──────────→ [Slide-In rechts]      │
│   │ 5h • 6 Docs     │                                     │
│   │ [Explore →]     │                                     │
│   └─────────────────┘                                     │
│                                                             │
│   ...Text fortsetzt...                                     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Wenn User auf "Explore →" klickt**:

```
┌────────────────────┬────────────────────────────────────┐
│ PAPER HAUPTTEXT    │ [Slide-In von rechts]              │
│ (weiter lesbar,    │ ┌─────────────────────────────┐    │
│  aber gedimmt)     │ │ REALonline Use Case         │    │
│                    │ │ [✕ Schließen]               │    │
│                    │ │                             │    │
│                    │ │ 5h • 6 Docs • Iteration 1   │    │
│                    │ │                             │    │
│                    │ │ Kontext: ...                │    │
│                    │ │                             │    │
│                    │ │ Dokumente:                  │    │
│                    │ │ • DATA.md                   │    │
│                    │ │ • DESIGN.md                 │    │
│                    │ │                             │    │
│                    │ │ Links: [Demo] [Repo]        │    │
│                    │ └─────────────────────────────┘    │
└────────────────────┴────────────────────────────────────┘
```

---

## Typografie

**Eine Schriftfamilie** für alles: **Inter** (modern, gut lesbar, wissenschaftlich)

```css
:root {
  --font-base: 'Inter', -apple-system, sans-serif;
  --font-mono: 'Monaco', 'Courier New', monospace;

  /* Größen (modular scale 1.25) */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.563rem;  /* 25px */
  --text-3xl: 1.953rem;  /* 31px */
  --text-4xl: 2.441rem;  /* 39px */
}
```

**Hierarchie**:
- **H1** (Paper-Titel): `--text-4xl`, `font-weight: 700`
- **H2** (Sektionen): `--text-3xl`, `font-weight: 600`
- **H3**: `--text-2xl`, `font-weight: 600`
- **Body**: `--text-base`, `line-height: 1.75`, `font-weight: 400`
- **Small** (Meta): `--text-sm`, `color: var(--color-text-muted)`

---

## Layout-Struktur

### Desktop (>1024px)

```
┌───────────────────────────────────────────────────────┐
│ Fixed Header (minimal, 50px)                          │
│ ┌───────────────────────────────────────────────────┐ │
│ │ Promptotyping                    [Progress: 45%]  │ │
│ └───────────────────────────────────────────────────┘ │
├───────────────────────────────────────────────────────┤
│                                                       │
│   ┌───────────────────────────────────────────┐      │
│   │                                           │      │
│   │   PAPER CONTENT (centered, max 700px)    │      │
│   │                                           │      │
│   │   # Promptotyping                         │      │
│   │   Ein Praxisbericht zur...                │      │
│   │                                           │      │
│   │   ## Abstract                             │      │
│   │   Large Language Models...                │      │
│   │                                           │      │
│   │   [Use Case Card]                         │      │
│   │                                           │      │
│   │   ## 2. Entwicklung                       │      │
│   │   ...                                     │      │
│   │                                           │      │
│   └───────────────────────────────────────────┘      │
│                                                       │
└───────────────────────────────────────────────────────┘
```

**Specs**:
- Content: `max-width: 700px`, `margin: 0 auto`, `padding: 3rem 2rem`
- Keine Sidebar (stört Storytelling-Flow)
- Floating TOC: **Optional** als kleines Overlay (rechts unten, minimalistisch)

---

### Mobile (<768px)

Identisch zu Desktop, nur `padding: 1.5rem 1rem`

---

## Komponenten

### 1. Fixed Header (Minimal)

```html
<header class="header">
  <span class="header-title">Promptotyping</span>
  <div class="header-progress">
    <div class="progress-bar" style="width: 45%"></div>
  </div>
</header>
```

**Styling**:
```css
.header {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: 50px;
  background: var(--color-bg);
  border-bottom: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  z-index: 100;
}

.progress-bar {
  height: 3px;
  background: var(--color-primary);
  transition: width 0.3s ease;
}
```

---

### 2. Use Case Card (Inline im Text)

**Design**: Kompakt, visuell als "Branch" erkennbar

```html
<div class="use-case-card">
  <div class="card-content">
    <div class="card-header">
      <h4>REALonline Rauminventar</h4>
      <span class="category-badge optimal">Optimal</span>
    </div>
    <div class="card-meta">
      <span>⏱️ 5h</span>
      <span>📄 6 Docs</span>
      <span>🔄 Iteration 1</span>
    </div>
  </div>
  <button class="card-explore">
    Explore →
  </button>
</div>
```

**Styling**:
```css
.use-case-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin: 3rem 0;
  padding: 1.5rem;
  border: 2px solid var(--color-border);
  border-left: 4px solid var(--color-accent); /* Türkis "Branch"-Indikator */
  border-radius: 8px;
  background: white;
  transition: all 0.2s;
}

.use-case-card:hover {
  border-left-width: 8px; /* Visueller "Pull"-Effekt */
  transform: translateX(4px);
}

.card-explore {
  flex-shrink: 0;
  background: var(--color-accent);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
}

.card-explore:hover {
  background: #0e7490;
}
```

**Visueller Effekt**:
- Linker Border in Türkis = "Branch" zum Hauptnarrative
- Hover vergrößert Border + leichte Translation nach rechts = "Pull"-Effekt

---

### 3. Use Case Slide-In (Rechts)

**Struktur**:
```html
<div class="slide-panel" id="panel-realonline">
  <div class="panel-overlay"></div>

  <div class="panel-content">
    <button class="panel-close">✕</button>

    <div class="panel-header">
      <h2>REALonline Rauminventar</h2>
      <div class="panel-meta">
        <span class="category-badge optimal">Optimal</span>
        <span class="meta-text">5h • 6 Docs • Iteration 1</span>
      </div>
    </div>

    <div class="panel-body">
      <section>
        <h3>Kontext</h3>
        <p>Mittelalterliche Rauminventare...</p>
      </section>

      <section>
        <h3>Promptotyping-Dokumente</h3>
        <ul class="doc-list">
          <li>
            <span class="doc-icon">📄</span>
            <div>
              <strong>DATA.md</strong>
              <small>Datenstruktur-Dokumentation</small>
            </div>
          </li>
          <!-- ... -->
        </ul>
      </section>

      <section>
        <h3>Links</h3>
        <div class="link-row">
          <a href="..." class="btn-link" target="_blank">🔗 Demo</a>
          <a href="..." class="btn-link" target="_blank">💻 Repository</a>
        </div>
      </section>

      <section>
        <h3>Prozessnotizen</h3>
        <ul class="note-list">
          <li>JOURNAL.md erstmals als aktives Dokument</li>
          <!-- ... -->
        </ul>
      </section>
    </div>
  </div>
</div>
```

**Styling**:
```css
/* Overlay (dimmt Haupttext) */
.panel-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  opacity: 0;
  transition: opacity 0.3s;
}

.slide-panel.active .panel-overlay {
  opacity: 1;
}

/* Panel selbst */
.panel-content {
  position: fixed;
  top: 0; right: 0; bottom: 0;
  width: 500px;
  max-width: 90vw;
  background: white;
  box-shadow: -4px 0 20px rgba(0,0,0,0.1);
  overflow-y: auto;
  padding: 2rem;
  transform: translateX(100%);
  transition: transform 0.3s ease;
}

.slide-panel.active .panel-content {
  transform: translateX(0);
}
```

**Animation**:
- Slide-In von rechts (0.3s ease)
- Overlay fade-in gleichzeitig
- Smooth, nicht zu schnell

---

### 4. Vergleichstabelle (Vereinfacht)

Keine Filter-Slider, nur **Kategorie-Checkboxen** oben.

```html
<div class="table-filters">
  <label class="filter-chip">
    <input type="checkbox" value="experimental" checked>
    <span>Experimental</span>
  </label>
  <label class="filter-chip">
    <input type="checkbox" value="minimal" checked>
    <span>Minimal</span>
  </label>
  <label class="filter-chip">
    <input type="checkbox" value="optimal" checked>
    <span>Optimal</span>
  </label>
  <label class="filter-chip">
    <input type="checkbox" value="complex" checked>
    <span>Complex</span>
  </label>
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
    <tr data-category="optimal">
      <td>REALonline</td>
      <td>5h</td>
      <td>6</td>
      <td><span class="category-badge optimal">Optimal</span></td>
      <td><a href="..." target="_blank">→</a></td>
    </tr>
    <!-- ... -->
  </tbody>
</table>
```

**Styling**:
```css
.filter-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s;
}

.filter-chip:has(input:checked) {
  background: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1.5rem;
}

.comparison-table th {
  text-align: left;
  padding: 0.75rem;
  background: var(--color-bg);
  border-bottom: 2px solid var(--color-border);
  font-weight: 600;
}

.comparison-table td {
  padding: 0.75rem;
  border-bottom: 1px solid var(--color-border);
}
```

---

### 5. Phasen-Flow (Horizontal, einfach)

Keine Klickbarkeit, nur **visuelle Darstellung**.

```html
<div class="phases-flow">
  <div class="phase">
    <span class="phase-icon">📋</span>
    <span class="phase-name">CONTEXT</span>
  </div>
  <span class="phase-arrow">→</span>

  <div class="phase">
    <span class="phase-icon">📊</span>
    <span class="phase-name">DATA</span>
  </div>
  <span class="phase-arrow">→</span>

  <div class="phase">
    <span class="phase-icon">🔬</span>
    <span class="phase-name">EXPLORATION</span>
  </div>
  <span class="phase-arrow">→</span>

  <!-- ... -->
</div>
```

**Styling**:
```css
.phases-flow {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 3rem 0;
  flex-wrap: wrap;
}

.phase {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.phase-icon {
  font-size: 2rem;
}

.phase-name {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-text-muted);
}

.phase-arrow {
  font-size: 1.5rem;
  color: var(--color-text-muted);
}
```

**Mobile**: Vertikal (`flex-direction: column`)

---

### 6. Template Download + Prompt Copy

Identisch zu vorheriger Version (DESIGN.md v1), nur mit neuen Farben.

---

## Interaktionsmuster

### 1. Use Case Slide-In

```javascript
// Öffnen
cardExploreBtn.addEventListener('click', () => {
  const panelId = cardExploreBtn.dataset.panel;
  const panel = document.getElementById(panelId);
  panel.classList.add('active');
  document.body.style.overflow = 'hidden'; // Scroll lock
});

// Schließen
panelClose.addEventListener('click', closePanel);
panelOverlay.addEventListener('click', closePanel);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closePanel();
});

function closePanel() {
  panel.classList.remove('active');
  document.body.style.overflow = '';
}
```

---

### 2. Scroll Progress

```javascript
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  progressBar.style.width = `${progress}%`;
});
```

---

### 3. Tabellen-Filter

```javascript
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
```

---

## Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 767px) {
  .panel-content { width: 100vw; }
  .phases-flow { flex-direction: column; }
  .header { padding: 0 1rem; }
}

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) {
  .panel-content { width: 400px; }
}

/* Desktop */
@media (min-width: 1024px) {
  .panel-content { width: 500px; }
}
```

---

## Accessibility

- **Keyboard**: Tab zu Buttons, Enter aktiviert, Escape schließt Panel
- **Semantik**: `<article>`, `<section>`, `<nav>`, `role="dialog"` für Panel
- **Kontrast**: Text `#1a1a1a` auf `#fafafa` = 16:1 (WCAG AAA)

---

## Zusammenfassung

**Kernkonzept**:
1. **Vertikaler Scroll** = Hauptnarrative (Paper)
2. **Use Case Cards** = Horizontale "Branches" (Türkis-Border-Indikator)
3. **Slide-In Panel** von rechts = Explorative "Geschichten"
4. **Minimale Farbpalette**: Grau + Blau (Primär) + Türkis (Accent)

**Umsetzung**:
- Vanilla CSS + JS (< 50 KB)
- Smooth Animationen (0.3s ease)
- Responsive (Mobile + Desktop identisch)

**Entwicklungszeit**: 4-5 Stunden für MVP.
