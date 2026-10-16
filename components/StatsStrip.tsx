'use client';
import { D } from '@/lib/data';

export default function StatsStrip({ lang }: { lang: string }) {
  const items = lang === 'en' ? D.en.stats : D.stats;
  return (
    <section className="ham-stats">
      <div className="ham-stats__inner">
        {items.map((s, i) => (
          <div className="ham-stat" key={i}>
            {s.cat && <span className="ham-stat__cat">{s.cat}</span>}
            <div className="ham-stat__value">{s.value}{s.unit && <span className="ham-stat__unit"> {s.unit}</span>}</div>
            <div className="ham-stat__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
