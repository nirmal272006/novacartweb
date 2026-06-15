"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { CartContext } from "@/context/CartContext";

import products from "@/data/products";
import ProductCard from "@/components/ProductCard";
export default function Home() {
  const { cart } = useContext(CartContext);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
  useState("All");
  const filteredProducts = products.filter((product) => {
  const matchesSearch = product.name
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesCategory =
    selectedCategory === "All" ||
    product.category === selectedCategory;

  return matchesSearch && matchesCategory;
});

  return (
    <main className="relative overflow-hidden min-h-screen bg-gradient-to-b from-[#F8FAFC] via-[#F3F0FF] to-[#6600FF] pt-24">
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#A78BFA]/20 rounded-full blur-3xl"></div>

    <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#8B5CF6]/20 rounded-full blur-3xl"></div>
<div className="relative z-10">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#6D28D9]/95 backdrop-blur-md shadow-md px-4 sm:px-8 py-4">

  <div className="flex justify-between items-center">

    {/* Logo + Brand */}
    <div className="flex items-center gap-2">

      <Image
        src="/logo.png"
        alt="NovaCart"
        width={40}
        height={40}
      />

      <h1 className="text-xl sm:text-3xl font-bold text-white">
        NovaCart
      </h1>

    </div>


    {/* Cart */}
    <Link href="/cart">
      <button className="bg-[#0F172A] text-white px-3 sm:px-5 py-2 rounded-lg text-sm sm:text-base">

        🛒 Cart ({cart.length})

      </button>
    </Link>


  </div>

</nav>
      {/* Hero Section */}

      <section className="text-center py-20 px-6">

  <div className="inline-block px-4 py-2 rounded-full bg-[#6D28D9]/10 text-[#6D28D9] font-medium mb-6">
    ✨ Premium Shopping Experience
  </div>

  <h1 className="text-6xl md:text-7xl font-extrabold text-[#0F172A] leading-tight">
    Discover.
    <span className="text-[#6D28D9]">🛒🛍️</span>
    .Enjoy
  </h1>

  <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
    Explore premium products at unbeatable prices with a modern shopping experience.
  </p>

</section>
      {/* Search */}
      <section className="px-10 py-6">

  <div className="flex justify-center text-[#0F172A]">

    <input
      type="text"
      placeholder="🔍Search products..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
      className="
      w-full
      max-w-md
      p-3
      border
      border-gray-300
      rounded-xl
      shadow-md
      outline-none
      focus:ring-2
      focus:ring-[#6D28D9]
      placeholder:text-[#0F172A]
      "
    />

  </div>

</section>
{search && 
  search !== filteredProducts[0]?.name && (
  <div className="max-w-md mx-auto bg-white shadow rounded-xl mt-2">
    {filteredProducts.map((product) => (
      <div
        key={product.id}
        onClick={() => setSearch(product.name)}
        className="max-w-md mx-auto bg-[#6D28D9] shadow rounded-xl mt-2 p-3 text-[#0F172A]">
        {product.name}
      </div>
    ))}
  </div>
)}
{search && filteredProducts.length === 0 && (
  <div className="max-w-md mx-auto bg-[#6D28D9] shadow rounded-xl mt-2 p-3 text-[#0F172A]">
    🔍 No products match your search.
  </div>
)}

{/* Categories Filter */}
<h2 className="text-center text-2xl font-bold text-[#0F172A] mb-4">
 🌐 Browse Categories
</h2>
<section className="px-10 py-4">

  <div className="flex justify-center gap-3 flex-wrap">

    {[
      "All",
      "Electronics",
      "Fashion",
      "Accessories"
    ].map((category) => (
      <button
        key={category}
        onClick={() =>
          setSelectedCategory(category)
        }
        className={`px-5 py-2 rounded-xl transition-all duration-300 hover:scale-105 ${
          selectedCategory === category
            ? "bg-[#6D28D9] text-white"
            : "bg-white text-[#0F172A] border"
        }`}
      >
        {category}
      </button>
    ))}

  </div>

</section>
    {/* Products Grid */}
    <section className="px-10 py-8">

  <h2 className="text-3xl font-bold text-center mb-10 text-[#0F172A]">
    ✨ Featured Products
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

    {filteredProducts.map((product) => (
      <ProductCard
        key={product.id}
        product={product}
      />
    ))}

  </div>

</section>
</div>
<section className="max-w-4xl mx-auto px-6 py-16">

  <div className="bg-white rounded-3xl shadow-lg p-10 text-center">

    <h2 className="text-4xl font-bold text-[#6D28D9]">
      Stay Notified 📢
    </h2>

    <p className="text-gray-500 mt-4">
      🔔 Subscribe to receive updates on new arrivals and exclusive offers.
    </p>

  </div>

</section>

    </main>
    
  );
}
