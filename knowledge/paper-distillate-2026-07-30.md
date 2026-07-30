# Paper-Destillat: Promptotyping (Fassung 4, Stand 2026-07-30)

Einseitige Synthese des Manuskripts „Promptotyping. Translating Research Data into Research Artefacts through Context Engineering and Agentic Engineering" für die schnelle Gesamtlektüre. Quelle ist `knowledge/paper-draft.md`; dieses Dokument ist ein datierter Snapshot und wird nicht fortgeschrieben.

## Problem

Wissenschaftliches Arbeiten mit digitalen Forschungsdaten läuft über Software, und generische Werkzeuge operationalisieren nur die Unterscheidungen ihres eigenen Datenmodells. Eine CSV wird in Gephi unmittelbar zum Netzwerk; projektspezifisches TEI muss erst interpretierend in das Werkzeugformat abgebildet werden, wobei projekteigene Semantik und Unsicherheit verloren gehen. Wer eigene Fragen an eigene Daten stellt, braucht projektspezifische Artefakte, hatte dafür aber bisher selten die Entwicklungskapazität. LLM-basierte Codegenerierung senkt diese Schwelle und macht es praktikabel, alternative Operationalisierungen zu bauen und zu vergleichen.

## Methode

Promptotyping ist eine iterative, wissensgetriebene Methode, die projektspezifische digitale Forschungsartefakte aus strukturierten Forschungsdaten und gepflegtem Projektwissen mittels Context Engineering (Pflege und aufgabenspezifische Bereitstellung des Projektwissens) und Agentic Engineering (Organisation der agentischen Arbeit im AI Harness) entwickelt.

Tragende Struktur ist die versionierte **Projektwissensbasis** aus verschränkten Knowledge Documents in drei Funktionstypen. Deklarative Dokumente halten fest, was gilt und was das Artefakt leisten soll. Prozessdokumente bewahren Entscheidungen und ihre Begründungen. Aktionsdokumente steuern das Agentenverhalten. Die Typologie ist diagnostisch, ein Fehler verweist auf die Wissensschicht, die versagt hat. Ergänzend liefern Derived Context Artefacts (reproduzierbar erzeugte Reports wie Korpusprofile) Beobachtungen ohne die Autorität gepflegter Aussagen.

Vier **Arbeitsformen** kehren wieder, ohne feste Phasen zu sein. Preparation macht Quellenbasis und Zweck explizit. Exploration klärt, was die Daten belastbar tragen. Distillation übersetzt das Verständnis in Knowledge Documents und gilt als pragmatische Modellierung; ihr Suffizienztest ist, dass eine frische Agenteninstanz allein mit den Dokumenten weiterarbeiten kann. Implementation macht das Wissen über einen Agenten handlungsfähig, in begrenzten, inspizierbaren Inkrementen. Kernmechanismus ist das **Write-back**: eine Korrektur wird erst folgenreich, wenn sie in die Wissensbasis zurückfließt, die reine Code-Reparatur lässt den Fehler wiederkehren.

Ein **Promptotype** ist der akzeptierte Iterationszustand, der vier Dinge identifizierbar verbindet: gepflegtes Projektwissen, Artefakt, referenzierten Datenstand und dokumentierte Abnahmegründe. Abnahme ist zweckgebunden (vom Antragsdemonstrator bis zum Publikationsartefakt) und beendet das Projekt nicht.

## Prüfarchitektur

Vier Prüfformen mit verschiedener Evidenz und Autorität, die nie verrechnet werden:

1. **Deterministische Validation** entscheidet formalisierte Bedingungen (Schemas, Tests); Agenten dürfen sie ausführen.
2. **Agentic Review** vergleicht Output mit Referenzen und liefert Evidenz ohne Autorisierungskraft.
3. **Critical-Expert-Verifikation** beurteilt Quellentreue, Design und Interpretation; diese Autorität bleibt bei Personen.
4. **Acceptance Testing** prüft Konformität mit formulierten Kriterien, ohne deren Angemessenheit zu belegen.

