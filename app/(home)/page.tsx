import { ImageCarousel } from '@/components';

const Page = () => {
  return (
    <div className=' flex justify-center items-center'>
      <ImageCarousel>
        <div className='absolute hidden lg:block top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[530px] bg-gradient-to-r from-black/60 to-zinc-300/0 rounded-bl-[75px]' />
      </ImageCarousel>
    </div>
  );
};

export default Page;
