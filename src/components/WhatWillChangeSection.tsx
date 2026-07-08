import React from "react";
import { Brain, Settings, Rocket } from "lucide-react";
import { motion } from "motion/react";

interface WhatWillChangeSectionProps {
  onOpenApply: () => void;
}

export default function WhatWillChangeSection({ onOpenApply }: WhatWillChangeSectionProps) {
  const points = [
    {
      title: "Right Psychology",
      desc: "Unlock the mindset to lead with clarity and confidence.",
      icon: <Brain className="h-10 w-10 text-white" />,
      color: "bg-[#bda37a] shadow-[#bda37a]/20",
    },
    {
      title: "Right Systems",
      desc: "Streamline processes with scalable and efficient systems.",
      icon: <Settings className="h-10 w-10 text-white" />,
      color: "bg-blue-600 shadow-blue-600/20",
    },
    {
      title: "Right Strategies",
      desc: "Apply winning strategies that fuel sustainable growth.",
      icon: <Rocket className="h-10 w-10 text-white" />,
      color: "bg-emerald-500 shadow-emerald-500/20",
    }
  ];

  return (
    <section className="py-6 sm:py-12 md:py-16 bg-white px-4 border-b border-gray-100">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* UPPER RED APPLY NOW BUTTON */}
        <motion.button
          onClick={onOpenApply}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold text-base sm:text-lg px-12 py-4 rounded-full shadow-lg shadow-red-600/20 mb-6 sm:mb-12 cursor-pointer transition-all uppercase tracking-wider text-center"
        >
          Apply Now
        </motion.button>

        {/* BLUE SMALL SUBTITLE */}
        <span className="text-xs sm:text-sm font-extrabold text-blue-600 tracking-[0.2em] uppercase mb-4">
          BUSINESS GROWTH
        </span>

        {/* MAIN SECTION HEADING */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight max-w-3xl mb-6 sm:mb-12 font-display">
          What Will Change In Your Business After a 1-1 Consultation Call
        </h2>

        {/* 3 COLUMNS SYSTEM */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mt-4">
          {points.map((point, idx) => (
            <div 
              key={idx}
              className="flex flex-col items-center px-4"
            >
              {/* Circular Icon Container */}
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-24 h-24 rounded-full ${point.color} flex items-center justify-center shadow-lg mb-6`}
              >
                {point.icon}
              </motion.div>

              {/* Title */}
              <h4 className="font-extrabold text-gray-900 text-lg sm:text-xl mb-2 font-display">
                {point.title}
              </h4>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed max-w-[260px]">
                {point.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
