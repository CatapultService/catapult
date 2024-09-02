/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

import DataLake from "@/components/layout/howWorks/dataLake";
import PredictiveScores from "@/components/layout/howWorks/predictiveScores";
import RecommendationEngine from "@/components/layout/howWorks/ActionAndInsights/recommendation";
import ReportBuilder from "@/components/layout/howWorks/ActionAndInsights/report";

import DataLakeSvg from "@/public/assets/homePage/howWorks/dataLake.svg";
import Extraction from "@/public/assets/homePage/howWorks/extraction.svg";
import Predictive from "@/public/assets/homePage/howWorks/predictive.svg";
import Action from "@/public/assets/homePage/howWorks/action.svg";
import Arrow1 from "@/public/assets/homePage/howWorks/arrow.svg";
import Arrow2 from "@/public/assets/homePage/howWorks/arrow2.svg";
import ArrowDown from "@/public/assets/homePage/howWorks/arrow-down.svg";
import ReportWhite from "@/public/assets/homePage/howWorks/Report-white.svg";
import RecommendationWhite from "@/public/assets/homePage/howWorks/Recommendation-white.svg";
import ReportBlack from "@/public/assets/homePage/howWorks/Report-black.svg";
import RecommendationBlack from "@/public/assets/homePage/howWorks/Recommendation-black.svg";

