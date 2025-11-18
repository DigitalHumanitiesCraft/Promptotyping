**Nächstes Dokument:** **DECISIONS.md**
**Warum jetzt?** Es schließt die zentrale Status-Lücke (Timeline vs. Karte), macht frühere und aktuelle Produkt-/Architekturentscheidungen in einem Fließtext nachvollziehbar und harmonisiert die Terminologie für Design, Daten und Bereitstellung. Damit werden Widersprüche aufgelöst, bevor Anforderungen und Design weiter verdichtet werden.

---

# DECISIONS

Dieses Dokument fasst alle maßgeblichen Entscheidungen von HerData in kompakter, begründeter Form zusammen. Jede Entscheidung benennt Ziel, Anlass, getroffene Wahl, beobachteten Effekt und aktuellen Status. Dadurch werden frühere Varianten verständlich, ohne dass Leserinnen und Leser Nebendateien oder technische Details benötigen.

**Stand:** 05.11.2025
**Datensatz-Version:** 27.10.2025
**Pipeline-Bezeichnung:** build_herdata
**Live-Commit:** b36a807

## Startansicht und Navigationsmodell

Die Startansicht ist die Karte. Sie bietet den schnellsten, verständlichsten Einstieg in Personen und Orte und reduziert kognitive Last gegenüber konkurrierenden Einstiegen. Eine frühere Timeline-Variante wurde nach Erprobung verworfen, weil sie als primäre Navigation weniger Orientierung bot und die Kartenlogik doppelte. Status: Timeline als primäre Navigation verworfen; Karte bestätigt. Effekt: Klarer Einstieg, konsistente Terminologie, geringere Pflegekomplexität.

## Personenansicht als Cards (ohne Tab-Logik)

Personen werden in Cards dargestellt. Diese Form macht Metafelder, externe Verweise und Kontexthinweise unmittelbar sichtbar, ohne Interaktionssprünge. Eine Tab-Logik wurde verworfen, da sie Inhalte fragmentierte und mobile Nutzung erschwerte. Status: Cards bestätigt. Effekt: Höhere Sichtbarkeit der Kerndaten, einfachere Erweiterbarkeit.

## Kartenbibliothek und Cluster-Darstellung

Für die Darstellung räumlicher Daten wird eine leichtgewichtige, robuste Kartenbibliothek genutzt; die Cluster-Kodierung folgt einem konsistenten Farbsystem, das Dichte erkennbar macht, ohne Detailinformation zu überlagern. Status: Bibliothek und Farblogik bestätigt. Effekt: Stabiler Kartenkern, klare Lesbarkeit auch bei hoher Punktzahl.

## Netzwerkbezüge als kontextuelle Hinweise

Beziehungen werden als Hover-basierte Visualisierung auf der Karte dargestellt (84 AGRELON-Relationen, 67 Personen mit Beziehungen). Eine eigenständige Netzwerk-Tab-Navigation wurde nicht umgesetzt, da die Datenabdeckung begrenzt ist (15,0% der Frauen) und eine separate Navigation Erwartungen an Vollständigkeit wecken würde. Status: Hover-Netzwerk implementiert; separate Tab-Navigation zurückgestellt. Effekt: Sichtbarer Kontext bei vorhandenem Bedarf, keine überzogenen Erwartungen.

## Such- und Filterprinzip

Filter dienen der kontrollierten Eingrenzung entlang weniger, fachlich verständlicher Dimensionen wie Zeitraum, Ortstyp und grundlegenden Tätigkeitskategorien. Eine zentrale Suchfunktion ist als Ergänzung implementiert, bleibt aber nicht primäre Interaktionsform. Status: Filter bestätigt; Suche implementiert als ergänzende Funktion. Effekt: Vorhersagbares Verhalten durch Filter, Flexibilität durch Suche.

## Dualer Zeitfilter: Korrespondenz vs. Lebensdaten

Der Zeitfilter bietet zwei Modi zur Filterung: "Korrespondenz" (1762-1824, basierend auf Briefjahren) und "Lebensdaten" (1700-1850, basierend auf Geburts-/Todesjahren). Diese Trennung wurde implementiert, weil beide Zeitdimensionen unterschiedliche Forschungsperspektiven ermöglichen: Korrespondenz zeigt aktive Briefwechsel-Perioden, Lebensdaten ermöglichen biografische Eingrenzung unabhängig von erhaltener Korrespondenz. Eine Zusammenführung in einen einzelnen Filter hätte zu Verwirrung geführt, da Personen ohne Briefaktivität (indirect/SNDB-Einträge) nicht ausgefiltert werden sollten. Status: Dual-Modus implementiert auf Karte und Personen-View mit identischem UI. Effekt: Klarere Forschungsperspektiven, keine ungewollte Exklusion von Personen ohne Briefdaten.

