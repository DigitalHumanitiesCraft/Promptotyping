---
title: Vorlage Domänenwissen
slug: domain-knowledge
version: "0.2"
status: complete
source: Vorlage Domänenwissen
mirrored: 2026-07-19
machine-url: https://dhcraft.org/Promptotyping/_content/promptotyping-document/domain-knowledge.md
---

# Vorlage Domänenwissen

Diese Vorlage strukturiert das Domänen- und Methodenwissen-Dokument einer Promptotyping-Wissensbasis. Das resultierende Dokument heißt je nach Untertyp typischerweise `editorial-guidelines.md`, `tei-mapping.md`, `ontology.md` oder `kodiermanual.md` (domänenspezifisches Regelwerk) beziehungsweise `forschungsrahmen.md`, `methodik.md`, `research.md` oder `theory.md` (Methoden- und Begründungsschicht). Es liegt im `knowledge/`-Ordner des Repos und trägt die fachmethodische Vorgabe- und Theorieschicht: die Regeln, nach denen das Material ausgezeichnet oder berechnet wird, und die Begründung, warum diese Regeln so und nicht anders lauten. Diese Schicht ist in vielen DH-, Editions- und Forschungsprojekten der eigentliche wissenschaftliche Wert, den der ansonsten software-zentrierte Katalog ([Vorlage Specification](#promptotyping-document-specification), [Vorlage Architecture](#promptotyping-document-architecture), [Vorlage Datengrundlage](#promptotyping-document-data)) nicht abbildet. Der erste Absatz des resultierenden Dokuments trägt den Zweck in einem Satz; ein eigenes `zweck:`-Feld im Frontmatter entfällt.

## Geltungsbereich

Die Funktion trägt, sobald ein Projekt eine fachmethodische Vorgabe macht, die nicht aus dem Material und nicht aus der Softwareanforderung ableitbar ist, sondern eine eigene wissenschaftliche Setzung darstellt. Triggerkriterium: Es existiert eine Regel, ein Mapping, eine Berechnungslogik, ein Vokabular oder eine theoretische Rahmung, die ein Fachexperte verantwortet und die man kennen muss, um das Output korrekt zu interpretieren oder zu erweitern. Das ist der Fall bei Editionsrichtlinien, TEI-Mappings, Kodiermanualen, Ontologie-Definitionen, Berechnungslogiken (etwa CER-Methodik, Score-Formeln, Klassifikationsregeln) und bei expliziten Forschungsrahmen, Methodik-Kapiteln oder forschungsgestützten Designbegründungen.

Die Funktion trägt nicht für triviale Tool- oder Bibliotheks-Repos ohne eigene fachmethodische Setzung; dort genügt eine kurze Methodensektion im Charter-Dokument. Sie trägt nicht für reine Anleitung an den Agenten (das ist Action-Layer, `CLAUDE.md`) und nicht für Forschungsergebnisse als Aussagen über den Gegenstand (die gehören in Veröffentlichungen, nicht in die Wissensbasis). Zwei Untertypen werden unterschieden, weil sie unterschiedliche Lesergruppen und Strukturen tragen, im selben Repo aber nebeneinander vorkommen:

- (a) Methoden- und Begründungsschicht: das Warum. Theoretischer Rahmen, Forschungsfragen, methodische Entscheidungen mit akademischen Quellen. Typische Träger `forschungsrahmen.md`, `methodik.md`, `research.md`.
- (b) Domänenspezifisches Regelwerk: das Wie der Auszeichnung. Editionsrichtlinien, TEI-Mapping, Kodiermanual, Ontologie, Berechnungslogik, normativ und auszeichnungsnah. Typische Träger `editorial-guidelines.md`, `tei-mapping.md`, `ontology.md`.

Ein Projekt kann beide Untertypen in getrennten Dateien führen (notker-edition trennt die Theorie nicht aus, agentic-edition-pipeline führt Regelwerk in `03_CONTEXT.md` und `04_TEI_MAPPING.md`), oder das Regelwerk trägt eine knappe Begründungssektion am Kopf und bleibt eine Datei. Die Spaltung folgt derselben Rhythmus-Logik wie in [Vorlage Architecture](#promptotyping-document-architecture): getrennt, sobald Begründung und Regelwerk eigene Aktualisierungsrhythmen und Lesergruppen entwickeln. Diese Spaltung ist zugleich die Destillat-Grenze der Funktion; wächst ein Regelwerk über die Lesbarkeit, wird nach Phänomengruppen oder Untertypen in Themendateien geteilt, nie in ein Sammelsurium verlängert.

Lebenszyklus: das Regelwerk (b) entsteht mit der ersten Probeauszeichnung und wird bei jeder neuen Regel und jedem geklärten Phänomen nachgezogen; geklärte Punkte wandern aus der Sektion Ungeklärte Phänomene in die Phänomen-Regeln. Die Begründungsschicht (a) entsteht früh und ändert sich danach selten. Das teuerste Verfallsmuster der Funktion ist das schematisch veraltete Regelwerk, das ein abgelöstes Schema weiter als geltend beschreibt, während das operative Team damit arbeitet; eine Schemaänderung zieht das Regelwerk im selben Arbeitsgang nach.

## Funktion des Dokuments

Das Dokument beantwortet, je nach Untertyp, zwei verschränkte Fragen. Untertyp (a): nach welchem theoretischen und methodischen Rahmen arbeitet das Projekt, welche Forschungsfragen leitet es, welche Literatur und welche disziplinären Standards begründen die Entscheidungen. Untertyp (b): nach welchen Regeln wird das Material ausgezeichnet, gemappt oder berechnet, wie wird jedes relevante Phänomen behandelt, und welche Phänomene sind noch ungeklärt.

Adressiert sind drei Lesergruppen. Ein Fachexperte (Editor, Domänenwissenschaftler, Förderreferent) prüft die methodische Tragfähigkeit und nutzt das Regelwerk als Referenz für die manuelle Nachbearbeitung und für die Kommunikation mit dem Auftraggeber. Ein Reviewer beurteilt, ob die Entscheidungen begründet und konsistent sind. Ein Coding-Agent liest das Dokument, bevor er Auszeichnungs- oder Berechnungscode generiert; bei Untertyp (b) sind die Mapping-Regeln die direkte Vorgabe für den Annotations- oder Transformationsschritt, bei Untertyp (a) verorten Theorie und Quellen den Agenten im richtigen Wissensfeld. Eine vage Regelschicht führt zu Auszeichnungen, die die intendierte Semantik verfehlen.

## Strukturprinzipien

Drei Prinzipien tragen das Dokument.

Erstens trennt es Vorgabe von Material und Specification. Was die Daten sind und woher sie kommen, gehört in `data.md` ([Vorlage Datengrundlage](#promptotyping-document-data)); das Material ist der Gegenstand. Was das System tun soll, gehört in `specification.md` ([Vorlage Specification](#promptotyping-document-specification)); die Spezifikation ist die Substanz. Nach welcher fachlichen Regel das Material ausgezeichnet oder das Ergebnis begründet wird, gehört hier hin. Diese Trennung ist die Existenzberechtigung der Funktion: das Regelwerk ist weder Gegenstand noch Funktionsumfang, sondern die wissenschaftliche Setzung dazwischen.

Zweitens macht es jede Setzung begründet und jede Lücke explizit. Bei Untertyp (a) trägt jede methodische Entscheidung ihre Quelle und ihre Auswirkung; eine Forschungsentscheidung ohne Begründung ist eine Behauptung. Bei Untertyp (b) trägt jede Kodierungsregel ihre Begründung (warum dieses Element, nicht jenes) und ihre Abgrenzung (welche Grenzfälle wie behandelt werden); ungeklärte Phänomene werden in einer eigenen offenen Sektion benannt, nicht stillschweigend übergangen. Was noch mit dem Auftraggeber zu klären ist, steht als offene Frage im Dokument.

Drittens verweist es auf die maschinenlesbare Quelle statt sie zu duplizieren. Wo ein Schema die formale Wahrheit trägt (RelaxNG-Schema, ODD, JSON-Schema, OWL-Ontologie, Vokabulardatei), paraphrasiert das Dokument das Schema und verlinkt die Schema-Datei im Repo als Source of Truth. Die Regelbeschreibung ist die lesbare Schicht, das Schema die prüfbare; sie laufen nicht auseinander, weil das Dokument das Schema nicht nacherzählt, sondern interpretiert.

## Frontmatter-Schema

Das Dokument folgt dem reduzierten Frontmatter-Pflichtkern aus der [Konvention Promptotyping Documents](#konvention-v0.1) (Stand 2026-06-13): `title`, `project` (Objekt mit `name` und `repository`), `method` (Objekt mit `name` und `url`), `status`, `created`, `updated`. Kein `zweck:`-Feld; der Zweck lebt als erster Absatz unter der H1. `status` meint die Dokument-Maturity (`idea`, `draft`, `stub`, `complete`, `reviewed`, `archived`; seit 2026-07-19 auch `active` für fortlaufende Prozessdokumente und `snapshot` für Stichtagsdokumente), nicht den operativen Projektstatus. Empfohlen sind `template` (als Block mit `name`, `version`, `url`, `alias`, wo diese Vorlage angewandt wurde), `language`, `version` (repoweit konsistent), `authors` beziehungsweise `generated-with`, `topics` und `related`. Spezifisch für Domänenwissen:

- `topics:` verortet den Agenten im fachlichen Wissensfeld und ist hier besonders tragend. Bei Untertyp (b) typisch `[[TEI]]`, `[[Editorial Guidelines]]`, `[[Critical Apparatus]]`, je nach Sprache und Korpus zusätzlich Sprach- oder Periodenkonzepte (`[[Old High German]]`). Bei Ontologie-Projekten `[[RDF]]`, `[[OWL]]`, das eingesetzte Vokabular (`[[RiC-O]]`, `[[CIDOC CRM]]`). Bei Untertyp (a) die Theoriefelder (`[[Mobility Studies]]`, `[[Explainable AI]]`, `[[Historical Information]]`).
- `knowledge-sources:` ist hier zentral und sollte gepflegt sein. Mindestens `standards:` (eingesetzte Standards, Schemata, Guidelines mit URI: TEI P5, ISO-Codes, WCAG, fachliche Editionsrichtlinien) und, wo zutreffend, `vocabularies:` (kontrollierte Vokabulare, Normdaten-Autoritäten) sowie `datasets:` oder `institutions:` für referenzierte Referenzprojekte. Bei Untertyp (a) tragen die akademischen Primärquellen entweder hier als `standards:`-Anschlüsse oder, sprechender, in der Dokumentsektion `Quellen`.
- `related:` typischerweise `data`, `specification`, `design`; die Dokumente, die auf dem Regelwerk aufsetzen oder es verwenden.

Sonderfall Vault-Atom-Struktur. Methoden- und Theoriedokumente vom Untertyp (a), die als atomare Wissenseinheit lesbar bleiben sollen, folgen oft nicht dem Promptotyping-Frontmatter, sondern der Vault-Atom-Struktur aus CLAUDE §3 und §4: `type: knowledge`, `created`, `tags`, `status`, und im Korpus `## Summary`, `## Sources`, `## Related` statt `knowledge-sources:` im Frontmatter. Das ist kein Fehler, sondern die angemessene Form, wenn das Dokument primär als Wissensatom und weniger als Agenten-Kontext im Repo gelesen wird (hist-info-model führt seine Theorie-Dokumente so). Welche der beiden Frontmatter-Formen trägt, entscheidet die primäre Lesergruppe: Agent-zentrierter Repo-Kontext nimmt das Promptotyping-Frontmatter, atomares Wissensdokument nimmt die Vault-Atom-Struktur.

## Abschnitte im Detail

Die Sektionsstruktur unterscheidet sich nach Untertyp. Gemeinsam ist der Lead-Absatz (der Zweck-Satz). Optionale Sektionen, die nicht zutreffen, werden weggelassen, nicht leer geführt.

### Lead (beide Untertypen, Pflicht)

Funktion: in einem Satz den Zweck des Dokuments tragen, dann in einem bis drei Sätzen den Geltungsbereich der Regeln beziehungsweise des Rahmens. Inhalt: was das Dokument festlegt oder begründet, für welches Korpus oder welche Pipeline-Stufe es gilt, wozu es als Referenz dient (manuelle Nachbearbeitung, Skalierung auf den Gesamtbestand, Kommunikation mit dem Auftraggeber). Dieser Absatz ersetzt das frühere `zweck:`-Frontmatter-Feld.

### Untertyp (a): Methoden- und Begründungsschicht

`## Theoretischer Rahmen`. Funktion: das Projekt im disziplinären Feld verorten. Inhalt: die tragenden Theorien und ihre Vertreter mit Kurzbeleg, der Forschungsstand (verwandte Projekte, Vorläufer), die Lücke, die das Projekt schließt. Eine bis fünf benannte Bezüge, jeder mit einem Satz, warum er trägt.

`## Forschungsfragen`. Funktion: die leitenden Fragen explizit machen. Inhalt: nummerierte Forschungsfragen, gegebenenfalls eine Hypothese und ein Machbarkeitsziel. Trägt nur, wo das Projekt eine Forschungsstudie ist; reine Methodik-Dokumente ohne eigene Fragestellung lassen die Sektion weg.

`## Forschungsgestützte Entscheidungen`. Funktion: jede methodische oder Design-Entscheidung an ihre Quelle und Auswirkung binden. Inhalt: pro Erkenntnis ein Dreischritt aus Erkenntnis (was die Literatur zeigt), Quelle (Primärbeleg mit DOI oder URL) und Auswirkung (was im Projekt deshalb konkret so gebaut wird). Eine abschließende Übersichtstabelle Entscheidung gegen Forschungsgrundlage verdichtet die Sektion. Das ist die tragende Struktur des Untertyps (a): sie verbindet Theorie nachprüfbar mit Praxis.

`## Forschungskontext`. Funktion: den konkreten Gegenstandsraum benennen, in dem die Methodik operiert. Inhalt: Fallbeispiel, institutioneller oder historischer Rahmen, einschlägige Literatur, benannte Forschungslücken. Optional; trägt, wo der Kontext nicht schon im Charter-Dokument steht.

`## Quellen` beziehungsweise `## Sources`. Funktion: die zitierte Literatur vollständig nachweisen. Inhalt: akademische Referenzen mit Autor, Jahr, Titel, DOI oder URL. Bei Vault-Atom-Struktur ist diese Sektion Pflicht und ersetzt `knowledge-sources:` im Frontmatter.

### Untertyp (b): Domänenspezifisches Regelwerk

`## Begründung` (optional). Funktion: die fachliche Grundentscheidung tragen, falls der Untertyp (a) nicht als eigene Datei existiert. Inhalt: zwei bis fünf Sätze, warum diese Auszeichnungs- oder Berechnungslogik gewählt wurde, mit Verweis auf das einschlägige Vorbild oder die Referenzedition. Entfällt, wenn ein eigenes `forschungsrahmen.md` oder `methodik.md` die Begründung trägt.

`## Phänomene und ihre Behandlung` (Kern). Funktion: für jedes relevante Phänomen die Regel festlegen. Inhalt: pro Phänomen eine Beschreibung, die normative Kodierung oder Berechnung (Codeblock mit dem konkreten Element, Attribut oder der Formel), die Begründung der Wahl und die Abgrenzung der Grenzfälle. Bei Editionsprojekten ist das die Auszeichnung der Textschichten, Sprachwechsel, Glossen, Apparate, Fußnoten; bei Berechnungslogiken die Formel pro Metrik mit Bedingungen. Das ist der voluminöseste Teil und wird nach Phänomengruppen gegliedert.

`## Mapping-Tabellen`. Funktion: die Zuordnung von Quellstruktur zu Zielstruktur kompakt führen. Inhalt: Tabellen Quellelement gegen Zielelement gegen Regel (etwa Absatz gegen `<p>` gegen Trennregel; Metadatenfeld gegen TEI-Header-Element gegen Quelle). Bei TEI-Projekten Header-Mapping und Body-Mapping getrennt. Trägt überall, wo eine systematische Eins-zu-eins- oder Eins-zu-viele-Zuordnung besteht.

`## Header- und Schema-Deklarationen`. Funktion: die formalen Setzungen im Schema benennen, die das Regelwerk voraussetzt. Inhalt: Taxonomien, Klassendeklarationen, kontrollierte ID-Listen (Textzeugen, Quellen, Vokabular-IDs), Schemaprofil und Variantenkodierung. Verweis auf die Schema-Datei im Repo als Source of Truth; das Dokument paraphrasiert, ersetzt sie nicht.

`## Ungeklärte Phänomene` (Pflicht, wenn welche bestehen). Funktion: offene Punkte explizit machen, die das Regelwerk noch nicht entscheidet. Inhalt: Tabelle Phänomen gegen Status gegen Auswirkung auf die Kodierung, jeweils mit der zu klärenden Instanz (typischerweise dem Auftraggeber). Eine bewusst nicht entschiedene Frage steht hier, nicht in einer Fußnote.

`## Konventionen für das Gesamtprojekt` (optional). Funktion: die Skalierung der für ein Pilot- oder Probesegment entwickelten Regeln auf den Gesamtbestand vorbereiten. Inhalt: wie die Kodierung auf weitere Einheiten erweitert wird, Referenzprojekte, Code-Tabellen (Sprach-Codes, Sigel-Systeme). Trägt, wo ein Prototyp auf einen größeren Bestand skaliert.

## Was nicht reingehört

- Material und Datenherkunft. Was die Daten sind, woher sie kommen, wie groß der Bestand ist, gehört in `data.md` ([Vorlage Datengrundlage](#promptotyping-document-data)). Das Domänenwissen verlinkt die Datengrundlage für die empirische Basis (etwa die konkreten Sigel-Bedeutungen), führt sie aber nicht selbst.
- Funktionsumfang und Akzeptanzkriterien. Was das System leisten soll, gehört in `specification.md` ([Vorlage Specification](#promptotyping-document-specification)). Das Regelwerk sagt, nach welcher fachlichen Logik ausgezeichnet wird, nicht welche Features das Frontend hat.
- Technische Realisierung. Mit welchem Skript das Mapping ausgeführt wird, welcher Stack die Pipeline trägt, gehört in `architecture.md` ([Vorlage Architecture](#promptotyping-document-architecture)). Das Regelwerk nennt die Funktion (`chain_cross_verse_hyphens()` setzt die Cross-Verse-Verkettung um), nicht ihre Implementation.
- Imperative Agenten-Anweisung. Wie der Agent sich verhalten soll, gehört in den Action-Layer (`CLAUDE.md`, [Vorlage Action-Layer](#promptotyping-document-action-layer)). Das Regelwerk ist deklaratives Knowledge; der Action-Layer verweist darauf.
- Forschungsergebnisse als Aussagen über den Gegenstand. Was die Edition oder die Auswertung inhaltlich zeigt, ist Sache der Veröffentlichungen, nicht des Domänenwissens. Das Dokument trägt die Regel und ihre Begründung, nicht das Resultat ihrer Anwendung. Werden aus der Anwendung der Regeln empirische Befunde oder Neuheitsansprüche außenwirksam erhoben, prüft sie das `verification.md` des Projekts ([Vorlage Verification](#promptotyping-document-verification)).

## Vorlage zum Befüllen

Zwei Blöcke, einer pro Untertyp. Der erste deckt das domänenspezifische Regelwerk (b) ab, der zweite die Methoden- und Begründungsschicht (a) im Promptotyping-Frontmatter; eine Variante des zweiten Blocks zeigt die Vault-Atom-Struktur für den Fall, dass das Dokument primär als Wissensatom gelesen wird. Optionale Sektionen, die nicht zutreffen, werden vor dem Commit gelöscht, nicht leer gelassen. Kein `zweck:`-Feld: der erste Absatz trägt den Zweck.

### Untertyp (b): Regelwerk

````markdown
---
title: [Editionsrichtlinien | TEI-Mapping | Ontologie | Kodiermanual]
project:
  name: [Projektname]
  repository: [Repository-URL]
method:
  name: Promptotyping
  url: https://lisa.gerda-henkel-stiftung.de/digitale_geschichte_pollin
status: draft
created: [YYYY-MM-DD]
updated: [YYYY-MM-DD]
template:
  name: Vorlage Domänenwissen
  version: 0.2
  url: https://dhcraft.org/Promptotyping/promptotyping-document/domain-knowledge
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-domain-knowledge
language: [de | en]
version: [Repo-Schema-Version]
authors: [Autor 1, Autor 2]
generated-with: [Werkzeug, falls relevant]
topics: ["[[TEI]]", "[[Editorial Guidelines]]"]
knowledge-sources:
  standards:
    [Standard, etwa TEI P5 Guidelines]: [URI]
  vocabularies:
    [Vokabular oder Normdaten-Autorität]: [URI]
related: [data, specification, design]
---

# [Titel]

<!-- Lead: erster Satz trägt den Zweck. Dann ein bis drei Sätze Geltungsbereich: welches Korpus, welche Pipeline-Stufe, wozu Referenz. -->

[Zweck-Satz und Geltungsbereich]

## Begründung

<!-- Optional. Entfällt, wenn ein eigenes forschungsrahmen.md die Begründung trägt. Warum diese Auszeichnungs- oder Berechnungslogik, mit Vorbild oder Referenzedition. -->

[...]

## Phänomene und ihre Behandlung

<!-- Kern. Pro Phänomen: Beschreibung, normative Kodierung im Codeblock, Begründung, Abgrenzung der Grenzfälle. Nach Phänomengruppen gliedern. -->

### [Phänomengruppe]

[Beschreibung]

```xml
[konkretes Element/Attribut]
```

- [Attribut/Regel]: [Bedeutung]

**Abgrenzung:** [Grenzfälle und ihre Behandlung]

## Mapping-Tabellen

<!-- Zuordnung Quellstruktur zu Zielstruktur. Bei TEI Header- und Body-Mapping getrennt. -->

| Quellelement | Zielelement | Regel |
|---|---|---|
| [Quellelement] | [Zielelement] | [Regel] |

## Header- und Schema-Deklarationen

<!-- Taxonomien, kontrollierte ID-Listen, Schemaprofil. Verweis auf die Schema-Datei als Source of Truth. -->

[...]

## Ungeklärte Phänomene

<!-- Pflicht, wenn welche bestehen. Phänomen, Status, Auswirkung auf die Kodierung, zu klärende Instanz. -->

| Phänomen | Status | Auswirkung auf Kodierung |
|---|---|---|
| [Phänomen] | [zu klären mit ...] | [Auswirkung] |

## Konventionen für das Gesamtprojekt

<!-- Optional. Skalierung des Prototyp-Regelwerks auf den Gesamtbestand, Referenzprojekte, Code-Tabellen. -->

[...]
````

### Untertyp (a): Methoden- und Begründungsschicht

````markdown
---
title: [Forschungsrahmen | Methodik | Forschungsgrundlagen]
project:
  name: [Projektname]
  repository: [Repository-URL]
method:
  name: Promptotyping
  url: https://lisa.gerda-henkel-stiftung.de/digitale_geschichte_pollin
status: draft
created: [YYYY-MM-DD]
updated: [YYYY-MM-DD]
template:
  name: Vorlage Domänenwissen
  version: 0.2
  url: https://dhcraft.org/Promptotyping/promptotyping-document/domain-knowledge
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-domain-knowledge
language: [de | en]
version: [Repo-Schema-Version]
authors: [Autor 1, Autor 2]
generated-with: [Werkzeug, falls relevant]
topics: ["[[Mobility Studies]]", "[[Explainable AI]]"]
related: [project, data, specification]
---

# [Titel]

<!-- Lead: erster Satz trägt den Zweck. Dann ein bis drei Sätze: welcher Rahmen, wofür er trägt. -->

[Zweck-Satz und Rahmung]

## Theoretischer Rahmen

<!-- Tragende Theorien mit Vertreter und Kurzbeleg, Forschungsstand, Lücke. Pro Bezug ein Satz, warum er trägt. -->

[...]

## Forschungsfragen

<!-- Optional. Nummerierte Fragen, ggf. Hypothese und Machbarkeitsziel. Entfällt bei reinen Methodik-Dokumenten ohne eigene Fragestellung. -->

**FF1.** [...]

**Hypothese.** [...]

## Forschungsgestützte Entscheidungen

<!-- Kern. Pro Erkenntnis: Erkenntnis, Quelle (DOI/URL), Auwirkung (was deshalb konkret so gebaut wird). Abschluss: Übersichtstabelle. -->

### [Nr.] [Erkenntnis in einem Titel]

**Erkenntnis:** [...]

**Quelle:** [Autor, Jahr, Titel, DOI/URL]

**Auswirkung:** [Was im Projekt deshalb konkret so gebaut wird]

---

| Design-Entscheidung | Forschungsgrundlage |
|---|---|
| [Entscheidung] | [Quelle] |

## Forschungskontext

<!-- Optional. Fallbeispiel, institutioneller/historischer Rahmen, einschlägige Literatur, benannte Forschungslücken. -->

[...]

## Quellen

<!-- Akademische Referenzen mit Autor, Jahr, Titel, DOI/URL. -->

[...]
````

### Variante: Vault-Atom-Struktur (für Untertyp a, wenn primär Wissensatom)

````markdown
---
type: knowledge
created: [YYYY-MM-DD]
tags: [2 bis 4 tags, lowercase-hyphenated]
status: draft
---

# [Titel]

## Summary

<!-- Zwei bis drei Absätze. Erster Satz trägt den Zweck. -->

[...]

## [Theoretischer Rahmen | Kernbegriffe | Methodische Setzung]

[...]

## Sources

[Autor, Jahr, Titel. DOI/URL.]

## Related

- [[Verwandtes Atom]] — [Beziehung in einem Halbsatz]
````

## Anwendung als Prompt-Template

Strukturanker beim Aufsetzen des Domänenwissens. Zuerst entscheidet der Agent (oder der Fachexperte), welcher Untertyp trägt und ob beide getrennt geführt werden. Den passenden Template-Block in eine neue Datei im `knowledge/`-Ordner kopieren und iterativ befüllen. Untertyp (b) wird aus dem real existierenden Quellmaterial befüllt (Probeseite, DOCX, Schema-Datei, bestehende Referenzedition): pro Phänomen wird die Regel aus einem realen Beleg abgeleitet, nicht erfunden. Untertyp (a) wird aus der Literatur befüllt; jede Erkenntnis braucht eine prüfbare Primärquelle mit DOI oder URL. Da diese Schicht fachwissenschaftliche Setzung trägt, ist sie der Teil der Wissensbasis, der am dringendsten vom Critical Expert verifiziert werden muss (Critical Expert in the Loop); Grenzfälle und ungeklärte Phänomene werden nicht weggeglättet, sondern als offene Frage an den Auftraggeber stehen gelassen. Recherchequellen werden gegen das Verbot von Grokipedia geprüft.

Review-Folie für ein bestehendes Domänenwissen-Dokument. Ein vorhandenes `editorial-guidelines.md`, `tei-mapping.md`, `forschungsrahmen.md` oder `research.md` wird gegen die Vorlage gehalten: Trägt der erste Absatz den Zweck in einem Satz? Trägt jede Regel ihre Begründung und Abgrenzung, jede Erkenntnis ihre Quelle und Auswirkung? Sind ungeklärte Phänomene explizit benannt statt übergangen? Verweist das Dokument auf die Schema-Datei als Source of Truth statt sie zu duplizieren? Ist es sauber von `data.md` (Material) und `specification.md` (Specification) abgegrenzt, oder ist Datenherkunft oder Funktionsumfang hineingewachsen?

## Beispiel

Domänenspezifisches Regelwerk, voll ausgereizt (Untertyp b): notker-edition führt `editorial-guidelines.md` als TEI-Kodierungsrichtlinien für Notkers Psalmenkommentar. Der Lead trägt den Zweck in einem Satz und nennt die drei Verwendungen (manuelle Nachbearbeitung, Erweiterung auf alle 150 Psalmen, Kommunikation mit dem Auftraggeber). Der Kern gliedert die Textphänomene: Notkers drei funktionale Textschichten (Psalmzitation, Übersetzung, Kommentar) werden je als `<seg type="..." ana="...">` mit konkretem Codeblock kodiert, der Sprachwechsel als `<foreign xml:lang="...">`, Interlinearglossen als `<ab>` mit `<gloss>`. Jede Regel trägt ihre Begründung (etwa "`<seg>` statt `<quote>`, weil Notker paraphrasiert") und ihre Abgrenzung (Lehnwörter werden getaggt, Eigennamen nicht). Die Sektion Header-Deklarationen führt die Textfunktions-Taxonomie und die kontrollierten ID-Listen für Textzeugen (`wit-G`, `wit-R`, `wit-H`) und Kommentarquellen (`src-A`, `src-C`), mit Verweis auf das RelaxNG-Schema (`data/schema/tei_all.rng`) als formale Source of Truth. Eine eigene Sektion Ungeklärte Phänomene führt die offenen Punkte (Semantik der Siglen G und R in der Haupttext-Spalte, Versgrenze 12/13) als Tabelle mit der Auflösung "mit Auftraggeber klären". Eine Theorie- oder Begründungssektion vom Untertyp (a) ist hier nicht separat ausgelagert; die Begründungen sitzen jeweils an der einzelnen Regel.

Regelwerk in Skelettform (Untertyp b, frühe Phase): agentic-edition-pipeline spaltet das Regelwerk in `03_CONTEXT.md` (Editionsrichtlinien: Transkriptionskonventionen, Normalisierungen, Annotationstypen, Normdaten) und `04_TEI_MAPPING.md` (TEI-Profil DTABf mit Verweis auf `schemas/dtabf.json`, Header-Mapping- und Body-Mapping-Tabelle Quellelement gegen TEI-Element gegen Regel, Annotationsregeln, Register). Beide Dokumente sind als ausfüllbares Skelett mit `[TODO]`-Markern angelegt und zeigen die Mapping-Tabellen-Struktur in Reinform; sie belegen, dass die Regelwerk-Funktion auch als Vorab-Gerüst vor dem Befüllen trägt.

Methoden- und Begründungsschicht mit akademischen Quellen (Untertyp a): dia-xai führt `RESEARCH.md` als Forschungsgrundlagen. Der Lead trägt den Zweck ("destillierte Erkenntnisse aus der Forschungsliteratur, die unsere Designentscheidungen begründen") und das Strukturversprechen (jede Erkenntnis mit Primärquelle und konkreter Auswirkung). Jede der elf Sektionen folgt dem Dreischritt Erkenntnis, Quelle, Auswirkung: etwa der Anchoring-Bias bei Pre-Annotation (Berzak et al., EMNLP 2016) führt zur Designentscheidung "Rohtext in der Verify-Ansicht immer sichtbar". Eine abschließende Tabelle Design-Entscheidung gegen Forschungsgrundlage verdichtet die elf Erkenntnisse. Das ist die Reinform des Untertyps (a): nachprüfbare Bindung jeder Praxisentscheidung an eine Primärquelle.

Forschungsrahmen einer Studie (Untertyp a): m3gim führt `forschungsrahmen.md` mit Promptotyping-Frontmatter (`topics: [[Mobility Studies]], [[Music History]], [[Gender Studies]]`). Es trägt den theoretischen Rahmen (Mobility Turn nach Urry, die Motilität-Mobilität-Unterscheidung nach Strohmann), die DH-Vorläufer (MUSICI, MusMig) und die Lücke, die das Projekt schließt, dann vier nummerierte Forschungsfragen mit Hypothese und einem dreiteiligen Machbarkeitsziel, schließlich den Forschungskontext Oper Graz mit Literatur und benannten Forschungslücken. Die Quellen stehen in einer eigenen Sektion am Dokumentende.

Vault-Atom-Variante (Untertyp a als Wissensatom): hist-info-model führt seine Theorie-Dokumente im Ordner `knowledge/01-theory/` nicht im Promptotyping-Frontmatter, sondern in der Vault-Atom-Struktur. `Historical-Information.md` trägt `type: knowledge` plus `tags` und `status: draft` im Frontmatter und im Korpus `## Summary`, dann die fachliche Setzung (fünf Eigenschaften, drei Primitive, offene Frage nach ihrer Beziehung), dann `## Sources` (Pollin, Thaller, Koselleck, Langefors) und `## Related` mit erläuterten Wikilinks. Das belegt den Sonderfall: ein Methoden- und Theoriedokument, das primär als atomare Wissenseinheit gelesen wird, folgt der Vault-Struktur statt dem Promptotyping-Frontmatter.

## Begriffe

- Domänenwissen: die fachmethodische Vorgabe- und Theorieschicht eines Projekts; die Regeln, nach denen Material ausgezeichnet oder berechnet wird, und ihre wissenschaftliche Begründung. Weder Material (Gegenstand) noch Specification (Funktionsumfang).
- Methoden- und Begründungsschicht (Untertyp a): der theoretische Rahmen und die forschungsgestützte Begründung der Projektentscheidungen, mit akademischen Quellen. Beantwortet das Warum.
- Domänenspezifisches Regelwerk (Untertyp b): die normative, auszeichnungsnahe Vorgabe (Editionsrichtlinien, TEI-Mapping, Kodiermanual, Ontologie, Berechnungslogik). Beantwortet das Wie der Auszeichnung.
- Mapping: die systematische Zuordnung von Quellstruktur zu Zielstruktur (Quellelement zu TEI-Element, Metadatenfeld zu Header-Element), Kern des Untertyps (b).
- Ungeklärtes Phänomen: ein Fall, für den das Regelwerk noch keine Entscheidung trägt und der explizit als offene, mit dem Auftraggeber zu klärende Frage benannt wird, statt stillschweigend übergangen zu werden.
- Source of Truth (für Schemata): die maschinenlesbare Datei (RelaxNG-Schema, ODD, JSON-Schema, OWL-Ontologie), die die formale Wahrheit trägt; das Domänenwissen-Dokument paraphrasiert und verlinkt sie, ersetzt sie nicht.

## Versionshistorie

- 0.2 (2026-07-19): Freigabe (status complete), englisches Funktionsvokabular (Domain Knowledge), Status-Vokabular auf den Stand der Konvention, `knowledge-sources`-Platzhalter auf die kanonische Map-Form, Lebenszyklus und Destillat-Grenze, Verification-Verweis. Die drei Template-Blöcke (Regelwerk, Begründungsschicht, Vault-Atom-Variante) sind geprüft und bleiben als echte Genres bestehen. Keine Migrationspflicht für bestehende Repos.
- 0.1 (2026-06-13): Erstfassung, empirisch aus notker-edition, agentic-edition-pipeline, dia-xai, m3gim und hist-info-model.

## Related

- [Konvention Promptotyping Documents](#konvention-v0.1)
- [Vorlage Datengrundlage](#promptotyping-document-data)
- [Vorlage Specification](#promptotyping-document-specification)
- [Vorlage Architecture](#promptotyping-document-architecture)
