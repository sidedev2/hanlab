import { useSidebar } from '@/contexts/SidebarContext';
import { cn } from '@/util/cn';
import { PropsWithChildren } from 'react';

const Sidebar = ({ children }: PropsWithChildren) => {
  const { isOpen, closeSidebar } = useSidebar();

  return (
    <>
      {/* 배경 오버레이 */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-black/50 transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeSidebar}
      />

      {/* 사이드바 패널 */}
      <div
        className={cn(
          'fixed w-[30%] top-0 right-0 z-50 h-full  bg-blue-530 shadow-xl transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className='flex h-full w-full flex-col p-6'>
          {/* 닫기 버튼 */}
          <div className='flex justify-end mb-4'>
            <button
              onClick={closeSidebar}
              className='p-2 text-main-white hover:text-gray-700'
            >
              ✕
            </button>
          </div>
          {/* 컨텐츠 */}
          <div className='flex-1'>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
