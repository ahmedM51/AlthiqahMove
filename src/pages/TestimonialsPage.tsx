import React from 'react';
import { SITE_CONFIG, trackPhoneCallClick, trackWhatsAppClick } from '../lib/site-config';
import { ChevronLeft, Star, Quote, Phone, MessageCircle, ArrowLeft, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';

interface TestimonialsPageProps {
  onNavigate: (path: string) => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onNavigate }) => {
  const hasPhone = SITE_CONFIG.contact.phone && !SITE_CONFIG.contact.phone.includes('0000000');
  const telHref = hasPhone ? `tel:${SITE_CONFIG.contact.phone}` : '#contact';
  const whatsappHref = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
    'السلام عليكم، اطلعت على آراء العملاء لشركة الثقة وأود حجز خدمة نقل أثاث بالرياض.'
  )}`;

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Breadcrumb Navigation */}
        <nav aria-label="مسار التنقل" className="flex items-center gap-2 text-xs text-slate-500">
          <button
            onClick={() => onNavigate('/')}
            className="hover:text-amber-700 transition-colors"
          >
            الرئيسية
          </button>
          <ChevronLeft className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">آراء العملاء</span>
        </nav>

        {/* Section Header */}
        <div className="max-w-3xl space-y-4 text-right">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-700">
            <span>تجارب حقيقية وثقة مستحقة</span>
            <span aria-hidden="true">·</span>
            <span>أحياء مدينة الرياض</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            آراء وتجارب عملاء شركة الثقة لنقل العفش بالرياض
          </h1>
          <p className="text-slate-600 text-base leading-relaxed">
            سعادة ورضا عملائنا هم سر نجاحنا واستمراريتنا. نستعرض هنا جانباً من تجارب عملائنا الكرام بعد إتمام عمليات نقل منازلهم ومكاتبهم بأمان تام في مختلف أحياء العاصمة.
          </p>
        </div>

        {/* شبكة آراء العملاء */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {SITE_CONFIG.testimonials.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-xl border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-amber-200/80 rotate-180" />
                </div>

                <p className="text-slate-700 text-base leading-relaxed font-medium">
                  "{test.comment}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-right">
                <div>
                  <div className="text-base font-bold text-slate-900">{test.clientName}</div>
                  <div className="text-xs text-amber-700 font-semibold">{test.role}</div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200/60">
                  <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span className="max-w-[200px] truncate">{test.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ضمانات الجودة والأمان */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 space-y-6">
          <div className="max-w-2xl space-y-2 text-right">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              لماذا يوصي بنا عملاء نقل الأثاث في الرياض؟
            </h2>
            <p className="text-sm text-slate-600">
              نلتزم بأعلى معايير الانضباط المهني في كل خطوة من خطوات النقل:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">حماية كاملة من الخدوش</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                تغليف الفقاعات المقوى والسترتش الحراري يحافظ على الزجاج والخشب والرخام طوال فترة التحميل والمسير.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">التزام دقيق بالمواعيد</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                حضور الشاحنة وفريق العمل في الوقت المحدد بالضبط دون أي تأخير عن الجدول المتفق عليه.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">أسعار واضحة ومنافسة</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                تسعير شفاف وشامل لكافة البنود المحددة دون أي تكاليف خفية أو إكراميات إضافية مفاجئة.
              </p>
            </div>
          </div>
        </div>

        {/* CTA الانضمام لقائمة العملاء السعداء */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-black">
              انضم إلى مئات العملاء الراضين عن خدمات شركة الثقة بالرياض
            </h2>
            <p className="text-slate-300 text-sm">
              اتصل الآن أو راسلنا عبر واتساب للحصول على استشارة مجانية وعرض سعر فوري مخصص لمنزلك.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={telHref}
              onClick={() => trackPhoneCallClick('testimonials_cta')}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm transition-all"
            >
              <Phone className="w-4 h-4 text-slate-950" />
              <span dir="ltr">{SITE_CONFIG.contact.phoneDisplay}</span>
            </a>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('testimonials_cta')}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>مراسلة واتساب فورية</span>
            </a>

            <button
              onClick={() => onNavigate('/contact')}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm transition-all border border-slate-700"
            >
              <span>طلب تسعيرة عبر النموذج</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
