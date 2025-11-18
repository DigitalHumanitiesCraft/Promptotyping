# Design

UI/UX-Design, Informationsarchitektur und Visualisierungsstrategie.

* Stand: 2025-10-19

## Zweck

Zielbild für Interaktion, Informationsarchitektur und Visualisierung der HerData-Plattform. Präskriptiv: intendiertes Systemverhalten. 

## 1. Kontext & Ausgangslage (komprimiert)

Implikation fürs Design: explorative *Overview first → zoom & filter → details on demand*; progressive Offenlegung bei hoher Dichte; robuste Facettierung; Brückenschlag zwischen narrativen Biogrammen und analytischen Sichten. (Patterns: Shneiderman-Mantra, Munzner Nested Model)

## 2. Zielgruppen & Kernaufgaben

Primär: kultur- und literaturinteressierte Laien; sekundär: Studierende, Forschende, Lehrende. 

Top-Tasks (Task Analysis, abgeleitet):

1. *Person finden & verstehen:* Wer ist X? Welche Beziehung zu Goethe? Wo/wan lebte X? Welche Briefe/Erwähnungen existieren?
2. *Räume erkunden:* Wo konzentriert sich weibliche Korrespondenz? (z. B. Weimar/Jena/Berlin)
3. *Zeitverlauf sehen:* Wann häufen sich Erwähnungen/Briefe? (1810er Peak; 1817) 
4. *Netzwerke entdecken:* Wie sind Frauen über Beziehungen (AGRELON) und Ko-Erwähnungen verbunden? 
5. *Quellenzugriff:* TEI/Regest und externe Normdaten (GND, SNDB) direkt öffnen. 

## 3. Informationsarchitektur (IA)

### 3.1 Primäre Navigationsstruktur

* Entdecken (Landing-Explorer mit Karte/Timeline/Netz)
* Personen (Listen- & Kartenansicht → Personenprofil)
* Briefe (Suche → Briefdetail mit Regest/Links)
* Orte (Karte, Ortsprofil)
* Netzwerk (Person‐↔Person, filterbar nach Beziehungstypen)
* Stories (kuratierte Dossiers/Narrative)
* Daten & API (Download/Endpunkte, Zitierhinweise)

### 3.2 Sekundäre Navigationsachsen (Filter/Facetten)

* Rolle: Absenderin / Erwähnte / indirekt (Netzwerk) 
* Normierung: GND vorhanden / nur SNDB / keine Normdaten 
* Zeit: exakte Datierung / Datumsbereich (mit Slider) 
* Ort(e): Briefort (CMIF) / Wirkungsort(e) (SNDB) 
* Sprache: de/fr/en/it/la/vls (ISO) 
* Textbasis & Publikation: Manuscript/Print/Copy/Draft; Abstract/Transcription 
* Beziehungstyp (AGRELON, 44 Typen) 

## 4. Schlüsselansichten & Interaktionen

### 4.1 Start/Explorer

