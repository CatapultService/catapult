/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import DataLake from "@/public/assets/howWorks/dataLake.png";
import Action from "@/public/assets/howWorks/action.png";
import Arrow1 from "@/public/assets/howWorks/arrow.svg";
import Arrow2 from "@/public/assets/howWorks/arrow2.svg";
import ArrowDown from "@/public/assets/howWorks/arrow-down.svg";

export default function howWorks() {
  return (
    <div className=" mx-10 md:mx-20 text-[#202020] flex bg-[#051C2C]">
      <div className="mx-auto max-w-6xl my-10 ">
        <div className="mx-5">
          <p className="mb-6 text-sm sm:text-lg md:text-2xl lg:text-3xl font-bold leading-relaxed mx-auto text-white ">
            How it works
          </p>
          <p className="mb-6 mr-6 text-left leading-relaxed text-xs sm:text-sm md:text-base  text-white font-light">
            Experience DNA is powered by cloud-based data lakes, predictive
            machine learning algorithms, and an API insight and action engine.
            Click on each of the elements below to learn how they increase
            performance, improve decision-making, and fortify real-time
            engagement.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-11 gap-1 lg:gap-4">
            <div className=" p-4 col-span-3">
              <div className="flex flex-row lg:flex-col gap-10">
                <div className="flex-1 flex flex-col gap-3">
                  <img
                    src={DataLake.src}
                    alt="Data Lake"
                    className="w-fit h-12"
                  />
                  <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold leading-relaxed text-white ">
                    1. Data Extraction
                  </p>
                  <p className="text-left leading-relaxed text-xs sm:text-sm md:text-base  text-white font-light">
                    Customer, financial and operational data at individual and
                    aggregate level are processed and stored in a cloud-based
                    platform.
                  </p>
                  <Link href="#">
                    <Button className=" px-2 text-sm bg-transparent w-fit border border-[#00A8F4] text-[#00A8F4] hover:border-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-black rounded-none">
                      Dive Deeper
                      <span className="ml-1">
                        <ArrowRight />
                      </span>
                    </Button>
                  </Link>
                </div>
                <div className="flex-1 flex flex-col gap-3">
                  <img
                    src={DataLake.src}
                    alt="Data Lake"
                    className="w-fit h-12"
                  />
                  <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold leading-relaxed text-white ">
                    2. Data lake
                  </p>
                  <p className="text-left leading-relaxed text-xs sm:text-sm md:text-base  text-white font-light">
                    Customer, financial and operational data at individual and
                    aggregate level are processed and stored in a cloud-based
                    platform.
                  </p>
                  <Link href="#">
                    <Button className=" px-2 text-sm bg-transparent w-fit border border-[#00A8F4] text-[#00A8F4] hover:border-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-black rounded-none">
                      Dive Deeper
                      <span className="ml-1">
                        <ArrowRight />
                      </span>
                    </Button>
                  </Link>
                </div>
                <div className="flex-1 flex flex-col gap-3">
                  <img
                    src={DataLake.src}
                    alt="Data Lake"
                    className="w-fit h-12"
                  />
                  <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold leading-relaxed text-white ">
                    3. Predictive scores
                  </p>
                  <p className="text-left leading-relaxed text-xs sm:text-sm md:text-sm  text-white font-light">
                    Customer, financial and operational data at individual and
                    Machine Learning algorithm scores every customer by studying
                    relationship between journey features, sentiment, and
                    loyalty.
                  </p>
                  <Link href="#">
                    <Button className=" px-2 text-sm bg-transparent w-fit border border-[#00A8F4] text-[#00A8F4] hover:border-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-black rounded-none">
                      Dive Deeper
                      <span className="ml-1">
                        <ArrowRight />
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flexitems-center col-span-1">
              <img
                src={Arrow1.src}
                alt="arrow"
                className="h-full hidden lg:block"
              />
              <img
                src={ArrowDown.src}
                alt="arrow"
                className="w-full text-white block lg:hidden"
              />
            </div>
            <div className="= p-4 flex justify-center h-full items-center col-span-3">
              <div className="flex flex-col gap-3">
                <img src={Action.src} alt="Data Lake" className="w-fit h-16" />
                <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold leading-relaxed text-white ">
                  4. Action and insight engines
                </p>
                <p className="text-left leading-relaxed text-xs sm:text-sm md:text-base  text-white font-light">
                  API layer provides a single source of truth to fuel
                  recommendation engines based on the data lake and customer
                  scores. Insights and recommended actions deliver three types
                  of value.
                </p>
              </div>
            </div>
            <div className="flex text-white items-center col-span-1">
              <img
                src={Arrow2.src}
                alt="arrow"
                className="h-full text-white hidden lg:block"
              />
            </div>
            <div className=" p-4 flex justify-center h-full items-center col-span-3">
              <div className="flex flex-col gap-3 w-full">
                <Link href="#">
                  <Button className=" h-16 text-sm bg-transparent w-full border border-[#00A8F4] text-[#00A8F4] hover:border-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-black rounded-none">
                    <p className="whitespace-normal">Performance Measurement</p>
                    <span className="ml-1">
                      <ArrowRight />
                    </span>
                  </Button>
                </Link>
                <Link href="#">
                  <Button className="  h-16 text-sm bg-transparent w-full border border-[#00A8F4] text-[#00A8F4] hover:border-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-black rounded-none">
                  <p className="whitespace-normal">Strategic decision-making</p>
                    <span className="ml-1">
                      <ArrowRight />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}