"use client";
import { Check, X } from "lucide-react";
import Link from "next/link";
export default function TextPage() {
  return (
    <>
      <div className="px-10 md:px-20 mb-6">
        <div className="mx-auto max-w-6xl my-5">
          <div className="mt-16">
            <p className="text-xl sm:text-lg md:text-2xl lg:text-3xl mb-6 font-bold text-[#090E4A] text-left">
              Overview
            </p>
            <p className="text-base leading-relaxed text-left">
              Every company today is a data company, with data being generated
              in a ceaselessly expanding array of forms and locations. In a
              world of proliferating data and more of it than ever before,
              maximizing the power of Data, Analytics & Ai, is no longer an
              option. Route to future success is increasingly dependent on
              effectively gathering, managing and analyzing data to reveal
              insights through Ai in a timely manner, that can be used to make
              smarter decisions, to grow revenue & profits.
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
    title: "Transform Unstructured Data :",
    description:
      "Structured data is critical to the Ai journey. We can help you transform your unstructured data in the form of scanned images, e-mails, conversations, etc, into structured data by use of in-house trained models and workflow tools.",
  },
  {
    title: "Enterprise Data Cloud for Ai readiness: ",
    description:
      "Journey of Ai is a non-starter without entrprise level data availability from a single source of truth. However, reality of most organisations is a multi vendor SaaS ecosystem, leading to fragmented data. Basis our understadning of data available to Catapult Capability Centres we can integrate the information flow with our proprietory Enterprise Data Cloud, that can help you lay the foundation of data readiness for your Ai journey, in a seamless manner, without breaking the bank. ",
  },
  {
    title: "Action & insights engine : ",
    description:
      "Our library of Machine Learning algorithims can be customised to automate processes, generate reports, insights & reccommendations",
  },
];
