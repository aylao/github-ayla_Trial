import Link from "next/link";
import { Check, Zap, TrendingUp, Shield, BarChart2 } from "lucide-react";

const FREE_FEATURES = [
  "Browse all free apps",
  "Fork free apps into any platform",
  "Submit up to 3 apps",
  "Basic app analytics",
];

const PRO_FEATURES = [
  "Unlimited app submissions",
  "Paid fork monetization (80% revenue share)",
  "Featured placement in discovery feed",
  "Full analytics dashboard",
  "Custom subdomain (yourname.appforge.dev)",
  "Priority support",
  "Early access to new features",
  "Team collaboration (up to 5 seats)",
];

const MONETIZATION_MODELS = [
  {
    icon: <TrendingUp size={20} className="text-violet-600" />,
    title: "Paid Fork Revenue",
    desc: "Set a one-time or recurring price for forking your app. Each fork generates revenue for you — 80% goes to you, 20% to Forkable.",
    badge: "Core",
  },
  {
    icon: <Zap size={20} className="text-amber-500" />,
    title: "Sponsored Slots",
    desc: "Brands and tools (AI APIs, hosting providers) pay to sponsor app categories. Revenue is split among creators in that category.",
    badge: "Coming Q3",
  },
  {
    icon: <BarChart2 size={20} className="text-blue-500" />,
    title: "Creator Analytics Upsell",
    desc: "Deep analytics showing which platforms your forkers use, where they drop off, and weekly reach reports.",
    badge: "Pro Add-on",
  },
  {
    icon: <Shield size={20} className="text-green-600" />,
    title: "Enterprise Licensing",
    desc: "Companies can license app templates for their internal teams. You set the seat price; Forkable handles invoicing.",
    badge: "Coming Q4",
  },
];

const FAQS = [
  {
    q: "How does paid fork monetization work?",
    a: "You set a price per fork (e.g. $5, $20). When someone forks your pro app, they pay that price, which unlocks the fork in their chosen vibe coding tool. Stripe handles payments; we deposit your 80% cut weekly.",
  },
  {
    q: "What vibe coding platforms are supported?",
    a: "Currently: Lovable, Bolt, Replit, v0 (Vercel), Cursor, and Windsurf. We add new platforms as they expose fork APIs.",
  },
  {
    q: "Can free users submit apps?",
    a: "Yes — free users can submit up to 3 apps. All submitted apps must be free to fork. Pro unlocks unlimited submissions and paid fork pricing.",
  },
  {
    q: "What counts as a 'fork'?",
    a: "A fork is counted each time a user clicks Fork and opens your app in a vibe coding tool. We track this via redirect + platform webhook where available.",
  },
  {
    q: "Can I cancel Pro?",
    a: "Yes, anytime. Your apps stay live. If you had paid fork pricing enabled, those apps revert to free-fork until you re-subscribe.",
  },
];

export default function ProPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-14 flex flex-col gap-16">
      {/* Header */}
      <section className="text-center flex flex-col items-center gap-4">
        <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 rounded-full px-4 py-1.5 text-sm font-semibold">
          Forkable Pro
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight max-w-2xl">
          Build an audience. Earn from your apps.
        </h1>
        <p className="text-gray-500 max-w-xl text-base leading-relaxed">
          Pro gives you the tools to monetize your vibe-coded apps and get discovered by thousands of builders.
        </p>
      </section>

      {/* Pricing */}
      <section className="grid md:grid-cols-2 gap-6">
        {/* Free */}
        <div className="border border-gray-200 rounded-2xl p-8 flex flex-col gap-5">
          <div>
            <div className="text-sm font-semibold text-gray-500 mb-1">Free</div>
            <div className="text-4xl font-extrabold text-gray-900">$0</div>
            <div className="text-sm text-gray-400">forever</div>
          </div>
          <ul className="flex flex-col gap-2.5 text-sm text-gray-600 flex-1">
            {FREE_FEATURES.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <Check size={15} className="text-gray-400" /> {f}
              </li>
            ))}
          </ul>
          <Link
            href="/apps"
            className="text-center border border-gray-200 rounded-full py-2.5 text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            Start Free
          </Link>
        </div>

        {/* Pro */}
        <div className="border-2 border-violet-500 rounded-2xl p-8 flex flex-col gap-5 bg-gradient-to-br from-violet-50 to-white relative overflow-hidden">
          <div className="absolute top-4 right-4 bg-violet-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
            Most Popular
          </div>
          <div>
            <div className="text-sm font-semibold text-violet-600 mb-1">Pro</div>
            <div className="text-4xl font-extrabold text-gray-900">$12</div>
            <div className="text-sm text-gray-400">per month</div>
          </div>
          <ul className="flex flex-col gap-2.5 text-sm text-gray-700 flex-1">
            {PRO_FEATURES.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <Check size={15} className="text-violet-600 shrink-0" /> {f}
              </li>
            ))}
          </ul>
          <button className="bg-violet-600 text-white rounded-full py-2.5 text-sm font-semibold hover:bg-violet-700 transition-colors">
            Get Pro — $12/mo
          </button>
          <span className="text-xs text-center text-gray-400">Cancel anytime. No lock-in.</span>
        </div>
      </section>

      {/* Monetization models */}
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-2">How creators earn on Forkable</h2>
        <p className="text-sm text-gray-500 mb-8">
          Multiple revenue streams, all designed around the fork-first economy.
        </p>
        <div className="grid sm:grid-cols-2 gap-5">
          {MONETIZATION_MODELS.map((m) => (
            <div key={m.title} className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100">
                  {m.icon}
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full">
                  {m.badge}
                </span>
              </div>
              <h3 className="font-semibold text-gray-900">{m.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Revenue calculator hint */}
      <section className="bg-violet-50 border border-violet-100 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold text-gray-900">What could you earn?</h2>
          <p className="text-sm text-gray-600 max-w-sm">
            A popular app with 500 forks at $9 each = <strong>$3,600</strong> in revenue.
            You keep <strong>$2,880</strong>. Forkable keeps $720.
          </p>
          <p className="text-xs text-gray-400">
            500 forks is achievable — the top free apps on the platform already have 1,000+ forks.
          </p>
        </div>
        <div className="text-center shrink-0">
          <div className="text-5xl font-extrabold text-violet-700">80%</div>
          <div className="text-sm text-gray-500 mt-1">goes to you</div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
        <div className="flex flex-col gap-4">
          {FAQS.map((faq) => (
            <div key={faq.q} className="border border-gray-200 rounded-2xl p-5">
              <h3 className="font-semibold text-gray-900 text-sm mb-2">{faq.q}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center flex flex-col items-center gap-4 py-4">
        <h2 className="text-2xl font-bold text-gray-900">Ready to start earning?</h2>
        <button className="bg-violet-600 text-white font-semibold px-10 py-3.5 rounded-full hover:bg-violet-700 transition-colors text-base">
          Get Pro — $12/month
        </button>
        <span className="text-sm text-gray-400">Cancel anytime. Billed monthly or annually (save 20%).</span>
      </section>
    </main>
  );
}
