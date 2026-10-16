'use client';
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useLang } from '@/lib/lang';
import { projects, projectCategories, type ProjectCategory } from '@/lib/projects';
import { Button, Icon } from '@/components/ui';

const PAGE = 15;
// Hand-picked covers for the hero showcase
const FEATURED = ['ham-slr-008', 'ham-hng-004', 'ham-spt-003', 'ham-crv-016', 'ham-tnk-007'];
const totalPhotos = projects.reduce((n, p) => n + p.images.length, 0);

export default function ProjectsPage() {
  const { lang, openQuote } = useLang();
  const isEn = lang === 'en';

  const [cat, setCat] = useState<ProjectCategory | 'all'>('all');
  const [mount, setMount] = useState<'all' | 'fixed' | 'tracking'>('all');
  const [query, setQuery] = useState('');
  const [shown, setShown] = useState(PAGE);

  const catName = (id: ProjectCategory) => {
    const c = projectCategories.find((x) => x.id === id)!;
    return isEn ? c.titleEn : c.title;
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      if (cat !== 'all' && p.category !== cat) return false;
      if (cat === 'solar' && mount !== 'all' && p.mount !== mount) return false;
      if (!q) return true;
      return [p.title, p.titleEn, p.code].some((s) => s.toLowerCase().includes(q));
    });
  }, [cat, mount, query]);

  // Reset paging whenever the filter changes
  useEffect(() => setShown(PAGE), [cat, mount, query]);

  const pick = (id: ProjectCategory | 'all') => {
    setCat(id);
    setMount('all');
  };

  // Hero showcase — cycles through featured covers
  const featured = FEATURED.map((s) => projects.find((p) => p.slug === s)!).filter(Boolean);
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % featured.length), 5000);
    return () => clearInterval(t);
  }, [featured.length]);
  const current = featured[slide];

  const visible = filtered.slice(0, shown);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="ham-pj-hero">
        <div className="ham-pj-hero__inner">
          <div className="ham-pj-hero__text">
            <span className="ham-pj-hero__eyebrow">{isEn ? 'Portfolio' : 'PORTFOLIO — أعمالنا'}</span>
            <h1 className="ham-pj-hero__title">
              {isEn ? <>Built on site, <em>proven in the field.</em></> : <>مشاريع نفّذناها <em>على أرض الواقع</em></>}
            </h1>
            <p className="ham-pj-hero__sub">
              {isEn
                ? 'From solar plants and industrial hangars to prefabricated villages, tanks and ironwork — a record of work our teams designed, fabricated and installed across Syria.'
                : 'من محطات الطاقة الشمسية والهناجر الصناعية إلى القرى الجاهزة والخزانات وأعمال المنجور — سجلّ لأعمال صمّمتها فرقنا وصنّعتها وركّبتها في مختلف المناطق السورية.'}
            </p>
            <dl className="ham-pj-hero__stats">
              <div><dt>{projects.length}</dt><dd>{isEn ? 'Projects' : 'مشروع منجز'}</dd></div>
              <div><dt>{projectCategories.length}</dt><dd>{isEn ? 'Sectors' : 'قطاعات عمل'}</dd></div>
              <div><dt>{totalPhotos}+</dt><dd>{isEn ? 'Site photos' : 'صورة من المواقع'}</dd></div>
            </dl>
          </div>

          {current && (
            <div className="ham-pj-hero__show">
              {featured.map((p, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={p.slug}
                  src={p.images[0].src}
                  alt=""
                  className={i === slide ? 'is-on' : ''}
                  fetchPriority={i === 0 ? 'high' : 'low'}
                  decoding="async"
                />
              ))}
              <Link href={`/projects/${current.slug}`} className="ham-pj-hero__show-cap">
                <span className="ham-pj-chip">{catName(current.category)}</span>
                <strong>{isEn ? current.titleEn : current.title}</strong>
              </Link>
              <div className="ham-pj-hero__dots">
                {featured.map((p, i) => (
                  <button
                    key={p.slug}
                    type="button"
                    className={i === slide ? 'is-on' : ''}
                    onClick={() => setSlide(i)}
                    aria-label={`${i + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Filter bar ───────────────────────────────── */}
      <div className="ham-pj-bar">
        <div className="ham-pj-bar__inner">
          <div className="ham-pj-bar__cats" role="tablist" aria-label={isEn ? 'Sectors' : 'القطاعات'}>
            <button type="button" role="tab" aria-selected={cat === 'all'} className={`ham-pj-tab${cat === 'all' ? ' is-on' : ''}`} onClick={() => pick('all')}>
              {isEn ? 'All projects' : 'كل المشاريع'} <span>{projects.length}</span>
            </button>
            {projectCategories.map((c) => (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={cat === c.id}
                className={`ham-pj-tab${cat === c.id ? ' is-on' : ''}`}
                onClick={() => pick(c.id)}
              >
                {isEn ? c.titleEn : c.title} <span>{projects.filter((p) => p.category === c.id).length}</span>
              </button>
            ))}
          </div>
          <label className="ham-pj-search">
            <Icon name="search" size={17} />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={isEn ? 'Search by name or code…' : 'ابحث بالاسم أو الكود…'}
              aria-label={isEn ? 'Search projects' : 'ابحث في المشاريع'}
            />
          </label>
        </div>
      </div>

      {/* ── Grid ─────────────────────────────────────── */}
      <section className="ham-pj">
        <div className="ham-pj__inner">
          <div className="ham-pj__head">
            <div>
              <h2 className="ham-pj__title">{cat === 'all' ? (isEn ? 'All projects' : 'جميع المشاريع') : catName(cat)}</h2>
              <p className="ham-pj__count">
                {isEn ? `${filtered.length} projects` : `${filtered.length} مشروع`}
              </p>
            </div>
            {cat === 'solar' && (
              <div className="ham-pj-seg" role="group" aria-label={isEn ? 'Mount type' : 'نوع القواعد'}>
                {([
                  ['all', 'الكل', 'All'],
                  ['fixed', 'قواعد ثابتة', 'Fixed mounts'],
                  ['tracking', 'قواعد متحركة', 'Tracking mounts'],
                ] as const).map(([id, ar, en]) => (
                  <button key={id} type="button" className={mount === id ? 'is-on' : ''} onClick={() => setMount(id)}>
                    {isEn ? en : ar}
                  </button>
                ))}
              </div>
            )}
          </div>

          {visible.length > 0 ? (
            <div className="ham-pj__grid" key={`${cat}-${mount}-${query}`}>
              {visible.map((p, i) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="ham-pj-card"
                  style={{ ['--i' as string]: i % PAGE }}
                >
                  <div className="ham-pj-card__media">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.images[0].src} alt={isEn ? p.titleEn : p.title} loading={i < 4 ? 'eager' : 'lazy'} decoding="async" />
                  </div>
                  <div className="ham-pj-card__top">
                    <span className="ham-pj-chip ham-pj-chip--glass">{p.code}</span>
                    <span className="ham-pj-chip ham-pj-chip--glass">
                      <Icon name="eye" size={13} /> {p.images.length}
                    </span>
                  </div>
                  <div className="ham-pj-card__body">
                    <span className="ham-pj-card__cat">{catName(p.category)}</span>
                    <h3 className="ham-pj-card__title">{isEn ? p.titleEn : p.title}</h3>
                    <span className="ham-pj-card__go">
                      {isEn ? 'View project' : 'عرض المشروع'}
                      <Icon name={isEn ? 'arrow-right' : 'arrow-left'} size={16} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="ham-pj__empty">
              <Icon name="search" size={36} />
              <p>{isEn ? 'No projects match your search.' : 'لا توجد مشاريع مطابقة لبحثك.'}</p>
            </div>
          )}

          {filtered.length > shown && (
            <div className="ham-pj__more">
              <button type="button" className="ham-pj-more" onClick={() => setShown((n) => n + PAGE)}>
                {isEn ? 'Show more projects' : 'عرض المزيد من المشاريع'}
                <span>{filtered.length - shown}</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="ham-pj-cta">
        <div className="ham-pj-cta__inner">
          <div>
            <h2>{isEn ? 'Have a project in mind?' : 'عندك مشروع بفكرك؟'}</h2>
            <p>
              {isEn
                ? 'Our engineering office prepares the study, drawings and quote — then our workshops build it.'
                : 'مكتبنا الهندسي يجهّز الدراسة والمخططات وعرض السعر — ومشاغلنا تتولّى التنفيذ.'}
            </p>
          </div>
          <Button kind="primary" icon={isEn ? 'arrow-right' : 'arrow-left'} onClick={openQuote}>
            {isEn ? 'Request a quote' : 'اطلب عرض سعر'}
          </Button>
        </div>
      </section>
    </>
  );
}
