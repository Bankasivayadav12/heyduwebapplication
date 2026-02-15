"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";

export default function OtpClient() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  return (
    <div className="min-h-screen bg-[#f4f3f7] px-6 md:px-16">

      <div className="w-full max-w-6xl mx-auto">

        {/* ================= MOBILE VIEW ================= */}
        <div className="md:hidden space-y-6 py-10">

          {/* Logo */}
          <div className="relative w-40 h-16 mx-auto">
            <Image
              src="/navbar/logo.png"
              alt="Heydu Logo"
              fill
              className="object-contain"
            />
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/login/login1.png"
              alt="Students"
              width={600}
              height={600}
              className="object-cover w-full h-auto"
            />
          </div>

          {/* Text Section */}
          <div className="space-y-2">
            <h2 className="text-[22px] font-semibold text-black">
              Welcome to Heydu
            </h2>

            <p className="text-gray-500 text-[13px]">
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
            {[...Array(6)].map((_, i) => (
              <input
                key={i}
                type="text"
                maxLength={1}
                className="w-12 h-12 text-center text-lg
                border border-gray-300 rounded-md
                focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            ))}
          </div>

          {/* Button */}
          <button className="w-full h-12 bg-[#3b82f6] text-white rounded-md hover:bg-blue-600 transition">
            Send OTP
          </button>

        </div>

        {/* ================= DESKTOP VIEW ================= */}
        <div className="hidden md:grid md:grid-cols-2 gap-16 items-center py-16">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            {/* Logo */}
            <div className="relative w-50 h-22.5">
              <Image
                src="/navbar/logo.png"
                alt="Heydu Logo"
                fill
                className="object-contain"
              />
            </div>

            {/* Title */}
            <div>
              <h2 className="text-[24px] font-semibold text-black mb-2">
                Welcome to Heydu
              </h2>

              <p className="text-gray-500 text-[13px] mb-2">
                Please login to your account
              </p>

              <h3 className="text-[16px] text-black">
                Enter your OTP code here
              </h3>

              {email && (
                <p className="text-gray-400 text-sm mt-2">
                  OTP sent to: {email}
                </p>
              )}
            </div>

            {/* OTP Boxes */}
            <div className="flex gap-3 mt-4">
              {[...Array(6)].map((_, i) => (
                <input
                  key={i}
                  type="text"
                  maxLength={1}
                  className="w-14 h-14 text-center text-lg
                  border border-gray-300 rounded-md
                  focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              ))}
            </div>

            {/* Button */}
            <button className="w-100 h-12 bg-[#3b82f6] text-white rounded-md hover:bg-blue-600 transition">
              Login
            </button>

          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex justify-end">
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
    </div>
  );
}
