# REQUIREMENTS.md - Realistische MVP-Spezifikation

## Prinzip: **Keep it Simple, Make it Work**

Fokus auf umsetzbare Features mit hohem Wert. Keine Feature-Creep.

---

## 1. MUSS-Features (Core MVP)

### 1.1 Paper-Lesung

**REQ-NAV-01**: Scrollbares Paper
- Gesamter Paper-Content als einzelne Seite
- Klare visuelle Trennung der Sektionen
- Markdown wird zu HTML gerendert

**REQ-NAV-02**: Inhaltsverzeichnis (Sticky Sidebar)
- Zeigt Hauptsektionen (Abstract, 1-8, Literatur, Anhänge)
- Klick = Smooth Scroll zur Sektion
- Aktive Sektion hervorgehoben (Intersection Observer)

**REQ-NAV-03**: Anker-Links
- Jede Sektion hat ID (#abstract, #1-einleitung, etc.)
- URLs mit Fragment funktionieren

---

### 1.2 Use Case Integration

**REQ-USE-01**: Use Case Cards
- Inline-Karten im Paper-Text (Sektion 2.1)
- Zeigen: Titel, Zeitinvestition, Dokumente, Kategorie-Badge
- Button "Details anzeigen" → öffnet Modal

**REQ-USE-02**: Use Case Modal
- Zeigt vollständige Informationen:
  - Kontext, Scope, Iteration
  - Prozessnotizen (Liste)
  - Promptotyping-Dokumente (Liste mit Phase-Tags)
  - Links: Repository, Demo (extern), Video/Blog/Slides (extern)
  - LLMs, Tags
- **Keine iframe-Einbettung** (zu komplex)
- **Keine GitHub-API-Integration** (nicht nötig)

**REQ-USE-03**: Use Case-Übersicht
- Separate Sektion mit allen 6 Use Cases als Grid
- Klick öffnet Modal (wie REQ-USE-02)

---

### 1.3 Projektvergleich (VEREINFACHT)

**REQ-CMP-01**: Vergleichstabelle
- HTML-Table mit allen 7 Projekten
- Spalten: Name, Zeit, Docs, Kategorie, Demo-Link
- **Sortierbar** per Klick auf Header (JavaScript)
- **KEINE Filter-Slider** (zu aufwändig)
- Stattdessen: **Einfache Kategorie-Filter** (Checkboxen)

**REQ-CMP-02**: Einfache Statistiken
- Nur Text-basiert, **keine Charts**:
  - "Gesamte Zeitinvestition: 68 Stunden"
  - "Durchschnitt: 9.7 Stunden"
  - "Optimale Dokumentenanzahl: 5-7"
- **KEINE D3.js/Chart.js** (Bundle Size!)

---

### 1.4 Promptotyping-Phasen

**REQ-PHS-01**: Phasen-Übersicht (Statisch)
- 6 Phasen als horizontaler Flow (Flexbox/Grid)
- Jede Phase: Icon, Name, Kurzbeschreibung, Output
- **Nicht klickbar** (reduziert Komplexität)
- Optional: Hover zeigt erweiterte Beschreibung (Tooltip)

---

### 1.5 Templates (Download)

**REQ-TMP-01**: Journal Template Download
- Button "Download Markdown" → lädt Anhang A als .md-Datei
- Implementierung: `<a download="journal-template.md" href="data:text/plain;...">`

**REQ-TMP-02**: Prompts kopieren
- Beispiel-Prompts (Anhang B) mit "Copy"-Button
- Clipboard API: `navigator.clipboard.writeText()`

---

### 1.6 Responsive Design

**REQ-RES-01**: Desktop (>1024px)
- Sidebar (links): Inhaltsverzeichnis
- Main (mittig, max 800px): Paper-Content
- Right Sidebar (optional): Metadaten (Fortschritt)

**REQ-RES-02**: Mobile (<1024px)
- Einspaltig
- Inhaltsverzeichnis als ausklappbares Menü (Hamburger)
- Tabellen → Responsive (horizontal scroll)

---

## 2. Nicht-funktionale Anforderungen

### Performance
- **Ladezeit < 3s** (4G-Verbindung)
- **Bundle Size < 50 KB** (JS + CSS, gzipped)
- Keine großen Dependencies (React/Vue/D3 VERBOTEN)
- **Vanilla JS oder Svelte** (klein & schnell)

### Kompatibilität
- Chrome, Firefox, Safari (letzte 2 Versionen)
- Mobile: iOS Safari, Android Chrome

### Accessibility (Basis)
- Semantisches HTML (nav, article, section)
- Keyboard-Navigation (Tab, Enter)
- **KEINE vollständige ARIA-Implementierung** (zu aufwändig für MVP)

---

## 3. EXPLIZIT AUSGESCHLOSSEN (v1)

❌ **Keine iframes** (Demo-Einbettung) → nur externe Links
❌ **Keine Charts/Visualisierungen** → Text-basierte Statistiken
❌ **Keine Volltextsuche** → Ctrl+F im Browser reicht
❌ **Keine Phasen-Drill-Downs** → statische Übersicht
❌ **Keine Notizen/Lesezeichen** → zu viel LocalStorage-Logic
❌ **Keine Timeline-Visualisierungen**
❌ **Keine GitHub-API-Integration**
❌ **Keine BibTeX/RIS-Exporte**
❌ **Keine Multi-Language-Support**

---

## 4. Technologie-Entscheidungen

### Option A: **Vanilla JS** (empfohlen für MVP)
- ✅ Null Dependencies
- ✅ Minimaler Bundle Size
- ✅ Schnelle Entwicklung für einfache UI
- ❌ Mehr manuelles DOM-Handling

### Option B: **Svelte** (falls interaktive Features wachsen)
- ✅ Kompakt (< 10 KB)
- ✅ Reaktive UI einfacher
- ❌ Build-Setup nötig

**Empfehlung**: Starte mit Vanilla JS, wechsle zu Svelte nur wenn nötig.

---

## 5. Akzeptanzkriterien (MVP)

### Funktional
- ✅ Paper ist vollständig lesbar (alle Sektionen)
- ✅ Alle 6 Use Cases öffnen sich im Modal
- ✅ Tabelle ist sortierbar
- ✅ Templates sind downloadbar
- ✅ Prompts sind kopierbar
- ✅ Alle externen Links funktionieren

### Technisch
- ✅ Lighthouse Performance > 85
- ✅ Funktioniert auf Desktop + Mobile (Chrome, Safari)
- ✅ Bundle Size < 50 KB

### Usability
- ✅ 3 Test-Nutzer finden REALonline Use Case Details in < 30s
- ✅ Keine JavaScript-Fehler in Console

---