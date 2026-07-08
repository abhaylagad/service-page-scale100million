import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2, AlertCircle } from "lucide-react";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ApplicationModal({ isOpen, onClose }: ApplicationModalProps) {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [status, setStatus] = useState<"question" | "qualified" | "unqualified">("question");

  const options = [
    "Below ₹50,000",
    "₹50,000 to ₹1 Lakh",
    "₹1 Lakh to ₹3 Lakh",
    "Above ₹3 Lakh"
  ];

  const handleReset = () => {
    setSelectedOption("");
    setStatus("question");
  };

  const handleClose = () => {
    onClose();
    // Wait for the exit animation to finish before resetting the modal state
    setTimeout(() => {
      handleReset();
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedOption) return;

    const isQualified = [
      "₹50,000 to ₹1 Lakh",
      "₹1 Lakh to ₹3 Lakh",
      "Above ₹3 Lakh"
    ].includes(selectedOption);

    if (isQualified) {
      // Fire Meta Pixel Lead event
      if (typeof window !== "undefined" && (window as any).fbq) {
        try {
          (window as any).fbq("track", "Lead");
        } catch (err) {
          console.error("Meta Pixel Error:", err);
        }
      }

      setStatus("qualified");

      // Redirect to Zoho bookings in a new tab
      window.open("https://scale100million.zohobookings.in/#/300029000000208032", "_blank", "noopener,noreferrer");
    } else {
      setStatus("unqualified");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop (Dark overlay behind with 0.7 opacity) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70"
            onClick={handleClose}
          />

          {/* Modal Container: white rounded card, max-width 480px, padding 32px (p-8) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-[480px] bg-white rounded-2xl shadow-2xl p-8 z-10 font-sans border border-gray-100 overflow-y-auto max-h-[90vh]"
            id="qualification-modal"
          >
            {/* Close X Button in Top Right */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
              aria-label="Close modal"
              id="close-modal-x"
            >
              <X className="h-5 w-5" />
            </button>

            {status === "question" && (
              <div>
                {/* Header Section */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 font-display leading-snug pr-6 mb-1 text-left">
                  Quick Check Before You Book
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-gray-500 mb-6 text-left">
                  This call is only for businesses already generating revenue.
                </p>

                {/* Form Section */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <p className="text-sm sm:text-base font-bold text-gray-800 mb-3 text-left">
                    What is your current monthly revenue?
                  </p>

                  {/* Radio buttons options stack */}
                  <div className="space-y-2.5">
                    {options.map((option) => {
                      const isSelected = selectedOption === option;
                      return (
                        <label
                          key={option}
                          className={`flex items-center gap-3 w-full p-4 rounded-xl border text-sm font-semibold text-left transition-all cursor-pointer select-none ${
                            isSelected
                              ? "border-red-600 bg-red-50/40 text-red-950"
                              : "border-gray-200 hover:border-gray-300 hover:bg-gray-50/50 text-gray-700"
                          }`}
                        >
                          <input
                            type="radio"
                            name="revenue"
                            value={option}
                            checked={isSelected}
                            onChange={() => setSelectedOption(option)}
                            className="h-4 w-4 text-red-600 border-gray-300 focus:ring-red-500 shrink-0"
                          />
                          <span>{option}</span>
                        </label>
                      );
                    })}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={!selectedOption}
                    className="w-full mt-4 bg-red-600 hover:bg-red-700 active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none text-white font-extrabold text-base py-4 rounded-full shadow-lg shadow-red-600/20 cursor-pointer transition-all uppercase tracking-wider text-center"
                    id="eligibility-submit-btn"
                  >
                    Check My Eligibility
                  </button>
                </form>
              </div>
            )}

            {status === "qualified" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-4"
              >
                {/* Green check icon */}
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-green-500">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                {/* Heading */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 font-display mb-2">
                  You Qualify
                </h3>
                {/* Body Text */}
                <p className="text-sm text-gray-600 max-w-sm mx-auto leading-relaxed mb-6">
                  Opening the booking calendar now. Pick a time that works for you.
                </p>

                {/* Confirm/Proceed button */}
                <button
                  onClick={handleClose}
                  className="w-full bg-red-600 hover:bg-red-700 active:scale-[0.99] text-white font-extrabold text-base py-4 rounded-full shadow-lg shadow-red-600/20 cursor-pointer transition-all uppercase tracking-wider text-center"
                >
                  Proceed
                </button>
              </motion.div>
            )}

            {status === "unqualified" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-4"
              >
                {/* Alert/Warning icon */}
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-red-600">
                  <AlertCircle className="h-8 w-8" />
                </div>
                {/* Heading */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 font-display mb-2 leading-tight">
                  This Program Is Not the Right Fit Yet
                </h3>
                {/* Body Text */}
                <p className="text-sm text-gray-600 max-w-sm mx-auto leading-relaxed mb-6">
                  Right now we only work with businesses already at ₹100,000 per month or more. Once you cross that mark, come back and apply. We will be here.
                </p>

                {/* Dismiss Close button */}
                <button
                  onClick={handleClose}
                  className="w-full bg-gray-900 hover:bg-gray-800 active:scale-[0.99] text-white font-extrabold text-base py-4 rounded-full shadow-lg cursor-pointer transition-all uppercase tracking-wider text-center"
                >
                  Close
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
