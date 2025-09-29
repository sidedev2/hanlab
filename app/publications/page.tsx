import {
  SubHeader,
  PublicationCard,
  CurrentPublicationCard,
} from '@/components';

const Page = () => {
  const publications2024 = [
    {
      id: 1,
      title: 'Exploring NNMT: from metabolic pathways to therapeutic targets',
      authors: 'Park J, Shin EJ, Kim TH, Yang JH, Ki SH, Kang KW, Kim KM',
      journal:
        'Archives of Pharmacal Research (2024) 47(12):893-913 (IF: 6.9, JCR 4.2%) (Review)',
      year: 2024,
      link: '#',
    },
    {
      id: 2,
      title: 'Exploring NNMT: from metabolic pathways to therapeutic targets',
      authors:
        'Park J, Shin EJ, Kim TH, Yang JH, Ki SH, Kang KW, Kim KM , Park J, Shin EJ, Kim TH, Yang JH, Ki SH, Kang KW, Kim KM',
      journal:
        'Archives of Pharmacal Research (2024) 47(12):893-913 (IF: 6.9, JCR 4.2%) (Review)',
      year: 2024,
    },
    {
      id: 3,
      title: 'Exploring NNMT: from metabolic pathways to therapeutic targets',
      authors: 'Park J, Shin EJ, Kim TH, Yang JH, Ki SH, Kang KW, Kim KM',
      journal:
        'Archives of Pharmacal Research (2024) 47(12):893-913 (IF: 6.9, JCR 4.2%) (Review)',
      year: 2024,
    },
  ];

  const publications2023 = [
    {
      id: 4,
      title: 'Another research paper title from 2023',
      authors: 'Lee J, Kim S, Park H',
      journal: 'Journal of Medicine (2023) 45(6):234-245',
      year: 2023,
    },
  ];

  return (
    <div>
      <div className='flex flex-col items-center justify-start'>
        <SubHeader title='Publications' />
      </div>

      <div className='mx-10 my-8 flex flex-col gap-12 lg:mx-40 lg:my-16 lg:gap-20'>
        {/* 진행 중인 R&D */}
        <div>
          <div className='border-gray-242 mb-6 border-b-1 pb-2 lg:mb-10'>
            <h2 className='text-gray-242 text-2xl font-bold lg:text-[3rem]'>
              한랩 | 진행 중인 R&D 사업
            </h2>
          </div>
          <PublicationCard />
        </div>

        {/* All Publications */}
        <div>
          <div className='border-gray-242 mb-6 border-b-1 pb-2 lg:mb-10'>
            <h2 className='text-gray-242 text-2xl font-bold lg:text-[3rem]'>
              All Publications
            </h2>
          </div>

          {/* 연도별 Publication */}
          <div className='space-y-12 lg:space-y-16'>
            <CurrentPublicationCard
              year={2024}
              publications={publications2024}
            />
            <CurrentPublicationCard
              year={2023}
              publications={publications2023}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
