# PROJECT

HerData beschreibt und visualisiert kuratierte Informationen zu Frauen im Umfeld von Goethes Korrespondenz. Das Projekt bündelt einen überprüfbaren Datenauszug, eine verständliche Darstellung für Fachcommunity und interessierte Öffentlichkeit sowie klare Regeln für Herkunft, Verknüpfung und Unsicherheit. Ziel ist eine kompakte, nachvollziehbare Wissensgrundlage, die wissenschaftlich anschlussfähig bleibt und zugleich unmittelbar nutzbar ist.

**Stand:** 04.11.2025
**Datensatz-Version:** 27.10.2025
**Pipeline-Bezeichnung:** build_herdata
**Live-Commit:** b36a807

Das Zielbild ist eine statische, robuste Webdarstellung, deren Startansicht eine Karte ist. Personen erscheinen in einer kartenbasierten Übersicht und in eigenständigen Cards, die wesentliche Metafelder erklären und externe Verweise sichtbar machen. Netzwerkbezüge werden als kontextuelle Hinweise integriert; eine eigenständige Netz-Navigation ist nicht vorgesehen. Eine frühere Timeline-Variante wurde nach Evaluierung zugunsten der Karten-Startansicht verworfen, weil die Karte die räumliche Orientierung und den Einstieg in Personenprofile zuverlässiger unterstützt.

Die adressierten Nutzergruppen sind Forschende und Studierende der Digital Humanities, Editions- und Geschichtswissenschaften, sowie kulturinteressierte Leserinnen und Leser. Für die Fachcommunity steht Nachvollziehbarkeit im Vordergrund: klare Definitionen, konsistente Abdeckungen auf identischer Grundgesamtheit, erläuterte Heuristiken und eine dokumentierte Herkunft zentraler Angaben. Für die breite Öffentlichkeit zählt Verständlichkeit: eindeutige Bezeichnungen, behutsame Reduktion auf Kernaussagen, transparente Hinweise, wenn Daten unsicher oder nicht vorhanden sind.

Zum Scope gehören die kuratierte Grundgesamtheit von 448 Frauen, die zugehörigen Metafelder (Namen, Lebensdaten, Identifikatoren, Orte, Tätigkeitskategorien), kontextuelle Briefbezüge sowie ausgewählte externe Referenzen. Nicht zum Scope gehören Vollabdeckungen jenseits der kuratierten Auswahl, detailtiefe prosopographische Biographien und interaktive Netzwerke als eigenständiger Navigationsmodus. Diese Abgrenzung ermöglicht eine verlässliche Pflege und eine klare Erwartungshaltung gegenüber dem Datenstand.

Der wissenschaftliche Kontext folgt etablierten Praktiken der Digital Humanities: saubere Trennung von Daten, Darstellung und Herkunftsdokumentation; erklärbare Mapping-Regeln zu Referenzsystemen; vorsichtiger Umgang mit historischen Toponymen; explizite Markierung von Unsicherheiten. Gender-Studies-Perspektiven werden berücksichtigt, indem Sichtbarkeit, Benennung und Kategorisierung reflektiert erfolgen und die Grenzen des Materials transparent bleiben. Externe Vokabulare und Identifikatoren werden eingesetzt, um Anschlussfähigkeit zu sichern, ohne die Projektidentität aufzugeben.

Die Terminologie ist einheitlich: „Karte“ bezeichnet die Startansicht; „Explorer“ meint das Gesamterlebnis aus Karte, Filtern und Personen-Cards; „Cards“ sind die strukturierte Personenansicht ohne Tab-Logik; „Netzwerkhinweise“ sind Kontextmarker für Beziehungen, die nicht als eigene Navigation fungieren; „Provenance“ ist die nachvollziehbare Beschreibung von Herkunft und Transformation einer Angabe; „Unsicherheit“ wird genannt, wenn Evidenz unvollständig ist oder Heuristiken eingesetzt werden. Diese Begriffe werden in allen Dateien konsistent verwendet, sodass Leserinnen und Leser ohne zusätzliche Erklärungen folgen können.

HerData priorisiert Klarheit vor Vollständigkeit, Nachvollziehbarkeit vor technischer Detailtiefe und verlässliche Pflege vor Feature-Breite. Alle weiteren Dateien knüpfen an diesen Rahmen an: Datenregeln und Herkunft werden in „data.md" erklärt, Entscheidungen in „decisions.md" begründet, Anforderungen in „requirements.md" beschrieben, Darstellung in „design.md" ausgeformt und Bereitstellung in „tech.md" nachvollziehbar gemacht. Damit bleibt das Wissenssystem kompakt, neutral und erklärend — und zugleich ausreichend vollständig, um geprüft und weitergeführt zu werden.

