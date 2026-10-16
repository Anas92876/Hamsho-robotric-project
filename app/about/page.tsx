'use client';
import { useLang } from '@/lib/lang';
import { D } from '@/lib/data';
import { Icon } from '@/components/ui';
import StatsStrip from '@/components/StatsStrip';

export default function AboutPage() {
  const { lang } = useLang();
  const isEn = lang === 'en';

  return (
    <>
      {/* Page hero */}
      <div className="ham-page-hero ham-page-hero--about">
        <div className="ham-page-hero__inner ham-page-hero__inner--split">
          <div className="ham-page-hero__text">
            <div className="ham-page-hero__eyebrow">{isEn ? 'About' : 'من نحن'}</div>
            <h1 className="ham-page-hero__title">{isEn ? D.brand.fullEn : D.brand.fullAr}</h1>
            <p className="ham-page-hero__sub">{isEn ? D.about.bodyEn : D.about.body}</p>
          </div>
          <div className="ham-page-hero__media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/about-hero.jpg"
              alt={isEn ? 'Hamsho engineer inside a steel hangar under construction' : 'مهندس حمشو داخل هنكار معدني قيد الإنشاء'}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </div>

      <StatsStrip lang={lang} />

      {/* Full company story */}
      <section className="ham-about" id="about">
        <div className="ham-about__inner">
          <div className="ham-section-head">
            <span className="ham-eyebrow ham-eyebrow--light">{isEn ? 'Our story' : 'قصّتنا'}</span>
            <h2 className="ham-h2 ham-h2--light">{isEn ? 'Built on trust since 2005' : 'نبنيها بثقة منذ 2005'}</h2>
          </div>
          <div className="ham-about__grid">
            <div>
              <p className="ham-about__body">{isEn ? D.about.bodyEn : D.about.body}</p>
              <p className="ham-about__body" style={{ marginTop: 24 }}>
                {isEn
                  ? 'Our two operating branches in Aleppo and its surroundings allow us to serve clients across northern Syria — from humanitarian organisations running relief operations to private factories requiring industrial-grade hangars.'
                  : 'يتيح لنا فرعا تشغيلنا في حلب ومحيطها خدمة عملاء في شمال سوريا — من المنظّمات الإنسانية التي تُدير عمليات الإغاثة إلى المصانع الخاصة التي تحتاج هنكارات بمعايير صناعية.'}
              </p>
            </div>
            <div className="ham-about__pillars">
              {D.about.pillars.map((p, i) => (
                <div className="ham-pillar" key={i}>
                  <div className="ham-pillar__title">
                    <Icon name={D.about.pillarIcons[i]} size={17} />
                    <span>{isEn ? p.titleEn : p.title}</span>
                  </div>
                  <p className="ham-pillar__body">{isEn ? p.bodyEn : p.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="ham-process">
            <div className="ham-process__label">
              <span>{isEn ? 'From study to handover' : 'من الدراسة إلى التسليم'}</span>
            </div>
            <div className="ham-process__steps">
              {D.process.map((step) => (
                <div className="ham-process__step" key={step.num}>
                  <div className="ham-process__dot">{step.num}</div>
                  <h4 className="ham-process__step-title">{isEn ? step.titleEn : step.title}</h4>
                  <p className="ham-process__step-sub">{isEn ? step.bodyEn : step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
