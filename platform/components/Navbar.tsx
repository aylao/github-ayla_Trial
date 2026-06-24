"use client";

import Link from "next/link";
import { useState } from "react";
import { Zap, Menu, X } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-violet-700">
          <Zap size={20} className="fill-violet-600 text-violet-600" />
          AppForge
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <Link href="/apps" className="hover:text-violet-700 transition-colors">Browse</Link>
          <Link href="/submit" className="hover:text-violet-700 transition-colors">Submit App</Link>
          <Link href="/pro" className="hover:text-violet-700 transition-colors font-medium text-amber-600">
            Pro ✦
          </Link>
          <Link
            href="/apps"
            className="bg-violet-600 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-violet-700 transition-colors"
          >
            Explore Apps
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 px-4 py-3 flex flex-col gap-3 text-sm bg-white">
          <Link href="/apps" onClick={() => setOpen(false)}>Browse</Link>
          <Link href="/submit" onClick={() => setOpen(false)}>Submit App</Link>
          <Link href="/pro" onClick={() => setOpen(false)} className="text-amber-600 font-medium">Pro ✦</Link>
        </div>
      )}
    </nav>
  );
}
