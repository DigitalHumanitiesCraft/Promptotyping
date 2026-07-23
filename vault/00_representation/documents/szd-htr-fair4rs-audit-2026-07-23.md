---
type: representation
source-type: document
source: "[[_sources/szd-htr-fair4rs-audit-2026-07-23]]"
converter: "none (verbatim Markdown copy of the source without its frontmatter; block IDs appended for anchoring)"
channel: handover
metadata:
  title: "Verifikation FAIR4RS-Status"
  creator: "method author with agent support, Digital Humanities Craft"
  date: "2026-07-23"
  format: "text/markdown"
  identifier: "https://github.com/chpollin/szd-htr-ocr-pipeline/blob/5baa9064b91b38d26a2ebd5854c121f7bb9c55f3/knowledge/verification-fair4rs.md"
  license: "CC BY 4.0 per repository licence at snapshot time"
  confidential: false
created: 2026-07-23
updated: 2026-07-23
checked:
  validation: 2026-07-23
---

# Verifikation: FAIR4RS-Status des Repositories

## Geprüfte Behauptung

Das Repository wird im Promptotyping-Methodenpaper (Pollin, in Arbeit, Sektion 4.1) als auditierter Fall für die FAIR4RS-Bilanz statischer Promptotyping-Artefakte verwendet: stark bei Reusability (insbesondere Provenienz) und Accessibility, systematisch schwach bei Findability. Dieses Dokument trägt den Befund, damit die Behauptung prüfbar bleibt. ^claim

## Evidenz und Verfahren

Prüfung am 2026-07-23 gegen die FAIR4RS-Prinzipien v1.0 (Chue Hong, Katz, Barker et al. 2022, Research Data Alliance, DOI 10.15497/RDA00068), Kriterium für Kriterium, per lokalem Klon (Stand Commit 29a350c, 2026-07-21) und GitHub-API (Visibility, License-Detection, Releases, Description, Topics). ^proc

## Befund je Prinzip

F1 nicht erfüllt (nur GitHub-URL, keine DOI); F1.1 nicht erfüllt, als verzichtbar gewertet; F1.2 nicht erfüllt (keine Tags, keine Releases, API: 0); F2 teilweise (README reich für Menschen, keine maschinenlesbaren Metadaten); F3 nicht erfüllt (kein CITATION.cff, kein codemeta.json); F4 nicht erfüllt (GitHub-Description und Topics leer); A1 und A1.1 erfüllt (Repo und Pages-Viewer über HTTPS ohne proprietäre Werkzeuge); A1.2 nicht einschlägig; A2 nicht erfüllt (folgt aus F4); I1 erfüllt (TEI-XML-Eingang, PAGE-XML/METS-Architektur dokumentiert); I2 teilweise (TEI-Quellen per URL qualifiziert); R1 teilweise; R1.1 teilweise (LICENSE CC BY 4.0 vorhanden, GitHub erkennt "Other", für Code unübliche Lizenzfamilie); R1.2 erfüllt und überdurchschnittlich (README mit Genese, Methode, Rollen, Modellen; journal, PAPER.md, Git-History); R2 erfüllt (requirements.txt über PyPI); R3 erfüllt (TEI, diplomatische Transkriptionskonventionen, dokumentierte Markup-Regeln). ^find

## Verdikt

Die Behauptung des Papers hält: Accessibility konstruktionsbedingt erfüllt, Reusability weitgehend erfüllt mit Provenienz als Stärke der Methode, Findability durchgängig nicht erfüllt als Normalzustand eines nie formal publizierten Prototyps. Die F-Lücke ist Publikationsarbeit, kein Methodenproblem. ^verd

## Maßnahmen (Stand der Entscheidung 2026-07-23)

Beschlossene Schließung der Lücken gemäß der FAIR-Infrastruktur-Politik des Methoden-Repos: Dual-Licensing MIT (Code) plus CC BY 4.0 (Dokumentation), Rechteangabe für Drittdaten (Faksimiles und TEI: Literaturarchiv Salzburg / Stefan Zweig Digital); CITATION.cff und codemeta.json aus dem Frontmatter-Kern; GitHub-Description und Topics; Zenodo-Release mit DOI, geschnitten wenn der Stand trägt. ^meas

## Grenzen

Momentaufnahme eines Repos zu einem Stichtag; die Prinzipien F1.1 und A1.2 sind als verzichtbar bzw. nicht einschlägig gewertet, das ist Auslegung, nicht Messung. Die Prüfung lief als Einzeldurchgang ohne zweiten unabhängigen Prüfer. ^lim
