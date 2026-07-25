---
title: Skriptum Video 2 — Einführung in Promptotyping, Live-Demonstration
project:
  name: Promptotyping
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: draft
created: "2026-07-25"
updated: "2026-07-25"
source:
  title: Einführung in Promptotyping, Teil 2
  url: https://youtu.be/hd_a-NBO_S4
  recorded: Jänner 2026
generated: transcript-cleanup
---

# Skriptum Video 2 — Live-Demonstration Promptotyping

Dieses Dokument ist die bereinigte Textfassung des zweiten Teils der Videoeinführung in Promptotyping von Christopher Pollin, aufgenommen im Jänner 2026. Grundlage ist das automatisch erzeugte YouTube-Transkript, aus dem die Zeitstempel-Artefakte entfernt, die Fehler der Spracherkennung korrigiert und die gesprochene Sprache zu lesbarer Prosa geglättet wurden. Der Inhalt ist vollständig erhalten, einschließlich der Einschränkungen und Nebenbemerkungen des Sprechers. Das Video ist eine durchgehende Live-Demonstration mit Claude Code, in der aus 76 Excel-Dateien der österreichischen Wissensbilanz ein Dashboard entsteht. Die Zeitmarken hinter den Abschnittsüberschriften verweisen auf die Stelle im Video. Diktierte Prompts stehen wortgetreu in Codeblöcken.

## Aufbau und Ausgangslage [00:00]

Der zweite Teil springt direkt in die Live-Demonstration, umgesetzt mit Claude Code. Vorbereitet ist eine große Menge Excel-Dokumente aus der Wissensbilanz, die in Teil 1 bereits erwähnt wurde. Die Preparation Phase besteht hier allein darin, diese Daten zusammenzutragen. Als Nächstes folgt die Exploration Phase, in der Claude die Daten exploriert und dieses Wissen in ein `data.md` überführt.

Der Prompt wird per Speech-to-Text diktiert. Der Sprecher filmt die Arbeit von Claude Code nicht durchgehend, sondern pausiert die Aufnahme während der längeren Läufe.

## Schritt 1, Exploration der Excel-Dateien [01:05]

Diktierter Prompt:

```
Analysiere alle Excel-Dokumente im data-Folder im Detail. Unser Ziel ist es, aus
allen diesen Dokumenten, aus allen Excel-Dokumenten, aus allen Spalten ein
data.md zu erzeugen, das die Gesamtheit dieser Daten repräsentiert und wie alle
Spalten miteinander in Verbindung stehen.
```

Claude verwendet mehrere Befehle, um die Dokumente zu finden, und identifiziert 76 Excel-Dokumente im `data`-Ordner. Der Sprecher vergibt die Rechte, damit die Dateien bearbeitet werden können, und ergänzt den Auftrag.

```
Lege noch einen scripts-Ordner an, in dem du Python-Script-Files anlegst, die dir
bei dieser Exploration helfen, und füge in dem scripts-Ordner einen
exploration-Ordner an. Erzeuge auch ein Markdown-Dokument, in dem du alle
Skripte dokumentierst.
```

Der Sprecher merkt an, dass die Spracherkennung diesen Nachtrag nicht sauber transkribiert hat, hält ihn aber für ausreichend verständlich. Die Begründung für die Struktur: bei sehr vielen Excel-Dateien soll Claude Python-Skripte anlegen, um die Daten zu explorieren, und diese Skripte dokumentieren, was die Übersicht verbessert. Claude erzeugt eine To-do-Liste und arbeitet sie ab.

**Ergebnis [03:16].** Drei Python-Skripte, ein `scripts.md`, das zusammenfasst, wie die Daten exploriert wurden, drei JSON-Dokumente mit den extrahierten Daten sowie das `data.md`. Die JSON-Dateien sind lang und wirken auf den ersten Blick plausibel.

## Schritt 2, Ordnung in die erzeugten Dokumente [03:56]

Der Sprecher sortiert die Ergebnisse. Das `scripts.md` im `scripts`-Ordner dokumentiert, was dort liegt, und ist damit selbst ein Promptotyping Document; es bleibt an seinem Ort. Das `data.md` wandert in einen `knowledge`-Ordner. Die Verschiebung wird an Claude Code zurückgemeldet, weil das Werkzeug sonst mit einem veralteten Bild der Ablage arbeitet.

