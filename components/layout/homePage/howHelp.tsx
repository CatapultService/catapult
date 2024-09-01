import React from "react";
import Link from "next/link";
import FirstImg from "@/public/assets/homePage/howHelp/first.png";
import SecondImg from "@/public/assets/homePage/howHelp/second.png";
import ThirdImg from "@/public/assets/homePage/howHelp/third.png";
import FourthImg from "@/public/assets/homePage/howHelp/fourth.png";

export default function howHelp() {
  return (
    <div className="w-full bg-[#090E4A]">
      <div className="my-16">
        <p className="mb-6 md:px-20 px-10 text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-bold leading-relaxed mx-auto text-white text-left">
          How We Help Clients
        </p>
      </div>
      <div className="hidden text-white lg:flex ">
        <div
          className="flex-1 p-6 h-[30rem] transition-all bg-black duration-300 hover:flex-[2] bg-cover group flex flex-col justify-between relative"
          style={{ backgroundImage: `url(${FirstImg.src})` }}
        >
          {/* <div className="absolute inset-0 bg-black/10 "></div> */}
          <Link href="/catapult-capability">
            <h3 className="text-3xl font-bold text-[#FFE600]">
              Capability Centres
            </h3>
          </Link>
          {/* <p className="text-lg max-w-sm font-medium hidden group-hover:block">
            Catapult combines the tech application eco system of clients with
            it&apos;s proprietary data cloud, Ai co-pilots and catapult
            capability-centres, to drive business outcomes.
          </p> */}
        </div>
        <div
          className="flex-1 p-6 h-[30rem] transition-all bg-black duration-300 hover:flex-[2] bg-cover group flex flex-col justify-between relative"
          style={{ backgroundImage: `url(${SecondImg.src})` }}
        >
          <Link href="/m&a">
            <h3 className="text-3xl font-bold text-[#FFE600]">
              M&A, Private Equity & Investor Relations
            </h3>
          </Link>
          {/* <p className="text-lg max-w-sm font-medium hidden group-hover:block">
            Catapult combines the tech application eco system of clients with
            it&apos;s proprietary data cloud, Ai co-pilots and catapult
            capability-centres, to drive business outcomes.
          </p> */}
        </div>
        <div
          className="flex-1 p-6 h-[30rem] transition-all bg-black duration-300 hover:flex-[2] bg-cover group flex flex-col justify-between relative"
          style={{ backgroundImage: `url(${ThirdImg.src})` }}
        >
          <Link href="/data-cloud">
            <h3 className="text-3xl font-bold text-[#FFE600]">
              Enterprise Data Cloud & Ai
            </h3>
          </Link>
          {/* <p className="text-lg max-w-sm font-medium hidden group-hover:block">
            Catapult combines the tech application eco system of clients with
            it&apos;s proprietary data cloud, Ai co-pilots and catapult
            capability-centres, to drive business outcomes.
          </p> */}
        </div>
        <div
          className="flex-1 p-6 h-[30rem] transition-all bg-black duration-300 hover:flex-[2] bg-cover group flex flex-col justify-between relative"
          style={{ backgroundImage: `url(${FourthImg.src})` }}
        >
          <Link href="/performance-improvement">
            <h3 className="text-3xl font-bold text-[#FFE600]">
              Performance Improvement
            </h3>
          </Link>
          {/* <p className="text-lg max-w-sm font-medium hidden group-hover:block">
            Catapult combines the tech application eco system of clients with
            it&apos;s proprietary data cloud, Ai co-pilots and catapult
            capability-centres, to drive business outcomes.
          </p> */}
        </div>
      </div>

      <div className="grid grid-cols-1  sm:grid-cols-2 text-white lg:hidden">
        <div
          className="flex-1 p-6 h-[30rem] transition-all duration-300 hover:flex-[2] bg-cover flex flex-col justify-center "
          style={{ backgroundImage: `url(${FirstImg.src})` }}
        >
          <h3 className="text-3xl font-bold text-[#FFE600] mb-4">
            Capability Centres
          </h3>
          {/* <p className="text-lg max-w-sm font-medium">
            Catapult combines the tech application eco system of clients with
            it&apos;s proprietary data cloud, Ai co-pilots and catapult
            capability-centres, to drive business outcomes.
          </p> */}
        </div>
        <div
          className="flex-1 p-6 h-[30rem] transition-all duration-300 hover:flex-[2] bg-cover flex flex-col justify-center "
          style={{ backgroundImage: `url(${SecondImg.src})` }}
        >
          <h3 className="text-3xl font-bold text-[#FFE600] mb-4">
            M&A, Private Equity & Investor Relations
          </h3>
          {/* <p className="text-lg max-w-sm font-medium">
            Catapult combines the tech application eco system of clients with
            it&apos;s proprietary data cloud, Ai co-pilots and catapult
            capability-centres, to drive business outcomes.
          </p> */}
        </div>
        <div
          className="flex-1 p-6 h-[30rem] transition-all duration-300 hover:flex-[2] bg-cover flex flex-col justify-center "
          style={{ backgroundImage: `url(${ThirdImg.src})` }}
        >
          <h3 className="text-3xl font-bold text-[#FFE600] mb-4">
            Enterprise Data Cloud & Ai{" "}
          </h3>
          {/* <p className="text-lg max-w-sm font-medium">
            Catapult combines the tech application eco system of clients with
            it&apos;s proprietary data cloud, Ai co-pilots and catapult
            capability-centres, to drive business outcomes.
          </p> */}
        </div>
        <div
          className="flex-1 p-6 h-[30rem] transition-all duration-300 hover:flex-[2] bg-cover flex flex-col justify-center "
          style={{ backgroundImage: `url(${FourthImg.src})` }}
        >
          <h3 className="text-3xl font-bold text-[#FFE600] mb-4">
            Performance Improvement
          </h3>
          {/* <p className="text-lg max-w-sm font-medium">
            Catapult combines the tech application eco system of clients with
            it&apos;s proprietary data cloud, Ai co-pilots and catapult
            capability-centres, to drive business outcomes.
          </p> */}
        </div>
      </div>
    </div>
  );
}
