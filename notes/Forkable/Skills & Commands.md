# Skills & Commands

All commands live in `.claude/commands/` and are invoked with `/command-name` in Claude Code.

---

## Project-specific commands (custom)

### `/dev`
**What it does:** Starts the Next.js dev server in `platform/` and confirms it's running.
**When to use:** Beginning of any coding session.
**File:** `.claude/commands/dev.md`

---

### `/build-check`
**What it does:** Runs TypeScript check + production build. Reports page count, errors, warnings.
**When to use:** Before every commit. Before deploying.
**File:** `.claude/commands/build-check.md`

---

### `/add-app`
**What it does:** Scaffolds a new `AppEntry` in `platform/lib/data.ts` — generates ID, picks Unsplash photo, adds to array, confirms build passes.
**When to use:** Adding a new seed app or a real submitted app during early days.
**File:** `.claude/commands/add-app.md`
**Example:** `/add-app` then answer the prompts for title, description, creator, tags, platforms.

---

### `/add-creator`
**What it does:** Scaffolds a new `CreatorProfile` in `platform/lib/data.ts` with auto-generated avatar URL.
**When to use:** Onboarding a new founding creator, or adding a real creator from the waitlist.
**File:** `.claude/commands/add-creator.md`

---

### `/pre-launch`
**What it does:** Runs the full pre-launch checklist — legal placeholders, build state, auth, content minimums, UX basics.
**When to use:** 1 week before soft launch, again 1 day before public launch.
**File:** `.claude/commands/pre-launch.md`
**See also:** [[Legal Checklist]]

---

### `/rename-app`
**What it does:** Renames the app across the entire codebase — all pages, components, data files, and notes.
**When to use:** If we ever rebrand from Forkable.
**File:** `.claude/commands/rename-app.md`
**Example:** `/rename-app AppForge Forkable`

---

## Built-in Claude Code skills to use on this project

### `/code-review`
**What it does:** Reviews staged diff for correctness bugs and simplification opportunities.
**When to use:** Before any commit that adds new features or changes existing logic.
**Flags:** `--fix` to apply fixes automatically, `--comment` to post as PR comments.

---

### `/security-review`
**What it does:** Full security audit of pending changes.
**When to use:**
- Before adding auth (Supabase Auth integration)
- Before adding payments (Stripe Connect)
- Before public launch
- Any time user input is being stored or displayed

---

### `/verify`
**What it does:** Runs the app and observes behavior to confirm a change works.
**When to use:** After implementing any user-facing feature. Don't skip this — build passing ≠ feature working.

---

### `/run`
**What it does:** Launches the app and takes a screenshot or walks through it.
**When to use:** When you want to see the current UI state without manually starting the server.

---

### `/review`
**What it does:** Reviews a GitHub PR for correctness.
**When to use:** If working with a collaborator or reviewing your own PR before merge.

---

## Recommended workflow

```
Start session    →  /dev
Make changes     →  /build-check (fast feedback)
Before commit    →  /code-review
New feature done →  /verify
Before launch    →  /pre-launch + /security-review
```
