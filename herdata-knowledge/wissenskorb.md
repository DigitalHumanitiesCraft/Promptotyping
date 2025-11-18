# Wissenskorb

Konzept und technische Umsetzung für einen globalen, persistenten Wissenskorb zur Sammlung und Verwaltung von Personen aus verschiedenen Ansichten der HerData-Applikation.

Stand: 05.11.2025

## Aktuelle Situation

### Bestehende Implementierung

Der Wissenskorb existiert aktuell nur in der Personen-Ansicht (docs/synthesis/index.html) als Tab-Komponente im rechten Panel. Die Funktionalität umfasst:

- Personen via Star-Button (Bookmark-Icon) zur Sammlung hinzufügen
- Maximale Kapazität: 20 Personen
- Anzeige im Tab "Wissenskorb" mit Badge-Counter
- Visualisierungen: Timeline-Übersicht und Beziehungsdarstellung
- Export-Funktionen: CSV und JSON
- Entfernen einzelner Personen aus der Sammlung

Implementierung in docs/synthesis/js/app.js:
- state.basket Array (Zeile 11)
- toggleBasket() Funktion (Zeile 1189-1212)
- updateBasketView() Funktion (Zeile 1214-1278)
- renderBasketVisualizations() Funktion (Zeile 1280-1363)
- Export-Funktionen exportBasketToCSV() und exportBasketToJSON()

### Technische Einschränkungen

1. State nur im Memory
   - Keine Persistierung bei Seitenwechsel oder Browser-Refresh
   - Daten gehen beim Verlassen der synthesis-Ansicht verloren

2. Lokale Verfügbarkeit
   - Nur in der Personen-Ansicht verfügbar
   - Nicht zugänglich von Karte, Brief-Explorer oder anderen Ansichten

3. Fehlende globale Navigation
   - Kein sichtbarer Zugang aus der Hauptnavigation
   - Nutzer müssen erst zur Personen-Ansicht navigieren

## Zielkonzept

### Vision

Ein globaler, persistenter Wissenskorb als eigenständige Unterseite mit folgenden Merkmalen:

1. Persistenz via Local Storage
   - Sammlung bleibt über Seitenwechsel erhalten
   - Daten bleiben nach Browser-Refresh verfügbar
   - Browserübergreifend für denselben Benutzer

2. Globaler Zugang
   - Button in der Hauptnavigation neben Brief-Explorer
   - Badge-Counter zeigt Anzahl gesammelter Personen
   - Von überall in der Applikation erreichbar

3. Eigenständige Unterseite
   - Dedizierte Seite basket.html oder wissenskorb.html
   - Vollständiges Interface zur Verwaltung der Sammlung
   - Erweiterte Visualisierungen und Analysemöglichkeiten

4. Überall verfügbar
   - Add-to-Basket Funktionalität in allen Ansichten
   - Karte: Marker-Popups mit Hinzufügen-Button
   - Brief-Explorer: Integration in Visualisierungen
   - Personen-Ansicht: Bestehende Star-Buttons
   - Person-Detailseite: Hinzufügen-Button im Header

### Nutzungsszenarien

Typische Anwendungsfälle:

1. Vergleichende Analyse
   - Nutzer sammelt Personen aus verschiedenen Zeiträumen
   - Vergleicht Lebenszeiten und Überschneidungen
   - Exportiert Auswahl für externe Analyse

2. Forschungssammlung
   - Nutzer identifiziert relevante Personen über verschiedene Ansichten
   - Filtert im Brief-Explorer nach Beruf, sammelt Ergebnisse
   - Sucht auf Karte nach geografischen Clustern, ergänzt Sammlung
   - Exportiert finale Auswahl als Datensatz

3. Präsentationsvorbereitung
   - Nutzer stellt Personengruppe für Präsentation zusammen
   - Nutzt Visualisierungen im Wissenskorb zur Darstellung
   - Exportiert Daten für Folien oder Handouts

## Technische Umsetzung

### Architektur-Übersicht

Modulare Struktur mit drei Hauptkomponenten:

