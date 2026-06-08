"use client";

import React from "react";
import { Home, ShoppingBag, Sparkles, Compass } from "lucide-react";
import { useCart } from "@/app/context/CartContext";

export default function MobileTabBar() {
  const { cartCount, setIsCartOpen } = useCart();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-brand-cream/95 backdrop-blur-md border-t border-brand-amber/10 shadow-[0_-4px_20px_-4px_rgba(180,83,9,0.08)]">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto px-4">
        <button
          onClick={() => scrollToSection("home")}
          className="flex flex-col items-center justify-center w-full h-full text-brand-charcoal hover:text-brand-amber transition-luxury cursor-pointer"
        >
          <Home className="h-5 w-5 stroke-[1.5]" />
          <span className="text-[10px] mt-1 font-medium tracking-wide">Home</span>
        </button>

        <button
          onClick={() => scrollToSection("shop")}
          className="flex flex-col items-center justify-center w-full h-full text-brand-charcoal hover:text-brand-amber transition-luxury cursor-pointer"
        >
          <Compass className="h-5 w-5 stroke-[1.5]" />
          <span className="text-[10px] mt-1 font-medium tracking-wide">Shop</span>
        </button>

        <button
          onClick={() => scrollToSection("glow-guide")}
          className="flex flex-col items-center justify-center w-full h-full text-brand-charcoal hover:text-brand-amber transition-luxury cursor-pointer"
        >
          <Sparkles className="h-5 w-5 stroke-[1.5]" />
          <span className="text-[10px] mt-1 font-medium tracking-wide">Glow Guide</span>
        </button>

        <button
          onClick={() => setIsCartOpen(true)}
          className="relative flex flex-col items-center justify-center w-full h-full text-brand-charcoal hover:text-brand-amber transition-luxury cursor-pointer"
        >
          <div className="relative">
            <ShoppingBag className="h-5 w-5 stroke-[1.5]" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-brand-amber text-[9px] font-bold text-white ring-2 ring-brand-cream animate-pulse">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[10px] mt-1 font-medium tracking-wide">Cart</span>
        </button>
      </div>
    </div>
  );
}
