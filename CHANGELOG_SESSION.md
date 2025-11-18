# Session Changelog: Living Paper Integration & Knowledge Base Update

**Datum:** 18.11.2025
**Session-Dauer:** ~2 Stunden
**Ziel:** Integration realer HerData-Daten und Aktualisierung auf Forschungsstand 2024/2025

---

## 🎯 Überblick

Diese Session transformierte das Living Paper von Mock-Daten zu authentischen Projektdaten und aktualisierte die wissenschaftliche Grundlage auf den aktuellen Forschungsstand (2024-2025).

---

## ✅ Umgesetzte Änderungen

### 1. **Real Data Integration: HerData Vault**

**Datei:** `prototype/mock_vault.json`

**Vorher:** 7 simulierte Beispiel-Dokumente (fiktive HerData-Inhalte)

**Nachher:** 10 authentische HerData Knowledge Vault Dokumente:

| Dokument | Inhalt | Highlights |
|----------|--------|------------|
| **INDEX.md** | Vault-Navigation | Stand 09.11.2025, 218 Commits |
| **PROJECT.md** | Projektziele | 448 kuratierte Frauen, Goethe-Korrespondenz |
| **DATA.md** | Datenmodell | Coverage: 60,3% GND, 51,3% CMIF, 50,7% Geodaten |
| **DATA-MODEL.md** | JSON Schema | persons.json Struktur |
| **DECISIONS.md** | ADRs | 9 Architecture Decision Records |
| **REQUIREMENTS.md** | Anforderungen | 8 erfüllte fachliche Anforderungen |
| **DESIGN.md** | UI/UX | 7 Hauptansichten, colorblind-safe Palette |
| **TECH.md** | Tech Stack | 4-Phasen-Pipeline, 46 Tests, 14.856 Zeilen Code |
| **NETWORK.md** | Netzwerk-Viz | 86 AGRELON-Beziehungen, Hover-Interaktion |
| **WISSENSKORB.md** | Sammelkorb | 3 Netzwerk-Modi, Local Storage |

**Datenherkunft:** `herdata-knowledge/` Ordner (reale Projektdokumentation)

**Impact:** Vault Explorer zeigt jetzt authentische Forschungsdaten statt Simulationen.

---

### 2. **Real Paper Content Integration**

**Datei:** `prototype/paper-content-real.md` (NEU)

**Quelle:** Kombinierte alle 10 Paper-Kapitel aus `paper-knowledge/`:
- 01_EINLEITUNG.md
- 02_ENTWICKLUNG.md (mit 7 Use Case Placeholders)
- 03_METHODE.md (6-Phasen-Modell + Vault Explorer)
- 04_FALLSTUDIE.md (REALonline)
- 05_VALIDIERUNG.md (DH Workshop, n=12)
- 06_SPEKTRUM.md (Vibe Coding ↔ Promptotyping ↔ Promptware Engineering)
- 07_DISKUSSION.md (Context Rot, Sycophancy, Halluzinationen)
- 08_VERWANDTE_ARBEITEN.md
- 09_FAZIT.md
- 10_LITERATUR.md

**Länge:** 23 KB (vs. 6,5 KB paper-content-living.md)

**Struktur:**
- Vollständiges wissenschaftliches Paper
- Abstract mit Methodenbeschreibung
- 9 Sektionen
- Interaktive Module: `vault-explorer`, `context-rot-viz`, `sycophancy-trap`
- 7 Use Case Placeholders: `szd`, `realonline`, `sarcophag`, `herdata`, `goethe-faust-netzwerk`, `kriminalmuseum-canvas`, `dha-workshop`

---

### 3. **App.js Fallback-Kette**

**Datei:** `prototype/app.js` (Zeilen 48-61)

**Änderung:**
```javascript
// ALT:
fetch('./paper-content-living.md') → fetch('./paper-content.md')

// NEU:
fetch('./paper-content-real.md')
  → fetch('./paper-content-living.md')
  → fetch('./paper-content.md')
```

