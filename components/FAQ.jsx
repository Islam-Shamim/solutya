"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is SaaS and how does it benefit my business?",
      answer:
        "Software as a Service (SaaS) is a cloud-based service where instead of downloading software to your desktop PC or business network to run and update, you instead access an application via an internet browser. The software application runs on a SaaS provider's servers, and your data is saved in the provider's data center. Benefits include lower upfront costs, automatic updates, accessibility from any device, and easy scalability.",
    },
    {
      question: "How secure is your SaaS platform?",
      answer:
        "We implement enterprise-grade security measures including end-to-end encryption, regular security audits, and compliance with industry standards. All data is stored in secure, redundant data centers with 24/7 monitoring. We also provide role-based access controls and two-factor authentication to ensure your business data remains protected.",
    },
    {
      question: "Can I integrate your solution with my existing tools?",
      answer:
        "Yes, our platform is designed with integration in mind. We offer robust APIs and pre-built connectors for popular business tools such as CRM systems, marketing platforms, accounting software, and more. Our team can also work with you to develop custom integrations for specialized systems unique to your business.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We provide comprehensive support including 24/7 technical assistance via email, chat, and phone for all paid plans. Our Enterprise clients receive dedicated account managers. We also offer extensive documentation, video tutorials, and regular webinars to help you maximize the value of our platform. Additionally, we provide onboarding services to ensure a smooth transition.",
    },
    {
      question: "How does billing work?",
      answer:
        "We offer flexible monthly and annual billing options. Annual plans come with a significant discount. You can upgrade, downgrade, or cancel your subscription at any time. We charge based on your chosen plan and the number of users. There are no hidden fees, and you'll receive itemized invoices for all charges.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about our software services.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full text-left bg-card p-5 rounded-lg flex justify-between items-center transition-all duration-300 ${
                  activeIndex === index
                    ? "shadow-lg border-primary border"
                    : "border border-gray-800/50 hover:border-gray-700"
                }`}
              >
                <span className="font-semibold text-lg pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-300 flex-shrink-0 ${
                    activeIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-card/50 border border-t-0 border-gray-800/50 rounded-b-lg"
                  >
                    <div className="p-5 text-gray-300">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-40 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default FAQ;