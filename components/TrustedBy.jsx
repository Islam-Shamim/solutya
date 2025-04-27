"use client";

import { motion } from "framer-motion";

const TrustedBy = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const companyLogos = [
    {
      name: "Company One",
      logo: "COMPANY",
      color: "text-yellow-300",
    },
    {
      name: "Digital Corp",
      logo: "DIGITAL",
      color: "text-purple-400",
    },
    {
      name: "Razortech",
      logo: "RAZORAPP",
      color: "text-orange-400",
    },
    {
      name: "Elita Tech",
      logo: "ELITA",
      color: "text-blue-400",
    },
  ];

  return (
    <section className="py-10 md:py-16">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-10"
        >
          <motion.h3
            variants={itemVariants}
            className="text-lg font-medium text-gray-300 mb-8"
          >
            Trusted by 50+ Companies
          </motion.h3>

          <motion.div
            variants={containerVariants}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
          >
            {companyLogos.map((company, index) => (
              <motion.div
                key={index}
                variants={logoVariants}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              >
                <div className={`font-bold text-xl md:text-2xl ${company.color}`}>
                  {company.logo}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;