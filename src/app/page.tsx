import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <main className="mt-14 md:mt-0 flex flex-col md:flex-row items-center min-h-[88vh] p-4 md:p-8 gap-12 xl:gap-24 xl:ml-20 lg:ml-10">
      <div className="w-full md:w-[500px] lg:w-[550px] xl:w-[600px] justify-center flex">
        <Image 
          className="w-[300px] md:w-[850px]" 
          src="/logo.png" 
          alt="DNN Logo" 
          width={200} 
          height={200} 
        />
      </div>
      <div className="w-full md:w-auto text-center md:text-left xl:mt-14">
        <p className="text-5xl lg:text-[65px] xl:text-[80px] font-bold uppercase tracking-wide leading-tighten bg-gradient-to-r from-[#FFFF] to-[#FFDA97] bg-clip-text text-transparent">
          We are <br className="hidden md:block" /> the media
          <br className="hidden md:block" /> now
        </p>
        <button className="border px-4 py-2 rounded-full text-lg mt-6 cursor-pointer hover:scale-105 transition-all duration-300">
          Coming Soon
        </button>
      </div>
    </main>
  );
}
