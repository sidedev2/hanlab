import {
  AboutCard,
  ImageCarousel,
  ResearchCard,
  ResearchButton,
} from '@/components';
import { aboutData, researchData } from '@/constants/homeData';
import { cn } from '@/util/cn';

const Page = () => {
  return (
    <div className='flex flex-col'>
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
            <span className='text-main-white text-[1.8rem] font-light lg:text-[2.8rem]'>
              연세 비뇨기암 정밀의학 연구실
            </span>
            <ResearchButton className='mt-[5rem]' />
          </div>
        </ImageCarousel>
      </div>

      {/* 연구실 소개 섹션 */}
      <div className='bg-gray-f5f px-15 py-20'>
        <div className='mx-auto max-w-[1400px]'>
          <div className='mb-12'>
            <span className='text-blue-530 text-[3.6rem] font-bold lg:text-[4.8rem]'>
              About Us
            </span>
          </div>
          <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
            {aboutData.map((item, index) => (
              <AboutCard
                key={index}
                label={item.label}
                paragraphs={item.paragraphs}
                variant={item.variant}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 주요 연구 분야 섹션 */}
      <div className='px-15 py-20'>
        <div className='mx-auto max-w-[1400px]'>
          <div className='mb-12'>
            <span className='text-blue-530 text-[3.6rem] font-bold lg:text-[4.8rem]'>
              Research Projects
            </span>
            <p className='text-gray-888 mt-2 text-[1.8rem] font-normal'>
              연구 프로젝트
            </p>
          </div>
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12'>
            {researchData.map((research, index) => (
              <ResearchCard
                key={index}
                title={research.title}
                description={research.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