```
Ich habe data.md in einen knowledge-Ordner gegeben.
```

**Nebenbemerkung [04:27].** Sinnvoll wäre an dieser Stelle, die Analyse und Exploration ein zweites Mal aus einer anderen Perspektive durchzuführen, um sie zu überprüfen und zu verifizieren, etwa mit einer frischen Claude-Code-Session. Man erhält dann zwei Varianten von `data.md`, die sich zusammenführen lassen. Das Ergebnis der ersten Runde ist noch nicht perfekt und nicht vollständig; die Demonstration arbeitet trotzdem weiter.

## Schritt 3, Zwischenschritt zum Interface [05:12]

Um zu einem Output zu kommen, gibt der Sprecher einen vorbereiteten Prompt ein, der die Zielanwendung grob definiert. Sie soll eine statische Webseite mit HTML und CSS sein und dem Paradigma "Overview first, filter, and details on demand" folgen, also Shneidermans Information Seeking Mantra. Damit steht bereits Kontext im Spiel.

Der Sprecher betont, dass diese Vorgabe erheblich ausgebaut werden kann. Möglich wäre, eigene Markdown-Dokumente mitzugeben, `design.md`, `user-interface.md` oder `research.md`, in denen das Thema ausführlicher behandelt wird, und die Fragen zu HTML, CSS, JavaScript und der übrigen Architektur in ein `architecture.md` zu legen. Das lässt sich in eigenen Schritten sauberer ausarbeiten.

## Schritt 4, drei Promptotyping Documents auf einmal [06:11]

Zum vorbereiteten Prompt kommt der diktierte Auftrag:

```
Füge in diesem knowledge-Ordner ein architecture.md hinzu, wo die ganze
Architektur dieser Applikation kompakt beschrieben ist. Ein user-interface.md,
in dem das Design und das User-Interface-Design definiert sind. Und ein
user-stories.md, in dem die User Stories beschrieben sind, was man mit diesen
Daten umsetzen kann.
```

Der Sprecher geht damit direkt hinein und lässt mehrere zusammenhängende Dinge gleichzeitig umsetzen. Wie viel Zeit man an dieser Stelle investiert, ist frei wählbar. Beim User-Interface-Design könnte man zunächst Grundlagen erarbeiten, also die Frage klären, wie gute User Interfaces für solche Daten aussehen. Wer einschlägige Paper gelesen hat, kann das Wissen aus einer Publikation oder aus einem anderen Interface einbringen. Für die Demonstration werden alle Dokumente gemeinsam angelegt, und Claude Code wird erneut mit der Exploration beauftragt. Die Leitfrage lautet, wie Datenpunkte, Informationen und Wissensentitäten miteinander verbunden werden müssen, um sie anschließend in die Markdown-Dokumente zu destillieren.

**Ergebnis [07:47].** Das `architecture.md` beschreibt eine statische Single Page Application nach dem Visual Information Seeking Mantra. Dass dieses Mantra dort auftaucht, hat der Sprecher Claude nicht gesagt; es war für das System aus dem gegebenen Kontext klar. Weiter stehen dort HTML5, CSS, Responsive Design, Vanilla JavaScript ohne Build sowie D3.js als Bibliothek. Der Sprecher markiert die Vorgabe, dass, wenn überhaupt eine Bibliothek verwendet wird, es nur D3.js sein soll. Als Datenformate sind JSON und CSV vorgesehen.

## Schritt 5, Architekturkritik und MVP-Frage [08:29]

Die vorgeschlagene Ordnerstruktur enthält sehr viele Files. Der Sprecher hält es für eine gute Strategie, sich die Architektur zuerst anzeigen zu lassen, um dem Problem zu entgehen, dass das System sehr viel Code erzeugt, von dem nicht alles notwendig ist. Er fragt deshalb nach, ob sich daraus zuerst ein MVP bauen lässt, ein Minimum Viable Product, also der erste Prototyp beziehungsweise das erste gehaltvolle Produkt.

```
Analysiere architecture.md. Ist das wirklich sinnvoll? Sei ehrlich und
konstruktiv. Ist etwas overengineert?
```

