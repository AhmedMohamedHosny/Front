// CodeMasr — Python Course Track
window.COURSE_PYTHON = {
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
      title: 'Python Syntax & Data Structures',
      duration: '15 min',
      eyebrow: 'PYTHON 01 · CLEAN SYNTAX',
      lead: 'Clean indentation, lists, dictionaries, and dynamic typing in real Python 3.',
      goal: 'Write a Python program with a list, loop, and formatted string output.',
      sectionTitle: 'Python 3 Execution',
      explanation: [
        'Python is an interpreted, high-level programming language emphasizing readability.',
        'Code blocks are defined strictly through whitespace indentation rather than curly braces.'
      ].join('<br>'),
      exampleCode: `languages = ["Python", "Java", "C++", "JavaScript"]
for lang in languages:
    print(f"Mastering: {lang}")`,
      starterCode: `frameworks = ["Django", "FastAPI", "Flask"]
for f in frameworks:
    print(f"Backend tool: {f}")`,
      solutionCode: `frameworks = ["Django", "FastAPI", "Flask"]
for f in frameworks:
    print(f"Backend tool: {f}")`,
      challengePrompt: 'Python Challenge: Define a list of items and iterate over them using a for loop with formatted print() statements.',
      validate: function(doc, rawCode) {
        if (!/\bfor\s+\w+\s+in\s+/.test(rawCode)) {
          return { passed: false, msgAr: 'استخدم حلقة تكرار for in في بايثون.', msgEn: 'Use a for in loop in Python.' };
        }
        return { passed: true, msgAr: 'عاش يا قدوة! كود بايثون متقن.', msgEn: 'Python code validated!' };
      }
    }
  ]
};