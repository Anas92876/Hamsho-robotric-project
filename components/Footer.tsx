'use client';
import Link from 'next/link';
import Image from 'next/image';
import { D } from '@/lib/data';
import { useLang } from '@/lib/lang';

export default function Footer() {
  const { lang } = useLang();
  const isEn = lang === 'en';
  return (
    <footer className="ham-footer">
      <div className="ham-footer__rule" aria-hidden="true" />
      <div className="ham-footer__inner">
        <div className="ham-footer__brand">
          <div className="ham-footer__logo">
            <Image src="/logo.png" alt="" width={56} height={56} style={{ height: 56, width: 'auto' }} />
            <div>
              <div className="ham-footer__name">{isEn ? D.brand.fullEn : D.brand.fullAr}</div>
              <div className="ham-footer__tag">{isEn ? 'Since 2005 — Aleppo, Tawameh' : 'منذ 2005 — حلب، التوامة'}</div>
            </div>
          </div>
          <p className="ham-footer__about">{isEn ? D.en.footer.about : 'متخصّصون في الدراسة والتصميم وتنفيذ الهياكل المعدنية، مع التزام بمعايير الجودة والأمان في كل مشروع.'}</p>
        </div>
        <div className="ham-footer__col">
          <h5>{isEn ? D.en.footer.company : 'الشركة'}</h5>
          {D.nav.map((l) => <Link key={l.id} href={l.href}>{isEn ? l.labelEn : l.label}</Link>)}
        </div>
        <div className="ham-footer__col">
          <h5>{isEn ? D.en.footer.services : 'الخدمات'}</h5>
          {D.services.slice(0, 5).map((s) => (
            <Link key={s.slug} href={`/services#${s.slug}`}>{isEn ? s.titleEn : s.title}</Link>
          ))}
        </div>
        <div className="ham-footer__col">
          <h5>{isEn ? D.en.footer.contact : 'تواصل'}</h5>
          <a href={`tel:${D.contact.phoneSales.replace(/\s+/g, '')}`} dir="ltr">{D.contact.phoneSales}</a>
          <a href={`tel:${D.contact.phoneMgmt.replace(/\s+/g, '')}`} dir="ltr">{D.contact.phoneMgmt}</a>
          <a href={`mailto:${D.contact.email}`} dir="ltr">{D.contact.email}</a>
          <span>{isEn ? D.contact.hoursEn : D.contact.hours}</span>
        </div>
      </div>
      <div className="ham-footer__bottom">
        <span>© 2026 {isEn ? D.brand.fullEn : D.brand.fullAr}. {isEn ? D.en.footer.rights : 'جميع الحقوق محفوظة.'}</span>
        <span>{isEn ? D.en.footer.privacy : 'سياسة الخصوصية · شروط الاستخدام'}</span>
      </div>
    </footer>
  );
}
