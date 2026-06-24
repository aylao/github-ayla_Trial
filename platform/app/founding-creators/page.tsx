"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Star, Zap, TrendingUp, Users, ArrowRight } from "lucide-react";
import { CREATORS } from "@/lib/data";
import { CreatorCard } from "@/components/CreatorCard";

const FOUNDING_BENEFITS = [
  {
    icon: <Star size={18} className="text-amber-500" />,
    title: "Permanent 'Founding Creator' badge",
    desc: "Forever on your profile and every app you submit. The OG status, uncapped.",
  },
  {
    icon: <Zap size={18} className="text-violet-600" />,
    title: "Pro free for life",
    desc: "Full Pro access — paid fork monetization, analytics, unlimited submissions — at no cost, forever.",
  },
  {
    icon: <TrendingUp size={18} className="text-green-600" />,
    title: "Priority placement in discovery",
    desc: "Your apps are boosted in browse, featured sections, and the homepage for the first 90 days.",
  },
  {
    icon: <Users size={18} className="text-blue-500" />,
    title: "Direct line to the roadmap",
    desc: "Monthly calls with the team. You shape what gets built. Your feedback goes in, features come out.",
  },
];

const TOTAL_SPOTS = 50;
const CLAIMED_SPOTS = CREATORS.filter((c) => c.isFoundingCreator).length;

