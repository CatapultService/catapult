"use client";
import Food from "@/public/assets/aboutUs/food.png";
import People from "@/public/assets/aboutUs/people.png";
import Work from "@/public/assets/aboutUs/work.png";
import Image from "next/image";
import { CircularProgress } from "@nextui-org/react";

export default function TextPage() {
  return (
    <>
      <div className=" bg-white px-10 md:px-20 text-black flex items-center">
        <div className="mx-auto max-w-8xl my-5">
          <p className="mt-6 mb-8 text-base leading-relaxed text-left">
            Catapult is a &quot;Social Enterprise Platform&quot; that is
            committed to both sides of the equation. We want to build lasting
            customer relationships by driving change & creating value. Equally
            we are committed to nurtuting talent in an inclusive way that
            creates a sustainable growth model.
          </p>

          <div className="flex flex-col mb-8">
            <p className="text-sm sm:text-lg md:text-2xl lg:text-3xl mb-6 font-bold text-[#090E4A] text-left">
              Our Aspiration - Sustainable Value Creation through Inclusivity
            </p>
            <p className=" text-base leading-relaxed  text-left">
              We believe that every individual, regardless of their
              circumstances, deserves the opportunity to reach their full
              potential. This is why we are committed to hiring talent that may
              have faced challenges due to factors beyond their control, often
              referred to as &quot;Ovarian Lottery.&quot;
            </p>
            <p className=" my-8 text-base leading-relaxed text-left">
              Consequently, our focus is more on identifying talented
              individuals who possess skills & drive to succeed, rather than
              certifications. We offer comprehensive training programs,
              mentorship, and career development opportunities to equip our
              employees with the tools they need to thrive.
            </p>
            <p className=" mb-8 text-base leading-relaxed text-left">
              By providing employment opportunities in their hometowns, we aim
              to break down geographical barriers and empower our talent to
              contribute to their local communities. Our goal is to create a
              supportive and inclusive work environment where our talent can
              flourish professionally while making a positive impact on their
              families & communities.
            </p>
            <p className="text-base leading-relaxed text-left">
              Through our commitment to diversity and equality, we strive to
              build a better future for all.
            </p>
          </div>

          <div className="flex flex-col mb-8">
            <p className="text-sm mt-3 sm:text-lg md:text-2xl lg:text-3xl mb-6 font-bold text-[#090E4A] text-left">
              Our Unique Talent Management Model
            </p>
            <p className=" text-base leading-relaxed  text-left">
              A hub and spoke model , with flexibility of pods being located in
              Tier 2 - 3 towns and are led by talent internally developed.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
              <div className=" px-2 py-2 rounded-lg">
                <CircularProgress
                  classNames={{
                    svg: "w-36 h-36 drop-shadow-md",
                    indicator: "stroke-[#FFE600]",
                    track: "stroke-[#E5E5E5]",
                    value: "text-3xl font-semibold text-white",
                  }}
                  value={25}
                  strokeWidth={4}
                  showValueLabel={true}
                />
                <h2 className="text-xl font-bold mb-2 text-[#090E4A]">
                  Hiring Criteria
                </h2>
                <ul className="text-gray-700 list-square marker:text-[#FFF600] ml-4 text-base">
                  <li>Tier 2 - 3 Cities</li>
                  <li>Test for drive</li>
                  <li>Test for Service Orientation</li>
                  <li>Test for Intelligence</li>
                </ul>
              </div>

              <div className=" px-2 py-2 rounded-lg">
                <CircularProgress
                  classNames={{
                    svg: "w-36 h-36 drop-shadow-md",
                    indicator: "stroke-[#FFE600]",
                    track: "stroke-[#E5E5E5]",
                    value: "text-3xl font-semibold text-white",
                  }}
                  value={50}
                  strokeWidth={4}
                  showValueLabel={true}
                />
                <h2 className="text-xl font-bold mb-2 text-[#090E4A]">
                  Level: Process Executive & Delivery Manager
                </h2>
                <p className="font-bold text-gray-700">
                  Internal Certifications:
                </p>

                <ul className="text-gray-700 list-square marker:text-[#FFF600] ml-4 text-base">
                  <li>Process knowledge - Starter</li>
                  <li>Governance Frameworks - Starter</li>
                  <li>Client Communication Skills - Starter</li>
                </ul>
              </div>

              <div className=" px-2 py-2 rounded-lg">
                <CircularProgress
                  classNames={{
                    svg: "w-36 h-36 drop-shadow-md",
                    indicator: "stroke-[#FFE600]",
                    track: "stroke-[#E5E5E5]",
                    value: "text-3xl font-semibold text-white",
                  }}
                  value={75}
                  strokeWidth={4}
                  showValueLabel={true}
                />
                <h2 className="text-xl font-bold mb-2 text-[#090E4A]">
                  Level: Account Delivery Manager
                </h2>
                <p className="font-bold text-gray-700 ">
                  Internal Certifications:
                </p>

                <ul className="text-gray-700 list-square marker:text-[#FFF600] ml-4 text-base">
                  <li>Process knowledge - Advanced</li>
                  <li>Governance Frameworks - Advanced</li>
                  <li>Client Communication Skills - Advanced</li>
                </ul>
              </div>

              <div className=" px-2 py-2 rounded-lg">
                <CircularProgress
                  classNames={{
                    svg: "w-36 h-36 drop-shadow-md",
                    indicator: "stroke-[#FFE600]",
                    track: "stroke-[#E5E5E5]",
                    value: "text-3xl font-semibold text-white",
                  }}
                  value={100}
                  strokeWidth={4}
                  showValueLabel={true}
                />
                <h2 className="text-xl font-bold mb-2 text-[#090E4A]">
                  Level: Pod Leader
                </h2>

                <p className="font-bold text-gray-700">
                  Criterea: Min 2 Yrs in Account Delivery
                </p>
                <p className="font-bold text-gray-700">Added Benefits:</p>

                <ul className="text-gray-700 list-square marker:text-[#FFF600] ml-4 text-base">
                  <li>
                    Eligible to open Independent office in location of choice
                  </li>
                  <li>Profit share</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row mb-8 items-center">
            <p className="w-full md:w-3/12 text-sm sm:text-lg md:text-2xl  font-bold text-[#090E4A] text-left">
              Our Values
            </p>
            <p className="w-full md:w-9/12 text-base leading-relaxed text-left">
              ...
            </p>
          </div>

          <div className="flex flex-col md:flex-row mb-8 items-center">
            <p className="w-full md:w-3/12 text-sm sm:text-lg md:text-2xl  font-bold text-[#090E4A] text-left">
              On time & Accuracy
            </p>
            <p className="w-full md:w-9/12 text-base leading-relaxed text-left">
              Strong focus on automation & standardisation through Daily Team
              Huddles, Templates, Review checklists & Calendars.
            </p>
          </div>

          <div className="flex flex-col md:flex-row mb-8 items-center">
            <p className="w-full md:w-3/12 text-sm sm:text-lg md:text-2xl  font-bold text-[#090E4A] text-left">
              Extra Mile
            </p>
            <p className="w-full md:w-9/12 text-base leading-relaxed text-left">
              Strive to provide comprehensive & integrated solution that exceed
              client expectations.
            </p>
          </div>

          <div className="flex flex-col md:flex-row mb-8 items-center">
            <p className="w-full md:w-3/12 text-sm sm:text-lg md:text-2xl  font-bold text-[#090E4A] text-left">
              Learning Organisation
            </p>
            <p className="w-full md:w-9/12 text-base leading-relaxed text-left">
              Continuous learning programmes based on developments & client
              feedback.
            </p>
          </div>

          <div className="flex flex-col md:flex-row mb-8 items-start">
            <p className="w-full md:w-3/12 text-sm sm:text-lg md:text-2xl  font-bold text-[#090E4A] text-left">
              Community Building
            </p>
            <div className="flex flex-col gap-4 w-full md:w-9/12">
              <p className="text-base leading-relaxed text-left">
                Building sustainable communities
              </p>
              <div className="flex flex-row gap-4">
                <Image
                  src={Food}
                  alt="food"
                  width={160}
                  height={160}
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 25vw, 20vw"
                  className="h-full"
                />
                <Image
                  src={People}
                  alt="people"
                  width={160}
                  height={160}
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 25vw, 20vw"
                  className="h-full"
                />
                <Image
                  src={Work}
                  alt="work"
                  width={160}
                  height={160}
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 25vw, 20vw"
                  className="h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
