"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

export function ZvizNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-botanical-950/95 backdrop-blur-md border-b border-white/10 shadow-xl"
          : "bg-gradient-to-b from-black/70 via-black/30 to-transparent"
      }`}
      style={{
        paddingTop: "max(12px, env(safe-area-inset-top))",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Brand Wordmark */}
          <Link
            href="/"
            className="group flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-lime-fresh/60 rounded-lg py-1"
            aria-label="ZVIZ Tender Coconut Water Home"
          >
            <span className="font-extrabold text-2xl sm:text-3xl tracking-wider text-white font-sans transition-colors group-hover:text-lime-glow">
              ZVIZ
            </span>
            <span className="hidden sm:inline-block text-[10px] tracking-widest uppercase font-semibold text-emerald-300/80 border-l border-white/20 pl-2.5">
              Tender Coconut Water
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-1 lg:space-x-8"
            aria-label="Primary Navigation"
          >
            <Link
              href="/"
              className="text-sm font-medium text-white/90 hover:text-white px-3 py-2 rounded-md transition-colors relative group focus:outline-none focus:ring-2 focus:ring-lime-fresh/60"
            >
              Home
              <span className="absolute bottom-1 left-3 right-3 h-[2px] bg-lime-fresh scale-x-100 transition-transform origin-left" />
            </Link>
            <Link
              href="/product"
              className="text-sm font-medium text-white/80 hover:text-white px-3 py-2 rounded-md transition-colors relative group focus:outline-none focus:ring-2 focus:ring-lime-fresh/60"
            >
              Product
              <span className="absolute bottom-1 left-3 right-3 h-[2px] bg-lime-fresh scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
            <Link
              href="/story"
              className="text-sm font-medium text-white/80 hover:text-white px-3 py-2 rounded-md transition-colors relative group focus:outline-none focus:ring-2 focus:ring-lime-fresh/60"
            >
              Story
              <span className="absolute bottom-1 left-3 right-3 h-[2px] bg-lime-fresh scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/product"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 text-white font-semibold text-xs tracking-wider uppercase border border-emerald-400/40 hover:border-emerald-400 backdrop-blur-sm transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(34,197,94,0.35)] focus:outline-none focus:ring-2 focus:ring-lime-fresh"
            >
              <span>SHOP ZVIZ</span>
              <ArrowRight className="w-3.5 h-3.5 text-lime-glow transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Hamburger with minimum 44x44px touch target */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 flex items-center justify-center rounded-lg text-white hover:text-lime-glow hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-lime-fresh touch-manipulation"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="md:hidden bg-botanical-950/98 backdrop-blur-2xl border-b border-white/15 px-5 pt-3 pb-8 transition-all duration-300 shadow-2xl"
          style={{
            paddingBottom: "max(24px, env(safe-area-inset-bottom))",
          }}
        >
          <div className="flex flex-col space-y-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-base font-semibold text-white bg-white/5 hover:bg-white/10 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/product"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-base font-semibold text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              Product
            </Link>
            <Link
              href="/story"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-base font-semibold text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              Story
            </Link>
            <div className="pt-3">
              <Link
                href="/product"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wider uppercase transition-colors shadow-lg shadow-emerald-900/40 min-h-[48px]"
              >
                <span>SHOP ZVIZ</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
