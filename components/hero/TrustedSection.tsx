import Image from "next/image";

export default function TrustedSection() {
  return (
    <div className="relative w-full mt-20">

      {/* Curved Background */}
      <div className="bg-white rounded-t-[60px] pt-8 ">

        {/* Title */}
        <p className="text-center text-gray-700 font-medium text-[18px]  pt-2">
          Trusted by 100+ School & Colleges
        </p>

        {/* Logos Row */}
        <div className="flex items-center justify-center gap-30 flex-wrap px-6">

          <Image
            src="/hero/t6.png"
            alt="NUS"
            width={100}
            height={60}
            className="opacity-60 hover:opacity-100 transition"
          />

          <Image
            src="/hero/t5.png"
            alt="Asia Singapore"
            width={100}
            height={60}
            className="opacity-60 hover:opacity-100 transition"
          />

          <Image
            src="/hero/t4.png"
            alt="Brighton College"
            width={100}
            height={60}
            className="opacity-60 hover:opacity-100 transition"
          />

          <Image
            src="/hero/t3.png"
            alt="College"
            width={100}
            height={60}
            className="opacity-60 hover:opacity-100 transition"
          />

             <Image
            src="/hero/t7.png"
            alt="Brighton College"
            width={100}
            height={60}
            className="opacity-60 hover:opacity-100 transition"
          />

          <Image
            src="/hero/t1.png"
            alt="College"
            width={100}
            height={60}
            className="opacity-60 hover:opacity-100 transition"
          />

        </div>
      </div>
    </div>
  );
}
