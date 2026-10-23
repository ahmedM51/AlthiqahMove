import React from 'react';
import { SITE_CONFIG, getTelHref, getWhatsAppHref, trackPhoneCallClick, trackWhatsAppClick } from '../lib/site-config';
import {
  ChevronLeft,
  Calendar,
  Clock,
  Phone,
  ArrowLeft,
  Truck,
  PackageCheck,
  Wallet,
  HelpCircle,
  MapPin,
} from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import packingImage from '../assets/images/services_furniture_packing_1791883532942.jpg';

interface BlogPageProps {
  onNavigate: (path: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  const telHref = getTelHref();
  const whatsappHref = getWhatsAppHref('السلام عليكم، قرأت دليل ونيت نقل العفش بالرياض وأود الاستفسار عن السعر ووقت الوصول.');

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
          <span className="text-slate-900 font-bold">دليل ونيت نقل العفش</span>
        </nav>

        {/* Header المقال الرئيسي */}
        <header className="space-y-4 text-right">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-700">
            <span>دليل النقل الذكي</span>
            <span aria-hidden="true">·</span>
            <span>الأسعار والأحياء وطريقة نقل آمنة</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight [text-wrap:balance]">
            ونيت نقل عفش بالرياض: الدليل الشامل للأسعار والأحياء وأفضل طريقة نقل بدون أضرار
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
            <span>بواسطة: فريق {SITE_CONFIG.name}</span>
          </div>
        </header>

        {/* الصورة الرئيسية للمقال */}
        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-[16/9] bg-slate-100">
          <img
            src={packingImage}
            alt="تغليف العفش والأجهزة ونقلها بونيت نقل عفش بالرياض"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* محتوى المقال الموسع والمحسن للـ SEO */}
        <article className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base text-right">
          <div className="space-y-4">
            <p className="text-slate-800 font-medium leading-relaxed text-base sm:text-lg">
              إذا كنت تبحث عن <strong className="text-amber-800">ونيت نقل عفش بالرياض</strong> يجمع بين السرعة والسعر
              المنطقي والأمان، فهذا الدليل مكتوب لك. سنشرح فيه متى يكون الونيت أفضل خيار من الدينا ومن شركات النقل
              الكبيرة، وكيف تُنقل الأجهزة الكهربائية والبضائع بدون كسر أو خدش، وما العوامل التي تحدد سعر الونيت فعلياً،
              وأخيراً نجيب على أكثر سؤالين يتكرران: كم سعر ونيت نقل العفش؟ ومتى يصل الونيت؟
            </p>
          </div>

          {/* القسم 1 */}
          <section className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-6 bg-amber-500 rounded-sm inline-block"></span>
              <span>ما هو الونيت ولماذا هو الأنسب للنقل داخل الرياض؟</span>
            </h2>
            <p>
              الونيت سيارة نقل صغيرة بصندوق مفتوح أو مغطى، مرنة في الحركة ودخول الشوارع الداخلية والكومباوندات، وتكفي
              لنقل غرفة نوم أو مجموعة قطع من الأثاث أو أجهزة كهربائية أو بضائع خفيفة. الاختيار الأمثل لها هو النقل
              الجزئي والرحلات السريعة داخل المدينة، لأنها توفّر عليك تكلفة استئجار شاحنة كبيرة لا تحتاجها.
            </p>
            <p>
              عند طلب <strong>نقل عفش داخل الرياض</strong> بالونيت، حاول دائماً أن تُخبر المشغّل بحجم المنقولات الفعلي
              وعدد الغرف وطبيعة الأدوار، فهو الذي يحدد لك المقاس الأنسب. المكسب الحقيقي من الونيت ليس الحجم فقط، بل
              السرعة: سيارة صغيرة تتحرك خلال دقائق وتصل إليك داخل الأحياء القريبة خلال مدة قصيرة، بعكس الحاجة إلى
              التنسيق الطويل المرتبط بشركات النقل الشاملة.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Truck className="w-4 h-4 text-amber-600" />
                  <span>الونيت: للنقل السريع والجزئي</span>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  مناسب لغرفة نوم، أثاث مفرد، أجهزة كهربائية، وبضائع خفيفة داخل أحياء الرياض.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <PackageCheck className="w-4 h-4 text-amber-600" />
                  <span>الدينا: للمنازل الكاملة</span>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  شاحنة دينا مغلقة ومبطنة تنقل شقة أو فيلا كاملة في رحلة واحدة مع حماية من الغبار والشمس.
                </p>
              </div>
            </div>
          </section>

