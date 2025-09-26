import { SubHeader } from '@/components';
import ResearchDetailCard from '@/components/research/ResearchDetailCard';

const researchData = [
  {
    title: 'Urology Advanced Condition',
    subtitle: '비뇨의학에 관한 연구',
    imageSrc: '/assets/hanlab_main.png',
    imageAlt: 'Research Image 1',
    description:
      'Ever since the great success of gleevec in cancer biology, tremendous efforts have made to identify new effective cancer targets. However, the targets that delivered FDA-approved drugs are limited and extremely biased in the mediators of signal pathways such as kinases etc. However, in many times, those targets show slim efficacy with rapid occurrence of resistance. For this reason, it is necessary to explore the targets that can tolerate heterogeneity of cancers with sufficient efficacy. Although the targets in cancer-specific metabolism are emerging as alternative targets, they mainly focus on energy metabolism involving glucose or fatty acids.',
  },
  {
    title: 'Cancer Metabolism Research',
    subtitle: '암 대사 연구 분야',
    imageSrc: '/assets/hanlab_main.png',
    imageAlt: 'Research Image 2',
    description:
      '본 연구실은 간과 골격근을 포함한 대사장기의 에너지 항상성을 조절하는 분자기전을 탐구하고 대사질환이 유발되는 과정에서 세포 및 장기 간 상호작용을 기반으로 새로운 바이오마커 및 치료 타겟을 발굴하는 연구를 수행하고 있습니다.',
  },
  {
    title: 'Drug Delivery Systems',
    subtitle: '약물 전달 시스템 개발',
    imageSrc: '/assets/hanlab_main.png',
    imageAlt: 'Research Image 3',
    description:
      '골반통 및 약물전달시스템 기술개발에 특화된 독자적인 약물 전달 기술력을 바탕으로 골반통치료용 서방형 주사제를 개발하여 골반통환자들의 삶의 질 향상에 기여하고자 합니다.',
  },
];

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
          <p className='text-blue-fdd mb-8 text-[3.5rem] font-bold'>
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
