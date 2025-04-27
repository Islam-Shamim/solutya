"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import Image from "next/image";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    });
    // Show success message
    alert("Thank you for your message! We'll get back to you soon.");
  };

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
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch With Us</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Have questions or ready to get started? Fill out the form below and
            our team will get back to you promptly.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.form
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            onSubmit={handleSubmit}
            className="bg-card p-8 rounded-xl shadow-lg border border-gray-800/50"
          >
            <div className="mb-8 flex justify-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Full Name*
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-muted border border-gray-800 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Email Address*
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-muted border border-gray-800 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Company Name
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-muted border border-gray-800 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-muted border border-gray-800 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Your Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-muted border border-gray-800 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex justify-center"
            >
              <button
                type="submit"
                className="btn-primary w-full md:w-auto px-8"
              >
                Submit
              </button>
            </motion.div>
          </motion.form>
        </div>
      </div>
      {/* Background decoration */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default ContactForm;