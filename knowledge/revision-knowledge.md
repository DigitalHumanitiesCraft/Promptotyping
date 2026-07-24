---
title: Revisionswissen Promptotyping-Paper
project: promptotyping-paper
method: promptotyping
status: complete
created: 2026-07-23
updated: 2026-07-24
---

# Revisionswissen: Promptotyping-Paper

Destillat eines Review-Durchgangs (Chat, 2026-07-23) als Grundlage für
die gemeinsame Spezifikation der Revisionsaufträge. Dieses Dokument
ist Steering-Wissen, kein fertiger Auftrag: Es hält Befunde,
Prinzipien und Prozessarchitektur fest; die konkreten Aufträge werden
im Dialog mit dem Operator daraus entwickelt.

## Stand 2026-07-24

Die hier beschriebene Vier-Phasen-Revision ist durchlaufen; das
Dokument steht ab hier als historisches Steuerwissen. Phase A liegt
als `revision-audit-a0.md` bis `revision-audit-a3.md` sowie als
`revision-audit-a4-record-verification.md` und
`revision-audit-a5-vault-coverage.md` vor, ergänzt um
`revision-frame-proposal.md` und `revision-research-sdd.md`. Phase B
lief als Chat-Entscheidungen des Operators, festgehalten in den
Commit-Nachrichten und im Entscheidungsstand von `paper-writing.md`;
die in Abschnitt 6 vorgesehene Datei `revision-decisions.md` ist nie
entstanden. Phase C und D sind im Gesamtdurchgang vom 2026-07-24
umgesetzt.

Erhalten bleibt das Dokument, weil drei seiner Teile weiter binden.
Die Prozessregeln aus Abschnitt 6 (ankerfreie Audit-Aufträge, freies
Lektorat vor dem Kontakt mit den Problemfeldern, Steelman-Pflicht mit
harter Operator-Schranke) sind in `paper-writing.md` als Vorgabe für
alle künftigen Prüfaufträge an diesem Paper übernommen und verweisen
hierher. Die Operator-Vorgaben in Abschnitt 3 gelten unverändert. Die
Folgearbeit in Abschnitt 7 ist offen und außerhalb des Papertexts zu
lösen, insbesondere ein öffentlich dokumentierter End-to-End-Fall
einer dritten Person und dokumentierte Fehlschläge als eigene
Evidenzklasse; das Paper hält seit der Revision ausdrücklich fest,
dass Fehlschläge nicht systematisch dokumentiert wurden. Die
Problemfelder in Abschnitt 2 sind weiterhin als Hypothesen zu lesen,
wie sie beantwortet wurden, halten die Audit-Berichte fest.

## 1. Ausgangslage

Das Paper ist die kanonische Methodendefinition von Promptotyping.
Ein externer Review-Durchgang (ohne Zugriff auf Journals und
Companion) hat Problemfelder identifiziert. Diese sind **Hypothesen,
keine Urteile**: Jedes ist am Material zu prüfen, und ein Befund, der
einem Problemfeld widerspricht, ist ein Ergebnis erster Ordnung.

Einschätzung des Reviews zur Gesamtlage: theoretisch stärkster Teil
ist die Übersetzungsverdopplung (Dokumente als Boundary Objects und
zugleich Quelle der maschinellen Ableitung, 2.4/3.4); empirisch
schwächster Teil ist die Evidenzbasis (Einzelpraktiker, keine
Kontrollbedingung, Konfundierung mit Modellfähigkeit — im Paper
benannt, aber Benennung neutralisiert nicht).

## 2. Problemfelder (zu prüfen, nicht abzuarbeiten)

- **Transfer:** Die Behauptung, Nicht-Hybride könnten mit der Methode
  Forschungsdaten in Artefakte übersetzen, wirkt stärker als die
  Evidenz (Teaching Cases belegen Lehrbarkeit und Produzierbarkeit
  der Dokumenttypen, nicht Wirksamkeit für Dritte). Offene Fragen:
  nötige Absenkungstiefe; produktive Wendung der Lücke als
  Falsifikationsangebot / offenes Forschungsprogramm statt Defizit;
  Folgeanpassungen an anderen Stellen (Genealogie, Rahmung der
  Teaching Cases, Schlusssynthese).
