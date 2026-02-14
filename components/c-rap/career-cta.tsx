"use client";

import Image from "next/image";

export default function CareerCTA() {
  return (
    <section className="relative w-full overflow-hidden 
                        bg-gradient-to-r from-[#6E3BB6] to-[#6A36B0] 
                        py-10">

      {/* ================= WAVE BACKGROUND LINES ================= */}
      <div className="absolute inset-0 opacity-20">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
        >
          <path
            fill="none"
            stroke="white"
            strokeWidth="1"
            d="M0,180 C200,120 400,240 600,180 C800,120 1000,240 1200,180 C1300,160 1400,200 1440,180"
          />
          <path
            fill="none"
            stroke="white"
            strokeWidth="1"
            d="M0,220 C250,160 450,280 650,220 C850,160 1050,280 1250,220 C1350,200 1420,240 1440,220"
          />
        </svg>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto 
                      flex flex-col md:flex-row 
                      items-center justify-between gap-10">

        {/* LEFT TEXT */}
        <h2 className="text-white text-2xl md:text-3xl lg:text-4xl 
                       font-semibold leading-relaxed 
                       max-w-2xl text-center md:text-left">
          We mix tech + skills to help you win at the career game.
          <br className="hidden md:block" />
          No unnecessary complexity, just results.
        </h2>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-20">

          {/* Curved Arrow Image */}
          <div className="relative w-[120px] h-[60px] hidden md:block">
            <Image
              src="/c-rap/ARROW.png"   // <-- your arrow image path
              alt="Curved Arrow"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Button */}
          <button className="bg-[#2F57C7] text-white 
                             px-20 py-4 rounded-md 
                             shadow-md hover:opacity-90 
                             transition whitespace-nowrap">
            Let’s get it right this time
          </button>

        </div>

      </div>
    </section>
  );
}
