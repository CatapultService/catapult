import React from "react";
import { Separator } from "@/components/ui/separator";
export default function Opportunity() {
  return (
    <>
      <div className=" bg-white px-10 md:px-20 text-black flex items-center">
        <div className="mx-auto max-w-6xl my-5">
          <p className="my-16 text-base leading-relaxed mx-auto text-left">
            We help clients optimize operations and transform businesses through
            Catapult Capability Centres that harness the power of analytics,
            data and AI. Our unique delivery model empowers our teams to
          </p>
          {/* <Separator className="max-w-xl mx-auto" /> */}
          <div className="flex flex-col  mt-16 mb-6">
            <p className="text-sm sm:text-lg md:text-2xl lg:text-3xl mb-6 font-bold text-[#090E4A] text-left">
              THE OPPORTUNITY
            </p>
            <p className=" text-base leading-relaxed mx-auto text-left">
              Data & Ai powered teams can be transformed into Capability Centres
              that can help organisations drive a margin lift of 15-20. However,
              disjointed data, complex tech stacks, talent crunch, siloed teams
            </p>
          </div>

          <p className="mt-0 mb-16 text-base  leading-relaxed mx-auto text-left">
          At the core how companies organise their data and teams can transform business outcomes. 
          </p>
        </div>
      </div>
    </>
  );
}
