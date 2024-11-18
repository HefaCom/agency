"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const YouTubeVideo = dynamic(() => import("./YouTubeVideo").then(mod => mod.YouTubeVideo), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gray-900/50 animate-pulse" />
  )
});

export function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-overlay opacity-30" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative"
      >
        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight tracking-tight text-white">
          Empowering Businesses
          <br />
          with AI & Automation
        </h1>

        {/* Purple Gradient Area */}
        <div className="relative">
          <div className="absolute inset-x-0 top-0 -mt-20 h-[500px] w-full">
            <div className="absolute inset-0 bg-gradient-radial" style={{
              transform: 'scale(1.5)',
              opacity: '1'
            }} />
          </div>
          
          <div className="relative">
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transform your operations with AI-driven solutions that optimize workflows, enhance decision-making, and unlock growth. From bespoke automation to cutting-edge language models, we deliver tools designed to scale your business for the future.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <Link
                href="https://calendly.com/themetaversecompany/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full px-8 py-4 font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative"
      >
        <div className="relative rounded-2xl overflow-hidden dark-card dashboard-glow">
          {/* Window Controls */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-[#1a1825] flex items-center px-4 space-x-2 z-10">
            <div className="w-3 h-3 rounded-full bg-[#FF605C]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD44]" />
            <div className="w-3 h-3 rounded-full bg-[#00CA4E]" />
          </div>

          {/* Video Container */}
          <div className="pt-8 relative w-full aspect-video">
            <YouTubeVideo videoId="JlagLtjkb1I" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}