```
Sind architecture.md, data.md, user-interface.md, user-stories.md wirklich im
Einklang? Überprüfe das noch mal.
```

Im Dokument steht bereits MVP. Der Auftrag an Claude lautet, alles noch einmal aus einer anderen, ehrlich konstruktiven Perspektive anzuschauen. Die Aufforderung "sei ehrlich" wirkt seltsam, funktioniert erfahrungsgemäß aber gut. Geprüft wird, ob das Ergebnis overengineert ist und ob die Dokumente zusammenpassen.

## Schritt 6, Thinking Matrix [10:15]

Um die Beziehungen zwischen den Markdown-Dokumenten explizit zu machen, folgt:

```
Erzeuge eine Thinking Matrix, in der du alle Markdown-Dokumente
gegenüberstellst.
```

Eine Matrix ist eine Form der Gegenüberstellung; "Thinking Matrix" bedeutet, diese Gegenüberstellung als Denkwerkzeug zu verwenden.

**Ergebnis [11:00].** Claude liefert Kritikpunkte mit mehreren Empfehlungen und identifiziert Inkonsistenzen. Der Sprecher wertet solche Ausgaben als nützlich, weil die Inkonsistenzen besser vorher geklärt werden. Er nennt eine typische Tendenz von LLMs, ungefragt einen Dark Mode einzubauen, den ein MVP nicht braucht. [unverständlich: ein Wort für die Kategorie dieser überflüssigen Zutaten] Keyboard Shortcuts werden ebenfalls nicht gebraucht. Er schreibt beides in den nächsten Prompt hinein.

```
Keine Keyboard Shortcuts. Kein Accessibility.
```

Accessibility ist ebenfalls etwas, das man später machen würde.

## Schritt 7, Bereinigung und Implementierungsplan [12:05]

```
Analysiere die Daten und alle Markdown-Dokumente weiter und passe sie an, um alle
diese Inkonsistenzen zu bereinigen. Und alles, was du als Overengineering
identifiziert hast, wollen wir nicht umsetzen. Wenn du alle diese Informationen
korrekt hast, dann erzeuge einen Implementierungsplan mit Milestones, wobei jeder
Milestone mit einem testbaren Produkt verbunden ist.
```

Die Absicht ist, dem LLM konkrete Milestones vorzugeben, die sich selbständig überprüfen lassen. Wahrscheinlich würde das auch von selbst passieren, doch je präziser die Vorgabe, desto besser. Man könnte an dieser Stelle deutlich stärker in den Implementierungsplan hineinarbeiten, mit konkreten Vorgaben und Überlegungen dazu, wie sich die Milestones testen lassen.

**Ergebnis [13:10].** Die Dokumente sind vereinfacht, mit einer Zusammenfassung der Änderungen. Der Umfang wurde heruntergestuft; vorgesehen sind jetzt nur Line Charts und Bar Charts. Das ist in der Promptotyping-Iteration 1 vollkommen in Ordnung. Zuerst entsteht die erste Variation, und das Wissen, das dann im Ordner liegt, lässt sich nachnutzen.

## Schritt 8, Journal statt Commit [13:34]

Läge ein GitHub-Repository vor, würde der Sprecher an dieser Stelle committen. Ohne Repository tritt das Journal an diese Stelle.

```
Lege ein journal.md an im knowledge-Ordner, das alles, was wir bis jetzt
gearbeitet haben, sehr kompakt in eine Art Arbeitstagebuch zusammenführt.
```

Die Dokumentation von Anfang an mitzudenken ist sinnvoll, weil sie in der nächsten Promptotyping-Iteration verhindert, dass bestimmte Fehler wiederholt werden, und weil sich andere Möglichkeitsräume ausschöpfen lassen.

**Kontextfenster [14:28].** Das Kontextfenster ist voll, Claude Code führt von sich aus eine Kontext-Kompression durch. Der Inhalt des Kontextfensters wird zusammengefasst und destilliert, und der komprimierte Kontext wird an die weitere Session übergeben.

