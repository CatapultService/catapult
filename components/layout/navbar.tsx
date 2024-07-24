'use client'
import Link from 'next/link'
import { Menu, Package2, Search } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Image from 'next/image'
import Logo from '@/public/assets/logo.png'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
    <header className={`fixed top-0 flex justify-between h-28 items-center px-12  w-full transition-colors duration-300 z-20 ${isScrolled ? 'bg-[#021836] ' : 'bg-transparent '}`}>
      <div className='text-white'>
        <Link
          href='#'
          className='flex items-center gap-2 text-lg  font-semibold md:text-base'
        >
          {/* <Package2 className='h-6 w-6' /> */}
          <Image src={Logo} alt="Logo"  height={40} /> {/* Add the logo image */}

          <span className='sr-only'>Acme Inc</span>
        </Link>
      </div>

      <nav className='hidden text-white flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-10 md:text-sm lg:gap-20'>
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
          <Button variant='outline' size='icon' className='shrink-0 md:hidden'>
            <Menu className='h-5 w-5' />
            <span className='sr-only'>Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='right'>
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