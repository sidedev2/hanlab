import Image from 'next/image';

type MemberCardProps = {
  name: string;
  role: string;
  email?: string;
  photo?: string;
  lines?: string[];
};

const MemberCard = ({
  name,
  role,
  email,
  photo = '/assets/hanlab_main2.png',
  lines = [],
}: MemberCardProps) => {
  return (
    <div className='grid w-full grid-cols-[12rem_1fr] gap-8 py-10 lg:grid-cols-[18rem_1fr]'>
      <div className='relative h-[16rem] w-[12rem] overflow-hidden rounded-md lg:h-[24rem] lg:w-[18rem]'>
        <Image
          src={photo}
          alt={`${name} photo`}
          fill
          className='object-cover'
        />
      </div>

      <div className='flex flex-col gap-3'>
        <div className='flex items-end gap-3'>
          <h3 className='text-[2rem] font-semibold lg:text-[2.4rem]'>{name}</h3>
          <span className='text-[1.4rem] text-gray-500 lg:text-[1.6rem]'>
            {role}
          </span>
        </div>
        {email && (
          <div className='text-[1.4rem] text-gray-600 lg:text-[1.6rem]'>
            {email}
          </div>
        )}
        <ul className='mt-2 flex list-disc flex-col gap-2 pl-5 text-[1.4rem] text-gray-700 lg:text-[1.6rem]'>
          {lines.map((line, idx) => (
            <li key={`${name}-line-${idx}`}>{line}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MemberCard;
