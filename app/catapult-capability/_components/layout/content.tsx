/* eslint-disable @next/next/no-img-element */
"use client";
import { Check, X } from "lucide-react";
import Link from "next/link";
import HowHelp from "@/components/layout/homePage/howHelp";

import { ChevronRight } from "lucide-react";

import Article1 from "@/public/assets/insights/Article_3.png";
import Article2 from "@/public/assets/insights/Article_6.png";
import Article3 from "@/public/assets/insights/Article_9.png";

export default function TextPage() {
  return (
    <>
      <div className=" bg-white px-10 md:px-20 text-black flex items-center">
        <div className="mx-auto max-w-8xl my-5">
          <p className="mt-6 mb-8 text-base leading-relaxed text-left">
            In an increasingly compeitive world, with accentuated war for
            talent, thoughtful choices on structuring your teams for excellence,
            has a substantial impact on business & financial outcomes. Making
            the right choices on outsourcing will not only free your teams to
            focus on the core of your growth capabilities, but also provide
            access to global talent poools & reduce your total cost of
            ownership.
          </p>
        </div>
      </div>

      <div className="px-0 md:px-20 mb-6">
        <div className="mx-auto max-w-8xl overflow-x-auto">
          <table className="w-full h-full text-sm text-center ">
            <thead className="bg-[#808080] text-white ">
              <tr className="text-[#FFE600]">
                <th scope="col" className="w-1/5 px-2 py-1">
                  <h3 className="text-xs sm:text-sm md:text-base font-semibold text-left pl-4">
                    Insource vs Outsource
                  </h3>
                </th>
                <th scope="col" className="w-1/5 px-2 py-1">
                  <h3 className="text-xs sm:text-sm  md:text-base font-semibold">
                    Employer of Choice
                  </h3>
                </th>
                <th scope="col" className="w-1/5 px-2 py-1">
                  <h3 className="text-xs sm:text-sm  md:text-base font-semibold">
                    Process Maturity & Continious Improvement
                  </h3>
                </th>
                <th scope="col" className="w-1/5 px-2 py-1">
                  <h3 className="text-xs sm:text-sm  md:text-base font-semibold">
                    Process enablement technology
                  </h3>
                </th>
                <th scope="col" className="w-1/5 px-2 py-1 pr-4">
                  <h3 className="text-xs sm:text-sm md:text-base font-semibold">
                    Key Man Risk <br />
                    (adequate sized teams to create redundancy)
                  </h3>
                </th>
              </tr>
            </thead>
            <tbody className="text-black">
              <tr className="border-y-1 border-black bg-[#D9D9D9]">
                <td className="py-2 text-xs md:text-base text-left pl-6 font-semibold">
                  Insource
                </td>
                <td className="py-2 text-center text-base font-semibold">Y</td>
                <td className="py-2 text-center text-base font-semibold">Y</td>
                <td className="py-2 text-center text-base font-semibold">Y</td>
                <td className="py-2 text-center text-base font-semibold">Y</td>
              </tr>
              <tr className="border-y-1 border-black bg-[#D9D9D9]">
                <td className="py-2 text-xs md:text-base text-left pl-6 font-semibold">
                  Outsource
                </td>
                <td className="py-2 text-center text-base font-semibold">N</td>
                <td className="py-2 text-center text-base font-semibold">N</td>
                <td className="py-2 text-center text-base font-semibold">N</td>
                <td className="py-2 text-center text-base font-semibold">N</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="px-10 md:px-20 mb-6">
        <div className="mx-auto max-w-8xl my-5">
          <div>
            <p className="text-xl mt-3 sm:text-lg md:text-2xl lg:text-3xl mb-6 font-bold text-[#090E4A] text-left">
              What We Do
            </p>
            {WhatWeDo.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row bg-[#D9D9D9] w-full h-full"
              >
                <p className="w-full md:w-3/12 text-base py-3 px-2 font-semibold text-black text-left  h-full">
                  {item.title}
                </p>

                <p className="w-full md:w-9/12 text-base py-3 px-2 leading-relaxed text-left bg-[#090E4A] text-[#D9D9D9] ">
                  {item.description}
                </p>
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
          </div>

          <div className="mt-10">
            <p className="text-xl mt-3 sm:text-lg md:text-2xl lg:text-3xl mb-3 font-bold text-[#090E4A] text-left">
              Featured Capabilities
            </p>

            <p className="text-base mt-1 mb-3 sm:text-lg text-pretty font-semibold text-black text-left">
              Big 4 Audit Management Credentials :
            </p>

            <table className="w-full h-full text-sm text-center ">
              <thead className="bg-[#808080] text-[#FFE600] ">
                <tr className="">
                  <th scope="col" className="w-1/4 p-2">
                    <h3 className="text-xs sm:text-sm md:text-base font-semibold"></h3>
                  </th>
                  <th scope="col" className="w-1/4 p-2">
                    <h3 className="text-xs sm:text-sm  md:text-base font-semibold">
                      Audit
                    </h3>
                  </th>
                  <th scope="col" className="w-1/4 p-2">
                    <h3 className="text-xs sm:text-sm  md:text-base font-semibold">
                      Due Diligence
                    </h3>
                  </th>
                  <th scope="col" className="w-1/4 p-2">
                    <h3 className="text-xs sm:text-sm  md:text-base font-semibold">
                      Technical Accounting
                    </h3>
                  </th>
                </tr>
              </thead>
              <tbody className="text-black">
                {FeaturedCapabilities.map((item, index) => (
                  <tr
                    key={index}
                    className="border-y-1 border-black bg-[#D9D9D9]"
                  >
                    <td className="py-3 md:pl-5 pl-1 text-xs md:text-base text-left font-semibold">
                      {item.title}
                    </td>
                    <td className="py-3 text-center font-semibold">
                      <div className="flex justify-center">
                        {item.audit ? (
                          <Check className="w-6 h-6 text-black" />
                        ) : (
                          <X className="w-6 h-6 text-black" />
                        )}
                      </div>
                    </td>
                    <td className="py-3 text-center font-semibold">
                      <div className="flex justify-center">
                        {item.dueDilligence ? (
                          <Check className="w-6 h-6 text-black" />
                        ) : (
                          <X className="w-6 h-6 text-black" />
                        )}
                      </div>
                    </td>
                    <td className="py-3 text-center font-semibold">
                      <div className="flex justify-center">
                        {item.technicalAccounting ? (
                          <Check className="w-6 h-6 text-black" />
                        ) : (
                          <X className="w-6 h-6 text-black" />
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* <div className="mt-10">
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
          </div> */}
        </div>
      </div>
      <HowHelp />
    </>
  );
}

let WhatWeDo = [
  {
    title: "Accounts Payable :",
    description:
      "End to end management of Accounts Payable process including rasing POs, Vendor Master Updates, 3-Way match & Invoice entry, Payables scheduling, Wire-transfers, Vendor SOA reconciliation, Travel & expense claims. Document archival for audit.",
  },
  {
    title: "Accounts Recievable :",
    description:
      "Customer Master updates, Invoice Creation, Send I Upload invoice, Record Invoice, Outsanding Report, Customer SOA reconciliation, Collections entry, Document archival for audit. ",
  },
  {
    title: "Month Close :",
    description:
      "Chart of accounts Design, Account postings & clearing, Reconcile GL, Accrual/provisioning, Inter-company reonciliation, GL Specific Assurance processes, JV Creation, Prepare financial statements (balance sheet, income statement & statement of cash flow), ",
  },
  {
    title: "Tax Compliance :",
    description:
      "UK VAT, UK PAYE, US Sales Tax, 1099, India GST, India TDS, Germay VAT, France  VAT, Australia VAT.",
  },
  {
    title: "Financial Planning & Analysis :",
    description: "Budgeting, MIS, Flux Analysis & management commentary ",
  },
  {
    title: "Procurement :",
    description:
      "Vendor identification, Zero based Costing, Vendor Negotiations, Vendor Dilligence, Sample testing & approval, Issuing Purchase Orders, Order tracking.",
  },
  {
    title: "Inventory Planning :",
    description: "Demand Forecasting, Supply Plans, Inventory Level monitoring",
  },
];

let FeaturedCapabilities = [
  {
    title: "PWC UK",
    audit: true,
    dueDilligence: false,
    technicalAccounting: true,
  },
  {
    title: "PWC India",
    audit: true,
    dueDilligence: true,
    technicalAccounting: true,
  },
  {
    title: "EY US",
    audit: true,
    dueDilligence: true,
    technicalAccounting: false,
  },
  {
    title: "EY UK",
    audit: true,
    dueDilligence: false,
    technicalAccounting: false,
  },
  {
    title: "EY India",
    audit: true,
    dueDilligence: true,
    technicalAccounting: false,
  },
  {
    title: "BDO UK",
    audit: true,
    dueDilligence: false,
    technicalAccounting: false,
  },
  {
    title: "BDO India",
    audit: true,
    dueDilligence: false,
    technicalAccounting: false,
  },
  {
    title: "KPMG Canada",
    audit: true,
    dueDilligence: false,
    technicalAccounting: false,
  },
];

const Card = [
  {
    title: "30% Cost Saving",
    description:
      "Business Challenge: A global advertising and marketing services provider wanted to establish a centralized accounting to support it’s global operations and expansion.",
    image: Article1.src,
    link: "insights/articles/30-cost-saving",
  },
  {
    title: "Workday 7 Month close",
    description:
      "Business Challenge: The client faced significant challenges in meeting it's Month Close deadline with the process extending beyond the group deadline of Workday 7.",
    image: Article2.src,
    link: "insights/articles/workday-7-month-close",
  },
  {
    title: "40+ Global VAT I GST audits",
    description:
      "Business Challenge: Globally, passing GST I VAT audits for finance teams poses significant challenges due to the complexity of data requirements.",
    image: Article3.src,
    link: "insights/articles/over-40-global-vat",
  },
];
