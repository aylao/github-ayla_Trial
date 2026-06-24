---
status: in-progress
tags: [legal]
created: 2026-06-24
updated: 2026-06-24
---

# Legal Overview

> [!WARNING] Complete all of this before accepting any payments. The order matters.

## What you need and when

### Before going public (even soft launch)
1. [[Wyoming LLC Setup]] — liability protection, must exist before bank account
2. EIN — needed for bank account and Stripe
3. Mercury bank account — keep business money separate from day one
4. DMCA agent registration — $6, copyright.gov. Without this you lose safe harbor if a user submits infringing content.
5. Fill in all [[Legal Placeholders]] in the ToS, Privacy Policy, and DMCA pages

### Before accepting payments
6. One-hour lawyer review of ToS (~$200–400)
7. Stripe account + Stripe Connect onboarding

### Ongoing
- Respond to DMCA notices within 2 business days
- Renew Wyoming LLC annually (~$52/yr state fee)
- Renew DMCA agent registration every 3 years ($6)
- Update ToS/Privacy when major features ship (auth, payments, data changes)

---

## The legal pages (already built in the platform)

| Page | Route | Status |
|------|-------|--------|
| Terms of Service | `/terms` | Built — placeholders not filled |
| Privacy Policy | `/privacy` | Built — placeholders not filled |
| DMCA Policy | `/dmca` | Built — placeholders not filled |

→ See [[Legal Placeholders]] for the fill-in table.

---

## Total legal cost to launch

| Item | Cost |
|------|------|
| Wyoming LLC (state fee + registered agent) | ~$139 one-time |
| EIN | Free |
| Mercury bank account | Free |
| DMCA agent registration | $6 one-time |
| Lawyer review of ToS | $200–400 one-time |
| Wyoming LLC annual renewal | $52/yr |
| **Total to launch** | **~$350 one-time** |

---

---

## Business insurance

> [!NOTE] You don't need insurance before you're making money. The LLC is your main protection. Here's when to add each type.

**Right now — no insurance needed.** The Wyoming LLC legally separates your personal assets from business liability. Your ToS limits liability further. The combination is enough for a pre-revenue platform.

**What actually matters more than insurance right now:**
- Keep Mercury business account strictly separate from personal funds (commingling = LLC protection can be "pierced")
- Don't make promises in marketing copy you can't keep (creates liability)
- Respond to DMCA notices promptly (safe harbor depends on it)

**When to get insurance (approximate thresholds):**

| Insurance type | What it covers | When to get it | Cost/mo |
|---------------|---------------|----------------|---------|
| E&O (Errors & Omissions) | Claims your service caused financial harm to a user | $5–10k MRR | $50–80 |
| Cyber Liability | Data breaches, unauthorized access to user data | When storing real user data at scale | $30–60 |
| General Liability | Physical injury / property damage | Rarely needed for pure digital platforms | — |
| D&O (Directors & Officers) | Claims against you as a business decision-maker | When you have investors or a board | — |

**Bottom line:** Form the LLC, open Mercury, keep funds separate. That protects you for now. Revisit E&O and Cyber Liability around month 3–4 when you have real users and real data.

---

## Links
- [[Wyoming LLC Setup]]
- [[NY State Notes]]
- [[Legal Placeholders]]