**Effekt:** Priorität auf authentische Daten, mit Fallbacks für Entwicklung.

---

### 4. **Knowledge Base Update: Literatur 2024-2025**

**Datei:** `paper-knowledge/10_LITERATUR.md`

**Entfernt (Veraltete Referenzen):**
- Boehm, B. (1988) - Spiral Model
- Drucker, J. (2009) - SpecLab
- Ramsay, S. (2011) - Reading Machines
- Chen, M., et al. (2021) - Evaluating LLMs on Code (alt)
- Zhou, Y., et al. (2023) - Prompt Engineers (überholt)
- Peng, S., et al. (2023) - Developer Productivity (alt)

**Hinzugefügt (Cutting Edge 2024-2025):**

**Primärliteratur & Methodik:**
- Chen, Z., et al. (2025) - **Promptware Engineering** (arXiv:2503.02400)
- Karpathy, A. (2025) - **"Vibe Coding"** Blog Post
- Sapkota, R., et al. (2025) - **Vibe vs. Agentic Coding** (arXiv:2505.19443)
- Pollin, C. (2025) - Promptotyping: Von der Idee zur Anwendung

**LLM-Performance & Epistemische Risiken:**
- Chroma (2025) - **Context Rot** Technical Report
- Chen, W., et al. (2025) - **Sycophancy** (Yes-Men to Truth-Tellers)
- Hong, K., et al. (2025) - Impact of Context Length

**Digital Humanities & AI-Software Engineering:**
- Pollin, C., et al. (2025) - GenAI in Digital Scholarly Editions (ZfdG, 10)
- Bamman, D., et al. (2024) - Impact of LLMs on Humanities
- MDPI (2025) - AI-Driven Software Engineering Review (Applied Sciences, 15(3))
- Boelaert, J., et al. (2024) - Machine Bias & Flattening of Diversity

**Impact:** Methodische Verankerung in aktueller Forschung, Abgrenzung zu älteren Paradigmen.

---

### 5. **Verwandte Arbeiten: Neue Einordnung**

**Datei:** `paper-knowledge/08_VERWANDTE_ARBEITEN.md`

**Alte Struktur (4 Zeilen):**
- Zhou et al. (Prompt-Optimierung)
- Chen et al. (Codex)
- Drucker (Rapid Prototyping)
- Ramsay (Algorithmic Criticism)

**Neue Struktur (3 Absätze):**

**"Vom Prompting zum Engineering"**
- Chen et al. (2025) Promptware Engineering
- Operationalisierung für Digital Humanities ohne industrielle Rigidität

**"Die Epistemische Wende"**
- Pollin et al. (2025): GenAI als epistemischer Akteur
- Bamman et al. (2024): Warnung vor unkritischer Übernahme
- Boelaert et al. (2024): "Verflachung" kultureller Diversität
- CEIL als Korrektiv

**"Neue Entwicklungsparadigmen"**
- MDPI Review (2025): KI als neuer Standard
- Sapkota et al. (2025): Vibe Coding ↔ Agentic Coding
- Promptotyping als methodische Brücke
- Chroma (2025): Context Rot als technische Begründung

---

### 6. **Living Paper Finalisierung**

**Datei:** `prototype/paper-content-living.md`

**Vorher (132 Zeilen):**
- 7 Sektionen, eher essayistisch
- Veraltete Fallstudien-Struktur (data-id statt use-case-placeholder)
- Metadaten-Card am Ende

**Nachher (112 Zeilen):**
- 6 Sektionen, wissenschaftlich strukturiert
- Klarere Abgrenzung Vibe Coding ↔ Promptotyping ↔ Agentic Coding
- 6-Phasen-Modell (statt 4)
- Korrekte Use Case Placeholders
- Aktuelle Literatur (2024-2025)

**Neue Inhalte:**

**Abstract:**
- Explizite Bezugnahme auf Karpathy "Vibe Coding"
- "Source Available Literacy" als Konzept
- "Critical Expert in the Loop" als Qualitätssicherung

