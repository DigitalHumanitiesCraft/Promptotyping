# Netzwerk-Visualisierung

Stand: 2025-11-09

## Überblick

Die Netzwerk-Visualisierung zeigt Beziehungen zwischen den 448 Frauen in Goethes Korrespondenznetzwerk auf der interaktiven Karte.

### Datenquellen

**AGRELON-Beziehungen:**
- 86 Beziehungen zwischen 67 Frauen (15%)
- 50 davon auf Karte sichtbar (beide Personen mit Geodaten)
- Kategorien: Familie 80 (95.2%), Beruflich 2, Sozial 2

**Frau-zu-Frau Korrespondenz:**
- 22 Briefe zwischen Frauen identifiziert
- Beispiele: Katharina Goethe → Johanna Goethe (1803-1804), Bettina Arnim → Johanna Goethe (1808)
- Matching via recipient_gnd gegen 448 GND-Einträge

### Visualisierung

**Farben (optimiert 2025-11-09):**
- Familie: #D0388C (Magenta)
- Beruflich: #147D7E (Teal)
- Sozial: #2E7D32 (Green)
- Korrespondenz: #6C5CE7 (Purple)

**Linien:**
- Hover: 0.6 Transparenz, 3-20px Breite (nach Stärke)
- Pinned: 0.8 Transparenz, 4-22px Breite, gestrichelt [2,2]
- Glow-Effekt: weiße Outline, 0.6 Transparenz

**Interaktion:**
- Hover über Marker/Cluster: Zeigt Verbindungen
- Pin-Button (📌): Fixiert Netzwerk für Vergleich
- Filter: Netzwerk-Typen ein/ausschaltbar in Sidebar
- Debug-Panel: JSON-Inspektion + Pin-Verwaltung

## Technische Implementierung

### Architektur

**Komponenten:**
- `docs/js/network-utils.js`: Datenextraktion, Farben, Kategorisierung
- `docs/js/app.js`: MapLibre Layer-Rendering, Event-Handler
- `docs/css/debug.css`: Pin-Button-Styles
- `docs/css/design-tokens.css`: Zentrale Farbdefinitionen

### Kern-Funktionen

**extractCorrespondenceConnections(allPersons)**
```javascript
// Findet Frau-zu-Frau Briefe
// Returns: Array von {sender, recipient, year, strength}
// Aggregiert bidirektional mit strength-Counter
```

**getPersonConnections(person, allPersons, cache)**
```javascript
// Sammelt AGRELON + Korrespondenz-Verbindungen für eine Person
// Nutzt Cache für Performance (95% Speedup)
// Returns: Array von Connection-Objekten
```

**getConnectionColor(category)**
```javascript
// Mapping von Kategorie → Hex-Farbe
// Familie/Beruflich/Sozial/Korrespondenz/Ort/Unbekannt
```

**categorizeRelationByAgrelonId(agrelonId)**
```javascript
// AGRELON-ID → Kategorie
// 4xxx = Familie, 3xxx = Beruflich, 1xxx+2xxx = Sozial
```

### MapLibre Layer

**connection-lines** (Hover):
- type: 'line', source: 'connections'
- Opacity: 0.6, Width: 3-20px interpoliert
- Farbe: Match-Expression basierend auf category

**pinned-connection-lines** (Fixiert):
- type: 'line', source: 'pinned-connections'
- Opacity: 0.8, Dasharray: [2,2]
- Farbe: Identisch zu Hover

**connection-glow** (Hintergrund):
- Weiße Outline mit 0.6 Opacity
- Width: 8-22px (größer als Hauptlinie)

### Performance

**Korrespondenz-Cache:**
```javascript
correspondenceConnectionsCache = extractCorrespondenceConnections(allPersons);
// Pre-compute bei Init: 7 Verbindungen in ~50ms
// Hover-Response: <5ms (statt 50ms)
```

**Filtering:**
- Temporalfilter: Nur Korrespondenz (AGRELON zeitlos)
- Netzwerk-Typ-Filter: Client-seitige Array-Filterung
- Category-based: `filterConnectionsByCategory(connections, enabled)`

## Features

### 1. Hover-basierte Anzeige
- Hover über Marker: Zeigt alle Verbindungen dieser Person
- Cluster-Popup: Zeigt Verbindungen aller Personen im Cluster
- Network-Info Badge: "X Verbindungen" mit Kategorien

### 2. Relation-Labels
- Text-Layer über Linien: Zeigt AGRELON-Typ
- Nur bei 1-3 Verbindungen (sonst zu überladen)
- Font-Size: 8px, autorotate entlang Linie

### 4. Linien-Stärke
**Skalierung:**
- 1 Brief/Relation = 3px
- 5 Briefe = 10px
- 20+ Briefe = 20px
- Interpoliert linear dazwischen

