import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-blue-530 right-0 bottom-0 left-0 mt-10 w-full'>
      {/* lg 이상 */}
      <div className='hidden flex-row p-11 lg:flex'>
        <div className='flex flex-col gap-7'>
          <Image
            src='/assets/logo-big.svg'
            alt='Hanlab'
            width={40}
            height={40}
            className='h-[4rem] w-[4rem] object-contain'
          />
          <div className='flex flex-row gap-9'>
            <Link
              href='/contact'
              className='border-gray-CBC text-530 bg-gray-9d9 w-63 rounded-[1rem] border-[0.05rem] py-3 text-center text-[1.6rem] font-bold'
            >
              문의하기
            </Link>
            <Link
              href='/research'
              className='border-gray-CBC bg-gray-530 w-63 rounded-[1rem] border-[0.05rem] py-3 text-center text-[1.6rem] font-bold text-white'
            >
              주요 연구
            </Link>
          </div>
          <div className='h-[0.05rem] w-[84.4rem] bg-white' />
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
        <div className='mt-3 ml-30'>
          <span className='text-[3rem] font-bold text-white'>LINK</span>
          <div className='mt-4 flex flex-col gap-3'>
            <Link
              className='text-gray-fbf hover:text-blue-fdd flex flex-row gap-2 text-[1.6rem] font-bold'
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
              className='text-gray-fbf hover:text-blue-fdd flex flex-row gap-2 text-[1.6rem] font-bold'
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
              className='text-gray-fbf hover:text-blue-fdd flex flex-row gap-2 text-[1.6rem] font-bold'
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
              className='text-gray-fbf hover:text-blue-fdd flex flex-row gap-2 text-[1.6rem] font-bold'
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
              className='text-gray-fbf hover:text-blue-fdd flex flex-row gap-2 text-[1.6rem] font-bold'
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
      </div>

      {/* lg 미만*/}
      <div className='flex flex-col gap-4 p-6 lg:hidden'>
        <div className='flex flex-col items-center gap-4'>
          <Image
            src='/assets/logo-big.svg'
            alt='Hanlab'
            width={30}
            height={30}
            className='h-[3rem] w-[3rem] self-start object-contain'
          />
          <div className='mb-2 flex w-full flex-col gap-2'>
            <Link
              href='/contact'
              className='border-gray-CBC text-530 bg-gray-9d9 w-full rounded-[1rem] border-[0.05rem] py-4 text-center text-[1.6rem] font-bold'
            >
              문의하기
            </Link>
            <Link
              href='/research'
              className='border-gray-CBC bg-gray-530 w-full rounded-[1rem] border-[0.05rem] py-4 text-center text-[1.6rem] font-bold text-white'
            >
              주요 연구
            </Link>
          </div>
          <div className='h-[0.05rem] w-full bg-white' />
          <span className='text-gray-cbc self-start text-[1.4rem] font-normal'>
            #508, Avison Biomedical Research Center,
            <br /> Yonsei University College of Medicine, Yonsei Biomedical
            Research Institute,50-1 Yonsei-ro, Seodaemun-gu, Seoul, Republic of
            Korea
            <br />
            서울시 서대문구 연세로 50-1, 연세대학교 의과대학 연세의생명연구원,
            에비슨 의생명연구센터 508호
          </span>
          <div className='text-gray-cbc flex flex-col gap-1 self-start text-[1.2rem] font-normal'>
            <span>E-mail : powerqpqp@yuhs.ac</span>
            <span>TEL: +82-10-3552-8985</span>
          </div>
          <span className='text-blue-2b4 self-start text-[1rem] font-medium'>
            Copyright © HANLAB. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
