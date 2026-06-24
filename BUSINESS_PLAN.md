# AppForge — Operational Business Plan

> Living document. Update this as decisions get made. Last updated: June 2026.

---

## What this is

AppForge is a consumption-first discovery platform for vibe-coded apps — like CivitAI for AI models, but for running apps. Builders share apps with live previews; anyone can fork them into Lovable, Bolt, Replit, v0, Cursor, or Windsurf and build from that foundation instead of from zero.

**Core insight:** Vibe coding unlocked app creation for a huge new audience (designers, musicians, artists, writers, non-technical founders). That audience has no natural home — GitHub is too code-first, Replit's community layer is weak, Lovable/Bolt are siloed. AppForge is the open layer on top.

---

## Phase timeline

```
Weeks 1–2   Legal + infra setup
Weeks 3–4   Founding Creator outreach (offline, no code)
Weeks 5–8   Soft launch — live site, founding creators only, no payments
Month 3     Public launch — Product Hunt, all features, paid forks enabled
Month 6     Scale — advertising spend, platform API integrations, analytics
```

---

## Phase 1: Legal setup (Weeks 1–2)

Do these in order. Each one unlocks the next.

### Step 1 — Form Wyoming LLC (~$140, one week)

**Why Wyoming, not New York:** NY LLCs require publishing a legal notice in two local newspapers for 6 weeks. Depending on your county, this costs $300–$2,000 and is a pure bureaucratic tax. Wyoming skips it entirely. You live in NY, you operate a Wyoming LLC — this is completely standard.

**How:**
1. Go to Northwest Registered Agent (northwestregisteredagent.com) — $39/yr registered agent fee, ~$100 Wyoming state filing fee
2. Choose a name — "AppForge LLC" or a holding name like "[Your Name] Digital LLC" if you want flexibility
3. Takes 3–5 business days

**What you get:** Legal separation between your personal assets and the platform. If someone sues AppForge, they can't come after your personal bank account.

### Step 2 — Get an EIN (free, same day)

Go to IRS.gov → Apply for EIN online. Takes 10 minutes. You need this to open a business bank account and set up Stripe.

### Step 3 — Open a business bank account

Mercury (mercury.com) is the standard for startups — free, no minimum balance, works with Wyoming LLCs, integrates with Stripe and accounting tools. Bring your LLC paperwork and EIN.

### Step 4 — Register DMCA agent ($6, one time)

Go to copyright.gov/dmca-directory. Register AppForge as a service provider and designate yourself (or a lawyer) as the agent. Takes 15 minutes. **Do this before you go public** — without it you lose safe harbor protection if a user submits infringing content.

Fill in the `[DMCA_EMAIL]` placeholder in `/dmca` with a dedicated email like `dmca@appforge.dev`.

### Step 5 — Fill in legal page placeholders

The ToS, Privacy Policy, and DMCA pages are live at `/terms`, `/privacy`, `/dmca`. Every `[BRACKETED]` field needs to be filled in before you accept payments. The main ones:

| Placeholder | What to put |
|------------|-------------|
| `[YOUR LLC NAME]` | Your Wyoming LLC name |
| `[STATE]` | Wyoming |
| `[CITY, STATE]` | Cheyenne, WY (or wherever your registered agent is) |
| `[CONTACT_EMAIL]` | hello@appforge.dev |
| `[DMCA_EMAIL]` | dmca@appforge.dev |
| `[PRIVACY_EMAIL]` | privacy@appforge.dev |
| `[LEGAL_EMAIL]` | legal@appforge.dev |
| `[ANALYTICS PROVIDER]` | Plausible (once set up) |
| `[EMAIL PROVIDER]` | Resend (once set up) |
| `[HOSTING PROVIDER]` | Vercel |
| `[MINIMUM_PAYOUT_AMOUNT]` | $20 (standard) |
| `[DATE]` | Fill in when pages go live |

**One-hour lawyer review:** Before you go live with payments, pay a startup lawyer ~$200–400 for one hour to review the ToS. Use Clerky or Stripe Atlas's lawyer referrals — they specialize in this and work fast.

### New York-specific notes

