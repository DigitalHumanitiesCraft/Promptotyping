---
title: Redaktionelles Audit A-3
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

# Redaktionelles Audit A-3

Redaktionelles Audit des Papers `knowledge/paper.md` gegen die Steuerung und die Sprachregeln in `paper-writing.md`, mit Blick auf mögliche Migrationsziele in der Companion-Site (`_content/`). Geprüft wurden die vier vom Auftrag genannten Hypothesen (Dopplungen über Sektionen, dokumentierende statt argumentierende Passagen, Querverweisdichte, Existenz- statt Gradabgrenzungen). Alle Fundstellen sind selbst identifiziert. Kein Vorschlag ist ausgeführt; die einzige Schreiboperation ist diese Datei.

Maßstab. Das Paper ist ein sehr sauber gearbeiteter Text. Die Sprachregeln sind über weite Strecken eingehalten, mehrere der erwarteten Lasten existieren nicht (siehe Abschnitt b). Die folgenden Befunde sind Feinschliff auf hohem Niveau, keine Strukturmängel. Wortstand `paper.md` rund 15.300 Wörter inklusive Referenzverzeichnis, 86 explizite `Section`-Verweise.

Companion-Landschaft für Migration. `_content/praxis.md` trägt die empirisch gewachsenen Methodenerweiterungen (deutsch, mit Herkunftsfall). `_content/case-studies/` hält sieben Fallseiten. Die sieben `_content/paper/`-Sektionsdateien sind der ältere zerlegte Stand und werden nach Operator-Freigabe ohnehin aus `paper.md` neu geschnitten; sie sind kein stabiles Migrationsziel, sondern erben, was `paper.md` trägt. Reales Migrationsziel für herausgelöstes Betriebsdetail ist damit `praxis.md` oder die jeweilige Fallseite.

---

## Befund 1 — Inventarische Roadmap am Ende der Introduction

**Fundstelle.** Sektion 1, letzter Absatz (Zeile 33).

**Beleg.** „Section 2 establishes the ground on which the claim rests, why exploration is a research act, how LLMs relate to research data, and why the characterisation of LLMs as translation mechanisms answers the field's translation problem. The method itself, its phases, its documents, and a worked example follow in Section 3. What the method yields, and where its boundary to Research Software Engineering runs, is the subject of Section 4. The claim is then put to the test, in Section 5 against a selection of documented projects and experiments from roughly the past two years, each traceable in its public repository, and the teaching cases, in Section 6 against its own limits, from verification to reproducibility. Section 7 returns to the two translations and states what they answer." (Sektion 1)

**Steelman.** In einem 15.000-Wörter-Paper mit sieben Hauptsektionen hat die Leserführung einen echten Wert, und der Absatz kodiert den Argumentbogen, nicht bloß die Reihenfolge. Regel 19 verbietet Roadmaps nicht, sie verlangt sie funktional statt inventarisch.

