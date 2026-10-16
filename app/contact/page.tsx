'use client';
import { useLang } from '@/lib/lang';
import { D } from '@/lib/data';
import { Icon } from '@/components/ui';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  const { lang } = useLang();
  const isEn = lang === 'en';

  const cards = [
    {
      icon: 'phone',
      label: isEn ? 'Sales department' : 'قسم المبيعات',
      value: D.contact.phoneSales,
      href: `tel:${D.contact.phoneSales.replace(/\s/g, '')}`,
      tag: 'SALES',
      ltr: true,
    },
    {
      icon: 'phone',
      label: isEn ? 'Management' : 'الإدارة',
      value: D.contact.phoneMgmt,
      href: `tel:${D.contact.phoneMgmt.replace(/\s/g, '')}`,
      tag: 'MGMT',
      ltr: true,
    },
    {
      icon: 'mail',
      label: isEn ? 'Email' : 'البريد الإلكتروني',
      value: D.contact.email,
      href: `mailto:${D.contact.email}`,
      tag: 'EMAIL',
      ltr: true,
    },
  ];

  return (
    <>
      {/* Page hero */}
      <div className="ham-page-hero">
        <div className="ham-page-hero__inner">
          <div className="ham-page-hero__eyebrow">{isEn ? 'Contact' : 'تواصل معنا'}</div>
          <h1 className="ham-page-hero__title">
            {isEn ? D.en.sectionTitles.contact : 'جاهزون للإجابة على أسئلتكم'}
          </h1>
          <p className="ham-page-hero__sub">
            {isEn ? D.en.sectionSubs.contact : 'للاستفسار أو طلب عرض سعر، تواصل مع فريقنا مباشرة عبر القنوات أدناه.'}
          </p>
        </div>
      </div>

      <section className="ham-contact-page">
        <div className="ham-contact-page__inner">
          {/* Contact cards grid */}
          <div className="ham-contact-page__cards">
            {cards.map((c) => (
              <a key={c.tag} href={c.href} target={c.tag === 'WHATSAPP' || c.tag === 'EMAIL' ? '_blank' : undefined} rel="noreferrer" className="ham-contact-card">
                <span className="ham-contact-card__tag">{c.tag}</span>
                <div className="ham-contact-card__icon">
                  <Icon name={c.icon} size={20} color="var(--blue)" />
                </div>
                <span className="ham-contact-card__label">{c.label}</span>
                <span className="ham-contact-card__value" dir={c.ltr ? 'ltr' : undefined}>{c.value}</span>
              </a>
            ))}
          </div>

          <div className="ham-contact-page__body">
            {/* Quote form */}
            <div className="ham-contact-page__form">
              <ContactForm lang={lang} />
            </div>

            {/* Info sidebar */}
            <div className="ham-contact-page__info">
              <div className="ham-contact-info-block">
                <span className="ham-contact-info-block__label">
                  <Icon name="map-pin" size={13} color="var(--blue)" />
                  {isEn ? 'Address' : 'العنوان'}
                </span>
                <p className="ham-contact-info-block__val">
                  {isEn ? D.contact.addressEn : D.contact.address}
                </p>
              </div>
              <div className="ham-contact-info-block">
                <span className="ham-contact-info-block__label">
                  <Icon name="clock" size={13} color="var(--blue)" />
                  {isEn ? 'Working hours' : 'ساعات العمل'}
                </span>
                <p className="ham-contact-info-block__val">
                  {isEn ? D.contact.hoursEn : D.contact.hours}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
