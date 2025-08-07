import NextImage from 'next/image';

type SubHeaderProps = { title: string };

const SubHeader = ({ title }: SubHeaderProps) => {
  return (
    <div className='relative flex h-[25rem] w-full items-center justify-start pt-[6rem] pl-[4rem] lg:h-[35rem] lg:pt-[7.6rem] lg:pl-[9rem]'>
      <NextImage
        src='/assets/hanlab_main.png'
        alt='Hanlab Sub Image'
        fill
        className='h-full w-full object-cover'
      />
      <h1 className='text-main-white z-10 text-[3rem] lg:text-[5.4rem]'>
        | {title}
      </h1>
    </div>
  );
};

export default SubHeader;
