---
title: Vorlage Verification
slug: verification
version: "0.1"
status: complete
source: Vorlage Verification
mirrored: 2026-07-19
machine-url: https://dhcraft.org/Promptotyping/_content/promptotyping-document/verification.md
---

# Vorlage Verification

Diese Vorlage strukturiert das Verification-Dokument einer Promptotyping-Wissensbasis. Das resultierende Dokument heißt typischerweise `verification.md` (auch `verifikation.md` oder `conformance-*.md`) und liegt im `knowledge/`-Ordner des Repos. Es trägt die adversariale Prüfung der eigenen empirischen und Neuheits-Claims gegen die Rohdaten: welche Behauptungen das Projekt außenwirksam erhebt, mit welchem Verfahren sie zu widerlegen versucht wurden, welches Verdikt jede Behauptung trägt und was die Prüfung strukturell nicht leisten kann. Der erste Absatz unter der H1 trägt den Zweck in einem Satz. Empirische Basis der Vorlage sind kisug (Anti-Anchoring, Zweitprüfer aus fremder Modellfamilie), FemPrompt (Fünf-Klassen-Befundvokabular mit Migrationskonsequenz) und szd-htr-ocr-pipeline (dreistufiges Review-Modell mit maschinenlesbarem Pendant); Extraktion im Inhaltsaudit vom 2026-07-19.

## Geltungsbereich

Die Vorlage trägt, sobald das Projekt empirische Befunde oder Neuheitsansprüche erhebt, die außenwirksam verwendet werden, in einem Paper, einem Bericht, einer Übergabe an einen Auftraggeber oder einer öffentlichen Site. Triggerkriterium ist der außenwirksame Claim, nicht die bloße Existenz von Daten: ein Projekt, das nur intern exploriert, braucht kein Verification-Dokument.

Lebenszyklus: das Dokument entsteht, bevor der erste außenwirksame Claim das Projekt verlässt, nicht danach; eine nachgereichte Verification prüft eine bereits publizierte Formulierung und kann sie nur noch einschränken. Aktualisiert wird es bei jedem neuen Claim und jedem Prüflauf; am Projektende bleibt es als finaler Prüfstand stehen, weil die Bindungsregel für publizierte Formulierungen fortgilt.

Verification ist von drei Nachbarfunktionen abgegrenzt. Quality Assurance (`testing.md`) prüft Systemverhalten gegen die Spezifikation, ob Code und Pipeline tun, was sie sollen; Verification prüft, ob inhaltliche Behauptungen durch die Rohdaten gedeckt sind. Reporting (`report.md`) berichtet Ergebnisse an einen externen Adressaten; Verification prüft deren Belastbarkeit, bevor sie berichtet werden. Provenance (`journal.md`) hält den chronologischen Entscheidungsverlauf; Verification ist die synchrone, antagonistische Prüfung einer Behauptung gegen ihren Beleg.

## Funktion des Dokuments

Das Dokument beantwortet "was behaupten wir, hält es einer Widerlegung stand, und woran erkennt ein Dritter das". Die Grundhaltung ist adversarial: das Verfahren versucht die eigenen Claims zu widerlegen, nicht zu bestätigen. Adressiert sind der Operator als Critical Expert, der über die Freigabe außenwirksamer Formulierungen entscheidet, ein Coding-Agent, der Prüfergebnisse setzt oder liest, und ein externer Reviewer, der die Belastbarkeit der Ergebnisse beurteilt. Die Bindungsregel aus der FemPrompt-Praxis gilt als Grundprinzip: außenwirksame Claims dürfen nur in der Form verwendet werden, die die Verification lizenziert.

## Strukturprinzipien

Erstens Widerlegung statt Bestätigung. Jede Prüfung ist als Widerlegungsversuch angelegt; ein Claim gilt als gestützt, wenn der Versuch scheitert, nicht wenn eine wohlwollende Lektüre ihn plausibel findet. Agreement mehrerer Prüfer ist ein Signal, keine Wahrheit.

Zweitens kontrolliertes Verdikt-Vokabular. Jedes Prüfergebnis trägt einen Wert aus einem geschlossenen, im Dokument definierten Vokabular, und jeder Wert hat eine definierte Konsequenz für die Weiterverwendung. Prosa-Einschätzungen ohne Verdikt sind keine Prüfergebnisse.

