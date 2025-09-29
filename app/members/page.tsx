'use client';

import { SubHeader } from '@/components';
import { MemberCard, CurrentPublicationCard } from '@/components';
import { professorPublications } from '@/constants/membersProfessorPublications';
import { researchers } from '@/constants/membersResearchers';
import { useState } from 'react';

const TABS = [
  { key: 'professor', label: 'Professor' },
  { key: 'researcher', label: 'Researcher' },
];

const Page = () => {
  const [active, setActive] = useState<string>('professor');

  return (
    <div className='flex w-full flex-col items-center justify-start'>
      <SubHeader title='Members' />

      <div className='mx-auto w-full max-w-[110rem] px-6 py-14'>
        <div className='flex items-end gap-10 pb-2'>
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className='flex flex-1 flex-col items-center gap-3'
            >
              <span
                className={`text-[2.4rem] font-semibold ${
                  active === tab.key ? 'text-[#08cfdd]' : 'text-gray-400'
                }`}
              >
                {tab.label}
              </span>
              <span
                className={`h-[0.4rem] w-full rounded ${
                  active === tab.key ? 'bg-[#08cfdd]' : 'bg-gray-300'
                }`}
              />
            </button>
          ))}
        </div>

        {active === 'professor' && (
          <section className='pt-10'>
            <div className='grid grid-cols-1 gap-6'>
              <MemberCard
                name='000 교수'
                role='Yonsei Univ.'
                email='thdcodud103@naver.com'
                lines={[
                  '2000 (현) 연세대학교, 비노어쩌구 교수',
                  '2000 (현) 연세대학교, 비노어쩌구 교수',
                  '2000 (현) 연세대학교, 비노어쩌구 교수',
                  '2000 (현) 연세대학교, 비노어쩌구 교수',
                ]}
              />
              {/* 연도별 Publications */}
              <div className='mt-2 space-y-10'>
                <CurrentPublicationCard
                  year={2024}
                  publications={professorPublications.filter(
                    (p) => p.year === 2024
                  )}
                />
                <CurrentPublicationCard
                  year={2023}
                  publications={professorPublications.filter(
                    (p) => p.year === 2023
                  )}
                />
              </div>
            </div>
          </section>
        )}

        {active === 'researcher' && (
          <section className='pt-10'>
            <div className='grid grid-cols-1 gap-16'>
              {researchers.map((r) => (
                <MemberCard
                  key={r.id}
                  name={r.name}
                  role={r.role}
                  email={r.email}
                  lines={r.lines}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Page;