**Bewertung.** Der Absatz ist die reine Inventarform, die Regel 19 benennt („nicht jeder Satz beginnt mit Section N"). Vier der fünf Sätze setzen mit einem Sektionsnamen ein oder enden darauf. Die Roadmap trägt keinen Gedanken, den der Leser nicht schon aus dem vorangehenden Absatz und dem Abstract hat. Der Argumentbogen lässt sich mit derselben Navigationsleistung in Klammerverweise verlagern, wodurch die Sektionsnummern aus der Satzstellung verschwinden.

**Vorschlag.**

Vorher (94 Wörter, der oben belegte Absatz).

Nachher (rund 78 Wörter):

> The epistemic ground of the claim comes first, from exploration as a research act to the characterisation of LLMs as translation mechanisms that answers the field's translation problem (Section 2). The method, its documents, and a worked example follow (Section 3), then the artefact type and where its boundary to Research Software Engineering runs (Section 4), the evidence of the documented projects and the teaching cases from roughly the past two years (Section 5), the limits from verification to reproducibility (Section 6), and the return to the two translations (Section 7).

Wortzahl-Bilanz rund minus 16.

**Offene Entscheidung.** Alternativ die stärkere Kürzung auf zwei Sätze, die nur den Argumentbogen nennen und die Sektionsnavigation der Gliederung überlassen (Ersparnis rund minus 50). Der Verlust wäre die Feingliederung der Prüf-Sektionen 5 und 6. Operator wählt zwischen Konsolidierung (obiger Vorschlag) und Straffung.

---

## Befund 2 — Ankündigender Eröffnungsabsatz von Sektion 2

**Fundstelle.** Sektion 2 „The Epistemic Frame", Eröffnungsabsatz vor 2.1 (Zeile 66).

**Beleg.** „Everything this section assembles serves one argument, the doubling of the word translation that Section 2.4 develops. […] Each subsection around 2.4 establishes one of its premises. Exploration is a research act that lacks its instrument, tools carry epistemic weight and stay disposable at once, well-modelled data is the ground the generation stands on, and the method's genealogy shows the doubling growing out of humanities practice." (Sektion 2, Eröffnung)

**Steelman.** Der Absatz wurde in der Hierarchisierungs-Runde (paper-writing.md, Subagenten-Runde Punkt 5) bewusst gesetzt, um Sektion 2 auf die Übersetzungs-Doppelung als Achse auszurichten und die Unter­abschnitte als Prämissen zu ordnen. Die Übergabe von 2.4 an die Sektionslogik ist gewollt und trägt.

**Bewertung.** Zwei Muster stehen quer zu den Regeln. „Everything this section assembles serves one argument" ist ein Ankündigungssatz über den eigenen Text (Regel 4) und zugleich ein Etikettsatz-Muster (Verdinglichung des Kommenden). Der Schlusssatz zählt die vier Unterabschnitte inventarisch auf (Regel 19), und diese Aufzählung dupliziert, was jeder Unterabschnitt selbst sagt. Der mittlere Satz (die Doppelung selbst, „The translation problem […] meet in the Promptotyping Documents") trägt und soll bleiben. Der Rahmen um ihn ist die Last.

**Vorschlag.**

Vorher (rund 90 Wörter, gesamter Eröffnungsabsatz):

> Everything this section assembles serves one argument, the doubling of the word translation that Section 2.4 develops. The translation problem between domain scholars and programmers, documented in the field for two decades, and the language model that operates as a translation mechanism meet in the Promptotyping Documents. Each subsection around 2.4 establishes one of its premises. Exploration is a research act that lacks its instrument, tools carry epistemic weight and stay disposable at once, well-modelled data is the ground the generation stands on, and the method's genealogy shows the doubling growing out of humanities practice.

Nachher (rund 55 Wörter):

> This section assembles the premises of one argument, the doubling of the word translation that Section 2.4 develops. The translation problem between domain scholars and programmers, documented in the field for two decades, and the language model that operates as a translation mechanism meet in the Promptotyping Documents. The subsections around 2.4 establish that exploration is a research act lacking its instrument, that tools carry epistemic weight and stay disposable at once, that well-modelled data is the ground the generation stands on, and that the method's genealogy grows the doubling out of humanities practice.

