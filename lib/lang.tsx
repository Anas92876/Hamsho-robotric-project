'use client';
import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type LangCtx = {
  lang: string;
  toggleLang: () => void;
  quoteOpen: boolean;
  openQuote: () => void;
  closeQuote: () => void;
};

const Ctx = createContext<LangCtx>({
  lang: 'ar',
  toggleLang: () => {},
  quoteOpen: false,
  openQuote: () => {},
  closeQuote: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState('ar');
  const [quoteOpen, setQuoteOpen] = useState(false);

  const toggleLang = () =>
    setLang((l) => {
      const next = l === 'ar' ? 'en' : 'ar';
      try { localStorage.setItem('ham-lang', next); } catch {}
      return next;
    });

  // Restore the visitor's saved language (SSR always renders Arabic first)
  useEffect(() => {
    try {
      if (localStorage.getItem('ham-lang') === 'en') setLang('en');
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  return (
    <Ctx.Provider value={{ lang, toggleLang, quoteOpen, openQuote: () => setQuoteOpen(true), closeQuote: () => setQuoteOpen(false) }}>
      {children}
    </Ctx.Provider>
  );
}

export const useLang = () => useContext(Ctx);
