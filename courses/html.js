// CodeMasr — HTML Essentials Course Track
window.COURSE_HTML = {
  id: 'html',
  title: 'HTML Essentials',
  subtitle: 'Structure the web',
  tag: 'HTML ESSENTIALS',
  tagClass: 'tag-html',
  badgeText: '20',
  badgeClass: 'html-badge',
  lessons: [
    {
      id: 'html-1',
      num: '01',
      title: 'HTML Document Structure (Doctype, html, head, body)',
      duration: '15 min',
      eyebrow: 'HTML 01 · STANDARD ARCHITECTURE',
      lead: 'Every web page relies on an essential foundation that separates machine metadata from renderable content.',
      goal: 'Understand <!DOCTYPE html>, html, head, title, meta charset, and body landmarks.',
      sectionTitle: 'Deep Dive: Anatomy of a Web Document',
      explanation: [
        'HTML stands for HyperText Markup Language. It describes the structure and semantic meaning of every element on the web.',
        '🔹 &lt;!DOCTYPE html&gt; : Declares the document as modern HTML5, preventing the browser from entering buggy Quirks Mode.',
        '🔹 &lt;html lang="en"&gt; : The root element wrapping the entire page.',
        '🔹 &lt;head&gt; : Contains machine-readable metadata (title, encoding, stylesheets, viewport) that is NOT visible on the page.',
        '🔹 &lt;body&gt; : Contains all visual and interactive elements (headings, text, buttons, images). Only one body element is permitted per document.',
        '🔹 &lt;title&gt; : Sets the browser tab title and search engine headline.',
        '🔹 &lt;meta charset="UTF-8"&gt; : Ensures universal character encoding, preventing Arabic or foreign text from corrupting into symbols.',
        '💡 Indentation rule: Always indent nested child elements by 2 spaces for readable, professional code.'
      ].join('<br>'),
      exampleCode: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My First Page</title>
  </head>
  <body>
    <h1>Welcome to CodeMasr</h1>
    <p>This text renders inside the visible body element.</p>
  </body>
</html>`,
      starterCode: `<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Add meta charset and title here -->
  </head>
  <body>
    <!-- Add an h1 heading and a p paragraph here -->
  </body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My First Page</title>
  </head>
  <body>
    <h1>Welcome to Web Development</h1>
    <p>Document structure verified successfully.</p>
  </body>
</html>`,
      challengePrompt: 'Lesson Challenge: Build a standard HTML5 document starting with <!DOCTYPE html>, <html>, a <head> containing meta charset and a <title>, and a <body> containing an <h1> and <p>.',
      validate: function(doc) {
        const title = doc.querySelector('title');
        if (!title || !title.textContent.trim()) return { passed: false, msgAr: 'أضف وسم title داخل head واكتب فيه نصاً.', msgEn: 'Add a <title> element with text inside <head>.' };
        if (!doc.querySelector('meta[charset]')) return { passed: false, msgAr: 'أضف meta بخاصية charset داخل head.', msgEn: 'Add a <meta charset="UTF-8"> inside <head>.' };
        const h1 = doc.querySelector('h1');
        if (!h1 || !h1.textContent.trim()) return { passed: false, msgAr: 'أضف عنواناً رئيسياً h1 يحتوي على نص.', msgEn: 'Include an <h1> heading with text.' };
        const p = doc.querySelector('p');
        if (!p || !p.textContent.trim()) return { passed: false, msgAr: 'أضف فقرة p تحتوي على نص.', msgEn: 'Include a <p> paragraph with text.' };
        return { passed: true, msgAr: 'أحسنت! تم بناء الهيكل المعماري للمستند بدقة.', msgEn: 'Document structure verified successfully!' };
      }
    },
    {
      id: 'html-2',
      num: '02',
      title: 'Headings Hierarchy (h1 through h6 & SEO Standards)',
      duration: '15 min',
      eyebrow: 'HTML 02 · CONTENT TREE',
      lead: 'Headings represent the structural outline of your document indexed by search engines and screen readers, not merely font sizing tools.',
      goal: 'Structure headings logically with a single h1 and nested subheadings.',
      sectionTitle: 'Heading Hierarchy & Accessibility',
      explanation: [
        'HTML provides six levels of headings from <h1> (highest significance) down to <h6>.',
        '• &lt;h1&gt; : The central title of the entire document. Strictly use ONE h1 per page for optimal SEO indexing.',
        '• &lt;h2&gt; : Major sectional topics.',
        '• &lt;h3&gt; to &lt;h6&gt; : Granular subsections under each major heading.',
        '⚠️ Never skip heading levels (e.g. from h1 directly to h4). If you need smaller text size, use CSS font-size, not a lower heading tag.'
      ].join('<br>'),
      exampleCode: `<h1>Software Engineering Guide</h1>
<h2>Phase 1: Frontend Architecture</h2>
<h3>Lesson 1: Semantic Markup</h3>
<h2>Phase 2: Backend Cloud Systems</h2>
<h3>Lesson 1: Database Architecture</h3>`,
      starterCode: `<!-- Create one h1, at least two h2, and two h3 subsections -->
<h1>CodeMasr Academy</h1>
<h2>Web Track</h2>
<h3>HTML Foundations</h3>
<h2>Cloud Track</h2>
<h3>Database Systems</h3>`,
      solutionCode: `<h1>CodeMasr Academy</h1>
<h2>Web Track</h2>
<h3>HTML Foundations</h3>
<h2>Cloud Track</h2>
<h3>Database Systems</h3>`,
      challengePrompt: 'Lesson Challenge: Create exactly one <h1>, at least two <h2> subheadings, and two <h3> subsections without skipping levels.',
      validate: function(doc) {
        if (doc.querySelectorAll('h1').length !== 1) return { passed: false, msgAr: 'يجب أن تحتوي الصفحة على h1 واحد فقط.', msgEn: 'Exactly one <h1> heading is required.' };
        if (doc.querySelectorAll('h2').length < 2) return { passed: false, msgAr: 'أضف عنوانين h2 على الأقل.', msgEn: 'Add at least two <h2> subheadings.' };
        if (doc.querySelectorAll('h3').length < 2) return { passed: false, msgAr: 'أضف عنوانين h3 على الأقل.', msgEn: 'Add at least two <h3> subheadings.' };
        return { passed: true, msgAr: 'تسلسل هرمي ممتاز ومطابق لمعايير W3C!', msgEn: 'Perfect semantic hierarchy!' };
      }
    }
  ]
};