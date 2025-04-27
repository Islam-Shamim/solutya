"use client";

import { motion } from "framer-motion";
import { PcCase, Shield, Zap, BarChart } from "lucide-react";

const CoreFeatures = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Fast Results",
      description:
        "Get quick insights and implement changes rapidly with our high-performance platform.",
    },
    {
      icon: <PcCase className="h-8 w-8" />,
      title: "Easy Setup",
      description:
        "Quick and simple onboarding process with minimal technical knowledge required.",
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "API Integration",
      description:
        "Seamlessly connect with your existing tools through our robust API system.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure Data",
      description:
        "Enterprise-grade security measures to protect your sensitive business information.",
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
    <section id="features" className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-800 to-purple-900 text-white">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-primary">
            Core Features
          </h2>
          <p className="text-gray-200 max-w-3xl mx-auto text-lg md:text-xl">
            Our software provides powerful features designed to enhance your
            business operations and drive growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 hover:shadow-2xl hover:border-primary hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-center w-20 h-20 bg-primary/30 rounded-full mb-6 mx-auto">
                <div className="text-primary">{feature.icon}</div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-center text-lg">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse -z-10"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse -z-10"></div>
    </section>
  );
};

export default CoreFeatures;