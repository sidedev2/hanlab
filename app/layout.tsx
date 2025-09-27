import { Footer, SidebarWithNav, Header } from '@/components';
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
