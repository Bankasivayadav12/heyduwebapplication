"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#f4f3f7] relative z-50">

      {/* ================= DESKTOP NAVBAR ================= */}
      <div className="hidden md:flex items-center justify-between px-10 py-6">

        {/* LOGO */}
        <Image
          src="/navbar/logo.png"
          alt="Heydu Logo"
          width={400}
          height={200}
          className="w-[260px] h-auto"
          priority
        />

        {/* MENU */}
        <nav className="flex items-center gap-16 text-[20px] font-medium text-black">
          <Link href="/" className="hover:text-purple-600 transition">
            Home
          </Link>

          <div className="relative group cursor-pointer">
            <div className="flex items-center gap-1 hover:text-purple-600 transition">
              Products
              <span className="text-xs">▾</span>
            </div>

            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-3 w-44 py-2">
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                HEYDU
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                C-RAP
              </Link>
            </div>
          </div>

          <Link href="/about" className="hover:text-purple-600 transition">
            About
          </Link>

          <Link
            href="/login"
            className="bg-black text-white px-8 py-3 hover:bg-gray-900 transition"
          >
            Login
          </Link>
        </nav>
      </div>


      {/* ================= MOBILE NAVBAR ================= */}
      <div className="md:hidden bg-[#f4f3f7]">

        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-5">
          <Image
            src="/navbar/Heydu_finalized_logo 2.png"
            alt="Heydu Logo"
            width={300}
            height={200}
            className="w-[150px] h-auto"
          />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="bg-white shadow-md py-6 flex flex-col items-center gap-6 text-[18px] font-medium text-black">
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>

            <Link href="#" onClick={() => setIsOpen(false)}>
              Products
            </Link>

            <Link href="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>

            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="bg-black text-white px-6 py-3"
            >
              Login
            </Link>
          </div>
        )}
      </div>

    </header>
  );
}
