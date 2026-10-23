import React from 'react';
import { Truck, Wrench, PackageCheck, Tv, Sofa, Warehouse, Layers, Phone, ArrowLeft } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { ServiceItem, SITE_CONFIG, getTelHref, getWhatsAppHref, trackPhoneCallClick, trackWhatsAppClick } from '../lib/site-config';

interface ServiceCardProps {
  service: ServiceItem;
  imageSrc?: string;
  onSelectService?: (serviceId: string) => void;
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Truck':
      return <Truck className="w-6 h-6 text-amber-600" />;
    case 'Wrench':
      return <Wrench className="w-6 h-6 text-amber-600" />;
    case 'PackageCheck':
      return <PackageCheck className="w-6 h-6 text-amber-600" />;
    case 'Tv':
      return <Tv className="w-6 h-6 text-amber-600" />;
    case 'Sofa':
      return <Sofa className="w-6 h-6 text-amber-600" />;
    case 'Warehouse':
      return <Warehouse className="w-6 h-6 text-amber-600" />;
    case 'Layers':
      return <Layers className="w-6 h-6 text-amber-600" />;
    default:
      return <Truck className="w-6 h-6 text-amber-600" />;
  }
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, imageSrc, onSelectService }) => {
  const telHref = getTelHref();
  const whatsappHref = getWhatsAppHref(`السلام عليكم، أرغب في الاستفسار عن خدمة: ${service.title}`);

  return (
    <article className="group bg-white rounded-xl border border-slate-200/90 overflow-hidden flex flex-col justify-between hover:border-slate-300 transition-all hover:shadow-md">
      <div>
        {imageSrc ? (
          <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
            <img
              src={imageSrc}
              alt={service.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60"></div>
          </div>
        ) : (
          <div className="p-6 pb-2 flex items-center justify-between">
            <div className="w-12 h-12 rounded-lg bg-amber-50 border border-amber-200/60 flex items-center justify-center">
              {getIcon(service.iconName)}
            </div>
            <div className="text-xs font-semibold text-slate-500">مدينة الرياض</div>
          </div>
        )}

        <div className="p-6">
          {imageSrc && (
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
              <span>خدمة معتمدة بالرياض</span>
              <span aria-hidden="true">·</span>
              <span>عمالة وفنيون متخصصون</span>
            </div>
          )}

          <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors mb-2.5">
            {service.title}
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed mb-4">{service.shortDesc}</p>

          {service.preparationAdvice && (
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-100 text-xs text-slate-600 space-y-1 mb-4">
              <span className="font-bold text-slate-800 block">نصيحة قبل التنفيذ:</span>
              <p>{service.preparationAdvice}</p>
            </div>
          )}
        </div>
      </div>

      <div className="p-6 pt-0 border-t border-slate-100 mt-2 space-y-2.5">
        <div className="grid grid-cols-2 gap-2 pt-3">
          <a
            href={telHref}
            onClick={() => trackPhoneCallClick(`service_card_${service.id}`)}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>اتصل الآن</span>
          </a>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick(`service_card_${service.id}`)}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold transition-colors"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
            <span>واتساب</span>
          </a>
        </div>

        <p className="text-[11px] text-center text-slate-500">
          خدمة يومياً من 06:00 صباحاً حتى منتصف الليل · {SITE_CONFIG.contact.phoneDisplay}
        </p>

        {onSelectService && (
          <button
            onClick={() => onSelectService(service.id)}
            className="w-full flex items-center justify-center gap-1 text-xs font-bold text-amber-700 hover:text-amber-800 py-1.5 transition-colors"
          >
            <span>طلب تسعيرة لهذه الخدمة</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </article>
  );
};
