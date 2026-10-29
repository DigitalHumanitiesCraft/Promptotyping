---
title: Vorlage Journal
slug: journal
version: "0.6"
status: complete
source: Vorlage Journal
mirrored: 2026-08-21
machine-url: https://dhcraft.org/Promptotyping/_content/promptotyping-document/journal.md
---
# Vorlage Journal

Diese Vorlage strukturiert den kuratierten rückwärtsgerichteten Provenienzindex einer Promptotyping-Wissensbasis. Das resultierende Dokument heißt `journal.md`, liegt im `knowledge/`-Ordner und weist sachlich zusammengehörige Übergänge nach. Die aktuellen Inhalte bleiben in ihren zuständigen Declarative, Action und Process Documents.

## Geltungsbereich

Die Vorlage trägt für jedes aktive Promptotyping-Projekt. `journal.md` entsteht mit dem ersten nachweiswürdigen Übergang, führt dauerhaft `status: active` und bleibt am Projektende als Provenienzindex erhalten. Einträge entstehen nach einem sachlichen Übergang, der etwas integriert, verwirft oder korrigiert, sowie selten nach einer semantischen Verdichtung.

Das Journal wird verdichtet, sobald Wiederholungen, kopiertes Dauerwissen, erledigte Offenlisten, verstreute Entscheidungsgründe oder ein zu teurer regulärer Lesekontext seine Provenienzfunktion beeinträchtigen. Seine Länge oder die Zahl der Einträge löst allein keine Verdichtung aus.

## Funktion des Dokuments

Das Journal beantwortet, welcher sachliche Übergang aus welcher Quelle in welches Ziel führte und welches Ergebnis angenommen, verworfen oder korrigiert wurde. Es ist ein kuratierter Provenienzindex für Menschen und Agents, die Herkunft oder Entscheidungsgrund einer aktuellen Aussage prüfen.

Der aktuelle Projektstatus liegt in der projektspezifischen lebenden Quelle. Dauerhafte Sach- und Handlungsinhalte liegen in Declarative oder Action Documents, angenommene Zukunftsarbeit in `plan.md`, offene Eingänge in `handoff.md` und ausführliche Prüfresultate in `verification.md`. Git bewahrt frühere Wortlaute.

## Strukturprinzipien

Erstens entsteht ein Eintrag pro sachlich zusammengehörigem Übergang. Sessiongrenzen erzeugen keinen eigenen Eintrag, wenn sie keinen solchen Übergang abschließen.

Zweitens bildet ein Eintrag einen Übergang ab und führt die zutreffenden Felder Anlass, Befund, Entschieden, Korrigiert, Geändert und Belege. Felder ohne Inhalt entfallen. Eine Integration steht in Geändert, eine Verwerfung in Entschieden mit Grund, eine Korrektur in Korrigiert mit Verweis auf die frühere Aussage. Der seltene Wartungstyp `verdichtet` bleibt ein eigener Eintrag und nennt den bearbeiteten Bereich und den Git-Ausgangsstand.

Drittens stehen Operator-Urteile wörtlich im Feld Entschieden, eingeleitet mit „Operator:“. Eine delegierte Entscheidung trägt eine Herkunftsformel, die nennt, wer nach welcher Delegation entschieden hat und dass die Entscheidung revidierbar ist.

Viertens nennt jeder Eintrag mindestens einen Commit oder einen anderen prüfbaren Beleg im Feld Belege.

Fünftens folgt der Journal-Nachweis der dauerhaften Integration. Bei einem Handoff-Punkt werden zuerst Quelle und aktuelles Ziel geprüft, anschließend wird der dauerhafte Inhalt integriert oder begründet verworfen. Danach entsteht der Journal-Eintrag und der Punkt wird aus `handoff.md` entfernt.

