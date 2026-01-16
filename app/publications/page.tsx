import {
  SubHeader,
  PublicationCard,
  CurrentPublicationCard,
} from '@/components';

const Page = () => {
  const publications2026 = [
    {
      id: 1,
      title: 'CD45⁺ hybrid circulating cells may reflect tumor-immune interactions and serve as transcriptomic indicators of metastatic potential in prostate cancer',
      authors: '',
      journal:
        'Theranostics',
      year: 2026,
    },
  ];

  const publications2025 = [
    {
      id: 2,
      title: 'Decisional Trade-offs in Localized Prostate Cancer: A Prospective Cross-Sectional Study of Radical Prostatectomy, Radiation Therapy, and Active Surveillance',
      authors: '',
      journal: 'Journal of Urologic oncology',
      year: 2025,
    },
    {
      id: 3,
      title: 'Usefulness of free PSA ratio to enhance detection of clinically significant prostate cancer in patients with PI-RADS<3 and PSA≤10',
      authors: '',
      journal: 'Prostate International',
      year: 2025,
    },
    {
      id: 4,
      title: 'Genome assembly resources of genitourinary cancers for chromosomal aberration at the single nucleotide level',
      authors: '',
      journal: 'Scientific Data',
      year: 2025,
    },
    {
      id: 5,
      title: 'Skin rash in metastatic hormone sensitive prostate cancer patients treated with apalutamide: a retrospective multicenter study in Korea',
      authors: '',
      journal: 'Prostate International',
      year: 2025,
    },
  ];

  const publications2023 = [
    {
      id: 6,
      title: 'Phosphodiesterase-5 Inhibitor Use in Robot Assisted Radical Prostatectomy Patients Is Associated with Reduced Risk of Death: A Propensity Score Matched Analysis of 1,058 Patients',
      authors: '',
      journal:
        'World Journal of Men’s Health',
      year: 2023,
    },
    {
      id: 7,
      title: 'Circulating Tumor DNA Analysis on Metastatic Prostate Cancer with Disease Progression',
      authors: '',
      journal:
        'Cancers',
      year: 2023,
    },
  ];

  const publications2022 = [
    {
      id: 8,
      title: 'Mesenchymal and stem-like prostate cancer linked to therapy-induced lineage plasticity and metastasis',
      authors: '',
      journal:
        'Cell Reports',
      year: 2022,
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
              진행 중인 R&D 사업
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
              year={2026}
              publications={publications2026}
            />
            <CurrentPublicationCard
              year={2025}
              publications={publications2025}
            />
            <CurrentPublicationCard
              year={2023}
              publications={publications2023}
            />
            <CurrentPublicationCard
              year={2022}
              publications={publications2022}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
