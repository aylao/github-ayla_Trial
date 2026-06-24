Scaffold a new AppEntry in platform/lib/data.ts.

Ask for (or use provided): app title, description, creator handle, tags, and which platforms it can be forked into.

Then:
1. Generate a unique kebab-case `id` from the title
2. Pick an appropriate Unsplash photo URL for `screenshotUrl` (use a real Unsplash URL matching the category)
3. Add the entry to MOCK_APPS in platform/lib/data.ts in the right position (sort by createdAt descending)
4. Run `npm run build` in platform/ to confirm no errors
5. Show the diff

Use today's date for `createdAt` and `updatedAt`.
