/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import Blog from "@/public/assets/insights/blog.png";
import { Badge } from "@/components/ui/badge";

export default function TextPage() {
  return (
    <>
      <div className="px-10 md:px-20 mb-6">
        <div className="mx-auto max-w-6xl my-5">
          <div className="flex flex-col mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 ">
              <div className="px-6 py-2 rounded-lg">
                <img src={Blog.src} alt="blog" className="w-full mb-2" />
                <Badge className="bg-[#090F4A] text-white mb-2">Badge</Badge>
                <h2 className="text-lg font-bold mb-2">Level: Pod Leader</h2>
                <p className="text-base leading-relaxed text-left">
                  Eligible to open Independent office in location of choiProfit
                  share
                </p>
              </div>

              <div className="px-6 py-2 rounded-lg">
                <img src={Blog.src} alt="blog" className="w-full mb-2" />
                <Badge className="bg-[#090F4A] text-white mb-2">Badge</Badge>
                <h2 className="text-lg font-bold mb-2">Level: Pod Leader</h2>
                <p className="text-base leading-relaxed text-left">
                  Eligible to open Independent office in location of choiProfit
                  share
                </p>
              </div>

              <div className="px-6 py-2 rounded-lg">
                <img src={Blog.src} alt="blog" className="w-full mb-2" />
                <Badge className="bg-[#090F4A] text-white mb-2">Badge</Badge>
                <h2 className="text-lg font-bold mb-2">Level: Pod Leader</h2>
                <p className="text-base leading-relaxed text-left">
                  Eligible to open Independent office in location of choiProfit
                  share
                </p>
              </div>

              <div className="px-6 py-2 rounded-lg">
                <img src={Blog.src} alt="blog" className="w-full mb-2" />
                <Badge className="bg-[#090F4A] text-white mb-2">Badge</Badge>
                <h2 className="text-lg font-bold mb-2">Level: Pod Leader</h2>
                <p className="text-base leading-relaxed text-left">
                  Eligible to open Independent office in location of choiProfit
                  share
                </p>
              </div>

              <div className="px-6 py-2 rounded-lg">
                <img src={Blog.src} alt="blog" className="w-full mb-2" />
                <Badge className="bg-[#090F4A] text-white mb-2">Badge</Badge>
                <h2 className="text-lg font-bold mb-2">Level: Pod Leader</h2>
                <p className="text-base leading-relaxed text-left">
                  Eligible to open Independent office in location of choiProfit
                  share
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
