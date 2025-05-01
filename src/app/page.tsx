import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <main className="flex items-center min-h-[88vh] p-8 ">
      <div className="w-[55%] justify-center flex ">
        <Image className="" src="/logo.png" alt="DNN Logo" width={900} height={1000} />
      </div>
      <div>
        <p className="text-[95px] font-bold uppercase tracking-wide leading-tight bg-gradient-to-r from-[#FFFF] to-[#FFDA97] bg-clip-text text-transparent">
          We are <br /> the media
          <br /> now
        </p>
        <button className="border px-4 py-2 rounded-full text-lg mt-6 cursor-pointer hover:scale-105 transition-all duration-300">
          Coming Soon
        </button>
      </div>
    </main>
  );
}
