"use client";

import React from "react";
import { CartProvider } from "@/app/context/CartContext";
import Navbar from "@/components/Navbar";
import MobileTabBar from "@/components/MobileTabBar";
import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import GlowGuide from "@/components/GlowGuide";
import ShopGrid from "@/components/ShopGrid";
import CartDrawer from "@/components/CartDrawer";
import { Heart } from "lucide-react";

export default function Home() {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen bg-brand-cream relative pb-16 md:pb-0">
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <Hero />
          <BrandStory />
          <GlowGuide />
          <ShopGrid />
        </main>

        {/* Footer */}
        <footer className="bg-brand-charcoal text-brand-cream/80 py-12 px-4 border-t border-brand-amber/10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="space-y-4 flex flex-col items-center md:items-start">
              <div className="flex items-center gap-3">
                <img
                  src="/logo.jpg"
                  alt="Bella Africano Footer Logo"
                  className="h-10 w-10 object-cover rounded-full border border-brand-cream/10"
                />
                <h3 className="font-serif text-xl font-bold tracking-wide text-brand-cream">
                  Bella Africano
                </h3>
              </div>
              <p className="text-xs text-brand-cream/60 font-light leading-relaxed max-w-xs mx-auto md:mx-0">
                Premium, natural luxury skincare rooted in African botanicals. Crafted for modern skin with highly intentional formulas.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-brand-cream">
                Quick Links
              </h4>
              <ul className="text-xs space-y-2 font-light">
                <li>
                  <a href="#home" className="hover:text-brand-amber transition-luxury">Home</a>
                </li>
                <li>
                  <a href="#shop" className="hover:text-brand-amber transition-luxury">Shop All</a>
                </li>
                <li>
                  <a href="#glow-guide" className="hover:text-brand-amber transition-luxury">Glow Guide</a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-brand-cream">
                Customer Care
              </h4>
              <p className="text-xs font-light leading-relaxed text-brand-cream/60">
                Have questions about our regimens? Contact our skincare experts directly on WhatsApp at +961 03 935 465 for advice and orders.
              </p>
              <div className="flex justify-center md:justify-start gap-1 items-center text-xs text-brand-cream/60 font-light pt-2">
                <span>Made with</span>
                <Heart className="h-3 w-3 text-brand-amber fill-brand-amber" />
                <span>for healthy, natural skin.</span>
              </div>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-brand-cream/10 text-center text-[10px] text-brand-cream/40 font-light">
            &copy; 2026 Bella Africano. All rights reserved. Denominated in USD ($).
          </div>
        </footer>

        {/* Global Floating Overlays */}
        <CartDrawer />
        <MobileTabBar />
      </div>
    </CartProvider>
  );
}
