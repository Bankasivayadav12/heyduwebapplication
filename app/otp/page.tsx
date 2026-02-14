"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";

export default function OtpPage() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  return (
    <div className="min-h-screen bg-[#f4f3f7] px-4 md:px-16 overflow-x-hidden">

      <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center py-10">

        {/* ================= MOBILE IMAGE ================= */}
        <div className="md:hidden">
          <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
            <Image
              src="/login/login1.png"
              alt="Students"
              width={600}
              height={600}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>

        {/* ================= LEFT SIDE ================= */}
        <div className="space-y-6 w-full max-w-md mx-auto md:mx-0">

          {/* Logo */}
          <div className="relative w-[200px] h-[90px] mx-auto md:mx-0">
            <Image
              src="/navbar/logo.png"
              alt="Heydu Logo"
              fill
              className="object-contain"
            />
          </div>

          {/* Title */}
          <div>
            <h2 className="text-[22px] font-semibold text-black mb-2">
              Welcome to Heydu
            </h2>

            <p className="text-gray-500 text-[13px] mb-2">
              Please login to your account
            </p>

            <h3 className="text-[15px] text-black">
              Enter your OTP code here
            </h3>

            {email && (
              <p className="text-gray-400 text-sm mt-2">
                OTP sent to: {email}
              </p>
            )}
          </div>

          {/* OTP Boxes */}
          <div className="flex gap-3 mt-4 justify-start">
            {[...Array(5)].map((_, i) => (
              <input
                key={i}
                type="text"
                maxLength={1}
                className="w-12 h-12 md:w-14 md:h-14 text-center text-lg
                           border border-gray-300 rounded-md
                           focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            ))}
          </div>

          {/* Login Button */}
          <button className="w-full h-[45px] bg-[#3b82f6] text-white rounded-md mt-6 hover:bg-blue-600 transition">
            Login
          </button>

        </div>

        {/* ================= DESKTOP IMAGE ================= */}
        <div className="hidden md:flex justify-end">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/login/login1.png"
              alt="Students"
              width={450}
              height={550}
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
