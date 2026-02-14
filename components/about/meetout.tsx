"use client";

import Image from "next/image";

const teamMembers = [
  { id: 1, name: "Srinivas", image: "/about/users.png" },
  { id: 2, name: "Sreeja Reddy", image: "/about/users.png" },
  { id: 3, name: "Suman kota", image: "/about/users.png" },
  { id: 4, name: "Harish Bysani", image: "/about/users.png" },
  //{ id: 5, name: "Siddharth", image: "/about/users.png" },
];

export default function MeetOurTeam() {
  return (
    <section className="bg-[#FAF5FF] py-16 px-6 md:px-16 self-start">
      
      {/* Title */}
      <h2 className="text-center text-[24px] md:text-[28px] font-semibold text-[#3d3d3d] mb-12">
        Meet Our Team
      </h2>

      {/* Cards */}
      <div className=" max-w-7xl mx-auto flex flex-wrap justify-center gap-6">

        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="
              relative
              flex items-center gap-4
              bg-[#eeeeef]
              px-8 py-5
              rounded-[35px]
              shadow-[0_20px_40px_rgba(0,0,0,0.08)]
              w-[260px]
            "
          >
            {/* Thin Top Purple Curve */}
            <div
              className="
                absolute
                top-0
                left-0
                right-0
                h-[4px]
                rounded-t-[35px]
                bg-gradient-to-r
                from-[#8e5cff]
                to-[#b57bff]
              "
            />

            {/* Icon Circle */}
            <div className="
              w-12 h-12
              rounded-full
              bg-[#dcd1f5]
              flex items-center justify-center
            ">
              <Image
                src={member.image}
                alt={member.name}
                width={22}
                height={22}
              />
            </div>

            {/* Name */}
            <h3 className="text-[18px] font-medium text-[#3d3d3d]">
              {member.name}
            </h3>
          </div>
        ))}

      </div>
    </section>
  );
}
