---
title: MANIFEST
slug: manifest
mirrored: 2026-06-10
machine-url: https://dhcraft.org/Promptotyping/_content/MANIFEST.md
---

# MANIFEST

Provenienz der Spiegelung. Die Inhalte unter `_content/` und `data/` stammen teils aus dem Obsidian-Vault (`C:/Users/Chrisi/Documents/obsidian`, nur gelesen), teils sind sie im Repo entstanden. Dieses Dokument hält fest, nach welchen Regeln gespiegelt wird und auf welcher Seite die Source of Truth liegt.

Welche Datei welche Vault-Quelle hat und wann sie zuerst gespiegelt wurde, steht im Frontmatter der Datei selbst, in den Feldern `source` und `mirrored`. Die Versionsstände der Vorlagen führt `data/promptotyping-documents.json`, den Verlauf der Spiegelungssitzungen `knowledge/journal.md`. Dieses Dokument wiederholt beides nicht.

## Spiegelungsregeln

- Vault-interne Wikilinks werden beim Spiegeln auf Site-Anker oder kurze Inline-Erklärungen aufgelöst. Innerhalb der Frontmatter- und Beispielblöcke einer Vorlage bleiben Wikilinks verbatim erhalten; sie illustrieren die Schreibweise eines Repos und sind keine Navigationslinks.
- Original-Prompts und Vorlagentexte werden unverändert übernommen.
- `mirrored` hält die Erstspiegelung fest und wird bei einem Sweep nicht fortgeschrieben. Eine Vorlage, deren Version über den Stand ihrer Erstspiegelung hinausgewachsen ist, driftet deshalb nicht.

## Wo die Source of Truth liegt

**Vault-Spiegel.** Die Vorlagen unter `_content/promptotyping-document/` mit Ausnahme von `technology.md`, dazu `konvention.md` und `praxis.md`.

**Aus dem Vault hervorgegangen, seit dem 2026-07-26 repo-kanonisch.** Die Tiefenseiten unter `_content/case-studies/` gehen auf die Vault-Case-Studies unter `Projects/Promptotyping/Case Studies/` zurück, soweit dort eine gleichnamige Case Study liegt. Sie sind englisch und auf die Bauart nach A7 neu geschrieben und führen seither weder `source` noch `mirrored`, weil ein Spiegeldatum für einen neu geschriebenen Text falsch wäre.

**Repo-kanonisch.** `promptotyping-document/technology.md` hat kein Vault-Original und führt deshalb weder `source` noch `mirrored`; der Vault zieht in einer eigenen Sitzung nach. `technology-baseline.md` ist das dazu ausgefüllte Dokument, die operative Langform der technischen Guidelines aus Sektion 4.1 des Methodenpapers. `skills/coding.md` und `skills/writing.md` sind seit dem 2026-07-20 repo-kanonisch, zuvor waren sie Vault-Spiegel. `arbeitsumgebung.md` und `skills/index.md` sind bei der Spiegelung im Repo neu formuliert worden und haben kein Vault-Original.

**Repo dem Vault voraus.** `konvention.md` führt seit dem 2026-07-26 den Sechser-Pflichtkern samt Provenienz-Sektion und DCMI-Anschluss und ist englisch, während das Vault-Original deutsch ist; dasselbe gilt für `praxis.md` gegen die Sektion Methodenerweiterungen des Promptotyping MOC. Beides ist bewusste repo-first-Ausführung, der Nachzug gehört in eine Vault-Sitzung. Der Abschnitt „Anmerkung der Site" in `konvention.md` ist Site-Ergänzung und nicht Teil der Vault-Konvention.
