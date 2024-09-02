/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";

import Article1 from "@/public/assets/insights/Article_1.png";
import Article2 from "@/public/assets/insights/Article_2.png";
import Article3 from "@/public/assets/insights/Article_3.png";

export default function FifteenDSOImprovement() {
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
              15+ DSO improvement
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
                With rapid expansion of the business from one city operations to
                3 cities and 4 partners to 8 and ever expanding, there was no
                view of profitability per partner, location, line of business,
                etc. Further at the end of the month significant partner effort
                on the billing & collection process. Leading to high DSO &
                Revenue leakage.
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
              {/* <p className="text-base text-pretty">
              </p> */}
              <ul className="list-square marker:text-[#FFF600] ml-4 text-base">
                <li>
                  <span className="font-semibold">
                    Fortnightly time sheet & billing :
                  </span>{" "}
                  Implemented a fortnightly time sheet & invoicing process.
                </li>
                <li>
                  <span className="font-semibold">
                    Partner wise analytics :
                  </span>{" "}
                  Created a rigorous partnerwise of Unbilled work,
                  Chargeability, DSO & Effective Billing Rate
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
              <ul className="list-square text-base ml-4 marker:text-[#FFF600]">
                <li>
                  <span className="font-semibold">
                    Improved DSO & liquidity :
                  </span>{" "}
                  DSO improvement by almost 45 days leading to significant
                  improvement in liquidity.
                </li>
                <li>
                  <span className="font-semibold">
                    Improved Analytics & Performance Management
                  </span>{" "}
                </li>
                <li>
                  <span className="font-semibold">Scalability:</span> Ensured
                  the firm’s scalability without liquidity being adversely
                  impacted.
                </li>
                <li>
                  <span className="font-semibold">3 – 5% Cost Reduction :</span>{" "}
                  Reduction of partner involvement in financial management
                  resulted in an estimated saving of 3-5 % of revenue.
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
