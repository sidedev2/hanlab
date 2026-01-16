import { ExternalLink } from 'lucide-react';

type Publication = {
  id: number;
  title: string;
  authors: string;
  journal: string;
  year: number;
  link?: string;
};

type PublicationCardProps = {
  year: number;
  publications: Publication[];
};

const PublicationCard = ({ year, publications }: PublicationCardProps) => {
  return (
    <div className='mt-6 lg:mt-10'>
      {/* 연도 헤더 */}
      <div className='mb-6 lg:mb-8'>
        <h2 className='text-3xl font-bold text-blue-fdd lg:text-4xl'>{year}</h2>
      </div>

      {/* Publication 리스트 */}
      <div className='space-y-6 lg:space-y-8'>
        {publications.map((pub) => (
          <div
            key={pub.id}
            className='group border-l-4 border-gray-200 pl-4 transition-all hover:border-cyan-400 lg:pl-6'
          >
            {/* 제목 */}
            <h3 className='mb-2 text-lg font-semibold text-gray-800 transition-colors group-hover:text-cyan-600 lg:text-xl'>
              {pub.link ? (
                <a
                  href={pub.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2 hover:underline'
                >
                  <span>{pub.title}</span>
                  <ExternalLink className='h-4 w-4 lg:h-5 lg:w-5' />
                </a>
              ) : (
                pub.title
              )}
            </h3>

            {/* 저자 */}
            <p className='mb-2 text-sm text-gray-600 lg:text-base'>
              {pub.authors}
            </p>

            {/* 저널 정보 */}
            <p className='text-sm text-gray-500 lg:text-base'>
              - {pub.journal}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublicationCard;
