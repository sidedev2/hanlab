export type ProfessorPublication = {
  id: number;
  title: string;
  authors: string;
  journal: string;
  year: number;
  link?: string;
};

export const professorPublications: ProfessorPublication[] = [
  // 2024
  {
    id: 101,
    title: 'Exploring NNMT: from metabolic pathways to therapeutic targets',
    authors: 'Park J, Shin EJ, Kim TH, Yang JH, Ki SH, Kang KW, Kim KM',
    journal:
      'Archives of Pharmacal Research (2024) 47(12):893-913 (IF: 6.9, JCR 4.2%) (Review)',
    year: 2024,
    link: '#',
  },
  {
    id: 102,
    title: 'Insights into oncogenic signaling and therapeutics',
    authors: 'Park J, Kim KM, Lee S',
    journal:
      'Archives of Pharmacal Research (2024) 47(8):512-530 (IF: 6.9, JCR 4.2%)',
    year: 2024,
  },
  // 2023
  {
    id: 201,
    title: 'Another research paper title from 2023',
    authors: 'Lee J, Kim S, Park H',
    journal: 'Journal of Medicine (2023) 45(6):234-245',
    year: 2023,
  },
  {
    id: 202,
    title: 'Advanced research methodology in 2023',
    authors: 'Kim A, Lee B, Choi C',
    journal: 'Science Journal (2023) 50(3):123-135',
    year: 2023,
  },
];
