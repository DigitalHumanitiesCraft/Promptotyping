# Grounded Vault

**Eine provenienzgeschlossene Wissensbasis-Architektur für Menschen und AI Agents. Ein Promptotyping-Profil für belegpflichtige Wissensarbeit.**

## Problem

Von Sprachmodellen erzeugter Text ist in seiner Rohform nicht auditierbar. Ein generierter Bericht nennt Quellen, aber seine Struktur bietet keinen Weg, eine einzelne Aussage gegen die Passage zu prüfen, die sie stützen soll. Dem Leser bleibt, dem Text im Ganzen zu vertrauen oder die Arbeit zu wiederholen. Nachträglich eingefügte Zitationen ändern daran nichts, weil sie eine Verbindung behaupten, ohne sie prüfbar zu machen. Für Wissensarbeit unter Belegpflicht, etwa Strategien, Anträge, Gutachten oder wissenschaftliche Synthesen, ist das disqualifizierend.

## Kernidee

Grounded Vault ist eine Repository-Architektur aus portablen Markdown-Dateien, in der jede tragende Aussage einen maschinell prüfbaren Anker zu ihrem Quellmaterial trägt, vom fertigen Deliverable bis hinunter zur einzelnen Passage, Datenzeile oder Berechnung. AI Agents erzeugen diese Struktur skaliert; die Architektur behauptet an keiner Stelle, ihr Inhalt sei wahr. Ein fertiger Vault ist ein vollständig vorbereiteter Prüfgegenstand, in dem Expertenprüfung passagengenau ansetzen kann, statt bei null zu beginnen. AI-Output wird dadurch auditierbar, und der Prüfstand jeder einzelnen Aussage bleibt jederzeit ablesbar.

## Aufbau

```
30_deliverable/      Fließtext; jeder tragende Satz per Fußnote an Claims gebunden,
                     eigene Schlussfolgerungen sichtbar als Setzung markiert
20_claims/           atomare, quellenübergreifende Aussagen; Themen-Landkarten
                     (MOCs) als Einstieg je Thema
10_distillates/      ein Distillat je Quelle, Kernaussagen mit Anker in die Quelle
00_representation/   stabile Quellrepräsentationen: Volltexte mit Block-Ankern,
                     Datendateien mit Schema
_sources/ +          Originale (lokal, wo Vertraulichkeit es verlangt) und
references/          bibliografische Wurzeln (CSL-JSON)
```

Jede Schicht ist für sich prüfbar und lieferfähig. Quellen gehören zu Source Types, je definiert durch Repräsentation, Distillationsoperation und Ankertyp. Jede Quellrepräsentation trägt einen kompakten, Dublin-Core-kompatiblen Metadatenblock samt Lizenzfeld; Vertraulichkeit und Lizenz sind Metadaten der einzelnen Quelle, keine Architekturentscheidung. Archivierbare Dokumente ankern per Block-Referenz auf den Volltext, nur zitierbare Publikationen per buchstabengetreuem Zitat samt DOI, strukturierte Daten per reproduzierbarer Berechnung. Beschaffungskanäle sind dazu orthogonal; der ausgearbeitete Referenzkanal ist Deep Research mit Spiegelung über Zotero, wobei der Research-Report selbst nie Quelle wird und alle Anker an die aufgefundenen Publikationen binden. Widersprüche zwischen Quellen bleiben als `contested` sichtbar und sind für das Deliverable selbst Information.

## Prüfung

Drei Instanzen prüfen mit klar getrennter Autorität:

- **Validation**, die deterministische Konformitätsprüfung des Vaults gegen sein eigenes Schema. Jeder Anker löst auf, jedes Zitat stimmt Zeichen für Zeichen, jede Berechnung rechnet nach, jedes Frontmatter entspricht seinem Typ.
- **Machine Review**, die adversariale LLM-Prüfung mit Anti-Anchoring. Der Prüfer sieht nur Quellstelle und Behauptung und filtert für die menschliche Prüfung vor.
- **Verification**, die Expertenprüfung durch Menschen, allein autorisiert, Evidenz festzustellen.

Fest ist je Instanz der Prüfvertrag, also Gegenstand, Autoritätsgrenze, Bedingungen (Anti-Anchoring, Verdikt-Vokabular) und die Pflicht, Ergebnis samt Datum am geprüften Dokument zu protokollieren; welcher Validator läuft und welches Modell prüft, entscheidet das Projekt. Der Audit Trail hält fest, dass Statuswerte ausschließlich Ergebnisse real gelaufener Prüfungen sind. Eine Aussage steigt von `grounded` (geankert) über `validated` (maschinell bestanden) zu `verified` (menschlich geprüft). Ein frischer Vault enthält Grounding; Evidence entsteht erst durch menschliche Prüfung. Aus dieser Unterscheidung leitet sich die gesamte Terminologie ab, einschließlich des Namens.

## Steuerung und duale Lesbarkeit

Ein `knowledge/`-Ordner regiert die Produktion mit sechs Dokumenten, index (Navigation, Begriffe), specification (Zweck, Entscheidungen), schema (deklaratives Regelwerk), operations (prozedurales Playbook aller Ketten), state (alles Volatile) und journal (Genese, append-only). Diese Governance-Schicht ist Promptotyping; Grounded Vault ist dessen Profil für belegpflichtige Wissensarbeit. Dieselben Dateien lesen zwei Leser, der Mensch in Obsidian über Wikilinks entlang der Provenance Chain, der Agent über einen imperativen Action-Layer (`CLAUDE.md`), der jede Aufgabe auf das deklarative Regelwerk routet.

## Instanziierung

Ein Projekt setzt wenige Parameter, Thema und Themen-Rückgrat, aktive Source Types, Deliverable-Genre, Sprache und Verifikationsrolle. Schichtenmodell, Ankermechanik, Prüfverträge und Statusprogression sind invariant. Ausgeliefert wird das Template als GitHub-Repository mit ausfüllbaren Vorlagen und einem generischen Validierungsskript.
