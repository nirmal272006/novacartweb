"use client";

import { useContext, useState } from "react";
import { CartContext } from "@/context/CartContext";

export default function ProductCard({ product }) {

  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  return (
    <div className="bg-white/80 backdrop-blur-sm border border-white shadow-lg rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <img
        src={product.image}
        alt={product.name}
        className="h-60 w-full object-cover transition-transform duration-300 hover:scale-110"
      />

      <div className="p-4">
        <h3 className="font-semibold text-[#0F172A]">
          {product.name}
        </h3>

        <p className="text-[#6D28D9] font-bold text-xl mt-2">
          ₹{product.price}
        </p>

        <button
  onClick={() => {
    addToCart(product);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1000);
  }}
  className={`mt-4 w-full py-2 rounded-lg text-white transition-all duration-300 ${
    added
      ? "bg-green-500 scale-105"
      : "bg-[#6D28D9]"
  }`}
>
  {added ? "✓ Added" : "Add To Cart"}
</button>
      </div>
    </div>
  );
}