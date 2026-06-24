---
status: not-started
tags: [ops, launch, checklist]
created: 2026-06-24
updated: 2026-06-24
---

# Pre-Launch Checklist

> [!WARNING] Don't launch publicly until this list is complete. Especially the legal, payment, and auth sections — launching with broken payments or no ToS is a real liability.

---

## Legal ✅ / ⬜

- [ ] Wyoming LLC formed (Northwest Registered Agent)
- [ ] EIN obtained (IRS online, free)
- [ ] DMCA agent registered at copyright.gov ($6)
- [ ] Business bank account opened (Mercury)
- [ ] ToS — all `[BRACKETED]` placeholders filled in
- [ ] Privacy Policy — all `[BRACKETED]` placeholders filled in
- [ ] DMCA page — agent contact information filled in
- [ ] Legal pages reviewed by a lawyer OR marked `needsReview={false}` only when accepted risk

---

## Tech infrastructure ⬜

- [ ] Supabase project created
  - [ ] DB schema migrated (`users`, `apps`, `forks`, `likes` tables)
  - [ ] Auth configured (email + GitHub OAuth)
  - [ ] Storage bucket for screenshots configured
- [ ] Stripe account created
  - [ ] Pro subscription product + price created ($12/mo, $115/yr)
  - [ ] Stripe webhook endpoint `/api/webhooks/stripe` configured
  - [ ] Webhook secret copied to env vars
- [ ] Stripe Connect enabled for creator payouts
- [ ] Resend account created, transactional email templates written
  - [ ] Welcome email
  - [ ] Fork purchase receipt
  - [ ] Payout notification
- [ ] All environment variables set in Vercel dashboard
- [ ] Custom domain pointed to Vercel
- [ ] Cloudflare email routing live (`hello@forkable.dev` → inbox)

---

## Platform QA ⬜

- [ ] Browse page: filters, search, and sort all work
- [ ] App detail page: loads, stats display correctly, fork buttons link properly
- [ ] Submit form: validation works, submission reaches Supabase
- [ ] Founding Creators page: application form submits to Supabase or sends email
- [ ] Pro page: Stripe Checkout opens and completes successfully
- [ ] Terms, Privacy, DMCA pages: all accessible from footer
- [ ] Mobile: browse, app detail, and submit are usable on phone
- [ ] Fork button — Replit: opens with correct repo URL
- [ ] Fork button — other platforms: links to correct homepage (pre-partnership)
- [ ] Plausible: analytics script live, tracking pageviews

---

## Content / seeding ⬜

- [ ] 20+ real apps submitted (mix of Founding Creator submissions + seeded)
- [ ] All app screenshots are real (not placeholders)
- [ ] At least 10 Founding Creators onboarded and verified
- [ ] Activity feed has recent real activity (not just seeded mock events)
- [ ] Homepage featured apps are quality (not just the mock seed data)

---

## Marketing ⬜

- [ ] Product Hunt scheduled or submitted
- [ ] Launch day tweet thread drafted and ready
- [ ] Email to waitlist drafted in Resend
- [ ] 10+ Founding Creators confirmed to post on launch day
- [ ] Discord server created and invites sent to Founding Creators
- [ ] Plausible dashboard ready to monitor real-time traffic

---

## Post-launch day-1 tasks ⬜

- [ ] Monitor Plausible for traffic spikes
- [ ] Respond to every Product Hunt comment
- [ ] Send DM thank-you to every Founding Creator who posted
- [ ] Check Supabase logs for any auth or DB errors
- [ ] Check Stripe dashboard for any failed payments
- [ ] Post a "day 1 results" update tweet

---

## Claude Code `/pre-launch` skill

The Claude Code `/pre-launch` skill covers the tech QA portion of this list. Run it:

```
/pre-launch
```

→ See [[Weekly Rhythm]] for what to do after launch.
→ See [[Go-To-Market Strategy]] for the full launch playbook.
