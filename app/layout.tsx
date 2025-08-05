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
    <html lang='ko'>
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