**Ergebnis [14:54].** Das `journal.md` liegt vor und wäre bei Bedarf zu korrigieren. Es hält die Datenanalyse fest, 77 Excel-Files mit bestimmten Erkenntnissen, deren Ergebnis in `data.md` gespeichert ist, dann die Dashboard-Planung, die kritische Überprüfung und die Vereinfachung, also genau die durchgeführten Schritte. Der Sprecher hält fest, wie gut Claude Opus 4.5 auf dieser Metaebene arbeitet.

**Zwischenüberlegung [15:28].** Ob `consistency-matrix.md` und `implementation-plan.md` wirklich nötig sind, lässt der Sprecher offen; er würde sie eher wieder entfernen. Vorerst braucht Claude diese Information, um das destillierte Wissen in die Markdown-Dokumente auszulagern, und man würde es bei Bedarf später wieder in die anderen Dokumente hineinsynthetisieren. Die Wissensbasis ist ein lebendes Dokument.

## Schritt 9, Compact und Beginn der Implementierung [15:52]

Der Sprecher aktiviert bewusst die Compact-Funktion, um das gesamte Kontextfenster zusammenzufassen, und geht dann in die Umsetzung des Implementierungsplans, der aus acht Milestones besteht. Die Zusammenfassung des bisherigen Verlaufs wird sicherheitshalber abgespeichert. [unverständlich: Ort der Sicherung]

Die erste Phase der Implementierung besteht darin, die Daten aus den Excel-Dokumenten zu aggregieren. Claude liest dafür `architecture.md` und `data.md` und hat zusätzlich die bestehenden Analyseskripte sowie das `scripts.md` als Kontextinformation zum Nachschauen. Damit zahlen sich die Dokumentationsüberlegungen für spätere Arbeitsschritte der AI Agents aus. Je besser destilliert und kompakter das Material, desto besser arbeiten die LLMs.

## Schritt 10, nachgeholte Exploration [17:21]

Claude schreibt zunächst keine Skripte, um die sehr zahlreichen Excel-Spreadsheets durchzugehen. Der Sprecher greift mitten im Lauf ein.

```
Dokumentiere das mal im data.md und update es.
```

Die Explorationsphase war offenbar nicht ausgiebig genug. Je besser die Vorbereitung, desto besser funktionieren alle späteren Schritte. Der explizite Auftrag lautet, `data.md` zu aktualisieren und das neue Wissen wieder einzuarbeiten.

**Fortsetzung [18:14].** Der Lauf bleibt stehen, der Sprecher schreibt `continue`, um die nächsten Schritte auszulösen; Claude fährt mit Milestone 2 fort. Beim Stehenbleiben nennt er zwei Strategien. `continue` heißt, im begonnenen Prozedere weiterzumachen, das dem Plan folgt. Die andere Möglichkeit wäre, den Plan aktualisieren zu lassen.

## Schritt 11, erste HTML-Ansicht [18:45]

Claude erzeugt `index.html`. Der Vorteil dieser Darstellung ist, dass die Daten korrekt verarbeitet und im Browser angezeigt werden müssen. Für Expertinnen und Experten ist das eine leichtere Art, die Daten zu verifizieren, als die erzeugten aggregierten Daten direkt nachzukontrollieren.

**Ergebnis [19:18].** Die erste HTML-Ansicht liegt vor und lässt sich in einem Live Server öffnen. Sichtbar ist ein Dashboard für die Universitäten mit Rankings, zwischen denen sich umschalten lässt, dazu ein Bereich Personalabschlüsse. Damit steht die erste Promptotyping-Ansicht.

**Browser-Konsole [19:52].** Die Konsole liefert das Feedback des Browsers. Sie zeigt einige interessante Punkte, darunter einen echten Fehler, den der Sprecher als Kleinigkeit einstuft. Je nachdem, ob Fehler auftreten, lässt sich die Information aus der Konsole an das LLM zurückspielen.

## Schritt 12, Screenshots als Rückkanal [20:22]

Der Sprecher erzeugt mit dem Snipping Tool Screenshots des Zustands, unter anderem vom Personal-Tab, wobei er zuvor die Filter bewegt und andere Elemente anklickt, um mehr Information sichtbar zu machen. Die Bilder werden in den Prompt gegeben.

```
Hier sind drei Screenshots. Analysiere alles Schritt für Schritt. Haben wir alles
erfolgreich umgesetzt? Was sind weitere Schritte?
```

