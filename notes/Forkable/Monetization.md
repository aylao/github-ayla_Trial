# Monetization

## Revenue streams

### 1. Pro subscriptions — $12/mo or $115/yr
**Status:** UI built, Stripe not yet wired
**What Pro includes:**
- Unlimited app submissions (free = 3)
- Paid fork monetization (80% creator / 20% Forkable)
- Featured placement in discovery
- Full analytics dashboard
- Custom subdomain (handle.forkable.dev)
- Priority support
- Team seats (up to 5)

**Implementation needed:** Stripe Checkout + webhooks + Supabase `users.is_pro` field

### 2. Paid fork revenue (20% cut)
**Status:** UI built (ForkButton has lock state), Stripe Connect not yet wired
**How it works:**
- Creator (Pro) sets a price per fork ($5–$99)
- Buyer pays → Stripe routes 80% to creator via Connect, 20% to Forkable
- Requires Stripe Connect with creator KYC

**Implementation needed:** Stripe Connect onboarding flow, fork purchase flow, payout webhooks

### 3. Sponsored category placements (Month 6+)
**Status:** Not built yet
**How it works:**
- AI API providers, hosting companies pay to sponsor category pages
- Example: "AI tools" category sponsored by Anthropic = $500–2,000/mo
- Split as bonus among top creators in that category

### 4. Enterprise app licensing (Month 9+)
**Status:** Not built yet
**How it works:**
- Companies license app templates for internal teams at seat prices
- Creator sets price, Forkable handles invoicing
- High-margin, low-volume

## Revenue projections

| Month | Pro subs | Sub MRR | Fork rev (20%) | Total MRR |
|-------|----------|---------|----------------|-----------|
| 1 | 5 | $60 | $0 | $60 |
| 2 | 20 | $240 | $50 | $290 |
| 3 | 75 | $900 | $200 | $1,100 |
| 4 | 150 | $1,800 | $500 | $2,300 |
| 6 | 300 | $3,600 | $1,500 | $5,100 |
| 9 | 600 | $7,200 | $4,000 | $11,200 |
| 12 | 1,000 | $12,000 | $8,000 | $20,000 |

## Key numbers

- **Infrastructure break-even:** 7 Pro subscribers ($84/mo covers ~$75/mo infra)
- **Creator split:** 80% creator / 20% Forkable
- **Minimum payout:** $20 (to reduce Stripe fees on micro-payouts)
- **Payout cadence:** Weekly via Stripe Connect

## Open pricing questions
- Is $12/mo right? Survey founding creators before locking in.
- Should there be a minimum fork price ($5)? Prevents race to zero.
- Annual plan discount? 20% off = $115/yr vs $144/yr monthly.
