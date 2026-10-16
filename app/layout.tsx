import type { Metadata, Viewport } from 'next';
import './globals.css';
import { LangProvider } from '@/lib/lang';
import SiteWrapper from '@/components/SiteWrapper';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'حمشو للإنشاءات المعدنية | Hamsho Metal Constructions',
  description: 'شركة حمشو للدراسة والإنشاءات المعدنية — متخصصة في الهنكارات، قواعد الطاقة الشمسية، الكرفانات والصهاريج منذ 2005 — حلب، سوريا.',
  keywords: 'حمشو, إنشاءات معدنية, هنكارات, خزانات, طاقة شمسية, كرفانات, حلب, سوريا',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        {/* Runs synchronously before first paint — prevents flash of unanimated content */}
        <script dangerouslySetInnerHTML={{ __html: `document.documentElement.classList.add('js-anim')` }} />
        {/* Critical font preload — eliminates FOUT on headings and buttons */}
        <link rel="preload" href="/fonts/HacenCasablanca-Heavy.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/HacenCasablanca-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        {/* Pexels CDN connection established early */}
        <link rel="preconnect" href="https://images.pexels.com" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
      </head>
      <body>
        <LangProvider>
          <SiteWrapper>{children}</SiteWrapper>
        </LangProvider>
      </body>
    </html>
  );
}
