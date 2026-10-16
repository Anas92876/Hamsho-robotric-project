'use client';
import { useState, useEffect } from 'react';
import { D } from '@/lib/data';
import { Icon, Badge } from './ui';

export default function Testimonials({ lang }: { lang: string }) {
  const isEn = lang === 'en';
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % D.testimonials.length), 7000);
    return () => clearInterval(t);
  }, []);
  const go = (delta: number) => setIdx((i) => (i + delta + D.testimonials.length) % D.testimonials.length);
  const cur = D.testimonials[idx];
  const sectors = [
    { name: isEn ? 'Humanitarian Org.' : 'منظّمات إنسانية', icon: 'heart-handshake' },
    { name: isEn ? 'Charities'         : 'جمعيات خيرية',    icon: 'hand-helping'   },
    { name: isEn ? 'Private sector'    : 'القطاع الخاص',    icon: 'building-2'     },
    { name: isEn ? 'Government'        : 'القطاع الحكومي',  icon: 'landmark'       },
    { name: isEn ? 'Factories'         : 'مصانع',            icon: 'factory'        },
    { name: isEn ? 'Fuel stations'     : 'محطّات الوقود',   icon: 'fuel'           },
  ];
  return (
    <section className="ham-testimonials" id="testimonials">
      <div className="ham-testimonials__pattern" aria-hidden="true" />
      <div className="ham-section-head">
        <span className="ham-eyebrow">{isEn ? 'Testimonials' : D.testimonialsHead.eyebrow}</span>
        <h2 className="ham-h2">{isEn ? D.en.sectionTitles.testimonials : D.testimonialsHead.title}</h2>
        <p className="ham-section-sub">{isEn ? D.en.sectionSubs.testimonials : D.testimonialsHead.subtitle}</p>
      </div>
      <div className="ham-testimonials__main">
        <div className="ham-quote">
          <Icon name="quote" size={40} color="var(--blue)" />
          <blockquote key={idx} className="ham-quote__text">{isEn ? cur.quoteEn : cur.quote}</blockquote>
          <div className="ham-quote__attrib">
            <div className="ham-quote__avatar"><Icon name="user" size={20} /></div>
            <div className="ham-quote__who">
              <div className="ham-quote__name">{isEn ? cur.authorEn : cur.author}</div>
              <div className="ham-quote__role">{isEn ? cur.roleEn : cur.role} · {isEn ? cur.cityEn : cur.city}</div>
            </div>
            <Badge tone="green">{isEn ? cur.serviceEn : cur.service}</Badge>
          </div>
        </div>
        <div className="ham-testimonials__controls">
          <button className="ham-arrow" onClick={() => go(-1)}><Icon name={isEn ? 'chevron-left' : 'chevron-right'} size={20} /></button>
          <div className="ham-dots">
            {D.testimonials.map((_, i) => <button key={i} className={`ham-dot${i === idx ? ' is-active' : ''}`} onClick={() => setIdx(i)} />)}
          </div>
          <button className="ham-arrow" onClick={() => go(1)}><Icon name={isEn ? 'chevron-right' : 'chevron-left'} size={20} /></button>
        </div>
      </div>
      <div className="ham-testimonials__logos">
        <div className="ham-logos-label">{isEn ? 'Trusted by' : 'موثوقون من قبل'}</div>
        <div className="ham-logos-row">
          {sectors.map((s, i) => (
            <div className="ham-sector" key={i}><Icon name={s.icon} size={20} /><span>{s.name}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
}
