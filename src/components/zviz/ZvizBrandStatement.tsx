import React from "react";

export function ZvizBrandStatement() {
  return (
    <section className="py-16 sm:py-28 px-5 sm:px-6 lg:px-8 bg-coconut-sand text-charcoal-900 border-y border-coconut-border/60 relative overflow-hidden">
      {/* Watermark text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-[0.025]">
        <span className="text-[26vw] font-black tracking-tighter text-botanical-950 whitespace-nowrap">
          ZVIZ
        </span>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="inline-block text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase text-botanical-700 mb-3 sm:mb-4">
          The ZVIZ Ethos
        </span>

        {/* Large Editorial Headline: Refined clamp scale */}
        <h2 className="text-[clamp(2.35rem,4vw,4.5rem)] font-extrabold tracking-tight text-charcoal-950 leading-[1.04] mb-4 sm:mb-6">
          PURE.
          <br />
          CONVENIENT.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-botanical-800 via-emerald-600 to-botanical-700">
            ZVIZ.
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-sm sm:text-base lg:text-lg text-charcoal-700 font-normal max-w-xl mx-auto leading-relaxed">
          Tender coconut water in a convenient powder-mix format.
        </p>

        {/* Minimal pill indicators */}
        <div className="mt-6 sm:mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-charcoal-500">
          <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white border border-coconut-border">
            100% Natural Product
          </span>
          <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white border border-coconut-border">
            Electrolyte Rich
          </span>
          <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white border border-coconut-border">
            Made in India
          </span>
        </div>
      </div>
    </section>
  );
}
