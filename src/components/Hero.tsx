import React from 'react';
import { Phone, MessageCircle, ArrowLeft, Shield, Clock, Award, CheckCircle } from 'lucide-react';
import { SITE_CONFIG, trackPhoneCallClick, trackWhatsAppClick } from '../lib/site-config';
import heroImage from '../assets/images/hero_moving_truck_riyadh_1791883533123.jpg';

interface HeroProps {
  onNavigate: (path: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const hasPhone = SITE_CONFIG.contact.phone && !SITE_CONFIG.contact.phone.includes('0000000');
  const telHref = hasPhone ? `tel:${SITE_CONFIG.contact.phone}` : '#contact';
  const whatsappHref = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(SITE_CONFIG.contact.whatsappDefaultMessage)}`;

  return (
    <section className="relative bg-slate-900 text-white overflow-hidden border-b border-slate-800">
      {/* خلفية تدرج ناعمة */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 opacity-90 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-14 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* النص والعناوين والتحويلات */}
          <div className="lg:col-span-7 space-y-6 text-right">
            {/* مؤشر موقع الخدمة - نص غير محاط بحبوب زائفة */}
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
              <span className="inline-block w-2 h-2 rounded-full bg-amber-400"></span>
              <span>شركة الثقة لنقل الأثاث بالرياض</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400 font-normal">أسطول ونيت وشاحنات مجهزة لكافة أحياء الرياض وخارجها</span>
            </div>

            {/* العنوان الرئيسي */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.25] text-white [text-wrap:balance]">
              شركة الثقة لنقل الأثاث بالرياض | <span className="text-amber-400">نقل عفش آمن وسريع</span> مع الفك والتغليف والتركيب
            </h1>

            {/* الوصف الواضح والصادق المستهدف للـ SEO وGoogle Ads */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              أهلاً بك في <strong className="text-white font-bold">شركة الثقة لنقل الأثاث بالرياض</strong>، خيارك الأول لنقل العفش والأغراض بكل أمان واحترافية. نقدم خدمة نقل عفش متكاملة تشمل الفك، التغليف، التحميل، والنقل بشاحنات وونيتات مجهزة حديثة، وصولاً إلى التركيب في موقعك الجديد مع الالتزام التام بالمواعيد وضمان حماية ممتلكاتك من أي خدوش أو تلف.
            </p>

            {/* أزرار الإجراءات الرئيسية لصفحة الهبوط وGoogle Ads */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={telHref}
                onClick={() => trackPhoneCallClick('hero_primary')}
                className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-amber-400 hover:bg-amber-300 active:scale-[0.98] text-slate-950 font-black text-sm transition-all shadow-md whitespace-nowrap shrink-0"
              >
                <Phone className="w-4 h-4 text-slate-950" />
                <span dir="ltr" className="font-extrabold">{SITE_CONFIG.contact.phoneDisplay}</span>
                <span className="text-xs font-normal mr-1">(اتصال فوري)</span>
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('hero_primary')}
                className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white font-bold text-sm transition-all shadow-md whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>مراسلة واتساب وحجز موعد</span>
              </a>

              <button
                onClick={() => onNavigate('/services')}
                className="flex items-center justify-center gap-2 py-3.5 px-5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm transition-all border border-slate-700 whitespace-nowrap shrink-0"
              >
                <span>استعراض الخدمات</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>

            {/* نقاط الثقة الواضحة بدون ادعاءات مضللة */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-300 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>سيارات مجهزة ومربوطة بأمان</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>فنيو نجارة لفك وتركيب الغرف</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>التزام دقيق بمواعيد الوصول</span>
              </div>
            </div>
          </div>

          {/* الصورة البصرية الرئيسية */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-800">
              <img
                src={heroImage}
                alt="شاحنة ونيت ودينا نقل أثاث حديثة في الرياض مع فريق العمل"
                className="w-full aspect-[4/3] sm:aspect-[16/11] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700/80 text-right">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-amber-400">جاهزية كاملة لخدمة أحياء الرياض</p>
                    <p className="text-sm font-bold text-white mt-0.5">سيارات نقل ونيت ودينا بأطوال وسعات مختلفة</p>
                  </div>
                  <div className="w-9 h-9 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* شريط الإحصائيات والمعايير الواقعية في صف واحد كامل أسفل الهيرو */}
        <div className="mt-14 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-right">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono tabular-nums">100%</div>
            <div className="text-xs text-slate-400">تغطية لكافة أحياء ومخططات الرياض</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-white font-mono tabular-nums">6 ص - 12 م</div>
            <div className="text-xs text-slate-400">ساعات العمل اليومية (حتى منتصف الليل)</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-white font-mono tabular-nums">4 طبقات</div>
            <div className="text-xs text-slate-400">خامات التغليف للقطع الحساسة والزجاج</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono tabular-nums">0 ريال</div>
            <div className="text-xs text-slate-400">تكلفة الاستشارة الهاتفية والمعاينة المبدئية</div>
          </div>
        </div>
      </div>
    </section>
  );
};
