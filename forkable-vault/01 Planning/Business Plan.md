---
status: in-progress
tags: [planning, business]
created: 2026-06-24
updated: 2026-06-24
---

# Business Plan

> For the full operational document, see `BUSINESS_PLAN.md` in the repo root. This note is the summary + quick reference version.

---

## The idea

Forkable is a consumption-first discovery platform for vibe-coded apps. Think CivitAI for AI models, but for running apps. You browse with live previews, click Fork, and it opens in your vibe coding tool of choice (Lovable, Bolt, Replit, v0, Cursor, Windsurf).

**The gap it fills:** GitHub is code-first. Replit's community layer is weak. Lovable and Bolt are platform-siloed. There is no open, social layer for app discovery and forking that works across tools.

---

## The user

**Primary:** "Techy artists" — creative people who have ideas and discovered they can build with vibe coding tools. Musicians making tools for their own workflow. Designers who ship apps. Writers building tools for storytelling. Non-technical founders who built their own product. AI art people who want custom generators.

**Secondary:** Traditional developers who want to share their vibe-coded side projects and earn from them.

---

## Revenue model

| Stream | How it works | When |
|--------|-------------|------|
| Pro subscriptions | $12/mo or $115/yr | Month 3 |
| Paid fork revenue | Creator sets price, 80/20 split via Stripe Connect | Month 3 |
| Sponsored category placements | Brands pay to sponsor categories | Month 6 |
| Enterprise licensing | Companies license templates for internal teams | Month 9 |

See [[04 Finance/Monetization]] for detail.

---

## Unit economics

- **Pro price:** $12/mo
- **Infrastructure cost:** ~$75/mo (scaled)
- **Break-even:** 7 Pro subscribers
- **Creator split:** 80% creator / 20% Forkable
- **Stripe fee:** 2.9% + $0.30 per transaction (taken before the split)

---

## Competitive position

| Platform | What they do | What's missing |
|----------|-------------|----------------|
| GitHub | Code repositories | App-first, no live preview, dev-culture-only |
| Replit | Cloud coding + limited community | Discovery layer is weak, platform-locked |
| Lovable | Vibe coding + remix | Siloed (no Bolt/v0 forks), no open marketplace |
| Bolt | Vibe coding + sharing | Fork is clunky, no community layer |
| v0 (Vercel) | Fork UI components | Components only, not full apps |

Forkable doesn't compete with any of these — it sits on top of all of them as the discovery + portability layer.

---

## Key risks

| Risk | Mitigation |
|------|-----------|
| Platforms build their own gallery | Move faster; build the social layer they won't |
| No fork URL API from Lovable/Bolt | Use GitHub repo import (Replit supports this today) |
| Cold start / empty gallery | 32 seed apps + founding creator program already built |
| Content quality | Manual review queue for first 6 months |

---

## Links
- [[01 Planning/Roadmap]]
- [[01 Planning/Timeline]]
- [[04 Finance/Revenue Projections]]
- [[05 Marketing/Go-To-Market Strategy]]
- [[02 Legal/Legal Overview]]
