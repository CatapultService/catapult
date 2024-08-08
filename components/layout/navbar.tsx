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
 
//   window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
//   }

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
    <header className={`fixed top-0 flex justify-between h-20 items-center px-12  w-full transition-colors duration-300 z-20 ${isScrolled ? 'bg-[#021836] ' : 'bg-transparent '}`}>
      <div className='text-white'>
        <Link
          href='#'
          className='flex items-center gap-2 text-lg  font-semibold md:text-base'
        >
          {/* <Package2 className='h-6 w-6' /> */}
          <Image src={Logo} alt="Logo"  height={50} /> 

          <span className='sr-only'>Acme Inc</span>
        </Link>
      </div>

      <nav className='hidden text-white flex-col gap-3 text-lg font-medium md:flex md:flex-row md:items-center md:gap-6 md:text-sm lg:gap-14'>
        <Link
          href='#'
          className='transition-colors hover:text-foreground'
        >
          WORK
        </Link>
        <Link
          href='#'
          className='transition-colors hover:text-foreground'
        >
          WHAT WE DO
        </Link>
        <Link
          href='#'
          className='transition-colors hover:text-foreground'
        >
          TEAM
        </Link>
        <Link
          href='#'
          className='transition-colors hover:text-foreground'
        >
          ABOUT
        </Link>
        <Link
          href='#'
          className='transition-colors hover:text-foreground'
        >
          INSIGHTS
        </Link>
        <Link
          href='#'
          className='transition-colors hover:text-foreground'
        >
          LET&apos;S TALK
        </Link>
      </nav>

      <Sheet>
        <SheetTrigger asChild>
          <Button  size='icon' className={`shrink-0 md:hidden  ${isScrolled ? 'bg-white text-black hover:bg-[#021836] hover:border-white border-2 hover:shadow-white/50 hover:text-white' : 'bg-[#021836] text-white hover:bg-white hover:text-black'} `}>
            <Menu className='h-5 w-5' />
            <span className='sr-only'>Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='topLeft'  className='w-full max-w-[10rem] text-white border-0 shadow-lg shadow-white/50 rounded-md bg-[#021836]'>
          <nav className='grid gap-6 text-lg font-medium'>
            <Link
              href='#'
              className='transition-colors hover:text-foreground'
            >
              WORK
            </Link>
            <Link
              href='#'
              className='transition-colors hover:text-foreground'
            >
              WHAT WE DO
            </Link>
            <Link
              href='#'
              className='transition-colors hover:text-foreground'
            >
              TEAM
            </Link>
            <Link
              href='#'
              className='transition-colors hover:text-foreground'
            >
              ABOUT
            </Link>
            <Link
              href='#'
              className='transition-colors hover:text-foreground'
            >
              INSIGHTS
            </Link>
            <Link
              href='#'
              className='transition-colors hover:text-foreground'
            >
              LET&apos;S TALK
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  )
}

export default Navbar