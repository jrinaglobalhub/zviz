import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

const features = [
  "Instant coconut water in seconds",
  "Easy-to-carry sachet format",
  "No artificial colour and flavour",
  "Convenient and travel friendly",
  "Makes 200 ml",
  "Made in India",
  "100% natural product",
];

export function ZvizProductShowcase() {
  return (
    <section
      id="product"
      className="py-16 sm:py-24 px-5 sm:px-6 lg:px-8 bg-botanical-950 text-white relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-lime-fresh/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Authentic ZVIZ Product Visual */}
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
              <Image
                src="/images/zviz/product-sachet.png"
                alt="ZVIZ Tender Coconut Water Sachet with water droplets and tropical background"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />

              {/* Glass Tag on Image */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-4 rounded-2xl bg-black/50 backdrop-blur-md border border-white/15 flex items-center justify-between">
                <div>
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-widest text-emerald-300 font-semibold">
                    Product Reference
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-white">
                    ZVIZ Sachet • Makes 200 ml
                  </p>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              </div>
            </div>
          </div>

          {/* Verified Product Information: Left-aligned for editorial clarity */}
          <div className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-lime-glow text-[11px] font-semibold uppercase tracking-widest mb-3.5 sm:mb-4 self-start">
              <Sparkles className="w-3 h-3" />
              <span>Official Product Overview</span>
            </div>

            <h2 className="text-[clamp(1.85rem,2.8vw,2.75rem)] font-extrabold tracking-tight text-white mb-1 leading-none">
              ZVIZ
            </h2>
            <h3 className="text-[clamp(1.15rem,2vw,1.85rem)] font-bold tracking-tight text-emerald-300 mb-3 leading-tight">
              TENDER COCONUT WATER
            </h3>

            <div className="inline-block mb-4 sm:mb-5">
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-lime-dew/90 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                ELECTROLYTE RICH • POWDER MIX
              </span>
            </div>

            <p className="text-sm sm:text-[15px] lg:text-base text-white/80 font-normal leading-relaxed mb-6">
              Experience the natural taste and essential hydration of tender
              coconut water in an innovative, travel-ready powder mix format.
              No artificial colour and flavour.
            </p>

            {/* Verified Feature Checklist */}
            <div className="space-y-2 sm:space-y-2.5 mb-6 sm:mb-8">
              {features.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-lime-fresh shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-white/90 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/product"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(16,185,129,0.4)] hover:shadow-[0_6px_28px_rgba(16,185,129,0.6)] focus:outline-none focus:ring-2 focus:ring-lime-fresh group min-h-[44px] sm:min-h-[48px]"
              >
                <span>EXPLORE PRODUCT</span>
                <ArrowRight className="w-3.5 h-3.5 text-white transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
