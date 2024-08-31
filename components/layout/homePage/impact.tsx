/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { ChevronRight, ChevronLeft } from "lucide-react";

import Article1 from "@/public/assets/insights/Article_1.png";
import Article5 from "@/public/assets/insights/Article_5.png";
import Article11 from "@/public/assets/insights/Article_11.png";

export default function Impact() {
  return (
    <>
      <div className="flex bg-white px-10 md:px-20 mb-10 text-[#202020]">
        <div className="mx-auto max-w-8xl">
          <div className="flex flex-col mt-16 mb-2">
            <p className="text-sm text-left sm:text-lg md:text-2xl lg:text-3xl font-bold text-[#090E4A] ">
              Impact Stories
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 ">
              {Card.map((card, index) => (
                <div
                  key={index}
                  className="md:px-6 py-6 my-2 rounded-lg hover:md:shadow-2xl"
                >
                  <img src={card.image} alt="blog" className="w-full mb-2" />
                  <p className="text-sm my-2">Case Study</p>
                  {/* <Link href={card.link} className=""> */}
                  {/* <h2 className=" flex items-center text-2xl font-bold mb-2 hover:text-[#2251FF] hover:underline"> */}
                  <h2 className=" flex items-center text-2xl font-bold mb-2">
                    {card.title}
                    {/* <span>
                        <ChevronRight className="w-6  text-[#2251FF]" />
                      </span> */}
                  </h2>
                  {/* </Link> */}
                  <p className="text-base leading-relaxed text-left line-clamp-4">
                    {card.description}
                  </p>
                  <Link href="/insights" className="">
                    <p className=" flex items-center text-lg font-bold my-2 hover:text-[#2251FF] hover:underline">
                      More Insights
                      <span>
                        <ChevronRight className="w-6  text-[#2251FF]" />
                      </span>
                    </p>
                  </Link>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

const Card = [
  {
    title: "30% Cost Saving",
    description:
      "Business Challenge: A global advertising and marketing services provider wanted to establish a centralized accounting to support it’s global operations and expansion.",
    image: Article1.src,
    link: "insights/articles/30-cost-saving",
  },
  {
    title: "5% Margin Improvement",
    description:
      "Business Challenge: A leading contact center with headcount in excess of 2,000 and operations in 3 cities was facing intense pricing pressure.",
    image: Article5.src,
    link: "insights/articles/5-margin-improvement",
  },
  {
    title: "Listing Support on AIM, LSE",
    description:
      "Business Challenge: Our client, an Ai company with no accounting staff wanted support to prepare for a listing in 12 months.",
    image: Article11.src,
    link: "https://www.google.com",
  },
];
