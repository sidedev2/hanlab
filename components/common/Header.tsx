'use client';

import { useSidebar } from '@/contexts/SidebarContext';
import NextImage from 'next/image';
import Link from 'next/link';

const Header = () => {
  const { openSidebar } = useSidebar();
  return (
    <>
      <header className='fixed flex items-center justify-between h-[6rem] top-0 left-0 w-full bg-[rgb(0,0,0,0.3)]  px-[2rem] z-50 lg:px-[4rem] lg:h-[7.6rem]'>
        <div className='flex items-center gap-[2rem]'>
          <NextImage
            src='/assets/logo-big.svg'
            alt='Hanlab Logo'
            width={40}
            height={40}
            className='w-[4rem] h-[4rem] object-contain hidden lg:block'
          />
          <NextImage
            src='/assets/logo-small.svg'
            alt='Hanlab Logo'
            width={30}
            height={30}
            className='h-[3rem] w-[3rem] object-contain block lg:hidden'
          />
          <div className='h-[3rem] w-[0.075rem] bg-white lg:h-[4rem]' />
          <span className='flex items-center justify-center flex-col text-white leading-[1.8rem] text-[1.8rem]  text-center lg:text-[2.4rem] lg:leading-[2.1rem]'>
            <span className='tracking-[0.03rem] lg:tracking-[0.05rem]'>
              Han
            </span>
            <span className='tracking-[0.06rem] lg:tracking-[0.1rem]'>Lab</span>
          </span>
        </div>
        <nav className='items-center gap-[2rem] hidden lg:flex'>
          <Link href='/' className='text-white text-[1.6rem] hover:underline'>
            home
          </Link>
          <Link
            href='/research'
            className='text-white text-[1.6rem] hover:underline'
          >
            research
          </Link>
          <Link
            href='/publications'
            className='text-white text-[1.6rem] hover:underline'
          >
            publications
          </Link>
          <Link
            href='/members'
            className='text-white text-[1.6rem] hover:underline'
          >
            members
          </Link>
          <Link
            href='/gallery'
            className='text-white text-[1.6rem] hover:underline'
          >
            gallery
          </Link>
          <Link
            href='/contact'
            className='text-white text-[1.6rem] hover:underline'
          >
            contact
          </Link>
          <NextImage
            src='/assets/search.svg'
            alt='Search Icon'
            width={30}
            height={30}
            className='h-[3rem] w-[3rem] object-contain hover:cursor-pointer ml-[1rem]'
          />
        </nav>
        <button
          onClick={openSidebar}
          className='flex items-center ml-auto gap-[2rem] lg:hidden'
        >
          <NextImage
            src='/assets/menu.svg'
            alt='Menu Icon'
            width={30}
            height={30}
            className='h-[3rem] w-[3rem] object-contain hover:cursor-pointer'
          />
        </button>
      </header>
    </>
  );
};

export default Header;
