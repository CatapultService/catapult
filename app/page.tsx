import Image from "next/image";
import Hero from "@/components/layout/hero";
import Opportunity from "@/components/layout/homePage/opportunity";
import HowWorks from "@/components/layout/homePage/howWorks";
import RoleOfFinance from "@/components/layout/homePage/role";
import Approach from "@/components/layout/homePage/approach";
import Testimonials from "@/components/layout/homePage/testimonials";
import Navbar from "@/components/layout/navbar";
import HowHelp from "@/components/layout/homePage/howHelp";
import Impact from "@/components/layout/homePage/impact";
import People from "@/components/layout/people";
import Footer from "@/components/layout/footer";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col justify-between w-full">
      <Navbar />

      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
      <Hero heroText="Enterprise Performance Transformation Powered by Data, Ai & Inclusivity" />

      <div className=" bg-white px-10 md:px-20 text-black flex items-center">
        <div className="mx-auto max-w-8xl my-5">
          <p className="mt-6 text-base leading-relaxed mx-auto text-left">
            Our ethos is to nurture leaders who have missed out on the Ovarian
            Lottery by leveraging our proprietary operating model powered by AI
            to help deliver superior client outcomes and build lasting
            relationships.
          </p>
          <div className="flex mb-6 mt-1">
            <Link href="/about-us" className="">
              <p className=" flex items-center text-lg font-bold hover:text-[#2251FF] hover:underline">
                Learn More
                <span>
                  <ChevronRight className="w-6  text-[#2251FF]" />
                </span>
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* <Opportunity />
      <RoleOfFinance /> */}
      <HowHelp />
      <Approach page="homePage" />
      {/* <HowWorks /> */}
      <Impact />
      <Testimonials />
      <People />
      <Footer />
    </main>
  );
}