          {/* القسم 2 */}
          <section className="space-y-4 pt-6 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-6 bg-amber-500 rounded-sm inline-block"></span>
              <span>مميزات استخدام ونيت نقل عفش داخل أحياء الرياض</span>
            </h2>
            <p>
              لكل منطقة في الرياض طابعها الخاص في الشوارع والمداخل ومواعيد الازدحام، ولهذا فإن خبرة الفريق المحلي
              تُحدث فرقاً حقيقياً. إليك أهم المميزات عندما تنقل بالونيت داخل أحياء العاصمة:
            </p>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  <span>ونيت نقل عفش شمال الرياض (الملقا، حطين، الياسمين، النرجس، العارض)</span>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  كثافة الطلب في شمال الرياض عالية لأنها تضم أكبر عدد من الكومباوندات والمشاريع السكنية الحديثة. نعرف
                  أنظمة تصاريح الحركة في هذه المجمعات ومداخلها، ونرتّب موعد التحميل قبل وقت الازدحام لتصل السيارة
                  وتُنجز الرحلة بسرعة. لو كنت تنتقل بين حي في شمال الرياض وآخر في شرقه، فإن الرحلة تُنفَّذ في مسار واحد
                  بالونيت أو الدينا حسب حجم أثاثك.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  <span>ونيت نقل عفش شرق الرياض (اليرموك، المونسية، الرمال، قرطبة، الروضة)</span>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  شرق الرياض يشهد حركة نقل يومية كثيفة بين المونسية واليرموك وقرطبة. مميزات الونيت هنا تظهر في الشوارع
                  الداخلية الأضيق، حيث تصل السيارة إلى باب المبنى دون الحاجة إلى مساحة كبيرة للوقوف، وهو أمر يصعب على
                  الشاحنات الكبيرة في بعض المخططات.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  <span>ونيت نقل عفش وسط الرياض (العليا، السليمانية، الملز، المعذر، المربع)</span>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  وسط الرياض هو الأكثر حساسية لعامل الوقت بسبب الازدحام وتنظيم مواقف الأبراج والمباني الإدارية. الحل
                  العملي هو جدولة التحميل في الأوقات الأهدأ صباحاً أو في نهاية الأسبوع، وتجهيز الأثاث المطلوب نقله مسبقاً
                  لتقليل زمن الوقوف أمام المدخل.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  <span>ونيت نقل عفش غرب الرياض (طويق، ظهرة لبن، العريجاء، ديراب، المهدية)</span>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  غرب الرياض يضم مخططات سكنية جديدة وطرقاً قيد التطوير، ولذلك نتحقق قبل التحرك من إمكانية وصول السيارة
                  إلى باب المبنى، ونخبرك مسبقاً بالمقاس الذي يناسب حالتك حتى لا تضيع وقتاً في محاولات وصول فاشلة.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  <span>ونيت نقل عفش جنوب الرياض (الشفا، نمار، السويدي، المنصورة، الحاير)</span>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  جنوب الرياض يحتاج عمالة تقوى على التعامل مع الأدوار المرتفعة والمداخل التي تتطلب إنزالاً يدوياً منظماً.
                  فريقنا مجهّز لهذه الحالات، ويوزّع القطع داخل السيارة بحيث تصل بنفس ترتيب إعادة التركيب في البيت
                  الجديد.
                </p>
              </div>
            </div>
          </section>