Der neue erste Satz ersetzt die Ankündigung durch eine enaktive Formulierung. Der Schlusssatz führt die vier Prämissen über ein regierendes Verb („establish that …") statt als lose Reihe, was die Inventarform mildert und zugleich Regel 6 respektiert.

Wortzahl-Bilanz rund minus 35, sofern die inventarische Aufzählung in die verbregierte Form wandert; bei vollständigem Streichen des Schlusssatzes rund minus 50.

**Offene Entscheidung.** Ob der Schlusssatz die vier Prämissen weiter benennt (Navigationswert) oder ganz entfällt (die Unterabschnitte tragen sich selbst). Operator-Ermessen, weil die Hierarchisierungs-Runde diesen Absatz ausdrücklich wollte.

---

## Befund 3 — Spec-Driven-Development-Abgrenzung als Existenzunterschied

**Fundstelle.** Sektion 2.5, Absatz _Spec-Driven Development_ (Zeile 110).

**Beleg.** „Where these frameworks specify software products from requirements, Promptotyping specifies research artefacts derived from modelled research data, and three layers have no counterpart in them. Promptotyping carries a data layer describing the semantics and uncertainties of the sources, binds the specification to the scholarly verification duties of Section 6.2, and installs the Critical Expert in the Loop as the role that owns those duties." (Sektion 2.5)

**Steelman.** Die drei Schichten sind real und im Paper belegt. Generische SDD-Frameworks (Spec Kit, Kiro, BMAD) haben tatsächlich keine Datenschicht, die Quell-Semantik und Unsicherheiten beschreibt, keine an fachwissenschaftliche Verifikationspflichten gebundene Spezifikation und keine Critical-Expert-Rolle. Die Abgrenzung ist substanziell und keine bloße Etikettierung.

**Bewertung.** Die Formel „three layers have no counterpart in them" ist als Existenzunterschied gebaut, während der ehrlichere Befund ein Gradunterschied ist. SDD-Frameworks kennen sehr wohl Review- und Testschritte; was ihnen fehlt, ist nicht die Verifikation als solche, sondern ihre Bindung an fachwissenschaftliche Verantwortung. Ebenso ist eine Datenbeschreibung in SDD nicht ausgeschlossen, sie ist dort peripher, wo sie hier konstitutiv ist. Die genau vom Auftrag benannte Denkrichtung („dort peripher, hier konstitutiv") trifft diese Stelle. „no counterpart" überklaimt die Trennschärfe an einem Punkt, an dem ein Gutachter aus dem Software-Engineering leicht Gegenbeispiele nennt.

**Vorschlag.**

Vorher (Kernsatz): „and three layers have no counterpart in them. Promptotyping carries a data layer describing the semantics and uncertainties of the sources, binds the specification to the scholarly verification duties of Section 6.2, and installs the Critical Expert in the Loop as the role that owns those duties."

Nachher: „and three layers are constitutive here that stay peripheral there. Promptotyping carries a data layer describing the semantics and uncertainties of the sources, binds the specification to the scholarly verification duties of Section 6.2, and installs the Critical Expert in the Loop as the role that owns those duties."

Wortzahl-Bilanz plus/minus 0 (Wortzahl praktisch gleich, „have no counterpart in them" gegen „are constitutive here that stay peripheral there").

**Offene Entscheidung.** Ob die Verschiebung von Existenz auf Grad gewünscht ist. Die schärfere Existenzform wirkt im Abgrenzungs-Absatz rhetorisch stärker; die Gradform ist gegen Einwände robuster. Da die Novelty-Positionierung (paper-writing.md, Weg zur Einreichung, Schritt 4) noch aussteht, ist dies eine Positionierungs-Entscheidung des Operators, keine reine Redaktion.

---

## Befund 4 — Rekapitulierender Schlusssatz in 2.5

**Fundstelle.** Sektion 2.5, Absatz _The Critical Expert in the Loop_, letzter Satz (Zeile 114).

**Beleg.** „Context engineering and the Context Rot rationale become operative in the Distillation phase of Section 3.2, and Vibe Coding survives there as the exploratory mode of Exploration." (Sektion 2.5, Schluss)

**Steelman.** Der Satz bündelt die fünf Diskursterme auf ihren Einlöseort in Sektion 3.2 und gibt der Leserin einen Vorwärtsverweis, bevor die Methode selbst beginnt.

**Bewertung.** Die Aussage steht bereits in den Einzelabsätzen. Der _Context-Rot_-Absatz sagt „It supplies the technical rationale for the Distillation phase"; der _Vibe-Coding_-Absatz sagt „survives inside the method as an exploratory mode". Der Schlusssatz wiederholt beides gebündelt und fügt nur die Verortung „of Section 3.2" hinzu. Das ist ein Mini-Inventar am Absatzende und trägt zur Querverweisdichte bei, ohne neuen Gehalt. Streichen kostet nichts, weil 3.2 die Einlösung ohnehin vollzieht.

**Vorschlag.** Den Satz ersatzlos streichen. Der vorangehende Satz „This role is the human side of the division of labour the method installs (Section 3.5)." ist ein tragfähiger Absatzschluss.

