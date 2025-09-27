import Image from 'next/image';

type ResearchDetailCardProps = {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
};

const ResearchDetailCard = ({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  description,
}: ResearchDetailCardProps) => {
  return (
    <div className='mb-16 flex w-full flex-col items-center lg:items-start'>
      {/* 제목 */}
      <h2 className='text-center text-[2rem] font-normal lg:text-left lg:text-[3.5rem] lg:text-[3rem]'>
        {title}
      </h2>
      <div className='border-b-blue-2fe lg:border-l-blue-2fe border-b-[1.5px] p-3 text-[1rem] lg:border-b-0 lg:border-l-[3px] lg:pl-6 lg:text-[1.8rem]'>
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
        <div className='flex-1'>
          <p className='text-center text-base leading-relaxed text-gray-700 lg:text-left lg:text-lg'>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResearchDetailCard;