export default function FoundingCreatorsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [role, setRole] = useState("");

  const foundingCreators = CREATORS.filter((c) => c.isFoundingCreator);
  const spotsLeft = TOTAL_SPOTS - CLAIMED_SPOTS;

  if (submitted) {
    return (
      <main className="max-w-xl mx-auto px-4 py-24 text-center flex flex-col items-center gap-5">
        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-3xl">
          🎉
        </div>
        <h1 className="text-2xl font-bold text-gray-900">You&apos;re on the list!</h1>
        <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
          We&apos;ll review your application and reach out within 48 hours. We&apos;re hand-picking the first 50 creators, so every application gets a real look.
        </p>
        <p className="text-xs text-gray-400 mt-2">
          In the meantime, you can browse the platform and fork any app.
        </p>
        <a
          href="/apps"
          className="mt-2 flex items-center gap-1.5 text-violet-600 text-sm font-medium hover:underline"
        >
          Browse apps <ArrowRight size={14} />
        </a>
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-12 flex flex-col gap-16">

      {/* Hero */}
      <section className="text-center flex flex-col items-center gap-5">
        <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 rounded-full px-4 py-1.5 text-sm font-bold">
          <Star size={14} className="fill-amber-500 text-amber-500" />
          Founding Creator Program
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight max-w-2xl">
          Be one of the first 50 creators on Forkable.
        </h1>
        <p className="text-gray-500 text-base max-w-xl leading-relaxed">
          We&apos;re hand-picking the builders who launch this platform. You get Pro free for life, permanent Founding Creator status, and a direct seat at the table.
        </p>

        {/* Spot counter */}
        <div className="flex flex-col items-center gap-2 mt-2">
          <div className="flex gap-1">
            {Array.from({ length: TOTAL_SPOTS }).map((_, i) => (
              <div
                key={i}
                className={`w-2 h-5 rounded-sm ${i < CLAIMED_SPOTS ? "bg-amber-400" : "bg-gray-200"}`}
              />
            ))}
          </div>
          <span className="text-sm font-semibold text-gray-700">
            {CLAIMED_SPOTS} of {TOTAL_SPOTS} spots claimed
            <span className="text-amber-600 ml-1">— {spotsLeft} remaining</span>
          </span>
        </div>

        <a
          href="#apply"
          className="flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold px-8 py-3.5 rounded-full transition-colors text-base mt-2"
        >
          Apply for Founding Creator <ArrowRight size={16} />
        </a>
      </section>

      {/* Benefits */}
      <section>
        <h2 className="text-xl font-bold text-gray-900 text-center mb-8">What you get</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {FOUNDING_BENEFITS.map((b) => (
            <div key={b.title} className="flex gap-4 p-5 bg-white border border-gray-200 rounded-2xl">
              <div className="w-10 h-10 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center shrink-0">
                {b.icon}
              </div>
              <div>
                <h3 className="font-semibold text-sm text-gray-900 mb-1">{b.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Who we're looking for */}
      <section className="bg-violet-50 border border-violet-100 rounded-2xl p-8 md:p-10">
        <h2 className="text-lg font-bold text-gray-900 mb-3">Who we&apos;re looking for</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-5">
          You don&apos;t need to be a traditional developer. We specifically want people who build things that wouldn&apos;t exist without vibe coding tools — creative people with ideas, not just engineers shipping todo apps.
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            "Artists and musicians building tools for their own practice",
            "Designers who ship apps, not just mockups",
            "Writers building tools for writing and storytelling",
            "Non-technical founders who built their own product",
            "Educators creating learning tools",
            "Anyone who regularly shares what they build online",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 text-sm text-gray-700">
              <Check size={14} className="text-violet-600 mt-0.5 shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Current founding creators */}
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Meet the founding creators
        </h2>
        <p className="text-sm text-gray-500 mb-7">
          These are the first people who said yes. See who you&apos;d be building alongside.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {foundingCreators.map((creator) => (
            <CreatorCard key={creator.handle} creator={creator} />
          ))}

          {/* Placeholder spots */}
          {Array.from({ length: Math.min(3, spotsLeft) }).map((_, i) => (
            <div
              key={`empty-${i}`}
              className="flex flex-col items-center justify-center gap-2 p-5 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 min-h-[160px]"
            >
              <div className="w-11 h-11 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-lg">
                ?
              </div>
              <span className="text-xs text-gray-400 font-medium">Spot available</span>
              <a href="#apply" className="text-xs text-violet-600 hover:underline font-medium">
                Apply now →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="border-t border-gray-200 pt-12">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Apply to be a Founding Creator</h2>
          <p className="text-sm text-gray-500 mb-8">
            Takes 2 minutes. We review every application personally and respond within 48 hours.
          </p>

          <form
            className="flex flex-col gap-5"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-medium text-gray-700">Name *</span>
                <input
                  required
                  type="text"
                  placeholder="Your name"
                  className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-medium text-gray-700">Email *</span>
                <input
                  required
                  type="email"
                  placeholder="you@example.com"
                  className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </label>
            </div>

            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-medium text-gray-700">Twitter / X handle (optional)</span>
              <input
                type="text"
                placeholder="@yourhandle"
                className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </label>

            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-medium text-gray-700">What do you build? *</span>
              <div className="flex flex-wrap gap-2">
                {[
                  "Productivity tools", "Games", "Music tools", "Art / design tools",
                  "Finance apps", "AI-powered tools", "Social apps", "Writing tools",
                  "Education", "Landing pages / templates",
                ].map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRole(role === r ? "" : r)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                      role === r
                        ? "bg-amber-400 text-gray-900 border-amber-400"
                        : "bg-white text-gray-600 border-gray-200 hover:border-amber-300"
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-medium text-gray-700">
                Link to something you&apos;ve built *
              </span>
              <input
                required
                type="url"
                placeholder="https://..."
                className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <span className="text-xs text-gray-400">A live app, a Lovable/Bolt project, a GitHub repo — anything.</span>
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-medium text-gray-700">
                Why do you want to be a Founding Creator? (optional)
              </span>
              <textarea
                rows={3}
                placeholder="What excites you about this platform? What would you build here?"
                className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
              />
            </label>

            <button
              type="submit"
              className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold py-3.5 rounded-full transition-colors text-sm mt-1"
            >
              Submit Application
            </button>

            <p className="text-xs text-gray-400 text-center">
              {spotsLeft} spots remaining. We respond to every application.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
