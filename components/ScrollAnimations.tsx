'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/* ─────────────────────────────────────────
   Tiny helper: create an IntersectionObserver
   that fires once per element then unobserves
   ───────────────────────────────────────── */
function io(
  targets: NodeListOf<HTMLElement> | HTMLElement[],
  onIn: (el: HTMLElement) => void,
  opts?: IntersectionObserverInit
) {
  const obs = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        onIn(e.target as HTMLElement);
        obs.unobserve(e.target);
      }),
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px', ...opts }
  );
  targets.forEach((el) => obs.observe(el));
  return obs;
}

/* Assign CSS stagger delay to a NodeList */
function stagger(els: NodeListOf<HTMLElement>, step = 0.1) {
  els.forEach((el, i) => el.style.setProperty('--sd', `${(i * step).toFixed(2)}s`));
}

/* ─────────────────────────────────────────
   Hero panel-wipe entrance (home page)
   ───────────────────────────────────────── */
function initHero() {
  document.documentElement.classList.add('js-anim');
  // Two rAFs guarantee the browser has painted the initial hidden state
  requestAnimationFrame(() =>
    requestAnimationFrame(() =>
      document.querySelector('.ham-hero')?.classList.add('hero-ready')
    )
  );
}

/* ─────────────────────────────────────────
   Page hero entrance (inner pages)
   ───────────────────────────────────────── */
function initPageHero() {
  document.documentElement.classList.add('js-anim');
  requestAnimationFrame(() =>
    requestAnimationFrame(() =>
      document.querySelector('.ham-page-hero')?.classList.add('page-hero-ready')
    )
  );
}

/* ─────────────────────────────────────────
   Numeric counter for stat values
   Handles: "+20", "100%", "2"  (skips "B2B")
   ───────────────────────────────────────── */
function countUp(el: HTMLElement) {
  // Find the raw text node (not child <span> units)
  const tn = Array.from(el.childNodes).find(
    (n) => n.nodeType === Node.TEXT_NODE && n.textContent?.trim()
  );
  if (!tn?.textContent) return;

  const m = tn.textContent.trim().match(/^([+]?)(\d+)([%]?)$/);
  if (!m) return; // non-numeric value like B2B

  const [, pre, digits, suf] = m;
  const target = +digits;
  const dur = Math.min(2000, Math.max(600, target * 14));
  let t0: number | null = null;

  const run = (ts: number) => {
    if (!t0) t0 = ts;
    const p = Math.min((ts - t0) / dur, 1);
    const v = Math.round((1 - (1 - p) ** 3) * target); // ease-out cubic
    tn.textContent = pre + v + suf;
    if (p < 1) requestAnimationFrame(run);
  };
  requestAnimationFrame(run);
}

/* ─────────────────────────────────────────
   Parallax on project images
   Only runs on hover-capable devices (desktop)
   ───────────────────────────────────────── */
function initParallax() {
  if (!window.matchMedia('(hover: hover)').matches) return () => {};

  const imgs = document.querySelectorAll<HTMLElement>('.ham-proj__photo img');
  if (!imgs.length) return () => {};

  const vh = window.innerHeight;

  const tick = () => {
    imgs.forEach((img) => {
      const wrap = img.closest<HTMLElement>('.ham-proj__photo');
      if (!wrap) return;
      const { top, height } = wrap.getBoundingClientRect();
      if (top > vh + 100 || top + height < -100) return; // off screen
      const rel = (top + height / 2 - vh / 2) / vh;
      img.style.setProperty('--py', `${(rel * 20).toFixed(1)}px`);
    });
  };

  window.addEventListener('scroll', tick, { passive: true });
  tick();
  return () => window.removeEventListener('scroll', tick);
}

/* ─────────────────────────────────────────
   All scroll-triggered animations
   ───────────────────────────────────────── */
