import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { ZvizNavbar } from "@/components/zviz/ZvizNavbar";
import { ZvizFooter } from "@/components/zviz/ZvizFooter";

export const metadata = {
  title: "ZVIZ Story — From Coconut to ZVIZ",
  description:
    "The story behind ZVIZ Tender Coconut Water — pure, natural refreshment made convenient.",
};

export default function StoryPage() {
  return (
    <main className="min-h-screen flex flex-col bg-coconut-ivory text-charcoal-900">
      <ZvizNavbar />

      <section className="pt-32 pb-24 sm:py-36 bg-coconut-sand text-charcoal-950 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-botanical-700 hover:text-botanical-900 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-botanical-900 text-lime-glow text-xs font-semibold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Brand Story</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-charcoal-950 mb-6 leading-tight">
            FROM COCONUT.
            <br />
            TO ZVIZ.
          </h1>

          <p className="text-xl sm:text-2xl text-charcoal-800 font-medium leading-relaxed mb-8">
            Tender coconut water, made convenient.
          </p>

          <div className="space-y-6 text-base sm:text-lg text-charcoal-700 leading-relaxed bg-white/80 p-8 sm:p-12 rounded-3xl border border-coconut-border">
            <p>
              Tender coconut water is celebrated across India for its natural
              refreshment and essential electrolytes. Yet carrying heavy, bulky
              coconuts or handling perishable liquids has always been a challenge
              for modern, on-the-move lifestyles.
            </p>
            <p>
              ZVIZ introduces an innovative powder mix format that delivers the
              pure taste and hydration of tender coconut water in seconds. Simply
              open the lightweight sachet, mix with water, and enjoy.
            </p>
            <p className="font-semibold text-charcoal-950">
              No artificial colour and flavour. Proudly made in India.
            </p>
          </div>
        </div>
      </section>

      <ZvizFooter />
    </main>
  );
}
