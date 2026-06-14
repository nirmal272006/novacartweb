"use client";

import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  useEffect(() => {
  const savedCart =
    localStorage.getItem("novacart-cart");

  if (savedCart) {
    setCart(JSON.parse(savedCart));
  }
}, []);
useEffect(() => {
  localStorage.setItem(
    "novacart-cart",
    JSON.stringify(cart)
  );
}, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existingItem = prev.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  const increaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };
  const clearCart = () => {
  setCart([]);
  localStorage.removeItem("novacart-cart");
};

 return (
  <CartContext.Provider
    value={{
      cart,
      addToCart,
      increaseQuantity,
      decreaseQuantity,
      removeItem,
      clearCart,
    }}
  >
    {children}
  </CartContext.Provider>
);
}