function initScrollAnimations() {
  const observers: IntersectionObserver[] = [];

  /* Section heads */
  observers.push(
    io(document.querySelectorAll<HTMLElement>('.ham-section-head'), (el) =>
      el.classList.add('in-view')
    )
  );

  /* Stats: stagger + count-up */
  const stats = document.querySelectorAll<HTMLElement>('.ham-stat');
  stagger(stats, 0.12);
  observers.push(io(stats, (el) => el.classList.add('in-view')));

  const statsWrap = document.querySelector<HTMLElement>('.ham-stats');
  if (statsWrap) {
    let fired = false;
    observers.push(
      io([statsWrap], () => {
        if (fired) return;
        fired = true;
        document.querySelectorAll<HTMLElement>('.ham-stat__value').forEach(countUp);
      }, { threshold: 0.4 })
    );
  }

  /* About: pillar cards */
  const pillars = document.querySelectorAll<HTMLElement>('.ham-pillar');
  stagger(pillars, 0.12);
  observers.push(io(pillars, (el) => el.classList.add('in-view')));

  /* Process: line + steps (sequential dot activation) */
  const processEl = document.querySelector<HTMLElement>('.ham-process');
  if (processEl) {
    // Set direction-aware transform-origin for the connecting line
    processEl.style.setProperty(
      '--line-origin',
      document.documentElement.dir === 'rtl' ? 'right' : 'left'
    );
    observers.push(io([processEl], (el) => el.classList.add('in-view')));
  }

  const processSteps = document.querySelectorAll<HTMLElement>('.ham-process__step');
  stagger(processSteps, 0.18);
  processSteps.forEach((step, i) => {
    observers.push(
      io([step], (el) => {
        el.classList.add('in-view');
        // Activate the numbered dot after the step has entered
        setTimeout(() => el.classList.add('step-active'), i * 180 + 280);
      })
    );
  });

  /* Services: manifest row stagger */
  const svcRows = document.querySelectorAll<HTMLElement>('.ham-svc-row');
  stagger(svcRows, 0.06);
  observers.push(io(svcRows, (el) => el.classList.add('in-view')));

  /* Projects: mosaic cards (home + projects page) */
  const projCards = document.querySelectorAll<HTMLElement>('.ham-mosaic__card');
  stagger(projCards, 0.08);
  observers.push(io(projCards, (el) => el.classList.add('in-view')));

  /* Testimonials */
  const quote = document.querySelector<HTMLElement>('.ham-quote');
  if (quote) observers.push(io([quote], (el) => el.classList.add('in-view')));

  const sectors = document.querySelectorAll<HTMLElement>('.ham-sector');
  stagger(sectors, 0.06);
  observers.push(io(sectors, (el) => el.classList.add('in-view')));

  /* Contact cards (both old contact block and new contact page) */
  const cards = document.querySelectorAll<HTMLElement>('.ham-contact-card');
  stagger(cards, 0.09);
  observers.push(io(cards, (el) => el.classList.add('in-view')));

  const contactBottom = document.querySelector<HTMLElement>('.ham-contact__bottom');
  if (contactBottom)
    observers.push(io([contactBottom], (el) => el.classList.add('in-view')));

  /* Industries page — sector cards */
  const industryCards = document.querySelectorAll<HTMLElement>('.ham-industry-card');
  stagger(industryCards, 0.08);
  observers.push(io(industryCards, (el) => el.classList.add('in-view')));

  /* Project detail page — specs, description, related */
  const projSpecs = document.querySelectorAll<HTMLElement>('.ham-proj-detail__spec');
  stagger(projSpecs, 0.1);
  observers.push(io(projSpecs, (el) => el.classList.add('in-view')));

  const projDesc = document.querySelector<HTMLElement>('.ham-proj-detail__desc');
  if (projDesc) observers.push(io([projDesc], (el) => el.classList.add('in-view')));

  const projRelated = document.querySelector<HTMLElement>('.ham-proj-detail__related');
  if (projRelated) observers.push(io([projRelated], (el) => el.classList.add('in-view')));

  /* Contact page — info blocks and form */
  const infoBlocks = document.querySelectorAll<HTMLElement>('.ham-contact-info-block');
  stagger(infoBlocks, 0.1);
  observers.push(io(infoBlocks, (el) => el.classList.add('in-view')));

  const contactForm = document.querySelector<HTMLElement>('.ham-contact-form');
  if (contactForm) observers.push(io([contactForm], (el) => el.classList.add('in-view')));

  return () => observers.forEach((o) => o.disconnect());
}

/* ─────────────────────────────────────────
   Component – renders nothing, side-effect only
   ───────────────────────────────────────── */
export default function ScrollAnimations({ lang }: { lang: string }) {
  const pathname = usePathname();

  // Hero entrance — runs ONCE per path. Language toggles must not retrigger it
  // (re-firing the clip-path animation while dir is changing collapses the layout)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (pathname === '/') {
      initHero();
    } else {
      initPageHero();
    }
    return () => {
      document.querySelector('.ham-hero')?.classList.remove('hero-ready');
      document.querySelector('.ham-page-hero')?.classList.remove('page-hero-ready');
    };
  }, [pathname]);

  // Scroll-triggered animations — re-bind on lang/path change so dir-aware
  // setup (process line origin) reflects the new direction
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const cleanupScroll = initScrollAnimations();
    const cleanupParallax = initParallax();
    return () => {
      cleanupScroll();
      cleanupParallax();
    };
  }, [lang, pathname]);

  return null;
}