          {/* القسم 3 */}
          <section className="space-y-4 pt-6 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-6 bg-amber-500 rounded-sm inline-block"></span>
              <span>كيفية نقل الأجهزة الكهربائية والأغراض والبضائع بأمان</span>
            </h2>
            <p>
              الأجهزة الكهربائية هي أكثر ما يتعرض للتلف أثناء النقل إذا لم تُغلَّف وتُرص بالشكل الصحيح. إليك الطريقة
              العملية التي نستخدمها في <strong>ونيت نقل أغراض بالرياض</strong>:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-slate-200/90 bg-slate-50/50 space-y-1.5">
                <h3 className="font-bold text-slate-900 text-sm">الشاشات والتلفزيونات</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  طبقتان من البقيع الهرامي (بلاستيك الفقاعات) ثم كرتون مقوى، وتُنقل واقفة عمودياً إن أمكن وبعيداً عن
                  القطع الثقيلة حتى لا تتعرض للضغط.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200/90 bg-slate-50/50 space-y-1.5">
                <h3 className="font-bold text-slate-900 text-sm">الثلاجات والغسالات</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  تثبيت الأبواب بشريط لاصق قوي لمنع فتحها أثناء الطريق، وتفريغ الثلاجة قبل النقل بساعتين وتصريف مياه
                  الغسالة تماماً.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200/90 bg-slate-50/50 space-y-1.5">
                <h3 className="font-bold text-slate-900 text-sm">الأجهزة الصغيرة والملحقات</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  جمع الريموتات والأسلاك والملحقات في أكياس مُرقّمة لكل جهاز، لمنع اختلاطها وتسهيل التركيب السريع في
                  الموقع الجديد.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200/90 bg-slate-50/50 space-y-1.5">
                <h3 className="font-bold text-slate-900 text-sm">البضائع والأغراض المكتبية</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  استخدام كراتين بأحجام موحّدة مع ترقيمها، ورصها بتوازن داخل السيارة بحيث لا يقع ثقل على صناديق خفيفة
                  أو قابلة للانضغاط.
                </p>
              </div>
            </div>

            <p>
              القاعدة الذهبية في النقل الآمن هي <strong>الرص المتوازن وتثبيت الحمل</strong>. لا يكفي أن تُغلَّف القطعة،
              بل يجب أن تُثبَّت داخل الصندوق بأحزمة وبطانيات عازلة تمنع اهتزازها مع المطبات. ولهذا يتحرك مع كل سيارة
              فريق يعرف ترتيب القطع الثقيلة في الأسفل والخفيفة في الأعلى.
            </p>
          </section>

          {/* القسم 4 */}
          <section className="space-y-4 pt-6 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-6 bg-amber-500 rounded-sm inline-block"></span>
              <span>أسعار خدمات الونيت والدينات مقارنة بالشركات الأخرى</span>
            </h2>
            <p>
              لا يوجد سعر ثابت واحد لخدمة نقل العفش، لأن السعر يتغير بتغير الحجم والمسافة والخدمات المطلوبة. لكن من
              المهم أن تعرف <strong>العوامل التي تحدد السعر</strong> حتى تعرف بالضبط ما تدفع مقابله:
            </p>

            <ul className="list-disc list-inside space-y-1.5 text-slate-600 pr-2">
              {SITE_CONFIG.pricingFactors.map((factor) => (
                <li key={factor.title}>
                  <strong className="text-slate-800">{factor.title}:</strong> {factor.desc}
                </li>
              ))}
            </ul>

            <div className="p-5 rounded-xl bg-white border border-amber-200 space-y-3">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Wallet className="w-4 h-4 text-amber-600" />
                <span>مقارنة سريعة بين الونيت والدينا وشركات النقل</span>
              </h3>
              <ul className="text-xs text-slate-700 space-y-2">
                <li>
                  <strong>الونيت:</strong> الأقل تكلفة للنقل الجزئي والرحلات السريعة داخل المدينة، ولا تدفع مقابل حجم
                  لا تستخدمه.
                </li>
                <li>
                  <strong>الدينا المغلقة:</strong> تكلفتها أعلى من الونيت لكنها توزَّع على حجم أكبر في رحلة واحدة، فتصبح
                  اقتصادية عند نقل شقة أو فيلا كاملة.
                </li>
                <li>
                  <strong>شركات النقل الشاملة:</strong> مناسبة للنقل الكامل بمواعيد مسبقة، لكن الفك والتركيب والتغليف
                  غالباً بنود تُضاف على السعر الأساسي وقد ترفع الفاتورة.
                </li>
              </ul>
              <p className="text-xs text-slate-600 leading-relaxed pt-1">
                الأهم عند المقارنة ألا تنظر إلى الرقم الأول فقط، بل اسأل: هل التغليف مشمول؟ هل الفك والتركيب مشمولان؟ هل
                هناك رسوم إضافية عند زيادة الأدوار؟ الشركة الشفافة هي التي تعطيك الرقم النهائي قبل تحرك السيارة.
              </p>
            </div>
          </section>

