---
title: Promptotyping Introduction Video Script
project:
  name: Promptotyping
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
status: draft
language: de
created: "2026-07-25"
updated: "2026-07-25"
source:
  title: "Einführung in Promptotyping, Teil 1"
  url: https://youtu.be/8sUe4Jkh3uQ
  recorded: Jänner 2026
generated: transcript-cleanup
---

# Promptotyping Introduction Video Script

Dieses Dokument ist die lesbare Fassung des gesprochenen Vortrags aus dem Video „Einführung in Promptotyping, Teil 1". Grundlage ist das automatisch erzeugte YouTube-Transkript, aus dem die Zeitstempel-Artefakte entfernt, die Fehler der Spracherkennung korrigiert und die gesprochene Sprache zu Prosa geglättet wurden. Der Inhalt folgt dem Verlauf des Vortrags, einschließlich der Einschränkungen und Zweifel, die der Sprecher formuliert. Die Zeitmarke hinter jeder Überschrift verweist auf die Videostelle, an der der Abschnitt beginnt.

## Einstieg und Untertitel [00:00]

Dieses Video ist eine Einführung in Promptotyping, eine Context-Engineering-Methode, eine Arbeitsweise. Ob es wirklich eine Methode ist, weiß ich nicht, zumindest ist es eine Arbeitsweise, wie man mit Frontier Large Language Models von Forschungsdaten oder irgendwelchen Daten, und Daten ist sehr weit gedacht, zu Interfaces kommt, zu Forschungsartefakten oder eben nur zu Artefakten, Webinterfaces, Tools, Software, was auch immer das ist. Entwickelt ist das aus einem Forschungskontext, man kann es aber sehr wohl auch für ganz viele andere Bereiche verwenden.

Der Untertitel ist bewusst so gewählt, denn es müssen irgendwie Daten dabei sein, weil wir immer Programmcode erzeugen wollen. Frontier Large Language Models deswegen, weil diese nicht nur sehr gut im Programmieren sind, oder Programmieren ist vielleicht nicht ganz richtig, im Erzeugen von Code, der ausführbar ist. Das ist etwas anderes als Softwareentwicklung oder Programmieren. Sie bringen außerdem ein sehr großes und breites Wissen mit, um in unterschiedlichen Domänen zu arbeiten. Daher der Untertitel, von Forschungsdaten zu Interfaces mit Frontier LLMs, und eigentlich müsste man noch plus minus andere Bereiche hier hineinbeziehen.

## Ziele des Videos [01:41]

Wir wollen Promptotyping kennenlernen, um unterschiedliche Forschungswerkzeuge und Tools zu erzeugen, auch Modelle könnte man erzeugen, Ontologien, was auch immer. Es geht also in die Breite. Die Methode besteht aus unterschiedlichen Phasen. Es gibt eine Preparation-Phase, eine Exploration, eine Destillation und eine Implementation-Phase. Die soll man benennen und erklären können. Das ist sozusagen ein Lernziel, was ein bisschen oberlehrerhaft klingt, wie ich gerade merke. Wichtig ist, dass man weiß, was ich mir bei diesem Promptotyping gedacht habe, als ich es in den letzten eineinhalb Jahren plus minus entwickelt habe.

Wir wollen aus den vorhandenen Daten und Kontexten sogenannte Promptotyping Documents erzeugen, also Markdown-Dokumente, in denen Wissen destilliert wird, das dann dem LLM zur Verfügung gestellt werden kann, und wir wollen wissen, welche Best Practices und Tipps es dabei gibt.

Das Ganze kann man in einem Blogbeitrag nachlesen, den ich Mitte Jänner veröffentlichen durfte und in dem ich versucht habe, diesen Prozess zu beschreiben und ihn aus meiner persönlichen Perspektive heraus zu kontextualisieren.

## Mini-Demo, Ausgangsdaten [03:16]

Einsteigen möchte ich mit einem Mini-Demo, um die grundlegende Herangehensweise zu diskutieren. Das ist noch nicht Promptotyping, so wie ich es mir vorstelle. Es soll einmal zeigen, dass man Daten von einem LLM explorieren lassen kann, in diesem Fall Excel-Dokumente, um dann irgendwelche Analysen zu tätigen. Ich verwende dabei Claude Opus 4.5, das hier Ende Jänner eines der besten LLMs für diesen Task ist, aus meiner Sicht das beste. Das ist allerdings relativ komplex, so eindeutig zu bezeichnen.

Ich habe mir offene, freie Daten aus der Verwaltung von Universitäten geschnappt, Hochschulstatistiken zu Personal, Studienanfängern, Studien, Wissensbilanzen und dergleichen, im Excel-Format. Es sind eigentlich gar nicht so schöne Excel-Dokumente, denn die eigentlichen Daten der Spalten beginnen erst in Zeile 21, darüber stehen weitere Metadaten. Als jemand, der sehr viel im Bereich von Forschungsdaten arbeitet, würde ich sagen, es ist nicht sehr optimal, wie diese Daten zur Verfügung gestellt werden. Das könnte man wahrscheinlich relativ einfach besser machen, wir werden sie trotzdem verwenden. Ich habe mir drei Excel-Files geschnappt.

