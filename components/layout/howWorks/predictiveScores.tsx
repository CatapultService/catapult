/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import PredictiveImg from "@/public/assets/homePage/howWorks/predictiveScores/bgImg.svg";
import { ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";

interface PredictiveScoresProps {
  setPage: (page: number) => void;
}

export default function PredictiveScores({ setPage }: PredictiveScoresProps) {
  return (
    <div className="mx-5">
      <div className="my-6">
        <p className="text-white text-sm font-thin">How it works</p>
        <p className="mb-6 text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed mx-auto text-white ">
          3. Predictive Scores
        </p>
      </div>
      <p className="mb-6 mr-6 max-w-xl text-left leading-relaxed text-xs sm:text-sm md:text-base text-white font-light">
        The machine learning algorithms predict customer satisfaction at an
        aggregate and individual level with 80% accuracy.
      </p>

      {/* <div id="data-lake">
        <div className=" grid-row gap-1 lg:gap-4 pt-5 lg:pt-8">
          <div className="flex lg:flex-row flex-col gap-10 justify-center ">
            <div className=" flex justify-center h-full items-start ">
              <div className="flex flex-col gap-5 lg:max-w-sm ">

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
                <img src={DataLakePng.src} alt="" className="w-[40rem]" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div>
        <img src={PredictiveImg.src} alt="" className="w-full px-0 md:px-5 lg:px-10" />
      </div>

      <div className="flex justify-between mt-10">
        <button
          onClick={() => setPage(2)}
          className="flex flex-row items-center text-left text-white hover:text-blue-500 text-lg"
        >
          <ChevronLeft className="mr-2 text-lg" /> Data Lake
        </button>
        <button
          onClick={() => setPage(4)}
          className="flex flex-row items-center text-right text-white hover:text-blue-500 text-lg"
        >
          Action and insight engines: <br/>Recommendations engine <ChevronRight className="ml-2 text-lg" />
        </button>
      </div>
    </div>
  );
}
