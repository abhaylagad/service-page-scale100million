import React from "react";
import { ArrowRight, AlertCircle, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface BeforeAfterSectionProps {
  onOpenApply: () => void;
}

export default function BeforeAfterSection({ onOpenApply }: BeforeAfterSectionProps) {
  const steps = [
    { num: "01", name: "Meta Ads", color: "bg-orange-500 shadow-orange-500/20" },
    { num: "02", name: "VSL Funnel", color: "bg-red-500 shadow-red-500/20" },
    { num: "03", name: "Automater", color: "bg-pink-500 shadow-pink-500/20" },
    { num: "04", name: "High-Ticket Follow-ups", color: "bg-purple-500 shadow-purple-500/20" },
    { num: "05", name: "Payment Collection", color: "bg-blue-500 shadow-blue-500/20" },
    { num: "06", name: "Scaling & Output", color: "bg-indigo-600 shadow-indigo-600/20" }
  ];

  return (
    <section className="py-6 sm:py-12 md:py-16 bg-gray-50/50 px-4 border-t border-b border-gray-100">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        {/* UPPER RED APPLY NOW BUTTON */}
        <motion.button
          onClick={onOpenApply}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold text-base sm:text-lg px-12 py-4 rounded-full shadow-lg shadow-red-600/20 mb-6 sm:mb-12 cursor-pointer transition-all uppercase tracking-wider text-center"
        >
          Apply Now
        </motion.button>

        {/* SECTION HEADING */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 text-center font-display leading-tight max-w-4xl mb-4">
          The Only System <span className="text-blue-600 font-extrabold">Top 1% Business Owners</span> used To Scale To <span className="text-blue-600 font-extrabold">7 Figures.</span>
        </h2>

        {/* YELLOW HIGHLIGHT SUBLINE */}
        <p className="text-sm sm:text-base text-gray-600 text-center mb-6 sm:mb-12 max-w-2xl font-medium leading-relaxed">
          This is the ultimate{" "}
          <span className="relative inline-block px-1 bg-yellow-100 rounded-sm font-semibold text-gray-950">
            black-book of TOP 1% Business Owners
          </span>{" "}
          used (they won't reveal it to you…)
        </p>

        {/* HORIZONTAL TIMELINE (01 to 06) */}
        <div className="w-full bg-white p-6 md:p-8 rounded-2xl border border-gray-100/80 shadow-md mb-6 sm:mb-12 overflow-x-auto">
          <div className="min-w-[650px] flex items-center justify-between relative px-4">
            
            {/* Connecting Line behind the circles */}
            <div className="absolute top-5 left-10 right-10 h-1.5 bg-gradient-to-r from-orange-400 via-pink-400 to-indigo-500 rounded-full opacity-35 -z-0" />

            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center relative z-10 flex-1">
                {/* Number Circle */}
                <motion.div 
                  whileHover={{ scale: 1.15 }}
                  className={`w-11 h-11 rounded-full ${step.color} text-white font-black flex items-center justify-center shadow-lg text-sm`}
                >
                  {step.num}
                </motion.div>
                
                {/* step name */}
                <span className="text-xs font-bold text-gray-800 mt-3 max-w-[100px] tracking-tight">
                  {step.name}
                </span>
              </div>
            ))}

          </div>
        </div>

        {/* BEFORE & AFTER SIDE-BY-SIDE BOXES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          
          {/* BEFORE BOX (YELLOW) */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-amber-400 rounded-2xl p-8 shadow-lg shadow-amber-400/10 text-gray-950 relative overflow-hidden"
          >
            {/* Subtle alert icon watermark */}
            <AlertCircle className="absolute right-4 top-4 h-14 w-14 text-amber-500/25 pointer-events-none" />

            <div className="flex items-center gap-2 mb-6">
              <span className="px-3.5 py-1 rounded bg-black text-white font-black text-xs tracking-wider uppercase">
                BEFORE
              </span>
            </div>

            <ul className="space-y-4">
              {[
                "Unpredictable ₹1L/month revenue",
                "Clients only when you chase",
                "Time trapped in DMs instead of coaching"
              ].map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 font-semibold text-sm sm:text-base leading-relaxed">
                  <span className="text-black font-black text-lg select-none mt-0.5">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* AFTER BOX (BLUE) */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-blue-600 rounded-2xl p-8 shadow-lg shadow-blue-600/10 text-white relative overflow-hidden"
          >
            {/* Subtle sparkle icon watermark */}
            <Sparkles className="absolute right-4 top-4 h-14 w-14 text-blue-500/20 pointer-events-none" />

            <div className="flex items-center gap-2 mb-6">
              <span className="px-3.5 py-1 rounded bg-white text-blue-600 font-black text-xs tracking-wider uppercase">
                AFTER
              </span>
            </div>

            <ul className="space-y-4">
              {[
                "₹10L/month predictable revenue",
                "Qualified clients booking calls daily",
                "You focus only on delivering results"
              ].map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 font-semibold text-sm sm:text-base leading-relaxed text-blue-50">
                  <span className="text-white font-black text-lg select-none mt-0.5">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