LLMs und vor allem Claude, wahrscheinlich auch die anderen, vor allem aber Opus 4.5, sind wirklich gut in der Aufgabe, mit Excel-Dokumenten umzugehen, Python-Code zu schreiben, Daten zu extrahieren und weiterzuverarbeiten.

## Der erste Prompt, Erzeugung eines data.md [05:25]

Wir werden diese Excel-Dokumente in Claude Opus 4.5 hochladen. Wir dürfen sie hochladen, es sind offene Daten, da spricht, glaube ich, nichts dagegen. Wir verwenden einen einfachen Prompt, der besagt, dass diese drei Excel-Dateien analysiert werden sollen. Dann gebe ich ein bisschen Kontext dazu und sage, das sind österreichische Wissensbilanzen. Wir sehen schon, wir bewegen uns immer in einem Feld zwischen den Daten auf der einen Seite und unterschiedlichen Kontexten und Präzisierungen auf der anderen, wie man mit den Daten arbeiten soll. Und dann sage ich:

```
erzeuge ein data.md
```

Wir sagen also nicht, bau gleich die Analyse, sondern wir gehen einen Schritt vorher in eine Art Vorbereitung. Wir lassen uns die Daten anschauen. Welche Spalten gibt es dort? Wie sind Spalten vielleicht miteinander verknüpfbar? Dieses Wissen über die Struktur der Daten, über die Spalten und die Definitionen wollen wir in ein `data.md` destillieren, also in ein Markdown-Dokument. Das funktioniert deutlich besser, als wenn wir die Analyse gleich machen würden; warum das besser ist, dazu kommen wir später. Es ist eine Art Reasoning über die Daten, indem man sie einmal verdichtet und zusammenführt.

Den Prompt habe ich vorbereitet, ich kopiere ihn nach Claude hinein und lade die Excel-Dokumente hoch.

## Excel oder CSV, Kontextkosten des Dateiformats [07:04]

Man muss berücksichtigen, dass es noch besser wäre, wenn die Informationen, die ich vorher als Metadaten bezeichnet habe, also Definition, Datenquelle und so weiter, ohnehin separat vorlägen und wir gleich ein CSV verwenden würden, also Comma-Separated Values, um diese tabellarische Information zu repräsentieren. Ein Excel-Dokument im Format `.xlsx` ist ein ziemlich großes Dateiformat. Da ist ziemlich viel XML im Hintergrund, und dieses XML braucht ziemlich viel Platz im Context Window eines LLM. Man könnte hier also schon etwas verbessern, indem man mit CSV arbeitet. Wichtig ist aber, dass CSV nicht alles abdeckt, was ich mit Excel abdecken kann. Wenn ich irgendwo eine Formel eintrage, die ich in einem späteren Excel-Dokument nutzen möchte, kann ich das in einem CSV nicht tun.

## Wie Claude die Exploration abarbeitet [08:04]

Wir laden die Excel-Dokumente mit dem Prompt hoch und beauftragen Claude damit, diese Extraktion, Analyse und Exploration durchzuführen.

LLMs sind mit Stand Mitte, Ende Jänner viel mehr agentische Systeme. Wir sehen, dass Claude sich die Arbeit selbst in Arbeitsschritte zerlegt, wobei wir die Schritte ja auch vorgegeben haben. Der erste Schritt ist, sich einen Überblick über die Daten zu verschaffen. Claude schreibt die Pfade auf, wo diese Files liegen. Claude hat in diesem Fall eine eigene Umgebung, ein Environment, würde man als fachlichen Begriff sagen, wo es Dokumente ablegen und wieder aufrufen kann. Es ist also nicht mehr nur ein LLM, sondern ein umfangreicheres System, das über Tool Use unterschiedliche Werkzeuge verwenden kann, um Aufgaben durchzuführen.

Wir sehen, dass es dann einen Skill liest. Eine `SKILL.md` ist eine Art und Weise, wie man methodisches Wissen oder Arbeitswissen einem Agenten zur Verfügung stellen kann. Es gibt schon vorgefertigte Skill-Files, auf die Claude zugreifen kann, und man kann sie auch eigens anpassen und customizen. Da gibt es ein Regelwerk, wie man mit umfangreicheren Excel-Dateien umgeht, also das Lesen von XLSX-Dateien zur optimalen Verarbeitung.

