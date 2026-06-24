---
status: not-started
tags: [tech, infrastructure, action-required]
created: 2026-06-24
updated: 2026-06-24
---

# Environment Variables

*Add these to `.env.local` locally and to Vercel dashboard for production. Never commit `.env.local` to git.*

---

## Full list

```bash
# ── Supabase ──────────────────────────────────────────
NEXT_PUBLIC_SUPABASE_URL=           # from Supabase project settings
NEXT_PUBLIC_SUPABASE_ANON_KEY=      # public, safe to expose
SUPABASE_SERVICE_ROLE_KEY=          # NEVER expose — server-side only

# ── Stripe ────────────────────────────────────────────
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY= # public, safe to expose
STRIPE_SECRET_KEY=                  # NEVER expose — server-side only
STRIPE_WEBHOOK_SECRET=              # from Stripe webhook dashboard

# ── Email (Resend) ────────────────────────────────────
RESEND_API_KEY=                     # from Resend dashboard

# ── Claude API (optional AI features) ─────────────────
ANTHROPIC_API_KEY=                  # pay-per-use

# ── App ───────────────────────────────────────────────
NEXT_PUBLIC_APP_URL=https://forkable.dev   # used for OG tags, redirects
```

---

## Setup checklist

- [ ] Supabase: create project → copy URL + anon key + service role key
- [ ] Stripe: create account → copy publishable + secret key
- [ ] Stripe: set up webhook endpoint `/api/webhooks/stripe` → copy webhook secret
- [ ] Resend: create account → create API key
- [ ] Add all to `.env.local` for local dev
- [ ] Add all to Vercel dashboard (Settings → Environment Variables)

---

## Security rules

> [!WARNING] Breaking these can expose user data or enable billing fraud.

- `SUPABASE_SERVICE_ROLE_KEY` — only used in server-side API routes, never in client components
- `STRIPE_SECRET_KEY` — same, server-side only
- Never put `SUPABASE_SERVICE_ROLE_KEY` or `STRIPE_SECRET_KEY` in any variable prefixed with `NEXT_PUBLIC_`
- Add `.env.local` and `.env*.local` to `.gitignore` (Next.js does this by default)
