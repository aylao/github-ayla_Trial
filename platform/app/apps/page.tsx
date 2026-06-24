"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { MOCK_APPS, ALL_TAGS } from "@/lib/data";
import { AppCard } from "@/components/AppCard";
import type { SortOption } from "@/types";

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "trending", label: "Trending" },
  { value: "newest", label: "Newest" },
  { value: "most-forked", label: "Most Forked" },
  { value: "most-liked", label: "Most Liked" },
];

export default function BrowsePage() {
  const [query, setQuery] = useState("");
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [sort, setSort] = useState<SortOption>("trending");

  const filtered = useMemo(() => {
    let apps = [...MOCK_APPS];

    if (query) {
      const q = query.toLowerCase();
      apps = apps.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q) ||
          a.creator.toLowerCase().includes(q) ||
          a.tags.some((t) => t.includes(q))
      );
    }

    if (activeTags.length > 0) {
      apps = apps.filter((a) => activeTags.some((t) => a.tags.includes(t)));
    }

    switch (sort) {
      case "newest":
        return apps.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
      case "most-forked":
        return apps.sort((a, b) => b.forks - a.forks);
      case "most-liked":
        return apps.sort((a, b) => b.likes - a.likes);
      default:
        return apps.sort((a, b) => b.views - a.views);
    }
  }, [query, activeTags, sort]);

  function toggleTag(tag: string) {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Browse Apps</h1>
        <p className="text-gray-500 text-sm">
          {MOCK_APPS.length} apps available to fork. More added daily.
        </p>
      </div>

      {/* Search + Sort */}
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search apps, tags, creators..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
          />
        </div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortOption)}
          className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 bg-white"
        >
          {SORT_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {ALL_TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
              activeTags.includes(tag)
                ? "bg-violet-600 text-white border-violet-600"
                : "bg-white text-gray-600 border-gray-200 hover:border-violet-300"
            }`}
          >
            {tag}
          </button>
        ))}
        {activeTags.length > 0 && (
          <button
            onClick={() => setActiveTags([])}
            className="px-3 py-1 rounded-full text-xs font-medium text-red-500 border border-red-200 hover:bg-red-50"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <div className="text-4xl mb-3">🔍</div>
          <p className="text-sm">No apps match your filters. Try a different search.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </main>
  );
}
