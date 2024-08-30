import Navbar from "@/components/layout/navbar";
import Hero from "@/components/layout/hero";
import HowWorks from "@/components/layout/homePage/howWorks";
import Footer from "@/components/layout/footer";
import ProgressBar from "@ramonak/react-progress-bar";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function WhiteHome() {
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
          <div className="flex flex-col w-full">
            <p className="text-3xl sm:text-3xl md:text-5xl mb-6 font-bold text-[#090E4A] text-center">
              30% Cost Savings
            </p>
          </div>

          {/* <p className="mt-0 mb-16 text-base  leading-relaxed mx-auto text-left">
            At the core how companies organise their data and teams can
            transform business outcomes.
          </p> */}
        </div>
      </div>

      <Footer />
    </main>
  );
}
