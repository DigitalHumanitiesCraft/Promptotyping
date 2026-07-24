---
type: representation
source-type: document
source: "[[_sources/revision-audit-a1-2026-07-23]]"
converter: "none (verbatim Markdown copy of the source without its frontmatter; block IDs appended for anchoring)"
channel: handover
metadata:
  title: "Revision-Audit A1 — Claim-Evidenz-Prüfung der Transferbehauptung"
  creator: "revision audit agent under the method author's commission, Digital Humanities Craft"
  date: "2026-07-23"
  format: "text/markdown"
  identifier: "https://github.com/DigitalHumanitiesCraft/Promptotyping/blob/e2da77e484e24675481642211beb211bb3e367e3/knowledge/revision-audit-a1.md"
  license: "CC BY 4.0 per repository licence at snapshot time"
  confidential: false
created: 2026-07-24
updated: 2026-07-24
checked:
  validation: 2026-07-24
---

# Revision-Audit A1 — Claim-Evidenz-Prüfung der Transferbehauptung

Auftrag war ein Claim-Evidenz-Audit von `paper.md` mit Schwerpunkt auf der Behauptung, dass auch Personen ohne hybride Kompetenz (Fach plus Programmierung) mit der Methode Forschungsdaten in Artefakte übersetzen können. Geprüft wurde gegen `paper.md`, die Sprach- und Steuerregeln aus `paper-writing.md` und die Projektgeschichte in `journal.md`. Kein Webzugriff, keine externen Behauptungen ohne datierte abrufbare Quelle. Die Fundstellen sind vollständig selbst identifiziert (Grep über die Transfer-Marker, Abgleich gegen den Volltext).

## Gesamtbefund vorab

Das Paper ist an der Transferfrage in weiten Teilen bereits evidenztreu. Der Abstract sagt „probe whether", Sektion 5.4 beschränkt sich ausdrücklich auf Kommunizierbarkeit und Produzierbarkeit, Sektion 6.4 nennt die Drittnutzung „still thin". Die Hypothese, das Paper überschreite die Evidenz, trägt genau an einer Stelle, dem Satz in Sektion 2.6, an dem die Kompetenz-Substitution im Präsens Indikativ als vollzogene Tatsache steht und der Folgesatz sie zugleich als offene empirische Frage suspendiert. Dieser modale Bruch ist der Kernbefund. Alle anderen Transfer-Stellen sind entweder als Möglichkeits-Claim ausgewiesen oder bereits auf das evidenzgedeckte Niveau abgesenkt. An mehreren Stellen widerspricht das Material der Hypothese, weil das Paper präzise nur das behauptet, was die Teaching Cases hergeben.

---

## Befund 1 (Kern) — Section 2.6, modaler Bruch zwischen Tatsachenbehauptung und offener Frage

**Fundstelle.** Section 2.6, letzter Absatz (Zeile 124).

**Beleg.**
> „Promptotyping externalises what hybrid practitioners do into documents and agentic tooling, so that non-hybrid scholars gain a working substitute for a bounded part of the competence they lack, and hybrid ones multiply the reach of the competence they have. Whether the externalisation works for non-hybrid scholars is an empirical question, and the teaching cases of Section 5.4 are where this paper's evidence for it lies."

**Steelman.** Das „so that" lässt sich als Zweckangabe lesen. Unter dieser Lesart beschreibt der erste Satz die Konstruktionsabsicht der Methode (wofür sie gebaut ist) und der zweite Satz die empirische Offenheit ihres Erfolgs. Zwischen Absicht und Erfolgsprüfung besteht dann kein Widerspruch, sondern eine saubere Trennung von Design und Empirie.

**Bewertung.** Der Steelman hält grammatisch, aber nicht für die Leseerfahrung. „non-hybrid scholars gain a working substitute" steht im Präsens Indikativ und liest sich als vollzogener Effekt, während der Zweck-Sinn nur über das schwache „so that" transportiert wird. Genau hier, und nur hier im Paper, wird die Nicht-Hybrid-Substitution als erreicht formuliert. Der unmittelbar folgende Satz nimmt dieselbe Aussage als „empirical question" zurück. Die beiden Sätze stehen in unterschiedlichem Modus zueinander, und der Leser trägt die stärkere Formulierung mit. Das ist die von der Hypothese benannte Überschreitung, lokal begrenzt auf diese Naht.

