import { Footer, SidebarWithNav, Header } from '@/components';
import { SideBarProvider } from '@/contexts/SidebarContext';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default:
      '한현호 교수 연구실 | 연세대학교 비뇨의학교실 비뇨기암 정밀의학 연구실',
    template: '%s | Han Lab - 연세대학교 비뇨의학교실',
  },
  description:
    '연세대학교 의과대학 비뇨의학교실 한현호 교수 연구실(Han Lab). 전립선암 정밀의학, 분자 아형 분류, 면역항암, 나노의학 중개연구를 수행합니다.',
  keywords: [
    '한현호',
    '한현호 교수',
    '연세대학교 비뇨의학교실',
    '비뇨기암 정밀의학',
    '전립선암 연구',
    'Han Lab',
    'Yonsei Urology',
    'prostate cancer precision medicine',
  ],
  icons: {
    icon: '/favicon.svg',
  },
  metadataBase: new URL('https://hanlab.vercel.app'),
  openGraph: {
    title:
      '한현호 교수 연구실 | 연세대학교 비뇨의학교실 비뇨기암 정밀의학 연구실',
    description:
      '연세대학교 의과대학 비뇨의학교실 한현호 교수 연구실. 전립선암 정밀의학, 분자 아형 분류, 면역항암, 나노의학 중개연구.',
    url: 'https://hanlab.vercel.app',
    siteName: 'Han Lab - 연세 비뇨기암 정밀의학 연구실',
    locale: 'ko_KR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://hanlab.vercel.app',
  },
  verification: {
    google: 'wbv-GAuDiPQQjAXOtrU7sR9nBLolutQJVI6tC2BrUc4',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' suppressHydrationWarning>
      <body className={`antialiased`}>
        <SideBarProvider>
          <Header />
          {children}
          <Footer />
          <SidebarWithNav />
        </SideBarProvider>
      </body>
    </html>
  );
}
