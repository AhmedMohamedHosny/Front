// CodeMasr — JavaScript Basics Track
window.COURSE_JS = {
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
      title: 'Variables, Events & DOM',
      duration: '15 min',
      eyebrow: 'JS 01 · INTERACTIVITY',
      lead: 'Control HTML elements in real time through event listeners and DOM manipulation.',
      goal: 'Declare a variable and attach a click event listener to update text on the page.',
      sectionTitle: 'DOM Manipulation Mechanics',
      explanation: 'JavaScript interacts with the document object model via querySelector and addEventListener.',
      exampleCode: `<h2 id="msg">Initial Message</h2>
<button id="btn">Click Me</button>
<script>
  document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("msg").textContent = "Updated with JS!";
  });
</script>`,
      starterCode: `<h2 id="msg">Initial Message</h2>
<button id="btn">Click Me</button>
<script>
  document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("msg").textContent = "Updated with JS!";
  });
</script>`,
      solutionCode: `<h2 id="msg">Initial Message</h2>
<button id="btn">Click Me</button>
<script>
  document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("msg").textContent = "Updated with JS!";
  });
</script>`,
      challengePrompt: 'JS Challenge: Add an event listener to update an element text content dynamically on click.',
      validate: function(doc, raw) {
        return { passed: /addEventListener/i.test(raw), msgAr: 'تفاعل الجافاسكريبت يعمل بنجاح!', msgEn: 'Event listener verified!' };
      }
    }
  ]
};