Drittens maschinenlesbare Persistenz. Prüfergebnisse leben nicht nur in Prosa, sondern als strukturierte Felder (Frontmatter-Status, JSON-Blöcke, YAML-Register), damit nachgelagerte Werkzeuge und Agenten auf ihnen aufsetzen können. Alle drei Belegprojekte persistieren so.

## Frontmatter-Schema

Pflichtkern der Konvention (`title`, `project`, `method`, `status`, `created`, `updated`), dazu Verification-spezifisch:

- `template:` als Block mit `name: Vorlage Verification`, `version`, `url`, sobald diese Vorlage angewandt wurde.
- `scope:` was geprüft wird, aus `empirical-claims`, `novelty-claims`, `conformance`, `provenance`, `quality` (mehrere Werte möglich).
- `prüfstand:` Pfad oder Bezeichnung der Referenzquelle, gegen die geprüft wird (Rohdaten-Ordner, Volltexte, Ground Truth).
- `verdict-vocabulary:` Verweis auf die Sektion, die das Vokabular definiert, oder Kurzform (`fünfstufig`, `dreistufig`).
- `related:` typischerweise `data`, `journal`, `report`, `testing`.

## Abschnitte im Detail

### Prüfgegenstand

Funktion: benennen, welche Einheiten der Prüfung unterliegen und welcher Prüfstand als Referenz dient. Inhalt: die Einheit (Aussagen, Evidenz-Einträge, Transkriptionen, Kopfzahlen, Konformanz-Items), die Referenzquelle mit Pfad und die Zuordnungsregel zwischen beiden. Bei FemPrompt sind das Evidenz-Einträge gegen die zeichengenauen Volltexte, bei szd-htr Transkriptionen gegen verifizierte Referenzobjekte, bei kisug Kernaussagen gegen Block-Referenzen der Quelltexte.

### Prüfprobleme

Funktion: die spezifischen Risiken jeder Verdichtungsstufe benennen, gegen die geprüft wird. Inhalt: nach dem kisug-Muster mindestens Treue (gibt die Verdichtung die Quelle wieder), Zusammenführung (beziehen sich zusammengeführte Aussagen wirklich auf dasselbe), Vollständigkeit (fehlt Gegenevidenz) und Relationen; projektspezifische Risiken kommen dazu.

### Verdikt-Vokabular

Funktion: das geschlossene Ergebnis-Vokabular definieren, mit Konsequenz pro Wert. Inhalt: mindestens dreistufig (gestützt, teilweise, Befund), besser fünfstufig nach den Belegmustern (kisug: stützt voll, stützt teilweise, überdehnt, widerspricht, nicht im Text; FemPrompt: OK, Paraphrase, Confabulation, Duplikat, Gegenevidenz). Pro Wert steht die Migrationskonsequenz, also was mit dem geprüften Artefakt geschehen darf (verwenden, nachbessern, sperren). Statuswerte wie `verifiziert` werden ausschließlich nach bestandener Prüfung gesetzt.

### Prüfkette

Funktion: das Stufenmodell der Prüfung von deterministisch nach menschlich dokumentieren. Inhalt: Stufe 1 formale Integrität (Lint, Ankerauflösung, Zitat-Identität, deterministisch per Skript), Stufe 2 adversariale Maschinenprüfung, Stufe 3 bindende menschliche Verifikation durch den Critical Expert. Nur Stufe 3 erzeugt den höchsten Status. Alle drei Belegprojekte führen diese Kette in vergleichbarer Form.

### Anti-Anchoring-Protokoll

Funktion: sicherstellen, dass der Prüfer nicht von der Begründung des Verfassers verankert wird. Inhalt: die Regel, dass der Prüfer nur Quellstelle und Behauptung sieht, nicht die Herleitung; ob ein Zweitprüfer aus einer fremden Modellfamilie läuft (Dekorrelation); wie der Prüfer selbst kalibriert wird (Kontrollfälle mit bekannter Wahrheit). Empirisch belegt in kisug, dort das stärkste Muster des Bestands.

### Neuheits-Claims

Funktion: die eigenen Beitragsbehauptungen explizit auflisten und je gegen den Stand der Forschung prüfen. Inhalt: pro Claim die Behauptung im Wortlaut, die Recherche mit dem Ziel der Widerlegung (nicht der Bestätigung), die gefundene nächstliegende Vorarbeit und das Verdikt. Diese Sektion ist im Bestand nirgends realisiert und der genuin neue Beitrag der Vorlage; das Audit vom 2026-07-19 hat gezeigt, dass keine einzige Wissensbasis ihre Neuheits-Claims systematisch prüft.

