"use client";

import { motion } from "framer-motion";
import { Activity, BarChart3, BrainCircuit, Code2, Database, LineChart, Users } from "lucide-react";
import Link from "next/link";

const Services = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const services = [
    {
      icon: <Database className="h-10 w-10" />,
      title: "Big Data Processing",
      description:
        "Process and analyze large datasets to extract valuable insights for your business decisions.",
    },
    {
      icon: <BarChart3 className="h-10 w-10" />,
      title: "Advanced Analytics",
      description:
        "Utilize advanced analytics algorithms to uncover hidden patterns and opportunities in your data.",
    },
    {
      icon: <BrainCircuit className="h-10 w-10" />,
      title: "AI Solutions",
      description:
        "Leverage artificial intelligence to automate processes and make predictive recommendations.",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Customer Insights",
      description:
        "Understand your customers better with comprehensive behavioral analytics and segmentation.",
    },
    {
      icon: <Code2 className="h-10 w-10" />,
      title: "Custom Development",
      description:
        "Tailor-made software solutions designed specifically for your unique business requirements.",
    },
    {
      icon: <Activity className="h-10 w-10" />,
      title: "Performance Monitoring",
      description:
        "Real-time monitoring of your systems to ensure optimal performance and quick issue resolution.",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We provide comprehensive software solutions tailored to meet your
            business needs and help you achieve your goals.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] flex flex-col h-full border border-gray-800/40"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                <div className="text-primary">{service.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6 flex-grow">{service.description}</p>
              <Link
                href="#"
                className="text-primary hover:text-primary/80 font-medium flex items-center mt-auto"
              >
                Learn more
                <LineChart className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="#" className="btn-secondary">
            View All
          </Link>
        </motion.div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-40 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Services;