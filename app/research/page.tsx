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
          <p className='text-[1.6rem] leading-relaxed'>
            본 연구실은 전립선암의 진단부터 치료, 예후 예측, 그리고 치료 후 삶의 질 관리까지
            <br />
            전 주기를 아우르는 환자 맞춤형 정밀 의료(Precision Medicine) 실현을 목표로 합니다.
          </p>
          <p className='mt-6  text-[1.6rem] leading-relaxed'>
            우리는 임상 현장의 난제를 첨단 과학으로 해결하는 중개 연구(Translational Research)의
            중심지입니다.
            <br />
            기존의 한계를 넘어서는 심층 유전체 분석(Deep Genome Analysis)과 혁신적인 나노
            의학(Nanomedicine) 기술을 융합하여,
            <br />
            난치성 전립선암의 분자적 기원을 규명하고 부작용 없는 차세대 치료 플랫폼을 개발하고
            있습니다.
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
              goal={research.goal}
              activities={research.activities}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
