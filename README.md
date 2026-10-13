# موقع «الونيت الذكي للنقل» - خدمات نقل الأثاث في الرياض

موقع ويب تجاري متكامل، سريع ومتجاوب ومخصص لخدمات نقل الأثاث والعفش والفك والتركيب والتغليف في مدينة الرياض، مصمم وفق معايير UI/UX العربية الحديثة (RTL) ومهيأ فنياً لحملات **Google Ads** ومحركات البحث (SEO).

المشروع مبني بتقنية **React + TypeScript + Vite + Tailwind CSS**، ومُجهّز بالكامل للرفع على استضافة **Hostinger** المشتركة أو السحابية مع ملف `.htaccess` يدعم الـ SPA.

---

## 📁 بنية المشروع والملفات

```text
├── public/
│   ├── .htaccess          # ملف ضبط خادم Apache على Hostinger لـ React SPA
│   ├── robots.txt         # تهيئة زحف Googlebot و AdsBot
│   └── sitemap.xml        # خريطة الموقع لمحركات البحث
├── src/
│   ├── assets/
│   │   └── images/        # صور أصلية حقيقية لنقل وتغليف وفك الأثاث
│   ├── components/
│   │   ├── Header.tsx     # شريط التنقل العلوي المتجاوب (3-Zone Contract)
│   │   ├── Footer.tsx     # الفوتر ومعلومات الأحياء والروابط القانونية
│   │   ├── Hero.tsx       # القسم الافتتاحي البصري وأزرار التحويل
│   │   ├── ServiceCard.tsx# بطاقات الخدمات بنظام Zero-Pill المريح
│   │   ├── ContactForm.tsx# نموذج طلب التسعير الموثق مع حماية السبام
│   │   └── ContactActions.tsx # شريط الاتصال والواتساب العائم للهاتف
│   ├── pages/
│   │   ├── HomePage.tsx   # الرئيسية (شركة الثقة لنقل الأثاث بالرياض)
│   │   ├── AboutPage.tsx  # صفحة من نحن والخبرة في نقل العفش
│   │   ├── ServicesPage.tsx # صفحة تفاصيل الخدمات وإرشادات التجهيز
│   │   ├── TestimonialsPage.tsx # صفحة آراء العملاء وتجارب النقل بالرياض
│   │   ├── BlogPage.tsx   # مقال ودليل الـ SEO الشامل لنقل الأثاث
│   │   ├── ContactPage.tsx# صفحة اتصل بنا مع كافة القنوات وساعات العمل
│   │   └── PrivacyPolicyPage.tsx # مسودة سياسة الخصوصية لـ Google Ads
│   ├── lib/
│   │   └── site-config.ts # ملف الإعدادات المركزي (الأرقام، الروابط، الأحداث)
│   ├── App.tsx            # موجه الصفحات الداخلي وتحديث وسوم الميتا
│   ├── index.css          # التنسيقات العامة وخط Cairo
│   └── main.tsx           # نقطة دخول التطبيق
├── index.html             # وسوم SEO والبيانات المنظمة Schema.org
├── metadata.json          # بيانات تعريف التطبيق
└── package.json           # الحزم والتبعيات وأوامر البناء
```

---

## 🛠️ أوامر التشغيل والبناء (Local Development & Build)

### 1. تثبيت الحزم:
```bash
npm install
```

### 2. تشغيل بيئة التطوير المحلية:
```bash
npm run dev
```
سيعمل الموقع على: `http://localhost:3000`

### 3. بناء ملفات الإنتاج الجاهزة للرفع:
```bash
npm run build
```
سيتم إنشاء مجلد `dist/` يحتوي على ملفات HTML و JS و CSS والصور وملف `.htaccess`.

---

## 🐙 خطوات الرفع على GitHub (`AlthiqahMove`)

المستودع المحلي مهيأ ومُضاف له الـ Remote التالي:
`https://github.com/ahmedM51/AlthiqahMove.git` على الفرع `main`.

لرفع التعديلات من جهازك أو باستخدام رمز الوصول الشخصي (GitHub Personal Access Token):

```bash
# 1. في حال رغبت برفع الكود مباشرة باستخدام Token:
git push -u https://<YOUR_GITHUB_TOKEN>@github.com/ahmedM51/AlthiqahMove.git main

# أو إذا كان لديك SSH Key أو مسجل دخول عبر GitHub CLI (gh):
git push -u origin main
```

---

## ⚡ خطوات النشر الفوري على Vercel

تم إنشاء ملف `vercel.json` لضمان عمل كافة صفحات الموقع والروابط الداخلية (`/about`, `/services`, `/testimonials`, `/blog`, `/contact`, `/privacy-policy`) دون ظهور خطأ 404.

