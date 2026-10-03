import { ZvizNavbar } from "@/components/zviz/ZvizNavbar";
import { ZvizHero } from "@/components/zviz/ZvizHero";
import { ZvizDifference } from "@/components/zviz/ZvizDifference";
import { ZvizHowItWorks } from "@/components/zviz/ZvizHowItWorks";
import { ZvizProductShowcase } from "@/components/zviz/ZvizProductShowcase";
import { ZvizLifestyle } from "@/components/zviz/ZvizLifestyle";
import { ZvizBrandStatement } from "@/components/zviz/ZvizBrandStatement";
import { ZvizFinalCTA } from "@/components/zviz/ZvizFinalCTA";
import { ZvizFooter } from "@/components/zviz/ZvizFooter";

export default function HomePage() {
  return (
    <main className="w-full overflow-x-hidden min-h-screen flex flex-col bg-coconut-ivory text-charcoal-900 selection:bg-emerald-500 selection:text-white">
      {/* Sticky Glassmorphic Navbar */}
      <ZvizNavbar />

      {/* Hero with full-bleed cinematic video background */}
      <ZvizHero />

      {/* Section 2: The ZVIZ Difference (4 Feature Cards) */}
      <ZvizDifference />

      {/* Section 3: From Sachet to Refreshment (How It Works) */}
      <ZvizHowItWorks />

      {/* Section 4: Botanical Green Product Showcase */}
      <ZvizProductShowcase />

      {/* Section 5: Lifestyle / Everyday Moments */}
      <ZvizLifestyle />

      {/* Section 6: Editorial Brand Statement */}
      <ZvizBrandStatement />

      {/* Final Closing CTA */}
      <ZvizFinalCTA />

      {/* Minimal Luxury Footer */}
      <ZvizFooter />
    </main>
  );
}
