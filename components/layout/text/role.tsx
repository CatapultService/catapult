"use client";
import React from "react";
import Link from "next/link";
import ProgressBar from "@ramonak/react-progress-bar";

export default function role() {
  return (
    <>
      <div className="px-10 md:px-20 bg-[#090E4A]">
        <p className="mx-auto max-w-6xl my-3 text-sm sm:text-lg md:text-2xl lg:text-3xl font-bold leading-relaxed  text-white  ">
          Role of Finance in Linking Growth to Shareholder Value Creation
        </p>
      </div>

      <div className="bg-white px-10 md:px-20 text-[#202020]">
        <div className="mx-auto max-w-6xl my-10 ">
          <div className="grid grid-cols-1 md:grid-cols-3 mb-8 gap-6 ">
            <div className="relative my-6">
              <h3 className="text-lg font-bold mt-0 mb-2">IT Landscape</h3>
              <ul>
                <li>Data Fragmentation</li>
                <li>Unstructured Data</li>
                <li>Enterprise Data Cloud</li>
              </ul>
              <h3 className="text-lg font-bold mt-4 mb-2">Analytics & Decision Making</h3>
              <ul>
                <li>Manual Analysis & Excel Dependency</li>
                <li>Inward looking & rear view orientation</li>
                <li>Real-time actionable insights linking KPIs to Operations Drivers</li>
              </ul>
              <h3 className="text-lg font-bold mt-4 mb-2">Team Structure</h3>
              <ul>
                <li>Employer of Choice for the domain</li>
                <li>Domain Expertise & Process Maturity</li>
                <li>KPIs drive morale-Data Plumber vs Biz Partner</li>
                <li>Incentive Structures</li>
              </ul>
            </div>
            <div className="relative my-6">
              <p>meow</p>
              <ProgressBar completed={60} maxCompleted={100} borderRadius="0" animateOnRender bgColor="#090E4A" /> 
              <ProgressBar completed={60} maxCompleted={100} borderRadius="0" animateOnRender bgColor="#090E4A" /> 
              <ProgressBar completed={60} maxCompleted={100} borderRadius="0" animateOnRender bgColor="#090E4A" /> 
              <ProgressBar completed={60} maxCompleted={100} borderRadius="0" animateOnRender bgColor="#090E4A" /> 
              <ProgressBar completed={60} maxCompleted={100} borderRadius="0" animateOnRender bgColor="#090E4A" /> 
              <ProgressBar completed={60} maxCompleted={100} borderRadius="0" animateOnRender bgColor="#090E4A" /> 
              <ProgressBar completed={60} maxCompleted={100} borderRadius="0" animateOnRender bgColor="#090E4A" /> 
              <ProgressBar completed={60} maxCompleted={100} borderRadius="0" animateOnRender bgColor="#090E4A" /> 
              <ProgressBar completed={60} maxCompleted={100} borderRadius="0" animateOnRender bgColor="#090E4A" /> 
            </div>
            <div className="relative my-6">
              <p>meow</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}