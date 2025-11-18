# HerData Journal — Review & Rewrites

## Teil A — Original-Kompaktfassung (Referenz)

### HerData Journal — Kompaktfassung (gleiche Information, präziser)

## 2025-11-09

### Session 23 — Pin-Feature Entfernung

**Grund:**
- Pin-Feature für Netzwerk-Vergleich auf Karte funktionierte nicht zuverlässig
- Wissenskorb bietet bessere Alternative für Netzwerk-Analyse

**Entfernt:**
- JavaScript: pinnedConnections Array und alle zugehörigen Funktionen (ca. 220 Zeilen)
- HTML: Pinned-Networks Container und Clear-All-Pins Button
- CSS: Alle .btn-pin-*, .pinned-* Styles (ca. 100 Zeilen)
- Pin-Buttons aus Single-Marker-Popup, Cluster-Popup, Debug-Panel

**Alternative:**
- Wissenskorb (wissenskorb.html) für dedizierte Netzwerk-Analyse
- 3 Modi: AGRELON, Places, Occupations
- Cytoscape.js Graph-Visualisierung
- LocalStorage Persistierung

### Session 22 — Mobile Responsive Navigation

**Mobile Navigation Implementierung:**
- Burger-Menü: Slide-in von rechts mit Overlay (280px breit, max 80vw)
- View-Switcher: 3 Hauptansichten (Karte/Personen/Brief-Explorer) immer sichtbar auf Mobile
- Touch-Targets: 44×44px minimum (WCAG 2.1), View-Buttons min-height 44px
- Icons auf ≤480px: fa-map, fa-users, fa-envelope (Text versteckt, font-size: 0)

**Navigation-Struktur:**
- Primär (immer sichtbar): Karte, Personen, Brief-Explorer
- Sekundär (Burger-Menü): Wissenskorb, Vault, Orte, Download, Suche
- Schließen: Burger-Button, Overlay-Klick, ESC-Taste, Link-Klick

**Landscape-Modus (≤768px):**
- Navbar-Höhe: 60px → 50px (mehr vertikaler Platz)
- Touch-Targets: 44px → 40px (akzeptabel)
- Sidebar/Mobile-Menu: Höhe angepasst (calc(100vh - 50px))

**Navbar-Konsolidierung:**
- 5 Templates → 1 Template (navbar.html)
- Automatische URL-basierte Aktivierung (setActiveView())
- Relative Pfade dynamisch korrigiert für /synthesis/ Subfolder
- Gelöscht: navbar-map.html, navbar-simple.html, navbar-stats.html, navbar-synthesis.html

**Mobile Search:**
- Suchfeld im Burger-Menü integriert
- Separate Event-Handler für Desktop/Mobile in search.js
- Search-Ergebnisse im Mobile-Context

**Accessibility:**
- aria-expanded für Burger-Menu
- aria-pressed für View-Switcher
- Fokus-Ring auf allen Buttons (2px solid rgba(255,255,255,0.8))
- Body-Scroll verhindert bei offenem Menü
- Tastatur-Navigation: Tab, ESC, Enter

**Dateien:**
- Geändert: navbar.html, navbar-loader.js, search.js, style.css, vault.css
- Gelöscht: navbar-map.html, navbar-simple.html, navbar-stats.html, navbar-synthesis.html, responsive_dossier.md
- Dokumentation: design.md (Section 6.6 Responsive Design hinzugefügt)

**Breakpoints:**
- ≤ 480px: Icon-only view-switcher
- ≤ 768px: Burger-Menu aktiv
- > 768px: Desktop-Navigation

### Session 21 — UI/UX Optimization & Layout Improvements

**Visuelle Verbesserungen:**
- Netzwerk-Linienfarben optimiert: Familie #D0388C, Beruflich #147D7E, Sozial #2E7D32, Korrespondenz #6C5CE7
- Linien-Transparenz: Hover 0.6, Pinned 0.8 (40% weniger visuelles Rauschen)
- Basemap entsättigt: saturate(0.7) brightness(1.05) für bessere Figur-Grund-Trennung

**Layout-Optimierung:**
- Sidebar kompakter: Button-Padding 50% reduziert (8×12px statt 16×24px)
- Filter-Gruppen-Spacing: 48px → 24px
- 2-Spalten-Layout: Aktivität+Berufsgruppe, Ortstyp+Netzwerk nebeneinander (~120px vertikaler Platz gespart)
- Legende von Karte in Sidebar verschoben, Netzwerk-Typen aus Legende entfernt (Redundanz)

**Neue Features:**
- Wissenskorb Navigation: Zoom In/Out, Fit to View, Help-Tooltip für Cytoscape-Graph
- CSS Design Tokens: Zentrale Farbdefinitionen in design-tokens.css
- Debug-Panel Pin-Button: Rotation entfernt (nur Farbwechsel)

**Code-Cleanup:**
- CSV-Export entfernt (Button + initCSVExport() in app.js)
- .map-legend CSS entfernt (jetzt in Sidebar)
- Alte Netzwerk-Dokumentation konsolidiert

**Dateien:**
- Erstellt: design-tokens.css, CHANGES-2025-01-09.md
- Geändert: network-utils.js, app.js, index.html, style.css, network.css, debug.css, wissenskorb.js, wissenskorb.html
- Dokumentation: network-visualization-analysis.md, network-enhancement-plan.md, network-implementation-summary.md

**Ergebnis:**
- Konsistentere Farbpalette (colorblind-safe)
- 15-20% mehr Platz für Karte
- Bessere Accessibility-Vorbereitung
- Zentrale Design-Token-Verwaltung

## 2025-11-05

### Session 20 — Wissenskorb Edge-Tooltips

**Netzwerk-Visualisierung:**
- Edge-Tooltips implementiert in wissenskorb.js (Zeilen 677-724)
- Hover über Kanten zeigt Beziehungstypen und Kardinalität
- Bei mehreren Verbindungen: Count + Liste der Typen (max. 5 mit "+X weitere")
- Bei einzelner Verbindung: Beziehungstyp direkt
- Custom Tooltip-DIV folgt Mauszeiger mit 10px Offset
- Styling: Semi-transparenter dunkler Hintergrund, weiße Schrift

**Geografische Visualisierung:**
- Versuch: Leaflet.js als Kartenhintergrund mit Place-Nodes an realen Koordinaten
- Implementierung: Preset Layout mit latLngToContainerPoint Konvertierung, Person-Nodes clustered um Places
- Entscheidung: Rückgängig gemacht auf User-Feedback ("zu viel")
- Grund: Überladene Darstellung, schlechtere Lesbarkeit als force-directed Layout
- Revert: Leaflet.js entfernt, COSE Layout für Places-Modus wiederhergestellt
- Code: wissenskorb.js (-54 Zeilen Map-Creation, -28 Zeilen Preset Layout), wissenskorb.html (-1 Script-Tag), basket.css (-15 Zeilen Layering)

**Layout-Struktur:**
- Places-Modus nutzt jetzt identisches COSE Layout wie Occupations-Modus
- Hub-and-Spoke Struktur für beide Modi mit zentralen Knoten (Places/Occupations)
- Consistent nodeRepulsion, idealEdgeLength, gravity Parameter

**Dokumentation:**
- wissenskorb-implementation.md: Edge-Tooltips dokumentiert, geografische Visualisierung als verworfen markiert
- wissenskorb-status.md: Netzwerk-Modi aktualisiert, Zoom/Pan-Info ergänzt
- decisions.md: Neue Entscheidung "Wissenskorb Netzwerk-Visualisierung ohne geografische Karte"

**Dateien:**
- Geändert: wissenskorb.js, wissenskorb.html, basket.css
- Dokumentation: wissenskorb-implementation.md, wissenskorb-status.md, decisions.md

