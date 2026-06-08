"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/app/context/CartContext";
import { skinGoalBundles, products, Product } from "@/app/data/products";
import { ArrowRight, RotateCcw, ShoppingCart, Sparkles } from "lucide-react";

export default function GlowGuide() {
  const { addBundleToCart } = useCart();
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const [step, setStep] = useState<number>(1);

  const handleSelectGoal = (goal: string) => {
    setSelectedGoal(goal);
    setStep(2);
  };

  const handleReset = () => {
    setSelectedGoal(null);
    setStep(1);
  };

  const currentBundle = skinGoalBundles.find((b) => b.goal === selectedGoal);
  const bundleProducts: Product[] = currentBundle
    ? currentBundle.productIds
        .map((id) => products.find((p) => p.id === id))
        .filter((p): p is Product => !!p)
    : [];

  const bundleTotal = bundleProducts.reduce((sum, p) => sum + p.price, 0);

  const handleAddBundle = () => {
    if (currentBundle) {
      addBundleToCart(currentBundle.productIds);
    }
  };

  return (
    <section id="glow-guide" className="py-24 px-4 bg-brand-cream relative">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-amber/5 border border-brand-amber/10 text-brand-amber mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase">
              Interactive Regimen
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-brand-amber mt-2 leading-tight">
            The Glow Guide
          </h2>
          <p className="text-brand-muted text-base md:text-lg font-light mt-4 max-w-xl mx-auto leading-relaxed">
            Find your custom botanical skincare regimen. Answer one simple question to reveal your expert-curated routine.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-6 md:p-10 shadow-[0_20px_50px_rgba(180,83,9,0.04)] relative overflow-hidden min-h-[420px] flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-amber/5 rounded-full filter blur-xl -mr-16 -mt-16" />
          
          <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                className="flex-1 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] md:text-xs tracking-widest text-brand-amber uppercase font-semibold block mb-2">Step 1 of 2</span>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-brand-amber mb-8">
                    What is your primary skincare goal?
                  </h3>
                  
                  <div className="grid grid-cols-1 gap-4">
                    {skinGoalBundles.map((b) => (
                      <button
                        key={b.goal}
                        onClick={() => handleSelectGoal(b.goal)}
                        className="w-full text-left px-6 py-5 rounded-xl border border-brand-amber/10 hover:border-brand-amber bg-white/40 hover:bg-white/80 transition-luxury flex items-center justify-between group cursor-pointer"
                      >
                        <div>
                          <span className="font-serif text-lg md:text-xl font-bold text-brand-amber group-hover:text-brand-hover block transition-luxury">
                            {b.goal}
                          </span>
                          <span className="text-sm text-brand-muted font-sans font-light mt-1 block">
                            {b.description}
                          </span>
                        </div>
                        <ArrowRight className="h-5 w-5 text-brand-amber opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-luxury" />
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                className="flex-1 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] md:text-xs tracking-widest text-brand-amber uppercase font-semibold block mb-2">Step 2 of 2</span>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-brand-amber mb-1">
                    Your Personalized Regimen
                  </h3>
                  <p className="text-sm text-brand-muted mb-6">
                    Based on your preference for: <span className="font-medium text-brand-amber">{selectedGoal}</span>
                  </p>

                  <div className="bg-white/50 border border-brand-amber/10 rounded-xl p-6 mb-8">
                    <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-amber mb-5">Recommended Products</h4>
                    <div className="space-y-5">
                      {bundleProducts.map((p) => (
                        <div key={p.id} className="flex items-center justify-between pb-4 border-b border-brand-amber/5 last:border-b-0 last:pb-0">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-brand-cream overflow-hidden shrink-0 relative border border-brand-amber/5 flex items-center justify-center">
                              <img
                                src={`/bella-africano-skincare/products/${p.id}.jpg`}
                                alt={p.name}
                                className="w-full h-full object-contain p-0.5"
                              />
                            </div>
                            <div>
                              <span className="font-serif text-base md:text-lg font-bold text-brand-amber block leading-tight">{p.name}</span>
                              <span className="text-[10px] md:text-xs text-brand-muted uppercase font-sans tracking-wide block mt-0.5">{p.category}</span>
                            </div>
                          </div>
                          <span className="font-serif text-base md:text-lg font-medium text-brand-amber">${p.price}.00</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between items-center mt-5 pt-5 border-t border-brand-amber/10">
                      <span className="text-sm md:text-base font-semibold text-brand-charcoal">Regimen Bundle Price</span>
                      <span className="font-serif text-xl md:text-2xl font-bold text-brand-amber">${bundleTotal}.00</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-7 py-4 bg-white/60 hover:bg-white/90 border border-brand-amber/20 hover:border-brand-amber text-brand-amber text-xs md:text-sm font-semibold tracking-widest uppercase rounded-full flex items-center justify-center gap-2 transition-luxury cursor-pointer"
                  >
                    <RotateCcw className="h-4.5 w-4.5" />
                    Reset Quiz
                  </button>
                  <button
                    onClick={handleAddBundle}
                    className="w-full sm:flex-1 px-7 py-4 bg-brand-amber hover:bg-brand-hover text-brand-cream text-xs md:text-sm font-semibold tracking-widest uppercase rounded-full flex items-center justify-center gap-2 shadow-lg shadow-brand-amber/10 transition-luxury cursor-pointer"
                  >
                    <ShoppingCart className="h-4.5 w-4.5 stroke-[1.5]" />
                    Add Regimen to Cart
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
