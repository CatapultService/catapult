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
              Engaging with investors is a critical task that requires foremost
              data integrity combined with transpranecy, consistency & a clear
              story. We understand the specific requirements of the investor
              community
            </p>
          </div>

          <div className="mt-10">
            <p className="text-xl mt-3 sm:text-lg md:text-2xl lg:text-3xl mb-6 font-bold text-[#090E4A] text-left">
              What We Do
            </p>
            {WhatWeDo.map((item, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row mb-5 items-start text-pretty"
              >
                <p className="w-full md:w-3/12 text-base font-semibold text-black text-left">
                  {item.title}
                </p>
                <p className="w-full md:w-9/12 text-base leading-relaxed text-left">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <p className="text-xl mt-3 sm:text-lg md:text-2xl lg:text-3xl mb-6 font-bold text-[#090E4A] text-left">
              Examples of Our Work
            </p>
            <ul className="list-disc list-outside pl-5">
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
    title: "Strategic 5 Year Business Plans :",
    description: `Building a comprehensive plan that not only articulates the "What" but also the "How" is critical to a positive investor conversation. Our strategic planning framework ensures adquate detailing on Unit economics, Growth Levers & Sensitivity analysis (Positioning, Brand, Market, Product, Pricing, COGS & Assortment, Go to Market design, G&A Org design), Capital Requirement Assessment, Return & Margin Profile benchmarking.`,
  },
  {
    title: "Deal Driver Analytics & Risk Assessment  :",
    description:
      "We help you stress test the key growth drivers that impact your valuation with historical data to identify material risks. ",
  },
  {
    title: "Data Room Readiness & DD Management :",
    description:
      "We can help you set up the dataroom for the prior 3 Year data along with interacting with the DD agencies helping you load balance finance bandwidth. ",
  },
  {
    title: "Post Deal Integration Support :",
    description:
      "We help you transition the acquiree company to your policies, IT platforms, reporting calendars and scrubbing all key Balance Sheet accounts.",
  },
  {
    title: "Compliance Monitoring & Reporting  :",
    description:
      "Through data & Ai led reporting tools, we can help cretae a comprehensive one stop solution for all applicable compliances.",
  },
  {
    title: "Value stream mapping, Risk Assessment & internal controls :",
    description:
      "We help companies comply with internal control requirements for financial reporting including SOX and any other applicable frameworks. ",
  },
];
