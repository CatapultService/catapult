import React from "react";

export default function Impact() {
  return (
    <div className="flex bg-white px-10 md:px-20 mb-10 text-[#202020]">
        <div className="mx-auto max-w-6xl">
    {/* <div className=" bg-white px-10 md:px-20 mt-6 text-black items-center"> */}
      {/* <div className="mx-auto min-w-6xl mb-16  md:px-14"> */}
        <div className="flex flex-col mt-16 mb-2">
          <p className="text-sm text-left sm:text-lg md:text-2xl lg:text-3xl font-bold text-[#090E4A] ">
            IMPACT STORIES
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 mb-8 md:gap-16 lg:gap-32 xl:gap-60 ">
          <div className="">
            <div className="flex flex-col items-center my-6">
              <p className="text-4xl sm:text-3xl lg:text-5xl font-bold text-[#090E4A]">
                15 - 30%
              </p>
              <p className="py-2 text-xs lg:text-sm font-normal">Marketing-spend Reduction</p>
            </div>
            <div>
                <p className="text-lg font-bold pb-2">Title</p>
                <p className="text-sm">Summary with hyper Link</p>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col items-center my-6">
              <p className="text-4xl sm:text-3xl lg:text-5xl font-bold text-[#090E4A]">
              &gt;30%
              </p>
              <p className="py-2 text-xs lg:text-sm font-normal">Revenue-uplift</p>
            </div>
            <div>
                <p className="text-lg font-bold pb-2">Title</p>
                <p className="text-sm">Summary with hyper Link</p>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col items-center my-6">
              <p className="text-4xl sm:text-3xl lg:text-5xl font-bold text-[#090E4A]">
              &gt;30%
              </p>
              <p className="py-2 text-xs lg:text-sm font-normal">Revenue-uplift</p>
            </div>
            <div>
                <p className="text-lg font-bold pb-2">Title</p>
                <p className="text-sm">Summary with hyper Link</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
