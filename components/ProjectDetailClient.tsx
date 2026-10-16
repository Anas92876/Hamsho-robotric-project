'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useLang } from '@/lib/lang';
import { D } from '@/lib/data';
import { projects, projectCategories } from '@/lib/projects';
import { Button, Icon } from './ui';

// Arabic copy contains English terms in brackets, e.g. "(Steel Truss Frames)".
// Isolating them keeps the brackets and word order intact when a line wraps.
function Bidi({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\([A-Za-z0-9][^)]*\))/g).map((part, i) =>
        i % 2 ? <bdi key={i} dir="ltr">{part}</bdi> : part,
      )}
    </>
  );
}

export default function ProjectDetailClient({ slug }: { slug: string }) {
  const { lang, openQuote } = useLang();
  const isEn = lang === 'en';

  const project = projects.find((p) => p.slug === slug);
  const images = project?.images ?? [];

  const [lightbox, setLightbox] = useState<number | null>(null);
  const close = useCallback(() => setLightbox(null), []);
  const step = useCallback(
    (d: number) => setLightbox((v) => (v === null ? v : (v + d + images.length) % images.length)),
    [images.length],
  );
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      // In RTL the "next" image sits to the left
      if (e.key === 'ArrowLeft') step(isEn ? -1 : 1);
      if (e.key === 'ArrowRight') step(isEn ? 1 : -1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, close, step, isEn]);

  // Swipe between images on touch screens
  const touchX = useRef<number | null>(null);

  if (!project) notFound();

  const category = projectCategories.find((c) => c.id === project.category)!;
  const catName = isEn ? category.titleEn : category.title;
  const title = isEn ? project.titleEn : project.title;

  const siblings = projects.filter((p) => p.category === project.category);
  const pos = siblings.findIndex((p) => p.slug === project.slug);
  const prev = siblings[(pos - 1 + siblings.length) % siblings.length];
  const next = siblings[(pos + 1) % siblings.length];
  const related = siblings.filter((p) => p.slug !== project.slug).slice(0, 3);

  const mountLabel = project.mount
    ? project.mount === 'tracking'
      ? (isEn ? 'Tracking mounts' : 'قواعد متحركة')
      : (isEn ? 'Fixed mounts' : 'قواعد ثابتة')
    : null;

  return (
    <>
      {/* ── Cinematic hero ───────────────────────────── */}
      <header className="ham-pjd-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="ham-pjd-hero__bg" src={images[0].src} alt="" fetchPriority="high" decoding="async" />
        <div className="ham-pjd-hero__inner">
          <nav className="ham-pjd-hero__crumb" aria-label={isEn ? 'Breadcrumb' : 'مسار التنقل'}>
            <Link href="/projects">{isEn ? 'Projects' : 'المشاريع'}</Link>
            <span aria-hidden="true">/</span>
            <span>{catName}</span>
          </nav>
          <div className="ham-pjd-hero__chips">
            <span className="ham-pj-chip">{catName}</span>
            {mountLabel && <span className="ham-pj-chip ham-pj-chip--glass">{mountLabel}</span>}
            <span className="ham-pj-chip ham-pj-chip--glass ham-pj-chip--mono">{project.code}</span>
          </div>
          <h1 className="ham-pjd-hero__title">{title}</h1>
          <button type="button" className="ham-pjd-hero__photos" onClick={() => setLightbox(0)}>
            <Icon name="eye" size={16} />
            {isEn ? `View ${images.length} photos` : `عرض الصور (${images.length})`}
          </button>
        </div>
      </header>

      {/* ── Facts strip ──────────────────────────────── */}
      <div className="ham-pjd-facts">
        <div className="ham-pjd-facts__inner">
          <div><span>{isEn ? 'Project code' : 'كود المشروع'}</span><strong className="is-mono">{project.code}</strong></div>
          <div><span>{isEn ? 'Sector' : 'القطاع'}</span><strong>{catName}</strong></div>
          {mountLabel && <div><span>{isEn ? 'System' : 'النظام'}</span><strong>{mountLabel}</strong></div>}
          <div><span>{isEn ? 'Photos' : 'الصور'}</span><strong>{images.length}</strong></div>
        </div>
      </div>

      <div className="ham-pjd">
        <div className="ham-pjd__inner">
          {/* ── Story + highlights | sticky CTA ─────── */}
          <div className="ham-pjd__layout">
            <div className="ham-pjd__main">
              <section className="ham-pjd__about">
                <span className="ham-pjd__kicker">{isEn ? 'About the project' : 'عن المشروع'}</span>
                {(isEn ? project.bodyEn : project.body).map((para, i) => (
                  <p key={i} className={i === 0 ? 'is-lead' : undefined}>{isEn ? para : <Bidi text={para} />}</p>
                ))}
              </section>

              <section className="ham-pjd__features">
                <span className="ham-pjd__kicker">{isEn ? 'Technical highlights' : 'المميزات والتفاصيل الفنية'}</span>
                <ol className="ham-pjd-feats">
                  {project.features.map((f, i) => (
                    <li key={i} className="ham-pjd-feat">
                      <span className="ham-pjd-feat__num">{String(i + 1).padStart(2, '0')}</span>
                      <div>
                        <h3>{isEn ? f.tEn : <Bidi text={f.t} />}</h3>
                        <p>{isEn ? f.dEn : <Bidi text={f.d} />}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            </div>

            <aside className="ham-pjd__aside">
              <div className="ham-pjd-cta">
                <span className="ham-pjd-cta__badge"><Icon name="hard-hat" size={16} /> {isEn ? 'Similar project?' : 'مشروع مشابه؟'}</span>
                <h2>{isEn ? 'We can build this for you' : 'منقدر ننفّذ لك مثله'}</h2>
                <p>
                  {isEn
                    ? 'Tell us about your site and requirements — our engineering office will prepare a study and quote.'
                    : 'احكِ لنا عن موقعك ومتطلباتك — ومكتبنا الهندسي بيجهّز لك الدراسة وعرض السعر.'}
                </p>
                <Button kind="primary" icon={isEn ? 'arrow-right' : 'arrow-left'} onClick={openQuote}>
                  {isEn ? 'Request a quote' : 'اطلب عرض سعر'}
                </Button>
                <a className="ham-pjd-cta__wa" href={D.contact.waSales} target="_blank" rel="noreferrer">
                  <Icon name="message-circle" size={17} />
                  {isEn ? 'Chat on WhatsApp' : 'تواصل عبر واتساب'}
                </a>
              </div>
            </aside>
          </div>

          {/* ── Gallery (masonry keeps every photo's real proportions) ── */}
          <section className="ham-pjd__gallery">
            <div className="ham-pjd__sec-head">
              <h2>{isEn ? 'Project gallery' : 'معرض صور المشروع'}</h2>
              <span>{String(images.length).padStart(2, '0')}</span>
            </div>
            <div className="ham-pjd-masonry">
              {images.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  className="ham-pjd-masonry__item"
                  onClick={() => setLightbox(i)}
                  aria-label={`${title} — ${i + 1}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.src} alt={`${title} — ${i + 1}`} width={img.w} height={img.h} loading="lazy" decoding="async" />
                  <span className="ham-pjd-masonry__zoom"><Icon name="search" size={18} /></span>
                </button>
              ))}
            </div>
          </section>

          {/* ── Prev / next within the same sector ── */}
          {siblings.length > 1 && (
            <nav className="ham-pjd-nav" aria-label={isEn ? 'More projects' : 'مشاريع أخرى'}>
              <Link href={`/projects/${prev.slug}`} className="ham-pjd-nav__link">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={prev.images[0].src} alt="" loading="lazy" decoding="async" />
                <span className="ham-pjd-nav__txt">
                  <small>{isEn ? '← Previous project' : 'المشروع السابق →'}</small>
                  <strong>{isEn ? prev.titleEn : prev.title}</strong>
                </span>
              </Link>
              <Link href={`/projects/${next.slug}`} className="ham-pjd-nav__link ham-pjd-nav__link--next">
                <span className="ham-pjd-nav__txt">
                  <small>{isEn ? 'Next project →' : '← المشروع التالي'}</small>
                  <strong>{isEn ? next.titleEn : next.title}</strong>
                </span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={next.images[0].src} alt="" loading="lazy" decoding="async" />
              </Link>
            </nav>
          )}

          {/* ── Related ─────────────────────────────── */}
          {related.length > 0 && (
            <section className="ham-pjd__related">
              <div className="ham-pjd__sec-head">
                <h2>{isEn ? `More in ${category.titleEn}` : `المزيد من ${category.title}`}</h2>
                <Link href="/projects" className="ham-pjd__all">
                  {isEn ? 'All projects' : 'كل المشاريع'} <Icon name={isEn ? 'arrow-right' : 'arrow-left'} size={15} />
                </Link>
              </div>
              <div className="ham-pjd-related">
                {related.map((p) => (
                  <Link key={p.slug} href={`/projects/${p.slug}`} className="ham-pj-card">
                    <div className="ham-pj-card__media">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.images[0].src} alt={isEn ? p.titleEn : p.title} loading="lazy" decoding="async" />
                    </div>
                    <div className="ham-pj-card__top">
                      <span className="ham-pj-chip ham-pj-chip--glass">{p.code}</span>
                    </div>
                    <div className="ham-pj-card__body">
                      <h3 className="ham-pj-card__title">{isEn ? p.titleEn : p.title}</h3>
                      <span className="ham-pj-card__go">
                        {isEn ? 'View project' : 'عرض المشروع'}
                        <Icon name={isEn ? 'arrow-right' : 'arrow-left'} size={16} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* ── Lightbox with thumbnail strip ───────────── */}
      {lightbox !== null && (
        <div
          className="ham-pjd-lb"
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={close}
          onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 50) step((dx < 0) === isEn ? 1 : -1);
            touchX.current = null;
          }}
        >
          <div className="ham-pjd-lb__top" onClick={(e) => e.stopPropagation()}>
            <span className="ham-pjd-lb__title">{title}</span>
            <span className="ham-pjd-lb__count">{lightbox + 1} / {images.length}</span>
            <button type="button" className="ham-pjd-lb__btn" onClick={close} aria-label={isEn ? 'Close' : 'إغلاق'}>
              <Icon name="x" size={20} />
            </button>
          </div>
          <div className="ham-pjd-lb__stage">
            <button type="button" className="ham-pjd-lb__btn ham-pjd-lb__arrow ham-pjd-lb__arrow--prev" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label={isEn ? 'Previous' : 'السابق'}>
              <Icon name={isEn ? 'chevron-left' : 'chevron-right'} size={24} />
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img key={lightbox} className="ham-pjd-lb__img" src={images[lightbox].src} alt={`${title} — ${lightbox + 1}`} onClick={(e) => e.stopPropagation()} />
            <button type="button" className="ham-pjd-lb__btn ham-pjd-lb__arrow ham-pjd-lb__arrow--next" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label={isEn ? 'Next' : 'التالي'}>
              <Icon name={isEn ? 'chevron-right' : 'chevron-left'} size={24} />
            </button>
          </div>
          <div className="ham-pjd-lb__thumbs" onClick={(e) => e.stopPropagation()}>
            {images.map((img, i) => (
              <button key={img.src} type="button" className={i === lightbox ? 'is-on' : ''} onClick={() => setLightbox(i)} aria-label={`${i + 1}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.src} alt="" loading="lazy" decoding="async" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
