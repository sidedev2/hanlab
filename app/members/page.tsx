'use client';

import { SubHeader } from '@/components';
import { MemberCard } from '@/components';
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
                className={`text-[2.4rem] font-semibold ${active === tab.key ? 'text-[#08cfdd]' : 'text-gray-400'
                  }`}
              >
                {tab.label}
              </span>
              <span
                className={`h-[0.4rem] w-full rounded ${active === tab.key ? 'bg-[#08cfdd]' : 'bg-gray-300'
                  }`}
              />
            </button>
          ))}
        </div>

        {active === 'professor' && (
          <section className='pt-10'>
            <div className='grid grid-cols-1 gap-6'>
              <MemberCard
                name='한현호 교수 (Hyunho Han, M.D., Ph.D.)'
                role='연세대학교 의과대학 비뇨의학교실 조교수'
                email='TINTAL@yuhs.ac'
                photo='/assets/professor.png'
                type='professor'
                lines={[]}
              />

              {/* 소개문 */}
              <div className='rounded-lg bg-gray-50 p-6'>
                <p className='text-[1.4rem] leading-relaxed text-gray-700 lg:text-[1.6rem]'>
                  한현호 교수는 &quot;임상에서 마주한 물음을 기초 과학으로 풀어내고 싶다&quot;는 고민에서 출발해 의사과학자(Physician-Scientist)의 길을 걸어왔습니다.
                </p>
                <p className='mt-4 text-[1.4rem] leading-relaxed text-gray-700 lg:text-[1.6rem]'>
                  연세대학교 의과대학을 졸업하고 세브란스병원에서 비뇨의학 전문의 수련을 마친 뒤, 기초 의학(병리학) 교실에서 종양생물학 박사 학위를 취득하며 임상과 연구를 잇는 첫걸음을 뗐습니다. 이후 미국 MD Anderson Cancer Center에서 약 4년간 전립선암의 유전체 진화와 면역 회피 기전을 연구하며, 종양생물학 분야의 난제를 파고들었습니다.
                </p>
                <p className='mt-4 text-[1.4rem] leading-relaxed text-gray-700 lg:text-[1.6rem]'>
                  현재는 세브란스병원 비뇨의학암센터에서 전립선암 로봇 수술과 약물 치료를 담당하고 있으며, NGS(차세대 염기서열 분석)를 활용한 환자 맞춤형 정밀 치료에 힘쓰고 있습니다. 연구실에서는 전립선암 분자 아형 분류 기술 개발을 이어가고 있고, 최근에는 Long-read Sequencing과 나노 의학을 접목해 조기 진단과 부작용 없는 치료 플랫폼 구축에 집중하고 있습니다.
                </p>
              </div>

              {/* 학력 */}
              <div className='mt-6'>
                <h4 className='mb-4 text-[1.8rem] font-semibold text-gray-800 lg:text-[2rem]'>
                  학력 (Education)
                </h4>
                <ul className='list-disc space-y-2 pl-6 text-[1.4rem] text-gray-700 lg:text-[1.6rem]'>
                  <li>
                    2013.03 – 2018.02: 연세대학교 대학원 의과학 박사 (전공:
                    종양생물학)
                  </li>
                  <li>
                    2010.09 – 2012.08: 연세대학교 대학원 의학 석사 (전공:
                    비뇨의학)
                  </li>
                  <li>2002.03 – 2008.02: 연세대학교 의과대학 의학사</li>
                </ul>
              </div>

              {/* 경력 */}
              <div className='mt-6'>
                <h4 className='mb-4 text-[1.8rem] font-semibold text-gray-800 lg:text-[2rem]'>
                  경력 (Professional Experience)
                </h4>
                <ul className='list-disc space-y-2 pl-6 text-[1.4rem] text-gray-700 lg:text-[1.6rem]'>
                  <li>
                    2021.03 – 현재: 연세대학교 의과대학 비뇨의학교실 임상조교수
                  </li>
                  <li>
                    2020.05 – 2021.02: 세브란스병원 비뇨의학과 임상연구조교수
                  </li>
                  <li>
                    2018.03 – 2020.02: The U.T. MD Anderson Cancer Center, Dept.
                    of Cancer Biology, Postdoctoral Researcher
                  </li>
                  <li>
                    2016.09 – 2018.02: The U.T. MD Anderson Cancer Center,
                    Visiting Graduate Student
                  </li>
                  <li>
                    2013.03 – 2018.02: 연세대학교 의과대학 병리학교실 조교
                    (기초전공의/전문연구요원)
                  </li>
                  <li>
                    2009.03 – 2013.02: 세브란스병원 비뇨기과 전공의 (레지던트)
                  </li>
                </ul>
              </div>

              {/* 주요 학회 활동 */}
              <div className='mt-6'>
                <h4 className='mb-4 text-[1.8rem] font-semibold text-gray-800 lg:text-[2rem]'>
                  주요 학회 활동 (Academic Activities)
                </h4>
                <ul className='list-disc space-y-2 pl-6 text-[1.4rem] text-gray-700 lg:text-[1.6rem]'>
                  <li>
                    대한비뇨기초의학연구회 총무이사 (2024.03 – 현재)
                  </li>
                  <li>
                    대한비뇨기종양학회 진료지침이사 (2025.01 – 현재)
                  </li>
                  <li>대한비뇨의학회 연구부이사 (2025.01 – 현재)</li>
                  <li>
                    대한전립선학회 Prostate Cancer Working Group 부단장 (2023.03 –
                    현재)
                  </li>
                  <li>
                    Urological Research Society (URS) 위원 (2025.01 – 현재)
                  </li>
                </ul>
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
                  type='researcher'
                  name={r.name}
                  role={r.role}
                  email={r.email}
                  lines={r.lines}
                  photo={r.photo}
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
