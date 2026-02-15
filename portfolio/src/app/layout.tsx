import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MemoBox - My Portfolio',
  description: 'MemoBox Portfolio - A modern portfolio with blogs and vlogs',
  openGraph: {
    title: 'MemoBox Portfolio',
    description: 'A modern portfolio with blogs and vlogs',
    url: 'https://memobox.ai',
    siteName: 'MemoBox',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
