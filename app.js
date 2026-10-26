// CODEMASTERY Core Engine: State, Runner, Linter, Diagnostics & Bilingual Support
(function() {
  'use strict';

  // --- STATE ---
  const state = {
    currentLessonId: 1,
    currentTab: 'learn', // 'learn', 'playground', 'projects'
    languageMode: 'ar',  // 'ar', 'en', 'bilingual'
    theme: 'dark',
    completedLessons: new Set(),
    studentCode: '',
    isDirty: false
  };

  // --- DOM CACHE ---
  const el = {
    // Nav & Controls
    langSelect: document.getElementById('lang-select'),
    themeToggle: document.getElementById('theme-toggle'),
    themeSun: document.getElementById('theme-sun'),
    themeMoon: document.getElementById('theme-moon'),
    resetProgressBtn: document.getElementById('reset-progress-btn'),
    completedCount: document.getElementById('completed-count'),
    headerProgressFill: document.getElementById('header-progress-fill'),
    navBtns: document.querySelectorAll('.nav-btn'),
    views: {
      learn: document.getElementById('view-learn'),
      playground: document.getElementById('view-playground'),
      projects: document.getElementById('view-projects')
    },
    // Curriculum
    curriculumList: document.getElementById('curriculum-list'),
    lessonTheory: document.getElementById('lesson-theory'),
    // Editor
    codeEditor: document.getElementById('code-editor'),
    lineNumbers: document.getElementById('line-numbers'),
    unsavedDot: document.getElementById('unsaved-dot'),
    btnRunCode: document.getElementById('btn-run-code'),
    btnResetCode: document.getElementById('btn-reset-code'),
    btnFormatCode: document.getElementById('btn-format-code'),
    // Preview
    previewIframe: document.getElementById('preview-iframe'),
    btnReloadPreview: document.getElementById('btn-reload-preview'),
    // Diagnostics
    diagnosticsPanel: document.getElementById('diagnostics-panel'),
    btnToggleDiag: document.getElementById('btn-toggle-diag'),
    diagnosticsBody: document.getElementById('diagnostics-body'),
    diagClean: document.getElementById('diag-clean'),
    diagIssues: document.getElementById('diag-issues'),
    diagSummary: document.getElementById('diag-summary'),
    diagIcon: document.getElementById('diag-icon'),
    // Exercise
    exerciseSection: document.getElementById('exercise-section'),
    // Playground
    pgCodeEditor: document.getElementById('pg-code-editor'),
    pgLineNumbers: document.getElementById('pg-line-numbers'),
    pgPreviewIframe: document.getElementById('pg-preview-iframe'),
    btnPgRun: document.getElementById('btn-pg-run'),
    btnDownloadHtml: document.getElementById('btn-download-html'),
    // Projects
    projectsGrid: document.getElementById('projects-grid'),
    toast: document.getElementById('toast')
  };

  // --- INITIALIZATION ---
  function init() {
    loadPersistedState();
    renderCurriculumSidebar();
    renderProjects();
    loadLesson(state.currentLessonId);
    setupEventListeners();
    updateThemeUI();
    updateDirection();
    updateProgressUI();
  }

  // --- PERSISTENCE ---
  function loadPersistedState() {
    try {
      const savedCompleted = localStorage.getItem('codemastery_completed');
      if (savedCompleted) {
        state.completedLessons = new Set(JSON.parse(savedCompleted));
      }
      const savedLang = localStorage.getItem('codemastery_lang');
      if (savedLang) {
        state.languageMode = savedLang;
        el.langSelect.value = savedLang;
      }
      const savedTheme = localStorage.getItem('codemastery_theme');
      if (savedTheme) {
        state.theme = savedTheme;
        document.documentElement.setAttribute('data-theme', savedTheme);
      }
      const savedCurrentLesson = localStorage.getItem('codemastery_active_lesson');
      if (savedCurrentLesson) {
        const id = parseInt(savedCurrentLesson, 10);
        if (HTML_CURRICULUM.some(l => l.id === id)) {
          state.currentLessonId = id;
        }
      }
    } catch (e) {
      console.warn("Storage access restricted or unavailable", e);
    }
  }

  function saveState() {
    try {
      localStorage.setItem('codemastery_completed', JSON.stringify(Array.from(state.completedLessons)));
      localStorage.setItem('codemastery_lang', state.languageMode);
      localStorage.setItem('codemastery_theme', state.theme);
      localStorage.setItem('codemastery_active_lesson', state.currentLessonId.toString());
    } catch (e) {
      console.warn("Could not save to localStorage", e);
    }
  }

  // --- RENDER CURRICULUM SIDEBAR ---
  function renderCurriculumSidebar() {
    el.curriculumList.innerHTML = '';
    HTML_CURRICULUM.forEach((lesson) => {
      const isCompleted = state.completedLessons.has(lesson.id);
      const isActive = lesson.id === state.currentLessonId;

      const item = document.createElement('button');
      item.className = `lesson-nav-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`;
      item.setAttribute('data-id', lesson.id);

      const statusIcon = isCompleted ? '✓' : '○';
      const title = state.languageMode === 'en' ? lesson.title : lesson.titleAr;

      item.innerHTML = `
        <span class="lesson-status-icon">${statusIcon}</span>
        <span class="lesson-num">${String(lesson.id).padStart(2, '0')}.</span>
        <span class="lesson-item-title">${title}</span>
      `;

      item.addEventListener('click', () => {
        loadLesson(lesson.id);
      });

      el.curriculumList.appendChild(item);
    });
  }

  // --- LOAD LESSON ---
  function loadLesson(lessonId) {
    const lesson = HTML_CURRICULUM.find(l => l.id === lessonId);
    if (!lesson) return;

    state.currentLessonId = lessonId;
    saveState();

    // Update active state in sidebar
    document.querySelectorAll('.lesson-nav-item').forEach(btn => {
      const id = parseInt(btn.getAttribute('data-id'), 10);
      btn.classList.toggle('active', id === lessonId);
    });

    // 1. Render Theory & Explanations Card
    renderLessonTheory(lesson);

    // 2. Load starter code into editor
    const savedCode = localStorage.getItem(`codemastery_code_lesson_${lesson.id}`);
    state.studentCode = savedCode || lesson.exercise.starterCode;
    el.codeEditor.value = state.studentCode;
    updateLineNumbers(el.codeEditor, el.lineNumbers);
    setUnsaved(false);

    // 3. Render and reset exercise block
    renderExerciseSection(lesson);

    // 4. Run initial code in sandbox & diagnose
    runCode(state.studentCode);
  }

  // --- RENDER THEORY ---
  function renderLessonTheory(lesson) {
    const isAr = state.languageMode === 'ar';
    const isBilingual = state.languageMode === 'bilingual';

    let objectivesHtml = '';
    const objs = (isAr || isBilingual) ? lesson.objectivesAr : lesson.objectivesEn;
    objs.forEach(o => {
      objectivesHtml += `<li>${o}</li>`;
    });

    let mistakesHtml = '';
    lesson.commonMistakes.forEach(m => {
      mistakesHtml += `
        <div class="mistake-card">
          <div class="mistake-col wrong">
            <span class="mistake-tag">❌ الغلط الشائع (Avoid)</span>
            <pre><code>${escapeHtml(m.bad)}</code></pre>
            <p style="font-size: 0.85rem; margin-top: 6px;">${isAr || isBilingual ? m.explainAr : m.explainEn}</p>
          </div>
          <div class="mistake-col right">
            <span class="mistake-tag">✔️ الطريقة الصحيحة (Best Practice)</span>
            <pre><code>${escapeHtml(m.good)}</code></pre>
          </div>
        </div>
      `;
    });

    el.lessonTheory.innerHTML = `
      <div class="lesson-header-meta">
        <span class="pill-tag accent">الدرس ${lesson.id} من 15</span>
        <span class="pill-tag">${lesson.level}</span>
        <span class="pill-tag">⏱️ ${lesson.duration}</span>
      </div>

      <h1 class="lesson-main-title">${isAr ? lesson.titleAr : (isBilingual ? `${lesson.titleAr} | ${lesson.title}` : lesson.title)}</h1>

      <!-- Egyptian Arabic Callout -->
      ${(isAr || isBilingual) ? `
        <div class="egyptian-callout">
          <div class="callout-title">
            <span>💡</span>
            <span>الشرح بالبلدي (بالمصري للمبتدئين):</span>
          </div>
          <p>${lesson.egyptianExplanation}</p>
        </div>
      ` : ''}

      <!-- English / Standard Explanation -->
      ${(!isAr || isBilingual) ? `
        <div style="margin: 14px 0; color: var(--text-muted); font-size: 0.95rem;">
          <strong>Concept Overview:</strong> ${lesson.englishExplanation}
        </div>
      ` : ''}

      <div style="margin: 16px 0;">
        <h3 class="theory-section-title">🎯 أهداف الدرس:</h3>
        <ul style="padding-inline-start: 20px; font-size: 0.92rem; display: flex; flex-direction: column; gap: 4px;">
          ${objectivesHtml}
        </ul>
      </div>

      <!-- Code Example -->
      <div>
        <h3 class="theory-section-title">💻 كود توضيحي نموذجي:</h3>
        <div class="code-explain-box">
          <pre><code>${escapeHtml(lesson.codeExample)}</code></pre>
        </div>
        <p style="font-size: 0.88rem; color: var(--text-muted);">${lesson.codeExplanationAr}</p>
      </div>

      <!-- Common Mistakes Section -->
      <div style="margin-top: 20px;">
        <h3 class="theory-section-title">⚠️ أخطاء شائعة يقع فيها المبتدئون:</h3>
        ${mistakesHtml}
      </div>
    `;
  }

  // --- RENDER EXERCISE SECTION ---
  function renderExerciseSection(lesson) {
    const ex = lesson.exercise;
    const isCompleted = state.completedLessons.has(lesson.id);

    el.exerciseSection.innerHTML = `
      <div class="exercise-header">
        <div>
          <span class="pill-tag accent" style="margin-bottom: 6px; display: inline-block;">تطبيق عملي فوري</span>
          <h2 class="exercise-title">${ex.titleAr}</h2>
        </div>
        <div id="exercise-badge-status">
          ${isCompleted ? '<span class="pill-tag" style="background: rgba(35,134,54,0.2); color: var(--accent-primary);">🎉 مُكتمل بنجاح</span>' : '<span class="pill-tag">قيد الحل</span>'}
        </div>
      </div>

      <p style="font-size: 0.95rem; margin-bottom: 14px;">${ex.instructionsAr}</p>

      <!-- Hints toggle -->
      <div style="margin-bottom: 16px;">
        <button id="btn-show-hint" class="action-btn" style="font-size: 0.78rem;">
          <span>💡 تلميح للمساعدة</span>
        </button>
        <div id="hint-box" class="hidden" style="margin-top: 8px; padding: 10px 14px; background: var(--bg-card); border-radius: var(--radius-sm); border: 1px dashed var(--border-color); font-size: 0.88rem;">
          <ul style="padding-inline-start: 18px;">
            ${ex.hintsAr.map(h => `<li>${h}</li>`).join('')}
          </ul>
        </div>
      </div>

      <!-- Live Test Results -->
      <div>
        <h4 style="font-size: 0.9rem; margin-bottom: 8px;">نتائج فحص الكود التلقائي:</h4>
        <div id="test-results-container" class="exercise-tasks">
          <div class="task-item">
            <span class="task-status-badge">⏳</span>
            <span>اضغط على "تشغيل (Run)" أو (Ctrl+Enter) لفحص إجابتك وتأكيد الحل.</span>
          </div>
        </div>
      </div>

      <div class="exercise-footer">
        <button id="btn-copy-solution" class="action-btn" title="عرض الحل النموذجي لو احتجت">
          <span>عرض الحل النموذجي</span>
        </button>

        <button id="btn-complete-lesson" class="action-btn primary" ${isCompleted ? '' : 'disabled'}>
          <span>الدرس التالي ➔</span>
        </button>
      </div>
    `;

    // Hints button listener
    document.getElementById('btn-show-hint').addEventListener('click', () => {
      document.getElementById('hint-box').classList.toggle('hidden');
    });

    // Copy solution
    document.getElementById('btn-copy-solution').addEventListener('click', () => {
      if (confirm("هل تريد استبدال كودك بالحل النموذجي للدرس ودراسته؟")) {
        el.codeEditor.value = ex.solutionCode;
        updateLineNumbers(el.codeEditor, el.lineNumbers);
        runCode(ex.solutionCode);
        showToast("تم إدراج الحل النموذجي في المحرر!");
      }
    });

    // Complete / Next Lesson
    document.getElementById('btn-complete-lesson').addEventListener('click', () => {
      if (state.currentLessonId < HTML_CURRICULUM.length) {
        loadLesson(state.currentLessonId + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        showToast("ألف مبروك! أنهيت كل دروس المسار بنجاح تام! 🎉");
      }
    });
  }

  // --- CODE EXECUTION IN SANDBOXED IFRAME ---
  function runCode(htmlSource) {
    state.studentCode = htmlSource;
    setUnsaved(false);

    // Save current lesson progress locally
    try {
      localStorage.setItem(`codemastery_code_lesson_${state.currentLessonId}`, htmlSource);
    } catch(e) {}

    // Execute in sandboxed iframe using srcdoc for pure safe rendering
    // Inject custom styling to make preview look clean and modern inside the frame
    const iframeDoc = `
      <!DOCTYPE html>
      <html dir="rtl" lang="ar">
        <head>
          <meta charset="UTF-8">
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Cairo", sans-serif;
              padding: 16px;
              line-height: 1.6;
              color: #24292f;
              background-color: #ffffff;
            }
            table { border-collapse: collapse; margin: 12px 0; width: 100%; max-width: 600px; }
            th, td { border: 1px solid #d0d7de; padding: 8px 12px; text-align: right; }
            th { background-color: #f6f8fa; font-weight: 600; }
            img { max-width: 100%; height: auto; border-radius: 4px; }
            button { cursor: pointer; padding: 6px 12px; }
            figure { margin: 12px 0; }
            figcaption { font-size: 0.85rem; color: #57606a; margin-top: 4px; }
          </style>
        </head>
        <body>
          ${htmlSource}
        </body>
      </html>
    `;

    el.previewIframe.srcdoc = iframeDoc;

    // Run Static Diagnostics (HTML Linter)
    diagnoseHtml(htmlSource);

    // Run Automated Educational Test Assertions
    evaluateCurrentExercise(htmlSource);
  }

  // --- AUTOMATED EXERCISE EVALUATION ---
  function evaluateCurrentExercise(source) {
    const lesson = HTML_CURRICULUM.find(l => l.id === state.currentLessonId);
    if (!lesson || !lesson.exercise || !lesson.exercise.test) return;

    // Parse student's HTML into a virtual DOM Document
    const parser = new DOMParser();
    const virtualDoc = parser.parseFromString(source, 'text/html');

    const result = lesson.exercise.test(virtualDoc);
    const container = document.getElementById('test-results-container');
    const nextBtn = document.getElementById('btn-complete-lesson');
    const badgeStatus = document.getElementById('exercise-badge-status');

    if (!container) return;

    container.innerHTML = '';
    if (result.details && result.details.length > 0) {
      result.details.forEach(item => {
        const div = document.createElement('div');
        div.className = `task-item ${item.passed ? 'passed' : 'failed'}`;
        div.innerHTML = `
          <span class="task-status-badge">${item.passed ? '✅' : '❌'}</span>
          <span style="font-weight: 600;">${item.desc}</span>
        `;
        container.appendChild(div);
      });
    }

    if (result.passed) {
      state.completedLessons.add(lesson.id);
      saveState();
      updateProgressUI();
      renderCurriculumSidebar();
      if (nextBtn) nextBtn.removeAttribute('disabled');
      if (badgeStatus) {
        badgeStatus.innerHTML = '<span class="pill-tag" style="background: rgba(35,134,54,0.2); color: var(--accent-primary);">🎉 مُكتمل بنجاح</span>';
      }
      showToast("رائع جداً! كودك مطابق للمواصفات ومكتوب باحترافية! 🚀");
    } else {
      if (nextBtn) nextBtn.setAttribute('disabled', 'true');
      if (badgeStatus) {
        badgeStatus.innerHTML = '<span class="pill-tag">قيد المراجعة</span>';
      }
    }
  }

  // --- SMART HTML DEBUGGER & LINTER ---
  function diagnoseHtml(code) {
    const issues = [];
    const lines = code.split('\n');

    // 1. Check for unclosed void tags vs container tags
    const voidTags = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
    const containerTags = [
      'html', 'head', 'body', 'title', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'p', 'a', 'strong', 'em', 'mark', 'code', 'pre', 'ul', 'ol', 'li',
      'table', 'thead', 'tbody', 'tr', 'th', 'td', 'form', 'label', 'select',
      'option', 'textarea', 'button', 'header', 'nav', 'main', 'section',
      'article', 'footer', 'figure', 'figcaption', 'video', 'audio'
    ];

    containerTags.forEach(tag => {
      const openMatches = code.match(new RegExp(`<${tag}(\\s+[^>]*)?>`, 'gi')) || [];
      const closeMatches = code.match(new RegExp(`</${tag}>`, 'gi')) || [];
      if (openMatches.length > closeMatches.length) {
        issues.push({
          type: 'error',
          category: 'وسم غير مغلق (Unclosed Tag)',
          tag: tag,
          explainAr: `يا هندسة: فتحت وسم <${tag}> بس نسيت تقفله بـ </${tag}>. المتصفح هيعتبر باقي الصفحة كلها لسه جواه!`,
          explainEn: `Unclosed tag <${tag}>. Found ${openMatches.length} opening tags but only ${closeMatches.length} closing tags.`,
          fixAction: () => {
            el.codeEditor.value = el.codeEditor.value + `\n</${tag}>`;
            runCode(el.codeEditor.value);
            showToast(`تمت إضافة وسم الإغلاق </${tag}> تلقائياً!`);
          }
        });
      }
    });

    // 2. Check for missing alt on img
    const imgWithoutAlt = code.match(/<img(?![^>]*\balt=)[^>]*>/gi);
    if (imgWithoutAlt) {
      issues.push({
        type: 'warning',
        category: 'معايير إمكانية الوصول (Accessibility Warning)',
        tag: 'img',
        explainAr: "بالمصري: وسم الصورة <img> مكتوب من غير خاصية alt. ده بيصعب على المكفوفين فهم محتوى الصورة وبيقلل رتبتك في محركات البحث.",
        explainEn: "Image tag is missing the 'alt' attribute. Screen readers require descriptive alt text.",
        fixAction: () => {
          el.codeEditor.value = el.codeEditor.value.replace(/<img\b(?![^>]*\balt=)/gi, '<img alt="صورة توضيحية" ');
          runCode(el.codeEditor.value);
          showToast("تمت إضافة خاصية alt الافتراضية للصورة!");
        }
      });
    }

    // 3. Check for tag typos (e.g. heder, navigasion, tabel)
    const typoMap = {
      'heder': 'header',
      'navigasion': 'nav',
      'paragraf': 'p',
      'imge': 'img',
      'tabel': 'table',
      'buttonn': 'button'
    };

    Object.keys(typoMap).forEach(typo => {
      if (new RegExp(`<${typo}[\s>]`, 'i').test(code)) {
        const correct = typoMap[typo];
        issues.push({
          type: 'error',
          category: 'خطأ إملائي في اسم الوسم (Tag Typo)',
          tag: typo,
          explainAr: `واخد بالك إنك كتبت <${typo}>؟ الكلمة دي مش موجودة في HTML، والاسم الصح بتاعها هو <${correct}>.`,
          explainEn: `Typo in tag name '<${typo}>'. Did you mean '<${correct}>'?`,
          fixAction: () => {
            const regex = new RegExp(typo, 'gi');
            el.codeEditor.value = el.codeEditor.value.replace(regex, correct);
            runCode(el.codeEditor.value);
            showToast(`تم تصحيح الوسم إلى <${correct}>!`);
          }
        });
      }
    });

    // 4. Check for nested p in p
    if (/<p[^>]*>[\s\S]*?<p[^>]*>/i.test(code)) {
      issues.push({
        type: 'warning',
        category: 'تداخل غير قياسي (Invalid Nesting)',
        tag: 'p',
        explainAr: "بالمصري: المتصفح بيقفل الفقرة <p> تلقائياً أول ما يلاقي <p> تانية جواها، مينفعش تحط فقرة جوه فقرة.",
        explainEn: "A <p> element cannot contain another <p> element according to HTML specifications."
      });
    }

    // Render Diagnostics UI
    if (issues.length === 0) {
      el.diagClean.classList.remove('hidden');
      el.diagIssues.classList.add('hidden');
      el.diagIcon.textContent = '🛡️';
      el.diagSummary.textContent = 'مساعد الفحص: الكود ممتاز وخالي من الأخطاء الهيكلية!';
    } else {
      el.diagClean.classList.add('hidden');
      el.diagIssues.classList.remove('hidden');
      el.diagIssues.innerHTML = '';
      el.diagIcon.textContent = '⚠️';
      el.diagSummary.textContent = `تم العثور على (${issues.length}) ملاحظات وتنبيهات في الكود:`;

      issues.forEach(issue => {
        const item = document.createElement('div');
        item.className = `issue-item ${issue.type}`;
        item.innerHTML = `
          <div class="issue-meta">
            <span>${issue.type === 'error' ? '🛑 خطأ' : '⚠️ تنبيه'}</span>
            <span>•</span>
            <span>${issue.category}</span>
          </div>
          <div class="issue-explain-ar">${issue.explainAr}</div>
          <div style="font-size: 0.78rem; color: var(--text-muted);">${issue.explainEn}</div>
        `;

        if (issue.fixAction) {
          const fixBtn = document.createElement('button');
          fixBtn.className = 'issue-fix-action';
          fixBtn.textContent = '⚡ صلحلي المشكلة تلقائياً (Auto Fix)';
          fixBtn.addEventListener('click', issue.fixAction);
          item.appendChild(fixBtn);
        }

        el.diagIssues.appendChild(item);
      });
    }
  }

  // --- RENDER REAL-WORLD PROJECTS ---
  function renderProjects() {
    el.projectsGrid.innerHTML = '';
    HTML_PROJECTS.forEach(proj => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
        <div>
          <span class="project-tag">${proj.tag}</span>
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-desc">${proj.description}</p>
        </div>
        <div class="project-footer">
          <span class="pill-tag">${proj.level}</span>
          <button class="action-btn primary btn-open-project" data-id="${proj.id}">
            <span>فتح المشروع في المحرر ➔</span>
          </button>
        </div>
      `;

      card.querySelector('.btn-open-project').addEventListener('click', () => {
        openProjectInPlayground(proj);
      });

      el.projectsGrid.appendChild(card);
    });
  }

  function openProjectInPlayground(proj) {
    switchTab('playground');
    el.pgCodeEditor.value = proj.starterCode;
    updateLineNumbers(el.pgCodeEditor, el.pgLineNumbers);
    runPlaygroundCode();
    showToast(`تم فتح مشروع "${proj.title}" في محرر الأكواد الحر!`);
  }

  // --- PLAYGROUND RUNNER ---
  function runPlaygroundCode() {
    const code = el.pgCodeEditor.value;
    el.pgPreviewIframe.srcdoc = `
      <!DOCTYPE html>
      <html dir="rtl" lang="ar">
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Cairo", sans-serif; padding: 16px; line-height: 1.6; }
            table { border-collapse: collapse; margin: 12px 0; width: 100%; max-width: 600px; }
            th, td { border: 1px solid #d0d7de; padding: 8px 12px; text-align: right; }
            th { background-color: #f6f8fa; }
            img { max-width: 100%; height: auto; border-radius: 4px; }
          </style>
        </head>
        <body>${code}</body>
      </html>
    `;
  }

  // --- EVENT LISTENERS ---
  function setupEventListeners() {
    // Navigation Tabs
    el.navBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        switchTab(tab);
      });
    });

    // Code Editor Input & Line Numbers
    el.codeEditor.addEventListener('input', () => {
      updateLineNumbers(el.codeEditor, el.lineNumbers);
      setUnsaved(true);
    });

    el.codeEditor.addEventListener('scroll', () => {
      el.lineNumbers.scrollTop = el.codeEditor.scrollTop;
    });

    // Tab key support & auto closing tags in editor
    el.codeEditor.addEventListener('keydown', handleEditorShortcuts);
    el.pgCodeEditor.addEventListener('keydown', handleEditorShortcuts);

    // Playground Editor input
    el.pgCodeEditor.addEventListener('input', () => {
      updateLineNumbers(el.pgCodeEditor, el.pgLineNumbers);
    });
    el.pgCodeEditor.addEventListener('scroll', () => {
      el.pgLineNumbers.scrollTop = el.pgCodeEditor.scrollTop;
    });

    // Run Buttons
    el.btnRunCode.addEventListener('click', () => {
      runCode(el.codeEditor.value);
    });

    el.btnReloadPreview.addEventListener('click', () => {
      runCode(el.codeEditor.value);
      showToast("تم تحديث المعاينة!");
    });

    el.btnPgRun.addEventListener('click', runPlaygroundCode);

    // Reset code to initial lesson starter
    el.btnResetCode.addEventListener('click', () => {
      const lesson = HTML_CURRICULUM.find(l => l.id === state.currentLessonId);
      if (lesson && confirm("هل أنت متأكد من إعادة تعيين الكود للوضع الأصلي؟")) {
        el.codeEditor.value = lesson.exercise.starterCode;
        updateLineNumbers(el.codeEditor, el.lineNumbers);
        runCode(lesson.exercise.starterCode);
        showToast("تمت إعادة ضبط الكود الأصلي بنجاح.");
      }
    });

    // Auto Format HTML code
    el.btnFormatCode.addEventListener('click', () => {
      el.codeEditor.value = formatHtmlSimple(el.codeEditor.value);
      updateLineNumbers(el.codeEditor, el.lineNumbers);
      showToast("تم تنسيق الكود وترتيبه!");
    });

    // Download HTML file
    el.btnDownloadHtml.addEventListener('click', () => {
      const blob = new Blob([el.pgCodeEditor.value], { type: 'text/html;charset=utf-8' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'index.html';
      a.click();
      showToast("جاري تحميل ملف index.html...");
    });

    // Toggle Diagnostics drawer
    el.btnToggleDiag.addEventListener('click', () => {
      el.diagnosticsBody.classList.toggle('hidden');
    });

    // Language change
    el.langSelect.addEventListener('change', (e) => {
      state.languageMode = e.target.value;
      saveState();
      updateDirection();
      renderCurriculumSidebar();
      const current = HTML_CURRICULUM.find(l => l.id === state.currentLessonId);
      if (current) renderLessonTheory(current);
    });

    // Theme toggle
    el.themeToggle.addEventListener('click', () => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', state.theme);
      saveState();
      updateThemeUI();
    });

    // Reset All Progress
    el.resetProgressBtn.addEventListener('click', () => {
      if (confirm("هل تريد حقاً مسح كل تقدمك والبدء من جديد من الدرس الأول؟")) {
        localStorage.clear();
        state.completedLessons.clear();
        state.currentLessonId = 1;
        saveState();
        init();
        showToast("تمت إعادة تعيين كل التقدم بنجاح.");
      }
    });
  }

  // --- KEYBOARD SHORTCUTS & TAB INDENT ---
  function handleEditorShortcuts(e) {
    // Ctrl + Enter to run code
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      if (state.currentTab === 'learn') {
        runCode(el.codeEditor.value);
      } else {
        runPlaygroundCode();
      }
      return;
    }

    // Tab key indent
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = this.selectionStart;
      const end = this.selectionEnd;
      this.value = this.value.substring(0, start) + "  " + this.value.substring(end);
      this.selectionStart = this.selectionEnd = start + 2;
      this.dispatchEvent(new Event('input'));
    }
  }

  // --- TABS SWITCHING ---
  function switchTab(tab) {
    state.currentTab = tab;
    el.navBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tab);
    });
    Object.keys(el.views).forEach(key => {
      el.views[key].classList.toggle('active', key === tab);
      el.views[key].classList.toggle('hidden', key !== tab);
    });

    if (tab === 'playground' && !el.pgCodeEditor.value.trim()) {
      el.pgCodeEditor.value = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>صفحة تجريبية</title>
</head>
<body>
  <h1>مختبر الـ HTML التفاعلي</h1>
  <p>اكتب هنا أي فكرة ترغب بتجربتها وشاهد النتيجة لحظياً!</p>
</body>
</html>`;
      updateLineNumbers(el.pgCodeEditor, el.pgLineNumbers);
      runPlaygroundCode();
    }
  }

  // --- HELPERS ---
  function updateLineNumbers(textarea, lineContainer) {
    const lines = textarea.value.split('\n').length;
    let numbers = '';
    for (let i = 1; i <= Math.max(lines, 1); i++) {
      numbers += i + '\n';
    }
    lineContainer.textContent = numbers;
  }

  function setUnsaved(isUnsaved) {
    state.isDirty = isUnsaved;
    el.unsavedDot.classList.toggle('active', isUnsaved);
  }

  function updateProgressUI() {
    const count = state.completedLessons.size;
    el.completedCount.textContent = count;
    const percentage = Math.round((count / HTML_CURRICULUM.length) * 100);
    el.headerProgressFill.style.width = percentage + '%';
  }

  function updateThemeUI() {
    const isDark = state.theme === 'dark';
    el.themeSun.classList.toggle('hidden', !isDark);
    el.themeMoon.classList.toggle('hidden', isDark);
  }

  function updateDirection() {
    if (state.languageMode === 'en') {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', 'en');
    } else {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
    }
  }

  function showToast(msg) {
    el.toast.textContent = msg;
    el.toast.classList.remove('hidden');
    setTimeout(() => {
      el.toast.classList.add('hidden');
    }, 3200);
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function formatHtmlSimple(html) {
    let formatted = '';
    let indent = '';
    const tab = '  ';
    html.split(/>\s*</).forEach(function(element) {
      if (element.match(/^\/\w/)) {
        indent = indent.substring(tab.length);
      }
      formatted += indent + '<' + element + '>\r\n';
      if (element.match(/^<?\w[^>]*[^\/]$/) && !element.startsWith("input") && !element.startsWith("img") && !element.startsWith("br") && !element.startsWith("meta") && !element.startsWith("hr")) {
        indent += tab;
      }
    });
    return formatted.substring(1, formatted.length - 3);
  }

  // Launch on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
