import { ImageCarousel } from '@/components';
import ResearchButton from '@/components/home/ResearchButton';
import { cn } from '@/util/cn';

const Page = () => {
  return (
    <div className='flex items-center justify-center'>
      <ImageCarousel>
        <div
          className={cn(
            'absolute z-10 flex flex-col bg-gradient-to-r from-black/60 to-zinc-300/0 font-bold',
            'top-[13rem] left-[3rem] h-fit w-fit rounded-bl-[4rem] p-[3rem] text-[4rem] leading-[5rem]',
            'lg:top-1/2 lg:left-1/3 lg:h-[530px] lg:w-[700px] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:rounded-bl-[75px] lg:pt-[6rem] lg:pl-[6rem] lg:text-[9rem] lg:leading-[10rem]'
          )}
        >
          <span className='text-main-white'>Welcome to</span>
          <span className='text-blue-2fe'>Han Lab</span>
          <span className='text-main-white text-[2.4rem] font-light lg:text-[3.6rem]'>
            Lab of Urology, YonSei Univ
          </span>
          <ResearchButton className='mt-[5rem]' />
        </div>
      </ImageCarousel>
    </div>
  );
};

export default Page;
