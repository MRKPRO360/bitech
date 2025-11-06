import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';
import Providers from '@/providers';
import SplashScreren from '@/components/shared/splashScreen';
import ScrollToTop from '@/components/ui/core/ScrollToTop';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-nuinito',
});

export const metadata: Metadata = {
  title: 'BiTech',
  description: 'BiTech - Your Gateway to Cutting-Edge Technology Solutions',
  keywords: [
    'BiTech, Technology Solutions, Innovative Tech, Software Development, IT Services, Tech Consulting, Digital Transformation, Cloud Computing, Cybersecurity, AI Solutions',
  ],
  authors: [
    { name: 'Md. Rezaul Karim', url: 'https://mdrezaulkarim.vercel.app/' },
  ],
  creator: 'Md. Rezaul Karim',
  icons: {
    icon: '/favicon.ico',
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning={false} lang="en" className={`${nunito.className}`}>
      <body className="relative">
        <SplashScreren />
        <Providers>
          <Toaster richColors position="top-center" />
          {children}
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
