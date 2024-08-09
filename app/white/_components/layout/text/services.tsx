/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import img1 from "@/public/assets/row_1.png";
import img2 from "@/public/assets/row_2.png";
import img3 from "@/public/assets/row_3.png";

export default function services() {
  return (
    <div className=" bg-white px-10 md:px-20 text-[#202020] flex">
      <div className="mx-auto max-w-6xl mb-20 ">
        <p className="mb-6 text-left leading-relaxed text-xs sm:text-sm md:text-base   text-[#202020]">
          A future & battle ready Finance Organisation needs a new operating
          model, with not only new Finance Talent Capabilities, but a digital
          transformation of how data is collected, recorded, validated,
          reported. At Catapult through a data & AI centric managed services
          model, we help our clients achieve Enterprise Performance Excellence
          while they can continue to focus on Revenue growth & business
          outcomes.
        </p>

        <p className="mb-6 text-left leading-relaxed text-xs sm:text-sm md:text-base   text-[#202020]">
          To know how we can partner, please do explore Our Services, Technology
          & Team Capabilities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 mb-8 lg:ml-20 mx-8 gap-6 ">
          <div className="text-left text-xl  my-3 ">
            <img
              src={img1.src}
              alt="Our Services"
              className="mb-4 object-cover h-full w-full"
            />
            <p className="font-bold">Our Services</p>
          </div>
          <div className="text-left text-xl  my-3">
            <img
              src={img2.src}
              alt="Technology"
              className="mb-4 object-cover h-full w-full"
            />
            <p className="font-bold">Technology</p>
          </div>
          <div className="text-left text-xl  my-3">
            <img
              src={img3.src}
              alt="Team"
              className="mb-4 object-cover h-full w-full"
            />
            <p className="font-bold">Team</p>
          </div>
        </div>
      </div>
    </div>
  );
}
