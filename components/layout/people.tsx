/* eslint-disable @next/next/no-img-element */
import React from "react";
import People from "@/public/assets/people/people.png";

export default function people() {
  return (
    <div className=" bg-white px-10 md:px-20 text-black items-center">
      <div className="mx-auto min-w-6xl mb-16  md:px-14">
        <div className="flex flex-col mt-10 mb-2">
          <p className="text-sm text-left sm:text-lg md:text-2xl lg:text-3xl font-bold text-[#090E4A] ">
            OUR PEOPLE
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 mb-8 gap-6 ">
          <div className="">
            <div className="flex flex-col lg:flex-row items-center my-6 gap-4">
              <img src={People.src} alt="people" className="w-40 h-full" />
              <div className="flex flex-col justify-center items-center">
                <p className="text-4xl sm:text-xl md:text-2xl font-bold text-[#090E4A]">
                  {" "}
                  Ashish Khanna
                </p>
                <p className="py-2 text-xs lg:text-sm font-normal">
                  Co-founder & Chaiperson
                </p>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex flex-col lg:flex-row items-center my-6 gap-4">
              <img src={People.src} alt="people" className="w-40 h-full" />
              <div className="flex flex-col justify-center items-center">
                <p className="text-4xl sm:text-xl md:text-2xl font-bold text-[#090E4A]">
                  {" "}
                  Nikunj Gupta
                </p>
                <p className="py-2 text-xs lg:text-sm font-normal">
                  Co-founder & CEO
                </p>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex flex-col lg:flex-row items-center my-6 gap-4">
              <img src={People.src} alt="people" className="w-40 h-full" />
              <div className="flex flex-col justify-center items-center">
                <p className="text-4xl sm:text-xl md:text-2xl font-bold text-[#090E4A]">
                  {" "}
                  Anand Shetty
                </p>
                <p className="py-2 text-xs lg:text-sm font-normal">
                  Co-founder & COO
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
