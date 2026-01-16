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
    name: '김백길',
    role: '연구교수',
    email: 'BBAEKIRI@yuhs.ac',
    photo: '/assets/researcher_male.png',
    lines: [],
  },
  {
    id: 2,
    name: '장연수',
    role: '연구교수',
    email: 'YSJANG@yuhs.ac',
    photo: '/assets/researcher_female.png',
    lines: [],
  },
  {
    id: 3,
    name: '송동욱',
    role: '연구원',
    email: 'powerqpqp@yuhs.ac',
    photo: '/assets/researcher_male.png',
    lines: [],
  },
  {
    id: 4,
    name: '정정찬',
    role: '연구원',
    email: 'wjdcks5373@naver.com',
    photo: '/assets/researcher_male.png',
    lines: [],
  },
  {
    id: 5,
    name: '유아영',
    role: '연구간호사',
    email: 'dbdkdud0310@yuhs.ac',
    photo: '/assets/researcher_female.png',
    lines: [],
  },
  {
    id: 6,
    name: '정지희',
    role: '연구간호사',
    email: 'rksghtkgl@yuhs.ac',
    photo: '/assets/researcher_female.png',
    lines: [],
  },
  {
    id: 7,
    name: '문민정',
    role: '행정담당',
    email: 'bluewatermj@naver.com',
    photo: '/assets/researcher_female.png',
    lines: [],
  },
];
