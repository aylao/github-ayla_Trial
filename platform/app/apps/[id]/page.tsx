import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Heart, GitFork, Eye, ArrowLeft, Calendar } from "lucide-react";
import { MOCK_APPS } from "@/lib/data";
import { ForkButton } from "@/components/ForkButton";
import type { Platform } from "@/types";

function fmt(n: number) {
  return n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n);
}

export function generateStaticParams() {
  return MOCK_APPS.map((app) => ({ id: app.id }));
}

export default async function AppDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const app = MOCK_APPS.find((a) => a.id === id);
  if (!app) notFound();

  const related = MOCK_APPS.filter(
    (a) => a.id !== app.id && a.tags.some((t) => app.tags.includes(t))
  ).slice(0, 3);

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <Link
        href="/apps"
        className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-violet-600 mb-6 transition-colors"
      >
        <ArrowLeft size={14} /> Back to Browse
      </Link>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left: preview + info */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Screenshot / live preview */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
            <Image
              src={app.screenshotUrl}
              alt={app.title}
              fill
              className="object-cover"
              unoptimized
            />
            {app.featured && (
              <span className="absolute top-3 left-3 bg-violet-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                Featured
              </span>
            )}
          </div>

          {/* Stats */}
          <div className="flex gap-6 text-sm text-gray-500 border-b border-gray-100 pb-5">
            <span className="flex items-center gap-1.5">
              <Heart size={15} className="text-rose-400" /> {fmt(app.likes)} likes
            </span>
            <span className="flex items-center gap-1.5">
              <GitFork size={15} className="text-violet-400" /> {fmt(app.forks)} forks
            </span>
            <span className="flex items-center gap-1.5">
              <Eye size={15} /> {fmt(app.views)} views
            </span>
            <span className="flex items-center gap-1.5 ml-auto">
              <Calendar size={14} /> {app.updatedAt}
            </span>
          </div>

          {/* Description */}
          <div>
            <h2 className="font-semibold text-gray-900 mb-2">About this app</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              {app.longDescription || app.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {app.tags.map((tag) => (
              <Link
                key={tag}
                href={`/apps?tag=${tag}`}
                className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full hover:bg-violet-100 hover:text-violet-700 transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-4">
              <h2 className="font-semibold text-gray-900 mb-3">Related Apps</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {related.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/apps/${rel.id}`}
                    className="flex flex-col gap-2 p-3 border border-gray-200 rounded-xl hover:border-violet-300 transition-colors"
                  >
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
                      <Image src={rel.screenshotUrl} alt={rel.title} fill className="object-cover" unoptimized />
                    </div>
                    <span className="text-xs font-medium text-gray-800">{rel.title}</span>
                    <span className="text-xs text-gray-400">{fmt(rel.forks)} forks</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right: creator + fork panel */}
        <div className="flex flex-col gap-5">
          {/* App title */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900 leading-tight">{app.title}</h1>
            <p className="text-sm text-gray-500 mt-1">{app.description}</p>
          </div>

          {/* Creator */}
          <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
            <Image
              src={app.creatorAvatar}
              alt={app.creator}
              width={40}
              height={40}
              className="rounded-full bg-gray-200"
              unoptimized
            />
            <div>
              <div className="text-sm font-medium text-gray-900">@{app.creator}</div>
              <div className="text-xs text-gray-400">Creator</div>
            </div>
          </div>

          {/* Fork panel */}
          <div className="border border-gray-200 rounded-2xl p-5 flex flex-col gap-3">
            <h2 className="font-semibold text-gray-900 text-sm">Fork this app</h2>
            <p className="text-xs text-gray-400">
              Opens in your vibe coding tool. The full source is imported so you can start building immediately.
            </p>
            <div className="flex flex-col gap-2 mt-1">
              {(Object.entries(app.forkUrls) as [Platform, string][]).map(([platform, url]) => (
                <ForkButton
                  key={platform}
                  platform={platform}
                  url={url}
                  isPro={app.isPro}
                  userIsPro={false}
                />
              ))}
            </div>
            {app.isPro && (
              <Link
                href="/pro"
                className="text-xs text-center text-amber-700 hover:underline mt-1"
              >
                Upgrade to Pro to fork premium apps →
              </Link>
            )}
          </div>

          {/* Like button (UI only) */}
          <button className="flex items-center justify-center gap-2 w-full py-2.5 border border-gray-200 rounded-2xl text-sm text-gray-600 hover:border-rose-300 hover:text-rose-500 hover:bg-rose-50 transition-all">
            <Heart size={15} /> Like this app ({fmt(app.likes)})
          </button>
        </div>
      </div>
    </main>
  );
}
