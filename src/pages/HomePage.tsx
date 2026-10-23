import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { ServiceCard } from '../components/ServiceCard';
import { ContactForm } from '../components/ContactForm';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { SITE_CONFIG, getTelHref, getWhatsAppHref, trackPhoneCallClick, trackWhatsAppClick } from '../lib/site-config';
import {
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  Phone,
  Truck,
  Layers,
  Clock,
  MapPin,
  HelpCircle,
  ArrowLeft,
  Star,
  BookOpen,
  Wrench,
  Wallet,
} from 'lucide-react';

import packingImage from '../assets/images/services_furniture_packing_1791883532942.jpg';
import assemblyImage from '../assets/images/services_furniture_assembly_1791883533574.jpg';
import heroImage from '../assets/images/hero_moving_truck_riyadh_1791883533123.jpg';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

/** تعيين صورة مناسبة لكل خدمة بحسب ترتيب الخدمات في ملف الإعدادات */
const serviceCardImages = [
  heroImage, // ونيت نقل عفش وأثاث
  packingImage, // ونيت نقل أغراض وأجهزة كهربائية
  heroImage, // دينا نقل عفش وشاحنات مغلقة
  assemblyImage, // فك وتركيب الأثاث والمطابخ
  packingImage, // تغليف العفش
  undefined, // نقل بضائع ومكاتب وتخزين
];

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>(SITE_CONFIG.services[0].id);

  const telHref = getTelHref();

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceForQuote(serviceId);
    document.getElementById('quote-form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavigate = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* 1. القسم الافتتاحي */}
      <Hero onNavigate={onNavigate} />

      {/* 2. شريط تحويل سريع: اتصال + واتساب (الأهم لزوار الإعلانات) */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            <a
              href={telHref}
              onClick={() => trackPhoneCallClick('home_quick_strip')}
              className="flex items-center gap-3 p-4 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm"
            >
              <span className="w-11 h-11 rounded-xl bg-amber-400 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-slate-900" />
              </span>
              <span className="text-right">
                <span className="block text-sm font-black">اتصل واطلب ونيت الآن</span>
                <span className="block text-xs text-slate-300" dir="ltr">
                  {SITE_CONFIG.contact.phoneDisplay}
                </span>
              </span>
            </a>

            <a
              href={getWhatsAppHref('السلام عليكم، أرغب بحجز ونيت نقل عفش بالرياض. حي الانطلاق: ... حي الوصول: ...')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('home_quick_strip')}
              className="flex items-center gap-3 p-4 rounded-xl bg-[#25D366] text-white hover:bg-[#1EBE5D] transition-colors shadow-sm"
            >
              <span className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                <WhatsAppIcon className="w-5 h-5" />
              </span>
              <span className="text-right">
                <span className="block text-sm font-black">أرسل صور الأثاث على واتساب</span>
                <span className="block text-xs text-white/90">تسعيرة فورية بدون زيارة</span>
              </span>
            </a>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="w-11 h-11 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-amber-700" />
              </span>
              <span className="text-right">
                <span className="block text-sm font-black text-slate-900">خدمة يومية حتى منتصف الليل</span>
                <span className="block text-xs text-slate-600">06:00 صباحاً – 12:00 منتصف الليل</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. نبذة SEO */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-700">
                <span>ونيت نقل عفش بالرياض</span>
                <span aria-hidden="true">·</span>
                <span>نقل الأثاث والأغراض والأجهزة داخل الرياض</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                ونيت نقل عفش بالرياض بنقل آمن وسعر اقتصادي وجودة شركات النقل الكبيرة
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                إذا كنت تبحث عن <strong>ونيت نقل عفش بالرياض</strong> يصل بسرعة ويكون سعره منطقياً، فقد وصلت للمكان
                الصحيح. ننقل غرف النوم والأثاث المفرد والأجهزة الكهربائية والبضائع داخل جميع أحياء العاصمة، بالونيت
                للنقل الجزئي السريع أو بشاحنة <strong>دينا مغلقة ومبطنة</strong> عند نقل شقة أو فيلا كاملة. الفرق أننا
                لا نترك التحميل لسيارة مؤجرة بدون خبرة، بل يتحرك مع السيارة فريق يعرف كيف يُرص القطع ويغلّفها ويثبّتها
                حتى تصل سليمة.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                الفك والتركيب جزء أساسي من خدمتنا: نجار يفتح غرفة النوم أو الدولاب أو المطبخ، ثم يعيد تركيبه في بيتك
                الجديد بنفس المسامير والقطع، مع ترقيم كل قطعة. وبالنسبة للتغليف فنستخدم البقيع الهرامي للشاشات والزجاج،
                والكرتون المقوى للأدوات، والنايلون السترتش للمجالس والكنب، وبطانيات سميكة للأخشاب والرخام. كل ذلك يُحسب
                بسعر واحد واضح يُتفق عليه قبل التحرك.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="flex items-center gap-2 text-sm font-bold text-slate-900">
                    <Truck className="w-4 h-4 text-amber-600" />
                    <span>اختيار السيارة الأوفر لك</span>
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    نرشدك للونيت أو الدينا حسب حجم أثاثك، فلا تدفع مقابل سيارة أكبر من حاجتك.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="flex items-center gap-2 text-sm font-bold text-slate-900">
                    <Wallet className="w-4 h-4 text-amber-600" />
                    <span>سعر ثابت قبل التحرك</span>
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    نتفق على السعر في المكالمة أو على الواتساب، ولا توجد رسوم مفاجئة عند الوصول.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-50 border border-slate-200/90 rounded-xl p-6 space-y-4">
              <h3 className="text-sm font-bold text-slate-900">لماذا يختارنا عملاء الرياض؟</h3>
              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>تحرك سريع:</strong> غالباً نصل خلال 20 دقيقة داخل الأحياء القريبة من انتشار سياراتنا.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>فريق كامل مع السيارة:</strong> تحميل وتنزيل وفك وتركيب بدون الحاجة لعمالة إضافية.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>تغليف يحمي فعلاً:</strong> أربع طبقات حماية للزجاج والأجهزة والمفروشات والأخشاب.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>تغطية كاملة:</strong> شمال وشرق ووسط وغرب وجنوب الرياض، مع رحلات بين المدن عند الطلب.
                  </span>
                </li>
              </ul>
              <a
                href={getWhatsAppHref('السلام عليكم، أريد معرفة سعر نقل الأثاث بالونيت داخل الرياض.')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('home_about_cta')}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>اسأل عن السعر على واتساب</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. بطاقات الخدمات */}
      <section className="py-16 bg-slate-50 border-b border-slate-200" id="services-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-10 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-700">
              <span>خدماتنا المتكاملة</span>
              <span aria-hidden="true">·</span>
              <span>حلول للمنازل والشركات والبضائع</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900">
              خدمات ونيت ودينا نقل العفش والأغراض بالرياض
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              اختر الخدمة التي تحتاجها، واتصل أو راسلنا على الواتساب لنحدد لك نوع السيارة والسعر المناسب لحالتك.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SITE_CONFIG.services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                imageSrc={serviceCardImages[index]}
                onSelectService={handleSelectService}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => handleNavigate('/services')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-lg border border-slate-300 text-sm transition-colors shadow-sm"
            >
              <span>عرض تفاصيل جميع الخدمات وإرشادات التجهيز</span>
              <ArrowLeft className="w-4 h-4 text-amber-600" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. تغطية أحياء الرياض + زر حجز لكل منطقة */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold text-amber-700">تغطية شاملة لكافة الأحياء</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              ونيت نقل عفش قريب منك في جميع مناطق الرياض
            </h2>
            <p className="text-sm text-slate-600">
              مهما كان موقعك داخل مدينة الرياض، سياراتنا وفريقنا جاهزون لخدمتك. اختر منطقتك واحجز مباشرة على الواتساب.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SITE_CONFIG.districts.map((district) => (
              <div
                key={district.id}
                className="flex flex-col justify-between gap-4 p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-300 transition-colors"
              >
                <div className="space-y-2 text-right">
                  <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                    <h3 className="text-sm font-bold">{district.label}</h3>
                  </div>
                  <p className="text-[11px] font-semibold text-amber-700">{district.neighborhoods}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{district.blurb}</p>
                </div>
                <a
                  href={getWhatsAppHref(
                    `السلام عليكم، أريد حجز ونيت نقل عفش في ${district.label.replace('ونيت نقل عفش ', '')}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick(`home_district_${district.id}`)}
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold transition-colors"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>احجز ونيت في هذه المنطقة</span>
                </a>
              </div>
            ))}

            <div className="flex flex-col justify-center gap-3 p-5 rounded-xl bg-slate-900 text-white">
              <h3 className="text-sm font-black">منطقتك غير مذكورة؟</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                نغطي كافة مخططات الرياض وأيضاً النقل بين الرياض ومدن المملكة. اتصل وسنحدد لك السعر ووقت الوصول.
              </p>
              <a
                href={telHref}
                onClick={() => trackPhoneCallClick('home_district_other')}
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-black transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>اتصل الآن</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. أسعار الونيت وعوامل التسعير */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-4 text-right">
              <span className="text-xs font-bold text-amber-700">أسعار ونيت نقل العفش بالرياض</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                كيف يُحدد سعر الونيت؟ وما الفرق بين الونيت والدينا في التكلفة؟
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                في خدمات النقل لا يوجد سعر واحد يناسب الجميع، لأن غرفة نوم واحدة تختلف عن شقة كاملة. لذلك نوضح لك
                العوامل الحقيقية التي تحدد السعر حتى تعرف بالضبط ما تدفع مقابله، ثم نعطيك رقماً ثابتاً قبل تحرك السيارة.
                والفرق الجوهري بيننا وبين شركات النقل العامة أنك تدفع فقط مقابل الحجم الذي تنقله فعلاً بدون حد أدنى
                مرتفع أو رسوم تحميل إضافية.
              </p>

              <div className="p-4 rounded-xl bg-white border border-amber-200 space-y-2">
                <span className="text-sm font-bold text-slate-900 block">مقارنة سريعة</span>
                <ul className="text-xs text-slate-700 space-y-1.5">
                  <li>
                    <strong>الونيت:</strong> الأفضل للنقل الجزئي، غرفة نوم، أجهزة، بضائع، ورحلات سريعة داخل المدينة.
                  </li>
                  <li>
                    <strong>الدينا المغلقة:</strong> الأفضل لشقة أو فيلا كاملة وللمفروشات والكنب والسجاد في رحلة واحدة.
                  </li>
                  <li>
                    <strong>شركات النقل العامة:</strong> مناسبة للنقل الشامل بمواعيد مسبقة طويلة، لكن الفك والتغليف
                    غالباً بنود إضافية مرتفعة.
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href={telHref}
                  onClick={() => trackPhoneCallClick('home_pricing_cta')}
                  className="flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>اعرف سعرك الآن</span>
                </a>
                <a
                  href={getWhatsAppHref('السلام عليكم، أريد تسعيرة ونيت نقل عفش. عدد الغرف: ... حي الانطلاق: ... حي الوصول: ...')}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('home_pricing_cta')}
                  className="flex items-center gap-2 px-5 py-3 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>تسعيرة على واتساب</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SITE_CONFIG.pricingFactors.map((factor, idx) => (
                <div key={factor.title} className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
                  <span className="text-xs font-mono font-black text-amber-600">0{idx + 1}</span>
                  <h3 className="text-sm font-bold text-slate-900">{factor.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{factor.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. لماذا تختارنا */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-2xl mb-12 space-y-3">
            <div className="text-xs font-bold text-amber-700">معايير الجودة والأمان</div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">لماذا يثق بنا عملاء نقل الأثاث في الرياض؟</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              مزايا عملية مبنية على احترام وقت العميل وسلامة مقتنياته وسعر واضح من البداية.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl border border-slate-200/90 bg-white space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">أسطول ونيت ودينا مجهز</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                ونيتات بأحجام مختلفة وشاحنات دينا مغلقة ومبطنة تحمي الأثاث من الغبار والشمس وأتربة الطريق.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200/90 bg-white space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">تغليف متعدد الطبقات</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                بقيع هرامي وكرتون مقوى ونايلون سترتش وبطانيات لحماية الزجاج والكنب والأجهزة والمفروشات.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200/90 bg-white space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">فنيون لفك وتركيب الأثاث</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                فريق متمرس في غرف النوم الإيكيا والمودرن والمطابخ دون إتلاف المفصلات أو فقدان أي قطعة.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200/90 bg-white space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">التزام بالمواعيد والسعر</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                وقت وصول محدد عند الحجز وسعر ثابت متفق عليه مسبقاً، بدون تأخير أو رسوم إضافية مفاجئة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. خطوات الطلب */}
      <section className="py-16 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-2xl mb-12 space-y-3 text-right">
            <div className="text-xs font-bold text-amber-400">خطوات بسيطة وميسرة</div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">كيف أحجز الونيت في 4 خطوات؟</h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              من أول اتصال حتى تركيب آخر قطعة في منزلك الجديد، المسار واضح ومحدد.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700 space-y-3 text-right">
              <div className="text-3xl font-black text-amber-400 font-mono">01.</div>
              <h3 className="text-base font-bold text-white">اتصال أو رسالة واتساب</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                أخبرنا بحي الانطلاق وحي الوصول وحجم الأثاث، ويمكنك إرسال صور على الواتساب لتسعير أسرع.
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700 space-y-3 text-right">
              <div className="text-3xl font-black text-amber-400 font-mono">02.</div>
              <h3 className="text-base font-bold text-white">سعر ثابت ووقت وصول</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                نحدد معك السعر النهائي ونوع السيارة (ونيت أو دينا) ووقت الوصول قبل أن تتحرك السيارة.
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700 space-y-3 text-right">
              <div className="text-3xl font-black text-amber-400 font-mono">03.</div>
              <h3 className="text-base font-bold text-white">الفك والتغليف والتحميل</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                يصل الفريق في الموعد؛ فك القطع وتغليف الزجاج والأجهزة والرص المنظم داخل السيارة.
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700 space-y-3 text-right">
              <div className="text-3xl font-black text-amber-400 font-mono">04.</div>
              <h3 className="text-base font-bold text-white">التنزيل والتركيب</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                تنزيل آمن في الغرف المحددة وإعادة تركيب غرف النوم والمطابخ والتأكد من رضاك قبل المغادرة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. آراء العملاء */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div className="space-y-2 text-right">
              <span className="text-xs font-bold text-amber-700">تجارب حقيقية</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">آراء عملاء الونيت في الرياض</h2>
            </div>
            <button
              onClick={() => handleNavigate('/testimonials')}
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
                  <p className="text-slate-700 text-sm leading-relaxed font-medium">"{test.comment}"</p>
                </div>
                <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-xs gap-3">
                  <span className="font-bold text-slate-900 shrink-0">{test.clientName}</span>
                  <span className="text-slate-500 text-left">{test.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. دليل المدونة */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50/50 rounded-2xl border border-amber-200/80 p-8 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3 text-right">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-800">
                  <BookOpen className="w-4 h-4" />
                  <span>دليل نقل العفش والأجهزة</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">{SITE_CONFIG.seoArticle.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{SITE_CONFIG.seoArticle.excerpt}</p>
              </div>
              <div className="lg:col-span-4 text-center lg:text-left">
                <button
                  onClick={() => handleNavigate('/blog')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg text-xs transition-colors shadow-sm"
                >
                  <span>قراءة الدليل الكامل</span>
                  <ArrowLeft className="w-4 h-4 text-amber-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. الأسئلة الشائعة */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-3">
            <div className="text-xs font-bold text-amber-700 flex items-center justify-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>الأسئلة الأكثر تكراراً</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              إجابات واضحة عن ونيت نقل العفش في الرياض
            </h2>
            <p className="text-slate-600 text-sm">
              أهم ما يسأل عنه عملاؤنا قبل الحجز: السعر ووقت الوصول والفرق بين الونيت والدينا.
            </p>
          </div>

          <div className="space-y-3">
            {SITE_CONFIG.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={faq.q} className="rounded-xl border border-slate-200 overflow-hidden bg-slate-50/50">
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

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={telHref}
              onClick={() => trackPhoneCallClick('home_faq_cta')}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>لم تجد إجابتك؟ اتصل الآن</span>
            </a>
            <a
              href={getWhatsAppHref('السلام عليكم، لدي سؤال عن خدمة ونيت نقل العفش بالرياض.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('home_faq_cta')}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>اسأل على واتساب</span>
            </a>
          </div>
        </div>
      </section>

      {/* 12. القسم الختامي + نموذج التسعيرة */}
      <section className="py-16 bg-slate-100 border-b border-slate-200" id="quote-form-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-6 text-right">
              <div className="text-xs font-bold text-amber-700">تواصل مباشر وسريع</div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                احجز ونيت نقل العفش الآن في الرياض
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                أسرع طريقة هي الاتصال أو رسالة الواتساب: أخبرنا بحي الانطلاق وحي الوصول وعدد الغرف، وستصلك التسعيرة
                ووقت وصول السيارة مباشرة. ويمكنك أيضاً ترك بياناتك في النموذج وسنتصل بك.
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href={telHref}
                  onClick={() => trackPhoneCallClick('home_bottom_block')}
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-900 hover:bg-slate-800 transition-all shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-400 text-slate-900 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-300">الاتصال الهاتفي المباشر</div>
                    <div dir="ltr" className="text-base font-black text-white">
                      {SITE_CONFIG.contact.phoneDisplay}
                    </div>
                  </div>
                </a>

                <a
                  href={getWhatsAppHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('home_bottom_block')}
                  className="flex items-center gap-3 p-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] transition-all shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/20 text-white flex items-center justify-center shrink-0">
                    <WhatsAppIcon className="w-5 h-5" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-white/80">المراسلة عبر واتساب</div>
                    <div className="text-base font-black text-white">رد سريع وتسعير بالصور</div>
                  </div>
                </a>
              </div>

              <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-900 space-y-1">
                <span className="font-bold block">أوقات العمل المعتمدة:</span>
                <p>نخدمك طوال أيام الأسبوع من 06:00 صباحاً حتى 12:00 منتصف الليل.</p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactForm
                initialServiceId={selectedServiceForQuote}
                sourceTitle="نموذج حجز وتسعير ونيت نقل العفش بالرياض"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
