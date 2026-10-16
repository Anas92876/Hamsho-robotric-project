'use client';
import { useLang } from '@/lib/lang';
import { D } from '@/lib/data';
import { Icon, Button } from '@/components/ui';

export default function IndustriesPage() {
  const { lang, openQuote } = useLang();
  const isEn = lang === 'en';

  return (
    <>
      {/* Page hero */}
      <div className="ham-page-hero">
        <div className="ham-page-hero__inner">
          <div className="ham-page-hero__eyebrow">{isEn ? 'Industries' : 'القطاعات'}</div>
          <h1 className="ham-page-hero__title">{isEn ? D.en.sectionTitles.industries : 'القطاعات التي نخدمها'}</h1>
          <p className="ham-page-hero__sub">
            {isEn ? D.en.sectionSubs.industries : 'أكثر من عشرين عاماً في خدمة العملاء عبر القطاعات الصناعية والإنسانية والحكومية في حلب.'}
          </p>
        </div>
      </div>

      {/* Industries grid */}
      <section className="ham-industries" id="industries">
        <div className="ham-industries__inner">
          <div className="ham-industries__grid">
            {D.industries.map((ind, i) => (
              <article className="ham-industry-card" key={ind.id}>
                <div className="ham-industry-card__head">
                  <span className="ham-industry-card__num">{String(i + 1).padStart(2, '0')}</span>
                  <div className="ham-industry-card__icon">
                    <Icon name={ind.icon} size={22} color="var(--blue)" />
                  </div>
                </div>
                <h2 className="ham-industry-card__title">{isEn ? ind.nameEn : ind.name}</h2>
                <p className="ham-industry-card__body">{isEn ? ind.bodyEn : ind.body}</p>
                <button className="ham-industry-card__cta" onClick={openQuote}>
                  <span>{isEn ? 'Request a quote' : 'اطلب عرض سعر'}</span>
                  <span className="ham-industry-card__cta-arrow">{isEn ? '→' : '←'}</span>
                </button>
              </article>
            ))}
          </div>

          <div className="ham-industries__cta">
            <p>{isEn ? 'Work in a sector not listed here?' : 'تعمل في قطاع غير مدرج هنا؟'}</p>
            <Button kind="primary" icon={isEn ? 'arrow-right' : 'arrow-left'} onClick={openQuote}>
              {isEn ? 'Tell us about your project' : 'حدّثنا عن مشروعك'}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
