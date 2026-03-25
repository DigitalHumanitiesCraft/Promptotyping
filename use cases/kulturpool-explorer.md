---
type: use-case
created: 2026-03-01
tags: [promptotyping, museum, original]
status: complete
project: Kulturpool Explorer
repository: https://github.com/chpollin/vkm-explorer
---

# Kulturpool Explorer - Austrian Collection Interface

## Summary

Der Kulturpool Explorer ist ein statisches Sammlungsinterface für ca. 19.000 Objekte aus der Kulturpool-API, fokussiert auf die frei lizenzierten Bestände des Volkskundemuseums Wien. Das Projekt dokumentiert einen vollständigen [[Promptotyping]]-Durchlauf — von der API-Exploration über die Wissensaufbereitung bis zum funktionierenden explorativen Browser-Tool als GitHub Pages Site.

Das Projekt ist aus zwei Gründen als Case Study relevant: Erstens zeigt es parallele Agent-Orchestrierung (zwei Claude-Code-Instanzen gleichzeitig). Zweitens dokumentiert ein Screencast den gesamten Prozess transparent und macht die Arbeitspraktiken nachvollziehbar, die in den Workshops als Hands-On-Beispiel dienen.

- Repository: [github.com/chpollin/vkm-explorer](https://github.com/chpollin/vkm-explorer)
- Scope: ~19.000 Objekte aus Kulturpool-API (Volkskundemuseum Wien, offene Lizenzen)
- Video: [Live Hands-On: Von der Kulturpool-API zum explorativen Sammlungsinterface](https://youtu.be/tQBaaVhPu5U) (YouTube, März 2026)

## LLMs und Tools

- Claude Opus 4.6 (Claude Code, 1M Context, zwei parallele Instanzen)
- VS Code mit Live Server Extension
- Speech-to-Text für Prompt-Eingabe

## Prozessdokumentation

### Phase 1 — API-Exploration und Datensichtung

Der Prozess beginnt ohne Vorwissen über die Kulturpool-API. Ein erster Prompt an Claude Chat klärt, ob die API existiert und wie Daten abrufbar sind. Dann übernimmt Claude Code die eigentliche API-Kommunikation: Bash-Befehle (curl) an die API-Endpunkte, Ergebnisse werden im Kontextfenster aggregiert.

Zentrale Erkenntnis: Claude Code fungiert als agentischer Abstraktionslayer — man kommuniziert in natürlicher Sprache mit einer API, ohne den Programmcode selbst zu schreiben. Die API-Abfragen liefern den Gesamtüberblick (2,4 Mio. Objekte, Institutionen, Medientypen, Lizenzen), aus dem dann eine spezifische Sammlung ausgewählt wird.

**Auswahlkriterien für die Sammlung:** Frei lizenzierte Objekte (maximale offene Lizenzen), eine abgeschlossene Teilsammlung (Volkskundemuseum Wien), ausreichend Objekte für ein exploratives Interface (~19.000).

### Phase 2 — Parallele Wissensaufbereitung (zwei Instanzen)

Zwei Claude-Code-Instanzen arbeiten gleichzeitig — Extension oben, Terminal unten.

**Instanz 1 (oben, API-Kontext).** Synthetisiert die API-Daten in ein Data.md: Sammlungsbereiche, Objekttypen, Metadatenstruktur, Beziehungsmodell als Baumstruktur, Querverbindungen.

**Instanz 2 (unten, Design-Recherche).** Simuliert eine interdisziplinäre Expertengruppe (Kuratorin, Informationswissenschaftlerin, UX-Designerin, Ethnologin, Community-Vertreterin) für ein Userinterface-Konzept. Recherchiert aktuelle Forschungsliteratur (2025/2026) zu explorativen Sammlungsinterfaces. Folgt dem Information Seeking Mantra (Overview first, Filter, Details on demand). Ergebnis: Design.md mit Designprinzipien und Referenzprojekten.

**Bewertung der parallelen Arbeitsweise.** Kognitiv sehr anstrengend, sehr produktiv, aber nicht nachhaltig über längere Zeiträume. Beide Instanzen dürfen sich nicht in die Quere kommen — sie arbeiten auf unterschiedlichen Wissensebenen (Daten vs. Design).

### Phase 3 — Wissenskonsolidierung (Refactoring)

Nach dem initialen Aufbau folgt ein expliziter Refactoring-Schritt: Alle Markdown-Dokumente im Knowledge-Ordner werden gelesen, Redundanzen identifiziert und beseitigt, die Struktur wird konsolidiert. Ergebnis: Ein sauberer Knowledge-Ordner mit API.md, Datenbestand.md, Datenmodell.md, Designkonzepte.md.

Begründung: Je sauberer die Wissensstruktur, desto besser funktioniert die Implementierung. Auch mit 1M-Token-Kontextfenster lohnt sich die Vorab-Strukturierung, weil sie Redundanzen eliminiert und die Qualität der nachfolgenden Implementierung erhöht.

### Phase 4 — Implementierung und Iteration

Claude Code erzeugt einen Implementierungsplan: Harvest-Script (API → JSON), Transform (Aufbereitung für Static Page), Build (HTML/CSS/JS), lokaler Test. Die Umsetzung erfolgt als statische Webseite mit Vanilla JavaScript.

**Erste Iteration.** Funktionierendes Sammlungsinterface mit Facettennavigation, Bildvorschau, Detailansicht mit Links zur Originalsammlung. Design ansprechend und klar, aber noch klassisches Sammlungsinterface.

**Zweite Iteration.** Nach Screenshot-Feedback: Collection Wall mit coordinated Visualizations. Donut-Chart als Herzstück (Sammlungsstruktur auf einen Blick), dichter Bildteppich als Hero-Element, Minivisualisierungen pro Sammlungsbereich. Implementiert "Show first, don't ask"-Prinzip aus der recherchierten Literatur.

**Performance-Problem.** Browser hängt bei großen Datenmengen (~19.000 Objekte) — konkretes Beispiel für die [[Jagged Intelligence|jagged frontier]]: Das Modell erzeugt funktionierenden Code, aber ohne Optimierung für die tatsächliche Datenmenge.

### Phase 5 — Visuelle Verifikation

Screenshots als primäre Feedbackschleife. Der Screenshot wird dem Modell übergeben mit der Aufforderung zur kritischen Analyse. Formulierungen wie "Haben wir dort alles wirklich perfekt umgesetzt?" und "Sollten wir hier nicht mit einer interaktiven Informationsvisualisierung beginnen?" lenken das Modell in produktive Richtungen, ohne die Lösung vorzugeben.

## Arbeitspraktiken und Techniken

### Fragen als Reasoning-Technik

Bewusst Fragen stellen, deren Antwort man kennt ("Die Daten werden wir lokal aus einem JSON laden, oder?"), um das Modell zu zusätzlichem Reasoning zu zwingen. Die Frage erzeugt mehr Token, mehr Begründungen und damit mehr verwertbaren Kontext. Eine Prompting-Technik, die das Modell in bestimmte Richtungen schubst, ohne die Antwort vorzugeben.

### Effort-Steuerung

Der `/effort`-Befehl steuert den Reasoning-Aufwand des Modells (low/medium/high/max). Bei komplexen Aufgaben (API-Exploration, Designrecherche) wird Maximum Effort eingesetzt, bei einfachen Umsetzungsschritten reicht Medium.

### Plan-Modus für komplexe Aufgaben

Bei steigender Komplexität wird immer ein Plan erzeugt ("Erzeuge dafür einen Plan"), bevor die Umsetzung beginnt. Der Plan wird gesichtet und ggf. angepasst, bevor die Implementierung startet. Das entspricht dem `/plan`-Workflow in Claude Code.

### Kontextfenster-Monitoring

Der `/context`-Befehl zeigt die Auslastung des Kontextfensters. Mit Opus 4.6 und 1M Token ist das Fenster groß genug für den gesamten Workflow, aber die Strukturierung des Wissens in separate Dokumente bleibt wichtig für die Qualität.

### Simulierte Expertengruppe

Claude Code simuliert eine interdisziplinäre Gruppe für ein spezifisches Designproblem. Die Rollen (Kuratorin, Informationswissenschaftlerin, UX-Designerin, Ethnologin, Community-Vertreterin) erzeugen unterschiedliche Perspektiven auf dasselbe Problem. Verbunden mit Websuche nach aktueller Forschungsliteratur als Qualitätssicherung.

## Promptotyping Documents

| Dokument | Typ | Inhalt |
|---|---|---|
| Data.md | K | Datenstruktur, Sammlungsbereiche, Metadaten, API-Abfragen |
| Design.md | K/A | Designprinzipien, Referenzprojekte, Informationsvisualisierung |
| API.md | K | Kulturpool-API-Endpunkte und Parameter |
| Datenbestand.md | K | Statistische Übersicht, Sammlungsstruktur |
| Datenmodell.md | K | Beziehungsmodell, Hierarchien |
| Designkonzepte.md | K | Umsetzungsoptionen, Literaturbasiert |

## Use Case Type

Data exploration

## Workshopkontext

Dieses Projekt dient als zentrales Praxisbeispiel in zwei Workshops:

**[[KI in der Softwareentwicklung - Wissensdokument Baustein 2|Trier Workshop: KI in der Softwareentwicklung]]** (10. April 2026). Die Teilnehmer bauen im Hands-On-Teil ein eigenes Kulturpool-Frontend. Der Screencast zeigt den vollständigen Durchlauf als Referenz. Die Arbeitspraktiken (API-Exploration, Wissensaufbereitung, Plan-Modus, visuelle Verifikation) entsprechen den Hands-On-Schritten 1.1–1.5.

**[[2026-04-20 KI kulturgeschichtliche Objekte Museumsbund|Museumsbund Workshop: KI und kulturgeschichtliche Objekte]]** (20. April 2026). Das Projekt illustriert, wie man von einer API über [[Context Engineering]] zu einem explorativen Sammlungsinterface kommt. Relevant für Block 2 (Von Daten zu Werkzeugen) und als Kontext für den [[LLM-Klassifikation volkskundlicher Museumsobjekte|Use Case Landessammlungen NÖ]].

## Synthesis

Der Kulturpool Explorer verdichtet mehrere Kernargumente der [[Promptotyping]]-Methode in einem einzigen Durchlauf. Die Trennung von Wissen (Data.md, Design.md) und Implementierung (HTML/CSS/JS) zeigt, dass [[Context Engineering]] der eigentliche Hebel ist — nicht die Code-Generierung. Die parallele Instanzierung demonstriert, dass Agent-Orchestrierung bereits auf der Ebene eines einzelnen Entwicklers funktioniert, aber kognitive Kosten hat.

Die Iterationsschritte (funktionierendes Interface → Screenshot-Feedback → verbessertes Interface) machen den Unterschied zwischen [[Vibe Coding]] und strukturiertem agentischem Arbeiten sichtbar: Der erste Wurf funktioniert (Vibe Coding), aber die Qualität entsteht durch gezielte Iteration mit expliziten Anforderungen (Agentic Coding). Das Kontinuum zwischen beiden ist im Screencast direkt beobachtbar.

## Sources

- Kulturpool Explorer. GitHub Repository: https://github.com/chpollin/vkm-explorer
- Screencast: [Live Hands-On: Von der Kulturpool-API zum explorativen Sammlungsinterface](https://youtu.be/tQBaaVhPu5U) (YouTube, März 2026)
- Kulturpool API: https://api.kulturpool.at

## Related

- [[Promptotyping]]
- [[Context Engineering]]
- [[Vibe Coding]]
- [[Information Visualization]]
- [[Coordinated Views]]
- [[KI in der Softwareentwicklung - Wissensdokument Baustein 2]]
- [[2026-04-20 KI kulturgeschichtliche Objekte Museumsbund]]
- [[LLM-Klassifikation volkskundlicher Museumsobjekte]]
- [[Human-as-Dispatcher]]
