"use client";
import Image from "next/image";

/* =========================
   WHO WE ARE DATA
========================= */
const whoWeAreData = [
  {
    id: "01",
    title: "Staff + Student + Alumni details",
    description:
      "Maintain College Staff, Students & Alumni details at one place and accessible anywhere in the world.",
    image: "/hero/Group 4.png",
    reverse: true,
  },
  {
    id: "02",
    title: "Inform, Interact, Import",
    description:
      "Connect and communicate with college students, staff and Alumni. Get the regular updates and interact.",
    image: "/hero/G-2.png",
    reverse: false,
  },
  {
    id: "03",
    title: "Document Storing & Sharing",
    description:
      "All college documents available on one click in your mobile.",
    image: "/hero/G-3.png",
    reverse: true,
  },
  {
    id: "04",
    title: "Personalized Career Path report",
    description:
      "Your career is not generic. Customize tailored personalized career report.",
    image: "/hero/G-4.png",
    reverse: false,
  },
];

/* =========================
   TESTIMONIAL DATA
========================= */
const testimonialData = [
  {
    logo: "/testimonial/Ellipse 13.png",
    title: "Catholic High School",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    logo: "/testimonial/Ellipse 14.png",
    title: "Dunman High School",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
  },
  {
    logo: "/testimonial/Ellipse 15.png",
    title: "National Junior College",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  },
];

export default function WhoWeAre() {
  return (
    <>
      {/* =========================
          WHO WE ARE SECTION
      ========================= */}
      <section className="bg-white py-20 px-6 md:px-16">

        <h2 className="text-center text-[24px] md:text-[36px] font-semibold text-black mb-16 md:mb-24">
          Who we are
        </h2>

        <div className="max-w-7xl mx-auto space-y-20 md:space-y-36">

          {whoWeAreData.map((item, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 items-center gap-10 md:gap-20"
            >
              {/* IMAGE */}
              <div
                className={`flex justify-center ${
                  item.reverse ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={320}
                  className="rounded-2xl shadow-xl w-full max-w-125"
                />
              </div>

              {/* TEXT */}
              <div
                className={`relative ${
                  item.reverse ? "md:order-1" : ""
                }`}
              >
                <span className="hidden md:block absolute -top-30 left-0 text-[90px] font-bold text-gray-200">
                  {item.id}
                </span>

                <span className="block md:hidden text-[40px] font-bold text-gray-300 mb-2">
                  {item.id}
                </span>

                <h3 className="text-[#2f57c7] font-semibold text-[16px] md:text-[18px]">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 text-[14px] md:text-[15px] leading-5.5 md:leading-6">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* =========================
          TESTIMONIAL SECTION
      ========================= */}
        <section className="bg-[#f4f3f7] py-10 px-16 md:px-90 gap-20">

      {/* Title */}
      <h2 className="text-center text-[22px] md:text-[32px] font-semibold text-black mb-12">
        Testimonial
      </h2>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {testimonialData.map((item, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-lg p-8 text-center 
                        hover:shadow-xl transition duration-300
                        ${index !== 0 ? "hidden md:block" : ""}
                      `}
          >
            {/* Logo */}
            <div className="flex justify-center mb-4">
              <Image
                src={item.logo}
                alt={item.title}
                width={70}
                height={70}
              />
            </div>

            {/* Title */}
            <h3 className="text-[#2f57c7] font-semibold text-[16px] mb-4">
              {item.title}
            </h3>

            {/* Text */}
            <p className="text-gray-600 text-[14px] leading-5.5">
              {item.text}
            </p>
          </div>
        ))}

      </div>

      {/* Navigation Buttons (Now visible on mobile also) */}
      <div className="flex justify-center md:justify-end gap-4 mt-10">
        <button className="w-10 h-10 rounded-full border border-[#2f57c7] text-[#2f57c7] hover:bg-[#2f57c7] hover:text-white transition">
          ‹
        </button>
        <button className="w-10 h-10 rounded-full bg-[#2f57c7] text-white hover:opacity-90 transition">
          ›
        </button>
      </div>

    </section>

    </>
  );
}
