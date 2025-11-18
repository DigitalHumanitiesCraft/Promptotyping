# REQUIREMENTS

Kompakte, verbindliche Beschreibung dessen, was HerData leisten soll, was bewusst nicht vorgesehen ist und wie der aktuelle Erfüllungsgrad einzuschätzen ist. Rein deskriptiv, ohne technische Fragmente, so dass Dritte den Stand nachvollziehen und fortschreiben können.

**Stand:** 05.11.2025
**Datensatz-Version:** 27.10.2025
**Pipeline-Bezeichnung:** build_herdata
**Live-Commit:** b36a807

---

## Zweck und Geltungsbereich

HerData macht kuratierte Informationen zu Frauen im Umfeld von Goethes Korrespondenz sichtbar, prüfbar und verständlich. Das System priorisiert eine räumlich geführte Exploration, kurze, klare Personenprofile, explizite Herkunfts- und Unsicherheitsangaben sowie nachvollziehbare Verweise auf externe Referenzsysteme. Die Plattform ist als statische Website für Öffentlichkeit und Fachcommunity ausgelegt; Pflegeaufwand, Klarheit und Konsistenz gehen vor Feature-Breite.

Zum Scope gehören die kuratierte Grundgesamtheit, grundlegende Metafelder der Personen, ortsbezogene Bezüge, knapp gefasste Kontextinformationen, kontextuelle Hinweise zu Beziehungen sowie Verlinkungen auf verlässliche Drittsysteme. Nicht zum Scope zählen Vollabdeckungen jenseits der kuratierten Auswahl, langformige prosopographische Biographien, eine eigenständige Netzwerknavigation als Hauptfunktion oder brieforientierte Volltextarbeit.

---

## Zielgruppen und Nutzen

Für kulturinteressierte Leserinnen und Leser bietet HerData einen unmittelbaren Einstieg über die Karte, klare Profile und verständliche Filter. Für Forschende und Studierende stellt HerData prüfbare Aussagen bereit: konsistent ausgewiesene Abdeckungen, definierte Regeln zur Verknüpfung, nachvollziehbare Herkunft und transparent markierte Unsicherheit.

---

## Fachliche Anforderungen (mit Erfüllungsgrad in Prosa)

### 1. Startansicht Karte

**Anforderung.** Der Einstieg führt über eine interaktive Karte, die Orientierung und direkten Zugang zu Personen ermöglicht.
**Erfüllungsgrad.** Erfüllt: Die Karte ist Startansicht und leitet konsistent in die Personenprofile.

### 2. Personenansicht als Cards

**Anforderung.** Profile zeigen Name, Lebensdaten, zentrale Identifikatoren, ortsbezogene Hinweise, kurze Kontextangaben und eindeutige externe Verweise, ohne tabbasierte Navigationslast.
**Erfüllungsgrad.** Erfüllt: Das Card-Prinzip ist umgesetzt; Kerndaten und Verweise sind sichtbar.

### 3. Filterbare Exploration

**Anforderung.** Eine kleine Zahl klarer Filter (Zeit, einfache Tätigkeitskategorien, Ortstyp, Normierung) reduziert die Menge vorhersagbar, ohne Kontext zu verlieren.
**Erfüllungsgrad.** Erfüllt: Filter sind nutzbar und verhalten sich erwartungskonform. Der Zeitfilter bietet zwei Modi: "Korrespondenz" (1762-1824, filtert nach Briefjahren) und "Lebensdaten" (1700-1850, filtert nach Geburts-/Todesjahren), um unterschiedliche Forschungsperspektiven zu ermöglichen. Personen ohne Datenwerte werden nicht ausgefiltert. CSV-Export gefilterter Personen ist verfügbar (ID, Name, GND, Lebensdaten, Orte, Berufe, Briefanzahl, Rolle).

### 4. Statistische Übersichten

**Anforderung.** Übersichten zu Berufen, Orten und zeitlichen Mustern fassen das Material verständlich zusammen.
**Erfüllungsgrad.** Erfüllt: Aggregierte Übersichten sind im Brief-Explorer (stats.html) als interaktives Dashboard bereitgestellt (Berufsverteilung, Brief-Timeline mit 1.793 Briefen von/mit Frauen, geografische Zentren mit CSV/PNG-Export).

### 5. Kontextuelle Netzwerkhinweise

**Anforderung.** Beziehungen erscheinen dort, wo sie Orientierung stiften, ohne eine eigenständige Netz-Navigation zu erzwingen.
**Erfüllungsgrad.** Erfüllt als Hover-Visualisierung: 86 AGRELON-Beziehungen zwischen 67 Frauen (15,0%) sind als kontextuelle Hover-Hinweise auf der Karte integriert. Die begrenzte Abdeckung spiegelt die Quellengrundlage wider; eine flächendeckende Verfügbarkeit ist nicht gegeben und auch nicht zu erwarten.

### 6. Zeitliche Perspektiven

**Anforderung.** Kohorten- und Lebenszeit-Blicke sind möglich; brieforientierte Chronologien sind ergänzend vorgesehen, sobald die Metadaten auf Personenebene vorliegen.
**Erfüllungsgrad.** Erfüllt: Lebenszeit-Daten (birth/death) sind für 421 Frauen (94,0%) vorhanden. Brieforientierte Chronologien sind bereits vollständig integriert: 230 Frauen haben detaillierte correspondence-Arrays mit type, letter_id, recipient, date, year, place, recipient_gnd. Die Brief-Timeline ist im Brief-Explorer (stats.html) visuell verfügbar.

