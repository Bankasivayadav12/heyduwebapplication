"use client";

import Image from "next/image";

export default function ReportsSection() {
  return (
    <section className="bg-[#f4f3f7] py-20 px-6 md:px-16">

      <div className="max-w-10xl mx-auto">

        {/* Main Purple Border Container */}
        <div className="border-2 border-[#A65CEF] rounded-2xl p-10 md:p-16 relative overflow-hidden px-10">

          <div className="grid md:grid-cols-2 items-center gap-12">

            {/* ================= LEFT SIDE ================= */}
            <div className="relative flex justify-center items-center">

              {/* 🔥 Soft Abstract Blob Background (CSS Based) */}
              <div className="absolute w-[420px] h-[320px] 
                            bg-[#c18cf3]
                              rounded-[60%_40%_50%_50%/50%_60%_40%_50%]
                              opacity-90">
              </div>

              {/* Graph Image */}
              <Image
                src="/c-rap/c1.png"
                alt="Graph"
                width={350}
                height={300}
                className="object-contain relative z-10"
              />

            </div>

            {/* ================= RIGHT SIDE ================= */}
            <div className="space-y-8 space-x-10 px-25 gap-4">

              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 leading-relaxed">
                Not gonna bore you with filler text – just know our reports hit
                different. Real insights, no fluff.
              </h2>

              <button className="bg-[#3d3d3d] text-white px-8 py-4 rounded-md shadow-md hover:opacity-90 transition">
                Check out what we're talking about
              </button>

            </div>

          </div>

          {/* ================= CENTER ARROW ================= */}
          <div className="hidden md:block absolute left-1/2  top-1/2 -translate-x-1/2 translate-y-16 px-4">

            <Image
              src="/c-rap/c.png"
              alt="Arrow"
              width={220}
              height={80}
              className="object-contain"
            />

          </div>

        </div>

      </div>

    </section>
  );
}
