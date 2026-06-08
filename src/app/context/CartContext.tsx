"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, products } from "../data/products";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  addBundleToCart: (productIds: string[]) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  cartCount: number;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Load from localStorage only after mounting on the client to avoid SSR hydration mismatches
  useEffect(() => {
    setIsMounted(true);
    const savedCart = localStorage.getItem("bella_africano_cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Error parsing cart from localStorage", e);
      }
    }
  }, []);

  // Save to localStorage when cart changes (only after mounting)
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("bella_africano_cart", JSON.stringify(cart));
    }
  }, [cart, isMounted]);

  const addToCart = (product: Product, quantity = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.product.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { product, quantity }];
    });
    // Automatically open cart drawer
    setIsCartOpen(true);
  };

  const addBundleToCart = (productIds: string[]) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      productIds.forEach((id) => {
        const product = products.find((p) => p.id === id);
        if (product) {
          const existingItemIndex = updatedCart.findIndex((item) => item.product.id === id);
          if (existingItemIndex > -1) {
            updatedCart[existingItemIndex] = {
              ...updatedCart[existingItemIndex],
              quantity: updatedCart[existingItemIndex].quantity + 1,
            };
          } else {
            updatedCart.push({ product, quantity: 1 });
          }
        }
      });
      return updatedCart;
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  // Safe variables returning 0 on server pre-mount
  const cartCount = isMounted ? cart.reduce((total, item) => total + item.quantity, 0) : 0;
  const cartTotal = isMounted ? cart.reduce((total, item) => total + item.product.price * item.quantity, 0) : 0;

  return (
    <CartContext.Provider
      value={{
        cart: isMounted ? cart : [],
        addToCart,
        addBundleToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
