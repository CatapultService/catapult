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
              Engaging with investors is a critical task that requires foremost
              data integrity combined with transparency, consistency & a clear
              story. We understand the specific requirements of the investor
              community and act as a bridge between them and the company to
              tailor information needs.
            </p>
          </div>

          <div className="mt-10">
            <p className="text-xl mt-3 sm:text-lg md:text-2xl lg:text-3xl mb-0 font-bold text-[#090E4A] text-left">
              What We Do
            </p>
            {WhatWeDo.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row w-full h-full "
              >
                <p className="w-full md:w-3/12 text-base py-3 px-2 font-semibold text-black text-left  h-full">
                  {item.title}
                </p>

                <p className="w-full md:w-9/12 text-base py-3 px-2 leading-relaxed text-pretty text-left   ">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <p className="text-xl mt-3 sm:text-lg md:text-2xl lg:text-3xl mb-6 font-bold text-[#090E4A] text-left">
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
                Recast 3 year financials as per IFRS, prepared a 5 year business
                plan as part of the Red Herring prospectus to enable listing of
                a new age tech company.
              </li>

              <li className="text-base leading-relaxed text-left mb-3 text-green-500">
                Supported the CFO in an end to end exit process including
                preparing the Data room, managing the DD with zero obersvations
                not only leading to successful exit, but investor requesting our
                services for their portfolio.
              </li>

              <li className="text-base leading-relaxed text-left mb-3 text-green-500">
                Executed a post merger integration including conductng a
                complete sweep of all financial data, aligning & implementing
                finance, accounting & reporting, policies & procedures with the
                acquirer group.
              </li>

              <li className="text-base leading-relaxed text-left mb-3 text-green-500">
                Listing readiness of a US$1 Bn group by doing an internal
                controls assessment from a SOX compliance perspective and
                implementing remediation measures.
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
    title: "Strategic 5 Year Business Plans :",
    description: `Building a comprehensive plan that not only articulates the "What" but also the "How" is critical to a positive investor conversation. Our strategic planning framework ensures adequate detailing on Unit economics, Growth Levers & Sensitivity analysis (Positioning, Brand, Market, Product, Pricing, COGS & Assortment, Go to Market design, G&A Org design), Capital Requirement Assessment, Return & Margin Profile benchmarking.`,
  },
  {
    title: "Deal Driver Analytics & Risk Assessment  :",
    description:
      "We help you stress test the key growth drivers that impact your valuation with historical data to identify material risks. ",
  },
  {
    title: "Data Room Readiness & DD Management :",
    description:
      "We can help you set up the data room for the prior 3 Year data along with interacting with the DD agencies helping you load balance finance bandwidth. ",
  },
  {
    title: "Post Deal Integration Support :",
    description:
      "We help you transition the acquiree company to your policies, IT platforms, reporting calendars and scrubbing all key Balance Sheet accounts.",
  },
  {
    title: "Compliance Monitoring & Reporting  :",
    description:
      "Through data & Ai led reporting tools, we can help create a comprehensive one stop solution for all applicable compliances.",
  },
  {
    title: "Value stream mapping, Risk Assessment & internal controls :",
    description:
      "We help companies comply with internal control requirements for financial reporting including SOX and any other applicable frameworks. ",
  },
];

const Card = [
  {
    title: "Post Merger Integration",
    description:
      "Business Challenge: A large USS Billion plus revenue client had acquired a early stage Ai start up with fit for purpose accounting support. The acquiree needed to be integrated into the parent's financial reporting and policy framework.",
    image: Article1.src,
    link: "/insights/articles/post-merger-integration",
  },
  {
    title: "Data Room for Exit Support",
    description:
      "Business Challenge: Our client, a US$ 15 Mn Crowdsourced Advertising Company with operations across 7 countries wanted support in their exit process.",
    image: Article2.src,
    link: "/insights/articles/data-room-for-exit-support",
  },
  {
    title: "Listing Support on AIM, LSE",
    description:
      "Business Challenge: Our client, an Ai company with no accounting staff wanted support to prepare for a listing in 12 months.",
    image: Article3.src,
    link: "/insights/articles/listing-support-on-aim-lse",
  },
];
