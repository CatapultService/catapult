"use client";
import Food from "@/public/assets/aboutUs/food.png";
import People from "@/public/assets/aboutUs/people.png";
import Work from "@/public/assets/aboutUs/work.png";
import Image from "next/image";
import { CircularProgress } from "@nextui-org/react";
import { PiQuotesFill } from "react-icons/pi";

export default function TextPage() {
  return (
    <>
      <div className=" bg-white px-10 md:px-20 text-black items-center">
        <div className="mx-auto max-w-8xl my-5">
          <p className="mt-6 mb-8 text-base leading-relaxed text-left">
          Our ethos is to nurture leaders who have missed out on the Ovarian Lottery by leveraging our  proprietary operating 
          model powered by AI to help deliver superior client outcomes and build lasting relationships.
          </p>

          <div className="flex flex-col mb-8">
            <p className="text-2xl sm:text-lg md:text-2xl lg:text-3xl mb-6 font-bold text-[#090E4A] text-left">
              Our Aspiration - Sustainable Value Creation through Inclusivity
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-6">
              <div className="">
                <div className="border-4 border-[#FFE600] mx-10 px-10 py-5">
                  <p className=" text-base leading-relaxed  text-left">
                    <PiQuotesFill className="inline text-[#FFE600] text-lg rotate-180 transform -translate-y-2" />{" "}
                    We believe that every individual, regardless of their
                    circumstances, deserves the opportunity to reach their full
                    potential. This is why we are committed to hiring talent
                    that may have faced challenges due to factors beyond their
                    control, often referred to as &quot;Ovarian Lottery.&quot;
                  </p>
                  <p className=" text-base leading-relaxed text-left">
                    Consequently, our focus is more on identifying talented
                    individuals who possess skills & drive to succeed, rather
                    than certifications. We offer comprehensive training
                    programs, mentorship, and career development opportunities
                    to equip our employees with the tools they need to thrive.
                    <PiQuotesFill className="inline text-[#FFE600] text-lg transform -translate-y-2" />
                  </p>

                  <div>
                    <p className="text-2xl leading-relaxed text-left text-[#FFE600]">
                      Anand Shetty
                    </p>
                    <p className="text-base leading-relaxed text-left">
                      Co-Founder & COO
                    </p>
                  </div>
                </div>
                {/* <p className=" mb-8 text-base leading-relaxed text-left">
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
              </p> */}
              </div>

              <div className="flex justify-center items-center border m-10">
                <p className="text-2xl">VIDEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-6 px-10 md:px-20 py-3 bg-[#FFE600]">
        <p className="text-base leading-relaxed text-left">
          <span className="font-semibold">
            &quot;Lend a hand Programme&quot;
          </span>{" "}
          focuses on individuals who have potential but are marginalised due to
          circumstances that could be on account of socioeconomic factors,
          learning disabilities, health contraints, family issues, etc.
        </p>
      </div>

      <div className="mb-6 px-10 md:px-20 py-3 bg-[#808080] text-white">
        <p className="text-base leading-relaxed text-left">
          <span className="font-semibold">
            &quot;Lend an ear Programme&quot;
          </span>{" "}
          focuses on women candidates who are left out due to their family
          committmets towards the children, ageing parents or relocation due to
          family dependancy.
        </p>
      </div>

      <div className=" bg-white px-10 md:px-20 text-black items-center">
        <div className="mx-auto max-w-8xl my-5">
          <div className="flex flex-col mb-8">
            <p className="mt-3 mb-6 text-2xl sm:text-lg md:text-2xl lg:text-3xl  font-bold text-[#090E4A] text-left">
              Our People Stories
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-4">
              <div className="">
                <p className=" text-base leading-relaxed  text-justify">
                  <PiQuotesFill className="inline text-[#FFE600] text-lg rotate-180 transform -translate-y-2" />{" "}
                  I used to work in a grocery store. Anand sir&apos;s wife, who
                  used to come to my shop, felt that I have the talent to do
                  more. I got an opportunity and patient training in Catapultand
                  now | manage a US$ 30 Mn credit control for a Europeanclient.
                  <PiQuotesFill className="inline text-[#FFE600] text-lg transform -translate-y-2" />
                </p>
                <p className="text-xl pt-2 leading-relaxed text-left text-[#FFE600]">
                  Chetan - Executive
                </p>
              </div>

              <div className="">
                <p className=" text-base leading-relaxed  text-justify">
                  <PiQuotesFill className="inline text-[#FFE600] text-lg rotate-180 transform -translate-y-2" />{" "}
                  Despite being qualified I was not able to get a good
                  accounting job due to my poor English. I heard about
                  Catapultand reached out and they gave me an opportunity. I now
                  manage book close for one ot the clients and I am very happy.
                  <PiQuotesFill className="inline text-[#FFE600] text-lg transform -translate-y-2" />
                </p>
                <p className="text-xl pt-2 leading-relaxed text-left text-[#FFE600]">
                  Chetan - Executive
                </p>
              </div>

              <div className="">
                <p className=" text-base leading-relaxed  text-justify">
                  <PiQuotesFill className="inline text-[#FFE600] text-lg rotate-180 transform -translate-y-2" />{" "}
                  After a 4 years break due to my marriage and kids, I had to
                  take a break. When I wanted to get a job again I was not able
                  to get a job due to the break. I also needed flexible work
                  timing so I can attend to my kids during the day. Catapult not
                  only gave me an opportunity but also agreed to giving me a
                  flexible work timing.
                  <PiQuotesFill className="inline text-[#FFE600] text-lg transform -translate-y-2" />
                </p>
                <p className="text-xl pt-2 leading-relaxed text-left text-[#FFE600]">
                  Roopa - Executive
                </p>
              </div>

              <div className="">
                <p className=" text-base leading-relaxed  text-justify">
                  <PiQuotesFill className="inline text-[#FFE600] text-lg rotate-180 transform -translate-y-2" />{" "}
                  My mother lives alone in Hubli and she was not keeping well.
                  Being away from her made me unhappy and I was not enjoying my
                  work. Instead of putting pressure on me Catapult gave me an
                  opportunity to relocate to Hubli and work from there, even
                  though Catapult does not have an office there. I am very happy
                  now and enjoy my work.
                  <PiQuotesFill className="inline text-[#FFE600] text-lg transform -translate-y-2" />
                </p>
                <p className="text-xl pt-2 leading-relaxed text-left text-[#FFE600]">
                  Vinita - Executive
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col mb-8">
            <p className="text-2xl mt-3 sm:text-lg md:text-2xl lg:text-3xl mb-6 font-bold text-[#090E4A] text-left">
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
                    value: "text-3xl font-semibold text-[#FFE600]",
                  }}
                  value={25}
                  strokeWidth={4}
                  valueLabel="PH1"
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
                    value: "text-3xl font-semibold text-[#FFE600]",
                  }}
                  value={50}
                  strokeWidth={4}
                  valueLabel="PH2"
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
                    value: "text-3xl font-semibold text-[#FFE600]",
                  }}
                  value={75}
                  strokeWidth={4}
                  showValueLabel={true}
                  valueLabel="PH3"
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
                    value: "text-3xl font-semibold text-[#FFE600]",
                  }}
                  value={100}
                  strokeWidth={4}
                  showValueLabel={true}
                  valueLabel="PH4"
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

          <div>
            <div className="flex flex-col md:flex-row mb-8 items-center">
              <p className="w-full md:w-3/12 text-2xl sm:text-lg md:text-2xl lg:text-3xl font-bold text-[#090E4A] text-left">
                Our Values
              </p>
              <p className="w-full md:w-9/12 text-base leading-relaxed text-left">
                ...
              </p>
            </div>

            <div className="flex flex-col md:flex-row mb-8 items-center">
              <p className="w-full md:w-3/12 text-base sm:text-lg md:text-xl  font-bold text-[#090E4A] text-left">
                On time & Accuracy
              </p>
              <p className="w-full md:w-9/12 text-base leading-relaxed text-left">
                Strong focus on automation & standardisation through Daily Team
                Huddles, Templates, Review checklists & Calendars.
              </p>
            </div>

            <div className="flex flex-col md:flex-row mb-8 items-center">
              <p className="w-full md:w-3/12 text-base sm:text-lg md:text-xl  font-bold text-[#090E4A] text-left">
                Extra Mile
              </p>
              <p className="w-full md:w-9/12 text-base leading-relaxed text-left">
                Strive to provide comprehensive & integrated solution that
                exceed client expectations.
              </p>
            </div>

            <div className="flex flex-col md:flex-row mb-8 items-center">
              <p className="w-full md:w-3/12 text-base sm:text-lg md:text-xl  font-bold text-[#090E4A] text-left">
                Learning Organisation
              </p>
              <p className="w-full md:w-9/12 text-base leading-relaxed text-left">
                Continuous learning programmes based on developments & client
                feedback.
              </p>
            </div>

            <div className="flex flex-col md:flex-row mb-8 items-start">
              <p className="w-full md:w-3/12 text-base sm:text-lg md:text-xl  font-bold text-[#090E4A] text-left">
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
      </div>
    </>
  );
}
