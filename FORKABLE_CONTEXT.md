# Forkable — Project Context

> Bring this file into a Claude Code session on your desktop to resume work with full context.
> Repo: `https://github.com/aylao/github-ayla_Trial`
> Branch: `claude/civitai-vibe-apps-platform-4uj90d`

---

## What is Forkable?

A "CivitAI for vibe-coded apps" — a consumption-first discovery platform where builders share apps with live previews, and anyone can fork them into their vibe coding tool of choice: Lovable, Bolt, Replit, v0, Cursor, or Windsurf.

**Core loop:** Browse apps → see live preview → click fork → land in your vibe coding tool with the code pre-loaded → customize and ship.

**Revenue model:**
- Pro subscriptions: $12/mo or $115/yr (creator features + monetization)
- Paid fork revenue: 80% to creator / 20% to Forkable (via Stripe Connect)
- Sponsored category placements (month 6+)
- Enterprise app licensing (month 9+)

---

## What's already built

### Platform (`/platform` — Next.js 16, TypeScript, Tailwind CSS)

| Page | Route | Status |
|------|-------|--------|
| Homepage | `/` | ✅ Built |
| Browse | `/apps` | ✅ Built (filter, search, sort) |
| App detail | `/apps/[id]` | ✅ Built (static generation) |
| Submit app | `/submit` | ✅ Built (form with validation) |
| Founding Creators | `/founding-creators` | ✅ Built (application form + scarcity counter) |
| Pro page | `/pro` | ✅ Built (pricing + revenue calculator) |
| Terms of Service | `/terms` | ✅ Built (placeholders not filled yet) |
| Privacy Policy | `/privacy` | ✅ Built (placeholders not filled yet) |
| DMCA Policy | `/dmca` | ✅ Built (placeholders not filled yet) |
| **Founder Dashboard** | `/founder` | ✅ Built (internal only) |

### Seed data (`/platform/lib/data.ts`)
- 32 mock apps across 10+ categories
- 12 creator profiles (9 marked as Founding Creators)
- Live activity feed (12 seeded events)
- Platforms: lovable, bolt, replit, v0, cursor, windsurf

### Components built
- `AppCard` — card with screenshot, badges, stats, platform icons
- `ForkButton` — with locked state for paid forks
- `ActivityFeed` — live feed of fork/like/submit/feature events
- `CreatorCard` — profile with stats and founding creator badge
- `Navbar` — sticky, mobile-responsive, hamburger menu
- `LegalPage` — shared layout for Terms/Privacy/DMCA with placeholder highlighting

### Claude Code custom skills (`.claude/commands/`)
- `/dev` — start Next.js dev server
- `/build-check` — TypeScript check + production build
- `/add-app` — scaffold a new AppEntry in data.ts
- `/add-creator` — scaffold a new CreatorProfile in data.ts
- `/pre-launch` — run the full pre-launch readiness checklist
- `/rename-app` — rename the app across the codebase

---

## Obsidian Vault (`/forkable-vault/`)

A full planning knowledge base. Open this folder as a vault in Obsidian.

```
forkable-vault/
├── Home.md                          # Dashboard + full map of content
├── 01 Planning/
│   ├── Roadmap.md
│   ├── Timeline.md
│   ├── Business Plan.md
│   └── Open Questions.md
├── 02 Legal/
│   ├── Legal Overview.md            # Includes insurance guidance
│   ├── Wyoming LLC Setup.md
│   ├── NY State Notes.md
│   └── Legal Placeholders.md        # Fill-in table for ToS/Privacy/DMCA
├── 03 Tech/
│   ├── Tech Stack.md
│   ├── Claude Code Skills.md
│   ├── Platform Fork Integrations.md
│   └── Environment Variables.md
├── 04 Finance/
│   ├── Monetization.md
│   ├── Revenue Projections.md
│   └── Cost Tracker.md
├── 05 Marketing/
│   ├── Go-To-Market Strategy.md
│   ├── Target Audience.md
│   ├── Content Playbook.md
│   └── Founding Creator Program.md
├── 06 Brand/
│   ├── Brand Guide.md
│   └── Domain & Trademark.md       # Includes IP protection guidance
└── 07 Ops/
    ├── Pre-Launch Checklist.md
    └── Weekly Rhythm.md
```

To sync automatically: install the **Obsidian Git** community plugin inside Obsidian. It auto-pulls when you push from Claude Code.

---

## Key decisions made

