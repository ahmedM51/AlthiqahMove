import React, { useState } from 'react';
import { SITE_CONFIG, getTelHref, getWhatsAppHref, trackPhoneCallClick, trackWhatsAppClick } from '../lib/site-config';
import { ChevronLeft, Phone, ShieldCheck } from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { ContactForm } from '../components/ContactForm';
import { ServiceCard } from '../components/ServiceCard';

import packingImage from '../assets/images/services_furniture_packing_1791883532942.jpg';
import assemblyImage from '../assets/images/services_furniture_assembly_1791883533574.jpg';
import heroImage from '../assets/images/hero_moving_truck_riyadh_1791883533123.jpg';

interface ServicesPageProps {
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

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SITE_CONFIG.services[0].id);

  const telHref = getTelHref();
  const whatsappHref = getWhatsAppHref('السلام عليكم، أود الاستفسار عن خدمات ونيت نقل العفش بالرياض.');

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    document.getElementById('services-quote-form')?.scrollIntoView({ behavior: 'smooth' });
  };

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
          <span className="text-slate-900 font-bold">الخدمات</span>
        </nav>

        {/* Section Header */}
        <div className="max-w-3xl space-y-4 text-right">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-700">
            <span>خدمات ونيت ودينا نقل العفش بالرياض</span>
            <span aria-hidden="true">·</span>
            <span>نقل الأثاث والأغراض والأجهزة والبضائع</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            خدمات ونيت نقل عفش بالرياض | نقل آمن مع الفك والتغليف
          </h1>
          <p className="text-slate-600 text-base leading-relaxed">
            نوفر مجموعة متكاملة من الخدمات المصممة لتلبي احتياجات الأفراد والشركات داخل الرياض: ونيت نقل العفش والأثاث،
            نقل الأغراض والأجهزة الكهربائية، دينا مغلقة ومبطنة للمنازل الكبيرة، فك وتركيب الأثاث والمطابخ، تغليف وقائي
            متعدد الطبقات، ونقل البضائع والمكاتب مع التخزين. اختر خدمتك واحجز مباشرة على الواتساب أو عبر الاتصال.
          </p>

          {/* أزرار التحويل السريعة */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={telHref}
              onClick={() => trackPhoneCallClick('services_header')}
              className="flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>اتصل الآن</span>
              <span dir="ltr" className="font-black">{SITE_CONFIG.contact.phoneDisplay}</span>
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('services_header')}
              className="flex items-center gap-2 px-5 py-3 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>اطلب تسعيرة على واتساب</span>
            </a>
          </div>
        </div>

        {/* Services Grid */}
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

        {/* تفاصيل تجهيز العفش قبل وصول السيارة */}
        <div className="bg-white rounded-xl border border-slate-200 p-8 space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-700">
            <ShieldCheck className="w-4 h-4" />
            <span>نصائح ذهبية ليوم نقل منظم</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            ما الذي يحتاج العميل إلى تجهيزه قبل وصول ونيت النقل؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-700 pt-2">
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80 space-y-2">
              <span className="font-bold text-slate-900 text-sm block">1. فرز المتعلقات الثمينة</span>
              <p className="leading-relaxed">
                ضع المجوهرات والمبالغ النقدية وبطاقات الهوية وعقود الملكية في حقيبة شخصية وانقلها بنفسك، تفادياً
                لاختلاطها مع كراتين النقل العامة.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80 space-y-2">
              <span className="font-bold text-slate-900 text-sm block">2. تجهيز الأجهزة الكهربائية</span>
              <p className="leading-relaxed">
                فرّغ الثلاجة والفريزر وافصل الكهرباء عنهما قبل الموعد بساعتين، وصرّف مياه الغسالة، واجمع أسلاك
                الشاشات وأجهزة التلفزيون في أكياس مخصصة.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80 space-y-2">
              <span className="font-bold text-slate-900 text-sm block">3. التنسيق مع إدارة المبنى</span>
              <p className="leading-relaxed">
                تأكد من جاهزية المصعد وحجزه، وأبلغ حارس العمارة لتهيئة موقف قريب للونيت أو الدينا لتسريع التحميل
                والتنزيل.
              </p>
            </div>
          </div>
        </div>

        {/* نموذج طلب الحجز والتسعير في الصفحة */}
        <div className="pt-6" id="services-quote-form">
          <ContactForm
            initialServiceId={selectedServiceId}
            sourceTitle="طلب تسعيرة وتنسيق موعد نقل عفش بالرياض"
          />
        </div>
      </div>
    </div>
  );
};