### 7. Provenance und Unsicherheit

**Anforderung.** Herkunft und Transformation zentraler Angaben sind erklärend dokumentiert; Unsicherheit wird sichtbar, wenn Evidenz unvollständig ist oder Heuristiken eingesetzt werden.
**Erfüllungsgrad.** Erfüllt als deskriptive Dokumentation: Provenance ist vollständig im Debug-JSON (persons_debug.json) mit Feldern source, xpath, raw_value, transformation, extracted_at dokumentiert. In der öffentlichen UI werden Unsicherheiten implizit sichtbar (fehlende Geodaten: 49,3%, fehlende GND: 39,7%, fehlende CMIF-Verbindung: 48,7%). Eine explizite Provenance-Darstellung in der UI ist bewusst nicht vorgesehen.

### 8. Externe Verweise und Nachnutzung

**Anforderung.** Verknüpfungen zu verlässlichen Drittsystemen sind eindeutig; Zitier- und Lizenzhinweise ermöglichen korrekte Weitergabe.
**Erfüllungsgrad.** Erfüllt: Verweise sind vorgesehen und benannt; Projektlizenz ist geklärt, Drittquellen werden ausgewiesen.

---

## Nicht-funktionale Anforderungen (kompakt)

**Kohärente Terminologie.** Begriffe wie Karte, Explorer, Cards, Netzwerkhinweise, Provenance und Unsicherheit werden durchgängig gleich verwendet.
**Kompakte Darstellung.** Inhalte bleiben auf Kern­aussagen fokussiert; Reduktion geht nicht zulasten der Eindeutigkeit.
**Sichtbare Versionierung.** Datensatz-Version, Pipeline-Bezeichnung, Live-Commit und Datum sind systemweit identisch ausgewiesen.
**Grundfunktion mobil.** Karte, Profile, Filter und Verweise sind auch auf kleinen Bildschirmen zuverlässig nutzbar.
**Transparente Grenzen.** Fehlende oder unsichere Daten werden erkennbar gemacht; Erwartungen an nicht vorhandene Sichten werden nicht geweckt.

Status: Alle Punkte sind verankert; mobile Detailoptimierungen und feinere Unsicherheitsmarkierungen sind fortlaufend.

---

## Aktueller Status in verdichteter Form

Die Karte als Startansicht, das Card-Profil, die Filter und die Übersichten sind produktiv und konsistent. Kontextuelle Netzwerkhinweise sind als Hover-Visualisierung vollständig integriert (86 AGRELON-Beziehungen, 67 Frauen). Zeitliche Kohorten, Lebenszeiten und brieforientierte Chronologien sind vollständig integriert (421 mit Lebensdaten, 230 mit correspondence-Arrays). Provenance ist im Debug-JSON vollständig dokumentiert; Unsicherheit wird implizit in der UI sichtbar. Verweise und Lizenzhinweise sind vorhanden und ermöglichen Nachnutzung.

---

## Bewusst außerhalb des Scopes

Eine eigenständige Netzwerknavigation als Hauptfunktion, brieforientierte Volltextsuche, langformige Biographien, automatische Hochfrequenz-Updates sowie Backend-abhängige Dienste sind nicht vorgesehen. Diese Abgrenzung sichert Pflegefähigkeit, Klarheit der Darstellung und Erwartungsmanagement.

---

## Abgeschlossene und offene Punkte

**Namensvarianten (abgeschlossen).** Integration der Varianten aus ra_ndb_main.xml (LFDNR>0, 797 Einträge für 448 IDs) ist in der Pipeline implementiert und verbessert Suche und historische Abdeckung.

**Dualer Zeitfilter (abgeschlossen).** Zwei Modi ("Korrespondenz" 1762-1824 und "Lebensdaten" 1700-1850) ermöglichen unterschiedliche zeitliche Forschungsperspektiven auf beiden Hauptseiten (Karte und Synthesis).

**CSV-Export (abgeschlossen).** Export gefilterter Personen mit Kernmetadaten (ID, Name, GND, Lebensdaten, Orte, Berufe, Briefanzahl, Rolle) ist auf der Hauptseite implementiert.

**Zeitliche Attribuierung von Orten (offen).** Zeitbezüge von Wirkungsorten sind derzeit nicht in den Quelldaten vorhanden (places-Array enthält nur name, lat, lon, type). Eine zukünftige Integration hängt von erweiterten Exporten ab.

---

## Regressionsschutz und Pflege

Ein einheitlicher Versionsbanner steht in allen Projektdateien; veraltete Konzepte sind als verworfen markiert. Änderungen an Anforderungen werden datiert festgehalten, kurz begründet und mit dem beobachteten Effekt versehen. Terminologie bleibt konsistent; Doppelungen werden vermieden, indem dieses Dokument die alleinige Referenz für Anforderungen und ihren Status bildet.

---

## Konsequenz für Design, Daten und Veröffentlichung

Das Design stützt sich auf die bestätigte Karten-Startansicht, das Card-Profil und wenige, klare Filter. Die Datenaufbereitung richtet sich an den beschriebenen Regeln für Verknüpfung, Deduplizierung, Geocoding und Unsicherheit aus. Beziehungen, Briefmetadaten und Namensvarianten sind vollständig integriert. Der duale Zeitfilter und CSV-Export erweitern die Filterfunktionen für unterschiedliche Forschungsperspektiven. Die Veröffentlichung folgt einem stabilen, nachvollziehbaren Ablauf; Provenance-Hinweise und Lizenzangaben bleiben sichtbar.
