// "use client";
import React, { useEffect, useRef } from "react";

export default function TextPage() {
  
  return (
    <>
       <div className=" bg-white px-10 md:px-20 text-black flex items-center">
        <div className="mx-auto max-w-6xl my-5">
          <p className="my-16 text-base leading-relaxed text-left">
          Catapult is a &quot;Social Enterprise Platform&quot; that is committed to both sides of the equation. We want to build lasting customer relationships by driving change & creating value. Equally we are committed to nurtuting talent in an inclusive way that creates a sustainable growth model.
          </p>
          {/* <Separator className="max-w-xl mx-auto" /> */}
          <div className="flex flex-col  mt-16 mb-6">
            <p className="text-sm sm:text-lg md:text-2xl lg:text-3xl mb-6 font-bold text-[#090E4A] text-left">
            Our Aspiration - Sustainable Value Creation through Inclusivity
            </p>
            <p className=" text-base leading-relaxed  text-left">
            We believe that every individual, regardless of their circumstances, deserves the opportunity to reach their full potential. This is why we are committed to hiring talent that may have faced challenges due to factors beyond their control, often referred to as &quot;Ovarian Lottery.&quot;
            </p>
            <p className=" my-8 text-base leading-relaxed text-left">
            Consequently, our focus is more on identifying talented individuals who possess skills & drive to succeed, rather than certifications. We offer comprehensive training programs, mentorship, and career development opportunities to equip our employees with the tools they need to thrive.
            </p>
            <p className=" mb-8 text-base leading-relaxed text-left">
            By providing employment opportunities in their hometowns, we aim to break down geographical barriers and empower our talent to contribute to their local communities. Our goal is to create a supportive and inclusive work environment where our talent can flourish professionally while making a positive impact on their families & communities.
            </p>
            <p className=" mb-8 text-base leading-relaxed text-left">
            Through our commitment to diversity and equality, we strive to build a better future for all.
            </p>
          </div>

          
        </div>
      </div>
    </>
  );
}