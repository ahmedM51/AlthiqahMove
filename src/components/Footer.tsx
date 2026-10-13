import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, ShieldCheck, Clock } from 'lucide-react';
import { SITE_CONFIG, trackPhoneCallClick, trackWhatsAppClick } from '../lib/site-config';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const hasPhone = SITE_CONFIG.contact.phone && !SITE_CONFIG.contact.phone.includes('0000000');
  const telHref = hasPhone ? `tel:${SITE_CONFIG.contact.phone}` : '#contact';
  const whatsappHref = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(SITE_CONFIG.contact.whatsappDefaultMessage)}`;

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* العمود 1: هوية الشركة ونبذة عنها */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.jpg"
                alt={SITE_CONFIG.name}
                className="h-12 w-auto max-w-[140px] object-contain rounded bg-white p-1"
              />
              <span className="text-lg font-black text-white">{SITE_CONFIG.name}</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              خدمة نقل أثاث وعفش منزلي ومكتبي داخل مدينة الرياض، مع خدمات الفك والتركيب والتغليف الشامل لحماية مقتنياتكم بأمان ومواعيد منضبطة.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-400/90 pt-1">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>فريق فني متمرس وتغليف وقائي مخصص</span>
            </div>
          </div>

          {/* العمود 2: روابط سريعة */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-bold">روابط الصفحات</h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => { onNavigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-400 transition-colors text-right"
                >
                  الصفحة الرئيسية
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('/about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-400 transition-colors text-right"
                >
                  من نحن ونطاق العمل
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('/services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-400 transition-colors text-right"
                >
                  كافة خدمات النقل والفك والتغليف
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('/testimonials'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-400 transition-colors text-right"
                >
                  آراء وتجارب العملاء
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('/blog'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-400 transition-colors text-right"
                >
                  دليل نصائح نقل العفش
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('/contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-400 transition-colors text-right"
                >
                  طلب تسعيرة والتواصل المباشر
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('/privacy-policy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-400 transition-colors text-right"
                >
                  سياسة الخصوصية واستخدام البيانات
                </button>
              </li>
            </ul>
          </div>

          {/* العمود 3: نطاق التغطية بالرياض */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-bold">أحياء ومناطق الخدمة بالرياض</h3>
            <ul className="space-y-2 text-xs text-slate-400 leading-relaxed">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>شمال الرياض: الملقا، النرجس، الياسمين، العارض، الصحافة</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>شرق الرياض: الرمال، المونسية، اليرموك، قرطبة، الروضة</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>وسط وغرب وجنوب الرياض: العليا، المعذر، لبن، السويدي، الشفا</span>
              </li>
            </ul>
          </div>

          {/* العمود 4: بيانات الاتصال والتأكيد */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-bold">معلومات التواصل</h3>
            <div className="space-y-3 text-sm text-slate-300">
              <a
                href={telHref}
                onClick={() => trackPhoneCallClick('footer')}
                className="flex items-center gap-2.5 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span dir="ltr" className="font-semibold">{SITE_CONFIG.contact.phoneDisplay}</span>
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('footer')}
                className="flex items-center gap-2.5 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>محادثة واتساب سريعة</span>
              </a>

              <div className="flex items-center gap-2.5 text-slate-400 text-xs">
                <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                <span>{SITE_CONFIG.contact.email}</span>
              </div>

              <div className="flex items-center gap-2.5 text-slate-400 text-xs">
                <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                <span>{SITE_CONFIG.contact.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* الشريط السفلي للحقوق والملاحظة التوضيحية */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            جميع الحقوق محفوظة © {new Date().getFullYear()} {SITE_CONFIG.name} · الرياض، المملكة العربية السعودية.
          </p>
          <div className="text-slate-500 text-[11px] text-center md:text-left">
            <span>التسعير النهائي يخضع لتفاصيل عدد الغرف ونوع التغليف والأدوار المتفق عليها مع العميل.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
