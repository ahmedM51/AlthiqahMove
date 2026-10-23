import React from 'react';
import { Truck } from 'lucide-react';
import { SITE_CONFIG } from '../lib/site-config';

interface BrandLogoProps {
  /** light = لعرض الشعار على خلفية داكنة */
  variant?: 'dark' | 'light';
  /** إظهار السطر التوضيحي أسفل الاسم */
  withTagline?: boolean;
  className?: string;
}

/**
 * شعار «ونيت نقل عفش بالرياض»: أيقونة ونيت + الاسم التجاري (بدون صور قديمة)
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  withTagline = false,
  className = '',
}) => {
  const isLight = variant === 'light';

  return (
    <span className={`flex items-center gap-2.5 text-right ${className}`}>
      <span className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-amber-300 to-amber-500 flex items-center justify-center shadow-sm shrink-0">
        <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900" />
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={`text-sm sm:text-base font-black tracking-tight ${
            isLight ? 'text-white' : 'text-slate-900'
          }`}
        >
          {SITE_CONFIG.name}
        </span>
        {withTagline && (
          <span className={`text-[10px] sm:text-[11px] font-semibold ${isLight ? 'text-amber-400' : 'text-amber-700'}`}>
            ونيت ودينا · فك وتركيب وتغليف · خدمة يومية بالرياض
          </span>
        )}
      </span>
    </span>
  );
};
