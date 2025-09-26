import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-blue-530 fixed bottom-0 left-0 right-0 w-full p-11 flex flex-row mt-10'>
      <div className=' flex flex-col gap-7'>
        <Image
          src='/assets/logo-big.svg'
          alt='Hanlab'
          width={40}
          height={40}
          className='w-[4rem] h-[4rem] object-contain hidden lg:block'
        />
        <div className='flex flex-row gap-9'>
          <Link
            href='/contact'
            className='w-63 py-3 border-[0.05rem] border-gray-CBC text-530 bg-gray-9d9 font-bold text-[1.6rem] rounded-[1rem] text-center'
          >
            문의하기
          </Link>
          <Link
            href='/research'
            className='w-63 py-3 border-[0.05rem] border-gray-CBC bg-gray-530 text-white font-bold text-[1.6rem] rounded-[1rem] text-center'
          >
            주요 연구
          </Link>
        </div>
        <div className='w-[84.4rem] bg-white h-[0.05rem]' />
        <span className='text-gray-cbc text-[1.4rem] font-normal'>
          #508, Avison Biomedical Research Center,
          <br /> Yonsei University College of Medicine, Yonsei Biomedical
          Research Institute,50-1 Yonsei-ro, Seodaemun-gu, Seoul, Republic of
          Korea
          <br />
          서울시 서대문구 연세로 50-1, 연세대학교 의과대학 연세의생명연구원,
          에비슨 의생명연구센터 508호
        </span>
        <span className='text-gray-cbc text-[1.4rem] font-normal'>
          E-mail : powerqpqp@yuhs.ac | TEL: +82-10-3552-8985
        </span>
        <span className='text-blue-2b4 text-[1.2rem] font-medium'>
          Copyright © HANLAB. All Rights Reserved.
        </span>
      </div>
      <div className='ml-40 mt-3'>
        <span className='text-white font-bold text-[3rem]'>LINK</span>
        <div className='flex flex-col gap-3 mt-4'>
          <Link
            className='font-bold text-gray-fbf text-[1.6rem] flex flex-row gap-2 hover:text-blue-fdd'
            href='/research'
          >
            Research
            <Image
              src='/assets/arrow.svg'
              alt='arrow icon'
              width={12}
              height={12}
            />
          </Link>
          <Link
            className='font-bold text-gray-fbf text-[1.6rem] flex flex-row gap-2 hover:text-blue-fdd'
            href='/publications'
          >
            Publications
            <Image
              src='/assets/arrow.svg'
              alt='arrow icon'
              width={12}
              height={12}
            />
          </Link>
          <Link
            className='font-bold text-gray-fbf text-[1.6rem] flex flex-row gap-2 hover:text-blue-fdd'
            href='/gallery'
          >
            Gallery
            <Image
              src='/assets/arrow.svg'
              alt='arrow icon'
              width={12}
              height={12}
            />
          </Link>
          <Link
            className='font-bold text-gray-fbf text-[1.6rem] flex flex-row gap-2 hover:text-blue-fdd'
            href='/contact'
          >
            Contact
            <Image
              src='/assets/arrow.svg'
              alt='arrow icon'
              width={12}
              height={12}
            />
          </Link>
          <Link
            className='font-bold text-gray-fbf text-[1.6rem] flex flex-row gap-2 hover:text-blue-fdd'
            href='/members'
          >
            Members
            <Image
              src='/assets/arrow.svg'
              alt='arrow icon'
              width={12}
              height={12}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