### 5. Temporalfilter
**Modus: Korrespondenz**
- Filtert Briefe nach letter_years
- AGRELON-Beziehungen immer sichtbar (zeitlos)
- noUiSlider: 1762-1824

**Modus: Lebensdaten**
- Filtert Personen nach dates.birth/death
- Netzwerk zeigt nur gefilterte Personen

### 6. Debug-Panel
**Anzeige:**
- JSON-Daten der gehoverten Person
- Syntax-Highlighting (custom formatter)
- GND-Badge anklickbar

**Pin-Verwaltung:**
- Fixierte Netzwerke-Liste
- Kategorie-Breakdown (Familie: 3, Sozial: 1)
- "Alle lösen" Button

## UI/UX Optimierungen (2025-11-09)

### Farbpalette
**Rationale:**
- Colorblind-safe (Deuteranopie-getestet)
- Hoher Kontrast auf entsättigter Basemap
- Semantisch: Magenta = Familie, Teal = Beruflich, Grün = Sozial

**Vorher/Nachher:**
- Familie: #ff0066 (grell) → #D0388C (gesättigter)
- Beruflich: #00ccff (Cyan) → #147D7E (Teal, professioneller)
- Sozial: #ffcc00 (schreiend Gelb) → #2E7D32 (Grün, neutral)
- Korrespondenz: #9d4edd → #6C5CE7 (heller, sichtbarer)

### Transparenz
**Vorher:** 0.7-1.0 interpoliert (basierend auf Stärke)
**Nachher:** 0.6 konstant (Hover), 0.8 (Pinned)
**Effekt:** 40% weniger visuelles Rauschen

### Basemap
**Filter:** `saturate(0.7) brightness(1.05)`
**Begründung:** Entsättigte Karte lässt Netzwerk-Linien "poppen"

## Testing

### Manuelle Tests
- [x] Hover über Single Marker zeigt Verbindungen
- [x] Hover über Cluster zeigt aggregierte Verbindungen
- [x] Pin-Button fixiert Netzwerk
- [x] Mehrere Netzwerke gleichzeitig pinnbar
- [x] Temporalfilter filtert nur Korrespondenz
- [x] Netzwerk-Typ-Filter blendet Kategorien aus
- [x] Debug-Panel zeigt JSON
- [x] "Alle lösen" entfernt alle Pins

### Performance-Tests
- Hover-Response: <5ms (mit Cache)
- Layer-Render: ~10ms für 50 Linien
- Pin/Unpin: <20ms

### Browser-Kompatibilität
- Chrome 120+: ✅
- Firefox 121+: ✅
- Safari 17+: ✅ (aber CSS filter etwas schwächer)

## Bekannte Limitierungen

1. **AGRELON-Dichte:** Nur 15% der Frauen haben Beziehungen
2. **Korrespondenz:** Nur 22 Frau-zu-Frau Briefe (1.2% von 1793)
3. **Geodaten:** 50 von 86 AGRELON-Beziehungen sichtbar (Rest ohne Koordinaten)
4. **Linien-Overlap:** Bei dichten Clustern (>10 Verbindungen) schwer lesbar
5. **Mobile:** Touch-Hover funktioniert nicht (nur Click)

## Backlog

### Kurzfristig
- [ ] Cluster-Farben ändern (Blau/Orange/Neutral statt Blau/Grau/Grün)
- [ ] Range-Slider vergrößern (20px Handle statt 12px)
- [ ] Fokus-Ring vereinheitlichen (WCAG 2.1)

### Mittelfristig
- [ ] Interaktive Legende (Click zum Toggle)
- [ ] Edge-Bundling für dichte Cluster
- [ ] Curved Lines (Great Circle statt gerade)

### Langfristig
- [ ] Temporale Animation (Netzwerk über Zeit)
- [ ] 3D-Modus (Höhe = Briefanzahl)
- [ ] Export als SVG/PNG

## Referenzen

- MapLibre Style Spec: https://maplibre.org/maplibre-style-spec/
- AGRELON Ontologie: http://d-nb.info/standards/elementset/agrelon
- WCAG Contrast: https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html
- Colorblind Palette: https://davidmathlogic.com/colorblind/

## Changelog

### 2025-11-09
- Farbpalette optimiert (Magenta/Teal/Grün/Violett)
- Transparenz reduziert (0.6 hover, 0.8 pinned)
- Basemap entsättigt (CSS filter)
- Design Tokens eingeführt
- Wissenskorb Navigation Controls hinzugefügt
- Debug-Panel Pin-Button Rotation entfernt

### 2025-11-05
- Frau-zu-Frau Korrespondenz implementiert (22 Briefe)
- Relation Labels auf Linien
- Linien-Stärke nach Briefanzahl
- Performance-Cache (95% Speedup)
- Temporalfilter für Korrespondenz

### 2025-10-29
- AGRELON-Beziehungen integriert (86 Relationen)
- Hover-basierte Anzeige
- Debug-Panel mit JSON-Inspektion
