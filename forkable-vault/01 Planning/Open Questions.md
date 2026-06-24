---
status: in-progress
tags: [planning, decisions]
created: 2026-06-24
updated: 2026-06-24
---

# Open Questions

*Decisions that need to be made before launch. Answer these, then remove from list.*

---

> [!WARNING] Don't skip these — each one blocks something downstream.

## Brand / Domain
- [ ] **Is "Forkable" final?** Check trademark at USPTO.gov before committing money to branding
- [ ] **Which domain?** forkable.dev, forkable.app, forkable.io — check availability and cost
- [ ] **Social handles?** Check @forkable on Twitter/X, Instagram, TikTok before announcing the name publicly

## Pricing
- [ ] **Is $12/mo the right Pro price?** Survey 5–10 founding creators before locking in. Could be $9, could be $15.
- [ ] **Annual discount?** 20% off = $115/yr. Yes or no?
- [ ] **Minimum paid fork price?** Suggest $5 minimum to prevent race to zero. Creator can go higher.
- [ ] **Free tier app limit?** Currently set to 3. Is that too low to attract creators? Too high?

## Tech
- [ ] **GitHub requirement for fork URLs?** Requiring a GitHub repo adds friction for non-technical creators. Worth it for working fork buttons, or find another way?
- [ ] **Auth provider?** Supabase Auth is free and built-in. Clerk is more polished but $25/mo. Stick with Supabase Auth for now.
- [ ] **Image uploads?** Supabase Storage (included) or Cloudinary (more features)? Supabase is fine for launch.

## Legal
- [ ] **LLC name?** "Forkable LLC" or a holding name? Forkable LLC is clean.
- [ ] **Data retention period?** ToS says [30/60/90] days — pick one. 30 days is standard.

## Operations
- [ ] **Manual app review?** Yes for the first 6 months. What's the review checklist? (Does it work? Is it safe? Is it original?)
- [ ] **Content moderation policy?** Write a 1-page internal doc before launch — what gets removed and why.

---

## Answered

| Question | Decision | Date |
|----------|----------|------|
| App name | Forkable | Jun 2026 |
| LLC state | Wyoming (not NY — publication req too expensive) | Jun 2026 |
| Creator revenue split | 80% creator / 20% Forkable | Jun 2026 |
| Analytics tool | Plausible (privacy-first, no cookie banner) | Jun 2026 |
| Framework | Next.js 16, TypeScript, Tailwind | Jun 2026 |
| Database | Supabase | Jun 2026 |
