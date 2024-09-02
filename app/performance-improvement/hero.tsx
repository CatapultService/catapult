/* eslint-disable @next/next/no-img-element */
import React from "react";

import FourthImg from "@/public/assets/homePage/howHelp/fourth.png";

interface HeroProps {
  heroText: string;
}


export default function Hero({ heroText }: HeroProps) {
  return (
    <>

      <div className="relative w-full text-white h-[60vh] sm:h-[80vh] md:h-[70vh] xl:h-[75vh] flex items-center justify-center">
        <img
          src={FourthImg.src}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="relative text-left z-10  w-full">
          <p className="text-balance px-10 md:px-20 tracking-widest text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#FFE600] md:leading-relaxed lg:leading-relaxed xl:leading-relaxed">
          {/* <p className="tracking-widest text-left px-10 md:px-36 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#FFE600] md:leading-relaxed lg:leading-relaxed xl:leading-relaxed"> */}
          {heroText}
          </p>
        </div>

      </div>
    </>
  );
}