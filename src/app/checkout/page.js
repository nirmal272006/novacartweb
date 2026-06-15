"use client";

import {useContext, useState} from "react";
import {useRouter} from "next/navigation";
import { CartContext } from "@/context/CartContext";
export default function CheckoutPage() {
  const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [address, setAddress] = useState("");
const { cart } = useContext(CartContext);
const router = useRouter();
const handleOrder = () => {

  if (cart.length === 0) {
    alert("Your cart is empty");
    return;
  }

  if (!name || !email || !address) {
    alert("Please fill all fields");
    return;
  }

  localStorage.setItem(
    "customerName",
    name
  );

  router.push("/success");
};
const totalPrice = cart.reduce(
  (total, item) =>
    total + item.price * item.quantity,
  0
);
  return (
    <main className="relative overflow-hidden min-h-screen bg-gradient-to-b from-[#F8FAFC] via-[#F3F0FF] to-[#6600FF] p-10">
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#A78BFA]/20 rounded-full blur-3xl pointer-events-none"></div>

<div className="absolute bottom-20 right-10 w-72 h-72 bg-[#8B5CF6]/20 rounded-full blur-3xl pointer-events-none"></div>
      <section className="text-center py-12">
  <h1 className="text-5xl font-bold text-[#6D28D9]">
    Checkout
  </h1>

  <p className="mt-4 text-lg text-gray-500">
    Complete your order details securely.
  </p>
</section>
    {/*form section*/}
      <div className="relative z-10 bg-white p-8 rounded-3xl shadow-xl mx-auto max-w-2xl">
        <input
  type="text"
  placeholder="Full Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="w-full border p-3 rounded-xl mb-4 text-[#0F172A]"
/>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 rounded-xl mb-4 text-[#0F172A]"
        />

        <textarea
  placeholder="Address"
  value={address}
  onChange={(e) => setAddress(e.target.value)}
  rows={4}
  className="w-full border p-3 rounded-xl mb-4 text-[#0F172A]"
/>

        <button
          type="button"
          onClick={handleOrder}
          className="inline-block bg-[#6D28D9] text-white px-6 py-3 rounded-xl hover:bg-[#8B5CF6] transition"
        >
          Place Order
        </button>

      </div>
      <div className="mt-8 bg-white border border-[#E2E8F0] rounded-3xl p-6 shadow-xl mx-auto max-w-2xl">

  <h2 className="text-2xl font-bold text-[#6D28D9] mb-4">
  Order Summary
</h2>

{cart.length === 0 ? (

  <p className="text-gray-500 text-center">
    No products in cart 🛒
  </p>

) : (

  cart.map((item) => (
    <div
      key={item.id}
      className="flex justify-between mb-3 text-[#0F172A]"
    >
      <span>
        {item.name} × {item.quantity}
      </span>

      <span>
        ₹{item.price * item.quantity}
      </span>
    </div>
  ))

)}

  <hr className="my-4" />

  <div className="flex justify-between font-bold text-2xl text-[#6D28D9]">
    <span>Total</span>
    <span>₹{totalPrice}</span>
  </div>

</div>
    </main>
  );
}