1. Zentrale Basket-Bibliothek (basket-manager.js)
   - Local Storage Verwaltung
   - CRUD-Operationen für Basket-Einträge
   - Event-System für Synchronisation
   - Export-Funktionen

2. UI-Komponenten
   - Navbar-Integration mit Badge
   - Add-to-Basket Buttons für alle Ansichten
   - Dedizierte Wissenskorb-Seite
   - Toast-Benachrichtigungen

3. Synchronisation
   - Storage-Events für Multi-Tab-Synchronisation
   - Automatische UI-Updates bei Änderungen
   - Konsistente State-Verwaltung

### Komponente 1: Zentrale Basket-Bibliothek

Datei: docs/js/basket-manager.js

Verantwortlichkeiten:
- Zentrale Schnittstelle für alle Basket-Operationen
- Verwaltung der Local Storage Persistierung
- Event-basierte Kommunikation mit UI-Komponenten
- Datenvalidierung und -transformation

Kern-API:

```javascript
// Initialisierung
BasketManager.init()

// Personen verwalten
BasketManager.add(person)
BasketManager.remove(personId)
BasketManager.clear()
BasketManager.has(personId)

// Daten abrufen
BasketManager.getAll()
BasketManager.getCount()

// Export
BasketManager.exportAsCSV()
BasketManager.exportAsJSON()

// Events
BasketManager.on('change', callback)
BasketManager.on('add', callback)
BasketManager.on('remove', callback)
```

Local Storage Schema:

```json
{
  "herdata_basket": {
    "version": "1.0",
    "updated": "2025-11-05T10:30:00Z",
    "items": [
      {
        "id": "person-123",
        "name": "Anna Amalia von Sachsen-Weimar-Eisenach",
        "added": "2025-11-05T10:15:00Z",
        "dates": { "birth": "1739", "death": "1807" },
        "role": "sender",
        "gnd": "118502662"
      }
    ]
  }
}
```

Implementierungsdetails:

1. Singleton-Pattern für globale Verfügbarkeit
2. Storage-Event-Listener für Multi-Tab-Synchronisation
3. Maximale Kapazität: 50 Personen (erhöht von 20)
4. Automatische Bereinigung bei Storage-Limit
5. Versionierung für zukünftige Schema-Migrationen

### Komponente 2: Navigation-Integration

Änderungen an allen Navbar-Komponenten:

Dateien:
- docs/components/navbar.html
- docs/components/navbar-synthesis.html
- docs/components/navbar-stats.html
- docs/components/navbar-map.html
- docs/components/navbar-simple.html

Ergänzung in nav-links Bereich:

```html
<div class="nav-links">
    <a href="wissenskorb.html" class="nav-link nav-link-basket" aria-label="Wissenskorb">
        <span class="nav-link-text">Wissenskorb</span>
        <span id="basket-badge" class="nav-badge" style="display: none;">0</span>
    </a>
    <a href="vault.html" class="nav-link" aria-label="Knowledge Vault">
        <span class="nav-link-text">Vault</span>
    </a>
    <!-- ... weitere Links ... -->
</div>
```

Anpassungen für synthesis-Variante (relativer Pfad):

```html
<a href="../wissenskorb.html" class="nav-link nav-link-basket" aria-label="Wissenskorb">
```

JavaScript-Integration in navbar-loader.js:

Nach dem Laden der Navbar:
- BasketManager initialisieren
- Badge-Counter aktualisieren
- Change-Listener für automatische Updates

### Komponente 3: Dedizierte Wissenskorb-Seite

Datei: docs/wissenskorb.html

Layout-Struktur:
- Navbar-Placeholder
- Header mit Titel und Gesamtstatistik
- Hauptbereich mit drei Sektionen:
  1. Personenliste (links, scrollbar)
  2. Visualisierungen (mitte)
  3. Aktionen und Export (rechts)

Personenliste:

Für jede Person im Korb:
- Name mit Link zur Detailseite
- Lebensdaten
- Rolle-Badge
- Berufe (falls vorhanden)
- Entfernen-Button
- Zeitpunkt des Hinzufügens

Visualisierungen:

1. Timeline-Übersicht (erweitert)
   - Swimlane-Darstellung wie in synthesis
   - Interaktive Tooltips
   - Klickbare Balken für Personendetails
   - Zeitachse mit Dekaden-Markierungen

