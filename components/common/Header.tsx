'use client';

import { useSidebar } from '@/contexts/SidebarContext';
import NextImage from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Header = () => {
  const { openSidebar } = useSidebar();
  const router = useRouter();
  const navs = [
    'home',
    'research',
    'publications',
    'members',
    'gallery',
    'contact',
  ];
  return (
    <>
      <header className='fixed top-0 left-0 z-50 flex h-[6rem] w-full items-center justify-between bg-[rgb(0,0,0,0.3)] px-[2rem] lg:h-[7.6rem] lg:px-[4rem]'>
        <div
          className='flex cursor-pointer items-center gap-[2rem]'
          onClick={() => router.push('/')}
        >
          <NextImage
            src='/assets/logo-big.svg'
            alt='Hanlab Logo'
            width={40}
            height={40}
            className='hidden h-[4rem] w-[4rem] object-contain lg:block'
          />
          <NextImage
            src='/assets/logo-small.svg'
            alt='Hanlab Logo'
            width={30}
            height={30}
            className='block h-[3rem] w-[3rem] object-contain lg:hidden'
          />
          <div className='h-[3rem] w-[0.075rem] bg-white lg:h-[4rem]' />
          <span className='flex flex-col items-center justify-center text-center text-[1.8rem] leading-[1.8rem] text-white lg:text-[2.4rem] lg:leading-[2.1rem]'>
            <span className='tracking-[0.03rem] lg:tracking-[0.05rem]'>
              Han
            </span>
            <span className='tracking-[0.06rem] lg:tracking-[0.1rem]'>Lab</span>
          </span>
        </div>
        <nav className='hidden items-center gap-[2rem] lg:flex'>
          {navs.map((nav) => (
            <Link
              key={nav}
              href={nav === 'home' ? '/' : `/${nav}`}
              className='text-[1.6rem] text-white hover:underline'
            >
              {nav}
            </Link>
          ))}

          <NextImage
            src='/assets/search.svg'
            alt='Search Icon'
            width={30}
            height={30}
            className='ml-[1rem] h-[3rem] w-[3rem] object-contain hover:cursor-pointer'
          />
        </nav>
        <button
          onClick={openSidebar}
          className='ml-auto flex items-center gap-[2rem] lg:hidden'
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
