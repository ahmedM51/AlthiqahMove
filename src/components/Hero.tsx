import React from 'react';
import { Phone, ArrowLeft, Shield, Clock, CheckCircle2, Zap } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { SITE_CONFIG, getTelHref, getWhatsAppHref, trackPhoneCallClick, trackWhatsAppClick } from '../lib/site-config';
import heroImage from '../assets/images/hero_moving_truck_riyadh_1791883533123.jpg';

interface HeroProps {
  onNavigate: (path: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const telHref = getTelHref();
  const whatsappHref = getWhatsAppHref('السلام عليكم، اريد حجز ونيت نقل عفش بالرياض. موقعي في حي: ... وعدد الغرف: ...');

  return (
    <section className="relative bg-slate-900 text-white overflow-hidden border-b border-slate-800">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 opacity-90 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* النص وأزرار التحويل */}
          <div className="lg:col-span-7 space-y-5 text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-xs font-bold text-emerald-300">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>السيارات متاحة الآن داخل الرياض · خدمة يومية طوال الأسبوع</span>
            </div>

            {/* العنوان الرئيسي المستهدف لـ SEO وإعلانات Google */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.25] text-white [text-wrap:balance]">
              ونيت نقل عفش بالرياض - <span className="text-amber-400">وصول سريع خلال 20 دقيقة</span> بأرخص الأسعار
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              ونيت ودينا لنقل العفش والأغراض والأجهزة الكهربائية والبضائع داخل جميع أحياء الرياض. نوفر سيارة بالمقاس
              المناسب لحاجتك مع فريق تحميل يغلّف ويفك ويركّب بنفسه، وسعر ثابت يُتفق عليه قبل التحرك بدون أي رسوم مفاجئة.
            </p>

            {/* زرّا الاتصال والواتساب الرئيسيان */}
            <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
              <a
                href={telHref}
                onClick={() => trackPhoneCallClick('hero_primary')}
                className="flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-amber-400 hover:bg-amber-300 active:scale-[0.98] text-slate-950 font-black text-base transition-all shadow-lg whitespace-nowrap"
              >
                <Phone className="w-5 h-5" />
                <span>اتصل الآن</span>
                <span dir="ltr" className="font-extrabold tracking-wide border-r border-slate-900/20 pr-2 mr-1">
                  {SITE_CONFIG.contact.phoneDisplay}
                </span>
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('hero_primary')}
                className="flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] active:scale-[0.98] text-white font-black text-base transition-all shadow-lg whitespace-nowrap"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>احجز عبر واتساب</span>
              </a>
            </div>

            <p className="text-xs text-slate-400">
              أرسل صور الأثاث على الواتساب وستصلك التسعيرة ووقت وصول الونيت مباشرة.
            </p>

            {/* شارات الثقة */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-200 border-t border-slate-800/80">
              {SITE_CONFIG.trustBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="font-semibold">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* الصورة البصرية */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-800">
              <img
                src={heroImage}
                alt="ونيت نقل عفش وأثاث في الرياض مع فريق تحميل وتغليف"
                className="w-full aspect-[4/3] sm:aspect-[16/11] object-cover"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

              <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700/80 text-right">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold text-amber-400 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5" />
                      <span>تحرك فوري بعد تأكيد الحجز</span>
                    </p>
                    <p className="text-sm font-bold text-white mt-0.5">
                      ونيتات ودينات بأحجام مختلفة لتناسب حجم أثاثك
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* شريط معلومات سريع */}
        <div className="mt-10 sm:mt-14 pt-6 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-5 text-right">
          <div className="space-y-1">
            <div className="text-xl sm:text-2xl font-black text-amber-400 font-mono tabular-nums">20 دقيقة</div>
            <div className="text-xs text-slate-400">متوسط وصول الونيت داخل الأحياء القريبة</div>
          </div>
          <div className="space-y-1">
            <div className="text-xl sm:text-2xl font-black text-white font-mono tabular-nums">100%</div>
            <div className="text-xs text-slate-400">تغطية لكافة أحياء ومخططات الرياض</div>
          </div>
          <div className="space-y-1">
            <div className="text-xl sm:text-2xl font-black text-white font-mono tabular-nums">06:00 - 12:00</div>
            <div className="text-xs text-slate-400">ساعات الخدمة اليومية طوال الأسبوع</div>
          </div>
          <div className="space-y-1">
            <div className="text-xl sm:text-2xl font-black text-amber-400 font-mono tabular-nums">0 ريال</div>
            <div className="text-xs text-slate-400">تكلفة الاستشارة وتسعير الزيارة المبدئية</div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button
            onClick={() => onNavigate('/services')}
            className="flex items-center gap-2 py-3 px-5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm transition-all border border-slate-700"
          >
            <span>استعراض خدمات الونيت والدينا بالتفصيل</span>
            <ArrowLeft className="w-4 h-4 text-amber-400" />
          </button>
          <span className="flex items-center gap-1.5 text-xs text-slate-400">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>احجز قبل موعد النقل بيوم لضمان أفضل سعر</span>
          </span>
        </div>
      </div>
    </section>
  );
};
