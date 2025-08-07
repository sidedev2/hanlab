'use client';

import { cn } from '@/util/cn';
import NextImage from 'next/image';
import { useRouter } from 'next/navigation';

type ResearchButtonProps = {
  className?: string;
};

const ResearchButton = ({ className }: ResearchButtonProps) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push('/research')}
      className={cn(
        `text-blue-2fe border-main-white flex h-fit w-fit items-center rounded-full border-[0.225rem] bg-[rgb(0,0,0,0.2)] py-[1.3rem] font-medium`,
        'gap-[1rem] px-[1.5rem] text-[2rem] leading-[2.2rem]',
        'lg:gap-[1.5rem] lg:px-[2rem] lg:text-[2.4rem] lg:leading-[2.8rem]',
        className
      )}
    >
      Our Research
      <NextImage
        src='/assets/move.svg'
        alt='Arrow Right'
        width={22}
        height={22}
        className='h-[1.8rem] w-[1.8rem] lg:h-[2.2rem] lg:w-[2.2rem]'
      />
    </button>
  );
};

export default ResearchButton;
