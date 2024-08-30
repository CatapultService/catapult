/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";

import Article1 from "@/public/assets/insights/Article_1.png";
import Article2 from "@/public/assets/insights/Article_2.png";
import Article3 from "@/public/assets/insights/Article_3.png";

export default function Big4AuditReadiness() {
  return (
    <main className="flex  flex-col justify-between w-full">
      <Navbar />
      <span className="h-20"></span>

      <div className=" bg-white px-10 md:px-20 text-black flex items-center">
        <div className="max-w-8xl my-5 w-full">
          <div className="flex justify-start my-10">
            <Link href="/insights">
              <button className="flex fl`ex-row text-left items-center text-black hover:underline text-base">
                <ChevronLeft className="mr-2 text-lg" /> Back to Insights
              </button>
            </Link>
          </div>
          <div className="flex justify-center items-center w-full mt-5 mb-10">
            <p className="text-3xl sm:text-3xl md:text-5xl font-bold text-[#090E4A] text-center">
              Big 4 Audit readiness
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col md:flex-row w-full">
          <div className="flex-1 md:hidden block">
            <img
              src={Article3.src}
              alt="Article 1"
              className="w-full h-full xl:h-52 object-cover"
            />
          </div>

          <div className="flex-1">
            <div className="text-black px-10 md:px-20 py-10">
              <h3 className="text-4xl font-bold mb-4">Business Challenge</h3>
              <p className="text-base text-pretty">
                A Fortune 10 company was unable to meet it’s internal / external
                reporting / audit timelines due to a backlog of almost 5 months
                in accounting due to high employee turnover and an ERP
                implementation.
              </p>
            </div>
          </div>

          <div className="flex-1 md:block hidden">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${Article3.src})` }}
            ></div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full">
          <div className="flex-1 md:hidden block">
            <img
              src={Article1.src}
              alt="Article 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 md:block hidden">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${Article1.src})` }}
            ></div>
          </div>

          <div className="flex-1">
            <div className="text-black px-10 md:px-20 py-10">
              <h3 className="text-4xl font-bold mb-4">Solution Implemented</h3>
              <p className="text-base text-pretty">
                Designed and successfully implemented the solution in 6 months,
                across 3 different entities. The scope of work included :
              </p>

              <ul className="list-square marker:text-[#FFF600] ml-4 text-base">
                <li>
                  <span className="font-semibold">Backlog clearance :</span>{" "}
                  Updated backlog recrords, validated openig balnces
                  transitioned to the ERP, created supporting data for key
                  Balance Sheet ledgers.
                </li>
                <li>
                  <span className="font-semibold">
                    Stabilised Finance Operations :
                  </span>{" "}
                  Streamlined Accounts Payable & Receivable processes to avoid
                  repeat of backlogs.
                </li>
                <li>
                  <span className="font-semibold">Month close Porcess :</span>{" "}
                  Created a Month Close Checklist with roles & responsibilities
                  along with preparation of audit schedules on a monthly basis
                  to ensure Audit Readiness.
                </li>
                <li>
                  <span className="font-semibold">
                    Data quality Assurance :
                  </span>{" "}
                  Enhanced assurance for critical process such as Revenue
                  Recognition, Cash Application, Receivable Management, Asset
                  Tracking, etc.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full">
          <div className="flex-1 md:hidden block">
            <img
              src={Article2.src}
              alt="Article 1"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1">
            <div className="text-black px-10 md:px-20 py-10">
              <h3 className="text-4xl font-bold mb-4">Our Impact</h3>

              <ul className="list-square text-base  ml-4 marker:text-[#FFF600]">
                <li>
                  <span className="font-semibold">Audit completion :</span>{" "}
                  Ensutred audit completion within 6 months across 3 entities
                </li>
                <li>
                  <span className="font-semibold">DSO reduction :</span>{" "}
                  Backlogs led to pile up of receivables, brought to target
                  limits within 3 months. .
                </li>
                <li>
                  <span className="font-semibold">Plug Revenue Leakage :</span>{" "}
                  Broken processes & data led to AMC Revenue not being billed,
                  corrected the same leading to enhanced revenue.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex-1 md:block hidden">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${Article2.src})` }}
            ></div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
