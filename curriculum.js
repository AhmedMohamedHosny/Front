// Complete 15 HTML Lessons Curriculum with rich Egyptian Arabic & English explanations
const HTML_CURRICULUM = [
  {
    id: 1,
    title: "Introduction to the Web & HTML",
    titleAr: "مقدمة لعالم الويب: يعني إيه HTML؟",
    duration: "10 دقائق",
    level: "مبتدئ من الصفر",
    objectivesAr: ["فهم دور الـ HTML كعظام وهيكل للموقع", "الفرق بين المتصفح والخادم (Server)", "كتابة أول نص يظهر في المتصفح"],
    objectivesEn: ["Understand HTML as the backbone of web pages", "Learn how browsers render markup", "Display your first text in a browser"],
    egyptianExplanation: "بالمصري كدا: تخيل الموقع زي عمارة بتتبني! الـ HTML هو الطوب والخرسانة والحديد (الهيكل الأساسي). من غيره مفيش مبنى أصلاً. بعد كدا الـ CSS يجي يدهن الشقق ويكبس كهرباء، والـ JS يركب الأسانسير والإنتركم. في الدرس ده هنتعلم إزاي نكتب أول سطر يقرأه المتصفح ويعرضه كصفحة حقيقية.",
    englishExplanation: "HTML stands for HyperText Markup Language. It gives every webpage its fundamental structure. Think of HTML as the skeleton of the human body, providing form and placement for everything else.",
    codeExample: `<!DOCTYPE html>
<html>
  <head>
    <title>أول صفحة ويب ليا</title>
  </head>
  <body>
    <h1>يا هلا بيك في عالم البرمجة!</h1>
    <p>أنا بتعلم برمجة الويب دلوقتي على CODEMASTERY.</p>
  </body>
</html>`,
    codeExplanationAr: "السطر الأول <!DOCTYPE html> بيعرف المتصفح إن دي أحدث نسخة من HTML (وهي HTML5). والـ <body> هو المكان اللي بنحط فيه أي حاجة عايزين المستخدم يشوفها بعينيه على الشاشة.",
    commonMistakes: [
      {
        bad: "<p>أنا نسيت أقفل التاج",
        good: "<p>أنا قفلت التاج تمام</p>",
        explainAr: "نسيان وسم الإغلاق </p> بيخلي المتصفح يتلخبط ويفتكر إن باقي عناصر الصفحة كلها لسه تبع نفس الفقرة!",
        explainEn: "Forgetting the closing tag causes formatting leaks across subsequent elements."
      }
    ],
    exercise: {
      titleAr: "تحدي: كتابة أول رسالة ترحيبية",
      instructionsAr: "قم بتعديل الكود بحيث يحتوي على عنوان رئيسي h1 يقول 'أهلاً بكم في موقعي' وفقرة p تقول 'هذا موقعي الأول على الويب'.",
      starterCode: `<!DOCTYPE html>
<html>
  <head>
    <title>تحدي 1</title>
  </head>
  <body>
    <!-- اكتب العنوان الرئيسي h1 هنا -->
    
    <!-- اكتب الفقرة p هنا -->
    
  </body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
  <head>
    <title>تحدي 1</title>
  </head>
  <body>
    <h1>أهلاً بكم في موقعي</h1>
    <p>هذا موقعي الأول على الويب</p>
  </body>
</html>`,
      hintsAr: ["استخدم <h1>...</h1> للعنوان الرئيسي", "استخدم <p>...</p> للفقرة العادية"],
      test: function(doc) {
        const h1 = doc.querySelector('h1');
        const p = doc.querySelector('p');
        return {
          passed: !!h1 && h1.textContent.trim().length > 0 && !!p && p.textContent.trim().length > 0,
          details: [
            { desc: "وجود وسم <h1> يحتوي على نص", passed: !!h1 && h1.textContent.trim().length > 0 },
            { desc: "وجود وسم <p> يحتوي على نص", passed: !!p && p.textContent.trim().length > 0 }
          ]
        };
      }
    }
  },
  {
    id: 2,
    title: "HTML Document Structure & Headings",
    titleAr: "هيكل المستند وعناوين h1 إلى h6",
    duration: "15 دقيقة",
    level: "مبتدئ من الصفر",
    objectivesAr: ["فهم الفرق بين head و body", "استخدام تسلسل العناوين من h1 إلى h6 بشكل صحيح لمحركات البحث وSEO"],
    objectivesEn: ["Master the document skeleton", "Proper semantic use of h1 through h6"],
    egyptianExplanation: "بالمصري: الـ <head> ده دماغ الصفحة؛ فيه معلومات المتصفح ومحركات البحث بيعرفوها زي العنوان واللغة، بس ما بتظهرش جوه الصفحة نفسها. أما الـ <body> فده جسم الصفحة اللي الزاير بيشوفه. والعناوين زي المانشيتات؛ h1 هو أكبر وأهم مانشيت (وما يتكررش غير مرة واحدة في الصفحة علشان جوجل ميزعلش)، وh2 أقل منه، لحد h6.",
    englishExplanation: "The <head> contains metadata about the document, while the <body> contains all renderable content. Headings rank from <h1> (highest importance) to <h6> (lowest). Never use multiple <h1> tags per single page.",
    codeExample: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8">
    <title>تسلسل العناوين</title>
  </head>
  <body>
    <h1>كورس تطوير الويب الشامل</h1>
    <h2>المرحلة الأولى: أساسيات الواجهات</h2>
    <h3>الدرس الأول: العناوين والفقرات</h3>
  </body>
</html>`,
    codeExplanationAr: "لاحظ إننا ضفنا lang='ar' و dir='rtl' في وسم html علشان الصفحة تعرف إن لغتنا عربي وتقرأ من اليمين للشمال بنظام وسلاسة.",
    commonMistakes: [
      {
        bad: "<h1>عنوان أول</h1>
<h1>عنوان تاني</h1>",
        good: "<h1>عنوان رئيسي واحد فقط</h1>
<h2>عنوان فرعي</h2>",
        explainAr: "تكرار الـ h1 في نفس الصفحة غلط كبير جداً في معايير الـ SEO وبيخلي محركات البحث مش عارفة إيه الموضوع الأساسي.",
        explainEn: "Multiple <h1> elements confuse screen readers and search engines. Stick to one <h1> per page."
      }
    ],
    exercise: {
      titleAr: "تحدي: تنظيم مقال صحفي بعناوين مرتبة",
      instructionsAr: "أنشئ عنوان رئيسي h1 باسم 'جريدة المطورين'، وعنوانين فرعيين h2 باسم 'أخبار الذكاء الاصطناعي' و 'أخبار الويب'، وتحت كل منهما فقرة صغيرة p.",
      starterCode: `<!DOCTYPE html>
<html>
  <body>
    <!-- رتب العناوين هنا -->
  </body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
  <body>
    <h1>جريدة المطورين</h1>
    <h2>أخبار الذكاء الاصطناعي</h2>
    <p>تطورات سريعة في النماذج اللغوية.</p>
    <h2>أخبار الويب</h2>
    <p>معايير حديثة لتطوير المواقع.</p>
  </body>
</html>`,
      hintsAr: ["العنوان الرئيسي هو h1 واحد فقط", "العناوين الفرعية استخدم فيها h2"],
      test: function(doc) {
        const h1 = doc.querySelectorAll('h1');
        const h2 = doc.querySelectorAll('h2');
        const p = doc.querySelectorAll('p');
        return {
          passed: h1.length === 1 && h2.length >= 2 && p.length >= 2,
          details: [
            { desc: "وجود وسم h1 واحد فقط", passed: h1.length === 1 },
            { desc: "وجود عنوانين فرعيين h2 على الأقل", passed: h2.length >= 2 },
            { desc: "وجود فقرتين p على الأقل", passed: p.length >= 2 }
          ]
        };
      }
    }
  },
  {
    id: 3,
    title: "Paragraphs & Text Formatting",
    titleAr: "الفقرات وتنسيق النصوص (strong, em, mark, code)",
    duration: "15 دقيقة",
    level: "مبتدئ",
    objectivesAr: ["تنسيق الكلمات الهامة بـ strong", "إبراز النصوص بـ em و mark", "عرض كود برمجي بـ code"],
    objectivesEn: ["Semantic text emphasis with strong and em", "Highlighting with mark", "Monospace code with <code>"],
    egyptianExplanation: "بالمصري: لو عندك كلمة مهمة وعايز تنبه القارئ ليها بصرياً وسماعياً للناس اللي بتستخدم برامج القراءة الصوتية، بتستخدم <strong> (مش مجرد بتخن الخط وخلاص). والـ <em> للتوكيد الصوتي، والـ <mark> زي القلم الفوسفوري اللي بنحدد بيه، والـ <code> لكتابة أي كود أو أمر كمبيوتر.",
    englishExplanation: "HTML emphasizes semantics over appearance. <strong> implies critical importance (bold), <em> implies stress emphasis (italicized), <mark> highlights text, and <code> formats code snippets.",
    codeExample: `<p>
  تذكر دائماً: <strong>الأمان أولاً</strong> عند كتابة أي تطبيق.<br>
  كلمة السر لازم تكون <em>معقدة وصعبة التخمين</em>.<br>
  لتثبيت الحزمة اكتب: <code>npm install express</code>
</p>`,
    codeExplanationAr: "الوسم <br> وسم ذاتي الإغلاق (Void tag) يعني ملوش قفلة، ووظيفته يعمل سطر جديد (Enter) جوه الفقرة.",
    commonMistakes: [
      {
        bad: "<b>مهم</b> (استخدام قديم لا يحمل معنى دلالي)",
        good: "<strong>مهم</strong> (دلالي وصحيح لمعايير الوصول)",
        explainAr: "الـ <b> بيخلي الخط تخين بس كشكل، بينما <strong> بيفهم المتصفح وقارئات الشاشة إنه نص فائق الأهمية.",
        explainEn: "Use <strong> for semantic importance instead of legacy <b>."
      }
    ],
    exercise: {
      titleAr: "تحدي: تنسيق نصيحة أمان",
      instructionsAr: "أنشئ فقرة p تحتوي على كلمة 'تحذير' داخل <strong>، وكلمة 'سري للغاية' داخل <mark>، وجملة برمجية داخل <code>.",
      starterCode: `<!DOCTYPE html>
<html>
  <body>
    <!-- اكتب فقرة التنسيق هنا -->
  </body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
  <body>
    <p><strong>تحذير</strong>: هذا المفتاح <mark>سري للغاية</mark> ويتم استدعاؤه عبر <code>apiKey</code>.</p>
  </body>
</html>`,
      hintsAr: ["استخدم <strong> للتحذير", "استخدم <mark> للتحديد بالأصفر", "استخدم <code> لكتابة الكود البرمجي"],
      test: function(doc) {
        const strong = doc.querySelector('strong');
        const mark = doc.querySelector('mark');
        const code = doc.querySelector('code');
        return {
          passed: !!strong && !!mark && !!code,
          details: [
            { desc: "استخدام وسم <strong>", passed: !!strong },
            { desc: "استخدام وسم <mark>", passed: !!mark },
            { desc: "استخدام وسم <code>", passed: !!code }
          ]
        };
      }
    }
  },
  {
    id: 4,
    title: "Links and Anchors (<a> Tag)",
    titleAr: "الروابط التشعبية والتنقل (وسم a)",
    duration: "15 دقيقة",
    level: "مبتدئ",
    objectivesAr: ["إنشاء روابط خارجية تفتح في تبويب جديد", "الربط بأقسام داخلية في نفس الصفحة عبر id", "روابط البريد والهاتف"],
    objectivesEn: ["External hyperlinks and target='_blank'", "Internal document jumps using fragment identifiers #id", "mailto and tel protocols"],
    egyptianExplanation: "بالمصري: الإنترنت متسماش 'شبكة' إلا علشان الصفحات مربوطة ببعض بروابط! وسم الـ <a> اختصار لـ Anchor، وأهم خاصية فيه هي href (المكان اللي هتروح له). لو عايزه يفتح في صفحة جديدة بتديله target='_blank' ولازم معاه rel='noopener' للأمان.",
    englishExplanation: "The <a> element creates hyperlinks. Its primary attribute is 'href'. When opening external sites in a new tab with target='_blank', always include rel='noopener' for security.",
    codeExample: `<!-- رابط خارجي في صفحة جديدة -->
<p>
  زور <a href="https://github.com" target="_blank" rel="noopener">موقع GitHub</a> لرفع مشاريعك.
</p>

<!-- رابط اتصال مباشر -->
<p>
  تواصل معنا عبر <a href="mailto:support@example.com">البريد الإلكتروني</a>.
</p>`,
    codeExplanationAr: "لاحظ إننا ضفنا rel='noopener' علشان نمنع الصفحة اللي فتحت جديدة إنها تتحكم في صفحتنا الأصلية، وده مبدأ أمان مهم جداً في الويب.",
    commonMistakes: [
      {
        bad: "<a link='https://google.com'>جوجل</a>",
        good: "<a href='https://google.com'>جوجل</a>",
        explainAr: "الخاصية اسمها href اختصار لـ Hypertext Reference ومش اسمها link!",
        explainEn: "The link destination attribute is 'href', not 'link'."
      }
    ],
    exercise: {
      titleAr: "تحدي: إنشاء قائمة روابط مفيدة",
      instructionsAr: "أنشئ رابطين: الأول يشير إلى موقع محرك بحث خارجي ويفتح في نافذة جديدة بـ target='_blank'، والثاني رابط بريد إلكتروني mailto:.",
      starterCode: `<!DOCTYPE html>
<html>
  <body>
    <!-- اكتب الروابط هنا -->
  </body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
  <body>
    <p><a href="https://google.com" target="_blank" rel="noopener">محرك جوجل</a></p>
    <p><a href="mailto:info@codemastery.com">راسلنا</a></p>
  </body>
</html>`,
      hintsAr: ["الخاصية href هي المسؤولة عن الرابط", "لفتح الصفحة في تبويب جديد استخدم target='_blank'"],
      test: function(doc) {
        const links = doc.querySelectorAll('a');
        const blankLink = Array.from(links).find(l => l.getAttribute('target') === '_blank');
        const mailtoLink = Array.from(links).find(l => (l.getAttribute('href') || '').startsWith('mailto:'));
        return {
          passed: links.length >= 2 && !!blankLink && !!mailtoLink,
          details: [
            { desc: "وجود رابطين على الأقل", passed: links.length >= 2 },
            { desc: "وجود رابط خارجي بـ target='_blank'", passed: !!blankLink },
            { desc: "وجود رابط بريد mailto:", passed: !!mailtoLink }
          ]
        };
      }
    }
  },
  {
    id: 5,
    title: "Images & Figures (<img> & <figure>)",
    titleAr: "الصور والوسائط المرئية (img و figure)",
    duration: "15 دقيقة",
    level: "مبتدئ",
    objectivesAr: ["إدراج الصور بخاصية src و alt", "أهمية النص البديل alt لمحركات البحث والمكفوفين", "تنسيق الصور مع وصفها باستخدام figure و figcaption"],
    objectivesEn: ["Embedding images with src and alt", "Accessibility and SEO importance of alt attributes", "Semantic grouping with figure and figcaption"],
    egyptianExplanation: "بالمصري: الصورة بنحطها بوسم <img> وهو وسم مقفول ذاتياً. أهم حاجتين فيه: src يعني مسار الصورة فين، والـ alt ده النص البديل؛ لو النت بطيء والصورة منزلتش، أو لو شخص كفيف بيسمع الصفحة ببرنامج ناطق، الـ alt هو اللي هيفهمه الصورة دي فيها إيه بالضبط. أوعى تسيب الـ alt فاضي أبداً!",
    englishExplanation: "The <img> tag embeds visual media. The 'alt' attribute is mandatory for web accessibility (WCAG) and image SEO. Wrap illustrative images with captions in <figure> and <figcaption>.",
    codeExample: `<figure>
  <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400" 
       alt="شاشة كمبيوتر تعرض أسطر برمجية باللون الأخضر" 
       width="400">
  <figcaption>صورة تعبيرية لكتابة الأكواد في بيئة العمل</figcaption>
</figure>`,
    codeExplanationAr: "وسم <figure> بيجمع الصورة مع التسمية التوضيحية بتاعتها <figcaption> في وحدة دلالية واحدة واضحة لمحركات البحث.",
    commonMistakes: [
      {
        bad: "<img src='logo.png'> (بدون alt)",
        good: "<img src='logo.png' alt='شعار منصة CODEMASTERY التعليمية'>",
        explainAr: "ترك خاصية alt فارغة بيسقط موقعك في اختبارات إمكانية الوصول (Accessibility) وبيضر الـ SEO.",
        explainEn: "Never omit alt text. It degrades accessibility for screen reader users."
      }
    ],
    exercise: {
      titleAr: "تحدي: معرض صور دلالي مع وصف",
      instructionsAr: "أنشئ عنصراً <figure> يحتوي على صورة <img> لها src صحيح و alt مفصل يصفها، وبداخل العنصر أيضاً <figcaption> يوضح اسم الصورة.",
      starterCode: `<!DOCTYPE html>
<html>
  <body>
    <!-- اكتب كود الـ figure والصورة هنا -->
  </body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
  <body>
    <figure>
      <img src="https://picsum.photos/300/200" alt="صورة طبيعية عشوائية تظهر التضاريس الخلابة">
      <figcaption>منظر طبيعي ساحر وقت الغروب</figcaption>
    </figure>
  </body>
</html>`,
      hintsAr: ["ضع <img> و <figcaption> داخل وسم <figure>", "تأكد من كتابة وصف واضح داخل خاصية alt"],
      test: function(doc) {
        const fig = doc.querySelector('figure');
        const img = doc.querySelector('figure img');
        const cap = doc.querySelector('figure figcaption');
        const hasAlt = img && img.getAttribute('alt') && img.getAttribute('alt').trim().length > 5;
        return {
          passed: !!fig && !!img && !!cap && hasAlt,
          details: [
            { desc: "وجود وسم <figure>", passed: !!fig },
            { desc: "وجود <img> داخل الـ figure بخاصية alt واضحة", passed: !!img && hasAlt },
            { desc: "وجود وسم <figcaption> لكتابة الوصف", passed: !!cap }
          ]
        };
      }
    }
  },
  {
    id: 6,
    title: "Lists: Unordered, Ordered & Nested",
    titleAr: "القوائم: النقطية والرقمية والمتداخلة (ul, ol, li)",
    duration: "15 دقيقة",
    level: "مبتدئ",
    objectivesAr: ["إنشاء قوائم نقطية بـ ul", "إنشاء قوائم مرقمة مرتبة بـ ol", "بناء قوائم متداخلة لتمثيل الشجرات والمنيو"],
    objectivesEn: ["Unordered lists with <ul>", "Numbered sequences with <ol>", "Nested sub-lists for navigation and trees"],
    egyptianExplanation: "بالمصري: أي حاجة فيها ترتيب خطوات (زي وصفة أكل أو خطوات تثبيت برنامج) بنعملها بـ <ol> يعني Ordered List، فالمتصفح يرقمها 1، 2، 3 تلقائياً. لو عناصر مش فارق ترتيبها (زي مقادير الأكلة أو قائمة مهارات) بنعملها بـ <ul> يعني Unordered List وبتظهر نقط. وكل عنصر جواه بنحطه في <li> يعني List Item.",
    englishExplanation: "Use <ol> when sequence matters (algorithms, recipes, step-by-step guides). Use <ul> when order is interchangeable. Every list item must be wrapped in <li>.",
    codeExample: `<h3>خطوات تشغيل خادم الويب:</h3>
<ol>
  <li>افتح موجه الأوامر (Terminal).</li>
  <li>تأكد من تنصيب الحزم:
    <ul>
      <li>Node.js</li>
      <li>Git</li>
    </ul>
  </li>
  <li>اكتب الأمر: <code>npm start</code></li>
</ol>`,
    codeExplanationAr: "لاحظ القائمة المتداخلة: حطينا <ul> كاملة جوه عنصر <li> تابع للقائمة الأصلية عشان نوضح التفرع.",
    commonMistakes: [
      {
        bad: "<ul>
  <p>عنصر أول</p>
</ul>",
        good: "<ul>
  <li>عنصر أول</li>
</ul>",
        explainAr: "الابن المباشر للـ <ul> أو الـ <ol> لازم يكون <li> فقط! مينفعش تحط p أو div كابن مباشر للقائمة.",
        explainEn: "Only <li> elements may be direct children of <ul> and <ol>."
      }
    ],
    exercise: {
      titleAr: "تحدي: قائمة مهام يومية للمبرمج",
      instructionsAr: "أنشئ قائمة مرتبة <ol> تحتوي على 3 خطوات على الأقل، وفي إحدى الخطوات أدرج قائمة فرعية نقطية <ul> تحتوي على نقطتين فرعيتين.",
      starterCode: `<!DOCTYPE html>
<html>
  <body>
    <!-- اكتب القوائم هنا -->
  </body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
  <body>
    <h2>جدول يوم المبرمج</h2>
    <ol>
      <li>مراجعة المهام على Trello</li>
      <li>كتابة الأكواد والوظائف:
        <ul>
          <li>تصميم واجهة المستخدم</li>
          <li>ربط قاعدة البيانات</li>
        </ul>
      </li>
      <li>رفع التحديثات على GitHub</li>
    </ol>
  </body>
</html>`,
      hintsAr: ["القائمة الأساسية تبدأ بـ <ol>", "العناصر الفرعية توضع داخل <li> المناسب عبر <ul>"],
      test: function(doc) {
        const ol = doc.querySelector('ol');
        const nestedUl = doc.querySelector('ol li ul');
        const olLis = doc.querySelectorAll('ol > li');
        return {
          passed: !!ol && olLis.length >= 3 && !!nestedUl,
          details: [
            { desc: "وجود قائمة مرتبة <ol> بها 3 عناصر <li> رئيسية", passed: !!ol && olLis.length >= 3 },
            { desc: "وجود قائمة نقطية <ul> متداخلة داخل أحد عناصر الـ ol", passed: !!nestedUl }
          ]
        };
      }
    }
  },
  {
    id: 7,
    title: "Tables: Data Organization (table, tr, th, td)",
    titleAr: "الجداول وعرض البيانات المنظمة (table, thead, tbody)",
    duration: "20 دقيقة",
    level: "مبتدئ إلى متوسط",
    objectivesAr: ["إنشاء الجداول وتقسيمها إلى thead و tbody", "استخدام th لعناوين الأعمدة و td للبيانات", "دمج الخلايا بـ colspan و rowspan"],
    objectivesEn: ["Semantic tables with <thead> and <tbody>", "Column headers with <th> and cells with <td>", "Cell spans with colspan and rowspan"],
    egyptianExplanation: "بالمصري: زمان كان فيه ناس بتستخدم الجداول عشان تقسم صفحة الموقع كلها وده غلط كبير بطلوه من سنين! الجداول معمولة لغرض واحد بس: عرض بيانات مجدولة زي كشف الدرجات، مواعيد القطارات، أو أسعار باقات الاشتراك. <tr> يعني صف أفقي، <th> يعني عنوان رأس العمود، و<td> يعني خانة البيانات.",
    englishExplanation: "HTML tables represent tabular two-dimensional data. Always divide tables cleanly into <thead> (header row), <tbody> (data rows), and optionally <tfoot> (summaries). Never use tables for general page layout.",
    codeExample: `<table border="1">
  <thead>
    <tr>
      <th>المادة</th>
      <th>الدرجة العظمى</th>
      <th>درجة الطالب</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>تصميم الويب (HTML)</td>
      <td>100</td>
      <td>98</td>
    </tr>
    <tr>
      <td>الخوارزميات</td>
      <td>100</td>
      <td>95</td>
    </tr>
  </tbody>
</table>`,
    codeExplanationAr: "العنصر <thead> بيضم الصفوف اللي فيها ترويسة الجدول، والـ <tbody> بيضم البيانات الفعلية، وده بيساعد برامج القراءة الآلية والمتصفحات في فهم المحتوى عند الطباعة.",
    commonMistakes: [
      {
        bad: "<table>
  <td>بيانات مباشرة بدون صف tr</td>
</table>",
        good: "<table>
  <tr>
    <td>بيانات داخل صف سليم</td>
  </tr>
</table>",
        explainAr: "الـ <td> والـ <th> مينفعش يكونوا أبناء مباشرين للـ table، لازم يتحطوا جوه صف <tr> الأول.",
        explainEn: "Table cells (<td> and <th>) must always reside inside a row (<tr>)."
      }
    ],
    exercise: {
      titleAr: "تحدي: جدول درجات الطلاب",
      instructionsAr: "أنشئ جدولاً يحتوي على thead به صف به 3 عناوين (اسم الطالب، المادة، التقدير)، وtbody يحتوي على صفين لبيانات طالبين مختلفين.",
      starterCode: `<!DOCTYPE html>
<html>
  <body>
    <!-- أنشئ الجدول هنا -->
  </body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
  <body>
    <table border="1">
      <thead>
        <tr>
          <th>اسم الطالب</th>
          <th>المادة</th>
          <th>التقدير</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>أحمد حسني</td>
          <td>HTML5</td>
          <td>ممتاز</td>
        </tr>
        <tr>
          <td>محمود علي</td>
          <td>CSS3</td>
          <td>جيد جداً</td>
        </tr>
      </tbody>
    </table>
  </body>
</html>`,
      hintsAr: ["ابدأ بـ <table>", "استخدم <thead> مع <th> للعناوين", "استخدم <tbody> مع <tr> و <td> للبيانات"],
      test: function(doc) {
        const table = doc.querySelector('table');
        const thead = doc.querySelector('table thead');
        const tbody = doc.querySelector('table tbody');
        const ths = doc.querySelectorAll('table thead th');
        const trs = doc.querySelectorAll('table tbody tr');
        return {
          passed: !!table && !!thead && !!tbody && ths.length >= 3 && trs.length >= 2,
          details: [
            { desc: "وجود وسم table كامل بالـ thead والـ tbody", passed: !!table && !!thead && !!tbody },
            { desc: "وجود 3 أعمدة ترويسة th في thead", passed: ths.length >= 3 },
            { desc: "وجود صفين بيانات على الأقل في tbody", passed: trs.length >= 2 }
          ]
        };
      }
    }
  },
  {
    id: 8,
    title: "Forms & Basic Inputs (<form>, <input>, <label>)",
    titleAr: "النماذج وحقول الإدخال الأساسية (form, input, label)",
    duration: "20 دقيقة",
    level: "متوسط",
    objectivesAr: ["بناء استمارة إدخال بـ form", "ربط الحقول بتسمياتها التوضيحية عبر label و for", "استخدام الأنواع المختلفة: text, email, password, number"],
    objectivesEn: ["Building interactive forms", "Accessible field labels with <label for='...'>", "Key input types: text, email, password, and number"],
    egyptianExplanation: "بالمصري: الفورم هو الطريقة اللي المستخدم بيكلم بيها موقعك ويبعتلك بيانات؛ زي تسجيل الدخول، إنشاء حساب، أو ملء استبيان. كل <input> لازم يكون له <label> مرتبط بيه عن طريق الـ id وخاصية for عشان لما الزائر يضغط على كلمة 'اسم المستخدم' المؤشر يدخل جوه المربع على طول من غير ما يحتاج يدوس جواه بالمللي.",
    englishExplanation: "Forms bridge user input to web servers. Always pair each <input> with a corresponding <label> referencing the input's 'id' via the 'for' attribute. This is essential for usability and accessibility.",
    codeExample: `<form action="/submit" method="POST">
  <div>
    <label for="user-email">البريد الإلكتروني:</label>
    <input type="email" id="user-email" name="email" required placeholder="name@example.com">
  </div>
  <div>
    <label for="user-pass">كلمة المرور:</label>
    <input type="password" id="user-pass" name="password" required>
  </div>
  <button type="submit">تسجيل الدخول</button>
</form>`,
    codeExplanationAr: "خاصية required بتخلي المتصفح يمنع إرسال الفورم لو المستخدم ساب الحقل فاضي، وخاصية type='email' بتتأكد إن المكتوب فيه علامة @ وشكل إيميل سليم.",
    commonMistakes: [
      {
        bad: "<label>الاسم:</label>
<input type='text'> (بدون id أو for)",
        good: "<label for='name'>الاسم:</label>
<input type='text' id='name' name='username'>",
        explainAr: "عدم ربط الـ for بالـ id بيخلي قارئات الشاشة مش عارفة العنوان ده تبع أنهي خانة إدخال بالضبط.",
        explainEn: "Omitting 'for' and 'id' linkages prevents screen readers from announcing field descriptions."
      }
    ],
    exercise: {
      titleAr: "تحدي: بناء نموذج تسجيل حساب جديد",
      instructionsAr: "أنشئ نموذج <form> يحتوي على 3 حقول مرتبطة بـ label (الاسم: text، الإيميل: email، كلمة المرور: password) وزر إرسال <button type='submit'>.",
      starterCode: `<!DOCTYPE html>
<html>
  <body>
    <!-- اكتب النموذج هنا -->
  </body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
  <body>
    <form>
      <div>
        <label for="fullName">الاسم بالكامل:</label>
        <input type="text" id="fullName" name="fullName" required>
      </div>
      <div>
        <label for="userMail">البريد الإلكتروني:</label>
        <input type="email" id="userMail" name="userMail" required>
      </div>
      <div>
        <label for="userSecret">كلمة المرور:</label>
        <input type="password" id="userSecret" name="userSecret" required>
      </div>
      <button type="submit">إنشاء الحساب</button>
    </form>
  </body>
</html>`,
      hintsAr: ["تأكد إن كل label ليه خاصية for مطابقة للـ id بتاع الـ input بتاعه", "ضع زر الإرسال type='submit' في نهاية الفورم"],
      test: function(doc) {
        const form = doc.querySelector('form');
        const textIn = doc.querySelector('input[type="text"]');
        const emailIn = doc.querySelector('input[type="email"]');
        const passIn = doc.querySelector('input[type="password"]');
        const btn = doc.querySelector('button[type="submit"], input[type="submit"]');
        const labels = doc.querySelectorAll('label');
        return {
          passed: !!form && !!textIn && !!emailIn && !!passIn && !!btn && labels.length >= 3,
          details: [
            { desc: "وجود وسم <form>", passed: !!form },
            { desc: "وجود حقول text و email و password", passed: !!textIn && !!emailIn && !!passIn },
            { desc: "وجود 3 وسوم <label> مربوطة", passed: labels.length >= 3 },
            { desc: "وجود زر إرسال submit", passed: !!btn }
          ]
        };
      }
    }
  },
  {
    id: 9,
    title: "Advanced Form Controls",
    titleAr: "حقول النماذج المتقدمة (textarea, select, radio, checkbox)",
    duration: "20 دقيقة",
    level: "متوسط",
    objectivesAr: ["إدخال نصوص متعددة الأسطر بـ textarea", "إنشاء قوائم منسدلة بـ select و option", "استخدام أزرار الاختيار المنفرد radio والمتعدد checkbox"],
    objectivesEn: ["Multi-line comments using <textarea>", "Dropdown selections with <select> and <option>", "Single-choice radio buttons and multi-choice checkboxes"],
    egyptianExplanation: "بالمصري: لو عايز المستخدم يكتب مقال أو رسالة طويلة مش هينفع input عادي؛ بنستخدم <textarea>. ولو عايز يختار دولة من لستة بنعمل <select> وجواها <option>. أما لو عايزه يختار حاجة واحدة بس (زي النوع: ذكر أو أنثى) بنستخدم radio ولازم كلهم ياخدوا نفس الـ name عشان المتصفح يسمح باختيار واحد فقط. والـ checkbox للاختيارات المتعددة (زي مهاراتك: HTML, CSS, JS).",
    englishExplanation: "Radio inputs sharing the same 'name' form a mutually exclusive group where only one item can be chosen. Checkboxes allow independent multi-selections. Use <select> for dropdowns and <textarea> for expandable multiline text.",
    codeExample: `<form>
  <!-- قائمة منسدلة -->
  <label for="city">اختر مدينتك:</label>
  <select id="city" name="city">
    <option value="cairo">القاهرة</option>
    <option value="alex">الإسكندرية</option>
    <option value="giza">الجيزة</option>
  </select>

  <!-- خيارات Radio تشترك في نفس الاسم name -->
  <p>المستوى التعليمي:</p>
  <label><input type="radio" name="level" value="beginner" checked> مبتدئ</label>
  <label><input type="radio" name="level" value="advanced"> متقدم</label>

  <!-- رسالة طويلة -->
  <p><label for="bio">نبذة عنك:</label></p>
  <textarea id="bio" name="bio" rows="4" cols="40"></textarea>
</form>`,
    codeExplanationAr: "لاحظ إن أزرار الـ radio اخدت نفس الـ name='level'، وده الشرط الأساسي علشان لما تختار 'متقدم' يلغي اختيار 'مبتدئ' تلقائياً.",
    commonMistakes: [
      {
        bad: "<input type='radio' name='gender1'> ذكر
<input type='radio' name='gender2'> أنثى",
        good: "<input type='radio' name='gender'> ذكر
<input type='radio' name='gender'> أنثى",
        explainAr: "تغيير اسم الـ name لكل زرار radio بيخلي المستخدم يقدر يختار الاتنين مع بعض وده غلط منطقي!",
        explainEn: "Radio options must share identical 'name' attributes to remain mutually exclusive."
      }
    ],
    exercise: {
      titleAr: "تحدي: استمارة تقييم وتواصل متقدمة",
      instructionsAr: "أنشئ نموذجاً يحتوي على قائمة منسدلة <select> بها 3 خيارات على الأقل، ومجموعتي radio تشتركان في نفس الـ name، ومربع نص متعدد الأسطر <textarea>.",
      starterCode: `<!DOCTYPE html>
<html>
  <body>
    <!-- اكتب النموذج المتقدم هنا -->
  </body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
  <body>
    <form>
      <label for="track">اختر المسار:</label>
      <select id="track" name="track">
        <option value="fe">واجهات أمامية</option>
        <option value="be">واجهات خلفية</option>
        <option value="fs">فول ستاك</option>
      </select>
      
      <p>طريقة الحضور:</p>
      <input type="radio" id="online" name="mode" value="online">
      <label for="online">عن بعد</label>
      <input type="radio" id="offline" name="mode" value="offline">
      <label for="offline">حضوري</label>
      
      <p><label for="msg">ملاحظات إضافية:</label></p>
      <textarea id="msg" name="notes"></textarea>
    </form>
  </body>
</html>`,
      hintsAr: ["استخدم <select> وبداخله وسوم <option>", "أزرار الـ radio يجب أن تشترك في نفس قيمة name"],
      test: function(doc) {
        const select = doc.querySelector('select');
        const options = doc.querySelectorAll('select option');
        const radios = doc.querySelectorAll('input[type="radio"]');
        const textarea = doc.querySelector('textarea');
        const sameName = radios.length >= 2 && radios[0].getAttribute('name') === radios[1].getAttribute('name');
        return {
          passed: !!select && options.length >= 3 && radios.length >= 2 && sameName && !!textarea,
          details: [
            { desc: "وجود قائمة منسدلة select بها 3 خيارات على الأقل", passed: !!select && options.length >= 3 },
            { desc: "وجود خياري radio على الأقل بنفس الـ name", passed: radios.length >= 2 && sameName },
            { desc: "وجود مربع نصوص متعددة textarea", passed: !!textarea }
          ]
        };
      }
    }
  },
  {
    id: 10,
    title: "Semantic HTML Elements",
    titleAr: "عناصر الـ HTML الدلالية (Semantic Layout)",
    duration: "20 دقيقة",
    level: "متوسط",
    objectivesAr: ["استبدال الـ div العشوائي بوسوم ذات معنى", "استخدام header و nav و main و section و article و footer", "أثر الوسوم الدلالية على SEO ومحركات البحث وقارئات الشاشة"],
    objectivesEn: ["Ditching 'div soup' for semantic clarity", "Structuring layouts with header, nav, main, article, section, and footer", "SEO and accessibility benefits"],
    egyptianExplanation: "بالمصري: زمان المطورين كانوا بيعملوا الصفحة كلها عبارة عن div جوه div جوه div ويدوها كلاسات، وسموها 'شوربة الديفات Div Soup'! ده بيعمي جوجل وبيخلي برامج ذوي الاحتياجات الخاصة مش فاهمة إيه الراس وإيه الذيل. الـ Semantic HTML نزل مخصوص عشان كل جزء في الصفحة ياخد اسمه الحقيقي: <header> للترويسة، <nav> لروابط التنقل، <main> للمحتوى الأساسي، <footer> لذيل الصفحة.",
    englishExplanation: "Semantic tags describe their meaning to both the browser and developer. Rather than wrapping everything in generic <div> containers, use landmark tags like <main>, <header>, <nav>, <article>, and <footer>.",
    codeExample: `<body>
  <header>
    <h1>مدونة البرمجة الحديثة</h1>
    <nav>
      <a href="#home">الرئيسية</a> |
      <a href="#articles">المقالات</a>
    </nav>
  </header>

  <main>
    <article>
      <h2>مستقبل الذكاء الاصطناعي</h2>
      <p>تفاصيل المقال تناقش التطورات الأخيرة...</p>
    </article>
  </main>

  <footer>
    <p>جميع الحقوق محفوظة &copy; 2026</p>
  </footer>
</body>`,
    codeExplanationAr: "العنصر <main> يمثل المحتوى المركزي الفريد في الصفحة ولا يتكرر في نفس المستند، بينما <article> يمثل محتوى مستقل بذاته يمكن نشره أو إعادة استخدامه في مكان آخر كالمقال أو التغريدة.",
    commonMistakes: [
      {
        bad: "<div class='nav'>قائمة الروابط</div>",
        good: "<nav>قائمة الروابط</nav>",
        explainAr: "استخدام div مع كلاس nav لا يعطي متصفحات المكفوفين أي إشارة دلالية على أن هذا شريط تنقل.",
        explainEn: "Screen readers rely on <nav> landmarks to provide quick jump-navigation keys."
      }
    ],
    exercise: {
      titleAr: "تحدي: بناء هيكل صفحة مقالات دلالي",
      instructionsAr: "ابنِ هيكل صفحة يحتوي على <header> (بداخله nav برابطين)، وعنصر <main> (بداخله عنصرين <article> كل منهما يحتوي h2 و p)، وعنصر <footer> في النهاية.",
      starterCode: `<!DOCTYPE html>
<html>
  <body>
    <!-- ابنِ الهيكل الدلالي هنا -->
  </body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
  <body>
    <header>
      <h1>بوابة المعرفة</h1>
      <nav>
        <a href="#1">مقال 1</a>
        <a href="#2">مقال 2</a>
      </nav>
    </header>
    <main>
      <article>
        <h2>تعلم لغة HTML</h2>
        <p>الأساس المتين لكل مطور ويب.</p>
      </article>
      <article>
        <h2>تعلم لغة CSS</h2>
        <p>سر إبداع وتصميم المواقع الحديثة.</p>
      </article>
    </main>
    <footer>
      <p>&copy; CODEMASTERY 2026</p>
    </footer>
  </body>
</html>`,
      hintsAr: ["تأكد من وجود header, nav, main, article, footer", "ضع الـ article داخل الـ main"],
      test: function(doc) {
        const header = doc.querySelector('header');
        const nav = doc.querySelector('header nav');
        const main = doc.querySelector('main');
        const articles = doc.querySelectorAll('main article');
        const footer = doc.querySelector('footer');
        return {
          passed: !!header && !!nav && !!main && articles.length >= 2 && !!footer,
          details: [
            { desc: "وجود وسم <header> وبداخله <nav>", passed: !!header && !!nav },
            { desc: "وجود وسم <main> وبداخله مقالين <article> على الأقل", passed: !!main && articles.length >= 2 },
            { desc: "وجود وسم <footer> في نهاية الصفحة", passed: !!footer }
          ]
        };
      }
    }
  },
  {
    id: 11,
    title: "Audio & Video Media Elements",
    titleAr: "عناصر الصوت والفيديو المضمنة (audio, video, source)",
    duration: "15 دقيقة",
    level: "متوسط",
    objectivesAr: ["تضمين ملفات الفيديو بـ video وخاصية controls", "تضمين الملفات الصوتية بـ audio", "توفير صيغ بديلة عبر source"],
    objectivesEn: ["Embedding native video with controls and poster", "Audio playback with <audio>", "Cross-browser fallbacks using <source>"],
    egyptianExplanation: "بالمصري: زمان كان تشغيل الفيديو في المتصفح بيحتاج Flash وكان بيهنج الجهاز كله! دلوقتي بفضل HTML5، عندنا وسم <video> ووسم <audio> بيشتغلوا بكفاءة عالية ومن غير أي إضافات خارجية. أهم خاصية فيهم هي controls علشان تظهر للزائر زراير التشغيل والوقف وتعلية الصوت.",
    englishExplanation: "HTML5 native media eliminates third-party plugins. Always supply the 'controls' attribute so users can manage playback, and use multiple <source> child tags to ensure broad codec compatibility.",
    codeExample: `<!-- مشغل فيديو -->
<video width="480" controls poster="https://picsum.photos/480/270">
  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
  متصفحك لا يدعم تشغيل الفيديو المباشر.
</video>

<!-- مشغل صوتيات -->
<audio controls>
  <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">
  متصفحك لا يدعم تشغيل الصوت.
</audio>`,
    codeExplanationAr: "خاصية poster في وسم الفيديو بتحدد الصورة الغلاف اللي بتظهر للمستخدم قبل ما يدوس تشغيل، زي الصورة المصغرة بتاعة يوتيوب.",
    commonMistakes: [
      {
        bad: "<video src='clip.mp4'></video> (بدون controls)",
        good: "<video src='clip.mp4' controls></video>",
        explainAr: "لو نسيت كلمة controls، الفيديو هينزل على الصفحة كصورة ثابتة ومحدش هيعرف يشغله إطلاقاً!",
        explainEn: "Without the 'controls' attribute, the browser hides all play, pause, and volume controls."
      }
    ],
    exercise: {
      titleAr: "تحدي: مشغل وسائط تفاعلي",
      instructionsAr: "أدرج عنصري وسائط: الأول <video controls> مع تحديد العرض width وخاصية poster، والثاني <audio controls> بداخله عنصر <source>.",
      starterCode: `<!DOCTYPE html>
<html>
  <body>
    <!-- اكتب وسوم الوسائط هنا -->
  </body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
  <body>
    <h2>مشغل المحاضرات</h2>
    <video controls width="400" poster="https://picsum.photos/400/225">
      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
    </video>
    
    <h2>التسجيل الصوتي</h2>
    <audio controls>
      <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">
    </audio>
  </body>
</html>`,
      hintsAr: ["تأكد من كتابة controls في كلا الوسمين", "استخدم <source> لتحديد رابط الملف ونوعه"],
      test: function(doc) {
        const vid = doc.querySelector('video[controls]');
        const aud = doc.querySelector('audio[controls]');
        const vidSrc = doc.querySelector('video source, video[src]');
        const audSrc = doc.querySelector('audio source, audio[src]');
        return {
          passed: !!vid && !!aud && !!vidSrc && !!audSrc,
          details: [
            { desc: "وجود وسم <video> مفعل بخاصية controls", passed: !!vid },
            { desc: "وجود وسم <audio> مفعل بخاصية controls", passed: !!aud },
            { desc: "تحديد مصدر source لكل مشغل", passed: !!vidSrc && !!audSrc }
          ]
        };
      }
    }
  },
  {
    id: 12,
    title: "HTML Entities & Symbols",
    titleAr: "الرموز والكيانات الخاصة في HTML (Entities)",
    duration: "10 دقائق",
    level: "متوسط",
    objectivesAr: ["كتابة الرموز المحجوزة مثل < و > دون كسر الكود", "إضافة رمز حقوق الملكية &copy; والمسافة الإجبارية &nbsp;", "فهم أسماء الكيانات وأرقام اليونيكود"],
    objectivesEn: ["Escaping reserved characters like < and >", "Common entities: &copy;, &amp;, &nbsp;", "Entity name vs decimal/hex numeric references"],
    egyptianExplanation: "بالمصري: لو جيت تكتب في الصفحة 'العلامة < بتستخدم في المقارنة'، المتصفح هيفتكر إنك بتفتح تاج جديد وهيتلخبط والكود هيبوظ! عشان كدا لما نعوز نكتب علامة أقل من بنكتب &lt; (اختصار Less Than)، وعلامة أكبر من بنكتب &gt; (Greater Than). وكمان بنستخدم &copy; لعلامة حقوق الطبع والنشر.",
    englishExplanation: "Reserved HTML characters must be represented by character entity references. For instance, '<' must be written as '&lt;', '>' as '&gt;', and '&' as '&amp;'.",
    codeExample: `<p>
  في لغة JavaScript، نكتب: <code>5 &lt; 10 &amp;&amp; 20 &gt; 15</code>
</p>
<p>
  جميع الحقوق محفوظة &copy; 2026 CODEMASTERY.&nbsp;&nbsp;ش.م.م
</p>`,
    codeExplanationAr: "الرمز &nbsp; اختصار لـ Non-Breaking Space، وبيعمل مسافة بيضاء إجبارية المتصفح ميعرفش يدمجها أو يلغيها زي المسافات العادية بالمسطرة.",
    commonMistakes: [
      {
        bad: "<p>الكود هو <script></p> (سيتم تفسيره كبرمجة حقيقية)",
        good: "<p>الكود هو &lt;script&gt;</p>",
        explainAr: "كتابة الأقواس الزاوية مباشرة داخل النص العادي قد تفتح ثغرات أمنية وتكسر تخطيط الصفحة تماماً.",
        explainEn: "Directly unescaped markup leads to parsing bugs and potential XSS security issues."
      }
    ],
    exercise: {
      titleAr: "تحدي: كتابة معادلات ونصوص تحوي رموزاً",
      instructionsAr: "أنشئ فقرة تشرح معادلة باستخدام كيانين: &lt; و &gt;، وفقرة أخرى في النهاية تحتوي على رمز حقوق النشر &copy; متبوعاً بسنة 2026.",
      starterCode: `<!DOCTYPE html>
<html>
  <body>
    <!-- اكتب الفقرات والكيانات هنا -->
  </body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
  <body>
    <p>في البرمجة: القيمة x &gt; 0 و y &lt; 100.</p>
    <p>حقوق النشر محفوظة &copy; 2026</p>
  </body>
</html>`,
      hintsAr: ["استخدم &lt; لعلامة أقل من", "استخدم &gt; لعلامة أكبر من", "استخدم &copy; لحقوق النشر"],
      test: function(doc) {
        const text = doc.body.textContent;
        const hasLt = text.includes('<');
        const hasGt = text.includes('>');
        const hasCopy = text.includes('©');
        return {
          passed: hasLt && hasGt && hasCopy,
          details: [
            { desc: "ظهور علامة < بشكل سليم عبر الكيان &lt;", passed: hasLt },
            { desc: "ظهور علامة > بشكل سليم عبر الكيان &gt;", passed: hasGt },
            { desc: "ظهور رمز حقوق الملكية © عبر الكيان &copy;", passed: hasCopy }
          ]
        };
      }
    }
  },
  {
    id: 13,
    title: "Web Accessibility (a11y) & ARIA Basics",
    titleAr: "إتاحة الويب والوصول الشامل للمكفوفين (a11y)",
    duration: "20 دقيقة",
    level: "متوسط إلى متقدم",
    objectivesAr: ["فهم معايير إتاحة الويب للمستخدمين ذوي الهمم", "استخدام خاصية aria-label للأزرار التي تحتوي أيقونات فقط", "التنقل الكامل بالموقع عبر لوحة المفاتيح Tab"],
    objectivesEn: ["WCAG fundamentals", "Enhancing icon buttons with aria-label", "Keyboard navigation and focus semantics"],
    egyptianExplanation: "بالمصري: كلمة a11y دي اختصار لـ Accessibility (بين الـ a والـ y فيه 11 حرف). الفكرة إن موقعك لازم يكون صالح للاستخدام لأي إنسان في الدنيا؛ سواء كان شخص سليم، أو حد عنده ضعف بصر، أو حد بيستخدم دراعه اليمين بس فبيتنقل بزرار الـ Tab على الكيبورد. لو حطيت زرار جواه رسمة سلة مهملات من غير كلام، الكفيف مش هيعرف الزرار ده بيعمل إيه إلا لو حطيتله aria-label='حذف العنصر'.",
    englishExplanation: "Web accessibility (a11y) ensures digital barriers do not exclude people with disabilities. Buttons with icons must declare their purpose via aria-label='...', and form fields must be fully navigable via keyboard.",
    codeExample: `<!-- زرار فيه أيقونة بس لازم المكفوفين يفهموه -->
<button aria-label="إغلاق النافذة المنبثقة">
  &times;
</button>

<!-- حقل بحث يحمل دوراً دلالياً واضحاً -->
<div role="search">
  <label for="site-search" class="sr-only">ابحث في الموقع:</label>
  <input type="search" id="site-search" placeholder="ابحث هنا...">
</div>`,
    codeExplanationAr: "الكلاس sr-only بنستخدمه في الـ CSS عشان نخفي العنصر بصرياً من الشاشة لو مش عايزين نزحم التصميم، لكن يفضل ظاهر ومقروء بوضوح في أجهزة قراءة الشاشة للمكفوفين.",
    commonMistakes: [
      {
        bad: "<div onclick='deleteItem()'>🗑️</div> (استخدام div بدلاً من زر حقيقي)",
        good: "<button type='button' aria-label='حذف الرسالة'>🗑️</button>",
        explainAr: "الـ div مينفعش المستخدم يوصله بزرار الـ Tab في الكيبورد ومش بيتعرف كزر، بينما <button> مجهز ومبرمج في المتصفح ليكون متاحاً للكيبورد وقارئات الشاشة تلقائياً.",
        explainEn: "Never use clickable <div> elements for actions. Native <button> elements provide essential keyboard and screen reader accessibility."
      }
    ],
    exercise: {
      titleAr: "تحدي: زر أيقوني متاح للجميع",
      instructionsAr: "أنشئ زراً <button> لا يحتوي على نص صريح (يحوي رمزاً أو إيموجي فقط)، وعوض ذلك بوضع خاصية aria-label واضحة تشرح وظيفته بالتفصيل.",
      starterCode: `<!DOCTYPE html>
<html>
  <body>
    <!-- أنشئ الزر هنا -->
  </body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
  <body>
    <button type="button" aria-label="تعديل بيانات الملف الشخصي">
      ✏️
    </button>
  </body>
</html>`,
      hintsAr: ["استخدم وسم <button>", "أضف خاصية aria-label تصف العملية بدقة"],
      test: function(doc) {
        const btn = doc.querySelector('button[aria-label]');
        const hasGoodLabel = btn && btn.getAttribute('aria-label').trim().length >= 5;
        return {
          passed: !!btn && hasGoodLabel,
          details: [
            { desc: "وجود وسم <button>", passed: !!btn },
            { desc: "وجود خاصية aria-label تحتوي على وصف دقيق", passed: hasGoodLabel }
          ]
        };
      }
    }
  },
  {
    id: 14,
    title: "Page Metadata & SEO (<meta> Tags)",
    titleAr: "البيانات الوصفية وتهيئة محركات البحث (<meta> Tags)",
    duration: "15 دقيقة",
    level: "متقدم",
    objectivesAr: ["ضبط التشفير العالمي UTF-8 للغة العربية", "جعل الصفحة متجاوبة مع الموبايل بـ viewport", "إضافة وصف المقال description لمشاركة الروابط وجوجل"],
    objectivesEn: ["UTF-8 character encoding for Arabic text", "Mobile responsive viewport setup", "Meta description and social sharing basics"],
    egyptianExplanation: "بالمصري: الـ <meta> تاقات هي السر اللي بيخلي جوجل ومواقع التواصل لما تشير عليهم رابط موقعك يجيبوا العنوان والصورة والوصف بشكل شيك. وكمان سطر الـ viewport هو اللي بيخلي موقعك يفتح على شاشة الموبايل بحجمه الطبيعي ومن غير ما الزائر يضطر يعمل زووم بإيديه زي المواقع القديمة.",
    englishExplanation: "Meta tags reside inside the <head> element. The viewport meta tag is vital for responsive mobile scaling. The description meta tag supplies the snippet shown beneath search engine results.",
    codeExample: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <!-- تشفير الحروف العربية لمنع ظهور رموز غريبة -->
    <meta charset="UTF-8">
    <!-- دعم شاشات الهواتف الذكية والتجاوب -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- وصف الموقع في محركات البحث -->
    <meta name="description" content="منصة CODEMASTERY لتعليم البرمجة وتطوير الويب من الصفر حتى الاحتراف باللغة العربية.">
    <title>منصة CODEMASTERY</title>
  </head>
  <body>
    <h1>مرحباً بكم</h1>
  </body>
</html>`,
    codeExplanationAr: "وسم meta charset='UTF-8' بيحمي الحروف العربية من إنها تظهر في المتصفح كرموز غير مفهومة زي 'ط¹ط±ط¨ظٹ'.",
    commonMistakes: [
      {
        bad: "نسيان وسم viewport في صفحة حديثة",
        good: "<meta name='viewport' content='width=device-width, initial-scale=1.0'>",
        explainAr: "بدون هذا السطر، متصفحات الهواتف المحمولة ستفترض أن الموقع مصمم للشاشات المكتبية الضخمة وستعرضه بحجم خط مجهري غير مقروء.",
        explainEn: "Without the viewport meta tag, mobile browsers render desktop-width viewports and shrink pages."
      }
    ],
    exercise: {
      titleAr: "تحدي: كتابة منطقة head احترافية كاملة للـ SEO",
      instructionsAr: "قم بإعداد وسم <head> يحتوي على: meta charset بـ UTF-8، و meta viewport، و meta description يحوي وصفاً حقيقياً لا يقل عن 15 حرفاً، وعنصر <title>.",
      starterCode: `<!DOCTYPE html>
<html lang="ar">
  <!-- اكتب الـ head هنا -->
  <body>
    <p>محتوى تجريبي</p>
  </body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html lang="ar">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="صفحة رسمية مخصصة لتعليم أحدث تقنيات تطوير الويب وتصميم المواقع">
    <title>أكاديمية الويب العربي</title>
  </head>
  <body>
    <p>محتوى تجريبي</p>
  </body>
</html>`,
      hintsAr: ["تأكد من وجود charset='UTF-8'", "تأكد من وجود name='viewport'", "تأكد من وجود name='description' وبداخله محتوى وافٍ"],
      test: function(doc) {
        const charset = doc.querySelector('meta[charset="UTF-8"]');
        const viewport = doc.querySelector('meta[name="viewport"]');
        const desc = doc.querySelector('meta[name="description"]');
        const title = doc.querySelector('title');
        const goodDesc = desc && (desc.getAttribute('content') || '').length >= 15;
        return {
          passed: !!charset && !!viewport && goodDesc && !!title,
          details: [
            { desc: "وجود meta charset='UTF-8'", passed: !!charset },
            { desc: "وجود meta viewport للتجاوب مع الهواتف", passed: !!viewport },
            { desc: "وجود meta description مفيد", passed: goodDesc },
            { desc: "وجود عنصر title للصفحة", passed: !!title }
          ]
        };
      }
    }
  },
  {
    id: 15,
    title: "Capstone: Building a Full Multi-Section Webpage",
    titleAr: "المشروع الختامي للمسار: بناء صفحة ويب متكاملة من الصفر",
    duration: "30 دقيقة",
    level: "تطبيقي شامل",
    objectivesAr: ["دمج كل ما تعلمته في صفحة واحدة متكاملة", "تطبيق الهيكل الدلالي من رأس الصفحة وحتى الذيل", "إدراج وسائط ونماذج وجداول وقوائم بنسق احترافي"],
    objectivesEn: ["Consolidate all 14 previous lessons into a single masterpiece", "Full semantic hierarchy with tables, forms, lists, and media", "Production-standard pure HTML markup"],
    egyptianExplanation: "بالمصري: ألف مبروك يا بطل! وصلت للمحطة الختامية لمسار الـ HTML من الصفر. في الدرس ده مش هنشرح حاجة جديدة، إنت اللي هتبرهن على شطارتك وتجمع كل اللي اتعلمته: هيكل الصفحة، العناوين، الروابط، الصور، القوائم، الجداول، ونموذج التواصل في صفحة ويب شخصية حقيقية جاهزة للرفع على الإنترنت!",
    englishExplanation: "This capstone assessment tests everything you have learned: semantics, typography, media embedding, tabular data, accessible forms, and document structure.",
    codeExample: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>الملف التعريفي للمطور</title>
</head>
<body>
  <header>
    <h1>المهندس أحمد حسني</h1>
    <p>مطور واجهات أمامية ومحاضر تقني</p>
    <nav>
      <a href="#about">عني</a> | 
      <a href="#skills">المهارات</a> | 
      <a href="#contact">تواصل معي</a>
    </nav>
  </header>

  <main>
    <section id="about">
      <h2>نبذة شخصية</h2>
      <p>شغوف ببناء أنظمة الويب المتقدمة ونقل الخبرات للأجيال الصاعدة.</p>
    </section>

    <section id="skills">
      <h2>المهارات التقنية</h2>
      <ul>
        <li>HTML5 Semantic Architecture</li>
        <li>Accessible Web Components (a11y)</li>
      </ul>
    </section>
  </main>

  <footer>
    <p>&copy; 2026 جميع الحقوق محفوظة.</p>
  </footer>
</body>
</html>`,
    codeExplanationAr: "هذه بنية كاملة مطابقة لأعلى المعايير العالمية في تنظيم كود الـ HTML النقي، تمهيداً لإضافة طبقة التنسيقات بالـ CSS والتفاعلية بالـ JS لاحقاً.",
    commonMistakes: [
      {
        bad: "بناء مشروع كامل بدون وسم <main> أو بدون <footer>",
        good: "الالتزام بالبنية الدلالية القياسية: <header>, <main>, <footer>",
        explainAr: "المشروع التخرجي يعكس احترافيتك كمطور؛ لا تفرط في المعايير الهيكلية.",
        explainEn: "A complete professional page must feature standard landmarks."
      }
    ],
    exercise: {
      titleAr: "التحدي الختامي: بناء بورتفوليو مطور ويب متكامل",
      instructionsAr: "ابنِ صفحة كاملة تحتوي على: header (به h1 و nav), main (به قسمين section على الأقل: قسم يضم قائمة ul، وقسم يضم إما جدولاً table أو نموذجاً form)، وعنصر footer في النهاية.",
      starterCode: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8">
    <title>مشروعي الأول</title>
  </head>
  <body>
    <!-- ابنِ الصفحة المتكاملة هنا بكل ثقة -->
  </body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>بورتفوليو المطور</title>
  </head>
  <body>
    <header>
      <h1>مرحباً، أنا مطور ويب واعد</h1>
      <nav>
        <a href="#skills">مهاراتي</a> |
        <a href="#contact">راسلني</a>
      </nav>
    </header>
    <main>
      <section id="skills">
        <h2>المهارات</h2>
        <ul>
          <li>بناء صفحات HTML5 دلالية</li>
          <li>معايير الإتاحة والوصول</li>
        </ul>
      </section>
      <section id="contact">
        <h2>تواصل معي</h2>
        <form>
          <label for="email">بريدك:</label>
          <input type="email" id="email" required>
          <button type="submit">إرسال</button>
        </form>
      </section>
    </main>
    <footer>
      <p>&copy; 2026 تم الإنجاز بنجاح على CODEMASTERY</p>
    </footer>
  </body>
</html>`,
      hintsAr: ["تأكد من وجود <header> و <main> و <footer>", "استخدم <section> لتقسيم المحتوى الداخلي", "أضف قائمة <ul> ونموذج <form> أو جدول"],
      test: function(doc) {
        const header = doc.querySelector('header');
        const nav = doc.querySelector('header nav');
        const main = doc.querySelector('main');
        const sections = doc.querySelectorAll('main section');
        const ul = doc.querySelector('ul');
        const interactive = doc.querySelector('table, form');
        const footer = doc.querySelector('footer');
        return {
          passed: !!header && !!nav && !!main && sections.length >= 2 && !!ul && !!interactive && !!footer,
          details: [
            { desc: "وجود وسم <header> به ترويسة وشريط <nav>", passed: !!header && !!nav },
            { desc: "وجود وسم <main> مقسم إلى قسمين <section> على الأقل", passed: !!main && sections.length >= 2 },
            { desc: "وجود قائمة نقطية <ul> بالمهارات", passed: !!ul },
            { desc: "وجود عنصر متقدم (جدول table أو نموذج form)", passed: !!interactive },
            { desc: "وجود وسم <footer> في نهاية الصفحة", passed: !!footer }
          ]
        };
      }
    }
  }
];