Wortzahl-Bilanz minus 25.

**Offene Entscheidung.** Keine, sofern der Operator den Vorwärtsverweis auf 3.2 nicht ausdrücklich erhalten will. Falls doch, genügt ein Vier-Wort-Zusatz am Distillation-Satz statt des ganzen Rekapitulationssatzes.

---

## Befund 5 — Doppelte Auflistung der RSE-Antworten und der Scarcity-Inferenz

**Fundstelle.** Sektion 1, Absatz zum Übersetzungsproblem (Zeile 21) und Sektion 2.4, Eröffnung (Zeile 96).

**Beleg.** Sektion 1: „Each of these answers installs a human translator, and the field's own accounts describe the translators as scarce, the teams as bound to project funding, and the hybrid scholar-developers as a small population. I infer that none of these answers reaches the individual researcher or the small project as a matter of course." (Sektion 1). Sektion 2.4: „Section 1 introduced the translation problem between domain scholars and programmers and the field's answers to it, the intermediary, the team, the trading zone, and the Research Software Engineering profession. The institutionalisation of RSE sharpens the problem as much as it answers it. RSE capacity concentrates at well-resourced institutions, and I take the long tail of small projects and individual researchers to remain underserved, the same inference Section 1 draws from the field's accounts of scarce capacity." (Sektion 2.4)

