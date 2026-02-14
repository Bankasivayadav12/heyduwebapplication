"use client";

import Image from "next/image";

const steps = [
  {
    id: "01",
    title: "JOINING COLLEGE",
    image: "/crap/step1.png",
    position: "left-bottom",
  },
  {
    id: "02",
    title: "BUY C-RAP",
    image: "/crap/step2.png",
    position: "top",
  },
  {
    id: "03",
    title: "GET YOUR FIRST JOB",
    image: "/crap/step3.png",
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
        <div className="relative flex justify-center items-center h-[500px]">

          {/* Purple Glow Background */}
          <div className="absolute bottom-0 w-[350px] h-[350px] bg-purple-200 rounded-full blur-3xl opacity-60"></div>

          {/* Center C-RAP Logo */}
          <div className="relative z-10 w-32 h-32 bg-[#5a2ca0] rounded-full flex items-center justify-center shadow-xl">
            <Image
              src="/crap/logo.png"
              alt="C-RAP"
              width={70}
              height={70}
            />
          </div>

          {/* Steps using map */}
          {steps.map((step, index) => {
            let positionClass = "";

            if (step.position === "top") {
              positionClass = "absolute -top-4";
            }
            if (step.position === "left-bottom") {
              positionClass = "absolute left-0 bottom-10";
            }
            if (step.position === "right-bottom") {
              positionClass = "absolute right-0 bottom-10";
            }

            return (
              <div
                key={step.id}
                className={`${positionClass} flex flex-col items-center`}
              >
                <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={50}
                    height={50}
                  />
                </div>

                <div className="mt-3 bg-white border border-purple-300 rounded-full px-4 py-2 shadow-md">
                  <span className="text-xs text-gray-600 mr-2">
                    {step.id}
                  </span>
                  <span className="text-xs font-medium text-gray-700">
                    {step.title}
                  </span>
                </div>
              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}
