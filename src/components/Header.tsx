import React, { useState } from 'react';
import { Phone, Menu, X, Clock, MapPin, ArrowUpLeft } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { WhatsAppIcon } from './WhatsAppIcon';
import { SITE_CONFIG, getTelHref, getWhatsAppHref, trackPhoneCallClick, trackWhatsAppClick } from '../lib/site-config';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'الرئيسية', path: '/' },
    { label: 'الخدمات', path: '/services' },
    { label: 'من نحن', path: '/about' },
    { label: 'آراء العملاء', path: '/testimonials' },
    { label: 'دليل نقل العفش', path: '/blog' },
    { label: 'اتصل بنا', path: '/contact' },
  ];

  const telHref = getTelHref();
  const whatsappHref = getWhatsAppHref();

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      {/* شريط علوي مصغر: ساعات العمل + اتصال سريع */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <span className="flex items-center gap-1.5 text-slate-300 font-medium">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>ونيت ودينا نقل عفش وأغراض بجميع أحياء الرياض</span>
          </span>
          <span className="hidden md:flex items-center gap-1.5 text-slate-400">
            <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>خدمة يومياً من 06:00 صباحاً حتى 12:00 منتصف الليل</span>
          </span>
        </div>
      </div>

      {/* الشريط الرئيسي: الشعار + التنقل + زرّا الاتصال والواتساب */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
        <button
          onClick={() => handleLinkClick('/')}
          className="focus:outline-none shrink-0"
          aria-label={`${SITE_CONFIG.name} - الصفحة الرئيسية`}
        >
          <BrandLogo withTagline />
        </button>

        <nav className="hidden xl:flex items-center gap-6 text-sm font-semibold text-slate-700">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <button
                key={link.path}
                onClick={() => handleLinkClick(link.path)}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                  isActive
                    ? 'text-amber-600 border-amber-600 font-bold'
                    : 'text-slate-600 hover:text-slate-950 border-transparent hover:border-slate-300'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* الزرّان الرئيسيان للتحويل: اتصال + واتساب */}
        <div className="hidden md:flex items-center gap-2.5 shrink-0">
          <a
            href={telHref}
            onClick={() => trackPhoneCallClick('header_cta')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 active:scale-[0.98] text-slate-950 font-black text-sm transition-all shadow-sm whitespace-nowrap shrink-0"
          >
            <Phone className="w-4 h-4" />
            <span>اتصل الآن</span>
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('header_cta')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] active:scale-[0.98] text-white font-black text-sm transition-all shadow-sm whitespace-nowrap shrink-0"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>واتساب</span>
          </a>
        </div>

        {/* زر القائمة للشاشات الصغيرة والمتوسطة */}
        <div className="xl:hidden flex items-center gap-2">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('header_icon')}
            aria-label="مراسلة واتساب"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-[#25D366] text-white shadow-sm"
          >
            <WhatsAppIcon className="w-5 h-5" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* القائمة المنسدلة للجوال */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`text-right px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    isActive ? 'bg-amber-50 text-amber-700 font-bold' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2.5">
            <a
              href={telHref}
              onClick={() => trackPhoneCallClick('header_mobile_menu')}
              className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-lg bg-slate-900 text-white text-xs font-bold"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>اتصل الآن</span>
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('header_mobile_menu')}
              className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-lg bg-[#25D366] text-white text-xs font-bold"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>واتساب فوري</span>
            </a>
          </div>

          <button
            onClick={() => handleLinkClick('/contact')}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-amber-400 text-slate-950 font-bold rounded-lg text-sm"
          >
            <span>طلب تسعيرة ونقل بأسعار اقتصادية</span>
            <ArrowUpLeft className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
