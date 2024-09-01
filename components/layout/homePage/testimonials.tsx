/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

import { ChevronRight, ChevronLeft } from "lucide-react";

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

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/updatedCarousel";

export default function Testimonials() {
  return (
    <>
      <div className="flex bg-white px-10 md:px-20 text-[#202020]">
        <div className="max-w-8xl ">
          <div className="flex flex-col mt-6">
            <p className="text-left text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-bold text-[#090E4A] mb-6">
              Client Testimonials
            </p>
          </div>
        </div>
      </div>
      <TeamCarousel />

    </>
  );
}

export function TeamCarousel() {
  return (
    <div
      className="w-full flex flex-col "
      // px-[2rem] md:px-[4rem] xl:px-[8.5rem]
    >
      <Carousel className="mb-10">
        <CarouselContent className="px-10 md:px-20">
          {Card.map((card, index) => (
            <>
              <CarouselItem
                key={index}
                className="sm:ml-5 md:w-full w-80 ml-4 pl-0 basis-1/1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="min-h-[17rem] pr-10 md:px-6 py-6 my-2 rounded-lg hover:md:shadow-2xl bg-[#090E4A] text-[#D9D9D9]">
                  <p className="text-base text-justify leading-relaxed  line-clamp-4 hover:line-clamp-none">
                    {card.description}
                  </p>

                  <div className="mt-4">
                    <h2 className=" flex items-center text-lg font-bold mb-2 text-[#FFE600]">
                      {card.client}
                    </h2>
                    <p className="text-sm leading-relaxed text-left">
                      {card.clientDesc}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            </>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center mt-4  w-full">
          <CarouselPrevious className="mr-4" />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}

const Card = [
  {
    client: "Shibaji – CFO / Jeffrey – Founder & CEO",
    description:
      "Catapult who operated our F&A Glocal Capability Centre, displayed exceptional professionalism during our exit pocess. They supported the sell-side due diligence within stringent timelines, efficiently managed the data room ensuring high-quality data. Their pointed responses, backed by thorough supporting documentation ensured seamless communication with auditors, lawyers, and advisors. As a result, the exit process was executed without any valuation adjustments, reflecting Catapult's commitment to client success.",
    clientDesc:
      "A global creative content platform that connects brands with filmmakers, photographers, and other creatives to produce original video content for Brands.",
  },
  {
    client: "Elizabeth - CFO",
    description:
      "Catapult helped us achieve a WD7 month close process. They implemented a granular close calendar, automated key processes and introduced standardized templates & checklists to streamline the workflow. These enabled us to consistently meet WD7 deadline enhance accuracy and improve team morale by easing last-minute pressure.",
    clientDesc:
      "A premium mobile marketing platform that specializes in delivering high-quality mobile advertising experiences for luxury brands. ",
  },
  {
    client: "Wayne T - CFO",
    description:
      "Our Company needed a centralized accounting system to support global operations. Catapult designed and implemented the solution in three months, managing accounts payable, receivable, payroll, and complex Month close process. They also provided detailed Board Pack with multi-dimensional analysis. The solution reduced costs by 30%, allowed me to focus on strategic tasks, improved process accuracy, and enhanced analytics.",
    clientDesc:
      "A global creative content platform that connects brands with filmmakers, photographers, and other creatives to produce original video content for Brands.",
  },
  {
    client: "Amit R - CFO",
    description:
      "We were faced with a five-month accounting backlog due to high turnover and ERP implementation. Catapult designed and implemented a solution in six months across three entities, clearing backlog, validating balances and streamlining finance operations. They also developed a Month Close Checklist, Calendar and Balance roll forwards. This ensured audit readiness, enhanced data quality for critical processes and resulted in timely audit completion, reduced DSO and plugged revenue leakage.",
    clientDesc: "A Fortune 10 Company ",
  },
  {
    client: "Samirah - CFO",
    description:
      "Over the past five years, Catapult has ensured smooth management of our finance function. They have consistently delivered high-quality bookkeeping, streamlined accounting operations and effective credit and project cost control. Additionally, Catapult assisted in creating budgets and rolling forecasts. The implementation of a Month Close Checklist & Calendar, along with Balance Sheet schedules and roll-forward analysis, has facilitated smooth audit signoffs.",
    clientDesc:
      "A Creative Agency combines creativity, technology, and data to produce engaging content for the audiences across various platforms.",
  },
  {
    client: "Gerald - Founder",
    description:
      "We had to list our company on the AIM, London Stock Exchange and needed a capable team to support the process. We engaged Catapult to translate three years of financial statements to IFRS, conduct market study to estimate TAM, prepare five-year business plan, create valuation benchmarks & support DHRP preparation. Their efforts led to a successful listing on AIM.",
    clientDesc: "AI & NLG Company with operation in 6 countries.",
  },
  {
    client: "Customer Contact Center with over 3,000+ employees",
    description:
      "Catapult implemented an Activity-Based Costing analysis, creating harmonisation of Revenue & Cost metrics. This led to a 5% cost reduction, improved execution by linking incentives to strategy, enhanced capital efficiency due to better capacity utilization.",
    clientDesc: "Jitender J - Founder & CEO",
  },
  {
    client: "Arthur, Head of internal control",
    description:
      "Catapult implemneted a SOX Compliant process. They conducted process walkthroughs, drafted RACM, identified gaps, and implemented remediation. They ensured SOX compliance for 8 entities within 12 months, met quarter close deadlines, and improved month-close quality enhancing overall financial accuracy & compliance.",
    clientDesc:
      "A global leader in providing technology-driven solutions that help brands and agencies optimize their marketing efforts.",
  },
  {
    client: "Sinthiya, CFO",
    description:
      "Catapult was engaged to clean up historical financials, reconcile accounts receivables & manage project cost accruals for one of our entities. Within three months, they designed and implemented a solution, regularizing accounts payable and streamlining the month-close process. Following their success, we extended Catapult's scope to include all of our group entities, deepening our relationship and enhancing our overall financial management and operational efficiency.",
    clientDesc:
      "A global marketing and communications agency that specializes in providing strategic marketing services to brands and businesses",
  },
];
