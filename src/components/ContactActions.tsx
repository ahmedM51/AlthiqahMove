import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { SITE_CONFIG, trackPhoneCallClick, trackWhatsAppClick } from '../lib/site-config';

export const ContactActions: React.FC = () => {
  const hasPhone = SITE_CONFIG.contact.phone && !SITE_CONFIG.contact.phone.includes('0000000');
  const telHref = hasPhone ? `tel:${SITE_CONFIG.contact.phone}` : '#contact';
  const whatsappHref = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(SITE_CONFIG.contact.whatsappDefaultMessage)}`;

  return (
    <aside
      aria-label="أزرار التواصل السريع بالجوال"
      className="fixed bottom-0 inset-x-0 z-30 sm:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-lg"
    >
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        {/* زر الاتصال الهاتفي السريع */}
        <a
          href={telHref}
          onClick={() => trackPhoneCallClick('mobile_sticky_bar')}
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-slate-900 text-white font-bold text-xs tracking-wide shadow-sm active:scale-[0.98] transition-all"
        >
          <Phone className="w-4 h-4 text-amber-400 shrink-0" />
          <span>اتصال هاتفي</span>
        </a>

        {/* زر الواتساب السريع */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick('mobile_sticky_bar')}
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-emerald-600 text-white font-bold text-xs tracking-wide shadow-sm active:scale-[0.98] transition-all"
        >
          <MessageCircle className="w-4 h-4 shrink-0" />
          <span>واتساب فوري</span>
        </a>
      </div>
    </aside>
  );
};
