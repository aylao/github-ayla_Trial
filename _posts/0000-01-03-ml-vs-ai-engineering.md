---
layout: slide
title: "ML Engineering vs AI Engineering: What Actually Changed?"
---

## ML Engineering vs AI Engineering
### What actually changed — and what didn't

*Based on Chip Huyen's* AI Engineering *(O'Reilly, 2025)*

---

## The Setup

2023 brought an explosion of AI tooling.

The **infrastructure layer** barely moved.  
The **application and tooling layers** changed completely.

ML engineering didn't disappear — AI engineering grew on top of it.

---

## What ML Engineers Do

- Train models from scratch for specific business problems
- Work with classical ML: regression, gradient boosting, neural nets
- Own the full pipeline: data → features → model → deploy
- Tune hyperparameters, evaluate on held-out sets
- Build feedback loops from production data back into training

---

## What AI Engineers Do

- Build applications on top of **foundation models** (someone else trained them)
- Work with prompts, retrieval, and model adaptation — not raw training
- Operate at the application layer: orchestration, evals, UX
- Still need feedback loops — but feeding back into *adaptation*, not training from scratch

---

## Three Key Differences (per Huyen)

**1. Model ownership**  
ML engineering: you train the model.  
AI engineering: you adapt a model someone else trained.

**2. Compute pressure**  
Foundation models are *bigger* — more compute, higher latency.  
More pressure on efficient inference, not just training.

**3. Focus shift**  
Less time on modeling. More time on model adaptation —  
prompting, retrieval, fine-tuning, evaluation.

---

## The Training Spectrum

Not all "training" means the same thing:

| Term | What it means |
|---|---|
| **Pre-training** | Training from scratch on massive data (think GPT-4's base) |
| **Fine-tuning** | Adapting a pre-trained model on your data |
| **Post-training** | RLHF, constitutional AI — shaping model *behavior* |
| **Prompting** | No weight changes at all — just steering at inference time |

ML engineers live mostly in **pre-training territory**.  
AI engineers operate from **fine-tuning downward**.

---

## What Stayed the Same

- You still need to understand what a model actually learned
- Feedback loops from production are still essential
- Evaluation is still the hardest part
- Data quality still determines outcomes

> *"This collection includes lessons learned and shared over the last decade in AI applications."* — Huyen

The foundations of ML engineering don't disappear. They become prerequisites.

---

## The Real Question

It's not *ML engineering* **or** *AI engineering*.

It's: **where in the stack are you building?**

Foundation model layer → pre-training, massive infra  
Adaptation layer → fine-tuning, RLHF, distillation  
Application layer → prompts, RAG, evals, product

Most engineers working in "AI" today are **application layer** engineers.  
That's the new discipline Huyen is defining.

---

## Takeaway

> AI engineering is **ML engineering** with the model ownership flipped  
> and the surface area of the job shifted up the stack.

The skills that made a great ML engineer still matter —  
but the daily work looks very different.

---

*Next episode: diving into the AI engineering stack layer by layer.*
