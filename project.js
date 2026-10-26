// Real-World Beginner Projects Data for HTML
const HTML_PROJECTS = [
  {
    id: "proj-resume",
    title: "سيرة ذاتية احترافية لمطور ويب",
    titleEn: "Professional Web Developer Resume",
    tag: "مشروع بورتفوليو",
    level: "مبتدئ",
    description: "صفحة متكاملة تعرض خبراتك، مهاراتك التقنية، دراستك الجامعية، روابط حساباتك، ونموذج سريع للتواصل.",
    starterCode: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>السيرة الذاتية - م/ أحمد حسني</title>
</head>
<body>
  <header>
    <h1>المهندس أحمد حسني</h1>
    <p>مهندس برمجيات ومسؤول بنية تحتية أكاديمية</p>
    <p>القاهرة، مصر | <a href="mailto:contact@example.com">contact@example.com</a></p>
  </header>

  <hr>

  <main>
    <section>
      <h2>النبذة المهنية</h2>
      <p>متخصص في هندسة البرمجيات والأنظمة الأكاديمية وحلول الويب المتطورة.</p>
    </section>

    <section>
      <h2>المهارات التقنية</h2>
      <ul>
        <li>تطوير واجهات الويب (HTML5, Semantic Markup)</li>
        <li>قواعد البيانات السحابية (Firebase Firestore)</li>
        <li>أنظمة المصادقة والتحكم بالوصول</li>
      </ul>
    </section>

    <section>
      <h2>المؤهلات الدراسية</h2>
      <table border="1">
        <thead>
          <tr>
            <th>الدرجة العلمية</th>
            <th>الجهة / الجامعة</th>
            <th>سنة التخرج</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>بكالوريوس هندسة الحاسبات</td>
            <td>كلية الهندسة</td>
            <td>2024</td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>

  <hr>

  <footer>
    <p>&copy; 2026 جميع الحقوق محفوظة.</p>
  </footer>
</body>
</html>`
  },
  {
    id: "proj-menu",
    title: "منيو مطعم مصري أصيل 'كشري وزيزو'",
    titleEn: "Traditional Egyptian Restaurant Menu",
    tag: "مشروع تجاري",
    level: "مبتدئ",
    description: "منيو تفاعلي يقسم الأكلات (كشري، طواجن، حلويات)، الأسعار في جداول منظمة، صور الأطباق، وقسم لطلب الدليفري.",
    starterCode: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>مطعم كشري وزيزو - المنيو الرسمي</title>
</head>
<body>
  <header>
    <h1>مطعم كشري وزيزو 🍲</h1>
    <p>أشهى الأكلات الشعبية والمصرية بأعلى جودة منذ 1995</p>
    <nav>
      <a href="#koshary">الكشري</a> | 
      <a href="#sandwiches">السندوتشات</a> | 
      <a href="#order">اطلب دليفري</a>
    </nav>
  </header>

  <hr>

  <main>
    <section id="koshary">
      <h2>أطباق الكشري المميزة</h2>
      <table border="1">
        <thead>
          <tr>
            <th>الحجم</th>
            <th>المكونات</th>
            <th>السعر</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>طبق سوبر وزيزو</td>
            <td>أرز، عدس، مكرونة، حمص، بصل مقرمش + تقلية مضاعفة</td>
            <td>50 ج.م</td>
          </tr>
          <tr>
            <td>طبق جامبو فويل</td>
            <td>حجم عائلي يشمل كل الإضافات وصوص شطة زيت</td>
            <td>75 ج.م</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section id="order">
      <h2>طلب توصيل سريع (Delivery)</h2>
      <form>
        <div>
          <label for="cust-name">الاسم الكريم:</label>
          <input type="text" id="cust-name" required>
        </div>
        <div>
          <label for="cust-phone">رقم الهاتف:</label>
          <input type="tel" id="cust-phone" required>
        </div>
        <div>
          <label for="dish-type">اختر الطلب:</label>
          <select id="dish-type">
            <option>طبق سوبر وزيزو</option>
            <option>طبق جامبو فويل</option>
          </select>
        </div>
        <button type="submit">تأكيد الطلب الآن</button>
      </form>
    </section>
  </main>

  <footer>
    <p>خدمة التوصيل متاحة 24 ساعة | الخط الساخن: 19000</p>
  </footer>
</body>
</html>`
  },
  {
    id: "proj-article",
    title: "صفحة مقال تقني ومعماري شامل",
    titleEn: "Tech Documentation & Architecture Article",
    tag: "مشروع محتوى",
    level: "متوسط",
    description: "صفحة مقال تقني منسقة بعناصر دلالية ومراجع واقتباسات وأكواد برمجية ومسرد مصطلحات.",
    starterCode: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>معمارية تطبيقات الويب الحديثة</title>
</head>
<body>
  <header>
    <h1>بوابة هندسة البرمجيات</h1>
  </header>

  <main>
    <article>
      <header>
        <h2>مستقبل واجهات الويب التقنية في 2026</h2>
        <p>نُشر بواسطة: <strong>م/ أحمد حسني</strong> | بتاريخ: <em>أكتوبر 2026</em></p>
      </header>

      <section>
        <h3>المقدمة</h3>
        <p>شهدت صناعة البرمجيات تحولاً كبيراً في كفاءة المعالجة داخل المتصفحات.</p>
        <blockquote>
          "البساطة في بناء الواجهة هي قمة التطور الهندسي."
        </blockquote>
      </section>

      <section>
        <h3>أمر التشغيل المعتمد</h3>
        <pre><code>npm run build && firebase deploy</code></pre>
      </section>
    </article>
  </main>

  <footer>
    <p>&copy; 2026 جميع الحقوق محفوظة لشبكة CODEMASTERY.</p>
  </footer>
</body>
</html>`
  },
  {
    id: "proj-form",
    title: "استمارة تسجيل طلاب الجامعة والأنشطة",
    titleEn: "Student University Registration Form",
    tag: "مشروع تفاعلي",
    level: "متوسط",
    description: "استمارة كاملة تحتوي على كل أنواع الحقول: الاسم، الرقم القومي، الفرقة الدراسية، رفع الشهادة، والموافقة على الشروط.",
    starterCode: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>استمارة تسجيل الطلاب الجدد</title>
</head>
<body>
  <main>
    <h1>استمارة قيد الطلاب للعام الجامعي 2026 / 2027</h1>
    <form>
      <fieldset>
        <legend>البيانات الشخصية الأساسية</legend>
        <p>
          <label for="st-name">اسم الطالب رباعي:</label>
          <input type="text" id="st-name" name="studentName" required>
        </p>
        <p>
          <label for="st-id">الرقم القومي (14 رقم):</label>
          <input type="text" id="st-id" name="nationalId" maxlength="14" required>
        </p>
        <p>
          <label for="st-email">البريد الجامعي الرسمي:</label>
          <input type="email" id="st-email" name="academicEmail" required>
        </p>
      </fieldset>

      <fieldset>
        <legend>البيانات الأكاديمية</legend>
        <p>القسم الدراسي:</p>
        <label><input type="radio" name="dept" value="cs" checked> علوم الحاسب</label>
        <label><input type="radio" name="dept" value="is"> نظم المعلومات</label>
        <label><input type="radio" name="dept" value="ai"> الذكاء الاصطناعي</label>
      </fieldset>

      <p>
        <label><input type="checkbox" required> أتعهد بصحة جميع البيانات المدخلة أعلاه.</label>
      </p>

      <button type="submit">إتمام التسجيل وحفظ الاستمارة</button>
    </form>
  </main>
</body>
</html>`
  },
  {
    id: "proj-landing",
    title: "صفحة هبوط تسويقية لمنتج برمجي SaaS",
    titleEn: "SaaS Software Product Landing Page",
    tag: "صفحة هبوط",
    level: "متوسط",
    description: "صفحة تسويقية تضم Hero Section وشريط مميزات وجدول مقارنة أسعار الباقات وقسم الأسئلة الشائعة.",
    starterCode: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CloudSync | أسرع نظام مزامنة سحابية</title>
</head>
<body>
  <header>
    <h1>CloudSync ⚡</h1>
    <nav>
      <a href="#features">المميزات</a> |
      <a href="#pricing">الأسعار</a> |
      <a href="#signup">ابدأ مجاناً</a>
    </nav>
  </header>

  <main>
    <section>
      <h2>تحكم في بياناتك وسجلات طلابك بدون إنترنت وفي لحظة</h2>
      <p>نظام ذكي متوافق مع PWA يعمل أوفلاين ويضمن أمان وسرية البيانات بأعلى المعايير الهندسية.</p>
      <a href="#signup"><button type="button">ابدأ التجربة المجانية الآن</button></a>
    </section>

    <section id="features">
      <h2>أهم المميزات الهندسية</h2>
      <ul>
        <li>دعم كامل للعمل بدون اتصال (Offline PIN Verification)</li>
        <li>تشفير فائق للبيانات على السحابة</li>
        <li>تصدير فوري لكشوف الغياب والدرجات إلى ملفات Excel</li>
      </ul>
    </section>

    <section id="pricing">
      <h2>خطط الأسعار</h2>
      <table border="1">
        <thead>
          <tr>
            <th>الخطة</th>
            <th>السعر</th>
            <th>المميزات</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>الأساسية للأكاديميين</td>
            <td>مجاناً</td>
            <td>حتى 500 طالب + دعم أوفلاين</td>
          </tr>
          <tr>
            <td>الجامعات والمؤسسات</td>
            <td>تواصل معنا</td>
            <td>طلاب غير محدودين + خوادم خاصة</td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>

  <footer>
    <p>&copy; 2026 CloudSync Inc. صُممت بحب للمطورين والمهندسين.</p>
  </footer>
</body>
</html>`
  }
];
