---
status: not-started
tags: [legal, action-required]
created: 2026-06-24
updated: 2026-06-24
---

# Legal Placeholders

*Fill these in before soft launch. Every `[BRACKETED]` field in the platform's legal pages needs a real value.*

> [!WARNING] Do not go live with placeholder text. Check this against the actual `/terms`, `/privacy`, and `/dmca` pages before publishing.

---

## Fill-in table

| Placeholder | Where used | Value to enter |
|------------|-----------|----------------|
| `[YOUR LLC NAME]` | Terms, Privacy | Forkable LLC |
| `[STATE]` | Terms | Wyoming |
| `[CITY, STATE]` | Terms (arbitration) | Cheyenne, WY |
| `[ADDRESS]` | Terms | (your registered agent address) |
| `[DATE]` | Terms, Privacy, DMCA | Day pages go live |
| `[CONTACT_EMAIL]` | Terms, Privacy | hello@forkable.dev |
| `[DMCA_EMAIL]` | Terms, DMCA | dmca@forkable.dev |
| `[PRIVACY_EMAIL]` | Privacy | privacy@forkable.dev |
| `[LEGAL_EMAIL]` | Terms | legal@forkable.dev |
| `[SECURITY_EMAIL]` | Privacy | security@forkable.dev |
| `[ABUSE_EMAIL]` | DMCA | abuse@forkable.dev |
| `[AGENT NAME]` | DMCA | Your name (or lawyer's name) |
| `[MAILING ADDRESS]` | DMCA, Terms | Your registered agent address |
| `[ANALYTICS PROVIDER]` | Privacy | Plausible |
| `[EMAIL PROVIDER]` | Privacy | Resend |
| `[HOSTING PROVIDER]` | Privacy | Vercel |
| `[MINIMUM_PAYOUT_AMOUNT]` | Terms | $20 |
| `[30/60/90]` | Privacy (data retention) | 30 days |

---

## Email addresses to set up

All via Cloudflare Email Routing (free) pointed at your personal email:

- [ ] hello@forkable.dev
- [ ] dmca@forkable.dev
- [ ] privacy@forkable.dev
- [ ] legal@forkable.dev
- [ ] security@forkable.dev
- [ ] abuse@forkable.dev

---

## After filling in

- [ ] Read through each page one more time as if you're a user
- [ ] Have lawyer review ToS before Stripe goes live
- [ ] Remove the yellow warning banner from each page (edit `needsReview` prop to `false` in `LegalPage.tsx`)
