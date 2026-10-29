// CodeMasr — CSS Foundations Track
window.COURSE_CSS = {
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
      title: 'Colors & Typography',
      duration: '15 min',
      eyebrow: 'CSS 01 · STYLING BASICS',
      lead: 'Bring color, custom fonts, and clean alignment to your HTML elements.',
      goal: 'Write a CSS rule setting color and font-size on an h1 element.',
      sectionTitle: 'Selectors, Properties & Values',
      explanation: 'CSS rules consist of a selector followed by declaration blocks { property: value; }.',
      exampleCode: `<style>
  h1 { color: #6c5ce7; font-size: 28px; }
</style>
<h1>Modern Web Styling</h1>`,
      starterCode: `<style>
  h1 { color: #6c5ce7; font-size: 28px; }
</style>
<h1>Modern Web Styling</h1>`,
      solutionCode: `<style>
  h1 { color: #6c5ce7; font-size: 28px; }
</style>
<h1>Modern Web Styling</h1>`,
      challengePrompt: 'CSS Challenge: Apply color and font-size properties to an <h1> element inside a <style> tag.',
      validate: function(doc, raw) {
        return { passed: /color\s*:/i.test(raw), msgAr: 'تم تطبيق الألوان وتنسيقات CSS بنجاح!', msgEn: 'CSS properties verified!' };
      }
    }
  ]
};