import NextImage from 'next/image';

type SubHeaderProps = { title: string };

const SubHeader = ({ title }: SubHeaderProps) => {
  return (
    <div className='relative flex justify-start pt-[6rem] h-[25rem] pl-[4rem] lg:pl-[9rem] lg:pt-[7.6rem] items-center w-full lg:h-[35rem]'>
      <NextImage
        src='/assets/hanlab_main.png'
        alt='Hanlab Sub Image'
        fill
        className='object-cover w-full h-full'
      />
      <h1 className='text-main-white text-[3rem] lg:text-[5.4rem] z-10 '>
        | {title}
      </h1>
    </div>
  );
};

export default SubHeader;
