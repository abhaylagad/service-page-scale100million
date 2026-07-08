import React from "react";
import { motion } from "motion/react";

interface TestimonialsSectionProps {
  onOpenApply: () => void;
}

export default function TestimonialsSection({ onOpenApply }: TestimonialsSectionProps) {
  const testimonials = [
    {
      name: "Hiren Thakkar — Brand Buzzar",
      category: "SEO and Digital Marketing Agency",
      before: "Rs.2.5L/month",
      after: "Rs.10L/month",
      story: "An agency doing solid client work but with no consistent pipeline — new business came only through referrals. We built the full acquisition system: sharp positioning, an authority-driven funnel, and Meta ads that filled the calendar. The result was 4x growth, without Hiren chasing a single lead.",
      image: "https://raw.githubusercontent.com/scale100million-prog/my-images/main/hiren.jfif"
    },
    {
      name: "HealthyNation",
      category: "Fitness Agency",
      before: "Rs.2–3L/month",
      after: "Rs.16L/month",
      story: "A fitness agency stuck on referrals with no predictable pipeline. We built their complete engine — VSL funnel, Meta ads, creative testing, and automated follow-up. Today they generate Rs.16 lakh a month, a 5x jump, with zero founder outreach.",
      image: "https://raw.githubusercontent.com/scale100million-prog/my-images/main/indranil%20chakraborty.jpeg"
    },
    {
      name: "Prashant — PowerPro",
      category: "Fitness Agency",
      before: "Rs.3L/month",
      after: "Rs.12L/month",
      story: "A performance marketing agency that got results for clients but couldn't scale its own pipeline. We positioned it around measurable outcomes, built a results-driven funnel, and launched Meta ads that booked qualified prospects. PowerPro scaled 4x on a system that runs without manual outreach.",
      image: "https://raw.githubusercontent.com/scale100million-prog/my-images/main/Akash%20verma.jpeg"
    },
    {
      name: "Sula",
      category: "Fitness and Nutrition Coach",
      before: "Rs.2L/month",
      after: "Rs.6L/month",
      story: "A coach with real results but no system to bring in clients predictably. We built her funnel, launched Meta ads, and set up follow-up automation that kept leads warm. In 6 months her revenue tripled — no longer dependent on referrals.",
      image: "https://raw.githubusercontent.com/scale100million-prog/my-images/main/Rashmi%20Dhankar.jpeg"
    },
    {
      name: "Swar Yoga",
      category: "Yoga and Wellness Coach",
      before: "Rs.2L/month",
      after: "Rs.8L/month",
      story: "A powerful practice held back by a weak business side — inconsistent leads and endless manual outreach. We built the full system: positioning, VSL funnel, targeted Meta ads, and a follow-up sequence that lifted show-up rates. The result was 4x growth on a self-running pipeline.",
      image: "https://raw.githubusercontent.com/scale100million-prog/my-images/main/Screenshot%202026-07-01%20140205.png"
    },
    {
      name: "Arnav Chaturvedi — Conexsent",
      category: "Consulting and Client Services",
      before: "Rs.2L/month",
      after: "Rs.10L/month",
      story: "A service business delivering real results but bottlenecked at the front end, living on referrals. We built the full engine — clear positioning, a proof-driven funnel, and Meta ads that booked decision-makers weekly. In 3 months Conexsent went from Rs.2 lakh to Rs.10 lakh a month.",
      image: "https://raw.githubusercontent.com/scale100million-prog/my-images/main/helsi.jpeg"
    },
    {
      name: "Harsh Patel — Innovate Tech IT",
      category: "IT Services and Placement",
      before: "Rs.5.6L/month",
      after: "Rs.18L/month",
      story: "Solid numbers but flat growth — the team spent more time chasing leads than closing them. We built a complete system: attention-grabbing positioning, a funnel that convinced before the call, and follow-up that kept leads warm. In 4 months the business scaled more than 3x.",
      image: "https://raw.githubusercontent.com/scale100million-prog/my-images/main/happy.jpeg"
    },
    {
      name: "Kartik Trivedi — Sociazy Estate Desk",
      category: "Real Estate",
      before: "Rs.3L/month",
      after: "Rs.9L/month",
      story: "A real estate business running on word of mouth with no steady flow of buyers. We built the full system — buyer-focused positioning, a funnel that booked them, geo-targeted Meta ads, and automated follow-up so no enquiry went cold. In 3 months Sociazy tripled to Rs.9 lakh a month.",
      image: "https://raw.githubusercontent.com/scale100million-prog/my-images/main/prit.jpeg"
    }
  ];

  return (
    <section className="py-6 sm:py-12 md:py-16 bg-white px-4 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
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
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 text-center font-display leading-tight max-w-3xl mb-6 sm:mb-12">
          See How Business Owners Just Like You <span className="text-blue-600">Scaled to 7 Figures</span>
        </h2>

        {/* TESTIMONIALS GRID */}
        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 640px) {
            .testimonial-card-0 { order: 1; }
            .testimonial-card-1 { order: 5; }
            .testimonial-card-2 { order: 6; }
            .testimonial-card-3 { order: 7; }
            .testimonial-card-4 { order: 8; }
            .testimonial-card-5 { order: 2; }
            .testimonial-card-6 { order: 3; }
            .testimonial-card-7 { order: 4; }
          }
        `}} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {testimonials.map((t, idx) => (
            <div 
              key={idx}
              className={`testimonial-card-${idx} bg-white border border-gray-100 rounded-2xl p-6 flex flex-col shadow-sm hover:shadow-md transition-all h-full`}
            >
              {/* Circular image or placeholder at top */}
              {t.image ? (
                <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-200 bg-gray-50 flex items-center justify-center mb-4 self-center">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ) : (
                <div className="w-16 h-16 rounded-full border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center text-gray-400 text-xs font-semibold uppercase tracking-wider mb-4 self-center select-none">
                  photo
                </div>
              )}

              {/* Header Info */}
              <div className="text-center mb-4">
                <h4 className="font-bold text-gray-900 text-base font-display leading-snug">{t.name}</h4>
                <p className="text-xs text-gray-500 mt-1 font-medium">{t.category}</p>
              </div>

              {/* Before & After side-by-side */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-red-50 border border-red-100/50 rounded-xl p-2.5 text-center">
                  <span className="text-[10px] uppercase font-bold text-red-500 tracking-wider block">Before</span>
                  <span className="text-xs sm:text-sm font-bold text-red-700 block mt-0.5">{t.before}</span>
                </div>
                <div className="bg-green-50 border border-green-100/50 rounded-xl p-2.5 text-center">
                  <span className="text-[10px] uppercase font-bold text-green-500 tracking-wider block">After</span>
                  <span className="text-xs sm:text-sm font-bold text-green-700 block mt-0.5">{t.after}</span>
                </div>
              </div>

              {/* Short story */}
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed flex-grow text-left">
                {t.story}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
