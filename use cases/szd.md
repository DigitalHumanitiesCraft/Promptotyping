# Use Case: Stefan Zweig Digital Annotation Tool

## Kontext

Timeline-basiertes Annotationstool für die digitale Nachlassrekonstruktion Stefan Zweig Digital des Literaturarchivs Salzburg. Das Tool ermöglicht Forscher:innen die Annotation von Korrespondenzdaten mit Forschungsstatus, Tags und Notizen. Direkt-Integration mit dem GAMS (Geisteswissenschaftliches Asset Management System) für Zugriff auf XML-strukturierte Metadaten. Browserbasierte Single Page Application ohne externe Abhängigkeiten. LocalStorage-basierte Datenhaltung mit JSON Export/Import für individuelle Forschungsarbeit. Experimentelle Form des Promptotyping als "strukturiertes Vibe Coding" mit Critical-Expert-in-the-Loop Ansatz demonstriert die Möglichkeiten von LLM-gestützter Rapid-Prototyping für Digital Humanities Tools.

- **Stand:** 1. Promptotyping Iteration (experimentell)
- **Zeitinvestition (geschätzt):** 2 h
- **Umfang:** Korrespondenzdaten aus Stefan Zweig Digital (XML-Metadaten mit Titel, Datum, Ersteller, Mitwirkende)
- **Repository:** [github.com/DigitalHumanitiesCraft/excellence](https://github.com/DigitalHumanitiesCraft/excellence/tree/main/promptotyping/szd-annotation-timeline)
- **Demo:** [dhcraft.org/excellence/promptotyping/szd-annotation-timeline](https://dhcraft.org/excellence/promptotyping/szd-annotation-timeline/)
- Blog: https://dhcraft.org/excellence/blog/Critical-Vibing-Claude-4/

## LLMs und Tools

- Claude 4 Sonnet

## Notizen zum Prozess

- Experimentelles "Vibe Coding" mit strukturiertem Ansatz als Critical-Expert-in-the-Loop
- Von Konzept zu funktionierendem Prototyp in nur 2 Stunden
- Screenshot der originalen Stefan Zweig Digital Website als Design-Referenz verwendet
- Schrittweise Implementation: erst Datenfetching testen, dann HTML/Design, dann Funktionalität
- Bewusste Komplexitätsreduktion durch Verzicht auf KI-Unterstützung, Kollaboration und erweiterte Visualisierungen
- Demonstration wie präzises technisches Grundverständnis (Begriffe wie "fetchen", "Single Page Application") das LLM in die richtige Richtung lenkt
- "Vibe-Check" Experiment um ein Gespür für Claude 4 Sonnet Fähigkeiten zu bekommen
- Synchronisation zwischen LLM und Entwickler wichtig - manuelle Änderungen müssen zurück kommuniziert werden

## Promptotyping Documents

- Keine separaten Promptotyping Documents erstellt (experimenteller Ansatz)
- Alle Anforderungen in einem einzigen strukturierten Prompt mit XML-Beispieldaten
- README.md mit Projektdokumentation (nachträglich erstellt)