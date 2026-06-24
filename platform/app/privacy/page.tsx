import { LegalPage, Placeholder } from "@/components/LegalPage";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — AppForge",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="How AppForge collects, uses, and protects your information."
      lastUpdated="[DATE]"
      sections={[
        {
          title: "1. Overview",
          content: (
            <p>
              AppForge (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) is operated by <Placeholder>YOUR LLC NAME</Placeholder>.
              This policy explains what data we collect, why we collect it, how we use it, and your rights
              regarding that data. We aim to be direct and plain-English about this — no dark patterns.
            </p>
          ),
        },
        {
          title: "2. What we collect and why",
          content: (
            <>
              <p><strong>Account information</strong></p>
              <p>
                When you create an account: your name, email address, and (optionally) a profile photo,
                Twitter/X handle, and bio. We use this to identify you, send transactional emails, and display
                your public profile.
              </p>

              <p className="mt-2"><strong>App submissions</strong></p>
              <p>
                When you submit an app: the app title, description, screenshots, URLs, and tags you provide.
                This content is displayed publicly on your app listing.
              </p>

              <p className="mt-2"><strong>Usage data</strong></p>
              <p>
                We collect anonymous analytics on page views, app views, forks clicked, and search queries.
                This helps us understand what&apos;s popular and improve the platform. We use{" "}
                <Placeholder>ANALYTICS PROVIDER (e.g. Plausible / PostHog)</Placeholder> for this — see their
                privacy policy for details.
              </p>

              <p className="mt-2"><strong>Payment information</strong></p>
              <p>
                If you purchase a Pro subscription or a paid fork, payments are processed by Stripe. We do
                not store your card number or full payment details — Stripe handles this. We retain transaction
                records (amount, date, what was purchased) for accounting purposes.
              </p>

              <p className="mt-2"><strong>Communications</strong></p>
              <p>
                If you contact us by email, we retain that correspondence to respond to you and improve our
                support.
              </p>

              <p className="mt-2"><strong>Cookies and local storage</strong></p>
              <p>
                We use cookies for authentication (keeping you logged in) and preference storage (e.g. dark mode).
                We do not use advertising cookies. We do not track you across other websites.
              </p>
            </>
          ),
        },
        {
          title: "3. What we do NOT do",
          content: (
            <ul className="list-disc pl-5 flex flex-col gap-1.5">
              <li>We do not sell your personal data to third parties</li>
              <li>We do not use your data for advertising targeting</li>
              <li>We do not share your email with third parties except as required to deliver services (e.g. transactional email provider)</li>
              <li>We do not build behavioral profiles for ad networks</li>
            </ul>
          ),
        },
        {
          title: "4. Who we share data with",
          content: (
            <>
              <p>We share your data only with the following categories of service providers, and only as needed to operate the platform:</p>
              <ul className="list-disc pl-5 flex flex-col gap-1.5 mt-2">
                <li><strong>Stripe</strong> — payment processing</li>
                <li><strong><Placeholder>EMAIL PROVIDER e.g. Resend / Postmark</Placeholder></strong> — transactional emails (account confirmation, receipts)</li>
                <li><strong><Placeholder>ANALYTICS PROVIDER</Placeholder></strong> — anonymous usage analytics</li>
                <li><strong><Placeholder>HOSTING PROVIDER e.g. Vercel / Fly.io</Placeholder></strong> — infrastructure</li>
                <li><strong>Law enforcement</strong> — only when required by law or court order</li>
              </ul>
              <p className="mt-2">
                We require all service providers to handle your data in compliance with applicable privacy law.
              </p>
            </>
          ),
        },
        {
          title: "5. Data retention",
          content: (
            <>
              <p>
                We retain your account data for as long as your account is active. If you delete your account,
                we delete your personal information within <Placeholder>30/60/90</Placeholder> days, except
                where we are required to retain it for legal or accounting reasons (e.g. payment records are
                retained for 7 years per standard accounting requirements).
              </p>
              <p>
                App listings you submitted may remain on the platform after account deletion unless you
                explicitly request their removal.
              </p>
            </>
          ),
        },
        {
          title: "6. Your rights",
          content: (
            <>
              <p>
                Depending on where you live, you may have rights including: access to your data, correction
                of inaccurate data, deletion of your data, objection to processing, and data portability.
              </p>
              <p>
                <strong>GDPR (EU/UK users):</strong> You have the rights listed above under GDPR. Our legal
                basis for processing is contractual necessity (to provide the service) and legitimate interests
                (platform analytics). To exercise your rights, email <Placeholder>PRIVACY_EMAIL</Placeholder>.
              </p>
              <p>
                <strong>CCPA (California users):</strong> You have the right to know what personal information
                we collect, to delete it, and to opt out of its sale (we do not sell it). To make a request,
                email <Placeholder>PRIVACY_EMAIL</Placeholder>.
              </p>
              <p>
                We will respond to verified requests within 30 days.
              </p>
            </>
          ),
        },
        {
          title: "7. Security",
          content: (
            <p>
              We use industry-standard security practices including HTTPS encryption, hashed passwords, and
              access controls. No system is perfectly secure. If you discover a security vulnerability, please
              report it to <Placeholder>SECURITY_EMAIL</Placeholder> before disclosing it publicly.
            </p>
          ),
        },
        {
          title: "8. Children's privacy",
          content: (
            <p>
              AppForge is not directed at children under 13. We do not knowingly collect personal information
              from children under 13. If you believe a child has provided us with personal information, contact
              us at <Placeholder>PRIVACY_EMAIL</Placeholder> and we will delete it.
            </p>
          ),
        },
        {
          title: "9. Changes to this policy",
          content: (
            <p>
              We may update this policy from time to time. We will notify registered users by email of material
              changes and update the &quot;Last updated&quot; date above. Continued use of the platform after
              notification constitutes acceptance of the updated policy.
            </p>
          ),
        },
        {
          title: "10. Contact",
          content: (
            <p>
              For privacy questions or to exercise your rights, contact our privacy team at{" "}
              <Placeholder>PRIVACY_EMAIL</Placeholder>. You may also write to us at{" "}
              <Placeholder>MAILING ADDRESS</Placeholder>.
            </p>
          ),
        },
      ]}
    />
  );
}
