/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import {ChevronRight, ChevronLeft } from "lucide-react";

import Article1 from "@/public/assets/insights/Article_1.png";
import Article2 from "@/public/assets/insights/Article_2.png";
import Article3 from "@/public/assets/insights/Article_3.png";
import Article4 from "@/public/assets/insights/Article_4.png";
import Article5 from "@/public/assets/insights/Article_5.png";
import Article6 from "@/public/assets/insights/Article_6.png";
import Article7 from "@/public/assets/insights/Article_7.png";
import Article8 from "@/public/assets/insights/Article_8.png";
import Article9 from "@/public/assets/insights/Article_9.png";
import Article10 from "@/public/assets/insights/Article_10.png";
import Article11 from "@/public/assets/insights/Article_11.png";


export default function TextPage() {
  return (
    <>
      <div className="px-10 md:px-20 my-16">
        <div className="mx-auto max-w-8xl my-5">
          <div className="flex flex-col mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 ">
              {Card.map((card, index) => (
                <div
                  key={index}
                  className="md:px-6 py-6 my-2 rounded-lg hover:md:shadow-2xl"
                >
                  <img src={card.image} alt="blog" className="w-full mb-2" />
                  <p className="text-sm my-2">Case Study</p>
                  <Link href={card.link} className="">
                    <h2 className=" flex items-center text-2xl font-bold mb-2 hover:text-[#2251FF] hover:underline">
                      {card.title}
                      <span>
                        <ChevronRight className="w-6  text-[#2251FF]" />
                      </span>
                    </h2>
                  </Link>
                  <p className="text-base leading-relaxed text-left line-clamp-4">
                    {card.description}
                  </p>
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
    title: "Workday 7 Month close",
    description:
      "Business Challenge: The client faced significant challenges in meeting it's Month Close deadline with the process extending beyond the group deadline of Workday 7.",
    image: Article2.src,
    link: "insights/articles/workday-7-month-close",
  },
  {
    title: "Big 4 Audit readiness",
    description:
      "Business Challenge: A Fortune 10 company was unable to meet it's internal / external reporting / audit timelines due to a backlog of almost 5 months in accounting due to high mployee turnover and an ERP implementation.",
    image: Article3.src,
    link: "insights/articles/big-4-audit-readiness",
  },
  {
    title: "Over 40+ Global VAT I GST audits",
    description:
      "Business Challenge: Globally, passing GST I VAT audits for finance teams poses significant challenges due to the complexity of data requirements.",
    image: Article4.src,
    link: "insights/articles/over-40-global-vat",
  },
  {
    title: "5% Margin Improvement",
    description:
      "Business Challenge: A leading contact center with headcount in excess of 2,000 and operations in 3 cities was facing intense pricing pressure.",
    image: Article5.src,
    link: "insights/articles/5-margin-improvement",
  },
  {
    title: "15+ DSO improvement",
    description:
      "Business Challenge: With rapid expansion of the business from one city operations to 3 cities and 4 partners to 8 and ever expanding, there was no view of profitability per partner, location, line of business, etc. Further at the end of the month significant partner effort on the billing & collection process. Leading to high DSO & Revenue leakage.",
    image: Article6.src,
    link: "https://www.google.com",
  },
  {
    title: "10% Equity Dilution Avoidance",
    description:
      "Business Challenge: The client with an asset heavy business faced continued dilution due to perpetual raising capital raise.",
    image: Article7.src,
    link: "https://www.google.com",
  },
  {
    title: "US listing readiness",
    description:
      "Business Challenge: In preparation for listing readiness on a US Stock Exchange, client wanted to Implement a SOX complaint book close process for all it's group entities.",
    image: Article8.src,
    link: "https://www.google.com",
  },
  {
    title: "Post Merger Integration",
    description:
      "Business Challenge: A large USS Billion plus revenue client had acquired a early stage Ai start up with fit for purpose accounting support. The acquiree needed to be integrated into the parent's financial reporting and policy framework.",
    image: Article9.src,
    link: "https://www.google.com",
  },
  {
    title: "Data Room for Exit Support",
    description:
      "Business Challenge: Our client, a US$ 15 Mn Crowdsourced Advertising Company with operations across 7 countries wanted support in their exit process.",
    image: Article10.src,
    link: "https://www.google.com",
  },
  {
    title: "Listing Support on AIM, LSE",
    description:
      "Business Challenge: Our client, an Ai company with no accounting staff wanted support to prepare for a listing in 12 months.",
    image: Article11.src,
    link: "https://www.google.com",
  },
  
];
