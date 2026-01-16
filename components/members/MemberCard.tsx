import { cn } from '@/util/cn';
import Image from 'next/image';

type MemberCardProps = {
  name: string;
  type: 'professor' | 'researcher';
  role: string;
  email?: string;
  photo?: string;
  lines?: string[];
};

const MemberCard = ({
  name,
  type,
  role,
  email,
  photo = '/assets/hanlab_main2.png',
  lines = [],

}: MemberCardProps) => {
  const isProfessor = type === 'professor';
  const gridCols = isProfessor ? 'lg:grid-cols-[22rem_1fr]' : 'lg:grid-cols-[18rem_1fr]';
  const imageSize = isProfessor
    ? 'h-[20rem] w-[12rem] lg:h-[30rem] lg:w-[22rem]'
    : 'h-[16rem] w-[12rem] lg:h-[24rem] lg:w-[18rem]';

  return (
    <div className={cn('grid w-full grid-cols-[12rem_1fr] gap-8 py-10', gridCols)}>
      <div className={cn('relative overflow-hidden rounded-lg bg-gray-200', imageSize)}>
        <Image
          src={photo}
          alt={`${name} photo`}
          fill
          className='object-cover'
        />
      </div>

      <div className='flex flex-col gap-3'>
        <div className='flex flex-col items-start gap-1'>
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