Dann werden die Excel-Dateien analysiert. Claude schreibt eigenen Programmcode, um sich einen Überblick zu verschaffen, und gibt einmal Daten aus. Es iteriert über die Daten, geht in jede Spalte hinein und exploriert sie aus unterschiedlichen Perspektiven und Zeiträumen, versucht Hierarchien zu analysieren, prüft Metadaten und Code-Semantik. Und dann kommt eine finale Zusammenfassung der Struktur.

Das ist schon etwas sehr Interessantes, dass man mehrere Excel-Dokumente hochladen kann, mit einem relativ konkreten Prompt beauftragt, was zu tun ist, und Claude dann relativ selbständig diese Tätigkeit abarbeitet. Jetzt wird das `data.md` erzeugt. Der Gedanke ist, dass alle diese Arbeitsschritte natürlich in ein Ergebnis münden, in die Zusammenfassung, ein Wissensdokument über alle diese Ergebnisse.

Dieses `data.md` speichern wir auf die Seite, weil wir es später wieder verwenden können. Dann brauchen wir den Schritt, den wir gerade gemacht haben, also die Frage, wie diese Excel-Dokumente miteinander verbunden sind, nicht noch einmal zu machen, weil wir das im `data.md` abgespeichert haben.

## Verdichtung des data.md [11:22]

Auf der nächsten Folie habe ich das vorbereitet. Rechts sieht man dieses `data.md`. Solche Files können immer anders aussehen. Erstens sind die Systeme nicht deterministisch, das bedeutet, es kommt de facto immer ein anderer Text heraus. In der Information könnte er aber sehr ähnlich sein, mal ein bisschen besser, mal ein bisschen schlechter. Diese LLMs sind eben so, wie sie sind. Hier habe ich ein `data.md` kompakter gemacht. Wie habe ich das getan? Ich könnte Folgendes tun:

```
Können wir dieselbe Information kompakter darstellen, ohne Information zu verlieren?
Liste, begründe.
Z.B. gibt es Redundanzen, Streichkandidaten.
```

Das wäre ein Prompt, um klar zu beauftragen. Wir haben gerade dieses `data.md` erzeugt, aber können wir die gleiche Information mit weniger Tokens, also mit weniger Wörtern beschreiben? Ich könnte einfach sagen, mach es kompakter, mach es kürzer, mach es präziser, wie auch immer. Gescheiter ist es, ein bisschen Reasoning in die Aufgabe zu legen, wie können wir das kompakter machen, ohne Information zu verlieren. Und dann kann ich sagen:

```
erzeuge das verbesserte data.md
```

Es wurden mir jetzt zwei unterschiedliche Varianten angeboten, die ich wählen könnte. So ein noch stärker verdichtetes `data.md` sehen wir hier auf der rechten Seite. Da haben wir Information zum ersten Excel-Dokument mit den Kennzahlen, Personal, dem Zeitraum, zum Beispiel, dass es nur fünf Universitäten sind, und Information zu den Spalten. Genau diese Information zu den Spalten ist super wichtig, wenn ich sie mir vorher schon vorbereiten kann.

Claude hat also mehrere Arbeitsschritte durchgeführt, Daten analysiert, Wissen in einem `data.md` zusammengebracht, und wir haben das noch einmal ganz bewusst verdichten lassen, damit wir weniger Tokens haben. Je weniger Text man in einem Context Window hat, desto besser funktioniert alles.

## Expert in the Loop beim Gegenlesen [14:01]

Der Gedanke ist auch, dass ich mir das jederzeit woanders hinkopieren könnte, ich nehme jetzt schnell ein Google Docs. Man kann auch „aus Markdown einfügen" klicken, dann habe ich gleich die Struktur dabei, dann ist es besser lesbar, und ich könnte händisch Dinge noch einmal korrigieren.

Erstens kann ich es durchlesen und sehen, worum es geht. Natürlich muss ich das gegen die echten Excel-Dokumente gegenchecken. Und ihr könnt jederzeit Dinge wegstreichen oder adaptieren. Diese Überlegung eines Expert in the Loop ist etwas, was in diesem Kontext sehr wichtig ist, jemand, der weiß, worum es geht, der Dinge verifizieren und bestätigen, kuratieren und anpassen kann.

## Frisches Context Window für die eigentliche Analyse [14:52]

Jetzt legen wir diese Konversation beiseite. Wir wollen für jede Aufgabe möglichst ein frisches Context Window haben. Ich habe als Beispiel zwei Prompts vorbereitet, um jetzt die eigentliche Analyse durchzuführen.

