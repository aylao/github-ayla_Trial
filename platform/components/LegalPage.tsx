import Link from "next/link";
import { AlertTriangle } from "lucide-react";

interface Section {
  title: string;
  content: React.ReactNode;
}

interface Props {
  title: string;
  subtitle: string;
  lastUpdated: string;
  needsReview?: boolean;
  sections: Section[];
}

export function LegalPage({ title, subtitle, lastUpdated, needsReview = true, sections }: Props) {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      {needsReview && (
        <div className="flex gap-3 p-4 bg-amber-50 border border-amber-200 rounded-2xl mb-8 text-sm">
          <AlertTriangle size={16} className="text-amber-600 shrink-0 mt-0.5" />
          <div className="text-amber-800">
            <strong>Placeholder — needs legal review before going live.</strong> Fill in all{" "}
            <span className="font-mono bg-amber-100 px-1 rounded">[BRACKETED]</span> fields and have a lawyer
            review before accepting payments or public launch.
          </div>
        </div>
      )}

      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">{title}</h1>
      <p className="text-gray-500 text-sm mb-1">{subtitle}</p>
      <p className="text-xs text-gray-400 mb-10">Last updated: {lastUpdated}</p>

      <div className="flex flex-col gap-10">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-base font-bold text-gray-900 mb-3 pb-2 border-b border-gray-100">
              {section.title}
            </h2>
            <div className="text-sm text-gray-600 leading-relaxed flex flex-col gap-3">
              {section.content}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-14 pt-6 border-t border-gray-100 text-xs text-gray-400 flex flex-col gap-1">
        <span>Questions? Email <span className="font-mono">[CONTACT_EMAIL]</span></span>
        <div className="flex gap-4 mt-1">
          <Link href="/terms" className="hover:text-gray-600">Terms of Service</Link>
          <Link href="/privacy" className="hover:text-gray-600">Privacy Policy</Link>
          <Link href="/dmca" className="hover:text-gray-600">DMCA Policy</Link>
        </div>
      </div>
    </main>
  );
}

// Helper for inline placeholder callouts
export function Placeholder({ children }: { children: string }) {
  return (
    <span className="font-mono bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded text-xs border border-amber-200">
      [{children}]
    </span>
  );
}
