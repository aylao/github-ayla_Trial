---
status: done
tags: [tech, workflow, claude-code]
created: 2026-06-24
updated: 2026-06-24
---

# Claude Code Skills

*All commands live in `.claude/commands/` and are invoked by typing `/command-name` in any Claude Code session on this repo.*

---

## Custom commands (project-specific)

### `/dev`
Start the Next.js dev server in `platform/` and confirm it's running.
**Use at:** Start of every coding session.

### `/build-check`
TypeScript check + production build. Reports page count, errors, warnings.
**Use before:** Every commit. Every deployment.

### `/add-app`
Scaffold a new `AppEntry` in `platform/lib/data.ts`.
Generates: ID, Unsplash screenshot URL, adds to array, confirms build passes.
**Use when:** Adding seed apps or approving real submissions early on.
**Example:** `/add-app` → answer prompts for title, description, creator, tags, platforms.

### `/add-creator`
Scaffold a new `CreatorProfile` in `platform/lib/data.ts`.
Auto-generates DiceBear avatar URL from handle.
**Use when:** Onboarding a confirmed founding creator.

### `/pre-launch`
Full readiness checklist: legal placeholders, build state, auth, content minimums, UX basics.
**Use:** 1 week before soft launch. Again 1 day before public launch.

### `/rename-app`
Renames the brand across all platform files + notes.
**Use if:** Ever rebranding from Forkable.
**Example:** `/rename-app Forkable NewName`

---

## Built-in Claude Code skills to use on this project

### `/code-review`
Reviews staged diff for correctness bugs and simplification.
**Flags:** `--fix` to apply fixes, `--comment` to post as PR comments.
**Use before:** Any commit that adds features or changes existing logic.

### `/security-review`
Full security audit of pending changes.
**Use before:**
- Adding Supabase Auth
- Adding Stripe payments
- Public launch
- Any time user input is stored or displayed

### `/verify`
Runs the app and observes real behavior to confirm a feature works.
**Use after:** Implementing any user-facing feature. Build passing ≠ feature working.

### `/run`
Launches the app, takes a screenshot or walks through it.
**Use when:** You want to see the current UI without manually starting the server.

### `/review`
Reviews a GitHub PR.
**Use when:** Working with a collaborator or reviewing your own PR.

---

## Recommended workflow

```
Start of session     →  /dev
After making changes →  /build-check
Before committing    →  /code-review
After shipping feat  →  /verify
Before launch        →  /pre-launch  then  /security-review
```
