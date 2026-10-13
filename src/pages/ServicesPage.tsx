import React, { useState } from 'react';
import { SITE_CONFIG, trackPhoneCallClick, trackWhatsAppClick } from '../lib/site-config';
import { ChevronLeft, Phone, MessageCircle, ArrowLeft, CheckCircle2, ShieldCheck } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { ServiceCard } from '../components/ServiceCard';

import packingImage from '../assets/images/services_furniture_packing_1791883532942.jpg';
import assemblyImage from '../assets/images/services_furniture_assembly_1791883533574.jpg';
import heroImage from '../assets/images/hero_moving_truck_riyadh_1791883533123.jpg';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('furniture-moving');

  const hasPhone = SITE_CONFIG.contact.phone && !SITE_CONFIG.contact.phone.includes('0000000');
  const telHref = hasPhone ? `tel:${SITE_CONFIG.contact.phone}` : '#contact';
  const whatsappHref = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
    'السلام عليكم، أود الاستفسار عن باقات وخدمات نقل الأثاث في الرياض.'
  )}`;

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    const formElement = document.getElementById('services-quote-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
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
            <span>خدمات نقل الأثاث والعفش بالرياض</span>
            <span aria-hidden="true">·</span>
            <span>شركة الثقة</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            خدمات نقل الأثاث والعفش بالرياض | شركة الثقة
          </h1>
          <p className="text-slate-600 text-base leading-relaxed">
            نوفر مجموعة متكاملة من الخدمات المصممة لتلبي احتياجات الأفراد والشركات: فك وتركيب الأثاث، التغليف والتعبئة، نقل الأثاث والأغراض (ونيت وشاحنات مجهزة)، نقل مكاتب الشركات، وتخزين الأثاث بمستودعات آمنة. استعرض خدماتنا المفصلة أدناه:
          </p>
        </div>

        {/* Services Grid with Real Generated Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SITE_CONFIG.services.map((service, index) => {
            let cardImage: string | undefined = undefined;
            if (index === 0) cardImage = heroImage;
            if (index === 1) cardImage = assemblyImage;
            if (index === 2) cardImage = packingImage;

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

        {/* تفاصيل تجهيز العفش قبل وصول السيارة */}
        <div className="bg-white rounded-xl border border-slate-200 p-8 space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-700">
            <ShieldCheck className="w-4 h-4" />
            <span>نصائح ذهبية ليوم نقل منظم</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            ما الذي يحتاج العميل إلى توضيحه أو تجهيزه قبل وصول الفريق؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-700 pt-2">
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80 space-y-2">
              <span className="font-bold text-slate-900 text-sm block">1. فرز المتعلقات الثمينة</span>
              <p className="leading-relaxed">
                يُنصح بوضع المجوهرات، المبالغ النقدية، بطاقات الهوية، وعقود الملكية في حقيبة شخصية خاصة ونقلها بمعرفتكم تفادياً لاختلاطها مع كراتين النقل العامة.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80 space-y-2">
              <span className="font-bold text-slate-900 text-sm block">2. إخلاء وتجهيز الأجهزة</span>
              <p className="leading-relaxed">
                تفريغ الثلاجة والفريزر وفصل الكهرباء عنها قبل موعد النقل بساعات، وتصريف مياه الغسالات، وجمع ملحقات وأسلاك التلفزيونات في أكياس مخصصة.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80 space-y-2">
              <span className="font-bold text-slate-900 text-sm block">3. التنسيق مع إدارة المبنى</span>
              <p className="leading-relaxed">
                التأكد من جاهزية المصعد وتأمينه، وإبلاغ حارس أو إدارة العمارة لتسهيل وقوف شاحنة النقل في موقع قريب من المدخل لتسريع التحميل والتنزيل.
              </p>
            </div>
          </div>
        </div>

        {/* نموذج طلب الحجز والتسعير في الصفحة */}
        <div className="pt-6" id="services-quote-form">
          <ContactForm
            initialServiceId={selectedServiceId}
            sourceTitle="طلب تسعيرة وتنسيق موعد نقل أثاث في الرياض"
          />
        </div>
      </div>
    </div>
  );
};
