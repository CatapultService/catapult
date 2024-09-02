/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";

import Article1 from "@/public/assets/insights/Article_1.png";
import Article2 from "@/public/assets/insights/Article_2.png";
import Article3 from "@/public/assets/insights/Article_3.png";

export default function ListingSupportOnAimLse() {
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
              Listing Support on AIM, LSE
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
                Our client, an Ai company with no accounting staff wanted
                support to prepare for a listing in 12 months.
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
                  Translated the past 3 years financial statements to IFRS
                </li>
                <li>
                  Conducted a market Study to estimate the Target Addressable
                  Market for the technology.
                </li>
                <li>Prepared the 5 year business projections</li>
                <li>Created Valuation Benchmarks</li>
                <li>Supported preparation of DHRP</li>
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
                  Successful listing with oversubscription and without any
                  delays.
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