| Decision | Choice | Reason |
|----------|--------|--------|
| App name | Forkable | Clear, memorable, action-oriented |
| Business entity | Wyoming LLC | NY LLC has $300–2000 newspaper publication requirement |
| Hosting | Vercel | Free tier, auto-deploys from GitHub |
| Database | Supabase | Free tier, Postgres, built-in auth |
| Payments | Stripe + Stripe Connect | Industry standard; Connect handles creator payouts |
| Analytics | Plausible | Privacy-first, $9/mo |
| Email | Resend | 3,000 emails/mo free |
| Font | Geist Sans | Clean, modern, Next.js native |
| Accent color | Amber (#f59e0b) | Signals action + premium without being garish |

---

## What's NOT done yet (priority order)

### Must-do before launch
1. **Form Wyoming LLC** — Northwest Registered Agent, ~$139
2. **Get EIN** — IRS online, free
3. **Open Mercury business bank account** — free
4. **Register DMCA agent** — copyright.gov, $6
5. **Fill in legal placeholders** — ToS, Privacy, DMCA pages have `[BRACKETED]` items
6. **Wire Supabase** — replace mock data with real DB, add auth
7. **Wire Stripe** — Pro subscription checkout, webhooks, `users.is_pro = true`
8. **Wire Stripe Connect** — creator onboarding, fork purchase flow
9. **Buy domain** — forkable.dev preferred (~$12/yr on Namecheap or Cloudflare)
10. **Deploy to Vercel** — connect GitHub repo, set env vars

### Nice to have before launch
- Replit fork button wired (requires GitHub repo URL on every submission)
- Outreach to v0/Bolt/Lovable for official fork integrations
- 20+ Founding Creators onboarded with real apps

### Post-launch
- Trademark "Forkable" at $5–10k MRR (~$1,500–2,500 via IP attorney)
- E&O + Cyber Liability insurance at scale
- Sponsored category placements (month 6+)
- Enterprise licensing (month 9+)

---

## Environment variables needed

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=          # server-side only, never NEXT_PUBLIC_

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=                  # server-side only
STRIPE_WEBHOOK_SECRET=

# Email
RESEND_API_KEY=

# Optional
ANTHROPIC_API_KEY=

# App
NEXT_PUBLIC_APP_URL=https://forkable.dev
```

Add to `.env.local` locally and Vercel dashboard for production.

---

## Costs

### One-time setup (~$360 total)
- Wyoming LLC: ~$139
- DMCA agent: $6
- Domain: ~$12
- Lawyer ToS review: $200–400

### Monthly (launch phase)
- Vercel: $0 (free)
- Supabase: $0 (free)
- Plausible: $9
- Resend: $0 (free)
- Domain amortized: $1
- Wyoming annual fees amortized: $8
- **Total: ~$18/mo**

**Break-even: 7 Pro subscribers at $12/mo**

---

## Revenue projections

| Month | Pro Subs | Total MRR | Net |
|-------|----------|-----------|-----|
| 1 | 5 | $60 | $38 |
| 2 | 20 | $290 | $268 |
| 3 | 75 | $1,100 | $1,025 |
| 6 | 300 | $5,100 | $5,025 |
| 12 | 1,000 | $20,000 | $19,850 |

---

## Business protection (IP)

**You cannot trademark an idea.** Anyone can build a similar platform. Your real moat:

1. **Founding Creator lock-in** — 50 creators with followers and fork revenue on Forkable don't want to restart elsewhere
2. **Network effects** — the community is hard to replicate; code isn't
3. **Brand recognition** — being first in a category is durable
4. **Speed** — ship faster than any copycat

**What IS protectable:**
- Brand name "Forkable" → trademark (file at $5–10k MRR, ~$1,500–2,500 via IP attorney)
- Your code → copyright (automatic)
- Your logo → trademark + trade dress

---

## How to run locally

```bash
git clone https://github.com/aylao/github-ayla_Trial.git
cd github-ayla_Trial/platform
npm install
cp .env.example .env.local   # fill in env vars
npm run dev
# → http://localhost:3000
# → http://localhost:3000/founder  (your internal dashboard)
```

---

## Target audience

**Primary — The Techy Artist**
Creative professionals (designers, musicians, writers, teachers) who use AI tools daily and want custom apps but can't build from scratch. Age 24–40. Already on Figma, Notion, Midjourney, ChatGPT. This is the core demographic.

**Secondary — The Active Vibe Coder**
Builders who actively use Lovable/Bolt/Cursor/Replit. They want distribution and monetization for what they already build.

**Tertiary — The Busy Professional**
Non-technical professionals who want ready-to-use AI tools without hiring a developer.
