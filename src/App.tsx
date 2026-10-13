/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ContactActions } from './components/ContactActions';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { SITE_CONFIG } from './lib/site-config';
import { AlertCircle } from 'lucide-react';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const p = window.location.pathname;
      return p === '' ? '/' : p;
    }
    return '/';
  });

  // مزامنة المتصفح مع روابط SPA وزر الرجوع/التقدم
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // تحديث عنوان الصفحة ووسم meta description عند التنقل
  useEffect(() => {
    let pageTitle = 'شركة الثقة لنقل الأثاث بالرياض | نقل عفش آمن وسريع مع الفك والتغليف';
    let metaDesc = 'شركة الثقة لنقل الأثاث بالرياض: نقل عفش آمن وسريع مع الفك والتغليف والتحميل بأسطول ونيت وشاحنات مجهزة لكافة أحياء الرياض.';

    switch (currentPath) {
      case '/about':
        pageTitle = 'عن شركة الثقة | الخبرة والأمان في نقل العفش بالرياض';
        metaDesc = 'تعرف على شركة الثقة لنقل الأثاث بالرياض، خبرتنا، فرق العمل المدربة، وأسطول الونيت والشاحنات المجهزة لنقل آمن ومريح.';
        break;
      case '/services':
        pageTitle = 'خدمات نقل الأثاث والعفش بالرياض | شركة الثقة';
        metaDesc = 'فك وتركيب غرف النوم والمطابخ، تغليف بالفقاعات والكرتون، نقل العفش بالونيت والشاحنات، ونقل المكاتب وتخزين الأثاث في الرياض.';
        break;
      case '/testimonials':
        pageTitle = 'آراء عملاء شركة الثقة لنقل العفش بالرياض | تجارب حقيقية';
        metaDesc = 'تجارب وآراء عملاء شركة الثقة لنقل الأثاث في أحياء الرياض (حطين، اليرموك، النرجس، الملقا، طريق الملك فهد). رضاكم سر نجاحنا.';
        break;
      case '/blog':
        pageTitle = 'دليل نصائح لنقل العفش بدون أضرار بالرياض | شركة الثقة';
        metaDesc = 'دليل شامل لنقل العفش بأمان وكيف تختار أفضل شركة نقل أثاث بالرياض مع خطوات التجهيز المسبق ومعايير الجودة.';
        break;
      case '/contact':
        pageTitle = 'تواصل مع شركة الثقة لنقل الأثاث بالرياض | اتصال وواتساب';
        metaDesc = 'تواصل مع شركة الثقة لنقل الأثاث بالرياض. نعمل طوال أيام الأسبوع من 06:00 ص حتى 12:00 منتصف الليل. اتصال مباشر وواتساب.';
        break;
      case '/privacy-policy':
        pageTitle = 'سياسة الخصوصية وحماية البيانات | شركة الثقة لنقل الأثاث';
        metaDesc = 'سياسة الخصوصية واستخدام بيانات التواصل في موقع شركة الثقة لنقل الأثاث بالرياض وفق متطلبات Google Ads.';
        break;
      default:
        pageTitle = 'شركة الثقة لنقل الأثاث بالرياض | نقل عفش آمن وسريع مع الفك والتغليف';
        metaDesc = 'شركة الثقة لنقل الأثاث بالرياض: نقل عفش آمن وسريع مع الفك والتغليف والتحميل بأسطول ونيت وشاحنات مجهزة لكافة أحياء الرياض.';
    }

    document.title = pageTitle;

    const metaDescriptionEl = document.querySelector('meta[name="description"]');
    if (metaDescriptionEl) {
      metaDescriptionEl.setAttribute('content', metaDesc);
    }
  }, [currentPath]);

  const navigateTo = (path: string) => {
    setCurrentPath(path);
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage onNavigate={navigateTo} />;
      case '/about':
        return <AboutPage onNavigate={navigateTo} />;
      case '/services':
        return <ServicesPage onNavigate={navigateTo} />;
      case '/testimonials':
        return <TestimonialsPage onNavigate={navigateTo} />;
      case '/blog':
        return <BlogPage onNavigate={navigateTo} />;
      case '/contact':
        return <ContactPage onNavigate={navigateTo} />;
      case '/privacy-policy':
        return <PrivacyPolicyPage onNavigate={navigateTo} />;
      default:
        return (
          <div className="py-24 px-4 text-center space-y-4 max-w-md mx-auto">
            <h1 className="text-2xl font-black text-slate-900">الصفحة المطلوبة غير موجودة</h1>
            <p className="text-sm text-slate-600">
              ربما تم تغيير الرابط أو انتقلت إلى مسار غير مسجل. يمكنك العودة إلى الصفحة الرئيسية لتصفح الخدمات.
            </p>
            <button
              onClick={() => navigateTo('/')}
              className="inline-block px-5 py-2.5 bg-amber-400 text-slate-950 font-bold rounded-lg text-sm hover:bg-amber-300 transition-colors"
            >
              العودة للصفحة الرئيسية
            </button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-['Cairo',sans-serif]">
      {/* شريط تنبيه تشغيلي هادئ في حال الحاجة */}
      {SITE_CONFIG.contact.phoneNeedsConfirmation && (
        <div className="bg-amber-50 border-b border-amber-200 px-4 py-1.5 text-xs text-amber-900 text-center font-medium">
          <span className="inline-flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5 text-amber-700 shrink-0" />
            <span>تنبيه للمدير: أرقام التواصل النموذجية موضوعة كـ (050 000 0000) في ملف <code className="bg-amber-100 px-1 py-0.5 rounded font-mono text-[11px]">src/lib/site-config.ts</code> وتتطلب وضع أرقامكم الحقيقية قبل تشغيل حملة Google Ads.</span>
          </span>
        </div>
      )}

      {/* الهيدر الرئيسي مع شريط التنقل */}
      <Header currentPath={currentPath} onNavigate={navigateTo} />

      {/* محتوى الصفحة النشطة */}
      <main className="flex-1 pb-16 sm:pb-0">
        {renderCurrentPage()}
      </main>

      {/* الفوتر المتكامل */}
      <Footer onNavigate={navigateTo} />

      {/* شريط الإجراءات السريعة العائم للجوال المتوافق مع سقف 15% */}
      <ContactActions />
    </div>
  );
}
