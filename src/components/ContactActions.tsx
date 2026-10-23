import React from 'react';
import { Phone } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { SITE_CONFIG, getTelHref, getWhatsAppHref, trackPhoneCallClick, trackWhatsAppClick } from '../lib/site-config';

/**
 * شريط الإجراءات السريعة الثابت أسفل شاشة الجوال
 * تصميم مضغوط (أقل من 15% من الشاشة) بزر واتساب أساسي وزر اتصال مباشر
 */
export const ContactActions: React.FC = () => {
  const telHref = getTelHref();
  const whatsappHref = getWhatsAppHref();

  return (
    <aside
      aria-label="أزرار التواصل السريع بالجوال"
      className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-white/97 backdrop-blur-md border-t border-slate-200 px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-6px_20px_rgba(15,23,42,0.12)]"
    >
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        {/* زر الواتساب الأساسي */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick('mobile_sticky_bar')}
          className="relative flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#25D366] text-white shadow-sm active:scale-[0.98] transition-all overflow-hidden"
        >
          <WhatsAppIcon className="w-5 h-5 shrink-0" />
          <span className="flex flex-col items-start leading-tight">
            <span className="text-xs font-black">واتساب فوري</span>
            <span className="text-[10px] font-medium text-white/85">رد خلال دقائق</span>
          </span>
        </a>

        {/* زر الاتصال الهاتفي */}
        <a
          href={telHref}
          onClick={() => trackPhoneCallClick('mobile_sticky_bar')}
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-900 text-white shadow-sm active:scale-[0.98] transition-all"
        >
          <Phone className="w-5 h-5 text-amber-400 shrink-0" />
          <span className="flex flex-col items-start leading-tight">
            <span className="text-xs font-black">اتصل الآن</span>
            <span className="text-[10px] font-medium text-slate-300" dir="ltr">
              {SITE_CONFIG.contact.phoneDisplay}
            </span>
          </span>
        </a>
      </div>
    </aside>
  );
};
