"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Database, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Our Team", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact Us", href: "#" },
      ],
    },
    {
      title: "Our Work",
      links: [
        { name: "Services", href: "#" },
        { name: "Case Studies", href: "#" },
        { name: "Portfolio", href: "#" },
        { name: "Testimonials", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "Help Center", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Facebook size={18} />, href: "#" },
    { icon: <Twitter size={18} />, href: "#" },
    { icon: <Instagram size={18} />, href: "#" },
    { icon: <Linkedin size={18} />, href: "#" },
  ];

  const contactInfo = [
    { 
      icon: <MapPin size={18} />, 
      text: "123 Innovation Street, Tech City, TC 10010" 
    },
    { 
      icon: <Phone size={18} />, 
      text: "+1 (555) 123-4567" 
    },
    { 
      icon: <Mail size={18} />, 
      text: "info@isaas.com" 
    },
  ];

  return (
    <footer className="bg-card/50 pt-16 border-t border-gray-800/50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <span className="bg-primary/20 p-2 rounded-lg">
                <Database className="h-6 w-6 text-primary" />
              </span>
              <span className="text-xl font-bold">iSaaS</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Providing innovative software solutions to help businesses grow,
              scale, and succeed in today competitive digital landscape.
            </p>

            <div className="space-y-3 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 text-gray-300">
                  <span className="text-primary">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="bg-muted w-8 h-8 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <span className="text-primary">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800/50 mt-12 py-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} iSaaS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;