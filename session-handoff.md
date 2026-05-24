# Session Handoff: Forkable Human Structures Episode Research
**Date:** 2026-05-24
**User:** Ayla O'Neill (ayla.oneill@gmail.com)
**Repo:** aylao/github-ayla_trial
**Branch:** claude/forkable-human-structures-ai-MFeC7

---

## Context

Ayla hosts a podcast focused on technology and ideas. In a previous episode, a guest named **Carpathi** made the observation that organizational structures can now be **forked like code** — because AI agents can execute them as workflows, org charts are no longer just descriptive diagrams, they're prescriptable, versionable, and deployable artifacts.

This session was a brainstorm + research run to develop that idea into a full episode exploring what *other* once-human diagrams and structures have become forkable in an AI society.

---

## Core Thesis (developed in session)

The unlock is this: any structure that was previously *descriptive* of human behavior, personality, or organization becomes *prescriptive and executable* once an AI agent can run it. That makes it:

- **Versionable** — you can track changes over time
- **Transferable** — you can copy and share it
- **Forkable** — you can take it, modify it, and run your own variant
- **Deployable** — you can instantiate it as a running agent

The org chart was just the first domino. The deeper implication: human identity structures were always latently programs. Humans just happened to be the only runtime that could execute them. AI removes that monopoly.

---

## Brainstorm Output: Categories of Forkable Human Structures

### Personality & Cognition
- Myers-Briggs / Big Five / Enneagram profiles → agent personality configs
- Cognitive styles (Systems 1 & 2 thinking, learning styles) → forkable reasoning modes
- Attachment styles → relationship behavior profiles for AI companions or customer agents

### Values & Ethics
- Ethical frameworks (utilitarian calculus, deontological rule sets) → executable decision layers
- Political compass / values maps → forkable ideological worldviews for agents
- Cultural etiquette guides → behavioral localization profiles

### Knowledge & Expertise
- T-shaped / Pi-shaped skill diagrams → agent capability profiles
- Zettelkasten / second brain architectures → forkable AI memory architectures
- Dreyfus model of skill acquisition → AI capability scaffolding tiers
- Mentorship models (Shu-Ha-Ri) → how an AI scaffolds a learner

### Social & Relational
- Trust hierarchies → explicit, forkable delegation structures
- Negotiation styles (Harvard method, BATNA maps) → forkable agent strategies
- Friendship/relationship dynamics → how an AI agent relates to users

### Creative & Aesthetic
- Design thinking / double diamond → AI creative workflow
- Taste profiles / aesthetic sensibilities → style layers (the most previously unthinkable category)

### The Unresolved Closing Question
What *can't* be forked? Candidates:
- **Accumulated consequence** — the actual history of irreversible choices
- **Embodiment** — being in a body that ages and dies
- **Genuine surprise** — an agent running a curiosity profile isn't actually surprised

All three are being contested. The episode should end here without resolving it.

---

## Research Brief: Four Episode Segments

### Segment 1: Org Chart → Work Chart *(anchor / entry point)*

The canonical example from Carpathi's observation. McKinsey (2025) explicitly names the transition: companies now express org structure not just in FTEs but in **agents deployed per function**. The org chart becomes a *work chart* — a flat, outcome-aligned network.

**The ratio already happening in practice:** 2–5 humans supervising 50–100 specialized agents running an end-to-end process (customer onboarding, product launch, close the books).

**Key line:** *"The org chart didn't die — it became executable."*

