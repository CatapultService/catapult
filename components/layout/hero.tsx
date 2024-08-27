import React from "react";
export default function Hero() {
  return (
    <>

      <div className="relative w-full text-white h-[60vh] sm:h-[80vh] md:h-[90vh] lg:h-[88vh] xl:h-[100vh] flex items-center justify-center">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
        >
          <source src="assets/Catapult.mp4" type="video/mp4" />
        </video>
        <div className="relative text-left z-10  ">
          <p className="text-balance px-10 md:px-36 tracking-widest text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#FFE600] md:leading-relaxed lg:leading-relaxed xl:leading-relaxed">
          {/* <p className="tracking-widest text-left px-10 md:px-36 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#FFE600] md:leading-relaxed lg:leading-relaxed xl:leading-relaxed"> */}
          Enterprise Performance Transformation Powered by Data, Ai & Inclusivity
          </p>
        </div>
      </div>
    </>
  );
}