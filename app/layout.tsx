import { SidebarWithNav } from '@/components';
import Header from '@/components/common/Header';
import { SideBarProvider } from '@/contexts/SidebarContext';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hanlab',
  description: 'Hanlab',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' data-foxified=''>
      <body className={`antialiased`}>
        <SideBarProvider>
          <Header />
          {children}
          <SidebarWithNav />
        </SideBarProvider>
      </body>
    </html>
  );
}
