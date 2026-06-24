---
status: in-progress
tags: [tech, infrastructure]
created: 2026-06-24
updated: 2026-06-24
---

# Tech Stack

## What's built

| Layer | Tech | Status |
|-------|------|--------|
| Framework | Next.js 16 (App Router), TypeScript | ✅ Done |
| Styling | Tailwind CSS | ✅ Done |
| Icons | lucide-react | ✅ Done |
| Data | Mock data in `platform/lib/data.ts` | ✅ Done (replace with Supabase) |
| Hosting | Not yet deployed | ⬜ Week 1 |

---

## What to add (in priority order)

### 1. Vercel deployment ⬜
- Connect GitHub repo to Vercel dashboard
- Set root directory to `platform/`
- Get a live URL for founding creator outreach
- **Cost:** Free tier

### 2. Domain ⬜
- Buy forkable.dev or forkable.app (check [[06 Brand/Domain & Trademark]])
- Point to Vercel (CNAME in DNS)
- Set up Cloudflare Email Routing for @forkable.dev addresses
- **Cost:** ~$12/yr + free email routing

### 3. Supabase ⬜
Replace mock data with a real database.

**Tables needed:**
```sql
apps (id, title, description, creator_id, tags, screenshot_url, fork_urls, likes, forks, views, is_pro, created_at)
creators (id, handle, display_name, bio, avatar, is_founding_creator, is_pro, joined_at)
users (id, email, is_pro, stripe_customer_id, created_at)
activity_events (id, type, user_id, app_id, platform, created_at)
likes (user_id, app_id, created_at)
fork_clicks (user_id, app_id, platform, created_at)
```
- **Cost:** Free tier (500MB, 2 projects) → $25/mo

### 4. Supabase Auth ⬜
- Email/password sign-up
- GitHub OAuth (good fit for the builder audience)
- Protects submit form, like buttons, Pro gating
- **Cost:** Included in Supabase

### 5. Stripe subscriptions ⬜
- Pro plan: $12/mo or $115/yr
- Stripe Checkout for payment flow
- Webhook to update `users.is_pro` in Supabase on payment
- **Cost:** 2.9% + $0.30 per transaction

### 6. Stripe Connect ⬜
- Creator accounts with KYC
- Paid fork pricing set by creator
- 80% auto-transferred to creator, 20% retained
- Weekly payouts
- **Cost:** Additional 0.25% + $2/payout via Connect

### 7. Resend (email) ⬜
- Welcome email, fork notification, payout receipt
- **Cost:** Free (3k/mo) → $20/mo

### 8. Plausible (analytics) ⬜
- Add script to `layout.tsx`
- Track: page views, fork clicks, search queries
- No cookie banner needed
- **Cost:** $9/mo

### 9. Sentry (errors) ⬜
- Wire into `layout.tsx` before public launch
- **Cost:** Free tier

---

## Environment variables

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

# Resend
RESEND_API_KEY=

# Claude API (optional AI features)
ANTHROPIC_API_KEY=

# App
NEXT_PUBLIC_APP_URL=https://forkable.dev
```

Store in `.env.local` locally. Add to Vercel dashboard for production.

→ See [[Environment Variables]] for full detail.

---

## Monthly cost at scale

| Service | Cost |
|---------|------|
| Vercel Pro | $20/mo |
| Supabase Pro | $25/mo |
| Plausible | $9/mo |
| Resend | $20/mo |
| Domain | ~$1/mo |
| Sentry | Free |
| **Total** | **~$75/mo** |

Break-even: 7 Pro subscribers at $12/mo.
