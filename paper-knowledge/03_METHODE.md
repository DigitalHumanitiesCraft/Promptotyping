## 3. Die Promptotyping-Methode

### 3.1 Phasenmodell

Promptotyping strukturiert die Entwicklung in sechs konsekutive Phasen.

**CONTEXT (README.md)** erfasst Projektziele und Constraints. Diese Phase definiert Zielgruppe, Anwendungskontext und technische Rahmenbedingungen.

**DATA (DATA.md)** spezifiziert Datenstrukturen, Schnittstellen und Beziehungen. Bei komplexen Projekten entstehen multiple Datendokumente.

**EXPLORATION** ist eine experimentelle Phase ohne formale Dokumentation. Entwickler testen verschiedene Technologien oder Algorithmen. Diese Phase klärt technische Machbarkeit.

**REQUIREMENTS (REQUIREMENTS.md)** formalisiert funktionale und nicht-funktionale Anforderungen basierend auf den Explorationsergebnissen.

**IMPLEMENTATION (INSTRUCTIONS.md)** entwickelt detaillierte Anweisungen und Designspezifikationen. Diese Phase dokumentiert alle Datentransformationen, Validierungen und Algorithmen. Sie erwies sich in unserer Erfahrung als kritisch für die Fehlervermeidung.

**PROTOTYPE** generiert den finalen Code basierend auf INSTRUCTIONS.md.

### 3.2 Savepoints und Dokumentstruktur

Jede Phase fungiert als Savepoint mit erfolgreich validiertem Meilenstein. Der Übergang zum nächsten Savepoint erfolgt erst nach Expertenfreigabe. Bei Problemen wird die Phase wiederholt, nicht der Savepoint revidiert.

### 3.3 Dokumentation als externes Arbeitsgedächtnis

LLMs haben kein persistentes Gedächtnis zwischen Konversationen. Die Markdown-Dokumente fungieren als externes Arbeitsgedächtnis. Jedes Dokument hat einen spezifischen Fokus und vermeidet Redundanz. Querverweise zwischen Dokumenten sind explizit.

**Interaktive Exploration:**
Untersuchen Sie hier die Struktur eines realen "Promptotyping Vaults" und navigieren Sie durch die Markdown-Dokumente, die als externes Gedächtnis dienen.

<div class="module-placeholder" data-module="vault-explorer"></div>

### 3.4 Critical Expert in the Loop (CEIL)

Das CEIL-Prinzip bezeichnet die durchgehende Integration von Fachexperten. Der **Developer in the Loop** kodiert den Prozess, während der **Fachexperte** die domänenspezifische Korrektheit verifiziert. Im Stefan-Zweig-Digital-Projekt reduzierte die CEIL-Intervention beispielsweise ein initial vorgeschlagenes Multi-User-System auf eine fokussierte Single-Page-Application.

### 3.5 Das 90-Prozent-Prinzip

Frontier-LLMs erreichen schnell einen Lösungsgrad von etwa 90 Prozent. Die verbleibenden zehn Prozent erfordern typischerweise domänenspezifisches Wissen. Das JOURNAL.md dokumentiert präzise, wo diese Grenze erreicht wurde und welche manuellen Interventionen erfolgten.