### Befundregister

Funktion: festhalten, wo Prüfergebnisse persistiert werden und wer sie ändern darf. Inhalt: die Träger (Frontmatter-Felder der geprüften Dokumente, Waitlist- oder Befund-Datei, JSON/YAML-Pendant), das Format pro Eintrag und das Verantwortungsprotokoll (welche Stufe welchen Status setzen darf).

### Offene Befunde und Eskalation

Funktion: benennen, was die Prüfung nicht abschließend klären konnte. Inhalt: pro offenem Befund die Klasse, der Grund der Nichtentscheidbarkeit und der Eskalationspfad zur menschlichen Prüfung, nach dem Waitlist-Muster aus FemPrompt.

### Grenzen

Funktion: aussprechen, was das Verfahren strukturell nicht leisten kann. Inhalt: die bekannten Deckengrenzen, etwa dass Ground-Truth-freie Verfahren Plausibilität statt Korrektheit messen, dass Agreement mehrerer Modelle keine Wahrheit garantiert, dass Halluzinationen unterhalb der Erkennungsschwelle durchrutschen können. Diese Sektion ist konstitutiv, eine Verification ohne benannte Grenzen ist selbst ein ungedeckter Claim.

## Was nicht reingehört

- Systemtests. Ob Code und Pipeline funktionieren, gehört in `testing.md`; hier geht es um inhaltliche Behauptungen.
- Berichtsprosa. Die außenwirksame Darstellung der Ergebnisse gehört in `report.md`; Verification lizenziert sie nur.
- Chronologie. Wann welche Prüfung lief und was dabei entschieden wurde, gehört in `journal.md`; hier steht der aktuelle Prüfstand pro Claim.
- Rohdaten-Beschreibung. Was die Daten sind, gehört in `data.md`; hier steht nur der Prüfstand-Verweis.

## Vorlage zum Befüllen

````markdown
---
title: Verification
project:
  name: [Projektname]
  repository: [Repository-URL]
method:
  name: Promptotyping
  url: https://lisa.gerda-henkel-stiftung.de/digitale_geschichte_pollin
template:
  name: Vorlage Verification
  version: 0.1
  url: https://dhcraft.org/Promptotyping/promptotyping-document/verification
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-verification
status: draft
language: [de | en]
version: [Repo-Schema-Version]
created: [YYYY-MM-DD]
updated: [YYYY-MM-DD]
scope: [empirical-claims | novelty-claims | conformance]
prüfstand: [Pfad oder Bezeichnung der Referenzquelle]
verdict-vocabulary: [fünfstufig | dreistufig | Verweis auf Sektion]
related: [data, journal, report, testing]
---

# Verification

<!-- Erster Absatz = Zweck in einem Satz. Was wird geprüft, gegen welchen Prüfstand, mit welcher Grundhaltung (Widerlegung). -->

[Lead-Absatz]

## Prüfgegenstand

<!-- Einheit der Prüfung, Referenzquelle mit Pfad, Zuordnungsregel. -->

[...]

## Prüfprobleme

<!-- Mindestens Treue, Zusammenführung, Vollständigkeit, Relationen; plus projektspezifische Risiken. -->

[...]

## Verdikt-Vokabular

<!-- Geschlossenes Vokabular, pro Wert die Migrationskonsequenz. -->

| Verdikt | Bedeutung | Konsequenz |
|---|---|---|
| [Wert] | [Definition] | [verwenden / nachbessern / sperren] |

## Prüfkette

<!-- Stufe 1 deterministisch, Stufe 2 adversarial maschinell, Stufe 3 menschlich bindend. Nur Stufe 3 erzeugt den höchsten Status. -->

[...]

## Anti-Anchoring-Protokoll

<!-- Prüfer sieht nur Quellstelle und Behauptung. Zweitprüfer fremder Modellfamilie ja/nein. Kalibrierung über Kontrollfälle. -->

[...]

## Neuheits-Claims

<!-- Pro Claim: Wortlaut, Widerlegungsrecherche, nächstliegende Vorarbeit, Verdikt. -->

