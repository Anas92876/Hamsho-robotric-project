'use client';
import { D } from '@/lib/data';
import { Icon } from './ui';

export default function AboutBlock({ lang }: { lang: string }) {
  const isEn = lang === 'en';
  return (
    <section className="ham-about" id="about">
      <div className="ham-about__inner">
        <div className="ham-section-head">
          <span className="ham-eyebrow ham-eyebrow--light">{isEn ? 'About' : D.brand.fullAr}</span>
          <h2 className="ham-h2 ham-h2--light">{isEn ? D.en.sectionTitles.about : D.about.title}</h2>
        </div>
        <div className="ham-about__grid">
          <p className="ham-about__body">{isEn ? D.about.bodyEn : D.about.body}</p>
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
  );
}
