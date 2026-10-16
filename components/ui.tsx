'use client';
import { Ruler, Hammer, Sun, Package, Database, Factory, Flame, Grid2X2, Phone, Briefcase, Mail, MessageCircle, ShieldCheck, HardHat, Zap, Target, Eye, Send, Globe, ArrowLeft, ArrowRight, ArrowUpLeft, HeartHandshake, Users, Building2, Landmark, Fuel, ChevronLeft, ChevronRight, Quote, User, MapPin, Clock, X, Check, Menu, Search, ImageOff, type LucideProps } from 'lucide-react';
import Link from 'next/link';
import type { ComponentType, ReactNode, CSSProperties } from 'react';

const ICON_MAP: Record<string, ComponentType<LucideProps>> = {
  'ruler': Ruler, 'hammer': Hammer, 'sun': Sun, 'container': Package, 'cylinder': Database,
  'factory': Factory, 'flame': Flame, 'grid-2x2': Grid2X2, 'phone': Phone, 'briefcase': Briefcase,
  'mail': Mail, 'message-circle': MessageCircle, 'shield-check': ShieldCheck, 'hard-hat': HardHat,
  'zap': Zap, 'target': Target, 'eye': Eye, 'send': Send, 'globe': Globe,
  'arrow-left': ArrowLeft, 'arrow-right': ArrowRight, 'arrow-up-left': ArrowUpLeft,
  'heart-handshake': HeartHandshake, 'hand-helping': Users, 'building-2': Building2,
  'landmark': Landmark, 'fuel': Fuel, 'chevron-left': ChevronLeft, 'chevron-right': ChevronRight,
  'quote': Quote, 'user': User, 'map-pin': MapPin, 'clock': Clock, 'x': X, 'check': Check, 'menu': Menu,
  'search': Search, 'image-off': ImageOff,
};

export function Icon({ name, size = 20, color, strokeWidth = 1.75 }: { name: string; size?: number; color?: string; strokeWidth?: number }) {
  const Comp = ICON_MAP[name];
  if (!Comp) return null;
  return <Comp size={size} color={color} strokeWidth={strokeWidth} />;
}

export function Button({ kind = 'primary', children, icon, onClick, type = 'button' }: { kind?: string; children: ReactNode; icon?: string; onClick?: () => void; type?: 'button' | 'submit' }) {
  return (
    <button className={`ham-btn ham-btn--${kind}`} type={type} onClick={onClick}>
      {children}{icon && <Icon name={icon} size={18} />}
    </button>
  );
}

export function Badge({ tone = 'blue', children }: { tone?: string; children: ReactNode }) {
  return <span className={`ham-badge ham-badge--${tone}`}>{children}</span>;
}

export function Slash({ height = 36, top = 0, right = 0 }: { height?: number; top?: number; right?: number }) {
  return (
    <span aria-hidden="true" style={{ position: 'absolute', top, right, width: 4, height, background: 'var(--brand-green)', transform: 'skewX(-20deg)', transformOrigin: 'top right' }} />
  );
}

// "Explore All" pill button (Uiverse · Creatlydev). Diagonal arrow flies out, a copy slides in on hover.
const EXPLORE_ARROW = 'M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z';

export function MoreLink({ href, children, style }: { href: string; children: ReactNode; style?: CSSProperties }) {
  return (
    <Link href={href} className="ham-home-more" style={style}>
      <span className="ham-home-more__icon" aria-hidden="true">
        <svg viewBox="0 0 14 15" fill="none" width="10" className="ham-home-more__svg">
          <path d={EXPLORE_ARROW} fill="currentColor" />
        </svg>
        <svg viewBox="0 0 14 15" fill="none" width="10" className="ham-home-more__svg ham-home-more__svg--copy">
          <path d={EXPLORE_ARROW} fill="currentColor" />
        </svg>
      </span>
      <span className="ham-home-more__label">{children}</span>
    </Link>
  );
}
