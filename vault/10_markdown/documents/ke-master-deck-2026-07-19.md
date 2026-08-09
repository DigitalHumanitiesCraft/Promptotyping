---
type: representation
source-type: document
source: "[[_sources/ke-master-deck-2026-07-19.txt]]"
converter: "none (verbatim text export); partial extraction, only the LLM-characterisation slide plus title slide and learning goals are reproduced, all other slides elided as [...] lines without block IDs"
channel: handover
metadata:
  title: "Knowledge und Context Engineering für AI Agents"
  creator: "method author, Digital Humanities Craft"
  date: "2026-07-19"
  format: "text/plain (slide-text export of a working deck)"
  identifier: "unpublished working slide deck; no persistent identifier (local snapshot, DHCraft slide export, 2026-07-19)"
  license: "unpublished teaching material, all rights reserved by the author; no public license"
  confidential: false
created: 2026-07-19
updated: 2026-07-19
checked:
  validation: 2026-07-19
---

# Knowledge und Context Engineering für AI Agents

todo

Dr. Christopher Pollin MA MA
Digital Humanities Craft OGwww.dhcraft.org | office@dhcraft.org 
Slides were generated AI-assisted. Images are partly AI-generated.

Lernziele und Ablauf
Die Teilnehmenden überführen heterogene Daten- und Wissensquellen in eine Wissensbasis, die Menschen und AI Agents gleichermaßen lesen und nutzen können.
Die Teilnehmenden erweitern diese Wissensbasis zum Wissenssystem, indem sie Governance und Skills definieren, die das Agentenverhalten steuern.
Die Teilnehmenden setzen Workflows für und mit AI Agents um, von der Auftragsformulierung bis zur Prüfung der erzeugten Artefakte gegen den Bestand.
Vorbereitung

[...]

LLMs = “Jagged Alien Intelligence”
Arithmetik, Buchstabieren und Zählen sind nicht stabil und im Modell “anders”
Statistisch / Konfabulationen / Bias / Black-Box
Tool-Use (Websuche, Coding, … )
Context Window als “Aufmerksamkeitsspanne”
Knowledge Cut-Off und kein Continual Learning
“Reasoning” als “Thinking” Token
Sycophancy als Tendenz von LLMs Nutzer:innen zuzustimmen
“Every cat is smarter than an LLM” (Yann LeCun) ^slide

Lindsey†, Authors Jack, Wes Gurnee*, Emmanuel Ameisen*, u. a. „On the Biology of a Large Language Model“. Transformer Circuits, o. J. Zugegriffen 25. Mai 2025. https://transformer-circuits.pub/2025/attribution-graphs/biology.html. 

Summerfield, Christopher. These Strange New Minds: How AI Learned to Talk and What It Means. Viking, 2025.

Der Begriff bezeichnet den Befund, dass Stärke und Schwäche bei LLMs unvorhersehbar nebeneinanderliegen. Er hat mehrere Prägungen. Mollick und Co-Autoren beschreiben 2023 die jagged frontier, eine unregelmäßige Grenze zwischen Aufgaben, die das Modell beherrscht, und strukturell ähnlichen, an denen es scheitert. Karpathy fasst dasselbe Profil 2024 als jagged intelligence. Summerfield betont in These Strange New Minds die Fremdartigkeit der Verteilung, die Fehler liegen nicht dort, wo menschliche Fehler lägen. Ein Modell, das Code für numerische Simulationen schreibt, verzählt sich bei den Buchstaben eines Wortes. Aus diesem Profil folgt der Bedarf an kuratiertem Kontext und Verifikation, den der Workshop entwickelt. ^jag

Arithmetik, Buchstabieren und Zählen sind unzuverlässig, weil diese Operationen auf Token-Ebene laufen. Einfache Fälle gelingen, mit Stellenzahl und Seltenheit der Zahlen steigt die Fehlerrate, und die Unvorhersehbarkeit dieser Grenze ist selbst die Zacke. Die Attribution-Graph-Abbildung rechts belegt die Fremdartigkeit auf Mechanismusebene. Anthropic hat 2025 gezeigt, dass das Modell intern über parallele Heuristiken und Näherungspfade addiert, auf Nachfrage aber das schriftliche Rechenverfahren als Erklärung angibt. Die Selbstauskunft des Modells beschreibt seinen Rechenweg nicht. ^tok

Der Cluster aus Statistisch, Konfabulationen, Bias und Black-Box benennt die Eigenschaften des zugrunde liegenden Verfahrens. Die Konfabulation wird bei der Verifikation ausführlich behandelt, hier genügt die Nennung. „Reasoning" bezeichnet die Erzeugung von Thinking Tokens, also zusätzliche Rechenzeit im Sampling, kein verifiziertes Schließen; die Traces sind Text über das Denken, nicht das Denken selbst. Sycophancy bezeichnet die Tendenz, Nutzereinschätzungen zu bestätigen statt zu widersprechen, ein Beispiel aus der eigenen Arbeit, etwa die Zustimmung zu einer absichtlich falsch gesetzten These, belegt das anschaulicher als die Definition. Das LeCun-Zitat schließt die Fähigkeitsseite ab und begrenzt zugleich seine Reichweite, die Katze übertrifft das LLM im räumlich-zeitlichen Schließen, nicht im Verfassen von Texten. ^clu

Tool-Use, Context Window und Knowledge Cut-off sind Systemeigenschaften, keine Fähigkeitszacken, die Unterscheidung ist beim Sprechen zu markieren. Tool-Use ist zugleich die erste Abhilfe, Websuche und Codeausführung kompensieren zwei der genannten Schwächen. Der Gedanke, Schwächen des Modells durch die Umgebung auszugleichen, ist im Kern das Harness-Argument der folgenden Folien. Context Window wird hier als Aufmerksamkeitsspanne eingeführt, Context Rot folgt als eigene Folie. ^sys

[...]
