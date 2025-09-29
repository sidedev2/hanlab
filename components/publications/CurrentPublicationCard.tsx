const CurrentPublicationCard = () => {
  return (
    <div className='w-full rounded-xl border border-gray-300 bg-white p-6 lg:rounded-2xl lg:p-15'>
      {/* 헤더 섹션 */}
      <div className='mb-6 lg:mb-8'>
        <div className='mb-3 flex flex-col gap-3 lg:mb-4 lg:flex-row lg:items-center lg:gap-4'>
          <div className='flex items-center gap-3 lg:gap-4'>
            <h1 className='text-blue-fdd text-[2rem] font-bold lg:text-6xl'>
              연구 제목
            </h1>
            <p className='text-gray-cbc text-[1.8rem] lg:text-[2rem]'>
              Lab of Urology, Yonsei Univ
            </p>
          </div>
        </div>
      </div>

      {/* 구분선 */}
      <div className='mb-6 h-px bg-gray-200 lg:mb-8' />

      {/* 정보 섹션 */}
      <div className='space-y-6 lg:space-y-6'></div>
    </div>
  );
};

export default CurrentPublicationCard;
