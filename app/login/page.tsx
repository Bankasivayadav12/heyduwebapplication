"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError("Email is required");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Clear error
    setError("");

    // Navigate to OTP screen and pass email
    router.push(`/otp?email=${email}`);
  };

  return (
  <div className="min-h-screen bg-[#f4f3f7] px-6 md:px-16 flex items-center justify-center">

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
            priority
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

        {/* Text */}
        <div className="space-y-2">
          <h2 className="text-[22px] font-semibold text-black">
            Welcome to Heydu
          </h2>
          <p className="text-gray-500 text-[13px]">
            Please login to your account
          </p>
          <h3 className="text-[15px] text-black">
            Enter your Email, We’ll send OTP to your mail
          </h3>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              className={`w-full h-12 text-black px-4 rounded-md border 
              ${error ? "border-red-500" : "border-gray-300"}
              focus:outline-none focus:ring-2 focus:ring-blue-400`}
            />

            {error && (
              <p className="text-red-500 text-sm mt-1">{error}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full h-12 bg-[#3b82f6] text-white rounded-md 
            hover:bg-blue-600 transition"
          >
            Send OTP
          </button>
        </form>
      </div>


      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden md:grid md:grid-cols-2 gap-16 items-center py-16">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          {/* Logo */}
          <div className="relative w-65 h-30">
            <Image
              src="/navbar/logo.png"
              alt="Heydu Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-[24px] font-semibold text-black mb-2">
              Welcome to Heydu
            </h2>
            <p className="text-gray-500 text-[13px] mb-2">
              Please login to your account
            </p>
            <h3 className="text-[16px] text-black">
              Enter your Email, We’ll send OTP to your mail
            </h3>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                className={`w-full h-12 text-black px-4 rounded-md border 
                ${error ? "border-red-500" : "border-gray-300"}
                focus:outline-none focus:ring-2 focus:ring-blue-400`}
              />

              {error && (
                <p className="text-red-500 text-sm mt-1">{error}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full h-12 bg-[#3b82f6] text-white rounded-md 
              hover:bg-blue-600 transition"
            >
              Send OTP
            </button>
          </form>
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
