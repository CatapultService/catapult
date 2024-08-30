"use client";
import { Check, X } from "lucide-react";
import Link from "next/link";
export default function TextPage() {
  return (
    <>
      <div className="px-10 md:px-20 mb-6">
        <div className="mx-auto max-w-8xl my-5">
          <div className="mt-16">
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
                className="flex flex-col lg:flex-row mb-5 items-start "
              >
                <p className="w-full md:w-3/12 text-base font-semibold text-black text-left text-pretty">
                  {item.title}
                </p>
                <div className="w-full md:w-9/12 text-base leading-relaxed text-left">
                  {item.description}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <p className="text-xl mt-3 sm:text-lg md:text-2xl lg:text-3xl mb-6 font-bold text-[#090E4A] text-left">
              Examples of Our Work
            </p>
            <ul className="list-disc list-outside pl-5">
              <li className="text-base leading-relaxed text-left mb-3 text-green-500">
                DSO Reduction
              </li>

              <li className="text-base leading-relaxed text-left mb-3 text-green-500">
                5% Margin improvement
              </li>

              <li className="text-base leading-relaxed text-left mb-3 text-green-500">
                Capital Structure Optimisation
              </li>
            </ul>
          </div>

          <div className="mt-10">
            <p className="text-xl mt-3 sm:text-lg md:text-2xl lg:text-3xl mb-6 font-bold text-[#090E4A] text-left">
              How We Help Clients
            </p>
            <ul className="list-disc list-outside pl-5">
              <li className="text-base leading-relaxed text-left mb-3 text-[#FFE600] hover:underline">
                <Link href="/catapult-capability">Capbility Centres</Link>
              </li>

              <li className="text-base leading-relaxed text-left mb-3 text-[#FFE600] hover:underline">
                <Link href="/m&a">
                  M&A, Private Equity & Investor Relations
                </Link>
              </li>

              <li className="text-base leading-relaxed text-left mb-3 text-[#FFE600] hover:underline">
                <Link href="/data-cloud">Enterprise Data Cloud & Ai</Link>
              </li>

              <li className="text-base leading-relaxed text-left mb-3 text-[#FFE600] hover:underline">
                <Link href="/performance-improvement">
                  Performance Improvement
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
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
