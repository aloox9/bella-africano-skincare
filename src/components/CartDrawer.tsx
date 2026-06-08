"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/app/context/CartContext";
import { X, Trash2, Plus, Minus, Send, AlertCircle } from "lucide-react";

export default function CartDrawer() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    isCartOpen,
    setIsCartOpen,
    cartTotal,
    clearCart,
  } = useCart();

  // Form States
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  
  // Validation State
  const [errors, setErrors] = useState<{ name?: string; address?: string; phone?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Prevent scroll on body when drawer is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);

  const validateForm = () => {
    const tempErrors: typeof errors = {};
    if (!name.trim()) tempErrors.name = "Full name is required";
    if (!address.trim()) tempErrors.address = "Delivery address is required";
    if (!phone.trim()) tempErrors.phone = "Phone number is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Build the template order text
    const itemsLines = cart
      .map((item) => `• ${item.quantity}x ${item.product.name} ($${item.product.price})`)
      .join("\n");

    const orderText = `Bella Africano Order! 🌟
----------------------
${itemsLines}
----------------------
**Total:** $${cartTotal}
**Customer:** ${name}
**Delivery Address:** ${address}
**Order Notes:** ${notes.trim() || "None provided"}`;

    const encodedText = encodeURIComponent(orderText);
    const whatsappUrl = `https://wa.me/96103935465?text=${encodedText}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");
    
    // Clear the cart state and close drawer after a brief delay
    setTimeout(() => {
      clearCart();
      setIsCartOpen(false);
      setIsSubmitting(false);
      // Reset form
      setName("");
      setAddress("");
      setPhone("");
      setNotes("");
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 z-50 bg-brand-charcoal"
          />

          {/* Side Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-brand-cream shadow-2xl flex flex-col justify-between"
          >
            {/* Header */}
            <div className="p-6 border-b border-brand-amber/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-serif text-xl font-bold text-brand-amber">Your Shopping Bag</span>
                <span className="text-xs bg-brand-badge text-brand-amber font-bold px-2 py-0.5 rounded-full">
                  {cart.reduce((t, i) => t + i.quantity, 0)}
                </span>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 text-brand-muted hover:text-brand-amber transition-luxury cursor-pointer"
                aria-label="Close cart"
              >
                <X className="h-6 w-6 stroke-[1.5]" />
              </button>
            </div>

            {/* Cart Content */}
            <div className="flex-1 overflow-y-auto no-scrollbar p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64 text-center space-y-4">
                  <div className="w-16 h-16 bg-brand-amber/5 rounded-full flex items-center justify-center font-serif text-brand-amber font-bold text-lg">
                    Ø
                  </div>
                  <h3 className="font-serif text-lg font-bold text-brand-amber">Your bag is empty</h3>
                  <p className="text-xs text-brand-muted max-w-[240px]">
                    Explore our curated collections and add your first premium skincare products to begin your glow journey.
                  </p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="px-6 py-2.5 bg-brand-amber hover:bg-brand-hover text-brand-cream text-xs font-semibold tracking-wider uppercase rounded-full transition-luxury cursor-pointer"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <>
                  {/* Cart Item List */}
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div
                        key={item.product.id}
                        className="flex gap-4 bg-white/40 border border-brand-amber/5 p-4 rounded-xl relative group"
                      >
                        {/* Mock Image */}
                        <div className="w-16 h-16 rounded-lg bg-brand-cream overflow-hidden shrink-0 relative">
                          <img
                            src={`/bella-africano-skincare/products/${item.product.id}.jpg`}
                            alt={item.product.name}
                            className="w-full h-full object-contain p-1"
                          />
                          <div className="absolute inset-0 bg-brand-amber/5 mix-blend-color pointer-events-none" />
                        </div>

                        {/* Details */}
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start gap-1">
                              <h4 className="font-serif text-sm font-semibold text-brand-charcoal leading-tight">
                                {item.product.name}
                              </h4>
                              <button
                                onClick={() => removeFromCart(item.product.id)}
                                className="text-brand-muted hover:text-red-600 transition-luxury cursor-pointer"
                                aria-label="Remove item"
                              >
                                <Trash2 className="h-4 w-4 stroke-[1.5]" />
                              </button>
                            </div>
                            <span className="text-[10px] text-brand-amber uppercase tracking-wider block mt-0.5">
                              {item.product.category}
                            </span>
                          </div>

                          <div className="flex items-center justify-between mt-3">
                            <span className="font-serif text-sm font-medium text-brand-amber">
                              ${item.product.price * item.quantity}.00
                            </span>

                            {/* Quantity Selector */}
                            <div className="flex items-center border border-brand-amber/10 bg-white rounded-full">
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                className="p-1 hover:text-brand-amber transition-luxury cursor-pointer"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="h-3 w-3 stroke-[2]" />
                              </button>
                              <span className="text-xs font-semibold px-2 w-6 text-center text-brand-charcoal select-none">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                className="p-1 hover:text-brand-amber transition-luxury cursor-pointer"
                                aria-label="Increase quantity"
                              >
                                <Plus className="h-3 w-3 stroke-[2]" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order Form */}
                  <form onSubmit={handleCheckout} className="space-y-4 border-t border-brand-amber/10 pt-6">
                    <h4 className="font-serif text-base font-semibold text-brand-amber mb-3">Delivery Information</h4>
                    
                    {/* Full Name */}
                    <div>
                      <label htmlFor="customer-name" className="block text-[10px] font-bold uppercase tracking-wider text-brand-amber mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="customer-name"
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={`w-full px-4 py-2.5 rounded-lg border bg-white/60 focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-amber transition-luxury text-sm ${
                          errors.name ? "border-red-400" : "border-brand-amber/10"
                        }`}
                      />
                      {errors.name && (
                        <span className="text-[10px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" /> {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Delivery Address */}
                    <div>
                      <label htmlFor="delivery-address" className="block text-[10px] font-bold uppercase tracking-wider text-brand-amber mb-1">
                        Delivery Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="delivery-address"
                        type="text"
                        placeholder="Street, Building, Floor, City"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className={`w-full px-4 py-2.5 rounded-lg border bg-white/60 focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-amber transition-luxury text-sm ${
                          errors.address ? "border-red-400" : "border-brand-amber/10"
                        }`}
                      />
                      {errors.address && (
                        <span className="text-[10px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" /> {errors.address}
                        </span>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phone-number" className="block text-[10px] font-bold uppercase tracking-wider text-brand-amber mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone-number"
                        type="tel"
                        placeholder="+961 70 123 456"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={`w-full px-4 py-2.5 rounded-lg border bg-white/60 focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-amber transition-luxury text-sm ${
                          errors.phone ? "border-red-400" : "border-brand-amber/10"
                        }`}
                      />
                      {errors.phone && (
                        <span className="text-[10px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" /> {errors.phone}
                        </span>
                      )}
                    </div>

                    {/* Order Notes */}
                    <div>
                      <label htmlFor="order-notes" className="block text-[10px] font-bold uppercase tracking-wider text-brand-amber mb-1">
                        Order Notes (Optional)
                      </label>
                      <textarea
                        id="order-notes"
                        rows={2}
                        placeholder="Specific delivery times, instructions, or notes..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-brand-amber/10 bg-white/60 focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-amber transition-luxury text-sm resize-none"
                      />
                    </div>
                  </form>
                </>
              )}
            </div>

            {/* Sticky Bottom Actions */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-brand-amber/10 bg-brand-light-cream space-y-4">
                <div className="flex justify-between items-center text-brand-charcoal">
                  <span className="text-sm font-medium">Subtotal</span>
                  <span className="font-serif text-xl font-bold text-brand-amber">${cartTotal}.00</span>
                </div>
                
                <p className="text-[10px] text-brand-muted">
                  Shipping, delivery, and taxes are calculated upon order routing.
                </p>

                <button
                  onClick={handleCheckout}
                  disabled={isSubmitting}
                  className="w-full py-4 bg-brand-amber hover:bg-brand-hover disabled:bg-brand-amber/60 text-brand-cream text-xs font-semibold tracking-widest uppercase rounded-full flex items-center justify-center gap-2 shadow-lg shadow-brand-amber/15 transition-luxury cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  {isSubmitting ? "Routing to WhatsApp..." : "Order via WhatsApp"}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
