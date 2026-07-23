---
title: Revision Audit A2
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: draft
language: de
created: 2026-07-23
updated: 2026-07-23
authors: [Christopher Pollin]
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
related: [paper, paper-writing]
---

# Revision Audit A2

Korpus-Audit zu zwei Hypothesen am `paper.md`. Lese-Scope waren `paper.md`, `paper-writing.md`, `vault/knowledge/state.md`, `vault/knowledge/register-paper-sources.md` sowie read-only die genannten Projektrepos. Kein Webzugriff. Ich ändere nichts an `paper.md`; die Diff-Vorschläge sind Vorschläge zur Operator-Entscheidung. Britische Schreibung in den Vorschlagssätzen, deutsche Prosa im Audit.

Vorab ein Gesamtbefund, der beide Hypothesen trägt. Der Record kovariiert die Größen, die die Hypothesen trennen wollen. Ich habe die Dokumenttiefe gegen den Verifikationsaufwand an den Ein-Tages-Builds geprüft, weil dort am ehesten ein Auseinanderfallen zu erwarten wäre. Klawiter-Rescue, laut Tabelle „1 day, ~250 tests", trägt neun Knowledge-Dokumente (`about`, `data`, `frontend`, `index`, `journal`, `pipeline`, `production-readiness`, `testing`, `knowledge/index`; `C:\Users\Chrisi\Documents\GitHub\klawiter-rescue\knowledge\`) samt eigenem `testing.md` und LLM-as-a-Judge-Validierung. M³GIM trägt vierzehn Knowledge-Dokumente samt `testing.md` (`C:\Users\Chrisi\Documents\GitHub\DHCraft\m3gim\knowledge\`). Ein schneller Build heißt im Record nicht flacher Dokumentsatz. Es gibt kein Projekt mit tiefen Dokumenten und belegbar geringer Verifikation und keines umgekehrt, an dem sich die beiden Größen isolieren ließen. Diese Kovarianz ist der harte Kern von Hypothese 1 und begrenzt zugleich, was das Korpus zu Hypothese 2 hergibt.

## Hypothese 1, Zirkularität

### Befund H1-1, die zentrale Korrelation in 5.5 trennt Dokumenttiefe, Verifikation und Gesamtaufmerksamkeit nicht

**Fundstelle.** Sektion 5.5, `paper.md` Zeile 312. Gestützt und vorbereitet durch 2.2 (Zeile 78) und 3.3 (Zeile 164).

**Beleg.** 5.5: „the quality of the artefacts tracks the domain expertise invested in the documents more than any other variable visible in the record. The projects with the deepest domain modelling produced the instruments with the most epistemic yield, and the failures cluster where documents were vague." Und weiter: „The cases are evidence for the method's central premise, that the scholarly work of modelling and specification is where the value enters." 2.2: „The modelling and the documents persist, and their quality is what the quality of every generated artefact tracks (Section 5.5)." 3.3: „the observation that output quality tracks the precision of the domain documentation recurs across the record (Section 5.5)."

**Steelman.** Das Paper erhebt an dieser Stelle keinen kontrollierten Kausalbefund. 5.5 sagt ausdrücklich „more than any other variable visible in the record", eine auf den Record beschränkte, hedgende Beobachtung. Sektion 6.4 (Zeile 336) benennt die Evidenzlage bereits scharf, „a single practitioner, without a control condition, and the observed gains confound method effects with model capability". Die Korrelation dient als Evidenz für eine Prämisse und tritt nirgends als Messung auf. Und der Notker-Fall (siehe H1-3) entkoppelt die Verifikation von der Dokumenttiefe in eine für das Paper günstige Richtung.

