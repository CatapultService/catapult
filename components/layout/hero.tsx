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
        <div className="relative text-left z-10">
          <p className="tracking-widest px-32 text-xl sm:text-2xl md:text-4xl lg:text-8xl xl:text-8xl font-bold">
            We make the complex, human
          </p>
        </div>
      </div>


    </>
  );
}