"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Circle,
  Zap,
  TrendingUp,
  Users,
  GitFork,
  DollarSign,
  AlertTriangle,
  ExternalLink,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { MOCK_APPS, CREATORS } from "@/lib/data";

// ─── Checklist data ───────────────────────────────────────────────────────────

const CHECKLIST_GROUPS = [
  {
    id: "legal",
    label: "Legal",
    color: "text-rose-400",
    items: [
      { id: "llc", label: "Form Wyoming LLC (Northwest Registered Agent ~$139)" },
      { id: "ein", label: "Obtain EIN from IRS (free)" },
      { id: "dmca-agent", label: "Register DMCA agent at copyright.gov ($6)" },
      { id: "mercury", label: "Open Mercury business bank account" },
      { id: "tos-filled", label: "Fill in all [BRACKETED] placeholders in ToS" },
      { id: "privacy-filled", label: "Fill in all [BRACKETED] placeholders in Privacy Policy" },
      { id: "dmca-filled", label: "Fill in DMCA agent contact info" },
      { id: "lawyer", label: "Lawyer review of ToS (~$200–400)" },
    ],
  },
  {
    id: "tech",
    label: "Tech",
    color: "text-blue-400",
    items: [
      { id: "supabase", label: "Create Supabase project + migrate schema" },
      { id: "supabase-auth", label: "Configure Supabase auth (email + GitHub OAuth)" },
      { id: "stripe", label: "Create Stripe account + Pro subscription product" },
      { id: "stripe-webhook", label: "Configure Stripe webhook → /api/webhooks/stripe" },
      { id: "stripe-connect", label: "Enable Stripe Connect for creator payouts" },
      { id: "resend", label: "Create Resend account + email templates" },
      { id: "env-vars", label: "Set all env vars in Vercel dashboard" },
      { id: "domain", label: "Buy forkable.dev + point to Vercel" },
      { id: "cloudflare-email", label: "Set up Cloudflare Email Routing" },
      { id: "plausible", label: "Add Plausible analytics script" },
    ],
  },
  {
    id: "content",
    label: "Content & Seed",
    color: "text-emerald-400",
    items: [
      { id: "founding-creators-10", label: "Onboard 10 Founding Creators" },
      { id: "real-apps-20", label: "20+ real apps submitted with real screenshots" },
      { id: "activity-real", label: "Activity feed has recent real events" },
      { id: "featured-quality", label: "Homepage featured apps are real (not just mock seed)" },
    ],
  },
  {
    id: "marketing",
    label: "Marketing",
    color: "text-amber-400",
    items: [
      { id: "twitter-handle", label: "Secure @forkable on Twitter/X" },
      { id: "github-org", label: "Create forkable GitHub org" },
      { id: "product-hunt", label: "Claim forkable on Product Hunt" },
      { id: "trademark-check", label: "USPTO TESS search for 'Forkable' in Class 42" },
      { id: "ph-submitted", label: "Product Hunt launch scheduled or submitted" },
      { id: "launch-tweet", label: "Launch day tweet thread drafted" },
      { id: "waitlist-email", label: "Waitlist email drafted in Resend" },
      { id: "founders-launch", label: "10+ Founding Creators confirmed to post on launch day" },
    ],
  },
];

// ─── Revenue projections ──────────────────────────────────────────────────────

const PROJECTIONS = [
  { month: 1, event: "Soft launch", proSubs: 5, totalMrr: 60, net: 38 },
  { month: 2, event: "Growing", proSubs: 20, totalMrr: 290, net: 268 },
  { month: 3, event: "Public launch", proSubs: 75, totalMrr: 1100, net: 1025 },
  { month: 4, event: "Post-launch", proSubs: 150, totalMrr: 2300, net: 2225 },
  { month: 6, event: "Steady growth", proSubs: 300, totalMrr: 5100, net: 5025 },
  { month: 12, event: "Year 1 end", proSubs: 1000, totalMrr: 20000, net: 19850 },
];

// ─── Vault links ──────────────────────────────────────────────────────────────

