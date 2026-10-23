import React from 'react';
import { Phone } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { SITE_CONFIG, getWhatsAppHref, trackWhatsAppClick } from '../lib/site-config';

/**
 * زر واتساب عائم احترافي يظهر في كل الصفحات وفي كل المقاسات
 * يهدف لزيادة رسائل الواتساب من زوار حملات Google Ads
 */
export const WhatsAppFloatButton: React.FC = () => {
  const whatsappHref = getWhatsAppHref('السلام عليكم، اريد حجز ونيت نقل عفش بالرياض، أرجو إرسال السعر ووقت الوصول.');

  return (
    <div className="fixed z-40 left-3 bottom-20 sm:left-5 sm:bottom-6 print:hidden">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick('whatsapp_float_button')}
        aria-label={`مراسلة واتساب فورية على الرقم ${SITE_CONFIG.contact.whatsappDisplay}`}
        className="group flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)] transition-all active:scale-[0.97]"
      >
        <span className="relative flex items-center justify-center w-14 h-14 rounded-full shrink-0">
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping"></span>
          <WhatsAppIcon className="relative w-7 h-7" />
        </span>
        <span className="hidden sm:block max-w-0 overflow-hidden whitespace-nowrap text-sm font-black transition-all duration-300 group-hover:max-w-[190px] group-hover:pl-1 group-hover:pr-4">
          احجز ونيت الآن على واتساب
        </span>
      </a>

      {/* رقم الواتساب الظاهر أسفل الزر لبناء الثقة */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick('whatsapp_float_number')}
        className="hidden sm:flex items-center justify-center gap-1.5 mt-2 py-1.5 px-3 rounded-full bg-white/95 border border-slate-200 text-[11px] font-bold text-slate-700 shadow-sm hover:border-[#25D366] hover:text-[#128C7E] transition-colors"
        dir="ltr"
      >
        <Phone className="w-3 h-3 text-[#25D366]" />
        <span>{SITE_CONFIG.contact.whatsappDisplay}</span>
      </a>
    </div>
  );
};
