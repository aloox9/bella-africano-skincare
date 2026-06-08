"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Sparkles, Leaf, Sun, Droplet } from "lucide-react";

export default function Hero() {
  const scrollToShop = () => {
    const shop = document.getElementById("shop");
    if (shop) {
      shop.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="home" className="relative min-h-[70vh] flex items-center overflow-hidden bg-brand-cream py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      {/* Decorative gradient blobs */}
      <div className="absolute top-1/10 left-[5%] w-96 h-96 rounded-full bg-brand-amber/5 filter blur-3xl animate-pulse duration-[10s]" />
      <div className="absolute bottom-1/10 right-[5%] w-96 h-96 rounded-full bg-brand-amber/3 filter blur-3xl animate-pulse duration-[8s]" />

      {/* Floating Sparkles in empty margins */}
      <motion.div 
        animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-12 left-[8%] text-brand-amber/15 pointer-events-none hidden xl:block"
      >
        <Sparkles className="h-10 w-10 stroke-[0.8]" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-20 right-[5%] text-brand-amber/10 pointer-events-none hidden xl:block"
      >
        <Sparkles className="h-14 w-14 stroke-[0.5]" />
      </motion.div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-center lg:text-left space-y-8"
          >
            {/* Brand Logo & Tagline Badge */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
              <div className="relative p-1 bg-white rounded-full border border-brand-amber/10 shadow-md">
                <img
                  src="/logo.jpg"
                  alt="Bella Africano Emblem"
                  className="h-16 w-16 md:h-20 md:w-20 object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col justify-center items-center lg:items-start mt-2">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-amber/5 border border-brand-amber/10 text-brand-amber shadow-sm">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-xs font-bold tracking-widest uppercase">Pure African Botanicals</span>
                </div>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1 
              variants={itemVariants}
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-brand-amber leading-[1.05]"
            >
              Glow naturally,<br />
              <span className="italic font-normal text-brand-hover">shine beautifully.</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="max-w-2xl mx-auto lg:mx-0 text-lg md:text-xl lg:text-2xl text-brand-muted font-sans font-light leading-relaxed"
            >
              Handcrafted with raw, wild-harvested African ingredients. Intentionally formulated to restore your skin&apos;s natural luminosity and healthy, vital glow.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <button
                onClick={scrollToShop}
                className="w-full sm:w-auto px-9 py-4.5 bg-brand-amber hover:bg-brand-hover text-brand-cream text-xs md:text-sm font-bold tracking-widest uppercase rounded-full shadow-lg shadow-brand-amber/15 hover:shadow-brand-hover/30 transition-luxury cursor-pointer"
              >
                Shop the Collection
              </button>
              <button
                onClick={() => {
                  const guide = document.getElementById("glow-guide");
                  if (guide) guide.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto px-9 py-4.5 bg-transparent hover:bg-brand-amber/5 text-brand-amber border border-brand-amber/30 hover:border-brand-amber text-xs md:text-sm font-bold tracking-widest uppercase rounded-full transition-luxury cursor-pointer"
              >
                Take the Skin Quiz
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: High-Res Interactive Collage */}
          <div className="lg:col-span-5 relative h-[420px] w-full hidden lg:block select-none">
            {/* Background floating leaf */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-brand-amber/5 pointer-events-none"
            >
              <Leaf className="h-64 w-64 stroke-[0.15]" />
            </motion.div>

            {/* Product 1: Cacao Butter (p2) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -12, x: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: -8, x: 0 }}
              transition={{ delay: 0.3, type: "spring" }}
              whileHover={{ scale: 1.05, rotate: -2, zIndex: 30 }}
              className="absolute top-4 left-6 w-48 h-48 bg-white p-3 rounded-2xl shadow-xl border border-brand-amber/5 cursor-pointer transition-shadow hover:shadow-2xl"
            >
              <img src="/products/p2.jpg" alt="Cacao Butter" className="w-full h-full object-contain" />
              <div className="absolute bottom-2 right-3 text-[9px] font-serif text-brand-amber bg-brand-badge px-2 py-0.5 rounded-full">
                Cacao Butter
              </div>
            </motion.div>

            {/* Product 2: Oil + SPF 15 (p10) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 12, x: 20 }}
              animate={{ opacity: 1, scale: 1, rotate: 8, x: 0 }}
              transition={{ delay: 0.5, type: "spring" }}
              whileHover={{ scale: 1.05, rotate: 2, zIndex: 30 }}
              className="absolute top-32 right-2 w-44 h-48 bg-white p-3 rounded-2xl shadow-xl border border-brand-amber/5 cursor-pointer transition-shadow hover:shadow-2xl"
            >
              <img src="/products/p10.jpg" alt="Oil + SPF 15" className="w-full h-full object-contain" />
              <div className="absolute bottom-2 right-3 text-[9px] font-serif text-brand-amber bg-brand-badge px-2 py-0.5 rounded-full">
                Oil + SPF 15
              </div>
            </motion.div>

            {/* Product 3: Exfoliant Cream (p5) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.7, type: "spring" }}
              whileHover={{ scale: 1.05, y: -6, zIndex: 30 }}
              className="absolute bottom-2 left-20 w-48 h-48 bg-white p-3 rounded-2xl shadow-xl border border-brand-amber/5 cursor-pointer transition-shadow hover:shadow-2xl"
            >
              <img src="/products/p5.jpg" alt="Exfoliant Cream" className="w-full h-full object-contain" />
              <div className="absolute bottom-2 right-3 text-[9px] font-serif text-brand-amber bg-brand-badge px-2 py-0.5 rounded-full">
                Exfoliant Cream
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Hero Bottom Elegant Scroll Indicator (Creative Sun & Oil Droplet Theme) */}
      <div 
        onClick={scrollToShop}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 cursor-pointer group z-10"
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="relative flex items-center justify-center h-10 w-10 text-brand-amber/50 group-hover:text-brand-amber transition-luxury"
        >
          {/* Rotating Sun Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            className="absolute inset-0"
          >
            <Sun className="h-10 w-10 stroke-[1]" />
          </motion.div>
          
          {/* Pulsing Droplet (Botanical Oil Core) */}
          <motion.div
            animate={{ scale: [0.85, 1.05, 0.85], opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute z-10 text-brand-amber"
          >
            <Droplet className="h-4.5 w-4.5 stroke-[2] fill-brand-amber/20" />
          </motion.div>
        </motion.div>
        <span className="text-[9px] tracking-widest uppercase font-bold text-brand-amber/40 group-hover:text-brand-amber/60 transition-luxury">
          Glow
        </span>
      </div>
    </section>
  );
}