| Claim | Nächstliegende Vorarbeit | Verdikt |
|---|---|---|
| [Behauptung] | [Quelle] | [hält / einschränken / fallen lassen] |

## Befundregister

<!-- Wo Ergebnisse persistiert werden (Frontmatter, Befund-Datei, JSON/YAML), Format, wer welchen Status setzen darf. -->

[...]

## Offene Befunde und Eskalation

<!-- Pro offenem Befund: Klasse, Grund der Nichtentscheidbarkeit, Eskalationspfad. -->

[...]

## Grenzen

<!-- Was das Verfahren strukturell nicht leisten kann. Konstitutiv. -->

[...]
````

## Anwendung als Prompt-Template

Strukturanker beim Aufsetzen der Verification. Der Agent erhält den Template-Block, die Liste der außenwirksamen Claims (aus `report.md`, Paper-Entwurf oder `project.md`) und den Prüfstand-Pfad; er befüllt Prüfgegenstand, Vokabular und Prüfkette, führt die Stufen 1 und 2 aus und übergibt die Stufe-3-Entscheidungen als offene Befunde an den Operator. Die Neuheits-Claims-Sektion verlangt eine Webrecherche mit Widerlegungsziel.

Review-Folie für eine bestehende Verification. Ein vorhandenes Dokument wird gegen die Vorlage gehalten, um zu prüfen, ob die Grundhaltung adversarial ist (Widerlegung als Ziel formuliert), ob das Verdikt-Vokabular geschlossen ist und Konsequenzen trägt, ob die menschliche Stufe als einzige statuserzeugende Instanz ausgewiesen ist, ob die Neuheits-Claims überhaupt geprüft werden und ob die Grenzen-Sektion existiert.

## Beispiel

kisug führt den strengsten Mechanismus des Bestands: adversariale Verifikation mit Anti-Anchoring (der Prüfer sieht nur Quellstelle und Behauptung), einem Zweitprüfer aus fremder Modellfamilie als Dekorrelation, Kalibrierung des Prüfers an Kontrollfällen mit bekannter Wahrheit und einem fünfstufigen Verdikt-Vokabular, in dem nur `stützt voll` den Status `verifiziert` erlaubt. FemPrompt führt das Fünf-Klassen-Befundvokabular mit direkter Migrationskonsequenz pro Klasse und eine persistierte Waitlist für offene Fälle; die Prüfkette läuft vom deterministischen Skript über die adversariale Maschinenprüfung zur bindenden menschlichen Stufe. szd-htr-ocr-pipeline führt das dreistufige Review-Modell als maschinenlesbaren JSON-Block im Pipeline-Output und benennt die Grenzen explizit (Agreement ist nicht Wahrheit, Ground-Truth-freie Verfahren messen Plausibilität). Alle drei teilen die Grundfigur: kontrolliertes Verdikt, Stufenkette mit menschlichem Abschluss, maschinenlesbare Persistenz.

## Begriffe

- Claim: eine außenwirksam verwendete empirische oder Neuheits-Behauptung des Projekts, die Einheit der Prüfung.
- Prüfstand: die Referenzquelle, gegen die geprüft wird (Rohdaten, Volltexte, Ground Truth), im Frontmatter benannt.
- Verdikt: ein Wert aus dem geschlossenen Ergebnis-Vokabular mit definierter Konsequenz für die Weiterverwendung.
- Anti-Anchoring: Prüfanordnung, in der der Prüfer nur Quellstelle und Behauptung sieht, nicht die Begründung des Verfassers.
- Migrationskonsequenz: die pro Verdikt festgelegte Folge für das geprüfte Artefakt (verwenden, nachbessern, sperren).
- Bindungsregel: außenwirksame Claims dürfen nur in der Form verwendet werden, die die Verification lizenziert.

## Versionshistorie

- 0.1 (2026-07-19): Erstfassung, empirisch extrahiert aus kisug, FemPrompt und szd-htr-ocr-pipeline; Neuheits-Claims-Sektion als nicht empirisch belegter Eigenbeitrag. Freigegeben am 2026-07-19.

## Related

- [Konvention Promptotyping Documents](#konvention-v0.1)
- [Vorlage Testing](#promptotyping-document-testing)
- [Vorlage Report](#promptotyping-document-report)
- [Vorlage Journal](#promptotyping-document-journal)
