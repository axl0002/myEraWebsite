import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - MyEra",
  description: "Terms of Service for the MyEra mobile application and website.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-pink-200/30 px-6 py-5">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="w-fit block">
            <Image
              src="/logo-long.png"
              alt="My Era"
              width={93}
              height={34}
              className="h-[34px] w-auto"
            />
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-12 sm:py-20">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-gray-400 text-sm mb-12">
          Last updated: 14 February 2026
        </p>

        <div className="space-y-10 text-gray-500 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the MyEra mobile application and the website at getmyera.app
              (collectively, the &quot;Service&quot;), you agree to be bound by these Terms of
              Service (&quot;Terms&quot;). If you do not agree to these Terms, do not use the
              Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Eligibility</h2>
            <p>
              You must be at least 13 years old to use the Service. By using the Service, you
              represent and warrant that you meet this age requirement. If you are under the age of
              18, you represent that you have your parent or guardian&apos;s consent to use the
              Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Account Registration</h2>
            <p>
              To use certain features of the Service, you must create an account by signing in with
              Apple or Google. You are responsible for maintaining the security of your account and
              for all activity that occurs under your account. You agree to notify us immediately of
              any unauthorised access to your account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. User Content</h2>

            <h3 className="text-base font-semibold text-gray-600 mt-4 mb-2">
              4.1 Your Content
            </h3>
            <p>
              You retain ownership of the content you post on the Service, including photos, text,
              and comments (&quot;User Content&quot;). By posting User Content, you grant us a
              non-exclusive, worldwide, royalty-free licence to use, display, reproduce, and
              distribute your User Content in connection with operating and providing the Service.
            </p>

            <h3 className="text-base font-semibold text-gray-600 mt-4 mb-2">
              4.2 Content Responsibility
            </h3>
            <p>
              You are solely responsible for your User Content. You represent and warrant that you
              own or have the necessary rights to post your User Content, and that your User Content
              does not violate the rights of any third party.
            </p>

            <h3 className="text-base font-semibold text-gray-600 mt-4 mb-2">
              4.3 Content Removal
            </h3>
            <p>
              We reserve the right to remove any User Content at our sole discretion, including
              content that violates these Terms or our community guidelines.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Community Guidelines and Zero-Tolerance Abuse Policy</h2>
            <p className="mb-3">
              MyEra is committed to maintaining a safe, positive, and respectful community for all
              fans. We enforce a <strong className="text-white">zero-tolerance policy</strong> on
              abuse of any kind. The following are strictly prohibited:
            </p>
            <ul className="list-disc list-inside space-y-1.5">
              <li>Harassment, bullying, or intimidation of any user</li>
              <li>Hate speech, discrimination, or content targeting individuals or groups based on race, ethnicity, gender, sexual orientation, religion, or disability</li>
              <li>Threats of violence or encouragement of self-harm</li>
              <li>Posting explicit, obscene, or sexually inappropriate content</li>
              <li>Doxxing or sharing another person&apos;s private information without consent</li>
              <li>Spam, scams, or misleading content</li>
              <li>Impersonation of other users, idols, or public figures</li>
              <li>Any content that infringes on the intellectual property rights of others</li>
            </ul>
            <p className="mt-3">
              <strong className="text-white">Violation of this policy will result in immediate and
              permanent account termination without warning.</strong> We may also report illegal
              activity to the appropriate authorities.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Comments and Interactions</h2>
            <p>
              The Service allows you to comment on your own and other users&apos; posts. All
              comments are subject to these Terms and our community guidelines. We reserve the right
              to remove comments and suspend or terminate accounts that engage in abusive,
              disrespectful, or otherwise harmful behaviour.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Intellectual Property</h2>
            <p>
              The Service and its original content (excluding User Content), features, and
              functionality are owned by MyEra and are protected by copyright, trademark, and other
              intellectual property laws. You may not copy, modify, distribute, or create derivative
              works based on the Service without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Prohibited Uses</h2>
            <p className="mb-3">In addition to the community guidelines above, you agree not to:</p>
            <ul className="list-disc list-inside space-y-1.5">
              <li>Use the Service for any unlawful purpose</li>
              <li>Attempt to gain unauthorised access to the Service, other accounts, or our systems</li>
              <li>Use automated scripts, bots, or scrapers to access or collect data from the Service</li>
              <li>Interfere with or disrupt the integrity or performance of the Service</li>
              <li>Upload viruses, malware, or other harmful code</li>
              <li>Use the Service to promote commercial products or services without our consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Termination</h2>
            <p>
              We may terminate or suspend your account and access to the Service immediately, without
              prior notice, for any reason, including if you breach these Terms. Upon termination,
              your right to use the Service ceases immediately. You may also delete your account at
              any time through the app settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Disclaimers</h2>
            <p>
              The Service is provided on an &quot;as is&quot; and &quot;as available&quot; basis
              without warranties of any kind, either express or implied. We do not warrant that the
              Service will be uninterrupted, secure, or error-free. We are not responsible for User
              Content posted by other users.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">11. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, MyEra shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages arising out of or relating to
              your use of the Service, whether based on warranty, contract, tort, or any other legal
              theory.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">12. Changes to These Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of material
              changes by posting the updated Terms on this page and updating the &quot;Last
              updated&quot; date. Your continued use of the Service after changes are posted
              constitutes your acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">13. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:{" "}
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
