# Use Case: Lucina Digital Edition (diged-neolat)

## Kontext
Madrid BN Mss. 6028 mit neulateinischen Gedichten aus 1474 als wissenschaftliche digitale Edition publizieren. TEI P5-konforme Edition mit Text-Bild-Synchronisation für Faksimiles und Transkriptionen. Prosopographische Datenbank identifiziert historische Personen und Orte in den Texten. Multi-LLM-Ansatz für prosopographische Extraktion und metrische Analyse. Responsive Interface mit modernen Web-Standards für wissenschaftliche Textpräsentation.

- **Stand:** 5. Promptotyping Iteration
- **Zeitinvestition (geschätzt):** 25 h
- **Umfang:** 128 Gedichte, 2.224 Verse; .docx und .pdf als Datenursprung + weitere Texte
- **Repository:** [github.com/chpollin/diged-neolat](https://github.com/chpollin/diged-neolat)
- **Demo:** 
	1. [Edition 2](https://chpollin.github.io/diged-neolat/edition-2/web/) - Basis-Konversion (DOCX→TEI, statisches HTML) **Edition 2** → Datenanalyse & Verbesserung (TEI-Validierung)
	2. [Edition 3](https://chpollin.github.io/diged-neolat/edition-3/web/) - UI-Entwicklung
	3. [Edition 4](https://chpollin.github.io/diged-neolat/edition-4/web/) - Fußnoten-Integration, kritischer Apparat
	4. [Edition 5](https://chpollin.github.io/diged-neolat/edition-5/web/) - Vollständige Features (Prosopographie, Metriken, Edit-Mode)
* Video:  Promptotyping: TEI-Edition aus Word in 60 Minuten (Claude Opus 4.1). https://youtu.be/0DtX0pLv4TA
## LLMs und Tools

- Claude Opus 4.1 mit und ohne Claude Code (Coding)
- Gemini 2.5 Pro (großer Context)
- GPT-5 (Korrekturen)

## Notizen zum Prozess

- Mehrere Promptotyping Iterationen mit eigenen Promptotyping Documents
- Edition-2 bis edition-5 zeigen jeweils einen Stand einer Promptotyping Iteration
- 2 Meetings mit Domänenexpertin und Einarbeitung von Expertinnen-Feedback
- Multi-LLM-Workflow und LLM as a Judge
- Metrische Analyse (Elegische Distichen als Hauptform, Sapphische Strophen, Hendekasyllaben, Choliamben) ohne Expertenwissen umgesetzt auf Basis einer Deep Research Ausarbeitung
- Erstmals sehr ausführliches Promptotyping Journal; noch nicht als Promptotyping Document verstanden
- TEI-Validierung in Oxygen Editor

## Promptotyping Documents

- **commits.md** - Entwicklungshistorie und Versionsdokumentation
- **digital-edition-guide.md** - Leitfaden für digitale Editionen
- **editorial-guidelines-tei-mapping.md** - TEI-Mapping und Kodierungsrichtlinien
- **editorial-introduction.md** - Editorische Einführung und Projektkontext
- **promptotyping-journal.md** - Dokumentation des Promptotyping-Prozesses
- **data.md** - mehrere in unterschiedlichen Promptotyping Iterationen
- **requirements.md** - mehrere in unterschiedlichen Promptotyping Iterationen
- **DESIGN.md** - in Iteration 3
- **instructions.md**
- **project.md**
- **paper.md** - Zusammenführung aller Inhalte in übergeordnetes Thema und Paper