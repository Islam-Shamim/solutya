"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const Pricing = () => {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: "Basic",
      monthlyPrice: 20,
      annualPrice: 15,
      features: [
        "Access to basic features",
        "Up to 5 team members",
        "5GB storage space",
        "Basic analytics",
        "24/7 Email support",
      ],
      recommended: false,
    },
    {
      name: "Pro",
      monthlyPrice: 40,
      annualPrice: 30,
      features: [
        "Access to all features",
        "Up to 20 team members",
        "50GB storage space",
        "Advanced analytics",
        "24/7 Priority support",
        "Custom integrations",
        "Advanced security",
      ],
      recommended: true,
    },
    {
      name: "Enterprise",
      monthlyPrice: 80,
      annualPrice: 60,
      features: [
        "Access to all features",
        "Unlimited team members",
        "500GB storage space",
        "Advanced analytics & reports",
        "24/7 Premium support",
        "Custom integrations",
        "Advanced security",
        "Dedicated account manager",
        "Custom branding options",
      ],
      recommended: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="pricing" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pricing Plan</h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business needs with our flexible
            pricing options. All plans include our core features.
          </p>

          {/* Billing toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span
              className={`text-sm font-medium ${
                !annual ? "text-white" : "text-gray-400"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative w-16 h-8 bg-card rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            >
              <span
                className={`absolute left-1 top-1 bg-primary w-6 h-6 rounded-full transition-transform duration-300 transform ${
                  annual ? "translate-x-8" : ""
                }`}
              ></span>
            </button>
            <span
              className={`text-sm font-medium ${
                annual ? "text-white" : "text-gray-400"
              }`}
            >
              Yearly{" "}
              <span className="text-xs text-primary">Save 25%</span>
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-card rounded-xl shadow-lg border ${
                plan.recommended
                  ? "border-primary pricing-active relative"
                  : "border-gray-800/50 hover:border-gray-700/70"
              } transition-all duration-300 overflow-hidden`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0">
                  <div className="bg-primary text-white text-xs font-bold px-4 py-1 uppercase transform rotate-0 origin-top-right">
                    Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    ${annual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-400 ml-2">/ month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg transition-colors ${
                    plan.recommended
                      ? "bg-primary hover:bg-primary/90 text-white"
                      : "bg-gray-800 hover:bg-gray-700 text-white"
                  }`}
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Pricing;