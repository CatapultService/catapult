/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DataLakePng from "@/public/assets/homePage/howWorks/dataLake/dataLakeDesign.svg";
import { ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";

interface DataLakeProps {
  setPage: (page: number) => void;
}

export default function DataLake({ setPage }: DataLakeProps) {
  return (
    <div className="mx-5">
      <div className="my-6">
        <p className="text-white text-sm font-thin">How it works</p>
        <p className="mb-6 text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed mx-auto text-white ">
          2. Data lake
        </p>
      </div>
      <p className="mb-6 mr-6 max-w-xl text-left leading-relaxed text-xs sm:text-sm md:text-base text-white font-light">
        Data lake provides integrated, aggregated, predictive insights that go
        far beyond the standard “360” customer view.
      </p>

      <div id="data-lake">
        <div className=" grid-row gap-1 lg:gap-4 pt-5 lg:pt-8">
          <div className="flex lg:flex-row flex-col gap-10 justify-center ">
            
            <div className=" flex justify-center h-full items-start ">
              <div className="flex flex-col gap-5 lg:max-w-sm ">
                {/* <img src={Action.src} alt="Data Lake" className="w-fit h-12" /> */}

                <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold leading-relaxed text-white text-pretty pr-5 ">
                  Creating “4D” customer insight
                </p>
                <p className="text-left leading-relaxed text-xs sm:text-sm md:text-base  text-white font-light">
                  Many organizations are trying to create a “Customer 360” view
                  by combining surveys, operational KPIs and financial metrics
                  into aggregated dashboards. Experience DNA turns these
                  traditional data points into real insight, using machine
                  learning algorithms to serve up the most critical drivers of
                  customer behavior with an added 4th dimension of predictive
                  insight.
                </p>
              </div>
            </div>

            <div className="flex justify-center h-full items-center ">
              <div className="flex flex-col gap-3 w-full items-center">
                <img src={DataLakePng.src} alt="" className="w-[45rem] md:w-[40rem]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-10">
              <button onClick={() => setPage(1)} className="flex flex-row text-left items-center text-white hover:text-blue-500 text-lg">
              <ChevronLeft className="mr-2 text-lg" /> Home  
              </button>
              <button onClick={() => setPage(3)} className="flex flex-row text-right items-center text-white hover:text-blue-500 text-lg">
              Predictive scores  <ChevronRight className="ml-2 text-lg" />
              </button>
            </div>
    </div>
  );
}
