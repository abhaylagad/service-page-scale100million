import React, { useState, useEffect } from "react";

interface StickyElementsProps {
  onOpenApply: () => void;
}

export default function StickyElements({ onOpenApply }: StickyElementsProps) {
  // Initialize to 14 minutes and 25 seconds so it lands near the realistic 13:06 on load and counts down
  const [timeLeft, setTimeLeft] = useState(14 * 60 + 25);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          return 14 * 60 + 25; // reset to maintain perpetual urgency
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-100 px-4 py-5 sm:py-4 md:px-8 md:py-6 shadow-[0_-10px_40px_rgba(0,0,0,0.08)] pointer-events-auto">
      <div className="w-full max-w-5xl mx-auto flex justify-between items-center">
        
         {/* LEFT SIDE: COUNTDOWN TIMER */}
        <div className="flex flex-col items-start text-left select-none">
          <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-red-600 leading-none tracking-tight">
            {formatTime(timeLeft)}
          </span>
          <span className="text-[11px] sm:text-sm md:text-base font-semibold text-slate-500 mt-1 sm:mt-1.5">
            Limited Slots Only!
          </span>
        </div>

        {/* RIGHT SIDE: BADGE + APPLY NOW BUTTON */}
        <div className="relative">
          {/* Slots Left Badge */}
          <div className="absolute -top-[20px] sm:-top-[22px] right-2 sm:right-4 z-10 bg-slate-950 text-white font-bold text-[10px] sm:text-xs px-2.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg shadow-md whitespace-nowrap flex items-center gap-1 sm:gap-1.5">
            <span className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-red-500 animate-pulse" />
            3 Slots Left
          </div>

          {/* CTA Button */}
          <button
            onClick={onOpenApply}
            className="inline-block bg-red-600 hover:bg-red-700 active:scale-95 text-white font-extrabold text-sm sm:text-base md:text-lg px-8 sm:px-12 py-3.5 sm:py-4 rounded-full shadow-xl shadow-red-600/20 cursor-pointer transition-all tracking-wide whitespace-nowrap text-center"
          >
            Apply Now
          </button>
        </div>

      </div>
    </div>
  );
}

