import { LegalPage, Placeholder } from "@/components/LegalPage";

export const metadata = {
  title: "DMCA Policy — Forkable",
};

export default function DmcaPage() {
  return (
    <LegalPage
      title="DMCA Policy"
      subtitle="Forkable's procedures for copyright takedown requests under the Digital Millennium Copyright Act."
      lastUpdated="[DATE]"
      sections={[
        {
          title: "Safe Harbor notice",
          content: (
            <p>
              Forkable operates as a platform hosting user-submitted content. We comply with the Digital
              Millennium Copyright Act (17 U.S.C. § 512) and have designated a DMCA agent with the U.S.
              Copyright Office. This qualifies Forkable for safe harbor protection, which means we are not
              liable for infringing content posted by users, provided we act promptly upon receiving valid
              takedown notices.
            </p>
          ),
        },
        {
          title: "Designated DMCA agent",
          content: (
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 font-mono text-xs flex flex-col gap-1">
              <div>DMCA Agent: <Placeholder>AGENT NAME</Placeholder></div>
              <div>Company: <Placeholder>YOUR LLC NAME</Placeholder></div>
              <div>Address: <Placeholder>MAILING ADDRESS</Placeholder></div>
              <div>Email: <Placeholder>DMCA_EMAIL</Placeholder></div>
              <div className="mt-2 font-sans text-gray-500 text-xs">
                Register this agent at copyright.gov/dmca-directory ($6 one-time fee) before going public.
              </div>
            </div>
          ),
        },
        {
          title: "How to submit a takedown notice",
          content: (
            <>
              <p>
                If you believe content on Forkable infringes your copyright, send a written notice to our
                DMCA agent at <Placeholder>DMCA_EMAIL</Placeholder>. Your notice must include all of the
                following — incomplete notices will not be acted on:
              </p>
              <ol className="list-decimal pl-5 flex flex-col gap-2 mt-2">
                <li>
                  <strong>Identification of the work</strong> — a description of the copyrighted work you
                  claim has been infringed, or if multiple works are covered, a representative list.
                </li>
                <li>
                  <strong>Identification of the infringing material</strong> — the URL(s) on Forkable where
                  the allegedly infringing content appears, specific enough for us to locate it.
                </li>
                <li>
                  <strong>Your contact information</strong> — your name, address, telephone number, and
                  email address.
                </li>
                <li>
                  <strong>Good faith statement</strong> — a statement that you have a good faith belief that
                  the use of the material is not authorized by the copyright owner, its agent, or the law.
                </li>
                <li>
                  <strong>Accuracy statement</strong> — a statement, under penalty of perjury, that the
                  information in your notice is accurate and that you are the copyright owner or authorized
                  to act on behalf of the copyright owner.
                </li>
                <li>
                  <strong>Signature</strong> — a physical or electronic signature of the copyright owner or
                  authorized representative.
                </li>
              </ol>
            </>
          ),
        },
        {
          title: "What happens after we receive a notice",
          content: (
            <>
              <p>Upon receiving a complete and valid DMCA notice, we will:</p>
              <ol className="list-decimal pl-5 flex flex-col gap-2 mt-2">
                <li>Promptly remove or disable access to the allegedly infringing content</li>
                <li>Notify the creator who submitted the content that it has been removed and why</li>
                <li>Forward a copy of the notice to the creator (with your contact information included)</li>
              </ol>
              <p className="mt-2">
                We aim to act on valid notices within <strong>2 business days</strong>.
              </p>
            </>
          ),
        },
        {
          title: "Counter-notification (if your content was removed)",
          content: (
            <>
              <p>
                If you believe your content was removed due to mistake or misidentification, you may send a
                counter-notification to <Placeholder>DMCA_EMAIL</Placeholder>. Your counter-notification
                must include:
              </p>
              <ol className="list-decimal pl-5 flex flex-col gap-2 mt-2">
                <li>Your physical or electronic signature</li>
                <li>Identification of the content that was removed and its location before removal</li>
                <li>
                  A statement under penalty of perjury that you have a good faith belief the content was
                  removed due to mistake or misidentification
                </li>
                <li>Your name, address, and telephone number</li>
                <li>
                  A statement consenting to the jurisdiction of the federal court in your district (or, if
                  outside the US, any judicial district in which Forkable may be found)
                </li>
              </ol>
              <p className="mt-2">
                If we receive a valid counter-notification, we will forward it to the original complainant
                and may restore the content after 10–14 business days unless the complainant files a court
                action.
              </p>
            </>
          ),
        },
        {
          title: "Repeat infringers",
          content: (
            <p>
              Forkable has a policy of terminating accounts of users who are repeat copyright infringers,
              in appropriate circumstances and at our discretion.
            </p>
          ),
        },
        {
          title: "Misrepresentation warning",
          content: (
            <p>
              Under 17 U.S.C. § 512(f), any person who knowingly materially misrepresents that material is
              infringing may be liable for damages, including costs and attorneys&apos; fees. Do not submit a
              takedown notice if you are not the copyright holder or authorized to act on their behalf.
            </p>
          ),
        },
        {
          title: "Non-copyright issues",
          content: (
            <p>
              This policy covers copyright claims only. For other content concerns (harassment, malware,
              impersonation, illegal content), contact us at <Placeholder>ABUSE_EMAIL</Placeholder>.
            </p>
          ),
        },
      ]}
    />
  );
}
