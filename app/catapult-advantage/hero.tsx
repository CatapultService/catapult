import React from "react";

interface HeroProps {
  heroText: string;
}


export default function Hero({ heroText }: HeroProps) {
  return (
    <>

      <div className="relative w-full text-white h-[60vh] sm:h-[80vh] md:h-[70vh] lg:h-[85vh] xl:h-[90vh] flex items-center justify-center">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
        >
          <source src="assets/catapultAdvantage/hero.mp4" type="video/mp4" />
        </video>
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