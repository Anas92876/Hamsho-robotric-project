'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLang } from '@/lib/lang';
import { D } from '@/lib/data';
import { projects, projectCategories } from '@/lib/projects';
import Hero from '@/components/Hero';
import StatsStrip from '@/components/StatsStrip';
import Testimonials from '@/components/Testimonials';
import { Icon, Button, MoreLink } from '@/components/ui';

// Home mosaic — column/row spans per card on a 12-column grid:
// rows [8+4] and [4+8], each with its own height.
const HOME_MOSAIC: [number, number][] = [
  [8, 5], [4, 5],
  [4, 4], [8, 4],
];
// Projects shown in the home mosaic, in order
const HOME_FEATURED = ['ham-slr-008', 'ham-crv-016', 'ham-spt-003', 'ham-hng-004'];

export default function Home() {
  const { lang, openQuote } = useLang();
  const router = useRouter();
  const isEn = lang === 'en';

  return (
    <>
      <Hero onQuote={openQuote} onServices={() => router.push('/services')} lang={lang} />

      {/* ── What we do — 3 premium service cards ────────── */}
      <section className="ham-what-section">
        <div className="ham-what__inner">
          <div className="ham-what__header">
            <div className="ham-what__header-text">
              <span className="ham-eyebrow">{isEn ? 'CAPABILITIES' : 'SERVICES — ماذا ننفّذ؟'}</span>
              <h2 className="ham-what__header-title">{isEn ? 'What we build' : 'ماذا ننفّذ؟'}</h2>
            </div>
            <Link href="/products" className="ham-what__header-link">
              {isEn ? 'All products' : 'كل المنتجات'}
              <Icon name={isEn ? 'arrow-right' : 'arrow-left'} size={12} />
            </Link>
          </div>
          <div className="ham-what__cards">
            {/* Card 1 — Hangars */}
            <article className="ham-what-card">
              <div className="ham-what-card__media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/hangar.png" alt={isEn ? 'Industrial hangar' : 'هنكار صناعي'} />
              </div>
              <span className="ham-what-card__num">01</span>
              <h3 className="ham-what-card__title">
                {isEn ? 'Industrial Hangars' : 'الهنكارات والمنشآت الصناعية'}
              </h3>
              <p className="ham-what-card__body">
                {isEn
                  ? 'Industrial hangars and manufacturing facilities in international or in-house steel profiles — bolt-up or welded, engineered for your load requirements.'
                  : 'هنكارات صناعية وعنابر تصنيع بمقاطع معدنية عالمية أو من إنتاجنا — بتقنية الفك والتركيب أو اللحام، وفق دراسة هندسية متكاملة.'}
              </p>
              <Link href="/services#hangars" className="ham-what-card__link">
                {isEn ? 'Details' : 'التفاصيل'}
                <Icon name={isEn ? 'arrow-right' : 'arrow-left'} size={11} />
              </Link>
            </article>
            {/* Card 2 — Solar */}
            <article className="ham-what-card">
              <div className="ham-what-card__media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/solar.png" alt={isEn ? 'Solar mounting bases' : 'قواعد طاقة شمسية'} />
              </div>
              <span className="ham-what-card__num">02</span>
              <h3 className="ham-what-card__title">
                {isEn ? 'Solar Mounting Bases' : 'قواعد الطاقة الشمسية'}
              </h3>
              <p className="ham-what-card__body">
                {isEn
                  ? 'Fixed and tracking solar mounting bases, engineered for regional wind loads — at any scale and output capacity.'
                  : 'قواعد ثابتة ومتحركة للألواح الشمسية، مُصمَّمة وفق أحمال الرياح المحلية، بأي شكل ومقاس ولأي سعة كهربائية.'}
              </p>
              <Link href="/services#solar-bases" className="ham-what-card__link">
                {isEn ? 'Details' : 'التفاصيل'}
                <Icon name={isEn ? 'arrow-right' : 'arrow-left'} size={11} />
              </Link>
            </article>
            {/* Card 3 — Caravans */}
            <article className="ham-what-card">
              <div className="ham-what-card__media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/caravan.png" alt={isEn ? 'Prefabricated caravan' : 'كرفان مسبق الصنع'} />
              </div>
              <span className="ham-what-card__num">03</span>
              <h3 className="ham-what-card__title">
                {isEn ? 'Prefabricated Caravans' : 'كرفانات'}
              </h3>
              <p className="ham-what-card__body">
                {isEn
                  ? 'Sandwich-panel cabins — acoustic, thermal and moisture insulated, fire-resistant, optionally trailer-mounted.'
                  : 'كرفانات بجدران ساندويش عازلة للصوت والحرارة والرطوبة، مقاومة للحريق، ويمكن جعلها متنقلة على مقطورة.'}
              </p>
              <Link href="/services#caravans" className="ham-what-card__link">
                {isEn ? 'Details' : 'التفاصيل'}
                <Icon name={isEn ? 'arrow-right' : 'arrow-left'} size={11} />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <StatsStrip lang={lang} />

      {/* About teaser */}
      <section className="ham-home-about">
        <div className="ham-inner">
          <div className="ham-home-about__split">
            <div className="ham-home-about__text">
              <span className="ham-eyebrow ham-eyebrow--light">{isEn ? 'About' : 'من نحن'}</span>
              <h2 className="ham-h2 ham-h2--light">{isEn ? 'Metal construction specialists since 2005' : 'متخصّصون في الإنشاءات المعدنية منذ 2005'}</h2>
              <p className="ham-about__body">{isEn ? D.about.bodyEn : D.about.body}</p>
              <MoreLink href="/about">{isEn ? 'Read our full story' : 'اقرأ قصّتنا الكاملة'}</MoreLink>
            </div>
            <div className="ham-home-about__media">
              <div className="ham-home-about__photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/about.jpeg" alt={isEn ? 'Engineering office reviewing structural drawings' : 'المكتب الهندسي يراجع المخططات الإنشائية'} />
              </div>
              {D.about.pillars.map((p, i) => (
                <div className={`ham-home-pillar ham-home-pillar--float ham-home-pillar--p${i + 1}`} key={i}>
                  <Icon name={D.about.pillarIcons[i]} size={16} color="var(--blue)" />
                  <div>
                    <div className="ham-home-pillar__title">{isEn ? p.titleEn : p.title}</div>
                    <div className="ham-home-pillar__body">{isEn ? p.bodyEn : p.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="ham-services">
        <div className="ham-services__inner">
          <div className="ham-section-head">
            <span className="ham-eyebrow">{isEn ? 'CAPABILITIES' : 'SERVICES — خدماتنا'}</span>
            <h2 className="ham-h2">{isEn ? 'What we build' : 'ما الذي ننفّذه'}</h2>
          </div>
          <div className="ham-svc-manifest">
            {D.services.slice(0, 5).map((s, i) => (
              <article className="ham-svc-row" key={s.slug}>
                <span className="ham-svc-row__num">{String(i + 1).padStart(2, '0')}</span>
                <div className="ham-svc-row__content">
                  <h3 className="ham-svc-row__title">{isEn ? s.titleEn : s.title}</h3>
                  <p className="ham-svc-row__desc">{isEn ? s.bodyEn : s.body}</p>
                </div>
                <span className="ham-svc-row__tag">{isEn ? s.tagEn : s.tag}</span>
              </article>
            ))}
          </div>
          <MoreLink href="/products" style={{ marginTop: 24 }}>{isEn ? 'Browse products' : 'تصفّح المنتجات'}</MoreLink>
        </div>
      </section>

      {/* Featured projects — 4-card mosaic */}
      <section className="ham-home-projects">
        <div className="ham-inner">
          <div className="ham-section-head">
            <span className="ham-eyebrow ham-eyebrow--light">{isEn ? 'PROJECTS' : 'PROJECTS — مشاريعنا'}</span>
            <h2 className="ham-h2 ham-h2--light">{isEn ? 'Featured work' : 'مشاريع مميّزة'}</h2>
          </div>
          <div className="ham-mosaic">
            {HOME_FEATURED.map((slug) => projects.find((p) => p.slug === slug)!).map((p, i) => {
              const [c, r] = HOME_MOSAIC[i];
              const cat = projectCategories.find((x) => x.id === p.category)!;
              return (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className={`ham-mosaic__card pm-c${c} pm-r${r}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.images[0].src}
                    alt={isEn ? p.titleEn : p.title}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="ham-mosaic__chips">
                    <span className="ham-mosaic__chip">{p.code}</span>
                  </div>
                  <div className="ham-mosaic__overlay">
                    <div className="ham-mosaic__meta">
                      <span className="ham-mosaic__idx">{String(i + 1).padStart(2, '0')}</span>
                      <span className="ham-mosaic__client">{isEn ? cat.titleEn : cat.title}</span>
                    </div>
                    <h3 className="ham-mosaic__title">{isEn ? p.titleEn : p.title}</h3>
                    <div className="ham-mosaic__cta">
                      <span>{isEn ? 'View project' : 'عرض المشروع'}</span>
                      <span className="ham-mosaic__arrow">{isEn ? '→' : '←'}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div style={{ textAlign: 'center', marginTop: 24 }}>
            <MoreLink href="/projects">{isEn ? 'View all projects' : 'عرض جميع المشاريع'}</MoreLink>
          </div>
        </div>
      </section>

      <Testimonials lang={lang} />

      {/* CTA */}
      <section className="ham-home-cta">
        <div className="ham-home-cta__inner">
          <h2 className="ham-h2 ham-h2--light">{isEn ? 'Ready to start a project?' : 'جاهزون لبدء مشروعكم'}</h2>
          <p>{isEn ? 'Get in touch for an engineering study and quote on your next metal construction project.' : 'تواصلوا معنا لإجراء دراسة هندسية وعرض سعر لمشروعكم المعدني القادم.'}</p>
          <div className="ham-home-cta__actions">
            <Button kind="primary" icon={isEn ? 'arrow-right' : 'arrow-left'} onClick={openQuote}>
              {isEn ? D.en.buttons.quote : 'اطلب عرض سعر'}
            </Button>
            <Link href="/contact" className="ham-btn ham-btn--secondary">
              {isEn ? 'Contact us' : 'تواصل معنا'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
