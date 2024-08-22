/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import img1 from "@/public/assets/row_1.png";
import img2 from "@/public/assets/row_2.png";
import img3 from "@/public/assets/row_3.png";
import Logo from "@/public/assets/logo.png";

export default function services() {
  return (
    <>
      <div className="flex bg-white px-10 md:px-20 text-[#202020]">
        <div className="mx-auto max-w-6xl ">
          <p className="mb-6 text-left leading-relaxed text-xs sm:text-sm md:text-base   text-[#202020]">
            A future & battle ready Finance Organisation needs a new operating
            model, with not only new Finance Talent Capabilities, but a digital
            transformation of how data is collected, recorded, validated,
            reported. At Catapult through a data & AI centric managed services
            model, we help our clients achieve Enterprise Performance Excellence
            while they can continue to focus on Revenue growth & business
            outcomes.
          </p>

          <p className="mb-6 text-left leading-relaxed text-xs sm:text-sm md:text-base   text-[#202020]">
            To know how we can partner, please do explore Our Services,
            Technology & Team Capabilities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 mb-8 gap-6 ">
            <div className="relative my-6">
              <img
                src={img1.src}
                alt="Our Services"
                className="mb-4 object-cover h-full w-full"
                style={{ filter: "brightness(70%)" }}
              />
              <p className="font-bold absolute inset-0 flex items-center justify-center sm:text-5xl md:text-2xl lg:text-4xl text-[#FFE600]">
                Our Services
              </p>
            </div>
            <div className="relative my-6">
              <img
                src={img2.src}
                alt="Technology"
                className="mb-4 object-cover h-full w-full"
                style={{ filter: "brightness(70%)" }}
              />
              <p className="font-bold absolute inset-0 flex items-center justify-center sm:text-5xl md:text-2xl lg:text-4xl text-[#FFE600]">
                Technology
              </p>
            </div>
            <div className="relative my-6">
              <img
                src={img3.src}
                alt="Team"
                className="mb-4 object-cover h-full w-full"
                style={{ filter: "brightness(70%)" }}
              />
              <p className="font-bold absolute inset-0 flex items-center justify-center sm:text-5xl md:text-2xl lg:text-4xl text-[#FFE600]">
                Team
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-10 md:px-20 bg-[#090E4A]">
        <div className=" flex flex-row justify-center items-center mx-auto max-w-6xl">
          <p className="ml-0 text-center font-roobertProMedium text-sm text-white my-6">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg  font-semibold md:text-base"
            >
              {/* <Package2 className='h-6 w-6' /> */}
              <Image src={Logo} alt="Logo" height={50} />

              <span className="sr-only">Catapult</span>
            </Link>
          </p>
          <div className="sm:ml-auto ml-0 text-center font-roobertProMedium text-sm my-6">
            <Link href="#" className="mx-4 text-white hover:text-[#00C062]">
              Privacy policy
            </Link>
            <Link href="#" className="ml-4 text-white hover:text-[#00C062]">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
