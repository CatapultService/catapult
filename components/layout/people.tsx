/* eslint-disable @next/next/no-img-element */
import React from "react";
import People from "@/public/assets/people/people.png";

import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

import { ChevronRight, ChevronLeft } from "lucide-react";

import Article1 from "@/public/assets/insights/Article_1.png";
import Article5 from "@/public/assets/insights/Article_5.png";
import Article11 from "@/public/assets/insights/Article_11.png";

export default function people() {
  return (
    <div className="flex bg-white px-10 md:px-20 mb-10 text-[#202020]">
      <div className="max-w-8xl w-full">
        {/* <div className="mx-auto min-w-6xl mb-8 px-0 xl:px-14"> */}
        <div className="flex flex-col ">
          <p className="text-left text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-bold text-[#090E4A] ">
            Our People
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 justify-between my-4">
            <div className=" hover:shadow-lg hover:border-1 border-gray-200">
              <div className="flex flex-col mt-4 mx-3 md:mx-10">
                <div className="flex flex-col lg:flex-row items-center my-6 mx-2 gap-4">
                  <img src={People.src} alt="people" className="w-40 h-full" />
                  <div className="flex flex-col justify-center  md:items-start items-cente">
                    <p className="text-4xl sm:text-xl md:text-2xl font-bold text-[#090E4A]">
                      {" "}
                      Ashish Khanna
                    </p>
                    <p className="py-1 text-sm lg:text-base font-normal">
                      Co-founder & Exec Chair
                    </p>

                    {/* <Link href="#" className="hover:text-yellow-500">
                    <FaLinkedin className="w-6 h-6" />
                  </Link> */}
                  </div>
                </div>

                <p className=" text-sm lg:text-base font-normal">
                  Ashish helps clients in managing complex transformation
                  programmes involving new technology adoption, business &
                  operating model transformation & new product launch.
                </p>
                <p className=" text-lg font-semibold mt-4 mb-1">
                  Key assignments :{" "}
                </p>
                <p className=" text-sm lg:text-base font-normal mb-6">
                  CEO - Global Services, Amongst largest global network for
                  marketing & advertising <br />
                  COO - $1.6B operating P&L of a world leader in Consulintg &
                  BPO <br />
                  CEO - Setting up to scaling to10,000+ team for top IT &
                  Consulting company.
                </p>
              </div>
            </div>

            <div className="hover:shadow-lg hover:border-1 border-gray-200">
              <div className="flex flex-col mt-4 mx-3 md:mx-10">
                <div className="flex flex-col lg:flex-row items-center my-6 gap-4">
                  <img src={People.src} alt="people" className="w-40 h-full" />
                  <div className="flex flex-col justify-center md:items-start items-cente">
                    <p className="text-4xl sm:text-xl md:text-2xl font-bold text-[#090E4A]">
                      {" "}
                      Nikunj Gupta
                    </p>
                    <p className="py-2 text-xs lg:text-base font-normal">
                      Co-founder & CEO
                    </p>
                    {/* <Link href="#" className="hover:text-yellow-500">
                    <FaLinkedin className="w-6 h-6" />
                  </Link> */}
                  </div>
                </div>
                <p className=" text-xs lg:text-base font-normal">
                  Nikunj has a comprehensive understanding on scaling up
                  businesses incuding Finance Ops, Capital Raise, M&A & Investor
                  relations, Strategy development & Execution, Enterprise
                  Performance Management, GTM, Channel Management & Sales,
                  Operating & Digital transformation
                </p>
                <p className=" text-lg font-semibold mt-4 mb-1">
                  Key assignments :{" "}
                </p>
                <p className=" text-xs lg:text-base font-normal mb-6">
                  Co-founder & CFO, Beverage platform (150+ Stores & 5,000+
                  Brewing Bot installations) <br />
                  CF0-Largest PE owned Education Chain in India Setting up &
                  scaling to10,000+ team for top IT & Consulting company.
                </p>
              </div>
            </div>

            <div className="hover:shadow-lg hover:border-1 border-gray-200">
              <div className="flex flex-col mt-4 mx-3 md:mx-10 text-pretty">
                <div className="flex flex-col lg:flex-row items-center  my-6 gap-4">
                  <img src={People.src} alt="people" className="w-40 h-full" />
                  <div className="flex flex-col justify-center md:items-start items-center">
                    <p className="text-4xl sm:text-xl md:text-2xl font-bold text-[#090E4A]">
                      {" "}
                      Anand Shetty
                    </p>
                    <p className="py-2 text-xs lg:text-base font-normal">
                      Co-founder & COO
                    </p>
                    {/* <Link href="#" className="hover:text-yellow-500">
                    <FaLinkedin className="w-6 h-6" />
                  </Link> */}
                  </div>
                </div>

                <p className=" text-xs lg:text-base font-normal">
                  Anand specialises in Finance function design & setup, Post
                  Acquisition Integration, Complex Technical accounting,
                  Financial data assurance, Global Tax compliance co-ordination
                  (UK, US, France, India, NZ and AU), Deep understanding
                  accounting IT Systems (NetSuite, Tally, Xero, Sage and QB).
                </p>
                <p className=" text-lg font-semibold mt-4 mb-1">
                  Key assignments :{" "}
                </p>
                <p className=" text-xs lg:text-base font-normal mb-6">
                  F&A Bak Office head - Global Media company <br />
                  15+ Years of experience in working working with growth stage
                  companies & Big 4 Auditors across US, UK, Australia & India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
