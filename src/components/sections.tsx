import { WaitlistForm } from "./waitlist-form";

const BTS_MEMBERS = [
  { name: "RM", role: "Leader & Rapper" },
  { name: "Jin", role: "Vocalist" },
  { name: "SUGA", role: "Rapper & Producer" },
  { name: "j-hope", role: "Dancer & Rapper" },
  { name: "Jimin", role: "Vocalist & Dancer" },
  { name: "V", role: "Vocalist" },
  { name: "Jungkook", role: "Vocalist" },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-purple-900/20">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
            <span className="text-white font-bold text-sm">M</span>
          </div>
          <span className="text-lg font-semibold tracking-tight">my era</span>
        </div>
        <div className="hidden sm:flex items-center gap-8 text-sm text-purple-200/70">
          <a href="#features" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="#bts" className="hover:text-white transition-colors">
            BTS
          </a>
          <a href="#how-it-works" className="hover:text-white transition-colors">
            How It Works
          </a>
        </div>
        <a
          href="#waitlist"
          className="px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-500 transition-colors text-sm font-medium"
        >
          Join Waitlist
        </a>
      </div>
    </nav>
  );
}

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 px-6">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-[300px] h-[300px] bg-purple-400/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          BTS is back — celebrate their comeback
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-[1.1] mb-6 animate-fade-in-up">
          Relive your favourite
          <br />
          <span className="text-gradient">K-Pop moments</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-purple-200/60 max-w-2xl mx-auto mb-10 animate-fade-in-up [animation-delay:200ms] opacity-0">
          Upload and share your most cherished memories of your favourite idols.
          Build your personal era collection, starting with BTS.
        </p>

        {/* Waitlist */}
        <div className="animate-fade-in-up [animation-delay:400ms] opacity-0 w-full">
          <WaitlistForm />
          <p className="text-purple-300/30 text-sm mt-3">
            Be the first to know when we launch.
          </p>
        </div>

        {/* Phone mockup placeholder */}
        <div className="relative mt-16 sm:mt-20 animate-fade-in-up [animation-delay:600ms] opacity-0">
          <div className="mx-auto w-[280px] h-[560px] rounded-[3rem] border-2 border-purple-500/20 bg-gradient-to-b from-purple-950/50 to-background p-3 glow-purple">
            <div className="w-full h-full rounded-[2.5rem] bg-gradient-to-b from-purple-900/30 to-purple-950/50 border border-purple-500/10 flex flex-col items-center justify-center overflow-hidden">
              {/* Notch */}
              <div className="absolute top-6 w-24 h-6 bg-background rounded-full" />
              {/* Mock app content */}
              <div className="flex flex-col items-center gap-4 p-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">M</span>
                </div>
                <p className="text-purple-300/80 text-sm font-medium">my era</p>
                <div className="flex gap-2 mt-4">
                  {["RM", "Jin", "SUGA"].map((name) => (
                    <div
                      key={name}
                      className="w-16 h-20 rounded-xl bg-purple-800/30 border border-purple-500/20 flex items-end justify-center pb-1"
                    >
                      <span className="text-[10px] text-purple-300/70">{name}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 mt-1">
                  {["j-hope", "Jimin", "V", "JK"].map((name) => (
                    <div
                      key={name}
                      className="w-14 h-18 rounded-xl bg-purple-800/30 border border-purple-500/20 flex items-end justify-center pb-1"
                    >
                      <span className="text-[10px] text-purple-300/70">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Floating decorative elements */}
          <div className="absolute -left-4 top-1/3 w-20 h-20 rounded-2xl bg-purple-600/10 border border-purple-500/20 backdrop-blur-sm animate-float flex items-center justify-center">
            <HeartIcon className="w-8 h-8 text-purple-400" />
          </div>
          <div className="absolute -right-4 top-1/2 w-16 h-16 rounded-2xl bg-purple-600/10 border border-purple-500/20 backdrop-blur-sm animate-float [animation-delay:2s] flex items-center justify-center">
            <StarIcon className="w-6 h-6 text-purple-400" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeaturesSection() {
  const features = [
    {
      icon: <CameraIcon className="w-6 h-6" />,
      title: "Upload Memories",
      description:
        "Share your favourite photos, concert clips, and fan moments from every era of your favourite idols.",
    },
    {
      icon: <SparklesIcon className="w-6 h-6" />,
      title: "Curate Your Eras",
      description:
        "Organise your memories by era, comeback, or moment. Build a timeline of your K-Pop journey.",
    },
    {
      icon: <HeartIcon className="w-6 h-6" />,
      title: "Connect with ARMY",
      description:
        "Discover and appreciate memories shared by fans around the world. React, save, and share.",
    },
    {
      icon: <ShieldIcon className="w-6 h-6" />,
      title: "Safe Community",
      description:
        "A respectful space built for fans, by fans. We keep the community positive and welcoming.",
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            Everything you need to
            <br />
            <span className="text-gradient">preserve your eras</span>
          </h2>
          <p className="text-purple-200/50 text-lg max-w-xl mx-auto">
            A space designed for K-Pop fans to collect, share, and relive their
            most treasured moments.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl border border-purple-500/10 bg-purple-950/20 hover:border-purple-500/30 hover:bg-purple-950/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center text-purple-400 mb-5 group-hover:bg-purple-600/30 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-purple-200/50 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BTSSection() {
  return (
    <section id="bts" className="py-20 sm:py-32 px-6 relative">
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm mb-6">
            Featured Group
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            BTS is making their
            <br />
            <span className="text-gradient">comeback</span>
          </h2>
          <p className="text-purple-200/50 text-lg max-w-2xl mx-auto">
            To celebrate BTS reuniting, My Era is launching with exclusive
            support for all 7 members. Upload your favourite moments from every
            era — from debut to today.
          </p>
        </div>

        {/* BTS Member Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
          {BTS_MEMBERS.map((member, i) => (
            <div
              key={member.name}
              className="group relative aspect-[3/4] rounded-2xl border border-purple-500/15 bg-gradient-to-b from-purple-900/20 to-purple-950/40 overflow-hidden hover:border-purple-500/40 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Placeholder gradient for member photo */}
              <div className="absolute inset-0 bg-gradient-to-b from-purple-800/10 to-purple-950/60" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-purple-600/30 border border-purple-400/30 flex items-center justify-center mb-3">
                  <span className="text-lg font-bold text-purple-300">
                    {member.name[0]}
                  </span>
                </div>
                <h3 className="font-semibold text-sm sm:text-base">
                  {member.name}
                </h3>
                <p className="text-[11px] text-purple-300/50 mt-1 text-center">
                  {member.role}
                </p>
              </div>
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-purple-600/20 to-transparent" />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          {[
            { value: "7", label: "Members" },
            { value: "10+", label: "Years of Eras" },
            { value: "ARMY", label: "Community" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gradient">
                {stat.value}
              </div>
              <div className="text-sm text-purple-300/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      title: "Join the Waitlist",
      description: "Sign up with your email to get early access when we launch.",
    },
    {
      step: "02",
      title: "Pick Your Member",
      description: "Choose which BTS member's era you want to contribute to.",
    },
    {
      step: "03",
      title: "Upload Your Memories",
      description:
        "Share photos, clips, and moments from your favourite eras.",
    },
    {
      step: "04",
      title: "Explore & Connect",
      description: "Browse eras from other ARMY and discover new memories.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            How it <span className="text-gradient">works</span>
          </h2>
          <p className="text-purple-200/50 text-lg">
            Start preserving your favourite K-Pop moments in four simple steps.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((item) => (
            <div
              key={item.step}
              className="flex gap-6 items-start p-6 rounded-2xl border border-purple-500/10 bg-purple-950/20 hover:border-purple-500/20 transition-all group"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/30 to-purple-700/20 flex items-center justify-center border border-purple-500/20 group-hover:from-purple-600/50 transition-all">
                <span className="text-sm font-bold text-purple-300">
                  {item.step}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-purple-200/50">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section id="waitlist" className="py-20 sm:py-32 px-6 relative">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
          Ready to relive
          <br />
          <span className="text-gradient">your era?</span>
        </h2>
        <p className="text-purple-200/50 text-lg max-w-xl mx-auto mb-10">
          Be the first to know when My Era launches. Join the waitlist and
          get early access to start sharing your favourite BTS moments.
        </p>

        <WaitlistForm />

        <p className="text-purple-300/30 text-sm mt-6">
          No spam, ever. We&apos;ll only email you when the app is ready.
        </p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-purple-900/20 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
              <span className="text-white font-bold text-xs">M</span>
            </div>
            <span className="text-sm font-semibold tracking-tight">my era</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-purple-300/40">
            <a href="#" className="hover:text-purple-300/70 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-purple-300/70 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-purple-300/70 transition-colors">
              Contact
            </a>
          </div>

          <p className="text-sm text-purple-300/30">
            &copy; 2026 My Era. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ---- Icons ---- */

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  );
}

function CameraIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
      />
    </svg>
  );
}

function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
      />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    </svg>
  );
}

