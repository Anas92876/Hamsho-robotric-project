'use client';
import { D } from '@/lib/data';

export default function ServicesGrid({ lang }: { lang: string }) {
  const isEn = lang === 'en';
  return (
    <section className="ham-services" id="services">
      <div className="ham-services__inner">
        <div className="ham-section-head">
          <span className="ham-eyebrow">{isEn ? 'Capabilities' : 'SERVICES — خدماتنا'}</span>
          <h2 className="ham-h2">{isEn ? D.en.sectionTitles.services : 'ما الذي ننفّذه'}</h2>
          <p className="ham-section-sub">{isEn ? D.en.sectionSubs.services : 'سبعة تخصّصات — من الدراسة الهندسية حتى تسليم الهياكل المنجزة.'}</p>
        </div>
        <div className="ham-svc-manifest">
          {D.services.map((s, i) => (
            <article className="ham-svc-row" key={s.title}>
              <span className="ham-svc-row__num">{String(i + 1).padStart(2, '0')}</span>
              <div className="ham-svc-row__content">
                <h3 className="ham-svc-row__title">{isEn ? s.titleEn : s.title}</h3>
                <p className="ham-svc-row__desc">{isEn ? s.bodyEn : s.body}</p>
              </div>
              <span className="ham-svc-row__tag">{isEn ? s.tagEn : s.tag}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
