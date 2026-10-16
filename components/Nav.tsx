'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';
import { D } from '@/lib/data';
import { Icon, Button } from './ui';
import { useLang } from '@/lib/lang';

export default function Nav() {
  const { lang, toggleLang, openQuote } = useLang();
  const isEn = lang === 'en';
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const overlay = menuOpen ? (
    <div className="ham-mobile-overlay" onClick={() => setMenuOpen(false)}>
      <div className="ham-mobile-menu" onClick={(e) => e.stopPropagation()}>
        <button className="ham-mobile-close" onClick={() => setMenuOpen(false)}>
          <Icon name="x" size={28} />
        </button>
        <nav className="ham-mobile-links">
          {D.nav.map((l) => (
            <Link key={l.id} href={l.href} className={`ham-mobile-link${pathname === l.href ? ' is-active' : ''}`} onClick={() => setMenuOpen(false)}>
              {isEn ? l.labelEn : l.label}
            </Link>
          ))}
        </nav>
        <div className="ham-mobile-menu__footer">
          <button className="ham-lang" onClick={toggleLang}><Icon name="globe" size={14} /><span>{isEn ? 'AR' : 'EN'}</span></button>
          <Button kind="primary" icon={isEn ? 'arrow-right' : 'arrow-left'} onClick={() => { openQuote(); setMenuOpen(false); }}>{isEn ? D.en.buttons.quote : 'اطلب عرض سعر'}</Button>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <header className="ham-nav">
        <div className="ham-nav__inner">
          <Link href="/" className="ham-brand">
            <Image src="/logo.png" alt="شعار حمشو" width={100} height={100} style={{ height: 100, width: 'auto' }} />
          </Link>
          <nav className="ham-links">
            {D.nav.map((l) => (
              <Link key={l.id} href={l.href} className={pathname === l.href ? 'is-active' : ''}>
                {isEn ? l.labelEn : l.label}
              </Link>
            ))}
          </nav>
          <div className="ham-nav__actions">
            <button className="ham-lang" onClick={toggleLang}><Icon name="globe" size={14} /><span>{isEn ? 'AR' : 'EN'}</span></button>
            <Button kind="primary" icon={isEn ? 'arrow-right' : 'arrow-left'} onClick={openQuote}>{isEn ? D.en.buttons.quote : 'اطلب عرض سعر'}</Button>
          </div>
          <button className="ham-burger" onClick={() => setMenuOpen((o) => !o)} aria-label="القائمة">
            <Icon name={menuOpen ? 'x' : 'menu'} size={26} />
          </button>
        </div>
      </header>
      {typeof document !== 'undefined' && createPortal(overlay, document.body)}
    </>
  );
}
