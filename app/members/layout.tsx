import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Members',
  description:
    '연세대학교 비뇨의학교실 한현호 교수 연구실 구성원 소개. 교수, 연구원 정보.',
};

export default function MembersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
