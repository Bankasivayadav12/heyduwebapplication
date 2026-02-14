"use client";

import { Download } from "lucide-react";

export default function DownloadSection() {
  return (
    <section className="bg-[#ECD9FF] py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#373737] leading-snug">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </h2>

        {/* Sub Text */}
        <p className="mt-6 text-gray-500 text-sm md:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        {/* Button */}
        <button className="mt-8 inline-flex items-center gap-2 bg-[#2f57c7] 
                           text-white px-8 py-3 rounded-md 
                           shadow-md hover:bg-[#264bb0] 
                           transition duration-300">
          DOWNLOAD APP
          <Download size={18} />
        </button>

      </div>
    </section>
  );
}
