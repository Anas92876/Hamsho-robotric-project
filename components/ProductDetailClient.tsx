'use client';
import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useLang } from '@/lib/lang';
import { D } from '@/lib/data';
import { Button, Icon } from './ui';

export default function ProductDetailClient({ slug }: { slug: string }) {
  const { lang, openQuote } = useLang();
  const isEn = lang === 'en';

  const product = D.products.find((p) => p.id === slug);
  if (!product) notFound();

  const name = isEn ? product.titleEn : product.title;
  const category = D.productCategories.find((c) => c.id === product.category);
  const related = D.products.filter((p) => p.category === product.category && p.id !== product.id);

  // Studio images for the top viewer; model products fall back to their first design.
  const views = product.renders.length ? product.renders : product.models.slice(0, 1).map((m) => m.render);
  const [active, setActive] = useState(0);

  // Every image on the page, in display order, so the lightbox can step through all of them.
  const modelImgs = product.models.flatMap((m) => [m.render, m.photo]);
  const all = [...views, ...modelImgs, ...product.photos];
  const modelsStart = views.length;
  const photosStart = modelsStart + modelImgs.length;

  const [lightbox, setLightbox] = useState<number | null>(null);
  const close = useCallback(() => setLightbox(null), []);
  const step = useCallback(
    (d: number) => setLightbox((v) => (v === null ? v : (v + d + all.length) % all.length)),
    [all.length],
  );
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, close, step]);

  return (
    <>
      {/* Hero — clean, no background image */}
      <div className="ham-page-hero ham-prod-hero">
        <div className="ham-page-hero__inner">
          <div className="ham-prod-hero__crumb">
            <Link href="/products">{isEn ? '← All products' : 'جميع المنتجات ←'}</Link>
          </div>
          <div className="ham-page-hero__eyebrow">{category ? (isEn ? category.titleEn : category.title) : (isEn ? 'Product' : 'منتج')}</div>
          <h1 className="ham-page-hero__title">{name}</h1>
          <p className="ham-page-hero__sub">{isEn ? product.taglineEn : product.tagline}</p>
        </div>
      </div>

      <div className="ham-prod-detail">
        <div className="ham-prod-detail__body">
          <div className="ham-prod-detail__top">
            {/* Product images viewer */}
            {views.length > 0 && (
              <div className="ham-prod-viewer">
                <button type="button" className="ham-prod-viewer__main" onClick={() => setLightbox(active)} aria-label={isEn ? 'Enlarge image' : 'تكبير الصورة'}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={views[active]} alt={name} fetchPriority="high" decoding="async" />
                </button>
                {views.length > 1 && (
                  <div className="ham-prod-viewer__thumbs">
                    {views.map((src, i) => (
                      <button
                        type="button"
                        key={src}
                        className={`ham-prod-viewer__thumb${i === active ? ' is-active' : ''}`}
                        onClick={() => setActive(i)}
                        aria-label={`${name} — ${i + 1}`}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={src} alt="" loading="lazy" decoding="async" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Description, highlights, specs */}
            <div className="ham-prod-detail__info">
              <div className="ham-prod-detail__desc">
                {(isEn ? product.bodyEn : product.body).map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="ham-prod-detail__features">
                <div className="ham-prod-detail__block-title">{isEn ? 'Highlights' : 'أبرز المميّزات'}</div>
                <ul className="ham-prod-detail__features-list">
                  {(isEn ? product.featuresEn : product.features).map((f, i) => (
                    <li key={i}>
                      <Icon name="check" size={16} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="ham-prod-detail__specs-box">
                <div className="ham-prod-detail__block-title">{isEn ? 'Specifications' : 'المواصفات'}</div>
                <div className="ham-prod-detail__specs">
                  {product.specs.map((s, i) => (
                    <div className="ham-prod-detail__spec" key={i}>
                      <span className="ham-prod-detail__spec-key">{isEn ? s.kEn : s.k}</span>
                      <span className="ham-prod-detail__spec-val">{isEn ? s.vEn : s.v}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="ham-prod-detail__cta">
                <Button kind="primary" icon={isEn ? 'arrow-right' : 'arrow-left'} onClick={openQuote}>
                  {isEn ? 'Request a quote' : 'اطلب عرض سعر'}
                </Button>
              </div>
            </div>
          </div>

          {/* Models — each design next to a real photo of it */}
          {product.models.length > 0 && (
            <section className="ham-prod-detail__gallery">
              <div className="ham-prod-detail__block-title">
                {isEn ? 'Available models' : 'الموديلات المتوفّرة'} · {String(product.models.length).padStart(2, '0')}
              </div>
              <div className="ham-prod-models">
                {product.models.map((m, i) => (
                  <figure className="ham-prod-model" key={m.render}>
                    <div className="ham-prod-model__pair">
                      <button type="button" className="ham-prod-model__img ham-prod-model__img--design" onClick={() => setLightbox(modelsStart + i * 2)}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={m.render} alt={`${name} — ${isEn ? 'model' : 'موديل'} ${i + 1}`} loading="lazy" decoding="async" />
                        <span className="ham-prod-model__tag">{isEn ? 'Design' : 'التصميم'}</span>
                      </button>
                      <button type="button" className="ham-prod-model__img" onClick={() => setLightbox(modelsStart + i * 2 + 1)}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={m.photo} alt={`${name} — ${isEn ? 'model' : 'موديل'} ${i + 1} — ${isEn ? 'real photo' : 'صورة حقيقية'}`} loading="lazy" decoding="async" />
                        <span className="ham-prod-model__tag">{isEn ? 'Real photo' : 'صورة حقيقية'}</span>
                      </button>
                    </div>
                    <figcaption className="ham-prod-model__cap">{isEn ? 'Model' : 'موديل'} {String(i + 1).padStart(2, '0')}</figcaption>
                  </figure>
                ))}
              </div>
            </section>
          )}

          {/* Real photos from our workshop and sites */}
          {product.photos.length > 0 && (
            <section className="ham-prod-detail__gallery">
              <div className="ham-prod-detail__block-title">
                {isEn ? 'Real photos from our work' : 'صور حقيقية من أعمالنا'} · {String(product.photos.length).padStart(2, '0')}
              </div>
              <div className="ham-prod-detail__gallery-grid">
                {product.photos.map((src, i) => (
                  <button type="button" className="ham-prod-detail__gallery-item" key={src} onClick={() => setLightbox(photosStart + i)}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt={`${name} — ${isEn ? 'real photo' : 'صورة حقيقية'} ${i + 1}`} loading="lazy" decoding="async" />
                  </button>
                ))}
              </div>
            </section>
          )}

          {/* Other products in the same category */}
          {related.length > 0 && (
            <section className="ham-prod-detail__gallery">
              <div className="ham-prod-detail__block-title">{isEn ? 'More from this category' : 'منتجات أخرى من نفس الفئة'}</div>
              <div className="ham-products__grid">
                {related.map((p) => (
                  <Link className="ham-product-card" key={p.id} href={`/products/${p.id}`}>
                    <div className="ham-product-card__media">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.renders[0] ?? p.models[0]?.render} alt={isEn ? p.titleEn : p.title} loading="lazy" decoding="async" />
                    </div>
                    <div className="ham-product-card__body">
                      <h3 className="ham-product-card__title">{isEn ? p.titleEn : p.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Lightbox — same styles as the project page */}
      {lightbox !== null && (
        <div className="ham-pd-lb" role="dialog" aria-modal="true" onClick={close}>
          <button type="button" className="ham-pd-lb__close" onClick={close} aria-label={isEn ? 'Close' : 'إغلاق'}>✕</button>
          <button
            type="button"
            className="ham-pd-lb__arrow ham-pd-lb__arrow--prev"
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            aria-label={isEn ? 'Previous' : 'السابق'}
          >‹</button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="ham-pd-lb__img"
            src={all[lightbox]}
            alt={`${name} — ${lightbox + 1}`}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            className="ham-pd-lb__arrow ham-pd-lb__arrow--next"
            onClick={(e) => { e.stopPropagation(); step(1); }}
            aria-label={isEn ? 'Next' : 'التالي'}
          >›</button>
          <div className="ham-pd-lb__count">{lightbox + 1} / {all.length}</div>
        </div>
      )}
    </>
  );
}
