import React from "react";
import HeroSection from "./components/HeroSection";
import TestimonialsSection from "./components/TestimonialsSection";
import BeforeAfterSection from "./components/BeforeAfterSection";
import WhatWillChangeSection from "./components/WhatWillChangeSection";
import WhoThisHelpsSection from "./components/WhoThisHelpsSection";
import WhatWeCoverSection from "./components/WhatWeCoverSection";
import FaqSection from "./components/FaqSection";
import StickyElements from "./components/StickyElements";
import { Sparkles } from "lucide-react";

export default function App() {
  const handleOpenApply = () => {
    // Fire Meta Pixel Lead event
    if (typeof window !== "undefined" && (window as any).fbq) {
      try {
        (window as any).fbq("track", "Lead");
      } catch (err) {
        console.error("Meta Pixel Error:", err);
      }
    }
    // Open the booking link directly in a new tab
    window.open("https://scale100million.zohobookings.in/#/300029000000208032", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-red-500 selection:text-white pb-32">
      {/* Decorative Top Accent Line */}
      <div className="h-1.5 w-full bg-gradient-to-r from-red-600 via-blue-600 to-indigo-600" />

      {/* Main Content Sections assembled in order */}
      <main className="w-full">
        {/* SECTION 1 — HERO */}
        <HeroSection onOpenApply={handleOpenApply} />

        {/* SECTION 2 — TESTIMONIALS */}
        <TestimonialsSection onOpenApply={handleOpenApply} />

        {/* SECTION 4 — BEFORE / AFTER SYSTEM */}
        <BeforeAfterSection onOpenApply={handleOpenApply} />

        {/* SECTION 5 — WHAT WILL CHANGE */}
        <WhatWillChangeSection onOpenApply={handleOpenApply} />

        {/* SECTION 6 — WHO THIS HELPS */}
        <WhoThisHelpsSection onOpenApply={handleOpenApply} />

        {/* SECTION 7 — WHAT WE WILL COVER */}
        <WhatWeCoverSection />

        {/* SECTION 8 — FAQ */}
        <FaqSection />
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 border-t border-gray-800 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center gap-2 mb-4">
            <span className="text-white font-bold tracking-tight font-display text-lg">
              Scale100Million.com
            </span>
          </div>
          <p className="text-xs max-w-xl mx-auto leading-relaxed text-gray-500">
            Disclaimer: Earnings and income representations made by us, our clients, or partners are aspirational statements only of your potential. Results depend on your offer, execution, market conditions, and ad spend. We do not guarantee specific financial results. This site is not affiliated with or endorsed by Meta or Facebook.
          </p>
          <p className="text-xs text-gray-600 mt-6">
            © 2026 Scale100Million.com. All rights reserved. All trademarks are properties of their respective owners.
          </p>
        </div>
      </footer>

      {/* STICKY COUNTDOWN & CTA BUTTON ELEMENTS */}
      <StickyElements onOpenApply={handleOpenApply} />
    </div>
  );
}