**Ergebnis:**
- Informative Edge-Tooltips zeigen Beziehungskontext beim Hover
- Einfacheres, klareres Graph-Layout für alle Modi
- Dokumentierte Entscheidung gegen geografische Komplexität

### Session 19 — Navbar-Umstrukturierung & Brief-Explorer Phase 2a

**Navigation:**
- Navbar umstrukturiert: View-Switcher (Karte | Personen | Brief-Explorer) gruppiert alle Datenansichten links, Dokumentation (Vault | Orte | Download) rechts
- "Synthese" → "Personen" umbenannt (synthesis/index.html = detaillierte Personentabelle, nicht Synthese-Tool)
- Index-Dropdown entfernt: people.html gelöscht (redundant zu synthesis/index.html), places.html als direkter Link
- Navbar-Komponenten: 4 Varianten (navbar.html, navbar-map.html, navbar-synthesis.html, navbar-stats.html)

**Brief-Explorer Phase 2a:**
- Sidebar-Layout implementiert: KPI-Cards (1.793 Briefe, 448 Frauen, 227 Orte) + Zeitfilter in Sidebar
- stats-header entfernt, konsistentes Layout mit Karte/Personen-View
- Zeitfilter-Modi: "Korrespondenz" (1762-1824) vs "Lebensdaten" (1700-1850) mit ECharts dataZoom
- 2x2 Chart-Grid im Main-Content (Berufe, Timeline, Orte, Generationen)

**Datenkorrektur:**
- KPI-Briefzahl korrigiert: 15.312 → 1.793 (15.312 = CMIF-Gesamtkorpus, 1.793 = Briefe von/mit Frauen)
- Klarstellung in data.md: 1.793 Briefe (11,7% des CMIF-Korpus), 191 Absenderinnen, 230 mit correspondence-Arrays
- KPI-Cards konsistent: Briefe → stats.html, Frauen → synthesis/index.html, Orte → places.html

**Dateien:**
- Gelöscht: people.html, people.js (redundant)
- Geändert: 4 Navbar-Komponenten, stats.html, index.html, synthesis/index.html (Title), 3 Knowledge-Vault-Docs (data.md, requirements.md, decisions.md)
- CSS: stats.css (sidebar timeline styles, Zeilen 385-416)

**Ergebnis:**
- Klarere Navigation: 3 Datenansichten im View-Switcher, keine Redundanz
- Korrekte Datenauszeichnung: 1.793 Frauen-Briefe vs. 15.312 CMIF-Gesamt
- Konsistentes Sidebar-Layout über alle Views

**Session 19 (Fortsetzung) — Font Awesome Integration & Globale Suche:**

