"use client";

import DownloadSection from "@/components/heydu/download";
import ExperienceSection from "@/components/heydu/Experience";
import PowerfulFeatures from "@/components/heydu/PowerFullFeature";
import Image from "next/image";

export default function HeyduPage() {
  return (
    <section className="relative bg-[#f3f2f7] py-28 overflow-hidden">

      {/* ================= HEADER ================= */}
      <div className="text-center max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-[#2f57c7]">
          Heydu – College Digital Hub
        </h1>

        <p className="text-gray-600 mt-4 text-lg leading-relaxed">
          Heydu transforms campus life with a digital ecosystem for seamless
          networking and knowledge sharing
        </p>

        <button className="mt-8 bg-[#2f57c7] text-white px-8 py-3 rounded-md shadow-md hover:opacity-90 transition mx-auto">
          DOWNLOAD APP ⬇
        </button>
      </div>

      {/* ================= CENTER SECTION ================= */}
      <div className="relative mt-32 max-w-7xl mx-auto h-[700px]">

        {/* Purple Half Circle */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[750px] h-[380px] bg-[#e7d9fb] rounded-t-full"></div>

        {/* PHONE */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 z-20">
          <Image
            src="/navbar/mobile.png"
            alt="Phone"
            width={420}
            height={700}
          />
        </div>

        {/* ================= LEFT FEATURES ================= */}
        <div className="hidden md:block">

          {/* 01 */}
          <div className="absolute left-0 bottom-28 flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-md border border-purple-200">
            <span className="w-9 h-9 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
              01
            </span>
            <span className="text-sm font-medium text-gray-700">
              COLLEGE SIGNUP
            </span>
          </div>

          {/* 02 */}
          <div className="absolute left-0 top-[45%] flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-md border border-purple-200">
            <span className="w-9 h-9 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
              02
            </span>
            <span className="text-sm font-medium text-gray-700">
              UPLOAD STAFF AND STUDENT DETAILS
            </span>
          </div>

          {/* 03 */}
          <div className="absolute left-10 top-0 flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-md border border-purple-200">
            <span className="w-9 h-9 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
              03
            </span>
            <span className="text-sm font-medium text-gray-700">
              INSTALL HEYDU APP
            </span>
          </div>
        </div>

        {/* ================= RIGHT FEATURES ================= */}
        <div className="hidden md:block">

          {/* 04 */}
          <div className="absolute right-10 top-0 flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-md border border-purple-200">
            <span className="w-9 h-9 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
              04
            </span>
            <span className="text-sm font-medium text-gray-700">
              COLLEGE NOTIFY UPDATE AND EVENTS
            </span>
          </div>

          {/* 05 */}
          <div className="absolute right-0 top-[45%] flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-md border border-purple-200">
            <span className="w-9 h-9 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
              05
            </span>
            <span className="text-sm font-medium text-gray-700">
              STAFF DOCUMENT SHARING
            </span>
          </div>

          {/* 06 */}
          <div className="absolute right-0 bottom-28 flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-md border border-purple-200">
            <span className="w-9 h-9 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
              06
            </span>
            <span className="text-sm font-medium text-gray-700">
              STUDENT IN CLASS DISCUSSION
            </span>
          </div>
        </div>

        {/* ================= DOTTED SVG ARROWS ================= */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1200 700"
        >
          {/* Left Bottom Curve */}
          <path
            d="M300 600 Q500 650 600 600"
            stroke="#b78afc"
            strokeWidth="2"
            strokeDasharray="6 6"
            fill="transparent"
          />

          {/* Left Top Curve */}
          <path
            d="M250 150 Q500 50 600 150"
            stroke="#b78afc"
            strokeWidth="2"
            strokeDasharray="6 6"
            fill="transparent"
          />

          {/* Right Bottom Curve */}
          <path
            d="M900 600 Q700 650 600 600"
            stroke="#b78afc"
            strokeWidth="2"
            strokeDasharray="6 6"
            fill="transparent"
          />

          {/* Right Top Curve */}
          <path
            d="M950 150 Q700 50 600 150"
            stroke="#b78afc"
            strokeWidth="2"
            strokeDasharray="6 6"
            fill="transparent"
          />
        </svg>

      </div>

      {/* ================= MOBILE VERSION ================= */}
      <div className="md:hidden mt-20 px-6 space-y-6">
        {["01", "02", "03", "04", "05", "06"].map((id) => (
          <div
            key={id}
            className="flex items-center gap-4 bg-white px-6 py-4 rounded-full shadow-md border border-purple-200"
          >
            <div className="w-9 h-9 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
              {id}
            </div>
            <span className="text-sm font-medium text-gray-700">
              Feature {id}
            </span>
          </div>
        ))}
      </div>

      <PowerfulFeatures/>
      <ExperienceSection/>
      <DownloadSection/>

    </section>
  );
}