- **Sales tax:** NY charges sales tax on SaaS products above certain revenue thresholds with NY customers. Not a blocker at launch, but tell your accountant on day one. Use TaxJar or Avalara when revenue starts.
- **Personal tax:** You'll pay NY state income tax on business income — expected. Keep business and personal expenses separate from day one (Mercury bank makes this easy).

---

## Phase 2: Tech setup (Weeks 1–2, parallel with legal)

### Full tech stack

| Layer | Service | Cost | Notes |
|-------|---------|------|-------|
| Hosting | Vercel | Free → $20/mo | Deploy directly from GitHub. Free tier handles early traffic easily |
| Database | Supabase | Free → $25/mo | Postgres + real-time + auth built in. Free tier: 500MB, 2 projects |
| Auth | Supabase Auth | Included | Built into Supabase. Handles email/password + OAuth (GitHub, Google). Switch to Clerk later if you need advanced features |
| Payments | Stripe | 2.9% + $0.30/transaction | No monthly fee — pay per transaction. Use Stripe Connect for creator payouts |
| Email | Resend | Free → $20/mo | Free: 3,000 emails/month. Transactional only (receipts, confirmations, waitlist) |
| Analytics | Plausible | $9/mo | Privacy-first, no cookie banner needed, works in EU. Alternative: PostHog (free tier) |
| Images/CDN | Vercel (built in) | Included | Use Next.js `<Image>` with Unsplash for seed content; creators upload to Supabase Storage |
| Domain | Namecheap / Cloudflare | ~$12/yr | Get appforge.dev or similar |
| AI features | Claude API (Anthropic) | Pay per use | For AI-powered app descriptions, search, recommendations. Budget ~$20–50/mo early |
| Error tracking | Sentry | Free tier | Free for low volume. Wire in before public launch |

**Launch cost: ~$31/mo** (Plausible $9 + Resend free + Vercel free + Supabase free + domain $1 amortized + Sentry free)

**After 500 users: ~$75/mo** (Vercel Pro $20 + Supabase Pro $25 + Plausible $9 + Resend $20 + domain)

Break even on infrastructure: **7 Pro subscribers at $12/mo**

### What to build (tech backlog, in priority order)

1. **Replace mock data with Supabase** — apps, creators, activity feed all pull from DB
2. **Auth** — sign up / log in / profile page (Supabase Auth, 1–2 days)
3. **App submission** — form saves to Supabase, admin review queue
4. **Likes + fork tracking** — write to DB when user clicks Like or Fork
5. **Stripe subscriptions** — Pro plan billing ($12/mo or $115/yr)
6. **Stripe Connect** — creator accounts, paid fork pricing, weekly payouts
7. **Real fork URL integration** — see Platform Integrations section below
8. **Search** — Supabase full-text search on app titles/descriptions/tags
9. **Creator profiles** — public pages at `/creators/[handle]`
10. **Email notifications** — "someone forked your app" using Resend

### Platform fork integrations (the hard part)

The fork buttons currently link to platform homepages. Real integration means passing your app's code/URL into each platform so it pre-loads. Here's the status:

| Platform | Integration method | Status |
|----------|-------------------|--------|
| Replit | `replit.com/new?github=github.com/user/repo` — imports a GitHub repo | Works today if app is on GitHub |
| v0 (Vercel) | No official fork URL — opens their editor | Contact Vercel team; they're builder-friendly |
| Bolt | `bolt.new` has prompt-based import; no public fork URL yet | Contact them directly; pitch mutual benefit |
| Lovable | Lovable has remix; no public API | Contact them — they're the closest to this vision already |
| Cursor / Windsurf | These are desktop IDEs, not web — fork = clone to local | Deep link to `cursor://open?url=...` or provide GitHub clone URL |

**Interim solution:** For every submitted app, require a GitHub repo URL. Fork buttons generate `replit.com/new?github=[repo]` links automatically. This gives you working fork buttons in week 1.

**Medium-term:** Reach out to Lovable and Bolt BD teams. Frame it as "we send you qualified users who are ready to build." They will likely want to integrate.

---

