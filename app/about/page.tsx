"use client";

import MeetOurTeam from "@/components/about/meetout";
import UpdatesSection from "@/components/about/update";
import VisionMission from "@/components/about/vison";

export default function AboutPage() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden py-28 px-6 md:px-16">

        {/* ===== GRADIENT BACKGROUND ===== */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f5f4f8] via-[#edeaf7] to-[#dcd3ef]" />

        {/* ===== CIRCLE ARC LINES ===== */}
        <div className="absolute inset-0 flex justify-center items-end pointer-events-none">
          <svg
            width="1400"
            height="700"
            viewBox="0 0 1400 700"
            className="opacity-50"
          >
            <circle cx="700" cy="700" r="600" stroke="#bba6e6" strokeWidth="1" fill="none" />
            <circle cx="700" cy="700" r="480" stroke="#bba6e6" strokeWidth="1" fill="none" />
            <circle cx="700" cy="700" r="360" stroke="#bba6e6" strokeWidth="1" fill="none" />
          </svg>
        </div>

        {/* ===== CONTENT ===== */}
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="text-[32px] md:text-[48px] font-bold text-[#2f57c7] mb-6">
            About Us
          </h1>

          <p className="text-gray-700 text-[15px] md:text-[18px] leading-[26px] md:leading-[30px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s.
          </p>
        </div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <VisionMission />

      <MeetOurTeam/>

      <UpdatesSection/>
    </>
  );
}
