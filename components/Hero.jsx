"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
    },
  };

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      <div className="container-custom relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.h1 variants={itemVariants} className="mb-6">
              Get Best Software{" "}
              <span className="gradient-text">Service For Your</span> Business
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Boost your startup with cutting-edge SaaS solutions designed to
              increase productivity, streamline operations and drive growth.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href="#contact" className="btn-primary group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="btn-outline">
                Learn More
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-2xl"></div>
              <div className="relative">
                <Image
                  src="https://images.pexels.com/photos/8388229/pexels-photo-8388229.jpeg"
                  alt="Dashboard Analytics"
                  width={600}
                  height={450}
                  className="rounded-xl shadow-xl mx-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/3 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;