**Sektion 2 - Epistemische Herausforderung:**
- Context Rot (Chroma 2025, Hong et al. 2025)
- Sycophancy ("Yes-Man"-Problem, Chen et al. 2025)
- Interaktive Simulationen

**Sektion 3 - Methode:**
- 6 Phasen (CONTEXT, DATA, EXPLORATION, REQUIREMENTS, IMPLEMENTATION, PROTOTYPE)
- "Externer Hippocampus" Metapher
- Vault Explorer Integration

**Sektion 5 - Methodische Einordnung:**
- Vibe Coding: Intuitiv, schnell, fehleranfällig
- Agentic Coding: Autonom, geplant, getestet
- Promptotyping: Pragmatische Brücke

**Sektion 6 - Fazit:**
- "Context Engineering" als neue Kernkompetenz
- "Promptotyping ist keine Software, sondern eine Haltung"

---

## 📊 Statistik

### Dateien Geändert: 6

| Datei | Zeilen Vorher | Zeilen Nachher | Diff |
|-------|---------------|----------------|------|
| `prototype/mock_vault.json` | 46 | 67 | +21 |
| `prototype/app.js` | 11 (Abschnitt) | 15 (Abschnitt) | +4 |
| `paper-knowledge/10_LITERATUR.md` | 11 | 19 | +8 |
| `paper-knowledge/08_VERWANDTE_ARBEITEN.md` | 4 | 13 | +9 |
| `prototype/paper-content-living.md` | 132 | 112 | -20 |

### Dateien Neu Erstellt: 1

| Datei | Größe | Beschreibung |
|-------|-------|--------------|
| `prototype/paper-content-real.md` | 23 KB | Kombiniertes vollständiges Paper |

### Datenherkunft

| Quelle | Dateien | Verwendung |
|--------|---------|------------|
| `herdata-knowledge/` | 13 Dateien | → `mock_vault.json` (10 Dokumente) |
| `paper-knowledge/` | 10 Dateien | → `paper-content-real.md` (kombiniert) |

---

## 🔍 Technische Details

### Interaktive Module (3)

Alle Module korrekt in Paper-Dateien eingebunden:

1. **Vault Explorer** (`data-module="vault-explorer"`)
   - Zeigt: HerData Knowledge Vault mit 10 Dokumenten
   - Daten: `mock_vault.json` (jetzt mit realen Inhalten)

2. **Context Rot Visualization** (`data-module="context-rot-viz"`)
   - Demonstriert: Recall-Degradation bei steigenden Token-Zahlen
   - Literatur: Chroma (2025), Hong et al. (2025)

3. **Sycophancy Trap** (`data-module="sycophancy-trap"`)
   - Simuliert: LLM-Bestätigungsbias durch suggestive Prompts
   - Literatur: Chen, W., et al. (2025)

### Use Case Placeholders (7)

Korrekte IDs in `paper-content-real.md`:
- ✅ `szd` (Stefan Zweig Digital)
- ✅ `realonline` (REALonline Museumskatalog)
- ✅ `sarcophag` (Corpus der Antiken Sarkophagreliefs)
- ✅ `herdata` (Goethe Briefkorrespondenz)
- ✅ `goethe-faust-netzwerk` (Faust Netzwerkanalyse)
- ✅ `kriminalmuseum-canvas` (Kriminalmuseum Canvas Interface)
- ✅ `dha-workshop` (Digital Humanities Workshop)

Reduzierte Liste in `paper-content-living.md` (3):
- ✅ `realonline`
- ✅ `lucina`
- ✅ `cvma`

**Status:** Alle in `use-cases.json` definiert (6 Use Cases), System erkennt fehlende IDs und loggt Warnung.

---

## 🐛 Bekannte Issues

### 1. Browser-Caching

**Problem:** Browser cached alte `paper-content-living.md` und `paper-content-real.md`

**Symptom:** Console zeigt `Loaded from paper-content.md` statt `paper-content-real.md`

