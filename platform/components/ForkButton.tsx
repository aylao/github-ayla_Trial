"use client";

import { ExternalLink, Lock } from "lucide-react";
import { PLATFORM_META } from "@/lib/data";
import type { Platform } from "@/types";

interface Props {
  platform: Platform;
  url: string;
  isPro?: boolean;
  userIsPro?: boolean;
}

export function ForkButton({ platform, url, isPro = false, userIsPro = false }: Props) {
  const meta = PLATFORM_META[platform];
  const locked = isPro && !userIsPro;

  if (locked) {
    return (
      <button
        className="flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-amber-300 bg-amber-50 text-amber-700 font-medium text-sm opacity-80 cursor-not-allowed w-full justify-between"
        onClick={() => alert("Upgrade to Pro to fork this app")}
      >
        <span className="flex items-center gap-2">
          <span>{meta.icon}</span>
          <span>Fork in {meta.label}</span>
        </span>
        <Lock size={14} />
      </button>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-gray-200 bg-white hover:border-violet-400 hover:bg-violet-50 text-gray-800 font-medium text-sm transition-all duration-150 w-full justify-between group"
    >
      <span className="flex items-center gap-2">
        <span>{meta.icon}</span>
        <span>Fork in {meta.label}</span>
      </span>
      <ExternalLink size={14} className="text-gray-400 group-hover:text-violet-600 transition-colors" />
    </a>
  );
}