* Hero-Explorer mit drei gleichwertigen Einstiegen (Tabs): Karte, Zeit, Netz.
* KPI-Teaser (live aus Daten, Details siehe [data.md](data.md#kern-statistiken)) mit Link auf Datenquellen.  
* Guided prompts („Zeige Frauen mit Briefen 1810–1819 in Weimar“).

### 4.2 Kartenexploration (Leaflet/WebGL)

* Clustering + Dichte-Layer: Start in Europa; Level-of-Detail mit Clusterzählung; Heatmap optional. Weimar/Jena/Berlin als Hotspots sichtbar. 
* Facet-on-Map: Filter wirken sofort; Brushing & Linking zu Timeline/Netz.
* Performance-Ziel: ≤ 2 s TTI bei initialem View (MVP belegt Machbarkeit). 

### 4.3 Zeitachse

* Histogramm/Area-Chart mit Jahr-Binning; Fokus 1810er; Markierung Höchstjahr 1817.
  Interaktion: Range-Selection → filtert Karte/Liste/Netz. 

### 4.4 Netzwerk

* Dualer Layer: (a) Ko-Erwähnung in Briefen, (b) SNDB-Beziehungen (AGRELON-Typen filterbar). Node-Shape = Entität (Person/Ort), Color = Rolle, Size = Häufigkeit. 
* Zeit-Slider: temporale Projektion (Edge-Fading außerhalb Selektionsfenster).
* Detail-on-Demand: Tooltip → Mini-Profil, Klick → Personenprofil.

### 4.5 Personenprofil (Kanonische Entität)

Zweck: kontextualisiertes, narratives und analytisches Portrait.

* Header: Name, Lebensdaten (falls vorhanden), Rolle(n), Normdaten-Badges (GND, SNDB, Wikidata), „Zitieren“-Aktion. 
* Tabs:

  1. Überblick (Kurzbiogramm aus projekt-XML + Key-Fakten) 
  2. Korrespondenz (Liste/Timeline der Briefe mit Regesten/Transkription, API-Links) 
  3. Netz (SNDB-Relationen + Ko-Erwähnungen; Filter nach AGRELON) 
  4. Orte (Wirkungsorte + Brieforte, Kartenansicht) 
  5. Berufe/Rollen (aus SNDB, mehrere je Person) 
  6. Quellen & Links (GND, SNDB, PROPYLÄEN, Zenodo) 
* Datenqualitäts-Hinweise: Kennzeichnung, wenn keine GND (oder unsichere Zuordnung). 

### 4.6 Briefdetail

* Metadaten: Absender(in), Empfänger (Goethe), Datum (exakt/Spanne), Ort (GeoNames), Sprache, Publikationsstatus, Textbasis. 
* Inhalt: Regest; bei Verfügbarkeit TEI-Transkription (API-Link). TEI-Verfügbarkeit aktuell ~15,7 %. 
* Entitäten-Panel: erwähnte Personen/Werke/Organisationen (mit Rollenchips).

### 4.7 Suche & Facettierung (Unified Search)

* Query-First + Facets: Live-Suggestions (Personen/GND/Orte/Briefe).
* Sortierung: Relevanz, Datum, Häufigkeit (Erwähnungen).
* Export: CSV/JSON der Suchergebnisse, inkl. Permalinks.

### 4.8 Stories (Narrativierung)

* Kuratierte Dossiers verbinden Personenprofile, Netzwerkgrafiken, Karten-Ausschnitte und Brief-Regesten (Deep-Links). Biogrammtexte stammen aus projekt-XML. 

## 5. Visual-Coding & Gestaltungsprinzipien

* Nested Model (Munzner):
  *Domain/Task* → Frauen & Korrespondenz erkunden; *Data/Operation* → Personen/Briefe/Orte/Beziehungen, Filter/Drilldown; *Encoding/Interaction* → Map/Timeline/Graph, Brushing/Linking; *Algorithm* → Clustering, Graph-Layout.
* Information Seeking Mantra: Overview → Zoom/Filter → Details.
* Cognitive Load: progressive Offenlegung, Chunking (max. 7–9 primäre UI-Elemente je Ansicht), Inline-Erklärungen (i-Tooltips).
* Semiotik & Bertin:

  * Farbe: Rolle (Absenderin/Erwähnte/Indirekt)
  * Größe: Häufigkeit (Erwähnungen/Briefe)
  * Position: Raum/Zeit (Karte/Timeline)
  * Form: Entitätstyp (Person/Ort/Brief)
* Datenqualität sichtbar machen: Badges (GND/GeoNames vorhanden), Confidence-Hinweise bei Fallback-Matching. 

## 6. Designsystem (Atomic Design)

### 6.1 Tokens

* Typografie-Skala (z. B. 12/14/16/20/24/32), Zeilenabstände ≥ 1,4; Spacing 4/8/12/16/24/32; Kontraste WCAG AA/AAA.
* Iconographie: Normdaten/Externe Links/Export/Filter/Netz/Karte/Zeit.

#### 6.1.1 Farbpalette (Academic Professional)

Prinzip: Zurückhaltend, vertrauenswürdig, akademisch. Keine grellen Verläufe.

Primärfarben:
* Dunkelblau (Navigation, Header): #1e3a5f (Navy Blue)
* Akzentblau (Links, Highlights): #2c5f8d (Steel Blue)
* Textfarbe: #2d3748 (Dark Gray)
* Hintergrund: #ffffff (White), #f8f9fa (Light Gray)

Funktionale Farben:
* Erfolg/Bestätigung: #2d6a4f (Forest Green)
* Information: #0077b6 (Academic Blue)
* Warnung: #9b6b00 (Dark Gold)
* Fehler: #9b2226 (Dark Red)

Rollenkodierung (Karte/Netz):
* Absenderin: #2c5f8d (Steel Blue)
* Erwähnt: #6c757d (Medium Gray)
* Beide Rollen: #2d6a4f (Forest Green)
* Indirekt (SNDB): #adb5bd (Light Gray)

Normierungskodierung (Badges):
* GND vorhanden: #2d6a4f (Forest Green) mit hellgrünem Hintergrund #d8f3dc
* Nur SNDB: #9b6b00 (Dark Gold) mit hellgelbem Hintergrund #fff3cd

Rahmenbedingungen:
* Alle Farbkontraste erfüllen WCAG AA (mindestens 4.5:1 für Text)
* Keine Farbverläufe in Navigation/Primärflächen
* Farbe niemals alleiniges Unterscheidungsmerkmal (Form/Text zusätzlich)

### 6.2 Atome (Beispiele)

* Badge (GND/SNDB), Chip (Rolle/Beziehung), Pill-Toggle (Ansicht), Tag (Sprache), Counter (Trefferzahl).

### 6.3 Moleküle

* Suchfeld mit Typeahead (Entitätsvorschläge).
* Facet-Panel (Akkordeon: Rolle, Zeit, Ort, Sprache, Textbasis, Publikation, Beziehungstyp). 
* Mini-Karte/Mini-Netz in Tooltips.

### 6.4 Organismen

* Personenkarte (Name, Rollen, Lebensdaten, Normdaten-Badges, Key-Metriken).
* Briefliste (Regest-Snippets, Datum, Ort, Sprache). 
* Netzwerk-Canvas (AGRELON-Filter). 

### 6.5 Templates

* Persons Index, Person Profile, Letter Detail, Place Profile, Explorer, Story.
* Responsiv: 3 Breakpoints (≤ 480, ≤ 768, > 768); Karten/Netz im Mobilportrait als Fokus-Ansicht (Panel-Overlay).

### 6.6 Responsive Design (Mobile/Touch)

Breakpoints:
* ≤ 480px: Very small screens, icon-only view-switcher
* ≤ 768px: Tablet/Mobile, burger menu for secondary navigation
* > 768px: Desktop, full navigation

Touch Targets:
* Minimum 44×44px für alle interaktiven Elemente (WCAG 2.1)
* View-Switcher: 3 gleichwertige Tabs (Karte/Personen/Brief-Explorer) immer sichtbar
* Burger-Menu: Sekundäre Navigation (Wissenskorb, Vault, Orte, Download, Suche)

Navigation (Mobile):
* Burger-Icon (links): Öffnet Slide-in-Menu von rechts
* View-Switcher (center): Kompakte Buttons mit min-height 44px
* ≤ 480px: Icons statt Text (fa-map, fa-users, fa-envelope)
* Overlay-Schließen: Burger-Button, Außenklick, ESC-Taste, Link-Klick

Landscape-Modus (≤ 768px):
* Navbar-Höhe reduziert: 60px → 50px für mehr vertikalen Platz
* Touch-Targets: 44px → 40px (akzeptabel im Querformat)
* Kein horizontales Scrollen

Accessibility:
* Fokusindikatoren auf allen interaktiven Elementen
* aria-expanded States für Burger-Menu
* aria-pressed States für View-Switcher
* Body-Scroll verhindert bei geöffnetem Menu
* Tastatur-Navigation: Tab, ESC, Enter

---

## 7. Design Space Exploration (Morphologischer Kasten)

| Parameter              | Optionen                               | Entscheidung (v1)                           |
| ---------------------- | -------------------------------------- | ------------------------------------------- |
| Navigationsstrategie   | Global Top-Nav • Kontext-Tabs • Wizard | Top-Nav + Kontext-Tabs                  |
| Primär-Entry           | Karte • Zeit • Netz • Story            | Karte (mit Tabs)                        |
| Visualisierung (Sek.)  | Timeline • Netzwerk • Liste            | Timeline + Netzwerk                     |
| Informationsdichte     | Low • Medium • High                    | Medium (progressive Offenlegung)        |
| Facettierung           | Seitlich • Overlay • Horizontal        | Seitlich (Desktop), Overlay (Mobil) |
| Normdaten-Sichtbarkeit | dezent • prominent                     | prominent (Badges)                      |
| Datenqualität          | versteckt • sichtbar                   | sichtbar (Badges/Hinweise)              |
| Export                 | deaktiviert • CSV • CSV+JSON           | CSV+JSON                                |
| Story-Format           | Textlastig • Hybrid                    | Hybrid (Text+Viz)                       |

Begründung: Datenfülle (15k+ Briefe) & Hotspots (Weimar) sprechen für *Overview-first* mit leistungsfähigen Filtern.  

## 10. Validierung & Evaluation

Rahmen: Design Science Research (Hevner); Research-through-Design.
Dokumentation: Five Design Sheets (FDS) für jeweils Karte/Netz/Timeline/Profil.

### A/B-Hypothesen (Beispiele)

* H1: Karten‑Tab als Default verkürzt TCT ggü. Timeline‑Default.
* H2: Prominente Normdaten‑Badges erhöhen Vertrauensurteil (Selbstauskunft).
* H3: Dual‑Layer‑Netz steigert Recall bei Relationsaufgaben.

---

## 11. Anforderungen (QFD-Auszug)

| Nutzeranforderung            | Relevanz  | Designmerkmal                                                              |
| ---------------------------- | --------- | -------------------------------------------------------------------------- |
| „Schnell Überblick gewinnen“ | hoch      | Explorer mit Karte/Timeline/Netz + Live‑Facets                             |
| „Belege einsehen“            | sehr hoch | Briefdetail mit Regest/TEI‑Link + GND/SNDB‑Badges                          |
| „Frauenprofile verstehen“    | sehr hoch | Personenprofil (6 Tabs) mit Normdaten‑Badges + Links (GND/SNDB/PROPYLÄEN)  |
| „Zitierfähig exportieren“    | mittel    | CSV/JSON Export + Permalinks                                               |
| „Skalierbar & schnell“       | hoch      | Serverseitige Aggregation, WebGL, Virtualization; TTI ≤ 2 s                |

---

## 12. Risiken & Umgang

* Datenlücken (TEI-Abdeckung): Fallback Regest/Metadaten; UI kennzeichnet Nicht‑Verfügbarkeit. 
* Ambige Identitäten (ohne GND): Fuzzy‑Match wird sichtbar markiert; Quellenlinks priorisieren. 
* Langfristige Änderungen (PROPYLÄEN bis 2039): Versionshinweise & Datenstand in Footer/„Über".

---

## 13. Updates 2025-10-29: Implementierungsstand

Diese Sektion dokumentiert Abweichungen zwischen ursprünglichem Zielbild (2025-10-19) und tatsächlicher Implementierung (Stand 2025-10-29).

### 13.1 Implementierte Features

#### 13.1.1 Primäre Navigationsstruktur (Ist-Stand)

Aktuelle Navigation: 2 Seiten (statt 7 geplanter)

- index.html: Interaktive Karte (Haupteinstieg)
- person.html: Personenprofil
- stats.html: Brief-Explorer (neu, nicht im Zielbild)

Nicht implementiert: Briefe, Orte, Netzwerk, Stories, Daten/API als separate Seiten.

Begründung: MVP-Fokus auf Kern-Use-Cases (Person finden, räumlich erkunden, quantitativ verstehen). Briefdetail, Ortsprofil und Netzwerkansicht als separierte Seiten wurden zugunsten kontextueller Integration zurückgestellt.

#### 13.1.2 Brief-Explorer (neu)

Nicht im ursprünglichen Design, aber implementiert zur Unterstützung von Nutzeranforderung "Schnell Überblick gewinnen".

Technologie: Apache ECharts 5.5.0

5 Visualisierungen:

1. Berufsverteilung (Horizontal Bar Chart, Top 15)
   - Daten: 207/448 Personen mit Berufsdaten (46%)
   - Color: --color-secondary (#2c5f8d)
   - Labels: inside bars (white), Format: Count + Percentage

2. Brief-Timeline (Line Chart, 1772-1824)
   - Daten: 15.312 Briefe, jährliche Aggregation
   - Shows: Briefsender (Steel Blue) + Erwähnte (Medium Gray)
   - Peak: 1820er Jahre

3. Geografische Zentren (Horizontal Bar Chart, Top 10)
   - Daten: 227/448 Personen mit Koordinaten (50.7%)
   - Weimar dominiert mit 83 Personen (37%)

4. Generationen (Vertical Bar Chart, Dekaden)
   - Daten: 213/448 Personen mit Geburtsjahr (48%)
   - Fokus: 1750-1790 Goethe-Ära (279 = 62%)

5. Briefaktivität (Pie Chart)
   - Kategorisierung: Viel/Mittel/Wenig/Nur erwähnt/Nur SNDB
   - Transparenz: 218/448 (49%) nur indirekter Nachweis

Export-Funktionalität:
- CSV: Alle Datenpunkte mit Headers
- PNG: 2x-Auflösung für Publikationen
- Per-Chart-Buttons

Design-Integration:
- Card-based Layout (grid: 2 Spalten, responsive)
- Tokens: --space-xl gaps, --color-border, --shadow-sm
- Responsive: 1 Spalte bei ≤ 768px

Rationale: Statistische Exploration war nicht im Zielbild explizit, aber QFD-Anforderung "Schnell Überblick gewinnen" impliziert quantitative Auswertungen. Hybrid-Lösung (vollständige Dashboardseite) gewählt, da eingebettete Mini-Charts Detailtiefe nicht ermöglichen.

#### 13.1.3 Kartenexploration

Implementiert: MapLibre GL JS 4.7.1 (statt Leaflet)

Begründung: ADR-001 (WebGL-Performance, native clustering, moderne API).

Features:
- Clustering mit Rollenkodierung (Farbe basierend auf überwiegender Rolle im Cluster)
- Popups: Multi-Person-Popups bei überlappenden Koordinaten (ADR-002)
- Filter: Briefaktivität (Absenderin/Erwähnt/Nur SNDB), Berufsgruppen (7 Kategorien), Zeitfilter mit zwei Modi (noUiSlider 15.7.1 dual-handle)
- Zeitfilter: Zwei Modi - "Korrespondenz" (1762-1824, Briefjahre) und "Lebensdaten" (1700-1850, Geburt/Tod), kompakte Tab-Umschaltung
- CSV-Export: Export gefilterter Personen mit Kernmetadaten (ID, Name, GND, Lebensdaten, Orte, Berufe, Briefanzahl, Rolle)
- Performance: TTI < 3s erreicht (Ziel: ≤ 2s)

Nicht implementiert: Heatmap-Layer, Brushing & Linking zu Timeline/Netz (da Timeline/Netz nicht als primäre Views existieren).

#### 13.1.4 Personenprofil (Abweichungen)

Implementiert: Card-based Layout (keine Tabs)

Begründung: Kognitive Last reduzieren; alle Informationen auf einer Seite scrollbar; Tabs würden Informationen verstecken und Suchmaschinenindexierung erschweren.

Struktur:
1. Header: Name, Lebensdaten, Rolle-Badge, GND/SNDB-Links (inline, nicht große Boxen)
2. Biography Card: SNDB Regestausgabe (Fließtext)
3. Correspondence Card: Übersichten (Sent/Mentioned), visuelle Indikatoren
4. Locations Card: Mini-Karte mit Wirkungsorten
5. Occupations Card: Liste mit SNDB-Links
6. Data Quality Card: Icons (✓/✗/i), Transparency-First
7. Citation Card: Copy-to-Clipboard (Clipboard API)

Nicht implementiert: Separate Tabs für Korrespondenz/Netz/Orte/Quellen. Briefdetail-Views mit Regesten. AGRELON-Beziehungsfilter (Netzwerk-Tab).

Rationale: MVP fokussiert auf Biogramm + Quellenlinks. Briefdetails würden separate API/TEI-Integration erfordern (TEI-Verfügbarkeit nur 15,7%). Netzwerkvisualisierung auf Personenseite würde Seitenladezeit erhöhen.

#### 13.1.5 Suche

Implementiert: Global Search (Typeahead, Navbar)

Features:
- Keyboard-Navigation (Arrow keys, Enter, Escape)
- Highlighting matched text
- Direct links zu person.html
- ARIA labels (accessibility)

Scope: Nur Personen (448 Einträge)

Nicht implementiert: Unified Search über Personen/Orte/Briefe. Facet-Integration. Sortierung nach Relevanz/Häufigkeit. Export-Funktionalität.

Begründung: 448 Personen sind typeahead-fähig; Briefe (15.312) würden serverseitige Suche erfordern.

#### 13.1.6 Component Architecture (nicht im Zielbild)

Shared Navbar via Async Loading:

- docs/components/navbar.html (full: search + stats link)
- docs/components/navbar-simple.html (minimal: nur branding)
- docs/js/navbar-loader.js (async fetch + innerHTML injection)

Pattern:
```javascript
import { loadNavbar } from './navbar-loader.js';
await loadNavbar('full'); // oder 'simple'
```

Rationale: DRY-Prinzip, Single Source of Truth für Navigation, einfaches Update (1 Datei statt 3).

Nicht implementiert: Web Components (Browser-Support-Überlegungen), Build-Step (Static-First-Prinzip).

### 13.2 Entfernte Features (Design Decisions)

#### 13.2.1 Timeline als primäre Ansicht

Zielbild: Hero-Explorer mit 3 Tabs (Karte/Zeit/Netz)

Implementiert: Nur Karte als Hauptansicht, Zeitfilter in Sidebar

Begründung (ADR-005, revidiert in Session 10):
- Temporaler Filter (noUiSlider) ausreichend für Use-Case "Zeitverlauf filtern"
- Timeline als Visualisierung (read-only) schwer mit Filtern kombinierbar
- Brushing-Paradigma für Laien-Nutzer ungewohnt
- Konsistenz: Alle Filter in Sidebar (Rolle, Beruf, Zeit)
- Timeline-Daten jetzt im Brief-Explorer (Brief-Timeline Chart)

#### 13.2.2 Netzwerk als primäre Ansicht

Zielbild: Dual-Layer (Ko-Erwähnung + SNDB-AGRELON), Personenprofil-Tab

Implementiert: Archiviert (network.html/network.js/network.css existieren, aber nicht verlinkt)

Begründung:
- AGRELON-Daten in persons.json vorhanden (berufe_beziehungen: 44 Typen)
- Force-Graph-Implementierung existiert (3d-force-graph)
- Performance-Herausforderung bei 448 Knoten + Relationen
- UX-Herausforderung: Filter + temporale Projektion + Layout-Stabilität
- Zurückstellung zugunsten MVP-Kernfeatures

Zukünftige Reaktivierung möglich mit:
- WebGL-Rendering (sigma.js oder yFiles)
- Serverseitige Graph-Aggregation
- Fokus auf Ego-Netzwerke (Person + 1-Hop-Nachbarn)

#### 13.2.3 Stories, Briefe, Orte als separate Seiten

Zielbild: 7 Hauptnavigationspunkte

Implementiert: 2 Seiten (index.html, person.html) + 1 Dashboard (Brief-Explorer / stats.html)

Begründung:
- Stories: Redaktioneller Aufwand (Kuration), keine Inhalte vorhanden
- Briefe: Erfordern separate Datenstruktur, TEI-Integration, Regest-Parsing
- Orte: 227 einzigartige Orte, aber viele mit nur 1-2 Personen; Kartenansicht ausreichend

Architektur-Entscheidung: Context over Navigation – Informationen kontextuell integrieren (Mini-Karten in Personenprofilen, Briefstatistik in Person Cards) statt separate Index-Seiten.

### 13.3 Design System: Ist-Stand

#### 13.3.1 Tokens (Implementierung)

Canonical Source: docs/css/tokens.css (erstellt 2025-10-29, Phase 1)

58 Tokens in 6 Kategorien:

1. Colors (21 tokens):
   - Primary/Secondary/Accent (Palettentreue zu Zielbild)
   - Role Colors (4: sender/mentioned/both/indirect)
   - Badge Colors (4: GND green/SNDB gold mit Hintergründen)
   - Functional Colors (4: success/info/warning/error)

2. Typography (11 tokens):
   - Font Family: System font stack
   - Font Sizes: 12/14/16/18/24/32/48 (Zielbild: 12/14/16/20/24/32)
   - Line Heights: 1.4/1.6/1.8

3. Spacing (8 tokens):
   - 4/8/12/16/24/32/48/64 px (Zielbild: 4/8/12/16/24/32, erweitert um 48/64)

4. Layout (2 tokens):
   - Sidebar Width: 280px
   - Navbar Height: 60px

5. Breakpoints (5 tokens):
   - 480/768/1024/1200/1400 px (Zielbild: ≤640/≤1024/>1024)
   - Standardisiert auf 5 Stufen (mobile-first)

6. Design Elements (11 tokens, neu):
   - Border Radius: 3/4/8 px
   - Shadows: sm/md/lg (3 Stufen)
   - Transitions: 0.1s/0.2s/0.3s
   - Z-Index Scale: 7 Stufen (1-1060)

Import-Strategie:
```css
@import url('tokens.css');
```

Token-Import Status (aktualisiert 2025-11-04):
- ✓ stats.css: Importiert tokens.css (vollständig integriert, 20+ Tokens)
- ✓ search.css: Importiert tokens.css (vollständig integriert, 8+ Tokens)
- ✓ person-cards.css: Importiert tokens.css (vollständig integriert, 25+ Tokens)
- ✗ style.css: Dupliziert Tokens lokal in Zeilen 1-54 (sollte importieren statt duplizieren)
- ✗ network.css: Nicht migriert, 8 hard-coded Farben (archiviert, siehe 13.2.2)

Kritische Probleme identifiziert (2025-11-04):

1. style.css dupliziert alle 58 Tokens statt tokens.css zu importieren
   - Zeilen 1-54 enthalten vollständige :root-Deklaration
   - Verhindert Single Source of Truth
   - Lösung: Ersetze durch `@import url('tokens.css');`

2. Undefinierte Token-Referenzen in style.css
   - Line 194: `--color-bg-secondary` (sollte `--color-bg-light` sein)
   - Line 258: `--color-text-secondary` (sollte `--color-text-light` sein)
   - Führt zu CSS-Fehlern

3. Fehlende Status-Farben in tokens.css
   - person-cards.css Lines 313-327: Hard-coded #28a745, #dc3545, #17a2b8
   - Sollten als Tokens definiert werden: `--color-status-success`, `--color-status-error`, `--color-status-info`

Empfohlene Fixes:
- Phase 1: style.css reparieren (15 min)
- Phase 2: tokens.css ergänzen + person-cards.css migrieren (15 min)
- Phase 3: network.css entfernen oder migrieren (optional)

#### 13.3.2 Breakpoints (Standardisierung)

Zielbild: 3 Breakpoints (≤640, ≤1024, >1024)

Implementiert: 5 Breakpoints (480/768/1024/1200/1400)

Rationale:
- 480px: Small Phones (iPhone SE)
- 768px: Tablets (iPad Portrait)
- 1024px: Small Laptops
- 1200px: Desktops (Brief-Explorer Grid 2-Spalten)
- 1400px: Large Screens

Verwendung:
```css
@media (max-width: 480px) { /* Mobile */ }
@media (max-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
```

Konsistenz: Alle Dateien verwenden --breakpoint-* tokens (außer network.css).

#### 13.3.3 Atomic Design: Ist-Stand

Atome (implementiert):
- Badge: GND/SNDB links (inline, green/gold)
- Button: btn-export (CSV/PNG), btn-copy (Citation)
- Input: search, range slider (noUiSlider)
- Icons: ✓/✗/i (Data Quality), 📊 (Stats)

Moleküle (implementiert):
- Search Field + Typeahead Dropdown (navbar)
- Filter Panel (Sidebar: Rolle/Beruf/Zeit)
- Stat Card (Header + Chart Container + Export Buttons)

Organismen (implementiert):
- Navbar (Brand + Search + Stats Link + Live Counters)
- Person Card (Mini-Card in Map Popups)
- Biography Card, Correspondence Card, etc. (Personenprofil)
- Chart Container (ECharts-Integration)

Templates (implementiert):
- Map Explorer (index.html): Navbar + Sidebar + Map Canvas
- Person Profile (person.html): Navbar + Card Grid
- Brief-Explorer (stats.html): Navbar + Sidebar + Stats Grid

Nicht implementiert: Briefliste, Netzwerk-Canvas, Mini-Karte in Tooltips.

### 13.4 Technologie-Stack: Abweichungen

Zielbild → Ist-Stand:

- Karte: Leaflet → MapLibre GL JS 4.7.1 (ADR-001: WebGL-Performance)
- Timeline: D3.js → ECharts (integriert in Stats Dashboard)
- Netzwerk: (nicht spezifiziert) → 3d-force-graph (archiviert)
- Slider: Native range input → noUiSlider 15.7.1 (dual-handle)
- Charts: (nicht spezifiziert) → Apache ECharts 5.5.0 (neu)

Konstanten:
- Vanilla JavaScript ES6 (kein Framework)
- CSS Custom Properties (Token-System)
- Static-First (GitHub Pages)
- Progressive Enhancement

### 13.5 Informationsarchitektur: Vereinfachung

Zielbild (7 Seiten):
```
Entdecken → Personen → Briefe → Orte → Netzwerk → Stories → Daten & API
```

Ist-Stand (3 Seiten):
```
Karte (index.html) ←→ Personenprofil (person.html)
                ↓
        Brief-Explorer (stats.html)
```

Navigationselemente:
- Navbar: Brand (→ index.html) + Search + Brief-Explorer-Link + Live-Counter
- Map Popups: Person-Links (→ person.html?id=...)
- Person Pages: Zurück-Link (→ index.html)

Sekundäre Navigationsachsen (Filter):
- Rolle: Absenderin/Erwähnt/Nur SNDB (3 Checkboxen)
- Berufsgruppen: 7 Kategorien (Checkboxen)
- Zeit: 1762-1824 (noUiSlider dual-handle)

Nicht implementiert: Sprache, Textbasis, Publikation, Beziehungstyp als Filter (Daten vorhanden, UI fehlt).

### 13.6 Performance: Ist-Stand

Messwerte (Chrome DevTools, 3G Fast):

- index.html (Map):
  - persons.json: 447 KB (gzipped: ~100 KB)
  - Time to Interactive: 2.8s (Ziel: ≤2s) – 93% erreicht
  - Map Rendering: <500ms (WebGL)
  - Filter Update: <100ms

- person.html (Profile):
  - Initial Load: <1s (Mini-Map lazy)
  - Clipboard API: <50ms

- stats.html (Dashboard):
  - Chart Rendering: <500ms (5 Charts parallel)
  - Export CSV: <100ms
  - Export PNG: <300ms (canvas.toDataURL)

Optimierungen:
- MapLibre Clustering (Cluster-Radius: 50px, max Zoom: 15)
- Lazy Loading: Person pages nur bei Bedarf
- Component Caching: Navbar einmalig geladen
- No Build Step: CDN für Libraries (ECharts/MapLibre/noUiSlider)

Bottlenecks:
- persons.json: 447 KB ungzipped (könnte auf ~200 KB reduziert werden durch Entfernen ungenutzter SNDB-Felder)
- MapLibre Initial Load: 1.2s (CDN-abhängig)

### 13.7 Accessibility: Ist-Stand

Implementiert:
- Semantic HTML5 (nav, main, aside, section, article)
- ARIA Labels (aria-label, role="navigation", role="listbox")
- Keyboard Navigation (Search: Arrow/Enter/Escape)
- Focus Indicators (outline auf allen interaktiven Elementen)
- Alt Text (Data Quality Icons: aria-label)
- Color Contrast: WCAG AA (alle Textfarben ≥4.5:1)

Nicht implementiert:
- Screen Reader Testing (NVDA/JAWS)
- Skip Links (Navigation überspringen)
- ARIA Live Regions für Filter-Updates (außer Navbar-Counter)
- Tastatur-Navigation für Karte (MapLibre-Limitation)
- Color Patterns für Colorblind Users (Farbe + Form noch nicht durchgängig)

### 13.8 Offene Punkte für zukünftige Iterationen

Kurzfristig (Phase 3):
- tokens.css Migration: person-cards.css, search.css (5-10 min)
- network.css Entscheidung: Löschen oder aktualisieren (15 min)
- Favicon & Meta Tags (Open Graph, Twitter Cards)

Mittelfristig:
- Briefdetail-Seite mit Regesten (Daten vorhanden, UI fehlt)
- Ortsprofil-Seite (227 Orte, analog zu Personenprofil)
- Unified Search (Personen + Orte + Briefe)
- Netzwerk-Reaktivierung (Ego-Netzwerke, WebGL)

Langfristig:
- Stories (kuratierte Dossiers, redaktioneller Content)
- API-Endpunkte (JSON-Export, Permalinks)
- TEI-Integration (15,7% verfügbar, Parser erforderlich)
- AGRELON-Visualisierung (44 Beziehungstypen)
- Erweiterte Accessibility (WCAG AAA, Screen Reader Testing)

### 13.9 Lessons Learned

Design Decisions:

1. MVP-Fokus überzeugt: 3 Seiten (statt 7) decken Top-3-Tasks ab
   - Person finden: Global Search ✓
   - Räume erkunden: Kartenansicht ✓
   - Quantitativ verstehen: Brief-Explorer ✓

2. Card-Layout > Tabs: Alle Informationen sichtbar ohne Klicks
   - Kognitive Last niedriger
   - SEO-freundlicher
   - Mobile-optimiert (scrollbar)

3. Brief-Explorer als Hybrid-Lösung: Vollständige Seite besser als eingebettete Mini-Charts
   - Export-Funktionalität zentral
   - Detailtiefe ermöglicht
   - Druckbar für Publikationen

4. Component Architecture: Shared Navbar via Async Loading funktioniert
   - Kein Build-Step nötig
   - DRY-Prinzip
   - Schnelle Updates

5. Token-System nachträglich: Designkonflikte erst nach 3 CSS-Dateien sichtbar
   - Lehre: tokens.css von Anfang an
   - Spacing-Konflikte führten zu visuellen Inkonsistenzen
   - Breakpoint-Chaos (5 verschiedene Werte)

Technische Insights:

- MapLibre > Leaflet: WebGL-Performance kritisch bei 227 Punkten + Clustering
- ECharts > D3.js: Deklarative API schneller für Standard-Charts
- noUiSlider: Touch-freundlich, dual-handle out-of-the-box
- Vanilla JS: Kein Framework nötig für 2.000 LOC, Bundle-Size minimal

Prozess-Erkenntnisse:

- JOURNAL.md als Single Source of Truth: 14 Sessions dokumentiert, nachvollziehbar
- ADRs inline: Architekturentscheidungen direkt in Commits
- Test-First bei Pipeline: 48 Tests verhinderten Regressions
- Design-Reality-Gap: design.md (Zielbild) vs. Implementierung dokumentieren

Datenkonflikte:

- 49% indirekte Evidenz (nur SNDB, keine Briefe): Transparenz in UI kritisch
- 50% ohne Koordinaten: Karte zeigt nur Hälfte des Datensatzes
- 54% ohne Berufsdaten: Berufsfilter wirkt nur auf Teilmenge

Nutzerfeedback-Integration:

- Timeline-Entfernung (Session 10): Brushing-Paradigma zu ungewohnt
- Brief-Explorer (Session 14): Nachfrage nach quantitativen Analysen
- Person-Page-UX (Session 13): Große GND-Boxen zu dominant

--- 
