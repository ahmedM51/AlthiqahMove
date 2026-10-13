import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Clock, MapPin, ArrowUpLeft } from 'lucide-react';
import { SITE_CONFIG, trackPhoneCallClick, trackWhatsAppClick } from '../lib/site-config';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'الرئيسية', path: '/' },
    { label: 'من نحن', path: '/about' },
    { label: 'الخدمات', path: '/services' },
    { label: 'آراء العملاء', path: '/testimonials' },
    { label: 'دليل النقل', path: '/blog' },
    { label: 'اتصل بنا', path: '/contact' },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const hasPhone = SITE_CONFIG.contact.phone && !SITE_CONFIG.contact.phone.includes('0000000');
  const telHref = hasPhone ? `tel:${SITE_CONFIG.contact.phone}` : '#contact';
  const whatsappHref = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(SITE_CONFIG.contact.whatsappDefaultMessage)}`;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-colors">
      {/* الشريط العلوي المصغر للمعلومات وساعات العمل */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-300 font-medium">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>نقل عفش آمن وسريع بكافة أحياء الرياض وخارجها</span>
            </span>
            <span className="hidden md:inline-block text-slate-600">·</span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>06:00 ص – 12:00 منتصف الليل يومياً</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={telHref}
              onClick={() => trackPhoneCallClick('top_bar')}
              className="flex items-center gap-1.5 text-slate-200 hover:text-amber-400 transition-colors py-0.5"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-semibold tracking-wide dir-ltr text-right" dir="ltr">
                {SITE_CONFIG.contact.phoneDisplay}
              </span>
            </a>
            <span className="text-slate-700">·</span>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('top_bar')}
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors py-0.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>واتساب فوري</span>
            </a>
          </div>
        </div>
      </div>

      {/* الشريط الرئيسي للتنقل: 3-Zone Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Logo & Wordmark */}
        <button
          onClick={() => handleLinkClick('/')}
          className="text-right group focus:outline-none shrink-0 flex items-center gap-3"
          aria-label={SITE_CONFIG.name}
        >
          <img
            src="/images/logo.jpg"
            alt={SITE_CONFIG.name}
            className="h-10 sm:h-12 w-auto max-w-[130px] sm:max-w-[150px] object-contain rounded shadow-sm"
          />
          <span className="hidden md:inline-block text-base sm:text-lg font-black text-slate-900 tracking-tight">
            {SITE_CONFIG.name}
          </span>
        </button>

        {/* Zone 2: Navigation Links (Single-line prose) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
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

        {/* Zone 3: 1 Primary CTA Button */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleLinkClick('/contact')}
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] transition-all rounded-lg shadow-sm whitespace-nowrap shrink-0"
          >
            <span>طلب تسعيرة أو حجز</span>
            <ArrowUpLeft className="w-4 h-4" />
          </button>
        </div>

        {/* زر القائمة للشاشات الصغيرة */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* القائمة المنسدلة للأجهزة الذكية */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`text-right px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-amber-50 text-amber-700 font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => handleLinkClick('/contact')}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-amber-400 text-slate-950 font-bold rounded-lg text-sm"
            >
              <span>طلب تسعيرة أو حجز فوري</span>
              <ArrowUpLeft className="w-4 h-4" />
            </button>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={telHref}
                onClick={() => trackPhoneCallClick('mobile_menu')}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-slate-900 text-white rounded-lg text-xs font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>اتصال مباشر</span>
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('mobile_menu')}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-emerald-600 text-white rounded-lg text-xs font-semibold"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>مراسلة واتساب</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
