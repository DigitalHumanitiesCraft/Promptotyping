---
title: Recherche Spec-Driven-Development-Abgrenzung
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: draft
language: de
version: 0.1
created: 2026-07-24
updated: 2026-07-24
authors: [Christopher Pollin]
generated-with: Claude Code mit Claude Opus 5
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
related: [paper, paper-writing, revision-knowledge, revision-audit-a0, revision-audit-a3]
---

# Recherche Spec-Driven-Development-Abgrenzung

Belegte Prüfung der vier Fragen, die die Abgrenzungsformel in Sektion 2.5 voraussetzt, gegen die Dokumentation der einschlägigen Frameworks, dazu ein Formulierungsvorschlag und die Verankerung der Quellen im Grounded Vault. Alle Abrufe am 2026-07-24, sofern nicht anders vermerkt. Wo eine Aussage nicht belegbar war, steht der Negativbefund.

## 1. Recherchebefunde je Framework

Geprüft wurden die drei vom Auftrag genannten Frameworks plus OpenSpec, das zur Vergleichsmenge von Macedo 2026 gehört und das Bild der Welle vervollständigt. Tessl wurde geprüft und ohne Vault-Aufnahme belassen, siehe Abschnitt 6.

### 1.1 GitHub Spec Kit

Quellen: Ankündigungsposting <https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/> (Datum auf der Seite 2. September 2025); Repository-Metadaten <https://api.github.com/repos/github/spec-kit>; Templates und Methodendokument aus <https://github.com/github/spec-kit> (Release v0.14.1, veröffentlicht 2026-07-23) sowie die Tags v0.0.1, v0.0.20, v0.0.55. Abruf 2026-07-24.

