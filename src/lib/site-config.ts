/**
 * إعدادات وبيانات موقع «شركة الثقة لنقل الأثاث بالرياض»
 * نقل عفش آمن وسريع مع الفك والتغليف والتركيب وخدمات الونيت والشاحنات المجهزة
 * مهيأ للـ SEO وحملات Google Ads
 */

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  preparationAdvice?: string;
  iconName: string;
  image?: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  location: string;
  comment: string;
  rating: number;
}

export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishDate: string;
  readTime: string;
}

export const SITE_CONFIG = {
  name: 'شركة الثقة لنقل الأثاث بالرياض',
  shortName: 'شركة الثقة لنقل العفش',
  tagline: 'نقل عفش آمن وسريع مع الفك والتغليف والتركيب لكافة أحياء الرياض',
  city: 'الرياض',
  country: 'المملكة العربية السعودية',
  serviceAreas: [
    'شمال الرياض (الصحافة، الياسمين، حطين، النرجس، العارض، الملقا)',
    'شرق الرياض (اليرموك، المونسية، الروضة، الخليج، اشبيلية، الرمال)',
    'وسط الرياض (العليا، السليمانية، الملز، المعذر)',
    'غرب وجنوب الرياض (طويق، لبن، السويدي، الشفا، نمار)',
    'نقل ما بين أحياء الرياض وإلى جميع مدن المملكة حسب الطلب'
  ],

  // أرقام التواصل الرسمية المعتمدة
  contact: {
    // رقم الهاتف الرسمي للاتصال المباشر
    phone: '+966536826083',
    phoneLocal: '0536826083',
    phoneDisplay: '053 682 6083',
    phoneDisplayFull: '+966 53 682 6083',
    phoneNeedsConfirmation: false,

    // رقم الواتساب الرسمي المعتمد للمراسلة الفورية
    whatsapp: '966536826083',
    whatsappDisplay: '053 682 6083',
    whatsappNeedsConfirmation: false,

    // رسالة واتساب المسبقة
    whatsappDefaultMessage: 'السلام عليكم، أود الاستفسار عن خدمة نقل أثاث بالرياض من شركة الثقة.',

    // البريد الإلكتروني
    email: 'info@thiqahmove.sa',
    emailNeedsConfirmation: false,

    // العنوان الفعلي بالرياض
    address: 'الرياض، المملكة العربية السعودية',
    
    // ساعات العمل (من 6:00 صباحاً حتى 12:00 منتصف الليل طوال أيام الأسبوع)
    workingHours: 'طوال أيام الأسبوع: من 06:00 صباحاً حتى 12:00 منتصف الليل',
    emergencyNotice: 'فريق العمل ومركبات الونيت والدينا جاهزة للتحرك السريع على مدار ساعات الدوام'
  },

  // شعار الشركة الرسمي
  logoUrl: '/images/logo.jpg',

  // الروابط الدائمة والدومين
  siteUrl: 'https://thiqahmovesa.vercel.app',

  // معرفات التحليلات وحملات Google Ads
  analytics: {
    ga4Id: import.meta.env.VITE_GA4_ID || '',
    googleAdsConversionId: import.meta.env.VITE_GOOGLE_ADS_CONVERSION_ID || '',
  },

  // الكلمات المفتاحية المستهدفة للـ SEO وإعلانات Google Ads
  keywords: [
    'شركة نقل عفش بالرياض',
    'نقل أثاث بالرياض',
    'ونيت نقل عفش بالرياض',
    'دينا نقل عفش بالرياض',
    'ونيت نقل أغراض بالرياض',
    'شركة فك وتركيب أثاث بالرياض',
    'تغليف عفش بالرياض',
    'ونيت نقل غرف نوم بالرياض',
    'ونيت نقل مكاتب الرياض',
    'أرخص شركة نقل عفش بالرياض',
    'نقل عفش شمال الرياض',
    'نقل عفش شرق الرياض'
  ],

  // قائمة الخدمات المتكاملة لشركة الثقة
  services: [
    {
      id: 'dismantling-assembly',
      title: 'فك وتركيب الأثاث والمطابخ',
      shortDesc: 'فك احترافي لغرف النوم، دواليب إيكيا، والمطابخ الألمنيوم والمكاتب مع إعادة تركيبها بدقة متناهية.',
      fullDesc: 'تعتبر مرحلة الفك والتركيب من أهم مراحل نقل العفش التي تتطلب خبراء متمرسين. نوفر فنيي نجارة وألمنيوم لفك وتركيب غرف النوم المودرن والكلاسيك وغرف إيكيا مع ترقيم كافة القطع وحفظ مساميرها، بالإضافة إلى فك وتعديل وتركيب المطابخ الرخامية والألمنيوم وتركيب الشاشات والستائر.',
      preparationAdvice: 'يُرجى إعلامنا مسبقاً بنوع المطبخ والقطع الجدارية الثقيلة لتجهيز أدوات التثبيت المتخصصة.',
      iconName: 'Wrench',
    },
    {
      id: 'packing-wrapping',
      title: 'التغليف والتعبئة الاحترافية',
      shortDesc: 'استخدام البقيع الهرامي، كرتون مقوى، ونايلون سترتش لحماية الزجاج والكنب والأجهزة والشاشات.',
      fullDesc: 'لحماية المقتنيات الثمينة والأثاث من الخدوش أو الكسر أثناء النقل، نستخدم بلاستيك الفقاعات المقوى (Bubble Wrap) للأجهزة والشاشات، وكراتين بأحجام متنوعة لتعبئة الملابس والأدوات المطبخية، وتغليف سترتش عازل للغبار يحمي الكنب والمجالس والمفروشات.',
      preparationAdvice: 'نوصي بفرز المتعلقات الثمينة والأوراق الرسمية ونقلها بمعرفتكم تفادياً لاختلاطها مع كراتين النقل.',
      iconName: 'PackageCheck',
    },
    {
      id: 'trucks-wanet-moving',
      title: 'نقل الأثاث بأسطول ونيت وشاحنات مجهزة',
      shortDesc: 'سيارات ونيت للنقل السريع ودينا شاحنات مغلقة ومبطنة لنقل العفش بأمان لكافة أحياء الرياض.',
      fullDesc: 'نوفر أسطولاً متنوعاً من سيارات الونيت المجهزة لنقل القطع المنفردة وغرف النوم والأجهزة، وشاحنات دينا مغلقة ومبطنة تؤمن حماية تامة للعفش من العوامل الجوية والأتربة، بقيادة سائقين محترفين ذوي دراية واسعة بشوارع وأحياء الرياض.',
      preparationAdvice: 'تأكد من إمكانية وقوف الشاحنة أو الونيت بالقرب من مدخل المبنى لتسريع عملية التحميل.',
      iconName: 'Truck',
    },
    {
      id: 'offices-corporate-moving',
      title: 'نقل الأثاث المكتبي والشركات',
      shortDesc: 'نقل مكاتب الشركات والمؤسسات والسيرفرات والمستندات بكفاءة وتنظيم يحافظ على استمرارية العمل.',
      fullDesc: 'نساعد الشركات والمؤسسات على الانتقال إلى مقراتها الجديدة بسلاسة تامة، مع نقل أجهزة الكمبيوتر والمكاتب والأوراق والمستندات الهامة بطريقة مرقمة ومؤمنة، مع التخطيط الزمني للنقل للحد من توقف ساعات العمل الرسمية.',
      preparationAdvice: 'ننصح بتسمية وترقيم مكاتب الموظفين مسبقاً لتوزيع المحتويات مباشرة في المقر الجديد.',
      iconName: 'Tv',
    },
    {
      id: 'living-rooms-majlis',
      title: 'نقل المجالس والمفروشات الكبيرة',
      shortDesc: 'نقل الكنب والمجالس الأرضية والسجاد مع تغليف عازل للغبار وأكياس حماية مخصصة للأقمشة.',
      fullDesc: 'حماية فائقة لأطقم الكنب والمجالس والستائر والسجاد بأكياس تغليف خاصة لمنع تعرضها للغبار أو البقع أثناء الحركة والنزول، مع الرص المنظم والمحكم داخل صندوق السيارة.',
      preparationAdvice: 'إبلاغنا بأبعاد المصاعد والمداخل لتحديد طريقة الإنزال الأنسب دون احتكاك بالجدران.',
      iconName: 'Sofa',
    },
    {
      id: 'short-term-storage',
      title: 'تخزين الأثاث بمستودعات آمنة',
      shortDesc: 'مستودعات آمنة ونظيفة لتخزين العفش والبضائع لفترات قصيرة أو طويلة أثناء التشطيب أو السفر.',
      fullDesc: 'نوفر مساحات تخزين مجهزة ومحمية من الرطوبة والحرارة والحشرات، مع تغليف مخصص للتخزين الطويل وجرد دقيق لكافة القطع لتسليمها بنفس حالتها الأصلية عند طلبها.',
      preparationAdvice: 'تأكد من جفاف كافة المفروشات والأواني تماماً قبل مرحلة التغليف والتخزين.',
      iconName: 'Warehouse',
    }
  ] as ServiceItem[],

  // آراء العملاء وتجارب النقل الحقيقية
  testimonials: [
    {
      id: 'test-1',
      clientName: 'أبو محمد',
      role: 'عميل نقل منزل',
      location: 'نقل من شمال الرياض (حطين) إلى شرق الرياض (اليرموك)',
      comment: 'نقلوا عفش البيت كامل من شمال الرياض لشرق الرياض بدون أي خدش، والتزامهم بالوقت كان ممتاز جداً. فكوا وركبوا غرف النوم والمطبخ باحترافية عالية.',
      rating: 5,
    },
    {
      id: 'test-2',
      clientName: 'م. عبد الله السبيعي',
      role: 'نقل شقة سكنية',
      location: 'حي النرجس، الرياض',
      comment: 'تعاملت مع شركة الثقة لنقل أثاث الشقة؛ الشباب محترمين جداً وتغليفهم بالفقاعات والسترتش كان ممتاز وريحني من القلق على الأجهزة والزجاج.',
      rating: 5,
    },
    {
      id: 'test-3',
      clientName: 'أم فهد',
      role: 'نقل فيلا وتغليف شامل',
      location: 'حي الملقا إلى حي الصحافة',
      comment: 'دقة بالمواعيد وأسعار واضحة بدون زيادة أثناء التحميل. الونيتات والدينا نظيفة جداً ومجهزة، أنصح بالتعامل معهم وبشدة.',
      rating: 5,
    },
    {
      id: 'test-4',
      clientName: 'خالد بن ناصر',
      role: 'نقل مكتب تجاري',
      location: 'طريق الملك فهد، الرياض',
      comment: 'نقلوا مكاتب وأجهزة الشركة بالكامل خلال عطلة نهاية الأسبوع دون أي تعطيل لأعمالنا، تنظيم ممتاز وعمالة مدربة.',
      rating: 5,
    }
  ] as TestimonialItem[],

  // مقال المدونة المخصص للـ SEO
  seoArticle: {
    id: 'moving-guide-riyadh',
    title: 'دليل نصائح لنقل العفش بدون أضرار وكيف تختار أفضل شركة نقل أثاث بالرياض؟',
    slug: 'moving-tips-guide-riyadh',
    publishDate: 'أكتوبر 2026',
    readTime: '5 دقائق قراءة',
    excerpt: 'الانتقال إلى منزل جديد هو بداية مرحلة جديدة ومثيرة، ولكن قد تتحول إلى مصدر قلق إذا لم يتم التخطيط لها بشكل صحيح. إليك أهم الخطوات والنصائح لضمان نقل عفشك بسلام.',
  }
};

/**
 * وظائف تتبع التحويلات لحملات Google Ads و Google Analytics 4
 */
export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  try {
    if (typeof window !== 'undefined' && Array.isArray((window as unknown as { dataLayer?: unknown[] }).dataLayer)) {
      (window as unknown as { dataLayer: unknown[] }).dataLayer.push({
        event: eventName,
        ...params,
      });
    }

    const winGtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
    if (typeof winGtag === 'function') {
      winGtag('event', eventName, params);
    }
  } catch {
    // تتبع صامت
  }
}

export function trackPhoneCallClick(sourceLocation = 'general') {
  trackEvent('contact_phone_click', {
    event_category: 'Lead',
    event_label: 'Call Click',
    source: sourceLocation,
  });
}

export function trackWhatsAppClick(sourceLocation = 'general') {
  trackEvent('contact_whatsapp_click', {
    event_category: 'Lead',
    event_label: 'WhatsApp Click',
    source: sourceLocation,
  });
}

export function trackLeadFormSubmitted(serviceType: string) {
  trackEvent('generate_lead', {
    event_category: 'Conversion',
    event_label: 'Form Submission',
    service_type: serviceType,
  });
}
