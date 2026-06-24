import Link from "next/link";
import { ArrowRight, Zap, Eye, GitFork, Lock, Star } from "lucide-react";
import { MOCK_APPS } from "@/lib/data";
import { AppCard } from "@/components/AppCard";

export default function HomePage() {
  const featured = MOCK_APPS.filter((a) => a.featured);
  const trending = [...MOCK_APPS].sort((a, b) => b.views - a.views).slice(0, 4);

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-violet-700 via-violet-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 flex flex-col items-center text-center gap-6">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm font-medium backdrop-blur">
            <Zap size={14} className="fill-yellow-400 text-yellow-400" />
            The open app gallery for vibe-coded builders
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-3xl">
            Discover. Fork. Ship.
          </h1>

          <p className="text-lg md:text-xl text-violet-200 max-w-2xl leading-relaxed">
            Browse community-built apps with live previews. Fork into your vibe coding tool of choice.
            Build from someone else&apos;s foundation — not from zero.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mt-2">
            <Link
              href="/apps"
              className="flex items-center gap-2 bg-white text-violet-700 font-semibold px-6 py-3 rounded-full hover:bg-violet-50 transition-colors text-base"
            >
              Browse Apps <ArrowRight size={16} />
            </Link>
            <Link
              href="/submit"
              className="flex items-center gap-2 bg-violet-800/60 text-white font-semibold px-6 py-3 rounded-full hover:bg-violet-800 transition-colors border border-white/20 text-base"
            >
              Submit Yours
            </Link>
          </div>

          <div className="flex gap-8 mt-4 text-sm text-violet-200">
            <span><strong className="text-white">8</strong> apps live</span>
            <span><strong className="text-white">2.8k+</strong> forks</span>
            <span><strong className="text-white">6</strong> platforms supported</span>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Eye className="text-violet-600" size={24} />,
              title: "Browse with live previews",
              body: "See the running app before you fork it. No README hunting, no guessing.",
            },
            {
              icon: <GitFork className="text-violet-600" size={24} />,
              title: "One-click fork",
              body: "Open in Lovable, Bolt, Replit, v0, or Cursor — your tool, your workflow.",
            },
            {
              icon: <Zap className="text-violet-600" size={24} />,
              title: "Build from a foundation",
              body: "Someone already solved the hard parts. Start at 70%, ship at 100%.",
            },
          ].map((step) => (
            <div key={step.title} className="flex flex-col gap-3 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-10 h-10 bg-violet-50 rounded-xl flex items-center justify-center">
                {step.icon}
              </div>
              <h3 className="font-semibold text-gray-900">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Star size={18} className="fill-amber-400 text-amber-400" /> Featured Apps
          </h2>
          <Link href="/apps" className="text-sm text-violet-600 hover:underline flex items-center gap-1">
            See all <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </section>

      {/* Trending */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-14">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Trending This Week</h2>
            <Link href="/apps" className="text-sm text-violet-600 hover:underline flex items-center gap-1">
              See all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trending.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </div>
      </section>

      {/* Pro CTA */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-amber-400 via-amber-300 to-yellow-200 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-3 max-w-xl">
            <div className="flex items-center gap-2 text-amber-900 font-semibold text-sm">
              <Lock size={14} /> AppForge Pro
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              Submit premium apps. Earn from forks.
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Pro creators can mark apps as paid forks and earn revenue every time someone forks them.
              Set your price, keep 80%. We handle the payments.
            </p>
            <ul className="text-sm text-gray-700 flex flex-col gap-1.5 mt-1">
              {[
                "Unlimited app submissions",
                "Paid fork monetization (80% revenue share)",
                "Featured placement in discovery",
                "Analytics dashboard for your apps",
                "Priority support",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3 items-center shrink-0">
            <div className="text-center">
              <div className="text-4xl font-extrabold text-gray-900">$12</div>
              <div className="text-sm text-gray-600">per month</div>
            </div>
            <Link
              href="/pro"
              className="bg-gray-900 text-white font-semibold px-8 py-3 rounded-full hover:bg-gray-700 transition-colors text-base whitespace-nowrap"
            >
              Get Pro
            </Link>
            <span className="text-xs text-gray-600">Cancel anytime</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <span className="font-semibold text-violet-700 flex items-center gap-1">
            <Zap size={14} className="fill-violet-600 text-violet-600" /> AppForge
          </span>
          <div className="flex gap-6">
            <Link href="/apps" className="hover:text-gray-700">Browse</Link>
            <Link href="/submit" className="hover:text-gray-700">Submit</Link>
            <Link href="/pro" className="hover:text-gray-700">Pro</Link>
          </div>
          <span>© 2025 AppForge. Built for builders.</span>
        </div>
      </footer>
    </main>
  );
}
