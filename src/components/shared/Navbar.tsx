
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Heart, ShoppingCart } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About us" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full bg-white  z-50">
      <div className="flex items-center justify-between px-4 lg:px-12 py-3 bg-white">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-green-600 rounded-md"></div>
          <span className="font-bold text-lg text-gray-900">
            Fresh Harvests
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-16 font-questrial text-[14px] leading-[24px] tracking-tightest">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative transition ${pathname === href ? "text-gray-900 font-medium" : "text-[#4A4A52]"
                }`}
            >
              {label}
              {/* Active underline */}
              {pathname === href && (
                <span className="absolute left-1/2 -bottom-1.5 h-[4px] w-6 -translate-x-1/2 rounded-full bg-green-600"></span>
              )}
            </Link>
          ))}
        </nav>

        {/* Right Section (Desktop) */}
        <div className="hidden lg:flex items-center gap-5">
          <Link
            href="/favorites"
            className="flex items-center gap-1 text-gray-700 hover:text-green-600"
          >
            <Heart size={18} /> Favorites
          </Link>

          <Link
            href="/cart"
            className="relative flex items-center gap-1 text-gray-700 hover:text-green-600"
          >
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
              3
            </span>
            Cart
          </Link>

          <Link
            href="/signin"
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
          >
            Sign in
          </Link>
        </div>

        {/* Mobile Right Section */}
        <div className="flex lg:hidden items-center gap-4">
          {/* Cart */}
          <Link href="/cart" className="relative text-gray-700">
            <ShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
              3
            </span>
          </Link>

          {/* Hamburger */}
          <button onClick={() => setOpen(true)} className="text-gray-800">
            <Menu size={26} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transform ${open ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 z-50`}
      >
        <div className="flex justify-between items-center font-bold text-lg text-gray-900 p-4 border-b">
          <span className=""></span>
          <button onClick={() => setOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col p-4 gap-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`relative transition ${pathname === href ? "text-green-600 font-medium" : "text-gray-700"
                }`}
            >
              {label}
              {pathname === href && (
                <span className="absolute left-0 -bottom-1 h-[2px] w-6 rounded-full bg-green-600"></span>
              )}
            </Link>
          ))}

          <Link
            href="/favorites"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2"
          >
            <Heart size={18} /> Favorites
          </Link>

          <Link
            href="/signin"
            onClick={() => setOpen(false)}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
          >
            Sign in
          </Link>
        </nav>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
        ></div>
      )}
    </header>
  );
}
