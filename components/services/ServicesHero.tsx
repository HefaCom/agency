"use client";

import { motion } from "framer-motion";
import { Bot, Workflow, UserCog } from "lucide-react";
import Link from "next/link";

const highlights = [
  {
    icon: Bot,
    title: "Custom AI Development",
    description: "Bespoke AI models built to solve your unique business challenges."
  },
  {
    icon: Workflow,
    title: "Automation Workflows",
    description: "End-to-end automation of repetitive tasks for unmatched efficiency."
  },
  {
    icon: UserCog,
    title: "AI Agents",
    description: "Intelligent agents trained and fine-tuned for specific business functions."
  }
];

export function ServicesHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A051E] to-[#120B2E]" />
      <div className="absolute inset-0 grid-overlay opacity-10" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-purple-600/30 rounded-full filter blur-[128px] pointer-events-none" />
      <div className="absolute bottom-20 -right-20 w-72 h-72 bg-pink-600/30 rounded-full filter blur-[128px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Revolutionizing Businesses with<br />AI-Powered Solutions
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            From AI Development to Automation, we help businesses of all sizes adopt intelligent solutions 
            that streamline operations, cut costs, and drive innovation.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              Get a Free Consultation
            </Link>
            <Link
              href="#services"
              className="px-8 py-4 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-200"
            >
              Explore Our Services
            </Link>
          </div>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-20 group-hover:opacity-30 blur transition-all duration-200" />
              <div className="relative bg-white/5 p-8 rounded-2xl hover:bg-white/10 transition-all duration-200">
                <item.icon className="w-12 h-12 text-purple-500 mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 