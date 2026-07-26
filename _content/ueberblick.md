---
title: Ueberblick
slug: ueberblick
status: complete
version: "0.1"
updated: 2026-07-26
mirrored: 2026-06-10
machine-url: https://dhcraft.org/Promptotyping/_content/ueberblick.md
---

# Promptotyping

Spezifikation einer iterativen Context-Engineering-Methode in vier Phasen, um aus Forschungsdaten und Frontier-LLMs Forschungsartefakte zu erzeugen.

| | |
|---|---|
| Fassung | 0.1 |
| Stand | 2026-07-25 |
| Kanonische Adresse | `https://dhcraft.org/Promptotyping/` |
| Maschinenadresse | `_content/ueberblick.md` |
| Begruendung und Evidenz | [Paper](#paper) |
| Lizenz | Inhalte CC BY 4.0, Code MIT |

## Was die Methode ist

Promptotyping erzeugt Forschungsartefakte, im Regelfall Software, die an die Daten eines Projekts gebunden ist und diese explorierbar, analysierbar oder editierbar macht. Der `knowledge/`-Ordner ist dabei ein kuratiertes Wissensartefakt, teils modellgeneriert, teils von der pruefenden Fachperson kuratiert, gehalten in einem Format, das Agenten unmittelbar verarbeiten. Er haelt das Domaenenwissen und die Spezifikation, aus denen implementiert wird, ueberdauert die einzelne Sitzung und ist der Teil des Prozesses, der geprueft, kritisiert und zitiert werden kann. Was beim Bauen an weiteren Entscheidungen anfaellt, halten die Dokumente so weit, wie es zurueckgeschrieben wird. Der Unterschied zum Vibe Coding liegt im strukturierten Vorgehen, in der aktiven Anforderungsanalyse und in der expliziten Wissensdokumentation.

Diese Seite ist die Spezifikation der Methode. Sie sagt, was Promptotyping ist und wie es angewendet wird. Warum die Methode so gebaut ist und ob sie traegt, sagt das [Paper](#paper).

## Wo ansetzen

Wer die Methode im Detail nachvollziehen will, liest das [Paper](#abschnitt-1-introduction) von der Introduction bis zur Conclusion. Wer sie anwenden will, nutzt die [Vorlagen](#vorlagen) fuer die Promptotyping Documents und den Frontmatter-Inspector. Wie sich die Dokumenttypen voneinander unterscheiden und welches Dokument bei welchem Fehlerbild zuerst zu pruefen ist, fuehrt Teil 3 der Spezifikation, die [Konvention](#konvention-v0.1). Wer Belege sucht, sieht sich die [Use Cases](#use-cases) an, die kuratierte Auswahl oeffentlich dokumentierter Projekte. Die empirisch gewachsenen Methodenerweiterungen stehen unter [Praxis](#praxis), die uebertragbaren System Prompts unter [Skills](#skills). Wie Vault, Agent Interface und AI Harness zusammenspielen, beschreibt die [Arbeitsumgebung](#arbeitsumgebung).
