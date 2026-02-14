import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - My Era",
  description: "Privacy Policy for the My Era mobile application and website.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-pink-200/30 px-6 py-5">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="flex items-center gap-2 w-fit">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-pink-300 to-blue-300 flex items-center justify-center">
              <span className="text-white font-bold text-xs">M</span>
            </div>
            <span className="text-sm font-semibold tracking-tight">my era</span>
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-12 sm:py-20">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-12">
          Last updated: 14 February 2026
        </p>

        <div className="space-y-10 text-gray-500 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
            <p>
              My Era (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the My Era mobile
              application and the website at getmyera.app (collectively, the &quot;Service&quot;). This
              Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you use our Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>

            <h3 className="text-base font-semibold text-gray-600 mt-4 mb-2">
              2.1 Account Information
            </h3>
            <p>
              When you sign up using Apple or Google, we receive your name, email address, and a
              unique account identifier from the respective provider. We do not receive or store your
              Apple or Google password.
            </p>

            <h3 className="text-base font-semibold text-gray-600 mt-4 mb-2">
              2.2 User Content
            </h3>
            <p>
              We collect content you voluntarily submit through the Service, including photos, text,
              and comments you post about K-Pop idols and their eras.
            </p>

            <h3 className="text-base font-semibold text-gray-600 mt-4 mb-2">
              2.3 Automatically Collected Information
            </h3>
            <p>
              When you use the Service, we may automatically collect device information (device type,
              operating system, unique device identifiers), log data (IP address, access times, pages
              viewed), and usage data (features used, interactions with content).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-1.5">
              <li>Create and manage your account</li>
              <li>Enable you to post memories and comment on content</li>
              <li>Display your content to other users of the Service</li>
              <li>Enforce our community guidelines and zero-tolerance abuse policy</li>
              <li>Communicate with you about your account or the Service</li>
              <li>Monitor and analyse usage trends to improve the Service</li>
              <li>Detect, prevent, and address technical issues or security threats</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Sharing of Information</h2>
            <p className="mb-3">We do not sell your personal information. We may share your information in the following circumstances:</p>
            <ul className="list-disc list-inside space-y-1.5">
              <li>
                <strong className="text-gray-600">Public content:</strong> Memories and comments you post are visible to other users of the Service.
              </li>
              <li>
                <strong className="text-gray-600">Service providers:</strong> We may share information with third-party vendors who assist us in operating the Service (e.g. hosting, analytics), subject to confidentiality obligations.
              </li>
              <li>
                <strong className="text-gray-600">Legal requirements:</strong> We may disclose information if required by law, regulation, or legal process.
              </li>
              <li>
                <strong className="text-gray-600">Safety:</strong> We may disclose information when we believe it is necessary to protect the safety of our users or the public.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Data Storage and Security</h2>
            <p>
              Your data is stored on secure servers provided by our infrastructure partners. We
              implement appropriate technical and organisational measures to protect your personal
              information against unauthorised access, alteration, disclosure, or destruction. However,
              no method of transmission over the internet is 100% secure, and we cannot guarantee
              absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Your Rights</h2>
            <p className="mb-3">Depending on your location, you may have the right to:</p>
            <ul className="list-disc list-inside space-y-1.5">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your account and associated data</li>
              <li>Object to or restrict certain processing of your information</li>
              <li>Request a copy of your data in a portable format</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us at the email address below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Third-Party Authentication</h2>
            <p>
              We offer sign-in through Apple and Google. When you authenticate through these
              providers, their respective privacy policies apply to the information they collect. We
              encourage you to review their privacy policies. We only receive the information
              described in Section 2.1 and do not have access to your credentials.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Children&apos;s Privacy</h2>
            <p>
              The Service is not intended for children under the age of 13. We do not knowingly
              collect personal information from children under 13. If we become aware that we have
              collected information from a child under 13, we will take steps to delete that
              information promptly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material
              changes by posting the updated policy on this page and updating the &quot;Last
              updated&quot; date. Your continued use of the Service after changes are posted
              constitutes your acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please
              contact us at:{" "}
              <a
                href="mailto:support@getmyera.app"
                className="text-pink-400 hover:text-pink-500 transition-colors"
              >
                support@getmyera.app
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