const VAULT_LINKS = [
  { label: "Roadmap", path: "01 Planning/Roadmap.md" },
  { label: "Timeline", path: "01 Planning/Timeline.md" },
  { label: "Legal Overview", path: "02 Legal/Legal Overview.md" },
  { label: "Wyoming LLC Setup", path: "02 Legal/Wyoming LLC Setup.md" },
  { label: "Tech Stack", path: "03 Tech/Tech Stack.md" },
  { label: "Environment Variables", path: "03 Tech/Environment Variables.md" },
  { label: "Cost Tracker", path: "04 Finance/Cost Tracker.md" },
  { label: "Revenue Projections", path: "04 Finance/Revenue Projections.md" },
  { label: "Go-To-Market Strategy", path: "05 Marketing/Go-To-Market Strategy.md" },
  { label: "Founding Creator Program", path: "05 Marketing/Founding Creator Program.md" },
  { label: "Domain & Trademark", path: "06 Brand/Domain & Trademark.md" },
  { label: "Pre-Launch Checklist", path: "07 Ops/Pre-Launch Checklist.md" },
];

const VAULT_GITHUB_BASE =
  "https://github.com/aylao/github-ayla_Trial/blob/claude/civitai-vibe-apps-platform-4uj90d/forkable-vault/";

// ─── Component ────────────────────────────────────────────────────────────────

