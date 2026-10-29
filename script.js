/**
 * ============================================================================
 * CodeMasr — Full-Stack Interactive IDE & Learning Platform
 * Real Cloud Compiler (Java JVM, C++ GCC, Python, C#, SQL) via Container Runner
 * Smart Error Debugger (Arabic + English) | Auto-Complete (IntelliSense ON/OFF)
 * Engineered & Developed by Eng. Ahmed M Hosny
 * ============================================================================
 */

(function () {
  'use strict';

  /* ==========================================================================
   * 1. FIREBASE CONFIGURATION & CLOUD PERSISTENCE
   * ========================================================================== */
  const DEFAULT_FIREBASE_CONFIG = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };

  const STORAGE_KEYS = {
    STATE: 'codemasr_platform_state_v3',
    FIREBASE_CFG: 'codemasr_firebase_config_v3',
    THEME: 'codemasr_theme_v3',
    STUDIO_THEME: 'codemasr_studio_theme_v3',
    AUTOCOMPLETE: 'codemasr_autocomplete_v3',
    HINT_DISMISSED: 'codemasr_hint_dismissed_v3'
  };

  /* ==========================================================================
   * 2. COURSES LOADER (Loads from window.COURSE_* or provides fallback)
   * ========================================================================== */
  const COURSES = {};
  if (window.COURSE_HTML) COURSES.html = window.COURSE_HTML;
  if (window.COURSE_JAVA) COURSES.java = window.COURSE_JAVA;
  if (window.COURSE_CPP) COURSES.cpp = window.COURSE_CPP;
  if (window.COURSE_PYTHON) COURSES.python = window.COURSE_PYTHON;
  if (window.COURSE_CSS) COURSES.css = window.COURSE_CSS;
  if (window.COURSE_JS) COURSES.js = window.COURSE_JS;

  // Fallback if courses folder scripts are not yet included
  if (!COURSES.html) {
    COURSES.html = {
      id: 'html', title: 'HTML Essentials', subtitle: 'Structure the web',
      tag: 'HTML ESSENTIALS', tagClass: 'tag-html', badgeText: '20', badgeClass: 'html-badge',
      lessons: [
        {
          id: 'html-1', num: '01', title: 'HTML Document Structure', duration: '15 min',
          eyebrow: 'HTML 01 · STANDARD ARCHITECTURE',
          lead: 'Every web page relies on an essential foundation that separates machine metadata from renderable content.',
          goal: 'Understand <!DOCTYPE html>, html, head, title, meta charset, and body.',
          sectionTitle: 'Anatomy of an HTML Document',
          explanation: 'HTML defines the structure of web pages. The <!DOCTYPE html> declaration ensures standard HTML5 parsing. <head> holds metadata (invisible), while <body> holds all visual content.',
          exampleCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Document</title>\n</head>\n<body>\n  <h1>Hello, world!</h1>\n</body>\n</html>',
          starterCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Document</title>\n</head>\n<body>\n  <h1>Hello, world!</h1>\n</body>\n</html>',
          solutionCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Document</title>\n</head>\n<body>\n  <h1>Hello, world!</h1>\n</body>\n</html>',
          challengePrompt: 'Challenge: Ensure a valid HTML5 structure with <!DOCTYPE html>, <html>, <head>, and <body>.',
          validate: function(doc) {
            return { passed: Boolean(doc.querySelector('h1')), msgAr: 'تم بناء الهيكل بنجاح!', msgEn: 'Structure verified!' };
          }
        }
      ]
    };
  }

  /* ==========================================================================
   * 3. APPLICATION STATE
   * ========================================================================== */
  const DEFAULT_PLAYGROUND_FILES = {
    html: `<!DOCTYPE html>
<html>
<body>
  <div class="welcome-box">
    <h1>Hello, CodeMasr! 👋</h1>
    <p>Edit HTML, CSS, or JS, or click (+) to add Java, C++, Python, or SQL files.</p>
    <button id="magic-btn">Click for Magic ✦</button>
    <p id="output-text"></p>
  </div>
</body>
</html>`,
    css: `.welcome-box {
  font-family: system-ui, sans-serif;
  padding: 24px;
  border-radius: 16px;
  background: #f8f7ff;
  border: 2px solid #e3ddff;
  text-align: center;
  max-width: 440px;
  margin: 20px auto;
}
h1 { color: #6c5ce7; margin-top: 0; }
button {
  background: #6c5ce7; color: #fff;
  border: none; padding: 10px 18px;
  border-radius: 10px; font-weight: 700;
  cursor: pointer;
}`,
    js: `const btn = document.getElementById("magic-btn");
const out = document.getElementById("output-text");
if (btn) {
  btn.addEventListener("click", () => {
    out.textContent = "🚀 Real Full-Stack IDE Engine Active!";
    console.log("Magic button clicked!");
  });
}`
  };

  const state = {
    activeView: 'learn',
    activeCourseId: 'html',
    activeLessonIndex: 0,
    activePlaygroundFile: 'html',
    completedLessons: ['html-1'],
    projectsStarted: [],
    runCount: 0,
    streakDays: 1,
    autoCompleteEnabled: localStorage.getItem(STORAGE_KEYS.AUTOCOMPLETE) !== 'off',
    userProfile: {
      name: 'Guest Developer',
      role: 'Beginner · Level 1',
      uid: null,
      email: null,
      isCloudSynced: false
    },
    playgroundFiles: Object.assign({}, DEFAULT_PLAYGROUND_FILES),
    lessonDrafts: {},
    darkMode: false
  };

  let monacoEditorInstance = null;
  let usingMonaco = false;
  let currentStudioTheme = localStorage.getItem(STORAGE_KEYS.STUDIO_THEME) || 'cyberpunk-neon';

  /* ==========================================================================
   * 4. FILE EXTENSIONS & REAL COMPILER ENGINE CONFIGURATION
   * ========================================================================== */
  function getFileExtensionInfo(rawKey) {
    const key = String(rawKey || 'html').trim();
    const lower = key.toLowerCase();

    // 1. HTML
    if (lower === 'html' || lower === 'index.html' || lower.endsWith('.html') || lower.endsWith('.htm')) {
      return {
        lang: 'html', label: 'HTML5', dot: 'html-dot', isCompiler: false,
        displayName: lower === 'html' ? 'index.html' : key,
        starter: `<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="UTF-8">\n  <title>${key}</title>\n</head>\n<body>\n  <h1>Page: ${key}</h1>\n  <a href="index.html">Back Home</a>\n</body>\n</html>`
      };
    }
    // 2. CSS
    if (lower === 'css' || lower === 'style.css' || lower.endsWith('.css')) {
      return {
        lang: 'css', label: 'CSS3', dot: 'css-dot', isCompiler: false,
        displayName: lower === 'css' ? 'style.css' : key,
        starter: `/* Stylesheet: ${key} */\nbody {\n  font-family: system-ui, sans-serif;\n}\n`
      };
    }
    // 3. JavaScript
    if (lower === 'js' || lower === 'script.js' || lower.endsWith('.js')) {
      return {
        lang: 'javascript', label: 'JAVASCRIPT', dot: 'js-dot', isCompiler: false,
        displayName: lower === 'js' ? 'script.js' : key,
        starter: `// JavaScript: ${key}\nconsole.log("Hello from ${key}!");\n`
      };
    }
    // 4. Java (Real OpenJDK execution via Piston)
    if (lower.endsWith('.java')) {
      return {
        lang: 'java', label: 'JAVA ☕ (OpenJDK JVM)', dot: 'html-dot', isCompiler: true,
        displayName: key,
        starter: `// Real Java OpenJDK Compiler & JVM Execution
class Employee {
    String name;
    double salary;

    Employee(String name, double salary) {
        System.out.println("Employee constructor");
        this.name = name;
        this.salary = salary;
    }
}

class Manager extends Employee {
    Manager(String name, double salary) {
        super(name, salary);
        System.out.println("Manager constructor");
    }

    double getTotalSalary() {
        return salary + 1500.0;
    }
}

public class Main {
    public static void main(String[] args) {
        Manager m = new Manager("Hana", 9000.0);
        System.out.println("Name: " + m.name + " | Salary: " + m.salary);
        System.out.println("Total salary: " + m.getTotalSalary());
    }
}\n`
      };
    }
    // 5. C++ (Real GCC / G++ execution)
    if (lower.endsWith('.cpp') || lower.endsWith('.c++') || lower.endsWith('.cc')) {
      return {
        lang: 'cpp', label: 'C++ ⚙️ (GCC / G++)', dot: 'cpp-dot', isCompiler: true,
        displayName: key,
        starter: `// Real C++ GCC Compiler Execution
#include <iostream>
#include <string>
using namespace std;

class Developer {
public:
    string name;
    int projects;

    Developer(string n, int p) : name(n), projects(p) {
        cout << "Developer instance created" << endl;
    }

    void show() {
        cout << "Name: " << name << " | Projects: " << projects << endl;
    }
};

int main() {
    Developer dev("Eng. Ahmed", 12);
    dev.show();
    return 0;
}\n`
      };
    }
    // 6. C (GCC)
    if (lower.endsWith('.c')) {
      return {
        lang: 'c', label: 'C 🛠️ (GCC)', dot: 'cpp-dot', isCompiler: true,
        displayName: key,
        starter: `// Real C GCC Compiler Execution
#include <stdio.h>

int main() {
    printf("Real C Execution Active!\\n");
    printf("Calculation: %d\\n", 25 * 4);
    return 0;
}\n`
      };
    }
    // 7. Python 3
    if (lower.endsWith('.py')) {
      return {
        lang: 'python', label: 'PYTHON 🐍 (Python 3.10)', dot: 'py-dot', isCompiler: true,
        displayName: key,
        starter: `# Real Python 3 Execution
class Student:
    def __init__(self, name, score):
        self.name = name
        self.score = score

    def evaluate(self):
        return "Passed" if self.score >= 50 else "Try Again"

s = Student("Ahmed", 98)
print(f"Student: {s.name} | Status: {s.evaluate()} ({s.score}%)")\n`
      };
    }
    // 8. C# (.NET)
    if (lower.endsWith('.cs')) {
      return {
        lang: 'csharp', label: 'C# 🎯 (.NET)', dot: 'py-dot', isCompiler: true,
        displayName: key,
        starter: `// Real C# Execution
using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello from real C# Runtime!");
    }
}\n`
      };
    }
    // 9. SQL (SQLite3 Database)
    if (lower.endsWith('.sql')) {
      return {
        lang: 'sql', label: 'SQL 🗄️ (SQLite3 Engine)', dot: 'js-dot', isCompiler: true,
        displayName: key,
        starter: `-- Real SQLite3 Query Engine
CREATE TABLE Students (id INT PRIMARY KEY, name TEXT, score INT);
INSERT INTO Students VALUES (1, 'Ahmed Hosny', 100);
INSERT INTO Students VALUES (2, 'Sara Ali', 95);

SELECT * FROM Students;\n`
      };
    }

    return {
      lang: 'markdown', label: 'TEXT / MD', dot: 'html-dot', isCompiler: false,
      displayName: key, starter: `# ${key}\n`
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

  /* ==========================================================================
   * 5. REAL CLOUD COMPILER INTEGRATION (PISTON API)
   * ========================================================================== */
  async function executeCloudCompiler(code, info) {
    const pistonLangMap = {
      java: { language: 'java', version: '15.0.2', defaultFile: 'Main.java' },
      cpp: { language: 'c++', version: '10.2.0', defaultFile: 'main.cpp' },
      c: { language: 'c', version: '10.2.0', defaultFile: 'main.c' },
      python: { language: 'python', version: '3.10.0', defaultFile: 'main.py' },
      csharp: { language: 'csharp.net', version: '5.0.201', defaultFile: 'Program.cs' },
      sql: { language: 'sqlite3', version: '3.36.0', defaultFile: 'query.sql' },
      php: { language: 'php', version: '8.2.3', defaultFile: 'main.php' },
      typescript: { language: 'typescript', version: '5.0.3', defaultFile: 'main.ts' }
    };

    const cfg = pistonLangMap[info.lang] || { language: info.lang, version: '*', defaultFile: info.displayName };

    // For Java: if there's a public class, file name MUST match that public class!
    let fileName = info.displayName;
    if (info.lang === 'java') {
      const match = code.match(/public\s+class\s+([A-Za-z0-9_]+)/);
      fileName = match ? (match[1] + '.java') : 'Main.java';
    }

    try {
      const response = await fetch('https://emkc.org/api/v2/piston/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          language: cfg.language,
          version: cfg.version,
          files: [
            {
              name: fileName,
              content: code
            }
          ],
          stdin: ''
        })
      });

      if (!response.ok) {
        throw new Error(`Compiler Server returned HTTP ${response.status}`);
      }

      const data = await response.json();
      return renderTerminalOutput(data, info, fileName);
    } catch (err) {
      return renderTerminalNetworkError(err, info);
    }
  }

  function renderTerminalOutput(data, info, fileName) {
    // 1. Check Compilation Stage (e.g. javac or g++ failure)
    const compileErr = data.compile && data.compile.code !== 0 ? (data.compile.stderr || data.compile.output) : '';
    // 2. Check Execution Stage
    const runtimeErr = data.run && data.run.code !== 0 ? (data.run.stderr || data.run.output) : '';
    const stdout = data.run ? (data.run.stdout || '') : '';
    const hasError = Boolean(compileErr || runtimeErr);

    const fullErr = compileErr || runtimeErr;
    let smartExplanation = '';
    if (hasError) {
      smartExplanation = generateArabicCompilerHelp(fullErr, info.lang);
    }

    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body {
      margin: 0; padding: 20px;
      background: #090d16; color: #e2e8f0;
      font-family: 'DM Mono', Consolas, monospace;
      font-size: 13px; line-height: 1.7;
    }
    .term-box {
      background: #0f172a;
      border: 1px solid ${hasError ? '#f85149' : '#1e293b'};
      border-radius: 12px; overflow: hidden;
      box-shadow: 0 12px 30px rgba(0,0,0,0.5);
    }
    .term-header {
      background: #1e293b; padding: 9px 15px;
      display: flex; align-items: center; justify-content: space-between;
      font-size: 11px; color: #94a3b8;
    }
    .term-badge {
      background: ${hasError ? '#f8514925' : '#10b98125'};
      color: ${hasError ? '#ff7b72' : '#34d399'};
      border: 1px solid ${hasError ? '#f85149' : '#10b981'};
      padding: 2px 8px; border-radius: 6px; font-weight: 700;
    }
    .term-body { padding: 18px; }
    .cmd-line {
      color: #38bdf8; margin-bottom: 12px;
      padding-bottom: 8px; border-bottom: 1px dashed #334155;
    }
    .stdout {
      color: #4ade80; white-space: pre-wrap; margin: 0; font-size: 13px;
    }
    .stderr {
      color: #ff7b72; background: rgba(248, 81, 73, 0.1);
      border-left: 3px solid #f85149; padding: 12px;
      border-radius: 6px; white-space: pre-wrap; margin-top: 12px;
    }
    .ai-smart-box {
      margin-top: 16px; padding: 12px 14px;
      background: rgba(108, 92, 231, 0.12);
      border: 1px solid rgba(108, 92, 231, 0.35);
      border-radius: 8px; color: #e2e8f0;
      direction: rtl; text-align: right;
      font-family: 'Cairo', system-ui, sans-serif;
    }
    .ai-smart-box b { color: #00f2fe; }
    .exit-status {
      margin-top: 16px; font-size: 11px; color: #64748b;
    }
  </style>
</head>
<body>
  <div class="term-box">
    <div class="term-header">
      <span>›_ Cloud Compiler Terminal (${escapeHtml(info.label)})</span>
      <span class="term-badge">${hasError ? '✖ Compilation / Runtime Error' : '✓ Execution Succeeded'}</span>
    </div>
    <div class="term-body">
      <div class="cmd-line">$ javac ${escapeHtml(fileName)} && java ...</div>
      ${stdout ? `<pre class="stdout">${escapeHtml(stdout)}</pre>` : (!hasError ? '<pre class="stdout" style="color:#94a3b8;">(Program executed successfully with 0 output statements)</pre>' : '')}
      ${hasError ? `<pre class="stderr">${escapeHtml(fullErr)}</pre>` : ''}
      ${smartExplanation ? `<div class="ai-smart-box">${smartExplanation}</div>` : ''}
      <div class="exit-status">Container process finished with exit code ${hasError ? '1' : '0'} · Real Cloud Runner</div>
    </div>
  </div>
</body>
</html>`;
  }

  function renderTerminalNetworkError(err, info) {
    return `<!DOCTYPE html>
<html>
<body style="margin:0;padding:20px;background:#090d16;color:#e2e8f0;font-family:'DM Mono',monospace;">
  <div style="background:#1e1424;border:1px solid #f85149;border-radius:10px;padding:16px;">
    <h3 style="margin-top:0;color:#ff7b72;">⚠️ Cloud Compiler Connection Issue</h3>
    <p>Failed to communicate with real compiler cloud runner (${escapeHtml(err.message)}).</p>
    <p style="direction:rtl;text-align:right;font-family:'Cairo',sans-serif;color:#cbd5e1;">
      تنبيه: تشغيل لغات المترجم الحقيقية (Java, C++, Python) يتطلب اتصالاً نشطاً بالإنترنت للاتصال بسيرفر المترجم السحابي (OpenJDK / GCC). تأكد من اتصال الإنترنت ثم اضغط Run Code مجدداً.
    </p>
  </div>
</body>
</html>`;
  }

  function generateArabicCompilerHelp(rawErr, lang) {
    const err = String(rawErr || '');
    if (/cannot find symbol/i.test(err)) {
      return `<b>💡 تشخيص الخطأ الذكي (Compiler Help):</b><br>
المترجم مش لاقي دالة أو متغير كتبته (cannot find symbol). اتأكد من صحة الحروف Capital و Small، أو اتأكد إنك عرفت المتغير قبل ما تستخدمه.`;
    }
    if (/';' expected/i.test(err)) {
      return `<b>💡 تشخيص الخطأ الذكي (Compiler Help):</b><br>
نسيت تحط فصلة منقوطة (;) في نهاية أحد الأسطر. راجع السطر المذكور في رسالة الخطأ واقفل السطر بـ (;).`;
    }
    if (/class .* is public, should be declared in a file named/i.test(err)) {
      return `<b>💡 تشخيص الخطأ الذكي (Compiler Help):</b><br>
في لغة Java، اسم الكلاس العام (public class) لازم يطابق اسم الملف بالمللي، أو شيل كلمة public وخليها class عادية وهتشتغل فوراً!`;
    }
    if (/NullPointerException/i.test(err)) {
      return `<b>💡 تشخيص الخطأ الذكي (Compiler Help):</b><br>
حدث استدعاء لمتغير أو كائن قيمته null (فارغ في الذاكرة). تأكد من إنشاء الكائن بـ new قبل استدعاء دواله.`;
    }
    return `<b>💡 تشخيص الخطأ الذكي:</b> راجع رقم السطر في رسالة المترجم أعلاه وتأكد من قواعد لغة ${lang.toUpperCase()}.`;
  }

  function renderTerminalLoading(info) {
    return `<!DOCTYPE html>
<html>
<body style="margin:0;padding:20px;background:#090d16;color:#38bdf8;font-family:'DM Mono',monospace;">
  <div style="background:#0f172a;border:1px solid #1e293b;border-radius:12px;padding:20px;">
    <div style="color:#94a3b8;font-size:11px;margin-bottom:8px;">›_ Compiling & executing ${escapeHtml(info.label)}...</div>
    <div style="font-size:14px;color:#00f2fe;">⏳ Running real compiler container on cloud server...</div>
  </div>
</body>
</html>`;
  }

  /* ==========================================================================
   * 6. PLAYGROUND BUILDER & EXECUTION CONTROLLER
   * ========================================================================== */
  function buildFullPlaygroundDocument(targetHtmlKey) {
    const activeInfo = getFileExtensionInfo(state.activePlaygroundFile);

    // If it's a web document (HTML/CSS/JS)
    const htmlKeyToRender = targetHtmlKey || (activeInfo.lang === 'html' ? state.activePlaygroundFile : 'html');
    const htmlPart = state.playgroundFiles[htmlKeyToRender] || state.playgroundFiles.html || '';

    let allCss = '';
    let allJs = '';
    Object.keys(state.playgroundFiles).forEach((k) => {
      const inf = getFileExtensionInfo(k);
      if (inf.lang === 'css') allCss += '\n' + (state.playgroundFiles[k] || '');
      if (inf.lang === 'javascript') allJs += '\n' + (state.playgroundFiles[k] || '');
    });

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
            send('runtime-error', [msg + (lineNo ? ' (Line ' + lineNo + ')' : '')]);
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
      parent.postMessage({ source: 'codemasr-preview', level: 'runtime-error', message: err.toString() }, '*');
    }
  <\/script>
</body>
</html>`;
  }

  async function runPlaygroundCode(incrementStats) {
    const f1 = document.getElementById('preview-frame');
    const f2 = document.getElementById('vscode-preview-frame');
    const activeInfo = getFileExtensionInfo(state.activePlaygroundFile);

    if (incrementStats) {
      state.runCount++;
      saveState();
      refreshAllUI();
      showToast('▶ Executing Code...');
    }

    // 1. If it's a backend / compiled language (Java, C++, Python, C#, etc.)
    if (activeInfo.isCompiler) {
      const code = state.playgroundFiles[state.activePlaygroundFile] || '';
      const loadingDoc = renderTerminalLoading(activeInfo);
      if (f1) f1.srcdoc = loadingDoc;
      if (f2) f2.srcdoc = loadingDoc;

      // Real Container Execution
      const termDoc = await executeCloudCompiler(code, activeInfo);
      if (f1) f1.srcdoc = termDoc;
      if (f2) f2.srcdoc = termDoc;
      return;
    }

    // 2. If it's HTML / CSS / JS
    clearConsoleOutput();
    const docStr = buildFullPlaygroundDocument();
    if (f1) f1.srcdoc = docStr;
    if (f2) f2.srcdoc = docStr;
  }

  function clearConsoleOutput() {
    const out = document.getElementById('console-output');
    const countEl = document.getElementById('console-count');
    if (out) out.innerHTML = `<div class="console-empty"><span>✓</span> Console clear. No errors.</div>`;
    if (countEl) countEl.textContent = '0';
  }

  /* ==========================================================================
   * 7. TABS, MULTI-FILE & NEW FILE MODAL (PromptCreateNewFile)
   * ========================================================================== */
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

    renderStudioTabs();
    runPlaygroundCode(false);
  }

  function promptCreateNewFile() {
    const modalHtml = `
      <div>
        <p style="margin:0 0 8px; font-size:12px;">Enter file name with extension (e.g. <code>Main.java</code>, <code>main.cpp</code>, <code>app.py</code>):</p>
        <input id="new-file-name-input" type="text" placeholder="e.g. Main.java or app.py" style="width:100%; padding:10px 12px; border:1px solid var(--purple); border-radius:9px; font:600 13px 'DM Mono',monospace;" autocomplete="off" />
        <div id="ext-live-detector" style="margin-top:10px; padding:8px 12px; border-radius:8px; background:var(--purple-soft); color:var(--purple); font-size:11px; font-weight:700;">
          ✨ Type an extension to auto-detect language & starter template...
        </div>
        <div style="display:flex; gap:6px; flex-wrap:wrap; margin-top:10px;">
          <small style="width:100%; color:var(--muted); font-size:10px;">Quick Templates:</small>
          <button type="button" class="quick-ext-chip" data-sample="Main.java">☕ Main.java (Real Java)</button>
          <button type="button" class="quick-ext-chip" data-sample="main.cpp">⚙️ main.cpp (Real C++)</button>
          <button type="button" class="quick-ext-chip" data-sample="main.py">🐍 main.py (Real Python)</button>
          <button type="button" class="quick-ext-chip" data-sample="main.c">🛠️ main.c (Real C)</button>
          <button type="button" class="quick-ext-chip" data-sample="query.sql">🗄️ query.sql (SQLite3)</button>
          <button type="button" class="quick-ext-chip" data-sample="page2.html">🌐 page2.html</button>
        </div>
      </div>
    `;

    openModal('➕', 'Create New File', modalHtml, 'Create & Open ✦', () => {
      const input = document.getElementById('new-file-name-input');
      let rawName = (input ? input.value : '').trim();
      if (!rawName) {
        showToast('⚠ Please specify a file name.');
        return false;
      }
      if (!rawName.includes('.')) rawName += '.html';

      const normalized = normalizeFileKey(rawName);
      if (state.playgroundFiles[normalized] !== undefined) {
        switchPlaygroundFileTab(normalized);
        showToast(`Switched to existing file: ${rawName}`);
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
        detectorBox.innerHTML = '✨ Type an extension to auto-detect language & starter template...';
        return;
      }
      const testName = val.includes('.') ? val : val + '.html';
      const info = getFileExtensionInfo(testName);
      detectorBox.innerHTML = `✅ Auto-Detected: <b>${escapeHtml(info.displayName)}</b> — Runner: <b>${info.label}</b>`;
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

  function renderStudioTabs() {
    const studioTabsBar = document.getElementById('vscode-tabs-bar');
    const pgTabsBar = document.getElementById('playground-file-tabs') || document.querySelector('.file-tabs');
    const coreKeys = ['html', 'css', 'js'];
    const allKeys = Object.keys(state.playgroundFiles);

    // 1. Fullscreen Studio Tabs
    if (studioTabsBar) {
      studioTabsBar.innerHTML = allKeys.map((key) => {
        const info = getFileExtensionInfo(key);
        const isCore = coreKeys.includes(key);
        const isActive = state.activePlaygroundFile === key;
        return `
          <div class="vscode-tab ${isActive ? 'active' : ''}" data-file="${escapeHtml(key)}">
            <span class="file-dot ${info.dot}"></span>
            <span>${escapeHtml(info.displayName)}</span>
            ${!isCore ? `<button type="button" class="tab-close-x" data-delete-file="${escapeHtml(key)}" title="Delete">×</button>` : ''}
          </div>
        `;
      }).join('') + `
        <button type="button" class="vscode-add-tab-btn" id="studio-plus-file-btn" title="Add File (+)">+</button>
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
    }

    // 2. Inline Playground Tabs
    if (pgTabsBar) {
      pgTabsBar.innerHTML = allKeys.map((key) => {
        const info = getFileExtensionInfo(key);
        const isCore = coreKeys.includes(key);
        const isActive = state.activePlaygroundFile === key;
        return `
          <button type="button" class="file-tab ${isActive ? 'active' : ''}" data-file="${escapeHtml(key)}">
            <span class="file-dot ${info.dot}"></span> ${escapeHtml(info.displayName)}
            ${!isCore ? `<span class="tab-close-x" data-delete-file="${escapeHtml(key)}" title="Delete">×</span>` : ''}
          </button>
        `;
      }).join('') + `
        <button type="button" class="pg-plus-tab-btn" id="pg-plus-file-btn" title="Add File (+)">+</button>
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

  function deleteCustomFile(fileKey) {
    if (['html', 'css', 'js'].includes(fileKey)) return;
    delete state.playgroundFiles[fileKey];
    saveState();
    switchPlaygroundFileTab('html');
    showToast(`🗑️ File ${fileKey} deleted.`);
  }

  /* ==========================================================================
   * 8. AUTO-COMPLETE / INTELLISENSE TOGGLE (ON / OFF)
   * ========================================================================== */
  function applyAutoCompleteSetting(isEnabled) {
    state.autoCompleteEnabled = Boolean(isEnabled);
    localStorage.setItem(STORAGE_KEYS.AUTOCOMPLETE, state.autoCompleteEnabled ? 'on' : 'off');

    const toggleBtn = document.getElementById('studio-autocomplete-toggle');
    const statusText = document.getElementById('autocomplete-status-text');
    if (toggleBtn) toggleBtn.classList.toggle('active', state.autoCompleteEnabled);
    if (statusText) statusText.textContent = state.autoCompleteEnabled ? 'ON' : 'OFF';

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

  /* ==========================================================================
   * 9. INITIALIZE MONACO & FIVE GLOWING THEMES
   * ========================================================================== */
  function registerMonacoThemes() {
    if (!window.monaco || window._monacoThemesDone) return;
    window._monacoThemesDone = true;

    // 1. Cyberpunk Neon
    window.monaco.editor.defineTheme('cyberpunk-neon', {
      base: 'vs-dark', inherit: true,
      rules: [
        { token: 'tag', foreground: 'ff2a85', fontStyle: 'bold' },
        { token: 'attribute.name', foreground: '00f2fe' },
        { token: 'attribute.value', foreground: 'f9f871' },
        { token: 'string', foreground: 'f9f871' },
        { token: 'keyword', foreground: 'ff2a85', fontStyle: 'bold' },
        { token: 'comment', foreground: '636d9c', fontStyle: 'italic' }
      ],
      colors: {
        'editor.background': '#0b0c1b', 'editor.foreground': '#e2e8f0',
        'editorCursor.foreground': '#00f2fe', 'editor.lineHighlightBackground': '#161836',
        'editorLineNumber.foreground': '#4c5380'
      }
    });

    // 2. Dracula Pro
    window.monaco.editor.defineTheme('dracula-pro', {
      base: 'vs-dark', inherit: true,
      rules: [
        { token: 'tag', foreground: 'ff79c6', fontStyle: 'bold' },
        { token: 'attribute.name', foreground: '50fa7b' },
        { token: 'string', foreground: 'f1fa8c' },
        { token: 'keyword', foreground: 'bd93f9', fontStyle: 'bold' }
      ],
      colors: {
        'editor.background': '#282a36', 'editor.foreground': '#f8f8f2',
        'editorCursor.foreground': '#ff79c6', 'editor.lineHighlightBackground': '#343746',
        'editorLineNumber.foreground': '#6272a4'
      }
    });

    // 3. Synthwave '84
    window.monaco.editor.defineTheme('synthwave-84', {
      base: 'vs-dark', inherit: true,
      rules: [
        { token: 'tag', foreground: 'ff7edb', fontStyle: 'bold' },
        { token: 'keyword', foreground: '36f9f6', fontStyle: 'bold' },
        { token: 'string', foreground: 'ff8b39' }
      ],
      colors: {
        'editor.background': '#1a1025', 'editor.foreground': '#fff5f9',
        'editorCursor.foreground': '#fede5d', 'editor.lineHighlightBackground': '#291a3a'
      }
    });

    // 4. Emerald Matrix
    window.monaco.editor.defineTheme('emerald-matrix', {
      base: 'vs-dark', inherit: true,
      rules: [
        { token: 'tag', foreground: '00ff9d', fontStyle: 'bold' },
        { token: 'keyword', foreground: '00ff9d', fontStyle: 'bold' },
        { token: 'string', foreground: '6ee7b7' }
      ],
      colors: {
        'editor.background': '#06110c', 'editor.foreground': '#d1fae5',
        'editorCursor.foreground': '#00ff9d', 'editor.lineHighlightBackground': '#0c2117'
      }
    });

    // 5. Aurora Light
    window.monaco.editor.defineTheme('aurora-light', {
      base: 'vs', inherit: true,
      rules: [
        { token: 'tag', foreground: 'e11d48', fontStyle: 'bold' },
        { token: 'keyword', foreground: '7c3aed', fontStyle: 'bold' },
        { token: 'string', foreground: '0284c7' }
      ],
      colors: {
        'editor.background': '#f8fafc', 'editor.foreground': '#1e293b',
        'editorCursor.foreground': '#6c5ce7', 'editor.lineHighlightBackground': '#f1f5f9'
      }
    });
  }

  function applyStudioTheme(themeName) {
    currentStudioTheme = themeName || 'cyberpunk-neon';
    localStorage.setItem(STORAGE_KEYS.STUDIO_THEME, currentStudioTheme);

    const studioModal = document.getElementById('vscode-studio-modal');
    if (studioModal) studioModal.setAttribute('data-studio-theme', currentStudioTheme);

    const sel = document.getElementById('studio-theme-select');
    if (sel && sel.value !== currentStudioTheme) sel.value = currentStudioTheme;

    if (window.monaco) {
      registerMonacoThemes();
      window.monaco.editor.setTheme(currentStudioTheme);
    }
  }

  function initMonacoEditor() {
    const host = document.getElementById('editor-host');
    const loadingEl = document.getElementById('editor-loading');
    const fallbackEl = document.getElementById('fallback-editor');

    if (window.require && typeof window.require.config === 'function') {
      window.require.config({
        paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.52.2/min/vs' }
      });
      window.require(['vs/editor/editor.main'], function () {
        if (!window.monaco) return;
        usingMonaco = true;
        if (loadingEl) loadingEl.style.display = 'none';
        if (host) host.classList.add('monaco-ready');
        if (fallbackEl) fallbackEl.hidden = true;

        registerMonacoThemes();

        monacoEditorInstance = window.monaco.editor.create(document.getElementById('monaco-editor'), {
          value: state.playgroundFiles[state.activePlaygroundFile] || '',
          language: getMonacoLang(state.activePlaygroundFile),
          theme: currentStudioTheme,
          fontFamily: "'DM Mono', monospace",
          fontSize: 13,
          lineHeight: 22,
          minimap: { enabled: false },
          automaticLayout: true,
          tabSize: 2,
          mouseWheelZoom: true
        });

        monacoEditorInstance.onDidChangeModelContent(() => {
          state.playgroundFiles[state.activePlaygroundFile] = monacoEditorInstance.getValue();
          saveState();
        });

        monacoEditorInstance.onDidChangeCursorPosition((e) => {
          const posEl = document.getElementById('cursor-position');
          if (posEl && e.position) {
            posEl.textContent = `Ln ${e.position.lineNumber}, Col ${e.position.column}`;
          }
        });

        applyAutoCompleteSetting(state.autoCompleteEnabled);
        runPlaygroundCode(false);
      });
    }
  }

  /* ==========================================================================
   * 10. LESSON WORKBENCH & UI REFRESH
   * ========================================================================== */
  function openCourseLesson(courseId, lessonIndex) {
    const course = COURSES[courseId] || COURSES.html;
    state.activeCourseId = course.id;
    const safeIndex = Math.max(0, Math.min(lessonIndex || 0, course.lessons.length - 1));
    state.activeLessonIndex = safeIndex;

    const lesson = course.lessons[safeIndex];
    saveState();
    refreshAllUI();

    document.getElementById('lesson-title').textContent = lesson.title;
    document.getElementById('lesson-lead').textContent = lesson.lead;
    document.getElementById('lesson-goal').textContent = lesson.goal;
    document.getElementById('lesson-explanation').innerHTML = lesson.explanation;
    document.getElementById('lesson-code').textContent = lesson.exampleCode;

    renderInLessonWorkbench(course, lesson);
    switchView('lesson');
  }

  function renderInLessonWorkbench(course, lesson) {
    let wb = document.getElementById('in-lesson-workbench');
    const lessonActions = document.querySelector('#lesson-view .lesson-actions');
    if (!lessonActions) return;

    if (!wb) {
      wb = document.createElement('div');
      wb.id = 'in-lesson-workbench';
      wb.style.cssText = 'margin:18px 0 24px;border:1px solid var(--line);border-radius:14px;overflow:hidden;background:var(--surface);';
      lessonActions.parentNode.insertBefore(wb, lessonActions);
    }

    const savedDraft = state.lessonDrafts[lesson.id] || lesson.starterCode;

    wb.innerHTML = `
      <div style="background:var(--purple-soft);padding:12px 16px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;">
        <div style="font-size:11px;color:#5c50bc;font-weight:700;">
          <span>🎯</span> <span id="in-lesson-prompt">${escapeHtml(lesson.challengePrompt)}</span>
        </div>
        <div style="display:flex;gap:8px;">
          <button type="button" id="in-lesson-reset" class="secondary-button" style="padding:6px 12px;font-size:10px;">↺ Reset</button>
          <button type="button" id="in-lesson-run" class="primary-button" style="padding:7px 14px;font-size:10px;">▶ Run & Verify</button>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));border-top:1px solid var(--line);">
        <textarea id="in-lesson-textarea" spellcheck="false" style="width:100%;min-height:220px;border:0;padding:14px;font:12px/1.7 'DM Mono',monospace;background:#191a2c;color:#eff0fb;direction:ltr;"></textarea>
        <iframe id="in-lesson-iframe" sandbox="allow-scripts" style="width:100%;min-height:220px;border:0;background:#fff;"></iframe>
      </div>
      <div id="in-lesson-feedback" style="padding:14px 16px;font-size:11px;background:var(--surface-2);">
        Click <b>▶ Run & Verify</b> to execute and validate your code.
      </div>
    `;

    const ta = document.getElementById('in-lesson-textarea');
    ta.value = savedDraft;

    document.getElementById('in-lesson-run')?.addEventListener('click', () => {
      executeInLessonCode(course, lesson);
    });

    document.getElementById('in-lesson-reset')?.addEventListener('click', () => {
      ta.value = lesson.starterCode;
      state.lessonDrafts[lesson.id] = lesson.starterCode;
      executeInLessonCode(course, lesson);
    });

    executeInLessonCode(course, lesson);
  }

  async function executeInLessonCode(course, lesson) {
    const ta = document.getElementById('in-lesson-textarea');
    const iframe = document.getElementById('in-lesson-iframe');
    const fb = document.getElementById('in-lesson-feedback');
    if (!ta || !iframe || !fb) return;

    const raw = ta.value;
    state.lessonDrafts[lesson.id] = raw;

    // If Python / Java / C++ lesson
    if (['java', 'cpp', 'python'].includes(course.id)) {
      const info = getFileExtensionInfo(course.id === 'java' ? 'Main.java' : (course.id === 'cpp' ? 'main.cpp' : 'main.py'));
      iframe.srcdoc = renderTerminalLoading(info);
      const res = await executeCloudCompiler(raw, info);
      iframe.srcdoc = res;
    } else {
      iframe.srcdoc = `<!DOCTYPE html><html><body>${raw}</body></html>`;
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(raw, 'text/html');
    const val = lesson.validate(doc, raw);

    if (val.passed) {
      if (!state.completedLessons.includes(lesson.id)) {
        state.completedLessons.push(lesson.id);
        saveState();
        refreshAllUI();
      }
      fb.innerHTML = `
        <div style="color:#0f5132;background:#e6f8f1;padding:10px 14px;border-radius:8px;display:flex;justify-content:space-between;align-items:center;">
          <span>✓ ${escapeHtml(val.msgEn)} (${escapeHtml(val.msgAr)})</span>
          <button type="button" class="primary-button" style="padding:6px 12px;font-size:10px;" onclick="window.advanceNextLesson()">Next Lesson →</button>
        </div>
      `;
    } else {
      fb.innerHTML = `
        <div style="color:#842029;background:#fff0f0;padding:10px 14px;border-radius:8px;">
          ✖ ${escapeHtml(val.msgEn)} — <span>${escapeHtml(val.msgAr)}</span>
        </div>
      `;
    }
  }

  window.advanceNextLesson = function () {
    const course = COURSES[state.activeCourseId] || COURSES.html;
    if (state.activeLessonIndex + 1 < course.lessons.length) {
      openCourseLesson(course.id, state.activeLessonIndex + 1);
    } else {
      showToast('Track completed!');
    }
  };

  /* ==========================================================================
   * 11. BIND ALL EVENTS & INITIALIZATION
   * ========================================================================== */
  function bindAllEvents() {
    // 1. Navigation & View Switchers
    document.querySelectorAll('.nav-item[data-view]').forEach((btn) => {
      btn.addEventListener('click', () => switchView(btn.getAttribute('data-view')));
    });

    document.querySelectorAll('.course-link[data-course]').forEach((btn) => {
      btn.addEventListener('click', () => openCourseLesson(btn.getAttribute('data-course'), 0));
    });

    // 2. Fullscreen Studio Controls
    const openStudioBtn = document.getElementById('open-studio-btn');
    const studioModal = document.getElementById('vscode-studio-modal');
    const closeStudioBtn = document.getElementById('close-studio-btn');
    const editorHost = document.getElementById('editor-host');
    const studioEditorContainer = document.getElementById('vscode-editor-container');

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
        setTimeout(() => { if (monacoEditorInstance) monacoEditorInstance.layout(); }, 80);
      });
    }

    if (closeStudioBtn && studioModal) {
      closeStudioBtn.addEventListener('click', () => {
        const editorPanelBox = document.getElementById('editor-panel-box');
        const statusbar = editorPanelBox?.querySelector('.editor-statusbar');
        if (editorHost && editorPanelBox && statusbar) {
          editorPanelBox.insertBefore(editorHost, statusbar);
          editorHost.style.height = '';
        }
        studioModal.hidden = true;
        runPlaygroundCode(false);
      });
    }

    document.getElementById('studio-run-code')?.addEventListener('click', () => runPlaygroundCode(true));
    document.getElementById('run-code')?.addEventListener('click', () => runPlaygroundCode(true));
    document.getElementById('studio-reload-preview')?.addEventListener('click', () => runPlaygroundCode(false));
    document.getElementById('refresh-preview')?.addEventListener('click', () => runPlaygroundCode(false));

    // Theme selector
    document.getElementById('studio-theme-select')?.addEventListener('change', (e) => {
      applyStudioTheme(e.target.value);
    });

    // Auto-Complete toggle
    document.getElementById('studio-autocomplete-toggle')?.addEventListener('click', () => {
      applyAutoCompleteSetting(!state.autoCompleteEnabled);
      showToast(state.autoCompleteEnabled ? 'Auto-Complete: ON' : 'Auto-Complete: OFF');
    });

    // Resizers (Draggable Splitters)
    setupResizer('workbench-resizer', 'editor-panel-box', 'preview-panel-box', 'playground-resizable-layout');
    setupResizer('studio-splitter', 'studio-editor-pane', 'studio-preview-pane', 'studio-workbench-split');

    // Studio View Modes (Code Only, Split View, Output Only)
    const btnCodeOnly = document.getElementById('mode-code-only');
    const btnSplit = document.getElementById('mode-split-view');
    const btnOutput = document.getElementById('mode-preview-only');
    const studioEditorPane = document.getElementById('studio-editor-pane');
    const studioPrevPane = document.getElementById('studio-preview-pane');

    function setStudioMode(mode) {
      btnCodeOnly?.classList.toggle('active', mode === 'code');
      btnSplit?.classList.toggle('active', mode === 'split');
      btnOutput?.classList.toggle('active', mode === 'output');

      if (mode === 'code') {
        studioEditorPane.style.display = 'flex'; studioEditorPane.style.flex = '1 1 100%';
        studioPrevPane.style.display = 'none';
      } else if (mode === 'output') {
        studioEditorPane.style.display = 'none';
        studioPrevPane.style.display = 'flex'; studioPrevPane.style.flex = '1 1 100%';
      } else {
        studioEditorPane.style.display = 'flex'; studioEditorPane.style.flex = '1 1 50%';
        studioPrevPane.style.display = 'flex'; studioPrevPane.style.flex = '1 1 50%';
      }
      if (monacoEditorInstance) setTimeout(() => monacoEditorInstance.layout(), 60);
    }

    btnCodeOnly?.addEventListener('click', () => setStudioMode('code'));
    btnSplit?.addEventListener('click', () => setStudioMode('split'));
    btnOutput?.addEventListener('click', () => setStudioMode('output'));

    renderStudioTabs();
  }

  function setupResizer(resizerId, leftId, rightId, containerId) {
    const resizer = document.getElementById(resizerId);
    const left = document.getElementById(leftId);
    const right = document.getElementById(rightId);
    const container = document.getElementById(containerId);
    if (!resizer || !left || !right || !container) return;

    let isDragging = false;
    resizer.addEventListener('mousedown', () => { isDragging = true; document.body.style.cursor = 'col-resize'; });
    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const rect = container.getBoundingClientRect();
      const pct = Math.max(15, Math.min(85, ((e.clientX - rect.left) / rect.width) * 100));
      left.style.flex = `0 0 ${pct}%`;
      right.style.flex = `0 0 ${100 - pct}%`;
      if (monacoEditorInstance) monacoEditorInstance.layout();
    });
    window.addEventListener('mouseup', () => { isDragging = false; document.body.style.cursor = ''; });
  }

  function switchView(viewName) {
    state.activeView = viewName;
    ['learn', 'playground', 'projects', 'progress', 'lesson'].forEach((v) => {
      document.getElementById(`${v}-view`)?.classList.toggle('active-view', v === viewName);
    });
    document.querySelectorAll('.nav-item[data-view]').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-view') === viewName);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function refreshAllUI() {
    renderStudioTabs();
  }

  function showToast(msg) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const t = document.createElement('div');
    t.className = 'toast';
    t.innerHTML = `<span>✦</span><div>${escapeHtml(msg)}</div>`;
    container.appendChild(t);
    setTimeout(() => t.remove(), 2800);
  }

  function openModal(symbol, title, bodyHtml, actionText, onAction) {
    const backdrop = document.getElementById('modal-backdrop');
    if (!backdrop) return;
    document.getElementById('modal-symbol').textContent = symbol;
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-body').innerHTML = bodyHtml;
    const btn = document.getElementById('modal-action');
    btn.textContent = actionText;
    btn.onclick = () => {
      if (onAction() !== false) backdrop.hidden = true;
    };
    backdrop.hidden = false;
  }

  document.getElementById('modal-close')?.addEventListener('click', () => {
    document.getElementById('modal-backdrop').hidden = true;
  });

  function escapeHtml(str) {
    return String(str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEYS.STATE, JSON.stringify({
        completedLessons: state.completedLessons,
        playgroundFiles: state.playgroundFiles
      }));
    } catch(e) {}
  }

  function bootstrap() {
    bindAllEvents();
    initMonacoEditor();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrap);
  } else {
    bootstrap();
  }
})();