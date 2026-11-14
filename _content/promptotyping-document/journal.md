---
title: Vorlage Journal
slug: journal
version: "0.7"
status: complete
source: Vorlage Journal
mirrored: 2026-08-21
machine-url: https://dhcraft.org/Promptotyping/_content/promptotyping-document/journal.md
---
# Vorlage Journal

Diese Vorlage strukturiert das Arbeitstagebuch einer Promptotyping-Wissensbasis. Das resultierende Dokument heißt `journal.md` und liegt im `knowledge/`-Ordner. Am Anfang hält es im Abschnitt `## Open`, was die nächste Sitzung zum Fortsetzen braucht, darunter weist es die sachlich zusammengehörigen Arbeitsschritte nach, neueste zuerst. Die Regel dazu steht in der [Konvention Promptotyping Documents](#konvention-v0.1) im Abschnitt Journal, open points and condensing.

## Geltungsbereich

Die Vorlage trägt für jedes Promptotyping-Projekt, weil die Funktion Provenance immer ausgelöst wird. `journal.md` entsteht beim Repo-Setup mit dem Abschnitt `## Open` und dem Satz „Nothing open.“, führt dauerhaft `status: active` und bleibt am Projektende als Arbeitstagebuch erhalten. Jeder Handoff am Sitzungsende schreibt `## Open` neu und ergänzt die Einträge für die Arbeitsschritte, die das Journal noch nicht nachweist.

Das Journal wird verdichtet, sobald seine älteren Einträge einem Leser nicht mehr helfen, den aktuellen Stand zu verstehen, etwa wegen Wiederholungen, kopierten Dauerwissens, verstreuter Entscheidungsgründe oder eines zu teuren regulären Lesekontexts. Der vollständige Wortlaut der verdichteten Einträge geht dabei nach `journal-archive.md` im selben Ordner. Eine Zeilen- oder Eintragszahl löst allein keine Verdichtung aus.

## Funktion des Dokuments

Das Journal beantwortet, was offen ist und wie das Projekt zu seinem Stand gekommen ist. `## Open` richtet sich an die Person oder den Agenten, die die Arbeit als Nächstes aufnehmen. Die Einträge weisen nach, welcher Arbeitsschritt aus welchem Anlass was ergab, was entschieden, verworfen oder korrigiert wurde und wo die Belege liegen. Wer Herkunft oder Entscheidungsgrund einer aktuellen Aussage prüft, liest dort.

Dauerhafte Sach- und Handlungsinhalte liegen in declarative knowledge documents oder agent instruction documents, angenommene und noch nicht begonnene Arbeit in `specification.md` oder `plan.md`, ausführliche Prüfresultate in `verification.md`. Den aktuellen Projektstatus trägt die projektspezifische lebende Quelle. Den Wortlaut verdichteter Einträge bewahren `journal-archive.md` und Git.

## Strukturprinzipien

1. `## Open` steht am Anfang und hält die vollständige aktuelle Liste des Offenen. Dazu gehören Angefangenes, ungeprüfte Ergebnisse, Fragen, die auf die Forschenden warten, und Arbeit, die einem benannten Empfänger übergeben ist. Jeder Handoff schreibt den Abschnitt als Ganzes neu. Ein erledigter Punkt verlässt ihn, und ein Eintrag darunter hält fest, wie er erledigt wurde. Ist nichts offen, steht dort „Nothing open.“ Die Überschrift `## Open` und dieser Satz sind feste Zeichenketten und bleiben auch in einem deutschen Journal englisch, weil Agenten und Werkzeuge an ihnen den Abschnitt erkennen.
2. Ein Eintrag entsteht pro sachlich zusammengehörigem Arbeitsschritt. Sessiongrenzen erzeugen keinen eigenen Eintrag, wenn sie keinen solchen Schritt abschließen.
3. Ein Eintrag führt die Felder Anlass, Befund, Entschieden, Verworfen, Korrigiert, Geändert und Belege, soweit sie Inhalt haben. Felder ohne Inhalt entfallen. Eine verworfene Alternative steht mit Grund in Verworfen, eine Korrektur in Korrigiert mit Verweis auf die frühere Aussage.
4. Operator-Urteile stehen wörtlich im Feld Entschieden, eingeleitet mit „Operator:“. Eine delegierte Entscheidung trägt eine Herkunftsformel, die nennt, wer nach welcher Delegation entschieden hat und dass die Entscheidung revidierbar ist. Das Urteil der Forschenden über einen Promptotype ist ein eigener Eintrag in ihren Worten.
5. Jeder Eintrag nennt mindestens einen Commit oder einen anderen prüfbaren Beleg im Feld Belege.
6. Ein Eintrag ist Geschichte und wird nur durch Verdichtung umgeschrieben. Bei einem übergebenen oder offenen Punkt werden vor der Nutzung Quelle und aktuelles Ziel geprüft, dauerhafter Inhalt wird in das zuständige Dokument integriert oder begründet verworfen, danach entsteht der Eintrag und der Punkt verlässt `## Open`.
7. Die Verdichtung nimmt nur Detail aus `journal.md`. `## Open` und die fünf jüngsten Einträge bleiben unverändert, der Wortlaut älterer Einträge wird an `journal-archive.md` angehängt, und zusammengehörige ältere Einträge werden zu je einem Meilensteineintrag gefaltet. Extern zitierte Einträge, etwa in Paper, README oder Fallstudie, Operator-Urteile, Herkunftsformeln, Korrekturen, verworfene Alternativen mit Grund und Commit-Hashes bleiben dabei wörtlich erhalten, zitierte Überschriften bleiben als Anker stabil.
8. Ein Journal ohne `## Open` erhält den Abschnitt beim nächsten Handoff. Ein noch vorhandenes `knowledge/handoff.md` gibt dabei seine offenen Punkte an `## Open` ab, und die Datei wird dem Operator zur Entfernung vorgeschlagen. Frühere Einträge behalten Form und Reihenfolge.

## Frontmatter-Schema

Das Journal folgt dem Pflichtkern aus [Konvention Promptotyping Documents](#konvention-v0.1). Spezifisch für die Provenance-Funktion gelten folgende Felder.

- `status:` ist immer `active`.
- `related:` enthält typischerweise `project` und `specification`, bei einem Projekt mit Arbeitsplan auch `plan`.
- `topics:` und `knowledge-sources:` entfallen üblicherweise.
- `updated:` wird nach einem Handoff, einem neuen Eintrag oder einer Verdichtung angepasst.

## Abschnitte im Detail

### Open

Der Abschnitt folgt unmittelbar auf die H1. Jeder Punkt ist so konkret, dass die nächste Sitzung sofort beginnen kann, etwa „Ein Viertel der Datierungen trägt kein Sicherheitsattribut, wie unsichere Daten angezeigt werden, ist offen.“ Ein Punkt, der an einen benannten Empfänger übergeben ist, nennt diesen Empfänger und was er zum Beginnen braucht, nämlich Quelle, Stand und Belege. Arbeitet der Empfänger in einem anderen Repository, steht der Punkt im `## Open` des dortigen Journals. Ist nichts offen, steht dort allein „Nothing open.“

### Einträge

Die Einträge stehen unter `## Einträge`, in englischen Journalen `## Entries`, neueste zuerst. Die Überschrift lautet `### YYYY-MM-DD Gegenstand`. Eine Sessionnummer oder Phase bleibt nur dort als Zusatz, wo sie außerhalb des Journals zitiert wird. Ein Eintrag führt nur die Felder, die Inhalt haben.

- Anlass: offener Punkt, Review oder Operatorauftrag, prüfbar benannt.
- Befund: was sich zeigte, auch wenn es eine frühere Aussage widerlegt.
- Entschieden: Entscheidung mit Grund. Operator-Urteile stehen wörtlich, delegierte Entscheidungen mit Herkunftsformel.
- Verworfen: verworfene Alternative mit Grund.
- Korrigiert: die frühere Aussage mit Datum oder Eintrag und der Ort der gültigen Fassung.
- Geändert: Zieldokument und Abschnitt in einem Satz, ohne Diffinventar.
- Belege: Commits, Reportpfade, Tests oder andere prüfbare Nachweise.

Ein Eintrag passt auf einen Bildschirm, jedes Feld umfasst wenige Sätze. Zahlen stehen nur, wo die Zahl selbst der Befund ist, nie als Stand. Die Sprache der Feldlabels folgt `language:`. Englische Journale führen Trigger, Found, Decided, Rejected, Corrected, Changed und Evidence.

### Verdichtung und Archiv

Die Verdichtung läuft nach dem festen Ablauf der [Konvention Promptotyping Documents](#konvention-v0.1) im Abschnitt Journal, open points and condensing. Sie beginnt auf einem vollständig committeten Stand. Der unveränderte Wortlaut jedes älteren Eintrags wird an `journal-archive.md` angehängt, ältester zuerst und nur, soweit er dort noch nicht steht. Vor jeder Änderung an `journal.md` wird geprüft, dass die Überschrift jedes zu verdichtenden Eintrags im Archiv steht. Ein Meilensteineintrag trägt den Zeitraum im Kopf, etwa `### 2026-08-01–2026-09-15 Datenmodell und Importpfad`. Eine Zeile im Journal verweist auf das Archiv, und ein eigener `verdichtet`-Eintrag nennt Ausgangsstand, Bereich und die Zahl der archivierten Einträge. Das Archiv wird nur angehängt und nie umgeschrieben, beim Sessionstart wird es nur gelesen, wenn ein Entscheidungsgrund gebraucht wird.

## Was nicht reingehört

- Aktueller Projektstatus, er liegt in der projektspezifischen lebenden Quelle.
- Angenommene Arbeit, die noch nicht begonnen ist, sie liegt in `specification.md` oder `plan.md`.
- Ausführliche Prüfresultate, sie liegen in `verification.md`.
- Kopien von dauerhaftem Sachwissen oder Handlungsregeln.
- Kopierte Übergabetexte. Ein übergebener Punkt steht knapp unter `## Open`, sein dauerhafter Inhalt geht in das zuständige Dokument.
- Sessionprotokolle, Code-Diffs und vollständige Commit-Messages.
- Phasenübersichten, Architektur- und Datenbeschreibungen, sie liegen in den declarative knowledge documents oder in `INDEX.md`.
- Prüfzahlen, Testläufe und Digests, sie liegen in `verification.md` oder in der Commit-Message.
- Diffinventare und Wortlaut-Historie im Journal selbst. Verdichtete Wortlaute bewahren `journal-archive.md` und Git.
- Maschinenlokale Pfade und Sitzungslogistik.
- Ordinal-Überschriften wie „Nacht IX“ ohne Gegenstand.
- Starre Verdichtungsschwellen nach Zeilen- oder Eintragszahl.

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
  version: 0.7
  url: https://dhcraft.org/Promptotyping/promptotyping-document/journal
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-journal
related: [project, specification]
---

# Journal

## Open

Nothing open.

<!-- Vollständige aktuelle Liste des Offenen, bei jedem Handoff neu geschrieben. Überschrift und „Nothing open.“ sind feste Zeichenketten in jeder Sprache. Ein Punkt je Zeile, konkret genug zum sofortigen Beginnen:

- [Angefangenes, ungeprüftes Ergebnis oder Frage an die Forschenden, mit Ort]
- [Übergabe an Empfänger: Quelle, Stand, Belege]
-->

## Einträge

<!-- Ein Eintrag pro sachlich zusammengehörigem Arbeitsschritt, neueste zuerst. Nur Felder mit Inhalt erscheinen. Englische Journale: ## Entries mit Trigger, Found, Decided, Rejected, Corrected, Changed, Evidence. -->

### YYYY-MM-DD [Gegenstand]

- Anlass: [offener Punkt, Review oder Operatorauftrag]
- Befund: [was sich zeigte, auch gegen eine frühere Aussage]
- Entschieden: [Entscheidung mit Grund; Operator: „wörtliches Urteil“; delegiert mit Herkunftsformel]
- Verworfen: [Alternative, weil …]
- Korrigiert: [frühere Aussage mit Datum oder Eintrag; Ort der gültigen Fassung]
- Geändert: [Zieldokument#Abschnitt in einem Satz]
- Belege: [Commit, Reportpfad, Test]

<!-- Eintrag nach einer Verdichtung:

### YYYY-MM-DD verdichtet [Bereich]

- Ausgangsstand: [Commit vor der Verdichtung]
- Bereich: [verdichtete Einträge oder Zeitraum]
- Geändert: [Zahl der nach journal-archive.md angehängten Einträge, gebildete Meilensteineinträge]
- Belege: [Commit der Verdichtung]
-->
````

## Anwendung als Prompt-Template

Beim Repo-Setup wird der Block als `knowledge/journal.md` angelegt. Beim Sessionstart liest der Agent nach dem Action-Layer und `knowledge/INDEX.md` den Anfang des Journals, also `## Open` und den jüngsten Eintrag. Ältere Einträge und `journal-archive.md` liest er nur, wenn ein Entscheidungsgrund gebraucht wird.

Beim Handoff am Sitzungsende ergänzt der Agent unter `## Open` die Einträge für die Arbeitsschritte der Sitzung, die das Journal noch nicht nachweist, jeweils mit den zutreffenden Feldern und mindestens einem Beleg. Vorher hat er dauerhafte Inhalte in ihre Zieldokumente geschrieben. Danach schreibt er `## Open` als vollständige aktuelle Liste neu und committet. Eine Übergabe an einen benannten Empfänger läuft auf demselben Weg, der Punkt unter `## Open` nennt Empfänger, Quelle, Stand und Belege.

Eine Verdichtung folgt dem Ablauf im Abschnitt Verdichtung und Archiv. Nach der Übernahme prüft der Agent Hashes mit `git cat-file -e`, Links und Anker sowie jede externe Zitierstelle per Suche gegen das neue Journal und das Archiv. Ändert sich eine zitierte Überschrift, wird der zitierende Text mitgezogen.

Der Review prüft, ob `## Open` am Anfang steht und die vollständige aktuelle Liste oder „Nothing open.“ trägt, ob jeder Eintrag einen Arbeitsschritt abbildet und einen Beleg nennt, ob aktueller Status, angenommene Arbeit und Prüfdetails an ihren zuständigen Orten liegen und ob jeder verdichtete Eintrag im Archiv wörtlich steht.

## Beispiel

Ein Handoff hatte die Frage offengelassen, wie Briefe mit nur erschlossenem Jahr im Schema stehen. Nach der Entscheidung wird die Variante in `data-schema.md` integriert. Der Punkt verlässt `## Open`, und das Journal erhält oben einen Eintrag.

```markdown
# Journal

## Open

- Zeitleiste zeigt undatierte Briefe noch am Jahresende an, timeline.js nach der
  Schemaänderung nicht angepasst.

## Einträge

### 2026-10-20 Schemainvariante für undatierte Briefe

- Anlass: offener Punkt aus der Datenprüfung vom 2026-10-18.
- Befund: Ein Teil der Briefe trägt nur ein erschlossenes Jahr, das bisherige Schema verlangte ein Tagesdatum.
- Entschieden: Operator: „Erschlossene Daten bleiben als solche markiert und werden nie zu Tagesdaten aufgefüllt.“
- Verworfen: Auffüllen auf den 1. Januar, weil es eine Genauigkeit vortäuscht.
- Geändert: data-schema.md#Datierung
- Belege: `a1b2c3d`
```

## Begriffe

- Arbeitstagebuch: das Journal als Ganzes, mit dem Offenen am Anfang und den Einträgen darunter.
- Open: der Abschnitt am Anfang des Journals mit der vollständigen aktuellen Liste dessen, was die nächste Sitzung zum Fortsetzen braucht.
- Herkunftsformel: Angabe bei einer delegierten Entscheidung, wer nach welcher Delegation entschieden hat und dass die Entscheidung revidierbar ist.
- Meilensteineintrag: bei der Verdichtung aus zusammengehörigen älteren Einträgen gefalteter Eintrag mit Zeitraum im Kopf.
- Journal-Archiv: `journal-archive.md`, das nur angehängte Dokument mit dem vollständigen Wortlaut verdichteter Einträge.

## Versionshistorie

- 0.7 (2026-11-14): Journal als Arbeitstagebuch mit dem Abschnitt `## Open` am Anfang, der die Process Inbox `handoff.md` ablöst. Feld Verworfen eigenständig. Verdichtung lässt `## Open` und die fünf jüngsten Einträge stehen, hängt ältere Einträge wörtlich an `journal-archive.md` an und faltet sie zu Meilensteineinträgen. Ausschluss von Offenem, Archiv und Eintragsfenster aufgehoben, nach der [Konvention Promptotyping Documents](#konvention-v0.1), Abschnitt Journal, open points and condensing.
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
