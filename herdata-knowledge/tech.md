# TECH

Technische Beschreibung von HerData: Datenaufbereitung, Web-Applikation, Bereitstellung, Qualität, Sicherheit und empfohlene Weiterentwicklung – konsolidiert in einem Dokument.

**Stand:** 04.11.2025
**Datensatz-Version:** 27.10.2025
**Pipeline-Bezeichnung:** build_herdata
**Live-Commit:** b36a807

## Zielbild der Technik

HerData ist eine statische, robuste Web-Anwendung für Exploration und Prüfung eines kuratierten Korpus. Der technische Kern besteht aus einer vierphasigen Daten-Pipeline, einer leichtgewichtigen Frontend-Architektur ohne Framework-Abhängigkeiten und einer Veröffentlichung über GitHub Pages. Entscheidungen zu Darstellung und Interaktion sind bewusst so getroffen, dass Nachvollziehbarkeit, Lesbarkeit und Pflegeaufwand priorisiert werden.  

## Technologie-Stack (überblicksartig)

* **Datenaufbereitung:** Python-Pipeline auf Basis der Standardbibliothek; Parsing der Quellen für Personen, Briefe, Orte, Berufe und Relationen; Ergebnis ist ein denormalisiertes JSON für das Frontend.
* **Frontend:** Vanilla JavaScript ES6+ mit modularer Struktur; Kartendarstellung mit MapLibre GL JS; ergänzende Visualisierungen mit ECharts (Brief-Explorer); Icon-System mit Font Awesome 6.5.1 CDN; Layout mit CSS Grid/Flexbox; OSM-Tiles als Basiskarte.
* **Deployment:** Statisches Hosting über GitHub Pages aus dem `docs`-Bereich des Hauptzweigs; die Artefakte werden derzeit manuell aktualisiert. 

## Daten-Pipeline (vier Phasen, deskriptiv)

1. **Identifikation:** Aus den maßgeblichen XML-Quellen wird die kuratierte Grundgesamtheit von Frauen mit stabilen Projektkennungen und verfügbaren Normdaten bestimmt. Qualitätsgrenzen (z. B. erwartete Abdeckung) sind als Plausibilitätsrahmen beschrieben. 
2. **Brief-Matching:** Briefmetadaten aus CMIF werden vorrangig über Normidentifier zugeordnet; Ziel ist eine belastbare Aussage zu Absenderinnen, Erwähnungen und indirekten Bezügen. 
3. **Anreicherung:** Ortsbezüge und Berufe werden aus neuen und konsolidierten Beständen zusammengeführt; das Verfahren nutzt einen Hybrid-Ansatz, um historische Ortsreferenzen nachvollziehbar zu verankern. 
4. **JSON-Erzeugung:** Das Ergebnis ist ein denormalisiertes, frontend-taugliches JSON mit Metadaten zur Entstehung; die Struktur ist auf direkte Nutzung im Browser ausgelegt (keine Client-Joins). 

**Provenance und Validierung:** Die Pipeline enthält klar umrissene Prüfungen und beschreibt Herkunft sowie Transformationsschritte in nachvollziehbarer Form. Fehler führen zu einem gestoppten Lauf, sodass fehlerhafte Artefakte nicht publiziert werden. 

## Frontend-Architektur (ohne Snippets)

* **Kernprinzip:** Eine modulare, deklarative Struktur ohne schwergewichtige Frameworks. Daten werden einmal geladen, in einen internen Zustand übernommen und für Karte, Filter und Detailansichten konsistent wiederverwendet. 
* **Karte als Primäransicht:** MapLibre GL JS rendert Marker und Cluster. Die Cluster-Farblogik folgt einer dokumentierten Entscheidung und macht Zusammensetzungen nach Briefaktivität sichtbar; „indirect“ fließt bewusst nicht in die Aggregation ein. 
* **Filterung:** Mehrkriterielle Filter (u. a. Rolle, Tätigkeitsgruppen, Zeit) wirken mit AND-Logik auf die aktive Menge und aktualisieren die Kartendarstellung ohne Strukturwechsel. 
* **Personenansicht:** Profile erscheinen als „Cards“, die Kerndaten und Verweise sichtbar machen; zusätzliche Reiter/Abschnitte werden nur dann gezeigt, wenn Daten vorhanden sind. 
* **Zeit & Netzwerk:** Eine kompakte Zeitdarstellung steht als ergänzende Perspektive bereit; eine Netzwerkansicht ist vorbereitet, bleibt jedoch in ihrer Aussagebreite an die flächige Integration der Relationen gebunden. 