          {/* القسم 5: CTA داخل المقال */}
          <section className="space-y-4 pt-6 border-t border-slate-100 bg-amber-50/60 -mx-6 sm:-mx-10 p-6 sm:p-10 rounded-2xl">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              لماذا يختار عملاء الرياض ونيت نقل العفش؟
            </h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              في <strong className="text-slate-950 font-bold">{SITE_CONFIG.name}</strong> نجمع بين سرعة الونيت وجودة
              شركات النقل الكبيرة. نوفر فرق تحميل وفنيي فك وتركيب، ونستخدم خامات تغليف متعددة الطبقات، ونعطيك سعراً
              ثابتاً ووقت وصول محدداً قبل التحرك. الإجابة على سؤالك «كم سعر ونيت نقل العفش؟» تصل إليك في دقائق عبر مكالمة
              أو رسالة واتساب، ويمكنك حتى إرسال صور الأثاث لتسعير أدق بدون زيارة.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={telHref}
                onClick={() => trackPhoneCallClick('blog_article_cta')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>اتصل الآن: {SITE_CONFIG.contact.phoneDisplay}</span>
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('blog_article_cta')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs transition-colors shadow-sm"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>احجز عبر الواتساب فوراً</span>
              </a>
            </div>
          </section>

          {/* القسم 6: الأسئلة الشائعة */}
          <section className="space-y-4 pt-6 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-6 bg-amber-500 rounded-sm inline-block"></span>
              <span>أسئلة شائعة عن ونيت نقل العفش بالرياض</span>
            </h2>

            <div className="space-y-4">
              {SITE_CONFIG.faqs.map((faq) => (
                <div key={faq.q} className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-sm flex items-start gap-2">
                    <HelpCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed pr-6">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* القسم 7: الخلاصة */}
          <section className="space-y-3 pt-6 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">الخلاصة</h2>
            <p>
              اختيار <strong>ونيت نقل عفش بالرياض</strong> قرار ذكي عندما تكون حاجتك نقل جزئي أو رحلة سريعة داخل
              المدينة، أما الأثاث الكامل فيكون الدينا المغلقة أوفر لك. المهم في الحالتين أن تُغلَّف القطع وتُرص وتُثبَّت
              بشكل صحيح، وأن تعرف السعر النهائي قبل التحرك. ابدأ بمكالمة أو رسالة واتساب، وأخبرنا بحي الانطلاق وحي
              الوصول وحجم الأثاث، وسنرشدك للسيارة الأوفر لك ونحدد وقت الوصول بدقة.
            </p>
          </section>
        </article>

        {/* CTA الختامي */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 text-center space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold">
            جاهز لحجز ونيت نقل العفش في الرياض؟
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto">
            تواصل مباشرة لتحديد عدد الغرف وحي الانطلاق وحي الوصول، واحصل على سعر فوري ووقت وصول محدد.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={telHref}
              onClick={() => trackPhoneCallClick('blog_bottom_cta')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-lg text-xs transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>اتصل الآن</span>
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('blog_bottom_cta')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-black rounded-lg text-xs transition-colors shadow-sm"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>واتساب فوري</span>
            </a>
            <button
              onClick={() => onNavigate('/services')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg text-xs transition-colors border border-slate-700"
            >
              <span>استعراض كافة الخدمات</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
