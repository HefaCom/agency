"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-[#0A051E]/40 backdrop-blur-xl border border-white/10 rounded-full px-6">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">
                <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-sm transform rotate-45" />
              </div>
              <span className="text-xl font-semibold text-white">AI Agency</span>
            </Link>

            {/* Center Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <Link href="/about" className="nav-button-ghost nav-button">
                About
              </Link>
              <Link href="/services" className="nav-button-ghost nav-button">
                Services
              </Link>
              <Link href="/pricing" className="nav-button-ghost nav-button">
                Pricing
              </Link>
              <Link href="#" className="nav-button-ghost nav-button">
                Blog
              </Link>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-3">
              <Link href="#" className="nav-button-ghost nav-button">
                <div className="flex items-center space-x-1">
                  <ShoppingCart className="w-4 h-4 opacity-70" />
                  <span className="text-xs bg-purple-600 rounded-full w-4 h-4 flex items-center justify-center">
                    0
                  </span>
                </div>
              </Link>
              <Link 
                href="#" 
                className="px-4 py-1.5 bg-white text-[#0A051E] rounded-full text-sm font-medium transition-all duration-200 hover:bg-white/90"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}