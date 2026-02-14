"use client";

const levelUpData = [
  {
    id: "01",
    title: "Targeted Internships",
    description:
      "Get Internships That Actually Matter – No Coffee-Running BS, Just Real Experience That Looks Fire On Your Resume",
    border: "border-blue-500",
    bottomColor: "bg-gradient-to-r from-blue-500 to-purple-500",
    active: true,
  },
  {
    id: "02",
    title: "Career Growth",
    description:
      "See Where You'll Be In 5 Years – We'll Show You The Whole Career Glow-Up Journey Across Different Industries",
    bottomColor: "bg-yellow-500",
  },
  {
    id: "03",
    title: "Fill the Skill Gap",
    description:
      "Learn The Skills They Don't Teach In Class – The Actual Stuff That'll Help You Stand Out And Land Opportunities",
    bottomColor: "bg-orange-500",
  },
  {
    id: "04",
    title: "Role Clarity",
    description:
      "Your Step-By-Step Guide To Securing The Job In Whatever Country You're Trying To Work In",
    bottomColor: "bg-teal-500",
  },
];

export default function LevelUpSection() {
  return (
    <section className="bg-[#E4C9FF] py-24 px-6 md:px-16">

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Level up <span className="text-[#2f57c7]">together</span>
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">

        {levelUpData.map((item, index) => (
          <div
            key={index}
            className={`relative bg-white rounded-xl shadow-md p-8 transition-all duration-300
              ${item.active ? "border-2 border-blue-500" : "border border-gray-200"}
            `}
          >

            {/* Number Badge */}
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6 text-gray-600 font-semibold text-lg">
              {item.id}
            </div>

            {/* Title */}
            <h3 className="font-semibold text-lg text-gray-800 mb-4">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.description}
            </p>

            {/* Bottom Color Strip */}
            <div
              className={`absolute bottom-0 left-0 w-full h-[6px] rounded-b-xl ${item.bottomColor}`}
            ></div>

          </div>
        ))}

      </div>
    </section>
  );
}
