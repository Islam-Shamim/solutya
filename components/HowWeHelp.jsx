"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HowWeHelp = () => {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-2xl"></div>
              <Image
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg"
                alt="Business Solutions"
                width={600}
                height={500}
                className="rounded-xl shadow-xl relative z-10"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 h-20 w-20 rounded-full bg-primary/30 backdrop-blur-xl"></div>
            <div className="absolute -top-6 -right-6 h-12 w-12 rounded-full bg-secondary/30 backdrop-blur-xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How We Can Help You{" "}
              <span className="gradient-text">Achieve Your Business Goal</span>
            </h2>
            
            <p className="text-gray-300 mb-8">
              Our platform is designed to streamline your operations, optimize
              workflows, and provide valuable analytics to help you make
              data-driven decisions. With our comprehensive suite of tools, you
              can focus on growing your business while we handle the technical
              aspects.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="bg-card p-4 rounded-lg border border-gray-800/50">
                <h4 className="text-lg font-semibold mb-2">Business Analysis</h4>
                <p className="text-gray-400">
                  We analyze your business processes and identify areas for
                  improvement and automation.
                </p>
              </div>
              
              <div className="bg-card p-4 rounded-lg border border-gray-800/50">
                <h4 className="text-lg font-semibold mb-2">Custom Solutions</h4>
                <p className="text-gray-400">
                  We develop tailored solutions that address your specific
                  business needs and challenges.
                </p>
              </div>
              
              <div className="bg-card p-4 rounded-lg border border-gray-800/50">
                <h4 className="text-lg font-semibold mb-2">Ongoing Support</h4>
                <p className="text-gray-400">
                  We provide continuous support and updates to ensure your
                  systems remain efficient and up-to-date.
                </p>
              </div>
            </div>
            
            <Link href="#" className="btn-primary group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;