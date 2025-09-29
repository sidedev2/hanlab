export type Publication = {
  id: number;
  title: string;
  authors: string;
  journal: string;
  year: number;
  link?: string;
};

export const publicationsData: Publication[] = [
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
  {
    id: 4,
    title: 'Another research paper title from 2023',
    authors: 'Lee J, Kim S, Park H',
    journal: 'Journal of Medicine (2023) 45(6):234-245',
    year: 2023,
  },
  {
    id: 5,
    title: 'Advanced research methodology in 2023',
    authors: 'Kim A, Lee B, Choi C',
    journal: 'Science Journal (2023) 50(3):123-135',
    year: 2023,
  },
  {
    id: 6,
    title: 'Future research directions for 2022',
    authors: 'Park D, Kim E, Lee F',
    journal: 'Research Quarterly (2022) 38(7):456-468',
    year: 2022,
  },
];