export default function FounderDashboard() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem("forkable-founder-checklist");
      if (saved) setChecked(JSON.parse(saved));
    } catch {}
  }, []);

  function toggle(id: string) {
    setChecked((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      localStorage.setItem("forkable-founder-checklist", JSON.stringify(next));
      return next;
    });
  }

  function toggleGroup(id: string) {
    setCollapsed((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  const totalItems = CHECKLIST_GROUPS.flatMap((g) => g.items).length;
  const doneItems = CHECKLIST_GROUPS.flatMap((g) => g.items).filter(
    (item) => checked[item.id]
  ).length;
  const pct = Math.round((doneItems / totalItems) * 100);

  const totalApps = MOCK_APPS.length;
  const totalForks = MOCK_APPS.reduce((s, a) => s + a.forks, 0);
  const totalLikes = MOCK_APPS.reduce((s, a) => s + a.likes, 0);
  const foundingCount = CREATORS.filter((c) => c.isFoundingCreator).length;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-900/60 backdrop-blur sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-1.5 text-amber-400 font-bold text-lg">
              <Zap size={18} />
              Forkable
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-slate-300 font-medium">Founder Dashboard</span>
          </div>
          <span className="text-xs bg-slate-800 text-slate-400 px-2 py-1 rounded-full font-mono">
            internal — not public
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">

        {/* Launch readiness bar */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-slate-200">Launch Readiness</h2>
            <span className="text-amber-400 font-bold text-lg">{pct}%</span>
          </div>
          <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-amber-400 rounded-full transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
          <p className="text-slate-500 text-sm mt-2">
            {doneItems} of {totalItems} pre-launch tasks complete
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: <GitFork size={18} className="text-violet-400" />, label: "Total Apps", value: totalApps },
            { icon: <GitFork size={18} className="text-blue-400" />, label: "Total Forks", value: totalForks.toLocaleString() },
            { icon: <Users size={18} className="text-emerald-400" />, label: "Founding Creators", value: `${foundingCount} / 50` },
            { icon: <TrendingUp size={18} className="text-amber-400" />, label: "Total Likes", value: totalLikes.toLocaleString() },
          ].map((s) => (
            <div key={s.label} className="bg-slate-900 border border-slate-800 rounded-xl p-4">
              <div className="flex items-center gap-2 text-slate-400 text-sm mb-1">
                {s.icon}
                {s.label}
              </div>
              <p className="text-2xl font-bold text-slate-100">{s.value}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Pre-launch checklist */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between">
              <h2 className="font-semibold text-slate-200">Pre-Launch Checklist</h2>
              <span className="text-xs text-slate-500">{doneItems}/{totalItems}</span>
            </div>
            <div className="divide-y divide-slate-800">
              {CHECKLIST_GROUPS.map((group) => {
                const groupDone = group.items.filter((i) => checked[i.id]).length;
                const isCollapsed = collapsed[group.id];
                return (
                  <div key={group.id}>
                    <button
                      onClick={() => toggleGroup(group.id)}
                      className="w-full flex items-center justify-between px-5 py-3 hover:bg-slate-800/40 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        {isCollapsed ? (
                          <ChevronRight size={14} className="text-slate-500" />
                        ) : (
                          <ChevronDown size={14} className="text-slate-500" />
                        )}
                        <span className={`text-sm font-medium ${group.color}`}>
                          {group.label}
                        </span>
                      </div>
                      <span className="text-xs text-slate-500">
                        {groupDone}/{group.items.length}
                      </span>
                    </button>
                    {!isCollapsed && (
                      <div className="px-5 pb-3 space-y-2">
                        {group.items.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => toggle(item.id)}
                            className="flex items-start gap-2.5 w-full text-left group"
                          >
                            {checked[item.id] ? (
                              <CheckCircle2
                                size={16}
                                className="text-emerald-400 mt-0.5 shrink-0"
                              />
                            ) : (
                              <Circle
                                size={16}
                                className="text-slate-600 mt-0.5 shrink-0 group-hover:text-slate-400 transition-colors"
                              />
                            )}
                            <span
                              className={`text-sm leading-snug ${
                                checked[item.id]
                                  ? "line-through text-slate-600"
                                  : "text-slate-300"
                              }`}
                            >
                              {item.label}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-6">
            {/* Revenue projections */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-800 flex items-center gap-2">
                <DollarSign size={16} className="text-emerald-400" />
                <h2 className="font-semibold text-slate-200">Revenue Projections</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-slate-500 text-xs border-b border-slate-800">
                      <th className="text-left px-5 py-2">Mo.</th>
                      <th className="text-left px-2 py-2">Event</th>
                      <th className="text-right px-2 py-2">Subs</th>
                      <th className="text-right px-5 py-2">Net MRR</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {PROJECTIONS.map((row) => (
                      <tr key={row.month} className="text-slate-300 hover:bg-slate-800/30">
                        <td className="px-5 py-2 text-slate-500 font-mono text-xs">{row.month}</td>
                        <td className="px-2 py-2 text-xs text-slate-400">{row.event}</td>
                        <td className="px-2 py-2 text-right font-mono text-xs">{row.proSubs}</td>
                        <td className="px-5 py-2 text-right font-mono text-xs text-emerald-400">
                          ${row.net.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-5 py-3 border-t border-slate-800 bg-slate-800/30">
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div>
                    <p className="text-slate-500">Break-even</p>
                    <p className="text-slate-200 font-medium">7 Pro subs</p>
                  </div>
                  <div>
                    <p className="text-slate-500">Infra/mo</p>
                    <p className="text-slate-200 font-medium">$18 now</p>
                  </div>
                  <div>
                    <p className="text-slate-500">Creator split</p>
                    <p className="text-amber-400 font-medium">80 / 20</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business protection reminder */}
            <div className="bg-slate-900 border border-amber-500/20 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle size={16} className="text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-amber-300 mb-1">Business protection priority</p>
                  <ol className="text-xs text-slate-400 space-y-1 list-decimal list-inside">
                    <li>Wyoming LLC (shields personal assets)</li>
                    <li>Mercury account — keep funds separate</li>
                    <li>DMCA agent ($6 — required for safe harbor)</li>
                    <li>Trademark "Forkable" at $5–10k MRR</li>
                    <li>E&O + Cyber insurance at scale</li>
                  </ol>
                  <p className="text-xs text-slate-500 mt-2">
                    Ideas can't be trademarked — your moat is the creator network.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vault links */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-800">
            <h2 className="font-semibold text-slate-200">Planning Vault</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Open <code className="text-slate-400">forkable-vault/</code> as an Obsidian vault to browse locally.
              Links below open the files on GitHub.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-slate-800">
            {VAULT_LINKS.map((link) => (
              <a
                key={link.path}
                href={`${VAULT_GITHUB_BASE}${encodeURIComponent(link.path)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-3 bg-slate-900 hover:bg-slate-800/60 transition-colors group"
              >
                <span className="text-sm text-slate-300 group-hover:text-slate-100 transition-colors">
                  {link.label}
                </span>
                <ExternalLink size={12} className="text-slate-600 group-hover:text-slate-400 transition-colors shrink-0" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links to platform pages */}
        <div className="flex flex-wrap gap-3 text-sm">
          <Link href="/" className="text-slate-400 hover:text-slate-200 transition-colors">← Public site</Link>
          <Link href="/apps" className="text-slate-400 hover:text-slate-200 transition-colors">Browse</Link>
          <Link href="/founding-creators" className="text-slate-400 hover:text-slate-200 transition-colors">Founding Creators</Link>
          <Link href="/submit" className="text-slate-400 hover:text-slate-200 transition-colors">Submit app</Link>
          <Link href="/pro" className="text-slate-400 hover:text-slate-200 transition-colors">Pro page</Link>
          <Link href="/terms" className="text-slate-400 hover:text-slate-200 transition-colors">Terms</Link>
        </div>
      </div>
    </main>
  );
}
