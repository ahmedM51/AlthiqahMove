import React from 'react';
import { SITE_CONFIG, trackPhoneCallClick, trackWhatsAppClick } from '../lib/site-config';
import {
  ChevronLeft,
  Calendar,
  Clock,
  CheckCircle2,
  Phone,
  MessageCircle,
  ArrowLeft,
  ShieldCheck,
  Search,
  Truck,
  PackageCheck,
  HelpCircle,
} from 'lucide-react';
import packingImage from '../assets/images/services_furniture_packing_1791883532942.jpg';

interface BlogPageProps {
  onNavigate: (path: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  const hasPhone = SITE_CONFIG.contact.phone && !SITE_CONFIG.contact.phone.includes('0000000');
  const telHref = hasPhone ? `tel:${SITE_CONFIG.contact.phone}` : '#contact';
  const whatsappHref = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
    'السلام عليكم، اطلعت على دليل نصائح نقل الأثاث وأود الاستفسار عن خدمة النقل بالرياض.'
  )}`;

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="مسار التنقل" className="flex items-center gap-2 text-xs text-slate-500">
          <button
            onClick={() => onNavigate('/')}
            className="hover:text-amber-700 transition-colors"
          >
            الرئيسية
          </button>
          <ChevronLeft className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">دليل نصائح نقل العفش</span>
        </nav>

        {/* Header المقال الرئيسي */}
        <header className="space-y-4 text-right">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-700">
            <span>دليل النقل الذكي</span>
            <span aria-hidden="true">·</span>
            <span>نصائح واستراتيجيات حماية الأثاث بالرياض</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight [text-wrap:balance]">
            دليل نصائح لنقل العفش بدون أضرار وكيف تختار أفضل شركة نقل أثاث بالرياض؟
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1 border-b border-slate-200 pb-4">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-600" />
              <span>تاريخ النشر: {SITE_CONFIG.seoArticle.publishDate}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-600" />
              <span>{SITE_CONFIG.seoArticle.readTime}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span>بواسطة: فريق خبراء شركة الثقة لنقل الأثاث بالرياض</span>
          </div>
        </header>

        {/* الصورة الرئيسية للمقال */}
        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-[16/9] bg-slate-100">
          <img
            src={packingImage}
            alt="تغليف الأثاث والعفش لحمايته من الصدمات أثناء النقل في الرياض"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* محتوى المقال الموسع والمحسن للـ SEO */}
        <article className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base text-right">
          <div className="space-y-4">
            <p className="text-slate-800 font-medium leading-relaxed text-base sm:text-lg">
              الانتقال إلى منزل جديد هو بداية مرحلة جديدة ومثيرة، ولكن قد تتحول هذه العملية إلى مصدر قلق وتوتر إذا لم يتم التخطيط لها بشكل صحيح. في هذا الدليل الشامل من <strong className="text-amber-800">شركة الثقة لنقل الأثاث بالرياض</strong>، نقدم لك أهم الخطوات والنصائح لضمان نقل عفشك بسلام ودون أي خسائر أو خدوش.
            </p>
          </div>

          {/* القسم الأول: خطوات هامة قبل يوم نقل الأثاث */}
          <section className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-6 bg-amber-500 rounded-sm inline-block"></span>
              <span>خطوات هامة قبل يوم نقل الأثاث</span>
            </h2>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                <h3 className="font-bold text-slate-900 text-base">1. فرز وتصنيف الأغراض:</h3>
                <p className="text-sm text-slate-600">
                  قم بالتخلص من الأشياء غير المستخدمة أو التبرع بها لتقليل حجم العفش المنقول، مما يوفر تكلفة النقل ويجعل مسكنك الجديد مرتباً من أول يوم.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                <h3 className="font-bold text-slate-900 text-base">2. تجهيز حقيبة المستندات والأشياء الثمينة:</h3>
                <p className="text-sm text-slate-600">
                  احفظ المجوهرات، الأوراق الرسمية، العقود، والأجهزة الشخصية الصغرى في حقيبة خاصة بك، وانقلها بنفسك في سيارتك الشخصية تفادياً لاختلاطها مع كراتين النقل العامة.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                <h3 className="font-bold text-slate-900 text-base">3. تفريغ الثلاجة والمجمدات مسبقاً:</h3>
                <p className="text-sm text-slate-600">
                  قم بتفريغ الثلاجة وتنظيفها وفصل التيار الكهربائي عنها قبل موعد النقل بـ 12 إلى 24 ساعة على الأقل لإذابة الثلج وتفادي تسرب المياه أثناء النقل بالسيارة.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                <h3 className="font-bold text-slate-900 text-base">4. كتابة الملاحظات الواضحة على الكراتين:</h3>
                <p className="text-sm text-slate-600">
                  ضع ملصقاً توضيحياً بلون بارز على كل كرتونة (مثلاً: "أدوات مطبخ - قابل للكسر"، "غرفة النوم الرئيسية"، "شاشات تلفزيون") ليعرف عمال التحميل مكان وضعها الصحيح في المنزل الجديد.
                </p>
              </div>
            </div>
          </section>

          {/* القسم الثاني: معايير اختيار أفضل شركة نقل عفش بالرياض */}
          <section className="space-y-4 pt-6 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-6 bg-amber-500 rounded-sm inline-block"></span>
              <span>معايير اختيار أفضل شركة نقل عفش بالرياض</span>
            </h2>
            <p className="text-slate-600 text-sm">
              عند البحث عن شركة نقل أثاث، يجب التأكد من توفر المعايير الاحترافية التالية لضمان راحة بالك:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-slate-200/90 bg-slate-50/50 space-y-2">
                <span className="font-bold text-slate-900 text-sm block">السمعة والتجارب المثبتة</span>
                <p className="text-xs text-slate-600">
                  ابحث عن الشركات التي تملك آراء إيجابية وتجارب ناجحة في أحياء الرياض (شمالاً وشرقاً وغرباً وجنوباً).
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200/90 bg-slate-50/50 space-y-2">
                <span className="font-bold text-slate-900 text-sm block">توفير خدمات الفك والتغليف</span>
                <p className="text-xs text-slate-600">
                  اختر شركة تقدم خدمة متكاملة تشمل فك غرف النوم والمطابخ وتغليفها بخامات البابلز والكرتون لتوفير الجهد.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200/90 bg-slate-50/50 space-y-2">
                <span className="font-bold text-slate-900 text-sm block">جاهزية الأسطول (ونيت ودينا)</span>
                <p className="text-xs text-slate-600">
                  التأكد من توفر سيارات نقل ونيت سريعة وشاحنات مقفلة مبطنة تحمي المنقولات من أشعة الشمس وأتربة الطريق.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200/90 bg-slate-50/50 space-y-2">
                <span className="font-bold text-slate-900 text-sm block">الانضباط والالتزام بالوقت</span>
                <p className="text-xs text-slate-600">
                  الشركة الاحترافية تحترم وقت العميل وتصل في الساعة المحددة دون تأخير، مع جدول تحرك محدد وواضح.
                </p>
              </div>
            </div>
          </section>

          {/* القسم الثالث: لماذا تعد شركة الثقة الاختيار الأفضل في الرياض؟ */}
          <section className="space-y-4 pt-6 border-t border-slate-100 bg-amber-50/60 -mx-6 sm:-mx-10 p-6 sm:p-10 rounded-2xl">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              لماذا تُعد شركة الثقة الاختيار الأفضل في الرياض؟
            </h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              في <strong className="text-slate-950 font-bold">شركة الثقة لنقل الأثاث بالرياض</strong>، نجمع بين جميع هذه المعايير. نحن نوفر فرق عمل مدرّبة، أحدث أسطول سيارات وونيت نقل ودينا مجهزة، ونستخدم خامات تغليف عالية الجودة (البقيع الهرامي، الكرتون المقوى، والنايلون)، مما يضمن وصول كافة أغراضك بسلام وبنسبة أمان 100%.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={telHref}
                onClick={() => trackPhoneCallClick('blog_article_cta')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>اتصل بنا الآن: {SITE_CONFIG.contact.phoneDisplay}</span>
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('blog_article_cta')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>احجز عبر الواتساب فوراً</span>
              </a>
            </div>
          </section>

        </article>

        {/* CTA الختامي */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 text-center space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold">
            هل تحتاج إلى مساعدة أو استشارة في نقل أثاث منزلك بالرياض؟
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto">
            تواصل مباشرة مع المشرفين الميدانيين لشركة الثقة لتحديد عدد الغرف ونوع التغليف المناسب.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('/contact')}
              className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-lg text-xs transition-colors shadow-sm"
            >
              طلب تسعيرة ومعاينة مجانية
            </button>
            <button
              onClick={() => onNavigate('/services')}
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg text-xs transition-colors border border-slate-700"
            >
              استعراض كافة الخدمات
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