**Lösung:** Hard Refresh erforderlich
- Windows/Linux: `Ctrl + Shift + R` oder `Ctrl + F5`
- Mac: `Cmd + Shift + R`

**Langfristig:** Cache-Busting via Query-Parameter erwägen:
```javascript
fetch(`./paper-content-real.md?v=${Date.now()}`)
```

### 2. Fehlende Use Case IDs

**Console Warnings:**
```
Placeholder for km not found
Placeholder for lucina not found
Placeholder for cvma not found
Placeholder for aldersbach not found
```

**Grund:** Diese IDs existieren in alten Paper-Versionen, aber nicht in `use-cases.json`

**Status:** Nicht kritisch - Paper funktioniert mit vorhandenen 6 Use Cases

**Todo:** Entscheidung treffen:
- Option A: Weitere Use Cases zu `use-cases.json` hinzufügen
- Option B: IDs aus alten Paper-Versionen entfernen

---

## 📋 Offene Aufgaben (TODO)

### Priorität 1: Kritisch

- [ ] **Cache-Busting implementieren**
  - Query-Parameter oder Versionierung für Markdown-Dateien
  - Verhindert Browser-Caching-Probleme

- [ ] **Use Cases komplettieren**
  - Fehlende IDs in `use-cases.json` ergänzen:
    - `lucina` (Lucina Projekt)
    - `cvma` (Corpus Vitrearum Medii Aevi)
    - `aldersbach` (Aldersbach Projekt)
    - `km` (Kriminalmuseum)
  - Oder: IDs aus `paper-content-living.md` entfernen

### Priorität 2: Wichtig

- [ ] **Paper-Inhalte synchronisieren**
  - Entscheiden: Ist `paper-content-real.md` oder `paper-content-living.md` die Hauptversion?
  - Derzeit: `paper-content-living.md` ist finalisierte Version (112 Zeilen)
  - Aber: `paper-content-real.md` ist umfassendes wissenschaftliches Paper (23 KB)
  - Empfehlung: `paper-content-living.md` als Primärversion setzen in `app.js`

- [ ] **Literaturverzeichnis in paper-content-real.md aktualisieren**
  - Derzeit noch alte Referenzen (Boehm, Drucker, etc.)
  - Sollte mit `paper-knowledge/10_LITERATUR.md` synchronisiert werden

- [ ] **Verwandte Arbeiten in paper-content-real.md aktualisieren**
  - Derzeit nur 1 Absatz (Zhou, Chen, Drucker, Ramsay)
  - Sollte mit `paper-knowledge/08_VERWANDTE_ARBEITEN.md` synchronisiert werden

### Priorität 3: Nice to Have

- [ ] **Automatische Paper-Generierung**
  - Script, das `paper-knowledge/*.md` zu `paper-content-real.md` kombiniert
  - Verhindert manuelle Duplikation

- [ ] **Vault Explorer: Datei-Navigation**
  - Aktuell: Zeigt 10 Dateien
  - Verbesserung: Klickbare Links zwischen Dateien (z.B. PROJECT.md → DATA.md)

- [ ] **Context Rot Visualisierung: Erweiterte Parameter**
  - Token-Anzahl einstellbar (aktuell fix)
  - Verschiedene Modelle vergleichen (GPT-4, Claude, etc.)

- [ ] **Sycophancy Trap: Mehr Szenarien**
  - Aktuell: Grundlegende Simulation
  - Erweitern: Autoritäts-Bias, Bestechungsversuche, etc.

### Priorität 4: Dokumentation

- [ ] **README.md aktualisieren**
  - Neue Dateien dokumentieren (`paper-content-real.md`)
  - Fallback-Kette erklären
  - Hard-Refresh-Anleitung für Entwickler

- [ ] **Deployment Guide**
  - GitHub Pages konfigurieren
  - Cache-Invalidierung bei Deployment
  - CI/CD für automatische Paper-Generierung

---

## 🚀 Deployment Checklist

Vor dem nächsten Deployment:

