Rename the app across the entire codebase.

Usage: /rename-app OldName NewName

Search for all occurrences of the old name (case-sensitive and case-insensitive) across:
- platform/app/ (page titles, metadata, copy)
- platform/components/ (Navbar, footer)
- platform/lib/data.ts
- BUSINESS_PLAN.md
- notes/

Show a summary of what will change, then make the edits, run `npm run build` to confirm, and show the diff.
