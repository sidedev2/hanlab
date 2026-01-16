const CurrentPublicationCard = () => {
  return (
    <div className='flex flex-col gap-4 lg:gap-8'><div className='w-full rounded-xl border border-gray-300 bg-white p-6 lg:rounded-2xl lg:p-12'>
      {/* 헤더 섹션 */}
      <div className='mb-6 lg:mb-8'>
        <div className='mb-3 flex flex-col gap-3 lg:mb-4 lg:flex-row lg:items-center lg:gap-4'>
          <div className='flex items-end gap-3 lg:gap-4'>
            <h1 className='text-blue-fdd text-[2rem] font-bold lg:text-4xl'>
              글로벌의사과학자양성 (前K-Medi융합인재양성지원사업)

            </h1>
            <p className='text-gray-cbc h-fit text-[1.6rem] lg:text-[1.8rem]'>
              한국보건산업 진흥원
            </p>
          </div>
        </div>
      </div>

      {/* 구분선 */}
      <div className='mb-6 h-px bg-gray-200 lg:mb-8' />

      {/* 정보 섹션 */}
      <div className='space-y-6 text-[1.6rem] lg:text-[1.8rem] lg:space-y-6 font-semibold text-gray-800 transition-colors'>전립선암의 면역 회피 기전 규명: 단일세포 전사체 long read 분석을 통한 PSA 발현 T 세포의 역할 연구</div>
    </div>

      <div className='w-full rounded-xl border border-gray-300 bg-white p-6 lg:rounded-2xl lg:p-12'>
        {/* 헤더 섹션 */}
        <div className='mb-6 lg:mb-8'>
          <div className='mb-3 flex flex-col gap-3 lg:mb-4 lg:flex-row lg:items-center lg:gap-4'>
            <div className='flex items-end gap-3 lg:gap-4'>
              <h1 className='text-blue-fdd text-[2rem] font-bold lg:text-4xl'>
                공유의사결정 모형개발 및 실증연구

              </h1>
              <p className='text-gray-cbc text-[1.6rem] lg:text-[1.8rem]'>
                한국보건산업 진흥원
              </p>
            </div>
          </div>
        </div>

        {/* 구분선 */}
        <div className='mb-6 h-px bg-gray-200 lg:mb-8' />

        {/* 정보 섹션 */}
        <div className='space-y-6 text-[1.6rem] lg:text-[1.8rem] lg:space-y-6 font-semibold text-gray-800 transition-colors'>전립선암 환자의 중요 고려사항 파악과 환자 친화적 전립선암 치료 선택지 제공을 통한 의사-환자 협력 치료 결정 모델의 개발 및 검증 연구</div>
      </div></div>

  );
};

export default CurrentPublicationCard;
