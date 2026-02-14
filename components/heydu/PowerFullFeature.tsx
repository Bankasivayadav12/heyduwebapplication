"use client";

import Image from "next/image";

const features = [
  {
    title: "Dedicated Admin Portal",
    description:
      "A Single, Centralized Hub That Lets Administrators Effortlessly Manage Student And Staff Profiles While Providing A Dedicated Area For Handling All Course Materials.",
    icon: "/heydu/p-1.png",
    bg: "bg-[#f3e6dc]",
    iconbg: "bg-[#EFA722]",
  },
  {
    title: "Secure and Spam free",
    description:
      "Colleges Enrol Students Directly (No Self-Registration), Ensuring A Fully Protected Environment With Zero Spam.",
    icon: "/heydu/p-2.png",
    bg: "bg-[#dff0e3]",
    iconbg: "bg-[#32B232]",
  },
  {
    title: "Digital Announcements",
    description:
      "With A Single Click, Colleges Can Publish And Pin Important Notices, And The System Automatically Pushes Alerts To All Students.",
    icon: "/heydu/p-3.png",
    bg: "bg-[#e4eaf6]",
    iconbg: "bg-[#315FE0]",
    border: true,
  },
  {
    title: "In Class Threads for Staff and Students",
    description:
      "Classes Are Neatly Organized By Academic Year And Batch, Making It Simple To Locate And Join The Right Discussion Threads And Resources.",
    icon: "/heydu/p-4.png",
    bg: "bg-[#d9eef0]",
    iconbg: "bg-[#00BFBF]",
  },
  {
    title: "Structured Student Database",
    description:
      "The Student Registry Is Sorted By Batch, Specialization, And Department, Enabling Quick Identification And Retrieval While Safeguarding Student Privacy.",
    icon: "/heydu/p-5.png",
    bg: "bg-[#f5e0e0]",
    iconbg: "bg-[#FF3F3F]",
  },
  {
    title: "Student Material Management",
    description:
      "Materials Are Neatly Organized By Batch, Department, And Subject, And Can Be Shared Directly Within Discussion Threads For Instant Student Access.",
    icon: "/heydu/p-6.png",
    bg: "bg-[#f3e6c9]",
    iconbg: "bg-[#FFAE05]",
  },
];

export default function PowerfulFeatures() {
  return (
    <section className="bg-[#f4f3f7] py-20 px-6 md:px-16">

      {/* ================= HEADING ================= */}
      <div className="text-center mb-16">
        <h2 className="text-[28px] md:text-[34px] font-semibold text-gray-800">
          Powerful Features to{" "}
          <span className="text-[#2f57c7] font-bold">
            Elevate Your Mangement
          </span>
        </h2>
      </div>

      {/* ================= GRID ================= */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        {features.map((item, index) => (
          <div
            key={index}
            className={`rounded-2xl p-8 shadow-sm transition duration-300 hover:shadow-lg
              ${item.bg}
              ${item.border ? "border-2 border-[#2f57c7]" : ""}
            `}
          >
            {/* ICON */}
           {/* ICON */}
            <div
            className={`w-14 h-14 mb-6 flex items-center justify-center rounded-xl p-3 ${item.iconbg}`}
            >
            <Image
                src={item.icon}
                alt={item.title}
                width={28}
                height={28}
                className="object-contain"
            />
            </div>


            {/* TITLE */}
            <h3 className="text-[18px] font-semibold text-gray-800 mb-4">
              {item.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-[14px] text-gray-600 leading-[24px]">
              {item.description}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}