export default function HowWorks() {
  const [currentPage, setCurrentPage] = useState(1);

  const setPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="  flex bg-[#090E4A]">
      <div className="mx-auto max-w-7xl my-10 w-full">
        {currentPage == 1 ? (
          <>
            <div className="mx-5">
              <div className="my-6">
                <p className="mb-6 text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-bold leading-relaxed mx-auto text-white ">
                  How it works - Adding Value Beyond The Hype
                </p>
              </div>
              <p className="mb-6 mr-6 text-left leading-relaxed text-xs sm:text-sm md:text-base text-white font-light">
                CAT AI extracts unstrcured data and aggregates data into the
                data cloud. This data when integrated with our machine learning
                algorithms embedded in our insight and action engine provides
                real&quot;-time&quot; insights improve decision-making and
                performance.
              </p>

              <div id="how-it-works">
                <div className="hidden grid-row gap-1 lg:gap-0 lg:grid">
                  <div className="px-4 pt-4 pb-0">
                    <div className="flex flex-row gap-10">
                      <div className="flex-1 flex flex-col gap-3">
                        <img
                          src={Extraction.src}
                          alt="Data Lake"
                          className="w-fit h-12"
                        />
                        <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold leading-relaxed text-white ">
                          1. Data Extraction
                        </p>
                        <p className="text-left leading-relaxed text-xs sm:text-sm md:text-base  text-white font-light">
                          Unstructured data is a barrier to AI implementation.
                          Our proprietory models & workflow tools transform
                          unstructured data.
                        </p>
                      </div>
                      <div className="flex-1 flex flex-col gap-3">
                        <img
                          src={DataLakeSvg.src}
                          alt="Data Lake"
                          className="w-fit h-12"
                        />
                        <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold leading-relaxed text-white ">
                          2. Data lake
                        </p>
                        <p className="text-left leading-relaxed text-xs sm:text-sm md:text-base  text-white font-light">
                          Aggregated data is essential for Ai readiness.
                          Tokenised architecture of our Data Lake allows us to
                          integrate data from clients in an accelerated fashion.
                        </p>
                        <Button
                          className=" px-2 text-sm bg-transparent w-fit border border-[#00A8F4] text-[#00A8F4] hover:border-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-black rounded-none"
                          onClick={() => setPage(2)}
                        >
                          Dive Deeper
                          <span className="ml-1">
                            <ArrowRight />
                          </span>
                        </Button>
                      </div>
                      <div className="flex-1 flex-col ">
                        <div className="flex-1 flex flex-col gap-3">
                          <img
                            src={Predictive.src}
                            alt="Data Lake"
                            className="w-fit h-12"
                          />
                          <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold leading-relaxed text-white ">
                            3. Algorithm Library
                          </p>
                          <p className="text-left leading-relaxed text-xs sm:text-sm md:text-base  text-white font-light">
                            Our Machine Learning algorithm library can be
                            customised to client specific use case to enable
                            rapid deployment of Ai-co pilots.
                          </p>

                          <Button
                            className=" px-2 text-sm bg-transparent w-fit border border-[#00A8F4] text-[#00A8F4] hover:border-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-black rounded-none"
                            onClick={() => setPage(3)}
                          >
                            Dive Deeper
                            <span className="ml-1">
                              <ArrowRight />
                            </span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <img
                      src={ArrowDown.src}
                      alt="arrow"
                      className="w-full h-full text-white"
                    />
                  </div>

                  <div className="flex flex-row gap-10 justify-center  ">
                    <div className="p-4 pt-0 flex justify-center h-full items-center ">
                      <div className="flex flex-col gap-3 max-w-sm">
                        <img
                          src={Action.src}
                          alt="Data Lake"
                          className="w-fit h-12"
                        />

                        <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold leading-relaxed text-white ">
                          4. Action and insight engines
                        </p>
                        <p className="text-left leading-relaxed text-xs sm:text-sm md:text-base  text-white font-light">
                          Integrated with the data lake and Algorithm Library
                          Insights and recommendations can be created for
                          improved outcomes.
                        </p>
                      </div>
                    </div>
                    <div className="flex text-white items-center col-span-1">
                      <img
                        src={Arrow2.src}
                        alt="arrow"
                        className="w-14 text-white"
                      />
                    </div>
                    <div className=" p-4 flex justify-center h-full items-center ">
                      <div className="flex flex-col gap-3 w-full">
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
                          <p className="whitespace-normal">
                            Recommendation engine
                          </p>
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
                    </div>
                  </div>
                </div>

                <div className="lg:hidden grid grid-cols-1 lg:grid-cols-11 gap-1 lg:gap-4">
                  <div className=" p-4 col-span-3">
                    <div className="flex flex-col gap-10">
                      <div className="flex-1 flex flex-row lg:flex-col gap-10">
                        <div className="flex-1 flex flex-col gap-3">
                          <img
                            src={Extraction.src}
                            alt="Data Lake"
                            className="w-fit h-12"
                          />
                          <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold leading-relaxed text-white ">
                            1. Data Extraction
                          </p>
                          <p className="text-left leading-relaxed text-xs sm:text-sm md:text-base  text-white font-light">
                            Unstructured data is a barrier to AI implementation.
                            Our proprietory models & workflow tools transform
                            unstructured data.
                          </p>
                        </div>
                        <div className="flex-1 flex flex-col gap-3">
                          <img
                            src={DataLakeSvg.src}
                            alt="Data Lake"
                            className="w-fit h-12"
                          />
                          <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold leading-relaxed text-white ">
                            2. Data lake
                          </p>
                          <p className="text-left leading-relaxed text-xs sm:text-sm md:text-base  text-white font-light">
                            Aggregated data is essential for Ai readiness.
                            Tokenised architecture of our Data Lake allows us to
                            integrate data from clients in an accelerated
                            fashion.
                          </p>

                          <Button
                            className=" px-2 text-sm bg-transparent w-fit border border-[#00A8F4] text-[#00A8F4] hover:border-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-black rounded-none"
                            onClick={() => setPage(3)}
                          >
                            Dive Deeper
                            <span className="ml-1">
                              <ArrowRight />
                            </span>
                          </Button>
                        </div>
                      </div>

                      <div className="flex flex-col w-full  items-center">
                        <div className="flex-1 flex flex-col gap-3  max-w-md">
                          <img
                            src={Predictive.src}
                            alt="Data Lake"
                            className="w-fit h-12"
                          />
                          <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold leading-relaxed text-white ">
                            3. Algorithm Library
                          </p>
                          <p className="text-left leading-relaxed text-xs sm:text-sm md:text-base  text-white font-light">
                            Our Machine Learning algorithm library can be
                            customised to client specific use case to enable
                            rapid deployment of Ai-co pilots.
                          </p>

                          <Button
                            className=" px-2 text-sm bg-transparent w-fit border border-[#00A8F4] text-[#00A8F4] hover:border-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-black rounded-none"
                            onClick={() => setPage(3)}
                          >
                            Dive Deeper
                            <span className="ml-1">
                              <ArrowRight />
                            </span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center col-span-1">
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

                  <div className="col-span-3 ">
                    <div className="flex flex-col md:flex-row md:gap-6 gap-3 col-span-3 items-center w-full">
                      <div className="p-4 pr-0 flex justify-center h-full items-center ">
                        <div className="flex flex-col gap-3 max-w-md">
                          <img
                            src={Action.src}
                            alt="Data Lake"
                            className="w-fit h-12"
                          />

                          <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold leading-relaxed text-white ">
                            4. Action and insight engines
                          </p>
                          <p className="text-left leading-relaxed text-xs sm:text-sm md:text-base  text-white font-light">
                            Integrated with the data lake and Algorithm Library
                            Insights and recommendations can be created for
                            improved outcomes.
                          </p>
                        </div>
                      </div>

                      <div className="flex text-white items-center col-span-1">
                        <img
                          src={Arrow2.src}
                          alt="arrow"
                          className="w-16 text-white hidden md:block"
                        />
                      </div>

                      <div className=" p-4 flex justify-center h-full items-center w-full">
                        <div className="flex flex-col gap-3 w-full">
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
                            <p className="whitespace-normal">
                              Recommendation engine
                            </p>
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setPage(2)}
                className="flex flex-row items-center text-white hover:text-blue-500 text-lg"
              >
                Data Lake <ChevronRight className="ml-2 text-lg" />
              </button>
            </div>
          </>
        ) : currentPage == 2 ? (
          <DataLake setPage={setPage} />
        ) : currentPage == 3 ? (
          <PredictiveScores setPage={setPage} />
        ) : currentPage == 4 ? (
          <RecommendationEngine setPage={setPage} />
        ) : currentPage == 5 ? (
          <ReportBuilder setPage={setPage} />
        ) : null}
      </div>
    </div>
  );
}
