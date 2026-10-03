import React from "react";
import { Zap, Droplets, Compass, MapPin } from "lucide-react";

interface FeatureItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const features: FeatureItem[] = [
  {
    id: "instant",
    number: "01",
    title: "INSTANT",
    description: "Coconut water in seconds.",
    icon: Zap,
  },
  {
    id: "electrolyte-rich",
    number: "02",
    title: "ELECTROLYTE RICH",
    description: "Electrolyte-rich drink mix.",
    icon: Droplets,
  },
  {
    id: "travel-friendly",
    number: "03",
    title: "TRAVEL FRIENDLY",
    description: "Easy-to-carry sachet format.",
    icon: Compass,
  },
  {
    id: "made-in-india",
    number: "04",
    title: "MADE IN INDIA",
    description: "Proudly made in India.",
    icon: MapPin,
  },
];

export function ZvizDifference() {
  return (
    <section
      id="difference"
      className="py-16 sm:py-24 px-5 sm:px-6 lg:px-8 bg-coconut-ivory text-charcoal-900 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header: Left-aligned for clean editorial hierarchy */}
        <div className="max-w-2xl mb-10 sm:mb-16">
          <span className="inline-block text-[11px] sm:text-xs font-bold tracking-[0.25em] text-botanical-700 uppercase mb-2">
            Pure & Convenient
          </span>
          <h2 className="text-[clamp(1.75rem,2.8vw,2.75rem)] font-extrabold tracking-tight text-charcoal-950 mb-2.5 leading-tight">
            THE ZVIZ DIFFERENCE
          </h2>
          <p className="text-[15px] sm:text-base text-charcoal-700 font-normal leading-relaxed">
            A modern way to enjoy tender coconut water.
          </p>
        </div>

        {/* Feature Cards: 1-col on mobile, 4-col on desktop, compact & elegant */}
        <div className="flex flex-col gap-3.5 sm:gap-4 md:grid md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="w-full group relative bg-white/95 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-coconut-border/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(10,34,24,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <span className="font-mono text-xs sm:text-sm font-bold tracking-wider text-botanical-700/70 group-hover:text-botanical-800 transition-colors">
                      {item.number}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-coconut-sand flex items-center justify-center text-botanical-800 group-hover:bg-botanical-900 group-hover:text-lime-glow transition-all duration-300">
                      <Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>

                  {/* Title: Refined font size */}
                  <h3 className="text-base sm:text-lg font-bold tracking-tight text-charcoal-950 mb-1.5">
                    {item.title}
                  </h3>

                  {/* Description: Refined font size */}
                  <p className="text-[13px] sm:text-sm text-charcoal-700 font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom subtle accent line */}
                <div className="mt-5 sm:mt-6 pt-3.5 border-t border-coconut-sand flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-fresh/80" />
                  <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-charcoal-500 uppercase">
                    Authentic ZVIZ
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
