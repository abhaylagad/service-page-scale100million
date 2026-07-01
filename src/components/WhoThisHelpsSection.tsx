import React from "react";
import { motion } from "motion/react";

interface WhoThisHelpsSectionProps {
  onOpenApply: () => void;
}

export default function WhoThisHelpsSection({ onOpenApply }: WhoThisHelpsSectionProps) {
  const disqualifiers = [
    { text: "You Are Not A Business Owner" },
    { text: "You Are Not An Action Taker" },
    { text: "You Are Not Serious About Your Business" }
  ];

  return (
    <section className="py-6 sm:py-12 md:py-16 bg-gray-50/30 px-4 border-b border-gray-100">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* UPPER RED APPLY NOW BUTTON */}
        <motion.a
          href="https://scale100million.zohobookings.in/#/300029000000208032"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold text-base sm:text-lg px-12 py-4 rounded-full shadow-lg shadow-red-600/20 mb-6 sm:mb-12 cursor-pointer transition-all uppercase tracking-wider text-center"
        >
          Apply Now
        </motion.a>

        {/* HEADING */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-6 font-display leading-tight max-w-2xl">
          Who This 1-1 Consultation Will Help The Best?
        </h2>

        {/* PARAGRAPH */}
        <p className="text-gray-600 text-base md:text-lg text-center max-w-3xl leading-relaxed mb-8 sm:mb-16 font-medium">
          To Online service-business owners who are ready to scale.. this system is built for you. No fluff, no generic advice, just proven strategies, smart systems and AI automation to take your business all the way to 7—8 figures with clarity and speed.
        </p>

        {/* BIG RED GLOWING DON'T JOIN IF CIRCLE */}
        <div className="relative flex flex-col items-center w-full">
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0.9 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="w-36 h-36 rounded-full bg-red-600 flex flex-col items-center justify-center text-center text-white font-extrabold shadow-2xl shadow-red-600/30 relative z-20"
          >
            <span className="text-base tracking-widest font-bold text-white/90">DON'T</span>
            <span className="text-xl tracking-tight font-black text-white leading-none mt-1">JOIN IF</span>
          </motion.div>

          {/* Connected timeline/line from the circle going down */}
          <div className="relative w-full max-w-md mt-12 px-6 sm:px-4 flex flex-col items-center">
            {/* The vertical red timeline line running down the center */}
            <div className="absolute top-10 bottom-10 left-1/2 -translate-x-1/2 w-0.5 bg-red-200/60 z-0" />

            {/* List items connected */}
            <div className="flex flex-col gap-6 w-full relative z-10">
              {disqualifiers.map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -2 }}
                  className="relative w-full bg-white border border-red-100 rounded-2xl py-5 px-8 pl-12 shadow-sm hover:shadow-md transition-all duration-300 flex items-center min-h-[72px]"
                >
                  {/* Solid red/coral dot sitting on the left edge, overlapping */}
                  <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-red-500 shadow-sm flex-shrink-0" />
                  
                  {/* Text inside — dark navy, medium weight, left-aligned, vertically centered */}
                  <span className="font-medium text-slate-900 text-sm sm:text-base text-left leading-tight">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
