"use client";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <main className="relative overflow-hidden min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-[#F8FAFC] via-[#F3F0FF] to-[#6600FF]">
<div className="absolute top-20 left-10 w-72 h-72 bg-[#363636]/20 rounded-full blur-3xl"></div>

<div className="absolute bottom-20 right-10 w-72 h-72 bg-[#363636]/20 rounded-full blur-3xl"></div>

<div className="relative z-10" >
      <section className="text-center py-12">
  <h1 className="text-5xl font-bold text-[#6D28D9]">
    Shopping Cart 🛒
  </h1>

  <p className="mt-4 text-lg text-gray-500">
    Review your selected items and proceed to checkout.
  </p>
</section>

      {cart.length === 0 ? (
  <div className="flex flex-col items-center justify-center min-h-[70vh] text-center bg-[#6D28D9]/10 p-10 rounded-3xl shadow-xl mx-auto max-w-2xl">

    <div className="text-8xl mb-6">
      🛒
    </div>

    <h1 className="text-5xl font-bold text-[#6D28D9] mb-4">
      Shopping Cart
    </h1>

    <p className="text-xl text-black mb-2">
  Your cart is empty.
</p>

<p className="text-black mb-8">
  Looks like you haven't added anything yet.
</p>
    <Link
      href="/"
      className="bg-[#6D28D9] text-white px-8 py-4 rounded-xl hover:bg-[#8B5CF6] transition-all duration-300 hover:scale-105"
    >
      Continue Shopping
    </Link>

  </div>

      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#E2E8F0] shadow-md p-6 mb-5 rounded-2xl text-[#0F172A] hover:shadow-lg transition-all duration-300 "
            >
              <h2 className="font-bold text-xl text-[#0F172A]">
                {item.name}
              </h2>

              <p className="text-[#6D28D9] font-semibold mt-2">
                ₹{item.price}
              </p>

              <div className="flex items-center gap-3 mt-3">

                <button
                  onClick={() =>
                    decreaseQuantity(item.id)
                  }
                  className="bg-[#8B5CF6] text-white px-3 py-1 rounded-lg hover:bg-red-500 transition"
                >
                  -
                </button>

                <span className="font-bold text-lg text-[#0F172A]">
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    increaseQuantity(item.id)
                  }
                  className="bg-[#6D28D9] text-white px-3 py-1 rounded-lg hover:bg-green-500 transition"
                >
                  +
                </button>

              </div>

              <button
                onClick={() =>
                  removeItem(item.id)
                }
                className="mt-4 bg-[#6D28D9] text-white px-4 py-2 rounded-xl hover:bg-red-700 transition"
              >
                Remove
              </button>
            </div>
          ))}
          <Link
  href="/"
  className="inline-block mb-6 bg-[#6D28D9] text-white px-6 py-3 rounded-xl hover:bg-[#8B5CF6] transition"
>
  🛒 Continue Shopping
</Link>
          

          <div className="mt-10 bg-white p-6 rounded-2xl shadow-md text-3xl font-bold text-black">
            Total: ₹{totalPrice}
          </div>
        </>
      )}
      {cart.length > 0 && (
  <Link
    href="/checkout"
    className="inline-block mt-6 bg-[#6D28D9] text-white px-6 py-3 rounded-xl hover:bg-[#8B5CF6] transition"
  >
    🕒 Proceed To Checkout
  </Link>
)}
</div>
    </main>
  );
}