Den einen habe ich einen naiven Prompt genannt, einfach eine Frage, die man mit den Daten bearbeiten kann. Die Forschungsfrage habe ich übrigens vorher auch mit Claude entwickelt. Das könnte zum Beispiel eine Forschungsfrage sein, die im Bezug zu diesen Dokumenten steht. Und ich habe einen gemacht, in dem diese Dinge expliziter sind, wo sie feiner benannt sind, wo schon von sehr konkreten Dingen die Rede ist, dass es ein `index.html` geben soll mit CSS und JavaScript, dass es ein JSON-Objekt geben soll, dass Chart.js verwendet werden soll. Zeigen möchte ich, dass man die Forschungsfrage einfach hineinschmeißen kann und dann irgendwo in einem LLM irgendetwas passiert, oder ich überlege mir, ob ich den ganzen Prozess, wie ich diese Daten verarbeiten möchte, was ich am Schluss haben möchte und welche Ziele ich erreichen möchte, nicht auch konkreter vorgeben kann. Wir werden später oder in einem anderen Video sehen, dass es wichtig ist, diese Anforderungen sehr ausführlich zu beschreiben, um komplexere Projekte umzusetzen. In diesem Fall ist es wirklich etwas Leichtes, da wird auch der naive Prompt funktionieren.

Ich nehme den umfangreicheren Prompt, gebe ihn hinein, lade wieder die Excel-Dokumente hoch, und ich habe hier das `data.md` schon vorbereitet. Was ich mir damit spare, ist die Logik der Daten zu explorieren, das ist schon erledigt. Dieses Wissen ist in `data.md` gespeichert und kann ich jetzt öfter in unterschiedlichen Iterationen wieder verwenden.

## Naiver und ausführlicher Prompt im Vergleich [17:09]

Das dauert jetzt ein bisschen länger, deswegen springe ich in die Folien zurück, wo ich den naiven Prompt und den besseren Prompt gegenübergestellt habe. Wir sehen bei diesem kleinen Demo ein paar Unterschiede. Der komplexere Prompt rechts schaut ein bisschen schöner aus im Design und hat die Frage noch einmal als Untertitel beschrieben. Das ist aus meiner Sicht gehaltvoller. Wir sehen auch eine Kategorisierung der Universitäten in Volluniversitäten wie die Universität Wien und die Universität Innsbruck, die BOKU als Spezialuniversität, ich glaube, das ist in den Daten als technische geführt, und dann die Kunstuniversität, also die Angewandte in Wien. Auf der X-Achse haben wir die Abschlüsse pro Professor oder Professorin und dann die Universität. Es ist ein sehr simples Beispiel.

Es gibt keinen Automatismus, dass der naive Prompt nicht zu einem besseren Ergebnis führt als ein sehr ausgeklügelter Prompt, denn man kann mit jedem ausgeklügelten Prompt auch etwas ausdrücken, was nicht so gut funktioniert. Wir müssen ein bisschen damit leben, dass LLMs eben so funktionieren, wie sie funktionieren. Es ist immer wichtig, Dinge auszuprobieren und zu explorieren. Es ist einfach nicht pauschal zu sagen, ein kurzer, naiver Prompt funktioniert immer besser oder schlechter. Tendenziell gilt, vor allem wenn die Komplexität größer ist und ich kontrolliertere Ergebnisse haben will, weil ich mir schon Sachen gedacht habe, die ich haben möchte, oder weil man bestimmte Methoden einfach so anwendet, wie man sie anwendet. Denkt man daran, wie man Werte statistisch verarbeitet, dann kann man dieses methodische Wissen, wie man die Statistik betreibt, dem LLM zur Verfügung stellen. Es gibt unterschiedliche Zugänge. Der naive ist explorativ, wie geht etwas überhaupt, und auch schneller, und beim anderen kann ich viel mehr Zeit investieren, um zu überlegen, welchen Weg ich vorgeben möchte.

Interessanterweise ist es sogar auf der linken Seite besser, dass die Vollzeitäquivalente links unten angezeigt werden. Das ist eine relativ wichtige Zusatzinformation für die Achse. Sie steht aber ohnehin auch rechts dabei. Das nur für diese zwei Beispiele.

## Das Ergebnis der Implementation [19:52]

Schauen wir, was Claude jetzt erzeugt hat. Wir sehen wieder, dass Claude mehrere Arbeitsschritte durchgeführt hat, und in diesem Fall das `index.html` auf der rechten Seite in den sogenannten Artifacts, so nennt sich diese Umgebung, wo wir das HTML-Dokument sehen. Da ist das JavaScript, das CSS und die ganze Logik und die Struktur als Code repräsentiert, den Claude gerade geschrieben hat, und dann kann ich mir das auch anzeigen lassen. Das ist sehr ähnlich wie das, was wir vorher gehabt haben, so ähnlich wie diese Version hier rechts, nur die Unis sind umgedreht, und auch die Kategorisierung ist nicht einheitlich.

Wir sehen, das Ergebnis ist schon einmal anders. Das ist ein Nachteil, wenn es um Reproduzierbarkeit geht. Es ist vielleicht ein Vorteil, wenn man Möglichkeitsräume explorieren möchte, also was kann ich mit meinen Daten überhaupt tun.

