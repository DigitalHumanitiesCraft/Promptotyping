---
type: distillate
source-type: publication
reference: shanahan-2023
topics:
- '[[Concepts]]'
status: grounded
checked:
  quote: 2026-07-26
created: 2026-07-26
updated: 2026-07-26
---

# Distillate: Role play with large language models (Shanahan, McDonell and Reynolds 2023)

The established scholarly framing for what the site calls role simulation. It names role play as the central concept for describing dialogue-agent behaviour, and sharpens it into a simulator that holds a distribution of characters rather than committing to one. Quotations come from the publisher PDF.

## Core statements

- Role play is proposed as the central concept for understanding what a dialogue agent does. ^s1
  > "We contend that the concept of role play is central to understanding the behaviour of dialogue agents." (shanahan-2023, §Dialogue agents and role play, p. 493)
- Two metaphors are advocated, the agent as playing a single character and the agent as a superposition of possible characters. ^s2
  > "First, taking a simple and intuitive view, we can see a dialogue agent as role-playing a single character. Second, taking a more nuanced view, we can see a dialogue agent as a superposition of simulacra within a multiverse of possible characters." (shanahan-2023, §Introduction, p. 493; superscript reference markers removed)
- The role a dialogue agent plays is set by the prompt that precedes the exchange, which describes the part the agent is to take. ^s3
  > "consider the function of the dialogue prompt that is invisibly prepended to the context before the actual dialogue with the user commences. The preamble sets the scene by announcing that what follows will be a dialogue, and includes a brief description of the part played by one of the participants, the dialogue agent itself." (shanahan-2023, §Dialogue agents and role play, p. 493)
- The framing lets human-level vocabulary be used about the agent without asserting that it holds beliefs or goals in the human sense. ^s4
  > "Role play is a useful framing for dialogue agents, allowing us to draw on the fund of folk psychological concepts we use to understand human behaviour—beliefs, desires, goals, ambitions, emotions and so on—without falling into the trap of anthropomorphism." (shanahan-2023, §Simulacra and simulation, p. 494)
- The metaphor is corrected in one respect, because the agent does not commit to a well defined role in advance but refines a distribution of characters as the exchange proceeds. ^s5
  > "But a dialogue agent based on an LLM does not commit to playing a single, well defined role in advance. Rather, it generates a distribution of characters, and refines that distribution as the dialogue progresses." (shanahan-2023, §Simulacra and simulation, p. 494)
- The sharper description is a non-deterministic simulator able to play any number of characters. ^s6
  > "we can think of an LLM as a non-deterministic simulator capable of role-playing an infinity of characters, or, to put it another way, capable of stochastically generating an infinity of simulacra." (shanahan-2023, §Simulacra and simulation, p. 494; superscript reference marker removed)

## Terms

- **Role play**: the framing under which a dialogue agent's behaviour is described as playing a part set by its prompt. [[20_distillates/publications/shanahan-2023-role-play#^s1]]
- **Simulator and simulacrum**: the distinction between the model that generates characters and the character it generates at a given moment. [[20_distillates/publications/shanahan-2023-role-play#^s6]]

## Open questions

- The source describes dialogue agents in conversation with a user. It says nothing about several roles being run inside one session as a working technique, and nothing about permissions attached to a role, so the site's operational use of role simulation goes beyond it in both directions.
- The distributional correction cuts against a strong reading of role separation, since a prompt-set role is a distribution the exchange keeps reshaping rather than a boundary the agent cannot cross. That is a limitation of the site's construct, not a support for it.

## Related

- [[20_distillates/publications/hong-2023-metagpt]]
- [[20_distillates/publications/saltzer-1975-protection-of-information]]