## Wissenschaftlicher Kontext

PROPYLÄEN-Projekt:
Langzeitedition der Briefe an Goethe (bis 2039), 20.000+ Briefe von 3.800 Personen/Körperschaften. Bisher 8.000 Briefe in über 600 Ausgaben gedruckt, über 90% im Goethe- und Schiller-Archiv. Bearbeitungsstand: 1762-Aug 1786 vollständig online (Regesten, Transkriptionen, Digitalisate), Sept 1786-1824 Metadaten online, bis 1822 durchsuchbare Brieftexte, TEI-Volltext 15,7% via API verfügbar. Letzter Druckband 10 (1823-1824, 2023). Platform: https://goethe-biographica.de

Digital Humanities Standards:
- TEI (Text Encoding Initiative): Standard für digitale Editionen (Namespace: http://www.tei-c.org/ns/1.0)
- CMIF (Correspondence Metadata Interchange Format): 15.312 Briefe im ra-cmif.xml (Zenodo 14998880, CC BY 4.0)
- GND (Gemeinsame Normdatei): Personenidentifikation, 93,8% Absender, 82,5% erwähnte Personen
- GeoNames: Geografische Verortung, 91,6% Orte
- SNDB (Systematische Namensdatei Briefeschreiber): Lokale Normdaten, URL: https://ores.klassik-stiftung.de/ords/f?p=900:2:::::P2_ID:[ID]
- AGRELON (Agent Relationship Ontology): 38 Beziehungstypen (Familie, Beruflich, Sozial)

Gender Studies Perspektive:
Sichtbarmachung marginalisierter Akteurinnen: 448 kuratierte Frauen (von 3.617 Frauen in SNDB = 15,3% von 23.571 Personen). 230 Frauen mit Briefverbindung (51,3%), 191 Briefabsenderinnen (vs 2.333 männliche Absender). Analyse von Geschlechterverhältnissen um 1800: Kommunikationsmuster, soziale Rollen und Handlungsräume, thematische Schwerpunkte in Frauenbriefen. Rekonstruktion weiblicher Netzwerke über AGRELON-Beziehungsdaten, geografische Verortung und temporale Muster.

Forschungsfragen:
Primär: Welche Frauen korrespondierten mit Goethe? Welche Frauen werden in Briefen erwähnt? Wie sind diese Frauen untereinander vernetzt?
Sekundär: Geografische Verteilung weiblicher Korrespondenz, temporale Muster, thematische Schwerpunkte, soziale Rollen und Berufsfelder.

Quellenkritik und Limitationen:
Stärken: Hohe Normdaten-Abdeckung (>90% bei Absendern), 87,6% exakte Datierungen, strukturelle Stabilität (SNDB).
Limitationen: Work in Progress (kontinuierliche Änderungen), TEI-Volltext nur 15,7% verfügbar, SNDB ~2 Jahre alt (Oktober 2025).

Strukturelle Verzerrungen:
- Geografisch: Weimar 34,2% (5.236 Briefe), Jena 15,3% (2.338 Briefe), Berlin 6,7% (1.019 Briefe) - Zentraldeutschland-Fokus
- Sprachlich: Deutsch 96,9% (14.835 Briefe), Französisch 2,7% (408 Briefe)
- Sozial: Bildungsbürgerliches Milieu, Gender-Bias historischer Quellen (Überlieferung), Namenskonventionen ohne Normalisierung
- Temporal: 47% aller Briefe aus 1810-1824 (Spätphase überrepräsentiert), vor 1790 nur 2,7% (421 Briefe), Peak 1817 (730 Briefe)

Konsequenz: Ergebnisse nicht generalisierbar auf gesamtes 18./19. Jahrhundert; regionale und soziale Perspektive spezifisch; quantitative Aussagen im historischen Kontext interpretieren.

Nutzungsrechte:
- HerData-Projekt: CC BY 4.0
- CMIF-Daten: CC BY 4.0 (DOI: 10.5281/zenodo.14998880)
- SNDB-Daten: Klassik Stiftung Weimar (Lizenz nicht explizit dokumentiert)
- GND: CC0 1.0 (Public Domain), Deutsche Nationalbibliothek
- GeoNames: CC BY 4.0
