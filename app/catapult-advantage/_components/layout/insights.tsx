/* eslint-disable @next/next/no-img-element */
import Food from "@/public/assets/aboutUs/food.png";
import People from "@/public/assets/aboutUs/people.png";
import Work from "@/public/assets/aboutUs/work.png";

export default function TextPage() {
  return (
    <>
      <div className=" bg-white px-10 md:px-20 text-black flex items-center">
        <div className="mx-auto max-w-8xl my-5">
          <p className="mt-16 mb-8 text-base leading-relaxed text-left">
            Our Unique Insights as a Service Model for Digital Transformation
            solves for the typical barriers to startng this journey :
          </p>

          {/* <div className="flex flex-col mb-8">
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
          </div> */}

          <div className="flex flex-col mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 ">
              <div className="px-6 py-2 rounded-lg">
                <h2 className="text-xl font-bold mb-2 bg-[#090F4A] text-white py-3 px-2">
                  Budget
                </h2>
                <p className="text-base leading-relaxed text-left pt-2">
                  Digital Transformation can cost millions in Upfront
                  implemntation costs and ongoing license fees. Our unique
                  Insights as a Service model eliminates cost barriers.{" "}
                </p>
              </div>

              <div className=" px-6 py-2 rounded-lg">
                <h2 className="text-xl font-bold mb-2 bg-[#090F4A] text-white py-3 px-2">
                  People
                </h2>
                <p className="text-base leading-relaxed text-left pt-2">
                  Digital Transformations requires client senior management
                  bandwidth for years. Our unique Insights as a Service model
                  eliminates any need for client teams for Project Management.
                </p>
              </div>

              <div className=" px-6 py-2 rounded-lg">
                <h2 className="text-xl font-bold mb-2 bg-[#090F4A] text-white py-3 px-2">
                  Expertise
                </h2>
                <p className="text-base leading-relaxed text-left pt-2">
                  Digital Transformation can requires deep domain expertise as
                  well as technology skills. Our unique Insights as a Service
                  model eliminates any need for clients to possess these skills.
                </p>
              </div>

              <div className=" px-6 py-2 rounded-lg">
                <h2 className="text-xl font-bold mb-2 bg-[#090F4A] text-white py-3 px-2">
                  Data
                </h2>
                <p className="text-base leading-relaxed text-left pt-2">
                  Foundation for Ai readiness is data. Substantial resources &
                  expertise are needed to aggregate enterprise data, As part of
                  our unique Insights as a Service model our teams manage the
                  entire process of building your data layer.
                </p>
              </div>

              <div className=" px-6 py-2 rounded-lg">
                <h2 className="text-xl font-bold mb-2 bg-[#090F4A] text-white py-3 px-2">
                  User Adoption
                </h2>
                <p className="text-base leading-relaxed text-left pt-2">
                  Majority of Digital Transformations fail due to failure of
                  User Adoption. This causes loss of investments & compeitive
                  advantage. Our unique Insights as a Service model integrates
                  Catapult Capability Centre teams trained & incemtivised for
                  smooth implementation.
                </p>
              </div>

              <div className=" px-6 py-2 rounded-lg">
                <h2 className="text-xl font-bold mb-2 bg-[#090F4A] text-white py-3 px-2">
                  Speed
                </h2>
                <p className="text-base leading-relaxed text-left pt-2">
                  Digital Transformation can take years to implement allowing
                  compeitiion and large companies an advantage. Our unique
                  Insights as a Service model eliminates this by bringing
                  pre-built assets, frameworks, algorithim libraries & trained
                  teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
