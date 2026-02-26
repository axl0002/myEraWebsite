import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support - MyEra",
  description: "Get help with MyEra. Contact our support team, find answers to common questions, and follow us on social media.",
};

export default function Support() {
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
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Support</h1>
        <p className="text-gray-400 text-sm mb-12">
          We&apos;re here to help.
        </p>

        <div className="space-y-10 text-gray-500 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Get in Touch</h2>
            <p>
              For any questions, feedback, or issues, reach out to us at{" "}
              <a
                href="mailto:support@getmyera.app"
                className="text-pink-400 hover:text-pink-500 transition-colors"
              >
                support@getmyera.app
              </a>
              . We aim to respond within 48 hours.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Common Questions</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-gray-600 mb-1">
                  When does MyEra launch?
                </h3>
                <p>
                  We&apos;re currently in development. Join the{" "}
                  <Link href="/" className="text-pink-400 hover:text-pink-500 transition-colors">
                    waitlist
                  </Link>{" "}
                  to be the first to know when we go live.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-gray-600 mb-1">
                  Which groups are supported?
                </h3>
                <p>
                  We&apos;re launching with BTS as our featured group. Support for more K-Pop groups will be added over time.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-gray-600 mb-1">
                  How do I delete my account?
                </h3>
                <p>
                  Once the app is live, you can delete your account from within the app settings. You can also email us at{" "}
                  <a
                    href="mailto:support@getmyera.app"
                    className="text-pink-400 hover:text-pink-500 transition-colors"
                  >
                    support@getmyera.app
                  </a>{" "}
                  and we&apos;ll handle it for you.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Follow Us</h2>
            <p>
              Stay up to date with MyEra news and announcements:
            </p>
            <div className="flex gap-4 mt-3">
              <a
                href="https://instagram.com/myera.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-500 transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://x.com/myera_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-500 transition-colors"
              >
                X (Twitter)
              </a>
              <a
                href="https://tiktok.com/@myera.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-500 transition-colors"
              >
                TikTok
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