Sechstens verdichtet das Journal semantisch. Jede substantielle Aussage des Vorgängerstands erhält eine Disposition, nämlich behalten, in ein kanonisches Ziel integrieren, begründet verwerfen oder ausschließlich über Git bewahren. Eine temporäre Deckungsliste sichert diese Prüfung und wird danach entfernt.

Siebtens sind Einträge, die außerhalb des Journals zitiert werden, etwa in Paper, README oder Fallstudie, bei der Verdichtung geschützt. Ihr Inhalt bleibt erhalten, ihre Überschriften bleiben als Anker stabil. Geschützt sind ebenso Operator-Urteile im Wortlaut, Herkunftsformeln, Korrekturen, verworfene Alternativen mit Grund und alle Commit-Hashes.

Achtens kennt das Journal keinen Bestandsschutz für Altformen. Ein Journal in einer früheren Eintragsform wird bei seiner nächsten Verdichtung auf die Felder dieser Vorlage migriert.

## Frontmatter-Schema

Das Journal folgt dem Pflichtkern aus [Konvention Promptotyping Documents](#konvention-v0.1). Spezifisch für die Provenance-Funktion gelten folgende Felder.

- `status:` ist immer `active`.
- `related:` enthält mindestens `handoff` und typischerweise `project` sowie `specification`.
- `topics:` und `knowledge-sources:` entfallen üblicherweise.
- `updated:` wird nach einem neuen Eintrag oder einer Verdichtung angepasst.

## Abschnitte im Detail

### Einstieg

Nach der H1 beginnen unmittelbar die Einträge. Die Funktion und die Zuständigkeiten der Geschwister-Dokumente beschreibt diese Vorlage im Abschnitt Funktion des Dokuments.

### Einträge

Die Einträge stehen neueste zuerst. Die Überschrift lautet `### YYYY-MM-DD Gegenstand`. Eine Sessionnummer oder Phase bleibt nur dort als Zusatz, wo sie außerhalb des Journals zitiert wird. Ein Eintrag führt nur die Felder, die Inhalt haben.

- Anlass: Handoff-Punkt, Review oder Operatorauftrag, prüfbar benannt.
- Befund: was sich zeigte, auch wenn es eine frühere Aussage widerlegt.
- Entschieden: Entscheidung mit Grund. Operator-Urteile stehen wörtlich, delegierte Entscheidungen mit Herkunftsformel, verworfene Alternativen als „Verworfen: X, weil …“.
- Korrigiert: die frühere Aussage mit Datum oder Eintrag und der Ort der gültigen Fassung.
- Geändert: Zieldokument und Abschnitt in einem Satz, ohne Datei- oder Diffinventar.
- Belege: Commits, Reportpfade oder andere prüfbare Nachweise.

Ein Eintrag passt auf einen Bildschirm, jedes Feld umfasst wenige Sätze. Zahlen stehen nur, wo die Zahl selbst der Befund ist, nie als Stand. Die Sprache der Feldlabels folgt `language:`. Englische Journale führen Trigger, Found, Decided, Corrected, Changed und Evidence.

### Verdichtungsnachweis

Ein `verdichtet`-Eintrag nennt Bereich, Git-Ausgangsstand und Ergebnis. Vorgängerstand ist der direkte Parent des Verdichtungscommits. Der Nachweis steht als Eintrag, nicht in einem einleitenden Absatz. Vor der Verdichtung muss ein sauberer Git-Ausgangsstand vorliegen. Pfade, Anker und Hashes werden gegen den resultierenden Stand geprüft. Die temporäre Deckungsliste wird nach der Prüfung gelöscht.

## Was nicht reingehört

- Aktueller Projektstatus und offene Aufgaben.
- Angenommene Zukunftsarbeit, sie liegt in `plan.md`.
- Offene Übergabepunkte, sie liegen in `handoff.md`.
- Ausführliche Prüfresultate, sie liegen in `verification.md`.
- Kopien von dauerhaftem Sachwissen oder Handlungsregeln.
- Sessionprotokolle, Code-Diffs und vollständige Commit-Messages.
- Ein Feld für Offenes, nächste Schritte oder Wiedereinstieg, sie liegen in `plan.md` oder `handoff.md`.
- Phasenübersichten, Architektur- und Datenbeschreibungen, sie liegen in den Declarative Documents oder in `INDEX.md`.
- Wörtliche Handoffs, sie werden integriert und danach entfernt.
- Prüfzahlen, Testläufe und Digests, sie liegen in `verification.md` oder in der Commit-Message.
- Datei- und Diff-Listen sowie Wortlaut-Historie, Git bewahrt sie.
- Maschinenlokale Pfade und Sitzungslogistik.
- Ordinal-Überschriften wie „Nacht IX“ ohne Gegenstand.
- Starre Verdichtungsschwellen, ein Fenster der jüngsten Einträge oder ein `journal-archive.md`.

## Vorlage zum Befüllen

````markdown
---
title: Journal
project:
  name: [Projektname]
  repository: [Repository-URL]
method:
  name: Promptotyping
  url: https://lisa.gerda-henkel-stiftung.de/digitale_geschichte_pollin
status: active
language: [de | en]
version: [Repo-Schema-Version]
created: [YYYY-MM-DD]
updated: [YYYY-MM-DD]
authors: [Autor 1, Autor 2]
generated-with: [Harness (LLM), falls relevant]
template:
  name: Vorlage Journal
  version: 0.6
  url: https://dhcraft.org/Promptotyping/promptotyping-document/journal
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-journal
related: [project, specification, handoff]
---

# Journal

## Einträge

<!-- Ein Eintrag pro sachlich zusammengehörigem Übergang, neueste zuerst. Nur Felder mit Inhalt erscheinen. Englische Labels: Trigger, Found, Decided, Corrected, Changed, Evidence. -->

### YYYY-MM-DD [Gegenstand]

- Anlass: [Handoff-Punkt, Review oder Operatorauftrag]
- Befund: [was sich zeigte, auch gegen eine frühere Aussage]
- Entschieden: [Entscheidung mit Grund; Operator: „wörtliches Urteil“; delegiert mit Herkunftsformel; Verworfen: X, weil …]
- Korrigiert: [frühere Aussage mit Datum oder Eintrag; Ort der gültigen Fassung]
- Geändert: [Zieldokument#Abschnitt in einem Satz]
- Belege: [Commit, Reportpfad]

<!-- Seltener Wartungseintrag nach semantischer Verdichtung:

### YYYY-MM-DD verdichtet [Bereich]

- Vorgängerstand: [direkter Parent des Verdichtungscommits]
- Bereich: [geprüfte Einträge oder Sektionen]
- Ergebnis: [behaltene, integrierte, verworfene und ausschließlich über Git bewahrte Aussagen]
-->
````

## Anwendung als Prompt-Template

Bei einem sachlich zusammengehörigen Übergang wird zuerst der dauerhafte Zielinhalt aktualisiert. Danach ergänzt der Agent oben im Journal einen Eintrag mit den zutreffenden Feldern und mindestens einem Beleg. Für einen Handoff-Punkt folgt anschließend dessen vollständige Entfernung aus `handoff.md`.

Eine Verdichtung beginnt auf einem sauberen Git-Ausgangsstand, dessen Commit als künftiger Parent notiert wird. Zuerst entsteht die Schutzliste aus extern zitierten Stellen, Operator-Urteilen, Herkunftsformeln, Korrekturen, verworfenen Alternativen, Commit-Hashes und zitierten Überschriften. Danach erstellt der Agent vorübergehend eine Deckungsliste aller substantiellen Aussagen und weist jeder Aussage eine Disposition zu. Er schreibt die Einträge auf die Felder um, verschiebt Offenes nach `plan.md` oder `handoff.md` und Dauerwissen in seine Zieldokumente. Nach der Übernahme prüft er Hashes mit `git cat-file -e`, Links und Anker sowie jede externe Zitierstelle per Suche gegen das neue Journal. Ändert sich eine zitierte Überschrift, wird der zitierende Text mitgezogen. Die Deckungsliste wird entfernt und ein `verdichtet`-Eintrag referenziert den Vorgängerstand. Ein Archivdokument entsteht dabei nicht.

Der Review prüft, ob jeder Eintrag einen sachlichen Übergang abbildet und einen Beleg nennt, ob aktueller Status, Zukunftsarbeit, offene Eingänge und Prüfdetails an ihren zuständigen Orten liegen und ob jeder Verdichtungsnachweis einen überprüfbaren Vorgängerstand nennt.

## Beispiel

Ein offener Handoff-Punkt liefert eine neue Schemainvariante. Nach Prüfung wird die Variante in `data-schema.md` integriert, und das Journal erhält oben folgenden Eintrag. Anschließend wird der Handoff-Punkt entfernt.

```markdown
### 2026-10-20 Schemainvariante für undatierte Briefe

- Anlass: Handoff-Punkt vom 2026-10-18 aus der Datenprüfung.
- Befund: Ein Teil der Briefe trägt nur ein erschlossenes Jahr, das bisherige Schema verlangte ein Tagesdatum.
- Entschieden: Operator: „Erschlossene Daten bleiben als solche markiert und werden nie zu Tagesdaten aufgefüllt.“ Verworfen: Auffüllen auf den 1. Januar, weil es eine Genauigkeit vortäuscht.
- Geändert: data-schema.md#Datierung
- Belege: `a1b2c3d`
```

## Begriffe

- Provenienzindex: kuratierte Rückwärtsreferenz auf sachliche Übergänge und ihre überprüfbaren Quellen.
- Herkunftsformel: Angabe bei einer delegierten Entscheidung, wer nach welcher Delegation entschieden hat und dass die Entscheidung revidierbar ist.
- Schutzliste: vor einer Verdichtung erstellte Liste der Stellen, die unverkürzt erhalten bleiben.
- Disposition: Entscheidung für eine substantielle Aussage bei der Verdichtung, nämlich behalten, integrieren, verwerfen oder ausschließlich über Git bewahren.
- Vorgängerstand: sauberer Git-Ausgangsstand, gegen den eine Verdichtung vollständig geprüft wird.

## Versionshistorie

- 0.6 (2026-10-28): Typmodell durch Felder ersetzt (Anlass, Befund, Entschieden, Korrigiert, Geändert, Belege). Neueste zuerst, Operator-Urteile wörtlich, Herkunftsformel, Belegpflicht, Schutz extern zitierter Einträge, kein Bestandsschutz für Altformen. Verdichtungsverfahren mit Schutzliste und Parent-Hash, Liste der Ausschlüsse erweitert.
- 0.5 (2026-10-10): Selbstbeschreibung aus dem erzeugten Journal entfernt. Funktion und Zuständigkeiten bleiben in der Vorlage, die Provenienzstruktur bleibt erhalten.
- 0.4 (2026-08-21): Journal als kuratierten Provenienzindex gefasst. Inhaltstypen, Handoff-Reihenfolge und semantische Verdichtung ohne Archiv normiert.
- 0.2 (2026-07-19): Englisches Funktionsvokabular (Provenance), Block-Status auf `active`, Lebenszyklus-Absatz.
- 0.1 (2026-05-09): Erstfassung.

## Related

- [Vorlagen Promptotyping Documents](#vorlagen)
- [Konvention Promptotyping Documents](#konvention-v0.1)
- [Promptotyping](#overview)
- Context Engineering
- [Vorlage Handoff](#promptotyping-document-handoff)
- [Vorlage Plan](#promptotyping-document-plan)
- [Vorlage Verification](#promptotyping-document-verification)