**Icon-System:**
- Font Awesome 6.5.1 CDN in alle 7 HTML-Seiten integriert (index.html, stats.html, person.html, synthesis/index.html, places.html, download.html, vault.html)
- Emoji-Icons durch Font Awesome ersetzt:
  - Detail-Link: fas fa-external-link-alt (Personen-Tabelle → person.html Vollansicht)
  - Wissenskorb: fas fa-bookmark (dynamische Farbe: accent bei gespeichert, #ccc bei leer)
- CSS-Hover-Effekte: Scale-up 1.15x bei Wissenskorb, Opacity-Transition bei Detail-Link

**Globale Suche:**
- GlobalSearch-Klasse bereits vorhanden in search.js (Dropdown mit Top-10-Ergebnissen, Keyboard-Navigation)
- Erweitert auf alle Pages: places.js, download.js, vault.js importieren nun GlobalSearch
- Konsistente Funktionalität: Suche in Name + Varianten, Navigation zu person.html?id=...

**Session 19 (Fortsetzung) — Brief-Explorer Phase 2b:**

**Externes Feedback (10 Vorschläge):**
- Evaluiert: Linked Brushing, Horizontal Orte-Chart, Filter Chips = Quick Wins
- Verworfen: Briefe/Ereignisse-Toggle (Datenquelle unklar: 1.793 hardcoded vs 7.472 Timeline vs 8.039 correspondence-Einträge), Typografie-Tuning (Aufwand > Nutzen)

**Phase 2b Implementierung:**
- Horizontal Places Chart: Achsen getauscht für bessere Lesbarkeit, eliminiert 45° rotierte Labels
- Linked Brushing: ECharts connect() verknüpft alle 5 Charts (masterTimeline, occupations, places, cohorts, activity) für koordinierte Tooltips und Highlights
- Filter Chips: Visuelle Anzeige aktiver Filter mit × Button zum Entfernen (Recognition over Recall Principle)

**Technische Details:**
- echarts.connect() in initCharts() verbindet alle Charts für Coordinated Multiple Views (CMV)
- FilterState.subscribe() triggert updateFilterChips() bei dataZoom-Events
- Filter Chip × Button dispatched dataZoom-Reset-Action
- Horizontal Bar Chart: left: 30% Grid, reversed data order, inside labels mit weißer Farbe

**Dateien:**
- docs/js/stats.js: Horizontal Places Chart (Zeilen 554-589), echarts.connect() (Zeilen 387-398), updateFilterChips() (Zeilen 326-379)
- docs/stats.html: Active Filters Container mit filter-chips div
- docs/css/stats.css: Filter Chip Styles (pill design, hover states, remove button)

**Design-Entscheidungen:**
- Horizontale Balken matchen Occupations Chart für Konsistenz
- Blaue Filter Chips nutzen --color-primary für Brand-Konsistenz
- Filter Chip × Button: opacity 0.8 default, 1.0 on hover
- Active Filters Container standardmäßig versteckt, nur bei aktiven Filtern sichtbar

**Ergebnis:**
- Brief-Explorer Phase 2b komplett: CMV-Pattern mit transparenter Filter-State-Verwaltung
- Horizontale Orte-Chart verbessert Lesbarkeit signifikant (keine rotierten Labels)
- Filter Chips ermöglichen schnelles Undo (1 Klick statt Timeline-Manipulation)

**Session 19 (Fortsetzung) — Brief-Explorer Phase 2c+2d:**

**Phase 2c - Treemap & Click-to-Filter:**
- Berufsverteilung: Bar Chart → Treemap mit ALLEN 73 Berufen (statt Top-10)
- Farbgradient: Light-to-dark blue basierend auf Personenanzahl (visualMin/visualMax)
- Click-to-Filter: Klick auf Beruf/Ort aktiviert Filter (Toggle-Verhalten)
- Multi-dimensionales Filtern: Zeit + Beruf + Ort kombinierbar
- Filter Chips erweitert: Zeigen Beruf/Ort mit Personenanzahl

**Phase 2d - Layout-Optimierung & Activity-Filter:**
- Grid-Layout: 2x2 → Full-width Treemap + 2 Charts (Orte + Generationen)
- Briefaktivität: Chart entfernt, ersetzt durch 4 Checkboxen in Sidebar
- Activity-Kategorien: Absenderin (nur Briefe gesendet), Erwähnt (nur erwähnt), Beides, Nur SNDB
- Activity-Filter-Logik: Kategorisiert Personen nach letter_count/mention_count
- Filter Chips: Zeigen aktive Activity-Filter wenn < 4 Typen selektiert

**UX-Verbesserung:**
- echarts.connect() entfernt: Verhindert verwirrende Cross-Highlighting zwischen unverbundenen Daten (Sängerin → Wien)
- Mehrfachberufe-Notiz: "Mehrfachberufe werden mehrfach gezählt" erklärt Treemap-Summen
- Beispiel: 36 Schauspielerinnen enthalten 12 Personen die auch Sängerin sind (beide gezählt)

**Technische Details:**
- FilterState erweitert: occupation, place, activityTypes (Array)
- Treemap: ECharts treemap type mit colorMappingBy: 'value', visualMin/visualMax
- Activity-Filter: 4 Checkboxen triggern FilterState.update()
- CSS: explorer-grid-phase2d (full-width + 2 cols), activity-checkboxes styles

**Dateien:**
- docs/stats.html: Activity-Checkboxen in Sidebar, Phase2d-Grid, Activity-Chart entfernt
- docs/js/stats.js: renderOccupationsChart() Treemap, initActivityFilter(), updateChartNotes() mit Mehrfachberufe-Hinweis
- docs/css/stats.css: explorer-grid-phase2d, explorer-card-full, activity-checkboxes styles

**Ergebnis:**
- Alle 73 Berufe sichtbar (statt 10), bessere Datenexploration
- Click-to-Filter ermöglicht direkte Interaktion mit Visualisierungen
- Activity-Filter als Checkboxen freien Platz für Treemap
- Transparente Datendarstellung: Mehrfachberufe explizit kommuniziert

**Phase 2e - Gefilterte Personen anzeigen:**
- "X Personen anzeigen →" Button erscheint bei aktiven Filtern
- Button-URL enthält alle aktiven Filter als URL-Parameter
- URL-Format: synthesis/index.html?occupation=X&place=Y&timeStart=A&timeEnd=B&timeMode=C&activityTypes=D&birthDecade=E
- Generationen-Chart: Click-to-Filter hinzugefügt (Klick auf 1750er → nur Personen dieser Dekade)
- Personenliste liest URL-Parameter beim Laden und wendet alle Filter automatisch an

**Technische Details:**
- buildPersonsURL(): Generiert URL mit allen FilterState-Parametern
- applyURLFilters(): Liest URLSearchParams und füllt state.filters in synthesis/js/app.js
- FilterState.birthDecade: Neues Filter-Feld für Geburtsjahrzehnt-Filterung
- synthesis applyFilters(): Erweitert um occupation, place, birthDecade Filterlogik
- Generationen-Chart Click-Handler: Extrahiert Dekade aus "1750er" Label

**User Flow:**
1. Brief-Explorer: Klick Schauspielerin → Filter-Chip "Schauspielerin (36)"
2. Klick 1780er → Filter-Chip "1780er Generation (12)"
3. Button: "12 Personen anzeigen →"
4. Weiterleitung zu synthesis/index.html?occupation=Schauspielerin&birthDecade=1780
5. Personenliste zeigt nur 12 gefilterte Frauen

**Dateien:**
- docs/stats.html: "View Persons" Button in active-filters div
- docs/js/stats.js: buildPersonsURL(), birthDecade Filter, Generationen Click-Handler
- docs/css/stats.css: btn-view-persons styles (margin-left: auto für rechte Ausrichtung)
- docs/synthesis/js/app.js: applyURLFilters(), state.filters.birthDecade, occupation/place/birthDecade Filter-Logik

**Ergebnis:**
- Nahtloser Übergang von statistischer Exploration zu konkreter Personenliste
- Alle Filter-Dimensionen werden über URL-Parameter weitergegeben
- Multi-dimensionales Filtern funktioniert über beide Views hinweg
- Click-to-Filter auf allen 3 Charts (Berufe, Orte, Generationen)

**Personen-View UX:**
- Dual-Search: Global-Navbar-Dropdown UND Tabellenfilterung parallel (synthesis/js/app.js setupGlobalSearch)
- Visual Highlight: Detail-Panel pulsiert beim Öffnen (600ms Animation, -8px zu -4px box-shadow)
- Detail-Link-Icon in Tabelle: Direkter Sprung zur Vollbild-Detailansicht person.html in neuem Tab

**Dateien:**
- 7 HTML-Seiten: Font Awesome CDN hinzugefügt
- 3 JS-Dateien: GlobalSearch-Integration (places.js, download.js, vault.js)
- synthesis/js/app.js: Icon-Rendering (fas fa-bookmark, fas fa-external-link-alt), setupGlobalSearch-Funktion
- synthesis/css/styles.css: Hover-Effekte für .btn-add-basket, .btn-detail-link

**Technologie-Stack Update:**
- Font Awesome 6.5.1 als Icon-System (CDN: cdnjs.cloudflare.com)
- Ersetzt Emoji-basierte Icons für konsistente, skalierbare Darstellung
- Globale Suche nun auf allen Views verfügbar (außer person.html Detailansicht)

### Session 18 — Phase 2 UI-Verbesserungen & KPI-Karten

* **Token-Konsolidierung:** tokens.css als Single Source of Truth; 75 Zeilen Duplikate entfernt aus style.css, network.css, synthesis/styles.css; 8 fehlende Tokens hinzugefügt.
* **Visuelle Verbesserungen:** Zebra-Streifenmuster in Tabellen; Tabellendichte optimiert (6px 12px Padding); Filter-Labels korrigiert (Absenderin, Erwähnt, Beides, Nur SNDB); redundante "Filter"-Überschriften entfernt.
* **KPI-Karten Implementation:**
  * Dynamische KPI-Karten auf Synthesis-Seite (Personen, Briefe, Orte) mit Echtzeit-Filterung.
  * Clickable KPI-Karten auf beiden Seiten mit Tooltips und Navigation.
  * Hauptseite: Briefe → stats.html, Frauen → people.html, Orte → places.html.
  * Synthesis: Briefe → stats.html, Frauen/Orte → index.html.
  * Tooltip-Positionierung: Unten für obere Elemente (Synthesis KPI-Karten).
* **Bug-Fixes:** CSS MIME Type Error (Import-Pfad korrigiert); fehlende Navbar auf Synthesis wiederhergestellt; table-count Element-Referenz entfernt.
* **Dateien:** index.html, synthesis/index.html, synthesis/js/app.js (updateKPIs()), synthesis/css/styles.css (KPI+Tooltip-Styles), tokens.css, style.css, network.css.
* **Commits:** 6 Commits (Phase 2 UI, CSS-Fixes, KPI clickable, Tooltip-Fix, Filter-Überschriften).
* **Ergebnis:** Konsistentes Design-System, verbesserte UX durch dynamische KPIs, keine visuellen Regressionen.

## 2025-11-04

### Session 3 — Data Model Separation & CSS-Analyse integriert

* **Finale Doku-Konsolidierung:** Trennung Datenmodell vs. Datenquellen; CSS-Konsistenzanalyse in `design.md` integriert; Root bereinigt.
* **Data Model Separation**

  * Neu: `data-model.md` (vollständiges `persons.json`-Schema inkl. Feldtypen, Validierungen, Frontend-Transformationen).
  * `data.md` refaktoriert: nur Datenquellen, Provenienz, Lizenzen, Qualität.
  * Klarer Schnitt: `data.md` = **WO** Daten herkommen; `data-model.md` = **WIE** sie strukturiert sind.
* **CSS Analysis Integration**

  * `CONSISTENCY_ANALYSIS.md` nach `design.md` §13.3.1 übernommen.
  * 3 kritische CSS-Probleme: Duplikate in `style.css` (Tokens), undefinierte Token-Referenzen, fehlende Status-Farben.
  * Token-Import-Status: 3/6 CSS-Dateien nutzen `tokens.css` korrekt.
  * Entfernt: `design-css-analysis.md` (Inhalt integriert).
* **Root Cleanup**

  * Entfernt: `PR_SUMMARY.md` (obsolet, 2025-11-02), `DOCUMENTATION_CONSOLIDATION_PLAN.md` (Plan bereits umgesetzt), `CONSISTENCY_ANALYSIS.md` (integriert).
* **Knowledge Vault Status**

  * 10 Dateien in `docs/knowledge/`: `INDEX`, `project`, `data`, `data-model`, `decisions`, `requirements`, `design`, `tech`, `responsive_dossier`, `implementation-quick-wins`.
  * Alle Cross-Refs aktualisiert; `INDEX.md` spiegelt Finalstruktur.
* **Commit**

  * `8ede5e0`: Add `data-model.md` + Doku-Refactor; Diff: **+431** Zeilen (`data-model.md`), **–817** (obsolet).
* **Ergebnis**

  * Knowledge Vault vollständig, konsolidiert, klare Verantwortlichkeiten.

---

### Session 2 — Dokumentations-Konsolidierung

* **Zentralisierung:** 8 Analyse-/Planungsdoks nach `docs/knowledge/`; `JOURNAL.md` aktualisiert (856 Zeilen, inkl. Provenance-Session); `INDEX.md` restrukturiert; jetzt 17 Dateien zentral in `docs/knowledge/`.
* **Verschoben nach `docs/knowledge/`:**

  * `debug-system.md` (Provenance-System), `technical-analysis.md` (1488 Zeilen), `requirements-validation.md`, `documentation-assessment.md`, `implementation-quick-wins.md`, `implementation-mobile.md`, `responsive-design.md`.
* **Vault-Struktur**

  * Projekt: `project.md`, `research-context.md`
  * Daten: `data.md`, `debug-system.md`
  * Design: `design.md`, `responsive-design.md`
  * Requirements: `requirements.md`, `requirements-validation.md`
  * Technik: `technical-architecture.md`, `technical-analysis.md`
  * Entscheidungen: `decisions.md` (8 ADRs)
  * Netzwerk: `network-relations.md`
  * Implementierung: `implementation-quick-wins.md`, `implementation-mobile.md`
  * Doku: `documentation-assessment.md`
* **Archivierung**

  * Behalten: `hover-network-plan.md` (923 Zeilen), `CLUSTER_HOVER_DEBUG.md` (172 Zeilen).
  * `documentation/img` → `archive/documentation-img`; kein Wissensverlust.
* **Updates**

  * `INDEX.md` komplett neu, `README.md` mit „Last Updated: 2025-11-04“; Root schlank: nur `README.md`, `CLAUDE.md`, `JOURNAL.md`.
* **Commits**

  * `bdb51db` (Analysedoks verschoben), `c8973ed` (Planungsdoks + JOURNAL), `fbfa1b6` (Navigation & Timestamps).
* **Ergebnis**

  * 27 Markdown-Dateien analysiert/organisiert; 100 % Info erhalten; klare Navigation via `INDEX.md`.

---

### Session 1 — Provenance-System (Phase 1, Backend)

* **Pipeline**

  * `track_provenance=True` standard; `add_provenance()` für **11 Felder** in **4 Phasen**; Dual-JSON: `persons.json` (prod) + `persons_debug.json` (debug).
* **Abdeckung**

  * 3 695 Provenienz-Einträge für 448 Frauen (100 %); Felder: `id`, `name`, `gnd`, `dates` (Geburt/Tod), `letter_count`, `mention_count`, `role`, `places`, `occupations`, `biography`.
  * Jeder Eintrag: Quelle, XPath, Rohwert, Transformation, Timestamp.
* **Outputs**

  * `persons.json` 446 KB (prod, **ohne** Provenance, unverändert).
  * `persons_debug.json` 1,71 MB (debug, `_provenance` pro Person); **+1,28 MB** (+293 %) für volle Transparenz.
* **Performance**

  * Laufzeit 0,67 s (vorher 1,11 s); 48 Tests grün; Prod-Performance unverändert (Dateigröße gleich).
* **Implementierung**

  * `build_herdata.py` +150 Zeilen; Phase 1 (ID, Name, GND, Dates), Phase 2 (Letters/Mentions/Role), Phase 3 (Places HYBRID, Occupations, Biography), Phase 4 (Dual-JSON mit konditionalem `_provenance`).
* **Wissenschaftlicher Wert**

  * Vollständige Datenlinie; reproduzierbare Pipeline; transparente Transformation; Quellenattribution pro Datenpunkt.
* **Doku**

  * Neu: `DEBUG_SYSTEM.md`; Backup: `build_herdata.py.backup`.
* **Validierung**

  * Beispiele: Angelica Bellonata Facius (9 Provenienzfelder), Christiane Vulpius (Letter-Count mit GND-Match); alle 448 mit `_provenance`.
* **Next (Phase 2)**

  * Frontend-Debugpanel; `person.html` Rohdaten-Viewer; Hover-Tooltips; Bedarfserhebung vor Ausweitung.

---

## 2025-10-19

### Session 1 — Data Verification & Initial Docs

* Fix: Skriptpfade; CMIF verifiziert (15 312 Briefe).
* SNDB: 23 571 Personen (3 617 Frauen/15,3 %), 4 007 Orte; Feldfund: `SEXUS` (nicht `GESCHLECHT`).
* GND-Abdeckung: 53,4 % SNDB, 93,8 % CMIF-Absender.
* Neu: `data.md`, `project.md`, `research-context.md`, `TODO-Dokumentation.md`.
* Erstcommit `[dbef54b]`: 22 Dateien; `TODO` auf neutrale Berichterstattung refaktoriert; `JOURNAL.md` erstellt.

### Session 2 — Projekt-Overview & Repo-Setup

* `README.md` umfassend; `docs/` für GitHub Pages (Platzhalter).
* `requirements.md`: 14 User Stories, 5 Epics, 10 funktionale Anforderungen.
* `IMPLEMENTATION_PLAN.md`: 7-Tage Phase-1 Plan.
* `CLAUDE.md`: Style-Guidelines (keine Fettung/Emojis/Zeitschätzungen).
* Entscheidung: `.claude/` aus Git, relative Pfade.

### Session 3 — Daten-Pipeline

* Status: 95 % Doku, 5 % Code; `build_herdata.py` (4 Phasen, 1,39 s).
* Fixes: XML-Felder `SEXUS`, `ART+JAHR`, `SNDB_ID`, `BEZEICHNUNG`, `LATITUDE/LONGITUDE`.
* Phase 1: 3 617 Frauen, 34,1 % GND, 83,9 % mit Dates.
* Phase 2: 808 CMIF-Matches (192 Absender, 772 erwähnt).
* Phase 3: 1 042 Geo-enriched (28,8 %), 979 Occupations.
* Phase 4: `docs/data/persons.json` (1,49 MB).
* Windows-Fix: `[OK]` statt Unicode-Häkchen.
* Befunde: 9 antike Figuren (<1000 CE); Frauen geringere GND-Quote.
* Tests: `build_herdata_test.py` (48 grün, 1,73 s).

### Session 4 — Frontend

* `docs/` Struktur: `css/`, `js/`, `assets/`; `index.html` (Nav, Filter, Map).
* CSS Design-System; Datenvalidierungsskript (40 Zeilen, 3 617 Frauen).
* Favicon.svg; 0 Console Errors; Responsive: ≤640/≤1024/>1024 px.
* Commit `[860ebce]`: +509 Zeilen.

### Session 4 (weiter) — Design-Refinement

* Farbe: Purple-Gradient → Academic Navy `#1e3a5f`; Akzent Steel Blue `#2c5f8d`; Favicon: Solid Navy.
* `design.md` §6.1.1 aktualisiert; Begründung: vertrauenswürdigere Sprache.
* Commit `[8d8c896]`: +75/–32.

### Session 4 (weiter) — Architektur-Entscheidung

* `JOURNAL.md` → `documentation/`; ADR-001 in `decisions.md`: MapLibre vs. Leaflet vs. OpenLayers.
* Bedarf Phase 2/3: Brushing, Linking, Animationen, Heatmap.
* Entscheidung: MapLibre GL JS (WebGL); Trade-offs: 220 KB Bundle (vs. Leaflet 40 KB), Lernkurve.
* Commits `[f579aba]` (Move), `[5290160]` (ADR, 201 Zeilen).

### Session 5 — MapLibre MVP

* Wechsel auf MapLibre GL JS 4.7.1; OSM-Tiles, Center Weimar (11.3235, 50.9795).
* GeoJSON: 1 042 Features; Clustering (maxZoom=14, radius=50, step-Sizing).
* Layer: Clusters, Counts, Marker; Farben Rollen: sender/mentioned/both/indirect.
* Markergrößen: 4→12 px (z5→z15); Klick: Cluster-Zoom, Marker-Popup.
* Filter → Map in Echtzeit; Tab-Resize bei Karte.
* Commit `[e75156a]`: 419 JS-Zeilen (+480 Insertions); Bugfixes Glyphs `[97a2869]`, Font `[c2860bd]`.

### Session 6 — Clustering & Multi-Person Popups

* README mit Pages-Link; `clusterMaxZoom` 14→10; `clusterRadius` 50→40; Marker 6/10/16 px.
* Problem: 217 Frauen auf Weimar-Koords → nur Top klickbar.
* Lösung: `queryRenderedFeatures()` → Multi-Person-Popup (15 initial, expandierbar).
* ADR-002; Commit `[734908d]` (Clustering), `[9014a40]` (Multi-Person).

### Session 7 — Suche

* Nav-Suche mit Fuse.js (threshold 0,3); Felder: `name`, `name_variants`, `gnd_name`.
* Dropdown (max 10) mit Name+Dates+Badges; Klick: Zoom z12 (oder Warnung ohne Koords).
* Keyboard: Pfeile/Enter/Escape; Outside-Click-Close.
* Commit: Suche fertig.

### Session 8 — Statistik-Tab

* 4 Sektionen: Overview-Cards, Charts (Role pie, Top-Orte bar, Occupations h-bar), Birth/Death-Histogramme.
* Responsive Grid, mobil optimiert; Chart.js.
* Commit: Statistik implementiert.

### Session 9 — Research-Interface

* Feedback: Forschungsinterface nötig; bisher alle Cluster blau.
* Umbenennung Filter „Rolle“ → „Briefaktivität“; „Normierung“ entfernt; „Berufsgruppe“ (7 Kategorien) hinzu.
* 231 Berufe → 7 Gruppen (z. B. Künstlerisch 222, Literarisch 199).
* Clusterfarben nach Mehrheit: blau=writers, grün=mixed, grau=mentioned, hell=SNDB.
* Legende (BR), Tooltips: „111 Frauen | 45 geschrieben • 58 erwähnt • 8 SNDB“.
* Commit `[2f2479a]`.

### Session 10 — Timeline & Architektur

* **Initial (D3):** `timeline.js` (252 Zeilen) Histogramm 1762–1824, Brush (`d3.brushX`). Commit `[c452743]`.
* **Kritischer Bug:** Versuchte `docs/data/ra-cmif.xml` (23,4 MB) zu laden → 404 (nicht deployed).

  * Fix: Pipeline extrahiert `letter_years` je Person; aggregiertes `meta.timeline` (54 Jahre) in `persons.json`.
  * Timeline lädt aus `persons.json` (1,56 MB statt XML). Commit `[9e1ae34]`.
* **Architektur-Revision:** Brush entfernt; Hover-Tooltips; Zeitfilter in Sidebar (noUiSlider 15.7.1, Dual-Handle, Anzeige „1762 – 1824“). Commits `[ac1d6df]` (Brush→Sidebar), `[4137177]` (Hover-Fix), `[edfcb00]` (noUiSlider).
* **Final:** Timeline reine Visualisierung; Sidebar-Rangefilter; Brushing & Linking: Slider ↔ Map ↔ Timeline; Performance: <500 ms Render, <100 ms Updates; Daten: 13 414 datierte Briefe (~13 000 letter-years); ADR-005: Proposed → Implemented → Revised.
* **Lernen:** Integrationstests (Deployment), nur verarbeitete JSON nutzen, konsistente UX (Sidebar), Iteration (Brush→Hover+Sidebar).
* **Änderungen:** 6 Commits, ~500 Zeilen.

---

## 2025-10-28

### Session 11 — Kuratiertes Dataset & Pipeline-Refactor

* **Fund:** `new-data/Datenexport 2025-10-27/` (8 XML, 800 KB; 448 Frauen = 12,4 % von 3 617; Struktur `ra_ndb_*`; keine Geodaten `geo_*`).
* **Vergleich (Neu vs. Alt):**

  * GND: **60,3 %** vs **34,1 %** (+76,8 % rel.)
  * Dates: **94,0 %** vs **83,9 %** (+12,0 %)
  * CMIF-Match: **51,3 %** vs **22,3 %** (+130 % rel.)
  * Geodaten: **50,7 %** vs **28,8 %** (+76,0 %)
  * Overlap: 447 in beiden; 3 170 nur alt; 1 nur neu.
  * GND identisch für Schnittmenge (keine neuen Linkages).
* **Entscheidung:** Nur neues, kuratiertes Dataset (Qualität vor Quantität), Hybrid-Geodaten.
* **Refactor:** `build_herdata.py` (663 Zeilen)

  * P1: `ra_ndb_main.xml`, `ra_ndb_indiv.xml`, `ra_ndb_datierungen.xml`
  * P2: CMIF-Matching (bessere GND-Basis)
  * P3: HYBRID Geodaten

    * `ra_ndb_orte.xml` (neu) → SNDB_ID
    * `geo_main.xml` (alt) → Ortsnamen
    * `geo_indiv.xml` (alt) → Koordinaten
    * `ra_ndb_berufe.xml` (neu) → Berufe
    * `ra_ndb_beziehungen.xml` (neu) → AGRELON
  * P4: JSON + Meta-Update
* **Ergebnis & Performance**

  * 448 Frauen; GND 270 (60,3 %); Dates 421 (94,0 %); CMIF 230 (51,3 %; 191 Absender, 195 erwähnt); Geodaten 227 (50,7 %); Occupations 207 (46,2 %); Timeline 53 Jahre.
  * `persons.json` 0,29 MB (vorher 1,56 MB, −81 %); Runtime 0,63 s (vorher 1,4 s, −55 %); 48 Tests grün.
* **Warum alte Geodaten nötig**

  * Neu: `ra_ndb_orte.xml` enthält nur SNDB_ID (z. B. 79627 Weimar).
  * Alt: `geo_main.xml` (Name), `geo_indiv.xml` (Lat 50.9795, Lon 11.3235).
  * 121 eindeutige SNDB_IDs → vollständig auflösbar; ohne Altdateien keine Karte.
* **Doku**

  * `knowledge/data.md` aktualisiert (Statistiken, Hybrid-Diagramm); `README.md` Status/Quellen/Struktur; ADR-008 (Qualität>Quantität); `JOURNAL.md` ergänzt.
* **Insights**

  * Kuratierter Ausschnitt, keine Quality-Updates im Bestand; Auswahl über Regestausgabe-Relevanz.
* **Tech-Debt**

  * Beide Pipelines behalten (`build_herdata.py` alt, Referenz; `build_herdata.py` neu, aktiv); Vergleichstool für Qualität; ADR dokumentiert.
* **Commits**

  * Dokumentationsphase: 0 Commits (Änderungen in Vorbereitung).

---

### Session 12 — Netzwerk-View (V2 Schritt 1)

* **AGRELON-Extraktion**

  * `nsl_agrelon.xml`: 38 Beziehungstypen; `ra_ndb_beziehungen.xml`: 939 Relationen total; Filter Frauen↔Frauen: 86 Einträge (43 Paare, bidirektional); 67 Frauen haben ≥1 Relation.
  * Mapping-Fix: `IDENT/BEZIEHUNG` (nicht `ID/BEZEICHNUNG`).
  * Speicherung: A→B und B→A (semantisch reziprok), Visualisierung dedupliziert auf 43 Kanten.
* **Implementierung**

  * `docs/network.html` (Standalone), `docs/css/network.css`, `docs/js/network.js` (force-graph v1.43.5).
  * Nodes 448: blau (connected, 8 px) / grau (isoliert, 2 px); 43 Links mit Partikelrichtung, grau.
  * Interaktiv: Klick→Personseite, Hover→Tooltip; Filter: Beziehungstyp (38), Namesuche (Highlight), Reset (Zoom to fit), Labels bei Zoom>1.5.
  * Graph-Daten: Nodes {id, name, gnd_id, letter_count, relationships, hasRelationships}; Links {source, target, type, type_id, reciprocal_type}; Pair-Dedup via sortiertem Key.
  * Layout: Force (charge −50); Canvas-Rendering.
* **Performance & UX**

  * 448 Nodes flüssig (WebGL-Beschleunigung); Stabilisierung <2 s; Filter ohne Lag; Tooltip-Fade 0,2 s.
* **Forschungsfragen**

  * Zentralität, häufige Typen, Cluster, Korrelation Briefe↔Position.
* **Navigation**

  * Navbar-Link „Netzwerk“; einheitliche Navbar auf `person.html`.
* **Commits**

  * `199e3f2` (AGRELON in Pipeline), `e204647` (Netzwerk-View).
* **ROADMAP**

  * Schritt 1: **COMPLETED**; Nächstes: Kontext-Timeline (Footer) + Zeitfilter-Kopplung.

---

## 2025-10-29

### Session 13 — Person-Seite UX

* **Probleme**

  * GND/SNDB als große Buttons (verwirrend); Platzhalter „Phase 2“ Korrespondenz (irreführend); Zitation schwer kopierbar; Biografie unklar sichtbar; fehlende Qualitätsindikatoren; mobiles Spacing suboptimal.
* **Lösungen**

  1. GND/SNDB als Inline-Links („GND: [link]“, „SNDB: [link]“, Hover-Underline).
  2. Korrespondenz-Text ehrlich: „Derzeit nur Anzahlen verfügbar“.
  3. Zitation mit Monospace-Box + One-Click-Copy (Clipboard API, Feedback „Kopiert!“, 2 s; Button mobil vollbreit).
  4. Qualitäts-Icons: ✓ (grün) vorhanden, ✗ (rot) fehlt, i (blau) Meta; 20 px Rund-Badges.
  5. Biografie (448/448) bestätigt; `parseMarkup()` rendert SNDB-Format (#s+text#s-).
  6. Berufe (207/448, 46 %) mit Typ-Klassifikation.
  7. Responsive-Spacing (Breakpoints 768/480; einspaltige Stats; Copy-Button unter Text; Word-Break für lange URLs).
* **Dateien geändert**

  * `docs/js/person.js` (Inline-Links, Quality-Icons, `copyCitation()`, Platzhalter-Update).
  * `docs/css/person-cards.css` (Buttons entfernt, `.normdaten-link`, `.citation-box`, `.copy-button`, `.quality-icon`, Media Queries).
* **Technik**

  * Clipboard API `navigator.clipboard`; async/await; CSS-Transitions; Flexbox; ARIA.
* **Impact**

  * Aufgeräumte Normdaten; ehrliche Kommunikation; 1-Klick-Zitieren; visuelle Qualitätsübersicht; besser mobil.
* **Forschungsnutzen**

  * Zitierbarkeit; Quellenkritik; Transparenz; Professionalität.
* **Commit**

  * `2cba019` (+205/–28); **1 Commit**.

---

### Session 14 — Statistik-Dashboard

* **Kontext/Anforderungen**

  * US-1.4 offen (Dashboard); 33 User Stories: 12/33 umgesetzt (36 %); Lücken: Statistik, Export, Temporal-Tools.
* **Datenbefunde**

  * Berufe: 207/448 (46 %), Top: Schriftstellerin 73, Schauspielerin 36.
  * Orte: 227/448; Weimar 83 (37 %), Berlin 47, Frankfurt 26.
  * Kohorten: Peak 1750–1790 (279 = 62 %).
  * Briefaktivität: 191 Absender, 195 erwähnt, 156 beides, 218 nur SNDB (Transparenz).
  * Timeline: `meta.timeline` 1772–1824.
* **Entscheidung**

  * Eigenständige Seite `stats.html` (kein Mini-Preview in Map); Navbar-Link; Export pro Chart.
* **Implementierung**

  * Neu: `docs/stats.html` (125 Zeilen), `docs/js/stats.js` (612), `docs/css/stats.css` (202).
  * **ECharts 5.5.0**:

    1. **Berufsverteilung**: h-Bar, Top 15, In-Bar-Labels (weiß), 207/448 (46 %), Grid links 20 %.
    2. **Brief-Timeline**: Line+Area 1772–1824 (15 312 Briefe), smoothe Kurve, Blau-Gradient.
    3. **Geo-Zentren**: v-Bar, Top 10, Weimar-Dominanz (83), Forrest-Green.
    4. **Generationen**: Dekaden-Histogramm (1720er–1820er), Peak 1760er–1780er, Grau; 407/448 Birth-Data.
    5. **Briefaktivität**: Stacked Bars (Absenderinnen 191, Erwähnt 195, Beides 156, Nur SNDB 218), rollencodierte Farben.
* **Export**

  * CSV/PNG (2×) je Chart; Formate:

    * Occupations: `Beruf,Anzahl,Prozent`
    * Timeline: `Jahr,Briefe`
    * Orte: `Ort,Anzahl,Latitude,Longitude`
    * Kohorten: `Jahrzehnt,Anzahl`
    * Aktivität: `Kategorie,Anzahl,Prozent`
* **Navigation**

  * `docs/components/navbar.html`: Link „Statistik“ (📊); `style.css` Nav-Hover; Active-Highlight; globale Suche in `stats.js`.
* **Architektur**

  * CDN ECharts (~800 KB, modular); ES6-Module; `fetch` async; Resize-Handler; Grid 2-spaltig (Desktop)/1-spaltig (Mobil); Breakpoints 1200/768/480.
* **Chart-Config**

  * Tooltips; Titelzentrierung; Achsmargen; Farbschema gemäß Design-System; Schriftgrößen optimiert.
* **UX**

  * Saubere Optik; Hover-Details; 1-Klick-Export; mobil-freundlich; ARIA.
* **Forschungsnutzen**

  * Berufe-Konzentration (Kunst/Literatur); zeitliche Muster; Weimar-Zentrum; Generationen; Datenqualität sichtbar.
* **Performance**

  * Render <500 ms; Export <100 ms; keine Lags; sanfte Transitions; effiziente Verarbeitung.
* **Bugfixes**

  * Entfernt „Alle Statistiken exportieren“ (redundant); Label-Overlap gefixt (In-Bar); Timeline-CSV async; `search.css` in `stats.html`; Active-Nav-Highlight.
* **Änderungen**

  * Mod: Navbar + `style.css`; Commit `e9d9a04` (Dashboard, +998/–5).
* **Requirements**

  * US-1.4 **COMPLETED**; US-1.5 **PARTIAL** (CSV/PNG, JSON fehlt); Gesamtfortschritt 36 %→39 % (13/33).
* **Offen**

  * US-3.4 Zentren-Gravitation; US-4.1 Lebenszeit-Timeline; US-4.2 Kohorten-Analyse; NFR-3 Accessibility (Pattern/Alt-Texte).

---

### Session 15 — Doku & Code-Refactor

* **CSS/Design-System**

  * `docs/css/tokens.css` (158 Zeilen, 58 Tokens); Breakpoints 480/768/1024/1200/1400; Duplikate aus `stats.css` entfernt; `design.md` §13 Status; `docs/css/README.md` (Token-Referenz, 6 CSS-Dateien, Usage, WCAG-AA, Import-Strategie).
* **JS-DRY**

  * Problem: `loadData()`/`initSearch()` 3× dupliziert; `allPersons` 3× geladen (~1,3 MB).
  * Lösung: `docs/js/data.js` (55 Zeilen): `loadPersons()` (Fetch+Cache), `getPersonById()`, `clearCache()`.
  * Nutzen: 1× Laden (Browser+Memory-Cache); 48 Zeilen Duplikat entfernt; **66 %** Memory-Reduktion (450 KB vs 1,3 MB); SPARQL-Extension point.
  * Refactors: `app.js` (–20), `person.js` (–16), `stats.js` (–12).
  * `docs/js/README.md` (832 Zeilen): Modul-Referenz, Signaturen, Beispiele, Dataflow, Extension-Points (SPARQL-Beispiel), Performance, Browser-Kompat.
* **Bugfixes**

  * `stats.js` Export-Buttons: `initExportButtons()` Timing → `setTimeout(500ms)` + Safety; Ref. auf entfernten „Export-All“ eliminiert.
  * `app.js` Cluster-Click: Zentroid ≠ Original-Koords → `getClusterLeaves()` statt Distanzmatching (–38 Zeilen).
* **Commits**

  * `7a2ed10` (design.md Update), `27c3caa` (Phase 3 Token-Migration), `d31a802` (Shared-Data), `2f26f91` (JS-Doku), `af60655` (Fixes stats/app), `ad071d8` (Export-Init Fix).
* **Ergebnis**

  * DRY; Single Source of Truth Laden; skalierbar/SPARQL-bereit; vollständig dokumentiert; keine Breaking Changes; bessere Testbarkeit/Erweiterbarkeit; Memory −66 %; Bundle +55 Zeilen (`data.js`).

---

## 2025-10-29 (weiter)

### Session 16 — Netzwerk mit AGRELON (Hover-Linien)

* **Phase 1 — Infrastruktur**

  * `docs/js/network-utils.js` (160): `getPersonConnections()`, `getClusterConnections()`, `categorizeRelationByAgrelonId()` (Familie/Beruflich/Sozial), `getConnectionColor()`.
  * `app.js`: Hover-Events; `drawConnectionLines()` (GeoJSON LineStrings), `clearConnectionLines()`; Legende in `index.html`; `.legend-line` in `style.css`.
  * Tests: `test-network.html`, `test-network-visual.html` (synthetisch), `TESTING-NETWORK.md`.
* **Phase 2 — Datenintegration**

  * `preprocessing/integrate_relations.py` (233): `pers_koerp_beziehungen.xml` (6 580 Relationen), `nsl_agrelon.xml` (44 Typen), Mapping 34 AGRELON-IDs → 3 Kategorien, Nicht-Personen gefiltert.
  * Resultat: 67 Personen mit Relationen (von 448); **84** Relationen in `persons.json`; Verteilung: Familie 80, Beruflich 2, Sozial 2; 41 mit geo-lokalisierten Verbindungen.
* **AGRELON-Mapping**

  * Familie (16 Typen) IDs 4xxx; Beruflich (11) 3xxx; Sozial (7) 1xxx/2xxx.
* **Bugfixes**

  * `network-utils.js`: `person.places`-Check; Kategorisierung via AGRELON-ID (Prefix), zuvor alles „Unbekannt“ → jetzt korrekt farbcodiert.
* **Doku**

  * `README.md` (Netzwerk-Features), `docs/README.md` (Komponenten/Statistiken), `knowledge/hover-network-plan.md` (500+).
* **Testing**

  * `test-network-visual.html` (3 synthetische Personen); `test-relations-data.html` (Realval.); Console: „Drawing N connection lines“; Nutzer-Feedback: „das funktioniert“.
* **Commits**

  * `4b1022f` (Phase-1 Hover-Netz), `3f23e68` (AGRELON Integration), `856abde` (places-Check), `414c3cc` (ID-basierte Kategorisierung), `42a5bb0` (Doku).
* **User Stories Fortschritt**

  * US-2.2 (Ego-Network) 100 %; US-3.4 (Gravitation) 90 %; US-3.6 (Network Density) 80 %; Gesamt 52 %→67 % (+15 %).
* **Next**

  * Filter-Checkboxen Rel-Kategorien; Performance für große Cluster; Hover-Tooltips mit Details; Korrespondenz-Netz (Brief-Co-Mentions).

---

## Teil B — Verbesserte qualitative Fassung (ohne Metriken)

### 2025-11-04 — Sessions 1–3 (Konsolidierung & Provenienz)

* **Dokumentation & Struktur:** Das Projekt ist konsequent auf einen Knowledge Vault ausgerichtet. Fachinhalte wurden zentralisiert, Querverweise bereinigt und die Rollen einzelner Dateien klar benannt. `data.md` beschreibt Herkunft, Rechtliches und Qualität der Quellen; `data-model.md` definiert das Modell und seine Transformationen für das Frontend.
* **Provenienzsystem:** Die Pipeline protokolliert für alle relevanten Felder die Herkunft und Transformationen. Neben dem Produktions-JSON existiert eine Debug-Variante mit detaillierten Provenienzangaben je Datensatz. Die Laufzeit blieb praxistauglich, Tests sind vollständig grün. Das schafft Nachvollziehbarkeit und Reproduzierbarkeit im Forschungskontext.
* **CSS- und Designkonsistenz:** Tokenisierung wurde eingeführt, Inkonsistenzen dokumentiert und in das zentrale Designdokument integriert. Veraltete Einzelanalysen wurden entfernt, der Importstatus der Tokens ist dokumentiert, offene Lücken (z. B. Statusfarben) sind benannt.
* **Root-Aufräumarbeiten:** Obsolete Pläne und Zwischenstände wurden gelöscht, da sie in den aktualisierten Hauptdokumenten aufgehen.

### 2025-10-19 — Sessions 1–4 (Grundlagen & erste Implementierungen)

* **Validierung & Set-up:** Datenquellen, Felder und Kennzeichnungen wurden überprüft; erste Dokumente zu Projekt, Daten und Kontext angelegt; das Repository auf statische Ausspielung vorbereitet und grundlegende Anforderungen formuliert. Entscheidungen zu Tooling und Pfadkonventionen sind festgehalten.
* **Pipeline-Entwurf:** Die erste Version extrahiert und normalisiert die Kerndaten, ergänzt Verknüpfungen und Geoinformationen und erzeugt ein statisches JSON für die Website. Besonderheiten wie historische Personen mit sehr frühen Datierungen wurden erfasst. Tests sichern das Verhalten ab.
* **Frontend-MVP:** Eine einfache, fehlerfreie Startansicht mit Navigation, Filterung und Karte steht. Das Designsystem ist angelegt, eine initiale Datenvalidierung läuft clientseitig. Farb- und Typografieentscheidungen wurden in Richtung einer seriösen, akademischen Anmutung getroffen und dokumentiert.
* **Architekturentscheidung Karte:** WebGL-basierte Kartenbibliothek wegen Leistungs- und Visualisierungsanforderungen. Trade-offs (Größe, Lernaufwand) sind bewusst akzeptiert und in ADRs dokumentiert.

### Sessions 5–10 (Map, Suche, Statistik, Timeline)

* **Karten-Features:** Clusterung, skalierende Marker und anwendungsnahe Popups sind implementiert. Ein Mehrpersonen-Popup löst das Problem überlagerter Punkte. Filter reagieren direkt in der Karte; die Karte skaliert beim Tab-Wechsel korrekt.
* **Suche:** Fuzzy-Suche über Namen und Varianten mit Tastaturnavigation und sauberer Interaktion ist integriert.
* **Statistiken:** Ein eigener Bereich bietet zentrale Visualisierungen zu Berufen, Orten, Zeitverlauf und Kohorten. Exporte als CSV und PNG unterstützen Forschungs-Workflows. Gestaltung und Interaktion folgen dem Designsystem und sind mobil geeignet.
* **Research-Interface:** Bezeichnungen wurden präzisiert, überflüssige Filter entfernt und eine Gruppierung für Berufsbereiche ergänzt. Clusterfarben bilden nun inhaltliche Mehrheiten ab, eine Legende erklärt die Kodierung, Tooltips sind aussagekräftig.
* **Timeline & Architektur-Lerneffekte:** Die Timeline basiert nicht mehr auf einem großen Rohdatendokument, sondern auf aggregierten JSON-Daten aus der Pipeline. Die ursprünglich geplante Brush-Interaktion wurde zugunsten eines gut verständlichen Bereichs-Schiebereglers in der Seitenleiste ersetzt. Visualisierung und Filter sind gekoppelt, Performance und Verständlichkeit profitieren. Die entsprechenden Architekturentscheidungen wurden überarbeitet und festgehalten.

### 2025-10-28 — Session 11 (Kuratiertes Dataset & Hybrid-Geodaten)

* **Neuer Export:** Ein kuratiertes Teilset ersetzt die frühere, breitere Ausgangsbasis. Die Abdeckung zentraler Felder ist deutlich konsistenter; Geoinformationen werden über eine Hybridstrategie aus neuem Personenexport und älteren Geodateien zuverlässig aufgelöst. Ohne die älteren Geodateien wären Ortsnamen und Koordinaten nicht vollständig herleitbar.
* **Pipeline-Refactor:** Die neue Pipeline spiegelt diese Hybridlogik, ergänzt Berufe und Beziehungen und erzeugt ein kompakteres, schneller ladbares JSON inklusive Metainformationen. Tests bestätigen die Stabilität.
* **Dokumentation & Entscheidungen:** Die Auswahlstrategie „Qualität vor Umfang“ ist in einem ADR fixiert; Diagramme und Statusbeschreibungen sind in den Wissensdokumenten aktualisiert.

### Session 12 (Netzwerk-View)

* **AGRELON-Beziehungen:** Beziehungstypen werden aus einem kontrollierten Vokabular übernommen, Richtungen semantisch gespiegelt und für die Visualisierung dedupliziert. Ein eigener Netzwerk-View zeigt verbundene Personen prominent, isolierte Knoten bleiben als Kontext sichtbar.
* **Interaktion & Datenmodell:** Filtern nach Beziehungstyp, Suche mit Hervorhebung, zoombare Labels und direkte Navigation zur Personenseite sind vorhanden. Die Graphdaten trennen sauber zwischen Knoten- und Kantenattributen; die Layout-Logik ist performant.
* **Nächste Schritte:** Zeitliche Einbettung des Netzwerks im Seitenfuß und Kopplung an den globalen Zeitfilter.

### 2025-10-29 — Sessions 13–15 (Person-UX, Dashboard, DRY-Refactor)

* **Personenseiten-UX:** Normdaten-Links sind unaufdringlich, Platzhaltertexte ehrlich, Zitation lässt sich mit einem Klick kopieren, Qualitätsindikatoren sind sichtbar, mobile Abstände sind bereinigt. Biografie-Parsing und Berufsdaten werden verständlich dargestellt.
* **Dashboard-Feinschliff:** Visuals sind klar, exportierbar und barrierearm gestaltet; unnötige Sammelaktionen wurden entfernt, aktive Navigationszustände ergänzt.
* **Codequalität & Architektur:** Geteilte Datenlade-Logik verhindert Mehrfachladen, reduziert Redundanz und macht spätere Erweiterungen (z. B. SPARQL) leicht anschlussfähig. Bugs im Export und in der Clusterinteraktion wurden behoben. Die Dokumentation beschreibt Module, Datenfluss und Erweiterungspunkte.

### Session 16 (Hover-Netz mit AGRELON)

* **Interaktive Verbindungen:** Beim Überfahren von Punkten oder Clustern werden Relationen farbcodiert nach Kategorien eingeblendet. Dienstprogramme extrahieren Verbindungen auf Personen- und Cluster-Ebene, prüfen Ortsdaten und weisen Farben stabil zu.
* **Datenintegration & Tests:** Beziehungen aus verschiedenen Quellen werden zusammengeführt, auf Personenbezüge gefiltert und kategorisiert. Tests und Demos sichern sowohl die Datenlogik als auch die Darstellung ab. Rückmeldungen aus der Nutzung bestätigen die Funktionsfähigkeit.
* **Weiterführendes:** Kategoriefilter, Performancetuning für dichte Cluster, reichere Tooltips und ein Korrespondenz-Netz basierend auf Briefbezügen sind vorgesehen.

### 2025-11-05 — Session 17 (Dualer Zeitfilter, CSV-Export, Dokumentationskonsolidierung)

* **Bereinigung:** Vollständigkeits-Badge und PNG-Export wurden aus Codebase und Dokumentation entfernt. Die Funktionen wurden als nicht benötigt eingestuft und reduzieren nun Komplexität.
* **Dualer Zeitfilter:** Tab-basierte Umschaltung zwischen "Korrespondenz" (1762-1824, filtert nach Briefjahren) und "Lebensdaten" (1700-1850, filtert nach Geburts-/Todesjahren) wurde auf beiden Hauptseiten (Karte und Synthesis) mit identischem UI implementiert. Personen ohne Datenwerte werden nicht ausgefiltert. Die Lösung nutzt noUiSlider mit kompakten Buttons (padding 4px 8px, font-size 11px).
* **CSV-Export:** Export gefilterter Personen mit Kernmetadaten (ID, Name, GND, Lebensdaten, Orte, Berufe, Briefanzahl, Rolle) ist auf der Hauptseite verfügbar. UTF-8 mit BOM für Excel-Kompatibilität, korrekte Feld-Quotierung für Sonderzeichen.
* **UI-Feinkorrekturen:** Synthesis-Tabellen-Header korrigiert (fehlende Stern-Spalte ergänzt), Korrespondenz-Tooltips verbessert ("8 Briefe gesendet, 23× erwähnt").
* **Dokumentation:** decisions.md, design.md, requirements.md, INDEX.md und IMPLEMENTATION_PLAN.md wurden aktualisiert. Alle drei Features sind als implementiert dokumentiert. Stand auf 05.11.2025 aktualisiert.

---

## Teil C — Kurzer Glossarblock (zur Lesefreundlichkeit)

* **CMIF:** Korrespondenz-Metadaten aus einem etablierten Format/Corpus.
* **SNDB:** Personen- und Ortsdatenbasis, die in diesem Projekt selektiv genutzt wird.
* **AGRELON:** Ontologie/Vokabular für Beziehungsarten zwischen Personen.
* **ADR:** Architekturentscheidung mit dokumentierten Alternativen und Trade-offs.

---

## Teil D — Checklisten (ohne Zahlen)

* **Validierung pro Release**

  * Läuft die Pipeline mit Provenienzfeldern durch?
  * Stimmen Modellfelder, Transformationsregeln und Frontend-Rendering überein?
  * Sind Navigation, Suche, Karte, Netzwerk, Timeline und Dashboard konsistent verlinkt?
  * Greifen Token-Imports in allen aktiven CSS-Dateien?
  * Sind Debug- und Produktionsartefakte eindeutig getrennt?

* **Lesefluss der Doku**

  * Index führt zu allen Bereichen ohne Sackgassen.
  * ADRs verweisen auf die implementierten Stellen im Code.
  * Sessions erzählen kurz „Was? Warum? Ergebnis? Lerneffekt?“
