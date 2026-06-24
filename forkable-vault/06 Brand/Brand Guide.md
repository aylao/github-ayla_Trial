---
status: in-progress
tags: [brand, design, identity]
created: 2026-06-24
updated: 2026-06-24
---

# Brand Guide

> [!NOTE] The platform is currently built with a dark theme using amber as the accent color. This guide formalizes those choices so everything stays consistent.

---

## Brand personality

| Trait | What it means in practice |
|-------|--------------------------|
| **Creative** | We celebrate making things, not just consuming them |
| **Accessible** | Non-coders belong here. Jargon is minimized. |
| **Energetic** | Fast, sharp, opinionated — not corporate-soft |
| **Honest** | No growth-hacking dark patterns. No fake scarcity. |
| **Community-first** | Creators are people, not inventory |

---

## Voice and tone

**Do:**
- Write like a smart friend explaining something
- Use active verbs: fork, build, ship, remix, discover
- Be specific: "32 apps, 6 platforms" not "hundreds of apps"
- Celebrate the creator, not just the platform

**Don't:**
- Use enterprise SaaS language ("leverage," "synergize," "unlock value")
- Write generic copy ("the best platform for…")
- Punch down at beginners
- Overpromise ("will change everything")

**Example — bad:** "Leverage our platform's powerful discovery engine to unlock the full potential of your vibe-coded applications."

**Example — good:** "Find apps built by people like you. Fork them in one click. Ship something new."

---

## Color palette

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Background | Dark slate | `#0f172a` | Page background |
| Surface | Slate-800 | `#1e293b` | Cards, panels |
| Surface alt | Slate-700 | `#334155` | Hover states, borders |
| Accent | Amber | `#f59e0b` | Buttons, badges, highlights |
| Accent light | Amber-400 | `#fbbf24` | Hover on amber elements |
| Text primary | Slate-100 | `#f1f5f9` | Headings, body text |
| Text secondary | Slate-400 | `#94a3b8` | Metadata, timestamps |
| Pro badge | Amber-500 | `#f59e0b` | Pro/Founding creator badges |

> [!TIP] The amber accent is the most important brand element — it signals "action" and "premium" simultaneously. Keep it reserved for the things that matter: buttons, badges, and key stats.

---

## Typography

| Role | Font | Weight | Notes |
|------|------|--------|-------|
| Everything | Geist Sans | 400 / 600 / 700 | From Google Fonts via next/font |
| Code snippets | Monospace fallback | 400 | Only used in Legal pages |

**Scale:**
- Hero headings: `text-5xl` or `text-6xl`, weight 700
- Section headings: `text-3xl`, weight 700
- Card titles: `text-xl`, weight 600
- Body: `text-base`, weight 400
- Metadata/labels: `text-sm text-slate-400`

---

## Iconography

Using **lucide-react** throughout. Key icons and their usage:

| Icon | Used for |
|------|----------|
| `Zap` | Brand logo (Forkable wordmark) |
| `GitFork` | Fork action, fork counts |
| `Heart` | Like action |
| `Eye` | View counts |
| `Star` | Featured badge |
| `Crown` | Pro badge |
| `Trophy` | Founding Creator badge |
| `ExternalLink` | Fork button, external links |
| `Lock` | Locked paid forks |
| `ChevronRight` | Navigation, "see more" |
| `Search` | Search inputs |

---

## Logo usage

The current wordmark is: `⚡ Forkable` (Zap icon + brand name in Geist Sans, weight 700)

**Rules:**
- Always use the dark background version on dark pages
- Minimum size: 24px icon, 20px text
- Don't add drop shadows, gradients, or outlined strokes to the icon
- Don't recolor the amber Zap icon

---

## What makes a good screenshot on Forkable

Screenshots are the most important visual element — they're the first thing users see in browse.

**Good screenshot:**
- Clear UI with visible functionality
- Dark or light theme (both work)
- No placeholder text ("Lorem ipsum") visible
- Shows the most interesting part of the app, not a login screen
- 16:9 aspect ratio (rendered as `aspect-video` in cards)

**Bad screenshot:**
- Blurry or low-res
- Shows an error state
- Generic landing page with no UI
- Too much whitespace, no apparent function

→ See [[Domain & Trademark]] for brand asset protection.