## Interaktions- und Ereignislogik

Interaktive Elemente (Cluster, Marker, Filter, Tabs) sind so entworfen, dass Ereignisse einmalig registriert und bei Datenwechseln weiterverwendet werden. Popups bei dicht belegten Orten listen mehrere Personen auf; Zoomen und Fokussieren folgen konsistenten Heuristiken. 

## Responsives Verhalten

Das Layout nutzt ein spaltenbasiertes Grundraster mit kontrollierten Umbrüchen. Auf kleinen Bildschirmen werden Bedienelemente in überlagernde Paneele verlagert; Inhalte bleiben priorisiert erfassbar. Karten-Container berücksichtigen Größenänderungen, damit keine Anzeige-Artefakte entstehen. 

## Qualität, Prüfpfade und Reife

* **Plausibilitätsrahmen:** Die Pipeline arbeitet mit erwarteten Bandbreiten und strukturellen Mindestanforderungen; Verstöße werden sichtbar gemacht und verhindern eine stillschweigende Veröffentlichung. 
* **Produktreife:** Für die Karten-basierte Exploration mit Profilen und Filtern ist der Stand produktionsreif. Bereiche, die von Beziehungen und vollständigen Briefmetadaten abhängen, sind konzeptionell vorhanden, aber datenmäßig noch nicht flächig unterlegt. 

## Sicherheit und Privacy (projektangemessen)

Es werden ausschließlich historische Personen und öffentliche Referenzen genutzt; personenbezogene Schutzanforderungen aktueller Rechtsetzung sind dadurch nicht berührt. Externe Kachel- und CDN-Dienste können IP-basierte Zugriffslogs erstellen; eine kurze Datenschutzhinweis-Sektion ist empfohlen, ebenso die Option, Bibliotheken lokal bereitzustellen. 

## Deployment und Betrieb

Veröffentlichung erfolgt als statische Seite aus dem `docs`-Bereich. Der Prozess ist bewusst einfach gehalten und wird manuell ausgelöst; bei Bedarf kann eine automatisierte Erzeugung nachgezogen werden, sobald Datenintegrationsschritte stabilisiert sind. 

## Offene Punkte mit klarem Pfad

* **Beziehungsdaten produktiv übernehmen:** Die Relationen liegen quellen­seitig vollständig vor; ihre Aufnahme verbreitert kontextuelle Hinweise und ermöglicht konsistentere Netzwerk-Sichten. 
* **Briefmetadaten auf Personenebene vervollständigen:** Eine flächige Zuordnung ermöglicht brieforientierte Zeitperspektiven und stärkt Profil-Abschnitte. 
* **Namensvarianten integrieren:** Varianten verbessern Suche und historische Anschlussfähigkeit ohne die Kernlogik zu verändern. 
* **Leichte Härtung der Auslieferung:** Lokale Bereitstellung kritischer Bibliotheken und kurze Datenschutz-Hinweise erhöhen Betriebssicherheit ohne Komplexitätszuwachs. 

## Begründete Architekturentscheidungen (ausgewählte)

* **MapLibre als Kartenkern:** Leistungsfähiges Rendering, klare Layer-Trennung und konsistente Daten-Styling-Mechanismen; passt zum statischen Publikationsmodell. 
* **Denormalisiertes JSON:** Direkte Nutzbarkeit im Browser, nachvollziehbar und ohne Client-seitige Verknüpfungen; senkt Fehlerrisiken und Lade-Komplexität. 
* **Karte als Startansicht, Cards als Profilformat:** Minimiert kognitive Last, erhöht Lesbarkeit und lässt Erweiterungen kontrolliert zu.