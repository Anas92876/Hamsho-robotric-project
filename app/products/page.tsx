'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useLang } from '@/lib/lang';
import { D } from '@/lib/data';
import { Icon } from '@/components/ui';

export default function ProductsPage() {
  const { lang } = useLang();
  const isEn = lang === 'en';
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return D.products.filter((p) => {
      if (category !== 'all' && p.category !== category) return false;
      return !q || (isEn ? p.titleEn : p.title).toLowerCase().includes(q);
    });
  }, [query, category, isEn]);

  const cats = [
    { id: 'all', title: 'الكل', titleEn: 'All', count: D.products.length },
    ...D.productCategories.map((c) => ({ ...c, count: D.products.filter((p) => p.category === c.id).length })),
  ];
  const catTitle = (id: string) => {
    const c = D.productCategories.find((x) => x.id === id);
    return c ? (isEn ? c.titleEn : c.title) : '';
  };

  return (
    <>
      <div className="ham-page-hero">
        <div className="ham-page-hero__inner">
          <div className="ham-page-hero__eyebrow">{isEn ? 'Products' : 'المنتجات'}</div>
          <h1 className="ham-page-hero__title">{isEn ? 'Our products' : 'منتجاتنا'}</h1>
          <p className="ham-page-hero__sub">{isEn ? 'Browse our metal products — filter by category or search by name.' : 'تصفّح منتجاتنا المعدنية — صنّف حسب الفئة أو ابحث عن منتج بالاسم.'}</p>
        </div>
      </div>

      <div className="ham-pj-bar">
        <div className="ham-pj-bar__inner">
          <div className="ham-pj-bar__cats" role="tablist" aria-label={isEn ? 'Categories' : 'التصنيفات'}>
            {cats.map((c) => (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={category === c.id}
                className={`ham-pj-tab${category === c.id ? ' is-on' : ''}`}
                onClick={() => setCategory(c.id)}
              >
                {isEn ? c.titleEn : c.title} <span>{c.count}</span>
              </button>
            ))}
          </div>
          <label className="ham-pj-search">
            <Icon name="search" size={17} />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={isEn ? 'Search products…' : 'ابحث عن منتج…'}
              aria-label={isEn ? 'Search products' : 'ابحث عن منتج'}
            />
          </label>
        </div>
      </div>

      <section className="ham-products">
        <div className="ham-products__inner">

          {filtered.length > 0 ? (
            <div className="ham-products__grid">
              {filtered.map((p) => (
                <Link className="ham-product-card" key={p.id} href={`/products/${p.id}`}>
                  <div className="ham-product-card__media">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.renders[0] ?? p.models[0]?.render ?? '/images/placeholder-service.svg'} alt={isEn ? p.titleEn : p.title} loading="lazy" decoding="async" />
                  </div>
                  <div className="ham-product-card__body">
                    <span className="ham-product-card__cat">{catTitle(p.category)}</span>
                    <h3 className="ham-product-card__title">{isEn ? p.titleEn : p.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="ham-products__empty">
              <Icon name="container" size={40} />
              <p>{isEn ? 'No products match your search yet.' : 'لا توجد منتجات مطابقة حالياً.'}</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
