import React from "react";
import { CheckCircle2, Award, Zap, HelpCircle, Star, Compass } from "lucide-react";
import { motion } from "motion/react";

export default function WhatWeCoverSection() {
  const coverTopics = [
    {
      title: "How to leverage AI agents to scale your business",
      desc: "Deploy smart AI agents to automate cold-outreach, lead qualifying, booking confirmations, and routine admin operations.",
      icon: <Zap className="h-4 w-4 text-purple-600" />
    },
    {
      title: "How to build a growth business rather than a survival business",
      desc: "Shift your daily workflow from fire-fighting and manual tracking to predictable lead pipelines and high-ticket sales loops.",
      icon: <Award className="h-4 w-4 text-purple-600" />
    },
    {
      title: "Characteristics of growth and survival businesses",
      desc: "Analyze metrics, churn values, pipeline conversion rates, and exact organizational systems that define standard scaling barriers.",
      icon: <Compass className="h-4 w-4 text-purple-600" />
    },
    {
      title: "3 Reasons why business owners get stuck in survival mode",
      desc: "Address micro-management traps, fragmented traffic sources, and reliance on chaotic manual client chasing instead of robust VSLs.",
      icon: <HelpCircle className="h-4 w-4 text-purple-600" />
    },
    {
      title: "Focus areas to build a growth business",
      desc: "Implement modern paid ads, high-ticket automated follow-up sequences, instant stripe payment routing, and streamlined client delivery.",
      icon: <Star className="h-4 w-4 text-purple-600" />
    }
  ];

  return (
    <section className="py-6 sm:py-12 md:py-16 bg-white px-4 border-b border-gray-100">
      <div className="max-w-4xl mx-auto">
        
        {/* HEADING */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 text-center font-display leading-tight max-w-2xl mx-auto mb-4">
          🚀 What We Will Cover in Your <span className="text-purple-600">1-1 Consultation</span>
        </h2>

        {/* SUBLINE */}
        <p className="text-sm sm:text-base text-gray-500 text-center max-w-2xl mx-auto mb-6 sm:mb-12 font-medium">
          These strategies apply to all online service businesses — no matter your industry or team size.
        </p>

        {/* VERTICAL TIMELINE LAYOUT */}
        <div className="relative pl-8 sm:pl-12 max-w-2xl mx-auto">
          
          {/* Timeline track line */}
          <div className="absolute top-4 bottom-4 left-[15px] sm:left-[21px] w-0.5 bg-purple-100" />

          <div className="space-y-8">
            {coverTopics.map((topic, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-start gap-4 sm:gap-6"
              >
                {/* Purple check icon circle */}
                <div className="absolute -left-[33px] sm:-left-[43px] mt-1 flex items-center justify-center z-10">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-100 border-2 border-purple-600 flex items-center justify-center text-purple-600 shadow-sm">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 fill-current" />
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 bg-white border border-gray-100/90 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-purple-100 transition-all text-left">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="p-1 rounded-md bg-purple-50">
                      {topic.icon}
                    </span>
                    <h4 className="font-extrabold text-gray-900 text-sm sm:text-base font-display">
                      {topic.title}
                    </h4>
                  </div>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed pl-7">
                    {topic.desc}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