## Vom Mini-Demo zu Promptotyping [21:07]

Das wäre ein ganz einfaches Beispiel, ein sehr direkter Zugang, wie man das umsetzen könnte. Man kann genau diesen Prozess aber professionalisieren, besser beschreiben, komplexer machen, vor allem wenn es komplexere Aufgaben sind. Wie gesagt, ich komme aus einer Forschungsrichtung. Wenn ich Forschungsdaten habe wie diese Excel-Dokumente oder ganz andere Daten, große Datenmengen, unterschiedliche variable Datenmengen, und ich habe unterschiedliche Forschungsexpertise, ich bin Experte in einer bestimmten Domäne, ich habe also Domänenwissen, dann kann ich diese Daten und dieses Wissen und meine Forschungsfragen, die ich hier beispielhaft als Forschungsfrage platziert habe, zusammen mit Frontier Large Language Models bearbeiten lassen.

Das Ganze geht besser, wenn ich im Context Engineering, also in der Zurverfügungstellung von Informationen für die LLMs, viel kontrollierter arbeite. Das hat nicht nur den Vorteil, dass die Ergebnisse besser sind, es ist gleichzeitig auch ein Prozess, um das, was man tut, zu dokumentieren und zu beschreiben.

Daraus entstehen unterschiedliche Research Artifacts, also irgendwelche Ergebnisse. Das können genauso Datenmodelle sein, Workflows, vielleicht auch eine Publikation, das weiß ich nicht hundertprozentig, weil das eine Methode ist, die ich gerade entwickle. Wir fokussieren uns jetzt auf kleine webbasierte Tools, die wir im Browser starten können. Das wäre ein Forschungsartefakt, mit dem ich mich am meisten beschäftigt habe.

Forschungsdaten plus Forschungskontexte werden von LLMs unter Context-Engineering-Techniken und Überlegungen, und das `data.md` ist eine solche Technik, dass wir destillieren, in etwas überführt, in etwas gemappt, und das ist Promptotyping.

## Die vier Phasen [23:21]

Promptotyping besteht aus vier Phasen, die ich soweit einmal identifiziert habe. Vielleicht ändert sich das auch noch.

Es gibt die Preparation-Phase, in der wir die Daten sammeln, alle meine Excel-Dokumente, und in der ich die Kontexte sammle, zum Beispiel für die Forschungsfrage, oder was möchte man erreichen, die Ziele. Das könnten auch sekundäre Informationen zu einer Problemstellung sein, Publikationen, methodisches Wissen, was auch immer. In der Preparation sammle ich alle Daten und alle Kontexte aus dieser Domäne.

Dann gibt es eine Exploration- und Mapping-Phase, in der man versucht zu überlegen, wie die Daten überhaupt zusammenpassen. Wenn ich kurz zurückspringe, dann habe ich in dem Prompt vorher einen Teil dieser Exploration schon drin, „analysiere diese drei Excel-Dokumente". Das ist der Explorationstask, und gib mir eine Übersicht, hier die gemeinsamen Schlüssel für Verknüpfungen. Das ist etwas, was ich mit dem LLM erarbeiten kann. Wie passen diese Excel-Dokumente eigentlich zusammen, damit ich sie dann programmatisch mit dem Python-Skript oder auf jede andere Art und Weise deterministisch verarbeiten kann?

Wir haben also sehr stark eine Perspektive, die mit Codeerzeugung zu tun hat, und wir wollen eigentlich immer Programmcode erzeugen, der die Daten verarbeitet. Wir nutzen LLMs, die Code generieren, um Daten zu verarbeiten, und wir lassen die LLMs die Daten nicht selbst verarbeiten. Warum? Weil der Code, der erzeugt wird, deterministisch ist. Das bedeutet, beim Python-Skript kommt immer das Gleiche heraus, und ich kann diesen Programmcode einfach reviewen und mir anschauen, oder anderen Leuten sagen, schaut euch bitte meinen Programmcode an, ist da alles richtig. Die Überprüfbarkeit ist dann gegeben. Das funktioniert aber natürlich nicht mit allen Problemstellungen. Es gibt komplexere, umfangreichere oder anders geartete Aufgabenstellungen.

Jedenfalls ist jedes Wissen über die Daten und die Forschungskontexte und darüber, wie die verwoben sind, etwas, das wir in den Markdown-Dokumenten destillieren wollen. Wir wollen das zusammenführen, komprimieren, synthetisieren, und die Faustregel ist maximale Information mit so wenig Tokens wie nur möglich, und so korrekt und richtig wie nur möglich. Der Expert in the Loop, die Expertinnen und Experten kuratieren auch dieses Wissen und diese Promptotyping Documents. Das sind natürlichsprachliche Texte, Listen, Tabellen, was sich eben anbietet, um die Daten, die Anforderungen oder die Forschung zu beschreiben. Es gibt kein Promptotyping Document, das vorgegeben ist, und es ist auch nicht vorgegeben, wie sie aussehen müssen, sie müssen einfach funktionieren. Das ist vielleicht nicht die beste Erklärung, aber wenn man einmal damit arbeitet, dann kommt man schon rein, dann sieht man das, glaube ich.

