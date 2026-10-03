import React from "react";
import Image from "next/image";
import { Plane, Briefcase, Sun, Compass } from "lucide-react";

const contexts = [
  {
    title: "Travel & Transit",
    desc: "Compact sachet slips into bags, backpacks, and carry-ons.",
    icon: Plane,
  },
  {
    title: "Work & Focus",
    desc: "Keep at your desk for a fresh natural coconut beverage in seconds.",
    icon: Briefcase,
  },
  {
    title: "Outdoor Moments",
    desc: "Refreshment on walks, commutes, and open-air journeys.",
    icon: Sun,
  },
  {
    title: "Everyday Movement",
    desc: "Whenever you need pure tender coconut refreshment on demand.",
    icon: Compass,
  },
];

export function ZvizLifestyle() {
  return (
    <section className="py-16 sm:py-24 px-5 sm:px-6 lg:px-8 bg-coconut-ivory text-charcoal-900 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header: Left-aligned for editorial hierarchy */}
        <div className="max-w-2xl mb-10 sm:mb-16">
          <span className="inline-block text-[11px] sm:text-xs font-bold tracking-[0.25em] text-botanical-700 uppercase mb-2">
            Everyday Convenience
          </span>
          <h2 className="text-[clamp(1.75rem,2.8vw,2.75rem)] font-extrabold tracking-tight text-charcoal-950 mb-2.5 leading-tight">
            YOUR COCONUT WATER.
            <br />
            WHEREVER YOU GO.
          </h2>
          <p className="text-sm sm:text-base text-charcoal-700 font-normal leading-relaxed">
            Designed around convenience, made for modern everyday moments.
          </p>
        </div>

        {/* Visual & Context Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Cinematic Visual Banner */}
          <div className="lg:col-span-7 relative min-h-[260px] sm:min-h-[360px] lg:min-h-[460px] rounded-2xl sm:rounded-3xl overflow-hidden border border-coconut-border shadow-sm">
            <Image
              src="/images/zviz/coconut-fresh.jpg"
              alt="Fresh tender coconut in sunlight"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-botanical-950/85 via-botanical-950/30 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7 text-white">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-lime-glow block mb-1">
                100% Natural Product
              </span>
              <p className="text-lg sm:text-xl lg:text-2xl font-extrabold leading-tight">
                Authentic tender coconut taste, preserved in a lightweight sachet.
              </p>
            </div>
          </div>

          {/* Modern Context Tiles: Left-aligned */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-3.5">
            {contexts.map((ctx) => {
              const Icon = ctx.icon;
              return (
                <div
                  key={ctx.title}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-coconut-border/80 shadow-sm hover:shadow-md transition-shadow flex items-start gap-3.5 text-left"
                >
                  <div className="w-9 h-9 rounded-xl bg-coconut-sand text-botanical-800 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-charcoal-950 mb-0.5">
                      {ctx.title}
                    </h3>
                    <p className="text-xs text-charcoal-600 leading-relaxed">
                      {ctx.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
