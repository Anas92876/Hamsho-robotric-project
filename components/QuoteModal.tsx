'use client';
import { useState } from 'react';
import { D } from '@/lib/data';
import { Icon, Button } from './ui';

export default function QuoteModal({ onClose, lang }: { onClose: () => void; lang: string }) {
  const isEn = lang === 'en';
  const [name, setName] = useState('');
  const [service, setService] = useState(isEn ? D.services[0].titleEn : D.services[0].title);
  const [details, setDetails] = useState('');

  const handleSend = () => {
    const msg = isEn
      ? `Hello, I'd like to request a quote:\n\n👤 Name: ${name || '—'}\n🔧 Project: ${service}\n📝 Details: ${details || '—'}`
      : `السلام عليكم، أودّ طلب عرض سعر:\n\n👤 الاسم: ${name || '—'}\n🔧 نوع المشروع: ${service}\n📝 تفاصيل: ${details || '—'}`;
    window.open(`https://wa.me/963968535054?text=${encodeURIComponent(msg)}`, '_blank');
    onClose();
  };

  return (
    <div className="ham-modal-bg" onClick={onClose}>
      <div className="ham-modal" onClick={(e) => e.stopPropagation()}>
        <button className="ham-modal__close" onClick={onClose}><Icon name="x" size={20} /></button>
        <h3>{isEn ? 'Request a quote' : 'اطلب عرض سعر'}</h3>
        <p>{isEn ? "Fill in your details and we'll open WhatsApp with your message ready." : 'اكتب بياناتك وسيفتح واتساب برسالتك جاهزة.'}</p>
        <div className="ham-modal__field">
          <label>{isEn ? 'Full name' : 'الاسم الكامل'}</label>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder={isEn ? 'e.g. Ahmad Al-Ali' : 'مثال: أحمد العلي'} />
        </div>
        <div className="ham-modal__field">
          <label>{isEn ? 'Project type' : 'طبيعة المشروع'}</label>
          <select value={service} onChange={(e) => setService(e.target.value)}>
            {D.services.map((s) => <option key={s.title} value={isEn ? s.titleEn : s.title}>{isEn ? s.titleEn : s.title}</option>)}
          </select>
        </div>
        <div className="ham-modal__field">
          <label>{isEn ? 'Additional details' : 'تفاصيل إضافية'}</label>
          <textarea rows={3} value={details} onChange={(e) => setDetails(e.target.value)} placeholder={isEn ? 'Dimensions, quantities, timeline...' : 'المقاسات، الكميات، المدة المتوقّعة...'} />
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
          <Button kind="primary" icon="send" onClick={handleSend}>{isEn ? 'Send via WhatsApp' : 'إرسال عبر واتساب'}</Button>
          <Button kind="ghost" onClick={onClose}>{isEn ? 'Cancel' : 'إلغاء'}</Button>
        </div>
      </div>
    </div>
  );
}
