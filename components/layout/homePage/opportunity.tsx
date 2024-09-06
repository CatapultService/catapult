import React from "react";
import { Separator } from "@/components/ui/separator";
export default function Opportunity() {
  return (
    <>
      <div className=" bg-white px-10 md:px-20 text-black flex items-center">
        <div className="mx-auto max-w-8xl my-5">
          {/* <p className="mt-6 mb-0 text-base leading-relaxed mx-auto text-left">
            Our ethos is to nurture leaders who have missed out on the Ovarian
            Lottery by leveraging our proprietary operating model powered by AI
            to help deliver superior client outcomes and build lasting
            relationships.
          </p> */}
          {/* <Separator className="max-w-xl mx-auto" /> */}
          <div className="flex flex-col my-6">
            <p className="text-sm sm:text-lg md:text-2xl lg:text-3xl mb-6 font-bold text-[#090E4A] text-left">
              The Opportunity
            </p>
            <p className=" text-base leading-relaxed mx-auto text-left">
              Data & Ai powered teams can be transformed into Capability Centres
              that can help organisations drive a margin lift of 15-20. However,
              disjointed data, complex tech stacks, talent crunch, siloed teams
              and over reliance on excel & manual effort for analysis & decision
              support is holding organisations back. 
            </p>
          </div>

          <p className="my-0 text-base  leading-relaxed mx-auto text-left">
            At the core how companies organise their data and teams can
            transform business outcomes.
          </p>
        </div>
      </div>
    </>
  );
}