**Steelman.** 2.4 markiert die Wiederholung selbst als solche („the same inference Section 1 draws") und nutzt sie als Sprungbrett für den neuen Gedanken, dass die Institutionalisierung das Problem so sehr schärft, wie sie es beantwortet. Ein Rückverweis, der seine Prämisse kurz nennt, spart der Leserin das Zurückblättern.

**Bewertung.** Der neue Gedanke von 2.4 ist der Institutionalisierungs-Satz. Davor stehen zwei rekapitulierende Sätze, die erst die vier Antworten (intermediary, team, trading zone, RSE) und dann die Scarcity-Inferenz nachzählen, beides bereits in Sektion 1 etabliert. Regel 9 verlangt Rückverweis statt Wiederholung. Der Rückverweis darf die Prämisse nennen, muss sie aber nicht ausbuchstabieren. Die Wiederauflistung der vier Antworten ist die vermeidbare Dopplung.

**Vorschlag.**

Vorher (rund 70 Wörter, die drei Eröffnungssätze von 2.4):

> Section 1 introduced the translation problem between domain scholars and programmers and the field's answers to it, the intermediary, the team, the trading zone, and the Research Software Engineering profession. The institutionalisation of RSE sharpens the problem as much as it answers it. RSE capacity concentrates at well-resourced institutions, and I take the long tail of small projects and individual researchers to remain underserved, the same inference Section 1 draws from the field's accounts of scarce capacity.

Nachher (rund 45 Wörter):

> The field's answers to the translation problem, set out in Section 1, install a human translator each, and the institutionalisation of Research Software Engineering sharpens the problem as much as it answers it. RSE capacity concentrates at well-resourced institutions, and the long tail of small projects and individual researchers remains underserved, the same inference Section 1 draws.

Wortzahl-Bilanz rund minus 25.

**Nebenwirkungsprüfung.** 2.4 baut anschließend auf „boundary objects" und dem „second load" auf und braucht die Vierer-Liste dafür nicht; die Kürzung beschädigt keine spätere Stelle. Die markierte Inferenz bleibt als Inferenz erhalten (Evidenztreue).

**Offene Entscheidung.** Keine substanzielle. Formulierungsvariante des Operators möglich.

---

## Befund 6 — Nahezu wörtliche Wiederkehr des Schwierigkeitsprofils

**Fundstelle.** Sektion 1 (Zeile 29) und Sektion 6.5 (Zeile 344).

**Beleg.** Sektion 1: „It is heterogeneous, rarely schema-regular, interpretatively modelled, and semantically dense, and uncertainty is a first-class property of the data." (Sektion 1). Sektion 6.5: „What is humanities-specific is the difficulty profile the method was forged against, heterogeneous formats, interpretative modelling, semantic density, and uncertainty as a property of the data." (Sektion 6.5)

**Steelman.** 6.5 ist das Transfer-Argument, und der Transfer braucht das Profil als Prämisse an Ort und Stelle, damit der Schluss („Fields whose data is schema-regular […] face an easier version") ohne Rückblättern trägt. Die Wiederholung ist funktional, nicht schmückend.

**Bewertung.** Anders als Befund 5 trägt diese Wiederkehr echten argumentativen Dienst, das Profil ist die Prämisse des Transferschlusses. Das ist ein Fall, in dem die Hypothese „Dopplung" nur teilweise greift. Die vier Merkmale müssen in 6.5 präsent sein. Verkürzbar ist allein die Redundanz zwischen dem Profil und dem unmittelbar folgenden Transferschluss, der die Merkmale implizit noch einmal spiegelt. Der Eingriff wäre marginal und risikoreich für die Lesbarkeit. Empfehlung, hier nichts zu ändern.

**Vorschlag.** Keine Kürzung. Dokumentiert als geprüfte und bewusst belassene Wiederkehr.

Wortzahl-Bilanz 0.

**Offene Entscheidung.** Keine.

---

## Befund 7 — Dokumentierende Infrastruktur-Beschreibung in 5.1

**Fundstelle.** Sektion 5.1 „Principle of Presentation" (Zeile 238).

**Beleg.** „The full evidence layer, with claim-level source anchors for the figures, is maintained in the paper's companion repository […] as a Grounded Vault and published as a versioned companion in that repository, and an archived release with a persistent identifier is cut at formal publication of this paper. The same repository carries the method's knowledge base, the template catalogue mirrored from the documentation site, and the paper's full text; every template is retrievable as static Markdown under `https://dhcraft.org/Promptotyping/_content/promptotyping-document/{slug}.md`, so that readers and coding agents reach the authoritative specifications directly from this text. The Grounded Vault is a repository architecture in early, documented use that grew out of the method's document practice; sources, distillates, and atomic claims form layers whose anchors resolve only downward, and every substantive statement of a deliverable links to the claim layer beneath it." (Sektion 5.1)

**Steelman.** Der Absatz erfüllt zwei echte Funktionen. Er macht die Evidenzbasis prüfbar (Anker auf Repository und Maschinenadresse) und er ist selbst ein Argumentglied, weil eine kuratierte, versionierte Wissensschicht das ist, was gelebte Praxis der Methode hervorbringt („The companion is thus part of the argument"). Die Grounded-Vault-Beschreibung stützt genau diese Selbstanwendung.

**Bewertung.** Der Absatz mischt Argument und technische Dokumentation. Die Sätze zur Maschinenadresse (`{slug}.md`) und zur Schichtenarchitektur des Grounded Vault („anchors resolve only downward") sind Infrastruktur-Beschreibung, die die Companion-Site bereits trägt (`specification.md` A19, ADR-10; `_content/konvention.md`). Das Argument von 5.1 (die versionierte Wissensschicht als Beleg der Methode) steht ohne die technischen Details. Die Maschinenadress-Passage ist ein starkes Migrationsziel, weil sie im Paper Betriebsdetail ist und in der Site an ihren kanonischen Ort gehört.

**Vorschlag.** Die Maschinenadress-Erläuterung und die Grounded-Vault-Schichtenmechanik auf je einen tragenden Satz kürzen und das technische Detail der Companion überlassen.

Vorher (rund 130 Wörter, die drei belegten Sätze).

Nachher (rund 70 Wörter):

> The full evidence layer, with claim-level source anchors for the figures, is maintained in the paper's companion repository as a Grounded Vault, published as a versioned companion, and cut as an archived release with a persistent identifier at formal publication. The same repository carries the method's knowledge base, the mirrored template catalogue, and the paper's full text, each template retrievable as static Markdown so that readers and coding agents reach the authoritative specifications directly. The Grounded Vault is a repository architecture in early, documented use in which sources, distillates, and atomic claims form layers whose anchors resolve only downward.

Wortzahl-Bilanz rund minus 60.

**Migrationsziel.** Die gestrichene Maschinenadress-URL und die Schichten-Detailregel („every substantive statement of a deliverable links to the claim layer beneath it") sind in der Site bereits vorhanden (`specification.md` A19 Block `#vorlagen-maschinenzugriff`, ADR-10; die Grounded-Vault-Mechanik im `vault/`-Action-Layer). Keine Neuschöpfung nötig, der Paper-Text verweist implizit auf die kanonische Site-Stelle.

**Offene Entscheidung.** Wie viel Selbstanwendungs-Gestus 5.1 tragen soll. Der Absatz schließt mit „the companion is that claim made inspectable"; dieser Satz ist das Argument und bleibt unangetastet. Operator entscheidet, ob die technische Adressierung im Paper sichtbar bleiben soll (Prüfbarkeit für den Gutachter ohne Site-Besuch) oder ausgelagert wird (Lesefluss).

---

## Befund 8 — RO-Crate-Abgrenzung als Richtungs-Dichotomie

**Fundstelle.** Sektion 3.3, RO-Crate-Absatz (Zeile 174).

**Beleg.** „The difference lies in the direction of description. An RO-Crate describes a finished research package retrospectively for the infrastructure that stores it; the frontmatter and `template:` layer describes a repository prospectively and operatively, for the agent about to work in it." (Sektion 3.3)

**Steelman.** Die Richtungsunterscheidung (retrospektiv-deskriptiv gegen prospektiv-operativ) ist im Entscheidungsstand ausdrücklich so gewollt (paper-writing.md, Positionierungs-Anker: „RO-Crate ein Satz in 3.3 (prospektiv-operativ gegen retrospektiv-deskriptiv)"). Sie ist präzise und trifft den typischen RO-Crate-Gebrauch.

**Bewertung.** Schwächer als Befund 3, aber verwandt. „describes a finished research package retrospectively" setzt den RO-Crate-Gebrauch als ausschließlich nachgelagert, während RO-Crates auch projektbegleitend erzeugt werden können. Der ehrliche Unterschied ist die typische Ausrichtung und der Adressat (speichernde Infrastruktur gegen arbeitender Agent), ein Grad- und Schwerpunktunterschied. Der Eingriff ist klein und die bestehende Antithese „retrospectively / prospectively" ist rhetorisch sauber (keine Regelverletzung). Empfehlung mit geringer Priorität.

**Vorschlag.** „describes a finished research package retrospectively" zu „typically describes a finished research package after the fact" mildern, um die Ausschließlichkeit zu nehmen, ohne die Antithese aufzugeben.

Wortzahl-Bilanz plus/minus 0.

**Offene Entscheidung.** Ob die Präzisierung den Gewinn wert ist. Da der Entscheidungsstand die scharfe Form gewählt hat, ist dies Operator-gebunden. Niedrige Priorität.

---

## Befund 9 — Sektionsanfang 3.3 wiederholt Abstract und 2.2

**Fundstelle.** Sektion 3.3, erster Satz (Zeile 152), gegen Abstract (Zeile 9) und 2.2 (Zeile 78).

**Beleg.** 3.3: „The documents are the method's primary artefact." (Sektion 3.3). Abstract: „These Promptotyping Documents are the primary artefact, and the prototype they yield is a by-product that can be discarded and regenerated." (Abstract). 2.2: „In the method presented here, the tool is a derived and disposable artefact. […] A promptotype can be discarded and regenerated." (Sektion 2.2)

**Steelman.** Der Satz ist die These, die 3.3 einlöst, und ein Sektionsanfang darf seinen Gegenstand benennen. Die Wiederkehr der zentralen Aussage über den Text hinweg ist Teil ihrer Verankerung.

**Bewertung.** Regel 9 verbietet wörtliche Dubletten zwischen Abstract, Introduction und Sektionsanfängen. „The documents are the method's primary artefact" liegt sehr nahe an „These Promptotyping Documents are the primary artefact" (Abstract) und an der Disposabilitäts-These von 2.2. Der Satz ist nicht falsch, aber als Sektionsöffner die schwächste Stelle, weil er als Etikett auftritt, bevor 3.3 substanziell wird. Die folgende Aussage von 3.3 (der Kernbestand `data.md`, `requirements.md`, `design.md`, `journal.md`, action layer) trägt sich selbst. Ein Öffner, der direkt in den Bestand geht, spart die Dublette.

**Vorschlag.**

Vorher: „The documents are the method's primary artefact. A recurring core set has stabilised across the documented projects, maintained in a `knowledge/` folder within the repository:"

Nachher: „A recurring core set of documents has stabilised across the documented projects, maintained in a `knowledge/` folder within the repository:"

Wortzahl-Bilanz minus 7. Die Primär-Artefakt-These bleibt an ihrer stärkeren Stelle (Abstract, 2.2) und wird in 3.3 durch den Bestand gezeigt statt behauptet.

**Nebenwirkungsprüfung.** 3.4 verweist auf „The double function" und baut auf dem Dokumentbegriff; der Wortlaut „primary artefact" trägt dort nichts; keine spätere Stelle bricht. 5.5 und 6.1 tragen die Primär-Artefakt-Logik eigenständig.

**Offene Entscheidung.** Ob 3.3 seine These explizit als Öffner setzt oder sie enaktiv aus dem Bestand entwickelt. Geschmacksfrage mit leichter Regel-9-Präferenz für die enaktive Form.

---

## a) Entscheidungsbedürftige Punkte

Diese Befunde sind nicht rein redaktionell, weil sie Positionierung oder gewollte Steuerungsentscheidungen berühren.

- **Befund 3 (SDD, Existenz gegen Grad).** Positionierungs-Entscheidung, gekoppelt an die noch ausstehende Novelty-Recherche (Weg zur Einreichung, Schritt 4). Die schärfere Existenzform ist rhetorisch stärker, die Gradform robuster gegen Software-Engineering-Gutachter.
- **Befund 7 (5.1, Infrastruktur-Auslagerung).** Trade-off zwischen Prüfbarkeit für den Gutachter ohne Site-Besuch und Lesefluss. Migrationsziel in der Site vorhanden.
- **Befund 1 und 2 (Roadmap, Sektions-Opener).** Die Hierarchisierungs-Runde hat den Sektion-2-Opener ausdrücklich gesetzt; eine Kürzung greift an gewolltem Text an.
- **Befund 8 (RO-Crate).** Der Entscheidungsstand hat die scharfe Richtungsform gewählt; die Milderung überstimmt eine dokumentierte Entscheidung.

## b) Fälle, in denen das Material einer Hypothese widersprochen hat

- **Tokenökonomie (Hypothese Dopplung).** Erwartbar war eine Dreifach-Erklärung in 2.3, 3.3 und 3.4. Der Text ist bereits dedupliziert; 3.3 und 3.4 tragen nur noch markierte Rückverweise auf 2.3 („the token economy of Section 2.3", „does not suspend the token economy of Section 2.3"). Die Politur-Runde hat diese Last bereits abgetragen.
- **TaDiRAH-Abgrenzung (Hypothese Existenz- statt Gradunterschied).** In 4.2 steht „capture, exploration, and editing have counterparts among its research activities, while verification and audit do not appear". Das ist ehrlich als Teilüberlappung formuliert, nicht als Existenzdichotomie, und der Objektunterschied (Aktivitäten gegen Artefakt-Funktionen) rechtfertigt die verbleibende Differenz. Die Hypothese greift hier nicht.
- **maDMP und Vibe Coding (Hypothese Existenzabgrenzung).** Beide sind schon als Gradunterschiede formuliert, „machine-actionable in a stronger, operative sense" (3.4) und „Vibe Coding survives inside the method as an exploratory mode" (2.5). Keine Korrektur nötig.
- **Schwierigkeitsprofil in 6.5 (Hypothese Dopplung).** Die Wiederkehr trägt echten argumentativen Dienst als Prämisse des Transferschlusses (Befund 6). Die Hypothese greift nur formal, nicht substanziell.
- **Querverweisdichte (Hypothese).** 86 Verweise sind viel, doch der Großteil ist tragend und im Zwei-Übersetzungen-Bau des Papers begründet (die Ketten von 2.4, 3.4, 6.2). Belastend sind nur die rekapitulierenden Bündelverweise (Befund 4) und die inventarischen Roadmaps (Befund 1, 2), nicht die Verweise als solche. Ein pauschaler Abbau würde die Argument-Kohäsion beschädigen.

## c) Ungefragte Befunde

- **Refrain „modelling, specifying, and verifying".** Die Trias erscheint in Abstract, Sektion 1, 3.5, 6.4 und 7. Als Kernclaim ist der Refrain gewollt und liegt unter der Schwelle von Regel 6 (kein rhetorischer Parallelismus, sondern wiederkehrende Sachaussage). Kein Eingriff empfohlen, nur als bewusster Refrain vermerkt.
- **Referenz Macedo 2026, `arXiv:2606.04967`.** Die arXiv-ID `2606` datiert auf Juni 2026 und liegt nach dem Schreibdatum 2026-07-23 nur knapp; die ID-Form ist plausibel, aber vor Einreichung an der Quelle zu verifizieren (steht in paper-writing.md als „Macedo 2026" bereits als gesetzt, die ID selbst ist dort nicht gegengeprüft vermerkt).
- **`[^precedent]` und `[^stanicka]` als benannte Fußnoten ohne Ankertext-Prüfung.** Beide sind inhaltlich sauber, doch `[^precedent]` (Mariani PROV-A) sitzt in 4.1 und trägt zwei Gedanken (client-seitiger Präzedenzfall plus Wikidata-Gegenweg Leipold), was für eine Fußnote dicht ist. Kein Regelverstoß, nur ein Hinweis auf Fußnoten-Überladung an einer Stelle.
- **Semikolon-als-Konnektor.** paper-writing.md, Weg zur Einreichung Schritt 1, vermerkt bewusst belassene Semikolon-Fälle in 3 bis 7. Bestätigt, sie sind zahlreich (etwa 3.5, 5.1, 6.2), aber Regel 5 stuft sie nicht als Kernverbot ein. Kein Eingriff, nur Bestätigung des dokumentierten Stands.
- **Doppelung Findability-Lücke.** Die FAIR4RS-Findability-Lücke wird in 4.1 („Findability, by contrast, fails by default") und in 6.3 („What remains open is findability") entwickelt. Beide tragen unterschiedliche Pointen (4.1 die Publikationsarbeit zum Schließen, 6.3 die Registry-Anbindung an Grallert), daher keine echte Dublette, aber ein Grenzfall, den der Operator im Blick behalten kann.

## d) Gesamt-Wortzahl-Bilanz aller Vorschläge

| Befund | Delta (Wörter) | Priorität |
|---|---|---|
| 1 Roadmap Sektion 1 | rund minus 16 (Straffung minus 50) | mittel |
| 2 Opener Sektion 2 | rund minus 35 bis minus 50 | mittel |
| 3 SDD Existenz zu Grad | plus/minus 0 | Positionierung |
| 4 Rekap-Satz 2.5 | minus 25 | hoch |
| 5 RSE-Antworten-Dublette 2.4 | rund minus 25 | hoch |
| 6 Schwierigkeitsprofil 6.5 | 0 (bewusst belassen) | keine |
| 7 Infrastruktur 5.1 | rund minus 60 | mittel |
| 8 RO-Crate | plus/minus 0 | niedrig |
| 9 Opener 3.3 | minus 7 | mittel |

Summe der reinen Kürzungsvorschläge rund minus 170 bis minus 220 Wörter, ohne die zwei Formulierungs­befunde (3, 8) mit Nulldelta. Das ist rund ein bis anderthalb Prozent des Fließtexts, in Übereinstimmung mit dem Gesamtbefund, dass der Text redaktionell weit gediehen ist und die Vorschläge Feinschliff sind. Kein Vorschlag schwächt einen Beleg oder eine Behauptung; alle Kürzungen betreffen Rahmung, Rekapitulation und Infrastruktur-Detail, nicht Substanz.