**Bewertung.** Der spezifische Confound, den die Hypothese benennt, ist im Text nicht aufgelöst. 6.4 listet den Confound mit der Modellfähigkeit, lässt aber den projektinternen Confound ungenannt, dass Dokumenttiefe und Verifikationsaufwand beide die Investition derselben Person sind und daher gemeinsam mit der insgesamt investierten Aufmerksamkeit variieren. Der Record bestätigt genau diese Nichttrennbarkeit empirisch (Gesamtbefund oben). Die Zuschreibung in 5.5 an „domain expertise invested in the documents" speziell ist damit vom Material unterbestimmt; ebenso gut ließe sich „investierte Gesamtaufmerksamkeit" einsetzen, ohne dem Record zu widersprechen. Das ist ein Befund, der die starke Lesart der Kernbeobachtung begrenzt, ohne sie zu widerlegen. Er verlangt keine neue Quantität, nur eine Confound-Nennung, und fügt sich in die bestehende Selbstbegrenzung von 6.4.

**Vorschlag (Diff, 6.4, nach „a strength and a source of instability.", Zeile 336).**

```
+ A second confound sits inside the record. Document depth and verification
+ effort are both the same practitioner's investment, so the correlation of
+ Section 5.5 cannot separate the depth of the documents from the attention
+ spent verifying them, nor either of these from the total attention a project
+ received.
```

**Offene Entscheidung.** Platzierung in 6.4 (Evidenzlimit, empfohlen) gegenüber einem Zusatz direkt in 5.5. In 6.4 bleibt 5.5 als positiver Evidenzsatz stehen und die Einschränkung sammelt sich dort, wo die übrigen Confounds schon stehen.

### Befund H1-2, das Qualitätsmaß ist selbst dokumentabgeleitet und autorbeurteilt

**Fundstelle.** Sektion 5.5, `paper.md` Zeile 312.

**Beleg.** „The Notker edition and the ZBZ pipeline, whose knowledge bases fix the domain in depth, editorial guidelines that encode every text phenomenon in the one case and thirteen documents governing nine stages in the other, produced the instruments that discriminate most finely; where a single design document is all that stands between an artefact and inherited convention, as Section 5.3 records for the CorrespExplorer, the epistemic yield is bounded by how much that one document carries."

**Steelman.** „Epistemic yield" und „discriminate most finely" sind für die Zwecke des Papers legitime, an der Sache orientierte Bewertungen; ein Interface, das die funktionalen Schichten Notkers trennt oder Unsicherheit sichtbar hält, leistet nachweisbar mehr Unterscheidung als eine flache Ansicht. Die Bewertung ist nicht willkürlich, sie ist am Artefakt zeigbar.

**Bewertung.** Das Qualitätsmaß, das 5.5 verwendet, ist überwiegend eine Eigenschaft des Designs, und das Design stammt aus den Dokumenten. „Wie fein ein Interface unterscheidet" ist damit nahe an „wie reich die Dokumente sind", und beurteilt wird es vom selben Praktiker aus demselben Dokumentsatz. Die Korrelation zwischen Dokumenttiefe und Qualität ist in diesem Teil konstitutiv, nicht unabhängig gemessen. Das verschärft H1-1 und ist der engste Sinn der Zirkularität. Ein produktiver Weg vermeidet die Übertreibung, ohne den Satz zu opfern; die günstige Notker-Entkopplung (H1-3) ist gerade deshalb wertvoll, weil sie die Kausalrichtung an einem Fall zeigt, an dem die Verifikation nachläuft und die strukturelle Qualität dennoch steht.

**Vorschlag (Diff, optional, 5.5, als Halbsatz an den Notker-ZBZ-Satz oder als offene Entscheidung an 6.4 anzuhängen).** Kein eigener Satz nötig, wenn H1-1 gesetzt wird; die dortige Confound-Nennung deckt den konstitutiven Anteil mit ab. Falls der Operator die konstitutive Nähe ausdrücklich markieren will:

```
+ The measure here is the artefact's discriminating power, itself a property
+ of the design the documents carry, so this correlation is in part
+ constitutive and is read as evidence for a premise, not as an independent
+ measurement.
```

**Offene Entscheidung.** Ob der konstitutive Charakter explizit benannt wird (ein Satz in 5.5) oder implizit über die Confound-Nennung in 6.4 mitläuft. Doppelmarkierung vermeiden.

### Befund H1-3, Gegenevidenz zur starken Zirkularitätslesart, der Notker-Fall

**Fundstelle.** Sektion 5.3, Notker-Limits, `paper.md` Zeile 294.

**Beleg.** „this externalisation is also the verification burden. The R-disambiguation is recorded as still awaiting the commissioning scholar's confirmation, and where the guidelines encode a wrong rule, no implementer's intuition catches it."

**Steelman gegen den eigenen Befund.** Ein einzelner Fall trägt keine Trennung von Confounds; das ist kein Kontrollbedingungs-Ersatz.

**Bewertung.** Der Fall ist die einzige Stelle im Record, an der Dokumenttiefe und Verifikation auseinanderfallen, und er fällt zugunsten des Papers. Die Dokumente sind tief (Editorial Guidelines kodieren jedes Textphänomen), die Verifikation läuft ausdrücklich nach (Bestätigung des Auftraggebers steht aus), und die zugeschriebene strukturelle Qualität (die R-Disambiguierung, die Schichtentrennung) steht dennoch. Das schwächt die reine Aufmerksamkeits-Lesart der Zirkularität, weil hier die Qualität an den Dokumenten hängt und nicht an einem abgeschlossenen Verifikationsakt. Es ist damit ein Ergebnis, das Hypothese 1 in ihrer stärksten Form teilweise widerspricht, und zugleich das Material, das H1-2 relativiert. Ich empfehle keine Textänderung; der Fall steht bereits richtig im Text. Er gehört in die Gesamtbewertung, nicht in einen Diff.

**Offene Entscheidung.** Keine. Verwendbar als Argument gegenüber einem Gutachter, der die Zirkularität einwendet.

## Hypothese 2, Semantik-Mehrwert

### Befund H2-1, der Ideal-Status expliziter Semantik ist im Korpus nicht isoliert

**Fundstelle.** Sektion 2.3, `paper.md` Zeilen 86, 90, 92; Konklusion Sektion 7, Zeile 350.

**Beleg.** 2.3: „Ontology-based data in RDF is the ideal case of modelling, because there the meaning of the data is itself machine-readable, with classes, properties, and constraints that encode domain semantics explicitly." Und der Auflösungssatz: „The more semantics the data carries, the less the method's context layer must supply." Die Architektur dazu: „The model reads about the data and writes code that reads the data. [...] The full data never passes through the context window." Die verengte Fassung: „The claim this paper needs is narrower, since LLM agents do not perform formal inference but read explicit semantics as context. The explication work, once done, outlasts the format that first carried it". Sektion 7: „the twenty-year investment of the field in standards, ontologies, and semantic modelling is what the method renders productive".

**Steelman.** Das Paper behauptet an keiner Stelle, reichere Semantik erzeuge ein besseres Artefakt. Der Mehrwert ist bewusst schmal gelegt. Er liegt in der reduzierten Arbeit der Kontextschicht (die Bedeutung ist schon explizit, sie muss nicht rekonstruiert werden) und im Überleben der Explikationsarbeit über den Trägerwechsel. Die Destillations-Architektur ist als Auflösung der Token-Spannung eingeführt, nicht als Nullung des Semantik-Werts. Cremer und Paulmann verankern das niedrigsemantische Ende (Rekonstruktionskosten, wenn Struktur erst aus PDF-Layout hergestellt werden muss), FAIR das hohe Ende. Der Mehrwert sitzt an der Beschreibungs- und Formalisierungsstufe, nicht an der Modellverarbeitung von Roh-RDF, und genau das sagt 3.4 (Zeile 184): „Direct processability does not suspend the token economy [...], and what enters the context remains the curated, distilled subset."

**Bewertung.** Innerhalb der Destillations-Architektur konsumiert das Modell eine destillierte Beschreibung, unabhängig vom Quellformat. Ob eine semantisch explizite Eingabe eine materiell bessere oder treuer herstellbare Beschreibung liefert als eine gleich sorgfältige Beschreibung flacher Daten, ist genau die Frage, die das Korpus nicht isoliert. Nur ein Projekt der Tabelle in 5.2 arbeitet auf ontologiebasierter Eingabe, M³GIM auf RiC-O/JSON-LD (`paper.md` Zeile 258; `C:\Users\Chrisi\Documents\GitHub\DHCraft\m3gim\`). Klawiter erzeugt JSON-LD als Ausgabe aus einem Blended Vocabulary, aber die Eingabe war SQL/BLOB (`C:\Users\Chrisi\Documents\GitHub\DHCraft\Promptotyping\_content\case-studies\klawiter-rescue.md`, Zeile 16 und 24); das ist ein Fall am niedrigsemantischen Eingang, kein Beleg des Ideal-Eingangs. Kein Projekt hält das Quellformat konstant und variiert nur die Semantik. Der Ideal-Status in 2.3 und das „renders productive" in Sektion 7 sind damit auf Artefaktebene korpusseitig nicht belegt; belegt ist allein, dass explizite Struktur bequem und treu zu destillieren ist. Das Paper konzediert bereits halb („the claim this paper needs is narrower"). Nach der Operator-Vorgabe (Default, wenn das Korpus den Mehrwert nicht belegt) gehört ein Satz hinein, der den Artefaktebenen-Vorteil innerhalb der Destillations-Architektur als offene empirische Frage einräumt.

**Vorschlag (Diff, 2.3, nach „the less the method's context layer must supply.", Zeile 86).**

```
+ Whether that reduction also yields a better artefact than an equally careful
+ description of flat data would yield is not something the documented record
+ isolates, since only one project in Section 5.2 draws on ontology-based input
+ and none holds the source format constant. The advantage claimed here stays
+ confined to the ease and fidelity of the description, and its effect on the
+ artefact remains an open empirical question.
```

Kompaktvariante (ein Satz), falls der Operator die längere Fassung nicht will:

```
+ Whether that reduction reaches the artefact, or stays confined to the ease of
+ writing the description, the record does not isolate, since only one project in
+ Section 5.2 draws on ontology-based input and none holds the source format
+ constant.
```

**Offene Entscheidung.** Erstens die Platzierung, 2.3 (am Ort der These, empfohlen) gegenüber einer eigenen Grenze in 6.4. Zweitens, ob das „renders productive" in der Konklusion (Zeile 350) an die Konzession angeglichen wird; der Satz ist die exponierteste Stelle der Hypothese, aber er trägt zugleich den rhetorischen Schluss. Ein minimaler Eingriff wäre „is what the method sets out to render productive" oder „is what the method aims to render productive", der den Anspruch von der Behauptung des vollzogenen Nachweises löst. Reine Operator-Entscheidung, weil sie an bestehendem Schlusstext ansetzt.

## Abschluss

### (a) Entscheidungsbedürftige Punkte

1. H1-1, Confound-Nennung in 6.4. Empfehlung setzen; kostet nichts, erhöht die Ehrlichkeit, keine neue Quantität.
2. H1-2, ob die konstitutive Nähe des Qualitätsmaßes ausdrücklich benannt wird oder über H1-1 mitläuft. Doppelmarkierung vermeiden.
3. H2-1, Konzessionssatz in 2.3 (lange oder kompakte Fassung) und die Frage, ob „renders productive" in Sektion 7 angeglichen wird.
4. Ungefragt-1 unten (Behauptung „failures cluster where documents were vague" ohne dokumentierten Fehlfall), weil sie 5.5 unabhängig von der Zirkularität schwächt.

### (b) Fälle, in denen das Material einer Hypothese widersprochen hat

- H1-3, der Notker-Fall widerspricht der starken Zirkularitätslesart. Verifikation läuft ausdrücklich nach, Dokumenttiefe ist hoch, die zugeschriebene strukturelle Qualität steht dennoch. Das ist die einzige Entkopplung im Record, und sie fällt zugunsten der Dokument-Primat-These aus. Sie widerlegt die Hypothese nicht, aber sie ist echte Gegenevidenz gegen die Version, in der nur „investierte Gesamtaufmerksamkeit" gemessen würde.
- Zu H2 gibt es keine Gegenevidenz im Korpus, weil es keine kontrastierende Evidenz gibt; das Material ist zur Frage stumm. Deshalb greift der Default (offene empirische Frage).

### (c) Ungefragte Befunde

1. **Kein dokumentierter Fehlfall stützt „failures cluster where documents were vague" (5.5, Zeile 312).** Das Inventar 5.2 und die Worked Cases 5.3 präsentieren ausschließlich Erfolge; ein projektweiter Fehlschlag mit vagen Dokumenten kommt nirgends vor. Der negative Pol der Korrelation ist behauptet, nicht gezeigt. Belegte innerprojektliche Sackgassen existieren (die wertlose Selbsteinschätzung des Vision-Modells in 3.5, Zeile 190; das Verwerfen zweier Visualisierungstypen in CorrespExplorer, 5.3 Zeile 285), aber das sind positive Explorationsbefunde, keine Fehlfälle aus vager Dokumentation. Produktiver Weg, die Klausel an den einen belegten Fall koppeln, an dem dünne Dokumentation ein Artefakt an die geerbte Konvention bindet. Vorschlag (Diff, 5.5): `- and the failures cluster where documents were vague.` ersetzen durch `+ and the thinnest documentation coincides with the artefact most exposed to inherited convention, the CorrespExplorer of Section 5.3.` Damit bleibt die Aussage korpusverankert und behauptet keinen Fehlfall, den der Record nicht trägt. Offene Entscheidung beim Operator, weil es an bestehendem Text ansetzt.

2. **Vault-Flag zu Barbot et al. 2024 offenbar bereits im Text aufgelöst.** `vault/knowledge/state.md` (Zeile 90) merkt an, die Wendung „chains of TaDiRAH-annotated activities (Barbot et al. 2024)" überattribuiere, weil Barbot et al. TaDiRAH nicht nenne. Der aktuelle `paper.md` (4.2, Zeile 216) schreibt „records workflows as chains of annotated research activities without a vocabulary for the artefacts that carry them (Barbot et al. 2024)", ohne TaDiRAH. Der Befund scheint erledigt; ich melde ihn, damit der Operator die Vault-Notiz schließen kann, statt sie als offen zu führen. Keine Textänderung nötig.

3. **Der coOCR-Fork ist in 5.4 als „strongest evidence" markiert (Zeile 308).** „Documented third-party use beyond teaching settings, such as the community fork of the coOCR-HTR workbench by a researcher at the Austrian Academy of Sciences, is the strongest evidence in the set, and there is little of it yet." Die Operator-Vorgabe für dieses Audit hält externe Forks als Mini-Nebenbemerkung, auf die sich die Argumentation nicht stützt. Ob die Vorgabe genau diesen Code-Fork meint (eher eine Dritt-Nutzung eines Artefakts als einen Fork der Methode), ist unklar. Falls ja, sitzt „strongest evidence in the set" in leichter Spannung zur Vorgabe. Produktiver Weg, den Superlativ auf „the clearest instance" oder „the one instance beyond teaching settings" senken, ohne die Substanz zu ändern. Reine Operator-Entscheidung; meine H1- und H2-Vorschläge stützen sich auf keinen Fork.

4. **Nebenwirkungsprüfung der Vorschläge.** Alle vorgeschlagenen Sätze sind additive Konzessionen oder ein korpusverankerter Ersatz; keiner führt eine neue Quantität ein, keiner argumentiert mit Geschwindigkeit oder Kosten, keiner stützt sich auf den Fork. Der H1-1-Satz in 6.4 verstärkt die dort schon stehende Confound-Liste und kollidiert nicht mit 5.5, das positiv stehen bleibt. Der H2-1-Satz in 2.3 verweist vorwärts auf 5.2, konsistent mit der bestehenden Verweisrichtung 2.3 nach 5.5. Sprachregeln geprüft, kein Gedankenstrich- oder Doppelpunkt-Konnektor, keine „X, nicht Y"-Apposition, britische Schreibung in den Diff-Sätzen.
