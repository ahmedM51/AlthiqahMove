import React from 'react';
import { SITE_CONFIG } from '../lib/site-config';
import { ChevronLeft, ShieldCheck, Lock, Eye, FileText } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
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
          <span className="text-slate-900 font-bold">سياسة الخصوصية</span>
        </nav>

        {/* Section Header */}
        <div className="space-y-3 text-right">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-700">
            <Lock className="w-3.5 h-3.5" />
            <span>حماية البيانات والخصوصية</span>
            <span aria-hidden="true">·</span>
            <span>آخر تحديث: أكتوبر 2026</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            سياسة الخصوصية واستخدام البيانات لموقع «{SITE_CONFIG.name}»
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            توضح هذه الصفحة كيفية جمع واستخدام وحماية البيانات الشخصية التي يشاركها زوار الموقع عند طلب خدمات نقل الأثاث في الرياض، بما يتوافق مع المعايير الفنية وسياسات إعلانات Google Ads.
          </p>
        </div>

        {/* تنبيه قانوني */}
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
          <span className="font-bold block">إشعار إخلاء مسؤولية تنظيمي:</span>
          <p>
            هذه الوثيقة مسودة إرشادية وتوضيحية لطبيعة معالجة البيانات داخل الموقع. يُرجى مراجعتها وتعديلها بمعرفة الممثل القانوني للشركة لضمان توافقها الكامل مع الأنظمة واللوائح السارية في المملكة العربية السعودية.
          </p>
        </div>

        {/* محتوى السياسة */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-8 text-sm text-slate-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-4 bg-amber-500 rounded-sm inline-block"></span>
              <span>1. البيانات التي يتم جمعها عبر الموقع</span>
            </h2>
            <p>
              يقوم الموقع بجمع المعلومات الأساسية فقط التي يدخلها العميل طوعاً عبر نموذج طلب التسعيرة أو التواصل المباشر، وتشمل:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 pr-2">
              <li>الاسم الكريم للتواصل وتنسيق المعاينة.</li>
              <li>رقم الهاتف المحمول لإجراء الاتصال أو إرسال تفاصيل الموعد عبر واتساب.</li>
              <li>عنوان البريد الإلكتروني (في حال إدخاله اختيارياً).</li>
              <li>حي الانطلاق وحي الوصول داخل مدينة الرياض وطبيعة الأدوار لتحديد متطلبات النقل.</li>
              <li>أي ملاحظات إضافية حول كمية الأثاث أو نوع الخدمات الإضافية المطلوبة.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-4 bg-amber-500 rounded-sm inline-block"></span>
              <span>2. الغرض من استخدام البيانات</span>
            </h2>
            <p>
              تُستخدم البيانات المدخلة حصرياً للأغراض التشغيلية التالية:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 pr-2">
              <li>التواصل مع العميل لتزويده بعرض السعر وجدولة موعد النقل.</li>
              <li>توجيه سيارة النقل والفريق الفني إلى العنوان المحدد بدقة في الرياض.</li>
              <li>تحسين جودة الخدمة وتقديم الدعم في حال وجود أي استفسار أو تعديل على الموعد.</li>
            </ul>
            <p className="font-semibold text-slate-800">
              نؤكد بشكل قاطع أننا لا نبيع أو نؤجر أو نشارك أي بيانات شخصية مع أي أطراف ثالثة لأغراض تسويقية أو دعائية مستقلة.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-4 bg-amber-500 rounded-sm inline-block"></span>
              <span>3. ملفات تعريف الارتباط (Cookies) والتحليلات</span>
            </h2>
            <p>
              قد يستخدم الموقع أدوات تحليلية قياسية مثل Google Analytics وGoogle Ads بهدف قياس أداء الحملات وفهم تجربة الزوار وتفاعلهم مع الصفحات. لا تتضمن هذه الأدوات أي معلومات تعريف شخصية حساسة، ويمكن للمستخدم ضبط إعدادات المتصفح لرفض ملفات تعريف الارتباط في أي وقت.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-4 bg-amber-500 rounded-sm inline-block"></span>
              <span>4. أمن وحفظ البيانات</span>
            </h2>
            <p>
              نطبق إجراءات تقنية وإدارية معقولة لحماية بياناتكم من الوصول غير المصرح به أو التعديل أو الإفصاح. يتم تخزين البيانات بشكل آمن ولا يطلع عليها سوى الموظفين المعنيين بتنفيذ طلب النقل.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-4 bg-amber-500 rounded-sm inline-block"></span>
              <span>5. حقوق المستخدم والتواصل</span>
            </h2>
            <p>
              يحق لكل مستخدم في أي وقت طلب تعديل أو حذف بيانات الاتصال الخاصة به بعد إتمام خدمة النقل عن طريق مراسلتنا مباشرة على البريد الإلكتروني ({SITE_CONFIG.contact.email}) أو عبر رقم التواصل المعتمد للشركة.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
