import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white mt-0">

      <div className="max-w-7xl mx-auto px-10 py-12 grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-[#A78BFA]">
            NovaCart 🛒
          </h2>

          <p className="mt-4 text-gray-300">
            Discover. Shop. Enjoy.
          </p>

          <p className="mt-2 text-gray-400 text-sm">
            Premium shopping experience with modern design and seamless cart management.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-[#A78BFA] transition">
              <Link href="/">Home</Link>
            </li>

            <li className="hover:text-[#A78BFA] transition">
              <Link href="/cart">Cart</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact
          </h3>

          <p className="text-gray-300">
            support@novacart.com
          </p>

          <p className="text-gray-300 mt-2">
            +91 xxxxx xxxxx
          </p>

          <p className="text-gray-300 mt-2">
            Chennai, India
          </p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-gray-400 text-sm">
        © 2026 NovaCart. All Rights Reserved.
      </div>

    </footer>
  );
}