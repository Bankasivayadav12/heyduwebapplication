"use client";

import { useState } from "react";
import Image from "next/image";

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const tabs = ["Dashboard", "College", "Student"];

  return (
    <section className="bg-[#f4f3f7] py-20 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Purple Container */}
        <div className="bg-linear-to-br from-[#613190] to-[#613190] 
                        rounded-2xl px-8 md:px-16 py-16 text-white relative overflow-hidden">

          {/* ================= TOP CONTENT ================= */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">

            {/* LEFT TITLE */}
            <h2 className="text-3xl md:text-4xl font-semibold">
              Experience of Heydu
            </h2>

            {/* RIGHT DESCRIPTION */}
            <p className="max-w-xl text-sm md:text-base text-purple-100 leading-relaxed">
              The Student Registry is sorted by batch, specialization, and department,
              enabling quick identification and retrieval while safeguarding student privacy.
            </p>

          </div>

          {/* ================= TABS ================= */}
          <div className="flex gap-10 mt-12 border-b border-purple-300/30 pb-3">

            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative pb-2 text-lg transition-all duration-300
                  ${activeTab === tab
                    ? "text-white font-medium"
                    : "text-purple-200 hover:text-white"
                  }`}
              >
                {tab}

                {/* Active Underline */}
                {activeTab === tab && (
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white rounded-full"></span>
                )}
              </button>
            ))}

          </div>

          {/* ================= IMAGE ================= */}
          <div className="mt-16 flex justify-center">
            <Image
              src="/heydu/dashboard.png"  // replace with your laptop image
              alt="Experience Preview"
              width={950}
              height={650}
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
