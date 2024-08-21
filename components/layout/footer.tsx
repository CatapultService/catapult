import React from 'react';
import Link from 'next/link';
import Logo from "@/public/assets/black_logo.png";
import Image from 'next/image';
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function footer() {
  return (
    <div className="w-full px-10 md:px-20 bg-white border-t border-black">
    <div className=" flex flex-row justify-center items-center mx-auto max-w-6xl">
      <p className="ml-0 text-center font-roobertProMedium text-sm text-black my-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg  font-semibold md:text-base"
        >
          {/* <Package2 className='h-6 w-6' /> */}
          <Image src={Logo} alt="Logo" height={50} />

          <span className="sr-only">Catapult</span>
        </Link>
      </p>
      <div className="sm:ml-auto flex flex-row items-center gap-6 ml-0 text-center font-roobertProMedium text-sm my-6">
        <Link href="#" className="hover:text-yellow-500">
          Privacy policy
        </Link>
        <Link href="#" className="hover:text-yellow-500">
          Terms and Conditions
        </Link>
        <Link href="#" className="hover:text-yellow-500">
          <FaSquareXTwitter className='w-6 h-6' />
        </Link>
        <Link href="#" className="hover:text-yellow-500">
          <FaLinkedin className='w-6 h-6'/>
        </Link>
      </div>
    </div>
  </div>
  );
}