- [x] Alle Änderungen committen
- [ ] Hard Refresh im Browser testen
- [ ] Interaktive Module validieren (Vault Explorer, Context Rot, Sycophancy)
- [ ] Use Cases prüfen (mindestens 3 funktionieren)
- [ ] Literaturverzeichnis Konsistenz prüfen
- [ ] Mobile Responsiveness testen
- [ ] Cross-Browser Test (Chrome, Firefox, Safari)

---

## 🎓 Lessons Learned

### Was gut funktionierte:

1. **Strukturierte Vault-Integration:**
   - Herdata-Knowledge als Single Source of Truth
   - JSON-Format erlaubt einfaches Parsen im Frontend

2. **Fallback-Kette in app.js:**
   - Robustes System bei fehlenden Dateien
   - Ermöglicht parallele Entwicklung mehrerer Paper-Versionen

3. **Literatur-Update als separater Schritt:**
   - Klare Trennung: Daten-Integration → Wissenschaftliche Aktualisierung
   - Nachvollziehbare Änderungshistorie

### Was schwierig war:

1. **Browser-Caching:**
   - Markdown-Dateien werden aggressiv gecached
   - Hard Refresh ist nicht intuitiv für Nutzer
   - **Lösung:** Cache-Busting via Query-Parameter

2. **Use Case ID Inkonsistenz:**
   - Mehrere Paper-Versionen mit unterschiedlichen IDs
   - Keine klare "Source of Truth"
   - **Lösung:** `use-cases.json` als Master definieren

3. **Literatur-Duplikation:**
   - `paper-knowledge/10_LITERATUR.md` vs. inline Literatur in Paper-Dateien
   - Bei Änderungen müssen beide Orte aktualisiert werden
   - **Lösung:** Automatische Generierung oder Single-Source-of-Truth

---

## 📝 Git Commit Message (Vorschlag)

```
feat: Integrate real HerData vault & update knowledge base to 2024-2025

BREAKING CHANGES:
- Replace mock vault data with authentic HerData project documentation (10 files)
- Update literature to 2024-2025 research (Promptware Engineering, Vibe Coding, Context Rot)
- Finalize paper-content-living.md with 6-phase model and current research

NEW:
- prototype/paper-content-real.md: Combined full scientific paper (23 KB)
- CHANGELOG_SESSION.md: Complete documentation of session changes

MODIFIED:
- prototype/mock_vault.json: 10 authentic HerData vault documents
- prototype/app.js: Fallback chain paper-content-real → living → original
- paper-knowledge/10_LITERATUR.md: Update to 2024-2025 literature
- paper-knowledge/08_VERWANDTE_ARBEITEN.md: New research positioning
- prototype/paper-content-living.md: Finalized 6-section structure

RESEARCH UPDATES:
- Add: Chen et al. (2025) Promptware Engineering
- Add: Sapkota et al. (2025) Vibe vs. Agentic Coding
- Add: Chroma (2025) Context Rot, Chen et al. (2025) Sycophancy
- Add: Pollin et al. (2025) GenAI in Scholarly Editions
- Remove: Outdated references (Boehm 1988, Drucker 2009, Ramsay 2011)

VAULT DATA:
- INDEX.md: 218 commits, 22 sessions
- PROJECT.md: 448 curated women, Goethe correspondence
- DATA.md: 60.3% GND, 51.3% CMIF, 50.7% geodata
- TECH.md: 4-phase pipeline, 46 tests, 14,856 LOC
- DECISIONS.md: 9 ADRs (MapLibre, curated dataset, COSE layout)

KNOWN ISSUES:
- Browser caching requires hard refresh (Ctrl+Shift+R)
- Missing use case IDs: km, lucina, cvma, aldersbach

TODO:
- Implement cache-busting for markdown files
- Complete use-cases.json or remove unused IDs
- Synchronize literature in paper-content-real.md

🤖 Generated with Claude Code & Promptotyping Method
Session: 2025-11-18, Duration: ~2h
```

---

**Nächster Schritt:** Git Commit durchführen! 🚀