### الطريقة الأولى: عبر لوحة Vercel ومستودع GitHub (الأسهل والأسرع)
1. سجل الدخول إلى [Vercel](https://vercel.com).
2. اضغط على **"Add New..."** ثم اختر **"Project"**.
3. اختر مستودع **`ahmedM51/AlthiqahMove`** من حسابك في GitHub واضغط **Import**.
4. سيتعرف Vercel تلقائياً على المشروع كـ **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. اضغط **Deploy**. سيصبح موقعك متاحاً ويعمل برابط عالمي سريع ومحمي بشهادة SSL تلقائياً مع كل تحديث ترسله إلى GitHub!

### الطريقة الثانية: عبر أداة Vercel CLI محلياً
```bash
npm install -g vercel
vercel --prod
```

---

## 🚀 خطوات الرفع والنشر على استضافة Hostinger

المشروع مصمم ليعمل كـ Single Page Application (SPA) على خوادم **Hostinger** (Apache) عبر الخطوات التالية:

1. **بناء المشروع:**
   قم بتشغيل الأمر:
   ```bash
   npm run build
   ```
2. **ضغط محتويات مجلد `dist/`:**
   ادخل إلى داخل مجلد `dist`، وحدد كافة الملفات والمجلدات بداخله (بما في ذلك ملف `.htaccess` ومجلد `assets` وملف `index.html`) واضغطها في ملف `dist.zip`.
3. **الدخول إلى لوحة تحكم Hostinger (hPanel):**
   - انتقل إلى **Websites** ثم اختر موقعك واضغط **Manage**.
   - افتح **File Manager** (مدير الملفات) وتوجه إلى مجلد `public_html`.
4. **رفع الملفات وفك الضغط:**
   - ارفع ملف `dist.zip` إلى داخل `public_html`.
   - اضغط بزر الفأرة الأيمن على الملف واختر **Extract** لفك ضغط المحتويات مباشرة داخل `public_html`.
   - تأكد أن ملف `index.html` وملف `.htaccess` موجودان في المسار المباشر لـ `public_html`.
5. **التأكد من إظهار الملفات المخفية:**
   في مدير ملفات Hostinger، تأكد من تفعيل خيار **Show Hidden Files (dotfiles)** للتأكد من وجود ملف `.htaccess`.

---

## ⚙️ شرح وتهيئة ملف `.htaccess` لـ Hostinger

ملف `.htaccess` موجود في مجلد `public/.htaccess` ويُنقل تلقائياً إلى مجلد `dist/` عند البناء. وظيفته الأساسية:
1. **توجيه الـ SPA (URL Rewriting):**
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule ^ index.html [QSA,L]
   </IfModule>
   ```
   *الفائدة:* حل مشكلة ظهور خطأ **404 Not Found** عند تحديث الصفحة أو الدخول المباشر إلى روابط مثل:
   `https://yourdomain.com/services` أو `https://yourdomain.com/contact`.
2. **ضغط الملفات (Gzip / Deflate):**
   تسريع تحميل صفحات الموقع وتقليل استهلاك الباندويث لتحسين تقييم السرعة في Google Ads و PageSpeed.
3. **التخزين المؤقت (Browser Caching):**
   حفظ الصور والخطوط وملفات التنسيق في متصفح الزائر لتحميل فوري في الزيارات اللاحقة.
4. **أمان الروابط:**
   منع استعراض مجلدات الموقع وإضافة ترويسات الأمان (X-Content-Type-Options).

---

## 📋 بيانات يجب تأكيدها قبل النشر وإطلاق حملة Google Ads

توجد هذه البيانات في الملف المركزي `src/lib/site-config.ts`:

1. **رقم الهاتف الرسمي (`contact.phone`):**
   - **تم ضبطه واعتماده بنجاح:** `+966536826083` (العرض: `053 682 6083`).
   - تم ربطه بكافة أزرار الاتصال الهاتفي المباشر (`tel:+966536826083`).
2. **رقم الواتساب الرسمي (`contact.whatsapp`):**
   - **تم ضبطه واعتماده بنجاح:** `966536826083`.
   - تم ربطه بروابط المحادثة الفورية وتوليد ملخص الحجز الآلي.
3. **البريد الإلكتروني الرسمي (`contact.email`):**
   - استبداله بالبريد الفعلي المستلم لطلبات وعقود الشركات.
4. **الدومين النهائي (`siteUrl`):**
   - استبدال الرابط بدومين الموقع المعتمد، وتحديثه في `public/robots.txt` و `public/sitemap.xml`.
5. **الأسعار والضمانات:**
   - عدم كتابة أسعار مقطوعة دون المعاينة، لأن مساحات المنازل وطبيعة الأدوار بالرياض تختلف من عميل لآخر.
6. **مراجعة مسودة سياسة الخصوصية:**
   - مراجعة صفحة `privacy-policy` للتأكد من موافقتها للأنظمة المحلية.

---

## 🔑 قائمة متغيرات البيئة (Environment Variables)

يمكن تهيئة المتغيرات الاختيارية في ملف `.env` في المسار الرئيسي:

```env
# رابط النطاق الأساسي
APP_URL="https://smartwannet-sa.com"

# معرف قياس Google Analytics 4 (اختياري)
VITE_GA4_ID="G-XXXXXXXXXX"

# معرف تحويل إعلانات Google Ads (اختياري)
VITE_GOOGLE_ADS_CONVERSION_ID="AW-XXXXXXXXX/YYYYYYYYYY"
```

---

## 🎯 جاهزية صفحات الهبوط لـ Google Ads

تم تجهيز الموقع ليلبي متطلبات إعلانات Google:
- **تطابق المحتوى:** الصفحة الرئيسية وصفحة الخدمات توضحان نوع الخدمة (نقل، فك، تركيب، تغليف في الرياض) بوضوح تام لمنع ارتداد الزوار.
- **تتبع التحويلات (Conversion Tracking):** تم ربط أزرار الاتصال الهاتفي ومحادثة الواتساب وإرسال نموذج التسعير بدوال تتبع تلقائية تدعم `dataLayer` و `gtag`.
- **سقف العناصر العائمة (15% Sticky Limit):** شريط الاتصال السريع بالجوال مدمج بأبعاد مريحة لا تحجب محتوى الصفحة.
- **توافق الروبوتات:** ملف `robots.txt` يمنح `AdsBot-Google` و `AdsBot-Google-Mobile` صلاحية الفحص الكامل للموقع دون أي حظر.
