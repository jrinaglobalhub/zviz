import React from "react";
import Link from "next/link";

export function ZvizFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-botanical-950 text-white/70 py-12 sm:py-16 px-5 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 pb-10 sm:pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-extrabold text-2xl tracking-wider text-white">
              ZVIZ
            </span>
            <span className="text-[11px] sm:text-xs uppercase tracking-widest text-emerald-400/80 font-medium">
              Tender Coconut Water
            </span>
          </div>

          {/* Navigation */}
          <nav
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm font-medium text-white/80"
            aria-label="Footer Navigation"
          >
            <Link
              href="/"
              className="hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/product"
              className="hover:text-white transition-colors"
            >
              Product
            </Link>
            <Link
              href="/story"
              className="hover:text-white transition-colors"
            >
              Story
            </Link>
          </nav>

          {/* Badge */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/60 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Made in India</span>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs text-white/50">
          <p>© {currentYear} ZVIZ. All rights reserved.</p>
          <p>Tender Coconut Water • Electrolyte Rich Powder Mix</p>
        </div>
      </div>
    </footer>
  );
}
