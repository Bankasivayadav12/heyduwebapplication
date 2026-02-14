"use client";

import CareerSection from "@/components/c-rap/career";
import CareerCTA from "@/components/c-rap/career-cta";
import ReportsSection from "@/components/c-rap/grow";
import JobPathSection from "@/components/c-rap/jonpath";
import LevelUpSection from "@/components/c-rap/levelup";
import Image from "next/image";

const steps = [
  {
    id: "1",
    image: "/c-rap/e-3.png",
    position: "left-bottom",
  },
  {
    id: "2",
    image: "/c-rap/e-4.png",
    position: "top",
  },
  {
    id: "3",
    image: "/c-rap/e-5.png",
    position: "right-bottom",
  },
];

export default function CrapPage() {
  return (
    <section className="relative bg-[#f3f2f7] overflow-hidden py-24 px-6 md:px-16">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16">

        {/* ================= LEFT CONTENT ================= */}
        <div className="space-y-6">

          <h1 className="text-4xl md:text-5xl font-bold leading-snug text-[#2f57c7]">
            Map your <span className="text-black">Career,</span>
            <br />
            land your first job
          </h1>

          <div className="flex items-center gap-4 mt-6">

            <button className="bg-[#2f57c7] text-white px-6 py-3 rounded-md shadow-md hover:bg-[#264bb0] transition">
              Start Your Journey
            </button>

            <div className="flex items-center bg-purple-100 rounded-full px-4 py-2">
              <span className="text-sm text-gray-600 mr-2">
                Pricing Starts
              </span>
              <span className="bg-[#6b4eff] text-white text-sm font-semibold px-3 py-1 rounded-full">
                ₹200
              </span>
            </div>

          </div>

          <p className="text-gray-500 text-sm mt-4">
            Already you there?{" "}
            <span className="text-[#2f57c7] cursor-pointer hover:underline">
              Login
            </span>
          </p>

        </div>

        {/* ================= RIGHT FLOW SECTION ================= */}
    
        <div className="relative flex justify-center items-center h-[500px] ">

            {/* Purple Glow Background */}
            <div className="absolute bottom-0 w-[350px] h-[350px] bg-purple-200 blur-3xl opacity-60"></div>

            {/* Center C-RAP Logo */}
            <div className="relative z-10 w-32 h-32 bg-[#5a2ca0] rounded-full flex items-center justify-center shadow-xl">
                <Image
                src="/c-rap/e-8.png"
                alt="C-RAP"
                width={100}
                height={100}
                />
            </div>

            {/* ================= STEP IMAGES ================= */}

            {/* TOP IMAGE */}
            <div className="absolute -top-4">
                <Image
                src="/c-rap/e-4.png"
                alt=""
                width={160}
                height={160}
                className="object-contain"
                />
            </div>

            {/* LEFT BOTTOM IMAGE */}
            <div className="absolute left-0 bottom-10">
                <Image
                src="/c-rap/e-3.png"
                alt=""
                width={160}
                height={160}
                className="object-contain"
                />
            </div>

            {/* RIGHT BOTTOM IMAGE */}
            <div className="absolute right-0 bottom-10">
                <Image
                src="/c-rap/e-5.png"
                alt=""
                width={160}
                height={160}
                className="object-contain"
                />
            </div>

            {/* ================= DOTTED ARROWS ================= */}

            {/* Top to Center Arrow */}
            <svg
                className="absolute top-20"
                width="120"
                height="80"
                viewBox="0 0 120 80"
            >
                <path
                d="M60 0 C60 20, 60 40, 60 60"
                stroke="#6b4eff"
                strokeWidth="2"
                strokeDasharray="6 6"
                fill="none"
                />
            </svg>

            {/* Left to Center Arrow */}
            <svg
                className="absolute left-20 bottom-28"
                width="120"
                height="80"
                viewBox="0 0 120 80"
            >
                <path
                d="M0 40 C30 40, 60 40, 90 40"
                stroke="#6b4eff"
                strokeWidth="2"
                strokeDasharray="6 6"
                fill="none"
                />
            </svg>

            {/* Right to Center Arrow */}
            <svg
                className="absolute right-20 bottom-28"
                width="120"
                height="80"
                viewBox="0 0 120 80"
            >
                <path
                d="M120 40 C90 40, 60 40, 30 40"
                stroke="#6b4eff"
                strokeWidth="2"
                strokeDasharray="6 6"
                fill="none"
                />
            </svg>

            </div>


      </div>

      <CareerSection/>

      <LevelUpSection/>

      <ReportsSection/>
      <JobPathSection/>
      <CareerCTA/>

    </section>
  );
}
