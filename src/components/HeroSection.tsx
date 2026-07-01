import React, { useState, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const WistiaPlayer = "wistia-player" as any;

interface HeroSectionProps {
  onOpenApply: () => void;
}

export default function HeroSection({ onOpenApply }: HeroSectionProps) {
  useEffect(() => {
    // Inject Wistia scripts once on mount
    const script1 = document.createElement("script");
    script1.src = "https://fast.wistia.com/player.js";
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://fast.wistia.com/embed/m5klc4esdn.js";
    script2.async = true;
    script2.type = "module";
    document.head.appendChild(script2);

    const style = document.createElement("style");
    style.innerHTML = `wistia-player[media-id='m5klc4esdn']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/m5klc4esdn/swatch'); display: block; filter: blur(5px); padding-top:56.25%; }`;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="relative pt-6 pb-6 sm:pb-12 md:pb-20 bg-gradient-to-b from-gray-50 via-white to-gray-50/50 overflow-hidden px-4">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* TOP TRUST BAR PILL */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center justify-center bg-gradient-to-r from-blue-950 via-indigo-950 to-slate-900 text-white font-bold text-xs sm:text-sm md:text-base px-5 py-3.5 sm:px-6 sm:py-2.5 rounded-2xl sm:rounded-full shadow-lg shadow-indigo-950/20 mb-6 sm:mb-8 border border-indigo-900/40 max-w-[94%] sm:max-w-max mx-auto text-center"
          id="trust-bar-pill"
        >
          <span className="flex h-2 w-2 rounded-full bg-red-500 animate-ping mr-2.5 shrink-0" />
          <span className="leading-tight">Only for Agency Owners & Coaches Stuck at ₹2L–₹3L/Month</span>
        </motion.div>

        {/* HERO HEADLINE */}
        <h1 className="text-[16px] min-[375px]:text-[18px] min-[425px]:text-[20px] sm:text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold tracking-tight text-gray-900 font-display leading-[1.25] sm:leading-[1.15] max-w-4xl mb-4 sm:mb-6 px-2">
          Scale from{" "}
          <span 
            className="bg-yellow-200 text-gray-950 px-1.5 py-[1px] sm:py-0.5 rounded-sm font-extrabold inline whitespace-nowrap box-decoration-clone"
            style={{ boxDecorationBreak: "clone", WebkitBoxDecorationBreak: "clone" }}
          >
            ₹2L/Month to ₹1–2 Crore/Year
          </span>{" "}
          <br className="hidden md:inline" />
          <span className="text-blue-600 inline">Completely Done For You</span>, Using a <br className="hidden md:inline" />
          System That <span className="text-blue-600 sm:border-b-2 border-blue-600/70 pb-[1px] sm:pb-0.5 inline">Pays for Itself</span> Over Time.
        </h1>

        {/* SUBHEADLINE */}
        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed mb-6 sm:mb-8 font-medium px-4">
          Copy My Funnel to Consistently Attract Premium Leads — Or You Don't Pay
        </p>

        {/* badge chips */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10 w-full max-w-3xl px-2">
          {[
            { label: "No Webinars", bg: "from-blue-50 to-indigo-50/50" },
            { label: "No Endless Content", bg: "from-indigo-50 to-blue-50/50" },
            { label: "NO Begging in DMs", bg: "from-blue-50 to-purple-50/50" }
          ].map((badge, idx) => (
            <div 
              key={idx}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r ${badge.bg} border border-blue-100 shadow-sm text-xs sm:text-sm md:text-base font-semibold text-gray-800`}
            >
              <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 shrink-0" />
              <span>{badge.label}</span>
            </div>
          ))}
        </div>

        {/* VIDEO PLAYER BLOCK */}
        <div className="w-full max-w-4xl rounded-2xl overflow-hidden bg-black shadow-2xl shadow-indigo-900/10 border-4 border-white relative aspect-video">
          <WistiaPlayer media-id="m5klc4esdn" aspect="1.7777777777777777" class="w-full h-full block" />
        </div>

      </div>
    </section>
  );
}
