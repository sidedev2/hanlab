import { SubHeader, KakaoMap, InfoCard } from '@/components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    '연세대학교 의과대학 비뇨의학교실 한현호 교수 연구실 연락처 및 위치 안내.',
};

const Page = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-start'>
        <SubHeader title='Contact' />
      </div>
      <div className='m-8 flex flex-col gap-6 lg:m-20 lg:gap-30'>
        <KakaoMap />
        <InfoCard />
      </div>
    </div>
  );
};

export default Page;
