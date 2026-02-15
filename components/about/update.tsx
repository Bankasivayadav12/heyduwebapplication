"use client";

const updatesData = [
  {
    id: 1,
    title:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised",
    date: "2026 - 02 - 13",
    highlight: true,
  },
  {
    id: 2,
    title:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    date: "2026 - 02 - 13",
  },
  {
    id: 3,
    title:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections",
    date: "2026 - 02 - 13",
  },
  {
    id: 4,
    title:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    date: "2026 - 02 - 13",
  },
  {
    id: 5,
    title:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete",
    date: "2026 - 02 - 13",
  },
];

export default function UpdatesSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      
      {/* Title */}
      <h2 className="text-center text-[22px] md:text-[26px] font-semibold text-[#333] mb-12">
        Updates
      </h2>

      {/* Card */}
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-8 md:p-10">

        <div className="space-y-6">
          {updatesData.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-start gap-6"
            >
              {/* Text */}
              <p
                className={`text-[14px] md:text-[15px] leading-5.5 md:leading-6 ${
                  item.highlight
                    ? "text-[#2f57c7] font-medium"
                    : "text-gray-600"
                }`}
              >
                {item.title}
              </p>

              {/* Date */}
              <span className="text-[13px] text-gray-400 whitespace-nowrap">
                {item.date}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
