"use client";

import Image from "next/image";
import { Check } from "lucide-react";

export default function JobPathSection() {
  return (
    <section className="bg-[#f4f3f7] py-20 px-6 md:px-16">

      <div className="max-w-12xl mx-auto">

        {/* Main Soft Background Card */}
        <div className="bg-[#e9ecf5] rounded-3xl p-8 md:p-14">

          <div className="grid md:grid-cols-2 items-center gap-12">

            {/* ================= LEFT SIDE ================= */}
            <div className="relative flex justify-center">

              {/* Background Image Circle */}
              <div
                className="relative w-70 h-70 md:w-105 md:h-105
                            rounded-3xl shadow-lg bg-center bg-cover bg-no-repeat"
                style={{
                    backgroundImage: "url('/c-rap/j-1.png')",
                }}
                >
                </div>


            </div>

            {/* ================= RIGHT SIDE ================= */}
            <div className="space-y-6">

              <h2 className="text-3xl md:text-4xl font-semibold leading-snug text-gray-800">
                Built different with{" "}
                <span className="text-[#2f57c7] font-bold">
                  tech that actually works
                </span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                One platform for literally everything college-related.
                Students, staff, alumni, all your data - access it anywhere,
                anytime. Simple.
              </p>

              {/* Bullet Points */}
              <div className="space-y-5 mt-6">

                {[
                  "Get certs that actually matter - level up your skills and make your profile pop",
                  "Work on real projects, not textbook stuff - build your portfolio while gaining actual experience",
                  "Learn from people who've been there, done that - get mentored by pros who actually know their stuff",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">

                    {/* Blue Check Icon */}
                    <div className="w-8 h-8 bg-[#2f57c7] rounded-full flex items-center justify-center shrink-0">
                      <Check className="text-white w-5 h-5" />
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                      {item}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
