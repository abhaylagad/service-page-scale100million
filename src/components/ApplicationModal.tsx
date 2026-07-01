import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2, ChevronRight, MessageSquare, Briefcase, TrendingUp, AlertCircle, Sparkles } from "lucide-react";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ApplicationModal({ isOpen, onClose }: ApplicationModalProps) {
  const [step, setStep] = useState(1);
  const [businessType, setBusinessType] = useState("");
  const [revenue, setRevenue] = useState("");
  const [bottleneck, setBottleneck] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const resetForm = () => {
    setStep(1);
    setBusinessType("");
    setRevenue("");
    setBottleneck("");
    setFormData({ name: "", email: "", phone: "" });
    setIsSubmitting(false);
    setIsSuccess(false);
  };

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API storage & success after 1.5 seconds
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black"
            onClick={() => {
              onClose();
              resetForm();
            }}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl z-10 font-sans border border-gray-100"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50/50 px-6 py-4">
              <div className="flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 rounded-full bg-red-600 animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Qualifying Application
                </span>
              </div>
              <button
                onClick={() => {
                  onClose();
                  resetForm();
                }}
                className="rounded-full p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Progress Bar */}
            {!isSuccess && (
              <div className="h-1.5 w-full bg-gray-100">
                <motion.div
                  className="h-full bg-red-600"
                  initial={{ width: "20%" }}
                  animate={{
                    width: `${step === 1 ? 25 : step === 2 ? 50 : step === 3 ? 75 : 95}%`,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            )}

            {/* Content Area */}
            <div className="p-6 md:p-8">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-500">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 font-display">
                    Application Received!
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
                    Amazing! You've taken the first step. Our team will review your application to ensure you're a fit, and we will contact you via WhatsApp/Email within the next 15 minutes.
                  </p>
                  <div className="mt-6 p-4 rounded-xl bg-blue-50/80 border border-blue-100 text-left">
                    <div className="flex gap-2 text-blue-800 font-semibold text-sm items-center">
                      <Sparkles className="h-4 w-4 shrink-0" />
                      What happens next?
                    </div>
                    <p className="text-xs text-blue-700/90 mt-1 leading-relaxed">
                      1. We will verify your business model.<br />
                      2. We'll send you the direct calendar link.<br />
                      3. We'll hop on a short call to map out your custom action plan.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      onClose();
                      resetForm();
                    }}
                    className="mt-6 w-full rounded-xl bg-gray-900 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition-colors cursor-pointer"
                  >
                    Got it, Thank you!
                  </button>
                </motion.div>
              ) : (
                <div>
                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: -20 }}
                    >
                      <h4 className="text-lg font-bold text-gray-900 font-display mb-1 flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-red-600" />
                        Select Your Business Model
                      </h4>
                      <p className="text-xs text-gray-500 mb-4">
                        Choose the primary model that fits your business best.
                      </p>
                      <div className="space-y-3">
                        {["Coaching / Consulting", "Marketing / Creative Agency", "SaaS / Tech Company", "E-commerce Brand", "Other Service Business"].map((type) => (
                          <button
                            key={type}
                            onClick={() => {
                              setBusinessType(type);
                              handleNextStep();
                            }}
                            className={`w-full text-left p-4 rounded-xl border text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                              businessType === type
                                ? "border-red-600 bg-red-50/40 text-red-950"
                                : "border-gray-200 hover:border-gray-400 hover:bg-gray-50 text-gray-700"
                            }`}
                          >
                            <span>{type}</span>
                            <ChevronRight className="h-4 w-4 opacity-50" />
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: -20 }}
                    >
                      <h4 className="text-lg font-bold text-gray-900 font-display mb-1 flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-red-600" />
                        What's your current monthly revenue?
                      </h4>
                      <p className="text-xs text-gray-500 mb-4">
                        This helps us tailor the strategies to your specific scale.
                      </p>
                      <div className="space-y-3">
                        {["Under ₹1L / month", "₹1L – ₹3L / month", "₹3L – ₹10L / month", "₹10L – ₹25L / month", "₹25L+ / month"].map((rev) => (
                          <button
                            key={rev}
                            onClick={() => {
                              setRevenue(rev);
                              handleNextStep();
                            }}
                            className={`w-full text-left p-4 rounded-xl border text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                              revenue === rev
                                ? "border-red-600 bg-red-50/40 text-red-950"
                                : "border-gray-200 hover:border-gray-400 hover:bg-gray-50 text-gray-700"
                            }`}
                          >
                            <span>{rev}</span>
                            <ChevronRight className="h-4 w-4 opacity-50" />
                          </button>
                        ))}
                      </div>
                      <button
                        onClick={() => setStep(1)}
                        className="mt-4 text-xs font-semibold text-gray-500 hover:text-gray-800 underline block cursor-pointer"
                      >
                        ← Back
                      </button>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: -20 }}
                    >
                      <h4 className="text-lg font-bold text-gray-900 font-display mb-1 flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-red-600" />
                        What is your biggest business bottleneck?
                      </h4>
                      <p className="text-xs text-gray-500 mb-4">
                        Identify where you are currently getting stuck.
                      </p>
                      <div className="space-y-3">
                        {[
                          "Lead Generation (consistent qualified interest)",
                          "Sales & Conversion (closing premium high-ticket)",
                          "Delivery & Operations (time trapped in client work)",
                          "Team & Hiring (cannot find high-performing talent)",
                          "Systems & Automation (scaling the backend processes)"
                        ].map((bot) => (
                          <button
                            key={bot}
                            onClick={() => {
                              setBottleneck(bot);
                              handleNextStep();
                            }}
                            className={`w-full text-left p-4 rounded-xl border text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                              bottleneck === bot
                                ? "border-red-600 bg-red-50/40 text-red-950"
                                : "border-gray-200 hover:border-gray-400 hover:bg-gray-50 text-gray-700"
                            }`}
                          >
                            <span className="pr-2">{bot}</span>
                            <ChevronRight className="h-4 w-4 opacity-50 shrink-0" />
                          </button>
                        ))}
                      </div>
                      <button
                        onClick={() => setStep(2)}
                        className="mt-4 text-xs font-semibold text-gray-500 hover:text-gray-800 underline block cursor-pointer"
                      >
                        ← Back
                      </button>
                    </motion.div>
                  )}

                  {step === 4 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: -20 }}
                    >
                      <h4 className="text-lg font-bold text-gray-900 font-display mb-1 flex items-center gap-2">
                        <MessageSquare className="h-5 w-5 text-red-600" />
                        Where should we send your custom map?
                      </h4>
                      <p className="text-xs text-gray-500 mb-4">
                        Provide accurate details so our growth specialist can contact you.
                      </p>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
                            Your Full Name
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none text-sm font-medium"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
                            Work Email Address
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none text-sm font-medium"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
                            WhatsApp / Phone Number
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="e.g. +91 98765 43210"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none text-sm font-medium"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full mt-2 rounded-xl bg-red-600 py-3.5 text-sm font-bold text-white hover:bg-red-700 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-red-500/10 disabled:opacity-75"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center gap-2">
                              <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              Analyzing Profile...
                            </span>
                          ) : (
                            <span className="flex items-center gap-1">
                              Submit Application
                              <ChevronRight className="h-4 w-4" />
                            </span>
                          )}
                        </button>
                      </form>
                      <button
                        onClick={() => setStep(3)}
                        className="mt-4 text-xs font-semibold text-gray-500 hover:text-gray-800 underline block cursor-pointer"
                      >
                        ← Back
                      </button>
                    </motion.div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
