# Use Case: REALonline Rauminventar-Analyse Dashboard

## Kontext

Mittelalterliche Rauminventare aus der REALonline-Datenbank sollten für Sachkulturforscher explorierbar gemacht werden. Die Daten stammten aus österreichischen und norditalienischen Adelshaushalten und umfassten Raum-Objekt-Beziehungen aus dem Spätmittelalter.

* **Stand:** 1. Promptotyping Iteration
* **Zeitinvestition (geschätzt):** 5 h (1. Promptotyping Iteration)
* **Repository:** [github.com/chpollin/imareal-room-object](https://github.com/chpollin/imareal-room-object)  
* **Demo:** [chpollin.github.io/imareal-room-object](https://chpollin.github.io/imareal-room-object/)
## LLMs und Tools

- Claude Opus 4.1 (Claude Desktop) für konzeptuelle Arbeit (Close Reading, Design-Analyse)
- Claude Sonnet 4.5 (Claude Code) für Implementation (Code-Generierung, Datenverarbeitung).
## Notizen zum Prozess

* Trotz mehrfacher Feedbackschleifen (Screenshot + Konsole) gibt es Probleme beim Umsetzen der Treemap.
* JOURNAL.md erstmals als aktives Dokument eingesetzt. Claude Sonnet 4.5 dokumentierte selbstständig mit. Keine Korrekturen im Journal durch den Entwickler.
* Verwendung des Promptotyping Systems-Prompts, damit Claude Sonnet 4.5 (Claude Code) die Promptotyping-Dokumente selbstständig anlegt und den Benutzer durch den Promptotyping-Prozess führt.
* Das Journal dokumentiert das "Warum" der Entscheidungen, die Commits fixieren das "Was" der funktionierenden Zustände. Gemeinsam ermöglichen sie die Wiederaufnahme von Promptotyping-Sessions mit besserem Kontextwissen (eigener Begriff *Context Memory*).
* GitHub Commits fungieren als konkrete Savepoints zwischen Phasen. Kritisch: Der Workshop zeigt, dass vergessene Commits vor größeren Umbauten problematisch sind.
* Die visuelle Rückkopplung zwischen Entwickler und LLM durch Screenshots verbessert das UI iterativ.
*  Es wurde ohne expliziten MVP direkt implementiert. Das muss je nach Komplexitätsgrad individuell abgeschätzt werden. 
* Durchführung der 1. Promptotyping Iteration
## Promptotyping Documents

- **DATA.md** - Datenstruktur-Dokumentation
- **DATA-CONTEXT.md** - Historischer Kontext der Daten
- **DESIGN.md** - UX/UI Spezifikation
- **INSTRUCTIONS.md** - Implementierungs-Anweisungen
- **JOURNAL.md** - Promptotyping-Journal
- **REQUIREMENTS.md** - Anforderungs-Spezifikation

