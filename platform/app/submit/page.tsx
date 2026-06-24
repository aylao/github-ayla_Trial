"use client";

import { useState } from "react";
import { Upload, Info } from "lucide-react";
import { ALL_TAGS, PLATFORM_META } from "@/lib/data";
import type { Platform } from "@/types";

const PLATFORMS = Object.keys(PLATFORM_META) as Platform[];

export default function SubmitPage() {
  const [tags, setTags] = useState<string[]>([]);
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [submitted, setSubmitted] = useState(false);

  function toggleTag(tag: string) {
    setTags((p) => (p.includes(tag) ? p.filter((t) => t !== tag) : [...p, tag]));
  }

  function togglePlatform(p: Platform) {
    setPlatforms((prev) => (prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]));
  }

  if (submitted) {
    return (
      <main className="max-w-2xl mx-auto px-4 py-20 text-center flex flex-col items-center gap-5">
        <div className="text-5xl">🎉</div>
        <h1 className="text-2xl font-bold text-gray-900">App submitted!</h1>
        <p className="text-gray-500 text-sm">
          Your app is under review and will be published within 24 hours. We&apos;ll email you when it goes live.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-violet-600 text-sm hover:underline"
        >
          Submit another app
        </button>
      </main>
    );
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Submit your app</h1>
      <p className="text-sm text-gray-500 mb-8">
        Share your vibe-coded creation with the community. Free accounts can submit up to 3 apps.
      </p>

      <form
        className="flex flex-col gap-6"
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
      >
        {/* Basic info */}
        <div className="flex flex-col gap-4 p-6 border border-gray-200 rounded-2xl">
          <h2 className="font-semibold text-gray-900 text-sm">App details</h2>

          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-medium text-gray-700">App name *</span>
            <input
              required
              type="text"
              placeholder="My Awesome App"
              className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-medium text-gray-700">Short description * (120 chars)</span>
            <input
              required
              type="text"
              maxLength={120}
              placeholder="What does your app do in one line?"
              className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-medium text-gray-700">Full description</span>
            <textarea
              rows={4}
              placeholder="Tell users what your app does, who it's for, what's special about it..."
              className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 resize-none"
            />
          </label>
        </div>

        {/* Live URL */}
        <div className="flex flex-col gap-4 p-6 border border-gray-200 rounded-2xl">
          <h2 className="font-semibold text-gray-900 text-sm">App URLs</h2>

          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-medium text-gray-700">Live preview URL *</span>
            <input
              required
              type="url"
              placeholder="https://myapp.lovable.app"
              className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-medium text-gray-700">Screenshot URL (or upload below)</span>
            <input
              type="url"
              placeholder="https://..."
              className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-medium text-gray-700">Or upload a screenshot</span>
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center text-gray-400 cursor-pointer hover:border-violet-300 transition-colors">
              <Upload size={20} className="mx-auto mb-2" />
              <span className="text-xs">Click to upload (PNG/JPG, max 5MB)</span>
            </div>
          </label>
        </div>

        {/* Platforms */}
        <div className="flex flex-col gap-4 p-6 border border-gray-200 rounded-2xl">
          <h2 className="font-semibold text-gray-900 text-sm">Fork platforms *</h2>
          <p className="text-xs text-gray-400">
            Which platforms can users fork this app into? Select all that apply.
          </p>
          <div className="flex flex-wrap gap-2">
            {PLATFORMS.map((p) => {
              const meta = PLATFORM_META[p];
              return (
                <button
                  key={p}
                  type="button"
                  onClick={() => togglePlatform(p)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                    platforms.includes(p)
                      ? "bg-violet-600 text-white border-violet-600"
                      : "bg-white text-gray-600 border-gray-200 hover:border-violet-300"
                  }`}
                >
                  {meta.icon} {meta.label}
                </button>
              );
            })}
          </div>
          {platforms.length === 0 && (
            <p className="text-xs text-red-400">Select at least one platform.</p>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-col gap-4 p-6 border border-gray-200 rounded-2xl">
          <h2 className="font-semibold text-gray-900 text-sm">Tags *</h2>
          <div className="flex flex-wrap gap-2">
            {ALL_TAGS.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                  tags.includes(tag)
                    ? "bg-violet-600 text-white border-violet-600"
                    : "bg-white text-gray-600 border-gray-200 hover:border-violet-300"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Monetization notice */}
        <div className="flex gap-3 p-4 bg-amber-50 border border-amber-200 rounded-2xl text-sm">
          <Info size={16} className="text-amber-600 shrink-0 mt-0.5" />
          <p className="text-amber-800">
            Want to charge for forks?{" "}
            <a href="/pro" className="font-semibold underline">
              Upgrade to Pro
            </a>{" "}
            to set a paid fork price and earn 80% of each fork.
          </p>
        </div>

        <button
          type="submit"
          disabled={platforms.length === 0 || tags.length === 0}
          className="bg-violet-600 text-white font-semibold py-3 rounded-full hover:bg-violet-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Submit App for Review
        </button>
      </form>
    </main>
  );
}
