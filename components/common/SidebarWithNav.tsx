'use client';

import { Sidebar } from '@/components';
import { useSidebar } from '@/contexts/SidebarContext';
import Link from 'next/link';

const SidebarWithNav = () => {
  const { closeSidebar } = useSidebar();
  const navs = [
    'home',
    'research',
    'publications',
    'members',
    'gallery',
    'contact',
  ];
  return (
    <Sidebar>
      <nav className='flex flex-col gap-4 p-4'>
        {navs.map((nav) => (
          <Link
            key={nav}
            href={nav === 'home' ? '/' : `/${nav}`}
            className='text-black text-[1.6rem] hover:underline'
            onClick={closeSidebar}
          >
            {nav}
          </Link>
        ))}
      </nav>
    </Sidebar>
  );
};

export default SidebarWithNav;
