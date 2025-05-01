import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function TeamPage() {
  return (
    <main className="p-4">
      <div className="container mx-auto text-center mt-4">
        <h1 className="text-[75px] font-bold uppercase tracking-wide bg-gradient-to-r from-[#ffffff] to-[#FFDA97] bg-clip-text text-transparent">
          Team
        </h1>
      </div>

      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="relative group">
            <div className="bg-[#1a1a1a] rounded-[32px] p-6 transform transition-all duration-300 shadow shadow-amber-400 hover:scale-[1.02] hover:shadow hover:shadow-amber-400">
              <div className="aspect-square relative overflow-hidden rounded-[24px] mb-6">
                <Image src="/doge.png" alt="Sir Doge Of The Coin" fill className="object-cover" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium text-white mb-1">Sir Doge Of The Coin</h3>
                <p className="text-gray-500 mb-1">Co-Founder</p>
                <Link
                  href="https://x.com/dogeofficialceo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-300 hover:text-[#FFDA97] transition-colors"
                >
                  <Image src="/twitter.png" alt="Twitter" width={30} height={30} />
                  <span>@dogeofficialceo</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="bg-[#1a1a1a] rounded-[32px] p-6 transform transition-all duration-300 shadow shadow-amber-400 hover:scale-[1.02] hover:shadow hover:shadow-amber-400">
              <div className="aspect-square relative overflow-hidden rounded-[24px] mb-6">
                <Image src="/sizechad.png" alt="Size Chad" fill className="object-cover" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium text-white mb-1">Size Chad</h3>
                <p className="text-gray-500 mb-1">Co-Founder</p>
                <Link
                  href="https://x.com/sizechad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-300 hover:text-[#FFDA97] transition-colors"
                >
                  <Image src="/twitter.png" alt="Twitter" width={30} height={30} />
                  <span>@sizechad</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
