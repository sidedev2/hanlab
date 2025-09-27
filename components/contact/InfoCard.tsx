import { MapPin, Mail, Phone, Building2, GraduationCap } from 'lucide-react';

const InfoCard = () => {
  return (
    <div className='w-full rounded-2xl border border-gray-200 bg-white p-15 shadow-lg'>
      {/* 헤더 섹션 */}
      <div className='mb-8'>
        <div className='mb-4 flex items-center gap-4'>
          <div className='flex h-16 w-16 items-center justify-center rounded-full bg-blue-50'>
            <GraduationCap className='h-8 w-8 text-blue-600' />
          </div>
          <div>
            <h1 className='text-blue-fdd text-6xl font-bold'>HANLAB</h1>
          </div>
        </div>
        <div className='ml-20 flex items-center gap-3'>
          <Building2 className='h-6 w-6 text-gray-400' />
          <p className='text-gray-cbc text-[2rem]'>
            Lab of Urology, Yonsei Univ
          </p>
        </div>
      </div>

      {/* 구분선 */}
      <div className='mb-8 h-px bg-gray-200' />

      {/* 주소 정보 */}
      <div className='space-y-6'>
        <div className='space-y-4'>
          <div className='flex items-center gap-3'>
            <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-50'>
              <MapPin className='h-5 w-5 text-gray-600' />
            </div>
            <h3 className='text-[2rem] font-semibold text-gray-800'>
              주소 / Address
            </h3>
          </div>
          <div className='ml-13 space-y-1 text-[2rem] leading-relaxed text-gray-700'>
            <p>#508, Avison Biomedical Research Center,</p>
            <p>
              Yonsei University College of Medicine, Yonsei Biomedical Research
              Institute,
            </p>
            <p>50-1 Yonsei-ro, Seodaemun-gu, Seoul, Republic of Korea</p>
            <p className='pt-2 text-gray-700'>
              서울시 서대문구 연세로 50-1, 연세대학교 의과대학 연세의생명연구원,
              <br />
              에비슨 의생명연구센터 508호
            </p>
          </div>
        </div>

        {/* 연락처 정보 */}
        <div className='space-y-4'>
          <div className='flex items-center gap-3'>
            <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-50'>
              <Mail className='h-5 w-5 text-gray-600' />
            </div>
            <h3 className='text-[2rem] font-semibold text-gray-800'>
              연락처 / Contact
            </h3>
          </div>
          <div className='ml-13 space-y-3 text-[2rem] text-gray-700'>
            <div className='flex items-center gap-3'>
              <Mail className='h-5 w-5 text-gray-400' />
              <p>powerqpqp@yuhs.ac</p>
            </div>
            <div className='flex items-center gap-3'>
              <Phone className='h-5 w-5 text-gray-400' />
              <p>+82-10-3552-8985</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
