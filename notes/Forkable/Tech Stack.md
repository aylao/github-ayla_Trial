# Tech Stack

## Current (built)

| Layer | Tech | Notes |
|-------|------|-------|
| Framework | Next.js 16 (App Router) | TypeScript, Tailwind CSS |
| Icons | lucide-react | Already installed |
| Fonts | Geist Sans (Google) | Via next/font |
| Data | Mock data in `platform/lib/data.ts` | Replace with Supabase |
| Hosting | (not yet deployed) | Target: Vercel |

## To add (in priority order)

### 1. Vercel deployment
- Connect GitHub repo to Vercel
- Deploy from `platform/` directory (set root dir in Vercel settings)
- Get a real URL — use for founding creator outreach
- **Cost:** Free tier

### 2. Domain
- Buy `forkable.dev` or `forkable.app` (check availability)
- Point to Vercel
- Set up Cloudflare Email Routing for `@forkable.dev` addresses (free)
  - `hello@`, `dmca@`, `privacy@`, `legal@`
- **Cost:** ~$12/yr domain + free email routing

### 3. Supabase (database + auth + storage)
- Replace mock data with real DB
- Tables needed: `apps`, `creators`, `activity_events`, `likes`, `forks`, `users`
- Auth: Supabase Auth (email/password + GitHub OAuth)
- Storage: app screenshots uploaded by creators
- **Cost:** Free tier → $25/mo

### 4. Stripe
- Subscriptions: Pro plan ($12/mo or $115/yr)
- Stripe Connect: creator accounts, paid fork pricing, weekly payouts
- Required env vars: `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- **Cost:** 2.9% + $0.30 per transaction

### 5. Resend (email)
- Transactional emails: welcome, fork notification, payout receipt, Pro confirmation
- **Cost:** Free (3k/mo) → $20/mo

### 6. Plausible (analytics)
- Privacy-first, no cookie banner needed
- Track: page views, app views, fork clicks, search queries
- **Cost:** $9/mo

### 7. Sentry (error tracking)
- Wire in before public launch
- **Cost:** Free tier

### 8. Claude API (optional AI features)
- AI-powered app description enhancement on submit
- "Similar apps" recommendations
- **Cost:** Pay per use, ~$20-50/mo early

## Environment variables to manage

```
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

# Claude API
ANTHROPIC_API_KEY=

# App
NEXT_PUBLIC_APP_URL=https://forkable.dev
```

Store in `.env.local` (never commit). Add to Vercel dashboard for production.

## Fork URL integration status

| Platform | Method | Works today? |
|----------|--------|-------------|
| Replit | `replit.com/new?github=[repo-url]` | Yes — requires app to be on GitHub |
| v0 | No public fork URL | Contact Vercel team |
| Bolt | No public fork URL | Contact Bolt team |
| Lovable | No public fork URL | Contact Lovable team |
| Cursor | Deep link `cursor://open?url=` | Desktop only, limited |
| Windsurf | Similar to Cursor | Desktop only, limited |

**Interim approach:** Require GitHub repo URL on submit. Generate Replit fork links automatically.
