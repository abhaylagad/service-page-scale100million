import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: "Who is this for?",
      answer: "This is specifically designed for Agency Owners, Coaches, Consultants, and Online Service Business Owners who are currently generating between ₹1L to ₹3L per month, but are stuck due to manual lead generation, unstable client acquisition, or administrative overload, and want a predictable, automated system to scale to ₹10L/month (₹1–2 Crore/Year)."
    },
    {
      question: "How is this different from other products?",
      answer: "Unlike standard courses that give you passive pre-recorded content and generic blueprints, we offer a completely Done-For-You (DFY) partnership. We write your VSL scripts, build your high-converting 1-page optin landers, integrate your custom AI automated workflows, and build out your automatic booking backend. We work side-by-side with you until you hit your scaling target."
    },
    {
      question: "Is there a guarantee?",
      answer: "Yes, we stand behind our system with a complete 'Or You Don't Pay' performance alignment. We establish a clear timeline and milestone target for your qualified booked calls and revenue. If we do not hit those targets together, you don't pay a single rupee. We assume the operational risk so you can scale with absolute peace of mind."
    },
    {
      question: "When can I access the bonuses?",
      answer: "Immediately after your 1-1 Qualifying Consultation, if you are accepted into the partnership program. We will hand you the direct black-book blueprint, our high-ticket sales script assets, and our custom AI agent prompt scripts to optimize your outreach on day one."
    },
    {
      question: "What if I am just starting out?",
      answer: "If you are completely new without an offer or proof of concept, this qualifying consultation might be too advanced for you. However, if you are a skilled professional or coach with a validated service or niche stuck at the initial revenue stage, we can help you fast-track the system setup to bypass months of trial and error."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-6 sm:py-12 md:py-20 bg-gray-50/50 px-4 border-b border-gray-100">
      <div className="max-w-3xl mx-auto">
        
        {/* HEADING */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 text-center font-display leading-tight mb-6 sm:mb-12">
          Frequently Asked Questions
        </h2>

        {/* ACCORDION CONTAINER */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:border-gray-300 transition-all"
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-3 pr-4">
                    <HelpCircle className="h-5 w-5 text-gray-400 shrink-0" />
                    <span className="font-extrabold text-gray-900 text-sm sm:text-base leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 rounded-full p-1 bg-gray-50 text-gray-500"
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-6 md:px-6 md:pb-6 text-gray-600 text-xs sm:text-sm leading-relaxed border-t border-gray-50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
