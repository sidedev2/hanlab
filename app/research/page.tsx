import { SubHeader, ResearchDetailCard } from '@/components';
import { researchData } from '@/constants/researchData';

const Page = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex items-center justify-start'>
        <SubHeader title='Research' />
      </div>
      <div className='flex flex-col items-center px-15 py-20 text-center'>
        <div className='my-10 lg:my-30'>
          <p className='text-gray-888 mb-4 text-[2rem] font-bold'>
            주요 연구분야
          </p>
          <p className='text-blue-fdd mb-8 text-[2.5rem] font-bold lg:text-[3.5rem]'>
            Research About
          </p>
          <p className='max-w-4xl text-[1.6rem] leading-relaxed'>
            본 연구실은 간과 골격근을 포함한 대사장기의 에너지 항상성을 조절하는
            <br />
            분자기전을 탐구하고 대사질환이 유발되는 과정에서 세포 및 장기 간
            상호작용 <br />
            (inter-cellular / inter-organ interaction) 을<br /> 기반으로 새로운
            바이오마커 및 치료 타겟을 발굴하는 연구를 수행하고 있습니다.
          </p>
        </div>
        <div className='mb-20 h-[2px] w-full bg-gray-200' />
        <div className='flex w-full flex-col text-left'>
          {researchData.map((research, index) => (
            <ResearchDetailCard
              key={index}
              title={research.title}
              subtitle={research.subtitle}
              imageSrc={research.imageSrc}
              imageAlt={research.imageAlt}
              description={research.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
