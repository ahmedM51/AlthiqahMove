import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { ServiceCard } from '../components/ServiceCard';
import { ContactForm } from '../components/ContactForm';
import { SITE_CONFIG, trackPhoneCallClick, trackWhatsAppClick } from '../lib/site-config';
import {
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  Phone,
  MessageCircle,
  Truck,
  Layers,
  Clock,
  Sparkles,
  MapPin,
  HelpCircle,
  ArrowLeft,
  Star,
  Quote,
  BookOpen,
} from 'lucide-react';

import packingImage from '../assets/images/services_furniture_packing_1791883532942.jpg';
import assemblyImage from '../assets/images/services_furniture_assembly_1791883533574.jpg';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>('dismantling-assembly');

  const faqs = [
    {
      q: 'كيف يتم احتساب تكلفة نقل الأثاث في الرياض من شركة الثقة؟',
      a: 'تعتمد التكلفة على عوامل واضحة ومعلنة: حجم العفش وعدد الغرف، عدد الأدوار في موقعي الإنزال والتحميل وتوفر المصعد، المسافة بين الحيين، ونوع الخدمات الإضافية كالتغليف الشامل وفك وتركيب المطابخ والمكيفات. نقدم تقديراً ثابتاً ومسبقاً بدون أي رسوم خفية.',
    },
    {
      q: 'هل توفرون خامات التغليف مثل البقيع الهرامي والكرتون المقوى؟',
      a: 'نعم، نوفر خامات تغليف احترافية معتمدة تشمل بلاستيك الفقاعات المقوى (البقيع الهرامي / Bubble Wrap)، كراتين التعبئة متعددة المقاسات، النايلون المطاطي (السترتش رول)، والبطانيات الواقية لحماية الأخشاب والأجهزة وشاشات التلفزيون من أي خدش.',
    },
    {
      q: 'هل يشمل العمل فك وتركيب غرف النوم والمطابخ ودواليب إيكيا؟',
      a: 'نعم، يضم فريقنا فنيي نجارة متمرسين في فك وإعادة تركيب غرف النوم (المودرن، الكلاسيك، وإيكيا) مع ترقيم القطع وحفظ مساميرها، بالإضافة إلى فك وتعديل وتركيب المطابخ الرخامية والألمنيوم وتثبيت الستائر والشاشات.',
    },
    {
      q: 'ما هي الأحياء والمناطق التي تغطونها داخل وخارج مدينة الرياض؟',
      a: 'نغطي كافة أحياء الرياض: شمال الرياض (الصحافة، الياسمين، حطين، النرجس، العارض)، شرق الرياض (اليرموك، المونسية، الروضة، الخليج، الرمال)، وسط وغرب وجنوب الرياض، بالإضافة إلى رحلات النقل بين الرياض ومختلف مدن المملكة.',
    },
    {
      q: 'ما هي مواعيد العمل اليومية لشركة الثقة؟',
      a: 'نعمل طوال أيام الأسبوع من الساعة 06:00 صباحاً حتى 12:00 منتصف الليل، لتمكينكم من اختيار الوقت الأنسب لكم سواء في الصباح الباكر أو خلال الفترة المسائية.',
    },
  ];

  const hasPhone = SITE_CONFIG.contact.phone && !SITE_CONFIG.contact.phone.includes('0000000');
  const telHref = hasPhone ? `tel:${SITE_CONFIG.contact.phone}` : '#contact';
  const whatsappHref = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(SITE_CONFIG.contact.whatsappDefaultMessage)}`;

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceForQuote(serviceId);
    const formElement = document.getElementById('quote-form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* 3. Hero Section */}
      <Hero onNavigate={onNavigate} />

      {/* 4. نبذة قصيرة عن الشركة وخدماتها بالرياض (محتوى SEO أصلي) */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-700">
                <span>عن شركة الثقة لنقل الأثاث</span>
                <span aria-hidden="true">·</span>
                <span>الخبرة والأمان في نقل العفش بالرياض</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                شركة الثقة لنقل الأثاث بالرياض | نقل عفش آمن مع الفك والتغليف والتركيب
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                هل تبحث عن شركة نقل عفش بالرياض تجمع بين السرعة، الأمان، والأسعار المناسبة؟ <strong>شركة الثقة لنقل الأثاث بالرياض</strong> هي خيارك الأولي والأفضل لنقل العفش والأثاث المكتبي والمنزلي داخل وخارج الرياض بأعلى معايير الجودة والأمان.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                نحن نعلم أن عملية نقل الأثاث تعتبر تجربة مجهدة للأفراد والعائلات، ولهذا نسعى في <strong>شركة الثقة</strong> إلى تقديم خدمة نقل متكاملة ومريحة تبدأ من فك الأثاث وتغليفه بأجود المواد، مروراً بتحميله ونقله عبر شاحنات وونيتات مجهزة، وصولاً إلى تركيبه وترتيبه في موقعك الجديد.
              </p>
            </div>

            <div className="lg:col-span-4 bg-slate-50 border border-slate-200/90 rounded-xl p-6 space-y-4">
              <h3 className="text-sm font-bold text-slate-900">لماذا تختار شركة الثقة؟</h3>
              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>الالتزام التام بالمواعيد:</strong> نصلك في الوقت المحدد بدقة ودون أي تأخير.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>فريق عمل مدرب ومحترف:</strong> فنيون وعمالة خبيرة في التعامل مع جميع أنواع الأثاث والمطابخ.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>تغليف وحماية متكاملة:</strong> بقيع هرامي، كرتون مقوى، وشريط تثبيت لمنع أي خدوش.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>أسطول سيارات وونيت مجهز:</strong> شاحنات مقفلة وسيارات ونيت بمقاسات مختلفة لتناسب احتياجك.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. بطاقات الخدمات الرئيسية */}
      <section className="py-20 bg-slate-50 border-b border-slate-200" id="services-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-700">
              <span>خدماتنا المتكاملة</span>
              <span aria-hidden="true">·</span>
              <span>حلول تلائم المنازل والشركات</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900">
              خدمات نقل الأثاث والعفش بالرياض | شركة الثقة
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              نوفر باقة شاملة من الخدمات المصممة لتلبية احتياجات الأفراد والشركات في كافة أحياء الرياض وخارجها.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SITE_CONFIG.services.map((service, index) => {
              let cardImage: string | undefined = undefined;
              if (index === 0) cardImage = assemblyImage; // فك وتركيب الأثاث
              if (index === 1) cardImage = packingImage; // تغليف وتعبئة

              return (
                <ServiceCard
                  key={service.id}
                  service={service}
                  imageSrc={cardImage}
                  onSelectService={handleSelectService}
                />
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('/services')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-lg border border-slate-300 text-sm transition-colors shadow-sm"
            >
              <span>عرض تفاصيل جميع الخدمات وإرشادات التجهيز</span>
              <ArrowLeft className="w-4 h-4 text-amber-600" />
            </button>
          </div>
        </div>
      </section>

      {/* تغطية أحياء الرياض المخصصة للـ SEO المحلي */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold text-amber-700">تغطية شاملة لكافة الأحياء</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              أسطول شركة الثقة بالقرب منك في جميع مناطق الرياض
            </h2>
            <p className="text-sm text-slate-600">
              مهما كان موقعك داخل مدينة الرياض، سياراتنا وفريقنا جاهزون لخدمتك فوراً:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-right">
              <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span>نقل عفش شمال الرياض</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                الصحافة، الياسمين، حطين، النرجس، العارض، الملقا، العقيق، والربيع.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-right">
              <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span>نقل عفش شرق الرياض</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                اليرموك، المونسية، الروضة، الخليج، اشبيلية، الرمال، وقرطبة.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-right">
              <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span>وسط وجنوب وغرب الرياض</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                العليا، السليمانية، طويق، ظهرة لبن، السويدي، الشفا، ونمار.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم آراء العملاء المميز على الصفحة الرئيسية */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div className="space-y-2 text-right">
              <span className="text-xs font-bold text-amber-700">تجارب حقيقية</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                آراء عملاء شركة الثقة لنقل العفش بالرياض
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/testimonials')}
              className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors"
            >
              <span>مشاهدة كافة آراء العملاء</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SITE_CONFIG.testimonials.slice(0, 2).map((test) => (
              <div
                key={test.id}
                className="bg-white rounded-xl border border-slate-200/90 p-6 flex flex-col justify-between shadow-sm"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed font-medium">
                    "{test.comment}"
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900">{test.clientName}</span>
                  <span className="text-slate-500">{test.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* قسم دليل مقالات الـ SEO والنصائح */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50/50 rounded-2xl border border-amber-200/80 p-8 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3 text-right">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-800">
                  <BookOpen className="w-4 h-4" />
                  <span>دليل نصائح وإرشادات نقل العفش</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  {SITE_CONFIG.seoArticle.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {SITE_CONFIG.seoArticle.excerpt}
                </p>
              </div>
              <div className="lg:col-span-4 text-center lg:text-left">
                <button
                  onClick={() => onNavigate('/blog')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg text-xs transition-colors shadow-sm"
                >
                  <span>قراءة الدليل الشامل لنقل العفش</span>
                  <ArrowLeft className="w-4 h-4 text-amber-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. قسم «لماذا تختارنا؟» */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-2xl mb-14 space-y-3">
            <div className="text-xs font-bold text-amber-700">معايير الجودة والأمان</div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              لماذا يثق بنا عملاء نقل الأثاث في الرياض؟
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              مزايا عملية واضحة قائمة على احترام وقت العميل وسلامة مقتنياته ومسكنه.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl border border-slate-200/90 bg-white space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">أسطول ونيت وشاحنات مجهزة</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                سيارات ونيت سريعة وشاحنات دينا مغلقة ومبطنة لحماية الأثاث من أشعة الشمس والغبار والرياح.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200/90 bg-white space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">مواد تغليف متعددة الطبقات</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                استخدام البقيع الهرامي والكرتون المقوى والنايلون لحماية الزجاج والكنب والأجهزة الكهربائية.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200/90 bg-white space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">فنيون مدربون في النجارة</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                فريق متمرس في التعامل مع كافة أنواع غرف النوم الإيكيا والمودرن والمطابخ دون إتلاف المفصلات.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200/90 bg-white space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">دقة الالتزام بالمواعيد</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                تحديد جدول زمني منظم لوصول الشاحنة والفريق، مع العمل يومياً من 6 صباحاً حتى 12 منتصف الليل.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. خطوات طلب الخدمة */}
      <section className="py-20 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-2xl mb-14 space-y-3 text-right">
            <div className="text-xs font-bold text-amber-400">خطوات بسيطة وميسرة</div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              كيف تتم عملية نقل الأثاث مع شركة الثقة؟
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              مسار عمل واضح ومنظم من أول اتصال حتى اكتمال تركيب مقتنياتك في مسكنك الجديد.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700 space-y-3 text-right">
              <div className="text-3xl font-black text-amber-400 font-mono">01.</div>
              <h3 className="text-base font-bold text-white">التواصل وتحديد الاحتياج</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                اتصل بنا على الرقم المعتمد أو راسلنا عبر واتساب، واذكر عدد الغرف وحي الانطلاق وحي الوصول.
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700 space-y-3 text-right">
              <div className="text-3xl font-black text-amber-400 font-mono">02.</div>
              <h3 className="text-base font-bold text-white">المعاينة وتأكيد التسعيرة</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                تقدير حجم العفش واختيار المركبة المناسبة (ونيت أو شاحنة دينا) مع تحديد السعر العادل مسبقاً.
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700 space-y-3 text-right">
              <div className="text-3xl font-black text-amber-400 font-mono">03.</div>
              <h3 className="text-base font-bold text-white">الفك والتغليف والتحميل</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                يصل الفريق بالميعاد المحدد؛ فك القطع وتغليف الزجاج والأجهزة وتحميلها برص منظم وآمن.
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700 space-y-3 text-right">
              <div className="text-3xl font-black text-amber-400 font-mono">04.</div>
              <h3 className="text-base font-bold text-white">النقل والتركيب في المسكن الجديد</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                التنزيل الآمن وإعادة تركيب غرف النوم والمطابخ والمجالس والتأكد التام من رضاكم.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. قسم الأسئلة الشائعة FAQ */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
            <div className="text-xs font-bold text-amber-700 flex items-center justify-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>الأسئلة الأكثر تكراراً</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              إجابات واضحة وصادقة عن نقل الأثاث بالرياض
            </h2>
            <p className="text-slate-600 text-sm">
              جمعنا لكم أهم الاستفسارات التي يطرحها عملاؤنا قبل حجز الخدمة في الرياض.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-slate-200 overflow-hidden bg-slate-50/50 transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-right flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-amber-700 text-sm sm:text-base focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-amber-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. CTA أخير مع نموذج طلب تسعيرة سريع */}
      <section className="py-20 bg-slate-100 border-b border-slate-200" id="quote-form-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-6 text-right">
              <div className="text-xs font-bold text-amber-700">تواصل مباشر وسريع</div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                احجز موعد نقلك الآن مع «{SITE_CONFIG.name}»
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                املأ النموذج وسنتواصل معك لتحديد موعد المعاينة وتأكيد السعر المناسب لاحتياجك، أو اتصل فوراً بمنسق الحركة للحصول على إفادة سريعة.
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href={telHref}
                  onClick={() => trackPhoneCallClick('bottom_cta_block')}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-400 transition-all shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">الاتصال الهاتفي المباشر</div>
                    <div dir="ltr" className="text-base font-bold text-slate-900 text-right">
                      {SITE_CONFIG.contact.phoneDisplay}
                    </div>
                  </div>
                </a>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('bottom_cta_block')}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200 hover:border-emerald-400 transition-all shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">المراسلة عبر تطبيق واتساب</div>
                    <div className="text-base font-bold text-emerald-700">
                      رد سريع ومباشر على الاستفسارات
                    </div>
                  </div>
                </a>
              </div>

              <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-900 space-y-1">
                <span className="font-bold block">أوقات العمل المعتمدة:</span>
                <p>
                  نعمل طوال أيام الأسبوع من الساعة 06:00 صباحاً حتى 12:00 منتصف الليل.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactForm
                initialServiceId={selectedServiceForQuote}
                sourceTitle="نموذج حجز وتسعير خدمة النقل بالرياض - شركة الثقة"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
