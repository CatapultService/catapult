/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";

import Article1 from "@/public/assets/insights/Article_1.png";
import Article2 from "@/public/assets/insights/Article_2.png";
import Article3 from "@/public/assets/insights/Article_3.png";

export default function Workday7MonthClose() {
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
              Workday 7 Month close
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
                The client faced significant challenges in meeting it’s Month
                Close deadline with the process extending beyond the group
                deadline of Workday 7.
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

              <ul className="list-square marker:text-[#FFF600] ml-4 text-base">
                <li>
                  <span className="font-semibold">
                    Granular Close Calendar:
                  </span>{" "}
                  The entire book close process was deconstructed into detailed,
                  specific tasks. Established clear deadlines & responsibilities
                  for each task.
                </li>
                <li>
                  <span className="font-semibold">
                    Automated key processes with detailed drill down capability{" "}
                  </span>{" "}
                  for quicker turnaround of key processes requiring judgement &
                  approval.
                </li>
                <li>
                  <span className="font-semibold">
                    Templatization and Training:
                  </span>{" "}
                  Created a detailed checklist, with standardized roll-forward &
                  rationalisation templates for the key General Ledger accounts,
                  ensuring quicker review and signoff.
                </li>
                <li>
                  <span className="font-semibold">
                    Parallel Task Execution and Coordination:
                  </span>{" "}
                  Designed the process to allow many GLs to be closed
                  simultaneously and sent for phased Client review.
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
                  <span className="font-semibold">
                    Meeting the Group’s deadline:
                  </span>{" "}
                  The updated process enabled the client to finalize their
                  monthly accounts within the WD7 timeframe.
                </li>
                <li>
                  <span className="font-semibold">Improved Accuracy:</span> The
                  creation of standardized templates and detailed checklists
                  reduced errors and inconsistencies.
                </li>
                <li>
                  <span className="font-semibold">Improved Team Morale:</span>{" "}
                  A more phased delivery of reports from day one reduced last
                  minute pressure improving team morale.
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