## Phase 3: Founding Creator outreach (Weeks 3–4)

This is the most important thing you do before launch. The app gallery being seeded when people arrive is what makes the difference between a ghost town and a real platform.

### The outreach script

Find 50 vibe coders on Twitter/X who regularly post "I built X with [Lovable/Bolt/Replit]." Send this DM:

> Hey [name] — I'm building AppForge, a CivitAI-style discovery platform for vibe-coded apps. Your [specific app they built] is exactly the kind of thing I want on it. I'm hand-picking the first 50 Founding Creators — free Pro for life, permanent badge, and you shape the roadmap. Would love to have you. [link to /founding-creators]

**Where to find them:**
- Search Twitter/X: "built with lovable" or "bolt.new" or "made with replit" — sorted by recent
- Lovable's public showcase / Discord
- Bolt's Discord and showcase
- Reddit r/SideProject — "I built this" posts
- ProductHunt — filter by "built with AI" and check maker profiles

**Target profile:** The "techy artist" demographic you identified. Musicians who built tools, designers who shipped apps, artists building AI generators. They have audiences, they share what they make, and they're not served by GitHub culture.

**Goal:** 20 real apps with real screenshots before soft launch.

---

## Monetization

### Revenue streams (in launch order)

**1. Pro subscriptions — $12/mo or $115/yr (launch month 3)**
- Unlimited submissions
- Paid fork monetization (80% creator / 20% AppForge)
- Featured placement
- Full analytics

**2. Paid fork revenue — 20% cut (launch month 3)**
- Creators set price per fork ($5–$99)
- Buyer pays → Stripe routes 80% to creator, 20% to AppForge
- Requires Stripe Connect setup

**3. Sponsored category placements (month 6+)**
- AI API providers (Anthropic, OpenAI), hosting providers (Vercel, Supabase) pay to sponsor category pages
- "AI tools" category sponsored by Anthropic = $500–$2,000/mo
- Split among top creators in that category as bonus

**4. Enterprise app licensing (month 9+)**
- Companies license app templates for internal teams at seat prices
- AppForge handles invoicing; creator sets price
- High-margin, low-volume

### Revenue projections

| Month | Pro subs | MRR (subs) | Fork revenue (20%) | Total MRR |
|-------|----------|------------|-------------------|-----------|
| 1 | 5 | $60 | $0 | $60 |
| 2 | 20 | $240 | $50 | $290 |
| 3 (launch) | 75 | $900 | $200 | $1,100 |
| 4 | 150 | $1,800 | $500 | $2,300 |
| 6 | 300 | $3,600 | $1,500 | $5,100 |
| 9 | 600 | $7,200 | $4,000 | $11,200 |
| 12 | 1,000 | $12,000 | $8,000 | $20,000 |

These are conservative. One viral Twitter thread or Product Hunt front page can move month-3 numbers by 5–10x.

---

## Marketing & advertising

### Pre-launch (weeks 1–8): $0 budget, organic only

**Daily Twitter/X posting — the single most important habit:**
- Post one app per day with a GIF or screenshot
- Format: "This [category] app was built in [tool] and forked 200 times. Here's what makes it work: [thread]"
- Tag the creator — they'll retweet to their audience
- Use hashtags sparingly: #vibecoding #aiapps #buildinpublic

**Discord seeding:**
- Join Lovable Discord, Bolt Discord, Replit Discord, Cursor Discord
- Don't spam — participate genuinely, then mention AppForge when relevant
- Post "I'm curating the best vibe-coded apps — submit yours at appforge.dev" once per community

**Build in public:**
- Share your own building process on Twitter — "Building AppForge, day 12" posts get attention from builders who become users
- Post honest numbers (visitors, submissions, forks) — transparency builds trust

### Launch (months 1–3): $200–500/mo

**Twitter/X promoted posts:** Target followers of @levelsio, @piratewires, @buildspace, Lovable's account, Bolt's account. Budget $100–200/mo.

**Reddit:** Post authentically in r/SideProject when you hit milestones ("We hit 100 apps on AppForge"). No paid Reddit until month 6.

