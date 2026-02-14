import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "My Era - Relive Your Favourite K-Pop Moments",
  description:
    "Upload and share your favourite memories of K-Pop idols. Currently featuring BTS as they make their comeback. Download My Era and start building your collection.",
  keywords: [
    "kpop",
    "BTS",
    "memories",
    "era",
    "kpop app",
    "BTS comeback",
    "bangtan",
    "ARMY",
  ],
  openGraph: {
    title: "My Era - Relive Your Favourite K-Pop Moments",
    description:
      "Upload and share your favourite memories of K-Pop idols. Currently featuring BTS.",
    url: "https://getmyera.app",
    siteName: "My Era",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Era - Relive Your Favourite K-Pop Moments",
    description:
      "Upload and share your favourite memories of K-Pop idols. Currently featuring BTS.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} font-[family-name:var(--font-geist-sans)] antialiased`}>
        {children}
      </body>
    </html>
  );
}
