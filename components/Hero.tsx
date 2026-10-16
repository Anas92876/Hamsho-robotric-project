'use client';
import { useRef, useEffect } from 'react';
import { D } from '@/lib/data';
import { Icon, Button } from './ui';

export default function Hero({
  onQuote,
  onServices,
  lang,
}: {
  onQuote: () => void;
  onServices: () => void;
  lang: string;
}) {
  const isEn = lang === 'en';
  const h = isEn ? D.en.hero : D.hero;
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    // iOS ignores the muted HTML attribute set by React — force it via DOM
    v.muted = true;
    const show = () => { v.style.opacity = '1'; };
    const tryPlay = () => { v.play().catch(() => {}); };
    if (v.readyState >= 3) { show(); return; }
    v.addEventListener('canplay', show, { once: true });
    v.addEventListener('canplay', tryPlay, { once: true });
    return () => {
      v.removeEventListener('canplay', show);
      v.removeEventListener('canplay', tryPlay);
    };
  }, []);

  return (
    <>
      <section className="ham-hero" id="home">
        {/* Blueprint grid background */}
        <div className="ham-hero__grid-bg" aria-hidden="true" />

        <div className="ham-hero__inner">
          {/* ── Content — RTL: first child = RIGHT (start side) ── */}
          <div className="ham-hero__copy">
            <h1 className="ham-hero__title">
              {isEn ? (
                <>
                  Metal structures, designed
                  <br />
                  <span className="ham-hero__title-em">and built in-house.</span>
                </>
              ) : (
                <>
                  نصمّم وننفّذ الهياكل المعدنية
                  <br />
                  <span className="ham-hero__title-em">من الدراسة حتى التسليم</span>
                </>
              )}
            </h1>

            <div className="ham-hero__ctas">
              <button className="ham-hero__btn-split" onClick={onQuote}>
                {h.primaryCta}
                <Icon name={isEn ? 'arrow-right' : 'arrow-left'} size={17} />
              </button>
              {/* Blue — explore/engineering (logo gear) */}
              <button className="ham-hero__btn-services" onClick={onServices}>
                {h.secondaryCta}
                <Icon name={isEn ? 'arrow-right' : 'arrow-left'} size={17} />
              </button>
            </div>
          </div>

          {/* ── Video industrial strip — always visually LEFT ── */}
          <div className="ham-hero__video-wrap" aria-hidden="true">
            <div className="ham-hero__video-frame">
              <video
                ref={videoRef}
                className="ham-hero__video"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                style={{ opacity: 0 }}
              >
                <source src="/videos/hero.mp4" type="video/mp4" />
              </video>
              <div className="ham-hero__video-overlay" />
              <div className="ham-hero__scan" />
            </div>

            {/* Technical corner brackets */}
            <span className="ham-hero__bracket ham-hero__bracket--tl" />
            <span className="ham-hero__bracket ham-hero__bracket--tr" />
            <span className="ham-hero__bracket ham-hero__bracket--bl" />
            <span className="ham-hero__bracket ham-hero__bracket--br" />

            {/* Industrial tag */}
            <div className="ham-hero__video-tag">
              <span className="ham-hero__video-tag-line" />
              <span>HAMSHO METALWORKS</span>
            </div>

            {/* Coordinates */}
            <div className="ham-hero__coords">
              <span>36.20°N</span>
              <span>37.16°E</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip — directly below hero, always fully visible */}
      <div className="ham-hero-trust">
        <div className="ham-hero-trust__inner">
          {/* Blue items — credentials, engineering, trust (logo gear) */}
          <div className="ham-hero-trust__item">
            <Icon name="clock" size={14} color="var(--blue)" />
            <span>{isEn ? 'Established in 2005' : 'تأسّست عام 2005'}</span>
          </div>
          <span className="ham-hero-trust__div" aria-hidden="true" />
          <div className="ham-hero-trust__item">
            <Icon name="ruler" size={14} color="var(--blue)" />
            <span>{isEn ? 'In-house engineering office' : 'مكتب هندسي داخلي'}</span>
          </div>
          <span className="ham-hero-trust__div" aria-hidden="true" />
          {/* Green items — capability, execution, action (logo slashes) */}
          <div className="ham-hero-trust__item">
            <Icon name="hammer" size={14} color="var(--green)" />
            <span>{isEn ? 'Design + fabrication + installation' : 'دراسة + تصنيع + تركيب'}</span>
          </div>
          <span className="ham-hero-trust__div" aria-hidden="true" />
          <div className="ham-hero-trust__item">
            <Icon name="building-2" size={14} color="var(--green)" />
            <span>{isEn ? 'Industrial projects across Syria' : 'مشاريع صناعية في سوريا'}</span>
          </div>
        </div>
      </div>
    </>
  );
}
