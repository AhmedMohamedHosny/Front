// CodeMasr — C++ Course Track
window.COURSE_CPP = {
  id: 'cpp',
  title: 'C++ Systems Programming',
  subtitle: 'Pointers, Memory & GCC',
  tag: 'C++ SYSTEMS',
  tagClass: 'tag-html',
  badgeText: '⚙️',
  badgeClass: 'html-badge',
  lessons: [
    {
      id: 'cpp-1',
      num: '01',
      title: 'C++ Fundamentals & Pointers',
      duration: '20 min',
      eyebrow: 'C++ 01 · COMPILATION & POINTERS',
      lead: 'Understand memory addresses, pointer dereferencing, and GCC compilation.',
      goal: 'Write a C++ program using pointers to inspect and modify memory values.',
      sectionTitle: 'Memory & Pointer Mechanics',
      explanation: [
        'A pointer stores the memory address of another variable using the address-of operator <code>&</code>.',
        'Dereference a pointer using <code>*ptr</code> to read or write the value at that address.',
        'C++ compiles directly to machine code using GCC (g++ compiler).'
      ].join('<br>'),
      exampleCode: `#include <iostream>
using namespace std;

int main() {
    int score = 95;
    int* ptr = &score;

    cout << "Value: " << score << endl;
    cout << "Address: " << ptr << endl;
    cout << "Dereferenced: " << *ptr << endl;

    *ptr = 100;
    cout << "Updated Score: " << score << endl;
    return 0;
}`,
      starterCode: `#include <iostream>
using namespace std;

int main() {
    int val = 42;
    int* p = &val;
    cout << "Initial: " << *p << endl;
    *p = 99;
    cout << "Modified: " << val << endl;
    return 0;
}`,
      solutionCode: `#include <iostream>
using namespace std;

int main() {
    int val = 42;
    int* p = &val;
    cout << "Initial: " << *p << endl;
    *p = 99;
    cout << "Modified: " << val << endl;
    return 0;
}`,
      challengePrompt: 'C++ Challenge: Declare an integer variable and a pointer pointing to it, then update its value via pointer dereference.',
      validate: function(doc, rawCode) {
        if (!/\bint\s*\*\s*\w+\s*=\s*&\w+/.test(rawCode)) {
          return { passed: false, msgAr: 'عرف مؤشر (pointer) يشير إلى عنوان المتغير باستخدام &.', msgEn: 'Declare a pointer assigned to the variable address (&).' };
        }
        return { passed: true, msgAr: 'ممتاز! كود C++ سليم وتم التعامل مع الذاكرة بنجاح.', msgEn: 'C++ memory pointer mechanics verified!' };
      }
    }
  ]
};