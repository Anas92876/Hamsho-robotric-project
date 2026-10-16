'use client';
import { D } from '@/lib/data';
import { Icon, Button } from './ui';

export default function ContactBlock({ onQuote, lang }: { onQuote: () => void; lang: string }) {
  const isEn = lang === 'en';
  const c = D.contact;
  const labels = isEn ? D.en.contactLabels : { sales: 'قسم المبيعات', mgmt: 'الإدارة', email: 'البريد الإلكتروني', wa: 'واتساب المبيعات', instant: 'للتواصل الفوري' };
  return (
    <section className="ham-contact" id="contact">
      <div className="ham-section-head">
        <span className="ham-eyebrow">{isEn ? 'Contact' : 'CONTACT — اتصل بنا'}</span>
        <h2 className="ham-h2">{isEn ? D.en.sectionTitles.contact : 'جاهزون للرد على استفساراتكم'}</h2>
        <p className="ham-section-sub">{isEn ? D.en.sectionSubs.contact : 'لأي استفسار أو طلب عرض سعر، يمكنكم التواصل مع فريقنا مباشرة عبر القنوات التالية.'}</p>
      </div>
      <div className="ham-contact__grid">
        <a className="ham-contact-card" href={`tel:${c.phoneSales.replace(/\s+/g, '')}`}>
          <div className="ham-contact-card__icon"><Icon name="phone" size={22} /></div>
          <div className="ham-contact-card__label">{labels.sales}</div>
          <div className="ham-contact-card__value" dir="ltr">{c.phoneSales}</div>
        </a>
        <a className="ham-contact-card" href={`tel:${c.phoneMgmt.replace(/\s+/g, '')}`}>
          <div className="ham-contact-card__icon"><Icon name="briefcase" size={22} /></div>
          <div className="ham-contact-card__label">{labels.mgmt}</div>
          <div className="ham-contact-card__value" dir="ltr">{c.phoneMgmt}</div>
        </a>
        <a className="ham-contact-card" href={`mailto:${c.email}`}>
          <div className="ham-contact-card__icon"><Icon name="mail" size={22} /></div>
          <div className="ham-contact-card__label">{labels.email}</div>
          <div className="ham-contact-card__value" dir="ltr">{c.email}</div>
        </a>
        <a className="ham-contact-card ham-contact-card--green" href={c.waSales} target="_blank" rel="noreferrer">
          <div className="ham-contact-card__icon"><Icon name="message-circle" size={22} /></div>
          <div className="ham-contact-card__label">{labels.wa}</div>
          <div className="ham-contact-card__value">{labels.instant}</div>
        </a>
      </div>
      <div className="ham-contact__bottom">
        <div><Icon name="map-pin" size={18} color="var(--brand-blue)" /><span>{isEn ? c.addressEn : c.address}</span></div>
        <div><Icon name="clock" size={18} color="var(--brand-blue)" /><span>{isEn ? c.hoursEn : c.hours}</span></div>
        <Button kind="primary" icon={isEn ? 'arrow-right' : 'arrow-left'} onClick={onQuote}>{isEn ? D.en.buttons.quote : 'اطلب عرض سعر'}</Button>
      </div>
    </section>
  );
}
