"use client";

import React from "react";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/app/context/CartContext";

export default function Navbar() {
  const { cartCount, setIsCartOpen } = useCart();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-header transition-luxury">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between relative">
          {/* Logo */}
          <div 
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2.5 cursor-pointer hover:opacity-90 transition-luxury z-10"
          >
            <img
              src="/logo.jpg"
              alt="Bella Africano Logo"
              className="h-9 w-9 object-cover rounded-full border border-brand-amber/10 shadow-sm"
            />
            <span className="font-serif text-2xl font-bold tracking-wide text-brand-amber">
              Bella Africano
            </span>
          </div>

          {/* Desktop Nav Links (Perfectly Centered) */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-10 text-base font-medium text-brand-charcoal">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-brand-amber cursor-pointer transition-luxury relative py-2 group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-amber transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("shop")}
              className="hover:text-brand-amber cursor-pointer transition-luxury relative py-2 group"
            >
              Shop All
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-amber transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("glow-guide")}
              className="hover:text-brand-amber cursor-pointer transition-luxury relative py-2 group"
            >
              Glow Guide
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-amber transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* Cart Trigger Icon */}
          <div className="flex items-center justify-end z-10">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full hover:bg-brand-amber/5 text-brand-charcoal hover:text-brand-amber transition-luxury cursor-pointer"
              aria-label="Open shopping cart"
            >
              <ShoppingBag className="h-6 w-6 stroke-[1.5]" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-brand-amber text-[10px] font-bold text-white ring-2 ring-brand-cream animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
