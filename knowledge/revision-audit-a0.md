---
title: Revision Audit A0
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: draft
language: de
version: 0.1
created: 2026-07-23
updated: 2026-07-23
authors: [Christopher Pollin]
generated-with: Claude Code mit Claude Opus 4.8
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
related: [paper, paper-writing]
---

# Revision Audit A0

Freies kritisches Lektorat von `paper.md`, Stand 2026-07-23. Lese-Scope geschlossen auf `paper.md` und `paper-writing.md`. Kein externer Abgleich; wo eine Behauptung des Papers über fremde Frameworks oder Werkzeuge nur durch das Paper selbst gedeckt ist, bleibt es dabei. Fünf Hebelbefunde nach dem Verhältnis von Wirkung zu Eingriffstiefe, danach Restliste und die drei Abschlussblöcke. Alle Vorschläge in britischem Englisch im Register des Textes.

Vorbemerkung zur Gesamtlage. Das Paper ist argumentativ dicht gebaut und in seiner Selbstkritik ungewöhnlich diszipliniert. Die Deskilling-Lesart ist sauber blockiert, die Effizienz-Nichtbehauptung durchgehalten, die Drucker-Kritik an LLM-Visualisierungen ist gegen die eigene Methode gewendet statt weggeredet. Die fünf Befunde greifen an tragenden Stellen, keiner betrifft handwerkliche Mängel.

## Befund 1 — Der Kernbegriff *translation* spannt über drei ungleich wörtliche Operationen, und die Doppelung ruht auf dieser Spannung

**Fundstelle.** 2.4 (Zeile 100), gestützt aus 1 (Zeile 23) und 3.4 (Zeile 178).

**Beleg.**
> "LLMs operate as translation mechanisms. They translate natural languages into one another, requirements into code, and, in the arrangement described here, research data and research context into research artefacts." (2.4)
> "The two senses of translation meet exactly here." (2.4)

**Steelman.** Die Figur ist der deklarierte theoretische Kern (paper-writing.md, Kernaussage 1) und sie leistet real etwas. Sie verklammert das seit zwei Jahrzehnten dokumentierte interdisziplinäre Übersetzungsproblem mit der maschinellen Generierung an einem einzigen Objekt, den Dokumenten, und diese Verklammerung ist nicht bloss Wortspiel, weil dasselbe Dokument nachweisbar zwei Lasten trägt, Medium der menschlichen Verständigung und Quelle der maschinellen Ableitung. 3.4 fängt die Spannung zusätzlich ab, indem es die Modellierungstradition heranzieht und die "chain of translations" als "chain of representations" reformuliert, womit der Begriff ein Fundament jenseits der Wortgleichheit bekommt.

**Bewertung.** Die drei aufgezählten Operationen sind verschieden wörtlich. "natural languages into one another" ist maschinelle Übersetzung im strengen Sinn, "requirements into code" ist bereits metaphorisch, "research data into research artefacts" ist eine Generierung, die mit dem alltagssprachlichen Übersetzungsbegriff nur noch die Struktur des Abbildens teilt. Der Satz "The two senses of translation meet exactly here" behandelt diese Reihe als homogen und zieht daraus die Gleichsetzung mit dem interdisziplinären Übersetzungsproblem. Ein aufmerksamer Gutachter liest hier eine Äquivokation, die Figur trägt, solange man das Wort nicht prüft. Die Rettung in 3.4 verschiebt das Problem eher, als es zu lösen, denn wenn "translation" eigentlich "representation" oder "mapping" meint, dann ist das verbindende Etikett zum interdisziplinären Übersetzungsproblem gerade das metaphorisch schwächste Glied. Der Text braucht die Doppelung, also darf er die Spannung nicht verschweigen, er muss sie kontrolliert ausstellen.

**Vorschlag.** Die drei Sinne in 2.4 nicht als gleichrangige Reihe, sondern als bewusst gespannten Begriff markieren, dessen Einheit im strukturerhaltenden Abbilden liegt, und die Rückbindung an die Modellierungstradition eine Halbzeile früher andeuten statt sie ganz nach 3.4 zu verschieben. Konkret nach dem Aufzählungssatz einfügen:

> The three are not translation in one and the same sense. Rendering one natural language as another is translation literally; deriving code from requirements and an artefact from data are translation in the structural sense the modelling tradition calls representation, a source rendered into a target that preserves what the purpose requires (Section 3.4). What unites them, and what the doubling turns on, is that a stable object stands at each junction and carries the mapping in a form both sides can read.

