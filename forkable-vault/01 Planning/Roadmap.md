---
status: in-progress
tags: [planning, roadmap]
created: 2026-06-24
updated: 2026-06-24
---

# Roadmap

## Phase 1 — Foundation `Weeks 1–2`
*Legal + infra. Do this before touching code.*

- [ ] Form Wyoming LLC via Northwest Registered Agent
- [ ] Get EIN from IRS.gov (free, 10 min)
- [ ] Open Mercury business bank account
- [ ] Register DMCA agent at copyright.gov ($6)
- [ ] Buy domain (forkable.dev / forkable.app)
- [ ] Connect repo to Vercel and deploy
- [ ] Set up Supabase project (free tier)
- [ ] Set up Cloudflare Email Routing for @forkable.dev
- [ ] Create Plausible analytics account

→ See [[02 Legal/Wyoming LLC Setup]] and [[03 Tech/Tech Stack]]

---

## Phase 2 — Founding Creator Outreach `Weeks 3–4`
*Offline work. No code needed. Most important thing before launch.*

- [ ] Identify 50 active vibe coders on Twitter/X
- [ ] Send personalized DMs with founding creator pitch
- [ ] Goal: 10 confirmed founding creators with apps
- [ ] Goal: 20 real apps with real screenshots before soft launch
- [ ] Add confirmed creators via `/add-creator` command

→ See [[05 Marketing/Founding Creator Program]]

---

## Phase 3 — Soft Launch `Weeks 5–8`
*Live site, founding creators only, no payments yet.*

- [ ] Replace mock data with Supabase (apps + creators tables)
- [ ] Add auth (Supabase Auth — email/password + GitHub OAuth)
- [ ] App submission form saves to DB with admin review queue
- [ ] Like + fork tracking writes to DB
- [ ] Fill in all [[02 Legal/Legal Placeholders]] in ToS/Privacy/DMCA
- [ ] Get one-hour lawyer review of ToS (~$200-400)
- [ ] Run `/pre-launch` checklist — all green
- [ ] Send "we're live" email to waitlist

---

## Phase 4 — Public Launch `Month 3`
*Product Hunt, full feature set, paid features live.*

- [ ] Stripe subscriptions (Pro $12/mo)
- [ ] Stripe Connect (creator paid fork pricing + payouts)
- [ ] Product Hunt launch (coordinate founding creators to upvote)
- [ ] Twitter/X promoted posts begin ($100-200/mo)
- [ ] "App of the day" posting habit starts

---

## Phase 5 — Growth `Months 3–6`
- [ ] TikTok/Reels content format ("fork this app in 10 min")
- [ ] Sponsored category placements (pitch AI API providers)
- [ ] Creator analytics dashboard
- [ ] Email newsletter running weekly

---

## Milestones

| Milestone | Target | Done? |
|-----------|--------|-------|
| Platform code built | Week 0 | ✅ |
| 32 seed apps in gallery | Week 0 | ✅ |
| Deployed to Vercel | Week 1 | ⬜ |
| 10 founding creators confirmed | Week 4 | ⬜ |
| Soft launch | Week 6 | ⬜ |
| Public launch / Product Hunt | Month 3 | ⬜ |
| 75 Pro subscribers | Month 3 | ⬜ |
| $5,100 MRR | Month 6 | ⬜ |
| $20,000 MRR | Month 12 | ⬜ |
