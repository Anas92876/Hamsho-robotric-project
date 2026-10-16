'use client';
import { useLang } from '@/lib/lang';
import { usePathname } from 'next/navigation';
import Nav from './Nav';
import Footer from './Footer';
import QuoteModal from './QuoteModal';
import ScrollAnimations from './ScrollAnimations';
import { Icon } from './ui';
import { D } from '@/lib/data';
import type { ReactNode } from 'react';

export default function SiteWrapper({ children }: { children: ReactNode }) {
  const { lang, quoteOpen, closeQuote } = useLang();
  const pathname = usePathname();
  // Hide the floating WhatsApp button on the contact page — the WhatsApp card there already does the same action.
  const showFab = pathname !== '/contact';
  return (
    <div className="ham-page">
      <Nav />
      <main>{children}</main>
      <Footer />
      {showFab && (
        <a className="ham-fab" href={D.contact.waSales} target="_blank" rel="noreferrer">
          <Icon name="message-circle" size={18} />
          {lang === 'en' ? 'WhatsApp sales' : 'واتساب المبيعات'}
        </a>
      )}
      {quoteOpen && <QuoteModal onClose={closeQuote} lang={lang} />}
      <ScrollAnimations lang={lang} />
    </div>
  );
}