Die letzte Phase ist die Umsetzung. Wir nehmen die Daten und die Markdown-Dokumente und können dann diese Forschungsartefakte erzeugen, beispielsweise eine Webseite. Dabei ist wichtig, dass ich das öfter machen kann, weil die erste Webseite vielleicht nicht die beste Webseite ist. Ich kann sie aber wieder verwenden, etwas lernen und das zurückspielen, deswegen zeigt der Pfeil hier in beide Richtungen, in meine Markdown-Dokumente zum Beispiel. Aha, es ist doch wichtig, dass ich mir auch Gedanken über das Design mache. Ein Ergebnis der ersten Promptotyping-Iteration ist dann eine Art `design.md` oder ein `learnings.md` oder was auch immer, und das kann ich dann wieder in meine Promptotyping Documents zurückspielen. Hier gibt es also einen Fluss, eine Iteration.

Promptotyping ist aus meiner Sicht die extrem schnelle, forscherinnenzentrierte und forschungsdatengetriebene Erstellung von Prototypen für Forschungsartefakte, also Forschungstools, Workflows und Modelle, mittels Frontier Large Language Models wie Claude Opus 4.5 und einer oder vieler Prompt- und Context-Engineering-Techniken. Es ist sehr fließend.

## Context Window, Context Rot, Destillation [28:18]

Bevor wir zu einem konkreten Demo kommen, ein paar Begriffe, die mir in diesem Kontext sehr wichtig erscheinen, das Context Window, Context Rot und Destillation. Warum erzeugen wir diese Markdown-Dokumente?

Wichtig ist, dass LLMs ein Context Window haben, und es ist auf eine bestimmte Menge an Tokens limitiert. Claude Opus 4.5 hat beispielsweise 200.000 Tokens in diesem Arbeitsgedächtnis, in diesem Kurzzeitgedächtnis, und alles, was darüber hinausgeht, ist für das LLM nie erreichbar. Es gibt nur dieses Context Window und sonst nichts, und alle Mechanismen geben Information, Text oder Bilder oder bei anderen LLMs Videos, bei Claude sind es nur Text und Bild, in das Context Window hinein. Wenn es voll ist, dann ist es voll, und dann fällt das, was oben ist, wenn man das im Chat hat, das geht immer so runter, quasi hinaus.

Dann ist es noch ein bisschen komplexer, denn es gibt auch ein Phänomen, das Context Rot heißt. Das bedeutet, je voller das Context Window ist, desto schlechter werden die LLMs. Das war der Grund, warum wir vorher nur das `data.md` erzeugt und dann keine anderen Aufgaben mehr gemacht haben. Da waren schon viele Tokens drin, die erstens mit der weiteren Analyse vielleicht nur bedingt etwas zu tun haben, jedenfalls aber ist es voller. Für jede Aufgabe ein neues Fenster aufzumachen ist die bessere Strategie, und möglichst wenige Tokens darin zu haben, dann funktioniert es nachweislich besser.

Context Engineering sind genau diese Überlegungen, also wie muss ich etwas komprimieren, wann welche Information. Context Engineering ist aber auch breiter gedacht. Da sind Technologien wie Retrieval Augmented Generation dabei oder Model Context Protocol oder andere Techniken, wie man diesen Kontext organisieren kann. Beispielsweise hat bei Claude Code oder anderen Multi-Agenten-Systemen das System selbst eine Funktion, um das Context Window zu komprimieren. Context Compression ist generell eine Art und Weise, wie man mit solchen Dingen umgehen kann. Und Destillation, also diese Arbeitsphase im Promptotyping, heißt immer, wir wollen das zusammenbringen und gleichzeitig auch als Expert in the Loop bearbeiten.

## Critical Expert in the Loop und Sycophancy [31:00]

Dieser Expert in the Loop muss wirklich Experte oder Expertin sein, sich also in der Domäne sehr gut auskennen, um alle Fallstricke und Probleme zu erkennen, zu bearbeiten, Inhalte zu verifizieren und zu überprüfen. Der Human in the Loop, der oft genannt wird, ist für komplexere Aufgabenstellungen vielleicht gar nicht ausreichend. Wenn es komplexe statistische Analysen sind, dann muss man sich einfach in der Statistik auskennen, um beurteilen zu können, ob das gut oder schlecht ist. Oder in der Softwareentwicklung, in der Medizin oder in ganz vielen, in allen Domänen.