**Product Hunt launch:** Prepare 3 weeks in advance. Get your founding creators to upvote and comment on launch day. Aim for top 5 of the day — this drives a meaningful spike in signups.

**Email newsletter:** Start collecting emails immediately (already have waitlist form in founding creators page). Send one "app of the week" email per week. Grow this list — it's your most reliable channel.

### Growth (months 3–6): $500–1,500/mo

**TikTok/Reels:** "I forked this app and added [feature] in 10 minutes" format. This is the highest-reach channel for the techy-artist demographic. Hire a part-time video editor ($200–400/mo) or do it yourself if you're comfortable on camera.

**Twitter/X scale up:** Increase promoted posts to $300–500/mo targeting what worked in phase 2.

**Creator partnerships:** Pay 2–3 founding creators with large audiences ($100–300/each) to post about AppForge when they submit a new app.

### The demographic targeting rationale

Your instinct is right. The "techy artist" demographic is:
- Large: millions of people who are creative and now discovering they can build
- Underserved: no platform speaks to them as builders, not just users
- Social: they share what they make — lower cost per acquisition than pure tech audiences
- Sticky: once someone forks an app and ships something, they come back

Specific audience targeting for paid ads:
- Followers of Canva, Figma, Adobe (creatives with tech curiosity)
- Followers of Lovable, Bolt, Replit official accounts
- Followers of "build in public" Twitter accounts
- Interests: music production, digital art, independent creator tools

---

## Key risks and mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Platform lock-in (Lovable/Bolt won't provide fork URLs) | Medium | High | Require GitHub repo for all submissions; use Replit GitHub import as baseline |
| Cold start (no content at launch) | Low — already mitigated | High | 32 seed apps + founding creator program |
| Creator quality control (someone submits malware) | Low | High | Manual review queue before publishing; DMCA in place |
| Platform copies the feature (Lovable adds a gallery) | Medium | High | Move faster; build the social layer they won't build |
| Revenue doesn't materialize | Low | Medium | Break-even at 7 Pro subs; $31/mo infra costs are extremely low |

---

## Decision log

*Record major decisions here so you remember why you made them.*

| Date | Decision | Reason |
|------|----------|--------|
| Jun 2026 | Wyoming LLC over NY LLC | NY publication requirement costs $300–2000 |
| Jun 2026 | Supabase over PlanetScale | Auth + storage + DB in one, free tier generous |
| Jun 2026 | Plausible over GA | No cookie banner needed, GDPR-compliant, privacy-first matches brand |
| Jun 2026 | 80/20 creator split | Industry standard; matches what Gumroad/Patreon offer |

---

## Subscriptions and accounts to set up (checklist)

- [ ] Northwest Registered Agent — Wyoming LLC ($139)
- [ ] IRS EIN — free at irs.gov
- [ ] Mercury business bank account — free
- [ ] Namecheap/Cloudflare domain — ~$12/yr
- [ ] Vercel account — free tier
- [ ] Supabase account — free tier
- [ ] Stripe account + Stripe Connect — free (pay per transaction)
- [ ] Resend account — free tier
- [ ] Plausible account — $9/mo
- [ ] Sentry account — free tier
- [ ] Copyright.gov DMCA agent registration — $6
- [ ] Google Workspace (for @appforge.dev email) — $6/mo, or Cloudflare Email Routing (free)
- [ ] Claude API key (Anthropic) — pay per use, budget $20/mo
- [ ] Twitter/X account for @AppForge
- [ ] Set up 1Password or similar — store all credentials securely from day one

**Total setup cost: ~$175 one-time + ~$22/mo recurring**

---

## Open questions (decide before launch)

1. **App name:** Is "AppForge" final? Check trademark search at USPTO.gov before committing.
2. **Pricing:** $12/mo is a guess. Survey your founding creators before locking it in.
3. **Moderation:** Will you manually review every submitted app, or use a community flagging system? Manual review is right for the first 6 months.
4. **Minimum fork price:** Should there be a minimum price for paid forks (e.g. $5)? Prevents race to the bottom.
5. **GitHub requirement:** Requiring a GitHub repo for fork integrations adds friction for non-technical creators. Is there a better way?