**Vorschlag (Diff).** Modus des ersten Satzes auf die Möglichkeit ausrichten, damit er mit dem Möglichkeits-Claim des Papers und mit dem Folgesatz konsistent wird.

```
- so that non-hybrid scholars gain a working substitute for a bounded
- part of the competence they lack, and hybrid ones multiply the reach
- of the competence they have.
+ so that non-hybrid scholars can gain a working substitute for a bounded
+ part of the competence they lack, while hybrid ones multiply the reach
+ of the competence they have.
```

Das eingefügte „can" hebt die Aussage vom vollzogenen Effekt auf die Möglichkeit, die der Folgesatz prüft. Das „while" statt „and" markiert zusätzlich, dass der Hybrid-Zweig (Reichweitenvervielfachung, durch Pollins eigene Praxis belegt) und der Nicht-Hybrid-Zweig (Substitution, empirisch offen) unterschiedlichen Evidenzstatus haben, ohne dass eine „X, nicht Y"-Apposition entsteht.

**Offene Entscheidung.** Minimalvariante (nur „can" einfügen) oder die zwei Sätze zu einem konsistenten Register zusammenziehen. Ich empfehle die Minimalvariante, weil sie den Bruch schließt, ohne den Absatz umzubauen.

---

## Befund 2 — Section 1, Kern-Möglichkeits-Claim und die implizite Nicht-Hybrid-Reichweite

**Fundstelle.** Section 1 (Zeile 23), im Rahmen der Introduction-Positionierung (Zeile 21, „none of these answers reaches the individual researcher or the small project as a matter of course"; Zeile 27, „The capability behind this claim predates its tooling").

**Beleg.**
> „With the method, individual researchers and small teams can translate their own structured research data into functional research artefacts".

**Steelman.** Der Claim ist in `paper-writing.md` (Kernaussage 4) ausdrücklich als Möglichkeits-Claim gesetzt und wird in Zeile 31 unmittelbar begrenzt („What it changes is the reach of a specifying and verifying scholar within the prototype boundary"). Das „can" ist über Pollins eigene, seit 2023 datierte hybride Praxis grundiert (Zeile 27). Die Nicht-Hybrid-Frage wird an ihrer eigenen Stelle (2.6, 5.4) explizit als empirisch offen geführt. Der Intro-Claim überschreitet für sich genommen nichts, er behauptet Möglichkeit und verschiebt die Erfolgsprüfung nach hinten.

**Bewertung.** Der Steelman trägt. Die Introduction positioniert „individual researchers and small teams" rhetorisch als die von den RSE- und Hybrid-Antworten Unterversorgten, also implizit als nicht-hybrid; dadurch kann ein Leser „can translate" als für Nicht-Hybride demonstriert lesen. Das „can" ist jedoch über die hybride Praxis grundiert und als Möglichkeit lizenziert. Eine Absenkung dieses Satzes wäre defensive Unterbietung, die der Auftrag ausdrücklich mit der Übertreibung gleichsetzt. Kein Änderungszwang. Die einzig sinnvolle, optionale Verbesserung ist ein knapper Vorwärtsverweis, der dem Leser signalisiert, dass die Nicht-Hybrid-Reichweite die geprüfte offene Frage ist.

**Vorschlag.** Optional, geringe Priorität. Kein Eingriff in die Claim-Stärke. Falls gewünscht, ein einzelner Rückverweis an der schon vorhandenen Begrenzung in Zeile 31 (die den Leser ohnehin auf „reach of a specifying and verifying scholar" führt), etwa ein Zusatz „whether that reach extends to scholars without a programming background is the empirical question Section 5.4 tests". Nur, falls der Operator die implizite Reichweite explizit sichtbar machen will.

**Offene Entscheidung.** Verweis setzen oder den Intro-Claim unangetastet lassen. Empfehlung: unangetastet lassen, weil 2.6 und 5.4 die Frage bereits tragen und ein weiterer Hedge im Intro den zentralen Möglichkeits-Claim schwächt.

---

## Befund 3 (Negativbefund) — Section 5.4 hält sich exakt an Lehrbarkeit und Produzierbarkeit

**Fundstelle.** Section 5.4 (Zeile 308).

**Beleg.**
> „These observations do not amount to empirical validation, a limit Section 6.4 develops. They indicate that the method is communicable, that participants with diverse backgrounds can follow the four phases within workshop time frames, and that the documents and prototypes they produce are real."

**Steelman (zugunsten der Hypothese).** „the documents and prototypes they produce are real" könnte Wirksamkeit einschmuggeln, und „generated a working prototype" (Zeile 306) klingt nach mehr als bloßer Produzierbarkeit.

**Bewertung.** Der Steelman hält nicht. „real" heißt existent und funktionsfähig und sagt über epistemischen Wert nichts; „working prototype" heißt lauffähig, im Workshop, angeleitet. Die Passage behauptet genau das, was die Hypothese der Evidenz zugesteht (Kommunizierbarkeit und Produzierbarkeit der Dokumenttypen), und ausdrücklich nicht die Wirksamkeit in dritter Hand. Das Material widerspricht der Hypothese an dieser Stelle, weil das Paper hier bereits auf dem exakt evidenzgedeckten Niveau steht. Erstordnungs-Negativbefund. ^teach

**Vorschlag.** Keine Änderung. Merkposten für spätere Runden: diese Präzision nicht versehentlich verstärken (kein „successfully produced", kein „valid research artefacts" an dieser Stelle).

**Offene Entscheidung.** Keine.

---

## Befund 4 — Section 5.4, Coaching-Kooperationen und der externe Fork, mit einer Scope-Verschiebung

**Fundstelle.** Section 5.4 (Zeile 306 und 308).

**Beleg.**
> „In project cooperations, non-developer domain experts produced prototypes for administrative processes through a structured cycle of one-pager, workshop, and coaching."

> „Documented third-party use beyond teaching settings, such as the community fork of the coOCR-HTR workbench by a researcher at the Austrian Academy of Sciences, is the strongest evidence in the set, and there is little of it yet."

**Steelman.** Angeleitete Nicht-Entwickler, die lauffähige Prototypen erzeugen, sind echte Evidenz dafür, dass die Kompetenz-Substitution nicht leer ist. Der Fork ist unter der Operator-Vorgabe ausdrücklich nur Existenzbeweis, und „there is little of it yet" trägt diese Beschränkung sichtbar.

**Bewertung.** Evidenztreu. Das „coaching" ist benannt, es wird also keine unassistierte Nutzung behauptet, und die Fork-Stelle respektiert die Operator-Vorgabe (nur Existenzbeweis). Eine latente Scope-Verschiebung bleibt. „prototypes for administrative processes" sind keine Forschungsartefakte mit epistemischem Ertrag, stehen aber innerhalb des Abschnitts, der als „Transfer Test" für die Übersetzung von Forschungsdaten in Forschungsartefakte rahmt. Der Transfer-Test mischt damit Verwaltungsprototypen unter die Forschungsevidenz. Keine Übertreibung, aber eine unscharfe Grenze.

**Vorschlag (Diff, optional).** Die Domäne kennzeichnen, damit der Transfer-Test nicht als für forschungsnahe Artefakte gedeckt gelesen wird.

```
- In project cooperations, non-developer domain experts produced
- prototypes for administrative processes through a structured cycle
- of one-pager, workshop, and coaching.
+ In project cooperations, non-developer domain experts produced
+ prototypes for administrative processes, outside the research-artefact
+ case, through a structured cycle of one-pager, workshop, and coaching.
```

**Offene Entscheidung.** Kennzeichnung setzen oder belassen. Geringe Priorität; betrifft die Trennschärfe; die Evidenzstärke bleibt unberührt.

---

## Befund 5 — Section 6.5, Anwendbarkeit auf Nicht-Entwickler und ein achsenfremder Hedge

**Fundstelle.** Section 6.5 (Zeile 344).

**Beleg.**
> „Documents as boundary objects, the specifier-verifier role, the static artefact type, and the three verification levels apply wherever structured research data meets a researcher without development capacity, and two documented cases already operate outside the digital humanities... so the transfer is an inference in the favourable direction, offered as such; testing it is work for practitioners of those fields, and the published templates are built to be taken."

**Steelman.** Der Satz beschreibt die Mechanik der Methode (nichts daran ist humanities-spezifisch), also eine Anwendbarkeit dem Design nach; demonstrierte Wirksamkeit behauptet er damit nicht. Die fünfte Grenze in 6.4/6.5 („a practitioner without domain expertise gains little") begrenzt ihn zusätzlich.

**Bewertung.** Als Mechanik-Anwendbarkeit vertretbar. Der Hedge „inference in the favourable direction" ist jedoch nur an die Feld-Achse gebunden (schema-reguläre Fächer); die Hybrid/Nicht-Hybrid-Achse deckt er nicht ab. Die Klausel „apply wherever structured research data meets a researcher without development capacity" behauptet Anwendbarkeit auf Nicht-Entwickler im selben Atemzug, in dem der Hedge eine andere Achse absichert. Der Leser bezieht den Hedge leicht auf beide Achsen, obwohl er nur eine deckt. Genau diese Achse ist die produktive Wendung wert, weil 6.5 der natürliche Ort für ein explizites Falsifikationsangebot ist („the published templates are built to be taken" liegt bereits vor, allerdings für die Feld-Achse). ^axis

**Vorschlag (Diff).** Die vorhandene „built to be taken"-Geste zu einem ausdrücklichen Falsifikationsangebot für die Nicht-Hybrid-Achse erweitern, ohne neue Evidenz zu behaupten.

```
+ The same offer holds along a second axis. Whether a domain expert
+ without a programming background, given the templates and the four
+ phases, produces a verifiable artefact of scholarly value without
+ hybrid assistance is the prediction the teaching cases open and do
+ not yet close, and it is stated here as a claim to be tested.
```

Damit wird die Lücke von einem Defizit in ein offenes Forschungsprogramm gewendet. Das Paper trägt die Zutaten bereits (2.6 „empirical question", 5.4 „evidence for it lies", 6.4 „rest most heavily on the teaching cases", 7 „testing it further... remains open"); der Zusatz bündelt sie zu einer benennbaren, falsifizierbaren Vorhersage.

**Offene Entscheidung.** Falsifikationsangebot in 6.5 setzen, alternativ verdichtet in die Conclusion (Zeile 350, direkt vor „testing it further... remains open"). Da es sich um eine Ergänzung an bestehendem Text handelt, ist es operatorabhängig.

---

## Absenkungstiefe, exakt evidenzgedeckt

Die Frage, wie tief die Behauptung abgesenkt werden müsste, hat eine präzise Antwort. Die Evidenz stützt vier Stufen unterschiedlicher Stärke.

1. Ein hybrider Praktiker (Pollin) übersetzt über rund zwei Jahre dokumentierter Projekte eigene Forschungsdaten in Artefakte. Stark.
2. Die Methode ist lehrbar; Workshop-Teilnehmende folgen den vier Phasen und produzieren reale Dokumente und Prototypen innerhalb der Workshop-Zeit. Mittel (Teaching Cases).
3. Angeleitete Nicht-Entwickler produzieren Prototypen für Verwaltungsprozesse. Schwach bis mittel (gecoacht, außerhalb der Forschungsartefakt-Domäne).
4. Ein externer Fork existiert als Existenzbeweis der Fremdnutzung. Schwach (Mini-Nebenbemerkung laut Operator-Vorgabe).

Nicht gestützt ist die unassistierte Produktion epistemisch wertvoller Forschungsartefakte aus eigenen Forschungsdaten durch nicht-hybride Fachleute. Das ist die Decke. Der exakt evidenzgedeckte Claim lautet, dass die Methode lehrbar und ihre Dokumenttypen durch nicht-hybride Fachleute in angeleiteten Settings produzierbar sind, während die Frage, ob sie in unassistierter dritter Hand Forschungsartefakte von wissenschaftlichem Wert liefert, offen bleibt und durch die Teaching Cases eröffnet statt geschlossen wird. Das Paper formuliert dies in 5.4 und 6.4 bereits. Absenkungsbedarf besteht allein an der einen Naht in 2.6 (Befund 1). ^ceil

## Nebenwirkungsprüfung

Der Eingriff aus Befund 1 (Einfügung „can") berührt keine Stelle, auf die andere Teile des Arguments bauen. Der Boundary-Object-Faden (2.4), die Konzeptmodell-Kette (3.4) und die Verifikationsargumentation (6.2) hängen nicht an der Stärke der Nicht-Hybrid-Substitution, sondern an der Doppel-Adressierung der Dokumente, die unangetastet bleibt. Der optionale Zusatz aus Befund 5 verstärkt die bestehende Selbstbegrenzung, statt eine tragende Aussage zu schwächen. Kein Eingriff beschädigt die Übersetzungs-Doppelung, den theoretischen Kern.

---

## Abschluss

### (a) Entscheidungsbedürftige Punkte

- **Befund 1 (empfohlen).** „gain" zu „can gain" absenken und „and" zu „while" in 2.6, damit der modale Bruch schließt. Minimalvariante oder Zwei-Satz-Umbau.
- **Befund 5 / produktive Wendung (empfohlen, Ergänzung an bestehendem Text).** Falsifikationsangebot für die Nicht-Hybrid-Achse in 6.5 oder verdichtet in die Conclusion setzen.
- **Befund 4 (optional).** Verwaltungsprototypen in 5.4 als außerhalb der Forschungsartefakt-Domäne kennzeichnen.
- **Befund 2 (optional, mit Warnung).** Vorwärtsverweis im Intro-Claim. Empfehlung dagegen, weil weitere Hedges den zentralen Möglichkeits-Claim ohne Evidenzgewinn schwächen (defensive Unterbietung).

### (b) Fälle, in denen das Material der Hypothese widersprochen hat

- **Section 5.4 (Zeile 308).** Das Paper beschränkt sich ausdrücklich auf Kommunizierbarkeit und Produzierbarkeit („communicable", „documents and prototypes they produce are real") und behauptet gerade keine Wirksamkeit in dritter Hand. Damit steht es an dieser Stelle bereits auf dem Niveau, das die Hypothese als evidenzgedeckt bezeichnet.
- **Abstract (Zeile 9) und Section 6.4 (Zeile 336).** „teaching cases probe whether the method carries" und „documented third-party use is still thin" räumen die Beschränkung von sich aus ein. Die Hypothese („stärker formuliert als die Evidenz trägt") trifft also nicht auf das Paper insgesamt zu, sondern nur auf den einen Satz in 2.6.

### (c) Ungefragte Befunde

- **Scope-Verschiebung in 5.4 (Befund 4).** Der „Transfer Test" mischt Verwaltungsprototypen unter die Forschungsartefakt-Evidenz. Keine Übertreibung, eine unscharfe Grenze.
- **Achsenfremder Hedge in 6.5 (Befund 5).** Das „inference in the favourable direction" sichert die Feld-Achse (schema-reguläre Fächer), steht aber neben der Klausel zur Nicht-Entwickler-Anwendbarkeit, die eine andere Achse betrifft. Ein Leser bezieht den Hedge leicht auf beide.
- **Operator-Vorgaben eingehalten.** Der externe Fork erscheint in 5.4 nur als Existenzbeweis mit „there is little of it yet", das Argument stützt sich nicht auf ihn. „Schneller und billiger" kommt als Argument nirgends vor (die Kosten- und Dauerangaben in 5.3 sind als deterministisch ungeprüfte Erfahrungswerte gekennzeichnet und tragen kein Effizienzargument). Ein quantitativ-empirischer Beleganspruch wird nirgends erhoben. Keiner dieser drei Rahmen ist verletzt, es besteht dort kein Handlungsbedarf.