Damit wird aus der verdeckten Gleichsetzung ein offen graduierter Begriff, und der Vorwurf der Äquivokation verliert seinen Angriffspunkt, weil das Paper ihn selbst vorwegnimmt.

**Offene Entscheidung.** Ob die Rückbindung an 3.4 an dieser Stelle vorweggenommen werden soll oder ob das die Dramaturgie stört, die den Modellierungs-Unterbau erst in 3.4 einlöst. Minimalvariante ohne Vorgriff möglich, dann nur der erste und dritte Satz des Vorschlags.

## Befund 2 — *prototype* und *disposable* kollidieren mit der Evidenz dauerhaft genutzter, aufwändiger Werkzeuge, und die RSE-Grenze verläuft technisch statt nach Aufwand

**Fundstelle.** Abstract (Zeile 9), 4.3 (Zeile 232), 5.2 (Zeile 266), 5.3 ZBZ (Zeile 278), aufgelöst in 6.1 (Zeile 318).

**Beleg.**
> "the prototype they yield is a by-product that can be discarded and regenerated." (Abstract)
> "the continued growth is itself part of the evidence that the tools remain in use." (5.2)
> "the pipeline is the project where the method stops being lightweight. 13 documents and nine stages are infrastructure, and Section 6.4 counts the cost." (5.3)
> "Where a project outgrows them, it has outgrown prototyping and entered software development" (4.3)

**Steelman.** Die Prototyp-Grenze ist in 4.3 sauber technisch definiert, über die Artefakteigenschaften self-contained, client-side, kein Server, keine kollaborativen Workflows. Ein statisch ausgeliefertes Werkzeug bleibt unter dieser Definition Prototyp, unabhängig von Aufbaudauer und Lebensdauer, und 6.1 trennt sorgfältig die wegwerfbare Iteration vom dauerhaft publizierten Artefakt. Die Definition ist in sich kohärent, und die Langlebigkeit einzelner Tools widerspricht ihr nicht, sie ist sogar Teil des Evidenzarguments.

**Bewertung.** Die Definition ist kohärent, der Wortgebrauch drumherum ist es nicht durchgängig. "disposable" wird als Wesensmerkmal des Ergebnisses geführt (Abstract, 2.2 "A promptotype can be discarded and regenerated"), während die Evidenzsektion gerade auf Nicht-Wegwerfbarkeit besteht ("the tools remain in use") und einen Fall ausdrücklich als Infrastruktur beschreibt, die sechs Wochen Aufbau, dreizehn Dokumente und neun Stages trägt. Damit stehen zwei Bedeutungen von "disposable" nebeneinander, die epistemische (die einzelne Iteration ist billig verwerfbar, weil regenerierbar) und die dem Wort naheliegende (das Ergebnis ist geringwertig oder kurzlebig). 6.1 löst die Spannung erst spät und nur für den, der bis dahin liest. Ein Gutachter, der beim Abstract und bei 4.3 hängenbleibt, sieht einen Widerspruch zwischen "prototype/by-product/discarded" und einer Evidenzbasis, deren Stärke gerade die dauerhafte, aufwändige Nutzung ist. Zusätzlich verläuft die RSE-Grenze technisch (Server versus Client), während 5.3 den Übergang mit "stops being lightweight" an den Aufwand knüpft, zwei Grenzkriterien, die der Text nicht ausdrücklich auseinanderhält.

**Vorschlag.** Zwei kleine Eingriffe, keine Umschreibung von 6.1.

Erstens im Abstract "disposable" vom Ergebnis lösen und auf die Iteration beziehen:

> ~~and the prototype they yield is a by-product that can be discarded and regenerated.~~
> and the prototype they yield is regenerable from them at any point, which makes each iteration cheap to discard.

Zweitens in 5.3 (ZBZ-Limits) die technische Natur der Grenze festhalten, damit "lightweight" nicht als Grenzkriterium missverstanden wird:

> The pipeline is the project where the method stops being lightweight, without crossing the technical boundary of Section 4.3, since the artefact stays static and client-side. Thirteen documents and nine stages are infrastructure, and Section 6.4 counts the cost.

**Offene Entscheidung.** Ob "prototype" als Leitbegriff für das Ergebnis überhaupt gehalten werden soll, wenn ein Teil der Fälle vollwertige, dauerhaft betriebene Forschungswerkzeuge sind. Das ist eine Positionierungsfrage jenseits der Wortkosmetik, sie berührt die Beitragsbeschreibung im Titel und Abstract und sollte bewusst entschieden werden.

