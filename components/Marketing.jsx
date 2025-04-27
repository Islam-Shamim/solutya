"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const Marketing = () => {
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

  const features = [
    "Optimize campaigns for higher conversion",
    "Detailed analytics and reporting dashboard",
    "A/B testing for maximum efficiency",
    "Intelligent audience targeting algorithms",
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Take Your Marketing{" "}
              <span className="gradient-text">To The Next Level</span>
            </h2>
            <p className="text-gray-300 mb-8">
              Our SaaS platform provides intelligent marketing tools that help
              you automate campaigns, optimize conversions, and understand your
              audience better. Use data-driven insights to make smarter
              decisions.
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-4 mb-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              variants={itemVariants}
              href="#"
              className="btn-primary inline-block"
            >
              Get Started
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="order-1 md:order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-2xl"></div>
              <div className="relative bg-card rounded-xl p-6 shadow-xl">
                <Image
                  src="https://images.pexels.com/photos/8348457/pexels-photo-8348457.jpeg"
                  alt="Marketing Analytics"
                  width={500}
                  height={400}
                  className="rounded-lg w-full h-auto"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 h-12 w-12 rounded-full bg-primary"></div>
              <div className="absolute -top-6 -left-6 h-12 w-12 rounded-full bg-secondary"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Marketing;