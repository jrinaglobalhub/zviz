import React from "react";
import Image from "next/image";
import { Scissors, Blend, Smile } from "lucide-react";

interface StepItem {
  number: string;
  action: string;
  description: string;
  detail: string;
  icon: React.ComponentType<{ className?: string }>;
}

const steps: StepItem[] = [
  {
    number: "01",
    action: "TEAR",
    description: "Open the ZVIZ sachet.",
    detail: "Convenient single-serve tear format.",
    icon: Scissors,
  },
  {
    number: "02",
    action: "MIX",
    description: "Mix with water.",
    detail: "Dissolves smoothly to make 200 ml.",
    icon: Blend,
  },
  {
    number: "03",
    action: "ENJOY",
    description: "Enjoy your tender coconut water.",
    detail: "Instant, natural, electrolyte-rich refreshment.",
    icon: Smile,
  },
];

export function ZvizHowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-16 sm:py-24 px-5 sm:px-6 lg:px-8 bg-coconut-sand text-charcoal-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-[11px] sm:text-xs font-bold tracking-[0.25em] text-botanical-700 uppercase mb-2">
            Effortless Preparation
          </span>
          <h2 className="text-[clamp(1.75rem,2.8vw,2.75rem)] font-extrabold tracking-tight text-charcoal-950 mb-2.5 leading-tight">
            FROM SACHET
            <br />
            TO REFRESHMENT.
          </h2>
          <p className="text-sm sm:text-base text-charcoal-700 font-normal">
            Three simple steps to fresh tender coconut water anywhere.
          </p>
        </div>

        {/* Steps Grid with Desktop Connector Line */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-12 left-[18%] right-[18%] h-[2px] bg-gradient-to-r from-botanical-700/20 via-botanical-700/40 to-botanical-700/20 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Bubble / Number */}
                  <div className="relative mb-5 sm:mb-6">
                    <div className="w-18 h-18 sm:w-24 sm:h-24 w-[72px] h-[72px] sm:w-[92px] sm:h-[92px] rounded-full bg-white border border-coconut-border shadow-sm flex flex-col items-center justify-center group-hover:scale-105 group-hover:border-botanical-700 transition-all duration-300">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-botanical-700 mb-0.5" />
                      <span className="font-mono text-base sm:text-xl font-black text-charcoal-950">
                        {step.number}
                      </span>
                    </div>

                    {/* Step indicator dot */}
                    <div className="hidden lg:block absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-lime-fresh ring-4 ring-coconut-sand" />
                  </div>

                  {/* Action & Description */}
                  <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-charcoal-950 mb-1">
                    {step.action}
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-charcoal-800 mb-1">
                    {step.description}
                  </p>
                  <p className="text-xs text-charcoal-500 max-w-xs">
                    {step.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Visual Strip / Context Card */}
        <div className="mt-12 sm:mt-16 max-w-3xl mx-auto bg-white/85 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-coconut-border/80 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3.5 w-full sm:w-auto">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden shrink-0 border border-black/5">
              <Image
                src="/images/zviz/water-splash.jpg"
                alt="Fresh water mixing with coconut mix"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-bold text-charcoal-950 text-sm sm:text-[15px]">
                Precise 200 ml Refreshment
              </p>
              <p className="text-xs text-charcoal-600">
                Single sachet engineered for one full glass of tender coconut water.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-botanical-900 text-white text-[11px] font-semibold tracking-wider uppercase w-full sm:w-auto">
            <span>Instant in seconds</span>
          </div>
        </div>
      </div>
    </section>
  );
}
