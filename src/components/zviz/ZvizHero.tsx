"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export function ZvizHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback: poster remains visible gracefully
      });
    }
  }, []);

  return (
    <section className="relative w-full h-[100svh] min-h-[660px] overflow-hidden bg-botanical-950">
      {/* Background Poster Fallback */}
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
          videoLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Image
          src="/images/zviz/hero-poster.jpg"
          alt="Fresh dewy tender coconut"
          fill
          priority
          className="object-cover object-[center_35%] sm:object-center"
        />
      </div>

      {/* Hero Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/zviz/hero-poster.jpg"
        aria-hidden="true"
        onLoadedData={() => setVideoLoaded(true)}
        className="absolute inset-0 z-0 w-full h-full object-cover object-[center_35%] sm:object-center pointer-events-none"
      >
        <source src="/videos/zviz-hero.mp4" type="video/mp4" />
      </video>

      {/* Scrims: subtle, preserving luminous product transformation */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-botanical-950/85 via-botanical-950/45 via-45% to-black/20 sm:hidden" />
      <div className="hidden sm:block absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-botanical-950/90 via-botanical-950/30 to-black/25" />
      <div className="hidden sm:block absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-botanical-950/80 via-botanical-950/40 to-transparent max-w-3xl" />

      {/* Ambient Tropical Glow (desktop only) */}
      <div className="absolute top-1/4 left-10 z-10 w-96 h-96 rounded-full bg-lime-fresh/10 blur-3xl pointer-events-none hidden sm:block" />

      {/* Content Container: Centered on mobile, Left-aligned on desktop */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 h-full min-h-[660px] flex flex-col justify-end pb-24 pt-20 sm:pt-24 sm:pb-24 lg:justify-center lg:py-20">
        <div className="w-full max-w-[660px] mx-auto sm:mx-0 text-center sm:text-left flex flex-col items-center sm:items-start">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-emerald-400/25 text-lime-dew text-[11px] sm:text-xs font-semibold uppercase tracking-widest mb-3.5 sm:mb-5 animate-pulse-subtle">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-lime-fresh shrink-0" />
            <span>100% Natural • Instant Powder Mix</span>
          </div>

          {/* Refined Headline: clamp(2.35rem, 10vw, 3.6rem) mobile, clamp(3rem, 5vw, 5.2rem) desktop */}
          <h1 className="font-extrabold text-[clamp(2.35rem,10vw,3.6rem)] sm:text-[clamp(3rem,5vw,5.2rem)] tracking-tight text-white leading-[0.98] sm:leading-[0.96] mb-3 sm:mb-5 max-w-[360px] sm:max-w-[640px] mx-auto sm:mx-0">
            FROM COCONUT.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-100 to-lime-glow">
              TO ZVIZ.
            </span>
          </h1>

          {/* Supporting Text: Centered on mobile, max-w 300px on mobile */}
          <p className="text-sm min-[360px]:text-base sm:text-lg text-white/90 font-normal leading-relaxed max-w-[300px] sm:max-w-lg mb-6 sm:mb-8 text-pretty mx-auto sm:mx-0">
            Tender coconut water,
            <br className="hidden sm:inline" />
            <span className="font-medium text-emerald-200"> made convenient.</span>
          </p>

          {/* CTA Buttons: Centered, row above 360px, stacked below 360px */}
          <div className="flex flex-col min-[360px]:flex-row items-center justify-center sm:justify-start gap-2.5 sm:gap-4 w-auto mx-auto sm:mx-0">
            <Link
              href="#product"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(16,185,129,0.35)] hover:shadow-[0_6px_28px_rgba(16,185,129,0.5)] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-lime-fresh group min-h-[44px] sm:min-h-[48px] whitespace-nowrap"
            >
              <span>DISCOVER ZVIZ</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/product"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase border border-white/25 hover:border-white/50 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white/50 min-h-[44px] sm:min-h-[48px] whitespace-nowrap"
            >
              <span>VIEW PRODUCT</span>
            </Link>
          </div>

          {/* Desktop Badges */}
          <div className="hidden sm:flex mt-8 sm:mt-10 flex-wrap items-center gap-x-6 gap-y-2 text-xs tracking-wider text-white/70 uppercase font-medium">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-fresh" />
              Makes 200 ml
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-fresh" />
              Electrolyte Rich
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-fresh" />
              Made in India
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator: Dedicated position at bottom center */}
      <div className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1.5 pointer-events-none w-max">
        <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] uppercase text-white/70">
          SCROLL TO DISCOVER
        </span>
        <div className="w-[1.5px] h-6 sm:h-7 bg-white/20 overflow-hidden relative rounded-full">
          <div className="w-full h-full bg-lime-fresh animate-scroll-indicator" />
        </div>
      </div>
    </section>
  );
}
