# Legal Checklist

> Complete before going live with payments. See also: `BUSINESS_PLAN.md` in repo root.

## One-time setup

- [ ] **Wyoming LLC** — Northwest Registered Agent, ~$139 total
  - Why Wyoming, not NY: NY requires $300–2000 newspaper publication. Wyoming skips it.
  - You live in NY and operate a Wyoming LLC — completely standard.
  - Takes 3–5 business days
  
- [ ] **EIN** — IRS.gov, free, 10 minutes
  - Need this before opening a bank account

- [ ] **Mercury business bank account** — mercury.com, free
  - Keep business and personal money separate from day one

- [ ] **DMCA agent registration** — copyright.gov/dmca-directory, $6
  - Must be done before going public
  - Protects Forkable from liability when users submit infringing content

- [ ] **One-hour lawyer review of ToS** — $200–400
  - Use Clerky or Stripe Atlas lawyer referrals
  - Do this before accepting payments

## Fill in legal page placeholders

All bracketed fields in `/terms`, `/privacy`, `/dmca`:

| Field | Value |
|-------|-------|
| `[YOUR LLC NAME]` | |
| `[STATE]` | Wyoming |
| `[CITY, STATE]` | Cheyenne, WY |
| `[CONTACT_EMAIL]` | hello@forkable.dev |
| `[DMCA_EMAIL]` | dmca@forkable.dev |
| `[PRIVACY_EMAIL]` | privacy@forkable.dev |
| `[LEGAL_EMAIL]` | legal@forkable.dev |
| `[ABUSE_EMAIL]` | abuse@forkable.dev |
| `[ANALYTICS PROVIDER]` | Plausible |
| `[EMAIL PROVIDER]` | Resend |
| `[HOSTING PROVIDER]` | Vercel |
| `[MINIMUM_PAYOUT_AMOUNT]` | $20 |
| `[DATE]` | fill when pages go live |

## New York-specific notes

- **Sales tax on SaaS:** NY charges sales tax on digital subscriptions above certain revenue thresholds. Tell your accountant on day one. Use TaxJar or Avalara when revenue starts.
- **Personal income tax:** You'll pay NY state income tax on LLC profits — expected.
- **Don't use a NY LLC:** $300–2000 publication requirement is avoidable.

## Ongoing compliance

- Update ToS/Privacy when major features launch (payments, auth, data collection changes)
- Respond to DMCA notices within 2 business days
- Log all DMCA notices received and actions taken
- Renew Wyoming LLC annually (~$52/yr state fee)
- Renew DMCA agent registration every 3 years ($6)
