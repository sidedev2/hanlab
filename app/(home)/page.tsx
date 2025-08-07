import { ImageCarousel } from '@/components';

const Page = () => {
  return (
    <div className='flex items-center justify-center'>
      <ImageCarousel>
        <div className='absolute top-1/2 left-1/3 hidden h-[530px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-bl-[75px] bg-gradient-to-r from-black/60 to-zinc-300/0 text-[9rem] font-bold lg:block'>
          <span>Welcome to</span>
          <span>Han Lab</span>
        </div>
      </ImageCarousel>
    </div>
  );
};

export default Page;