Auch hier kommt eine zusätzliche Komplexität hinzu. Die LLMs sind heute so, wie sie sind. Sie unterliegen beispielsweise dem Phänomen der Sycophancy. Das bedeutet, dass die LLMs Nutzerinnen und Nutzern tendenziell eher zustimmen, als ihnen zu widersprechen. Es wird mit jeder Modellgeneration besser, aber egal in welche Richtung man gerade arbeitet und ein LLM fragt, ist das alles super, funktioniert das, ist das alles korrekt, dann ist die Wahrscheinlichkeit höher, dass sie einem eher zustimmen, statt sinnvollerweise zu widersprechen. Es kann bestärkend sein in einem, ich sage einmal, positiven oder negativen Bereich. Ist das die richtige Methode, um das zu bearbeiten? Ja, die ist super. Oder man sagt, ich glaube nicht, dass das eine gute Methode ist, und das LLM sagt, ja, stimmt, du hast recht, das ist wirklich keine gute Methode, obwohl es vielleicht doch eine gute Methode gewesen wäre. Das ist ein Metaproblem, und deswegen muss man ein Critical Expert in the Loop sein. Man muss sich dieser Sycophancy der LLMs bewusst sein. Man kann sie übers Prompting steuern oder über andere Werkzeuge.

Das ist einfach Teil der Technologie, neben Halluzinationen und Bias, ich sage jetzt gar nicht Konfabulationen, also Halluzinationen, die man finden und beheben muss, wenn sie falsch sind, wenn sie das Context Window schlecht machen, wenn ich so sagen darf. Dazu kommt, dass man die ganze Reproduzierbarkeit, wir haben es vorher gesehen, so nicht hinbekommt. Die Systeme sind so, wie sie sind. Sie sind Blackboxes mit bestimmten Eigenschaften, die wir noch nicht wirklich verstanden haben, und je besser die LLMs werden, desto komplizierter wird es.

Ich habe hier versucht, mit Prüffragen zu skizzieren, ob man das reflektieren kann, denn nur weil man in der Methode irgendeinen Weg gefunden hat, um Daten zu verarbeiten, gibt es sicher ganz andere Wege, das zu bearbeiten. Man muss sich also immer wieder selbst in Frage stellen, also nicht nur den Output reflektieren und überprüfen, sondern den ganzen Prozess. Vielleicht macht es sogar Sinn, dass man nicht nur einen Critical Expert braucht, sondern Critical Experts im Plural, wo man wieder im Team mit Forscherinnen und Kollegen gemeinsam arbeitet und jemanden fragt, schau dir das bitte an. Also hier eher Wege finden, wie man mit diesen Komplexitäten umgehen sollte.

## Promptotyping Documents [34:33]

Der dritte Theorieteil sind diese Promptotyping Documents. Das sind Markdown-Dokumente. LLMs können sehr gut mit Markdown-Text umgehen. Markdown bringt mehr Struktur in die Dokumente hinein, deswegen verwenden wir es. Überschriften, Tabellen, Listen, nummerierte Listen haben alle Semantik, die das LLM auch nutzen kann. Sie funktionieren tendenziell ohnehin besser, wenn man strukturierte Inhalte hat.

Diese Promptotyping Documents sind etwas, das ich mir vorher schon überlegt hatte. Ich hatte zum Beispiel schon vor längerer Zeit, zu GPT-4-Zeiten, etwas wie ein Semantic Markdown, wo ich Wissen in ganz kompaktes Markdown gepresst habe. Und natürlich, weil es funktioniert, haben das auch ganz viele andere Leute entdeckt, würde ich sagen. Deswegen gibt es Dinge wie das `AGENTS.md`. Das ist ein Standard oder eine Empfehlung, wie man KI-Agenten wie Claude Opus 4.5 bestimmte Regeln und Arbeitsschritte zur Verfügung stellt. Da gibt es ein GitHub-Repository, an dem kann man sich orientieren, es ist mehr eine Empfehlung, wie sie strukturiert sein sollen. Und bei Claude, es ist sehr Anthropic, dieses Video, gibt es wieder einmal ganz bewusst ein `CLAUDE.md`, das man verwenden kann und auch verwenden sollte, um zu definieren, wie sich Claude in der Arbeit verhalten soll, wie Code geschrieben werden soll, wie Claude arbeiten soll, welche Coding Styles und Coding Guidelines einzuhalten sind oder alles andere. Man sieht hier jedenfalls, dass die Frage, wie die LLMs arbeiten sollen, auch in Markdown-Dokumenten organisiert wird. Die `SKILL.md`, die wir vorher gesehen haben, geht auch in diese Richtung.