**Öffentliche Existenz.** Repository angelegt 2025-08-21, öffentliche Ankündigung 2025-09-02. Die Datierung der Paper-Fußnote `[^sdd]` („September 2025") stimmt.

**Datenschicht.** Der Befund widerspricht der Paper-Formel direkt. Das Plan-Template führt `data-model.md` als eigenes Phase-1-Artefakt in seinem Dateibaum, gleichrangig mit `research.md`, `contracts/` und `quickstart.md`. Das Methodendokument beschreibt den Plan-Schritt unter anderem als „Generates supporting documents for data models, API contracts, and test scenarios". Das Spec-Template trägt einen Abschnitt „Key Entities *(include if feature involves data)*" mit den Platzhaltern „**[Entity 1]**: [What it represents, key attributes without implementation]" und „**[Entity 2]**: [What it represents, relationships to other entities]". Eine Datenbeschreibung existiert also als benanntes Artefakt. Ihr Gegenstand ist das Entitätenmodell des zu bauenden Systems, abgeleitet aus den Anforderungen. Vorgängige externe Quellen und ihre Semantik bleiben außerhalb dessen, was dieses Artefakt beschreibt.

**Unsicherheit.** Spec Kit kennt eine verpflichtende Unsicherheitsmarkierung, „1. **Mark all ambiguities**: Use [NEEDS CLARIFICATION: specific question] 2. **Don't guess**: If the prompt doesn't specify something, mark it". Markiert wird Unterspezifikation der Anforderung, etwa ein ungeklärtes Authentifizierungsverfahren. Unsicherheit in einer Quelle kommt nicht vor.

**Verifikation.** Sie ist explizit und dem Menschen zugewiesen. „Crucially, your role isn't just to steer. It's to verify. At each phase, you reflect and refine. […] The AI generates the artifacts; you ensure they're right." Maschinell laufen `/speckit.analyze` („Cross-artifact consistency & coverage analysis") und `/speckit.checklist` („validate requirements completeness, clarity, and consistency"). Gegenstand ist durchweg interne Kohärenz, Abdeckung und Codequalität. Eine Bindung an fachliche Richtigkeit fehlt.

**Rolle.** Sie ist benannt, wenn auch schwach. „instead of reviewing thousand-line code dumps, you, the developer, review focused changes". Daneben steht das Team-Review versionierter Spezifikationen. Das Bundle-System stellt Setups für „a whole team persona (product manager, business analyst, security researcher, developer, …)" bereit, das sind Werkzeugpakete pro Rolle. Eine Rolle, die über fachwissenschaftliche Kompetenz definiert ist, gibt es nicht.

**Adressierung.** Hier liegt der zweite Befund gegen die naheliegende Formulierung. Das Spec-Template trug in den frühen Tags (v0.0.1, v0.0.20, v0.0.55) wörtlich „- 👥 Written for business stakeholders, not developers" und in der Review-Checkliste „- [ ] Written for non-technical stakeholders". Die Behauptung, in Spec-Driven Development seien beide Seiten Entwickler, ist damit für Spec Kit falsch. Die Gegenprobe am aktuellen Stand zeigt eine Veränderung. In v0.14.1 und auf `main` enthält dieselbe Datei keine Adressatenaussage mehr, einziger Treffer auf „business" ist der Erfolgskriterien-Platzhalter „**SC-004**: [Business metric …]". Ob die Streichung eine bewusste Neupositionierung ist, sagt das Repository nicht.

### 1.2 AWS Kiro

Quellen: Launch-Posting <https://kiro.dev/blog/introducing-kiro/> (Datum auf der Seite 14. Juli 2025); <https://kiro.dev/docs/specs/feature-specs/> (Seitenfuß „Page updated: July 22, 2026"); <https://kiro.dev/docs/steering/>. Abruf 2026-07-24.

**Öffentliche Existenz.** 2025-07-14. Die Fußnoten-Datierung „July 2025" stimmt.

**Datenschicht.** Ebenfalls vorhanden und ebenfalls systembezogen. Das Design-Dokument entsteht aus Codebasis und freigegebenen Anforderungen und „creates data flow diagrams, TypeScript interfaces, database schemas, and API endpoints". Die Dokumentation charakterisiert `design.md` als „technical architecture, sequence diagrams, and implementation considerations". Die persistente Kontextschicht (Steering) besteht aus `product.md`, `tech.md` und `structure.md`, also Produktzweck, Technologiestack und Projektstruktur. Keine dieser Dateien beschreibt Datenquellen oder deren Semantik.

**Verifikation.** Anforderungen sind in EARS-Notation geschrieben („WHEN [condition/event] THE SYSTEM SHALL [expected behavior]"), was Prüfbarkeit gegen Testfälle herstellt. Vor dem Design lässt sich eine Analyse „for logical inconsistencies, ambiguities, conflicting constraints, and gaps" anfordern, wieder interne Kohärenz. Approval Gates zwischen den Phasen sind Standard, ihr Wegfall ist die Ausnahme („Quick Spec runs all three phases automatically without approval gates between them").

**Rolle.** Negativbefund. Die Dokumentation nennt Approval Gates, ohne zu benennen, wer für die Freigabe kompetent ist.

**Adressierung.** Als Nutzen der Feature Specs steht „Collaboration - Shared artifacts for product and engineering alignment". Über Produkt- und Entwicklungsrollen hinaus wird keine Leserschaft genannt.

### 1.3 BMAD-METHOD

Quellen: Repository-Metadaten <https://api.github.com/repos/bmad-code-org/BMAD-METHOD>; README aus <https://github.com/bmad-code-org/BMAD-METHOD>; <https://docs.bmad-method.org/reference/agents/>; <https://docs.bmad-method.org/reference/workflow-map/>. Abruf 2026-07-24.

**Öffentliche Existenz.** Repository angelegt 2025-04-13. Die Fußnoten-Datierung „April 2025" stimmt. BMAD ist damit der früheste Vertreter der Welle unter den hier geprüften.

**Datenschicht.** Negativbefund. Die Workflow-Map listet als Phasenausgaben Brief, PRD, SPEC, UX-Design, Architektur, Epics, Stories, Sprint-Status und Review-Ergebnisse. Ein Artefakt, dessen Zweck die Beschreibung externer Datenquellen oder ihrer Semantik wäre, kommt nicht vor. Die Analyst-Rolle führt „Domain Research", was Problemraum- und Marktrecherche meint.

**Verifikation.** Zwei Gates, `bmad-check-implementation-readiness` („PASS/CONCERNS/FAIL decision") vor der Implementierung und `bmad-code-review` („Approved or changes requested") danach. Das Spec-Artefakt wird validiert, „so every load-bearing source claim is preserved", also gegen die eigene Eingabe. Ein Abgleich mit einem Gegenstand außerhalb der Eingabe ist damit nicht gemeint.

**Rolle.** BMAD ist das rollenreichste Framework der Welle, und genau deshalb der härteste Test. Die Standardbesetzung umfasst Analyst, Product Manager, Architect, Developer, UX Designer und Technical Writer. Diese Rollen sind Agent-Skills im Werkzeug, jede installiert und aufgerufen als Skill („Each agent is invoked as a skill"). Menschliche Kompetenz definieren sie damit an keiner Stelle. Der Mensch erscheint als Partner, dessen Denken die Workflows herauslocken sollen („act as expert collaborators who guide you through a structured process to bring out your best thinking in partnership with the AI"). Eine an Fachkompetenz gebundene Prüfpflicht ist nicht definiert.

**Adressierung.** Die Dokumentation benennt als Adressaten die Agenten der jeweils nächsten Phase („Each document becomes context for the next phase. The PRD tells the architect what constraints matter."). Eine Leserschaft jenseits von Agenten und dem mitarbeitenden Menschen wird nicht genannt.

### 1.4 OpenSpec

Quellen: Repository-Metadaten <https://api.github.com/repos/Fission-AI/OpenSpec>; README aus <https://github.com/Fission-AI/OpenSpec>. Abruf 2026-07-24.

**Öffentliche Existenz.** Repository angelegt 2025-08-05. Die Fußnoten-Datierung „August 2025" stimmt.

**Datenschicht.** Negativbefund. Ein Change-Proposal erzeugt `proposal.md`, `specs/`, `design.md` und `tasks.md`. Kein Artefakt beschreibt externe Datenquellen.

**Verifikation.** „Your AI writes these; you review the plan before any code is written." Prüfgegenstand ist der Plan.

**Rolle.** Negativbefund für eine fachlich definierte Rolle. Interessant ist die Team-Konstruktion, „a platform team owns the specs; product teams reference them read-only", die die Spezifikation zu einem von mehreren Parteien gelesenen Objekt macht. Ob eine dieser Parteien ohne Softwarekompetenz ist, sagt die Dokumentation nicht.

### 1.5 Zusammenfassung der Befundlage

Über alle vier Frameworks hinweg zeichnet sich dasselbe Muster ab. Datenbeschreibung existiert (Spec Kit, Kiro) oder fehlt (BMAD, OpenSpec), beschreibt aber in keinem Fall vorgängige externe Quellen. Verifikation existiert überall und prüft überall interne Kohärenz, Abdeckung und Codequalität. Eine benannte menschliche Prüfrolle existiert bei Spec Kit (der Entwickler), fehlt bei Kiro und OpenSpec, und ist bei BMAD in Agent-Personas verlagert. Fachliche Kompetenz als definierendes Merkmal der Prüfrolle kommt nirgends vor. Nicht-Entwickler werden bei Spec Kit historisch ausdrücklich adressiert und über das Bundle-System weiterhin mit Rollen-Setups bedient, bei Kiro als Produktseite, bei BMAD und OpenSpec nicht.

## 2. Bewertung der bestehenden Formel

Bestehender Satz (Sektion 2.5): „Where these frameworks specify software products from requirements, Promptotyping specifies research artefacts derived from modelled research data, and three layers have no counterpart in them."

Die Recherche trägt zwei der drei Schichten in der Gradform und keine in der Existenzform.

Die Datenschicht-Behauptung ist in der vorliegenden Formulierung am Material widerlegbar. Ein Gutachter aus dem Software-Engineering öffnet das Plan-Template von Spec Kit und findet eine Datei namens `data-model.md`; im Spec-Template findet er einen Abschnitt „Key Entities". Die sachliche Differenz bleibt bestehen und ist sogar präziser fassbar als bisher, weil sie am Gegenstand der Beschreibung hängt, am zu bauenden System gegen die vorgängige Quelle. Die Existenzformel wirft diesen Vorteil weg und tauscht ihn gegen eine Angriffsfläche.

Die Verifikations-Behauptung ist in der Existenzform ebenfalls unhaltbar, weil Verifikation in der Welle als Kernversprechen auftritt; die Spec-Kit-Ankündigung macht sie zur ausdrücklichen Pflicht des Menschen. Was fehlt, ist die Bindung an fachliche Verantwortung. Das ist genau der Gradbefund, den A3 formuliert hat.

Die Rollen-Behauptung ist die stärkste der drei und hält auch nahe an der Existenzform, weil keine Dokumentation eine über Fachkompetenz definierte Prüfrolle kennt. Sie wird aber durch die Nachbarschaft der beiden schwächeren Behauptungen mit entwertet, denn „three layers have no counterpart" steht als eine Aussage, und ein widerlegter Bestandteil zieht die anderen mit.

Hinzu kommt ein Alterungsproblem. Die Formel behauptet eine Eigenschaft schnell laufender Software ohne datierten Abrufanker. Selbst wo sie heute zuträfe, würde sie ohne Datierung still falsch werden.

**Zur dritten Differenz des Auftrags.** Die Doppeladressierung trägt, aber nicht in der Form „in Spec-Driven Development sind beide Seiten Entwickler". Diese Prämisse ist für Spec Kit belegt falsch (frühe Templates adressieren ausdrücklich Business-Stakeholder und Nicht-Techniker) und für Kiro halb falsch (Produkt-Engineering-Abstimmung). Was übrig bleibt und trägt, ist eine Differenz in der Art der Zuständigkeit. Der Nicht-Entwickler in der Industrie-Spezifikation ist Auftraggeber der Software, seine Wünsche werden protokolliert und weitergereicht. Der Wissenschaftler im Promptotyping-Dokument ist Autorität über den Gegenstand, und die Gültigkeit des Artefakts hängt an der Richtigkeit dessen, was er über seine Quellen aussagt. Das ist der Boundary-Object-Punkt aus 2.4 in einer Form, die die Recherche aushält.

## 3. Formulierungsvorschlag

### 3.1 Steelman der bestehenden Fassung

Die stärkste Verteidigung liest „no counterpart" funktional. Behauptet wäre dann, dass keines der Frameworks eine Schicht führt, die dasselbe leistet; die Namensgleichheit einzelner Artefakte bliebe folgenlos. Unter dieser Lesart ist `data-model.md` gerade kein Gegenstück zum Datendokument, weil sein Gegenstand das zu bauende System bleibt. Die Formel wäre wahr und die Recherche bestätigte sie. Dazu kommt ein argumentativer Nutzen. Die scharfe Form ist es, die den Anspruch stützt, Promptotyping sei eine eigene Methode; die Gradform lädt die Gutachterfrage ein, ob hier Spec-Driven Development mit domänenspezifischen Dokumenten vorliegt. In einem DH-Venue, dessen Leserschaft die Frameworks nicht im Detail kennt, kostet die Präzisierung Schärfe und bringt wenig.

**Was der Steelman nicht übersteht.** Erstens hängt der argumentative Nutzen an einer Lesart, die der Satz nicht mitliefert. Die Wendung „have no counterpart in them" ist eine Aussage über die Frameworks und wird als solche gelesen; die funktionale Lesart müsste im Text stehen, um zu wirken, und dann wäre der Satz ohnehin umformuliert. Zweitens ist die Falsifikation billig. Wer die Behauptung prüfen will, öffnet ein Template und findet einen Dateinamen; eine Behauptung, deren rhetorischer Wert Präzision ist, verliert an dieser Stelle mehr als sie gewinnt. Drittens ist der Rollen-Punkt, der wirklich trägt, in der Existenzform gar nicht erkennbar, weil er mit zwei schwächeren Behauptungen in einem Satz steht. Viertens schützt die Gradform gegen die Gutachterfrage besser, weil sie sie beantwortet statt sie zu vermeiden. Die Antwort lautet, dass sich der Gegenstand der Beschreibung, der Gegenstand der Prüfung und die Zuständigkeit für die Prüfung verschieben, und dass diese Verschiebungen zusammen eine andere Arbeitsteilung ergeben.

### 3.2 Vorschlag, ausgeführte Fassung

Ersetzt den bestehenden `_Spec-Driven Development_`-Absatz in Sektion 2.5. Fußnoten `[^sdd]` und `[^5]` bleiben an Ort.

> _Spec-Driven Development_ names the software industry's own corrective to the reliability problem of unreviewed generation. Through 2024 and 2025 a wave of agentic coding frameworks converged on maintaining specifications as the source of truth from which LLM-based agents for software engineering (Liu et al. 2024) implement,[^sdd] among them GitHub's Spec Kit;[^5] a first process taxonomy of these frameworks exists (Macedo 2026). Promptotyping belongs to this movement and shares its core commitments, the versioned document set as the unit that governs the agent, the separation of intent from implementation, and a human checkpoint between generation and acceptance. What separates the two is a matter of weight. Spec Kit generates a data model in its planning phase and Kiro's design document carries schemas and interfaces, each of them describing the system under construction as derived from its requirements. The data document of Promptotyping describes sources that exist before the artefact and outlast it, with their semantics, their encoding decisions and the uncertainty a historical record carries. Review runs everywhere in this wave, and what it examines is internal coherence, coverage and code quality. Promptotyping binds the specification to the scholarly verification duties of Section 6.2, where the question is whether the artefact holds against the material. Ownership of that duty shifts with it. Spec Kit assigns review to the developer and Kiro leaves its approval gate unattributed, while Promptotyping installs the Critical Expert in the Loop, a role that combines domain competence with knowledge of the failure modes of the model.
>
> A further difference lies in whom the documents address. Industry specifications reach beyond developers, and they reach a stakeholder who wants the software and whose wishes the specification records for the agent to implement. A Promptotyping document addresses the scholar as the authority over the subject matter, so the file the agent parses is the same file in which the scholar states what the sources are and how the research practice runs. This is the boundary-object function of Section 2.4 under the conditions of agentic tooling, and it is where the doubling of translation becomes visible against the industry comparison. Provenance adds a smaller point. The definition here is contemporaneous with the label and grew independently from scholarly editing practice (Section 2.6).

Wortzahl-Bilanz: 161 Wörter bestehend gegen 371 vorgeschlagen, also plus 210. Der Absatz wächst damit deutlich über das Format der übrigen vier Diskursterme in 2.5 hinaus.

### 3.3 Vorschlag, kompakte Fassung

Falls die Proportionen von 2.5 gehalten werden sollen. Ein Absatz, ohne die namentliche Nennung von Kiro und BMAD im Fließtext, die in `[^sdd]` bereits stehen.

> _Spec-Driven Development_ names the software industry's own corrective to the reliability problem of unreviewed generation. Through 2024 and 2025 a wave of agentic coding frameworks converged on maintaining specifications as the source of truth from which LLM-based agents for software engineering (Liu et al. 2024) implement,[^sdd] among them GitHub's Spec Kit;[^5] a first process taxonomy of these frameworks exists (Macedo 2026). Promptotyping belongs to this movement and shares its core commitments, the versioned document set as the unit that governs the agent, the separation of intent from implementation, and a human checkpoint between generation and acceptance. What these frameworks keep at the periphery is constitutive here. Their data artefacts describe the system under construction as derived from its requirements. The data document of Promptotyping describes sources that precede the artefact and carry their own semantics and their own uncertainty. Review across the wave examines internal coherence, coverage and code quality. Promptotyping binds the specification to the scholarly verification duties of Section 6.2 and installs the Critical Expert in the Loop as the role that owns them, defined by domain competence together with knowledge of the failure modes of the model. Address shifts in the same direction. An industry specification records what a stakeholder wants from the software, whereas a Promptotyping document is at the same time the statement in which a scholar accounts for their own sources and the source from which the artefact is derived, the boundary-object function of Section 2.4 under agentic conditions. The definition here is contemporaneous with the label and grew independently from scholarly editing practice (Section 2.6), a smaller point behind the substantive ones.

Wortzahl-Bilanz: 161 Wörter bestehend gegen 269 vorgeschlagen, also plus 108.

### 3.4 Anmerkungen zum Vorschlag

Der Datierungs-Punkt aus Abschnitt 2 ist in beiden Fassungen nicht gelöst. Empfehlung, die Aussagen über die Framework-Artefakte in `[^sdd]` mit einem Abrufdatum zu versehen, etwa durch einen Zusatz am Ende der Fußnote in der Art „Framework artefacts as documented in July 2026". Das kostet eine Zeile und macht die Behauptung alterungsfest.

Die ausgeführte Fassung nennt Spec Kit und Kiro namentlich im Fließtext. Nach Sprachregel 18 und 21 aus `paper-writing.md` erhält jedes namentlich genannte Werkzeug bei Ersterwähnung eine Fußnote; Spec Kit hat sie (`[^5]`), Kiro steht bisher nur in `[^sdd]` mit URL. Die Nennung im Fließtext ist damit abgedeckt, falls `[^sdd]` an der ersten Stelle steht, an der Kiro fällt. Sonst ist eine eigene Fußnote nötig.

Beide Fassungen verzichten auf jedes Effizienzargument und auf jeden quantitativ-empirischen Belegabspruch. Die Selbstprüfung gegen die vier Kernverbote und gegen den Prüfkatalog in `paper-writing.md` ist gelaufen; die verbleibenden Semikola stehen in parallelen Reihen, die Aufzählungen zu dritt sind sachliche Aufzählungen von genau drei Gegenständen.

## 4. Angelegte Vault-Quellen

Vier Quellen in `vault/`, jeweils als Tripel aus Original, Repräsentation und Distillat nach `knowledge/schema.md`. Channel `collection`, Topic `Frame`, Status `grounded` mit `checked.validation: 2026-07-24`. Claims wurden absichtlich keine angelegt.

| Quelle | `_sources/` | `00_representation/documents/` | `10_distillates/documents/` |
|---|---|---|---|
| GitHub Spec Kit | `sdd-spec-kit-2026-07-24.md` | `sdd-spec-kit-2026-07-24.md` | `sdd-spec-kit-2026-07-24.md` |
| AWS Kiro | `sdd-kiro-2026-07-24.md` | `sdd-kiro-2026-07-24.md` | `sdd-kiro-2026-07-24.md` |
| BMAD-METHOD | `sdd-bmad-method-2026-07-24.md` | `sdd-bmad-method-2026-07-24.md` | `sdd-bmad-method-2026-07-24.md` |
| OpenSpec | `sdd-openspec-2026-07-24.md` | `sdd-openspec-2026-07-24.md` | `sdd-openspec-2026-07-24.md` |

Die Originale sind Exzerpt-Sammlungen, die pro Exzerpt die Abruf-URL, das Abrufdatum und, wo das Artefakt versioniert ist, den Versionsanker tragen (Spec Kit Release v0.14.1 und die Tags v0.0.1/v0.0.20/v0.0.55, Repository-Metadaten aus der GitHub-API). Damit ist jeder Anker gegen eine nachprüfbare Fassung aufgelöst. `_sources/` ist gitignored, die Provenienz steht deshalb zusätzlich im Lead und in der `converter`-Angabe der Repräsentation.

Insgesamt liegen 39 Core Statements über die vier Distillate. Für die Claims der späteren Lane sind die folgenden sieben Ankergruppen die tragenden:

- Datenschicht Spec Kit: `sdd-spec-kit-2026-07-24#^s3` und `#^s4`
- Datenschicht Kiro: `sdd-kiro-2026-07-24#^s3`, `#^s4`, `#^s8`
- Datenschicht Negativbefunde: `sdd-bmad-method-2026-07-24#^s10`, `sdd-openspec-2026-07-24#^s7`
- Verifikationsgegenstand: `sdd-spec-kit-2026-07-24#^s6` und `#^s8`, `sdd-kiro-2026-07-24#^s5` und `#^s6`, `sdd-bmad-method-2026-07-24#^s7`, `sdd-openspec-2026-07-24#^s5`
- Rolle: `sdd-spec-kit-2026-07-24#^s7`, `sdd-kiro-2026-07-24#^s10`, `sdd-bmad-method-2026-07-24#^s3` und `#^s4`
- Adressierung: `sdd-spec-kit-2026-07-24#^s11` und `#^s12`, `sdd-kiro-2026-07-24#^s9`, `sdd-bmad-method-2026-07-24#^s9`, `sdd-openspec-2026-07-24#^s6`
- Datierungen: `sdd-spec-kit-2026-07-24#^s1`, `sdd-kiro-2026-07-24#^s1`, `sdd-bmad-method-2026-07-24#^s1`, `sdd-openspec-2026-07-24#^s1`

Die Inventarzeilen stehen in `vault/knowledge/state.md`, dazu ein Eintrag unter „Open work", der die beiden entscheidungsbedürftigen Befunde für die Claim-Lane festhält.

**Validierung.** `python tools/validate.py .` aus `vault/` meldet „0 error(s), 0 warning(s) / OK vault conforms to its schema" (Endstand 2026-07-24). Zwischenzeitlich standen drei `E-ORPHAN`-Fehler an, sämtlich auf noch nicht in einer Topic-Map registrierten Claim-Dateien einer parallel arbeitenden Lane; sie wurden von dieser Lane selbst aufgelöst und nicht angefasst. Die Isolationsprobe auf einer Arbeitskopie ohne die Dateien der Parallel-Lane lief ebenfalls fehlerfrei durch, die hier angelegten zwölf Dateien erzeugen also weder Fehler noch Warnung.

## 5. Prüfung der Referenz Macedo 2026

Geprüft gegen die arXiv-API (<http://export.arxiv.org/api/query?id_list=2606.04967>) und die Abstract-Seite (<https://arxiv.org/abs/2606.04967>), Abruf 2026-07-24.

Der Eintrag existiert. Version v1, eingereicht 2026-06-03T14:49:15Z, Kategorien cs.SE und cs.AI. Titel laut arXiv: „From Prompt to Process: a Process Taxonomy and Comparative Assessment of Frameworks Supporting AI Software Development Agents". Autorenschaft: „Sanderson Oliveira de Macedo", Einzelautor. Der CSL-Datensatz in `vault/references/macedo-2026-from-prompt-to-process.json` stimmt in Titel, Autorennamen, Jahr, Nummer und URL überein. Kein Korrekturbedarf.

Zwei Randbefunde. Erstens ist der Eintrag ein Preprint ohne Peer Review; die Wendung des Papers „a first process taxonomy of these frameworks exists (Macedo 2026)" übernimmt damit einen Neuheitsanspruch, den die Quelle über sich selbst erhebt („a study centered on the operational frameworks that turn these capabilities into process is missing"). Eine attribuierende Formulierung („which presents itself as the first process taxonomy") wäre robuster. Zweitens deckt Macedos Vergleichsmenge sechs Frameworks ab (GitHub Spec Kit, OpenSpec, BMAD Method, Get Shit Done, Spec Kitty, Reversa) und damit weder Kiro noch Tessl. Die Quelle trägt also die Taxonomie-Aussage; für die Vollständigkeit der Wellen-Aufzählung in `[^sdd]` steht sie nicht ein.

## 6. Offene Punkte

- **Entscheidung Existenz gegen Grad.** Der Vorschlag setzt die Gradform um. Die Recherche stützt diese Richtung mit belegbaren Gegenbeispielen zur Existenzform, die Entscheidung bleibt Positionierung des Operators.
- **Entscheidung Länge.** Ausgeführte Fassung gegen kompakte Fassung. Die ausgeführte trägt die Differenz sichtbar, sprengt aber das Format der übrigen vier Diskursterme in 2.5.
- **Datierung der Framework-Aussagen.** Empfehlung eines Abrufdatums in `[^sdd]`, ausstehend als Operator-Entscheidung.
- **Tessl.** Das Paper datiert Tessl in `[^sdd]` auf November 2024. Belegt ist für dieses Datum die Finanzierungs- und Positionsankündigung des Unternehmens (TechCrunch und Fortune, beide 2024-11-14), zu der Zeit mit Warteliste und ohne veröffentlichtes Produkt. Eine primäre Framework-Dokumentation mit datiertem Abruf war über den Blog nicht auffindbar; Tessl wurde deshalb nicht in den Vault aufgenommen. Falls das Paper Tessl weiter als Wellenmitglied führt, wäre die Fußnotenangabe als Datum der Positionsankündigung zu präzisieren.
- **Claims.** Die sieben in Abschnitt 4 benannten Ankergruppen sind claim-reif und einer späteren Lane überlassen. Topic-Map wäre `MOC-Frame`.
- **Machine Review.** Die vier Distillate stehen auf `grounded`. Der Fremdfamilien-Review nach `vault/knowledge/specification.md` ist operator-gated und für diese Quellen noch nicht gelaufen.
- **Nebenbefund zur Adressierungs-Prämisse.** Die Formulierung des Auftrags („in Spec-Driven Development sind beide Seiten Entwickler") ist am Material widerlegt. Der Vorschlag rettet die Differenz in einer Form, die die Recherche trägt. Falls der Operator die stärkere Prämisse behalten will, müsste sie auf Kiro und BMAD eingeschränkt und Spec Kit ausgenommen werden, was die Aussage entwertet.