Sources:
- [The Agentic Organization — McKinsey](https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/the-agentic-organization-contours-of-the-next-paradigm-for-the-ai-era)
- [The End of the Org Chart — CIO](https://www.cio.com/article/4153281/the-end-of-the-org-chart-leadership-in-an-agentic-enterprise.html)
- [Agentic Organizations: Turning AI into Business Value — McKinsey](https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/ai-is-everywhere-the-agentic-organization-isnt-yet)

---

### Segment 2: Personality as a Fork

There is now an active open-source ecosystem treating personality as a versioned, forkable artifact on GitHub.

**Real-world examples:**
- **OpenPersona** — 4-layer architecture: Soul / Body / Faculty / Skill. Literally a repo you fork. Has a PR workflow for contributing persona improvements. [GitHub](https://github.com/acnlabs/OpenPersona)
- **Fleek's persona-generator** — converts natural language descriptions of a person into structured JSON persona files (biography, secrets, lore, knowledge topics). [GitHub](https://github.com/fleek-platform/persona-generator)
- **JasperHG90/persona** — decouples *who the AI is* (Role) from *what it can do* (Skills) from the underlying LLM provider. Portable personas across providers. [GitHub](https://github.com/JasperHG90/persona)
- **Character.AI at scale** — 20M active users, 200M monthly sessions. Every character is forkable. This is personality-as-platform, already mainstream. [Site](https://character.ai)

**The provocation:** Myers-Briggs was always latently a config file. We just didn't have a runtime.

Sources:
- [awesome-ai-system-prompts — GitHub](https://github.com/dontriskit/awesome-ai-system-prompts)
- [ai-persona GitHub topic](https://github.com/topics/ai-persona)

---

### Segment 3: Memory as Portable Identity

The most underreported angle and genuinely the freshest. **Mem0** ($24M raised from YC, October 2025) has coined the term **"memory passport"** — your AI memory (preferences, history, context, learned relationships) should travel with you across agents and apps, the way email or logins do.

Their core framing: **memory = identity**. If your memories are portable, *you* are portable.

**Architecture:** memories are tagged with identity scopes (`user_id`, `agent_id`, `session_id`, `org_id`) and merged at retrieval time. The system distinguishes what an agent has observed from what it believes, and maintains preference consistency across interactions.

**Scale signal:** grew from 35M API calls (Q1 2025) → 186M (Q3 2025), ~30% month-over-month. Now the exclusive memory provider for AWS's Agent SDK.

**The episode angle:** A second brain used to be personal and non-transferable — your Obsidian vault, your Zettelkasten. Now it's a deployable, forkable artifact. You can hand someone your *accumulated intelligence* the way you'd hand them a codebase.

Sources:
- [Mem0 — Memory Passport](https://mem0.ai/)
- [Mem0 Paper — arXiv](https://arxiv.org/abs/2504.19413)
- [TechCrunch — $24M raise](https://techcrunch.com/2025/10/28/mem0-raises-24m-from-yc-peak-xv-and-basis-set-to-build-the-memory-layer-for-ai-apps/)
- [State of AI Agent Memory 2026 — Mem0 blog](https://mem0.ai/blog/state-of-ai-agent-memory-2026)

---

### Segment 4: Values & Ethics as Deployable Constitutions

Anthropic's Constitutional AI (a set of principles an AI evaluates its own outputs against) was the crack in the door. Now there are full frameworks for forkable ethical profiles:

- **"Creed Constitutions"** (arXiv 2506.13774) — a "superego" agent that uses user-selected rule sets (ethical frameworks, value systems) with *adjustable adherence levels*. You pick your ethics like a dependency. You can fork someone else's ethical profile and dial adherence up or down.
- **AGENTSAFE** — a governance framework that operationalizes the AI Risk Repository into runtime controls. Ethics as auditable, deployable infrastructure.

**The uncomfortable implication:** if you can fork someone's ethical framework and tune its adherence level, ethics becomes a configurable parameter — not a fixed trait. That's either liberating or terrifying depending on who's doing the forking.

Sources:
- [Creed Constitutions paper — arXiv](https://arxiv.org/pdf/2506.13774)
- [AGENTSAFE paper — arXiv](https://arxiv.org/pdf/2512.03180)
- [From Values to Frameworks — arXiv](https://arxiv.org/pdf/2601.06062)

---

## Episode Format Recommendation

**Essay-forward with a single interview kicker.**

The escalation structure (org charts → personality → memory → ethics → the unresolvable question) needs to be controlled by a single voice or it loses its reveal shape. The examples are concrete enough to carry without practitioner voices. The essay earns the debate.

The one guest should appear at the *end*, specifically to contest the closing question ("what can't be forked?"). A philosopher of personal identity is a stronger fit than a builder here — builders will talk about what they made; you want someone arguing about what personhood even is.

**Risk to avoid:** don't let the real-world examples (Mem0, OpenPersona) turn into product spotlights. They're evidence for the thesis, not the subject.

---

## Potential Guests

| Name / Role | Why |
|---|---|
| Deshraj Yadav (Mem0 founder) | Built the "memory passport" — has thought deeply about portable identity as a product problem |
| ACN Labs / OpenPersona team | Building the fork-model for AI personas as infrastructure |
| Org designer using McKinsey's work chart framing | Practitioner perspective on the transition happening right now |
| Philosopher of personal identity | Locke's memory theory of identity meets AI portability — the closing question needs this voice |

---

## Open Threads from This Session

1. **The `/episode-research` skill doesn't exist** in this project's Claude Code setup. Ayla expected it to be available (`/episode-research` returned "Unknown command"). Either it lives in a different repo, hasn't been built yet, or is named differently. Worth creating if this is a recurring workflow.

2. **Show format unknown** — the format recommendation above assumed interview capability, but Ayla's actual show format (solo, co-host, guests) was never confirmed. The recommendation should be revisited once that's established.

3. **Carpathi episode** — the previous episode on org code with Carpathi is the natural predecessor/entry point for this episode. Worth linking them explicitly if the show has that kind of arc structure.
