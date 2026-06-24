---
status: in-progress
tags: [tech, integrations]
created: 2026-06-24
updated: 2026-06-24
---

# Platform Fork Integrations

*The "Fork" buttons are the core product. Here's the real status of each platform.*

---

## Current state

Fork buttons in the platform currently link to platform homepages (lovable.dev, bolt.new, etc.). They need to actually pass the app's code so it pre-loads in the tool.

---

## Per-platform status

### Replit ✅ Works today
**Method:** `replit.com/new?github=github.com/[user]/[repo]`
Imports a GitHub repo directly. The user lands in Replit with the code loaded.

**Requirements:** App must have a GitHub repo URL. → Require GitHub repo URL on every submission.

**Action:** Wire this into fork URL generation: when creator submits a GitHub URL, generate the Replit fork link automatically.

---

### v0 (Vercel) ⬜ Contact needed
**Method:** No public fork URL exists yet.
**Action:** Email Vercel's developer relations team. Frame it as "we send you qualified users ready to build." They're builder-friendly.

---

### Bolt ⬜ Contact needed
**Method:** `bolt.new` has prompt-based import but no public fork URL.
**Action:** Reach out to Bolt's team via their Discord or Twitter. Same pitch as Vercel.

---

### Lovable ⬜ Contact needed
**Method:** Lovable has a "remix" feature but no public API.
**Action:** Lovable is the closest platform to what Forkable is — they might want to officially integrate. This is the most valuable partnership to pursue.

---

### Cursor ⬜ Desktop-only (limited)
**Method:** `cursor://open?url=...` deep link, but this is a desktop IDE.
**Practical approach:** Show a "Clone URL" that opens in Cursor — it's basically a GitHub clone URL.

---

### Windsurf ⬜ Desktop-only (limited)
**Method:** Same as Cursor — desktop IDE, no web fork flow.
**Practical approach:** Clone URL, same as Cursor.

---

## Interim solution (launch with this)

1. Require a GitHub repo URL on every app submission form
2. Display Replit fork button using `replit.com/new?github=[repo-url]` — this works today
3. For all other platforms: link to their home page for now, with a note "import [repo URL] manually"
4. Pursue v0/Bolt/Lovable partnerships in months 2–3

---

## Partnership email template

> Hi [Name] — I'm building Forkable, a CivitAI-style app discovery platform. Users browse vibe-coded apps with live previews and one-click fork into [Platform]. I'd love to officially integrate [Platform]'s fork flow so users land in your editor with the code pre-loaded. This drives qualified, intent-filled users directly to you. Would you be open to a quick call?