## Befund 3 — Der Kernsatz von 5.5 ist ein Vergleichs-Claim ohne Kontrollbedingung, gelesen aus den eigenen Fällen

**Fundstelle.** 5.5 (Zeile 312).

**Beleg.**
> "the quality of the artefacts tracks the domain expertise invested in the documents more than any other variable visible in the record. The projects with the deepest domain modelling produced the instruments with the most epistemic yield, and the failures cluster where documents were vague."

**Steelman.** Die Beobachtung ist als "reading" markiert und sie ist plausibel, sie deckt sich mit der Methodenlogik und mit der Diagnosefunktion der Dokumenttypen aus 3.3. Für einen Möglichkeits-Claim genügt zudem, dass die Prämisse an den Fällen konsistent auftritt, und 5.5 formuliert vorsichtig ("visible in the record").

**Bewertung.** Der Satz ist stärker als ein Existenz- oder Konsistenzbefund. "more than any other variable" ist ein komparativer Kausalclaim, der eine Rangordnung der Einflussgrössen behauptet, und genau diese Rangordnung ist ohne Kontrollbedingung, ohne Quantifizierung und aus den selbst gebauten Projekten heraus nicht belegbar. Es ist dieselbe Stelle, an der die Einzelpraktiker-Evidenz am verletzlichsten ist, hier liest der Entwickler der Methode aus seinen eigenen Fällen die zentrale Prämisse der Methode heraus. 6.4 gesteht die fehlende Kontrollbedingung offen zu, umso auffälliger ist, dass 5.5 einen Vergleichssuperlativ setzt, den 6.4 gleich wieder einzieht. Evidenztreue in beide Richtungen verlangt hier, den Claim genau so stark zu machen wie die Fälle ihn tragen, also als konsistente Ko-Variation ohne Rangbehauptung.

**Vorschlag.** Den Komparativ streichen und die markierte Inferenz belassen:

> ~~the quality of the artefacts tracks the domain expertise invested in the documents more than any other variable visible in the record.~~
> across the record the quality of the artefacts co-varies with the domain expertise invested in the documents, and I read this as the variable that carries most, offered as an inference from cases I built rather than a controlled finding.

Damit bleibt die Aussage, die das Paper wirklich braucht (die Prämisse tritt konsistent auf), und der angreifbare Rangschluss wird als das gekennzeichnet, was er ist.

**Offene Entscheidung.** Ob die explizite Selbstverortung ("cases I built") hier gewünscht ist oder als Dopplung zu 6.4 empfunden wird. Falls Letzteres, genügt die Streichung von "more than any other variable" ohne den Zusatz.

## Befund 4 — Die Novelty gegenüber Spec-Driven Development ruht rhetorisch zu stark auf Priorität statt auf Differenz

**Fundstelle.** 2.5 (Zeile 110).

**Beleg.**
> "The definition here is contemporaneous with the label and grew independently from scholarly editing practice (Section 2.6). Where these frameworks specify software products from requirements, Promptotyping specifies research artefacts derived from modelled research data, and three layers have no counterpart in them."

**Steelman.** Die Passage nennt beides, die Priorität (contemporaneous, independent) und die sachliche Differenz (drei Schichten). Für einen Methoden-Definitionsartikel in einem DH-Venue ist die Herkunft aus der Editionspraxis ein legitimer Teil der Positionierung, und die drei Schichten sind konkret benannt.

**Bewertung.** Die Reihenfolge und Gewichtung setzen den schwächeren Grund nach vorn. Zeitliche Unabhängigkeit ist gegen einen Neuheitsvorwurf wenig wert, weil zwei Linien dieselbe Idee unabhängig finden können und die spätere Benennung die frühere nicht neu macht. Was trägt, ist die sachliche Differenz, und die steht hier im Nachsatz, zudem als blosse Behauptung ("three layers have no counterpart"), ohne dass die Differenz als methodisch (nicht bloss thematisch) qualifiziert wird. Ein Gutachter aus der Software-Engineering-Ecke fragt, ob die drei Schichten mehr sind als die Anwendung von SDD auf eine Domäne mit besonderen Daten. Der Text hat die Antwort (Verifikationspflichten, Critical Expert als Rollendefinition, Datenschicht mit Semantik und Unsicherheit), er stellt sie nur nicht in die tragende Position.

**Vorschlag.** Die Gewichtung umkehren, Differenz zuerst und als methodische qualifiziert, Priorität als Nebenpunkt:

> Where these frameworks specify software products from requirements, Promptotyping specifies research artefacts derived from modelled research data, and it adds three layers that are not domain relabelling but a different division of labour. It carries a data layer describing the semantics and uncertainties of the sources, it binds the specification to the scholarly verification duties of Section 6.2, and it installs the Critical Expert in the Loop as the role that owns those duties. That the definition here is contemporaneous with the label and grew independently from scholarly editing practice (Section 2.6) supports the case but does not carry it.

**Offene Entscheidung.** Ob "not domain relabelling but a different division of labour" gegen die Stilregel 2 (keine nachklappende Negation, kein "X rather than Y") verstösst. Die Konstruktion "not A but B" ist hier innerhalb eines Satzes echter Kontrast mit Inhalt, sie liegt im Grenzbereich der lizenzierten Ausnahmen. Falls sie fallen soll, positiv umformen: "and it adds three layers that mark a different division of labour, beyond applying the same idea to a new domain."

## Befund 5 — "The companion is part of the argument" dehnt die Selbstanwendung zur Evidenz

**Fundstelle.** 5.1 (Zeile 238).

**Beleg.**
> "The companion is thus part of the argument, because a curated, versioned knowledge layer is what sustained practice of the method produces, and the companion is that claim made inspectable."

**Steelman.** Der Zug ist elegant und er ist im Kern richtig, das Vorhandensein einer gepflegten, versionierten Wissensschicht demonstriert, dass die Methode einen solchen Layer hervorbringt. Als Demonstration der Kommunizierbarkeit und der Praxisform ist das legitim, und paper-writing.md hält fest, dass das Paper seine Selbstreferenz bewusst dosiert.

**Bewertung.** "part of the argument" schiebt die Selbstanwendung von der Demonstration in die Beweislast. Selbstanwendung ist kein unabhängiger Evidenzpunkt, das Paper, das mit der Methode hergestellt wird, kann die Wirksamkeit der Methode nicht mitbelegen, ohne zirkulär zu werden. Die konkrete Formulierung ist überdies leicht selbstbestätigend gebaut, sie erklärt den Begleiter zum Teil des Arguments und begründet das damit, dass die Methode genau solche Begleiter erzeuge. Neben den weiteren selbstreferenziellen Zügen des Textes (3.3 "an application of the method to its own artefacts", Acknowledgements) summiert sich das zu einem Eindruck, den ein skeptischer Leser gegen die Evidenzbasis wendet. Der Befund ist klein im Eingriff, aber er sitzt an der Nahtstelle, an der das Paper seine Evidenz einführt.

**Vorschlag.** Von "argument" auf Demonstration zurücknehmen:

> ~~The companion is thus part of the argument, because a curated, versioned knowledge layer is what sustained practice of the method produces, and the companion is that claim made inspectable.~~
> The companion is thus a worked demonstration alongside the argument, since a curated, versioned knowledge layer is what sustained practice of the method produces, and it shows that layer in inspectable form rather than only asserting it.

**Offene Entscheidung.** Keine, sofern die Zurücknahme auf "demonstration" akzeptiert wird. Falls der Operator die stärkere Lesart bewusst will, sollte 6.4 die Zirkularität der Selbstanwendung einmal ausdrücklich als Grenze nennen, damit der Zug nicht ungedeckt bleibt.

## Restliste

- **Abstract, "verified figures".** Zeile 9, "each traceable in its public repository with verified figures". Der Text betont durchgehend, Zahlen seien nie das Argument (paper-writing.md Regel 17), im Abstract erscheint "verified figures" dennoch als Gütesiegel. Kleine Spannung, tilgbar durch "each traceable in its public repository" ohne den Zusatz.
- **2.3, "the ideal case of modelling".** Zeile 86, RDF als "the ideal case". Grenzfall zu Regel 16 (keine Superlative). Vertretbar, weil fachlich als Endpunkt eines Spektrums gemeint. Belassen, mit Bewusstsein.
- **6.2, überlanger Verifikationsabsatz.** Zeile 322 ist ein einziger Block über drei Verifikationsebenen mit mehreren eingeschobenen Belegen (Fischer/Kimmel/Puppe, Stanicka-Brzezicka). Leserführung leidet. Kein inhaltlicher Befund, aber ein Split nach der ersten Ebene (Data fidelity) würde die Ebenenstruktur sichtbar machen, die der Absatz behauptet.
- **5.3, Zahlen in den Fallschemata.** "46 journal phases", "74+ tests", "12 coordinated views", "49 documented decisions". Durch Operator-Entscheidung als Item-11-Kandidaten gedeckt und in der Tabelle/den Schemata erlaubt. Kein Befund, nur der Hinweis, dass die Grenze zwischen "Zahl misst Evidenz" und "Zahl misst Aktivität" hier fallweise gezogen ist und ein Gutachter sie nicht kennt.
- **Titel und "Context and Agentic Engineering".** Der Titel koordiniert "Context" und "Agentic Engineering", grammatisch liest sich das als "Context Engineering and Agentic Engineering", die Ellipse ist aber nicht eindeutig. Prüfen, ob "with Context and Agentic Engineering" gegenüber "with Context Engineering and Agentic Coding" die gewollte Lesart trägt.