Die Promptotyping Documents sind jetzt nicht nur Regeln, wie die KI-Agenten arbeiten sollen, sondern da wird das ganze Wissen zusammengeführt, über die Daten, das kann man ins `data.md` geben, darüber, wie dann dieses User Interface aussehen soll, was der Stil ist, das Feeling, was auch immer, das kann man in einem `design.md` festhalten, die Farben, die Schriften, die Abstände, der Freiraum beispielsweise [unverständlich]. Ein `implementation.md` wäre ein Dokument, in dem steht, wir verwenden diese Technologien, diese Workflows, diese Prozesse. Ein `journal.md` ist etwas, um den ganzen Prozess zu dokumentieren. Ich verwende das immer als ein Arbeitstagebuch, wo ich einen KI-Agenten dokumentieren lasse, was wir gerade in einer Session bearbeitet haben, einfach als Dokumentation, und dann kann man immer zurückschauen, wie sich das Projekt entwickelt hat, und auch dieses Wissen mitdokumentieren lassen. Ein Dokument also, das sehr lebendig ist. Aus meiner Sicht sind immer alle Promptotyping Documents lebendig in dem Sinn, dass immer etwas gelöscht, hinzugefügt und bearbeitet wird.

Ein `knowledge.md` ist vielleicht zu abstrakt, aber nur als Beispiel. Vielleicht gibt es irgendein Hintergrundwissen, vielleicht heißt es besser `context.md`. Wie auch immer, ein `requirements.md` ist etwas Wichtiges, wenn man Software schreibt. Da können zum Beispiel User Stories drin sein, Epics, spezifizierte Anforderungen, die ein bestimmtes System erfüllen kann. Oder anders gesagt, es gibt `whatever.md`, was gerade in ein Projekt passt. Das sind wirklich hoch anpassbare Dokumente, die je nach Domäne ganz unterschiedlich oder auch sehr ähnlich aussehen können.

Ich persönlich habe de facto immer ein `data.md`, ein `journal.md` und ein `implementation.md` oder `architecture.md` und etwas wie `requirements.md`. Das sind so die Kerndokumente. Für digitale Editionen gibt es beispielsweise ein `editorial-guidelines.md`, oder wenn man strukturierte Daten überführen möchte, ein `mapping.md`. Für bestimmte Teile einer Applikation, komplexere Datenvisualisierung, gibt es dann vielleicht ein eigenes Markdown-Dokument, weil da auch viel mehr Wissen hineingearbeitet werden muss.

## Zusammenfassung der Phasen [39:09]

Wir haben die Preparation-Phase, da werden die Materialien gesammelt, die Daten, die Quellen und die Kontexte darüber, welche Standards wir verwenden, welche Datenmodelle passen würden, welche Forschungsfragen oder Problemstellungen es gibt, was die Domäne und das Domänenwissen ist. Man könnte zum Beispiel überlegen, dass man zu einem Domänenexperten oder einer Domänenexpertin geht, ein Experteninterview führt, sich dieses Wissen nimmt und ein Transkript hat, und das Wissen aus diesem Transkript wandert dann in ein `expert-knowledge.md`. Es kann auch Sekundärliteratur sein.

Die Exploration- und Mapping-Phase versucht mit Hilfe des LLM, sich einen Überblick über die Daten zu verschaffen. Was sind die Spaltennamen? Wie schaut die Struktur eines XML-Dokuments aus? Wie schaut das Datenmodell aus? Wie schaut eine SQL-Datenbank aus? Welche Daten kann ich überhaupt algorithmisch verarbeiten, und wo habe ich nur freie Textfelder und brauche vielleicht andere Wege, um diese Information herauszuziehen? Es geht also um die Exploration der Daten und darum, wie die Daten mit meinen Problemstellungen verknüpft sind. Dieses Wissen wird dann in diese Wissensdokumente destilliert, `data.md`, `requirements.md`, `whatever.md`, und zwar mit möglichst maximaler Information bei minimalen Tokens, und mit Expert in the Loop. Da muss auch wirklich überprüft werden, dass da etwas Korrektes steht. Alles, was unscharf ist, was nicht konkret ist, kann später zu Problemen führen.

Und dann geht man mit diesen Promptotyping Documents und den Daten in die Implementierung und setzt wirklich Prototypen um, also funktionale Prototypen, die man dann sehr zügig umsetzen kann. Dabei kann man etwas lernen. Vielleicht passen die Daten gar nicht zur Problemstellung, und dann sieht man das, wenn man das Interface oder die Datenvisualisierung hat. Man kann beliebige Iterationen haben, und aus jeder Iteration ergibt sich neues Wissen, das sich dann wieder in den Promptotyping Documents ablegen lässt. Das ist der Prozess, in dem man aus meiner Sicht mehr über eine Problemstellung lernen kann. Und mit diesen schnellen Prototypen kann ich bei Kundinnen und Kunden oder Forschungspartnerinnen und -partnern schnell Feedback einholen und schneller verstehen, ob wir über die gleiche Sache sprechen oder nicht.

## Ausblick [42:03]

Das Live-Demo dazu werde ich in einem zweiten Video gesondert machen.
