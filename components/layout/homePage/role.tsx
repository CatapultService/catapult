"use client";
import React from "react";
import Link from "next/link";
import ProgressBar from "@ramonak/react-progress-bar";

export default function role() {
  return (
    <>
      <div className="px-10 md:px-20 bg-[#090E4A]">
        <div className="mx-auto max-w-6xl">
          <p className="my-3 text-sm sm:text-lg md:text-2xl lg:text-3xl font-bold leading-relaxed  text-white  ">
            Role of Finance in Linking Growth to Shareholder Value Creation
          </p>
        </div>
      </div>

      <div className="px-10 md:px-20 mb-6">
        <div className="mx-auto max-w-6xl my-10">
          <table className="w-full text-sm text-left">
            <thead className="">
              <tr>
                <th scope="col" className="w-1/3">
                  <h3 className="text-base  md:text-lg font-bold text-black">
                    IT Landscape
                  </h3>
                  <p className="text-sm font-normal text-white">
                    ERP + SaaS + Excel
                  </p>
                </th>
                <th scope="col" className="w-1/3 text-center">
                  <h3 className="text-base md:text-lg font-bold text-black">
                    Current State
                  </h3>
                  <p className="text-sm font-normal">ERP + SaaS + Excel</p>
                </th>
                <th scope="col" className="w-1/3 text-center">
                  <h3 className="text-base md:text-lg font-bold text-black">
                    Ideal State
                  </h3>
                  <p className="text-sm font-normal">
                    ERP + SaaS + Data Cloud + Ai Co-Pilots
                  </p>
                </th>
              </tr>
            </thead>
            <tbody className="text-black">
              {/* 1st row */}
              <tr className="">
                <td className="py-2 text-base md:text-lg font-bold">DATA</td>
                <td className="py-2 "></td>
                <td className="py-2 "></td>
              </tr>
              <tr className="">
                <td className="pb-2 text-xs md:text-base">
                  Data Fragmentation
                </td>
                <td className="pb-2 text-center">
                  <ProgressBar
                    completed={100}
                    maxCompleted={100}
                    borderRadius="0"
                    animateOnRender
                    bgColor="#090E4A"
                    className="max-w-60 mx-auto"
                  />
                </td>
                <td className="pb-2 text-center">
                  <ProgressBar
                    completed={30}
                    maxCompleted={100}
                    borderRadius="0"
                    animateOnRender
                    bgColor="#090E4A"
                    className="max-w-60 mx-auto"
                  />
                </td>
              </tr>
              <tr className="">
                <td className="py-2 text-xs md:text-base">Unstructured Data</td>
                <td className="py-2 text-center">
                  <ProgressBar
                    completed={50}
                    maxCompleted={100}
                    borderRadius="0"
                    animateOnRender
                    bgColor="#090E4A"
                    className="max-w-60 mx-auto"
                  />
                </td>
                <td className="py-2 text-center ">
                  <ProgressBar
                    completed={20}
                    maxCompleted={100}
                    borderRadius="0"
                    animateOnRender
                    bgColor="#090E4A"
                    className="max-w-60 mx-auto"
                  />
                </td>
              </tr>
              <tr className="">
                <td className="pt-2 pb-4 text-xs md:text-base">
                  Enterprise Data Cloud
                </td>
                <td className="pt-2 pb-4 text-center">
                  <ProgressBar
                    completed={0}
                    maxCompleted={100}
                    borderRadius="0"
                    animateOnRender
                    bgColor="#090E4A"
                    className="max-w-60 mx-auto"
                  />
                </td>
                <td className="pt-2 pb-4 text-center ">
                  <ProgressBar
                    completed={100}
                    maxCompleted={100}
                    borderRadius="0"
                    animateOnRender
                    bgColor="#090E4A"
                    className="max-w-60 mx-auto"
                  />
                </td>
              </tr>

              {/* 2nd row */}
              <tr className="">
                <td className="py-2 text-base md:text-lg font-bold">
                  ANALYTICS & DECISION MAKING
                </td>
                <td className="py-2 "></td>
                <td className="py-2 "></td>
              </tr>
              <tr className="">
                <td className="pb-2 text-xs md:text-base">
                  Manual Analysis & Excel Dependency
                </td>
                <td className="pb-2 text-center">
                  <ProgressBar
                    completed={80}
                    maxCompleted={100}
                    borderRadius="0"
                    animateOnRender
                    bgColor="#090E4A"
                    className="max-w-60 mx-auto"
                  />
                </td>
                <td className="pb-2 text-center">
                  <ProgressBar
                    completed={50}
                    maxCompleted={100}
                    borderRadius="0"
                    animateOnRender
                    bgColor="#090E4A"
                    className="max-w-60 mx-auto"
                  />
                </td>
              </tr>
              <tr className="">
                <td className="py-2 text-xs md:text-base">
                  Inward looking & rear view orientation
                </td>
                <td className="py-2 text-center">
                  <ProgressBar
                    completed={75}
                    maxCompleted={100}
                    borderRadius="0"
                    animateOnRender
                    bgColor="#090E4A"
                    className="max-w-60 mx-auto"
                  />
                </td>
                <td className="py-2 text-center ">
                  <ProgressBar
                    completed={44}
                    maxCompleted={100}
                    borderRadius="0"
                    animateOnRender
                    bgColor="#090E4A"
                    className="max-w-60 mx-auto"
                  />
                </td>
              </tr>
              <tr className="">
                <td className="py-2 text-xs md:text-base">
                  Real-time actionable insights linking KPIs to Operations
                  Drivers
                </td>
                <td className="py-2 text-center">
                  <ProgressBar
                    completed={25}
                    maxCompleted={100}
                    borderRadius="0"
                    animateOnRender
                    bgColor="#090E4A"
                    className="max-w-60 mx-auto w-full"
                  />
                </td>
                <td className="py-2 text-center text">
                  <ProgressBar
                    completed={90}
                    maxCompleted={100}
                    borderRadius="0"
                    animateOnRender
                    bgColor="#090E4A"
                    className="max-w-60 mx-auto w-full"
                  />
                </td>
              </tr>

              {/* 3rd row */}
              <tr className="">
                <td className="py-2 text-base md:text-lg font-bold">
                  TEAM STRUCTURE
                </td>
                <td className="py-2 "></td>
                <td className="py-2 "></td>
              </tr>
              <tr className="">
                <td className="pb-2 text-xs md:text-base">
                  Employer of Choice for the domain
                </td>
                <td className="pb-2 text-center">
                  <ProgressBar
                    completed={60}
                    maxCompleted={100}
                    borderRadius="0"
                    animateOnRender
                    bgColor="#090E4A"
                    className="max-w-60 mx-auto"
                  />
                </td>
                <td className="pb-2 text-center">
                  <ProgressBar
                    completed={99}
                    maxCompleted={100}
                    borderRadius="0"
                    animateOnRender
                    bgColor="#090E4A"
                    className="max-w-60 mx-auto"
                  />
                </td>
              </tr>
              <tr className="">
                <td className="pb-2 text-xs md:text-base">
                  Domain Expertise & Process Maturity
                </td>
                <td className="pb-2 text-center">
                  <ProgressBar
                    completed={80}
                    maxCompleted={100}
                    borderRadius="0"
                    animateOnRender
                    bgColor="#090E4A"
                    className="max-w-60 mx-auto"
                  />
                </td>
                <td className="pb-2 text-center">
                  <ProgressBar
                    completed={50}
                    maxCompleted={100}
                    borderRadius="0"
                    animateOnRender
                    bgColor="#090E4A"
                    className="max-w-60 mx-auto"
                  />
                </td>
              </tr>
              <tr className="">
                <td className="py-2 text-xs md:text-base">
                  KPIs drive morale-Data Plumber vs Biz Partner
                </td>
                <td className="py-2 text-center">
                  <ProgressBar
                    completed={75}
                    maxCompleted={100}
                    borderRadius="0"
                    animateOnRender
                    bgColor="#090E4A"
                    className="max-w-60 mx-auto"
                  />
                </td>
                <td className="py-2 text-center ">
                  <ProgressBar
                    completed={30}
                    maxCompleted={100}
                    borderRadius="0"
                    animateOnRender
                    bgColor="#090E4A"
                    className="max-w-60 mx-auto"
                  />
                </td>
              </tr>
              <tr className="">
                <td className="py-2 text-xs md:text-base">
                  Incentive Structures
                </td>
                <td className="py-2 text-center">
                  <ProgressBar
                    completed={40}
                    maxCompleted={100}
                    borderRadius="0"
                    animateOnRender
                    bgColor="#090E4A"
                    className="max-w-60 mx-auto w-full"
                  />
                </td>
                <td className="py-2 text-center text">
                  <ProgressBar
                    completed={100}
                    maxCompleted={100}
                    borderRadius="0"
                    animateOnRender
                    bgColor="#090E4A"
                    labelAlignment="outside"
                    labelColor="black"
                    className="max-w-60 mx-auto w-full flex"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
