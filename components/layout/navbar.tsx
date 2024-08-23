'use client'
import Link from 'next/link'
import { Menu, ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Image from 'next/image'
import Logo from '@/public/assets/logo.png'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
 
  // window.onbeforeunload = function () {
  //   window.scrollTo(0, 0);
  // }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 flex justify-between h-20 items-center w-full transition-colors duration-300 z-20  px-12 lg:px-[9rem] ${isScrolled ? 'bg-[#090E4A] ' : 'bg-transparent '}`}>
      <div className='text-white'>
        <Link
          href='#'
          className='flex items-center gap-2 text-lg  font-semibold lg:text-base'
        >
          {/* <Package2 className='h-6 w-6' /> */}
          <Image src={Logo} alt="Logo"  height={50} /> 

          <span className='sr-only'>Catapult</span>
        </Link>
      </div>

      <nav className='hidden h-full text-white flex-col gap-3 text-lg font-medium lg:flex lg:flex-row lg:items-center lg:gap-6 lg:text-sm xl:gap-14'>
        <Link
          href='/'
          className='transition-colors flex items-center  hover:border-b-4 hover:border-yellow-500 h-full '
        >
          Home
        </Link>
        <Link
          href='#'
          className='transition-colors flex items-center  hover:border-b-4 hover:border-yellow-500 h-full  '
        >
          How We Help Clients
        </Link>
        <Link
          href='/catapult-advantage'
          className='transition-colors flex items-center  hover:border-b-4 hover:border-yellow-500 h-full  '
        >
          The Catapult Advantage
        </Link>
        <Link
          href='#'
          className='transition-colors flex items-center  hover:border-b-4 hover:border-yellow-500 h-full  '
        >
          Insights
        </Link>
        <Link
          href='/about-us'
          className='transition-colors flex items-center  hover:border-b-4 hover:border-yellow-500 h-full  '
        >
          About Us
        </Link>
      </nav>

      <Sheet>
        <SheetTrigger asChild>
          <Button  size='icon' className={`shrink-0 lg:hidden  ${isScrolled ? 'bg-white text-black hover:bg-[#021836]   border-2 hover:shadow-white/50 hover:text-white' : 'bg-[#021836] text-white hover:bg-white hover:text-black'} `}>
            <Menu className='h-5 w-5' />
            <span className='sr-only'>Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='topLeft'  className='w-full max-w-[10rem] text-white border-0 shadow-lg shadow-white/50 rounded-md bg-[#021836]'>
          <nav className='grid gap-6 text-lg font-medium'>
            <Link
              href='/'
              className='transition-colors flex items-center  hover:border-b-4 hover:border-yellow-500 h-full  '
            >
              Home
            </Link>
            <Link
              href='#'
              className='transition-colors flex items-center  hover:border-b-4 hover:border-yellow-500 h-full  '
            >
              How We Help Clients
            </Link>
            <Link
              href='/catapult-advantage'
              className='transition-colors flex items-center  hover:border-b-4 hover:border-yellow-500 h-full  '
            >
              The Catapult Advantage
            </Link>
            <Link
              href='#'
              className='transition-colors flex items-center  hover:border-b-4 hover:border-yellow-500 h-full  '
            >
              Insights
            </Link>
            <Link
              href='/about-us'
              className='transition-colors flex items-center  hover:border-b-4 hover:border-yellow-500 h-full  '
            >
              About Us
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  )
}

export default Navbar