- **Zirkularität:** Die Kernbeobachtung, dass Artefaktqualität der
  Dokumentqualität folgt, könnte konfundiert sein, weil Dokumenttiefe
  und Verifikationsaufwand vom selben Experten stammen (gemessen wird
  womöglich investierte Gesamtaufmerksamkeit). Offen: was das Korpus
  an interner Varianz oder Gegenevidenz tatsächlich hergibt.
- **Semantik-Mehrwert:** Das Paper setzt semantisch explizite Daten
  als Idealfall, während die eigene Destillations-Architektur ("the
  model reads about the data") diesen Vorteil relativieren könnte.
  Offen: ob das Korpus den Mehrwert belegt; Default ist ein Satz, der
  ihn als offene empirische Frage einräumt.
- **Abgrenzungsschärfe:** Differenzen zu benachbarten Ansätzen (v. a.
  Spec-Driven Development) könnten als Existenzunterschiede
  formuliert sein, wo Gradunterschiede ehrlicher wären (dort
  peripher, hier konstitutiv — als Denkrichtung, nicht als fertige
  Formel).
- **Redaktionelle Lasten:** Hinweise auf Dopplungen (u. a. FAIR4RS),
  dokumentierende statt argumentierende Passagen, hohe
  Querverweisdichte, inkonsistente Metriken in der
  Evidenzpräsentation (Tabelle 5.2), Arbeitsstands-Reste im Abstract.

Zusätzlich ungeprüfte Analyseebenen, die der Review nicht abgedeckt
hat und die ein freies Lektorat adressieren soll:
Argumentationsarchitektur, Beitragspositionierung, theoretische
Tragfähigkeit der Kernfigur selbst (sie ist Gegenstand der Prüfung,
nicht gesetzt), Evidenzpräsentation jenseits der Tabelle,
Leserführung. Diese Ebenen sind Blickrichtungen, keine Checkliste.

## 3. Nicht verhandelbare Operator-Vorgaben

- Der ÖAW-Fork fungiert nur als Mini-Nebenbemerkung (Existenzbeweis,
  dass Fremdnutzung möglich ist). Die Argumentation stützt sich nicht
  auf ihn.
- "Schneller und billiger" kommt nirgends als Argument vor.
- Keine quantitativ-empirische Belegführung als Anspruch des Papers.

## 4. Arbeitsprinzipien für alle Aufträge

- **Kritik ist Hypothese:** Problemfelder am Material prüfen;
  Widerspruch des Materials ist ein zentraler Befund.
- **Steelman-Pflicht:** Vor jedem Änderungsvorschlag die stärkste
  Verteidigung des bestehenden Texts formulieren; nur was sie nicht
  übersteht, wird geändert.
- **Produktivitätsprinzip:** Keine Kritik ohne Weg. Jeder Befund
  endet in einem umsetzbaren Vorschlag oder der begründeten
  Feststellung, dass die Stelle bleibt.
- **Belegpflicht:** Jeder Befund mit wörtlichem Zitat plus Dateipfad.
  Zusammenfassungen ohne Beleg zählen nicht.
- **Negativbefunde sind gleichwertig:** Wenn das Material eine
  Behauptung nicht hergibt, ist das der Befund. Nichts erfinden,
  nichts plausibilisieren, nichts aufrunden.
- **Keine ankernden Vorgaben:** Aufträge nennen Ziel, Kontext und
  Qualitätsmaßstab, aber keine Fundstellen, Beispielprojekte oder
  fertigen Lösungen — der Agent identifiziert selbst. (Test zugleich,
  ob die Kritik am Text auffindbar ist.)
- **Externe Behauptungen:** Aussagen über Frameworks oder Tools
  außerhalb des Repositorys nur mit datierter, abrufbarer Quelle;
  ohne Webzugriff bleibt es bei dem, was das Paper belegt.

## 5. Qualitätsmaßstab für alle Vorschläge

- **Evidenztreue in beide Richtungen:** Claims exakt so stark wie
  ihre Evidenz; defensive Unterbietung ist derselbe Fehler wie
  Übertreibung.
- **Stimmerhalt:** Register des Papers (britisches Englisch, präzise
  Prosa, keine Hedging-Floskeln).
- **Nebenwirkungsprüfung:** Jeder Eingriff wird geprüft, ob er
  Stellen beschädigt, auf die andere Teile des Arguments bauen.
- **Selbstanwendung:** Die Revision folgt der eigenen Methode —
  Audits sind Exploration, Entscheidungen liegen beim Critical
  Expert, Implementierung erfolgt aus freigegebenen Dokumenten.

## 6. Prozessarchitektur

Vier Phasen mit harter Operator-Schranke:

- **Phase A — Audits** (read-only, Reports nach einheitlichem Schema
  als `knowledge/revision-audit-{kürzel}.md`): A0 freies kritisches
  Lektorat (zuerst, vor Kontakt mit den Problemfeldern, damit der
  Blick nicht kanalisiert ist; Priorisierung auf max. fünf
  Hebelbefunde), A1 Claim-Evidenz-Audit (Schwerpunkt Transfer), A2
  Korpus-Audit (Zirkularität, Semantik-Mehrwert, inkl.
  Gegenhypothesen), A3 redaktionelles Audit (Diffs mit
  Wortzahl-Bilanz; Companion als Migrationsziel prüfen; bei mehreren
  Lösungswegen Optionen vorlegen statt vorentscheiden).
- **Phase B — Operator-Entscheidung:** kein Agentenauftrag. Freigabe,
  Ablehnung oder Änderung pro Vorschlag, dokumentiert als
  `knowledge/revision-decisions.md`, einziger Input für Phase C. Hier
  trägt der Operator auch Detailanliegen nach, die die offenen Audits
  nicht von selbst finden (z. B. Acknowledgements-Ergänzung um
  belegte Prüfschritte).
- **Phase C — Implementierung:** nur freigegebene Entscheidungen,
  jede Änderung als eigener Commit mit Verweis auf die Entscheidung,
  nach größeren Eingriffen Check gegen den Qualitätsmaßstab im
  Journal.
- **Phase D — Konsistenzpass:** Gesamtlektüre gegen die Knowledge
  Base (verspricht keine Stelle mehr, was eine andere nicht
  einlöst?), plus Gegenprobe aus Gutachterperspektive, ob die
  Revision selbst neue Schwächen erzeugt hat (defensive
  Formulierungen, Beitrag zu klein für die Länge). Restspannungen ins
  Journal, nicht still glätten.

Report-Schema (alle Audits): Fundstelle, Beleg, Steelman, Bewertung,
Vorschlag (als Diff, wo sinnvoll), offene Entscheidung. Jeder
Audit-Abschluss fasst zusammen: (a) entscheidungsbedürftige Punkte,
(b) Fälle, in denen das Material einem Problemfeld widersprochen hat,
(c) ungefragte Befunde.

## 7. Nur außerhalb des Papers lösbar (Folgearbeit, nicht Revision)

- Ein öffentlich dokumentierter End-to-End-Fall einer dritten Person
  ohne den Autor als Operator (eigene Dokumente, eigenes Artefakt,
  eigene Verifikation). Prüfen, ob eine bestehende Projektkooperation
  sich nachträglich als solcher Fall öffnen lässt.
- Dokumentierte Fehlschläge des Transfers als informativste
  Evidenzklasse für die Voraussetzungsbehauptung der Methode.
- Die Evidenzbasis selbst (N=1, Kontrollbedingung) wird nur durch
  Zeit und Fremdnutzung besser; im Paper ist die richtige Strategie
  präzise Grenzziehung plus Falsifikationsangebot.

## Anhang: Abgleich mit dem Stand vom 2026-07-23 (Koordinator)

Durch die Arbeit vom 2026-07-23 bereits erledigt: die
Arbeitsstands-Reste im Abstract (Abstract neu formuliert und
verbatim-gesperrt), die Metrik-Inkonsistenzen in 5.2/5.3
(Quantitäten bereinigt, Tabelle konzeptionell umgebaut), die
Evidenz-Vorbehalts-Dopplung zwischen 5.4 und 6.4 (geschnitten).
Weiterhin offen und Gegenstand der Phase-A-Audits: Zirkularität,
Transfer, Semantik-Mehrwert, SDD-Abgrenzungsschärfe,
FAIR4RS-Mehrfachnennung.
