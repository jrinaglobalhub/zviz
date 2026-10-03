import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Sparkles, CheckCircle2 } from "lucide-react";
import { ZvizNavbar } from "@/components/zviz/ZvizNavbar";
import { ZvizFooter } from "@/components/zviz/ZvizFooter";

export const metadata = {
  title: "ZVIZ Product — Tender Coconut Water Powder Mix",
  description:
    "Explore ZVIZ Tender Coconut Water — an electrolyte-rich powder mix designed for convenient preparation in seconds.",
};

const verifiedPoints = [
  "Instant coconut water in seconds",
  "Easy-to-carry sachet format",
  "No artificial colour and flavour",
  "Convenient and travel friendly",
  "Makes 200 ml",
  "Made in India",
  "100% natural product",
];

export default function ProductPage() {
  return (
    <main className="min-h-screen flex flex-col bg-coconut-ivory text-charcoal-900">
      <ZvizNavbar />

      <section className="pt-32 pb-24 sm:py-36 bg-botanical-950 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-emerald-300 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/images/zviz/product-sachet.png"
                  alt="ZVIZ Tender Coconut Water Sachet"
                  fill
                  sizes="384px"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/30 text-lime-glow text-xs font-semibold uppercase tracking-widest mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Product Specifications</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-2">
                ZVIZ Tender Coconut Water
              </h1>
              <p className="text-base sm:text-lg text-emerald-300 font-semibold tracking-wider uppercase mb-6">
                Electrolyte Rich Powder Mix
              </p>

              <p className="text-base sm:text-lg text-white/80 font-normal leading-relaxed mb-8 max-w-xl">
                Tender coconut water in an easy-to-carry sachet format. Simply
                mix with water to enjoy instant, 100% natural refreshment in
                seconds.
              </p>

              <div className="space-y-3 mb-10">
                {verifiedPoints.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lime-fresh shrink-0" />
                    <span className="text-sm sm:text-base text-white/90">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 inline-block text-xs text-white/60">
                Official commercial product launch demo for ZVIZ.
              </div>
            </div>
          </div>
        </div>
      </section>

      <ZvizFooter />
    </main>
  );
}
