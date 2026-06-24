"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, GitFork, Eye, Lock } from "lucide-react";
import type { AppEntry } from "@/types";
import { PLATFORM_META } from "@/lib/data";

function fmt(n: number) {
  return n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n);
}

export function AppCard({ app }: { app: AppEntry }) {
  return (
    <Link
      href={`/apps/${app.id}`}
      className="group flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-violet-300 transition-all duration-200"
    >
      <div className="relative aspect-video overflow-hidden bg-gray-100">
        <Image
          src={app.screenshotUrl}
          alt={app.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          unoptimized
        />
        {app.featured && (
          <span className="absolute top-2 left-2 bg-violet-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
            Featured
          </span>
        )}
        {app.isPro && (
          <span className="absolute top-2 right-2 bg-amber-400 text-black text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
            <Lock size={10} /> Pro
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 p-4 gap-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-gray-900 text-sm leading-tight group-hover:text-violet-700 transition-colors">
            {app.title}
          </h3>
          <span className="text-xs text-gray-400 shrink-0">by {app.creator}</span>
        </div>

        <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 flex-1">
          {app.description}
        </p>

        <div className="flex flex-wrap gap-1 mt-1">
          {app.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="flex gap-3 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <Heart size={12} /> {fmt(app.likes)}
            </span>
            <span className="flex items-center gap-1">
              <GitFork size={12} /> {fmt(app.forks)}
            </span>
            <span className="flex items-center gap-1">
              <Eye size={12} /> {fmt(app.views)}
            </span>
          </div>

          <div className="flex gap-1">
            {Object.keys(app.forkUrls).slice(0, 3).map((p) => (
              <span
                key={p}
                title={PLATFORM_META[p as keyof typeof PLATFORM_META]?.label}
                className="text-xs"
              >
                {PLATFORM_META[p as keyof typeof PLATFORM_META]?.icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
