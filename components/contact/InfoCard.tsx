import { MapPin, Mail, Phone, Building2 } from 'lucide-react';

const InfoCard = () => {
  return (
    <div className='w-full rounded-xl border border-gray-300 bg-white p-6 shadow-lg lg:rounded-2xl lg:p-15'>
      {/* 헤더 섹션 */}
      <div className='mb-6 lg:mb-8'>
        <div className='mb-3 flex flex-col gap-3 lg:mb-4 lg:flex-row lg:items-center lg:gap-4'>
          <div className='flex items-center gap-3 lg:gap-4'>
            {/* <div className='flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 lg:h-16 lg:w-16'>
              <GraduationCap className='h-6 w-6 text-blue-600 lg:h-8 lg:w-8' />
            </div> */}
            <h1 className='text-blue-fdd text-4xl font-bold lg:text-6xl'>
              HANLAB
            </h1>
          </div>
        </div>

        {/* 서브타이틀 */}
        <div className='ml-0 flex items-center gap-2 lg:gap-3'>
          <Building2 className='h-4 w-4 text-gray-400 lg:h-6 lg:w-6' />
          <p className='text-gray-cbc text-lg lg:text-[2rem]'>
            Lab of Urology, Yonsei Univ
          </p>
        </div>
      </div>

      {/* 구분선 */}
      <div className='mb-6 h-px bg-gray-200 lg:mb-8' />

      {/* 정보 섹션 */}
      <div className='space-y-6 lg:space-y-6'>
        {/* 주소 정보 */}
        <div className='space-y-3 lg:space-y-4'>
          <div className='flex items-center gap-3'>
            <h3 className='text-xl font-semibold text-gray-800 lg:text-[2rem]'>
              주소 / Address
            </h3>
          </div>
          <div className='ml-11 flex items-start gap-2 lg:ml-13 lg:gap-3 leading-relaxed'>
            <MapPin className='mt-3 h-4 w-4 text-gray-400 lg:mt-5 lg:h-6 lg:w-6' />
            <div className='space-y-1 text-sm leading-relaxed text-gray-700 lg:text-[2rem]'>
              <p className='pt-2 text-gray-700'>
                서울시 서대문구 연세로 50-1, 연세대학교 의과대학 연세의생명연구원,
                <br />
                에비슨 의생명연구센터 508호
              </p>
            </div>
          </div>

        </div>

        {/* 연락처 정보 */}
        <div className='space-y-3 lg:space-y-4'>
          <div className='flex items-center gap-3'>
            <h3 className='text-xl font-semibold text-gray-800 lg:text-[2rem]'>
              연락처 / Contact
            </h3>
          </div>
          <div className='ml-11 space-y-2 text-lg text-gray-700 lg:ml-13 lg:space-y-3 lg:text-[2rem]'>
            <div className='flex items-center gap-2 lg:gap-3'>
              <Mail className='h-4 w-4 text-gray-400 lg:h-5 lg:w-5' />
              <p className='break-all'>powerqpqp@yuhs.ac</p>
            </div>
            <div className='flex items-center gap-2 lg:gap-3'>
              <Phone className='h-4 w-4 text-gray-400 lg:h-5 lg:w-5' />
              <p>+82-10-3552-8985</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
