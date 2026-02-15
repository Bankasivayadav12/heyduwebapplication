"use client";

import Image from "next/image";
import { Check } from "lucide-react";

const careerPoints = [
  {
    id: 1,
    text: "We'll match you with jobs that actually fit your vibe and what you studied (no random stuff)",
  },
  {
    id: 2,
    text: "Pick what you want, get your personalized career roadmap. It's giving main character energy",
  },
];

export default function CareerSection() {
  return (
    <section className="bg-[#f3f2f7] py-24 px-6 md:px-16 overflow-hidden">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold leading-snug text-black">
            Your career, but <br />
            <span className="text-[#2f57c7] font-bold">
              make it smart
            </span>
          </h2>

          {/* Points */}
          <div className="mt-10 space-y-6">

            {careerPoints.map((point) => (
              <div
                key={point.id}
                className="bg-white rounded-xl shadow-md p-6 flex gap-4 items-start"
              >
                {/* Check Icon */}
                <div className="w-8 h-8 rounded-full bg-[#e6f0ff] flex items-center justify-center shrink-0">
                  <Check size={18} className="text-[#2f57c7]" />
                </div>

                {/* Text */}
                <p className="text-gray-700 leading-relaxed text-[15px]">
                  {point.text}
                </p>
              </div>
            ))}

          </div>

        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="relative flex justify-center items-center">

          {/* Background Image (Grayscale) */}
          <div className="relative w-105 h-105 overflow-hidden shadow-xl">
            <Image
              src="/c-rap/career.png"   // replace with your grayscale background
              alt="Career Background"
              fill
              className="object-cover grayscale"
            />
          </div>

         
          

        </div>

      </div>

    </section>
  );
}