Wesentlich ist der Grund für diesen Rückkanal. Das System sieht die Bilder nicht und sieht auch die Webseite nie. Zugang zur Konsole könnte es haben, wenn ein Live Server aktiviert ist, was an dieser Stelle vermutlich noch nicht geschehen ist. Die Screenshots sind damit neue Information für Claude Code. Claude analysiert die einzelnen Screenshots, den Abschlüsse-Tab, den Personal-Tab mit Filter und den Studierenden-Tab mit Filter.

**Grenze der Verifikation [22:01].** An dieser Stelle wäre wieder der Critical Expert in the Loop gefragt, der prüft, ob das Gezeigte tatsächlich richtig ist. Genau darin liegt die Herausforderung. Was in der Analyse steht, ist halluziniert und könnte durchaus richtig sein, wahrscheinlich ist es das auch, und es wurde einmal verifizieren lassen. Das Problem bleibt bestehen.

Claude nennt als nächste Schritte einen Bug und Verbesserungen der User Experience.

```
Fahre fort im Implementierungsplan.
```

Innerhalb der großen Promptotyping-Iteration lassen sich die Dinge auf diese Weise ausarbeiten, wobei eigene Meinungen hinzukommen.

## Schritt 13, UI-Fehler präzise adressieren [23:10]

Ein erneuter Blick in die Konsole zeigt keine Fehler mehr; der vorherige Fehler beim Filtern ist behoben. Verblieben ist ein User-Interface-Fehler bei einem Range-Element, bei dem etwas nicht vollständig angezeigt wird. Solche Fälle muss man sehr konkret adressieren. Der Sprecher benennt das Element über seine ID, weil die ID auch für Claude ein Identifier ist, über den sich das Element auffinden lässt. Sauberer wäre es, sie mit Hash zu übergeben, was HTML-spezifisches Wissen voraussetzt; auch der Expert Developer muss in the Loop sein.

Er beschreibt zusätzlich das Problem und markiert den betroffenen Bereich in einem Screenshot.

```
Was ist das Problem?
```

Über den Identifier und den Screenshot zusammen sollte sich der Fehler beheben lassen. [unverständlich: eine Bemerkung zum Range-Element und zum Layout]

**Einordnung [25:03].** Das ist kein Vibe Coding mehr, sondern bereits [unverständlich: vermutlich eine Bezeichnung für AI-gestützte Entwicklung]. Es wird schwieriger, wenn die Grundlagen fehlen. Die Lage ist ambivalent, weil sich sehr viel machen lässt, ohne viel über Webentwicklung und Programmieren zu wissen. Vibe Coding ist relevant und interessant, hat aber Limitierungen, und je mehr Domänenwissen vorhanden ist, desto besser funktioniert es. Die gezeigten Tipps und Kniffe lassen sich in relativ kurzer Zeit vermitteln. Der Sprecher hält es für machbar, innerhalb eines Semesters Leute auszubilden, die informiertes Vibe Coding betreiben können und eine ausreichende AI Coding Literacy für die Arbeit mit diesen Systemen haben, und hält das für dringend angezeigt.

**Ergebnis [26:08].** Der Bug ist repariert. Der Live Server aktualisiert die Ansicht bei jeder Änderung automatisch.

## Schritt 14, Durchklicken als Test [26:21]

Die Auswahl passt sich an, Filter lassen sich zurücksetzen, ein Zeitbereich ist wählbar. Der Sprecher wählt die Grazer Universitäten aus, darunter die Uni Graz, die TU Graz und die Musikuniversität, und erhält eine Übersicht über die Anzahl der Studierenden im Wintersemester 2024. Dabei fällt auf, dass die Anzeige nicht ganz zum eingestellten Zeitraum passt; der Filter zeigt offenbar durchgehend die Gesamtsumme. So klickt man sich durch das Interface, bildet sich eine Meinung und iteriert gemeinsam mit Claude, bis ein tragfähiger Stand erreicht ist.

```
Analysiere diesen Screenshot Schritt für Schritt. Ist hier alles korrekt? Sei
konstruktiv.
```

## Schritt 15, Design-Experiment Dune [27:43]

Zum Abschluss ein Experiment mit einem anderen Design und Theme, angelehnt an das Science-Fiction-Universum Dune.

