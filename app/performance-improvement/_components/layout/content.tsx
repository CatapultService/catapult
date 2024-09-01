/* eslint-disable @next/next/no-img-element */
"use client";
import { Check, X } from "lucide-react";
import Link from "next/link";

import HowHelp from "@/components/layout/homePage/howHelp";

import { ChevronRight } from "lucide-react";
import Article1 from "@/public/assets/insights/Article_7.png";
import Article2 from "@/public/assets/insights/Article_5.png";
import Article3 from "@/public/assets/insights/Article_11.png";

export default function TextPage() {
  return (
    <>
      <div className="px-10 md:px-20 mb-6">
        <div className="mx-auto max-w-8xl my-5">
          <div className="mt-6">
            <p className="text-xl sm:text-lg md:text-2xl lg:text-3xl mb-6 font-bold text-[#090E4A] text-left">
              Overview
            </p>
            <p className="text-base leading-relaxed text-left">
              For an organisation to be sustainable & create value, it needs to
              bridge Revenue Growth with Profitability, Capital Efficiency &
              Free Cash Flow.
            </p>
          </div>

          <div className="mt-10">
            <p className="text-xl mt-3 sm:text-lg md:text-2xl lg:text-3xl mb-6 font-bold text-[#090E4A] text-left">
              What We Do
            </p>
            {WhatWeDo.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row bg-[#D9D9D9] w-full h-full "
              >
                <p className="w-full md:w-3/12 text-base py-3 px-2 font-semibold text-black text-left  h-full">
                  {item.title}
                </p>

                <div className="w-full md:w-9/12 text-base py-3 px-2 leading-relaxed text-pretty text-left bg-[#090E4A] text-[#D9D9D9] ">
                  {item.description}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <p className="text-xl mt-3 sm:text-lg md:text-2xl lg:text-3xl mb-0 font-bold text-[#090E4A] text-left">
              Examples of Our Work
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 ">
              {Card.map((card, index) => (
                <div
                  key={index}
                  className="md:px-6 py-6 my-2 rounded-lg hover:md:shadow-2xl"
                >
                  <img src={card.image} alt="blog" className="w-full mb-2" />
                  <p className="text-sm my-2">Case Study</p>
                  <Link href={card.link} className="">
                    <h2 className=" flex items-center text-2xl font-bold mb-2 hover:text-[#2251FF] hover:underline">
                      {card.title}
                      <span>
                        <ChevronRight className="w-6  text-[#2251FF]" />
                      </span>
                    </h2>
                  </Link>
                  <p className="text-base leading-relaxed text-left line-clamp-4">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* <ul className="list-disc list-outside pl-5">
              <li className="text-base leading-relaxed text-left mb-3 text-green-500">
                DSO Reduction
              </li>

              <li className="text-base leading-relaxed text-left mb-3 text-green-500">
                5% Margin improvement
              </li>

              <li className="text-base leading-relaxed text-left mb-3 text-green-500">
                Capital Structure Optimisation
              </li>
            </ul> */}

          </div>

        </div>
      </div>
      <HowHelp />
    </>
  );
}

let WhatWeDo = [
  {
    title: "Cash Conversion Cycle",
    description: (
      <>
        <p className="mb-3">
          <span className="font-bold">DSO Reduction</span> by integrating our
          proprietory alogorthims for &quot;Customer Risk Scores&quot; that
          scientifically priorotise invoices to chase.
        </p>
        <p>
          <span className="font-bold">Days of Inventory Reduction</span> by
          integration of sales data & inventory planning through a Real-time
          &quot;Demand Forecasting&quot;
        </p>
      </>
    ),
  },
  {
    title: "Capital Management",
    description: (
      <>
        <p className="mb-3">
          <span className="font-bold">Cost of Capital reduction</span> by credit
          scores at{" "}
          <span className="font-bold">&quot;Customer Level&quot;</span> as
          against BU level, can provide an ability to negotiate slab wise rates.
          <br />
          <span>
            Further reduction of Bad debts by &quot;Customer Credit
            Scoring&quot; can lead to CoC reduction.{" "}
          </span>
        </p>
        <p className="mb-3">
          <span className="font-bold">Capital Structure optimisation</span>{" "}
          through our proprietory{" "}
          <span className="font-bold">&quot;Cash Flow Profiler&quot;</span> to
          profile cash flows at the Cash Generating <br />
          <span>
            Unit level can seggregate which cash flows have predictability and
            can be financed through debt.{" "}
          </span>
        </p>

        <p>
          <span className="font-bold">Improved Investor Relations</span> by{" "}
          <span className="font-bold">&quot;Report Builders&quot;</span> from
          the{" "}
          <span className="font-bold">&quot;Enterprise Data Cloud&quot;</span>{" "}
          to prepare audit schedules concurrently ensuring an observation
        </p>
      </>
    ),
  },
  {
    title: "Revenue Growth",
    description: (
      <>
        <p className="mb-3">
          <span className="font-bold">Revenue Growth (&quot;RG&quot;)</span>{" "}
          identification through proprietory algorithims Automated
          &quot;Customer Cohorts&quot; basis interplay across Category ,
          Ocassions, Channels,
        </p>
        <p>
          <span className="font-bold">
            Customer Experience (&quot;CX&quot;) Improvement
          </span>{" "}
          by Real-time &quot;Demand Forecasting&quot; to ensure stock
          availability at right place & time.
        </p>
      </>
    ),
  },
  {
    title: "Margin Improvement",
    description: (
      <>
        <p className="mb-3">
          <span className="font-bold">Margin Improvement</span> by integrated
          analysis of Pricing, Inventory, Discounts overlayed with dimensions of
          Category, Use Cases, Channels, Ocassions, Micromarkets, etc.
        </p>

        <p>
          <span className="font-bold">Wastage Reduction</span> by Real-time{" "}
          <span className="font-bold">&quot;Demand Forecasting&quot;</span> by
          integration of sales data & inventory planning can eliminate wastage
          arising out of expiries.
        </p>
      </>
    ),
  },
];


const Card = [
  {
    title: "5% Margin Improvement",
    description:
      "Business Challenge: A leading contact center with headcount in excess of 2,000 and operations in 3 cities was facing intense pricing pressure.",
    image: Article1.src,
    link: "insights/articles/5-margin-improvement",
  },
  {
    title: "15+ DSO improvement",
    description:
      "Business Challenge: With rapid expansion of the business from one city operations to 3 cities and 4 partners to 8 and ever expanding, there was no view of profitability per partner, location, line of business, etc. Further at the end of the month significant partner effort on the billing & collection process. Leading to high DSO & Revenue leakage.",
    image: Article2.src,
    link: "/insights",
  },
  {
    title: "10% Equity Dilution Avoidance",
    description:
      "Business Challenge: The client with an asset heavy business faced continued dilution due to perpetual raising capital raise.",
    image: Article3.src,
    link: "/insights",
  },
];