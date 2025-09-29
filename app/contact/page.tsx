import { SubHeader, KakaoMap, InfoCard } from '@/components';

const Page = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-start'>
        <SubHeader title='Contact' />
      </div>
      <div className='m-10 flex flex-col gap-6 lg:m-40 lg:gap-30'>
        <KakaoMap />
        <InfoCard />
      </div>
    </div>
  );
};

export default Page;