```
Analysiere das Design und das User Interface. Ich möchte es im Stil von Frank
Herberts Dune haben. Wie können wir das User Interface dahingehend verbessern?
Nicht nur auf einer ästhetischen, künstlerischen Ebene, sondern auch in der
Interaktivität und im User Interface.
```

Der Sprecher ordnet das als unprofessionellen Schritt ein, der aber zeigt, dass sich mit solchen Interfaces radikal andere Dinge ausprobieren lassen. Es entstehen möglicherweise UI-Elemente und Designs, an die man noch gar nicht gedacht hat. Der Möglichkeitsraum wird erweitert, um aus der Promptotyping-Iteration 1 etwas zu lernen, das sich in der nächsten Phase umsetzen lässt. Mit `continue` läuft die Umsetzung weiter, das Dune-CSS wird vorbereitet.

**Ergebnis [29:12].** Das Interface sieht nach Einschätzung des Sprechers eindrucksvoll aus; mit einem einzigen Prompt entsteht ein ausgefallenes Science-Fiction-Interface. Claude Code schreibt im Hintergrund weiter Code, weshalb die Seite über den Live Server laufend neu geladen wird. Ob das Ganze sinnvoll ist, lässt der Sprecher offen. Um genau das geht es im Promptotyping, den Möglichkeitsraum zu explorieren. Ob es tatsächlich nach Dune aussieht, kann er nicht beurteilen, orange und blau als Spice-Anklang sind jedenfalls da.

## Schritt 16, Wissensdokumente aktualisieren [29:54]

Während Claude noch am CSS arbeitet, folgt der nächste Auftrag.

```
Analysiere alle Markdown-Dokumente. Sind die wirklich up to date? Wo müssen wir
diese Markdown-Dokumente anpassen? Ist journal.md up to date und haben wir dort
alle Sessions dokumentiert? Und gibt es ein README, das das gesamte Projekt
dokumentiert? Gib das README.md in das Root, also auf die oberste Ebene von
diesem Ordner.
```

Solche Befehle lassen sich auch mitten im Lauf einwerfen. Sobald alles fertig ist, geht Claude durch alle Markdown-Dokumente und bringt sie auf Stand, sodass das erarbeitete Wissen in diesen Dokumenten liegt. Claude pausiert die laufende Aufgabe und beginnt mit der Dokumentation; anschließend schlägt es Aktionen vor, unter anderem das Aktualisieren der Sessions.

## Zusammenfassung durch den Sprecher [31:43]

Der erste Schritt war, die große Liste an Excel-Dokumenten zu explorieren, sodass Claude das `data.md` erzeugt. Dafür war faktisch eine zweite Iteration nötig, weil es so viele Dokumente waren. Danach wurden `architecture.md`, `user-interface.md` und `user-stories.md` aus einem kurzen Prompt abgeleitet, ebenfalls mit einer zweiten Iteration, um das Projekt in einen Zustand zu bringen, der nicht overengineert ist. Der Grundsatz lautet, bei der ersten Variation klein anzufangen. Anschließend entstand der Implementierungsplan, und die Milestones wurden nacheinander umgesetzt; im Video sind es die ersten drei bis vier.

Die Ergebnisse lassen sich über Screenshots und die Browser-Konsole verifizieren. Möglich wären auch Tests und eine Überlegung, wie sich das Softwareprodukt vollständig durchtesten lässt. Das Durchklicken durch die Seite ist ebenfalls eine Art des Testens. Dabei lernt man etwas über das Projekt, über die Daten und über die eigenen Anforderungen, und dieses Wissen wird in die Wissensdokumente zurückgespielt. Sichtbar wird das an der Änderung, bei der die CSS Custom Properties überarbeitet und um die hinzugefügten Dune-Themes erweitert wurden.

**README [33:21].** Zum Schluss entsteht das finale README. Ein Dokument, in dem alle Informationen zum Projekt zusammengefasst sind, gilt als Best Practice. Es beschreibt hier ein interaktives Dashboard zur Visualisierung österreichischer Universitätsdaten mit einem Dune-inspirierten Dark Theme. Angaben wie die behauptete MIT-Lizenz sind halluziniert und lassen sich einfach löschen.

Damit endet der zweite Teil.
