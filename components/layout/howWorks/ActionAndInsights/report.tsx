/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";
import Dashboard from "@/public/assets/homePage/howWorks/actionAndInsights/dashboard.svg";
import ReportWhite from "@/public/assets/homePage/howWorks/Report-white.svg";
import RecommendationWhite from "@/public/assets/homePage/howWorks/Recommendation-white.svg";
import ReportBlack from "@/public/assets/homePage/howWorks/Report-black.svg";
import RecommendationBlack from "@/public/assets/homePage/howWorks/Recommendation-black.svg";

interface ReportBuilderProps {
  setPage: (page: number) => void;
}

export default function ReportBuilder({ setPage }: ReportBuilderProps) {
  return (
    <div className="mx-5">
      <div className="my-6">
        <p className="text-white text-sm font-thin">How it works</p>
        <p className="mb-6 text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed mx-auto text-white ">
          4. Action and insight engines
        </p>
      </div>
      <p className="mb-6 mr-6 max-w-xl text-left leading-relaxed text-xs sm:text-sm md:text-base text-white font-light">
        A report builder that provides insights & recommendations.
      </p>

      <div className="flex flex-col lg:flex-row  w-full">
        <Button
          className="group h-16 text-sm bg-transparent w-full border border-[#00A8F4] text-[#00A8F4] hover:border-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-black rounded-none"
          onClick={() => setPage(4)}
        >
          <img
            src={RecommendationWhite.src}
            alt="Data Lake"
            className="h-8 w-fit mr-2 block group-hover:hidden"
          />
          <img
            src={RecommendationBlack.src}
            alt="Data Lake"
            className="h-8 w-fit mr-2 hidden group-hover:block"
          />
          <p className="whitespace-normal">Recommendation engine</p>
          <span className="ml-1">
            <ArrowRight />
          </span>
        </Button>
        <Button
          className="group h-16 text-sm bg-transparent w-full border border-[#00A8F4] text-[#00A8F4] hover:border-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-black rounded-none"
          onClick={() => setPage(5)}
        >
          <img
            src={ReportWhite.src}
            alt="Data Lake"
            className="h-8 w-fit mr-2 block group-hover:hidden"
          />
          <img
            src={ReportBlack.src}
            alt="Data Lake"
            className="h-8 w-fit mr-2 hidden group-hover:block"
          />
          <p className="hitespace-normal">Report builder</p>
          <span className="ml-1">
            <ArrowRight />
          </span>
        </Button>
      </div>

      <div id="data-lake">
        <div className=" grid-row gap-1 lg:gap-4 pt-5 lg:pt-8">
          <div className="flex lg:flex-row flex-col gap-10 justify-center ">
            <div className=" flex justify-center h-full items-start ">
              <div className="flex flex-col gap-5 lg:max-w-sm ">
                <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold leading-relaxed text-white text-pretty pr-5 ">
                  Report Builder
                </p>
                <p className="text-left leading-relaxed text-xs sm:text-sm md:text-base  text-white font-light">
                  Organizational leaders can plan changes to operations and
                  investment in journey re-designs based on improving overall
                  performance with both an ROI and customer experience lens to
                  guide decision making
                </p>
              </div>
            </div>

            <div className="flex justify-center h-full items-center ">
              <div className="flex flex-col gap-3 w-full items-center">
                <img src={Dashboard.src} alt="" className="w-[40rem]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-start mt-10">
        <button
          onClick={() => setPage(4)}
          className="flex flex-row items-center text-left text-white hover:text-blue-500 text-lg"
        >
          <ChevronLeft className="mr-2 text-lg" /> Action and insight engines:{" "}
          <br />
          Recommendations engine
        </button>
        {/* <button
          onClick={() => setPage(5)}
          className="flex flex-row items-center text-right text-white hover:text-blue-500 text-lg"
        >
          Action and insight engines: <br/>Report builder  <ChevronRight className="ml-2 text-lg" />
        </button> */}
      </div>
    </div>
  );
}
