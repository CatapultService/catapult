"use client";
import { Check, X } from "lucide-react";
import Link from "next/link";
export default function TextPage() {
  return (
    <>
      <div className=" bg-white px-10 md:px-20 text-black flex items-center">
        <div className="mx-auto max-w-6xl my-5">
          <p className="mt-16 mb-8 text-base leading-relaxed text-left">
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
        <div className="mx-auto max-w-6xl overflow-x-auto">
          <table className="w-full h-full text-sm text-center ">
            <thead className="bg-[#090F4A] text-white ">
              <tr className="">
                <th scope="col" className="w-1/5 p-2">
                  <h3 className="text-xs sm:text-sm md:text-base font-bold">
                    Insource vs Outsource
                  </h3>
                </th>
                <th scope="col" className="w-1/5 p-2">
                  <h3 className="text-xs sm:text-sm  md:text-base font-bold">
                    Employer of Choice
                  </h3>
                </th>
                <th scope="col" className="w-1/5 p-2">
                  <h3 className="text-xs sm:text-sm  md:text-base font-bold">
                    Process Maturity & Continious Improvement
                  </h3>
                </th>
                <th scope="col" className="w-1/5 p-2">
                  <h3 className="text-xs sm:text-sm  md:text-base font-bold">
                    Process enablement technology
                  </h3>
                </th>
                <th scope="col" className="w-1/5 p-2 pr-4">
                  <h3 className="text-xs sm:text-sm md:text-base font-bold">
                    Key Man Risk <br />
                    (adequate sized teams to create redundancy)
                  </h3>
                </th>
              </tr>
            </thead>
            <tbody className="text-black">
              {/* 1st row */}
              <tr className="">
                <td className="py-2 text-xs md:text-base">Insource</td>
                <td className="py-2 text-center font-semibold">Y</td>
                <td className="py-2 text-center font-semibold">Y</td>
                <td className="py-2 text-center font-semibold">Y</td>
                <td className="py-2 text-center font-semibold">Y</td>
              </tr>
              <tr className="">
                <td className="py-2 text-xs md:text-base">Outsource</td>
                <td className="py-2 text-center font-semibold">N</td>
                <td className="py-2 text-center font-semibold">N</td>
                <td className="py-2 text-center font-semibold">N</td>
                <td className="py-2 text-center font-semibold">N</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="px-10 md:px-20 mb-6">
        <div className="mx-auto max-w-6xl my-5">
          <div>
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
              <li className="text-base leading-relaxed text-left mb-3">
                Set up A Global Accounting Capability Centre to support global
                operations & expansion for a global advertising and marketing
                services provider.
              </li>

              <li className="text-base leading-relaxed text-left mb-3">
                Helped a Fortune 10 company clear accounting backlog due to
                employee turnover & ERP implementation. This was critical to
                stabilises accounting operations and meet it’s internal &
                external reporting and audit timelines.
              </li>

              <li className="text-base leading-relaxed text-left mb-3">
                For a listed company set up and operated a month & quarter close
                & reporting process, including managing the Big 4 audit.
              </li>
            </ul>
          </div>

          <div className="mt-10">
            <p className="text-xl mt-3 sm:text-lg md:text-2xl lg:text-3xl mb-3 font-bold text-[#090E4A] text-left">
              Featured Capabilities
            </p>

            <p className="text-base mt-1 mb-3 sm:text-lg text-pretty font-semibold text-black text-left">
              Big 4 Audit Management Credentials :
            </p>

            <table className="w-full h-full text-sm text-center ">
              <thead className="bg-[#090F4A] text-white ">
                <tr className="">
                  <th scope="col" className="w-1/4 p-2">
                    <h3 className="text-xs sm:text-sm md:text-base font-bold"></h3>
                  </th>
                  <th scope="col" className="w-1/4 p-2">
                    <h3 className="text-xs sm:text-sm  md:text-base font-bold">
                      Audit
                    </h3>
                  </th>
                  <th scope="col" className="w-1/4 p-2">
                    <h3 className="text-xs sm:text-sm  md:text-base font-bold">
                      Due Dilligence
                    </h3>
                  </th>
                  <th scope="col" className="w-1/4 p-2">
                    <h3 className="text-xs sm:text-sm  md:text-base font-bold">
                      Technical Accounting
                    </h3>
                  </th>
                </tr>
              </thead>
              <tbody className="text-black">
                {FeaturedCapabilities.map((item, index) => (
                  <tr key={index} className="">
                    <td className="py-3 md:pl-5 pl-1 text-xs md:text-base text-left font-semibold">
                      {item.title}
                    </td>
                    <td className="py-3 text-center font-semibold">
                      <div className="flex justify-center">
                        {item.audit ? (
                          <Check className="w-5 h-5 text-[#FFE600]" />
                        ) : (
                          <X className="w-5 h-5 text-[#FFE600]" />
                        )}
                      </div>
                    </td>
                    <td className="py-3 text-center font-semibold">
                      <div className="flex justify-center">
                        {item.dueDilligence ? (
                          <Check className="w-5 h-5 text-[#FFE600]" />
                        ) : (
                          <X className="w-5 h-5 text-[#FFE600]" />
                        )}
                      </div>
                    </td>
                    <td className="py-3 text-center font-semibold">
                      <div className="flex justify-center">
                        {item.technicalAccounting ? (
                          <Check className="w-5 h-5 text-[#FFE600]" />
                        ) : (
                          <X className="w-5 h-5 text-[#FFE600]" />
                        )}
                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10">
            <p className="text-xl mt-3 sm:text-lg md:text-2xl lg:text-3xl mb-6 font-bold text-[#090E4A] text-left">
              How We Help Clients
            </p>
            <ul className="list-disc list-outside pl-5">

              <li className="text-base leading-relaxed text-left mb-3 text-[#FFE600] hover:underline">
                <Link href="#">Capbility Centres</Link>
              </li>

              <li className="text-base leading-relaxed text-left mb-3 text-[#FFE600] hover:underline">
                <Link href="#">M&A, Private Equity & Investor Relations</Link>
              </li>

              <li className="text-base leading-relaxed text-left mb-3 text-[#FFE600] hover:underline">
                <Link href="#">Enterprise Data Cloud & Ai</Link>
              </li>

              <li className="text-base leading-relaxed text-left mb-3 text-[#FFE600] hover:underline">
                <Link href="#">Performance Improvement</Link>
              </li>


            </ul>
          </div>
        </div >
      </div >
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
    technicalAccounting: false,
  },
  {
    title: "PWC US",
    audit: true,
    dueDilligence: true,
    technicalAccounting: false,
  },
  {
    title: "PWC UK",
    audit: true,
    dueDilligence: false,
    technicalAccounting: false,
  },
  {
    title: "PWC India",
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
