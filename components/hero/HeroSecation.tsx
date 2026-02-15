"use client";
import Button from "../ui/Button";
import Image from "next/image";
import TrustedSection from "./TrustedSection";
import WhoWeAre from "./Whoweare";
import Link from "next/link";


export default function HeroSection() {
  return (
    <>
      {/* ===================== DESKTOP HERO ===================== */}
      <section className="hidden md:block relative overflow-hidden bg-[#f4f3f7]">
        <div className="min-h-screen mx-auto pl-12 pr-12 pt-10 pb-20 grid md:grid-cols-2 items-start gap-x-24 relative z-10">
          {/* LEFT CONTENT */}
          <div className="self-start z-10">
            <p className="text-[#373737] text-[20px] text-bold lg:text-[40px] font-medium ">
              One Smart Platform for Complete
            </p>

            <h1 className="text-[40px] lg:text-[40px] leading-11.25 lg:leading-16 font-black text-[#2f57c7]">
              Campus Management
            </h1>

            <p className="mt-6 text-[20px] leading-7.75 text-[#6B6B6B] max-w-172.5">
              Heydu helps colleges manage students, staff, alerts, events, and
              academic data effortlessly. One secure platform to access
              everything, anytime, anywhere.
            </p>

            <div className="mt-8 flex gap-6">
              <Button variant="primary"><Link href="/products/heydu">HEYDU</Link></Button>
              <Button variant="outline"><Link href="/products/c-rap">C-RAP</Link></Button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center items-center min-h-62.5">
            {/* Background Circles */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="absolute w-190.5 h-190.5 rounded-full bg-purple-300 opacity-30"></div>
              <div className="absolute w-170.5 h-170.5 rounded-full bg-purple-400 opacity-40"></div>
            </div>

            {/* Phone */}
            <div className="relative z-20">
              <Image
                src="/navbar/mobile.png"
                alt="Phone"
                width={700}
                height={700}
              />
            </div>

            {/* Floating Card */}
            <div className="absolute left-12.5 top-57 w-69.25 h-50 bg-white rounded-[10px] shadow-[0_20px_40px_rgba(0,0,0,0.08)] p-6 z-30">
              <div className="space-y-4 text-[14px] text-gray-700">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#97B3FF] rounded-full flex items-center justify-center">
                    <Image
                      src="/hero/Group.png"
                      alt="Students"
                      width={20}
                      height={20}
                    />
                  </div>
                  <span>Students Database</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#00BFBF] rounded-full flex items-center justify-center">
                    <Image
                      src="/hero/vector.png"
                      alt="Graduation"
                      width={20}
                      height={20}
                    />
                  </div>
                  <span>Graduation</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#97FF97] rounded-full flex items-center justify-center">
                    <Image
                      src="/hero/Group 2.png"
                      alt="Certification"
                      width={20}
                      height={20}
                    />
                  </div>
                  <span>Certification</span>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="absolute left-20 top-32.5 z-20">
              <Image
                src="/navbar/vector 2.png"
                alt="Arrow"
                width={32}
                height={100}
              />
            </div>
          </div>
        </div>

        <div className="absolute top-110 bottom-30 left-0 w-full z-10 ">
          <TrustedSection />
        </div>
      </section>

      {/* ===================== MOBILE HERO ===================== */}
     <section className="block md:hidden relative overflow-hidden bg-lineart-to-b from-[#f3f2f7] via-[#edeaf7] to-[#e6e2f4] pt-6 pb-12">

            <div className="px-2 flex flex-col items-center text-center">

                {/* PHONE + BACKGROUND */}
                <div className="relative flex justify-center items-center mb-35 mt-25 ">

                {/* OUTER CIRCLE */}
                <div className="absolute w-140 h-140 rounded-full bg-[#A65CEF] opacity-30"></div>

                {/* INNER CIRCLE */}
                <div className="absolute w-107.5 h-107.5 rounded-full bg-[#A65CEF] opacity-40"></div>

                {/* PHONE */}
                {/* PHONE */}
                    <div className="relative translate-x-12">
                    <Image
                        src="/navbar/mobile.png"
                        alt="Phone"
                        width={580}
                        height={580}
                    />
                    </div>


                {/* FLOATING CARD */}
                <div className="absolute left-0 top-30 w-47.5 bg-white rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] p-2 z-20">

                    <div className="space-y-3 text-[13px] text-gray-700">

                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#97B3FF] rounded-full flex items-center justify-center">
                        <Image src="/hero/Group.png" alt="" width={12} height={12} />
                        </div>
                        <span>Students Database</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#00BFBF] rounded-full flex items-center justify-center">
                        <Image src="/hero/vector.png" alt="" width={12} height={12} />
                        </div>
                        <span>Graduation</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#97FF97] rounded-full flex items-center justify-center">
                        <Image src="/hero/Group 2.png" alt="" width={12} height={12} />
                        </div>
                        <span>Certification</span>
                    </div>

                    </div>
                </div>

                {/* ARROW */}
                <div className="absolute left-20 top-15 z-20">
                    <Image
                    src="/navbar/vector 2.png"
                    alt="Arrow"
                    width={18}
                    height={40}
                    />
                </div>

                </div>


                {/* TEXT CONTENT */}
                <p className="self-start text-[#373737] text-[18px] font-medium mb">
                One Smart Platform for complete
                </p>

                <h1 className="self-start text-[18px] leading-8.5 font-black text-[#2f57c7] mb-2">
                Campus Management
                </h1>

                <p className="text-[18px] leading-6.5 text-[#6B6B6B]  max-w-162.5 w-full wrap-break-words ">
                Heydu helps colleges manage students, staff, alerts, events,
                and academic data effortlessly. One secure platform to access
                everything, anytime, anywhere.
                </p>


                {/* BUTTONS (SIDE BY SIDE like screenshot) */}
                <div className="mt-6 flex gap-4 justify-center w-full">
                <Button variant="primary" className="w-35">
                    HEYDU
                </Button>

                <Button variant="outline" className="w-35">
                    C-RAP
                </Button>
                </div>

        
            </div>

            {/* ================= TRUSTED SECTION ================= */}
          <div className="mt-10 left-0 w-full z-10  ">

            <div className="bg-white shadow-lg py-10 px-6">

              {/* Title */}
              <h3 className="text-[16px] font-semibold text-center text-gray-700 mb-5  ">
                Trusted by Leading Institutions
              </h3>

              {/* Logos Grid */}
              <div className="flex gap-6 place-items-center">

                <Image
                  src="/hero/t3.png"
                  alt="Institution 1"
                  width={100}
                  height={40}
                  className="object-contain opacity-70 hover:opacity-100 transition"
                />

                <Image
                  src="/hero/t5.png"
                  alt="Institution 2"
                  width={100}
                  height={40}
                  className="object-contain opacity-70 hover:opacity-100 transition"
                />

                <Image
                  src="/hero/t7.png"
                  alt="Institution 3"
                  width={100}
                  height={40}
                  className="object-contain opacity-70 hover:opacity-100 transition"
                />

               

              </div>

            </div>

          </div>


          
     </section>
    
     <WhoWeAre/>

    </>
  );
}
