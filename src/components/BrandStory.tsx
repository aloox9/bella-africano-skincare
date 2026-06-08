"use client";

import React from "react";
import { Leaf, Award, Heart } from "lucide-react";

export default function BrandStory() {
  return (
    <section className="bg-brand-hover border-y border-brand-amber/15 py-24 px-4 shadow-inner">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="sr-only">Our Brand Values</h2>
        
        {/* Core Narrative (High contrast cream text) */}
        <p className="font-serif text-2xl md:text-4xl font-light text-brand-cream leading-relaxed max-w-4xl mx-auto italic">
          &ldquo;Rooted in African botanicals, crafted for modern skin. Every ingredient is natural, every formula intentional.&rdquo;
        </p>

        {/* Key Benefits Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 max-w-5xl mx-auto text-center">
          <div className="flex flex-col items-center p-4">
            <div className="p-4 bg-white/10 text-brand-cream rounded-full mb-4 border border-white/5">
              <Leaf className="h-7 w-7 stroke-[1.5]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-brand-cream mb-2">100% Raw Ingredients</h3>
            <p className="text-sm text-brand-cream/75 font-sans font-light leading-relaxed">Ethically sourced directly from local cooperatives across Africa.</p>
          </div>

          <div className="flex flex-col items-center p-4">
            <div className="p-4 bg-white/10 text-brand-cream rounded-full mb-4 border border-white/5">
              <Award className="h-7 w-7 stroke-[1.5]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-brand-cream mb-2">Premium Luxury</h3>
            <p className="text-sm text-brand-cream/75 font-sans font-light leading-relaxed">Meticulously refined for highly potent skin results.</p>
          </div>

          <div className="flex flex-col items-center p-4">
            <div className="p-4 bg-white/10 text-brand-cream rounded-full mb-4 border border-white/5">
              <Heart className="h-7 w-7 stroke-[1.5]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-brand-cream mb-2">Cruelty-Free & Pure</h3>
            <p className="text-sm text-brand-cream/75 font-sans font-light leading-relaxed">Free from toxic sulfates, parabens, and synthetic additives.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
