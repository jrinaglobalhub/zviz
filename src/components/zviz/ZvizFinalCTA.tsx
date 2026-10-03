import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function ZvizFinalCTA() {
  return (
    <section className="py-16 sm:py-24 px-5 sm:px-6 lg:px-8 bg-botanical-900 text-white relative overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-lime-fresh/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-botanical-950/80 rounded-3xl p-6 sm:p-10 lg:p-14 border border-white/10 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-lime-glow text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest mb-3.5 sm:mb-5">
                <Sparkles className="w-3 h-3" />
                <span>Instant Tender Coconut Water</span>
              </div>

              <h2 className="text-[clamp(1.85rem,3.2vw,3.4rem)] font-extrabold tracking-tight text-white mb-3 sm:mb-4 leading-tight">
                READY FOR A
                <br />
                FRESHER WAY?
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-emerald-100/90 font-normal leading-relaxed max-w-lg mb-6 sm:mb-8">
                Discover ZVIZ Tender Coconut Water — natural refreshment and
                electrolytes in seconds, wherever life takes you.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="#product"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(16,185,129,0.4)] hover:shadow-[0_6px_28px_rgba(16,185,129,0.6)] focus:outline-none focus:ring-2 focus:ring-lime-fresh group min-h-[44px] sm:min-h-[48px]"
                >
                  <span>EXPLORE ZVIZ</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/product"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase border border-white/20 hover:border-white/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 min-h-[44px] sm:min-h-[48px]"
                >
                  <span>VIEW PRODUCT</span>
                </Link>
              </div>
            </div>

            {/* Right Product Teaser Image */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative w-40 sm:w-48 lg:w-56 aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
                <Image
                  src="/images/zviz/product-sachet.png"
                  alt="ZVIZ Tender Coconut Water Sachet"
                  fill
                  sizes="224px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