2. Beziehungsnetzwerk
   - Nur Verbindungen zwischen Personen im Korb
   - Force-directed Graph mit D3.js oder ähnlich
   - Hover-Tooltips mit Beziehungstyp
   - Klickbare Nodes

3. Geografische Verteilung
   - Mini-Karte mit MapLibre
   - Marker für alle Personen mit Ortsbezug
   - Cluster-Darstellung

4. Berufsverteilung
   - Balkendiagramm oder Treemap
   - Zeigt Häufigkeit der Berufe in der Sammlung

Aktionen:

- Export als CSV
- Export als JSON
- Teilen-Funktion (URL mit Person-IDs)
- Alle entfernen (mit Bestätigung)
- Notizen (zukünftige Erweiterung)

### Komponente 4: Add-to-Basket Integration

Integration in verschiedene Ansichten:

1. Personen-Ansicht (synthesis/index.html)
   - Bestehende Star-Buttons beibehalten
   - Mit BasketManager verknüpfen statt lokalem State
   - Toast-Notifications bei Add/Remove

2. Karte (index.html)
   - Bookmark-Icon in Marker-Popups
   - Hinzufügen direkt aus Popup
   - Badge-Update nach Aktion

3. Brief-Explorer (stats.html)
   - Add-to-Basket in interaktiven Visualisierungen
   - Kontext-Menü bei Klick auf Personenname
   - Batch-Add für gefilterte Ergebnisse

4. Person-Detailseite (person.html)
   - Prominenter Button im Header
   - Toggle-Funktion (Add/Remove)
   - Visuelles Feedback

Einheitliche UI-Komponente:

```html
<button class="btn-add-basket" data-person-id="123" title="Zum Wissenskorb hinzufügen">
    <i class="fas fa-bookmark"></i>
</button>
```

JavaScript-Handler:

```javascript
document.querySelectorAll('.btn-add-basket').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const personId = btn.dataset.personId;
        const person = findPersonById(personId);

        if (BasketManager.has(personId)) {
            BasketManager.remove(personId);
        } else {
            BasketManager.add(person);
        }

        updateButtonState(btn, personId);
    });
});
```

### CSS-Styling

Neue Styles für Wissenskorb-Elemente:

Datei: docs/css/basket.css

Komponenten:
- nav-badge für Badge in Navigation
- btn-add-basket für Add-Buttons
- basket-page Layout für dedizierte Seite
- basket-card für Personenkarten
- basket-viz für Visualisierungen
- basket-actions für Aktionsbereich

Design-Prinzipien:
- Konsistent mit bestehendem Design-System
- CSS-Variablen für Farben und Abstände
- Responsive Layout mit CSS Grid
- Accessibility-Attribute für Screen Reader

### Datenfluss

1. Nutzer klickt Add-to-Basket Button
2. Event-Handler ruft BasketManager.add(person)
3. BasketManager validiert Daten
4. Speichert in Local Storage
5. Feuert 'add' Event
6. Alle registrierten Listener werden benachrichtigt
7. UI-Komponenten aktualisieren sich:
   - Badge-Counter in Navbar
   - Button-State (filled/unfilled)
   - Toast-Notification
8. Bei Multi-Tab: Storage-Event synchronisiert andere Tabs

### Fehlerbehandlung

Szenarien und Lösungen:

1. Local Storage nicht verfügbar
   - Fallback auf Session Storage
   - Warnung an Nutzer
   - Funktionalität bleibt verfügbar (ohne Persistenz)

2. Storage-Limit erreicht
   - Warnung beim Hinzufügen
   - Vorschlag: Älteste Einträge entfernen
   - Hinweis auf Export-Funktion

3. Ungültige Daten
   - Validierung vor Speicherung
   - Fehlerhafte Einträge überspringen
   - Logging für Debugging

4. Inkonsistente States
   - Automatische Synchronisation via Storage Events
   - Reconciliation bei Diskrepanzen
   - Refresh-Button für manuelle Synchronisation

## Implementierungsplan

### Phase 1: Basis-Infrastruktur