## Abschluss

### (a) Entscheidungsbedürftige Punkte

1. Befund 2, offene Entscheidung, ob "prototype" der richtige Leitbegriff für das Ergebnis bleibt, wenn ein Teil der Fälle dauerhaft betriebene Forschungswerkzeuge sind. Das ist eine Positionierungsfrage bis in den Titel hinein.
2. Befund 1, ob die Rückbindung an die Modellierungstradition in 2.4 vorgezogen wird oder der Dramaturgie zuliebe in 3.4 bleibt.
3. Befund 4, ob die Kontrastkonstruktion "not domain relabelling but a different division of labour" gegen Stilregel 2 verstösst und positiv umgeformt werden muss.
4. Befund 5, ob die stärkere Lesart ("part of the argument") gehalten und dafür in 6.4 als Zirkularitätsgrenze abgesichert wird, oder auf Demonstration zurückgenommen.

### (b) Stellen, an denen der Text stärker ist als erwartet

- **2.1, Drucker gegen die eigene Methode.** Der naheliegende Einwand, LLMs reproduzierten genau die positivistischen Visualisierungskonventionen, die Drucker kritisiert, ist nicht abgewehrt, sondern zum Konstruktionsprinzip gemacht (Visualisierungsentscheidungen aus den Defaults in versionierte, verteidigbare Spezifikationen heben). Das ist die stärkste einzelne Passage des Papers.
- **6.4, Zugangs- und Ethikgrenze.** Die Asymmetric-Amplification-Stelle könnte ins Bekenntnishafte kippen, sie bleibt aber nüchtern und benennt die eigene Abhängigkeit von proprietären Frontier-Systemen als ungelöst, ohne den Beitrag zu relativieren. Der Both-Sides-Schluss ist vermieden.
- **3.1, Epistemologie der Methodenbildung.** Das Eingeständnis, dass die frühen Fälle die Methode nur retrospektiv tragen und die späten sie strenger validieren, nimmt einem Gutachter den stärksten methodologischen Einwand vorweg, ohne die Evidenz zu entwerten.
- **6.3, Reproduzierbarkeit.** Die Verlagerung der Reproduzierbarkeit auf Dokumente, Prozessrecord und deterministische Pipeline, mit der offenen Zugabe, dass die binäre Artefaktidentität ausserhalb liegt, ist präzise abgegrenzt und übertreibt nicht.

### (c) Ungefragte Befunde

- **Modellabhängigkeit datiert den Artikel schnell.** Der Text hängt an "frontier models" als Bedingung (Fussnote 2, 6.3, 6.4). Das ist selbst thematisiert, aber die Häufung ("Between then and late 2025, frontier-model coding capability converged", 1) bindet die Kernbehauptung an einen technischen Moment, der bei Erscheinen des Artikels überholt sein kann. Kein Änderungsvorschlag, weil die Alternative (Abstraktion vom Modell) die Ehrlichkeit der Bedingung opfern würde. Bewusst so belassen ist die richtige Wahl, der Hinweis dient nur der Erwartungssteuerung gegenüber dem Review.
- **Negativbefund Deskilling.** An der erwartbaren Schwachstelle, dass eine Methode zur Werkzeuggenerierung als Deskilling-Programm gelesen wird, findet sich keine Angriffsfläche. Die Profession-Schutzklausel ist an vier Stellen konsistent verankert (1, 2.6, 3.5, 6.4) und nirgends überdehnt. Das ist ein Befund im Sinne der Gleichwertigkeit von Negativbefunden, die Verteidigung ist bereits vollständig eingebaut.
- **Negativbefund Evidenz-Selbstdeklaration.** Die Einzelpraktiker-Grenze wird an keiner Stelle beschönigt, sie steht im Abstract, in 1, in 5.4 und in 6.4. Die einzige Stelle, an der der Text mehr behauptet als die Evidenz trägt, ist Befund 3, und sie ist punktuell reparierbar. Die Evidenzarchitektur als Ganzes ist selbstkritisch kalibriert.
