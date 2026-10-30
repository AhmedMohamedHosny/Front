
/**
 * ============================================================================
 * CodeMasr — Complete Interactive Learning Platform, Code Editor, Smart
 * Error Debugger (Egyptian Arabic + English), Auto-Grader & Firebase Backend
 * ============================================================================
 * Designed & Engineered specifically for index.html & style.css
 */

(function () {
  'use strict';

  /* ==========================================================================
   * 1. FIREBASE CONFIGURATION & CLOUD SYNC SERVICE (FIRESTORE + AUTH)
   * ==========================================================================
   * يمكنك وضع إعدادات مشروع Firebase الخاص بك هنا مباشرة، أو إدخالها من داخل
   * واجهة الموقع بالضغط على زر الملف الشخصي (Guest Developer / •••) أسفل القائمة الجانبية.
   */
  const DEFAULT_FIREBASE_CONFIG = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };

  const STORAGE_KEYS = {
    STATE: 'codemasr_platform_state_v2',
    FIREBASE_CFG: 'codemasr_firebase_config_v2',
    THEME: 'codemasr_theme_v2',
    HINT_DISMISSED: 'codemasr_hint_dismissed_v2'
  };

  /* ==========================================================================
   * 2. COMPLETE 24-LESSON CURRICULUM (HTML, CSS, JS, PYTHON)
   *    Matches "1 of 24 lessons" in index.html with full interactive challenges!
   * ========================================================================== */
  const COURSES = {
    html: {
      id: 'html',
      title: 'HTML Essentials',
      subtitle: 'Structure the web',
      tag: 'HTML ESSENTIALS',
      tagClass: 'tag-html',
      badgeText: '5',
      badgeClass: 'html-badge',
lessons: [
  {
    id: 'html-1',
    num: '01',
    title: 'هيكل المستند الأساسي (Doctype, html, head, body)',
    duration: '15 min',
    eyebrow: 'HTML 01 · البنية التحتية القياسية',
    lead: 'كل صفحة ويب تقوم على هيكل إلزامي ثابت؛ فهمه من البداية يوفر عليك ساعات من البحث عن أخطاء غامضة لاحقاً.',
    goal: 'فهم دور كل من Doctype و html و head و title و meta charset و body، والتفرقة بين الوسوم المزدوجة والذاتية الإغلاق، ومعنى الخاصية Attribute.',
    sectionTitle: 'تشريح صفحة الويب من الداخل',
    explanation: [
      'HTML اختصار Hyper Text Markup Language، وهي لغة وسوم (Tags) تصف هيكل الصفحة ومعنى كل جزء فيها. هي ليست لغة برمجة؛ فالتنسيق مهمة CSS والتفاعل مهمة JavaScript.',
      '🔹 &lt;!DOCTYPE html&gt; : ليس وسماً حقيقياً بل تعليمة للمتصفح بالعمل بمعايير HTML5. حذفه يدخل المتصفح في Quirks Mode فتظهر الصفحة بتنسيقات غير متوقعة. حالة الأحرف لا تفرق (doctype = DOCTYPE).',
      '🔹 &lt;html&gt; : الجذر الذي يحتوي كل شيء. أضف له lang لتحديد لغة الصفحة (تستفيد منها جوجل وقارئات الشاشة ومترجم المتصفح)، و dir لتحديد اتجاه الكتابة: rtl للعربية و ltr للإنجليزية.',
      '🔹 &lt;head&gt; : معلومات عن الصفحة (العنوان، الترميز، ملفات التنسيق...) ولا يظهر منها أي شيء داخل الصفحة نفسها.',
      '🔹 &lt;body&gt; : كل ما يراه المستخدم ويتفاعل معه من نصوص وصور وأزرار. مسموح بعنصر body واحد فقط في الصفحة.',
      '🔹 &lt;title&gt; : عنوان التبويب في المتصفح، وعنوان النتيجة في جوجل، واسم الصفحة عند حفظها في المفضلة.',
      '🔹 &lt;meta charset="UTF-8"&gt; : يحدد ترميز الحروف. بدونه قد تتحول العربية إلى رموز غريبة مثل ؟؟؟. ضعه كأول عنصر داخل head.',
      '⚖️ الفرق بين title و h1: الأول داخل head ويظهر في التبويب ونتائج البحث، أما الثاني داخل body ويظهر في الصفحة نفسها. يُفضل أن يتقاربا في المعنى لكنهما ليسا نفس الشيء.',
      '⚖️ الوسم المزدوج مقابل الذاتي الإغلاق: وسوم مثل &lt;p&gt;...&lt;/p&gt; لها فتح وإغلاق وتحيط بمحتوى. أما وسوم Void مثل &lt;br&gt; و &lt;hr&gt; و &lt;img&gt; و &lt;meta&gt; فلا محتوى لها ولا تحتاج وسم إغلاق.',
      '🔹 الخاصية (Attribute): معلومة إضافية تُكتب داخل وسم الفتح على شكل name="value" مثل lang="ar". اكتب القيمة دائماً بين علامتي اقتباس.',
      '⚠️ قاعدة التداخل: تُغلق الوسوم بعكس ترتيب فتحها. الصحيح: &lt;p&gt;&lt;strong&gt;نص&lt;/strong&gt;&lt;/p&gt; والخطأ: &lt;p&gt;&lt;strong&gt;نص&lt;/p&gt;&lt;/strong&gt;.',
      '💡 المسافات البادئة (Indentation) لا تؤثر على المتصفح لكنها تجعل الكود مقروءاً؛ ادفع كل عنصر داخلي مسافتين.'
    ].join('<br>'),
    exampleCode: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8">
    <title>أول صفحة ويب</title>
  </head>
  <body>
    <h1>مرحباً بك في عالم تطوير الويب</h1>
    <p>هذا النص يظهر داخل منطقة body المرئية.</p>
  </body>
</html>`,
    starterCode: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <!-- أضف meta charset ووسم title هنا -->
  </head>
  <body>
    <!-- أضف عنوان h1 وفقرة p هنا -->
  </body>
</html>`,
    solutionCode: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8">
    <title>صفحتي الأولى</title>
  </head>
  <body>
    <h1>أول صفحة ويب متكاملة</h1>
    <p>تم بناء الهيكل بنجاح.</p>
  </body>
</html>`,
    challengePrompt: 'تحدي الدرس: ابنِ صفحة كاملة تبدأ بـ Doctype، ثم html بخاصيتي lang و dir، وداخل head ضع meta بخاصية charset ووسم title بنص، وداخل body ضع عنواناً h1 وفقرة p.',
    validate: function (doc) {
      const title = doc.querySelector('title');
      if (!title || !title.textContent.trim()) return { passed: false, msgAr: 'أضف وسم title داخل head واكتب فيه نصاً.', msgEn: 'Add a title element with text inside head.' };
      if (!doc.querySelector('meta[charset]')) return { passed: false, msgAr: 'أضف meta بخاصية charset داخل head.', msgEn: 'Add a meta element with a charset attribute.' };
      const h1 = doc.querySelector('h1');
      if (!h1 || !h1.textContent.trim()) return { passed: false, msgAr: 'أضف عنواناً رئيسياً h1 يحتوي على نص.', msgEn: 'Include an h1 heading with text.' };
      const p = doc.querySelector('p');
      if (!p || !p.textContent.trim()) return { passed: false, msgAr: 'أضف فقرة p تحتوي على نص.', msgEn: 'Include a p paragraph with text.' };
      return { passed: true, msgAr: 'أحسنت! تم بناء الهيكل المعماري للمستند بدقة.', msgEn: 'Document structure verified successfully!' };
    }
  },
  {
    id: 'html-2',
    num: '02',
    title: 'وسوم منطقة head (meta, link, style, script, base)',
    duration: '18 min',
    eyebrow: 'HTML 02 · غرفة التحكم الخفية للصفحة',
    lead: 'كل وسم داخل head يخاطب المتصفح أو محركات البحث أو وسائل التواصل، وليس المستخدم؛ وهو سر الفرق بين صفحة عادية وصفحة احترافية.',
    goal: 'ضبط الترميز والعرض على الموبايل ووصف جوجل، وربط ملفات CSS و JavaScript، والتفرقة بين link و style وبين async و defer.',
    sectionTitle: 'ماذا نضع داخل head ولماذا',
    explanation: [
      '🔹 &lt;title&gt; : إلزامي في كل صفحة، ويفضل ألا يزيد عن 60 حرفاً ليظهر كاملاً في جوجل.',
      '🔹 &lt;meta charset="UTF-8"&gt; : ترميز الحروف، ويكون أول عنصر في head.',
      '🔹 &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt; : بدونه يعرض الموبايل صفحتك كأنها شاشة كمبيوتر مصغرة. إلزامي لأي موقع متجاوب (Responsive).',
      '🔹 &lt;meta name="description" content="..."&gt; : الوصف الذي يظهر أسفل العنوان في نتائج جوجل (يفضل 150 إلى 160 حرفاً).',
      '🔹 meta name="author" لاسم الكاتب، و meta name="robots" content="noindex" لمنع أرشفة الصفحة، و meta name="theme-color" للون شريط المتصفح في الموبايل.',
      '🔹 &lt;link&gt; : وسم ذاتي الإغلاق يربط الصفحة بملف خارجي. rel="stylesheet" لملف CSS، و rel="icon" لأيقونة التبويب (Favicon)، و rel="canonical" لتحديد الرابط الأصلي للصفحة.',
      '🔹 &lt;style&gt; : يضع كود CSS مباشرة داخل الصفحة.',
      '🔹 &lt;script&gt; : يضع JavaScript داخل الصفحة أو يربط ملفاً خارجياً عبر src.',
      '🔹 &lt;base href="..."&gt; : يحدد الرابط الأساسي لكل الروابط النسبية في الصفحة. نادر الاستخدام ويوضع مرة واحدة فقط.',
      '⚖️ link مقابل style: النتيجة البصرية واحدة، لكن link لملف خارجي يُخزَّن في المتصفح ويُعاد استخدامه في كل الصفحات (الأفضل للمشاريع)، و style مناسب لتنسيق صفحة واحدة أو للتجارب السريعة.',
      '⚖️ script بدون خصائص يوقف تحليل الصفحة حتى يُحمّل. استخدم defer (ينفذ بعد اكتمال الصفحة وبترتيب الكتابة، وهو الخيار الأفضل غالباً) أو async (ينفذ فور تحميله بلا ترتيب، ويناسب الإحصائيات والإعلانات).',
      '⚠️ الوسوم في head لا تظهر في الصفحة، فإذا وضعت داخله نصاً عادياً أو h1 فسيُنقل المتصفح الأمر إلى body تلقائياً.'
    ].join('<br>'),
    exampleCode: `<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="دورة شاملة لتعلم HTML من الصفر حتى الاحتراف">
  <meta name="theme-color" content="#0d6efd">
  <title>دورة HTML الشاملة</title>
  <link rel="icon" href="favicon.ico">
  <link rel="stylesheet" href="style.css">
  <style>
    body { font-family: sans-serif; background: #f5f5f5; }
  </style>
  <script src="app.js" defer></script>
</head>`,
    starterCode: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <!-- 1) charset  2) viewport  3) description  4) title  5) link  6) style -->
  </head>
  <body>
    <h1>صفحة بإعدادات احترافية</h1>
  </body>
</html>`,
    solutionCode: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="صفحة تجريبية لتعلم وسوم head">
    <title>صفحة بإعدادات احترافية</title>
    <link rel="icon" href="favicon.ico">
    <style>
      body { background: #f5f5f5; }
    </style>
  </head>
  <body>
    <h1>صفحة بإعدادات احترافية</h1>
  </body>
</html>`,
    challengePrompt: 'تحدي الدرس: داخل head أضف: meta charset، و meta بـ name="viewport"، و meta بـ name="description" بمحتوى نصي، ووسم title، ووسم link بخاصيتي rel و href، ووسم style يحتوي على قاعدة CSS واحدة على الأقل.',
    validate: function (doc) {
      if (!doc.querySelector('meta[charset]')) return { passed: false, msgAr: 'أضف meta بخاصية charset.', msgEn: 'Add meta charset.' };
      const vp = doc.querySelector('meta[name="viewport"]');
      if (!vp || !(vp.getAttribute('content') || '').includes('width=device-width')) return { passed: false, msgAr: 'أضف meta بـ name viewport ومحتواها يحتوي width=device-width.', msgEn: 'Add a viewport meta with width=device-width.' };
      const d = doc.querySelector('meta[name="description"]');
      if (!d || !(d.getAttribute('content') || '').trim()) return { passed: false, msgAr: 'أضف meta بـ name description مع محتوى نصي في content.', msgEn: 'Add a description meta with content.' };
      const t = doc.querySelector('title');
      if (!t || !t.textContent.trim()) return { passed: false, msgAr: 'أضف وسم title بنص.', msgEn: 'Add a title with text.' };
      if (!doc.querySelector('link[rel][href]')) return { passed: false, msgAr: 'أضف وسم link بخاصيتي rel و href.', msgEn: 'Add a link with rel and href.' };
      const s = doc.querySelector('style');
      if (!s || !s.textContent.trim()) return { passed: false, msgAr: 'أضف وسم style واكتب بداخله قاعدة CSS.', msgEn: 'Add a style element with CSS.' };
      return { passed: true, msgAr: 'ممتاز! head الآن مجهز كما في المواقع الاحترافية.', msgEn: 'Professional head section verified!' };
    }
  },
  {
    id: 'html-3',
    num: '03',
    title: 'العناوين من h1 إلى h6 وأهميتها الدلالية والـ SEO',
    duration: '15 min',
    eyebrow: 'HTML 03 · التسلسل الهرمي للمحتوى',
    lead: 'العناوين ليست لتكبير الخط، بل هي شجرة المحتوى التي تفهرسها محركات البحث وتتنقل بها قارئات الشاشة.',
    goal: 'تنظيم الصفحة بتسلسل منطقي يبدأ بـ h1 واحد ثم h2 ثم h3 دون القفز بين المستويات، ومعرفة متى نستخدم hgroup.',
    sectionTitle: 'الفروق الدلالية وأهمية العناوين في الـ SEO',
    explanation: [
      'توفر HTML ستة مستويات من العناوين، من الأهم h1 إلى الأقل أهمية h6:',
      '• &lt;h1&gt; : عنوان الصفحة الرئيسي، ويفضل أن يكون واحداً فقط في الصفحة.',
      '• &lt;h2&gt; : الأقسام الكبرى داخل الصفحة.',
      '• &lt;h3&gt; : الأقسام الفرعية داخل كل h2، وهكذا حتى h6 (نادراً ما يُحتاج إلى h5 و h6).',
      '⚖️ h1 مقابل p بخط كبير: قد يبدوان متشابهين بعد CSS، لكن h1 يخبر جوجل وقارئ الشاشة أن هذا عنوان، أما p فمجرد نص. استخدم العنوان لمعناه، وCSS لحجمه.',
      '⚖️ h1 مقابل strong: strong للتأكيد على كلمات داخل جملة، أما العنوان فيقسم المحتوى إلى أقسام.',
      '⚠️ لا تقفز بين المستويات (من h2 إلى h4 مباشرة)، فهذا يربك قارئات الشاشة ومحركات البحث. لو أردت عنواناً أصغر شكلاً فاستخدم CSS وليس مستوى أقل.',
      '💡 تخيل العناوين كفهرس كتاب: h1 اسم الكتاب، h2 الفصول، h3 عناوين الفقرات داخل الفصل.',
      '🔹 &lt;hgroup&gt; : يجمع عنواناً مع عنوان فرعي أو شعار (مثل h1 ثم p) ليُعتبرا عنواناً واحداً دون أن يشوّش العنوان الفرعي على شجرة العناوين.',
      '📌 ملاحظة SEO: اكتب الكلمة المفتاحية في h1 بشكل طبيعي، ولا تكرر h1 في كل قسم.'
    ].join('<br>'),
    exampleCode: `<h1>دليل هندسة البرمجيات</h1>
<h2>المرحلة الأولى: هندسة الواجهات</h2>
<h3>الدرس الأول: العناوين والفقرات</h3>
<h3>الدرس الثاني: الروابط والصور</h3>
<h2>المرحلة الثانية: النظم السحابية</h2>
<h3>الدرس الأول: قواعد البيانات</h3>
<h4>أنواع قواعد البيانات</h4>

<hgroup>
  <h1>منصة أطلس</h1>
  <p>طريقك إلى الاحتراف</p>
</hgroup>`,
    starterCode: `<!-- h1 واحد فقط -->

<!-- عنوانان h2 -->

<!-- تحت كل h2 عنوانان h3 -->

<!-- وتحت أحد h3 عنوان h4 -->`,
    solutionCode: `<h1>منصة التعلم المتكاملة</h1>
<h2>مسار تطوير الويب</h2>
<h3>أساسيات HTML</h3>
<h3>أساسيات CSS</h3>
<h4>الصندوق Box Model</h4>
<h2>مسار النظم السحابية</h2>
<h3>بناء قواعد البيانات</h3>
<h3>الاستضافة والنشر</h3>`,
    challengePrompt: 'تحدي الدرس: أنشئ h1 واحداً فقط، وعنوانين h2 على الأقل، وتحتها عنوانين h3 على الأقل، ثم عنوان h4 واحد على الأقل تحت أحد العناوين h3.',
    validate: function (doc) {
      if (doc.querySelectorAll('h1').length !== 1) return { passed: false, msgAr: 'يجب أن تحتوي الصفحة على h1 واحد فقط.', msgEn: 'Exactly one h1 is required.' };
      if (doc.querySelectorAll('h2').length < 2) return { passed: false, msgAr: 'أضف عنوانين h2 على الأقل.', msgEn: 'Add at least two h2.' };
      if (doc.querySelectorAll('h3').length < 2) return { passed: false, msgAr: 'أضف عنوانين h3 على الأقل.', msgEn: 'Add at least two h3.' };
      if (doc.querySelectorAll('h4').length < 1) return { passed: false, msgAr: 'أضف عنواناً h4 واحداً على الأقل.', msgEn: 'Add at least one h4.' };
      const all = Array.from(doc.querySelectorAll('h1,h2,h3,h4,h5,h6')).map(function (h) { return parseInt(h.tagName[1], 10); });
      for (let i = 1; i < all.length; i++) {
        if (all[i] - all[i - 1] > 1) return { passed: false, msgAr: 'لا تقفز بين المستويات؛ لا يجوز الانتقال من h' + all[i - 1] + ' إلى h' + all[i] + ' مباشرة.', msgEn: 'Do not skip heading levels.' };
      }
      return { passed: true, msgAr: 'تسلسل هرمي ممتاز ومطابق لمعايير W3C!', msgEn: 'Perfect semantic hierarchy!' };
    }
  },
  {
    id: 'html-4',
    num: '04',
    title: 'الفقرات والفواصل والنص المنسق (p, br, hr, pre, wbr)',
    duration: '18 min',
    eyebrow: 'HTML 04 · التعامل مع الكتل النصية',
    lead: 'المتصفح يتجاهل المسافات والأسطر الزائدة في كودك؛ لذلك تحتاج الوسوم الصحيحة للتحكم في شكل النص.',
    goal: 'استخدام p للفقرات، br لكسر السطر، hr للفصل بين الأفكار، pre للنص المنسق مسبقاً، و wbr لكسر الكلمات الطويلة.',
    sectionTitle: 'كيف يتعامل المتصفح مع النصوص والمسافات',
    explanation: [
      '⚠️ قاعدة مهمة: المتصفح يدمج أي مسافات أو أسطر متتالية في مسافة واحدة. اضغط Enter عشر مرات في الكود وسيظهر النص بمسافة واحدة فقط.',
      '• &lt;p&gt; : فقرة مستقلة، يترك المتصفح قبلها وبعدها هامشاً رأسياً تلقائياً. هي الوسم الأساسي لأي نص عادي.',
      '• &lt;br&gt; : وسم ذاتي الإغلاق يكسر السطر داخل نفس الفقرة بلا هامش رأسي. استخدمه في الشعر والعناوين البريدية فقط.',
      '• &lt;hr&gt; : فاصل موضوعي بين فكرتين مختلفتين، ويظهر خطاً أفقياً افتراضياً (وشكله يتغير بـ CSS).',
      '• &lt;pre&gt; : يلغي دمج المسافات ويعرض النص كما كُتب تماماً بخط أحادي العرض. مناسب للأكواد والرسوم النصية.',
      '• &lt;wbr&gt; : يخبر المتصفح أن له أن يكسر الكلمة الطويلة عند هذا المكان لو احتاج، مثل الروابط الطويلة.',
      '⚖️ p مقابل br: لا تضع br مرتين للحصول على مسافة بين فقرتين! هذا خطأ شائع. الفقرة الجديدة تُكتب بوسم p جديد، والمسافة تضبط بـ margin في CSS.',
      '⚖️ br مقابل hr: br ينقلك لسطر جديد داخل نفس الفقرة، و hr يعلن انتهاء موضوع وبداية موضوع آخر (له معنى دلالي).',
      '⚖️ pre مقابل p: لو كتبت نفس النص بوسم p ستختفي المسافات والأسطر، أما في pre فتظهر كما هي.',
      '💡 لإظهار مسافات متعددة في فقرة عادية يمكنك استخدام الكيان &amp;nbsp; (سنشرحه في الدرس 19)، لكن الأفضل استخدام CSS.'
    ].join('<br>'),
    exampleCode: `<p>السطر الأول داخل الفقرة.<br>
السطر الثاني داخل نفس الفقرة.</p>

<p>هذه فقرة جديدة ومنفصلة تماماً.</p>

<hr>

<pre>
  دالة برمجية:
    total = 50 + 50;
    print(total);
</pre>

<p>رابط طويل: https://example.com/very<wbr>/long<wbr>/path</p>`,
    starterCode: `<!-- 1) فقرة p تحتوي على سطرين يفصل بينهما br -->

<!-- 2) فقرة p ثانية -->

<!-- 3) فاصل hr -->

<!-- 4) كتلة pre تحتوي على شكل نصي بمسافات -->`,
    solutionCode: `<p>هندسة البرمجيات تبدأ بالتطبيق المستمر.<br>
التدريب اليومي يصنع الفارق.</p>
<p>هذه فقرة ثانية منفصلة.</p>
<hr>
<pre>
    *
   ***
  *****
</pre>`,
    challengePrompt: 'تحدي الدرس: اكتب فقرتين p على الأقل، وفي إحداهما وسم br لكسر السطر، ثم فاصل hr، ثم كتلة pre تحتوي على أكثر من سطر.',
    validate: function (doc) {
      if (doc.querySelectorAll('p').length < 2) return { passed: false, msgAr: 'اكتب فقرتين p على الأقل.', msgEn: 'Add at least two p elements.' };
      if (!doc.querySelector('p br')) return { passed: false, msgAr: 'ضع وسم br داخل إحدى الفقرات.', msgEn: 'Place a br inside a paragraph.' };
      if (!doc.querySelector('hr')) return { passed: false, msgAr: 'أضف فاصلاً hr.', msgEn: 'Add an hr element.' };
      const pre = doc.querySelector('pre');
      if (!pre || pre.textContent.trim().split('\n').length < 2) return { passed: false, msgAr: 'أضف pre يحتوي على سطرين أو أكثر.', msgEn: 'Add a pre with multiple lines.' };
      return { passed: true, msgAr: 'ممتاز! فهمت دور كل وسم وكيف يتعامل المتصفح مع المسافات.', msgEn: 'Great understanding of text layout!' };
    }
  },
  {
    id: 'html-5',
    num: '05',
    title: 'تنسيق النص الدلالي (b/strong, i/em, u/ins, s/del, mark, small, sub, sup)',
    duration: '22 min',
    eyebrow: 'HTML 05 · الشكل مقابل المعنى',
    lead: 'أكثر أزواج الوسوم إرباكاً هي التي تعطي نفس الشكل تماماً؛ في هذا الدرس نعرف متى نستخدم كل واحد ولماذا.',
    goal: 'التفرقة بين الوسوم الشكلية والدلالية التي تعطي نفس النتيجة البصرية، وكتابة المعادلات بـ sub و sup.',
    sectionTitle: 'متى يتشابه الشكل ويختلف المعنى؟',
    explanation: [
      '🎯 القاعدة الذهبية: الشكل يتغير بـ CSS، أما الوسم فيُختار لمعناه. قارئ الشاشة ومحرك البحث لا يرون الألوان، بل يفهمون الوسوم.',
      '⚖️ b مقابل strong (كلاهما عريض): strong = أهمية حقيقية وتحذير (لا تشارك كلمة المرور)، و b = لفت النظر لكلمة بلا أهمية خاصة مثل اسم منتج أو كلمة مفتاحية.',
      '⚖️ i مقابل em (كلاهما مائل): em = تأكيد يغير معنى الجملة ونبرة القراءة (أنا قلت هذا، وليس هو)، و i = كلمة أجنبية أو مصطلح علمي أو أفكار داخلية.',
      '⚖️ s مقابل del (كلاهما خط في المنتصف): s = معلومة لم تعد صحيحة، و del = حذف فعلي من نص مراجَع، ويقابله ins للإضافة (غالباً مسطر) ويقبلان datetime و cite.',
      '⚖️ u (خط تحت): معناه الآن نص عليه علامة غير نصية مثل خطأ إملائي. تجنبه كثيراً حتى لا يُظن رابطاً. ويُستبدل غالباً بـ ins أو CSS.',
      '• &lt;mark&gt; : تمييز كلمة ذات صلة بالسياق مثل نتيجة بحث (خلفية صفراء).',
      '• &lt;small&gt; : نص جانبي صغير مثل حقوق النشر أو الشروط.',
      '• &lt;sub&gt; : نص منخفض للصيغ الكيميائية H2O، و &lt;sup&gt; : نص مرتفع للأسس والرموز X2 والهوامش.',
      '⚠️ لا تستخدم b أو i لمجرد التنسيق بعد أن أصبحت CSS قادرة على ذلك (font-weight و font-style)، إلا إذا كان لها معنى دلالي كما سبق.',
      '💡 للتأكد: اسأل نفسك: هل لو حذفت التنسيق البصري، هل يتغير معنى الجملة؟ إن تغير فاستخدم الوسم الدلالي (strong, em).'
    ].join('<br>'),
    exampleCode: `<p>تحذير: <strong>لا تشارك كلمة المرور</strong> مع أحد.</p>
<p>اشتريت <b>iPhone</b> من متجر <i>Apple Store</i>.</p>
<p>الدواء يؤخذ <em>بعد</em> الأكل وليس قبله.</p>
<p>السعر: <del>500 ج.م</del> <ins>350 ج.م</ins></p>
<p>نتيجة البحث: كلمة <mark>HTML</mark> وردت 5 مرات.</p>
<p><small>جميع الأسعار تشمل الضريبة.</small></p>
<p>الماء H<sub>2</sub>O والمساحة 10 م<sup>2</sup></p>`,
    starterCode: `<!-- اكتب فقرات تستخدم: -->
<!-- strong  em  del  ins  mark  small  sub  sup -->
`,
    solutionCode: `<p>تحذير: <strong>البيانات حساسة للغاية</strong></p>
<p>هذا الكلام <em>مؤكد</em> وليس شائعة.</p>
<p>السعر: <del>500</del> <ins>350</ins></p>
<p>قيمة مميزة: <mark>خصم 50%</mark></p>
<p><small>الأسعار تشمل الضريبة</small></p>
<p>مركب كيميائي: H<sub>2</sub>O</p>
<p>معادلة: X<sup>2</sup> + Y<sup>2</sup></p>`,
    challengePrompt: 'تحدي الدرس: اكتب نصاً يستخدم كل هذه الوسوم: strong و em و del و ins و mark و small و sub و sup (ولو في فقرات منفصلة).',
    validate: function (doc) {
      const need = ['strong', 'em', 'del', 'ins', 'mark', 'small', 'sub', 'sup'];
      const miss = need.filter(function (t) { return !doc.querySelector(t); });
      if (miss.length) return { passed: false, msgAr: 'ينقصك الوسوم: ' + miss.join(' ، '), msgEn: 'Missing tags: ' + miss.join(', ') };
      return { passed: true, msgAr: 'رائع! أصبحت تفرق بين الشكل والمعنى.', msgEn: 'Semantic text formatting verified!' };
    }
  },
  {
    id: 'html-6',
    num: '06',
    title: 'الكود والاقتباس ووسوم النص المتخصصة (code, kbd, abbr, q, blockquote, time, address)',
    duration: '25 min',
    eyebrow: 'HTML 06 · وصف المعنى بدقة',
    lead: 'وسوم كثيرة تظهر بشكل متشابه تقريباً، لكن لكل منها معنى مختلف يفهمه المتصفح وقارئ الشاشة ومحركات البحث.',
    goal: 'استخدام الوسم الصحيح لكل من الكود والمدخلات والمخرجات والاختصارات والاقتباسات والتواريخ وبيانات التواصل.',
    sectionTitle: 'وسوم الكود والاقتباس والمعلومات المتخصصة',
    explanation: [
      '💻 مجموعة الكود (كلها بخط أحادي العرض لكن بمعانٍ مختلفة):',
      '• &lt;code&gt; : كود برمجي داخل السطر. وللكتل الكبيرة اجمعه مع pre هكذا: &lt;pre&gt;&lt;code&gt;...&lt;/code&gt;&lt;/pre&gt;.',
      '• &lt;kbd&gt; : ما يضغطه المستخدم على لوحة المفاتيح مثل Ctrl + C.',
      '• &lt;samp&gt; : مخرجات يطبعها برنامج أو رسالة نظام مثل Error 404.',
      '• &lt;var&gt; : اسم متغير رياضي أو برمجي داخل النص.',
      '⚖️ الخلاصة: code = الكود نفسه، kbd = ما يكتبه المستخدم، samp = ما يرد به البرنامج، var = اسم المتغير.',
      '💬 مجموعة الاقتباس:',
      '• &lt;q&gt; : اقتباس قصير داخل السطر، والمتصفح يضيف علامات التنصيص تلقائياً (لا تكتبها أنت).',
      '• &lt;blockquote cite="رابط"&gt; : اقتباس طويل يظهر كتلة مستقلة بمسافة جانبية.',
      '⚖️ q مقابل blockquote: الأول داخل الجملة، والثاني كتلة منفصلة. ولا تستخدم blockquote لمجرد إزاحة النص.',
      '• &lt;cite&gt; : عنوان العمل المقتبس منه (كتاب أو فيلم أو مقال)، ويظهر مائلاً.',
      '📌 مجموعة المعلومات:',
      '• &lt;abbr title="..."&gt; : اختصار، وتظهر عند تمرير الماوس شرحه الكامل في title.',
      '• &lt;dfn&gt; : أول موضع يُعرَّف فيه مصطلح جديد.',
      '• &lt;time datetime="2026-10-26"&gt; : تاريخ أو وقت بصيغة تفهمها الآلات حتى لو كتبته بالنص "الاثنين الماضي".',
      '• &lt;address&gt; : بيانات التواصل مع صاحب الصفحة أو المقال، وليس أي عنوان بريدي عشوائي.',
      '• &lt;data value="..."&gt; : نص مرتبط بقيمة قابلة للقراءة آلياً (كود منتج مثلاً).',
      '• &lt;bdi&gt; : يعزل نصاً لا تعرف اتجاهه (مثل اسم مستخدم)، و &lt;bdo dir="rtl"&gt; : يفرض اتجاه الكتابة.',
      '• &lt;ruby&gt; مع &lt;rt&gt; و &lt;rp&gt; : شرح فوق الحروف، يُستخدم غالباً في اللغات الآسيوية.',
      '• &lt;span&gt; : حاوية نصية عامة بلا أي معنى؛ تستخدمها فقط عندما لا يوجد وسم دلالي مناسب (نفصلها في الدرس 13).'
    ].join('<br>'),
    exampleCode: `<p>لعرض متغير اكتب <code>let age = 20;</code> ثم اضغط <kbd>Ctrl</kbd> + <kbd>S</kbd>.</p>
<p>ستظهر الرسالة: <samp>Saved successfully</samp></p>

<p>قال المعلم: <q>التكرار يعلم الشطار</q>.</p>

<blockquote cite="https://example.com/book">
  العلم في الصغر كالنقش على الحجر.
</blockquote>
<p>من كتاب <cite>أدب الدنيا والدين</cite></p>

<p>نستخدم <abbr title="HyperText Markup Language">HTML</abbr> لبناء الصفحات.</p>
<p>بدأ المشروع في <time datetime="2026-10-26">26 أكتوبر 2026</time>.</p>

<address>
  للتواصل: <a href="mailto:info@example.com">info@example.com</a>
</address>`,
    starterCode: `<!-- استخدم: code  kbd  abbr(title)  q  blockquote  time(datetime)  address -->
`,
    solutionCode: `<p>اكتب <code>console.log(1)</code> ثم اضغط <kbd>Enter</kbd>.</p>
<p>نستخدم <abbr title="Cascading Style Sheets">CSS</abbr> للتنسيق.</p>
<p>قال المعلم: <q>من جد وجد</q>.</p>
<blockquote cite="https://example.com">
  العلم نور والجهل ظلام.
</blockquote>
<p>تاريخ الإطلاق: <time datetime="2026-10-26">26 أكتوبر 2026</time></p>
<address>للتواصل: info@example.com</address>`,
    challengePrompt: 'تحدي الدرس: اكتب محتوى يستخدم: code و kbd و abbr بخاصية title و q و blockquote و time بخاصية datetime و address.',
    validate: function (doc) {
      const need = ['code', 'kbd', 'abbr[title]', 'q', 'blockquote', 'time[datetime]', 'address'];
      const miss = need.filter(function (t) { return !doc.querySelector(t); });
      if (miss.length) return { passed: false, msgAr: 'ينقصك: ' + miss.join(' ، '), msgEn: 'Missing: ' + miss.join(', ') };
      return { passed: true, msgAr: 'أحسنت! أصبحت تصف المعنى بدقة وليس الشكل فقط.', msgEn: 'Specialized text semantics verified!' };
    }
  },
  {
    id: 'html-7',
    num: '07',
    title: 'الروابط والتنقل (a, href, target, rel, mailto, tel, anchors)',
    duration: '22 min',
    eyebrow: 'HTML 07 · قلب الويب',
    lead: 'كلمة Hyper في HTML تعني الروابط؛ هي ما يحول الصفحات المنفصلة إلى شبكة واحدة.',
    goal: 'إنشاء روابط خارجية وداخلية ومراسلة واتصال، وفهم الفرق بين المسار المطلق والنسبي، وأمان target blank.',
    sectionTitle: 'وسم a وكل خصائصه',
    explanation: [
      '🔹 &lt;a href="..."&gt;النص&lt;/a&gt; : الوسم الوحيد الذي يصنع رابطاً. بدون href لا يكون رابطاً فعلياً.',
      '📍 أنواع قيمة href:',
      '• رابط مطلق (Absolute) : https://example.com/page.html يشير إلى موقع خارجي.',
      '• رابط نسبي (Relative) : about.html أو ../images/a.png يشير إلى ملف في نفس مشروعك.',
      '• رابط داخلي (Anchor) : href="#contact" ينتقل إلى العنصر الذي له id="contact" في نفس الصفحة، و href="#" يعود لأعلى الصفحة.',
      '• mailto:name@example.com يفتح برنامج البريد، و tel:+201000000000 يفتح الاتصال في الموبايل.',
      '🔹 target : "_self" (الافتراضي) يفتح في نفس التبويب، و "_blank" يفتح في تبويب جديد.',
      '🔒 rel="noopener noreferrer" : أضفها دائماً مع _blank حتى لا تستطيع الصفحة الجديدة التحكم في صفحتك الأصلية.',
      '🔹 download : يجعل الضغط على الرابط يحمّل الملف بدلاً من فتحه.',
      '🔹 title : نص يظهر عند تمرير الماوس ويفيد في توضيح الوجهة.',
      '⚖️ a مقابل button: الرابط للانتقال إلى مكان آخر (صفحة أو جزء)، والزر لتنفيذ فعل داخل الصفحة (إرسال نموذج، فتح قائمة). لو غيّرت شكل أحدهما بـ CSS ليشبه الآخر، يبقى المعنى مختلفاً لقارئ الشاشة، فاختر بحسب الوظيفة.',
      '⚖️ الرابط النسبي مقابل المطلق: النسبي لا ينكسر عند تغيير اسم النطاق، أما المطلق فضروري للمواقع الخارجية.',
      '💡 اكتب نص رابط واضحاً مثل "حمّل دليل HTML" وتجنب "اضغط هنا"، فهذا أفضل للـ SEO ولقارئات الشاشة.',
      '💡 يمكن لوسم a أن يحيط بصورة أو بعنصر كتلة كامل (مثل بطاقة).'
    ].join('<br>'),
    exampleCode: `<a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer">دليل MDN</a>
<a href="about.html">من نحن</a>
<a href="#contact">اذهب إلى قسم التواصل</a>

<a href="mailto:info@example.com">راسلنا</a>
<a href="tel:+201000000000">اتصل بنا</a>
<a href="files/guide.pdf" download>تحميل الدليل</a>

<h2 id="contact">قسم التواصل</h2>
<p>أنت الآن في القسم المطلوب.</p>`,
    starterCode: `<!-- 1) رابط خارجي يفتح في تبويب جديد مع rel -->

<!-- 2) رابط داخلي href يبدأ بـ # -->

<!-- 3) رابط mailto -->

<!-- 4) رابط tel -->

<!-- 5) عنصر له id يطابق الرابط الداخلي -->`,
    solutionCode: `<p><a href="https://example.com" target="_blank" rel="noopener noreferrer">موقع خارجي</a></p>
<p><a href="#contact">انتقل إلى التواصل</a></p>
<p><a href="mailto:info@example.com">راسلنا</a></p>
<p><a href="tel:+201000000000">اتصل بنا</a></p>
<h2 id="contact">قسم التواصل</h2>`,
    challengePrompt: 'تحدي الدرس: أنشئ رابطاً خارجياً بـ target="_blank" مع rel يحتوي noopener، ورابطاً داخلياً يبدأ بـ # ويطابق عنصراً له نفس الـ id، ورابط mailto، ورابط tel.',
    validate: function (doc) {
      const ext = doc.querySelector('a[target="_blank"]');
      if (!ext || !(ext.getAttribute('rel') || '').includes('noopener')) return { passed: false, msgAr: 'أضف رابطاً بـ target="_blank" ومعه rel يحتوي noopener.', msgEn: 'Add a _blank link with rel noopener.' };
      const inner = Array.from(doc.querySelectorAll('a[href^="#"]')).find(function (a) {
        const id = a.getAttribute('href').slice(1);
        return id && doc.getElementById(id);
      });
      if (!inner) return { passed: false, msgAr: 'أضف رابطاً داخلياً href يبدأ بـ # وعنصراً له id مطابق له.', msgEn: 'Add an anchor link with a matching id element.' };
      if (!doc.querySelector('a[href^="mailto:"]')) return { passed: false, msgAr: 'أضف رابط mailto.', msgEn: 'Add a mailto link.' };
      if (!doc.querySelector('a[href^="tel:"]')) return { passed: false, msgAr: 'أضف رابط tel.', msgEn: 'Add a tel link.' };
      return { passed: true, msgAr: 'ممتاز! الروابط تعمل وبشكل آمن.', msgEn: 'Links verified!' };
    }
  },
  {
    id: 'html-8',
    num: '08',
    title: 'الصور (img, figure, figcaption, picture, source, map)',
    duration: '25 min',
    eyebrow: 'HTML 08 · المحتوى المرئي',
    lead: 'الصورة في HTML عنصر محتوى يحتاج وصفاً نصياً ويحتاج أبعاداً حتى لا تقفز الصفحة أثناء التحميل.',
    goal: 'استخدام img بخصائصه الصحيحة، وربط الصورة بتعليقها بـ figure، وتقديم صور مختلفة للأجهزة بـ picture، وفهم map.',
    sectionTitle: 'الصور وكل ما يتعلق بها',
    explanation: [
      '🔹 &lt;img src="..." alt="..."&gt; : وسم ذاتي الإغلاق. src مسار الصورة، و alt وصف نصي يظهر إن فشل التحميل ويقرؤه قارئ الشاشة وتفهرسه جوجل.',
      '🔹 width و height : حدد أبعاد الصورة (بالبكسل بدون وحدة) ليحجز المتصفح مكانها قبل التحميل فلا يقفز المحتوى.',
      '🔹 loading="lazy" : يؤخر تحميل الصورة حتى يقترب المستخدم منها، وهو مفيد جداً للصفحات الطويلة.',
      '⚖️ alt الفارغ مقابل alt المكتوب: الصورة التي تحمل معنى تحتاج وصفاً (alt="شعار الشركة")، أما الصورة الزخرفية فاكتب لها alt="" (فارغ) ليتجاهلها قارئ الشاشة. وحذف الخاصية بالكامل خطأ.',
      '⚖️ img مقابل background-image في CSS: img للمحتوى الذي له معنى، و CSS للزخرفة التي لو حذفناها لم تتأثر الصفحة.',
      '🖼️ &lt;figure&gt; و &lt;figcaption&gt; : figure يحيط بمحتوى مستقل (صورة، مخطط، كود)، و figcaption تعليقه. نستخدمهما معاً بدل الاكتفاء بفقرة تحت الصورة.',
      '📱 &lt;picture&gt; : يقدم للمتصفح عدة مصادر صور ليختار الأنسب. بداخله عدة &lt;source media="(min-width:800px)" srcset="..."&gt; ثم img واحدة إلزامية كخيار أخير.',
      '🔹 srcset و sizes : على img نفسها لتقديم أكثر من حجم للصورة بحسب كثافة الشاشة وعرضها.',
      '📌 صيغ الصور: JPG للصور الفوتوغرافية، PNG للشفافية والحدة، WebP حجمه أصغر مع جودة جيدة، SVG للأيقونات والشعارات (لا يتأثر بالتكبير)، GIF للحركات القصيرة.',
      '🗺️ &lt;map&gt; و &lt;area&gt; : يحددان مناطق داخل صورة يمكن الضغط عليها. نربط الصورة بـ usemap="#اسم" ونسمي map بنفس الاسم، وفي كل area نحدد shape و coords و href.'
    ].join('<br>'),
    exampleCode: `<img src="logo.png" alt="شعار منصة أطلس" width="200" height="80" loading="lazy">

<figure>
  <img src="chart.png" alt="رسم بياني لعدد الطلاب" width="400" height="250">
  <figcaption>الشكل 1: نمو عدد الطلاب خلال عام 2026</figcaption>
</figure>

<picture>
  <source media="(min-width: 800px)" srcset="banner-large.webp">
  <source media="(min-width: 400px)" srcset="banner-medium.webp">
  <img src="banner-small.jpg" alt="بانر الموقع" width="400" height="200">
</picture>

<!-- صورة زخرفية: alt فارغ -->
<img src="line.png" alt="">`,
    starterCode: `<!-- 1) img بـ alt و width و height و loading -->

<!-- 2) figure تحتوي img و figcaption -->

<!-- 3) picture تحتوي source و img -->`,
    solutionCode: `<img src="logo.png" alt="شعار الموقع" width="200" height="80" loading="lazy">

<figure>
  <img src="chart.png" alt="رسم بياني" width="400" height="250">
  <figcaption>الشكل 1: توضيح للبيانات</figcaption>
</figure>

<picture>
  <source media="(min-width: 800px)" srcset="large.webp">
  <img src="small.jpg" alt="صورة متجاوبة" width="400" height="200">
</picture>`,
    challengePrompt: 'تحدي الدرس: أنشئ img بـ alt غير فارغ و width و height و loading="lazy"، وfigure تحتوي img وfigcaption، وpicture تحتوي source وimg.',
    validate: function (doc) {
      const lazy = doc.querySelector('img[loading="lazy"][width][height]');
      if (!lazy || !(lazy.getAttribute('alt') || '').trim()) return { passed: false, msgAr: 'أضف img تحتوي alt غير فارغ و width و height و loading="lazy".', msgEn: 'Add an img with alt, width, height and loading lazy.' };
      if (!doc.querySelector('figure img') || !doc.querySelector('figure figcaption')) return { passed: false, msgAr: 'أضف figure تحتوي img و figcaption.', msgEn: 'Add figure with img and figcaption.' };
      if (!doc.querySelector('picture source') || !doc.querySelector('picture img')) return { passed: false, msgAr: 'أضف picture تحتوي source و img.', msgEn: 'Add picture with source and img.' };
      return { passed: true, msgAr: 'ممتاز! الصور الآن سريعة ومتاحة للجميع.', msgEn: 'Images verified!' };
    }
  },
  {
    id: 'html-9',
    num: '09',
    title: 'القوائم المرتبة وغير المرتبة (ul, ol, li, menu)',
    duration: '18 min',
    eyebrow: 'HTML 09 · تنظيم العناصر',
    lead: 'القوائم من أكثر الوسوم استخداماً، فهي أساس قوائم التنقل والتصنيفات والخطوات.',
    goal: 'اختيار نوع القائمة المناسب، واستخدام خصائص type و start و reversed و value، وبناء قوائم متداخلة.',
    sectionTitle: 'متى نستخدم القائمة المرتبة وغير المرتبة؟',
    explanation: [
      '• &lt;ul&gt; (Unordered List) : قائمة غير مرتبة تظهر بنقاط؛ استخدمها عندما لا يهم الترتيب (مميزات، تصنيفات، قوائم تنقل).',
      '• &lt;ol&gt; (Ordered List) : قائمة مرتبة تظهر بأرقام؛ استخدمها عندما يهم الترتيب (خطوات، ترتيب فائزين).',
      '• &lt;li&gt; : عنصر داخل القائمة، ولا يجوز أن يكون خارج ul أو ol أو menu.',
      '⚖️ ul مقابل ol: إن اختلف المعنى بتغيير الترتيب (خطوات تركيب)، فاستخدم ol، وإلا فاستخدم ul.',
      '🔹 خصائص ol : type="1|a|A|i|I" لنوع الترقيم، start="5" للبدء من رقم معين، reversed لعد تنازلي. وعلى li يمكن استخدام value لتغيير رقم عنصر بعينه.',
      '🔹 القوائم المتداخلة: ضع ul أو ol جديدة داخل li (وليس خارجها مباشرة داخل القائمة الأم) لإنشاء مستويات.',
      '⚖️ &lt;menu&gt; : مطابق ل ul في الشكل والسلوك، لكنه مخصص دلالياً لقوائم الأوامر والأدوات التفاعلية. للتنقل استخدم nav مع ul.',
      '💡 معظم قوائم التنقل في المواقع ما هي إلا ul تحتوي li تحتوي روابط a، وبـ CSS نحذف النقاط ونجعلها أفقية.',
      '💡 يمكن تغيير شكل النقاط أو الأرقام بـ CSS باستخدام list-style، وهو أفضل من خاصية type القديمة في ul.',
      '⚠️ لا تضع عناصر غير li مباشرة داخل ul أو ol، فهذا خطأ في الصياغة.'
    ].join('<br>'),
    exampleCode: `<h3>مميزات الكورس</h3>
<ul>
  <li>شرح مبسط</li>
  <li>تمارين عملية</li>
  <li>مشاريع حقيقية</li>
</ul>

<h3>خطوات إنشاء صفحة</h3>
<ol>
  <li>أنشئ ملف index.html</li>
  <li>اكتب الهيكل الأساسي</li>
  <li>افتحه في المتصفح</li>
</ol>

<ol start="5" type="A" reversed>
  <li>بند</li>
  <li>بند</li>
</ol>

<ul>
  <li>الواجهات
    <ul>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
  </li>
  <li>الخلفية</li>
</ul>`,
    starterCode: `<!-- 1) ul بثلاثة عناصر -->

<!-- 2) ol بثلاثة عناصر وعليها start أو reversed أو type -->

<!-- 3) قائمة متداخلة: ul داخل li -->`,
    solutionCode: `<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<ol start="3">
  <li>الخطوة الثالثة</li>
  <li>الخطوة الرابعة</li>
  <li>الخطوة الخامسة</li>
</ol>

<ul>
  <li>الواجهات
    <ul>
      <li>React</li>
      <li>Vue</li>
    </ul>
  </li>
  <li>الخلفية</li>
</ul>`,
    challengePrompt: 'تحدي الدرس: اكتب ul بثلاثة li على الأقل، وol بثلاثة li على الأقل مع إحدى الخصائص start أو reversed أو type، وقائمة متداخلة (ul أو ol داخل li).',
    validate: function (doc) {
      const ul = Array.from(doc.querySelectorAll('ul')).find(function (u) { return u.querySelectorAll(':scope > li').length >= 3; });
      if (!ul) return { passed: false, msgAr: 'أضف ul تحتوي ثلاثة li على الأقل.', msgEn: 'Add a ul with at least three li.' };
      const ol = Array.from(doc.querySelectorAll('ol')).find(function (o) { return o.querySelectorAll(':scope > li').length >= 3; });
      if (!ol) return { passed: false, msgAr: 'أضف ol تحتوي ثلاثة li على الأقل.', msgEn: 'Add an ol with at least three li.' };
      if (!ol.hasAttribute('start') && !ol.hasAttribute('reversed') && !ol.hasAttribute('type')) return { passed: false, msgAr: 'أضف إلى ol الخاصية start أو reversed أو type.', msgEn: 'Add start, reversed or type to the ol.' };
      if (!doc.querySelector('li > ul, li > ol')) return { passed: false, msgAr: 'أضف قائمة متداخلة داخل أحد عناصر li.', msgEn: 'Add a nested list inside an li.' };
      return { passed: true, msgAr: 'ممتاز! بنيت القوائم بشكل صحيح.', msgEn: 'Lists verified!' };
    }
  },
  {
    id: 'html-10',
    num: '10',
    title: 'قوائم الوصف والعناصر التفاعلية (dl, dt, dd, details, summary, dialog)',
    duration: '20 min',
    eyebrow: 'HTML 10 · قوائم المصطلحات والتفاعل بدون JavaScript',
    lead: 'ليس كل ما يتكون من مصطلح وشرح قائمة عادية؛ ويمكنك عمل أكورديون ونافذة منبثقة بـ HTML فقط.',
    goal: 'استخدام dl للمصطلحات، و details لإخفاء وإظهار المحتوى، و dialog للنوافذ، والتفرقة بينها وبين ul و table.',
    sectionTitle: 'قوائم الوصف والتفاعل المدمج',
    explanation: [
      '📖 قائمة الوصف (Description List):',
      '• &lt;dl&gt; : الحاوية. • &lt;dt&gt; : المصطلح أو الاسم (Term). • &lt;dd&gt; : الوصف أو القيمة (Description).',
      '• يمكن أن يكون لمصطلح واحد أكثر من وصف، ولعدة مصطلحات وصف واحد.',
      '⚖️ dl مقابل ul: ul عناصر منفصلة، و dl أزواج مصطلح ووصف (قاموس، أسئلة وأجوبة، بيانات المنتج).',
      '⚖️ dl مقابل table: dl لأزواج بسيطة من عمودين، و table لبيانات متعددة الأعمدة.',
      '▶️ &lt;details&gt; و &lt;summary&gt; : أكورديون جاهز، يظهر summary دائماً وعند الضغط عليه يظهر باقي محتوى details. أضف الخاصية open لتكون مفتوحة افتراضياً.',
      '🔹 summary يجب أن يكون أول ابن لـ details. ولجعل مجموعة details تعمل كأكورديون (يفتح واحد ويغلق الباقي) أعطِها جميعاً نفس قيمة الخاصية name.',
      '💬 &lt;dialog&gt; : نافذة حوار أو منبثقة. مخفية افتراضياً وتظهر بوجود الخاصية open، أو عبر JavaScript بـ showModal() لتظهر كنافذة مودال تعتم الخلفية.',
      '🔹 نموذج بخاصية method="dialog" داخل dialog يغلقها عند الإرسال بلا JavaScript.',
      '⚖️ details مقابل dialog: details يعرض محتوى إضافياً داخل الصفحة نفسها، و dialog نافذة منفصلة فوق الصفحة تطلب انتباه المستخدم.',
      '💡 استخدمها لقسم الأسئلة الشائعة FAQ وتفاصيل المنتج والتأكيدات.'
    ].join('<br>'),
    exampleCode: `<dl>
  <dt>HTML</dt>
  <dd>لغة هيكلة صفحات الويب</dd>

  <dt>CSS</dt>
  <dd>لغة تنسيق الصفحات</dd>
  <dd>تتحكم في الألوان والمسافات</dd>
</dl>

<details open>
  <summary>ما هو HTML؟</summary>
  <p>لغة وسوم لبناء هيكل الصفحة.</p>
</details>

<dialog open>
  <p>هل تريد حفظ التغييرات؟</p>
  <form method="dialog">
    <button>موافق</button>
  </form>
</dialog>`,
    starterCode: `<!-- 1) dl بمصطلحين، لكل مصطلح dd -->

<!-- 2) details مع summary -->

<!-- 3) dialog بالخاصية open -->`,
    solutionCode: `<dl>
  <dt>الويب</dt>
  <dd>شبكة من الصفحات المترابطة</dd>
  <dt>المتصفح</dt>
  <dd>برنامج لعرض صفحات الويب</dd>
</dl>

<details>
  <summary>هل HTML لغة برمجة؟</summary>
  <p>لا، هي لغة وسوم.</p>
</details>

<dialog open>
  <p>تم الحفظ بنجاح</p>
</dialog>`,
    challengePrompt: 'تحدي الدرس: أنشئ dl فيها مصطلحان على الأقل (dt) ولكل منهما dd، وعنصر details يحتوي summary، وعنصر dialog بالخاصية open.',
    validate: function (doc) {
      const dl = doc.querySelector('dl');
      if (!dl || dl.querySelectorAll('dt').length < 2 || dl.querySelectorAll('dd').length < 2) return { passed: false, msgAr: 'أضف dl فيها مصطلحان dt على الأقل ووصفان dd على الأقل.', msgEn: 'Add a dl with two dt and two dd.' };
      if (!doc.querySelector('details > summary')) return { passed: false, msgAr: 'أضف details بداخلها summary.', msgEn: 'Add details with summary.' };
      if (!doc.querySelector('dialog[open]')) return { passed: false, msgAr: 'أضف dialog بالخاصية open.', msgEn: 'Add dialog with the open attribute.' };
      return { passed: true, msgAr: 'رائع! أنشأت عناصر تفاعلية بدون سطر JavaScript.', msgEn: 'Description and interactive elements verified!' };
    }
  },
  {
    id: 'html-11',
    num: '11',
    title: 'الجداول الأساسية (table, tr, th, td, caption)',
    duration: '18 min',
    eyebrow: 'HTML 11 · عرض البيانات المنظمة',
    lead: 'الجدول مخصص لعرض بيانات ذات صفوف وأعمدة، وليس لتصميم الصفحات.',
    goal: 'بناء جدول سليم من table و tr و th و td و caption، ومعرفة متى يكون الجدول هو الاختيار الصحيح.',
    sectionTitle: 'تشريح الجدول',
    explanation: [
      '• &lt;table&gt; : الحاوية الرئيسية للجدول.',
      '• &lt;tr&gt; (Table Row) : صف في الجدول، ولا يكتب فيه نص مباشرة بل خلايا.',
      '• &lt;th&gt; (Table Header) : خلية عنوان، تظهر عريضة ومتوسطة افتراضياً، ويفهمها قارئ الشاشة كعنوان لعمود أو صف.',
      '• &lt;td&gt; (Table Data) : خلية بيانات عادية.',
      '• &lt;caption&gt; : عنوان الجدول، ويجب أن يكون أول ابن مباشر لـ table.',
      '⚖️ th مقابل td: قد تتشابه بعد التنسيق، لكن th تعني أن الخلية عنوان للبيانات المرتبطة بها، وهذا ما يفيد الوصول والـ SEO. لا تستبدلها بـ td مع bold.',
      '⚖️ table مقابل div/CSS Grid: استخدم table للبيانات الجدولية الحقيقية (أسعار، جداول مواعيد). واستخدم CSS لتخطيط الصفحة. وقديماً كان الناس يصممون الصفحات بالجداول وهذا ممنوع الآن.',
      '⚖️ table مقابل dl: dl لأزواج بسيطة، و table عندما يكون لكل صف عدة قيم.',
      '🔹 border="1" خاصية قديمة لإظهار الحدود تُستخدم للتجارب السريعة؛ والأصل استخدام CSS (border, border-collapse).',
      '⚠️ كل صف يجب أن يحتوي نفس عدد الخلايا (إلا عند استخدام colspan و rowspan في الدرس القادم)، وإلا اختل الشكل.',
      '💡 ملاحظة: المتصفح يضيف tbody تلقائياً حول الصفوف حتى لو لم تكتبه.'
    ].join('<br>'),
    exampleCode: `<table border="1">
  <caption>جدول درجات الطلاب</caption>
  <tr>
    <th>الاسم</th>
    <th>المادة</th>
    <th>الدرجة</th>
  </tr>
  <tr>
    <td>أحمد</td>
    <td>HTML</td>
    <td>95</td>
  </tr>
  <tr>
    <td>سارة</td>
    <td>CSS</td>
    <td>90</td>
  </tr>
</table>`,
    starterCode: `<table border="1">
  <!-- caption -->
  <!-- صف عناوين: 3 خلايا th -->
  <!-- صفان للبيانات: كل صف 3 خلايا td -->
</table>`,
    solutionCode: `<table border="1">
  <caption>أسعار الكورسات</caption>
  <tr>
    <th>الكورس</th>
    <th>المدة</th>
    <th>السعر</th>
  </tr>
  <tr>
    <td>HTML</td>
    <td>20 ساعة</td>
    <td>مجاني</td>
  </tr>
  <tr>
    <td>CSS</td>
    <td>25 ساعة</td>
    <td>مجاني</td>
  </tr>
</table>`,
    challengePrompt: 'تحدي الدرس: ابنِ جدولاً يحتوي caption، وصفاً واحداً على الأقل من خلايا th بثلاث خلايا، وصفين على الأقل من خلايا td بنفس عدد الأعمدة.',
    validate: function (doc) {
      const t = doc.querySelector('table');
      if (!t) return { passed: false, msgAr: 'أضف وسم table.', msgEn: 'Add a table.' };
      const cap = t.querySelector('caption');
      if (!cap || !cap.textContent.trim()) return { passed: false, msgAr: 'أضف caption بنص داخل الجدول.', msgEn: 'Add a caption with text.' };
      if (t.querySelectorAll('th').length < 3) return { passed: false, msgAr: 'أضف ثلاث خلايا عناوين th على الأقل.', msgEn: 'Add at least three th cells.' };
      const dataRows = Array.from(t.querySelectorAll('tr')).filter(function (r) { return r.querySelector('td'); });
      if (dataRows.length < 2) return { passed: false, msgAr: 'أضف صفين على الأقل من خلايا td.', msgEn: 'Add at least two data rows.' };
      const cols = dataRows[0].children.length;
      if (cols < 3 || dataRows.some(function (r) { return r.children.length !== cols; })) return { passed: false, msgAr: 'اجعل كل صفوف البيانات بنفس عدد الخلايا (3 على الأقل).', msgEn: 'Rows must have equal cell counts.' };
      return { passed: true, msgAr: 'ممتاز! جدول سليم ومنظم.', msgEn: 'Basic table verified!' };
    }
  },
  {
    id: 'html-12',
    num: '12',
    title: 'الجداول المتقدمة (thead, tbody, tfoot, colspan, rowspan, colgroup, scope)',
    duration: '22 min',
    eyebrow: 'HTML 12 · هيكلة الجداول الاحترافية',
    lead: 'تقسيم الجدول إلى رأس وجسم وتذييل ودمج الخلايا يجعل الجدول أوضح للمستخدم وللآلة.',
    goal: 'استخدام thead و tbody و tfoot، ودمج الخلايا بـ colspan و rowspan، وتنسيق أعمدة كاملة بـ colgroup و col، وربط العناوين بـ scope.',
    sectionTitle: 'هيكلة الجدول ودمج الخلايا',
    explanation: [
      '• &lt;thead&gt; : مجموعة صفوف العناوين. • &lt;tbody&gt; : صفوف البيانات الأساسية. • &lt;tfoot&gt; : صفوف الملخص أو المجاميع. استخدمها لتتمكن من تنسيق كل جزء على حدة وتكرارها عند طباعة جدول طويل.',
      '⚖️ هل tbody ضروري؟ المتصفح يضيفه تلقائياً، لكن كتابته صريحة أفضل خاصة عند وجود thead و tfoot.',
      '🔹 colspan="2" : تمتد الخلية عبر عمودين أو أكثر. و rowspan="2" : تمتد عبر صفين أو أكثر. وعند الدمج عليك حذف الخلايا المغطاة من الصفوف الأخرى.',
      '🔹 &lt;colgroup&gt; و &lt;col&gt; : تجمع الأعمدة لتنسق عموداً كاملاً مرة واحدة (مثل لون خلفية أو عرض) بدلاً من تكرار التنسيق في كل خلية. و col وسم ذاتي الإغلاق، و span لتغطية عدة أعمدة بوسم واحد.',
      '🔹 scope على th : "col" يعني أن الخلية عنوان للعمود، و "row" يعني عنوان للصف. وهي ضرورية لقارئات الشاشة.',
      '🔹 headers على td : للجداول المعقدة جداً، تربط الخلية بـ id لعدة خلايا th.',
      '⚖️ thead مقابل صف th عادي: الاثنان يعطيان نفس الشكل غالباً، لكن thead يخبر المتصفح والآلات بأن هذا العنوان وليس بيانات.',
      '⚖️ tfoot يُكتب منطقياً في الأسفل في HTML الحديث، ويظهر في الأسفل بالمتصفح.',
      '💡 للجداول الواسعة في الموبايل ضعها داخل div بخاصية overflow-x: auto في CSS.'
    ].join('<br>'),
    exampleCode: `<table border="1">
  <caption>مبيعات الربع الأول</caption>
  <colgroup>
    <col>
    <col span="2" style="background: #eef">
  </colgroup>
  <thead>
    <tr>
      <th scope="col">المنتج</th>
      <th scope="col">يناير</th>
      <th scope="col">فبراير</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">كتاب</th>
      <td>100</td>
      <td>120</td>
    </tr>
    <tr>
      <td colspan="3">عرض خاص على كل المنتجات</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">الإجمالي</th>
      <td colspan="2">220</td>
    </tr>
  </tfoot>
</table>`,
    starterCode: `<table border="1">
  <thead>
    <!-- صف عناوين بخاصية scope -->
  </thead>
  <tbody>
    <!-- صفوف بيانات مع خلية colspan وخلية rowspan -->
  </tbody>
  <tfoot>
    <!-- صف مجموع -->
  </tfoot>
</table>`,
    solutionCode: `<table border="1">
  <thead>
    <tr>
      <th scope="col">اليوم</th>
      <th scope="col">المحاضرة</th>
      <th scope="col">القاعة</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" rowspan="2">السبت</th>
      <td>HTML</td>
      <td>A1</td>
    </tr>
    <tr>
      <td>CSS</td>
      <td>A2</td>
    </tr>
    <tr>
      <td colspan="3">الأحد إجازة</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">إجمالي المحاضرات: 2</td>
    </tr>
  </tfoot>
</table>`,
    challengePrompt: 'تحدي الدرس: ابنِ جدولاً فيه thead و tbody و tfoot، وعلى الأقل خلية واحدة بـ colspan وأخرى بـ rowspan، ووسم th بخاصية scope.',
    validate: function (doc) {
      const t = doc.querySelector('table');
      if (!t) return { passed: false, msgAr: 'أضف جدولاً.', msgEn: 'Add a table.' };
      if (!t.querySelector('thead tr')) return { passed: false, msgAr: 'أضف thead يحتوي صفاً.', msgEn: 'Add thead with a row.' };
      if (!t.querySelector('tbody tr')) return { passed: false, msgAr: 'أضف tbody يحتوي صفاً.', msgEn: 'Add tbody with a row.' };
      if (!t.querySelector('tfoot tr')) return { passed: false, msgAr: 'أضف tfoot يحتوي صفاً.', msgEn: 'Add tfoot with a row.' };
      if (!t.querySelector('[colspan]')) return { passed: false, msgAr: 'استخدم colspan في خلية.', msgEn: 'Use colspan.' };
      if (!t.querySelector('[rowspan]')) return { passed: false, msgAr: 'استخدم rowspan في خلية.', msgEn: 'Use rowspan.' };
      if (!t.querySelector('th[scope]')) return { passed: false, msgAr: 'أضف th بخاصية scope.', msgEn: 'Add th with scope.' };
      return { passed: true, msgAr: 'ممتاز! جدول احترافي ومنظم.', msgEn: 'Advanced table verified!' };
    }
  },
  {
    id: 'html-13',
    num: '13',
    title: 'عناصر الكتلة والعناصر السطرية (div, span, block, inline)',
    duration: '20 min',
    eyebrow: 'HTML 13 · سلوك العناصر في الصفحة',
    lead: 'قبل أن تتعلم CSS يجب أن تفهم أن كل عنصر ينتمي لنوع يحدد طريقة وقوفه في الصفحة.',
    goal: 'التفرقة بين Block و Inline و Inline-Block، ومعرفة متى نستخدم div و span، وتجنب فوضى الـ div.',
    sectionTitle: 'كيف يقف كل عنصر في الصفحة',
    explanation: [
      '🧱 عناصر الكتلة (Block): تبدأ في سطر جديد وتمتد بعرض الحاوية كاملاً، ويمكن ضبط عرضها وارتفاعها. أمثلة: div, p, h1-h6, ul, ol, li, table, form, header, footer, section, article, nav, main, aside, blockquote, pre, hr, figure.',
      '📏 العناصر السطرية (Inline): تقف داخل السطر بجانب النص، وتأخذ عرض محتواها فقط، ولا تتأثر بـ width و height. أمثلة: span, a, strong, em, b, i, code, img (سطري بطبيعته)، button وinput (Inline-Block).',
      '⚖️ Inline-Block : تقف داخل السطر مثل Inline، لكنها تقبل ضبط العرض والارتفاع مثل Block (مثل img و button و input).',
      '🔹 &lt;div&gt; : حاوية كتلة عامة بلا أي معنى، تُستخدم لتجميع العناصر وتنسيقها وتخطيط الصفحة.',
      '🔹 &lt;span&gt; : حاوية سطرية عامة بلا معنى، تُستخدم لتنسيق جزء صغير من النص.',
      '⚖️ div مقابل p: كلاهما كتلة وقد يعطيان نفس الشكل، لكن p يعني فقرة نصية بينما div بلا معنى. لا تضع نصاً عادياً في div إن كان فقرة.',
      '⚖️ span مقابل strong: قد يبدوان متطابقين بعد CSS (font-weight)، لكن strong له معنى (أهمية)، و span بلا معنى. اختر span فقط عندما لا يوجد وسم دلالي مناسب.',
      '⚖️ div مقابل section/article: إن كان لمجموعتك موضوع وعنوان فاستخدم section أو article (الدرس 14)، وإلا فاستخدم div للتنسيق فقط.',
      '⚠️ لا يجوز وضع عنصر Block داخل p لأن المتصفح يغلق الفقرة تلقائياً، ولا وضع a كتلة داخل a أخرى.',
      '⚠️ فوضى div (Div Soup) : سلسلة div متداخلة بلا معنى تضر بالـ SEO وإمكانية الوصول. استخدم الوسوم الدلالية كلما أمكن.',
      '🔹 الخاصية class لإعطاء اسم يُستخدم في CSS لعدة عناصر، و id لعنصر فريد (الدرس 19).'
    ].join('<br>'),
    exampleCode: `<div class="card">
  <h3>عنوان البطاقة</h3>
  <p>هذه فقرة داخل <span class="highlight">البطاقة</span> وبها كلمة مميزة.</p>
</div>

<!-- block: كل واحد في سطر -->
<div>الأول</div>
<div>الثاني</div>

<!-- inline: بجانب بعض -->
<span>الأول</span>
<span>الثاني</span>

<!-- نفس التأثير البصري بمعنى مختلف -->
<span style="font-weight: bold">عريض بلا معنى</span>
<strong>عريض بمعنى الأهمية</strong>`,
    starterCode: `<!-- 1) div بكلاس container -->
<!-- 2) داخلها p -->
<!-- 3) داخل p ضع span بكلاس أو style -->
<!-- 4) أضف div ثانية ليظهر الفرق بين block و inline -->`,
    solutionCode: `<div class="container">
  <p>نص عادي مع <span class="highlight" style="color: crimson">كلمة ملونة</span> داخل الفقرة.</p>
</div>
<div class="footer-box">
  <span>عنصر 1</span>
  <span>عنصر 2</span>
</div>`,
    challengePrompt: 'تحدي الدرس: أنشئ div بخاصية class تحتوي فقرة p، وداخل الفقرة span بخاصية class أو style، ثم div ثانية تحتوي عنصري span.',
    validate: function (doc) {
      const d = doc.querySelector('div[class]');
      if (!d) return { passed: false, msgAr: 'أضف div بخاصية class.', msgEn: 'Add a div with class.' };
      if (!d.querySelector('p')) return { passed: false, msgAr: 'ضع فقرة p داخل div.', msgEn: 'Put a p inside the div.' };
      if (!d.querySelector('p span[class], p span[style]')) return { passed: false, msgAr: 'ضع span بخاصية class أو style داخل الفقرة.', msgEn: 'Add a styled span inside the p.' };
      const second = Array.from(doc.querySelectorAll('div')).find(function (x) { return x !== d && x.querySelectorAll('span').length >= 2; });
      if (!second) return { passed: false, msgAr: 'أضف div ثانية تحتوي عنصري span على الأقل.', msgEn: 'Add a second div with two spans.' };
      return { passed: true, msgAr: 'ممتاز! فهمت الفرق بين Block و Inline.', msgEn: 'Block and inline verified!' };
    }
  },
  {
    id: 'html-14',
    num: '14',
    title: 'وسوم هيكل الصفحة الدلالية (header, nav, main, section, article, aside, footer)',
    duration: '25 min',
    eyebrow: 'HTML 14 · العمارة الدلالية للصفحة',
    lead: 'بدلاً من عشرات div بلا معنى، تقدم HTML5 وسوماً تصف دور كل جزء في الصفحة.',
    goal: 'بناء صفحة بأقسامها الدلالية الصحيحة، والتفرقة بين section و article و div و aside.',
    sectionTitle: 'متى نستخدم كل وسم هيكلي؟',
    explanation: [
      '• &lt;header&gt; : رأس الصفحة أو رأس قسم (شعار، عنوان، تنقل). ويمكن أن توجد عدة header داخل الصفحة، لكل مقال أو قسم واحد.',
      '• &lt;nav&gt; : الروابط الرئيسية للتنقل فقط، وليس كل مجموعة روابط. الأفضل أن يحتوي ul.',
      '• &lt;main&gt; : المحتوى الأساسي الفريد للصفحة. عنصر واحد فقط في الصفحة، ولا يوضع داخل header أو footer أو article.',
      '• &lt;section&gt; : قسم موضوعي من الصفحة، ويفضل أن يكون له عنوان h2 إلى h6.',
      '• &lt;article&gt; : محتوى مستقل يصلح للنشر بمفرده لو أُخذ خارج الصفحة (مقال، تدوينة، تعليق، بطاقة منتج).',
      '• &lt;aside&gt; : محتوى جانبي مرتبط بمحيطه (شريط جانبي، إعلان، معلومة إضافية).',
      '• &lt;footer&gt; : تذييل الصفحة أو القسم (حقوق النشر، روابط، تواصل).',
      '⚖️ section مقابل article: لو كان المحتوى مفهوماً بمفرده خارج الصفحة فهو article، وإن كان جزءاً من تتمة موضوع الصفحة فهو section.',
      '⚖️ section مقابل div: section له معنى وعنوان، و div للتنسيق فقط. إن لم تجد عنواناً للقسم فاستخدم div.',
      '⚖️ aside مقابل section: aside غير أساسي لو حذفته لم يتضرر المعنى الرئيسي، أما section فمن صلب المحتوى.',
      '⚖️ header مقابل head: head في أعلى المستند ولا يظهر، و header يظهر للمستخدم داخل body.',
      '🔹 يمكن تداخلها: article داخله header و section و footer خاصة به.',
      '🔹 &lt;search&gt; : وسم حديث يغلف منطقة البحث والتصفية في الصفحة.',
      '💡 الأقسام الدلالية تحسّن الـ SEO وتتيح لمستخدمي قارئات الشاشة القفز بين المناطق.'
    ].join('<br>'),
    exampleCode: `<header>
  <h1>مدونة التقنية</h1>
  <nav>
    <ul>
      <li><a href="#home">الرئيسية</a></li>
      <li><a href="#blog">المقالات</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h2>ما هي HTML؟</h2>
    <p>لغة وسوم لبناء الصفحات.</p>
    <footer>الكاتب: أحمد</footer>
  </article>

  <section>
    <h2>مقالات ذات صلة</h2>
    <p>قائمة المقالات...</p>
  </section>

  <aside>
    <h3>إعلان</h3>
    <p>اشترك في النشرة البريدية</p>
  </aside>
</main>

<footer>
  <p>جميع الحقوق محفوظة 2026</p>
</footer>`,
    starterCode: `<!-- header يحتوي h1 و nav فيه ul بروابط -->

<!-- main (واحد فقط) يحتوي article و aside -->

<!-- footer -->`,
    solutionCode: `<header>
  <h1>موقعي</h1>
  <nav>
    <ul>
      <li><a href="#home">الرئيسية</a></li>
      <li><a href="#about">من أنا</a></li>
    </ul>
  </nav>
</header>
<main>
  <article>
    <h2>مقال تجريبي</h2>
    <p>محتوى المقال.</p>
  </article>
  <section>
    <h2>قسم إضافي</h2>
    <p>تفاصيل.</p>
  </section>
  <aside>
    <p>معلومة جانبية</p>
  </aside>
</main>
<footer>
  <p>جميع الحقوق محفوظة</p>
</footer>`,
    challengePrompt: 'تحدي الدرس: ابنِ صفحة تحتوي header فيه h1 وnav فيه رابطان على الأقل، وعنصر main واحد فقط يحتوي article بداخله h2، وعنصر aside، وعنصر footer.',
    validate: function (doc) {
      const header = doc.querySelector('header');
      if (!header || !header.querySelector('h1')) return { passed: false, msgAr: 'أضف header يحتوي h1.', msgEn: 'Add header with h1.' };
      const nav = doc.querySelector('nav');
      if (!nav || nav.querySelectorAll('a').length < 2) return { passed: false, msgAr: 'أضف nav يحتوي رابطين a على الأقل.', msgEn: 'Add nav with two links.' };
      if (doc.querySelectorAll('main').length !== 1) return { passed: false, msgAr: 'يجب أن يوجد عنصر main واحد فقط.', msgEn: 'Exactly one main is required.' };
      const art = doc.querySelector('main article');
      if (!art || !art.querySelector('h2')) return { passed: false, msgAr: 'أضف داخل main عنصر article يحتوي h2.', msgEn: 'Add article with h2 inside main.' };
      if (!doc.querySelector('aside')) return { passed: false, msgAr: 'أضف عنصر aside.', msgEn: 'Add aside.' };
      if (!doc.querySelector('footer')) return { passed: false, msgAr: 'أضف عنصر footer.', msgEn: 'Add footer.' };
      return { passed: true, msgAr: 'ممتاز! هيكل دلالي كامل يفهمه المتصفح وجوجل.', msgEn: 'Semantic layout verified!' };
    }
  },
  {
    id: 'html-15',
    num: '15',
    title: 'النماذج الجزء الأول (form, label, input وأنواعه النصية)',
    duration: '25 min',
    eyebrow: 'HTML 15 · جمع بيانات المستخدم',
    lead: 'النموذج هو الجسر بين المستخدم والخادم: تسجيل الدخول، البحث، الاشتراك، الدفع، كلها نماذج.',
    goal: 'فهم form و label و input، والتفرقة بين id و name، و GET و POST، واستخدام أنواع input النصية.',
    sectionTitle: 'أساسيات بناء النموذج',
    explanation: [
      '🔹 &lt;form action="الرابط" method="get|post"&gt; : يحيط بحقول الإدخال. action هو الخادم الذي ستُرسل إليه البيانات، و method هو أسلوب الإرسال.',
      '⚖️ GET مقابل POST: GET يضع البيانات في الرابط (مناسب للبحث، ويمكن حفظ الرابط ومشاركته)، و POST يخفيها داخل الطلب (مناسب لكلمات المرور والبيانات الكبيرة أو التي تغير شيئاً في الخادم).',
      '🔹 &lt;label for="id"&gt; : نص يوضح الحقل، والضغط عليه ينقل التركيز للحقل ويفيد قارئ الشاشة. اربطه إما بـ for مطابق لـ id الحقل أو بوضع الحقل داخل label.',
      '🔹 &lt;input&gt; : وسم ذاتي الإغلاق، وسلوكه كله يتحدد بالخاصية type.',
      '📍 الأنواع النصية: text (نص عادي)، password (يخفي الأحرف)، email (يتحقق من صيغة البريد ويظهر لوحة مفاتيح مناسبة للموبايل)، tel (لوحة أرقام الهاتف)، url (رابط)، number (أرقام مع أسهم)، search (حقل بحث).',
      '⚖️ id مقابل name: id لتعريف العنصر لـ label و CSS و JavaScript ويجب أن يكون فريداً. و name هو اسم الحقل الذي يصل به إلى الخادم؛ بدون name لن تُرسل قيمة الحقل أبداً.',
      '⚖️ placeholder مقابل label: placeholder تلميح يختفي بالكتابة، فلا يغني عن label أبداً.',
      '⚖️ value مقابل placeholder: value قيمة فعلية تُرسل، و placeholder للتلميح فقط.',
      '🔹 خصائص مفيدة: required (إلزامي)، autofocus (تركيز تلقائي)، autocomplete="off|on|email|username|new-password"، maxlength و minlength.',
      '🔹 &lt;button type="submit"&gt; : لإرسال النموذج. والنوع الافتراضي لـ button داخل form هو submit.',
      '⚖️ input type="submit" مقابل button: نفس النتيجة، لكن button يقبل وسوماً بداخله (أيقونة مثلاً) و input لا يقبل. استخدم button.'
    ].join('<br>'),
    exampleCode: `<form action="/register" method="post">
  <label for="username">اسم المستخدم</label>
  <input type="text" id="username" name="username" placeholder="مثال: ahmed123" required>

  <label for="email">البريد الإلكتروني</label>
  <input type="email" id="email" name="email" required>

  <label for="pass">كلمة المرور</label>
  <input type="password" id="pass" name="password" minlength="8" required>

  <label for="age">العمر</label>
  <input type="number" id="age" name="age" min="10" max="100">

  <button type="submit">إنشاء حساب</button>
</form>`,
    starterCode: `<!-- form بـ action و method -->
  <!-- label + input نصي (name و id) -->
  <!-- label + input بريد -->
  <!-- label + input كلمة مرور -->
  <!-- زر إرسال -->
<!-- نهاية form -->`,
    solutionCode: `<form action="/login" method="post">
  <label for="u">اسم المستخدم</label>
  <input type="text" id="u" name="username" placeholder="اسمك" required>

  <label for="e">البريد الإلكتروني</label>
  <input type="email" id="e" name="email">

  <label for="p">كلمة المرور</label>
  <input type="password" id="p" name="password" required>

  <button type="submit">دخول</button>
</form>`,
    challengePrompt: 'تحدي الدرس: أنشئ form بالخاصيتين action و method، وبداخلها ثلاثة حقول (text و email و password) كل منها له name و id وlabel مرتبط به بـ for، وزر type="submit".',
    validate: function (doc) {
      const f = doc.querySelector('form[action][method]');
      if (!f) return { passed: false, msgAr: 'أضف form بخاصيتي action و method.', msgEn: 'Add form with action and method.' };
      const types = ['text', 'email', 'password'];
      for (let i = 0; i < types.length; i++) {
        const inp = f.querySelector('input[type="' + types[i] + '"][name][id]');
        if (!inp) return { passed: false, msgAr: 'أضف حقل ' + types[i] + ' له name و id.', msgEn: 'Add ' + types[i] + ' input with name and id.' };
        if (!f.querySelector('label[for="' + inp.id + '"]')) return { passed: false, msgAr: 'اربط حقل ' + types[i] + ' بـ label بخاصية for تطابق id.', msgEn: 'Link a label to the ' + types[i] + ' input.' };
      }
      if (!f.querySelector('button[type="submit"]')) return { passed: false, msgAr: 'أضف زر button بـ type="submit".', msgEn: 'Add a submit button.' };
      return { passed: true, msgAr: 'ممتاز! نموذج سليم ومرتبط وجاهز للإرسال.', msgEn: 'Form basics verified!' };
    }
  },
  {
    id: 'html-16',
    num: '16',
    title: 'النماذج الجزء الثاني (checkbox, radio, range, date, file, fieldset, progress, meter)',
    duration: '25 min',
    eyebrow: 'HTML 16 · أنواع الإدخال المتقدمة',
    lead: 'ليس كل إدخال نصاً؛ HTML تقدم أدوات جاهزة للاختيارات والتواريخ والملفات والألوان وشرائط التقدم.',
    goal: 'اختيار نوع input المناسب لكل حالة، وتجميع الحقول بـ fieldset، والتفرقة بين progress و meter.',
    sectionTitle: 'أنواع input الأخرى وعناصر النماذج المساعدة',
    explanation: [
      '☑️ checkbox : اختيار متعدد (يمكن تفعيل أكثر من خيار). وخاصية checked لتفعيله افتراضياً.',
      '🔘 radio : اختيار واحد فقط من مجموعة. تنتمي الأزرار لنفس المجموعة إذا كان لها نفس قيمة name، وتختلف value لكل زر.',
      '⚖️ checkbox مقابل radio: لو أردت اختياراً واحداً من عدة خيارات (النوع) فاستخدم radio، ولو أردت اختيار أكثر من واحد (الاهتمامات) فاستخدم checkbox.',
      '🎚️ range : شريط تمرير مع min و max و step. و number : حقل رقم يكتب فيه المستخدم. اختر range عندما تكون القيمة التقريبية كافية (مثل مستوى الصوت).',
      '🎨 color : منتقي ألوان. 📅 date و time و datetime-local و month و week : منتقيات تاريخ ووقت حسب النوع.',
      '📎 file : رفع ملفات، وخصائص accept="image/*" لتحديد أنواع الملفات، و multiple لعدة ملفات (ويلزم في النموذج enctype="multipart/form-data" مع POST).',
      '🕶️ hidden : حقل مخفي يرسل قيمة بدون إظهارها (مثل رقم المنتج). ولا يُعتمد عليه للأسرار لأن المستخدم يستطيع رؤيته.',
      '🔹 input type="reset" و type="button" و type="submit" و type="image" : أزرار؛ والأفضل استخدام وسم button بدلاً منها.',
      '📋 &lt;datalist&gt; : قائمة اقتراحات تُربط بحقل نصي عبر list="id"، ويكتب المستخدم قيمة حرة أو يختار من الاقتراحات.',
      '🗂️ &lt;fieldset&gt; و &lt;legend&gt; : تجمع الحقول المتعلقة في إطار بعنوان، وتخدم قارئ الشاشة خاصة لمجموعات radio.',
      '⚖️ &lt;progress&gt; مقابل &lt;meter&gt;: progress يعرض تقدم مهمة (تحميل، خطوة 3 من 5) من الصفر للنهاية. و meter يعرض قياساً ضمن مدى معروف (مساحة التخزين المستخدمة، درجة اختبار) ويقبل low و high و optimum وتتغير ألوانه بحسبها.',
      '🔹 &lt;output for="..."&gt; : يعرض ناتج عملية حسابية أو قيمة من حقل آخر.'
    ].join('<br>'),
    exampleCode: `<form>
  <fieldset>
    <legend>اختر الجنس</legend>
    <label><input type="radio" name="gender" value="m"> ذكر</label>
    <label><input type="radio" name="gender" value="f"> أنثى</label>
  </fieldset>

  <fieldset>
    <legend>اهتماماتك</legend>
    <label><input type="checkbox" name="int" value="html" checked> HTML</label>
    <label><input type="checkbox" name="int" value="css"> CSS</label>
  </fieldset>

  <label for="vol">مستوى الصوت</label>
  <input type="range" id="vol" name="vol" min="0" max="100" step="5" value="50">

  <label for="bd">تاريخ الميلاد</label>
  <input type="date" id="bd" name="bd">

  <label for="cv">ارفع سيرتك الذاتية</label>
  <input type="file" id="cv" name="cv" accept=".pdf">

  <label for="city">المدينة</label>
  <input list="cities" id="city" name="city">
  <datalist id="cities">
    <option value="القاهرة">
    <option value="الإسكندرية">
  </datalist>

  <progress value="70" max="100">70%</progress>
  <meter value="0.3" min="0" max="1" low="0.4" high="0.8">30%</meter>
</form>`,
    starterCode: `<form>
  <!-- fieldset + legend + radio بنفس name -->
  <!-- checkbox -->
  <!-- range بـ min و max -->
  <!-- date -->
  <!-- progress و meter -->
</form>`,
    solutionCode: `<form>
  <fieldset>
    <legend>اختر مستواك</legend>
    <label><input type="radio" name="level" value="beginner"> مبتدئ</label>
    <label><input type="radio" name="level" value="pro"> محترف</label>
  </fieldset>

  <label><input type="checkbox" name="terms" value="yes"> أوافق على الشروط</label>

  <label for="vol">الصوت</label>
  <input type="range" id="vol" name="vol" min="0" max="10">

  <label for="d">التاريخ</label>
  <input type="date" id="d" name="d">

  <progress value="40" max="100">40%</progress>
  <meter value="0.6" min="0" max="1">60%</meter>
</form>`,
    challengePrompt: 'تحدي الدرس: أنشئ fieldset بـ legend تحتوي زري radio على الأقل بنفس الـ name، وcheckbox، وrange بـ min و max، وinput من نوع date، وprogress بـ value و max، وmeter بـ value.',
    validate: function (doc) {
      const fs = doc.querySelector('fieldset');
      if (!fs || !fs.querySelector('legend')) return { passed: false, msgAr: 'أضف fieldset تحتوي legend.', msgEn: 'Add fieldset with legend.' };
      const radios = Array.from(doc.querySelectorAll('input[type="radio"][name]'));
      const sameName = radios.some(function (r) { return radios.filter(function (x) { return x.name === r.name; }).length >= 2; });
      if (!sameName) return { passed: false, msgAr: 'أضف زري radio على الأقل بنفس قيمة name.', msgEn: 'Add two radios with the same name.' };
      if (!doc.querySelector('input[type="checkbox"]')) return { passed: false, msgAr: 'أضف checkbox.', msgEn: 'Add a checkbox.' };
      if (!doc.querySelector('input[type="range"][min][max]')) return { passed: false, msgAr: 'أضف range بـ min و max.', msgEn: 'Add range with min and max.' };
      if (!doc.querySelector('input[type="date"]')) return { passed: false, msgAr: 'أضف input من نوع date.', msgEn: 'Add a date input.' };
      if (!doc.querySelector('progress[value][max]')) return { passed: false, msgAr: 'أضف progress بـ value و max.', msgEn: 'Add progress with value and max.' };
      if (!doc.querySelector('meter[value]')) return { passed: false, msgAr: 'أضف meter بـ value.', msgEn: 'Add meter with value.' };
      return { passed: true, msgAr: 'ممتاز! استخدمت الأداة المناسبة لكل نوع بيانات.', msgEn: 'Advanced inputs verified!' };
    }
  },
  {
    id: 'html-17',
    num: '17',
    title: 'النماذج الجزء الثالث (select, textarea, button, والتحقق من المدخلات)',
    duration: '25 min',
    eyebrow: 'HTML 17 · القوائم المنسدلة والتحقق',
    lead: 'نكمل النماذج بالقوائم المنسدلة والنصوص الطويلة وأزرار التحكم، وبقواعد تمنع إرسال بيانات خاطئة.',
    goal: 'استخدام select و textarea و button، وتطبيق خصائص التحقق required و pattern و min و max، والتفرقة بين disabled و readonly.',
    sectionTitle: 'القوائم والنصوص الطويلة والتحقق التلقائي',
    explanation: [
      '🔹 &lt;select&gt; : قائمة منسدلة، وبداخلها &lt;option value="..."&gt; لكل خيار. الخاصية selected على option تحدد الخيار الافتراضي، و multiple على select تسمح بتحديد أكثر من خيار.',
      '🔹 &lt;optgroup label="..."&gt; : يجمع عدة option تحت عنوان.',
      '⚖️ select مقابل radio: select يوفر مساحة عندما تكون الخيارات كثيرة (دول، مدن)، و radio أفضل عندما تكون الخيارات 2 إلى 4 لأنها ظاهرة كلها.',
      '🔹 &lt;textarea rows="4" cols="30" maxlength="200"&gt; : حقل نص متعدد الأسطر، ويكتب النص الافتراضي بين وسمي الفتح والإغلاق (وليس في value).',
      '⚖️ input type="text" مقابل textarea: الأول سطر واحد، والثاني لعدة أسطر (رسالة أو وصف).',
      '🔹 &lt;button&gt; ثلاثة أنواع: type="submit" يرسل النموذج، و type="reset" يعيد القيم الابتدائية، و type="button" بلا سلوك افتراضي ويُستخدم مع JavaScript. نوصي بتحديد type دائماً.',
      '✅ التحقق التلقائي (Validation) بالمتصفح بلا JavaScript:',
      '• required : الحقل إلزامي. • minlength و maxlength : حدود طول النص. • min و max : حدود الأرقام والتواريخ. • pattern="[0-9]{11}" : تعبير نمطي يجب أن تتطابق القيمة معه، ويفضل إضافة title لتوضيح الصيغة.',
      '• type="email" و "url" : يتحققان من الصيغة تلقائياً. • novalidate على form : يعطل التحقق.',
      '⚖️ disabled مقابل readonly: disabled يعطل الحقل بالكامل ويظهر باهتاً ولا تُرسل قيمته، و readonly يمنع التعديل فقط ويرسل القيمة، ويمكن التركيز عليه.',
      '🔹 form على العنصر : تخصص عناصر خارج النموذج للارتباط به عبر form="id".',
      '⚠️ لا تعتمد على التحقق من جهة المتصفح فقط؛ يجب التحقق في الخادم أيضاً لأنه يمكن تجاوزه.'
    ].join('<br>'),
    exampleCode: `<form action="/send" method="post">
  <label for="country">الدولة</label>
  <select id="country" name="country" required>
    <option value="">اختر...</option>
    <optgroup label="الشرق الأوسط">
      <option value="eg" selected>مصر</option>
      <option value="sa">السعودية</option>
    </optgroup>
  </select>

  <label for="phone">رقم الهاتف</label>
  <input type="text" id="phone" name="phone" pattern="[0-9]{11}" title="أدخل 11 رقماً" required>

  <label for="code">كود ثابت</label>
  <input type="text" id="code" name="code" value="A-100" readonly>

  <input type="text" name="locked" value="لا يمكن تعديلي" disabled>

  <label for="msg">رسالتك</label>
  <textarea id="msg" name="msg" rows="4" maxlength="200" required></textarea>

  <button type="submit">إرسال</button>
  <button type="reset">مسح</button>
</form>`,
    starterCode: `<form action="/send" method="post">
  <!-- select مع optgroup وثلاثة option -->
  <!-- input بـ required و pattern -->
  <!-- input بـ readonly وآخر بـ disabled -->
  <!-- textarea بـ rows و maxlength -->
  <!-- زر submit وزر reset -->
</form>`,
    solutionCode: `<form action="/send" method="post">
  <label for="c">المدينة</label>
  <select id="c" name="city">
    <optgroup label="مصر">
      <option value="cairo">القاهرة</option>
      <option value="alex">الإسكندرية</option>
      <option value="giza">الجيزة</option>
    </optgroup>
  </select>

  <input type="text" name="phone" pattern="[0-9]{11}" title="11 رقماً" required>
  <input type="text" name="code" value="X1" readonly>
  <input type="text" name="locked" value="مغلق" disabled>

  <textarea name="msg" rows="4" maxlength="150"></textarea>

  <button type="submit">إرسال</button>
  <button type="reset">مسح</button>
</form>`,
    challengePrompt: 'تحدي الدرس: أنشئ select يحتوي optgroup وثلاثة option على الأقل، وinput بـ required و pattern، وinput بـ readonly، وinput بـ disabled، وtextarea بـ rows و maxlength، وزرين من نوع submit و reset.',
    validate: function (doc) {
      const sel = doc.querySelector('select');
      if (!sel || !sel.querySelector('optgroup') || sel.querySelectorAll('option').length < 3) return { passed: false, msgAr: 'أضف select فيه optgroup وثلاثة option على الأقل.', msgEn: 'Add select with optgroup and three options.' };
      if (!doc.querySelector('input[required][pattern]')) return { passed: false, msgAr: 'أضف input بالخاصيتين required و pattern.', msgEn: 'Add input with required and pattern.' };
      if (!doc.querySelector('input[readonly]')) return { passed: false, msgAr: 'أضف input بخاصية readonly.', msgEn: 'Add a readonly input.' };
      if (!doc.querySelector('input[disabled]')) return { passed: false, msgAr: 'أضف input بخاصية disabled.', msgEn: 'Add a disabled input.' };
      if (!doc.querySelector('textarea[rows][maxlength]')) return { passed: false, msgAr: 'أضف textarea بـ rows و maxlength.', msgEn: 'Add textarea with rows and maxlength.' };
      if (!doc.querySelector('button[type="submit"]') || !doc.querySelector('button[type="reset"]')) return { passed: false, msgAr: 'أضف زري button من نوع submit و reset.', msgEn: 'Add submit and reset buttons.' };
      return { passed: true, msgAr: 'ممتاز! نموذج كامل بتحقق ذكي.', msgEn: 'Form controls and validation verified!' };
    }
  },
  {
    id: 'html-18',
    num: '18',
    title: 'الوسائط والمحتوى المضمّن (audio, video, source, track, iframe, embed, object, canvas, svg)',
    duration: '25 min',
    eyebrow: 'HTML 18 · الصوت والفيديو والمحتوى الخارجي',
    lead: 'يمكن لـ HTML تشغيل الصوت والفيديو وتضمين مواقع أخرى ورسم الأشكال بدون أي إضافات.',
    goal: 'تشغيل الوسائط بخصائصها، وتوفير صيغ بديلة وترجمات، وتضمين صفحات خارجية بأمان، والتفرقة بين canvas و svg.',
    sectionTitle: 'تشغيل وتضمين المحتوى',
    explanation: [
      '🎬 &lt;video src="..." controls&gt; : يشغل الفيديو. الخصائص: controls (أزرار التحكم)، poster (صورة قبل التشغيل)، autoplay (تشغيل تلقائي، ولا يعمل غالباً إلا مع muted)، loop (تكرار)، muted (صامت)، preload="none|metadata|auto"، width و height.',
      '🎵 &lt;audio controls&gt; : نفس الفكرة للصوت بدون صورة.',
      '🔹 &lt;source src="..." type="video/mp4"&gt; : يضيف أكثر من صيغة (mp4 و webm مثلاً) داخل video أو audio، فيختار المتصفح أول صيغة يدعمها. وعند عدم دعم أي صيغة يظهر النص المكتوب داخل الوسم.',
      '⚖️ src على video مقابل source: لو كانت صيغة واحدة فاكتب src مباشرة، ولو أردت عدة بدائل فاستخدم source.',
      '🔹 &lt;track kind="subtitles" src="ar.vtt" srclang="ar" label="العربية" default&gt; : ترجمة أو وصف أو فصول للفيديو.',
      '🌐 &lt;iframe src="..." title="..." loading="lazy"&gt; : يضمن صفحة أخرى داخل صفحتك (خريطة، فيديو يوتيوب). أضف title دائماً لإمكانية الوصول، و sandbox لتقييد الصلاحيات للأمان، و allow لتحديد الصلاحيات مثل fullscreen.',
      '⚠️ بعض المواقع تمنع تضمينها داخل iframe، فلن تظهر.',
      '⚖️ &lt;embed&gt; مقابل &lt;object&gt;: كلاهما لتضمين محتوى خارجي مثل PDF أو فلاش قديم. embed وسم ذاتي الإغلاق بسيط، و object أكثر مرونة ويقبل محتوى بديلاً بداخله. وفي الواقع الحديث يفضل iframe لتضمين PDF.',
      '🎨 &lt;canvas id="c" width="300" height="150"&gt; : لوحة رسم تُرسم بـ JavaScript بالبكسل (ألعاب، رسوم بيانية متحركة).',
      '⚖️ canvas مقابل svg: canvas نقاط ثابتة بلا عناصر داخلية (أسرع للرسوم الكثيرة والألعاب) ولا يتحسن عند التكبير. و svg وسوم XML داخل HTML، كل شكل عنصر يمكن تنسيقه والتفاعل معه، ولا يفقد جودته عند التكبير (الأفضل للأيقونات والشعارات).',
      '🔹 داخل svg : circle و rect و line و path و text و g.',
      '💡 للفيديوهات على المواقع الكبيرة يُفضل استخدام يوتيوب عبر iframe لتخفيف عبء الخادم.'
    ].join('<br>'),
    exampleCode: `<video controls width="400" poster="cover.jpg" muted>
  <source src="lesson.webm" type="video/webm">
  <source src="lesson.mp4" type="video/mp4">
  <track kind="subtitles" src="ar.vtt" srclang="ar" label="العربية" default>
  متصفحك لا يدعم الفيديو.
</video>

<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  متصفحك لا يدعم الصوت.
</audio>

<iframe src="https://example.com" title="موقع تجريبي" width="400" height="250" loading="lazy"></iframe>

<canvas id="board" width="200" height="100"></canvas>

<svg width="120" height="120" viewBox="0 0 120 120">
  <circle cx="60" cy="60" r="50" fill="gold" stroke="black" stroke-width="3"></circle>
  <text x="60" y="66" text-anchor="middle">HTML</text>
</svg>`,
    starterCode: `<!-- 1) video بـ controls و source و track -->

<!-- 2) audio بـ controls و source -->

<!-- 3) iframe بـ title -->

<!-- 4) canvas بـ id -->

<!-- 5) svg فيه circle -->`,
    solutionCode: `<video controls width="300">
  <source src="a.mp4" type="video/mp4">
  <track kind="subtitles" src="ar.vtt" srclang="ar" label="العربية">
</video>

<audio controls>
  <source src="a.mp3" type="audio/mpeg">
</audio>

<iframe src="https://example.com" title="مثال" width="300" height="200"></iframe>

<canvas id="c" width="200" height="100"></canvas>

<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" fill="tomato"></circle>
</svg>`,
    challengePrompt: 'تحدي الدرس: أضف video بخاصية controls يحتوي source و track، وaudio بخاصية controls يحتوي source، وiframe بـ title و src، وcanvas بـ id، وsvg بداخله circle.',
    validate: function (doc) {
      const v = doc.querySelector('video[controls]');
      if (!v || !v.querySelector('source') || !v.querySelector('track')) return { passed: false, msgAr: 'أضف video بخاصية controls يحتوي source و track.', msgEn: 'Add video with controls, source and track.' };
      const a = doc.querySelector('audio[controls]');
      if (!a || !a.querySelector('source')) return { passed: false, msgAr: 'أضف audio بخاصية controls يحتوي source.', msgEn: 'Add audio with controls and source.' };
      const f = doc.querySelector('iframe[src]');
      if (!f || !(f.getAttribute('title') || '').trim()) return { passed: false, msgAr: 'أضف iframe بـ src و title.', msgEn: 'Add iframe with src and title.' };
      if (!doc.querySelector('canvas[id]')) return { passed: false, msgAr: 'أضف canvas بخاصية id.', msgEn: 'Add canvas with id.' };
      if (!doc.querySelector('svg circle')) return { passed: false, msgAr: 'أضف svg يحتوي circle.', msgEn: 'Add svg with a circle.' };
      return { passed: true, msgAr: 'ممتاز! الوسائط والمحتوى المضمن يعملان بشكل صحيح.', msgEn: 'Media and embedded content verified!' };
    }
  },
  {
    id: 'html-19',
    num: '19',
    title: 'الخصائص العامة والتعليقات والكيانات (id, class, data-*, hidden, comments, entities)',
    duration: '22 min',
    eyebrow: 'HTML 19 · ما يشترك فيه كل وسم',
    lead: 'هناك خصائص تعمل على أي وسم تقريباً، وهناك رموز خاصة تكتبها لعرض حروف يحجزها HTML لنفسه.',
    goal: 'استخدام الخصائص العامة بشكل صحيح، وكتابة التعليقات، وعرض الرموز الخاصة بالكيانات HTML Entities.',
    sectionTitle: 'الخصائص العامة والتعليقات والكيانات',
    explanation: [
      '🌐 الخصائص العامة (Global Attributes) تعمل على كل العناصر:',
      '• id : معرف فريد في الصفحة (لا يتكرر)، للروابط الداخلية و label و JavaScript. • class : اسم أو عدة أسماء مفصولة بمسافة، ويمكن تكرارها لعناصر كثيرة.',
      '⚖️ id مقابل class: id لعنصر واحد فقط بالصفحة، و class لمجموعة عناصر تشترك في نفس التنسيق. ولا تنس أن id يمكن أن يستخدم كرابط (#id).',
      '• style : تنسيق مباشر على العنصر (يفضل الابتعاد عنه واستخدام CSS الخارجي). • title : نص يظهر عند تمرير الماوس.',
      '• lang : لغة العنصر إن اختلفت عن الصفحة. • dir : اتجاه النص rtl أو ltr أو auto.',
      '• hidden : يخفي العنصر ولا يظهر ولا يقرؤه قارئ الشاشة. ⚖️ hidden مقابل display:none في CSS: النتيجة متشابهة، لكن hidden خاصية HTML يمكن التحكم بها من الكود دون تعديل CSS.',
      '• tabindex : ترتيب التنقل بزر Tab. 0 يجعل العنصر قابلاً للتركيز، و -1 قابلاً للتركيز برمجياً فقط. تجنب القيم الموجبة.',
      '• contenteditable="true" : يجعل المحتوى قابلاً للتعديل مباشرة. • draggable : يجعل العنصر قابلاً للسحب. • spellcheck : التدقيق الإملائي.',
      '• data-* : بيانات مخصصة تخزنها بنفسك مثل data-price="50" ثم تقرأها بـ JavaScript.',
      '• aria-label و role : تحسين الوصول لقارئات الشاشة عند الحاجة، وقاعدة ARIA: لو وُجد وسم HTML دلالي بالمعنى المطلوب فاستخدمه ولا تستخدم ARIA.',
      '💬 التعليقات: &lt;!-- نص التعليق --&gt; تظهر في الكود فقط ولا تظهر في الصفحة، وتفيد في الشرح أو في تعطيل جزء من الكود مؤقتاً. لا تكتب فيها أسراراً لأن أي مستخدم يستطيع قراءتها.',
      '🔤 الكيانات (Entities) : لأن &lt; و &gt; محجوزة للوسوم، نعرضها بكيان: &amp;lt; لـ < و &amp;gt; لـ > و &amp;amp; لـ & و &amp;quot; لـ علامة الاقتباس.',
      '• رموز شائعة: &amp;nbsp; مسافة لا تنكسر، &amp;copy; لـ ©، &amp;reg; لـ ®، &amp;euro; لـ €، &amp;hearts; لـ ♥، ويمكنك استخدام الرقم مثل &amp;#169;.',
      '⚖️ المسافة العادية مقابل nbsp: المسافات المتعددة تُدمج في مسافة واحدة، أما nbsp فلا تُدمج ولا يُكسر السطر عندها.'
    ].join('<br>'),
    exampleCode: `<!-- هذا تعليق لن يظهر في الصفحة -->

<p id="intro" class="text highlight" title="مقدمة" data-lesson="19">
  نص بخصائص عامة.
</p>

<p hidden>هذه الفقرة مخفية تماماً</p>

<p contenteditable="true">اضغط هنا لتعديل هذا النص</p>

<p>لعرض وسم h1 اكتب: &lt;h1&gt;</p>
<p>حقوق النشر &copy; 2026 &mdash; جميع الحقوق محفوظة</p>
<p>الأسعار&nbsp;&nbsp;&nbsp;تبدأ من 50 &euro;</p>`,
    starterCode: `<!-- 1) عنصر بـ id و class و title و data-xxx -->

<!-- 2) عنصر hidden -->

<!-- 3) عنصر contenteditable -->

<!-- 4) فقرة تعرض الرمز © وعلامة < ككيان -->`,
    solutionCode: `<!-- تعليق توضيحي -->
<p id="note" class="important" title="تنبيه" data-level="1">فقرة بخصائص عامة.</p>
<p hidden>نص مخفي</p>
<p contenteditable="true">نص قابل للتعديل</p>
<p>&copy; 2026 - الوسم &lt;p&gt; يعني فقرة</p>`,
    challengePrompt: 'تحدي الدرس: أنشئ عنصراً بخصائص id و class و title و data-xxx، وعنصراً بخاصية hidden، وعنصراً بـ contenteditable، وفقرة تعرض الرمز © وعلامة < باستخدام الكيانات.',
    validate: function (doc) {
      const all = Array.from(doc.body.querySelectorAll('*'));
      const full = all.find(function (e) {
        return e.id && e.className && e.hasAttribute('title') && Object.keys(e.dataset || {}).length > 0;
      });
      if (!full) return { passed: false, msgAr: 'أضف عنصراً واحداً يحمل id و class و title و data-xxx معاً.', msgEn: 'Add an element with id, class, title and data-*.' };
      if (!doc.querySelector('[hidden]')) return { passed: false, msgAr: 'أضف عنصراً بخاصية hidden.', msgEn: 'Add an element with hidden.' };
      if (!doc.querySelector('[contenteditable]')) return { passed: false, msgAr: 'أضف عنصراً بخاصية contenteditable.', msgEn: 'Add contenteditable.' };
      const text = doc.body.textContent;
      if (text.indexOf('\u00A9') === -1) return { passed: false, msgAr: 'اعرض الرمز © باستخدام كيان copy.', msgEn: 'Show the copyright symbol via entity.' };
      if (text.indexOf('<') === -1) return { passed: false, msgAr: 'اعرض علامة < باستخدام الكيان lt.', msgEn: 'Show the less-than sign via entity.' };
      return { passed: true, msgAr: 'ممتاز! أتقنت الخصائص العامة والكيانات.', msgEn: 'Global attributes and entities verified!' };
    }
  },
  {
    id: 'html-20',
    num: '20',
    title: 'مشروع ختامي: الوسوم المتبقية والقديمة وبناء صفحة كاملة (template, noscript, script)',
    duration: '35 min',
    eyebrow: 'HTML 20 · من الأجزاء إلى الصفحة الكاملة',
    lead: 'نختم الكورس بالوسوم المتبقية والوسوم القديمة المحظورة، ثم نجمع كل ما تعلمناه في صفحة واحدة متكاملة.',
    goal: 'معرفة template و noscript و slot، وتجنب الوسوم المهجورة، وتطبيق قائمة فحص الجودة على صفحة كاملة.',
    sectionTitle: 'الوسوم المتبقية وقواعد الجودة',
    explanation: [
      '🔹 &lt;noscript&gt; : محتوى بديل يظهر فقط إذا كان JavaScript معطلاً. مثال: رسالة تطلب تفعيله.',
      '🔹 &lt;template&gt; : قالب HTML لا يظهر ولا يُحمَّل محتواه حتى تنسخه بـ JavaScript. يفيد في توليد بطاقات أو صفوف متكررة. و &lt;slot&gt; يعمل مع Web Components كمكان لمحتوى يدخله المستخدم.',
      '🔹 &lt;script&gt; : لـ JavaScript. و defer لتنفيذه بعد بناء الصفحة، و type="module" لاستخدام import.',
      '⚖️ noscript مقابل template: noscript يظهر عند غياب JavaScript، و template عكسه تماماً: لا يُستخدم إلا بوجود JavaScript.',
      '🚫 الوسوم المهجورة (Obsolete) ولا تستخدمها: center و font و big و strike و tt و marquee و blink و frame و frameset و acronym و applet و basefont و dir. وبدائلها: CSS (text-align, font-size, color)، و del بدل strike، و abbr بدل acronym، و ul بدل dir، و iframe بدل frame.',
      '🚫 وخصائص قديمة مثل bgcolor و align و border على table و width على الصفوف: تُستبدل كلها بـ CSS.',
      '✅ قائمة فحص صفحتك: (1) Doctype و lang و dir و charset و viewport. (2) title و description فريدان. (3) h1 واحد وتسلسل عناوين منطقي. (4) كل img لها alt وأبعاد. (5) روابط بنص واضح و rel مع _blank. (6) كل حقل له label. (7) استخدمت الوسوم الدلالية بدل div كلما أمكن. (8) الجداول للبيانات فقط. (9) إغلاق كل الوسوم بشكل صحيح وتداخلها سليم.',
      '🛠️ تحقق من الكود بأداة W3C Markup Validator (validator.w3.org) وبأداة Lighthouse في متصفح Chrome لقياس الوصول و SEO.',
      '🎯 المشروع: صفحة تعريفية كاملة لموقع تعليمي تجمع الهيكل والتنقل والمحتوى والجدول والنموذج والتذييل.'
    ].join('<br>'),
    exampleCode: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>أكاديمية أطلس</title>
</head>
<body>
  <noscript>برجاء تفعيل JavaScript لتجربة أفضل.</noscript>

  <header>
    <h1>أكاديمية أطلس</h1>
    <nav>
      <ul>
        <li><a href="#courses">الكورسات</a></li>
        <li><a href="#contact">تواصل</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section id="courses">
      <h2>الكورسات</h2>
      <img src="html.png" alt="شعار كورس HTML" width="120" height="120">
      <ol>
        <li>HTML</li>
        <li>CSS</li>
      </ol>
      <table border="1">
        <caption>الجدول الزمني</caption>
        <tr><th scope="col">الكورس</th><th scope="col">المدة</th></tr>
        <tr><td>HTML</td><td>20 ساعة</td></tr>
      </table>
    </section>

    <section id="contact">
      <h2>تواصل معنا</h2>
      <form action="/send" method="post">
        <label for="n">الاسم</label>
        <input type="text" id="n" name="name" required>
        <button type="submit">إرسال</button>
      </form>
    </section>
  </main>

  <footer><p>&copy; 2026 أكاديمية أطلس</p></footer>
</body>
</html>`,
    starterCode: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>مشروعي الختامي</title>
</head>
<body>
  <!-- noscript -->
  <!-- header فيه h1 و nav فيه ul بروابط -->
  <!-- main فيه: img بـ alt وقائمة وجدول بـ th ونموذج بـ label -->
  <!-- footer -->
</body>
</html>`,
    solutionCode: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>مشروعي الختامي</title>
</head>
<body>
  <noscript>فعّل JavaScript من فضلك.</noscript>

  <header>
    <h1>موقعي التعليمي</h1>
    <nav>
      <ul>
        <li><a href="#about">من أنا</a></li>
        <li><a href="#contact">تواصل</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section id="about">
      <h2>من أنا</h2>
      <img src="me.jpg" alt="صورتي الشخصية" width="120" height="120">
      <ul>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
      <table border="1">
        <tr><th>المهارة</th><th>المستوى</th></tr>
        <tr><td>HTML</td><td>ممتاز</td></tr>
      </table>
    </section>

    <section id="contact">
      <h2>تواصل معي</h2>
      <form action="/send" method="post">
        <label for="n">الاسم</label>
        <input type="text" id="n" name="name" required>
        <button type="submit">إرسال</button>
      </form>
    </section>
  </main>

  <footer><p>&copy; 2026</p></footer>
</body>
</html>`,
    challengePrompt: 'تحدي الدرس الأخير: ابنِ صفحة كاملة فيها noscript، وheader بداخله h1 واحد وnav بداخله ul بروابط، وmain فيه section على الأقل تحتوي img بـ alt وقائمة (ul أو ol) وجدولاً فيه th ونموذجاً فيه label وinput وbutton، وfooter.',
    validate: function (doc) {
      if (!doc.querySelector('noscript')) return { passed: false, msgAr: 'أضف noscript.', msgEn: 'Add noscript.' };
      if (doc.querySelectorAll('h1').length !== 1) return { passed: false, msgAr: 'يجب أن يوجد h1 واحد فقط.', msgEn: 'Exactly one h1 is needed.' };
      if (!doc.querySelector('header nav ul a')) return { passed: false, msgAr: 'أضف header فيه nav فيه ul فيه روابط a.', msgEn: 'Add header > nav > ul with links.' };
      if (doc.querySelectorAll('main').length !== 1) return { passed: false, msgAr: 'أضف main واحدة فقط.', msgEn: 'Add exactly one main.' };
      if (!doc.querySelector('main section')) return { passed: false, msgAr: 'أضف section داخل main.', msgEn: 'Add a section inside main.' };
      const img = doc.querySelector('main img[alt]');
      if (!img || !(img.getAttribute('alt') || '').trim()) return { passed: false, msgAr: 'أضف img بـ alt غير فارغ داخل main.', msgEn: 'Add an img with alt inside main.' };
      if (!doc.querySelector('main ul li, main ol li')) return { passed: false, msgAr: 'أضف قائمة ul أو ol داخل main.', msgEn: 'Add a list inside main.' };
      if (!doc.querySelector('main table th')) return { passed: false, msgAr: 'أضف جدولاً فيه th داخل main.', msgEn: 'Add a table with th inside main.' };
      const f = doc.querySelector('main form');
      if (!f || !f.querySelector('label') || !f.querySelector('input') || !f.querySelector('button')) return { passed: false, msgAr: 'أضف form فيها label و input و button داخل main.', msgEn: 'Add form with label, input and button.' };
      if (!doc.querySelector('footer')) return { passed: false, msgAr: 'أضف footer.', msgEn: 'Add footer.' };
      return { passed: true, msgAr: 'مبروك! أنهيت كورس HTML بصفحة كاملة تطابق المعايير الاحترافية.', msgEn: 'Congratulations! Final project verified.' };
    }
  }
]
    },
    css: {
      id: 'css',
      title: 'CSS Foundations',
      subtitle: 'Make it beautiful',
      tag: 'CSS FOUNDATIONS',
      tagClass: 'tag-css',
      badgeText: '✳',
      badgeClass: 'css-badge',
      lessons: [
        {
          id: 'css-1',
          num: '01',
          title: 'Colors & typography',
          duration: '15 min',
          eyebrow: 'CSS 01 · STYLING BASICS',
          lead: 'Bring color, custom fonts, and clean alignment to your HTML elements using <style> rules.',
          goal: 'Write a CSS rule inside <style> that sets color and font-size on an h1 or p element.',
          sectionTitle: 'Selectors, Properties & Values',
          explanation: 'CSS rules consist of a selector (like h1) followed by curly braces { property: value; }. بالمصري: بنختار العنصر اللي عايزين نلونه، ونفتح قوسين مجموعة { } ونكتب الخاصية وبعدها نقطتين فوق بعض : وفي الآخر فصلة منقوطة ;.',
          exampleCode: '<style>\n  h1 {\n    color: #6c5ce7;\n    font-size: 28px;\n  }\n  p {\n    color: #555;\n  }\n</style>\n<h1>تصميم عصري بالـ CSS</h1>\n<p>الألوان بتدي روح للصفحة!</p>',
          starterCode: '<style>\n  h1 {\n    color: #6c5ce7;\n    font-size: 28px;\n  }\n</style>\n<h1>أول تصميم بالـ CSS</h1>\n<p>جرب تغير اللون وحجم الخط واضغط Run!</p>',
          solutionCode: '<style>\n  h1 {\n    color: #6c5ce7;\n    font-size: 28px;\n  }\n</style>\n<h1>أول تصميم بالـ CSS</h1>\n<p>جرب تغير اللون وحجم الخط واضغط Run!</p>',
          challengePrompt: 'تحدي الدرس: استخدم وسم <style> لتغيير لون (color) العنصر h1 وعرضه في المعاينة.',
          validate: function (doc, raw) {
            const hasStyle = /color\s*:/i.test(raw);
            const h1 = doc.querySelector('h1');
            if (!hasStyle || !h1) return { passed: false, msgAr: 'تأكد من وجود وسم <style> بداخله خاصية color: ...; وعنصر <h1>.', msgEn: 'Include a <style> block with a color property and an <h1> tag.' };
            return { passed: true, msgAr: 'روعة! الألوان اشتغلت والكود منظم.', msgEn: 'Great job styling with CSS colors!' };
          }
        },
        {
          id: 'css-2',
          num: '02',
          title: 'The Box Model',
          duration: '18 min',
          eyebrow: 'CSS 02 · SPACING & BORDERS',
          lead: 'Every HTML element is a rectangular box controlled by padding, border, margin, and border-radius.',
          goal: 'Style a .card class with padding, border-radius, and background.',
          sectionTitle: 'Padding vs Margin',
          explanation: 'Padding is the inner space between content and the border. Margin is the outer space pushing other elements away. بالمصري: الـ padding هو الوسع من جوه العلبة، لكن الـ margin هو المسافة اللي بين العلبة واللي جنبها.',
          exampleCode: '<style>\n  .card {\n    background: #f0edff;\n    padding: 20px;\n    border-radius: 12px;\n    border: 2px solid #6c5ce7;\n  }\n</style>\n<div class="card">\n  <h3>بطاقة أنيقة</h3>\n  <p>مصممة بنموذج الصندوق Box Model.</p>\n</div>',
          starterCode: '<style>\n  .card {\n    background: #f0edff;\n    padding: 20px;\n    border-radius: 12px;\n  }\n</style>\n<div class="card">\n  <h3>بطاقة منتج</h3>\n  <p>مسافات داخلية مريحة للعين.</p>\n</div>',
          solutionCode: '<style>\n  .card {\n    background: #f0edff;\n    padding: 20px;\n    border-radius: 12px;\n  }\n</style>\n<div class="card">\n  <h3>بطاقة منتج</h3>\n  <p>مسافات داخلية مريحة للعين.</p>\n</div>',
          challengePrompt: 'تحدي الدرس: أنشئ عنصراً بكلاس card وطبق عليه خاصيتي padding و border-radius في الـ CSS.',
          validate: function (doc, raw) {
            const card = doc.querySelector('.card');
            const hasPadding = /padding\s*:/i.test(raw);
            if (!card || !hasPadding) return { passed: false, msgAr: 'تأكد من وجود عنصر class="card" وخاصية padding في الـ CSS.', msgEn: 'Create a .card element and style it with padding.' };
            return { passed: true, msgAr: 'ممتاز! فهمت الـ Box Model صح.', msgEn: 'Box model mastered!' };
          }
        },
        {
          id: 'css-3',
          num: '03',
          title: 'Flexbox layouts',
          duration: '20 min',
          eyebrow: 'CSS 03 · MODERN ALIGNMENT',
          lead: 'Align items side-by-side effortlessly using display: flex, justify-content, and gap.',
          goal: 'Use display: flex to arrange items horizontally.',
          sectionTitle: 'One-Dimensional Layouts with Flexbox',
          explanation: 'Adding display: flex to a parent container turns its direct children into flexible items arranged in a row by default. Use gap to add space between them!',
          exampleCode: '<style>\n  .row {\n    display: flex;\n    gap: 12px;\n  }\n  .box {\n    background: #6c5ce7;\n    color: white;\n    padding: 16px;\n    border-radius: 8px;\n  }\n</style>\n<div class="row">\n  <div class="box">1</div>\n  <div class="box">2</div>\n  <div class="box">3</div>\n</div>',
          starterCode: '<style>\n  .row {\n    display: flex;\n    gap: 12px;\n  }\n  .box {\n    background: #18a878;\n    color: white;\n    padding: 15px;\n    border-radius: 8px;\n  }\n</style>\n<div class="row">\n  <div class="box">عنصر 1</div>\n  <div class="box">عنصر 2</div>\n</div>',
          solutionCode: '<style>\n  .row {\n    display: flex;\n    gap: 12px;\n  }\n  .box {\n    background: #18a878;\n    color: white;\n    padding: 15px;\n    border-radius: 8px;\n  }\n</style>\n<div class="row">\n  <div class="box">عنصر 1</div>\n  <div class="box">عنصر 2</div>\n</div>',
          challengePrompt: 'تحدي الدرس: استخدم display: flex لترتيب العناصر بجانب بعضها أفقياً.',
          validate: function (doc, raw) {
            if (!/display\s*:\s*flex/i.test(raw)) return { passed: false, msgAr: 'استخدم خاصية display: flex في كود الـ CSS.', msgEn: 'Add display: flex in your CSS.' };
            return { passed: true, msgAr: 'عاش! الـ Flexbox هو عمود فقري لأي تصميم حديث.', msgEn: 'Flexbox layout working smoothly!' };
          }
        },
        {
          id: 'css-4',
          num: '04',
          title: 'CSS Grid & cards',
          duration: '20 min',
          eyebrow: 'CSS 04 · 2D GRIDS',
          lead: 'Build responsive multi-column card grids with display: grid and grid-template-columns.',
          goal: 'Create a 2-column grid layout using display: grid.',
          sectionTitle: 'Two-Dimensional Layouts with CSS Grid',
          explanation: 'While Flexbox is great for a single row or column, CSS Grid excels at two-dimensional rows and columns.',
          exampleCode: '<style>\n  .grid {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 12px;\n  }\n  .item { background: #eee8ff; padding: 14px; border-radius: 8px; }\n</style>\n<div class="grid">\n  <div class="item">كارت 1</div>\n  <div class="item">كارت 2</div>\n</div>',
          starterCode: '<style>\n  .grid {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 12px;\n  }\n  .item { background: #eee8ff; padding: 14px; border-radius: 8px; }\n</style>\n<div class="grid">\n  <div class="item">كارت 1</div>\n  <div class="item">كارت 2</div>\n</div>',
          solutionCode: '<style>\n  .grid {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 12px;\n  }\n  .item { background: #eee8ff; padding: 14px; border-radius: 8px; }\n</style>\n<div class="grid">\n  <div class="item">كارت 1</div>\n  <div class="item">كارت 2</div>\n</div>',
          challengePrompt: 'تحدي الدرس: استخدم display: grid و grid-template-columns لتصميم شبكة من عمودين.',
          validate: function (doc, raw) {
            if (!/display\s*:\s*grid/i.test(raw)) return { passed: false, msgAr: 'استخدم display: grid في الـ CSS.', msgEn: 'Use display: grid in your CSS.' };
            return { passed: true, msgAr: 'ممتاز! الشبكة اتقسمت بنجاح.', msgEn: 'Grid layout complete!' };
          }
        },
        {
          id: 'css-5',
          num: '05',
          title: 'Hover & transitions',
          duration: '15 min',
          eyebrow: 'CSS 05 · MICRO-INTERACTIONS',
          lead: 'Make buttons and cards feel alive using :hover pseudo-classes and smooth CSS transitions.',
          goal: 'Add a :hover rule and transition property to a button.',
          sectionTitle: 'Interactive States with :hover',
          explanation: 'The :hover selector triggers when the user points their mouse at an element. Pairing it with transition: 0.2s ease makes color and transform changes smooth instead of abrupt.',
          exampleCode: '<style>\n  .btn {\n    background: #6c5ce7;\n    color: white;\n    padding: 10px 18px;\n    border: 0;\n    border-radius: 8px;\n    transition: 0.2s;\n  }\n  .btn:hover {\n    background: #18a878;\n  }\n</style>\n<button class="btn">مرر الماوس هنا</button>',
          starterCode: '<style>\n  .btn {\n    background: #6c5ce7;\n    color: white;\n    padding: 10px 18px;\n    border: 0;\n    border-radius: 8px;\n    transition: 0.2s;\n  }\n  .btn:hover {\n    background: #18a878;\n  }\n</style>\n<button class="btn">مرر الماوس عليا</button>',
          solutionCode: '<style>\n  .btn {\n    background: #6c5ce7;\n    color: white;\n    padding: 10px 18px;\n    border: 0;\n    border-radius: 8px;\n    transition: 0.2s;\n  }\n  .btn:hover {\n    background: #18a878;\n  }\n</style>\n<button class="btn">مرر الماوس عليا</button>',
          challengePrompt: 'تحدي الدرس: استخدم :hover لتغيير شكل الزر عند تمرير الماوس عليه.',
          validate: function (doc, raw) {
            if (!/:hover/i.test(raw)) return { passed: false, msgAr: 'أضف تأثير :hover في الـ CSS.', msgEn: 'Include a :hover selector in your CSS.' };
            return { passed: true, msgAr: 'هايل! التفاعل البصري شغال بنعومة.', msgEn: 'Smooth hover state implemented!' };
          }
        },
        {
          id: 'css-6',
          num: '06',
          title: 'Responsive media queries',
          duration: '22 min',
          eyebrow: 'CSS 06 · MOBILE FIRST',
          lead: 'Adapt your layouts automatically for mobile phones, tablets, and desktops with @media queries.',
          goal: 'Include a @media (max-width: ...) rule in your stylesheet.',
          sectionTitle: 'Responsive Design with @media',
          explanation: 'Media queries apply CSS rules only when the screen size matches a condition, such as @media (max-width: 600px), ensuring your website looks great on phones and large monitors alike.',
          exampleCode: '<style>\n  .banner { background: #6c5ce7; color: #fff; padding: 20px; border-radius: 10px; }\n  @media (max-width: 600px) {\n    .banner { background: #18a878; }\n  }\n</style>\n<div class="banner">بانر متجاوب مع الشاشات</div>',
          starterCode: '<style>\n  .banner { background: #6c5ce7; color: #fff; padding: 20px; border-radius: 10px; }\n  @media (max-width: 600px) {\n    .banner { padding: 12px; }\n  }\n</style>\n<div class="banner">تصميم متجاوب</div>',
          solutionCode: '<style>\n  .banner { background: #6c5ce7; color: #fff; padding: 20px; border-radius: 10px; }\n  @media (max-width: 600px) {\n    .banner { padding: 12px; }\n  }\n</style>\n<div class="banner">تصميم متجاوب</div>',
          challengePrompt: 'تحدي الدرس: أضف قاعدة @media في كود الـ CSS لدعم الشاشات الصغيرة.',
          validate: function (doc, raw) {
            if (!/@media/i.test(raw)) return { passed: false, msgAr: 'استخدم قاعدة @media في الـ CSS.', msgEn: 'Add a @media query rule.' };
            return { passed: true, msgAr: 'ممتاز! كدا خلصت أساسيات الـ CSS بالكامل.', msgEn: 'CSS Foundations completed!' };
          }
        }
      ]
    },
    js: {
      id: 'js',
      title: 'JavaScript Basics',
      subtitle: 'Make it interactive',
      tag: 'JAVASCRIPT BASICS',
      tagClass: 'tag-js',
      badgeText: 'JS',
      badgeClass: 'js-badge',
      lessons: [
        {
          id: 'js-1',
          num: '01',
          title: 'Variables & let / const',
          duration: '15 min',
          eyebrow: 'JS 01 · STORING DATA',
          lead: 'Store numbers, strings, and booleans in memory using const and let, and display them in the page.',
          goal: 'Declare a variable with const or let and output it into the page.',
          sectionTitle: 'Variables in JavaScript',
          explanation: 'Use const for values that will not be reassigned, and let for values that change (like a counter score). بالمصري: المتغير هو درج بنشيل جواه قيمة ونسميه باسم واضح علشان ننده عليه في أي وقت.',
          exampleCode: '<h2 id="greeting"></h2>\n<script>\n  const userName = "يا بشمهندس أحمد";\n  document.getElementById("greeting").textContent = "أهلاً بيك " + userName;\n</script>',
          starterCode: '<h2 id="greeting">...</h2>\n<script>\n  const studentName = "مطور المستقبل";\n  document.getElementById("greeting").textContent = "مرحباً " + studentName;\n</script>',
          solutionCode: '<h2 id="greeting">...</h2>\n<script>\n  const studentName = "مطور المستقبل";\n  document.getElementById("greeting").textContent = "مرحباً " + studentName;\n</script>',
          challengePrompt: 'تحدي الدرس: عرف متغيراً باستخدام const أو let واعرض قيمته داخل عنصر في الصفحة عبر JavaScript.',
          validate: function (doc, raw) {
            if (!/\b(const|let)\s+\w+/i.test(raw)) return { passed: false, msgAr: 'استخدم const أو let لتعريف متغير داخل وسم <script>.', msgEn: 'Declare a variable with const or let.' };
            return { passed: true, msgAr: 'عاش! المتغير اتعرف واشتغل في الجافاسكريبت.', msgEn: 'Variable declared and rendered!' };
          }
        },
        {
          id: 'js-2',
          num: '02',
          title: 'Functions & logic',
          duration: '18 min',
          eyebrow: 'JS 02 · REUSABLE BLOCKS',
          lead: 'Group reusable actions inside functions and make decisions with if / else statements.',
          goal: 'Write a JavaScript function and call it.',
          sectionTitle: 'Writing Functions',
          explanation: 'A function takes inputs (parameters), processes them, and returns a result or updates the UI.',
          exampleCode: '<p id="result"></p>\n<script>\n  function calculateTotal(price, tax) {\n    return price + tax;\n  }\n  document.getElementById("result").textContent = "الإجمالي: " + calculateTotal(100, 14);\n</script>',
          starterCode: '<p id="result"></p>\n<script>\n  function greet(name) {\n    return "أهلاً يا " + name;\n  }\n  document.getElementById("result").textContent = greet("بطل");\n</script>',
          solutionCode: '<p id="result"></p>\n<script>\n  function greet(name) {\n    return "أهلاً يا " + name;\n  }\n  document.getElementById("result").textContent = greet("بطل");\n</script>',
          challengePrompt: 'تحدي الدرس: اكتب دالة برمجية باستخدام كلمة function واستدعها.',
          validate: function (doc, raw) {
            if (!/\bfunction\s+\w+/i.test(raw)) return { passed: false, msgAr: 'اكتب دالة باستخدام الكلمة المفتاحية function.', msgEn: 'Define a function using the function keyword.' };
            return { passed: true, msgAr: 'ممتاز! الدالة مكتوبة بشكل سليم.', msgEn: 'Function defined and executed!' };
          }
        },
        {
          id: 'js-3',
          num: '03',
          title: 'DOM manipulation',
          duration: '20 min',
          eyebrow: 'JS 03 · CONTROLLING THE PAGE',
          lead: 'Select HTML elements with document.querySelector and dynamically update their text and styles.',
          goal: 'Use document.querySelector or getElementById to update an element.',
          sectionTitle: 'The Document Object Model (DOM)',
          explanation: 'JavaScript talks to HTML through the DOM object (document). You can select any element and change its textContent, style, or classes on the fly.',
          exampleCode: '<h3 id="status">جاري التحميل...</h3>\n<script>\n  const el = document.querySelector("#status");\n  el.textContent = "✅ تم الاتصال بنجاح!";\n  el.style.color = "#18a878";\n</script>',
          starterCode: '<h3 id="status">قيد الانتظار...</h3>\n<script>\n  const el = document.querySelector("#status");\n  el.textContent = "✅ جاهز للعمل!";\n</script>',
          solutionCode: '<h3 id="status">قيد الانتظار...</h3>\n<script>\n  const el = document.querySelector("#status");\n  el.textContent = "✅ جاهز للعمل!";\n</script>',
          challengePrompt: 'تحدي الدرس: استخدم querySelector أو getElementById لتغيير نص عنصر في الصفحة.',
          validate: function (doc, raw) {
            if (!/(querySelector|getElementById)/i.test(raw)) return { passed: false, msgAr: 'استخدم document.querySelector أو document.getElementById.', msgEn: 'Use document.querySelector or getElementById.' };
            return { passed: true, msgAr: 'تحكم رائع في عناصر الـ DOM!', msgEn: 'DOM manipulation check passed!' };
          }
        },
        {
          id: 'js-4',
          num: '04',
          title: 'Events & click listeners',
          duration: '20 min',
          eyebrow: 'JS 04 · USER INTERACTION',
          lead: 'Respond to user clicks and keyboard input in real time using addEventListener.',
          goal: 'Attach a click event listener to a button.',
          sectionTitle: 'Handling Click Events',
          explanation: 'Use button.addEventListener("click", () => { ... }) to run code every time the user clicks a button.',
          exampleCode: '<button id="btn">اضغط هنا (0)</button>\n<script>\n  let count = 0;\n  const btn = document.getElementById("btn");\n  btn.addEventListener("click", () => {\n    count++;\n    btn.textContent = "اضغط هنا (" + count + ")";\n  });\n</script>',
          starterCode: '<button id="btn">اضغط عليا</button>\n<p id="msg"></p>\n<script>\n  const btn = document.getElementById("btn");\n  btn.addEventListener("click", function() {\n    document.getElementById("msg").textContent = "تم الضغط بنجاح!";\n  });\n</script>',
          solutionCode: '<button id="btn">اضغط عليا</button>\n<p id="msg"></p>\n<script>\n  const btn = document.getElementById("btn");\n  btn.addEventListener("click", function() {\n    document.getElementById("msg").textContent = "تم الضغط بنجاح!";\n  });\n</script>',
          challengePrompt: 'تحدي الدرس: اربط زراً بحدث النقر باستخدام addEventListener("click", ...).',
          validate: function (doc, raw) {
            if (!/addEventListener\s*\(\s*['"]click['"]/i.test(raw)) return { passed: false, msgAr: 'استخدم addEventListener("click", ...) في الكود.', msgEn: 'Use addEventListener("click", ...).' };
            return { passed: true, msgAr: 'ممتاز! الزرار بقى تفاعلي وشغال.', msgEn: 'Click event listener verified!' };
          }
        },
        {
          id: 'js-5',
          num: '05',
          title: 'Arrays & loops',
          duration: '20 min',
          eyebrow: 'JS 05 · LISTS OF DATA',
          lead: 'Store lists of items in arrays and render them dynamically using forEach or map.',
          goal: 'Create an array and loop through its items.',
          sectionTitle: 'Working with Arrays',
          explanation: 'Arrays hold ordered collections of items like ["HTML", "CSS", "JS"]. You can iterate over every item using array.forEach().',
          exampleCode: '<ul id="list"></ul>\n<script>\n  const tracks = ["HTML", "CSS", "JavaScript"];\n  const ul = document.getElementById("list");\n  tracks.forEach(item => {\n    ul.innerHTML += "<li>" + item + "</li>";\n  });\n</script>',
          starterCode: '<ul id="list"></ul>\n<script>\n  const skills = ["HTML5", "CSS3", "JavaScript"];\n  const ul = document.getElementById("list");\n  skills.forEach(function(s) {\n    ul.innerHTML += "<li>" + s + "</li>";\n  });\n</script>',
          solutionCode: '<ul id="list"></ul>\n<script>\n  const skills = ["HTML5", "CSS3", "JavaScript"];\n  const ul = document.getElementById("list");\n  skills.forEach(function(s) {\n    ul.innerHTML += "<li>" + s + "</li>";\n  });\n</script>',
          challengePrompt: 'تحدي الدرس: أنشئ مصفوفة Array واستخدم forEach أو حلقة تكرار لعرض عناصرها.',
          validate: function (doc, raw) {
            if (!/\[.*\]/s.test(raw) || !/(forEach|for\s*\(|map)/i.test(raw)) return { passed: false, msgAr: 'أنشئ مصفوفة [...] واستخدم forEach أو for لعرضها.', msgEn: 'Create an array and loop over it with forEach or for.' };
            return { passed: true, msgAr: 'رائع! عرضت عناصر المصفوفة ديناميكياً.', msgEn: 'Array iteration succeeded!' };
          }
        },
        {
          id: 'js-6',
          num: '06',
          title: 'Build a counter app',
          duration: '25 min',
          eyebrow: 'JS 06 · INTERACTIVE MINI APP',
          lead: 'Combine variables, DOM selection, and event listeners to build a complete interactive counter.',
          goal: 'Create increment and decrement logic with buttons and a display element.',
          sectionTitle: 'Interactive State Management',
          explanation: 'Every interactive web app follows the same pattern: keep state in variables, listen to user events, update the state, and re-render the DOM.',
          exampleCode: '<h2 id="val">0</h2>\n<button id="inc">+ زيادة</button>\n<script>\n  let n = 0;\n  document.getElementById("inc").addEventListener("click", () => {\n    n++;\n    document.getElementById("val").textContent = n;\n  });\n</script>',
          starterCode: '<h2 id="val">0</h2>\n<button id="inc">+ زيادة</button>\n<script>\n  let n = 0;\n  document.getElementById("inc").addEventListener("click", () => {\n    n++;\n    document.getElementById("val").textContent = n;\n  });\n</script>',
          solutionCode: '<h2 id="val">0</h2>\n<button id="inc">+ زيادة</button>\n<script>\n  let n = 0;\n  document.getElementById("inc").addEventListener("click", () => {\n    n++;\n    document.getElementById("val").textContent = n;\n  });\n</script>',
          challengePrompt: 'تحدي الدرس: ابنِ عداداً تفاعلياً يزيد عند الضغط على الزر.',
          validate: function (doc, raw) {
            if (!doc.querySelector('button') || !/addEventListener/i.test(raw)) return { passed: false, msgAr: 'تأكد من وجود زر وربطه بـ addEventListener.', msgEn: 'Include a button and an event listener.' };
            return { passed: true, msgAr: 'ألف مبروك! خلصت مسار الجافاسكريبت الأساسي بنجاح!', msgEn: 'JavaScript Basics completed!' };
          }
        }
      ]
    },
    python: {
      id: 'python',
      title: 'Python Starter',
      subtitle: 'Think like a developer',
      tag: 'PYTHON STARTER',
      tagClass: 'tag-soft',
      badgeText: 'Py',
      badgeClass: 'py-badge',
      lessons: [
        {
          id: 'py-1',
          num: '01',
          title: 'Algorithmic thinking & print()',
          duration: '15 min',
          eyebrow: 'PYTHON 01 · CLEAN SYNTAX',
          lead: 'Understand how Python syntax compares to JavaScript and how print() outputs messages.',
          goal: 'Write a clean Python print("...") statement in the interactive simulator.',
          sectionTitle: 'Python Syntax Fundamentals',
          explanation: 'Python uses clean, readable English-like syntax without curly braces or semicolons. While browsers natively execute HTML, CSS, and JS, our built-in educational Python runner lets you test basic Python print() and variable statements right here!',
          exampleCode: '# Python Starter Example\nname = "Eng. Ahmed"\nprint("Welcome to Python,", name)',
          starterCode: '# اكتب كود بايثون هنا وجرب دالة print\nmessage = "Hello from Python!"\nprint(message)',
          solutionCode: 'message = "Hello from Python!"\nprint(message)',
          challengePrompt: 'تحدي الدرس: استخدم دالة print(...) لطباعة رسالة ترحيبية بلغة Python.',
          validate: function (doc, raw) {
            if (!/print\s*\(.+\)/i.test(raw)) return { passed: false, msgAr: 'استخدم دالة print("...") لطباعة نص في بايثون.', msgEn: 'Use print("...") to output text.' };
            return { passed: true, msgAr: 'ممتاز! دالة الطباعة في بايثون شغالة تمام.', msgEn: 'Python print statement verified!' };
          }
        },
        {
          id: 'py-2',
          num: '02',
          title: 'Variables & calculations',
          duration: '18 min',
          eyebrow: 'PYTHON 02 · DATA & MATH',
          lead: 'Perform calculations and store results in Python variables.',
          goal: 'Create two variables, add them together, and print() the result.',
          sectionTitle: 'Math & Variables in Python',
          explanation: 'In Python, you declare variables simply by writing variable_name = value without needing const or let.',
          exampleCode: 'students_lec1 = 267\nstudents_lec2 = 173\ntotal = students_lec1 + students_lec2\nprint("Total Roster:", total)',
          starterCode: 'x = 25\ny = 75\ntotal = x + y\nprint("Total:", total)',
          solutionCode: 'x = 25\ny = 75\ntotal = x + y\nprint("Total:", total)',
          challengePrompt: 'تحدي الدرس: اجمع رقمين في متغير واطبع الناتج باستخدام print().',
          validate: function (doc, raw) {
            if (!/=/i.test(raw) || !/print\s*\(/i.test(raw)) return { passed: false, msgAr: 'عرف متغيرين واجمعهم واطبع الناتج بـ print().', msgEn: 'Assign variables and print the result.' };
            return { passed: true, msgAr: 'عاش يا قدوة! خلصت مقدمة البايثون بنجاح.', msgEn: 'Python Starter track completed!' };
          }
        },
        {
          id: 'py-3',
          num: '03',
          title: 'Conditions (if / else)',
          duration: '18 min',
          eyebrow: 'PYTHON 03 · DECISION MAKING',
          lead: 'Use indentation and colons (:) to write clean conditional logic in Python.',
          goal: 'Write an if statement with a colon (:) and print the result.',
          sectionTitle: 'Indentation in Python',
          explanation: 'Python uses indentation (spaces at the start of a line) instead of { } braces to define code blocks inside if, for, and def statements.',
          exampleCode: 'score = 95\nif score >= 50:\n  print("Passed Successfully!")\nelse:\n  print("Try again")',
          starterCode: 'score = 90\nif score >= 50:\n  print("ناجح بتفوق!")',
          solutionCode: 'score = 90\nif score >= 50:\n  print("ناجح بتفوق!")',
          challengePrompt: 'تحدي الدرس: اكتب جملة شرطية if متبوعة بنقطتين : واطبع النتيجة بـ print().',
          validate: function (doc, raw) {
            if (!/\bif\s+.+:/i.test(raw) || !/print\s*\(/i.test(raw)) return { passed: false, msgAr: 'اكتب شرط if ينتهي بنقطتين : وبداخله print().', msgEn: 'Write an if condition ending with : and a print() call.' };
            return { passed: true, msgAr: 'ممتاز! الشرط في بايثون مكتوب صح.', msgEn: 'Python conditional logic verified!' };
          }
        },
        {
          id: 'py-4',
          num: '04',
          title: 'Python functions (def)',
          duration: '20 min',
          eyebrow: 'PYTHON 04 · MODULAR CODE',
          lead: 'Define reusable Python functions using the def keyword.',
          goal: 'Define a function with def and call print().',
          sectionTitle: 'Functions with def',
          explanation: 'In Python, functions start with the keyword def followed by the function name, parentheses (), and a colon (:).',
          exampleCode: 'def welcome_student(name):\n  print("Welcome,", name)\n\nwelcome_student("Ahmed")',
          starterCode: 'def greet_user():\n  print("أهلاً بك في كود مصر!")\n\ngreet_user()',
          solutionCode: 'def greet_user():\n  print("أهلاً بك في كود مصر!")\n\ngreet_user()',
          challengePrompt: 'تحدي الدرس: عرف دالة باستخدام def واستخدم بداخلها print().',
          validate: function (doc, raw) {
            if (!/\bdef\s+\w+\s*\(/i.test(raw) || !/print\s*\(/i.test(raw)) return { passed: false, msgAr: 'استخدم الكلمة المفتاحية def لتعريف دالة في بايثون.', msgEn: 'Define a function using def and call print().' };
            return { passed: true, msgAr: 'ألف مبروك! أتممت الـ 24 درساً بالكامل على المنصة!', msgEn: 'All 24 lessons completed!' };
          }
        }
      ]
    }
  };

  /* ==========================================================================
   * 3. REAL-WORLD MINI PROJECTS TEMPLATES (FOR #projects-view & PLAYGROUND)
   * ========================================================================== */
  const PROJECT_TEMPLATES = {
    profile: {
      title: 'Personal Profile Page',
      html: `<div class="profile-card">
  <div class="avatar-circle">AH</div>
  <h1>Eng. Ahmed Hosny</h1>
  <p class="role">Full-Stack Engineer & Academic Systems Architect</p>
  <p class="bio">Building offline-first educational platforms, Firebase cloud architectures, and interactive developer tools.</p>
  <div class="skills-list">
    <span>HTML5</span>
    <span>CSS3</span>
    <span>JavaScript</span>
    <span>Firebase</span>
  </div>
  <div class="actions">
    <button id="contact-btn">Contact Me ✦</button>
    <a href="https://github.com" target="_blank" class="link-btn">GitHub ↗</a>
  </div>
  <p id="status-msg"></p>
</div>`,
      css: `body {
  font-family: system-ui, -apple-system, sans-serif;
  background: #f5f6fb;
  display: grid;
  place-items: center;
  min-height: 90vh;
  margin: 0;
}
.profile-card {
  background: #ffffff;
  border: 1px solid #e9ebf3;
  border-radius: 18px;
  padding: 28px;
  max-width: 380px;
  text-align: center;
  box-shadow: 0 12px 30px rgba(34, 35, 74, 0.08);
}
.avatar-circle {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #6c5ce7;
  color: #fff;
  font-weight: 800;
  font-size: 20px;
  display: grid;
  place-items: center;
  margin: 0 auto 14px;
}
h1 {
  margin: 0 0 6px;
  font-size: 22px;
  color: #171a2b;
}
.role {
  color: #6c5ce7;
  font-weight: 700;
  font-size: 13px;
  margin: 0 0 12px;
}
.bio {
  color: #6f738a;
  font-size: 13px;
  line-height: 1.6;
}
.skills-list {
  display: flex;
  gap: 6px;
  justify-content: center;
  flex-wrap: wrap;
  margin: 16px 0;
}
.skills-list span {
  background: #f0edff;
  color: #6c5ce7;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 20px;
}
.actions {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 18px;
}
button, .link-btn {
  background: #6c5ce7;
  color: #fff;
  border: 0;
  border-radius: 10px;
  padding: 10px 16px;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  font-size: 13px;
}
.link-btn {
  background: #f0edff;
  color: #6c5ce7;
}
#status-msg {
  color: #18a878;
  font-weight: 700;
  font-size: 13px;
  margin-top: 12px;
}`,
      js: `const btn = document.getElementById("contact-btn");
const msg = document.getElementById("status-msg");

btn.addEventListener("click", () => {
  msg.textContent = "✓ Thanks for reaching out! Message sent.";
  console.log("Profile contact button clicked!");
});`
    },
    counter: {
      title: 'Interactive Counter App',
      html: `<div class="counter-box">
  <span class="badge">INTERACTIVE COUNTER</span>
  <h1 id="count-display">0</h1>
  <div class="btn-row">
    <button id="dec-btn">− Decrease</button>
    <button id="reset-btn">Reset</button>
    <button id="inc-btn">+ Increase</button>
  </div>
</div>`,
      css: `body {
  font-family: system-ui, sans-serif;
  background: #fff9e6;
  display: grid;
  place-items: center;
  min-height: 90vh;
  margin: 0;
}
.counter-box {
  background: #fff;
  border: 2px solid #f2d98d;
  border-radius: 20px;
  padding: 32px;
  text-align: center;
  box-shadow: 0 12px 30px rgba(0,0,0,0.06);
}
.badge {
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.5px;
  color: #b58a09;
}
#count-display {
  font-size: 64px;
  margin: 16px 0 24px;
  color: #171a2b;
}
.btn-row {
  display: flex;
  gap: 10px;
}
button {
  padding: 10px 16px;
  border-radius: 10px;
  border: 1px solid #e0d4a8;
  background: #fff;
  font-weight: 700;
  cursor: pointer;
}
#inc-btn {
  background: #6c5ce7;
  color: #fff;
  border-color: #6c5ce7;
}`,
      js: `let count = 0;
const display = document.getElementById("count-display");

function updateUI() {
  display.textContent = count;
  display.style.color = count > 0 ? "#18a878" : (count < 0 ? "#d54f59" : "#171a2b");
}

document.getElementById("inc-btn").addEventListener("click", () => {
  count++;
  updateUI();
  console.log("Counter incremented to:", count);
});

document.getElementById("dec-btn").addEventListener("click", () => {
  count--;
  updateUI();
  console.log("Counter decremented to:", count);
});

document.getElementById("reset-btn").addEventListener("click", () => {
  count = 0;
  updateUI();
  console.log("Counter reset to 0");
});`
    },
    product: {
      title: 'Modern Product Card',
      html: `<article class="product-card">
  <div class="product-visual">✦ Focus Bottle</div>
  <div class="product-info">
    <div class="top-row">
      <span class="category">LIFESTYLE</span>
      <span class="price">$28.00</span>
    </div>
    <h2>Insulated Focus Bottle</h2>
    <p>Keeps your coffee hot or water ice-cold during long coding sessions.</p>
    <button id="buy-btn">Add to Cart 🛒</button>
  </div>
</article>`,
      css: `body {
  font-family: system-ui, sans-serif;
  background: #e9f6f0;
  display: grid;
  place-items: center;
  min-height: 90vh;
  margin: 0;
}
.product-card {
  background: #fff;
  border-radius: 18px;
  overflow: hidden;
  width: 320px;
  box-shadow: 0 14px 34px rgba(24, 168, 120, 0.14);
}
.product-visual {
  height: 160px;
  background: linear-gradient(135deg, #299c79, #18a878);
  color: #fff;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 800;
}
.product-info {
  padding: 20px;
}
.top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  font-weight: 800;
}
.category { color: #18a878; }
.price { font-size: 16px; color: #171a2b; }
h2 { margin: 8px 0; font-size: 18px; }
p { color: #6f738a; font-size: 13px; line-height: 1.5; }
button {
  width: 100%;
  margin-top: 12px;
  padding: 12px;
  background: #18a878;
  color: #fff;
  border: 0;
  border-radius: 10px;
  font-weight: 800;
  cursor: pointer;
}`,
      js: `const buyBtn = document.getElementById("buy-btn");
buyBtn.addEventListener("click", () => {
  buyBtn.textContent = "✓ Added to Cart!";
  buyBtn.style.background = "#6c5ce7";
  console.log("Product added to shopping cart!");
});`
    }
  };

  const DEFAULT_PLAYGROUND_FILES = {
    html: `<!DOCTYPE html>
<html>
<body>
  <div class="welcome-box">
    <h1>Hello, CodeMasr! 👋</h1>
    <p>Edit this HTML, CSS, or JS and click <strong>Run code</strong> to test it live.</p>
    <button id="magic-btn">Click for Magic ✦</button>
    <p id="output-text"></p>
  </div>
</body>
</html>`,
    css: `.welcome-box {
  font-family: 'Manrope', system-ui, sans-serif;
  padding: 24px;
  border-radius: 16px;
  background: #f8f7ff;
  border: 2px solid #e3ddff;
  text-align: center;
  max-width: 420px;
  margin: 20px auto;
}
h1 {
  color: #6c5ce7;
  margin-top: 0;
}
button {
  background: #6c5ce7;
  color: #ffffff;
  border: none;
  padding: 10px 18px;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.15s ease;
}
button:hover {
  transform: translateY(-2px);
}`,
    js: `const btn = document.getElementById("magic-btn");
const out = document.getElementById("output-text");

if (btn) {
  btn.addEventListener("click", () => {
    out.textContent = "🚀 عظمة على عظمة يا هندسة! الكود شغال 100%";
    console.log("Magic button triggered successfully!");
  });
}`
  };

  /* ==========================================================================
   * 4. APPLICATION STATE
   * ========================================================================== */
  const state = {
    activeView: 'learn',
    activeCourseId: 'html',
    activeLessonIndex: 0,
    activePlaygroundFile: 'html',
    completedLessons: ['html-1'], // Matches initial "1 of 24 lessons" in index.html
    projectsStarted: [],
    runCount: 0,
    streakDays: 1,
    userProfile: {
      name: 'Guest Developer',
      role: 'Beginner · Level 1',
      uid: null,
      email: null,
      isCloudSynced: false
    },
    playgroundFiles: {
      html: DEFAULT_PLAYGROUND_FILES.html,
      css: DEFAULT_PLAYGROUND_FILES.css,
      js: DEFAULT_PLAYGROUND_FILES.js
    },
    lessonDrafts: {}, // lessonId -> custom student code
    darkMode: false
  };

  let monacoEditorInstance = null;
  let usingMonaco = false;
  let firebaseApp = null;
  let firestoreDb = null;
  let firebaseAuth = null;

  /* ==========================================================================
   * 5. SMART ERROR DETECTOR & AUTO-FIX DIAGNOSTICS ENGINE (ARABIC + ENGLISH)
   * ========================================================================== */
  function analyzeCodeDiagnostics(htmlCode, cssCode, jsCode, mode) {
    const diagnostics = [];

    if (mode === 'python') {
      const lines = htmlCode.split('\n');
      lines.forEach((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) return;
        if (/^(if|else|elif|def|for|while)\b/.test(trimmed) && !trimmed.endsWith(':')) {
          diagnostics.push({
            severity: 'error',
            line: idx + 1,
            title: `SyntaxError (Line ${idx + 1}): Missing colon ':'`,
            explainAr: `بالمصري: في السطر ${idx + 1} نسيت تحط النقطتين فوق بعض (:) في آخر جملة الـ ${trimmed.split(/\s+/)[0]}. في لغة بايثون أي جملة شرط أو دالة لازم تنتهي بـ (:).`,
            explainEn: `Python requires a colon ':' at the end of '${trimmed.split(/\s+/)[0]}' statements.`,
            fixedCode: lines.map((l, i) => (i === idx ? l + ':' : l)).join('\n')
          });
        }
        if (/\bpritn\s*\(|\bpirnt\s*\(|\bprnt\s*\(/i.test(trimmed)) {
          diagnostics.push({
            severity: 'error',
            line: idx + 1,
            title: `NameError (Line ${idx + 1}): Misspelled 'print' function`,
            explainAr: `بالمصري: كتبت اسم دالة الطباعة غلط في السطر ${idx + 1}. الاسم الصح هو print().`,
            explainEn: `Did you mean 'print()'? Check the spelling of the function name.`,
            fixedCode: htmlCode.replace(/\b(pritn|pirnt|prnt)\s*\(/gi, 'print(')
          });
        }
      });
      return diagnostics;
    }

    // --- A. HTML DIAGNOSTICS ---
    if (htmlCode && htmlCode.trim()) {
      // 1. Common tag name typos
      const tagTypos = {
        'heder': 'header',
        'foter': 'footer',
        'navigaton': 'nav',
        'paragraf': 'p',
        'pargraf': 'p',
        'imge': 'img',
        'image': 'img',
        'buton': 'button',
        'botton': 'button',
        'buttonn': 'button',
        'tabel': 'table',
        'inpt': 'input',
        'scirpt': 'script',
        'styel': 'style'
      };

      Object.keys(tagTypos).forEach((wrong) => {
        const right = tagTypos[wrong];
        const regex = new RegExp(`<\\/?${wrong}\\b`, 'i');
        if (regex.test(htmlCode)) {
          diagnostics.push({
            severity: 'error',
            file: 'HTML',
            title: `HTML Tag Typo: <${wrong}> is not a valid HTML tag`,
            explainAr: `بالمصري: يا هندسة أنت كتبت وسم <${wrong}> بالغلط، والصح بتاعه في الـ HTML هو <${right}>.`,
            explainEn: `Unknown tag <${wrong}> detected. Replace it with the standard <${right}> element.`,
            fixedCode: htmlCode.replace(new RegExp(`(<\\/?)${wrong}\\b`, 'gi'), `$1${right}`)
          });
        }
      });

      // 2. Unclosed container tags check
      const containerTags = ['h1', 'h2', 'h3', 'h4', 'p', 'a', 'strong', 'em', 'ul', 'ol', 'li', 'table', 'tr', 'th', 'td', 'form', 'button', 'header', 'nav', 'main', 'section', 'footer', 'div', 'style', 'script'];
      containerTags.forEach((tag) => {
        const openRegex = new RegExp(`<${tag}(\\s+[^>]*)?>`, 'gi');
        const closeRegex = new RegExp(`</${tag}\\s*>`, 'gi');
        const opens = (htmlCode.match(openRegex) || []).length;
        const closes = (htmlCode.match(closeRegex) || []).length;
        if (opens > closes) {
          diagnostics.push({
            severity: 'error',
            file: 'HTML',
            title: `Unclosed HTML Tag: <${tag}> is missing </${tag}>`,
            explainAr: `بالمصري: أنت فتحت وسم <${tag}> بس نسيت تقفله بـ </${tag}>! ده هيخلي المتصفح يدخل العناصر اللي بعده جواه بالغلط.`,
            explainEn: `Found ${opens} opening <${tag}> tag(s) but only ${closes} closing </${tag}> tag(s).`,
            fixedCode: htmlCode + `\n</${tag}>`
          });
        } else if (closes > opens) {
          diagnostics.push({
            severity: 'error',
            file: 'HTML',
            title: `Stray Closing Tag: </${tag}> found without opening <${tag}>`,
            explainAr: `بالمصري: فيه قفلة وسم </${tag}> زيادة في الكود من غير ما تفتح <${tag}> قبلها.`,
            explainEn: `Found closing </${tag}> tag without a matching opening <${tag}> tag.`,
            fixedCode: htmlCode.replace(new RegExp(`</${tag}\\s*>`, 'i'), '')
          });
        }
      });

      // 3. Broken bracket (e.g. <h1 Hello</h1>)
      const lines = htmlCode.split('\n');
      lines.forEach((line, i) => {
        const openBrackets = (line.match(/</g) || []).length;
        const closeBrackets = (line.match(/>/g) || []).length;
        if (openBrackets > closeBrackets) {
          diagnostics.push({
            severity: 'error',
            file: 'HTML',
            line: i + 1,
            title: `Syntax Error (Line ${i + 1}): Missing closing angle bracket '>'`,
            explainAr: `بالمصري: في السطر رقم ${i + 1} فتحت قوس تاج '<' بس نسيت تقفله بعلامة أكبر من '>'.`,
            explainEn: `Line ${i + 1} has an unclosed angle bracket '<'. Add '>' to complete the tag.`,
            fixedCode: lines.map((l, idx) => (idx === i ? l + '>' : l)).join('\n')
          });
        }
      });

      // 4. Accessibility & Attribute warnings (e.g., <img> without alt)
      if (/<img\b(?![^>]*\balt=)[^>]*>/i.test(htmlCode)) {
        diagnostics.push({
          severity: 'warn',
          file: 'HTML',
          title: `Accessibility Notice: <img> is missing 'alt' attribute`,
          explainAr: `تنبيه مهم: وسم الصورة <img> مكتوب من غير خاصية alt="...". يفضل دايماً تكتب وصف للصورة علشان معايير الوصول ومحركات البحث.`,
          explainEn: `Always provide an alt="..." description on <img> elements for screen readers.`,
          fixedCode: htmlCode.replace(/<img\b(?![^>]*\balt=)/gi, '<img alt="صورة توضيحية"')
        });
      }
    }

    // --- B. CSS DIAGNOSTICS ---
    const combinedCss = (cssCode || '') + (htmlCode ? ((htmlCode.match(/<style[^>]*>([\s\S]*?)<\/style>/i) || [])[1] || '') : '');
    if (combinedCss.trim()) {
      const openBraces = (combinedCss.match(/\{/g) || []).length;
      const closeBraces = (combinedCss.match(/\}/g) || []).length;
      if (openBraces > closeBraces) {
        diagnostics.push({
          severity: 'error',
          file: 'CSS',
          title: `CSS Syntax Error: Missing closing curly brace '}'`,
          explainAr: `بالمصري: فتحت قوس مجموعة '{' في الـ CSS بس نسيت تقفله بـ '}'، وده هيوقف باقي التنسيقات.`,
          explainEn: `Unbalanced curly braces in CSS: ${openBraces} '{' vs ${closeBraces} '}'.`,
          fixedCode: htmlCode && /<style/i.test(htmlCode)
            ? htmlCode.replace(/<\/style>/i, '\n}\n</style>')
            : (cssCode + '\n}')
        });
      }

      // Common CSS property typos
      const cssTypos = {
        'colr': 'color',
        'backgroud': 'background',
        'bakground': 'background',
        'pading': 'padding',
        'margn': 'margin',
        'fnt-size': 'font-size',
        'bordr': 'border'
      };
      Object.keys(cssTypos).forEach((typo) => {
        const right = cssTypos[typo];
        if (new RegExp(`\\b${typo}\\s*:`, 'i').test(combinedCss)) {
          diagnostics.push({
            severity: 'error',
            file: 'CSS',
            title: `CSS Property Typo: '${typo}' is invalid`,
            explainAr: `بالمصري: خاصية الـ CSS اللي كتبتها (${typo}) فيها غلطة إملائية، والصح بتاعها هو (${right}:).`,
            explainEn: `Unknown CSS property '${typo}'. Did you mean '${right}'?`,
            fixedCode: (htmlCode || '').replace(new RegExp(`\\b${typo}(\\s*:)`, 'gi'), `${right}$1`)
          });
        }
      });
    }

    // --- C. JAVASCRIPT STATIC SYNTAX CHECK ---
    const inlineJs = htmlCode ? ((htmlCode.match(/<script[^>]*>([\s\S]*?)<\/script>/i) || [])[1] || '') : '';
    const activeJs = jsCode || inlineJs;
    if (activeJs && activeJs.trim()) {
      try {
        new Function(activeJs);
      } catch (syntaxErr) {
        diagnostics.push({
          severity: 'error',
          file: 'JS',
          title: `JavaScript SyntaxError: ${syntaxErr.message}`,
          explainAr: `بالمصري: فيه خطأ في قواعد كتابة الجافاسكريبت (${syntaxErr.message}). اتأكد من قفل الأقواس () أو {} وعلامات التنصيص "".`,
          explainEn: `JavaScript could not be parsed: ${syntaxErr.message}. Check your parentheses, brackets, and quotes.`
        });
      }
    }

    return diagnostics;
  }

  /**
   * Translates runtime JavaScript errors (e.g., ReferenceError, TypeError)
   * into friendly Egyptian Arabic + English explanations with suggested fixes.
   */
  function explainRuntimeError(errMsg) {
    const msg = String(errMsg || '');
    const refMatch = msg.match(/ReferenceError:\s*(\w+)\s+is not defined/i);
    if (refMatch) {
      const badVar = refMatch[1];
      return {
        explainAr: `بالمصري: أنت حاولت تستخدم متغير أو دالة باسم (${badVar}) بس الجافاسكريبت مش لاقياه! غالباً كتبت حرف ناقص في الاسم أو نسيت تعرفه بـ let / const قبل ما تستخدمه.`,
        explainEn: `Identifier '${badVar}' was used before being declared, or its name is misspelled.`
      };
    }
    if (/TypeError:.*null/i.test(msg)) {
      return {
        explainAr: `بالمصري: بتحاول تعدل على عنصر HTML (زي getElementById أو querySelector) بس العنصر ده مش موجود أو الـ id بتاعه مكتوب غلط فراجع بقيمة null!`,
        explainEn: `Attempted to access a property on 'null'. Check that your HTML element ID or selector matches the actual HTML.`
      };
    }
    if (/TypeError:.*is not a function/i.test(msg)) {
      return {
        explainAr: `بالمصري: بتحاول تشغل حاجة كأنها دالة () وهي مش دالة، أو كتبت اسم الدالة بحروف Capital/Small مختلفة (مثل getElementByid بدل getElementById).`,
        explainEn: `Tried to call a value that is not a function. Verify method capitalization (e.g., getElementById, addEventListener).`
      };
    }
    return {
      explainAr: `بالمصري: حصل خطأ أثناء تشغيل الكود (${msg}). راجع السطر المذكور واتأكد من أسماء المتغيرات والأقواس.`,
      explainEn: `Runtime Error occurred during execution: ${msg}`
    };
  }

  /* ==========================================================================
   * 6. PERSISTENCE LAYER (LOCALSTORAGE + REAL FIREBASE FIRESTORE SYNC)
   * ========================================================================== */
  function loadLocalState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.STATE);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed.completedLessons)) state.completedLessons = parsed.completedLessons;
        if (Array.isArray(parsed.projectsStarted)) state.projectsStarted = parsed.projectsStarted;
        if (typeof parsed.runCount === 'number') state.runCount = parsed.runCount;
        if (typeof parsed.streakDays === 'number') state.streakDays = parsed.streakDays;
        if (parsed.activeCourseId && COURSES[parsed.activeCourseId]) state.activeCourseId = parsed.activeCourseId;
        if (typeof parsed.activeLessonIndex === 'number') state.activeLessonIndex = parsed.activeLessonIndex;
        if (parsed.playgroundFiles) {
          state.playgroundFiles = Object.assign({}, DEFAULT_PLAYGROUND_FILES, parsed.playgroundFiles);
        }
        if (parsed.lessonDrafts) state.lessonDrafts = parsed.lessonDrafts;
        if (parsed.userProfile) state.userProfile = Object.assign(state.userProfile, parsed.userProfile);
      }

      const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
      if (savedTheme === 'dark') {
        state.darkMode = true;
        document.body.classList.add('dark-mode');
      }

      if (localStorage.getItem(STORAGE_KEYS.HINT_DISMISSED) === '1') {
        const hintEl = document.querySelector('.editor-hint');
        if (hintEl) hintEl.classList.add('dismissed');
      }
    } catch (e) {
      console.warn('Local state load notice:', e);
    }
  }

  function saveState() {
    try {
      const payload = {
        completedLessons: state.completedLessons,
        projectsStarted: state.projectsStarted,
        runCount: state.runCount,
        streakDays: state.streakDays,
        activeCourseId: state.activeCourseId,
        activeLessonIndex: state.activeLessonIndex,
        playgroundFiles: state.playgroundFiles,
        lessonDrafts: state.lessonDrafts,
        userProfile: state.userProfile,
        updatedAt: new Date().toISOString()
      };
      localStorage.setItem(STORAGE_KEYS.STATE, JSON.stringify(payload));
      updateSaveIndicator('local');
      syncStateToFirebase(payload);
    } catch (e) {
      console.warn('State save warning:', e);
    }
  }

  function updateSaveIndicator(status) {
    const saveEl = document.getElementById('save-state');
    if (!saveEl) return;
    if (status === 'cloud' || state.userProfile.isCloudSynced) {
      saveEl.textContent = '☁ Synced with Firebase';
      saveEl.style.color = '#18a878';
    } else if (status === 'saving') {
      saveEl.textContent = '● Saving changes…';
      saveEl.style.color = '#f2a64a';
    } else {
      saveEl.textContent = '● Saved locally';
      saveEl.style.color = '#20a779';
    }
  }

  function getActiveFirebaseConfig() {
    if (window.FIREBASE_CONFIG && window.FIREBASE_CONFIG.apiKey) {
      return window.FIREBASE_CONFIG;
    }
    if (DEFAULT_FIREBASE_CONFIG.apiKey && DEFAULT_FIREBASE_CONFIG.projectId) {
      return DEFAULT_FIREBASE_CONFIG;
    }
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.FIREBASE_CFG);
      if (stored) {
        const cfg = JSON.parse(stored);
        if (cfg && cfg.apiKey && cfg.projectId) return cfg;
      }
    } catch (e) {}
    return null;
  }

  function loadScriptDynamic(src) {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) return resolve();
      const s = document.createElement('script');
      s.src = src;
      s.async = true;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  async function initFirebaseBackend() {
    const cfg = getActiveFirebaseConfig();
    if (!cfg) {
      updateProfileSidebarUI();
      return false;
    }

    try {
      if (!window.firebase) {
        await loadScriptDynamic('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
        await loadScriptDynamic('https://www.gstatic.com/firebasejs/10.14.1/firebase-auth-compat.js');
        await loadScriptDynamic('https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore-compat.js');
      }

      if (!window.firebase.apps.length) {
        firebaseApp = window.firebase.initializeApp(cfg);
      } else {
        firebaseApp = window.firebase.app();
      }

      firebaseAuth = window.firebase.auth();
      firestoreDb = window.firebase.firestore();

      // Enable offline persistence for Firestore
      firestoreDb.enablePersistence({ synchronizeTabs: true }).catch(() => {});

      firebaseAuth.onAuthStateChanged(async (user) => {
        if (user) {
          state.userProfile.uid = user.uid;
          state.userProfile.email = user.email || null;
          state.userProfile.name = user.displayName || (user.email ? user.email.split('@')[0] : 'Eng: Ahmed M Hosny');
          state.userProfile.isCloudSynced = true;
          await pullStateFromFirestore(user.uid);
          updateProfileSidebarUI();
          updateSaveIndicator('cloud');
          showToast('☁ Connected & synced with Firebase Firestore!');
        } else {
          // Automatically sign in anonymously so Firestore works right away
          firebaseAuth.signInAnonymously().catch((err) => {
            console.warn('Anonymous auth note:', err.message);
          });
        }
      });

      return true;
    } catch (err) {
      console.warn('Firebase initialization warning:', err);
      state.userProfile.isCloudSynced = false;
      updateProfileSidebarUI();
      return false;
    }
  }

  async function syncStateToFirebase(payload) {
    if (!firestoreDb || !state.userProfile.uid) return;
    try {
      await firestoreDb.collection('users').doc(state.userProfile.uid).set(payload, { merge: true });
      updateSaveIndicator('cloud');
    } catch (e) {
      console.warn('Firestore sync error:', e);
    }
  }

  async function pullStateFromFirestore(uid) {
    if (!firestoreDb || !uid) return;
    try {
      const docSnap = await firestoreDb.collection('users').doc(uid).get();
      if (docSnap.exists) {
        const cloud = docSnap.data();
        if (Array.isArray(cloud.completedLessons)) {
          state.completedLessons = Array.from(new Set([...state.completedLessons, ...cloud.completedLessons]));
        }
        if (Array.isArray(cloud.projectsStarted)) {
          state.projectsStarted = Array.from(new Set([...state.projectsStarted, ...cloud.projectsStarted]));
        }
        if (typeof cloud.runCount === 'number' && cloud.runCount > state.runCount) {
          state.runCount = cloud.runCount;
        }
        if (cloud.lessonDrafts) {
          state.lessonDrafts = Object.assign({}, cloud.lessonDrafts, state.lessonDrafts);
        }
        if (cloud.playgroundFiles) {
          state.playgroundFiles = Object.assign({}, cloud.playgroundFiles, state.playgroundFiles);
        }
        refreshAllUI();
      } else {
        saveState();
      }
    } catch (e) {
      console.warn('Firestore pull warning:', e);
    }
  }

  /* ==========================================================================
   * 7. UI UPDATES: DASHBOARD, SIDEBAR, PROGRESS, ACHIEVEMENTS
   * ========================================================================== */
  function getTotalLessonsCount() {
    return Object.values(COURSES).reduce((acc, c) => acc + c.lessons.length, 0); // 8 + 6 + 6 + 4 = 24
  }

  function getCourseProgressPercent(courseId) {
    const course = COURSES[courseId];
    if (!course || !course.lessons.length) return 0;
    const completedInCourse = course.lessons.filter(l => state.completedLessons.includes(l.id)).length;
    return Math.round((completedInCourse / course.lessons.length) * 100);
  }

  function updateProfileSidebarUI() {
    const nameEl = document.querySelector('.profile-copy b');
    const roleEl = document.querySelector('.profile-copy small');
    const avatarEl = document.querySelector('.avatar');
    const streakEl = document.getElementById('streak-count');

    const completedCount = state.completedLessons.length;
    const level = Math.floor(completedCount / 4) + 1;
    const rankTitle = level >= 4 ? 'Pro Builder' : (level >= 2 ? 'Rising Coder' : 'Beginner');

    if (nameEl) nameEl.textContent = state.userProfile.name || 'Guest Developer';
    if (roleEl) {
      const syncBadge = state.userProfile.isCloudSynced ? ' · ☁ Firebase' : '';
      roleEl.textContent = `${rankTitle} · Level ${level}${syncBadge}`;
    }
    if (avatarEl) {
      const initials = (state.userProfile.name || 'CM')
        .split(/\s+/)
        .map(w => w[0])
        .join('')
        .substring(0, 2)
        .toUpperCase();
      avatarEl.textContent = initials || 'CM';
    }
    if (streakEl) {
      streakEl.textContent = `${state.streakDays} day streak`;
    }
  }

  function refreshAllUI() {
    const totalLessons = getTotalLessonsCount(); // 24
    const doneCount = state.completedLessons.length;
    const overallPct = Math.round((doneCount / totalLessons) * 100);

    // 1. Learn Hub Stats
    const overallProgEl = document.getElementById('overall-progress');
    const overallBarEl = document.getElementById('overall-bar');
    const completedCountEl = document.getElementById('completed-count');

    if (overallProgEl) overallProgEl.textContent = `${overallPct}%`;
    if (overallBarEl) overallBarEl.style.width = `${overallPct}%`;
    if (completedCountEl) completedCountEl.textContent = String(doneCount);

    // Update the 12 mini-bars in Learn Hub
    const miniBars = document.querySelectorAll('.mini-bars i');
    const activeBarsCount = Math.max(1, Math.round((doneCount / totalLessons) * miniBars.length));
    miniBars.forEach((bar, i) => {
      bar.style.background = i < activeBarsCount ? 'var(--purple)' : '#eeeaff';
    });

    // 2. Sidebar Course Links & Learning Hub Course Cards
    ['html', 'css', 'js', 'python'].forEach((cid) => {
      const pct = getCourseProgressPercent(cid);
      const sidebarBtn = document.querySelector(`.course-link[data-course="${cid}"]`);
      if (sidebarBtn) {
        sidebarBtn.classList.toggle('selected', state.activeCourseId === cid);
        const statusSpan = sidebarBtn.querySelector('.course-check, .course-progress, .course-lock');
        if (statusSpan) {
          if (pct === 100) {
            statusSpan.className = 'course-check';
            statusSpan.textContent = '✓';
          } else {
            statusSpan.className = 'course-progress';
            statusSpan.textContent = `${pct}%`;
          }
        }
      }

      // Update Card in #learn-view
      const cardBtn = document.querySelector(`.card-button[data-open-course="${cid}"]`);
      if (cardBtn) {
        const card = cardBtn.closest('.learning-card');
        if (card) {
          const bLabel = card.querySelector('.card-progress-label b');
          const barFill = card.querySelector('.progress-track span');
          if (bLabel) bLabel.textContent = `${pct}%`;
          if (barFill) barFill.style.width = `${pct}%`;
          cardBtn.innerHTML = `${pct > 0 ? 'Resume course' : 'Start learning'} <span>→</span>`;
        }
      }
    });

    // 3. Update Today's Lesson & Next Milestone in #learn-view
    const currentCourse = COURSES[state.activeCourseId] || COURSES.html;
    const nextUnfinished = currentCourse.lessons.find(l => !state.completedLessons.includes(l.id)) || currentCourse.lessons[0];
    const todayNum = document.querySelector('.today-lesson .lesson-number');
    const todayTitle = document.querySelector('.today-lesson .lesson-copy h3');
    const todayDesc = document.querySelector('.today-lesson .lesson-copy p');
    if (todayNum && nextUnfinished) todayNum.textContent = nextUnfinished.num;
    if (todayTitle && nextUnfinished) todayTitle.textContent = nextUnfinished.title;
    if (todayDesc && nextUnfinished) todayDesc.textContent = nextUnfinished.goal;

    const milestoneTitle = document.querySelector('.milestone b');
    const milestoneSmall = document.querySelector('.milestone small');
    if (milestoneTitle && nextUnfinished) milestoneTitle.textContent = nextUnfinished.title;
    if (milestoneSmall && nextUnfinished) milestoneSmall.textContent = `${currentCourse.title} · ${nextUnfinished.duration}`;

    // 4. Update My Progress View (#progress-view)
    const progLessonsEl = document.getElementById('progress-lessons');
    const progLessonsBar = document.getElementById('progress-lessons-bar');
    const projStartedEl = document.getElementById('projects-started-count');
    const runCountEl = document.getElementById('run-count');

    if (progLessonsEl) progLessonsEl.textContent = String(doneCount);
    if (progLessonsBar) progLessonsBar.style.width = `${overallPct}%`;
    if (projStartedEl) projStartedEl.textContent = String(state.projectsStarted.length);
    if (runCountEl) runCountEl.textContent = String(state.runCount);

    renderProgressCourseList();
    updateAchievementsUI();
    updateProfileSidebarUI();
  }

  function renderProgressCourseList() {
    const container = document.getElementById('progress-course-list');
    if (!container) return;
    container.innerHTML = '';

    Object.values(COURSES).forEach((course) => {
      const pct = getCourseProgressPercent(course.id);
      const doneInCourse = course.lessons.filter(l => state.completedLessons.includes(l.id)).length;
      const row = document.createElement('div');
      row.className = 'progress-course-row';
      row.innerHTML = `
        <div class="progress-course-icon ${course.badgeClass}">${course.badgeText}</div>
        <div class="progress-course-copy">
          <b>${course.title}</b>
          <small>${doneInCourse} of ${course.lessons.length} lessons completed · ${course.subtitle}</small>
        </div>
        <div class="progress-course-bar">
          <div><span>Progress</span><b>${pct}%</b></div>
          <div class="progress-track"><span style="width:${pct}%"></span></div>
        </div>
        <button type="button" data-open-track="${course.id}">${pct > 0 ? 'Continue' : 'Start'} →</button>
      `;
      row.querySelector('button').addEventListener('click', () => {
        openCourseLesson(course.id, 0);
      });
      container.appendChild(row);
    });
  }

  function updateAchievementsUI() {
    const runAch = document.getElementById('achievement-run');
    const lessonAch = document.getElementById('achievement-lesson');

    if (runAch) {
      const unlocked = state.runCount > 0;
      runAch.classList.toggle('unlocked', unlocked);
      const status = runAch.querySelector('i');
      if (status) status.textContent = unlocked ? 'Unlocked' : 'Locked';
    }
    if (lessonAch) {
      const unlocked = state.completedLessons.length > 0;
      lessonAch.classList.toggle('unlocked', unlocked);
      const status = lessonAch.querySelector('i');
      if (status) status.textContent = unlocked ? 'Unlocked' : 'Locked';
    }
  }

  /* ==========================================================================
   * 8. VIEW NAVIGATION & BREADCRUMBS
   * ========================================================================== */
  const VIEW_TITLES = {
    learn: 'Learning Hub',
    playground: 'Code Playground',
    projects: 'Mini Projects',
    progress: 'My Progress',
    lesson: 'Interactive Lesson'
  };

  function switchView(viewName) {
    state.activeView = viewName;
    const views = {
      learn: document.getElementById('learn-view'),
      playground: document.getElementById('playground-view'),
      projects: document.getElementById('projects-view'),
      progress: document.getElementById('progress-view'),
      lesson: document.getElementById('lesson-view')
    };

    Object.keys(views).forEach((k) => {
      if (views[k]) {
        views[k].classList.toggle('active-view', k === viewName);
      }
    });

    document.querySelectorAll('.nav-item[data-view]').forEach((btn) => {
      const isMatch = btn.getAttribute('data-view') === viewName || (viewName === 'lesson' && btn.getAttribute('data-view') === 'learn');
      btn.classList.toggle('active', isMatch);
    });

    const breadEl = document.getElementById('breadcrumb-current');
    if (breadEl) breadEl.textContent = VIEW_TITLES[viewName] || 'Workspace';

    // Close mobile sidebar if open
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.remove('mobile-open');

    if (viewName === 'playground') {
      setTimeout(() => {
        if (monacoEditorInstance) monacoEditorInstance.layout();
        runPlaygroundCode(false);
      }, 60);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ==========================================================================
   * 9. INTERACTIVE LESSON VIEW & IN-LESSON CODE EDITOR + GRADER
   * ========================================================================== */
  function openCourseLesson(courseId, lessonIndex) {
    const course = COURSES[courseId] || COURSES.html;
    state.activeCourseId = course.id;
    const safeIndex = Math.max(0, Math.min(lessonIndex || 0, course.lessons.length - 1));
    state.activeLessonIndex = safeIndex;

    const lesson = course.lessons[safeIndex];
    saveState();
    refreshAllUI();

    // Update Lesson View DOM
    const tagEl = document.getElementById('lesson-course-tag');
    if (tagEl) {
      tagEl.className = `tag ${course.tagClass}`;
      tagEl.textContent = course.tag;
    }

    const eyebrowEl = document.querySelector('#lesson-view .lesson-content > .eyebrow');
    if (eyebrowEl) eyebrowEl.textContent = lesson.eyebrow;

    const titleEl = document.getElementById('lesson-title');
    if (titleEl) titleEl.textContent = lesson.title;

    const leadEl = document.getElementById('lesson-lead');
    if (leadEl) leadEl.textContent = lesson.lead;

    const goalEl = document.getElementById('lesson-goal');
    if (goalEl) goalEl.textContent = lesson.goal;

    const secTitleEl = document.getElementById('lesson-section-title');
    if (secTitleEl) secTitleEl.textContent = lesson.sectionTitle;

    const expEl = document.getElementById('lesson-explanation');
    if (expEl) expEl.textContent = lesson.explanation;

    const codeEl = document.querySelector('#lesson-code code') || document.getElementById('lesson-code');
    if (codeEl) codeEl.textContent = lesson.exampleCode;

    // Update Complete Lesson Button state
    const completeBtn = document.getElementById('complete-lesson');
    const isCompleted = state.completedLessons.includes(lesson.id);
    if (completeBtn) {
      completeBtn.textContent = isCompleted ? 'Completed ✓ (Next Lesson →)' : 'Mark lesson complete ✓';
    }

    // Render Sidebar Lesson List for this course
    const sidebarCourseTitle = document.querySelector('.lesson-sidebar h3');
    if (sidebarCourseTitle) sidebarCourseTitle.textContent = course.title;

    const listEl = document.getElementById('lesson-list');
    if (listEl) {
      listEl.innerHTML = '';
      course.lessons.forEach((item, idx) => {
        const done = state.completedLessons.includes(item.id);
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `lesson-list-item ${idx === safeIndex ? 'active' : ''} ${done ? 'completed' : ''}`;
        btn.setAttribute('data-lesson', String(idx));
        btn.innerHTML = `
          <span>${item.num}</span>
          <span><b>${item.title}</b><small>${item.duration}</small></span>
          <i>${done ? '✓' : '○'}</i>
        `;
        btn.addEventListener('click', () => openCourseLesson(course.id, idx));
        listEl.appendChild(btn);
      });
    }

    const trackPct = getCourseProgressPercent(course.id);
    const trackPctEl = document.getElementById('lesson-track-percent');
    const trackBarEl = document.getElementById('lesson-track-bar');
    if (trackPctEl) trackPctEl.textContent = `${trackPct}%`;
    if (trackBarEl) trackBarEl.style.width = `${trackPct}%`;

    // Inject / Update the In-Lesson Interactive Code Workbench!
    renderInLessonWorkbench(course, lesson);

    switchView('lesson');
  }

  /**
   * Builds a complete, interactive code editor + live preview + error debugger
   * right inside #lesson-view so the student can write code, click Run, see output
   * or errors, and get 1-click Auto-Fix suggestions!
   */
  function renderInLessonWorkbench(course, lesson) {
    let workbench = document.getElementById('in-lesson-workbench');
    const lessonActions = document.querySelector('#lesson-view .lesson-actions');
    if (!lessonActions) return;

    if (!workbench) {
      workbench = document.createElement('div');
      workbench.id = 'in-lesson-workbench';
      workbench.style.cssText = 'margin: 18px 0 24px; border: 1px solid var(--line); border-radius: 14px; overflow: hidden; background: var(--surface); box-shadow: var(--shadow);';
      lessonActions.parentNode.insertBefore(workbench, lessonActions);
    }

    const savedDraft = state.lessonDrafts[lesson.id] || lesson.starterCode;

    workbench.innerHTML = `
      <div style="background: var(--purple-soft); border-bottom: 1px solid var(--line); padding: 12px 16px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
        <div style="font-size: 11px; color: #5c50bc; font-weight: 700;">
<span>🎯</span> <span id="in-lesson-prompt">${escapeHtml(lesson.challengePrompt)}</span>
</div>
        <div style="display: flex; gap: 8px; align-items: center;">
          <button type="button" id="in-lesson-reset" class="secondary-button" style="padding: 6px 12px; font-size: 10px;">↺ Reset</button>
          <button type="button" id="in-lesson-solution" class="secondary-button" style="padding: 6px 12px; font-size: 10px;">💡 Show Solution</button>
          <button type="button" id="in-lesson-run" class="primary-button" style="padding: 7px 14px; font-size: 10px;">▶ Run & Verify (تشغيل وفحص)</button>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); border-bottom: 1px solid var(--line);">
        <!-- Left: Code Input -->
        <div style="border-right: 1px solid var(--line); display: flex; flex-direction: column; background: #191a2c;">
          <div style="padding: 7px 12px; background: #121322; border-bottom: 1px solid #2d2f48; color: #a2a2c3; font: 700 9px 'DM Mono', monospace; display: flex; justify-content: space-between;">
            <span>INTERACTIVE EDITOR (${course.id.toUpperCase()})</span>
            <span>Tab = 2 spaces · Ctrl+Enter = Run</span>
          </div>
          <textarea id="in-lesson-textarea" spellcheck="false" style="width: 100%; min-height: 210px; border: 0; outline: none; resize: vertical; padding: 14px; font: 12px/1.7 'DM Mono', monospace; background: #191a2c; color: #eff0fb; direction: ltr; text-align: left;"></textarea>
        </div>

        <!-- Right: Live Output Preview -->
        <div style="display: flex; flex-direction: column; background: #ffffff;">
          <div style="padding: 7px 12px; background: var(--surface-2); border-bottom: 1px solid var(--line); color: var(--muted); font: 700 9px 'DM Mono', monospace; display: flex; justify-content: space-between;">
            <span>LIVE OUTPUT PREVIEW (النتيجة المباشرة)</span>
            <span style="color: #18a878;">● SANDBOX</span>
          </div>
          <iframe id="in-lesson-iframe" title="Lesson Preview" sandbox="allow-scripts" style="width: 100%; min-height: 210px; flex: 1; border: 0; background: #ffffff;"></iframe>
        </div>
      </div>

      <!-- Bottom: Smart Diagnostics & Feedback Assistant -->
      <div id="in-lesson-feedback" style="padding: 14px 16px; font-size: 11px; background: var(--surface-2);">
        <div style="color: var(--muted);">اضغط على <b>▶ Run & Verify</b> لتشغيل الكود وفحص الأخطاء وتقييم التحدي.</div>
      </div>
    `;

    const textarea = document.getElementById('in-lesson-textarea');
    textarea.value = savedDraft;

    // Support Tab & Ctrl+Enter in lesson editor
    textarea.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        executeInLessonCode(course, lesson);
      } else if (e.key === 'Tab') {
        e.preventDefault();
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        textarea.value = textarea.value.substring(0, start) + '  ' + textarea.value.substring(end);
        textarea.selectionStart = textarea.selectionEnd = start + 2;
      }
    });

    textarea.addEventListener('input', () => {
      state.lessonDrafts[lesson.id] = textarea.value;
      saveState();
    });

    document.getElementById('in-lesson-run').addEventListener('click', () => {
      executeInLessonCode(course, lesson);
    });

    document.getElementById('in-lesson-reset').addEventListener('click', () => {
      textarea.value = lesson.starterCode;
      state.lessonDrafts[lesson.id] = lesson.starterCode;
      executeInLessonCode(course, lesson);
      showToast('↺ Code reset to lesson starter.');
    });

    document.getElementById('in-lesson-solution').addEventListener('click', () => {
      textarea.value = lesson.solutionCode;
      state.lessonDrafts[lesson.id] = lesson.solutionCode;
      executeInLessonCode(course, lesson);
      showToast('💡 Recommended solution loaded into editor!');
    });

    // Run initial preview silently
    executeInLessonCode(course, lesson, true);
  }

function executeInLessonCode(course, lesson, isInitialLoad) {
    const textarea = document.getElementById('in-lesson-textarea');
    const iframe = document.getElementById('in-lesson-iframe');
    const feedbackBox = document.getElementById('in-lesson-feedback');
    if (!textarea || !iframe || !feedbackBox) return;

    const rawCode = textarea.value;
    state.lessonDrafts[lesson.id] = rawCode;

    if (!isInitialLoad) {
      state.runCount++;
      saveState();
      refreshAllUI();
    }

    // 1. إذا كان المسار بايثون: افحص الأخطاء أولاً وأوقف التنفيذ فوراً عند وجود خطأ
    if (course.id === 'python') {
      const pyDiag = analyzeCodeDiagnostics(rawCode, '', '', 'python');
      if (pyDiag.length > 0) {
        const err = pyDiag[0];
        iframe.srcdoc = `<body style="font-family:system-ui,sans-serif;background:#1a0f14;color:#ff8b94;padding:18px;margin:0;direction:rtl;text-align:right;">
          <div style="border:1px solid #f85149;background:rgba(248,81,73,0.12);border-radius:10px;padding:14px;">
            <b style="color:#ff7b72;font-size:13px;">⛔ تم إيقاف تشغيل الكود لوجود خطأ (Execution Halted)</b>
            <p style="margin:8px 0 4px;font-size:12px;color:#ffdcd7;">${escapeHtml(err.title)}</p>
            <p style="margin:4px 0;font-size:12px;color:#f0f6fc;">${escapeHtml(err.explainAr)}</p>
          </div>
        </body>`;
        renderLessonDiagnosticError(feedbackBox, err, textarea, course, lesson);
        return;
      }

      iframe.srcdoc = executeTerminalLanguage(rawCode, getFileExtensionInfo('main.py'));
      const check = lesson.validate(null, rawCode);
      renderLessonValidationResult(feedbackBox, check, textarea, course, lesson);
      return;
    }

    // 2. فحص أخطاء HTML / CSS / JS قبل التشغيل وإيقاف الـ Run فوراً إذا وُجد خطأ
    const issues = analyzeCodeDiagnostics(rawCode, '', '', 'web');
    const errorsOnly = issues.filter(i => i.severity === 'error');
    if (errorsOnly.length > 0) {
      const err = errorsOnly[0];
      iframe.srcdoc = `<!DOCTYPE html><html dir="rtl"><head><meta charset="UTF-8"></head>
        <body style="font-family:'Cairo',system-ui,sans-serif;background:#fff5f5;color:#842029;padding:20px;margin:0;">
          <div style="border:2px solid #f5c2c7;background:#ffffff;border-radius:12px;padding:16px;box-shadow:0 8px 20px rgba(213,79,89,0.12);">
            <h3 style="margin:0 0 8px;color:#d54f59;font-size:15px;">⛔ تم إيقاف التشغيل لوجود خطأ في الكود!</h3>
            <div style="font-family:monospace;background:#fff0f0;padding:8px 10px;border-radius:6px;direction:ltr;text-align:left;font-size:12px;margin-bottom:8px;">${escapeHtml(err.title)}</div>
            <p style="margin:0 0 6px;font-size:13px;line-height:1.6;"><b>السبب:</b> ${escapeHtml(err.explainAr)}</p>
            <p style="margin:0;font-size:12px;color:#18a878;font-weight:700;">💡 الحل المقترح: اضغط على زرار "صلحلي الخطأ تلقائياً" بالأسفل ليتم إصلاحه وتشغيله.</p>
          </div>
        </body></html>`;
      renderLessonDiagnosticError(feedbackBox, err, textarea, course, lesson);
      return;
    }

    // 3. تشغيل الكود فقط إذا كان سليماً وخالياً من الأخطاء
    iframe.srcdoc = `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>body{font-family:'Manrope',system-ui,sans-serif;padding:16px;margin:0;color:#171a2b;line-height:1.6}</style></head><body>${rawCode}</body></html>`;

    // 4. تقييم تحدي الدرس
    const parser = new DOMParser();
    const doc = parser.parseFromString(rawCode, 'text/html');
    const validation = lesson.validate(doc, rawCode);
    renderLessonValidationResult(feedbackBox, validation, textarea, course, lesson);
  }

  function renderLessonDiagnosticError(container, diag, textarea, course, lesson) {
    container.innerHTML = `
      <div style="background: #fff0f0; border: 1px solid #f5c2c7; border-radius: 10px; padding: 12px 14px; color: #842029;">
        <div style="font-weight: 800; font-size: 12px; color: #d54f59; margin-bottom: 4px;">
          ⚠️ تم اكتشاف خطأ في الكود: ${escapeHtml(diag.title)}
        </div>
        <p style="margin: 4px 0; font-size: 11px; line-height: 1.7;">${escapeHtml(diag.explainAr)}</p>
        <p style="margin: 2px 0 10px; font-size: 10px; color: #9a4a52;">${escapeHtml(diag.explainEn)}</p>
        ${diag.fixedCode ? `<button type="button" id="btn-auto-fix-lesson" class="primary-button" style="padding: 6px 12px; font-size: 10px; background: #d54f59; border-color: #d54f59;">⚡ صلحلي الخطأ تلقائياً (Apply Suggested Fix)</button>` : ''}
      </div>
    `;
    const fixBtn = document.getElementById('btn-auto-fix-lesson');
    if (fixBtn && diag.fixedCode) {
      fixBtn.addEventListener('click', () => {
        textarea.value = diag.fixedCode;
        executeInLessonCode(course, lesson);
        showToast('⚡ تم تصليح الخطأ تلقائياً وإعادة تشغيل الكود!');
      });
    }
  }

  function renderLessonValidationResult(container, validation, textarea, course, lesson) {
    if (validation.passed) {
      if (!state.completedLessons.includes(lesson.id)) {
        state.completedLessons.push(lesson.id);
        saveState();
        refreshAllUI();
        // Update sidebar checkmark
        const activeItemIcon = document.querySelector(`.lesson-list-item[data-lesson="${state.activeLessonIndex}"] i`);
        if (activeItemIcon) activeItemIcon.textContent = '✓';
        const completeBtn = document.getElementById('complete-lesson');
        if (completeBtn) completeBtn.textContent = 'Completed ✓ (Next Lesson →)';
      }

      container.innerHTML = `
        <div style="background: #e6f8f1; border: 1px solid #a3e4cb; border-radius: 10px; padding: 12px 14px; color: #0f5132; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
          <div>
            <div style="font-weight: 800; font-size: 12px; color: #18a878;">✓ ${escapeHtml(validation.msgAr)}</div>
            <div style="font-size: 10px; color: #147a58; margin-top: 2px;">${escapeHtml(validation.msgEn)}</div>
          </div>
          <button type="button" id="btn-next-lesson-inline" class="primary-button" style="padding: 7px 14px; font-size: 10px; background: #18a878; border-color: #18a878;">الدرس التالي (Next Lesson) →</button>
        </div>
      `;
      const nextBtn = document.getElementById('btn-next-lesson-inline');
      if (nextBtn) {
        nextBtn.addEventListener('click', () => advanceToNextLesson());
      }
    } else {
      container.innerHTML = `
        <div style="background: #fff7e7; border: 1px solid #f7d99b; border-radius: 10px; padding: 12px 14px; color: #7a520d;">
          <div style="font-weight: 800; font-size: 12px; color: #b57c16; margin-bottom: 4px;">💡 الكود اشتغل، بس لسه ناقص خطوة لإتمام التحدي:</div>
          <p style="margin: 4px 0; font-size: 11px;">${escapeHtml(validation.msgAr)}</p>
          <p style="margin: 2px 0 8px; font-size: 10px; color: #9c6e19;">${escapeHtml(validation.msgEn)}</p>
          <button type="button" id="btn-suggest-solution-inline" class="secondary-button" style="padding: 5px 11px; font-size: 10px;">✨ اقتراح الكود الصحيح وتطبيقه</button>
        </div>
      `;
      const sugBtn = document.getElementById('btn-suggest-solution-inline');
      if (sugBtn) {
        sugBtn.addEventListener('click', () => {
          textarea.value = validation.suggestedFix || lesson.solutionCode;
          executeInLessonCode(course, lesson);
          showToast('✨ تم تطبيق الحل المقترح بنجاح!');
        });
      }
    }
  }

  function advanceToNextLesson() {
    const course = COURSES[state.activeCourseId] || COURSES.html;
    if (state.activeLessonIndex + 1 < course.lessons.length) {
      openCourseLesson(course.id, state.activeLessonIndex + 1);
      showToast(`→ Moved to Lesson ${state.activeLessonIndex + 1}: ${course.lessons[state.activeLessonIndex].title}`);
    } else {
      // Move to next course if available
      const order = ['html', 'css', 'js', 'python'];
      const nextIdx = order.indexOf(course.id) + 1;
      if (nextIdx < order.length) {
        openCourseLesson(order[nextIdx], 0);
        showToast(`🎉 Track completed! Welcome to ${COURSES[order[nextIdx]].title}!`);
      } else {
        showToast('🏆 مبروك يا قدوة! خلصت كل مسارات المنصة بالكامل!');
        switchView('progress');
      }
    }
  }

  /* ==========================================================================
   * 10. CODE PLAYGROUND (MONACO EDITOR + FALLBACK + CONSOLE DEBUGGER)
   * ========================================================================== */
  function initCodePlayground() {
    const host = document.getElementById('editor-host');
    const loadingEl = document.getElementById('editor-loading');
    const fallbackEl = document.getElementById('fallback-editor');

    function activateFallbackEditor() {
      usingMonaco = false;
      if (loadingEl) loadingEl.style.display = 'none';
      if (host) host.classList.add('monaco-ready');
      if (fallbackEl) {
        fallbackEl.hidden = false;
        fallbackEl.value = state.playgroundFiles[state.activePlaygroundFile] || '';
        fallbackEl.addEventListener('input', () => {
          state.playgroundFiles[state.activePlaygroundFile] = fallbackEl.value;
          updateSaveIndicator('saving');
          saveState();
          updateCursorStatusFromTextarea(fallbackEl);
        });
        fallbackEl.addEventListener('keyup', () => updateCursorStatusFromTextarea(fallbackEl));
        fallbackEl.addEventListener('click', () => updateCursorStatusFromTextarea(fallbackEl));
        fallbackEl.addEventListener('keydown', (e) => {
          if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            runPlaygroundCode(true);
          } else if (e.key === 'Tab') {
            e.preventDefault();
            const s = fallbackEl.selectionStart;
            const end = fallbackEl.selectionEnd;
            fallbackEl.value = fallbackEl.value.substring(0, s) + '  ' + fallbackEl.value.substring(end);
            fallbackEl.selectionStart = fallbackEl.selectionEnd = s + 2;
          }
        });
      }
    }

    if (window.require && typeof window.require.config === 'function') {
      try {
        window.require.config({
          paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.52.2/min/vs' }
        });
        const timeoutId = setTimeout(() => {
          if (!usingMonaco) activateFallbackEditor();
        }, 4500);

        window.require(['vs/editor/editor.main'], function () {
          clearTimeout(timeoutId);
          if (!window.monaco) return activateFallbackEditor();

usingMonaco = true;
          if (host) host.classList.add('monaco-ready');
          if (fallbackEl) fallbackEl.hidden = true;

          if (typeof window.registerAllCodeMasrSnippets === 'function') {
            window.registerAllCodeMasrSnippets();
          }

          monacoEditorInstance = window.monaco.editor.create(document.getElementById('monaco-editor'), {
            tabCompletion: 'on',
            suggestSelection: 'first',
            mouseWheelZoom: true, // تفعيل تكبير وتصغير الخط ببكرة الماوس مع Ctrl مثل VS Code تماماً
            value: state.playgroundFiles[state.activePlaygroundFile] || '',
            language: getMonacoLang(state.activePlaygroundFile),
            theme: state.darkMode ? 'vs-dark' : 'vs',
            fontFamily: "'DM Mono', monospace",
            fontSize: 13,
            lineHeight: 22,
            minimap: { enabled: false },
            automaticLayout: true,
            tabSize: 2,
            padding: { top: 14, bottom: 14 },
            scrollBeyondLastLine: false,
            wordWrap: 'on'
          });

          monacoEditorInstance.onDidChangeModelContent(() => {
            state.playgroundFiles[state.activePlaygroundFile] = monacoEditorInstance.getValue();
            updateSaveIndicator('saving');
            saveState();
          });

          monacoEditorInstance.onDidChangeCursorPosition((e) => {
            const posEl = document.getElementById('cursor-position');
            if (posEl && e.position) {
              posEl.textContent = `Ln ${e.position.lineNumber}, Col ${e.position.column}`;
            }
          });

          monacoEditorInstance.addCommand(window.monaco.KeyMod.CtrlCmd | window.monaco.KeyCode.Enter, () => {
            runPlaygroundCode(true);
          });
        });
      } catch (e) {
        activateFallbackEditor();
      }
    } else {
      activateFallbackEditor();
    }
  }

// حالة تفعيل الاقتراحات التلقائية (افتراضياً شغالة، ويقدر الطالب يقفلها)
  state.autoCompleteEnabled = localStorage.getItem('codemasr_autocomplete') !== 'off';

  // 1. محرك التعرف التلقائي الشامل لكل لغات البرمجة والامتدادات
  function getFileExtensionInfo(rawKey) {
    const key = String(rawKey || 'html').trim();
    const lower = key.toLowerCase();

    // HTML
    if (lower === 'html' || lower === 'index.html' || lower.endsWith('.html') || lower.endsWith('.htm')) {
      return {
        lang: 'html', label: 'HTML5', dot: 'html-dot', isTerminal: false,
        displayName: lower === 'html' ? 'index.html' : key,
        starter: `<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="UTF-8">\n  <title>${key}</title>\n</head>\n<body>\n  <h1>صفحة ${key}</h1>\n</body>\n</html>`
      };
    }
    // CSS
    if (lower === 'css' || lower === 'style.css' || lower.endsWith('.css')) {
      return {
        lang: 'css', label: 'CSS3', dot: 'css-dot', isTerminal: false,
        displayName: lower === 'css' ? 'style.css' : key,
        starter: `/* تنسيقات ${key} */\nbody {\n  font-family: system-ui, sans-serif;\n}\n`
      };
    }
    // JavaScript
    if (lower === 'js' || lower === 'script.js' || lower.endsWith('.js')) {
      return {
        lang: 'javascript', label: 'JAVASCRIPT', dot: 'js-dot', isTerminal: false,
        displayName: lower === 'js' ? 'script.js' : key,
        starter: `// JavaScript: ${key}\nconsole.log("Hello from ${key}!");\n`
      };
    }
    // TypeScript
    if (lower.endsWith('.ts')) {
      return {
        lang: 'typescript', label: 'TYPESCRIPT', dot: 'css-dot', isTerminal: true,
        displayName: key,
        starter: `// TypeScript: ${key}\nconst greeting: string = "Hello TypeScript!";\nconsole.log(greeting);\n`
      };
    }
    // Python (.py)
    if (lower.endsWith('.py')) {
      return {
        lang: 'python', label: 'PYTHON 🐍', dot: 'py-dot', isTerminal: true,
        displayName: key,
        starter: `# ملف بايثون: ${key}\nname = "Eng. Ahmed"\nyear = 2026\nprint("Welcome to Python,", name)\nprint("Current Year:", year)\n`
      };
    }
    // C++ (.cpp, .c++, .cc, .hpp)
    if (lower.endsWith('.cpp') || lower.endsWith('.c++') || lower.endsWith('.cc') || lower.endsWith('.hpp')) {
      return {
        lang: 'cpp', label: 'C++ ⚙️', dot: 'cpp-dot', isTerminal: true,
        displayName: key,
        starter: `// برنامج C++: ${key}\n#include <iostream>\nusing namespace std;\n\nint main() {\n    string developer = "Eng. Ahmed";\n    int level = 100;\n    cout << "Hello C++ World! Developer: " << developer << endl;\n    cout << "Power Level: " << level << "%" << endl;\n    return 0;\n}\n`
      };
    }
    // C (.c, .h)
    if (lower.endsWith('.c') || lower.endsWith('.h')) {
      return {
        lang: 'c', label: 'C LANG 🛠️', dot: 'cpp-dot', isTerminal: true,
        displayName: key,
        starter: `// برنامج لغة C: ${key}\n#include <stdio.h>\n\nint main() {\n    int a = 15;\n    int b = 25;\n    printf("Welcome to C Language!\\n");\n    printf("Sum = %d\\n", a + b);\n    return 0;\n}\n`
      };
    }
    // Java (.java)
    if (lower.endsWith('.java')) {
      return {
        lang: 'java', label: 'JAVA ☕', dot: 'html-dot', isTerminal: true,
        displayName: key,
        starter: `// برنامج Java: ${key}\npublic class Main {\n    public static void main(String[] args) {\n        String msg = "Hello from Java VM!";\n        System.out.println(msg);\n        System.out.println("Calculation: " + (50 * 2));\n    }\n}\n`
      };
    }
    // C# (.cs)
    if (lower.endsWith('.cs')) {
      return {
        lang: 'csharp', label: 'C# 🎯', dot: 'py-dot', isTerminal: true,
        displayName: key,
        starter: `// برنامج C#: ${key}\nusing System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine("Hello from C# .NET!");\n    }\n}\n`
      };
    }
    // SQL (.sql)
    if (lower.endsWith('.sql')) {
      return {
        lang: 'sql', label: 'SQL 🗄️', dot: 'js-dot', isTerminal: true,
        displayName: key,
        starter: `-- استعلام قواعد بيانات SQL: ${key}\nCREATE TABLE Students (id INT, name TEXT, grade INT);\nINSERT INTO Students VALUES (1, 'Ahmed Hosny', 100);\nINSERT INTO Students VALUES (2, 'Sara Ali', 95);\n\nSELECT * FROM Students;\n`
      };
    }
    // PHP (.php)
    if (lower.endsWith('.php')) {
      return {
        lang: 'php', label: 'PHP 🐘', dot: 'cpp-dot', isTerminal: true,
        displayName: key,
        starter: `<?php\n// ملف PHP: ${key}\n$title = "CodeMasr Backend";\necho "Welcome to " . $title . "\\n";\n?>\n`
      };
    }
    // JSON
    if (lower.endsWith('.json')) {
      return {
        lang: 'json', label: 'JSON', dot: 'js-dot', isTerminal: false,
        displayName: key,
        starter: `{\n  "platform": "CodeMasr",\n  "architect": "Eng. Ahmed M Hosny"\n}\n`
      };
    }
    return {
      lang: 'markdown', label: 'TEXT / MD', dot: 'html-dot', isTerminal: false,
      displayName: key,
      starter: `# ${key}\n\nاكتب الكود أو الملاحظات هنا...\n`
    };
  }

  function getMonacoLang(fileKey) {
    return getFileExtensionInfo(fileKey).lang;
  }

  function normalizeFileKey(rawKey) {
    if (!rawKey) return 'html';
    const k = rawKey.trim();
    if (k.toLowerCase() === 'index.html' || k.toLowerCase() === 'html') return 'html';
    if (k.toLowerCase() === 'style.css' || k.toLowerCase() === 'css') return 'css';
    if (k.toLowerCase() === 'script.js' || k.toLowerCase() === 'js') return 'js';
    return k;
  }

  function updateCursorStatusFromTextarea(ta) {
    const posEl = document.getElementById('cursor-position');
    if (!posEl || !ta) return;
    const textUpToCursor = ta.value.substring(0, ta.selectionStart || 0);
    const lines = textUpToCursor.split('\n');
    posEl.textContent = `Ln ${lines.length}, Col ${lines[lines.length - 1].length + 1}`;
  }

  function switchPlaygroundFileTab(rawKey) {
    const fileKey = normalizeFileKey(rawKey);
    if (state.playgroundFiles[fileKey] === undefined) return;
    state.activePlaygroundFile = fileKey;

    const info = getFileExtensionInfo(fileKey);
    const langLabel = document.getElementById('editor-language');
    if (langLabel) langLabel.textContent = info.label;

    const studioStatusFile = document.getElementById('studio-status-file');
    if (studioStatusFile) studioStatusFile.textContent = `${info.displayName} (${info.label})`;

    const content = state.playgroundFiles[fileKey] || '';
    if (usingMonaco && monacoEditorInstance && window.monaco) {
      const model = monacoEditorInstance.getModel();
      if (model) {
        window.monaco.editor.setModelLanguage(model, info.lang);
      }
      if (monacoEditorInstance.getValue() !== content) {
        monacoEditorInstance.setValue(content);
      }
    } else {
      const fallbackEl = document.getElementById('fallback-editor');
      if (fallbackEl) fallbackEl.value = content;
    }

    if (typeof window.refreshAllEditorTabs === 'function') {
      window.refreshAllEditorTabs();
    }

    // تحديث شاشة المعاينة فوراً حسب نوع الملف المفتوح
    const f1 = document.getElementById('preview-frame');
    const f2 = document.getElementById('vscode-preview-frame');
    const docStr = buildFullPlaygroundDocument();
    if (f1) f1.srcdoc = docStr;
    if (f2 && !document.getElementById('vscode-studio-modal')?.hidden) f2.srcdoc = docStr;
  }

// دالة إصلاح شامل ذكي لأي كود به أقواس ناقصة أو زائدة أو علامات تنصيص أو فصلات منقوطة
  function buildSmartAutoFixedCode(code, lang) {
    let fixed = String(code || '');
    // 1. إزالة أي ); أو ) شاردة بعد قوس إغلاق الكلاس الأخير } في Java / C++ / C#
    if (lang === 'java' || lang === 'cpp' || lang === 'c' || lang === 'csharp') {
      fixed = fixed.replace(/\}\s*\)\s*;?\s*$/, '}');
    }

    const lines = fixed.split('\n');
    const repairedLines = lines.map((rawLine) => {
      const commentMatch = rawLine.match(/(\/\/.*|#.*)$/);
      const commentPart = commentMatch ? commentMatch[1] : '';
      let codePart = commentMatch ? rawLine.slice(0, commentMatch.index) : rawLine;
      const trimmed = codePart.trim();
      if (!trimmed) return rawLine;

      // إصلاح علامة تنصيص مزدوجة مفتوحة في نفس السطر
      const doubleQuotes = (codePart.match(/(?<!\\)"/g) || []).length;
      if (doubleQuotes % 2 !== 0) {
        if (codePart.trimEnd().endsWith(';')) {
          codePart = codePart.replace(/;\s*$/, '";');
        } else {
          codePart += '"';
        }
      }

      // إصلاح الأقواس الدائرية ( ) غير المتوازنة في نفس السطر (مثل System.out.println("..." ;)
      const withoutStrings = codePart.replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, '');
      const openP = (withoutStrings.match(/\(/g) || []).length;
      const closeP = (withoutStrings.match(/\)/g) || []).length;
      if (openP > closeP) {
        const missingClose = ')'.repeat(openP - closeP);
        if (codePart.trimEnd().endsWith(';')) {
          codePart = codePart.replace(/\s*;\s*$/, missingClose + ';');
        } else if (lang === 'python' && codePart.trimEnd().endsWith(':')) {
          codePart = codePart.replace(/\s*:\s*$/, missingClose + ':');
        } else {
          codePart = codePart.trimEnd() + missingClose;
        }
      } else if (closeP > openP && /^\s*\}\s*\)\s*;?\s*$/.test(codePart)) {
        codePart = codePart.replace(/\)\s*;?/, '');
      }

      // إصلاح الفصلة المنقوطة الناقصة في Java / C++ / C / C#
      if (lang === 'java' || lang === 'cpp' || lang === 'c' || lang === 'csharp') {
        const t = codePart.trim();
        const isHeaderOrBrace =
          !t ||
          t.startsWith('#') ||
          t.startsWith('@') ||
          t.startsWith('//') ||
          t.startsWith('/*') ||
          t.startsWith('*') ||
          t.endsWith(';') ||
          t.endsWith('{') ||
          t.endsWith('}') ||
          t.endsWith(':') ||
          t.endsWith(',') ||
          /^(public|private|protected|class|interface|enum|struct|namespace|if|else|for|while|do|switch|try|catch|finally|void|int|double|float|String|char|bool|boolean|static)\b.*\(.*\)\s*$/.test(t) ||
          /^(public\s+|private\s+|abstract\s+|final\s+)?(class|interface|enum|struct|namespace)\b/.test(t) ||
          /^else\b/.test(t);

        if (!isHeaderOrBrace) {
          codePart = codePart.replace(/\s*$/, ';');
        }
      }

      return codePart + (commentPart ? ' ' + commentPart : '');
    });

    let result = repairedLines.join('\n');

    // موازنة أقواس المجموعة { } في نهاية الملف
    if (lang !== 'python' && lang !== 'sql') {
      const cleanAll = result.replace(/\/\/.*$/gm, '').replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, '');
      const openC = (cleanAll.match(/\{/g) || []).length;
      const closeC = (cleanAll.match(/\}/g) || []).length;
      if (openC > closeC) {
        result += '\n' + '}\n'.repeat(openC - closeC);
      }
    }

    return result;
  }

  // 2. فاحص الأخطاء ومُشغّل اللغات الحقيقي (Java OOP, C++, C, Python, C#, PHP, TypeScript, SQL)
  function checkTerminalSyntaxAndSuggestFix(code, info) {
    const lang = info.lang;
    const rawLines = String(code || '').split('\n');
    const diagnostics = [];
    const smartFixedAll = buildSmartAutoFixedCode(code, lang);

    // أ) فحص وجود `});` شاردة في نهاية الكلاس (مثل خطأ الصورة بالضبط!)
    if ((lang === 'java' || lang === 'cpp' || lang === 'c' || lang === 'csharp') && /\}\s*\)\s*;?\s*$/.test(code)) {
      diagnostics.push({
        file: state.activePlaygroundFile,
        severity: 'error',
        line: rawLines.length,
        title: `SyntaxError (Line ${rawLines.length}): Stray ');' after closing class brace '}'`,
        explainAr: `بالمصري: في السطر الأخير قفلت الكلاس بـ '});' بدل '}' لوحدها، وفيه قوس ناقص في جملة الطباعة فوق!`,
        explainEn: `Unexpected ');' after class closing brace '}'.`,
        suggestionAr: `حذف ');' الزائدة من نهاية الكلاس وإغلاق قوس الطباعة ')' في مكانه الصحيح قبل الفصلة المنقوطة.`,
        fixedCode: smartFixedAll
      });
    }

    // ب) فحص الأقواس الدائرية ( ) وعلامات التنصيص سطراً بسطر!
    rawLines.forEach((rawLine, idx) => {
      const withoutComment = rawLine.replace(/\/\/.*$/, '').replace(/#.*$/, '');
      if (!withoutComment.trim()) return;

      // فحص علامات التنصيص غير المغلقة في السطر
      const quotesCount = (withoutComment.match(/(?<!\\)"/g) || []).length;
      if (quotesCount % 2 !== 0) {
        diagnostics.push({
          file: state.activePlaygroundFile,
          severity: 'error',
          line: idx + 1,
          title: `SyntaxError (Line ${idx + 1}): Unclosed string literal '"'`,
          explainAr: `بالمصري: في السطر رقم ${idx + 1} فتحت علامة تنصيص '"' للنص بس نسيت تقفلها قبل نهاية السطر!`,
          explainEn: `Unclosed string quote '"' on line ${idx + 1}.`,
          suggestionAr: `إغلاق علامة التنصيص '"' في السطر رقم ${idx + 1}.`,
          fixedCode: smartFixedAll
        });
      }

      // فحص قوس '(' مفتوح في السطر بدون ')' قبل الفصلة المنقوطة (مثل System.out.println("Total salary: " ;)
      const cleanLine = withoutComment.replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, '');
      const lineOpenP = (cleanLine.match(/\(/g) || []).length;
      const lineCloseP = (cleanLine.match(/\)/g) || []).length;
      if (lineOpenP > lineCloseP) {
        diagnostics.push({
          file: state.activePlaygroundFile,
          severity: 'error',
          line: idx + 1,
          title: `SyntaxError (Line ${idx + 1}): missing ')' before ';' in argument list`,
          explainAr: `بالمصري: في السطر رقم ${idx + 1} فتحت قوس '(' في جملة (${ withoutComment.trim() }) بس نسيت تقفله بـ ')' قبل الفصلة المنقوطة!`,
          explainEn: `Missing closing parenthesis ')' on line ${idx + 1}.`,
          suggestionAr: `إضافة القوس ')' قبل الفصلة المنقوطة ';' في السطر رقم ${idx + 1}.`,
          fixedCode: smartFixedAll
        });
      } else if (lineCloseP > lineOpenP) {
        diagnostics.push({
          file: state.activePlaygroundFile,
          severity: 'error',
          line: idx + 1,
          title: `SyntaxError (Line ${idx + 1}): extra closing parenthesis ')'`,
          explainAr: `بالمصري: في السطر رقم ${idx + 1} فيه قوس إغلاق ')' زيادة ملوش قوس فتح مقابله في نفس السطر.`,
          explainEn: `Unmatched closing parenthesis ')' on line ${idx + 1}.`,
          suggestionAr: `موازنة الأقواس في السطر رقم ${idx + 1}.`,
          fixedCode: smartFixedAll
        });
      }
    });

    // ج) فحص توازن أقواس المجموعة { } في الملف كله
    let openCurly = 0, closeCurly = 0;
    rawLines.forEach((l) => {
      const clean = l.replace(/\/\/.*$/, '').replace(/#.*$/, '').replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, '');
      openCurly += (clean.match(/\{/g) || []).length;
      closeCurly += (clean.match(/\}/g) || []).length;
    });

    if (openCurly > closeCurly) {
      diagnostics.push({
        file: state.activePlaygroundFile,
        severity: 'error',
        title: `SyntaxError: Missing ${openCurly - closeCurly} closing curly brace(s) '}'`,
        explainAr: `بالمصري: فتحت قوس مجموعة '{' في الكود ونسيت تقفله بـ '}' (ناقص ${openCurly - closeCurly} قوس إغلاق).`,
        explainEn: `Unbalanced curly braces: ${openCurly} '{' opened vs ${closeCurly} '}' closed.`,
        suggestionAr: `إضافة '${'}'.repeat(openCurly - closeCurly)}' في نهاية الكود لقفل البلوكات المفتوحة.`,
        fixedCode: smartFixedAll
      });
    } else if (closeCurly > openCurly) {
      diagnostics.push({
        file: state.activePlaygroundFile,
        severity: 'error',
        title: `SyntaxError: Extra closing curly brace '}' found`,
        explainAr: `بالمصري: فيه قوس إغلاق '}' زيادة في الكود ملوش قوس فتح '{' مقابله.`,
        explainEn: `Found ${closeCurly} '}' but only ${openCurly} '{'.`,
        suggestionAr: `حذف قوس الإغلاق '}' الزائد من الكود.`,
        fixedCode: code.replace(/\}\s*$/, '')
      });
    }

    // د) فحص أخطاء Python
    if (lang === 'python') {
      rawLines.forEach((rawLine, idx) => {
        const trimmed = rawLine.replace(/#.*$/, '').trim();
        if (!trimmed) return;
        if (/^(if|else|elif|def|for|while|class)\b/.test(trimmed) && !trimmed.endsWith(':')) {
          diagnostics.push({
            file: state.activePlaygroundFile,
            severity: 'error',
            line: idx + 1,
            title: `SyntaxError (Line ${idx + 1}): expected ':' after '${trimmed.split(/\s+/)[0]}' statement`,
            explainAr: `بالمصري: في السطر رقم ${idx + 1} نسيت تحط النقطتين فوق بعض (:) في آخر جملة ${trimmed.split(/\s+/)[0]}.`,
            explainEn: `Python requires ':' at the end of block headers (if, for, def, class).`,
            suggestionAr: `إضافة ':' في نهاية السطر رقم ${idx + 1}.`,
            fixedCode: rawLines.map((l, i) => (i === idx ? l.replace(/\s*$/, ':') : l)).join('\n')
          });
        }
        if (/\b(pritn|pirnt|prnt|Pint|Print)\s*\(/.test(trimmed)) {
          diagnostics.push({
            file: state.activePlaygroundFile,
            severity: 'error',
            line: idx + 1,
            title: `NameError (Line ${idx + 1}): name is not defined (Misspelled 'print')`,
            explainAr: `بالمصري: في السطر رقم ${idx + 1} كتبت دالة الطباعة غلط، والصحيح في بايثون هو print() بحروف صغيرة.`,
            explainEn: `Function 'print' is misspelled or capitalized on line ${idx + 1}.`,
            suggestionAr: `تصحيح اسم الدالة إلى print(...) في السطر ${idx + 1}.`,
            fixedCode: code.replace(/\b(pritn|pirnt|prnt|Pint|Print)\s*\(/g, 'print(')
          });
        }
      });
    }

    // هـ) فحص أخطاء Java / C++ / C / C#
    if (lang === 'java' || lang === 'cpp' || lang === 'c' || lang === 'csharp') {
      rawLines.forEach((rawLine, idx) => {
        const clean = rawLine.replace(/\/\/.*$/, '').trim();
        if (!clean || clean.startsWith('#') || clean.startsWith('@') || clean.startsWith('/*') || clean.startsWith('*')) return;

        if (lang === 'java') {
          if (/\bsystem\.out\./.test(clean)) {
            diagnostics.push({
              file: state.activePlaygroundFile,
              severity: 'error',
              line: idx + 1,
              title: `Compiler Error (Line ${idx + 1}): package system does not exist`,
              explainAr: `بالمصري: في السطر ${idx + 1} كتبت كلمة system بحرف s صغير، وفي لغة الجافا لازم تبدأ بحرف كبير System.out.println.`,
              explainEn: `Java is case-sensitive. Use 'System.out.println' with an uppercase 'S'.`,
              suggestionAr: `تحويل system.out إلى System.out.`,
              fixedCode: code.replace(/\bsystem\.out\./g, 'System.out.')
            });
          }
          if (/\bstring\s+[a-zA-Z_]\w*/.test(clean)) {
            diagnostics.push({
              file: state.activePlaygroundFile,
              severity: 'error',
              line: idx + 1,
              title: `Compiler Error (Line ${idx + 1}): cannot find symbol class 'string'`,
              explainAr: `بالمصري: في السطر ${idx + 1} كتبت نوع النص string بحرف s صغير، وفي الجافا لازم يتكتب String بحرف S كابيتال.`,
              explainEn: `In Java, 'String' is a class and must start with an uppercase 'S'.`,
              suggestionAr: `تحويل كلمة string إلى String.`,
              fixedCode: code.replace(/\bstring(\s+[a-zA-Z_]\w*)/g, 'String$1')
            });
          }
        }

        if (lang === 'cpp' && /\bcout\s*>>/.test(clean)) {
          diagnostics.push({
            file: state.activePlaygroundFile,
            severity: 'error',
            line: idx + 1,
            title: `Compiler Error (Line ${idx + 1}): invalid operands to binary expression ('ostream' and '>>')`,
            explainAr: `بالمصري: في السطر ${idx + 1} استخدمت علامة '>>' مع cout، والصح إن cout بتاخد علامة الأصغر من مرتين '<<'.`,
            explainEn: `Use the insertion operator '<<' with cout instead of '>>'.`,
            suggestionAr: `تغيير 'cout >>' إلى 'cout <<'.`,
            fixedCode: code.replace(/\bcout\s*>>/g, 'cout <<')
          });
        }

        const isBlockOrHeader =
          clean.endsWith(';') ||
          clean.endsWith('{') ||
          clean.endsWith('}') ||
          clean.endsWith(':') ||
          clean.endsWith(',') ||
          clean.endsWith('+') ||
          clean.endsWith('(') ||
          /^(public|private|protected|class|interface|enum|struct|namespace|if|else|for|while|do|switch|try|catch|finally|void|int|double|float|String|char|bool|boolean|static)\b.*\(.*\)\s*$/.test(clean) ||
          /^(public\s+|private\s+|abstract\s+|final\s+)?(class|interface|enum|struct|namespace)\b/.test(clean) ||
          /^else\b/.test(clean);

        if (!isBlockOrHeader) {
          diagnostics.push({
            file: state.activePlaygroundFile,
            severity: 'error',
            line: idx + 1,
            title: `Compiler Error (Line ${idx + 1}): ';' expected at end of statement`,
            explainAr: `بالمصري: في السطر رقم ${idx + 1} (${clean}) نسيت تقفل الجملة البرمجية بفصلة منقوطة (;)!`,
            explainEn: `Missing semicolon ';' at the end of line ${idx + 1}.`,
            suggestionAr: `إضافة فصلة منقوطة ';' في نهاية السطر رقم ${idx + 1}.`,
            fixedCode: smartFixedAll
          });
        }
      });
    }

    return diagnostics;
  }

// مترجم ومشغل فعلي كامل لـ Java / C++ / C# / Python (يفصل رأس الدالة عن جسمها ويدعم الـ OOP والـ Inheritance والـ super)
  function transpileAndRunOOPCode(code, lang) {
    const outputs = [];
    // تنظيف المسافات غير القياسية (\u00A0) التي تأتي عند نسخ الكود
    const normalizedInput = String(code || '').replace(/\u00A0/g, ' ');

    if (lang === 'java' || lang === 'csharp') {
      let src = normalizedInput;
      src = src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '');
      src = src.replace(/^\s*(package|import|using)\s+[^;]+;/gm, '');
      src = src.replace(/@[a-zA-Z_]\w*(?:\s*\([^)]*\))?/g, '');

      // تتبع الحقول والدوال من نوع double/float لطباعة .0 مطابقة لـ Java الحقيقي
      const doubleMembers = new Set();
      const doubleDeclRegex = /\b(?:double|float)\s+([a-zA-Z_]\w*)\b/g;
      let dm;
      while ((dm = doubleDeclRegex.exec(src)) !== null) {
        doubleMembers.add(dm[1]);
      }

      const classRegex = /(?:public\s+|private\s+|protected\s+|abstract\s+|final\s+|static\s+)*class\s+([a-zA-Z_]\w*)(?:\s+(?:extends|:)\s+([a-zA-Z_]\w*))?(?:\s+implements\s+[^{]+)?\s*\{/g;
      const classes = [];
      let match;

      while ((match = classRegex.exec(src)) !== null) {
        const className = match[1];
        const parentName = match[2] || null;
        const bodyStart = match.index + match[0].length;
        let depth = 1;
        let i = bodyStart;
        while (i < src.length && depth > 0) {
          if (src[i] === '{') depth++;
          else if (src[i] === '}') depth--;
          i++;
        }
        const body = src.slice(bodyStart, i - 1);
        classes.push({ className, parentName, body });
      }

      // جمع أسماء الحقول والدوال في الكلاسات لربطها بـ this داخل جسم الدوال فقط
      const allClassMembers = new Set();
      classes.forEach((cls) => {
        const fRegex = /(?:public|private|protected)?\s*(?:static\s+)?(?:final\s+)?(?:String|int|double|float|boolean|bool|char|long|var)\s+([a-zA-Z_]\w*)\s*(?:=\s*[^;]+)?;/g;
        let fm;
        while ((fm = fRegex.exec(cls.body)) !== null) {
          allClassMembers.add(fm[1]);
        }
        const mRegex = /(?:public|private|protected)?\s*(?:static\s+)?(?:final\s+)?(?:void|String|int|double|float|boolean|bool|char|long|[a-zA-Z_]\w*)\s+([a-zA-Z_]\w*)\s*\(/g;
        let mm;
        while ((mm = mRegex.exec(cls.body)) !== null) {
          if (mm[1] !== cls.className && mm[1] !== 'main' && mm[1] !== 'Main') {
            allClassMembers.add(mm[1]);
          }
        }
      });

      let mainBodyJS = '';
      const jsClasses = [];

      classes.forEach((cls) => {
        let b = cls.body;

        // 1. استخراج دالة main إن وجدت داخل الكلاس
        const mainRegex = /(?:public\s+|private\s+|protected\s+|static\s+|final\s+)*void\s+(?:main|Main)\s*\([^)]*\)\s*\{/;
        const mainMatch = mainRegex.exec(b);
        if (mainMatch) {
          const mStart = mainMatch.index + mainMatch[0].length;
          let d = 1, k = mStart;
          while (k < b.length && d > 0) {
            if (b[k] === '{') d++;
            else if (b[k] === '}') d--;
            k++;
          }
          mainBodyJS = b.slice(mStart, k - 1);
          b = b.slice(0, mainMatch.index) + b.slice(k);
        }

        // 2. استخراج الـ Constructors (التي تحمل نفس اسم الكلاس)
        const constructors = [];
        const ctorRegex = new RegExp(`(?:public|private|protected)?\\s*\\b${cls.className}\\s*\\(([^)]*)\\)\\s*\\{`, 'g');
        let cm;
        while ((cm = ctorRegex.exec(b)) !== null) {
          const cStart = cm.index + cm[0].length;
          let d = 1, k = cStart;
          while (k < b.length && d > 0) {
            if (b[k] === '{') d++;
            else if (b[k] === '}') d--;
            k++;
          }
          const paramsRaw = cm[1].trim();
          const paramNames = paramsRaw
            ? paramsRaw.split(',').map(p => p.trim().split(/\s+/).pop().replace(/\[\]/g, ''))
            : [];
          const cBody = b.slice(cStart, k - 1);
          constructors.push({ paramNames, cBody, start: cm.index, end: k });
        }

        for (let idx = constructors.length - 1; idx >= 0; idx--) {
          b = b.slice(0, constructors[idx].start) + b.slice(constructors[idx].end);
        }

        // 3. استخراج الدوال (Methods) واحدة تلو الأخرى وفصل رأس الدالة عن جسمها تماماً!
        const methods = [];
        const methodRegex = /(?:public|private|protected)?\s*(?:static\s+)?(?:final\s+)?(?:synchronized\s+)?(?:void|String|int|double|float|boolean|bool|char|long|[a-zA-Z_]\w*(?:\[\])?)\s+([a-zA-Z_]\w*)\s*\(([^)]*)\)\s*\{/g;
        let mm;
        while ((mm = methodRegex.exec(b)) !== null) {
          const mName = mm[1];
          const paramsRaw = mm[2].trim();
          const pNames = paramsRaw
            ? paramsRaw.split(',').map(p => p.trim().split(/\s+/).pop().replace(/\[\]/g, ''))
            : [];
          const mStart = mm.index + mm[0].length;
          let d = 1, k = mStart;
          while (k < b.length && d > 0) {
            if (b[k] === '{') d++;
            else if (b[k] === '}') d--;
            k++;
          }
          const mBody = b.slice(mStart, k - 1);
          methods.push({ mName, pNames, mBody, start: mm.index, end: k });
        }

        for (let idx = methods.length - 1; idx >= 0; idx--) {
          b = b.slice(0, methods[idx].start) + b.slice(methods[idx].end);
        }

        // 4. استخراج الحقول المتبقية في الكلاس
        const fieldInits = [];
        b.replace(
          /(?:public|private|protected)?\s*(?:static\s+)?(?:final\s+)?(?:String|int|double|float|boolean|bool|char|long|[A-Z]\w*)\s+([a-zA-Z_]\w*)\s*(?:=\s*([^;]+))?;/g,
          function (_, fName, fVal) {
            if (fVal !== undefined) {
              fieldInits.push(`this.${fName} = ${fVal.trim()};`);
            } else {
              fieldInits.push(`if (this.${fName} === undefined) this.${fName} = ${doubleMembers.has(fName) ? '0' : 'null'};`);
            }
            return '';
          }
        );

        // 5. بناء الـ Constructor بصيغة JS سليمة
        let ctorJS = '';
        if (constructors.length === 1) {
          const c = constructors[0];
          let bodyTransformed = transformMethodBody(c.cBody, c.paramNames, allClassMembers, doubleMembers);
          if (cls.parentName && !/\bsuper\s*\(/.test(bodyTransformed)) {
            bodyTransformed = `super();\n` + bodyTransformed;
          }
          ctorJS = `constructor(${c.paramNames.join(', ')}) {\n${bodyTransformed}\n}`;
        } else if (constructors.length > 1) {
          let branches = constructors.map((c) => {
            let bTrans = transformMethodBody(c.cBody, c.paramNames, allClassMembers, doubleMembers);
            const assignArgs = c.paramNames.map((p, i) => `let ${p} = __args[${i}];`).join(' ');
            return `if (__args.length === ${c.paramNames.length}) { ${assignArgs}\n${bTrans}\n}`;
          }).join(' else ');
          ctorJS = `constructor(...__args) {\n${cls.parentName ? 'super(...__args);\n' : ''}${fieldInits.join('\n')}\n${branches}\n}`;
        } else {
          ctorJS = `constructor(...__args) {\n${cls.parentName ? 'super(...__args);\n' : ''}${fieldInits.join('\n')}\n}`;
        }

        // 6. بناء الدوال بعد تحويل جسم كل دالة على حدة دون المساس برأس الدالة
        const methodsJS = methods.map((m) => {
          const transformedBody = transformMethodBody(m.mBody, m.pNames, allClassMembers, doubleMembers);
          return `${m.mName}(${m.pNames.join(', ')}) {\n${transformedBody}\n}`;
        }).join('\n');

        jsClasses.push(`class ${cls.className}${cls.parentName ? ` extends ${cls.parentName}` : ''} {\n${ctorJS}\n${methodsJS}\n}`);
      });

      const fullMainJS = transformMethodBody(mainBodyJS || src, [], new Set(), doubleMembers);

      const runnerScript = `
        function __fmt(v, isDoubleHint) {
          if (typeof v === 'number' && isDoubleHint && Number.isInteger(v)) {
            return v.toFixed(1);
          }
          return v;
        }
        const __out = [];
        const System = {
          out: {
            println: function(...args) { __out.push(args.join('')); },
            print: function(...args) { __out.push(args.join('')); },
            printf: function(fmt, ...args) {
              let i = 0;
              let s = String(fmt || '').replace(/\\n/g, '').replace(/%(?:\\.\\d+)?[dfs]/g, () => args[i++] ?? '');
              __out.push(s);
            }
          }
        };
        const Console = {
          WriteLine: function(...args) { __out.push(args.join('')); },
          Write: function(...args) { __out.push(args.join('')); }
        };
        ${jsClasses.join('\n\n')}
        ${fullMainJS}
        return __out;
      `;

      const res = Function(runnerScript)();
      res.forEach(line => outputs.push(line));
      return outputs;
    }

    if (lang === 'cpp' || lang === 'c') {
      let src = normalizedInput;
      src = src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '');
      src = src.replace(/^\s*#include.*$/gm, '').replace(/^\s*using\s+namespace\s+\w+\s*;/gm, '');

      src = src.replace(/(?:std::)?cout\s*<<([^;]+);/g, function (_, expr) {
        const parts = expr.split('<<').map((p) => {
          const clean = p.trim();
          if (clean === 'endl' || clean === 'std::endl') return '"\\n"';
          return clean;
        });
        return `__cout(${parts.join(', ')});`;
      });

      src = src.replace(/\bprintf\s*\(/g, '__printf(');

      src = src.replace(/\b(?:int|void|double|float|string|std::string|char|bool|long|auto)\s+([a-zA-Z_]\w*)\s*\(([^)]*)\)\s*\{/g, function (_, fnName, params) {
        const pNames = params.trim()
          ? params.split(',').map(p => p.trim().replace(/&|\*/g, '').split(/\s+/).pop().replace(/\[\]/g, '')).join(', ')
          : '';
        return `function ${fnName}(${pNames}) {`;
      });

      src = src.replace(/\b(?:const\s+)?(?:int|double|float|string|std::string|char|bool|long|auto)\s+([a-zA-Z_]\w*(?:\s*=\s*[^;,]+)?(?:\s*,\s*[a-zA-Z_]\w*(?:\s*=\s*[^;,]+)?)*)\s*;/g, 'let $1;');
      src = src.replace(/\bfor\s*\(\s*(?:int|size_t|long|auto)\s+/g, 'for (let ');

      const runnerScript = `
        let __buf = '';
        function __cout(...args) {
          __buf += args.join('');
        }
        function __printf(fmt, ...args) {
          let i = 0;
          let s = String(fmt || '').replace(/%(?:\\.\\d+)?[difs]/g, () => args[i++] ?? '');
          __buf += s;
        }
        ${src}
        if (typeof main === 'function') main();
        return __buf.replace(/\\n$/, '').split('\\n');
      `;
      const res = Function(runnerScript)();
      res.forEach(l => outputs.push(l));
      return outputs;
    }

    if (lang === 'python') {
      let pyLines = normalizedInput.replace(/\r\n/g, '\n').split('\n');
      let jsLines = ['const __out = [];', 'function print(...args) { __out.push(args.join(" ")); }', 'function range(a, b, step = 1) { let arr = []; let start = b === undefined ? 0 : a; let end = b === undefined ? a : b; for (let i = start; i < end; i += step) arr.push(i); return arr; }'];
      let indentStack = [0];

      pyLines.forEach((raw) => {
        const withoutComment = raw.replace(/#.*$/, '');
        if (!withoutComment.trim()) return;
        const indent = raw.match(/^\s*/)[0].length;
        let trimmed = withoutComment.trim();

        while (indent < indentStack[indentStack.length - 1]) {
          indentStack.pop();
          jsLines.push('}');
        }

        if (/^elif\s+(.+):$/.test(trimmed)) {
          const cond = trimmed.replace(/^elif\s+/, '').slice(0, -1).replace(/\band\b/g, '&&').replace(/\bor\b/g, '||').replace(/\bnot\b/g, '!');
          if (jsLines[jsLines.length - 1] === '}') jsLines.pop();
          jsLines.push(`} else if (${cond}) {`);
          indentStack.push(indent + 2);
        } else if (/^else\s*:$/.test(trimmed)) {
          if (jsLines[jsLines.length - 1] === '}') jsLines.pop();
          jsLines.push('} else {');
          indentStack.push(indent + 2);
        } else if (/^if\s+(.+):$/.test(trimmed)) {
          const cond = trimmed.replace(/^if\s+/, '').slice(0, -1).replace(/\band\b/g, '&&').replace(/\bor\b/g, '||').replace(/\bnot\b/g, '!');
          jsLines.push(`if (${cond}) {`);
          indentStack.push(indent + 2);
        } else if (/^for\s+([a-zA-Z_]\w*)\s+in\s+(.+):$/.test(trimmed)) {
          const m = trimmed.match(/^for\s+([a-zA-Z_]\w*)\s+in\s+(.+):$/);
          jsLines.push(`for (let ${m[1]} of ${m[2]}) {`);
          indentStack.push(indent + 2);
        } else if (/^while\s+(.+):$/.test(trimmed)) {
          const cond = trimmed.replace(/^while\s+/, '').slice(0, -1);
          jsLines.push(`while (${cond}) {`);
          indentStack.push(indent + 2);
        } else if (/^def\s+([a-zA-Z_]\w*)\s*\(([^)]*)\)\s*:$/.test(trimmed)) {
          const m = trimmed.match(/^def\s+([a-zA-Z_]\w*)\s*\(([^)]*)\)\s*:$/);
          jsLines.push(`function ${m[1]}(${m[2]}) {`);
          indentStack.push(indent + 2);
        } else {
          trimmed = trimmed.replace(/\bTrue\b/g, 'true').replace(/\bFalse\b/g, 'false').replace(/\bNone\b/g, 'null');
          jsLines.push(trimmed + ';');
        }
      });

      while (indentStack.length > 1) {
        indentStack.pop();
        jsLines.push('}');
      }
      jsLines.push('return __out;');
      return Function(jsLines.join('\n'))();
    }

    if (lang === 'typescript' || lang === 'php') {
      let src = normalizedInput.replace(/<\?php|\?>/g, '');
      src = src.replace(/:\s*(?:string|number|boolean|any|void)(?:\[\])?/g, '');
      src = src.replace(/\becho\s+([^;]+);/g, 'console.log($1);');
      src = src.replace(/\$([a-zA-Z_]\w*)/g, '$1');
      const runner = `
        const __out = [];
        const console = { log: (...a) => __out.push(a.join(' ')) };
        ${src}
        return __out;
      `;
      return Function(runner)();
    }

    return outputs;
  }

  function transformMethodBody(bodyStr, paramNames, classMembers, doubleMembers) {
    let s = String(bodyStr || '');
    const localVars = new Set(paramNames || []);

    // تحويل تعريفات المصفوفات والمتغيرات المحلية إلى let
    s = s.replace(
      /\b(?:final\s+)?(?:String|int|double|float|boolean|bool|char|long|[A-Z][a-zA-Z0-9_]*)(?:\[\])?\s+([a-zA-Z_]\w*)\s*=/g,
      function (_, vName) {
        localVars.add(vName);
        return `let ${vName} =`;
      }
    );
    s = s.replace(
      /\bfor\s*\(\s*(?:int|double|float|String|long|var|[A-Z][a-zA-Z0-9_]*)\s+([a-zA-Z_]\w*)\s*:\s*([^)]+)\)/g,
      function (_, vName, listExpr) {
        localVars.add(vName);
        return `for (let ${vName} of ${listExpr})`;
      }
    );
    s = s.replace(/\bfor\s*\(\s*(?:int|double|long|var)\s+([a-zA-Z_]\w*)/g, function (_, vName) {
      localVars.add(vName);
      return `for (let ${vName}`;
    });

    // إضافة this. للحقول والدوال الخاصة بالكلاس داخل جسم الدالة فقط
    classMembers.forEach((member) => {
      if (!localVars.has(member)) {
        const reg = new RegExp(`(?<!\\.|this\\.|super\\.|new\\s+|function\\s+|let\\s+)\\b${member}\\b(?!\\s*:)`, 'g');
        s = s.replace(reg, `this.${member}`);
      }
    });

    // تنسيق قيم double بـ (.0) فقط عند طباعتها داخل System.out.print / Console.Write دون المساس بالعمليات الحسابية مثل return salary + bonus
    s = s.replace(/(System\.out\.print(?:ln)?|Console\.Write(?:Line)?)\s*\(([\s\S]*?)\)\s*;/g, function (full, fnCall, insideArgs) {
      let updatedArgs = insideArgs;
      doubleMembers.forEach((dName) => {
        const dReg = new RegExp(`((?:this\\.|[a-zA-Z_]\\w*\\.)?\\b${dName}\\b(?:\\s*\\([^)]*\\))?)`, 'g');
        updatedArgs = updatedArgs.replace(dReg, `__fmt($1, true)`);
      });
      return `${fnCall}(${updatedArgs});`;
    });

    return s;
  }

  function executeTerminalLanguage(code, info) {
    const lang = info.lang;
    const cmdMap = {
      python: `python3 ${info.displayName}`,
      cpp: `g++ ${info.displayName} -o main && ./main`,
      c: `gcc ${info.displayName} -o main && ./main`,
      java: `javac ${info.displayName} && java Main`,
      csharp: `dotnet run ${info.displayName}`,
      sql: `sqlite3 database.db < ${info.displayName}`,
      php: `php ${info.displayName}`,
      typescript: `ts-node ${info.displayName}`
    };

    // 1. فحص الأخطاء البرمجية أولاً: إذا وُجد خطأ، نوقف التشغيل تماماً ونعرض سبب الخطأ والحل المقترح مع زر الإصلاح!
    const syntaxDiagnostics = checkTerminalSyntaxAndSuggestFix(code, info);
    if (syntaxDiagnostics.length > 0) {
      syntaxDiagnostics.forEach(d => appendDiagnosticToConsole(d));
      const firstErr = syntaxDiagnostics[0];
      const fixedStr = firstErr.fixedCode || buildSmartAutoFixedCode(code, lang);
      window.__codemasrPendingFix = { fileKey: state.activePlaygroundFile, fixedCode: fixedStr };
      const encodedFix = encodeURIComponent(fixedStr).replace(/'/g, '%27');
      return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { margin: 0; padding: 20px; background: #090d16; color: #e2e8f0; font-family: 'Cairo', 'DM Mono', monospace; font-size: 13px; line-height: 1.7; }
    .halt-box { background: #160d12; border: 2px solid #f85149; border-radius: 14px; overflow: hidden; box-shadow: 0 14px 34px rgba(248, 81, 73, 0.2); }
    .halt-header { background: rgba(248, 81, 73, 0.18); padding: 12px 16px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(248, 81, 73, 0.35); color: #ff7b72; font-weight: 800; }
    .halt-body { padding: 18px; direction: rtl; text-align: right; }
    .err-code { direction: ltr; text-align: left; background: #0d1117; border: 1px solid #30363d; color: #ffa198; padding: 10px 14px; border-radius: 8px; font-family: 'DM Mono', monospace; margin-bottom: 12px; }
    .explain-box { background: rgba(255, 255, 255, 0.04); border-right: 4px solid #f85149; padding: 10px 14px; border-radius: 6px; margin-bottom: 12px; }
    .solution-box { background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.4); border-right: 4px solid #10b981; padding: 12px 14px; border-radius: 8px; color: #a7f3d0; }
    .fix-btn { margin-top: 12px; background: #10b981; color: #052e16; border: 0; padding: 9px 16px; border-radius: 8px; font-weight: 800; cursor: pointer; font-size: 12px; display: inline-flex; align-items: center; gap: 6px; }
    .fix-btn:hover { background: #34d399; }
  </style>
</head>
<body>
  <div class="halt-box">
    <div class="halt-header">
      <span>⛔ Compilation Failed — Execution Halted (${escapeHtml(info.label)})</span>
      <span>Exit Code 1</span>
    </div>
    <div class="halt-body">
      <div style="font-weight:800; color:#ff7b72; margin-bottom:8px;">تم إيقاف تشغيل الكود لوجود خطأ برمجي يجب إصلاحه أولاً:</div>
      <div class="err-code">✖ ${escapeHtml(firstErr.title)}</div>
      <div class="explain-box">
        <b>🧐 إيه سبب الإيرور ده؟</b><br>
        ${escapeHtml(firstErr.explainAr)}
      </div>
      <div class="solution-box">
        <b>💡 الحل المقترح:</b><br>
        ${escapeHtml(firstErr.suggestionAr || 'راجع السطر المذكور وصحح القوس أو الفصلة المنقوطة.')}
        <br><button class="fix-btn" onclick="parent.postMessage({ source: 'codemasr-autofix', fileKey: '${escapeHtml(state.activePlaygroundFile)}', fixedCode: decodeURIComponent('${encodedFix}') }, '*')">⚡ صلح الخطأ تلقائياً وشغّل الكود</button>
      </div>
    </div>
  </div>
</body>
</html>`;
    }

    // 2. إذا كان الكود سليماً، ننفذه فعلياً ونعرض المخرجات
    let outputs = [];
    try {
      if (lang === 'sql') {
        const rows = [];
        String(code || '').split('\n').forEach((rawLine) => {
          const ins = rawLine.trim().match(/INSERT\s+INTO\s+\w+\s+VALUES\s*\(([^)]+)\)/i);
          if (ins) rows.push(ins[1].split(',').map(c => c.trim().replace(/^['"]|['"]$/g, '')));
        });
        if (/SELECT\s+/i.test(code)) {
          if (rows.length > 0) {
            outputs.push('┌────┬──────────────────┬───────┐');
            outputs.push('│ ID │ Name             │ Grade │');
            outputs.push('├────┼──────────────────┼───────┤');
            rows.forEach((r) => {
              outputs.push(`│ ${String(r[0] || '').padEnd(2)} │ ${String(r[1] || '').padEnd(16)} │ ${String(r[2] || '').padEnd(5)} │`);
            });
            outputs.push('└────┴──────────────────┴───────┘');
            outputs.push(`\n(${rows.length} rows returned in 0.003s)`);
          } else {
            outputs.push('Query executed successfully.');
          }
        }
      } else {
        outputs = transpileAndRunOOPCode(code, lang);
      }
    } catch (runtimeErr) {
      const explained = explainRuntimeError(runtimeErr.message);
      const fallbackFixed = buildSmartAutoFixedCode(code, lang);
      window.__codemasrPendingFix = { fileKey: state.activePlaygroundFile, fixedCode: fallbackFixed };
      const encodedFallbackFix = encodeURIComponent(fallbackFixed).replace(/'/g, '%27');
      appendDiagnosticToConsole({
        file: state.activePlaygroundFile,
        severity: 'error',
        title: `Runtime / Compilation Error: ${runtimeErr.message}`,
        explainAr: explained.explainAr,
        explainEn: explained.explainEn,
        fixedCode: fallbackFixed
      });
      return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:20px;background:#090d16;color:#e2e8f0;font-family:'Cairo','DM Mono',monospace;">
  <div style="background:#160d12;border:2px solid #f85149;border-radius:14px;padding:18px;direction:rtl;text-align:right;">
    <h3 style="margin:0 0 10px;color:#ff7b72;">⛔ توقف التشغيل بسبب خطأ برمجي (Error Detected)</h3>
    <div style="direction:ltr;text-align:left;background:#0d1117;padding:10px;border-radius:8px;color:#ffa198;font-family:monospace;margin-bottom:10px;">✖ ${escapeHtml(runtimeErr.toString())}</div>
    <p style="margin:0 0 8px;"><b>الشرح:</b> ${escapeHtml(explained.explainAr)}</p>
    <p style="margin:0 0 12px;color:#34d399;"><b>💡 الحل المقترح:</b> اضغط على الزر بالأسفل لإصلاح الأقواس والفصلات المنقوطة وتنسيق الكود تلقائياً.</p>
    <button style="background:#10b981;color:#052e16;border:0;padding:9px 16px;border-radius:8px;font-weight:800;cursor:pointer;font-size:12px;" onclick="parent.postMessage({ source: 'codemasr-autofix', fileKey: '${escapeHtml(state.activePlaygroundFile)}', fixedCode: decodeURIComponent('${encodedFallbackFix}') }, '*')">⚡ صلح الخطأ تلقائياً وشغّل الكود</button>
  </div>
</body>
</html>`;
    }

    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { margin: 0; padding: 20px; background: #090d16; color: #e2e8f0; font-family: 'DM Mono', Consolas, monospace; font-size: 13px; line-height: 1.7; }
    .term-box { background: #0f172a; border: 1px solid #1e293b; border-radius: 12px; overflow: hidden; box-shadow: 0 12px 30px rgba(0,0,0,0.45); }
    .term-header { background: #1e293b; padding: 8px 14px; display: flex; align-items: center; justify-content: space-between; font-size: 11px; color: #94a3b8; }
    .term-badge { background: #10b98125; color: #34d399; border: 1px solid #10b981; padding: 2px 8px; border-radius: 6px; font-weight: 700; }
    .term-body { padding: 16px; }
    .cmd-line { color: #38bdf8; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #334155; }
    .stdout { color: #4ade80; white-space: pre-wrap; margin: 0; font-size: 14px; }
    .exit-status { margin-top: 16px; font-size: 11px; color: #64748b; }
  </style>
</head>
<body>
  <div class="term-box">
    <div class="term-header">
      <span>›_ CodeMasr Multi-Language Terminal (${escapeHtml(info.label)})</span>
      <span class="term-badge">✓ Compiled & Executed</span>
    </div>
    <div class="term-body">
      <div class="cmd-line">$ ${escapeHtml(cmdMap[lang] || info.displayName)}</div>
      ${outputs.length > 0 ? `<pre class="stdout">${escapeHtml(outputs.join('\n'))}</pre>` : `<pre class="stdout" style="color:#94a3b8;">(تم تنفيذ البرنامج بنجاح بدون أخطاء)</pre>`}
      <div class="exit-status">Process finished with exit code 0 · Engineered by Eng. Ahmed M Hosny</div>
    </div>
  </div>
</body>
</html>`;
  }

  function buildFullPlaygroundDocument(targetHtmlKey) {
    const activeInfo = getFileExtensionInfo(state.activePlaygroundFile);

    // 1. إذا كان الملف المفتوح لغة Terminal (Java, C++, Python, C, C#, SQL, PHP)
    if (!targetHtmlKey && activeInfo.isTerminal) {
      const code = state.playgroundFiles[state.activePlaygroundFile] || '';
      return executeTerminalLanguage(code, activeInfo);
    }

    // 2. فحص أخطاء HTML / CSS / JS قبل بناء المعاينة: إذا وُجد خطأ نوقف التشغيل فوراً ولا نعرض الكود المكسور!
    const htmlKeyToRender = targetHtmlKey || (activeInfo.lang === 'html' ? state.activePlaygroundFile : 'html');
    const htmlPart = state.playgroundFiles[htmlKeyToRender] || state.playgroundFiles.html || '';

    let allCss = '';
    let allJs = '';
    Object.keys(state.playgroundFiles).forEach((k) => {
      const inf = getFileExtensionInfo(k);
      if (inf.lang === 'css') allCss += '\n' + (state.playgroundFiles[k] || '');
      if (inf.lang === 'javascript') allJs += '\n' + (state.playgroundFiles[k] || '');
    });

    const webIssues = analyzeCodeDiagnostics(htmlPart, allCss, allJs, 'web');
    const webErrors = webIssues.filter(i => i.severity === 'error');
    if (webErrors.length > 0) {
      const err = webErrors[0];
      const targetTab = (err.file || 'html').toLowerCase();
      const encodedFix = encodeURIComponent(err.fixedCode || '');
      return `<!DOCTYPE html>
<html dir="rtl">
<head>
  <meta charset="UTF-8">
  <style>
    body { margin: 0; padding: 24px; background: #140c14; color: #f8fafc; font-family: 'Cairo', system-ui, sans-serif; }
    .err-card { background: #1f111b; border: 2px solid #f85149; border-radius: 14px; padding: 20px; max-width: 620px; margin: 10px auto; box-shadow: 0 14px 35px rgba(248, 81, 73, 0.22); }
    .err-title { color: #ff7b72; font-size: 17px; font-weight: 800; margin: 0 0 10px; }
    .err-tech { direction: ltr; text-align: left; font-family: 'DM Mono', monospace; font-size: 12px; background: #0d1117; color: #ffa198; padding: 10px 12px; border-radius: 8px; margin-bottom: 12px; border: 1px solid #30363d; }
    .err-ar { font-size: 13px; line-height: 1.7; background: rgba(255,255,255,0.04); padding: 10px 14px; border-radius: 8px; border-right: 4px solid #f85149; margin-bottom: 12px; }
    .err-fix { font-size: 13px; line-height: 1.7; background: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.4); padding: 12px 14px; border-radius: 8px; color: #a7f3d0; }
    .fix-btn { margin-top: 10px; background: #10b981; color: #052e16; border: 0; padding: 9px 16px; border-radius: 8px; font-weight: 800; cursor: pointer; font-size: 12px; }
  </style>
</head>
<body>
  <div class="err-card">
    <h2 class="err-title">⛔ تم إيقاف تشغيل الكود لوجود خطأ في ملف (${escapeHtml(err.file || 'CODE')})</h2>
    <div class="err-tech">✖ ${escapeHtml(err.title)}</div>
    <div class="err-ar"><b>🧐 سبب الخطأ:</b><br>${escapeHtml(err.explainAr)}</div>
    <div class="err-fix">
      <b>💡 الحل المقترح:</b><br>
      ${escapeHtml(err.explainEn)}
      ${err.fixedCode ? `<br><button class="fix-btn" onclick="parent.postMessage({ source: 'codemasr-autofix', fileKey: '${escapeHtml(targetTab)}', fixedCode: decodeURIComponent('${encodedFix}') }, '*')">⚡ صلح الخطأ تلقائياً وشغّل الكود</button>` : ''}
    </div>
  </div>
</body>
</html>`;
    }

    const bridgeScript = `
      <script>
        (function(){
          function send(level, args) {
            try {
              var msg = Array.prototype.slice.call(args).map(function(a){
                return typeof a === 'object' ? JSON.stringify(a) : String(a);
              }).join(' ');
              parent.postMessage({ source: 'codemasr-preview', level: level, message: msg }, '*');
            } catch(e) {}
          }
          var origLog = console.log, origWarn = console.warn, origErr = console.error, origInfo = console.info;
          console.log = function(){ send('info', arguments); origLog.apply(console, arguments); };
          console.info = function(){ send('info', arguments); origInfo.apply(console, arguments); };
          console.warn = function(){ send('warn', arguments); origWarn.apply(console, arguments); };
          console.error = function(){ send('error', arguments); origErr.apply(console, arguments); };
          window.onerror = function(msg, url, lineNo) {
            var fullMsg = msg + (lineNo ? ' (Line ' + lineNo + ')' : '');
            send('runtime-error', [fullMsg]);
            document.body.innerHTML = '<div dir="rtl" style="font-family:system-ui,sans-serif;background:#1f111b;color:#fff;border:2px solid #f85149;border-radius:12px;padding:18px;margin:16px;"><h3 style="color:#ff7b72;margin:0 0 8px;">⛔ توقف التشغيل بسبب خطأ في الجافاسكريبت (Runtime Error)</h3><pre style="direction:ltr;text-align:left;background:#0d1117;color:#ffa198;padding:10px;border-radius:6px;overflow:auto;">' + fullMsg + '</pre><p style="margin:8px 0 0;color:#a7f3d0;font-size:13px;">💡 راجع نافذة الـ Console بالأسفل لمعرفة شرح الخطأ بالمصري وكيفية حله.</p></div>';
            return false;
          };
          window.addEventListener('wheel', function(e) {
            if (e.ctrlKey) {
              e.preventDefault();
              parent.postMessage({ source: 'codemasr-preview-zoom', deltaY: e.deltaY }, '*');
            }
          }, { passive: false });
          document.addEventListener('click', function(e) {
            var link = e.target.closest('a[href]');
            if (!link) return;
            var href = link.getAttribute('href') || '';
            if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto:')) {
              e.preventDefault();
              parent.postMessage({ source: 'codemasr-navigate-file', targetFile: href }, '*');
            }
          });
        })();
      <\/script>
    `;

    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>${allCss}</style>
  ${bridgeScript}
</head>
<body>
  ${htmlPart}
  <script>
    try {
      ${allJs}
    } catch (err) {
      window.onerror(err.toString(), '', 0);
    }
  <\/script>
</body>
</html>`;
  }

  function runPlaygroundCode(incrementStats) {
    const frame = document.getElementById('preview-frame');
    const studioFrame = document.getElementById('vscode-preview-frame');
    if (!frame) return;

    clearConsoleOutput();

    if (incrementStats) {
      state.runCount++;
      saveState();
      refreshAllUI();
    }

    const activeInfo = getFileExtensionInfo(state.activePlaygroundFile);
    if (!activeInfo.isTerminal) {
      const issues = analyzeCodeDiagnostics(
        state.playgroundFiles.html,
        state.playgroundFiles.css,
        state.playgroundFiles.js,
        'web'
      );
      issues.forEach((diag) => appendDiagnosticToConsole(diag));
      const hasErrors = issues.some(i => i.severity === 'error');
      if (hasErrors && incrementStats) {
        showToast('⛔ تم إيقاف التشغيل لوجود خطأ في الكود! راجع الحل المقترح.');
      } else if (incrementStats) {
        showToast('▶ Code executed successfully!');
      }
    }

    const docOutput = buildFullPlaygroundDocument();
    frame.srcdoc = docOutput;
    if (studioFrame && !document.getElementById('vscode-studio-modal')?.hidden) {
      studioFrame.srcdoc = docOutput;
    }
  }

  function clearConsoleOutput() {
    const out = document.getElementById('console-output');
    const countEl = document.getElementById('console-count');
    if (out) {
      out.innerHTML = `<div class="console-empty"><span>✓</span> No errors. Your console is clear.</div>`;
    }
    if (countEl) countEl.textContent = '0';
  }

  function appendConsoleEntry(level, text) {
    const out = document.getElementById('console-output');
    const countEl = document.getElementById('console-count');
    if (!out) return;

    const empty = out.querySelector('.console-empty');
    if (empty) empty.remove();

    if (level === 'runtime-error') {
      const explained = explainRuntimeError(text);
      appendDiagnosticToConsole({
        severity: 'error',
        file: 'JS',
        title: text,
        explainAr: explained.explainAr,
        explainEn: explained.explainEn
      });
      return;
    }

    const div = document.createElement('div');
    div.className = `console-entry ${level === 'error' ? 'error' : (level === 'warn' ? 'warn' : 'info')}`;
    const prefix = level === 'error' ? '✖ ' : (level === 'warn' ? '⚠ ' : '› ');
    div.textContent = prefix + text;
    out.appendChild(div);
    out.scrollTop = out.scrollHeight;

    if (countEl) {
      countEl.textContent = String(out.querySelectorAll('.console-entry').length);
    }
  }

  function appendDiagnosticToConsole(diag) {
    const out = document.getElementById('console-output');
    const countEl = document.getElementById('console-count');
    if (!out) return;

    const empty = out.querySelector('.console-empty');
    if (empty) empty.remove();

    const div = document.createElement('div');
    div.className = `console-entry ${diag.severity === 'error' ? 'error' : 'warn'}`;
    div.innerHTML = `
      <div style="font-weight:700;">${diag.severity === 'error' ? '✖' : '⚠'} [${diag.file || 'CODE'}] ${escapeHtml(diag.title)}</div>
      <div style="margin-top:2px;">${escapeHtml(diag.explainAr)}</div>
      <div style="opacity:0.85;font-size:8px;">${escapeHtml(diag.explainEn)}</div>
    `;

    if (diag.fixedCode) {
      const fixBtn = document.createElement('button');
      fixBtn.type = 'button';
      fixBtn.textContent = '⚡ صلح الغلط تلقائياً (Apply Suggested Fix)';
      fixBtn.style.cssText = 'margin-top:5px;padding:3px 8px;border-radius:4px;border:1px solid currentColor;background:#fff;color:#d54f59;font-weight:800;font-size:8px;cursor:pointer;';
      fixBtn.addEventListener('click', () => {
        const targetTab = (diag.file || 'HTML').toLowerCase();
        if (state.playgroundFiles[targetTab] !== undefined) {
          state.playgroundFiles[targetTab] = diag.fixedCode;
          if (state.activePlaygroundFile === targetTab) {
            switchPlaygroundFileTab(targetTab);
          }
          runPlaygroundCode(true);
          showToast('⚡ تم إصلاح الخطأ تلقائياً وتحديث المعاينة!');
        }
      });
      div.appendChild(fixBtn);
    }

    out.appendChild(div);
    out.scrollTop = out.scrollHeight;

    if (countEl) {
      countEl.textContent = String(out.querySelectorAll('.console-entry').length);
    }
  }

  /* ==========================================================================
   * 11. MODALS: SEARCH, HELP, FEEDBACK & FIREBASE CLOUD CONFIG
   * ========================================================================== */
  function openModal(symbol, title, bodyHtml, actionText, onAction) {
    const backdrop = document.getElementById('modal-backdrop');
    const symEl = document.getElementById('modal-symbol');
    const titleEl = document.getElementById('modal-title');
    const bodyEl = document.getElementById('modal-body');
    const actionBtn = document.getElementById('modal-action');

    if (!backdrop) return;
    if (symEl) symEl.textContent = symbol || '✦';
    if (titleEl) titleEl.textContent = title || 'CodeMasr';
    if (bodyEl) bodyEl.innerHTML = bodyHtml || '';
    if (actionBtn) {
      actionBtn.textContent = actionText || 'Got it';
      actionBtn.onclick = () => {
        if (typeof onAction === 'function') {
          const shouldClose = onAction();
          if (shouldClose === false) return;
        }
        closeModal();
      };
    }
    backdrop.hidden = false;
  }

  function closeModal() {
    const backdrop = document.getElementById('modal-backdrop');
    if (backdrop) backdrop.hidden = true;
  }

  function openFirebaseAndProfileModal() {
    const currentCfg = getActiveFirebaseConfig();
    const cfgPlaceholder = currentCfg ? JSON.stringify(currentCfg, null, 2) : '{\n  "apiKey": "AIzaSy...",\n  "authDomain": "your-app.firebaseapp.com",\n  "projectId": "your-project-id",\n  "appId": "1:..."\n}';

    const html = `
      <p style="margin-bottom:10px;">
        الحالة الحالية: <b style="color:${state.userProfile.isCloudSynced ? '#18a878' : '#f2a64a'}">
          ${state.userProfile.isCloudSynced ? '🟢 متصل بسحابة Firebase Firestore' : '🟡 وضع الحفظ المحلي (Offline Local Mode)'}
        </b>
      </p>
      <div style="margin-bottom:10px;">
        <label style="display:block;font-size:10px;font-weight:800;margin-bottom:4px;">اسم المتعلم (Developer Name):</label>
        <input id="modal-dev-name" type="text" value="${escapeHtml(state.userProfile.name)}" style="width:100%;padding:8px 10px;border:1px solid var(--line);border-radius:8px;font-size:11px;" />
      </div>
      <div style="margin-bottom:8px;">
        <label style="display:block;font-size:10px;font-weight:800;margin-bottom:4px;">إعدادات Firebase Config JSON (اختياري للمزامنة السحابية الفورية):</label>
        <textarea id="modal-fb-config" rows="5" spellcheck="false" style="width:100%;padding:8px;border:1px solid var(--line);border-radius:8px;font:10px/1.5 'DM Mono',monospace;direction:ltr;text-align:left;">${escapeHtml(cfgPlaceholder)}</textarea>
        <small style="display:block;font-size:9px;color:var(--muted);margin-top:4px;">ضع كائن firebaseConfig الخاص بمشروعك ليتم ربط Firestore و Auth تلقائياً وحفظ تقدم الطلاب سحابياً.</small>
      </div>
    `;

    openModal('☁', 'Developer Profile & Firebase Sync', html, 'Save & Connect ✦', () => {
      const nameInput = document.getElementById('modal-dev-name');
      const cfgInput = document.getElementById('modal-fb-config');
      if (nameInput && nameInput.value.trim()) {
        state.userProfile.name = nameInput.value.trim();
      }
      if (cfgInput && cfgInput.value.trim()) {
        try {
          const cleaned = cfgInput.value.trim()
            .replace(/^const\s+\w+\s*=\s*/, '')
            .replace(/;$/, '');
          const parsedCfg = JSON.parse(cleaned);
          if (parsedCfg.apiKey && parsedCfg.projectId && !parsedCfg.apiKey.includes('AIzaSy...')) {
            localStorage.setItem(STORAGE_KEYS.FIREBASE_CFG, JSON.stringify(parsedCfg));
            initFirebaseBackend();
          }
        } catch (err) {
          showToast('⚠ صيغة JSON غير مكتملة، تم حفظ الاسم محلياً.');
        }
      }
      saveState();
      refreshAllUI();
      showToast('✓ تم تحديث بيانات الملف الشخصي بنجاح!');
      return true;
    });
  }

  function openSearchModal(initialQuery) {
    const allItems = [];
    Object.values(COURSES).forEach((c) => {
      c.lessons.forEach((l, idx) => {
        allItems.push({
          courseId: c.id,
          courseTitle: c.title,
          lessonIdx: idx,
          title: l.title,
          num: l.num,
          keywords: `${c.title} ${l.title} ${l.lead} ${l.explanation}`.toLowerCase()
        });
      });
    });

    const html = `
      <input id="modal-search-input" type="search" placeholder="ابحث عن درس أو وسم مثل: h1, form, flexbox, table..." value="${escapeHtml(initialQuery || '')}" style="width:100%;padding:9px 12px;border:1px solid var(--line);border-radius:9px;font-size:11px;margin-bottom:8px;" />
      <div id="modal-search-results" class="search-results"></div>
    `;

    openModal('⌕', 'Search Lessons & Topics', html, 'Close');

    const inputEl = document.getElementById('modal-search-input');
    const resultsEl = document.getElementById('modal-search-results');

    function renderFilter(q) {
      const query = (q || '').trim().toLowerCase();
      const matches = query
        ? allItems.filter(item => item.keywords.includes(query))
        : allItems.slice(0, 8);

      resultsEl.innerHTML = '';
      if (matches.length === 0) {
        resultsEl.innerHTML = `<p style="font-size:10px;color:var(--muted);">لم يتم العثور على نتائج مطابقة لـ "${escapeHtml(q)}".</p>`;
        return;
      }

      matches.forEach((m) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'search-result';
        btn.innerHTML = `<b>${m.num}. ${escapeHtml(m.title)}</b> <small style="float:right;color:var(--purple);">${escapeHtml(m.courseTitle)} →</small>`;
        btn.addEventListener('click', () => {
          closeModal();
          openCourseLesson(m.courseId, m.lessonIdx);
        });
        resultsEl.appendChild(btn);
      });
    }

    renderFilter(initialQuery || '');
    if (inputEl) {
      setTimeout(() => inputEl.focus(), 50);
      inputEl.addEventListener('input', () => renderFilter(inputEl.value));
    }
  }

  /* ==========================================================================
   * 12. TOAST NOTIFICATIONS & UTILITIES
   * ========================================================================== */
  function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>✦</span><div>${escapeHtml(message)}</div>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 260);
    }, 3200);
  }

  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

function cleanAndFormatCodeString(rawCode, lang) {
    let code = String(rawCode || '').replace(/\r\n/g, '\n').trim();
    if (!code) return '';

    // 1. تنسيق وتنظيف كود HTML
    if (lang === 'html') {
      const voidTags = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
      code = code.replace(/>\s+</g, '>\n<');
      const lines = code.split('\n');
      let indent = 0;
      const formatted = [];

      lines.forEach((rawLine) => {
        const line = rawLine.trim();
        if (!line) return;
        const isClosing = /^<\/[a-zA-Z0-9-]+>/.test(line);
        const isSelfClosingOrVoid = /\/>$/.test(line) || /^<!/.test(line) || /^<[a-zA-Z0-9-]+[^>]*>.*<\/[a-zA-Z0-9-]+>$/.test(line);
        const tagMatch = line.match(/^<([a-zA-Z0-9-]+)/);
        const tagName = tagMatch ? tagMatch[1].toLowerCase() : '';

        if (isClosing) indent = Math.max(0, indent - 1);
        formatted.push('  '.repeat(indent) + line);
        if (!isClosing && !isSelfClosingOrVoid && tagName && !voidTags.has(tagName)) {
          indent++;
        }
      });
      return formatted.join('\n');
    }

    // 2. تنسيق وتنظيف كود Python
    if (lang === 'python') {
      return code
        .split('\n')
        .map((line) => {
          const leading = (line.match(/^\s*/) || [''])[0].replace(/\t/g, '    ');
          const content = line.trim().replace(/\s*,\s*/g, ', ');
          return content ? leading + content : '';
        })
        .join('\n')
        .replace(/\n{3,}/g, '\n\n');
    }

    // 3. تنسيق وتنظيف اللغات ذات الأقواس { } (Java, C++, C, C#, JS, TS, CSS, PHP)
    const tabUnit = (lang === 'java' || lang === 'cpp' || lang === 'c' || lang === 'csharp') ? '    ' : '  ';

    // فصل الأقواس والفصلات المنقوطة الملتصقة (مع الحفاظ على حلقات for والمصفوفات)
    let normalized = '';
    let inString = false, strChar = '', parenDepth = 0;
    for (let i = 0; i < code.length; i++) {
      const ch = code[i];
      const prev = code[i - 1];
      if ((ch === '"' || ch === "'") && prev !== '\\') {
        if (!inString) { inString = true; strChar = ch; }
        else if (strChar === ch) { inString = false; }
        normalized += ch;
        continue;
      }
      if (inString) {
        normalized += ch;
        continue;
      }
      if (ch === '(') parenDepth++;
      else if (ch === ')') parenDepth = Math.max(0, parenDepth - 1);

      if (ch === '{') {
        normalized = normalized.replace(/[ \t]*$/, '') + ' {\n';
      } else if (ch === '}') {
        normalized = normalized.replace(/[ \t]*$/, '') + '\n}\n';
      } else if (ch === ';' && parenDepth === 0) {
        normalized += ';\n';
      } else {
        normalized += ch;
      }
    }

    const rawLines = normalized.split('\n');
    let depth = 0;
    const result = [];

    rawLines.forEach((rawLine) => {
      const line = rawLine.trim();
      if (!line) return;

      if (line.startsWith('}')) {
        depth = Math.max(0, depth - 1);
      }

      result.push(tabUnit.repeat(depth) + line);

      if (line.endsWith('{')) {
        depth++;
      }
    });

    return result.join('\n').replace(/\n{3,}/g, '\n\n');
  }

  function formatCurrentPlaygroundCode() {
    const key = state.activePlaygroundFile || 'html';
    const info = getFileExtensionInfo(key);
    const currentCode = usingMonaco && monacoEditorInstance
      ? monacoEditorInstance.getValue()
      : (state.playgroundFiles[key] || '');

    const cleaned = cleanAndFormatCodeString(currentCode, info.lang);
    state.playgroundFiles[key] = cleaned;

    if (usingMonaco && monacoEditorInstance) {
      monacoEditorInstance.setValue(cleaned);
    } else {
      const fallbackEl = document.getElementById('fallback-editor');
      if (fallbackEl) fallbackEl.value = cleaned;
    }

    saveState();
    showToast(`✨ Clean Code: تم تنسيق وترتيب كود ${info.displayName} بنجاح!`);
  }

  // ربط زرار Clean Code في شاشة الفول سكرين واستقبال أمر الإصلاح التلقائي (Auto-Fix) من شاشة المعاينة
  document.addEventListener('click', (e) => {
    if (e.target && e.target.closest('#studio-clean-code')) {
      formatCurrentPlaygroundCode();
    }
  });

window.addEventListener('message', (e) => {
    if (e.data && e.data.source === 'codemasr-autofix') {
      const targetKey = normalizeFileKey(e.data.fileKey || (window.__codemasrPendingFix && window.__codemasrPendingFix.fileKey) || state.activePlaygroundFile);
      const rawFixed = e.data.fixedCode || (window.__codemasrPendingFix && window.__codemasrPendingFix.fixedCode);
      if (rawFixed && state.playgroundFiles[targetKey] !== undefined) {
        const info = getFileExtensionInfo(targetKey);
        const nicelyFormatted = cleanAndFormatCodeString(rawFixed, info.lang);
        state.playgroundFiles[targetKey] = nicelyFormatted;

        if (usingMonaco && monacoEditorInstance) {
          monacoEditorInstance.setValue(nicelyFormatted);
        } else {
          const fallbackEl = document.getElementById('fallback-editor');
          if (fallbackEl) fallbackEl.value = nicelyFormatted;
        }

        saveState();
        runPlaygroundCode(true);

        const toastContainer = document.getElementById('toast-container');
        if (toastContainer) toastContainer.style.zIndex = '10050';
        showToast('⚡ تم إصلاح الخطأ وتنسيق الكود وإعادة التشغيل بنجاح!');
      }
    }
  });
  /* ==========================================================================
   * 13. EVENT BINDINGS FOR EVERY SINGLE ELEMENT IN INDEX.HTML
   * ========================================================================== */
  function bindAllEvents() {
    // =========================================================================
    // 1. منطق التكبير والتصغير المستقل للكود وللمعاينة (Independent Zoom)
    // =========================================================================
    let currentCodeFontSize = 13;
    let currentPreviewZoom = 100;

    function setCodeZoom(size) {
      currentCodeFontSize = Math.max(10, Math.min(28, size));
      const valEl = document.getElementById('code-zoom-val');
      const studioValEl = document.getElementById('studio-code-zoom-val');
      if (valEl) valEl.textContent = `${currentCodeFontSize}px`;
      if (studioValEl) studioValEl.textContent = `${currentCodeFontSize}px`;
      
      if (monacoEditorInstance) {
        monacoEditorInstance.updateOptions({ fontSize: currentCodeFontSize });
      }
      const fallback = document.getElementById('fallback-editor');
      if (fallback) fallback.style.fontSize = `${currentCodeFontSize}px`;
    }

    function setPreviewZoom(pct) {
      currentPreviewZoom = Math.max(50, Math.min(200, pct));
      const valEl = document.getElementById('prev-zoom-val');
      const studioValEl = document.getElementById('studio-prev-zoom-val');
      if (valEl) valEl.textContent = `${currentPreviewZoom}%`;
      if (studioValEl) studioValEl.textContent = `${currentPreviewZoom}%`;

      const scale = currentPreviewZoom / 100;
      const f1 = document.getElementById('preview-frame');
      const f2 = document.getElementById('vscode-preview-frame');
      if (f1) {
        f1.style.transform = `scale(${scale})`;
        f1.style.width = `${100 / scale}%`;
        f1.style.height = `${100 / scale}%`;
      }
      if (f2) {
        f2.style.transform = `scale(${scale})`;
        f2.style.width = `${100 / scale}%`;
        f2.style.height = `${100 / scale}%`;
      }
    }

// =========================================================================
    // تكبير وتصغير مستقل بنسبة 100% عبر بكرة الفأرة (Ctrl + Mouse Wheel)
    // =========================================================================

    // 1. تكبير وتصغير خط الكود ببكرة الفأرة (سواء في الشاشة العادية أو الفول سكرين)
    const codeContainers = [
      'editor-panel-box',
      'editor-host',
      'monaco-editor',
      'studio-editor-pane',
      'vscode-editor-container',
      'fallback-editor'
    ];
    codeContainers.forEach((id) => {
      document.getElementById(id)?.addEventListener('wheel', (e) => {
        if (e.ctrlKey) {
          e.preventDefault();
          setCodeZoom(currentCodeFontSize + (e.deltaY < 0 ? 1 : -1));
        }
      }, { passive: false });
    });

    // 2. تكبير وتصغير شاشة المعاينة ببكرة الفأرة من الحاوية الخارجية
    const previewContainers = [
      'preview-panel-box',
      'preview-viewport-wrapper',
      'studio-preview-pane',
      'vscode-preview-pane',
      'preview-panel'
    ];
    previewContainers.forEach((id) => {
      document.getElementById(id)?.addEventListener('wheel', (e) => {
        if (e.ctrlKey) {
          e.preventDefault();
          setPreviewZoom(currentPreviewZoom + (e.deltaY < 0 ? 10 : -10));
        }
      }, { passive: false });
    });

    // 3. التقاط بكرة الفأرة عندما تكون واقفة داخل صفحة المعاينة (iframe) نفسها
    window.addEventListener('message', (event) => {
      if (event.data && event.data.source === 'codemasr-preview-zoom') {
        setPreviewZoom(currentPreviewZoom + (event.data.deltaY < 0 ? 10 : -10));
      }
    });

    // =========================================================================
    // 2. حرية أوضاع العرض في الفول سكرين (كود فقط / شاشتين / معاينة فقط)
    // =========================================================================
    const btnModeCode = document.getElementById('mode-code-only');
    const btnModeSplit = document.getElementById('mode-split-view');
    const btnModePrev = document.getElementById('mode-preview-only');
    const studioEditor = document.getElementById('studio-editor-pane');
    const studioPrev = document.getElementById('studio-preview-pane');
    const studioSplitter = document.getElementById('studio-splitter');

    function setStudioLayoutMode(mode) {
      btnModeCode?.classList.toggle('active', mode === 'code');
      btnModeSplit?.classList.toggle('active', mode === 'split');
      btnModePrev?.classList.toggle('active', mode === 'prev');

      if (mode === 'code') {
        studioEditor?.classList.remove('hide-pane');
        studioEditor?.classList.add('maximize-pane');
        studioPrev?.classList.add('hide-pane');
        if (studioSplitter) studioSplitter.style.display = 'none';
      } else if (mode === 'prev') {
        studioEditor?.classList.add('hide-pane');
        studioPrev?.classList.remove('hide-pane');
        studioPrev?.classList.add('maximize-pane');
        if (studioSplitter) studioSplitter.style.display = 'none';
      } else {
        studioEditor?.classList.remove('hide-pane', 'maximize-pane');
        studioPrev?.classList.remove('hide-pane', 'maximize-pane');
        studioEditor.style.flex = '1 1 50%';
        studioPrev.style.flex = '1 1 50%';
        if (studioSplitter) studioSplitter.style.display = 'flex';
      }

      if (monacoEditorInstance) {
        setTimeout(() => monacoEditorInstance.layout(), 60);
      }
    }

    btnModeCode?.addEventListener('click', () => setStudioLayoutMode('code'));
    btnModeSplit?.addEventListener('click', () => setStudioLayoutMode('split'));
    btnModePrev?.addEventListener('click', () => setStudioLayoutMode('prev'));

    // سحب الفاصل المرن في الفول سكرين يميناً ويساراً
    if (studioSplitter && studioEditor && studioPrev) {
      let isStudioDragging = false;
      studioSplitter.addEventListener('mousedown', () => {
        isStudioDragging = true;
        studioSplitter.classList.add('is-dragging');
        document.body.style.cursor = 'col-resize';
      });

      window.addEventListener('mousemove', (e) => {
        if (!isStudioDragging) return;
        const box = document.getElementById('studio-workbench-split');
        const rect = box.getBoundingClientRect();
        const pct = Math.max(15, Math.min(85, ((e.clientX - rect.left) / rect.width) * 100));
        studioEditor.style.flex = `0 0 ${pct}%`;
        studioPrev.style.flex = `0 0 ${100 - pct}%`;
        if (monacoEditorInstance) monacoEditorInstance.layout();
      });

      window.addEventListener('mouseup', () => {
        if (isStudioDragging) {
          isStudioDragging = false;
          studioSplitter.classList.remove('is-dragging');
          document.body.style.cursor = '';
        }
      });
    }
// فتح استوديو فيجوال كود ملء الشاشة ونقل المحرر الحي إليه
    const openStudioBtn = document.getElementById('open-studio-btn');
    const studioModal = document.getElementById('vscode-studio-modal');
    const closeStudioBtn = document.getElementById('close-studio-btn');
    const studioPreview = document.getElementById('vscode-preview-frame');
    const studioRunBtn = document.getElementById('studio-run-code');
    const studioReloadBtn = document.getElementById('studio-reload-preview');
    const editorHost = document.getElementById('editor-host');
    const studioEditorContainer = document.getElementById('vscode-editor-container');
    const studioTabsBar = document.getElementById('vscode-tabs-bar');

// رسم التبويبات مع زر (+) لإضافة ملف جديد وزر (⬇) لتحميل الملف وزر (×) لحذف الملفات الإضافية
    function renderStudioTabs() {
      const pgTabsBar = document.getElementById('playground-file-tabs') || document.querySelector('.file-tabs');
      const coreKeys = ['html', 'css', 'js'];
      const allKeys = Object.keys(state.playgroundFiles);

      // 1. تحديث تبويبات الفول سكرين (VS Code Studio)
      if (studioTabsBar) {
        studioTabsBar.innerHTML = allKeys.map((key) => {
          const info = getFileExtensionInfo(key);
          const isCore = coreKeys.includes(key);
          const isActive = state.activePlaygroundFile === key;
          return `
            <div class="vscode-tab ${isActive ? 'active' : ''}" data-file="${escapeHtml(key)}">
              <span class="file-dot ${info.dot}"></span>
              <span class="tab-filename">${escapeHtml(info.displayName)}</span>
              ${!isCore ? `<button type="button" class="tab-close-x" data-delete-file="${escapeHtml(key)}" title="حذف الملف">×</button>` : ''}
            </div>
          `;
        }).join('') + `
          <button type="button" class="vscode-add-tab-btn" id="studio-plus-file-btn" title="إضافة ملف جديد (+ New File)">+</button>
          <button type="button" class="vscode-add-tab-btn" id="studio-download-file-btn" title="تحميل الملف الحالي على جهازك">⬇</button>
        `;

        studioTabsBar.querySelectorAll('.vscode-tab').forEach((tabEl) => {
          tabEl.addEventListener('click', (e) => {
            if (e.target.closest('.tab-close-x')) return;
            switchPlaygroundFileTab(tabEl.getAttribute('data-file'));
          });
        });

        studioTabsBar.querySelectorAll('.tab-close-x').forEach((delBtn) => {
          delBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            deleteCustomFile(delBtn.getAttribute('data-delete-file'));
          });
        });

        document.getElementById('studio-plus-file-btn')?.addEventListener('click', promptCreateNewFile);
        document.getElementById('studio-download-file-btn')?.addEventListener('click', downloadActiveFile);
      }

      // 2. تحديث تبويبات الـ Playground العادي أيضاً بنفس زر (+)
      if (pgTabsBar) {
        pgTabsBar.innerHTML = allKeys.map((key) => {
          const info = getFileExtensionInfo(key);
          const isCore = coreKeys.includes(key);
          const isActive = state.activePlaygroundFile === key;
          return `
            <button type="button" class="file-tab ${isActive ? 'active' : ''}" data-file="${escapeHtml(key)}">
              <span class="file-dot ${info.dot}"></span> ${escapeHtml(info.displayName)}
              ${!isCore ? `<span class="tab-close-x" data-delete-file="${escapeHtml(key)}" title="حذف">×</span>` : ''}
            </button>
          `;
        }).join('') + `
          <button type="button" class="pg-plus-tab-btn" id="pg-plus-file-btn" title="إضافة ملف جديد (+)">+</button>
        `;

        pgTabsBar.querySelectorAll('.file-tab').forEach((tabEl) => {
          tabEl.addEventListener('click', (e) => {
            if (e.target.closest('.tab-close-x')) return;
            switchPlaygroundFileTab(tabEl.getAttribute('data-file'));
          });
        });

        pgTabsBar.querySelectorAll('.tab-close-x').forEach((delBtn) => {
          delBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            deleteCustomFile(delBtn.getAttribute('data-delete-file'));
          });
        });

        document.getElementById('pg-plus-file-btn')?.addEventListener('click', promptCreateNewFile);
      }
    }

window.refreshAllEditorTabs = renderStudioTabs;

    // Smart Modal to create a new file with automatic extension & language detection (English UI)
    function promptCreateNewFile() {
      const modalHtml = `
        <div>
          <p style="margin:0 0 8px; font-size:12px;">Enter file name with extension (e.g. <code>about.html</code>, <code>main.py</code>, <code>main.cpp</code>):</p>
          <input id="new-file-name-input" type="text" placeholder="e.g. app.py or program.cpp" style="width:100%; padding:10px 12px; border:1px solid var(--purple); border-radius:9px; font:600 13px 'DM Mono',monospace;" autocomplete="off" />
          <div id="ext-live-detector" style="margin-top:10px; padding:8px 12px; border-radius:8px; background:var(--purple-soft); color:var(--purple); font-size:11px; font-weight:700;">
            ✨ Type a file extension to auto-detect language & starter template...
          </div>
          <div style="display:flex; gap:6px; flex-wrap:wrap; margin-top:10px;">
            <small style="width:100%; color:var(--muted); font-size:10px;">Quick Templates:</small>
            <button type="button" class="quick-ext-chip" data-sample="main.py">🐍 main.py</button>
            <button type="button" class="quick-ext-chip" data-sample="main.cpp">⚙️ main.cpp</button>
            <button type="button" class="quick-ext-chip" data-sample="main.c">🛠️ main.c</button>
            <button type="button" class="quick-ext-chip" data-sample="Main.java">☕ Main.java</button>
            <button type="button" class="quick-ext-chip" data-sample="Program.cs">🎯 Program.cs</button>
            <button type="button" class="quick-ext-chip" data-sample="query.sql">🗄️ query.sql</button>
            <button type="button" class="quick-ext-chip" data-sample="about.html">🌐 about.html</button>
            <button type="button" class="quick-ext-chip" data-sample="cards.css">🎨 cards.css</button>
            <button type="button" class="quick-ext-chip" data-sample="app.js">⚡ app.js</button>
          </div>
        </div>
      `;

      openModal('➕', 'Create New File', modalHtml, 'Create & Open File ✦', () => {
        const input = document.getElementById('new-file-name-input');
        let rawName = (input ? input.value : '').trim();
        if (!rawName) {
          showToast('⚠ Please enter a file name first.');
          return false;
        }
        if (!rawName.includes('.')) {
          rawName += '.html';
        }
        const normalized = normalizeFileKey(rawName);
        if (state.playgroundFiles[normalized] !== undefined) {
          switchPlaygroundFileTab(normalized);
          showToast(`📄 Switched to existing file: ${rawName}`);
          return true;
        }

        const extInfo = getFileExtensionInfo(normalized);
        state.playgroundFiles[normalized] = extInfo.starter;
        saveState();
        switchPlaygroundFileTab(normalized);
        showToast(`✓ Created ${extInfo.displayName} (${extInfo.label})`);
        return true;
      });

      const nameInput = document.getElementById('new-file-name-input');
      const detectorBox = document.getElementById('ext-live-detector');

      function updateLiveDetector() {
        if (!nameInput || !detectorBox) return;
        const val = nameInput.value.trim();
        if (!val) {
          detectorBox.innerHTML = '✨ Type a file extension to auto-detect language & starter template...';
          return;
        }
        const testName = val.includes('.') ? val : val + '.html';
        const info = getFileExtensionInfo(testName);
        detectorBox.innerHTML = `✅ Auto-Detected: <b>${escapeHtml(info.displayName)}</b> — Language: <b>${info.label}</b>`;
      }

      if (nameInput) {
        setTimeout(() => nameInput.focus(), 50);
        nameInput.addEventListener('input', updateLiveDetector);
        nameInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            document.getElementById('modal-action')?.click();
          }
        });
      }

      document.querySelectorAll('.quick-ext-chip').forEach((chip) => {
        chip.addEventListener('click', () => {
          if (nameInput) {
            nameInput.value = chip.getAttribute('data-sample');
            updateLiveDetector();
            nameInput.focus();
          }
        });
      });
    }

    // Auto-Complete ON / OFF Toggle (English UI)
    function applyAutoCompleteSetting(isEnabled) {
      state.autoCompleteEnabled = Boolean(isEnabled);
      localStorage.setItem('codemasr_autocomplete', state.autoCompleteEnabled ? 'on' : 'off');

      const toggleBtn = document.getElementById('studio-autocomplete-toggle');
      const statusText = document.getElementById('autocomplete-status-text');
      if (toggleBtn) {
        toggleBtn.classList.toggle('active', state.autoCompleteEnabled);
      }
      if (statusText) {
        statusText.textContent = state.autoCompleteEnabled ? 'ON' : 'OFF';
      }

      if (monacoEditorInstance) {
        monacoEditorInstance.updateOptions({
          quickSuggestions: state.autoCompleteEnabled ? { other: true, comments: false, strings: true } : false,
          suggestOnTriggerCharacters: state.autoCompleteEnabled,
          wordBasedSuggestions: state.autoCompleteEnabled ? 'currentDocument' : 'off',
          parameterHints: { enabled: state.autoCompleteEnabled },
          snippetSuggestions: state.autoCompleteEnabled ? 'top' : 'none'
        });
      }
    }

    document.getElementById('studio-autocomplete-toggle')?.addEventListener('click', () => {
      applyAutoCompleteSetting(!state.autoCompleteEnabled);
      showToast(
        state.autoCompleteEnabled
          ? '💡 IntelliSense Auto-Complete: ON'
          : '🔒 IntelliSense Auto-Complete: OFF (Practice Mode)'
      );
    });

// =========================================================================
    // موسوعة الاختصارات الذكية الشاملة لكل اللغات (IntelliSense & Tab Snippets)
    // =========================================================================
    const CODE_SNIPPETS_LIBRARY = {
      java: [
        { trigger: 'sout', title: 'طباعة سطر في الجافا (System.out.println)', desc: 'يكتب جملة الطباعة الكاملة في الجافا بضغطة Tab', snippet: 'System.out.println("${1:Hello World}");$0', plain: 'System.out.println("Hello World");' },
        { trigger: 'souf', title: 'طباعة منسقة (System.out.printf)', desc: 'طباعة نص منسق مع متغيرات في الجافا', snippet: 'System.out.printf("${1:Value = %d}\\n", ${2:value});$0', plain: 'System.out.printf("Value = %d\\n", value);' },
        { trigger: 'psvm', title: 'الدالة الرئيسية (public static void main)', desc: 'يبني دالة التشغيل الرئيسية main في الجافا', snippet: 'public static void main(String[] args) {\n    ${1:System.out.println("Hello Java!");}\n}$0', plain: 'public static void main(String[] args) {\n    System.out.println("Hello Java!");\n}' },
        { trigger: 'main', title: 'هيكل كلاس جافا كامل مع main', desc: 'يبني كلاس Main كامل جاهز للتشغيل', snippet: 'public class ${1:Main} {\n    public static void main(String[] args) {\n        ${2:System.out.println("Welcome to CodeMasr Java!");}\n    }\n}$0', plain: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Welcome to CodeMasr Java!");\n    }\n}' },
        { trigger: 'class', title: 'إنشاء كلاس OOP كامل مع Constructor', desc: 'يبني كلاس جافا مع الحقول والـ Constructor ودالة عرض', snippet: 'class ${1:Employee} {\n    protected String name;\n    protected double salary;\n\n    public ${1:Employee}(String name, double salary) {\n        this.name = name;\n        this.salary = salary;\n    }\n\n    public void displayInfo() {\n        System.out.println("Name: " + name + " | Salary: " + salary);\n    }\n}$0', plain: 'class Employee {\n    protected String name;\n    protected double salary;\n\n    public Employee(String name, double salary) {\n        this.name = name;\n        this.salary = salary;\n    }\n\n    public void displayInfo() {\n        System.out.println("Name: " + name + " | Salary: " + salary);\n    }\n}' },
        { trigger: 'ext', title: 'وراثة كلاس (Inheritance extends + super)', desc: 'يبني كلاس فرعي يرث من كلاس أب باستخدام extends و super', snippet: 'class ${1:Manager} extends ${2:Employee} {\n    private double bonus;\n\n    public ${1:Manager}(String name, double salary, double bonus) {\n        super(name, salary);\n        this.bonus = bonus;\n    }\n\n    public double getTotalSalary() {\n        return salary + bonus;\n    }\n}$0', plain: 'class Manager extends Employee {\n    private double bonus;\n\n    public Manager(String name, double salary, double bonus) {\n        super(name, salary);\n        this.bonus = bonus;\n    }\n\n    public double getTotalSalary() {\n        return salary + bonus;\n    }\n}' },
        { trigger: 'fori', title: 'حلقة تكرار (for loop)', desc: 'حلقة for قياسية بالعداد i', snippet: 'for (int ${1:i} = 0; ${1:i} < ${2:10}; ${1:i}++) {\n    System.out.println(${1:i});\n}$0', plain: 'for (int i = 0; i < 10; i++) {\n    System.out.println(i);\n}' },
        { trigger: 'fore', title: 'حلقة تكرار للمصفوفات (for-each)', desc: 'يمر على جميع عناصر المصفوفة أو القائمة', snippet: 'for (${1:String} ${2:item} : ${3:items}) {\n    System.out.println(${2:item});\n}$0', plain: 'for (String item : items) {\n    System.out.println(item);\n}' },
        { trigger: 'ifelse', title: 'شرط (if / else)', desc: 'جملة شرطية كاملة if-else', snippet: 'if (${1:score >= 50}) {\n    System.out.println("${2:Passed}");\n} else {\n    System.out.println("${3:Failed}");\n}$0', plain: 'if (score >= 50) {\n    System.out.println("Passed");\n} else {\n    System.out.println("Failed");\n}' },
        { trigger: 'while', title: 'حلقة (while loop)', desc: 'حلقة تكرار طالما الشرط محقق', snippet: 'while (${1:count < 5}) {\n    System.out.println(${2:count});\n    count++;\n}$0', plain: 'while (count < 5) {\n    System.out.println(count);\n    count++;\n}' },
        { trigger: 'switch', title: 'جملة (switch / case)', desc: 'بنية switch متعددة الحالات', snippet: 'switch (${1:day}) {\n    case 1:\n        System.out.println("Saturday");\n        break;\n    default:\n        System.out.println("Other day");\n        break;\n}$0', plain: 'switch (day) {\n    case 1:\n        System.out.println("Saturday");\n        break;\n    default:\n        System.out.println("Other day");\n        break;\n}' },
        { trigger: 'try', title: 'معالجة الأخطاء (try / catch)', desc: 'كتلة try-catch لالتقاط الاستثناءات', snippet: 'try {\n    ${1:int res = 10 / 2;}\n} catch (Exception e) {\n    System.out.println("Error: " + e.getMessage());\n}$0', plain: 'try {\n    int res = 10 / 2;\n} catch (Exception e) {\n    System.out.println("Error: " + e.getMessage());\n}' }
      ],
      cpp: [
        { trigger: 'main', title: 'هيكل برنامج C++ كامل', desc: 'يبني برنامج C++ مع مكتبة iostream ودالة main', snippet: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    ${1:cout << "Hello C++ World!" << endl;}\n    return 0;\n}$0', plain: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    cout << "Hello C++ World!" << endl;\n    return 0;\n}' },
        { trigger: 'cout', title: 'طباعة سطر في C++ (cout << ... << endl)', desc: 'يطبع نص أو متغير متبوعاً بسطر جديد', snippet: 'cout << "${1:Message}" << endl;$0', plain: 'cout << "Message" << endl;' },
        { trigger: 'cin', title: 'استقبال مدخلات (cin >>)', desc: 'قراءة قيمة متغير من المستخدم', snippet: 'cin >> ${1:variable};$0', plain: 'cin >> variable;' },
        { trigger: 'fori', title: 'حلقة تكرار (for loop)', desc: 'حلقة for قياسية في C++', snippet: 'for (int ${1:i} = 0; ${1:i} < ${2:10}; ${1:i}++) {\n    cout << ${1:i} << endl;\n}$0', plain: 'for (int i = 0; i < 10; i++) {\n    cout << i << endl;\n}' },
        { trigger: 'ifelse', title: 'جملة شرطية (if / else)', desc: 'قاعدة شرطية if-else في C++', snippet: 'if (${1:x > 0}) {\n    cout << "${2:Positive}" << endl;\n} else {\n    cout << "${3:Non-positive}" << endl;\n}$0', plain: 'if (x > 0) {\n    cout << "Positive" << endl;\n} else {\n    cout << "Non-positive" << endl;\n}' },
        { trigger: 'class', title: 'كلاس C++ متكامل', desc: 'تعريف كلاس في C++ مع خصائص ودالة', snippet: 'class ${1:Student} {\npublic:\n    string name;\n    int grade;\n\n    ${1:Student}(string n, int g) {\n        name = n;\n        grade = g;\n    }\n\n    void printInfo() {\n        cout << name << ": " << grade << endl;\n    }\n};$0', plain: 'class Student {\npublic:\n    string name;\n    int grade;\n\n    Student(string n, int g) {\n        name = n;\n        grade = g;\n    }\n\n    void printInfo() {\n        cout << name << ": " << grade << endl;\n    }\n};' },
        { trigger: 'func', title: 'تعريف دالة في C++', desc: 'دالة تستقبل معاملات وتعيد قيمة', snippet: '${1:int} ${2:addNumbers}(int a, int b) {\n    return a + b;\n}$0', plain: 'int addNumbers(int a, int b) {\n    return a + b;\n}' }
      ],
      c: [
        { trigger: 'main', title: 'هيكل برنامج لغة C كامل', desc: 'يتضمن stdio.h ودالة main', snippet: '#include <stdio.h>\n\nint main() {\n    printf("${1:Hello C World!}\\n");\n    return 0;\n}$0', plain: '#include <stdio.h>\n\nint main() {\n    printf("Hello C World!\\n");\n    return 0;\n}' },
        { trigger: 'pf', title: 'طباعة في لغة C (printf)', desc: 'دالة الطباعة المنسقة printf', snippet: 'printf("${1:Result = %d}\\n", ${2:value});$0', plain: 'printf("Result = %d\\n", value);' },
        { trigger: 'sf', title: 'قراءة مدخل في C (scanf)', desc: 'دالة الإدخال scanf', snippet: 'scanf("%d", &${1:num});$0', plain: 'scanf("%d", &num);' },
        { trigger: 'fori', title: 'حلقة تكرار (for loop)', desc: 'حلقة for في لغة C', snippet: 'for (int ${1:i} = 0; ${1:i} < ${2:10}; ${1:i}++) {\n    printf("%d\\n", ${1:i});\n}$0', plain: 'for (int i = 0; i < 10; i++) {\n    printf("%d\\n", i);\n}' }
      ],
      python: [
        { trigger: 'pr', title: 'طباعة في بايثون (print)', desc: 'دالة الطباعة السريعة في بايثون', snippet: 'print("${1:Hello Python!}")$0', plain: 'print("Hello Python!")' },
        { trigger: 'fstr', title: 'طباعة منسقة (f-string print)', desc: 'طباعة نص مدمج بالمتغيرات في بايثون', snippet: 'print("Name:", ${1:name}, "| Score:", ${2:score})$0', plain: 'print("Name:", name, "| Score:", score)' },
        { trigger: 'def', title: 'تعريف دالة (def function)', desc: 'إنشاء دالة بايثون واستدعاؤها', snippet: 'def ${1:calculate_sum}(${2:a, b}):\n    return ${3:a + b}\n\nprint(${1:calculate_sum}(10, 20))$0', plain: 'def calculate_sum(a, b):\n    return a + b\n\nprint(calculate_sum(10, 20))' },
        { trigger: 'for', title: 'حلقة تكرار (for i in range)', desc: 'حلقة تكرار رقمية في بايثون', snippet: 'for ${1:i} in range(${2:5}):\n    print("Step:", ${1:i})$0', plain: 'for i in range(5):\n    print("Step:", i)' },
        { trigger: 'ifelse', title: 'شرط كامل (if / elif / else)', desc: 'قاعدة شرطية متعددة في بايثون', snippet: 'if ${1:score >= 90}:\n    print("Excellent")\nelif ${2:score >= 50}:\n    print("Passed")\nelse:\n    print("Try Again")$0', plain: 'if score >= 90:\n    print("Excellent")\nelif score >= 50:\n    print("Passed")\nelse:\n    print("Try Again")' },
        { trigger: 'while', title: 'حلقة (while loop)', desc: 'حلقة while في بايثون', snippet: 'count = 0\nwhile count < ${1:5}:\n    print(count)\n    count = count + 1$0', plain: 'count = 0\nwhile count < 5:\n    print(count)\n    count = count + 1' }
      ],
      csharp: [
        { trigger: 'cw', title: 'طباعة سطر في C# (Console.WriteLine)', desc: 'جملة الطباعة المباشرة في C#', snippet: 'Console.WriteLine("${1:Hello C#!}");$0', plain: 'Console.WriteLine("Hello C#!");' },
        { trigger: 'svm', title: 'دالة التشغيل (static void Main)', desc: 'الدالة الرئيسية في C#', snippet: 'using System;\n\nclass Program {\n    static void Main(string[] args) {\n        Console.WriteLine("${1:Welcome to C#!}");\n    }\n}$0', plain: 'using System;\n\nclass Program {\n    static void Main(string[] args) {\n        Console.WriteLine("Welcome to C#!");\n    }\n}' },
        { trigger: 'fori', title: 'حلقة تكرار في C# (for loop)', desc: 'حلقة تكرار رقمية في C#', snippet: 'for (int ${1:i} = 0; ${1:i} < ${2:10}; ${1:i}++) {\n    Console.WriteLine(${1:i});\n}$0', plain: 'for (int i = 0; i < 10; i++) {\n    Console.WriteLine(i);\n}' }
      ],
      javascript: [
        { trigger: 'clg', title: 'طباعة في الكونسول (console.log)', desc: 'طباعة رسالة أو متغير في الكونسول', snippet: 'console.log("${1:Debug message:}", ${2:data});$0', plain: 'console.log("Debug message:", data);' },
        { trigger: 'gid', title: 'اختيار عنصر بالـ ID (getElementById)', desc: 'جلب عنصر HTML عبر المعرف الخاص به', snippet: 'const ${1:el} = document.getElementById("${2:element-id}");$0', plain: 'const el = document.getElementById("element-id");' },
        { trigger: 'qs', title: 'اختيار عنصر بـ CSS (querySelector)', desc: 'جلب أول عنصر يطابق المحدد', snippet: 'const ${1:el} = document.querySelector("${2:.my-class}");$0', plain: 'const el = document.querySelector(".my-class");' },
        { trigger: 'ael', title: 'حدث نقر (addEventListener click)', desc: 'تشغيل كود عند الضغط على زر أو عنصر', snippet: '${1:btn}.addEventListener("click", () => {\n  ${2:console.log("Button clicked!");}\n});$0', plain: 'btn.addEventListener("click", () => {\n  console.log("Button clicked!");\n});' },
        { trigger: 'fn', title: 'تعريف دالة (function)', desc: 'دالة جافاسكريبت قياسية', snippet: 'function ${1:handleAction}(${2:param}) {\n  ${3:return param;}\n}$0', plain: 'function handleAction(param) {\n  return param;\n}' },
        { trigger: 'afn', title: 'دالة سهمية (Arrow Function)', desc: 'تعريف دالة حديثة ES6', snippet: 'const ${1:compute} = (${2:a, b}) => {\n  return ${3:a + b};\n};$0', plain: 'const compute = (a, b) => {\n  return a + b;\n};' },
        { trigger: 'fore', title: 'تكرار مصفوفة (forEach)', desc: 'المرور على كل عنصر في المصفوفة', snippet: '${1:items}.forEach((${2:item}, index) => {\n  console.log(index, ${2:item});\n});$0', plain: 'items.forEach((item, index) => {\n  console.log(index, item);\n});' },
        { trigger: 'fetch', title: 'جلب بيانات من API (async fetch)', desc: 'طلب بيانات JSON من السيرفر', snippet: 'async function ${1:loadData}() {\n  try {\n    const res = await fetch("${2:https://api.example.com/data}");\n    const data = await res.json();\n    console.log(data);\n  } catch (err) {\n    console.error("Fetch error:", err);\n  }\n}$0', plain: 'async function loadData() {\n  try {\n    const res = await fetch("https://api.example.com/data");\n    const data = await res.json();\n    console.log(data);\n  } catch (err) {\n    console.error("Fetch error:", err);\n  }\n}' }
      ],
      html: [
        { trigger: 'ht', title: 'هيكل صفحة HTML5 متكامل بالعربية', desc: 'يبني صفحة HTML5 قياسية بترميز UTF-8 واتجاه RTL', snippet: '<!DOCTYPE html>\n<html lang="ar" dir="rtl">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>${1:عنوان الصفحة}</title>\n</head>\n<body>\n  <h1>${2:مرحباً بك في موقعي}</h1>\n  <p>${3:ابدأ الكتابة هنا...}</p>\n</body>\n</html>$0', plain: '<!DOCTYPE html>\n<html lang="ar" dir="rtl">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>عنوان الصفحة</title>\n</head>\n<body>\n  <h1>مرحباً بك في موقعي</h1>\n  <p>ابدأ الكتابة هنا...</p>\n</body>\n</html>' },
        { trigger: 'navbar', title: 'شريط تنقل احترافي (Semantic Header & Nav)', desc: 'رأس صفحة مع شعار وقائمة روابط', snippet: '<header class="site-header">\n  <h1>${1:شعار الموقع}</h1>\n  <nav>\n    <ul>\n      <li><a href="#home">الرئيسية</a></li>\n      <li><a href="#services">الخدمات</a></li>\n      <li><a href="#contact">تواصل معنا</a></li>\n    </ul>\n  </nav>\n</header>$0', plain: '<header class="site-header">\n  <h1>شعار الموقع</h1>\n  <nav>\n    <ul>\n      <li><a href="#home">الرئيسية</a></li>\n      <li><a href="#services">الخدمات</a></li>\n      <li><a href="#contact">تواصل معنا</a></li>\n    </ul>\n  </nav>\n</header>' },
        { trigger: 'card', title: 'بطاقة منتج أو مقال (Card Component)', desc: 'كارت يحتوي صورة وعنوان ووصف وزر', snippet: '<article class="card">\n  <img src="${1:image.jpg}" alt="${2:وصف الصورة}" width="320" height="200" loading="lazy">\n  <div class="card-body">\n    <h3>${3:عنوان البطاقة}</h3>\n    <p>${4:وصف مختصر للمحتوى يوضح الفكرة الأساسية.}</p>\n    <button type="button">${5:اقرأ المزيد}</button>\n  </div>\n</article>$0', plain: '<article class="card">\n  <img src="image.jpg" alt="وصف الصورة" width="320" height="200" loading="lazy">\n  <div class="card-body">\n    <h3>عنوان البطاقة</h3>\n    <p>وصف مختصر للمحتوى يوضح الفكرة الأساسية.</p>\n    <button type="button">اقرأ المزيد</button>\n  </div>\n</article>' },
        { trigger: 'form', title: 'نموذج تسجيل متكامل (Accessible Form)', desc: 'نموذج يحتوي حقول الاسم والبريد وكلمة المرور وزر إرسال', snippet: '<form action="${1:/submit}" method="post">\n  <div>\n    <label for="user-name">الاسم الكامل:</label>\n    <input type="text" id="user-name" name="username" required placeholder="أدخل اسمك">\n  </div>\n  <div>\n    <label for="user-email">البريد الإلكتروني:</label>\n    <input type="email" id="user-email" name="email" required placeholder="name@example.com">\n  </div>\n  <button type="submit">إرسال البيانات ✓</button>\n</form>$0', plain: '<form action="/submit" method="post">\n  <div>\n    <label for="user-name">الاسم الكامل:</label>\n    <input type="text" id="user-name" name="username" required placeholder="أدخل اسمك">\n  </div>\n  <div>\n    <label for="user-email">البريد الإلكتروني:</label>\n    <input type="email" id="user-email" name="email" required placeholder="name@example.com">\n  </div>\n  <button type="submit">إرسال البيانات ✓</button>\n</form>' },
        { trigger: 'table', title: 'جدول بيانات قياسي (Full Semantic Table)', desc: 'جدول منظم بـ caption و thead و tbody و tfoot', snippet: '<table border="1" cellpadding="8">\n  <caption>${1:عنوان الجدول}</caption>\n  <thead>\n    <tr>\n      <th scope="col">${2:الاسم}</th>\n      <th scope="col">${3:التخصص}</th>\n      <th scope="col">${4:التقدير}</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>أحمد حسني</td>\n      <td>هندسة البرمجيات</td>\n      <td>امتياز</td>\n    </tr>\n  </tbody>\n</table>$0', plain: '<table border="1" cellpadding="8">\n  <caption>عنوان الجدول</caption>\n  <thead>\n    <tr>\n      <th scope="col">الاسم</th>\n      <th scope="col">التخصص</th>\n      <th scope="col">التقدير</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>أحمد حسني</td>\n      <td>هندسة البرمجيات</td>\n      <td>امتياز</td>\n    </tr>\n  </tbody>\n</table>' }
      ],
      css: [
        { trigger: 'flex', title: 'تخطيط Flexbox متكامل', desc: 'ترتيب العناصر أفقياً مع مسافات ومحاذاة', snippet: 'display: flex;\njustify-content: ${1:space-between};\nalign-items: ${2:center};\ngap: ${3:16px};\nflex-wrap: wrap;$0', plain: 'display: flex;\njustify-content: space-between;\nalign-items: center;\ngap: 16px;\nflex-wrap: wrap;' },
        { trigger: 'center', title: 'توسيط عنصر أفقياً وعمودياً (Grid Center)', desc: 'أسرع طريقة لتوسيط أي عنصر في منتصف الشاشة', snippet: 'display: grid;\nplace-items: center;\nmin-height: ${1:100vh};$0', plain: 'display: grid;\nplace-items: center;\nmin-height: 100vh;' },
        { trigger: 'grid', title: 'شبكة كروت متجاوبة (Responsive Auto-Grid)', desc: 'شبكة CSS Grid تتكيف تلقائياً مع الموبايل والكمبيوتر بدون ميديا كويري', snippet: 'display: grid;\ngrid-template-columns: repeat(auto-fit, minmax(${1:260px}, 1fr));\ngap: ${2:20px};$0', plain: 'display: grid;\ngrid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\ngap: 20px;' },
        { trigger: 'card', title: 'تصميم بطاقة عصرية (Modern Card CSS)', desc: 'حواف دائرية وظل ناعم ومسافات داخلية', snippet: '.card {\n  background: #ffffff;\n  border: 1px solid #e9ebf3;\n  border-radius: 16px;\n  padding: 24px;\n  box-shadow: 0 12px 30px rgba(34, 35, 74, 0.08);\n  transition: transform 0.2s ease;\n}\n.card:hover {\n  transform: translateY(-4px);\n}$0', plain: '.card {\n  background: #ffffff;\n  border: 1px solid #e9ebf3;\n  border-radius: 16px;\n  padding: 24px;\n  box-shadow: 0 12px 30px rgba(34, 35, 74, 0.08);\n  transition: transform 0.2s ease;\n}\n.card:hover {\n  transform: translateY(-4px);\n}' },
        { trigger: 'btn', title: 'تصميم زر احترافي (Primary Button)', desc: 'تنسيق زر متكامل مع تأثير Hover', snippet: '.btn {\n  background: #6c5ce7;\n  color: #ffffff;\n  border: none;\n  border-radius: 10px;\n  padding: 10px 20px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn:hover {\n  background: #5b4bc4;\n  transform: translateY(-2px);\n}$0', plain: '.btn {\n  background: #6c5ce7;\n  color: #ffffff;\n  border: none;\n  border-radius: 10px;\n  padding: 10px 20px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn:hover {\n  background: #5b4bc4;\n  transform: translateY(-2px);\n}' },
        { trigger: 'media', title: 'استعلام شاشات الموبايل (@media query)', desc: 'تخصيص التنسيقات للشاشات الصغيرة', snippet: '@media (max-width: ${1:768px}) {\n  ${2:.container} {\n    padding: 12px;\n  }\n}$0', plain: '@media (max-width: 768px) {\n  .container {\n    padding: 12px;\n  }\n}' }
      ],
      sql: [
        { trigger: 'crt', title: 'إنشاء جدول (CREATE TABLE)', desc: 'إنشاء جدول جديد في قاعدة البيانات', snippet: 'CREATE TABLE ${1:Students} (\n  id INT PRIMARY KEY,\n  name TEXT,\n  grade INT\n);$0', plain: 'CREATE TABLE Students (\n  id INT PRIMARY KEY,\n  name TEXT,\n  grade INT\n);' },
        { trigger: 'ins', title: 'إدخال صف بيانات (INSERT INTO)', desc: 'إضافة سجل جديد في الجدول', snippet: "INSERT INTO ${1:Students} VALUES (${2:1}, '${3:Ahmed Hosny}', ${4:100});$0", plain: "INSERT INTO Students VALUES (1, 'Ahmed Hosny', 100);" },
        { trigger: 'sel', title: 'استعلام البيانات (SELECT * FROM)', desc: 'عرض البيانات من الجدول', snippet: 'SELECT * FROM ${1:Students};$0', plain: 'SELECT * FROM Students;' }
      ]
    };

    window.registerAllCodeMasrSnippets = function () {
      if (!window.monaco || window._codeMasrSnippetsRegistered) return;
      window._codeMasrSnippetsRegistered = true;

      const K = window.monaco.languages.CompletionItemKind.Snippet;
      // استخدام الاسم الصحيح في Monaco Editor لمنع أي خطأ في الكونسول
      const R = window.monaco.languages.CompletionItemInsertTextRule
        ? window.monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
        : 4;

      Object.keys(CODE_SNIPPETS_LIBRARY).forEach((langKey) => {
        window.monaco.languages.registerCompletionItemProvider(langKey, {
          provideCompletionItems: function (model, position) {
            if (!state.autoCompleteEnabled) return { suggestions: [] };
            const word = model.getWordUntilPosition(position);
            const range = {
              startLineNumber: position.lineNumber,
              endLineNumber: position.lineNumber,
              startColumn: word.startColumn,
              endColumn: word.endColumn
            };

            const list = CODE_SNIPPETS_LIBRARY[langKey] || [];
            return {
              suggestions: list.map((item) => ({
                label: item.trigger,
                kind: K,
                detail: `⚡ ${item.title}`,
                documentation: `${item.desc}\n\nالكود:\n${item.plain}`,
                insertText: item.snippet,
                insertTextRules: R,
                range: range
              }))
            };
          }
        });
      });
    };

    if (window.monaco) {
      window.registerAllCodeMasrSnippets();
    }

    // نافذة قاموس الاختصارات والأكواد الجاهزة (Snippets Explorer Modal)
    function insertSnippetIntoActiveEditor(plainCode) {
      if (usingMonaco && monacoEditorInstance && window.monaco) {
        const selection = monacoEditorInstance.getSelection();
        const op = {
          range: selection || new window.monaco.Range(1, 1, 1, 1),
          text: plainCode + '\n',
          forceMoveMarkers: true
        };
        monacoEditorInstance.executeEdits('snippet-insert', [op]);
        monacoEditorInstance.focus();
      } else {
        const fallbackEl = document.getElementById('fallback-editor');
        if (fallbackEl) {
          const start = fallbackEl.selectionStart || 0;
          const end = fallbackEl.selectionEnd || 0;
          fallbackEl.value = fallbackEl.value.substring(0, start) + plainCode + '\n' + fallbackEl.value.substring(end);
          state.playgroundFiles[state.activePlaygroundFile] = fallbackEl.value;
          saveState();
        }
      }
      showToast('✨ تم إدراج الكود الجاهز مباشرة في المحرر!');
    }

    function openSnippetsExplorerModal() {
      const currentInfo = getFileExtensionInfo(state.activePlaygroundFile);
      const initialLang = CODE_SNIPPETS_LIBRARY[currentInfo.lang] ? currentInfo.lang : 'java';

      const langTabs = [
        { key: 'java', label: '☕ Java' },
        { key: 'cpp', label: '⚙️ C++' },
        { key: 'python', label: '🐍 Python' },
        { key: 'c', label: '🛠️ C' },
        { key: 'csharp', label: '🎯 C#' },
        { key: 'html', label: '🌐 HTML5' },
        { key: 'css', label: '🎨 CSS3' },
        { key: 'javascript', label: '⚡ JS' },
        { key: 'sql', label: '🗄️ SQL' }
      ];

      const modalHtml = `
        <div dir="rtl" style="text-align:right; font-family:'Cairo',sans-serif;">
          <p style="margin:0 0 10px; font-size:12px; color:var(--muted);">
            اكتب الاختصار في المحرر واضغط <b>Tab</b> أو <b>Enter</b> ليكتمل الكود تلقائياً، أو اضغط على <b>➕ أدرج الكود</b> لإضافته فوراً:
          </p>
          <input id="snippet-search-box" type="search" placeholder="ابحث عن اختصار مثل: sout, psvm, cout, class, flex, form..." style="width:100%; padding:9px 12px; border:1px solid var(--purple); border-radius:9px; font-size:12px; margin-bottom:10px;" />
          <div id="snippet-lang-tabs" style="display:flex; gap:5px; flex-wrap:wrap; margin-bottom:12px;">
            ${langTabs.map(t => `<button type="button" class="quick-ext-chip ${t.key === initialLang ? 'active-chip' : ''}" data-snip-lang="${t.key}" style="${t.key === initialLang ? 'background:var(--purple);color:#fff;' : ''}">${t.label}</button>`).join('')}
          </div>
          <div id="snippets-list-container" style="max-height:320px; overflow-y:auto; display:grid; gap:8px; padding-left:4px;"></div>
        </div>
      `;

      openModal('⚡', 'موسوعة اختصارات الكود الذكية (Snippets Guide)', modalHtml, 'إغلاق النافذة');
      const modalBox = document.querySelector('#modal-backdrop .modal');
      if (modalBox) modalBox.style.width = 'min(100%, 640px)';

      let selectedLang = initialLang;
      const listContainer = document.getElementById('snippets-list-container');
      const searchBox = document.getElementById('snippet-search-box');

      function renderSnippetsList() {
        if (!listContainer) return;
        const q = (searchBox ? searchBox.value : '').trim().toLowerCase();
        let items = [];

        if (q) {
          Object.keys(CODE_SNIPPETS_LIBRARY).forEach((lk) => {
            CODE_SNIPPETS_LIBRARY[lk].forEach((s) => {
              if (`${s.trigger} ${s.title} ${s.desc} ${s.plain}`.toLowerCase().includes(q)) {
                items.push(Object.assign({ lang: lk.toUpperCase() }, s));
              }
            });
          });
        } else {
          items = (CODE_SNIPPETS_LIBRARY[selectedLang] || []).map(s => Object.assign({ lang: selectedLang.toUpperCase() }, s));
        }

        if (!items.length) {
          listContainer.innerHTML = `<div style="padding:16px;text-align:center;color:var(--muted);">لا توجد اختصارات مطابقة لبحثك.</div>`;
          return;
        }

        listContainer.innerHTML = items.map((item, idx) => `
          <div style="border:1px solid var(--line); border-radius:10px; padding:10px 12px; background:var(--surface-2);">
            <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; flex-wrap:wrap; margin-bottom:6px;">
              <div>
                <span style="background:var(--purple); color:#fff; font:800 11px 'DM Mono',monospace; padding:2px 8px; border-radius:6px; margin-left:6px;">${escapeHtml(item.trigger)} + Tab</span>
                <b style="font-size:12px; color:var(--text);">${escapeHtml(item.title)}</b>
              </div>
              <button type="button" class="primary-button btn-insert-snip" data-snip-idx="${idx}" style="padding:4px 10px; font-size:10px;">➕ أدرج الكود في المحرر</button>
            </div>
            <div style="font-size:11px; color:var(--muted); margin-bottom:6px;">${escapeHtml(item.desc)}</div>
            <pre style="margin:0; padding:8px 10px; background:#121322; color:#8ee4b7; border-radius:7px; font:11px/1.5 'DM Mono',monospace; direction:ltr; text-align:left; overflow-x:auto;">${escapeHtml(item.plain)}</pre>
          </div>
        `).join('');

        listContainer.querySelectorAll('.btn-insert-snip').forEach((btn) => {
          btn.addEventListener('click', () => {
            const item = items[Number(btn.getAttribute('data-snip-idx'))];
            if (item) {
              closeModal();
              if (modalBox) modalBox.style.width = '';
              insertSnippetIntoActiveEditor(item.plain);
            }
          });
        });
      }

      document.querySelectorAll('[data-snip-lang]').forEach((tabBtn) => {
        tabBtn.addEventListener('click', () => {
          selectedLang = tabBtn.getAttribute('data-snip-lang');
          document.querySelectorAll('[data-snip-lang]').forEach((b) => {
            const active = b.getAttribute('data-snip-lang') === selectedLang;
            b.style.background = active ? 'var(--purple)' : '';
            b.style.color = active ? '#fff' : '';
          });
          if (searchBox) searchBox.value = '';
          renderSnippetsList();
        });
      });

      searchBox?.addEventListener('input', renderSnippetsList);
      renderSnippetsList();
    }

    document.getElementById('open-snippets-top-btn')?.addEventListener('click', openSnippetsExplorerModal);
    document.getElementById('pg-snippets-btn')?.addEventListener('click', openSnippetsExplorerModal);
    document.getElementById('studio-snippets-btn')?.addEventListener('click', openSnippetsExplorerModal);

    // =========================================================================
    // تفعيل الـ Offline Service Worker (`sw.js`) وزر تثبيت التطبيق (`Install App`)
    // =========================================================================
    let deferredInstallPrompt = null;
    const installPwaBtn = document.getElementById('install-pwa-btn');

    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').then(() => {
          console.log('✓ CodeMasr Offline Service Worker registered successfully.');
        }).catch((err) => {
          console.warn('Service Worker registration note:', err);
        });
      });
    }

window.addEventListener('beforeinstallprompt', (e) => {
      deferredInstallPrompt = e;
      if (installPwaBtn) installPwaBtn.hidden = false;
    });

    installPwaBtn?.addEventListener('click', async () => {
      if (deferredInstallPrompt) {
        deferredInstallPrompt.prompt();
        const choice = await deferredInstallPrompt.userChoice;
        if (choice.outcome === 'accepted') {
          showToast('🎉 جاري تثبيت تطبيق CodeMasr على جهازك!');
          installPwaBtn.hidden = true;
        }
        deferredInstallPrompt = null;
      } else {
        showToast('💡 يمكنك تثبيت التطبيق مباشرة من أيقونة التثبيت في شريط عنوان المتصفح بالأعلى!');
      }
    });

    window.addEventListener('appinstalled', () => {
      if (installPwaBtn) installPwaBtn.hidden = true;
      showToast('🚀 تم تثبيت تطبيق CodeMasr بنجاح! يعمل الآن أوفلاين بالكامل.');
    });

    function deleteCustomFile(fileKey) {
      if (['html', 'css', 'js'].includes(fileKey)) return;
      delete state.playgroundFiles[fileKey];
      saveState();
      if (state.activePlaygroundFile === fileKey) {
        switchPlaygroundFileTab('html');
      } else {
        renderStudioTabs();
      }
      showToast(`🗑️ Deleted file ${fileKey}`);
    }

    function downloadActiveFile() {
      const key = state.activePlaygroundFile || 'html';
      const info = getFileExtensionInfo(key);
      const content = state.playgroundFiles[key] || '';
      const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = info.displayName;
      a.click();
      showToast(`⬇ Downloading ${info.displayName}...`);
    }

    window.addEventListener('message', (e) => {
      if (e.data && e.data.source === 'codemasr-navigate-file') {
        const target = normalizeFileKey(e.data.targetFile);
        if (state.playgroundFiles[target] !== undefined) {
          switchPlaygroundFileTab(target);
          showToast(`🔗 Navigated to ${e.data.targetFile}`);
        } else {
          showToast(`⚠ File "${e.data.targetFile}" not found. Click (+) to create it.`);
        }
      }
    });

    renderStudioTabs();

    function updateStudioPreview() {
      if (!studioPreview) return;
      studioPreview.srcdoc = buildFullPlaygroundDocument();
    }

// =========================================================================
    // محرك الثيمات الخمسة الاحترافية لمحرر Monaco وواجهة VS Code Studio
    // =========================================================================
    let studioThemesRegistered = false;
    let currentStudioTheme = localStorage.getItem('codemasr_studio_theme') || 'cyberpunk-neon';

    function registerCustomMonacoThemes() {
      if (studioThemesRegistered || !window.monaco) return;
      studioThemesRegistered = true;

      // 1. Cyberpunk Neon
      window.monaco.editor.defineTheme('cyberpunk-neon', {
        base: 'vs-dark',
        inherit: true,
        rules: [
          { token: 'tag', foreground: 'ff2a85', fontStyle: 'bold' },
          { token: 'attribute.name', foreground: '00f2fe' },
          { token: 'attribute.value', foreground: 'f9f871' },
          { token: 'string', foreground: 'f9f871' },
          { token: 'keyword', foreground: 'ff2a85', fontStyle: 'bold' },
          { token: 'comment', foreground: '636d9c', fontStyle: 'italic' },
          { token: 'delimiter', foreground: 'a5b4fc' }
        ],
        colors: {
          'editor.background': '#0b0c1b',
          'editor.foreground': '#e2e8f0',
          'editorCursor.foreground': '#00f2fe',
          'editor.lineHighlightBackground': '#161836',
          'editorLineNumber.foreground': '#4c5380',
          'editor.selectionBackground': '#ff084445'
        }
      });

      // 2. Dracula Pro
      window.monaco.editor.defineTheme('dracula-pro', {
        base: 'vs-dark',
        inherit: true,
        rules: [
          { token: 'tag', foreground: 'ff79c6', fontStyle: 'bold' },
          { token: 'attribute.name', foreground: '50fa7b' },
          { token: 'attribute.value', foreground: 'f1fa8c' },
          { token: 'string', foreground: 'f1fa8c' },
          { token: 'keyword', foreground: 'bd93f9', fontStyle: 'bold' },
          { token: 'comment', foreground: '6272a4', fontStyle: 'italic' }
        ],
        colors: {
          'editor.background': '#282a36',
          'editor.foreground': '#f8f8f2',
          'editorCursor.foreground': '#ff79c6',
          'editor.lineHighlightBackground': '#343746',
          'editorLineNumber.foreground': '#6272a4',
          'editor.selectionBackground': '#bd93f940'
        }
      });

      // 3. Synthwave '84
      window.monaco.editor.defineTheme('synthwave-84', {
        base: 'vs-dark',
        inherit: true,
        rules: [
          { token: 'tag', foreground: 'ff7edb', fontStyle: 'bold' },
          { token: 'attribute.name', foreground: 'fede5d' },
          { token: 'attribute.value', foreground: 'ff8b39' },
          { token: 'string', foreground: 'ff8b39' },
          { token: 'keyword', foreground: '36f9f6', fontStyle: 'bold' },
          { token: 'comment', foreground: '84649c', fontStyle: 'italic' }
        ],
        colors: {
          'editor.background': '#1a1025',
          'editor.foreground': '#fff5f9',
          'editorCursor.foreground': '#fede5d',
          'editor.lineHighlightBackground': '#291a3a',
          'editorLineNumber.foreground': '#705487',
          'editor.selectionBackground': '#ff7edb38'
        }
      });

      // 4. Emerald Matrix
      window.monaco.editor.defineTheme('emerald-matrix', {
        base: 'vs-dark',
        inherit: true,
        rules: [
          { token: 'tag', foreground: '00ff9d', fontStyle: 'bold' },
          { token: 'attribute.name', foreground: '34d399' },
          { token: 'attribute.value', foreground: 'a7f3d0' },
          { token: 'string', foreground: '6ee7b7' },
          { token: 'keyword', foreground: '00ff9d', fontStyle: 'bold' },
          { token: 'comment', foreground: '276749', fontStyle: 'italic' }
        ],
        colors: {
          'editor.background': '#06110c',
          'editor.foreground': '#d1fae5',
          'editorCursor.foreground': '#00ff9d',
          'editor.lineHighlightBackground': '#0c2117',
          'editorLineNumber.foreground': '#1e523a',
          'editor.selectionBackground': '#00ff9d30'
        }
      });

      // 5. Aurora Light
      window.monaco.editor.defineTheme('aurora-light', {
        base: 'vs',
        inherit: true,
        rules: [
          { token: 'tag', foreground: 'e11d48', fontStyle: 'bold' },
          { token: 'attribute.name', foreground: '6c5ce7' },
          { token: 'attribute.value', foreground: '0284c7' },
          { token: 'string', foreground: '0284c7' },
          { token: 'keyword', foreground: '7c3aed', fontStyle: 'bold' },
          { token: 'comment', foreground: '94a3b8', fontStyle: 'italic' }
        ],
        colors: {
          'editor.background': '#f8fafc',
          'editor.foreground': '#1e293b',
          'editorCursor.foreground': '#6c5ce7',
          'editor.lineHighlightBackground': '#f1f5f9',
          'editorLineNumber.foreground': '#94a3b8',
          'editor.selectionBackground': '#6c5ce725'
        }
      });
    }

    function applyStudioTheme(themeName) {
      currentStudioTheme = themeName || 'cyberpunk-neon';
      localStorage.setItem('codemasr_studio_theme', currentStudioTheme);

      if (studioModal) {
        studioModal.setAttribute('data-studio-theme', currentStudioTheme);
      }

      const selectEl = document.getElementById('studio-theme-select');
      if (selectEl && selectEl.value !== currentStudioTheme) {
        selectEl.value = currentStudioTheme;
      }

      if (window.monaco) {
        registerCustomMonacoThemes();
        window.monaco.editor.setTheme(currentStudioTheme);
      }

      // تلوين المحرر البديل في حال عدم اتصال الإنترنت
      const fallbackEl = document.getElementById('fallback-editor');
      if (fallbackEl) {
        const isLight = currentStudioTheme === 'aurora-light';
        fallbackEl.style.background = isLight ? '#f8fafc' : 'var(--st-bg-main)';
        fallbackEl.style.color = isLight ? '#1e293b' : '#f8f8f2';
      }
    }

    document.getElementById('studio-theme-select')?.addEventListener('change', (e) => {
      applyStudioTheme(e.target.value);
      showToast(`🎨 تم تفعيل ثيم ${e.target.options[e.target.selectedIndex].text}`);
    });

    if (openStudioBtn && studioModal) {
      openStudioBtn.addEventListener('click', () => {
        studioModal.hidden = false;
        if (editorHost && studioEditorContainer) {
          studioEditorContainer.appendChild(editorHost);
          editorHost.style.height = '100%';
        }
        renderStudioTabs();
        switchPlaygroundFileTab(state.activePlaygroundFile || 'html');
        applyStudioTheme(currentStudioTheme);
        updateStudioPreview();
        setTimeout(() => {
          if (monacoEditorInstance) monacoEditorInstance.layout();
        }, 80);
        showToast('⛶ تم فتح بيئة Visual Studio Code الكاملة');
      });
    }

    if (closeStudioBtn && studioModal) {
      closeStudioBtn.addEventListener('click', () => {
        // إرجاع المحرر إلى مكانه الأصلي في الـ Playground
        const editorPanelBox = document.getElementById('editor-panel-box');
        const statusbar = editorPanelBox?.querySelector('.editor-statusbar');
        if (editorHost && editorPanelBox && statusbar) {
          editorPanelBox.insertBefore(editorHost, statusbar);
          editorHost.style.height = '';
        }
        studioModal.hidden = true;
        runPlaygroundCode(false);
        setTimeout(() => {
          if (monacoEditorInstance) monacoEditorInstance.layout();
        }, 80);
      });
    }

    if (studioRunBtn) {
      studioRunBtn.addEventListener('click', () => {
        updateStudioPreview();
        runPlaygroundCode(true);
      });
    }

    if (studioReloadBtn) {
      studioReloadBtn.addEventListener('click', updateStudioPreview);
    }
    // تفعيل شريط السحب للتحكم بمساحة الكود والمعاينة
    const resizer = document.getElementById('workbench-resizer');
    const editorBox = document.getElementById('editor-panel-box');
    const previewBox = document.getElementById('preview-panel-box');
    const container = document.getElementById('playground-resizable-layout');

    if (resizer && editorBox && previewBox && container) {
      let isDragging = false;
      resizer.addEventListener('mousedown', () => {
        isDragging = true;
        resizer.classList.add('is-dragging');
        document.body.style.cursor = 'col-resize';
      });

      window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const rect = container.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const pct = Math.max(20, Math.min(80, (offsetX / rect.width) * 100));
        editorBox.style.flex = `0 0 ${pct}%`;
        previewBox.style.flex = `0 0 ${100 - pct}%`;
        if (monacoEditorInstance) monacoEditorInstance.layout();
      });

      window.addEventListener('mouseup', () => {
        if (isDragging) {
          isDragging = false;
          resizer.classList.remove('is-dragging');
          document.body.style.cursor = '';
        }
      });
    }
    // 1. Sidebar Workspace Navigation
    document.querySelectorAll('.nav-item[data-view]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-view');
        switchView(target);
      });
    });

    // 2. Sidebar Course Links
    document.querySelectorAll('.course-link[data-course]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const cid = btn.getAttribute('data-course');
        openCourseLesson(cid, 0);
      });
    });

    // 3. Brand Logo -> Home
    const brand = document.querySelector('.brand');
    if (brand) {
      brand.addEventListener('click', (e) => {
        e.preventDefault();
        switchView('learn');
      });
    }

    // 4. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu');
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', () => {
        const sidebar = document.getElementById('sidebar');
        if (sidebar) sidebar.classList.toggle('mobile-open');
      });
    }

    // 5. Theme Toggle (Light / Dark Mode)
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
      themeBtn.textContent = state.darkMode ? '☾' : '☼';
      themeBtn.addEventListener('click', () => {
        state.darkMode = !state.darkMode;
        document.body.classList.toggle('dark-mode', state.darkMode);
        themeBtn.textContent = state.darkMode ? '☾' : '☼';
        localStorage.setItem(STORAGE_KEYS.THEME, state.darkMode ? 'dark' : 'light');
        if (usingMonaco && window.monaco) {
          window.monaco.editor.setTheme(state.darkMode ? 'vs-dark' : 'vs');
        }
        showToast(state.darkMode ? '☾ Dark mode activated' : '☼ Light mode activated');
      });
    }

    // 6. Global Search & Ctrl+K Shortcut
    const searchInput = document.getElementById('global-search');
    const searchBox = document.querySelector('.search-box');
    if (searchInput) {
      searchInput.addEventListener('focus', () => openSearchModal(searchInput.value));
      searchInput.addEventListener('input', () => openSearchModal(searchInput.value));
    }
    if (searchBox) {
      searchBox.addEventListener('click', () => openSearchModal(''));
    }
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openSearchModal('');
      } else if (e.key === 'Escape') {
        closeModal();
      }
    });

    // 7. Help Button & Profile Menu Button
    const helpBtn = document.getElementById('help-button');
    if (helpBtn) {
      helpBtn.addEventListener('click', () => {
        openModal(
          '?',
          'How CodeMasr Works',
          `<ul>
            <li><b>Interactive Lessons:</b> Read the explanation in English & Egyptian Arabic, then write & verify your code right inside the lesson!</li>
            <li><b>Smart Error Assistant:</b> If your code has a missing tag or typo, the debugger explains why and gives you a 1-click <b>Auto-Fix</b> button.</li>
            <li><b>Code Playground:</b> Build multi-file HTML, CSS, and JS projects with live preview and console diagnostics.</li>
            <li><b>Firebase Cloud Sync:</b> Click your profile (<b>•••</b>) at the bottom-left to configure Firebase Firestore sync.</li>
          </ul>`,
          'Start Building ✦'
        );
      });
    }

    const profileMenuBtn = document.getElementById('profile-menu');
    const profileRow = document.querySelector('.profile-row');
    if (profileMenuBtn) {
      profileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openFirebaseAndProfileModal();
      });
    }
    if (profileRow) {
      profileRow.style.cursor = 'pointer';
      profileRow.addEventListener('click', openFirebaseAndProfileModal);
    }

    // 8. Learn View Buttons
    const continueBtn = document.getElementById('continue-learning');
    if (continueBtn) {
      continueBtn.addEventListener('click', () => {
        const course = COURSES[state.activeCourseId] || COURSES.html;
        const nextIdx = course.lessons.findIndex(l => !state.completedLessons.includes(l.id));
        openCourseLesson(course.id, nextIdx >= 0 ? nextIdx : state.activeLessonIndex);
      });
    }

    const explorePathBtn = document.getElementById('explore-path');
    if (explorePathBtn) {
      explorePathBtn.addEventListener('click', () => {
        const heading = document.querySelector('.section-heading');
        if (heading) heading.scrollIntoView({ behavior: 'smooth' });
      });
    }

    const startMilestoneBtn = document.getElementById('start-milestone');
    if (startMilestoneBtn) {
      startMilestoneBtn.addEventListener('click', () => {
        const course = COURSES[state.activeCourseId] || COURSES.html;
        const nextIdx = course.lessons.findIndex(l => !state.completedLessons.includes(l.id));
        openCourseLesson(course.id, nextIdx >= 0 ? nextIdx : 0);
      });
    }

    const viewAllCoursesBtn = document.getElementById('view-all-courses');
    if (viewAllCoursesBtn) {
      viewAllCoursesBtn.addEventListener('click', () => switchView('progress'));
    }

    document.querySelectorAll('[data-open-course]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const cid = btn.getAttribute('data-open-course');
        openCourseLesson(cid, 0);
      });
    });

    const openTodayBtn = document.getElementById('open-todays-lesson');
    if (openTodayBtn) {
      openTodayBtn.addEventListener('click', () => {
        const course = COURSES[state.activeCourseId] || COURSES.html;
        const nextIdx = course.lessons.findIndex(l => !state.completedLessons.includes(l.id));
        openCourseLesson(course.id, nextIdx >= 0 ? nextIdx : 0);
      });
    }

    const quickPg = document.getElementById('quick-playground');
    if (quickPg) quickPg.addEventListener('click', () => switchView('playground'));

    const quickProj = document.getElementById('quick-projects');
    if (quickProj) quickProj.addEventListener('click', () => switchView('projects'));

    const quickProg = document.getElementById('quick-progress');
    if (quickProg) quickProg.addEventListener('click', () => switchView('progress'));

    const feedbackBtn = document.getElementById('footer-feedback');
    if (feedbackBtn) {
      feedbackBtn.addEventListener('click', () => {
        openModal(
          '✦',
          'Send Feedback to CodeMasr',
          `<p>رأيك يهمنا جداً لتطوير المنصة!</p>
           <textarea id="feedback-textarea" rows="4" placeholder="اكتب اقتراحك أو ملاحظتك هنا..." style="width:100%;padding:10px;border:1px solid var(--line);border-radius:9px;font-size:11px;"></textarea>`,
          'Submit Feedback',
          () => {
            const val = (document.getElementById('feedback-textarea') || {}).value || '';
            if (val.trim() && firestoreDb) {
              firestoreDb.collection('feedback').add({
                message: val.trim(),
                user: state.userProfile.name,
                createdAt: new Date().toISOString()
              }).catch(() => {});
            }
            showToast('✓ شكراً لك! تم استلام ملاحظتك بنجاح.');
            return true;
          }
        );
      });
    }

    // 9. Playground Controls
    document.querySelectorAll('.file-tab[data-file]').forEach((tab) => {
      tab.addEventListener('click', () => {
        switchPlaygroundFileTab(tab.getAttribute('data-file'));
      });
    });

    const runCodeBtn = document.getElementById('run-code');
    if (runCodeBtn) {
      runCodeBtn.addEventListener('click', () => runPlaygroundCode(true));
    }

    const resetCodeBtn = document.getElementById('reset-code');
    if (resetCodeBtn) {
      resetCodeBtn.addEventListener('click', () => {
        state.playgroundFiles = Object.assign({}, DEFAULT_PLAYGROUND_FILES);
        switchPlaygroundFileTab(state.activePlaygroundFile);
        runPlaygroundCode(false);
        saveState();
        showToast('↺ Playground reset to starter template.');
      });
    }

    const formatBtn = document.getElementById('format-code');
    if (formatBtn) {
      formatBtn.addEventListener('click', formatCurrentPlaygroundCode);
    }

    const refreshPreviewBtn = document.getElementById('refresh-preview');
    if (refreshPreviewBtn) {
      refreshPreviewBtn.addEventListener('click', () => runPlaygroundCode(false));
    }

    const openPreviewBtn = document.getElementById('open-preview');
    if (openPreviewBtn) {
      openPreviewBtn.addEventListener('click', () => {
        const blob = new Blob([buildFullPlaygroundDocument()], { type: 'text/html;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        window.open(url, '_blank', 'noopener');
      });
    }

    const clearConsoleBtn = document.getElementById('clear-console');
    if (clearConsoleBtn) {
      clearConsoleBtn.addEventListener('click', clearConsoleOutput);
    }

    const dismissHintBtn = document.getElementById('dismiss-hint');
    if (dismissHintBtn) {
      dismissHintBtn.addEventListener('click', () => {
        const hintEl = document.querySelector('.editor-hint');
        if (hintEl) hintEl.classList.add('dismissed');
        localStorage.setItem(STORAGE_KEYS.HINT_DISMISSED, '1');
      });
    }

    // Listen to messages from #preview-frame
    window.addEventListener('message', (event) => {
      const data = event.data;
      if (data && data.source === 'codemasr-preview') {
        appendConsoleEntry(data.level, data.message);
      }
    });

    // 10. Projects View Controls
    const projStartBtn = document.getElementById('projects-start-coding');
    if (projStartBtn) {
      projStartBtn.addEventListener('click', () => switchView('playground'));
    }

    // Interactive mini counter on the project card preview itself!
    const miniCounterVal = document.getElementById('project-counter-value');
    const miniCounterBtns = document.querySelectorAll('.counter-actions i');
    if (miniCounterVal && miniCounterBtns.length === 2) {
      let miniVal = 5;
      miniCounterBtns[0].style.cursor = 'pointer';
      miniCounterBtns[1].style.cursor = 'pointer';
      miniCounterBtns[0].addEventListener('click', () => {
        miniVal--;
        miniCounterVal.textContent = String(miniVal).padStart(2, '0');
      });
      miniCounterBtns[1].addEventListener('click', () => {
        miniVal++;
        miniCounterVal.textContent = String(miniVal).padStart(2, '0');
      });
    }

    document.querySelectorAll('.project-launch[data-project]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const projKey = btn.getAttribute('data-project');
        const tpl = PROJECT_TEMPLATES[projKey];
        if (!tpl) return;

        state.playgroundFiles = {
          html: tpl.html,
          css: tpl.css,
          js: tpl.js
        };
        if (!state.projectsStarted.includes(projKey)) {
          state.projectsStarted.push(projKey);
        }
        saveState();
        refreshAllUI();
        switchPlaygroundFileTab('html');
        switchView('playground');
        showToast(`▦ Loaded project "${tpl.title}" into Playground!`);
      });
    });

    // 11. Progress View Reset
    const progResetBtn = document.getElementById('progress-reset');
    if (progResetBtn) {
      progResetBtn.addEventListener('click', () => {
        openModal(
          '↺',
          'Reset Learning Progress?',
          `<p>هل أنت متأكد من رغبتك في إعادة تعيين تقدم الدروس والبدء من جديد؟</p>`,
          'Yes, Reset Progress',
          () => {
            state.completedLessons = [];
            state.projectsStarted = [];
            state.runCount = 0;
            state.lessonDrafts = {};
            saveState();
            refreshAllUI();
            showToast('↺ Learning progress has been reset.');
            return true;
          }
        );
      });
    }

    // 12. Lesson View Buttons
    const lessonBackBtn = document.getElementById('lesson-back');
    if (lessonBackBtn) {
      lessonBackBtn.addEventListener('click', () => switchView('learn'));
    }

    const copyLessonBtn = document.getElementById('copy-lesson-code');
    if (copyLessonBtn) {
      copyLessonBtn.addEventListener('click', () => {
        const course = COURSES[state.activeCourseId] || COURSES.html;
        const lesson = course.lessons[state.activeLessonIndex] || course.lessons[0];
        if (navigator.clipboard && lesson) {
          navigator.clipboard.writeText(lesson.exampleCode).catch(() => {});
        }
        showToast('✓ Example code copied to clipboard!');
      });
    }

    const practiceBtn = document.getElementById('lesson-practice');
    if (practiceBtn) {
      practiceBtn.addEventListener('click', () => {
        const course = COURSES[state.activeCourseId] || COURSES.html;
        const lesson = course.lessons[state.activeLessonIndex] || course.lessons[0];
        const draft = state.lessonDrafts[lesson.id] || lesson.starterCode;
        state.playgroundFiles.html = draft;
        saveState();
        switchPlaygroundFileTab('html');
        switchView('playground');
        showToast('↗ Lesson code opened in full Playground!');
      });
    }

    const completeLessonBtn = document.getElementById('complete-lesson');
    if (completeLessonBtn) {
      completeLessonBtn.addEventListener('click', () => {
        const course = COURSES[state.activeCourseId] || COURSES.html;
        const lesson = course.lessons[state.activeLessonIndex] || course.lessons[0];
        if (!state.completedLessons.includes(lesson.id)) {
          state.completedLessons.push(lesson.id);
          saveState();
          refreshAllUI();
          showToast(`✓ Lesson "${lesson.title}" marked complete!`);
        }
        advanceToNextLesson();
      });
    }

    // 13. Modal Close Button & Backdrop Click
    const modalCloseBtn = document.getElementById('modal-close');
    const modalBackdrop = document.getElementById('modal-backdrop');
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (modalBackdrop) {
      modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) closeModal();
      });
    }
  }

  /* ==========================================================================
   * 14. INITIALIZE APPLICATION ON DOM READY
   * ========================================================================== */
  function bootstrap() {
    loadLocalState();
    bindAllEvents();
    refreshAllUI();
    initCodePlayground();
    initFirebaseBackend();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrap);
  } else {
    bootstrap();
  }
})();