Schritte:
1. Erstelle docs/js/basket-manager.js
2. Implementiere Local Storage CRUD-Operationen
3. Erstelle Event-System
4. Schreibe Unit-Tests (optional)

Validierung:
- Browser-Console Tests
- Local Storage Inspektion
- Multi-Tab Synchronisation

### Phase 2: Navigation-Integration

Schritte:
1. Aktualisiere alle Navbar-Komponenten
2. Erstelle docs/css/basket.css
3. Erweitere navbar-loader.js für Badge-Update
4. Teste Badge-Synchronisation

Validierung:
- Badge erscheint in allen Ansichten
- Counter aktualisiert sich korrekt
- Link zur Wissenskorb-Seite funktioniert

### Phase 3: Dedizierte Seite

Schritte:
1. Erstelle docs/wissenskorb.html
2. Implementiere docs/js/wissenskorb.js
3. Erstelle Layout mit CSS Grid
4. Implementiere Personenliste
5. Integriere Timeline-Visualisierung
6. Füge Export-Funktionen hinzu

Validierung:
- Alle Basket-Einträge werden angezeigt
- Entfernen funktioniert
- Export generiert korrekte Dateien
- Timeline zeigt alle Personen

### Phase 4: Integration in Ansichten

Schritte:
1. Personen-Ansicht (synthesis):
   - Ersetze lokalen State durch BasketManager
   - Teste Star-Buttons
2. Karte (index.html):
   - Füge Buttons zu Popups hinzu
   - Teste Add/Remove
3. Brief-Explorer (stats.html):
   - Identifiziere Integrationspunkte
   - Implementiere Add-Funktionalität
4. Person-Detailseite (person.html):
   - Füge Header-Button hinzu
   - Implementiere Toggle-Logik

Validierung:
- Add/Remove funktioniert in allen Ansichten
- State synchronisiert sich überall
- Toast-Notifications erscheinen

### Phase 5: Erweiterte Features

Schritte:
1. Beziehungsnetzwerk-Visualisierung
2. Geografische Verteilung (Mini-Karte)
3. Berufsverteilung-Chart
4. Teilen-Funktion via URL
5. Batch-Operations (Alle aus Filter hinzufügen)

Validierung:
- Alle Visualisierungen rendern korrekt
- Performance bei 50 Personen akzeptabel
- Teilen-URLs funktionieren

### Phase 6: Polishing und Dokumentation

Schritte:
1. Accessibility-Audit
2. Mobile/Responsive Testing
3. Browser-Kompatibilität prüfen
4. Nutzer-Dokumentation erstellen
5. Code-Kommentare vervollständigen

Validierung:
- WCAG 2.1 AA konform
- Funktioniert auf mobilen Geräten
- Kompatibel mit Chrome, Firefox, Safari, Edge

## Offene Fragen

Zu klärende Punkte:

1. Maximale Kapazität
   - Aktuell 20 in synthesis, Vorschlag 50 für global
   - Abhängig von Performance-Tests

2. URL-Sharing Format
   - Query-Parameter: wissenskorb.html?ids=123,456,789
   - Hash: wissenskorb.html#123,456,789
   - Base64-kodiert für längere Listen

3. Notiz-Funktion
   - Sollen Nutzer Notizen zu Personen hinterlegen können
   - Speicherung ebenfalls in Local Storage
   - Bearbeiten/Löschen von Notizen

4. Import-Funktion
   - Soll man Wissenskorb aus JSON importieren können
   - Nützlich für Teilen zwischen Geräten/Browsern
   - Validierung importierter Daten

5. Temporäre vs. permanente Sammlungen
   - Option für mehrere Sammlungen
   - Benennung von Sammlungen
   - Wechseln zwischen Sammlungen

## Nächste Schritte

Unmittelbare Aktionen:

1. Review dieses Konzepts
2. Entscheidung zu offenen Fragen
3. Priorisierung der Phasen
4. Start mit Phase 1: Basis-Infrastruktur

Langfristige Planung:

1. User Testing nach Phase 4
2. Feedback-Integration
3. Erweiterte Features basierend auf Nutzung
4. Integration in zukünftige Pipeline-Updates
