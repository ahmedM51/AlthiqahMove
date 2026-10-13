import React from 'react';
import { SITE_CONFIG, trackPhoneCallClick, trackWhatsAppClick } from '../lib/site-config';
import { ChevronLeft, Phone, MessageCircle, Mail, MapPin, Clock, ShieldAlert } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const hasPhone = SITE_CONFIG.contact.phone && !SITE_CONFIG.contact.phone.includes('0000000');
  const telHref = hasPhone ? `tel:${SITE_CONFIG.contact.phone}` : '#contact';
  const whatsappHref = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
    'السلام عليكم ورحمة الله، أود الاستفسار عن خدمة نقل أثاث في الرياض.'
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
          <span className="text-slate-900 font-bold">اتصل بنا</span>
        </nav>

        {/* Section Header */}
        <div className="max-w-3xl space-y-4 text-right">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-700">
            <span>تواصل مع شركة الثقة لنقل الأثاث</span>
            <span aria-hidden="true">·</span>
            <span>استجابة سريعة وتنسيق مباشر طوال أيام الأسبوع</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            تواصل مع شركة الثقة لنقل الأثاث بالرياض
          </h1>
          <p className="text-slate-600 text-base leading-relaxed">
            هل تخطط للانتقال أو نقل أغراضك؟ نحن في خدمتك طوال أيام الأسبوع من الساعة <strong>06:00 صباحاً حتى 12:00 منتصف الليل</strong>. المملكة العربية السعودية - الرياض. للاتصال والاستفسار أو المراسلة عبر واتساب: تواصل معنا الآن للحصول على أفضل العروض والخصومات.
          </p>
        </div>

        {/* شبكة بيانات الاتصال ونموذج الطلب */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* الجانب الأيمن: بطاقات الاتصال والمعلومات */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-5">
              <h2 className="text-lg font-bold text-slate-900 pb-2 border-b border-slate-100">
                وسائل التواصل المباشر
              </h2>

              <div className="space-y-4 text-sm">
                <a
                  href={telHref}
                  onClick={() => trackPhoneCallClick('contact_page_block')}
                  className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-200/80"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">الاتصال الهاتفي</span>
                    <span dir="ltr" className="text-base font-bold text-slate-900 block text-right mt-0.5">
                      {SITE_CONFIG.contact.phoneDisplay}
                    </span>
                    <span className="text-[11px] text-slate-500">متاح طوال ساعات العمل اليومية</span>
                  </div>
                </a>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('contact_page_block')}
                  className="flex items-start gap-3 p-3.5 rounded-lg bg-emerald-50/60 hover:bg-emerald-50 transition-colors border border-emerald-200/70"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-emerald-800 font-medium block">تطبيق واتساب</span>
                    <span className="text-sm font-bold text-emerald-900 block mt-0.5">
                      محادثة فورية وإرسال صور الأثاث
                    </span>
                    <span className="text-[11px] text-emerald-700">لتقدير الحجم وكميات التغليف بسرعة</span>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-50 border border-slate-200/80">
                  <div className="w-10 h-10 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">البريد الإلكتروني</span>
                    <span className="text-xs font-semibold text-slate-800 block mt-0.5">
                      {SITE_CONFIG.contact.email}
                    </span>
                    <span className="text-[11px] text-slate-500">للاستفسارات الرسمية وعقود الشركات</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-50 border border-slate-200/80">
                  <div className="w-10 h-10 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">أوقات العمل والتنسيق</span>
                    <span className="text-xs font-semibold text-slate-800 block mt-0.5">
                      {SITE_CONFIG.contact.workingHours}
                    </span>
                    <span className="text-[11px] text-slate-500">نقل العفش متاح حسب الموعد المجدول مسبقاً</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-50 border border-slate-200/80">
                  <div className="w-10 h-10 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">الموقع ونطاق الخدمة</span>
                    <span className="text-xs font-semibold text-slate-800 block mt-0.5">
                      {SITE_CONFIG.contact.address}
                    </span>
                    <span className="text-[11px] text-slate-500">تغطية ميدانية لكافة أحياء ومخططات الرياض</span>
                  </div>
                </div>
              </div>
            </div>

            {/* تنبيه شفاف عن مراجعة البيانات قبل النشر */}
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
              <div className="flex items-center gap-1.5 font-bold">
                <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
                <span>ملاحظة تنظيمية للعميل:</span>
              </div>
              <p>
                يرجى التأكد من كتابة رقم الجوال بدقة ليتسنى لمشرف الحركة الاتصال بكم وتأكيد موقع التحميل والتسليم.
              </p>
            </div>
          </div>

          {/* الجانب الأيسر: نموذج التواصل والطلب المتكامل */}
          <div className="lg:col-span-7">
            <ContactForm sourceTitle="نموذج التواصل السريع وحجز المواعيد بالرياض" />
          </div>
        </div>
      </div>
    </div>
  );
};
