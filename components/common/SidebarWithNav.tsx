'use client';

import { Sidebar } from '@/components';
import { useSidebar } from '@/contexts/SidebarContext';
import Link from 'next/link';

const SidebarWithNav = () => {
  const { closeSidebar } = useSidebar();
  return (
    <Sidebar>
      <nav className='flex flex-col gap-4 p-4'>
        <Link
          href='/'
          className='text-black text-[1.6rem] hover:underline'
          onClick={closeSidebar}
        >
          home
        </Link>
        <Link
          href='/research'
          className='text-black text-[1.6rem] hover:underline'
          onClick={closeSidebar}
        >
          research
        </Link>
        <Link
          href='/publications'
          className='text-black text-[1.6rem] hover:underline'
          onClick={closeSidebar}
        >
          publications
        </Link>
        <Link
          href='/members'
          className='text-black text-[1.6rem] hover:underline'
          onClick={closeSidebar}
        >
          members
        </Link>
        <Link
          href='/gallery'
          className='text-black text-[1.6rem] hover:underline'
          onClick={closeSidebar}
        >
          gallery
        </Link>
        <Link
          href='/contact'
          className='text-black text-[1.6rem] hover:underline'
          onClick={closeSidebar}
        >
          contact
        </Link>
      </nav>
    </Sidebar>
  );
};

export default SidebarWithNav;
