"use client";

import Image from "next/image";
import { Lightbulb, Target } from "lucide-react";

const visionMissionData = [
  {
    id: 1,
    title: "Vision",
    description:
      "Create a unified digital campus where every student effortlessly connects, shares knowledge, and fast-tracks their career success.",
    image: "/about/a-1.png",
    icon: Lightbulb,
    reverse: false, // image left, text right
  },
  {
    id: 2,
    title: "Mission",
    description:
      "Heydu builds a digital campus ecosystem that makes networking and knowledge sharing seamless, giving every student the tools and support they need to speed up their career journey.",
    image: "/about/a-2.png",
    icon: Target,
    reverse: true, // text left, image right
  },
];

export default function VisionMission() {
  return (
    <section className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-2 md:px-2 space-y-16 md:space-y-20">

    {visionMissionData.map((item) => {
      const Icon = item.icon;

      return (
        <div
          key={item.id}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* IMAGE */}
          <div className={`${item.reverse ? "order-1 md:order-2" : ""}`}>
            <Image
              src={item.image}
              alt={item.title}
              width={600}
              height={380}
              className="rounded-xl shadow-lg w-full"
            />
          </div>

          {/* TEXT */}
          <div className={`${item.reverse ? "order-2 md:order-1" : ""}`}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-[#2f57c7] text-white rounded-full flex items-center justify-center">
                <Icon size={22} />
              </div>
              <h3 className="text-[20px] font-semibold text-black">
                {item.title}
              </h3>
            </div>

            <p className="text-gray-600 leading-[26px] text-[15px]">
              {item.description}
            </p>
          </div>
        </div>
      );
    })}

  </div>
</section>

  );
}
