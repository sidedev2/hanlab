import Image from 'next/image';

type ResearchDetailCardProps = {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  goal?: string;
  activities?: string[];
};

const ResearchDetailCard = ({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  description,
  goal,
  activities,
}: ResearchDetailCardProps) => {
  return (
    <div className='mb-16 flex w-full flex-col items-center lg:items-start gap-2'>
      {/* 제목 */}
      <h2 className='text-center text-[2rem] font-normal lg:text-left lg:text-[2.8rem]'>
        {title}
      </h2>
      <div className='border-b-blue-2fe lg:border-l-blue-2fe border-b-[1.5px] p-1.5  text-[1rem] lg:border-b-0 lg:border-l-[3px] lg:pl-6 lg:text-[1.8rem]'>
        {subtitle}
      </div>

      {/* 이미지와 설명 */}
      <div className='mt-10 flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-12'>
        {/* 이미지 */}
        <div className='flex-shrink-0'>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={300}
            height={300}
            className='rounded-lg object-cover'
          />
        </div>

        {/* 설명 */}
        <div className='flex flex-col gap-3 mt-1'>
          <p className='text-center text-base font-bold leading-relaxed text-gray-700 lg:text-left lg:text-xl'>
            {description}
          </p>

          {/* 연구 목표 */}
          {goal && (
            <div>
              <h4 className='mb-2 text-center text-[1.4rem] font-semibold text-gray-800 lg:text-left lg:text-[1.6rem]'>
                연구 목표
              </h4>
              <p className='text-center text-base leading-relaxed text-gray-600 lg:text-left lg:text-xl'>
                {goal}
              </p>
            </div>
          )}

          {/* 주요 활동 */}
          {activities && activities.length > 0 && (
            <div >
              <h4 className='mb-2 text-center text-[1.4rem] font-semibold text-gray-800 lg:text-left lg:text-[1.6rem]'>
                주요 활동
              </h4>
              <ul className='list-disc space-y-1 pl-5 text-base leading-relaxed text-gray-600 lg:text-xl'>
                {activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResearchDetailCard;
