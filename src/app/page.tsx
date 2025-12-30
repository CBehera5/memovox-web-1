import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/landing/hero-section";
import { PrivacySection } from "@/components/landing/privacy-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { CtaSection } from "@/components/landing/cta-section";
import { StarBackground } from "@/components/ui/star-background";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col text-foreground selection:bg-accent/30 relative">
      <StarBackground />
      <Navbar />
      <HeroSection />
      <PrivacySection />
      <FeaturesSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
