import {
  HeroSection,
  FeaturesSection,
  BTSSection,
  Footer,
  Navbar,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-background bg-grid overflow-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <BTSSection />
        {/* <HowItWorksSection /> */}
        {/* <CTASection /> */}
      </main>
      <Footer />
    </div>
  );
}
