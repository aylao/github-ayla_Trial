---
status: not-started
tags: [brand, legal, domain, trademark]
created: 2026-06-24
updated: 2026-06-24
---

# Domain & Trademark

---

## Domain options

| Domain | Status | Cost/yr | Notes |
|--------|--------|---------|-------|
| forkable.dev | Check availability | ~$12 | Preferred — `.dev` signals developer/builder audience |
| forkable.app | Check availability | ~$20 | Clean alternative, Google TLD |
| forkable.io | Check availability | ~$35 | Common SaaS suffix, higher cost |
| getforkable.com | Likely available | ~$12 | Fallback if .dev is taken |
| forkable.co | Likely available | ~$25 | Acceptable fallback |

**Recommendation:** Buy `forkable.dev` first. If taken, buy `forkable.app`. Register both once you have revenue to protect the brand across TLDs.

### Where to register
- **Namecheap** — cheapest, good UI, free WhoisGuard privacy
- **Cloudflare Registrar** — at-cost pricing (no markup), integrates with Cloudflare DNS (use this if using Cloudflare for CDN/email routing)

### DNS setup
- Point nameservers to Cloudflare (free CDN + DDoS protection)
- Set up Cloudflare Email Routing for `hello@forkable.dev` → your Gmail
- Configure Vercel custom domain for the main site

---

## Protecting your business idea

> [!NOTE] This is one of the most common founder questions. The short answer: you can't protect an idea — but you don't need to.

### What is and isn't protectable

| Thing | Can you protect it? | How |
|-------|--------------------|----|
| The idea ("CivitAI for apps") | ❌ No | Ideas are not legally protectable. Anyone can build a similar platform. |
| The brand name "Forkable" | ✅ Yes | Trademark (when the time comes) |
| Your logo and design | ✅ Yes | Trademark + trade dress |
| Your actual code | ✅ Yes | Copyright — automatic from the moment you write it |
| A truly novel technical method | Maybe | Business method patent — expensive, rarely worth it for SaaS |

### Your real moat isn't legal protection — it's these

1. **Founding Creators** — once 50 creators have followers, reviews, and fork revenue on Forkable, they don't want to restart on a copycat. That lock-in is worth more than a patent.
2. **Network effects** — 1,000 creators + 10,000 users is extremely hard to replicate. The code is easy; the community isn't.
3. **Brand recognition** — being first and known in a category is a durable advantage. CivitAI has competitors; they're still CivitAI.
4. **Speed** — ship faster than anyone who copies the idea. By the time a copycat exists, you'll have 6 months of learnings they don't.

### What to do about "Forkable" being a common word

"Forkable" is used casually in developer circles, which makes it slightly harder to trademark than an invented word. But it IS registerable as a brand name applied to a specific service. The USPTO looks at whether consumers would confuse your brand with another — not whether the word exists in a dictionary.

**Before investing more in the brand:**
- [ ] Search USPTO TESS (tess.uspto.gov) for "Forkable" in Class 42
- [ ] Google "Forkable app" or "Forkable platform" for existing products
- [ ] Check `@forkable` on Twitter and `forkable` on Product Hunt

---

## Trademark

> [!WARNING] Do NOT file a trademark yourself unless you're prepared to manage it. A trademark application costs $250–350 per class + significant paperwork. It's a "nice to have" for a pre-revenue startup, not a requirement.

### When to file
- After you're making consistent revenue ($5k+ MRR)
- When you have money to pay an IP attorney ($1,500–2,500 one-time)
- When a competitor might copy the name

### What to file (when the time comes)
- **Class 42:** Software as a Service (SaaS), technology platform services
- **Basis:** Use in commerce (you're already operating)
- **Register in:** US first, then EU/UK if significant international revenue

### Cheap way to do a basic name check now
Before building a brand around "Forkable," do these free checks:
- [ ] Search USPTO TESS database (tess.uspto.gov) for "Forkable"
- [ ] Google "Forkable" to see if there's an existing company
- [ ] Check Twitter, GitHub, Product Hunt for the handle `@forkable`
- [ ] Check that `forkable.dev` or preferred domain is available

### Social handles to secure now (free)
- [ ] Twitter/X: @forkable or @forkabledev
- [ ] GitHub: /forkable or /forkabledev (for org account)
- [ ] Product Hunt: forkable (claim ahead of launch)
- [ ] LinkedIn Company Page: forkable

---

## Subdomain strategy

Once the domain is live, use subdomains for:

| Subdomain | Purpose |
|-----------|---------|
| `forkable.dev` | Main site |
| `[handle].forkable.dev` | Pro creator custom subdomains |
| `api.forkable.dev` | Future API (if/when public API is offered) |
| `status.forkable.dev` | Status page (Instatus, free tier) |

Custom creator subdomains (`handle.forkable.dev`) are a Pro feature — implement via wildcard DNS in Cloudflare and Next.js middleware rewrites.

---

## Checklist

- [ ] Check domain availability for forkable.dev
- [ ] Register domain (Namecheap or Cloudflare Registrar)
- [ ] Set up Cloudflare nameservers
- [ ] Set up Cloudflare Email Routing → your Gmail
- [ ] Point domain to Vercel
- [ ] Secure @forkable on Twitter, GitHub, Product Hunt
- [ ] Basic USPTO/Google name conflict check

→ See [[Brand Guide]] for logo and visual identity.
→ See [[Legal Overview]] for trademark and IP context.
