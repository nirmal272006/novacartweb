"use client";

import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "@/context/CartContext";

export default function SuccessPage() {
  const [customerName, setCustomerName] =
  useState("");

const { clearCart } =
  useContext(CartContext);

useEffect(() => {
  const name =
    localStorage.getItem("customerName");

  if (name) {
    setCustomerName(name);
  }

  clearCart();
}, []);

  return (
    <main className="relative overflow-hidden min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-[#F8FAFC] via-[#F3F0FF] to-[#6600FF]">
    <div className="absolute top-20 left-10 w-72 h-72 bg-[#A78BFA]/20 rounded-full blur-3xl"></div>

<div className="absolute bottom-20 right-10 w-72 h-72 bg-[#8B5CF6]/20 rounded-full blur-3xl"></div>

      <div className="bg-white shadow-xl rounded-3xl p-10 max-w-lg w-full text-center">

        <div className="text-7xl mb-4">
          ✅
        </div>

        <p className="text-sm text-black mt-4">
          Order ID: #NC2026{Math.floor(Math.random() * 1000)}
        </p>

        <h1 className="text-4xl font-bold text-[#6D28D9] mb-4">
          {customerName
  ? `${customerName}, your order has been placed successfully!`
  : "Order Placed Successfully!"}
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          Thank you for shopping with NovaCart.
          Your order has been received and is being processed.
        </p>

        <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-4 mb-8">

          <p className="text-[#0F172A]">
            Estimated Delivery:
          </p>

          <p className="font-bold text-[#6D28D9] text-xl">
            3 - 5 Business Days
          </p>

        </div>

        <Link
          href="/"
          className="inline-block bg-[#6D28D9] hover:bg-[#8B5CF6] text-white px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
        >
          Continue Shopping
        </Link>
      </div>

    </main>
  );
}