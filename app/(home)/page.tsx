import NextImage from 'next/image';

const Page = () => {
  return (
    <div className=' flex justify-center items-center'>
      <NextImage
        src='/assets/hanlab_main.png'
        alt='Hanlab Main Image'
        fill
        className='object-cover w-dvh h-dvh'
      />
    </div>
  );
};

export default Page;
