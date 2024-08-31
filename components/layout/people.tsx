/* eslint-disable @next/next/no-img-element */
import React from "react";
import People from "@/public/assets/people/people.png";

import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

import { ChevronRight, ChevronLeft } from "lucide-react";

import Article1 from "@/public/assets/insights/Article_1.png";
import Article5 from "@/public/assets/insights/Article_5.png";
import Article11 from "@/public/assets/insights/Article_11.png";

export default function people() {
  return (
    <div className="flex bg-white px-10 md:px-20 mb-10 text-[#202020]">
      <div className="max-w-8xl w-full">
        {/* <div className="mx-auto min-w-6xl mb-8 px-0 xl:px-14"> */}
        <div className="flex flex-col ">
          <p className="text-sm text-left sm:text-lg md:text-2xl lg:text-3xl font-bold text-[#090E4A] ">
            Our People
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 justify-between my-4">
            <div className=" hover:shadow-lg hover:border-1 border-gray-200">
              <div className="flex flex-col lg:flex-row items-center justify-center my-6 mx-6 gap-4">
                <img src={People.src} alt="people" className="w-40 h-full" />
                <div className="flex flex-col justify-center  md:items-start items-cente">
                  <p className="text-4xl sm:text-xl md:text-2xl font-bold text-[#090E4A]">
                    {" "}
                    Ashish Khanna
                  </p>
                  <p className="py-2 text-xs lg:text-sm font-normal">
                    Co-founder & Chairperson
                  </p>
                  <Link href="#" className="hover:text-yellow-500">
                    <FaLinkedin className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="hover:shadow-lg hover:border-1 border-gray-200">
              <div className="flex flex-col lg:flex-row items-center justify-center my-6 gap-4">
                <img src={People.src} alt="people" className="w-40 h-full" />
                <div className="flex flex-col justify-center md:items-start items-cente">
                  <p className="text-4xl sm:text-xl md:text-2xl font-bold text-[#090E4A]">
                    {" "}
                    Nikunj Gupta
                  </p>
                  <p className="py-2 text-xs lg:text-sm font-normal">
                    Co-founder & CEO
                  </p>
                  <Link href="#" className="hover:text-yellow-500">
                    <FaLinkedin className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="hover:shadow-lg hover:border-1 border-gray-200">
              <div className="flex flex-col lg:flex-row items-center justify-center my-6 gap-4">
                <img src={People.src} alt="people" className="w-40 h-full" />
                <div className="flex flex-col justify-center md:items-start items-center">
                  <p className="text-4xl sm:text-xl md:text-2xl font-bold text-[#090E4A]">
                    {" "}
                    Anand Shetty
                  </p>
                  <p className="py-2 text-xs lg:text-sm font-normal">
                    Co-founder & COO
                  </p>
                  <Link href="#" className="hover:text-yellow-500">
                    <FaLinkedin className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
