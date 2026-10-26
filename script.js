
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
          title: 'Meet HTML',
          duration: '15 min',
          eyebrow: 'LESSON 01 · YOUR FIRST STEP',
          lead: 'HTML gives a webpage its structure, like the concrete frame of a building. (بالمصري: الـ HTML هو الطوب والخرسانة اللي بنبني بيها هيكل أي موقع على الإنترنت).',
          goal: 'Understand what HTML does and create your first heading (<h1>) and paragraph (<p>).',
          sectionTitle: 'What is HTML?',
          explanation: 'HTML stands for HyperText Markup Language. It uses elements called tags (وسوم) to describe content to the browser. Every tag usually has an opening tag like <h1> and a closing tag like </h1>. بالمصري: أي عنوان رئيسي بنحطه جوه <h1> وأي فقرة كلام عادي بنحطها جوه <p>، ولازم نقفل التاج بعلامة السلاش / علشان المتصفح ميتلخبطش.',
          exampleCode: '<h1>Hello, world!</h1>\n<p>I am learning to code on CodeMasr.</p>',
          starterCode: '<!-- اكتب عنوان رئيسي h1 وفقرة p تحت هنا واضغط Run -->\n<h1>Hello, world!</h1>\n<p>أول سطر برمجي ليا في HTML!</p>',
          solutionCode: '<h1>Hello, world!</h1>\n<p>أول سطر برمجي ليا في HTML!</p>',
          challengePrompt: 'تحدي الدرس: اكتب عنوان رئيسي باستخدام <h1> وتحته فقرة نصية باستخدام <p> تحتوي على أي جملة ترحيبية، ثم اضغط Run & Check.',
          validate: function (doc, rawCode) {
            const h1 = doc.querySelector('h1');
            const p = doc.querySelector('p');
            if (!h1) {
              return {
                passed: false,
                msgAr: 'ناقص تكتب عنوان رئيسي باستخدام وسم <h1>...</h1>.',
                msgEn: 'Missing an <h1> heading element.',
                suggestedFix: '<h1>Hello, world!</h1>\n' + rawCode
              };
            }
            if (!h1.textContent.trim()) {
              return {
                passed: false,
                msgAr: 'وسم <h1> موجود بس فاضي! اكتب جواه أي عنوان.',
                msgEn: 'Your <h1> element is empty. Add some text inside it.',
                suggestedFix: rawCode.replace(/<h1>\s*<\/h1>/i, '<h1>أهلاً بك في عالم البرمجة</h1>')
              };
            }
            if (!p || !p.textContent.trim()) {
              return {
                passed: false,
                msgAr: 'ممتاز على العنوان! ناقص بس تضيف فقرة <p>...</p> جواها نص.',
                msgEn: 'Great heading! Now add a non-empty <p> paragraph element.',
                suggestedFix: rawCode + '\n<p>أنا بتعلم تطوير الويب خطوة بخطوة.</p>'
              };
            }
            return {
              passed: true,
              msgAr: 'عاش يا بطل! كتبت العنوان <h1> والفقرة <p> بشكل سليم 100%.',
              msgEn: 'Awesome job! Both <h1> and <p> are properly structured.'
            };
          }
        },
        {
          id: 'html-2',
          num: '02',
          title: 'Elements & tags',
          duration: '12 min',
          eyebrow: 'LESSON 02 · HIERARCHY & EMPHASIS',
          lead: 'Learn how to nest tags properly and emphasize key words with <strong>, <em>, and headings <h1> to <h3>.',
          goal: 'Create a main heading (<h1>), a subheading (<h2>), and a paragraph containing bold text (<strong>).',
          sectionTitle: 'Nesting & Hierarchy (التسلسل والتداخل)',
          explanation: 'Headings rank from <h1> (most important, one per page) down to <h6>. Inside paragraphs, you can wrap important words with <strong> for bold importance or <em> for italic emphasis. بالمصري: لما تفتح تاج جوه تاج، لازم تقفل اللي جوه الأول قبل ما تقفل اللي بره!',
          exampleCode: '<h1>دليل المبرمج المبتدئ</h1>\n<h2>الخطوة الأولى: الأساسيات</h2>\n<p>أهم قاعدة في البرمجة هي <strong>الممارسة اليومية</strong> والتجربة.</p>',
          starterCode: '<h1>دليل المبرمج</h1>\n<!-- ضيف عنوان فرعي h2 وفقرة p جواها كلمة مهمة بداخل strong -->\n',
          solutionCode: '<h1>دليل المبرمج</h1>\n<h2>أساسيات الويب</h2>\n<p>البرمجة تحتاج إلى <strong>تطبيق عملي</strong> مستمر.</p>',
          challengePrompt: 'تحدي الدرس:تأكد من وجود عنوان <h1>، وعنوان فرعي <h2>، وفقرة <p> تحتوي بداخلها على وسم <strong> لتأكيد كلمة مهمة.',
          validate: function (doc) {
            const h1 = doc.querySelector('h1');
            const h2 = doc.querySelector('h2');
            const strong = doc.querySelector('p strong, strong');
            if (!h1) return { passed: false, msgAr: 'تأكد من وجود العنوان الرئيسي <h1>.', msgEn: 'Missing <h1> tag.' };
            if (!h2) return { passed: false, msgAr: 'ناقص تضيف عنوان فرعي <h2> تحت العنوان الرئيسي.', msgEn: 'Add an <h2> subheading.' };
            if (!strong || !strong.textContent.trim()) return { passed: false, msgAr: 'ناقص تستخدم وسم <strong>...</strong> جوه الفقرة لتوضيح كلمة مهمة.', msgEn: 'Include a <strong> element with text inside your paragraph.' };
            return { passed: true, msgAr: 'الله ينور! تسلسل العناوين والتأكيد بـ <strong> مظبوط بالمللي.', msgEn: 'Perfect heading hierarchy and semantic strong tag!' };
          }
        },
        {
          id: 'html-3',
          num: '03',
          title: 'Links & images',
          duration: '18 min',
          eyebrow: 'LESSON 03 · CONNECTING THE WEB',
          lead: 'Turn static text into interactive links with <a> and display rich visuals using <img>.',
          goal: 'Add a working hyperlink (<a href="...">) and an accessible image (<img src="..." alt="...">).',
          sectionTitle: 'Attributes: href, src, and alt',
          explanation: 'Attributes provide extra info to tags. Links use <a href="URL">Text</a>. Images use <img src="URL" alt="Description"> and do not have a closing tag. بالمصري: خاصية alt في الصورة مهمة جداً علشان لو النت فصل أو لو شخص كفيف بيستخدم قارئ شاشة يعرف الصورة دي بتاعة إيه.',
          exampleCode: '<h2>موقعي المفضل</h2>\n<p>تصفح المشاريع على <a href="https://github.com" target="_blank">GitHub</a>.</p>\n<img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400" alt="شاشة كمبيوتر عليها كود برمجي" width="280">',
          starterCode: '<h2>معرض أعمالي</h2>\n<!-- 1. ضيف رابط <a> بخاصية href -->\n\n<!-- 2. ضيف صورة <img> بخاصية src و alt -->\n',
          solutionCode: '<h2>معرض أعمالي</h2>\n<p>زوروا صفحتي على <a href="https://github.com" target="_blank">GitHub</a></p>\n<img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400" alt="شاشة برمجة" width="260">',
          challengePrompt: 'تحدي الدرس: أضف رابطاً <a> يحتوي على خاصية href ونص، وصورة <img> تحتوي على خاصيتي src و alt غير فارغتين.',
          validate: function (doc) {
            const a = doc.querySelector('a[href]');
            const img = doc.querySelector('img[src]');
            if (!a || !a.getAttribute('href').trim() || !a.textContent.trim()) {
              return { passed: false, msgAr: 'لازم تضيف رابط <a href="https://..."> مع نص مكتوب جواه.', msgEn: 'Add an <a> element with a valid href attribute and text.' };
            }
            if (!img || !img.getAttribute('src').trim()) {
              return { passed: false, msgAr: 'لازم تضيف وسم صورة <img src="...">.', msgEn: 'Add an <img> tag with a src attribute.' };
            }
            if (!img.getAttribute('alt') || !img.getAttribute('alt').trim()) {
              return { passed: false, msgAr: 'الصورة موجودة بس نسيت خاصية alt="..." لوصف الصورة!', msgEn: 'Always include a non-empty alt attribute on your <img> tag.' };
            }
            return { passed: true, msgAr: 'ممتاز يا هندسة! الرابط والصورة بالـ alt شغالين تمام.', msgEn: 'Great! Your link and accessible image are both valid.' };
          }
        },
        {
          id: 'html-4',
          num: '04',
          title: 'Lists & forms',
          duration: '20 min',
          eyebrow: 'LESSON 04 · LISTS & USER INPUT',
          lead: 'Organize items with <ul> / <ol> lists and collect user data using interactive <form>, <input>, and <button> elements.',
          goal: 'Build an unordered list (<ul> with <li> items) and a <form> containing an <input> and a <button>.',
          sectionTitle: 'Lists & Interactive Forms',
          explanation: 'Use <ul> for bullet points and <ol> for numbered steps. Every item goes inside an <li> tag. For user input, wrap fields inside <form>, use <input type="text" placeholder="...">, and add a <button type="submit">. بالمصري: أي لستة لازم عناصرها تكون <li>، وأي فورم بيحتاج input عشان المستخدم يكتب فيه وزرار button عشان يبعت البيانات.',
          exampleCode: '<h3>مهاراتي البرمجية:</h3>\n<ul>\n  <li>HTML5</li>\n  <li>CSS3</li>\n</ul>\n<form>\n  <input type="text" placeholder="اكتب اسمك هنا..." required>\n  <button type="submit">إرسال</button>\n</form>',
          starterCode: '<h3>قائمة المهام:</h3>\n<ul>\n  <li>تعلم القوائم في HTML</li>\n  <li>بناء نموذج تفاعلي</li>\n</ul>\n\n<!-- أنشئ وسم <form> بداخله <input> و <button> -->\n',
          solutionCode: '<h3>قائمة المهام:</h3>\n<ul>\n  <li>تعلم القوائم في HTML</li>\n  <li>بناء نموذج تفاعلي</li>\n</ul>\n<form>\n  <input type="text" placeholder="أضف مهمة جديدة...">\n  <button type="submit">إضافة</button>\n</form>',
          challengePrompt: 'تحدي الدرس: أنشئ قائمة (<ul> أو <ol>) بها عنصران <li> على الأقل، ونموذج <form> بداخله حقل <input> وزر <button>.',
          validate: function (doc) {
            const lis = doc.querySelectorAll('ul li, ol li');
            const form = doc.querySelector('form');
            const input = doc.querySelector('form input, input');
            const btn = doc.querySelector('form button, button');
            if (lis.length < 2) return { passed: false, msgAr: 'أضف قائمة <ul> أو <ol> جواها عنصرين <li> على الأقل.', msgEn: 'Create a list with at least two <li> items.' };
            if (!form) return { passed: false, msgAr: 'لازم تضيف وسم <form>...</form> لاحتواء الحقول.', msgEn: 'Wrap your input and button inside a <form> element.' };
            if (!input) return { passed: false, msgAr: 'ناقص تضيف حقل إدخال <input> داخل الفورم.', msgEn: 'Add an <input> field inside your form.' };
            if (!btn) return { passed: false, msgAr: 'ناقص تضيف زرار <button> داخل الفورم.', msgEn: 'Add a <button> inside your form.' };
            return { passed: true, msgAr: 'برافو عليك! القائمة والفورم جاهزين لاستقبال بيانات المستخدم.', msgEn: 'Spot on! Your list and interactive form are complete.' };
          }
        },
        {
          id: 'html-5',
          num: '05',
          title: 'Tables & data',
          duration: '18 min',
          eyebrow: 'LESSON 05 · STRUCTURED DATA',
          lead: 'Display schedules, grades, and pricing cleanly using HTML <table>, <tr>, <th>, and <td> elements.',
          goal: 'Create a table with header cells (<th>) and data cells (<td>) organized in rows (<tr>).',
          sectionTitle: 'How HTML Tables Work',
          explanation: 'Every table starts with <table>. Inside it, each horizontal row is a <tr> (Table Row). Header cells use <th> (bold & centered automatically), while normal data cells use <td> (Table Data). بالمصري: الجدول بيتقسم صفوف <tr>، وجوه كل صف بنحط العواميد سواء عناوين <th> أو بيانات عادية <td>.',
          exampleCode: '<table border="1" cellpadding="8">\n  <tr>\n    <th>اللغة</th>\n    <th>الوظيفة</th>\n  </tr>\n  <tr>\n    <td>HTML</td>\n    <td>بناء هيكل الصفحة</td>\n  </tr>\n</table>',
          starterCode: '<table border="1" cellpadding="8">\n  <tr>\n    <th>الطالب</th>\n    <th>الدرجة</th>\n  </tr>\n  <!-- ضيف صف جديد <tr> جواه خليتين <td> هنا -->\n\n</table>',
          solutionCode: '<table border="1" cellpadding="8">\n  <tr>\n    <th>الطالب</th>\n    <th>الدرجة</th>\n  </tr>\n  <tr>\n    <td>أحمد حسني</td>\n    <td>100%</td>\n  </tr>\n</table>',
          challengePrompt: 'تحدي الدرس: أكمل الجدول بحيث يحتوي على صف ترويسة به خليتين <th>، وصف بيانات به خليتين <td> على الأقل.',
          validate: function (doc) {
            const table = doc.querySelector('table');
            const ths = doc.querySelectorAll('table th');
            const tds = doc.querySelectorAll('table td');
            if (!table) return { passed: false, msgAr: 'وسم <table> غير موجود.', msgEn: 'Missing <table> element.' };
            if (ths.length < 2) return { passed: false, msgAr: 'الجدول محتاج خليتين عنوان <th> على الأقل.', msgEn: 'Include at least two <th> header cells.' };
            if (tds.length < 2) return { passed: false, msgAr: 'ضيف صف <tr> جواه خليتين بيانات <td> على الأقل.', msgEn: 'Add a row with at least two <td> data cells.' };
            return { passed: true, msgAr: 'عظمة! الجدول متنسق ومترتب صح جداً.', msgEn: 'Excellent! Your HTML table is well structured.' };
          }
        },
        {
          id: 'html-6',
          num: '06',
          title: 'Semantic HTML5',
          duration: '20 min',
          eyebrow: 'LESSON 06 · MEANINGFUL STRUCTURE',
          lead: 'Replace generic divs with meaningful landmarks: <header>, <nav>, <main>, <section>, and <footer>.',
          goal: 'Structure a page using <header>, <main>, and <footer> semantic landmarks.',
          sectionTitle: 'Why Semantic HTML Matters',
          explanation: 'Semantic tags describe their purpose to search engines (SEO) and screen readers. Instead of using <div> everywhere, use <header> for the top banner, <nav> for navigation links, <main> for core content, and <footer> for copyright/bottom info.',
          exampleCode: '<header>\n  <h1>أكاديمية كود مصر</h1>\n  <nav><a href="#courses">الكورسات</a></nav>\n</header>\n<main>\n  <section id="courses">\n    <h2>مسار الفرونت إند</h2>\n    <p>تعلم بالتطبيق العملي.</p>\n  </section>\n</main>\n<footer>\n  <p>© 2026 جميع الحقوق محفوظة</p>\n</footer>',
          starterCode: '<!-- ابنِ هيكل دلالي يتكون من header و main و footer -->\n<header>\n  <h1>موقعي الشخصي</h1>\n</header>\n\n<!-- أضف <main> و <footer> بالأسفل -->\n',
          solutionCode: '<header>\n  <h1>موقعي الشخصي</h1>\n</header>\n<main>\n  <p>أهلاً بكم في مساحة العمل الخاصة بي.</p>\n</main>\n<footer>\n  <p>© 2026 CodeMasr</p>\n</footer>',
          challengePrompt: 'تحدي الدرس: أنشئ هيكل صفحة دلالي يضم <header> و <main> و <footer> بداخل كل منها محتوى نصي.',
          validate: function (doc) {
            const header = doc.querySelector('header');
            const main = doc.querySelector('main');
            const footer = doc.querySelector('footer');
            if (!header) return { passed: false, msgAr: 'ناقص وسم <header> في أول الصفحة.', msgEn: 'Missing <header> element.' };
            if (!main || !main.textContent.trim()) return { passed: false, msgAr: 'ناقص وسم <main> وبداخله المحتوى الأساسي.', msgEn: 'Add a <main> element with content inside.' };
            if (!footer || !footer.textContent.trim()) return { passed: false, msgAr: 'ناقص وسم <footer> في آخر الصفحة.', msgEn: 'Add a <footer> element at the bottom.' };
            return { passed: true, msgAr: 'احترافي! ده الهيكل القياسي اللي جوجل وأي متصفح بيحبه.', msgEn: 'Awesome semantic layout with header, main, and footer!' };
          }
        },
        {
          id: 'html-7',
          num: '07',
          title: 'Audio & video media',
          duration: '15 min',
          eyebrow: 'LESSON 07 · MULTIMEDIA',
          lead: 'Embed native video and audio players directly in the browser using <video> and <audio> with controls.',
          goal: 'Create a <video> or <audio> player with the controls attribute enabled.',
          sectionTitle: 'Native HTML5 Media Players',
          explanation: 'HTML5 lets you play media without external plugins. Always add the "controls" attribute to <video> or <audio> so the user can play, pause, and adjust volume! بالمصري: من غير كلمة controls الفيديو أو الصوت مش هيظهرله زرار تشغيل أصلاً.',
          exampleCode: '<h2>شرح الدرس بالفيديو</h2>\n<video width="320" controls>\n  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">\n  متصفحك لا يدعم الفيديو.\n</video>',
          starterCode: '<h2>مشغل الوسائط</h2>\n<!-- ضيف وسم video أو audio مع خاصية controls -->\n<video width="300" controls>\n  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">\n</video>',
          solutionCode: '<h2>مشغل الوسائط</h2>\n<video width="300" controls>\n  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">\n</video>',
          challengePrompt: 'تحدي الدرس: أضف عنصر <video controls> أو <audio controls> يحتوي على مصدر ملف صوتي أو مرئي.',
          validate: function (doc) {
            const media = doc.querySelector('video[controls], audio[controls]');
            if (!media) return { passed: false, msgAr: 'لازم تضيف <video controls> أو <audio controls> (تأكد من كتابة خاصية controls).', msgEn: 'Add a <video> or <audio> tag with the controls attribute.' };
            return { passed: true, msgAr: 'ممتاز! مشغل الوسائط شغال وجاهز للعرض.', msgEn: 'Great job embedding an HTML5 media player with controls!' };
          }
        },
        {
          id: 'html-8',
          num: '08',
          title: 'Build a mini page',
          duration: '25 min',
          eyebrow: 'LESSON 08 · HTML CAPSTONE',
          lead: 'Combine headings, paragraphs, lists, links, and buttons to build a complete personal profile mini page.',
          goal: 'Build a personal page with <header>, <h1>, <p>, a list <ul>, and a <button> or <a> link.',
          sectionTitle: 'Putting It All Together',
          explanation: 'Now you have all the foundational building blocks of HTML! By combining semantic containers, headings, lists, and interactive elements, you can build real-world pages ready to be styled with CSS.',
          exampleCode: '<header>\n  <h1>أحمد حسني</h1>\n  <p>مهندس برمجيات ومطور ويب</p>\n</header>\n<main>\n  <h2>المهارات</h2>\n  <ul>\n    <li>HTML5 & Semantic Web</li>\n    <li>Firebase & Cloud Systems</li>\n  </ul>\n  <button>تواصل معي الآن</button>\n</main>',
          starterCode: '<header>\n  <h1>صفحتي الشخصية</h1>\n  <p>مطور واجهات أمامية</p>\n</header>\n<main>\n  <h2>مهاراتي</h2>\n  <ul>\n    <li>HTML5</li>\n    <li>Problem Solving</li>\n  </ul>\n  <button>تواصل معي</button>\n</main>',
          solutionCode: '<header>\n  <h1>صفحتي الشخصية</h1>\n  <p>مطور واجهات أمامية</p>\n</header>\n<main>\n  <h2>مهاراتي</h2>\n  <ul>\n    <li>HTML5</li>\n    <li>Problem Solving</li>\n  </ul>\n  <button>تواصل معي</button>\n</main>',
          challengePrompt: 'تحدي التخرج من مسار HTML: ابنِ صفحة متكاملة تحتوي على <h1>، فقرة <p>، قائمة <ul> بها عنصران <li>، وزر <button> أو رابط <a>.',
          validate: function (doc) {
            const h1 = doc.querySelector('h1');
            const p = doc.querySelector('p');
            const lis = doc.querySelectorAll('ul li, ol li');
            const action = doc.querySelector('button, a');
            if (!h1 || !p) return { passed: false, msgAr: 'الصفحة محتاجة عنوان <h1> وفقرة تعريفية <p>.', msgEn: 'Include both an <h1> heading and a <p> paragraph.' };
            if (lis.length < 2) return { passed: false, msgAr: 'ضيف قائمة مهارات <ul> فيها عنصرين <li> على الأقل.', msgEn: 'Add a list with at least two <li> items.' };
            if (!action) return { passed: false, msgAr: 'ضيف زرار <button> أو رابط <a> للتواصل.', msgEn: 'Add a <button> or <a> link for call-to-action.' };
            return { passed: true, msgAr: 'ألف مبروك يا قدوة! قفلت مسار الـ HTML بنجاح وبنيت صفحة متكاملة!', msgEn: 'Congratulations! You completed the HTML Essentials track!' };
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
          <span>🎯</span> <span id="in-lesson-prompt">${lesson.challengePrompt}</span>
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

    // 1. Check if Python track
    if (course.id === 'python') {
      const pyDiag = analyzeCodeDiagnostics(rawCode, '', '', 'python');
      let pyOutput = '';
      const printMatches = rawCode.matchAll(/print\s*\(([^)]*)\)/gi);
      const vars = {};
      rawCode.split('\n').forEach((line) => {
        const assign = line.match(/^\s*([a-zA-Z_]\w*)\s*=\s*(.+)$/);
        if (assign) {
          const k = assign[1];
          const valExpr = assign[2].trim();
          if (/^['"].*['"]$/.test(valExpr)) {
            vars[k] = valExpr.slice(1, -1);
          } else if (/^\d+(\.\d+)?\s*\+\s*\d+(\.\d+)?$/.test(valExpr)) {
            const parts = valExpr.split('+');
            vars[k] = Number(parts[0]) + Number(parts[1]);
          } else if (!isNaN(Number(valExpr))) {
            vars[k] = Number(valExpr);
          } else if (valExpr.includes('+')) {
            const parts = valExpr.split('+').map(p => p.trim());
            const v1 = vars[parts[0]] !== undefined ? vars[parts[0]] : Number(parts[0]);
            const v2 = vars[parts[1]] !== undefined ? vars[parts[1]] : Number(parts[1]);
            vars[k] = v1 + v2;
          }
        }
      });

      for (const m of printMatches) {
        const args = m[1].split(',').map((a) => {
          const clean = a.trim();
          if (/^['"].*['"]$/.test(clean)) return clean.slice(1, -1);
          if (vars[clean] !== undefined) return vars[clean];
          return clean;
        });
        pyOutput += args.join(' ') + '\n';
      }

      iframe.srcdoc = `<body style="font-family:'DM Mono',monospace;background:#121322;color:#8ee4b7;padding:16px;margin:0;"><div style="color:#85899e;font-size:11px;margin-bottom:8px;">python3 main.py</div><pre style="margin:0;white-space:pre-wrap;">${escapeHtml(pyOutput || '(No output printed yet)')}</pre></body>`;

      if (pyDiag.length > 0) {
        renderLessonDiagnosticError(feedbackBox, pyDiag[0], textarea, course, lesson);
        return;
      }

      const check = lesson.validate(null, rawCode);
      renderLessonValidationResult(feedbackBox, check, textarea, course, lesson);
      return;
    }

    // 2. HTML / CSS / JS Execution in Sandbox
    iframe.srcdoc = `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>body{font-family:'Manrope',system-ui,sans-serif;padding:16px;margin:0;color:#171a2b;line-height:1.6}</style></head><body>${rawCode}</body></html>`;

    // 3. Run Smart Diagnostics (Syntax & Tag Check)
    const issues = analyzeCodeDiagnostics(rawCode, '', '', 'web');
    const errorsOnly = issues.filter(i => i.severity === 'error');
    if (errorsOnly.length > 0) {
      renderLessonDiagnosticError(feedbackBox, errorsOnly[0], textarea, course, lesson);
      return;
    }

    // 4. Validate against Lesson Challenge Goal
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

          monacoEditorInstance = window.monaco.editor.create(document.getElementById('monaco-editor'), {
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

  function getMonacoLang(fileKey) {
    if (fileKey === 'css') return 'css';
    if (fileKey === 'js') return 'javascript';
    return 'html';
  }

  function updateCursorStatusFromTextarea(ta) {
    const posEl = document.getElementById('cursor-position');
    if (!posEl || !ta) return;
    const textUpToCursor = ta.value.substring(0, ta.selectionStart || 0);
    const lines = textUpToCursor.split('\n');
    const ln = lines.length;
    const col = lines[lines.length - 1].length + 1;
    posEl.textContent = `Ln ${ln}, Col ${col}`;
  }

  function switchPlaygroundFileTab(fileKey) {
    state.activePlaygroundFile = fileKey;
    document.querySelectorAll('.file-tab[data-file]').forEach((tab) => {
      tab.classList.toggle('active', tab.getAttribute('data-file') === fileKey);
    });

    const langLabel = document.getElementById('editor-language');
    if (langLabel) {
      langLabel.textContent = fileKey === 'js' ? 'JAVASCRIPT' : fileKey.toUpperCase();
    }

    const content = state.playgroundFiles[fileKey] || '';
    if (usingMonaco && monacoEditorInstance && window.monaco) {
      const model = monacoEditorInstance.getModel();
      if (model) {
        window.monaco.editor.setModelLanguage(model, getMonacoLang(fileKey));
      }
      monacoEditorInstance.setValue(content);
    } else {
      const fallbackEl = document.getElementById('fallback-editor');
      if (fallbackEl) fallbackEl.value = content;
    }
  }

  function buildFullPlaygroundDocument() {
    const htmlPart = state.playgroundFiles.html || '';
    const cssPart = state.playgroundFiles.css || '';
    const jsPart = state.playgroundFiles.js || '';

    // Bridge script captures console.log/warn/error and window.onerror inside the iframe
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
          window.onerror = function(msg, url, lineNo, columnNo) {
            send('runtime-error', [msg + (lineNo ? ' (Line ' + lineNo + ')' : '')]);
            return false;
          };
        })();
      <\/script>
    `;

    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>${cssPart}</style>
  ${bridgeScript}
</head>
<body>
  ${htmlPart}
  <script>
    try {
      ${jsPart}
    } catch (err) {
      parent.postMessage({ source: 'codemasr-preview', level: 'runtime-error', message: err.toString() }, '*');
    }
  <\/script>
</body>
</html>`;
  }

  function runPlaygroundCode(incrementStats) {
    const frame = document.getElementById('preview-frame');
    if (!frame) return;

    clearConsoleOutput();

    if (incrementStats) {
      state.runCount++;
      saveState();
      refreshAllUI();
      showToast('▶ Code executed in live preview!');
    }

    // 1. Run static diagnostics on HTML, CSS, JS
    const issues = analyzeCodeDiagnostics(
      state.playgroundFiles.html,
      state.playgroundFiles.css,
      state.playgroundFiles.js,
      'web'
    );

    issues.forEach((diag) => {
      appendDiagnosticToConsole(diag);
    });

    // 2. Render in iframe
    frame.srcdoc = buildFullPlaygroundDocument();
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

  function formatCurrentPlaygroundCode() {
    const key = state.activePlaygroundFile;
    let code = state.playgroundFiles[key] || '';
    if (key === 'html') {
      code = code.replace(/>\s*</g, '>\n<');
    } else if (key === 'css' || key === 'js') {
      code = code.replace(/\{\s*/g, ' {\n  ').replace(/;\s*/g, ';\n  ').replace(/\s*\}/g, '\n}\n');
    }
    state.playgroundFiles[key] = code.trim();
    switchPlaygroundFileTab(key);
    saveState();
    showToast('⤢ Code formatted cleanly!');
  }

  /* ==========================================================================
   * 13. EVENT BINDINGS FOR EVERY SINGLE ELEMENT IN INDEX.HTML
   * ========================================================================== */
  function bindAllEvents() {
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