Formalisierung läuft nur in eine Richtung, verifizierte Regeln können zu Validation gerinnen, bestandene Formalprüfungen belegen nie die Angemessenheit des Formalisierten. Im Interface bleiben human-checked, agent-checked und unchecked getrennt. Grundsatz ist die Trennung von Evidenz und Autorität: dass ein System Befunde erzeugen kann, verleiht ihm keine Urteilskompetenz, und bloße menschliche Anwesenheit garantiert keine kompetente Verifikation.

## Epistemik

Generative Systeme verstärken Forschung asymmetrisch (Asymmetric Amplification), am direktesten dort, wo Material und Operationen digital repräsentiert sind, und ungleich verteilt nach Domänenwissen, Urteilsfähigkeit und Infrastrukturzugang. Artefakte sind in der DH-Tradition Argumente; der Forschungsbeitrag liegt in Interpretation und Revision, die Bau und Nutzung ermöglichen (Backtalk). Externalisierbar ist der artikulierbare Teil der Kompetenz; Korpusvertrautheit und Verantwortung bleiben bei Personen. An die Stelle exakter Reproduzierbarkeit des generativen Prozesses tritt **Reconstructability**, die Rekonstruierbarkeit der akzeptierten Relation.

## Fälle

| Fall | Befund |
|---|---|
| SZD-HTR | Produktionsskalige Verifikation braucht sichtbare Provenienz und Autorität der Prüfungen |
| CorrespExplorer | Generative Optionen erfordern Auswahl nach Domänenkriterien; Unsicherheit als Intervalle; Session-Degradation führte zu revidierter Arbeitsorganisation |
| M³GIM | Interface-Interaktion deckt Modellierungsprobleme auf, das Promptotype wirkt prospektiv an der Modellbildung mit |
| ZBZ | Agent-Screening hatte unautorisierte Approval-Autorität; Entscheidung E66 entzog sie und wurde Methodenregel |
| Notker | Zweckgebundene Abnahme als Antragsdemonstrator vor der Förderung |
| coOCR/HTR | Prüfformen und Quellenkontext müssen explizit getrennt sein |
| teiCrafter | Formale Validität belegt keine adäquate Kodierung |

Querschnittsbefund: Implementation wird methodisch produktiv, wenn die von ihr aufgeworfenen Fragen externalisiert und zurückgeschrieben werden.

## Grenzen und Evaluation

Die Evidenz stammt aus der Praxis eines hybriden Scholar-Developers, ohne Kontrollbedingung und mit Survivorship-Bias; Methodeneffekt und Modellfortschritt sind nicht trennbar. Die Methode ersetzt kein Domänenwissen, verteilt Arbeit um (Kontextpflege, Diagnose, Verifikation als weniger sichtbare Lasten) und hängt an proprietären Frontier-Systemen, was als Limitation markiert ist. Wichtigste offene Frage: ob Domänenexpertinnen ohne Programmierhintergrund die Methode ohne hybride Assistenz tragen können. Das Evaluationsprogramm trennt drei Objekte, Wissensbasis-Qualität, Promptotype-Qualität und Methoden-Qualität als sozio-technischer Prozess, plus Transfertests durch unabhängige Nutzung und Vergleich mit Alternativen.

## Schluss

Promptotyping kehrt die Übersetzungsrichtung um, wo das vertretbar ist: artikuliertes Projektwissen steuert Artefakte, die die projekteigenen Unterscheidungen operationalisieren, statt dass Daten in die Kategorien generischer Software gezwungen werden. Der Wandel ist modal, projektspezifische Artefakte werden in Settings praktikabel, die sie bisher nicht ressourcieren konnten. Mit wachsender Agentenautonomie wächst der Abstand zwischen plausibel Produzierbarem und verantwortbar Akzeptierbarem, die Vorkehrungen der Methode gewinnen an Gewicht. Der Beitrag ist Amplifikation wissenschaftlicher und technischer Kompetenz unter menschlicher Verantwortung.
