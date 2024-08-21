import React from 'react';
import Link from 'next/link';
import Logo from "@/public/assets/logo.png";
import Image from 'next/image';

export default function footer() {
  return (
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
  );
}