## CSV-Export für gefilterte Daten

Ein CSV-Export wurde auf der Hauptseite implementiert, um Forschenden direkten Zugriff auf gefilterte Personendaten zu ermöglichen. Der Export enthält ID, Name, GND, Lebensdaten, Orte, Berufe, Briefanzahl und Rolle im UTF-8-Format mit BOM für Excel-Kompatibilität. Eine automatische Aggregation aller Felder wurde nicht umgesetzt, da der Export auf Kernmetadaten fokussiert. Status: CSV-Export für Hauptseite implementiert. Effekt: Direkte Datennutzung für externe Analysen, niederschwelliger Zugang für Forschende.

## Datenkurationsstrategie

Die produktive Grundgesamtheit ist kuratiert, um Qualität, Nachvollziehbarkeit und Pflege zu sichern. Eine vollständige Aggregation über alle potenziell verfügbaren Einträge wurde geprüft und verworfen, da sie Unsicherheiten und Uneinheitlichkeiten erhöht hätte. Status: Kuratierte Auswahl bestätigt. Effekt: Konsistente Kennzahlen, klare Abgrenzung des Scopes.

## Provenance und Unsicherheit

Herkunft und Transformation zentraler Angaben werden deskriptiv dokumentiert. Unsicherheit wird sichtbar gemacht, wenn Evidenz unvollständig ist oder Heuristiken angewandt werden. Eine inhaltlich komplexe, technische Provenance-Darstellung wurde zugunsten einer gut lesbaren Beschreibung vermieden. Status: Deskriptive Provenance bestätigt; technische Detailtiefe nicht Teil der öffentlichen Darstellung. Effekt: Prüfbarkeit ohne technische Hürden.

## Bereitstellung und Erzeugung der Artefakte

Die produktiven und die Provenance-Artefakte werden derzeit manuell erzeugt und veröffentlicht. Eine automatisierte Ausführung wurde erwogen, ist aber nachrangig, solange der Veröffentlichungsrhythmus niedrig bleibt und die manuelle Qualitätssicherung Vorteile hat. Status: Manuelle Erzeugung bestätigt; Automatisierung perspektivisch. Effekt: Verlässliche Kontrolle vor Geschwindigkeit.

## Wissenskorb Netzwerk-Visualisierung ohne geografische Karte

Für die Netzwerk-Visualisierung im Wissenskorb wurde ein force-directed Graph-Layout (Cytoscape.js COSE) gewählt. Eine geografische Visualisierung mit Leaflet.js, bei der Place-Nodes an realen Koordinaten positioniert werden, wurde implementiert und dann verworfen. Die geografische Variante zeigte Places an ihrer tatsächlichen Position mit Personen in der Nähe, führte aber zu einer überladenen, schwer lesbaren Darstellung. Der COSE-Algorithmus bietet für alle Modi (AGRELON, Orte, Berufe) eine konsistente Hub-and-Spoke Struktur mit klarer visueller Hierarchie. Status: COSE Layout bestätigt; geografische Visualisierung verworfen. Effekt: Klarere Darstellung, einheitliches Layout über alle Modi, bessere Performance (05.11.2025).

## Terminologie-Harmonisierung

Die Begriffe „Karte", „Explorer", „Cards", „Netzwerkhinweise", „Provenance" und „Unsicherheit" sind verbindlich definiert und werden in allen Dokumenten konsistent genutzt. Status: Harmonisierung abgeschlossen. Effekt: Einheitliche Sprache, weniger Missverständnisse.

## Konsequenz für abhängige Dokumente

Die hier fixierten Entscheidungen steuern das Anforderungsdokument, prägen die Informationsarchitektur im Design und rahmen die Datenbeschreibung. Frühere, abweichende Formulierungen gelten als verworfen, sofern sie dieser Fassung widersprechen. Änderungen an diesen Entscheidungen werden datiert, begründet und mit beobachtetem Effekt ergänzt, damit der Projektverlauf nachvollziehbar bleibt.
