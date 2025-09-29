export type Researcher = {
  id: number;
  name: string;
  role: string;
  email?: string;
  photo?: string;
  lines: string[];
};

export const researchers: Researcher[] = [
  {
    id: 1,
    name: '송동욱',
    role: 'Ph.D. Course',
    email: 'thdcodud103@naver.com',
    lines: [
      '2000 (현) 연세대학교, 비노어쩌구 진행',
      '2000 (현) 연세대학교, 비노어쩌구 진행',
      '2000 (현) 연세대학교, 비노어쩌구 진행',
      '2000 (현) 연세대학교, 비노어쩌구 진행',
    ],
  },
  {
    id: 2,
    name: '홍길동',
    role: 'M.S. Course',
    email: 'example@yonnsei.ac.kr',
    lines: [
      '2019 연세대학교 BK21 참여',
      '2021 학부 연구생 활동',
      '2023 석사과정 입학',
      '2024 프로젝트 진행 중',
    ],
  },
  {
    id: 3,
    name: '김연구',
    role: 'Research Assistant',
    email: 'ra@example.com',
    lines: [
      '2022 연구조교 채용',
      '2023 실험실 운영 지원',
      '2024 학술대회 포스터 발표',
      '현재 연구 진행',
    ],
  },
];
