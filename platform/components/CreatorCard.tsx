import Image from "next/image";
import Link from "next/link";
import { GitFork, Heart, Layers } from "lucide-react";
import type { CreatorProfile } from "@/types";

function fmt(n: number) {
  return n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n);
}

export function CreatorCard({ creator }: { creator: CreatorProfile }) {
  return (
    <div className="flex flex-col gap-3 p-5 bg-white rounded-2xl border border-gray-200 hover:border-violet-300 hover:shadow-sm transition-all">
      <div className="flex items-start gap-3">
        <Image
          src={creator.avatar}
          alt={creator.displayName}
          width={44}
          height={44}
          className="rounded-full bg-gray-100 shrink-0"
          unoptimized
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-sm text-gray-900">{creator.displayName}</span>
            {creator.isFoundingCreator && (
              <span className="text-xs bg-amber-100 text-amber-700 font-semibold px-2 py-0.5 rounded-full border border-amber-200">
                Founding Creator
              </span>
            )}
          </div>
          <span className="text-xs text-gray-400">@{creator.handle}</span>
          {creator.location && (
            <div className="text-xs text-gray-400 mt-0.5">{creator.location}</div>
          )}
        </div>
      </div>

      <p className="text-xs text-gray-500 leading-relaxed">{creator.bio}</p>

      <div className="flex gap-4 text-xs text-gray-400 border-t border-gray-100 pt-3">
        <span className="flex items-center gap-1">
          <Layers size={11} /> {creator.appCount} apps
        </span>
        <span className="flex items-center gap-1">
          <GitFork size={11} /> {fmt(creator.totalForks)} forks
        </span>
        <span className="flex items-center gap-1">
          <Heart size={11} /> {fmt(creator.totalLikes)} likes
        </span>
      </div>

      <div className="flex flex-wrap gap-1">
        {creator.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
