import { LegalPage, Placeholder } from "@/components/LegalPage";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service — AppForge",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      subtitle="These terms govern your use of AppForge and the AppForge platform."
      lastUpdated="[DATE]"
      sections={[
        {
          title: "1. Who we are",
          content: (
            <p>
              AppForge (&quot;AppForge,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is operated by{" "}
              <Placeholder>YOUR LLC NAME</Placeholder>, a <Placeholder>STATE</Placeholder> limited liability company.
              Our registered address is <Placeholder>ADDRESS</Placeholder>. Contact us at{" "}
              <Placeholder>CONTACT_EMAIL</Placeholder>.
            </p>
          ),
        },
        {
          title: "2. Accepting these terms",
          content: (
            <>
              <p>
                By accessing or using AppForge — including browsing apps, submitting apps, forking apps, or
                creating an account — you agree to be bound by these Terms of Service and our{" "}
                <Link href="/privacy" className="text-violet-600 hover:underline">Privacy Policy</Link>.
                If you do not agree, do not use the platform.
              </p>
              <p>
                We may update these terms at any time. We will notify registered users by email and update the
                &quot;Last updated&quot; date above. Continued use after changes constitutes acceptance.
              </p>
            </>
          ),
        },
        {
          title: "3. Accounts",
          content: (
            <>
              <p>
                You must be at least 13 years old (or the age of digital consent in your country) to create an
                account. You are responsible for maintaining the confidentiality of your login credentials and
                for all activity that occurs under your account.
              </p>
              <p>
                You agree to provide accurate information when registering and to keep it up to date. We reserve
                the right to suspend or terminate accounts that violate these terms.
              </p>
            </>
          ),
        },
        {
          title: "4. Intellectual property — creator-owned content",
          content: (
            <>
              <p>
                <strong>You own your apps.</strong> When you submit an app to AppForge, you retain full
                ownership of your intellectual property. You grant AppForge a non-exclusive, worldwide,
                royalty-free license to display, promote, and distribute your app listing (including screenshots,
                descriptions, and preview content) on the platform and in marketing materials.
              </p>
              <p>
                You represent that you have the right to submit the content you upload — including that your
                app does not infringe the intellectual property rights of any third party (including the vibe
                coding platforms you used to build it).
              </p>
              <p>
                AppForge&apos;s own brand, design, code, and content are owned by AppForge and may not be copied
                or used without permission.
              </p>
            </>
          ),
        },
        {
          title: "5. Forking and licensing of submitted apps",
          content: (
            <>
              <p>
                When a creator submits an app as &quot;free to fork,&quot; they grant other users a license to fork
                (copy and modify) that app for their own use via supported vibe coding platforms. The specific
                license terms are set by the creator. If no license is stated, the default is personal use only.
              </p>
              <p>
                For <strong>Pro paid forks</strong>: purchasing a fork grants you a personal license to use and
                modify the app for your own projects. You may not resell the original app or claim it as your
                own on AppForge or elsewhere.
              </p>
            </>
          ),
        },
        {
          title: "6. Prohibited content and conduct",
          content: (
            <>
              <p>You agree not to submit, share, or use AppForge to:</p>
              <ul className="list-disc pl-5 flex flex-col gap-1.5">
                <li>Infringe any third party&apos;s copyright, trademark, patent, or other intellectual property rights</li>
                <li>Submit malicious code, malware, or apps designed to harm users</li>
                <li>Collect user data without consent or in violation of applicable privacy laws</li>
                <li>Harass, threaten, or abuse other users</li>
                <li>Submit adult content, hate speech, or content that violates applicable law</li>
                <li>Attempt to reverse-engineer, scrape, or overload our systems</li>
                <li>Misrepresent the functionality, ownership, or origin of an app</li>
              </ul>
              <p>
                We reserve the right to remove any content and suspend any account that violates these rules,
                at our sole discretion.
              </p>
            </>
          ),
        },
        {
          title: "7. Payments and creator revenue",
          content: (
            <>
              <p>
                Paid fork transactions are processed by Stripe. By enabling paid forks as a Pro creator, you
                agree to Stripe&apos;s{" "}
                <a href="https://stripe.com/legal" target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:underline">
                  Terms of Service
                </a>{" "}
                and Connected Account Agreement.
              </p>
              <p>
                AppForge retains <strong>20%</strong> of each paid fork transaction as a platform fee. The
                remaining <strong>80%</strong> is paid out to creators on a weekly basis, subject to Stripe
                processing timelines and a minimum payout threshold of{" "}
                <Placeholder>MINIMUM_PAYOUT_AMOUNT</Placeholder>.
              </p>
              <p>
                Pro subscriptions are billed monthly or annually. Subscriptions are non-refundable except
                where required by law. You may cancel at any time; access continues until the end of the
                billing period.
              </p>
              <p>
                All prices are in USD. AppForge is not responsible for currency conversion fees charged by
                your bank or payment provider.
              </p>
            </>
          ),
        },
        {
          title: "8. Disclaimer of warranties",
          content: (
            <p>
              AppForge is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either
              express or implied. We do not warrant that the platform will be uninterrupted, error-free, or
              free of harmful components. We do not endorse, verify, or take responsibility for the content,
              functionality, or safety of apps submitted by creators.
            </p>
          ),
        },
        {
          title: "9. Limitation of liability",
          content: (
            <p>
              To the fullest extent permitted by law, AppForge and its officers, directors, employees, and
              agents shall not be liable for any indirect, incidental, special, consequential, or punitive
              damages arising from your use of the platform or any app found on it. Our total liability to
              you for any claim shall not exceed the greater of $100 or the amount you paid to AppForge in
              the 12 months preceding the claim.
            </p>
          ),
        },
        {
          title: "10. Indemnification",
          content: (
            <p>
              You agree to indemnify and hold harmless AppForge and its affiliates from any claims, damages,
              losses, or costs (including legal fees) arising from your use of the platform, your submitted
              content, or your violation of these terms or any third party&apos;s rights.
            </p>
          ),
        },
        {
          title: "11. Governing law and disputes",
          content: (
            <p>
              These terms are governed by the laws of the State of <Placeholder>STATE</Placeholder>, without
              regard to its conflict of law provisions. Any disputes arising from these terms shall be resolved
              by binding arbitration in <Placeholder>CITY, STATE</Placeholder>, except that either party may
              seek injunctive relief in a court of competent jurisdiction.
            </p>
          ),
        },
        {
          title: "12. Contact",
          content: (
            <p>
              For questions about these terms, contact us at <Placeholder>LEGAL_EMAIL</Placeholder> or by
              mail at <Placeholder>MAILING ADDRESS</Placeholder>.
            </p>
          ),
        },
      ]}
    />
  );
}
