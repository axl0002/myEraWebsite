"use client";

import Script from "next/script";

export function WaitlistForm({ className }: { className?: string }) {
  return (
    <div className={`w-full ${className ?? ""}`}>
      <Script
        async
        src="https://subscribe-forms.beehiiv.com/embed.js"
        strategy="lazyOnload"
      />
      <iframe
        src="https://subscribe-forms.beehiiv.com/40210139-73ef-4795-bae0-6d10a530e2ec"
        className="beehiiv-embed"
        data-test-id="beehiiv-embed"
        style={{
          width: "100%",
          height: "47px",
          border: "none",
          backgroundColor: "transparent",
          overflow: "hidden",
        }}
      />
    </div>
  );
}
