/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import img1 from "@/public/assets/row_1.png";
import img2 from "@/public/assets/row_2.png";
import img3 from "@/public/assets/row_3.png";
import Logo from "@/public/assets/logo.png";

export default function insights() {
  return (
    <>
      <div className="flex bg-white px-10 md:px-20 mb-10 text-[#202020]">
        <div className="mx-auto max-w-6xl ">
        <div className="flex flex-col mt-6">
          <p className="text-sm text-left sm:text-lg md:text-2xl lg:text-3xl font-bold text-[#090E4A] ">
            INSIGHTS
          </p>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-3 mb-16 gap-6 ">
            <div className=" my-6">
              <img
                src={img1.src}
                alt="Our Services"
                className="mb-2 object-cover h-full w-full"
                style={{ filter: "brightness(70%)" }}
              />
              <p className="font-semibold  justify-center text-lg">
              Future of Finance is autonomous
              </p>
            </div>

            <div className=" my-6">
              <img
                src={img1.src}
                alt="Our Services"
                className="mb-2 object-cover h-full w-full"
                style={{ filter: "brightness(70%)" }}
              />
              <p className="font-semibold  justify-center text-lg">
              Future of Finance is autonomous
              </p>
            </div>

            <div className=" my-6">
              <img
                src={img1.src}
                alt="Our Services"
                className="mb-2 object-cover h-full w-full"
                style={{ filter: "brightness(70%)" }}
              />
              <p className="font-semibold  justify-center text-lg">
              Future of Finance is autonomous
              </p>
            </div>
           
          </div>
        </div>
      </div>

     
    </>
  );
}
