Scaffold a new CreatorProfile in platform/lib/data.ts.

Ask for (or use provided): display name, handle, bio, location, what they build (tags), and whether they're a founding creator.

Then:
1. Generate a DiceBear avatar URL using their handle as the seed: `https://api.dicebear.com/7.x/adventurer/svg?seed=[handle]`
2. Set realistic appCount/totalForks/totalLikes based on their described experience level
3. Add to CREATORS array in platform/lib/data.ts
4. Run `npm run build` in platform/ to confirm no errors
5. Show the diff
