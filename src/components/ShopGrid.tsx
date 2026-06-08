"use client";

import React, { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import { products } from "@/app/data/products";
import { Plus, Sparkles } from "lucide-react";

const CATEGORIES = ["All", "Butters & Creams", "Sun & Tanning", "Soaps & Oils"];

export default function ShopGrid() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter((p) => p.category === selectedCategory);

  return (
    <section id="shop" className="py-24 px-4 bg-brand-light-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-amber/5 border border-brand-amber/10 text-brand-amber mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase">
              Curated Collection
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-brand-amber mt-2 leading-tight">
            Shop All Products
          </h2>
          <p className="text-brand-muted text-base md:text-lg font-light mt-4 max-w-xl mx-auto leading-relaxed">
            Nourish your skin with our premium organic formulas. Ethically sourced, scientifically optimized.
          </p>
        </div>

        {/* Category Tab Filter (Increased Font Size) */}
        <div className="flex justify-start md:justify-center overflow-x-auto no-scrollbar gap-3 mb-16 pb-2 px-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-7 py-3 rounded-full text-xs md:text-sm font-semibold tracking-wider uppercase transition-luxury whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? "bg-brand-amber text-brand-cream shadow-md shadow-brand-amber/10"
                  : "bg-white text-brand-amber border border-brand-amber/10 hover:border-brand-amber hover:bg-brand-amber/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Shop Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((p, idx) => {
            // Asymmetric layout logic for premium editorial styling:
            // Every alternate product gets a slightly taller padding or top displacement on desktop
            const isAsymmetric = idx % 2 === 1;
            
            return (
              <div
                key={p.id}
                className={`group flex flex-col justify-between bg-white rounded-2xl border border-brand-amber/5 overflow-hidden transition-luxury hover:shadow-[0_15px_30px_rgba(180,83,9,0.06)] hover:-translate-y-1 ${
                  isAsymmetric ? "lg:mt-4" : ""
                }`}
              >
                {/* Product Image */}
                <div className="relative aspect-square w-full overflow-hidden bg-brand-cream">
                  <img
                    src={`/products/${p.id}.jpg`}
                    alt={p.name}
                    className="h-full w-full object-contain p-3 group-hover:scale-105 transition-luxury duration-700"
                    loading="lazy"
                  />
                  {/* Subtle warm amber/bronze overlay tint */}
                  <div className="absolute inset-0 bg-brand-amber/10 mix-blend-color group-hover:bg-brand-amber/5 transition-luxury pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/30 via-transparent to-transparent opacity-80 pointer-events-none" />

                  {/* Best Seller Badge */}
                  {p.isBestSeller && (
                    <div className="absolute top-4 left-4 bg-brand-badge text-brand-amber text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-sm">
                      Best Seller
                    </div>
                  )}

                  {/* Quick Add overlay button */}
                  <button
                    onClick={() => addToCart(p)}
                    className="absolute bottom-4 right-4 p-3 bg-brand-amber hover:bg-brand-hover text-brand-cream rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-luxury shadow-md cursor-pointer hidden md:flex"
                    aria-label={`Add ${p.name} to cart`}
                  >
                    <Plus className="h-5 w-5 stroke-[2]" />
                  </button>
                </div>

                {/* Product Info (Increased Font Sizes) */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <span className="text-[10px] font-semibold text-brand-amber tracking-widest uppercase block">
                      {p.category}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-brand-charcoal leading-snug group-hover:text-brand-amber transition-luxury">
                      {p.name}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between mt-5 pt-3 border-t border-brand-amber/5">
                    <span className="font-serif text-xl font-semibold text-brand-amber">
                      ${p.price}.00
                    </span>
                    
                    {/* Mobile visible / Quick Add */}
                    <button
                      onClick={() => addToCart(p)}
                      className="md:hidden flex items-center gap-1.5 px-4 py-2.5 bg-brand-amber hover:bg-brand-hover text-brand-cream text-xs font-semibold tracking-wider uppercase rounded-full transition-luxury cursor-pointer"
                    >
                      <Plus className="h-4 w-4 stroke-[2]" />
                      Add
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
