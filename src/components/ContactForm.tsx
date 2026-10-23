import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { SITE_CONFIG, trackLeadFormSubmitted, trackWhatsAppClick } from '../lib/site-config';

interface ContactFormProps {
  initialServiceId?: string;
  sourceTitle?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialServiceId, sourceTitle }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceType: initialServiceId || SITE_CONFIG.services[0].id,
    fromDistrict: '',
    toDistrict: '',
    floorCount: 'طابق أرضي / مصعد متوفر',
    notes: '',
    // Honeypot field for spam prevention (must remain empty)
    companyWebsiteTrap: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState<string | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'يرجى كتابة الاسم الكريم بالكامل.';
    }

    // Saudi phone validation: numbers starting with 05 or +9665 and at least 9-10 digits
    const cleanedPhone = formData.phone.replace(/[\s-]/g, '');
    const saudiPhoneRegex = /^(05|5|\+9665|009665)[0-9]{8}$/;
    if (!cleanedPhone) {
      newErrors.phone = 'يرجى إدخال رقم الجوال للتواصل.';
    } else if (!saudiPhoneRegex.test(cleanedPhone) && cleanedPhone.length < 9) {
      newErrors.phone = 'يرجى إدخال رقم جوال صحيح (مثال: 05XXXXXXXX).';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'صيغة البريد الإلكتروني غير صحيحة.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot trap
    if (formData.companyWebsiteTrap) {
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable form processing and client lead capture
    setTimeout(() => {
      const generatedId = `WN-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmissionId(generatedId);
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger Google Ads conversion tracking event
      trackLeadFormSubmitted(formData.serviceType);

      // Save to localStorage as a safety copy for the user
      try {
        const existingLeads = JSON.parse(localStorage.getItem('smart_wanet_leads') || '[]');
        existingLeads.push({
          id: generatedId,
          ...formData,
          submittedAt: new Date().toISOString(),
        });
        localStorage.setItem('smart_wanet_leads', JSON.stringify(existingLeads));
      } catch {
        // Safe fallback
      }
    }, 600);
  };

  // Build WhatsApp pre-filled message with quote details
  const buildWhatsAppSummary = () => {
    const selectedService = SITE_CONFIG.services.find((s) => s.id === formData.serviceType)?.title || formData.serviceType;
    const msg = `طلب تسعيرة جديد [${submissionId || 'طلب موقع'}]:
- الاسم: ${formData.fullName}
- الجوال: ${formData.phone}
- نوع الخدمة: ${selectedService}
- من حي: ${formData.fromDistrict || 'غير محدد'}
- إلى حي: ${formData.toDistrict || 'غير محدد'}
- طبيعة المبنى: ${formData.floorCount}
${formData.notes ? `- ملاحظات إضافية: ${formData.notes}` : ''}`;
    return encodeURIComponent(msg);
  };

  if (isSubmitted) {
    const whatsappFollowUpUrl = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${buildWhatsAppSummary()}`;

    return (
      <div className="bg-white rounded-xl border border-emerald-200 p-6 sm:p-8 text-center space-y-5 shadow-sm">
        <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-bold text-slate-900">تم استلام طلب التسعيرة بنجاح</h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            شكراً لك أستاذ <span className="font-semibold text-slate-900">{formData.fullName}</span>. تم قيد طلبك برقم مرجعي:
            <span className="inline-block mx-1 font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
              {submissionId}
            </span>
          </p>
          <p className="text-xs text-slate-500">
            سيقوم منسق الحركة بالاتصال بك على الرقم ({formData.phone}) لتأكيد التفاصيل وتحديد أنسب موعد.
          </p>
        </div>

        {/* خيار الإرسال الفوري عبر واتساب لتسريع الرد في Google Ads */}
        <div className="pt-3 border-t border-slate-100 space-y-3">
          <a
            href={whatsappFollowUpUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('form_success_button')}
            className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold rounded-lg text-sm transition-colors shadow-sm"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>متابعة تفاصيل الطلب فوراً عبر واتساب</span>
          </a>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                fullName: '',
                phone: '',
                email: '',
                serviceType: SITE_CONFIG.services[0].id,
                fromDistrict: '',
                toDistrict: '',
                floorCount: 'طابق أرضي / مصعد متوفر',
                notes: '',
                companyWebsiteTrap: '',
              });
            }}
            className="text-xs text-slate-500 hover:text-slate-800 transition-colors"
          >
            إرسال طلب إضافي آخر
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
      {sourceTitle && (
        <div className="pb-2 border-b border-slate-100">
          <span className="text-xs text-amber-700 font-semibold block">{sourceTitle}</span>
          <h3 className="text-lg font-bold text-slate-900">طلب معاينة وتسعير مجاني في الرياض</h3>
        </div>
      )}

      {/* حقل مصيدة السبام الخفي */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="companyWebsiteTrap">Company URL</label>
        <input
          id="companyWebsiteTrap"
          type="text"
          value={formData.companyWebsiteTrap}
          onChange={(e) => setFormData({ ...formData, companyWebsiteTrap: e.target.value })}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* الاسم الكامل */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 mb-1.5">
            الاسم الكريم <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="مثال: عبد الله السعد"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
              errors.fullName ? 'border-red-400 focus:ring-red-200' : 'border-slate-300 focus:ring-amber-200 focus:border-amber-500'
            }`}
          />
          {errors.fullName && <p className="mt-1 text-xs text-red-600 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.fullName}</p>}
        </div>

        {/* رقم الجوال */}
        <div>
          <label htmlFor="phone" className="block text-xs font-bold text-slate-700 mb-1.5">
            رقم الجوال للتواصل <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            dir="ltr"
            placeholder="05XXXXXXXX"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 text-right transition-all ${
              errors.phone ? 'border-red-400 focus:ring-red-200' : 'border-slate-300 focus:ring-amber-200 focus:border-amber-500'
            }`}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-600 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* نوع الخدمة */}
        <div>
          <label htmlFor="serviceType" className="block text-xs font-bold text-slate-700 mb-1.5">
            نوع الخدمة المطلوبة
          </label>
          <select
            id="serviceType"
            value={formData.serviceType}
            onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-500 transition-all"
          >
            {SITE_CONFIG.services.map((s) => (
              <option key={s.id} value={s.id}>
                {s.title}
              </option>
            ))}
            <option value="other">خدمة نقل خاصة / مخصصة</option>
          </select>
        </div>

        {/* البريد الإلكتروني (اختياري) */}
        <div>
          <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-1.5">
            البريد الإلكتروني <span className="text-slate-400 font-normal">(اختياري)</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
              errors.email ? 'border-red-400 focus:ring-red-200' : 'border-slate-300 focus:ring-amber-200 focus:border-amber-500'
            }`}
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* حي الانطلاق */}
        <div>
          <label htmlFor="fromDistrict" className="block text-xs font-bold text-slate-700 mb-1.5">
            حي الانطلاق بالرياض
          </label>
          <input
            id="fromDistrict"
            type="text"
            placeholder="مثال: الملقا أو الياسمين"
            value={formData.fromDistrict}
            onChange={(e) => setFormData({ ...formData, fromDistrict: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-500 transition-all"
          />
        </div>

        {/* حي الوصول */}
        <div>
          <label htmlFor="toDistrict" className="block text-xs font-bold text-slate-700 mb-1.5">
            حي الوصول بالرياض
          </label>
          <input
            id="toDistrict"
            type="text"
            placeholder="مثال: النرجس أو الرمال"
            value={formData.toDistrict}
            onChange={(e) => setFormData({ ...formData, toDistrict: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-500 transition-all"
          />
        </div>
      </div>

      {/* طبيعة الطوابق والمصاعد */}
      <div>
        <label htmlFor="floorCount" className="block text-xs font-bold text-slate-700 mb-1.5">
          حالة الأدوار والمصعد
        </label>
        <select
          id="floorCount"
          value={formData.floorCount}
          onChange={(e) => setFormData({ ...formData, floorCount: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-500 transition-all"
        >
          <option value="طابق أرضي / فيلا مدخل مباشر">طابق أرضي / فيلا مدخل مباشر</option>
          <option value="شقة مع مصعد واسع يتسع للعفش">شقة مع مصعد واسع يتسع للعفش</option>
          <option value="طابق علوي بالدرج (طابق 1 أو 2)">طابق علوي بالدرج (طابق 1 أو 2)</option>
          <option value="طابق علوي مرتفع يحتاج ونش أو رافعة خارجية">طابق علوي مرتفع يحتاج ونش أو رافعة خارجية</option>
        </select>
      </div>

      {/* تفاصيل أو ملاحظات */}
      <div>
        <label htmlFor="notes" className="block text-xs font-bold text-slate-700 mb-1.5">
          تفاصيل الأثاث أو أي متطلبات خاصة <span className="text-slate-400 font-normal">(اختياري)</span>
        </label>
        <textarea
          id="notes"
          rows={3}
          placeholder="مثال: عدد 3 غرف نوم، مطبخ راكب يحتاج فك وتركيب، طقم كنب مجلس كبير..."
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-500 transition-all"
        ></textarea>
      </div>

      <div className="pt-1">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-slate-900 hover:bg-slate-800 active:scale-[0.99] text-white font-bold rounded-lg text-sm transition-all shadow-sm disabled:opacity-50"
        >
          {isSubmitting ? (
            <span>جاري إرسال الطلب...</span>
          ) : (
            <>
              <span>إرسال طلب التسعيرة للمعاينة والتنسيق</span>
              <Send className="w-4 h-4 text-amber-400 rotate-180" />
            </>
          )}
        </button>
        <p className="text-[11px] text-slate-500 text-center mt-2">
          بياناتك آمنة ولن يتم استخدامها إلا للتواصل بخصوص خدمة النقل المحددة.
        </p>
      </div>
    </form>
  );
};
