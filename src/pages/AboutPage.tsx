import React from 'react';
import { SITE_CONFIG, trackPhoneCallClick, trackWhatsAppClick } from '../lib/site-config';
import {
  ChevronLeft,
  MapPin,
  ShieldCheck,
  Truck,
  Wrench,
  Clock,
  Phone,
  MessageCircle,
  ArrowLeft,
  CheckCircle2,
} from 'lucide-react';
import heroImage from '../assets/images/hero_moving_truck_riyadh_1791883533123.jpg';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const hasPhone = SITE_CONFIG.contact.phone && !SITE_CONFIG.contact.phone.includes('0000000');
  const telHref = hasPhone ? `tel:${SITE_CONFIG.contact.phone}` : '#contact';
  const whatsappHref = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
    'السلام عليكم، أود الاستفسار عن نطاق خدماتكم لشركة الونيت الذكي للنقل بالرياض.'
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
          <span className="text-slate-900 font-bold">نبذة عنا</span>
        </nav>

        {/* Header Section */}
        <div className="max-w-3xl space-y-4 text-right">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-700">
            <span>عن شركة الثقة لنقل العفش</span>
            <span aria-hidden="true">·</span>
            <span>الخبرة والأمان في نقل العفش بالرياض</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            عن شركة الثقة | الخبرة والأمان في نقل العفش بالرياض
          </h1>
          <p className="text-slate-600 text-base leading-relaxed">
            تعتبر <strong>شركة الثقة</strong> من الشركات الرائدة في مجال نقل الأثاث والممتلكات داخل وخارج مدينة الرياض. نعتمد على فرق عمل مدرّبة بكفاءة عالية لتعامل آمن مع كافة أنواع الأثاث والمعدات والأجهزة الكهربائية. هدفنا الأساسي هو تقديم تجربة نقل مريحة وسلسة للعميل من خلال استخدام أفضل مواد التغليف وتوفير شاحنات وسيارات ونيت بمقاسات مختلفة لتلبية كافة الاحتياجات بأعلى معايير الجودة وأنسب الأسعار.
          </p>
        </div>

        {/* الصورة التعريفية */}
        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative aspect-[21/9] bg-slate-900">
          <img
            src={heroImage}
            alt="سيارات وفريق الونيت الذكي لنقل العفش في الرياض"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 right-6 left-6 text-white text-right">
            <span className="text-xs font-bold text-amber-400 block mb-1">الكوادر والأسطول</span>
            <p className="text-sm sm:text-base font-semibold max-w-xl">
              تجهيز السيارات بأحزمة تثبيت وبطانيات عازلة لحماية الأثاث من صدمات الطريق وأتربة المناخ.
            </p>
          </div>
        </div>

        {/* رسالة الشركة وطريقة العمل */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="bg-white rounded-xl border border-slate-200 p-8 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">رسالتنا في نقل الأثاث</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              رسالتنا هي تحويل يوم النقل المرهق إلى تجربة سلسة ومنظمة. نحقق ذلك من خلال تدريب الكوادر الفنية على التعامل الحذر مع القطع الحساسة، واختيار السيارة الملائمة لحجم النقل، وتقديم تسعير واضح ومحدد سلفاً يبني الثقة المستدامة مع كل أسرة ومؤسسة نتعامل معها.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-8 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
              <Wrench className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">طريقة ومنهجية العمل</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              نبدأ بسماع رغبة العميل وتحديد نوع العفش بدقة. ثم نوجه الفنيين المهرة لفك الدواليب والأسرة مع ترقيم القطع وحفظ مساميرها، يليها التغليف الواقي متعدد الطبقات، ثم التحميل المتوازن داخل الصندوق وتثبيته بأحزمة الأمان، وصولاً إلى التفريغ وإعادة التركيب في الغرف المحددة بالمسكن الجديد.
            </p>
          </div>
        </div>

        {/* نطاق الخدمة وتغطية أحياء الرياض */}
        <div className="bg-white rounded-xl border border-slate-200 p-8 space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-700">
            <MapPin className="w-4 h-4" />
            <span>نطاق التغطية الجغرافية</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            خدماتنا تغطي مختلف قطاعات وأحياء مدينة الرياض
          </h2>
          <p className="text-slate-600 text-sm max-w-3xl leading-relaxed">
            بفضل الانتشار المرن لسياراتنا، نستطيع الوصول بسرعة إلى كافة مخططات وأحياء العاصمة:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {SITE_CONFIG.serviceAreas.map((area, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-slate-50 border border-slate-200/80 text-xs text-slate-800 flex items-start gap-2.5"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{area}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA التواصل المباشر */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-black">
              هل تستعد للانتقال إلى مسكنك الجديد في الرياض؟
            </h2>
            <p className="text-slate-300 text-sm">
              فريقنا جاهز لمساعدتك في تنسيق الموعد وتحديد الحجم والسيارة الأنسب لاحتياجك.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={telHref}
              onClick={() => trackPhoneCallClick('about_cta')}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm transition-all"
            >
              <Phone className="w-4 h-4 text-slate-950" />
              <span dir="ltr">{SITE_CONFIG.contact.phoneDisplay}</span>
            </a>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('about_cta')}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>محادثة واتساب مباشرة</span>
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
