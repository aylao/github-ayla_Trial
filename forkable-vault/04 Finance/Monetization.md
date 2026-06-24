---
status: in-progress
tags: [finance, monetization]
created: 2026-06-24
updated: 2026-06-24
---

# Monetization

## Revenue streams

### 1. Pro subscriptions — $12/mo or $115/yr
**Status:** UI built ✅ — Stripe not wired ⬜

**What Pro unlocks for creators:**
- Unlimited app submissions (free = 3)
- Paid fork pricing (set a price per fork)
- Featured placement in discovery
- Full analytics dashboard
- Custom subdomain (handle.forkable.dev)
- Priority support
- Team seats (up to 5)

**Implementation needed:** Stripe Checkout → webhook → `users.is_pro = true` in Supabase

---

### 2. Paid fork revenue — 20% platform cut
**Status:** UI built (ForkButton has lock state) ✅ — Stripe Connect not wired ⬜

**How it works:**
- Pro creator sets a price per fork ($5 minimum suggested)
- Buyer pays → Stripe routes 80% to creator's Connect account, 20% to Forkable
- Payouts weekly via Stripe Connect

**Implementation needed:** Stripe Connect creator onboarding, fork purchase flow, payout webhooks

---

### 3. Sponsored category placements — Month 6+
**Status:** Not built

**How it works:**
- AI API providers, hosting companies pay to sponsor category pages
- Example: "AI tools" category → sponsored by Anthropic = $500–2,000/mo
- Revenue shared as bonus among top creators in that category

---

### 4. Enterprise app licensing — Month 9+
**Status:** Not built

**How it works:**
- Companies license Forkable app templates for internal teams
- Creator sets seat price, Forkable handles invoicing
- High-margin, low-volume

---

## Unit economics

| Metric | Value |
|--------|-------|
| Pro price (monthly) | $12 |
| Pro price (annual) | $115 ($9.58/mo) |
| Creator fork split | 80% creator / 20% Forkable |
| Stripe fee (subscriptions) | 2.9% + $0.30 |
| Stripe Connect additional fee | 0.25% + $2/payout |
| Minimum paid fork price | $5 (recommended) |
| Minimum payout to creators | $20 |
| Payout frequency | Weekly |

---

## Example creator earnings

*An app priced at $9 per fork, with 500 forks:*

| | Amount |
|-|--------|
| Gross revenue | $4,500 |
| Stripe fee (2.9% + $0.30) | ~$135 |
| Creator share (80%) | $3,492 |
| Forkable share (20%) | $873 |

→ See [[Revenue Projections]] for platform-level projections.
