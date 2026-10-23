import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Clock } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { WhatsAppIcon } from './WhatsAppIcon';
import { SITE_CONFIG, getTelHref, getWhatsAppHref, trackPhoneCallClick, trackWhatsAppClick } from '../lib/site-config';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const telHref = getTelHref();
  const whatsappHref = getWhatsAppHref();

  const nav = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-14 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* شريط حجز سريع أعلى الفوتر */}
        <div className="mb-10 rounded-2xl bg-gradient-to-l from-amber-500/10 via-slate-900 to-slate-900 border border-amber-500/25 p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-right space-y-1">
            <p className="text-white font-black text-lg">تحتاج ونيت الآن؟</p>
            <p className="text-slate-400 text-sm">
              اتصل مباشرة أو راسلنا على الواتساب وأخبرنا بحي الانطلاق وحي الوصول لنعطيك السعر فوراً.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={telHref}
              onClick={() => trackPhoneCallClick('footer_cta')}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span dir="ltr">{SITE_CONFIG.contact.phoneDisplay}</span>
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('footer_cta')}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-black text-sm transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>واتساب فوري</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-slate-800/80">
          {/* العمود 1: الهوية */}
          <div className="space-y-4">
            <BrandLogo variant="light" withTagline />
            <p className="text-slate-400 text-sm leading-relaxed">
              ونيت ودينا لنقل العفش والأغراض والأجهزة الكهربائية والبضائع داخل مدينة الرياض، مع خدمات الفك والتركيب
              والتغليف الآمن ومواعيد منضبطة وسعر واضح قبل التحرك.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-400/90 pt-1">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>فريق تحميل وفنيو نجارة وتغليف وقائي متعدد الطبقات</span>
            </div>
          </div>

          {/* العمود 2: روابط الصفحات */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-bold">روابط سريعة</h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <button onClick={() => nav('/')} className="hover:text-amber-400 transition-colors text-right">
                  الرئيسية - ونيت نقل عفش بالرياض
                </button>
              </li>
              <li>
                <button onClick={() => nav('/services')} className="hover:text-amber-400 transition-colors text-right">
                  خدمات الونيت والدينا والأسعار
                </button>
              </li>
              <li>
                <button onClick={() => nav('/blog')} className="hover:text-amber-400 transition-colors text-right">
                  دليل نقل العفش والأجهزة بأمان
                </button>
              </li>
              <li>
                <button onClick={() => nav('/about')} className="hover:text-amber-400 transition-colors text-right">
                  من نحن ونطاق التغطية
                </button>
              </li>
              <li>
                <button onClick={() => nav('/testimonials')} className="hover:text-amber-400 transition-colors text-right">
                  آراء عملاء الونيت في الرياض
                </button>
              </li>
              <li>
                <button onClick={() => nav('/contact')} className="hover:text-amber-400 transition-colors text-right">
                  اتصل بنا واطلب تسعيرة
                </button>
              </li>
              <li>
                <button onClick={() => nav('/privacy-policy')} className="hover:text-amber-400 transition-colors text-right">
                  سياسة الخصوصية
                </button>
              </li>
            </ul>
          </div>

          {/* العمود 3: مناطق الخدمة */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-bold">أحياء ومناطق الخدمة بالرياض</h3>
            <ul className="space-y-2.5 text-xs text-slate-400 leading-relaxed">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>شمال الرياض: الملقا، حطين، الياسمين، النرجس، العارض، الصحافة</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>شرق الرياض: اليرموك، المونسية، الرمال، قرطبة، الروضة، الخليج</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>وسط الرياض: العليا، السليمانية، الملز، المعذر، المربع</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>غرب الرياض: طويق، ظهرة لبن، العريجاء، ديراب، المهدية</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>جنوب الرياض: الشفا، نمار، السويدي، المنصورة، الحاير</span>
              </li>
            </ul>
          </div>

          {/* العمود 4: التواصل */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-bold">معلومات التواصل</h3>
            <div className="space-y-3 text-sm text-slate-300">
              <a
                href={telHref}
                onClick={() => trackPhoneCallClick('footer_block')}
                className="flex items-center gap-2.5 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span dir="ltr" className="font-semibold">
                  {SITE_CONFIG.contact.phoneDisplay}
                </span>
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('footer_block')}
                className="flex items-center gap-2.5 text-[#25D366] hover:text-[#1EBE5D] transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>محادثة واتساب فورية</span>
              </a>

              <div className="flex items-center gap-2.5 text-slate-400 text-xs">
                <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                <span>{SITE_CONFIG.contact.email}</span>
              </div>

              <div className="flex items-start gap-2.5 text-slate-400 text-xs">
                <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.contact.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            جميع الحقوق محفوظة © {new Date().getFullYear()} {SITE_CONFIG.name} · الرياض، المملكة العربية السعودية.
          </p>
          <p className="text-[11px] text-center md:text-left">
            التسعير النهائي يخضع لعدد الغرف وحجم الأثاث وعدد الأدوار والمسافة، ويُتفق عليه قبل تحرك السيارة.
          </p>
        </div>
      </div>
    </footer>
  );
};
