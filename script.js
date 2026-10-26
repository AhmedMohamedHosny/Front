"use strict";

/* ==========================================================
   CODEMASR
   Learning Platform - Main JavaScript
   HTML + CSS + JavaScript Playground
   ========================================================== */

document.addEventListener("DOMContentLoaded", function () {
    CodeMasr.init();
});

const CodeMasr = (() => {

    /* ======================================================
       1. CONFIGURATION
       ====================================================== */

    const STORAGE_KEYS = {
        html: "codemasr_html",
        css: "codemasr_css",
        js: "codemasr_js",
        completed: "codemasr_completed_lessons",
        runs: "codemasr_total_runs",
        theme: "codemasr_theme"
    };

    const DEFAULT_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Website</title>
</head>
<body>
    <main class="container">
        <h1>Hello, CodeMasr!</h1>
        <p>Welcome to your first coding project.</p>

        <button id="helloButton">Click Me</button>

        <p id="message"></p>
    </main>
</body>
</html>`;

    const DEFAULT_CSS = `* {
    box-sizing: border-box;
}

body {
    margin: 0;
    min-height: 100vh;
    font-family: Arial, sans-serif;
    background: #f3f4f6;
    color: #1f2937;
    display: grid;
    place-items: center;
}

.container {
    width: min(90%, 600px);
    padding: 40px;
    background: white;
    border-radius: 16px;
    text-align: center;
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.08);
}

h1 {
    color: #0d9488;
}

button {
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    background: #0d9488;
    color: white;
    font-size: 16px;
    cursor: pointer;
}

button:hover {
    background: #0f766e;
}

#message {
    margin-top: 20px;
    font-weight: bold;
}`;

    const DEFAULT_JS = `const button = document.getElementById("helloButton");
const message = document.getElementById("message");

button.addEventListener("click", function () {
    message.textContent = "Great job! JavaScript is working.";
    console.log("Button clicked successfully!");
});`;

    const state = {
        html: readStorage(STORAGE_KEYS.html, DEFAULT_HTML),
        css: readStorage(STORAGE_KEYS.css, DEFAULT_CSS),
        js: readStorage(STORAGE_KEYS.js, DEFAULT_JS),
        activeFile: "html",
        completedLessons: readJSON(STORAGE_KEYS.completed, []),
        totalRuns: Number(
            readStorage(STORAGE_KEYS.runs, "0")
        ),
        editor: null,
        models: null,
        monacoReady: false,
        initialized: false
    };

    /* ======================================================
       2. HELPER FUNCTIONS
       ====================================================== */

    function $(selector, root = document) {
        return root.querySelector(selector);
    }

    function $$(selector, root = document) {
        return Array.from(root.querySelectorAll(selector));
    }

    function readStorage(key, fallback) {
        try {
            const value = localStorage.getItem(key);
            return value === null ? fallback : value;
        } catch (error) {
            return fallback;
        }
    }

    function readJSON(key, fallback) {
        try {
            const value = localStorage.getItem(key);

            if (value === null) {
                return fallback;
            }

            return JSON.parse(value);
        } catch (error) {
            return fallback;
        }
    }

    function saveStorage(key, value) {
        try {
            localStorage.setItem(key, value);
        } catch (error) {
            console.warn("Could not save data:", error);
        }
    }

    function saveAll() {
        saveStorage(STORAGE_KEYS.html, state.html);
        saveStorage(STORAGE_KEYS.css, state.css);
        saveStorage(STORAGE_KEYS.js, state.js);

        saveStorage(
            STORAGE_KEYS.completed,
            JSON.stringify(state.completedLessons)
        );

        saveStorage(
            STORAGE_KEYS.runs,
            String(state.totalRuns)
        );
    }

    function setText(selector, value) {
        const element = $(selector);

        if (element) {
            element.textContent = value;
        }
    }

    function escapeHTML(value) {
        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function showToast(message, type = "info") {
        let toast = $("#codemasr-toast");

        if (!toast) {
            toast = document.createElement("div");
            toast.id = "codemasr-toast";

            Object.assign(toast.style, {
                position: "fixed",
                bottom: "24px",
                right: "24px",
                zIndex: "99999",
                maxWidth: "360px",
                padding: "14px 20px",
                borderRadius: "10px",
                color: "#ffffff",
                background: "#334155",
                fontFamily: "Arial, sans-serif",
                fontSize: "14px",
                boxShadow: "0 8px 30px rgba(0,0,0,.2)",
                opacity: "0",
                transform: "translateY(10px)",
                transition: "opacity .2s, transform .2s"
            });

            document.body.appendChild(toast);
        }

        const backgrounds = {
            success: "#15803d",
            error: "#b91c1c",
            info: "#334155",
            warning: "#b45309"
        };

        toast.style.background = backgrounds[type] || backgrounds.info;
        toast.textContent = message;
        toast.style.opacity = "1";
        toast.style.transform = "translateY(0)";

        clearTimeout(toast._hideTimer);

        toast._hideTimer = setTimeout(() => {
            toast.style.opacity = "0";
            toast.style.transform = "translateY(10px)";
        }, 3500);
    }

    /* ======================================================
       3. EDITOR ELEMENTS
       ====================================================== */

    function findEditor(file) {
        const selectors = {
            html: [
                "#htmlEditor",
                "#html-editor",
                "#htmlCode",
                "#html-code",
                'textarea[name="html"]',
                '[data-editor="html"]',
                '[data-file="html"]'
            ],
            css: [
                "#cssEditor",
                "#css-editor",
                "#cssCode",
                "#css-code",
                'textarea[name="css"]',
                '[data-editor="css"]',
                '[data-file="css"]'
            ],
            js: [
                "#jsEditor",
                "#js-editor",
                "#scriptEditor",
                "#javascriptEditor",
                "#jsCode",
                "#js-code",
                'textarea[name="js"]',
                '[data-editor="js"]',
                '[data-file="js"]'
            ]
        };

        for (const selector of selectors[file] || []) {
            const element = $(selector);

            if (
                element &&
                (
                    element.tagName === "TEXTAREA" ||
                    element.tagName === "INPUT"
                )
            ) {
                return element;
            }
        }

        return null;
    }

    function findPreview() {
        return $(
            "#previewFrame, " +
            "#preview-frame, " +
            "#livePreview iframe, " +
            "#live-preview iframe, " +
            "#preview iframe, " +
            "iframe[data-preview]"
        );
    }

    function findConsole() {
        return $(
            "#consoleOutput, " +
            "#console-output, " +
            "#console, " +
            "#outputConsole, " +
            "[data-console]"
        );
    }

    function findErrorPanel() {
        return $(
            "#errorOutput, " +
            "#error-output, " +
            "#errorPanel, " +
            "#errors, " +
            "[data-errors]"
        );
    }

    function getCode(file) {
        if (
            state.monacoReady &&
            state.editor &&
            state.models
        ) {
            return state.models[file].getValue();
        }

        const editor = findEditor(file);

        if (editor) {
            return editor.value;
        }

        return state[file];
    }

    function syncEditors() {
        ["html", "css", "js"].forEach(file => {
            state[file] = getCode(file);
        });
    }

    /* ======================================================
       4. EDITOR INITIALIZATION
       ====================================================== */

    function initializeEditors() {
        ["html", "css", "js"].forEach(file => {
            const editor = findEditor(file);

            if (!editor) {
                return;
            }

            editor.value = state[file];

            editor.addEventListener("input", function () {
                state[file] = editor.value;

                saveAll();
                updateEditorStats();
            });

            editor.addEventListener("keydown", function (event) {
                if (event.key === "Tab") {
                    event.preventDefault();

                    const start = editor.selectionStart;
                    const end = editor.selectionEnd;

                    editor.setRangeText(
                        "    ",
                        start,
                        end,
                        "end"
                    );

                    editor.dispatchEvent(
                        new Event("input", { bubbles: true })
                    );
                }

                if (
                    (event.ctrlKey || event.metaKey) &&
                    event.key === "Enter"
                ) {
                    event.preventDefault();
                    runCode();
                }
            });
        });

        updateEditorStats();
    }

    function switchFile(file) {
        if (!["html", "css", "js"].includes(file)) {
            return;
        }

        syncEditors();
        state.activeFile = file;

        const tabs = $$(
            "[data-file-tab], " +
            "[data-editor-tab], " +
            ".file-tab"
        );

        tabs.forEach(tab => {
            const tabFile = (
                tab.dataset.fileTab ||
                tab.dataset.editorTab ||
                tab.dataset.file ||
                ""
            ).toLowerCase();

            const active = tabFile === file;

            tab.classList.toggle("active", active);
            tab.setAttribute("aria-selected", String(active));
        });

        ["html", "css", "js"].forEach(name => {
            const editor = findEditor(name);

            if (!editor) {
                return;
            }

            editor.hidden = name !== file;
            editor.style.display = name === file ? "" : "none";
        });

        if (
            state.monacoReady &&
            state.models &&
            state.editor
        ) {
            state.editor.setModel(state.models[file]);
        }

        const editor = findEditor(file);

        if (editor) {
            editor.focus();
        }

        updateEditorStats();
    }

    function updateEditorStats() {
        const code = getCode(state.activeFile) || "";
        const lines = code.split("\n").length;

        setText(
            "#lineCount, #line-count, [data-line-count]",
            `${lines} lines`
        );

        setText(
            "#characterCount, #character-count, [data-character-count]",
            `${code.length} characters`
        );

        const names = {
            html: "index.html",
            css: "style.css",
            js: "script.js"
        };

        setText(
            "#activeFileName, #active-file-name, [data-active-file]",
            names[state.activeFile]
        );
    }

    /* ======================================================
       5. OPTIONAL MONACO EDITOR
       ====================================================== */

    function initializeMonaco() {
        const container = $(
            "#monacoEditor, " +
            "#monaco-editor, " +
            "[data-monaco-editor]"
        );

        if (!container) {
            return;
        }

        if (window.monaco && window.monaco.editor) {
            createMonacoEditor(container);
            return;
        }

        loadMonaco();
    }

    function loadMonaco() {
        if ($("#codemasr-monaco-loader")) {
            return;
        }

        const script = document.createElement("script");

        script.id = "codemasr-monaco-loader";
        script.src =
            "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.52.2/min/vs/loader.min.js";

        script.onload = function () {
            if (typeof window.require !== "function") {
                showToast(
                    "Monaco Editor could not initialize.",
                    "warning"
                );
                return;
            }

            window.require.config({
                paths: {
                    vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.52.2/min/vs"
                }
            });

            window.require(
                ["vs/editor/editor.main"],
                function () {
                    const container = $(
                        "#monacoEditor, " +
                        "#monaco-editor, " +
                        "[data-monaco-editor]"
                    );

                    if (container) {
                        createMonacoEditor(container);
                    }
                }
            );
        };

        script.onerror = function () {
            showToast(
                "Monaco Editor could not load. Check your internet connection.",
                "warning"
            );
        };

        document.head.appendChild(script);
    }

    function createMonacoEditor(container) {
        if (
            !window.monaco ||
            !window.monaco.editor ||
            state.editor
        ) {
            return;
        }

        try {
            const htmlModel = window.monaco.editor.createModel(
                state.html,
                "html"
            );

            const cssModel = window.monaco.editor.createModel(
                state.css,
                "css"
            );

            const jsModel = window.monaco.editor.createModel(
                state.js,
                "javascript"
            );

            state.models = {
                html: htmlModel,
                css: cssModel,
                js: jsModel
            };

            state.editor = window.monaco.editor.create(container, {
                model: htmlModel,
                theme: "vs-dark",
                automaticLayout: true,
                minimap: { enabled: false },
                fontSize: 14,
                tabSize: 4,
                wordWrap: "on",
                scrollBeyondLastLine: false
            });

            state.monacoReady = true;

            state.editor.onDidChangeModelContent(function () {
                syncEditors();
                saveAll();
                updateEditorStats();
            });

            const fallbackEditors = $$(".standard-editor, .fallback-editor");

            fallbackEditors.forEach(editor => {
                editor.style.display = "none";
            });

            showToast("Code editor is ready.", "success");
        } catch (error) {
            console.error("Monaco initialization error:", error);

            showToast(
                "The advanced editor could not start.",
                "warning"
            );
        }
    }

    /* ======================================================
       6. CONSOLE AND ERROR HANDLING
       ====================================================== */

    function clearConsole() {
        const output = findConsole();

        if (output) {
            output.replaceChildren();
        }

        const errors = findErrorPanel();

        if (errors) {
            errors.replaceChildren();
        }
    }

    function writeConsole(message, type = "log") {
        const output = findConsole();

        if (!output) {
            return;
        }

        const line = document.createElement("div");

        line.className = `console-line console-${type}`;
        line.style.padding = "5px 8px";
        line.style.marginBottom = "3px";
        line.style.whiteSpace = "pre-wrap";
        line.style.overflowWrap = "anywhere";
        line.style.fontFamily = "monospace";
        line.style.fontSize = "13px";

        const colors = {
            log: "#cbd5e1",
            info: "#60a5fa",
            warn: "#fbbf24",
            error: "#f87171"
        };

        line.style.color = colors[type] || colors.log;
        line.textContent = String(message);

        output.appendChild(line);
    }

    function explainError(message) {
        const text = String(message || "");
        const lower = text.toLowerCase();

        if (
            lower.includes("is not defined") ||
            lower.includes("not defined")
        ) {
            return {
                title: "Undefined Variable",
                explanation:
                    "A variable or function is being used before it has been declared, or its name is misspelled.",
                solution:
                    "Check the spelling and make sure the variable exists before using it."
            };
        }

        if (
            lower.includes("cannot read properties of null") ||
            lower.includes("cannot read property")
        ) {
            return {
                title: "Element Not Found",
                explanation:
                    "Your code is trying to access a property of a null value. This often happens when an HTML element cannot be found.",
                solution:
                    "Check the element ID and make sure the element exists before your JavaScript runs."
            };
        }

        if (
            lower.includes("unexpected token") ||
            lower.includes("unexpected end")
        ) {
            return {
                title: "Syntax Error",
                explanation:
                    "JavaScript found code that does not follow the expected syntax.",
                solution:
                    "Check brackets, parentheses, quotation marks, and commas."
            };
        }

        if (lower.includes("is not a function")) {
            return {
                title: "Function Error",
                explanation:
                    "Your code is trying to call something that is not a function.",
                solution:
                    "Check the variable's value and make sure the function name is correct."
            };
        }

        if (lower.includes("failed to fetch")) {
            return {
                title: "Network Error",
                explanation:
                    "A network request could not be completed.",
                solution:
                    "Check the URL, your connection, and whether the server is available."
            };
        }

        if (lower.includes("permission denied")) {
            return {
                title: "Permission Error",
                explanation:
                    "The operation was blocked because the required permission was unavailable.",
                solution:
                    "Check browser permissions and the permissions required by your code."
            };
        }

        return {
            title: "JavaScript Error",
            explanation:
                "The browser reported a problem while executing your code.",
            solution:
                "Read the original error message, check the indicated line, and inspect the variables used there."
        };
    }

    function displayError(message, lineNumber = null) {
        const details = explainError(message);
        const panel = findErrorPanel();

        writeConsole(
            "ERROR: " + message +
            (lineNumber ? " (Line " + lineNumber + ")" : ""),
            "error"
        );

        if (!panel) {
            return;
        }

        const card = document.createElement("article");

        card.className = "error-card";

        Object.assign(card.style, {
            padding: "12px",
            marginBottom: "10px",
            borderRadius: "8px",
            border: "1px solid #ef4444",
            background: "rgba(239, 68, 68, 0.08)"
        });

        const title = document.createElement("h4");
        title.textContent = details.title;

        const original = document.createElement("p");
        original.textContent = "Error: " + message;

        const explanation = document.createElement("p");
        explanation.textContent =
            "What happened: " + details.explanation;

        const solution = document.createElement("p");
        solution.textContent =
            "Suggested fix: " + details.solution;

        [title, original, explanation, solution].forEach(element => {
            element.style.margin = "6px 0";
            card.appendChild(element);
        });

        if (lineNumber) {
            const line = document.createElement("p");
            line.textContent = "Line: " + lineNumber;
            card.appendChild(line);
        }

        panel.appendChild(card);
    }

    /* ======================================================
       7. BUILD THE PREVIEW
       ====================================================== */

    function buildPreviewDocument() {
        const html = state.html;
        const css = state.css;
        const js = state.js;

        const bridgeScript = `
<script>
(function () {
    "use strict";

    function stringify(value) {
        try {
            if (typeof value === "string") return value;
            if (value instanceof Error) return value.stack || value.message;
            return JSON.stringify(value);
        } catch (error) {
            return String(value);
        }
    }

    function send(type, args) {
        try {
            parent.postMessage({
                source: "codemasr-preview",
                type: type,
                message: Array.from(args).map(stringify).join(" ")
            }, "*");
        } catch (error) {}
    }

    ["log", "info", "warn", "error", "debug"].forEach(function (type) {
        var original = console[type];

        console[type] = function () {
            send(type, arguments);

            if (original) {
                original.apply(console, arguments);
            }
        };
    });

    window.addEventListener("error", function (event) {
        send("error", [
            event.message || "Unknown runtime error"
        ]);
    });

    window.addEventListener("unhandledrejection", function (event) {
        send("error", [
            "Unhandled Promise Rejection: " + stringify(event.reason)
        ]);
    });
})();
<\/script>`;

        const cssTag = `<style>\n${css}\n</style>`;
        const jsTag = `<script>\n${js}\n<\/script>`;

        let documentHTML = html;

        if (/<head(?:\s[^>]*)?>/i.test(documentHTML)) {
            documentHTML = documentHTML.replace(
                /<head(?:\s[^>]*)?>/i,
                match => match + "\n" + bridgeScript + "\n" + cssTag
            );
        } else {
            documentHTML = bridgeScript + cssTag + documentHTML;
        }

        if (/<\/body\s*>/i.test(documentHTML)) {
            documentHTML = documentHTML.replace(
                /<\/body\s*>/i,
                jsTag + "\n</body>"
            );
        } else {
            documentHTML += "\n" + jsTag;
        }

        return documentHTML;
    }

    function runCode() {
        syncEditors();
        saveAll();
        clearConsole();

        const preview = findPreview();

        if (!preview) {
            showToast(
                "Preview iframe not found. Check index.html.",
                "error"
            );

            console.error(
                "CodeMasr: Add an iframe for the preview. " +
                'Example: <iframe id="previewFrame"></iframe>'
            );

            return;
        }

        state.totalRuns += 1;

        saveStorage(
            STORAGE_KEYS.runs,
            String(state.totalRuns)
        );

        updateDashboard();

        preview.setAttribute(
            "sandbox",
            "allow-scripts"
        );

        preview.setAttribute(
            "title",
            "Code Playground Preview"
        );

        preview.srcdoc = buildPreviewDocument();

        setText(
            "#runStatus, #run-status, [data-run-status]",
            "Running..."
        );

        preview.onload = function () {
            setText(
                "#runStatus, #run-status, [data-run-status]",
                "Preview updated"
            );
        };

        showToast("Code executed in the preview.", "success");
    }

    /* ======================================================
       8. RECEIVE PREVIEW MESSAGES
       ====================================================== */

    function initializeConsoleBridge() {
        window.addEventListener("message", function (event) {
            const data = event.data;

            if (!data || data.source !== "codemasr-preview") {
                return;
            }

            const type = data.type || "log";
            const message = data.message || "";

            writeConsole(message, type);

            if (type === "error") {
                displayError(message);
            }
        });
    }

    /* ======================================================
       9. RESET CODE
       ====================================================== */

    function resetCode() {
        const confirmed = window.confirm(
            "Reset all editor files to their original examples?"
        );

        if (!confirmed) {
            return;
        }

        state.html = DEFAULT_HTML;
        state.css = DEFAULT_CSS;
        state.js = DEFAULT_JS;

        ["html", "css", "js"].forEach(file => {
            const editor = findEditor(file);

            if (editor) {
                editor.value = state[file];
            }

            if (
                state.monacoReady &&
                state.models &&
                state.models[file]
            ) {
                state.models[file].setValue(state[file]);
            }
        });

        saveAll();
        clearConsole();
        updateEditorStats();

        showToast("Code has been reset.", "success");
        runCode();
    }

    /* ======================================================
       10. DOWNLOAD PROJECT
       ====================================================== */

    function downloadFile(filename, content, mimeType) {
        const blob = new Blob([content], {
            type: mimeType || "text/plain;charset=utf-8"
        });

        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");

        link.href = url;
        link.download = filename;

        document.body.appendChild(link);
        link.click();
        link.remove();

        setTimeout(() => URL.revokeObjectURL(url), 1000);
    }

    function downloadHTML() {
        syncEditors();

        downloadFile(
            "index.html",
            state.html,
            "text/html;charset=utf-8"
        );

        showToast("index.html downloaded.", "success");
    }

    function downloadCSS() {
        syncEditors();

        downloadFile(
            "style.css",
            state.css,
            "text/css;charset=utf-8"
        );

        showToast("style.css downloaded.", "success");
    }

    function downloadJS() {
        syncEditors();

        downloadFile(
            "script.js",
            state.js,
            "text/javascript;charset=utf-8"
        );

        showToast("script.js downloaded.", "success");
    }

    function downloadProject() {
        syncEditors();

        const projectHTML = state.html
            .replace(
                /<link\b[^>]*href=["'][^"']*style\.css["'][^>]*>/gi,
                ""
            )
            .replace(
                /<script\b[^>]*src=["'][^"']*script\.js["'][^>]*>\s*<\/script>/gi,
                ""
            );

        const css = state.css.replace(/<\/style/gi, "<\\/style");
        const js = state.js.replace(/<\/script/gi, "<\\/script");

        let combined = projectHTML;

        const styleTag = `<style>\n${css}\n</style>`;
        const scriptTag = `<script>\n${js}\n<\/script>`;

        if (/<\/head\s*>/i.test(combined)) {
            combined = combined.replace(
                /<\/head\s*>/i,
                styleTag + "\n</head>"
            );
        } else {
            combined = styleTag + combined;
        }

        if (/<\/body\s*>/i.test(combined)) {
            combined = combined.replace(
                /<\/body\s*>/i,
                scriptTag + "\n</body>"
            );
        } else {
            combined += scriptTag;
        }

        downloadFile(
            "codemasr-project.html",
            combined,
            "text/html;charset=utf-8"
        );

        showToast("Project downloaded as an HTML file.", "success");
    }

    /* ======================================================
       11. LESSON PROGRESS
       ====================================================== */

    function getLessonId(element) {
        return (
            element.dataset.lessonId ||
            element.dataset.lesson ||
            element.getAttribute("data-id") ||
            element.id ||
            ""
        );
    }

    function markLessonCompleted(lessonId) {
        if (!lessonId) {
            showToast("Lesson ID was not found.", "warning");
            return;
        }

        if (!state.completedLessons.includes(lessonId)) {
            state.completedLessons.push(lessonId);
        }

        saveAll();
        updateDashboard();
        updateLessonButtons();

        showToast("Lesson completed!", "success");
    }

    function updateLessonButtons() {
        $$(
            "[data-complete-lesson], " +
            "[data-lesson-complete], " +
            ".complete-lesson"
        ).forEach(button => {
            const id = getLessonId(button);

            const complete = state.completedLessons.includes(id);

            button.classList.toggle("completed", complete);

            if (complete) {
                button.setAttribute("aria-pressed", "true");
            }
        });
    }

    function resetProgress() {
        const confirmed = window.confirm(
            "Reset your learning progress?"
        );

        if (!confirmed) {
            return;
        }

        state.completedLessons = [];
        saveAll();
        updateDashboard();
        updateLessonButtons();

        showToast("Learning progress has been reset.", "success");
    }

    /* ======================================================
       12. DASHBOARD STATISTICS
       ====================================================== */

    function updateDashboard() {
        const completed = state.completedLessons.length;
        const runs = state.totalRuns;

        setText(
            "#completedLessons, #completed-lessons, [data-completed-lessons]",
            String(completed)
        );

        setText(
            "#totalRuns, #total-runs, [data-total-runs]",
            String(runs)
        );

        setText(
            "#completedCount, [data-completed-count]",
            String(completed)
        );

        setText(
            "#runsCount, [data-runs-count]",
            String(runs)
        );

        const progressBar = $(
            "#progressBar, #progress-bar, [data-progress-bar]"
        );

        const progressText = $(
            "#progressPercentage, #progress-percentage, [data-progress-percentage]"
        );

        const totalLessons = Number(
            document.body.dataset.totalLessons || 5
        );

        const percentage = Math.min(
            100,
            Math.round((completed / Math.max(1, totalLessons)) * 100)
        );

        if (progressBar) {
            progressBar.style.width = percentage + "%";
            progressBar.setAttribute("aria-valuenow", String(percentage));
        }

        if (progressText) {
            progressText.textContent = percentage + "%";
        }
    }

    /* ======================================================
       13. NAVIGATION
       ====================================================== */

    function showSection(sectionName) {
        if (!sectionName) {
            return;
        }

        const sections = $$(
            "[data-section], section.page-section, .page-section"
        );

        let found = false;

        sections.forEach(section => {
            const id = (
                section.dataset.section ||
                section.id ||
                ""
            ).toLowerCase();

            const matches = id === sectionName.toLowerCase();

            if (matches) {
                found = true;
            }

            section.hidden = !matches;
            section.classList.toggle("active", matches);

            if (section.style.display !== undefined) {
                section.style.display = matches ? "" : "none";
            }
        });

        const navItems = $$(
            "[data-nav], [data-target], .nav-link"
        );

        navItems.forEach(item => {
            const target = (
                item.dataset.nav ||
                item.dataset.target ||
                item.getAttribute("href") ||
                ""
            ).replace(/^#/, "").toLowerCase();

            item.classList.toggle(
                "active",
                target === sectionName.toLowerCase()
            );
        });

        if (!found) {
            const target = $("#" + CSS.escape(sectionName));

            if (target) {
                target.hidden = false;
                target.style.display = "";
            }
        }

        if (sectionName.toLowerCase().includes("playground")) {
            updateEditorStats();
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    function initializeNavigation() {
        document.addEventListener("click", function (event) {
            const nav = event.target.closest(
                "[data-nav], [data-target], [data-section-link]"
            );

            if (!nav) {
                return;
            }

            const sectionName = (
                nav.dataset.nav ||
                nav.dataset.target ||
                nav.dataset.sectionLink ||
                nav.getAttribute("href") ||
                ""
            ).replace(/^#/, "");

            if (!sectionName) {
                return;
            }

            const sectionExists = $(
                `[data-section="${CSS.escape(sectionName)}"]`
            ) || $("#" + CSS.escape(sectionName));

            if (sectionExists) {
                event.preventDefault();
                showSection(sectionName);
            }
        });
    }

    /* ======================================================
       14. THEME SWITCHER
       ====================================================== */

    function toggleTheme() {
        const current = document.documentElement.dataset.theme ||
            readStorage(STORAGE_KEYS.theme, "light");

        const next = current === "dark" ? "light" : "dark";

        document.documentElement.dataset.theme = next;
        document.body.classList.toggle("dark-mode", next === "dark");

        saveStorage(STORAGE_KEYS.theme, next);

        const button = $(
            "#themeToggle, #theme-toggle, [data-theme-toggle]"
        );

        if (button) {
            button.textContent =
                next === "dark" ? "Light Mode" : "Dark Mode";
        }
    }

    function initializeTheme() {
        const theme = readStorage(STORAGE_KEYS.theme, "light");

        document.documentElement.dataset.theme = theme;
        document.body.classList.toggle("dark-mode", theme === "dark");
    }

    /* ======================================================
       15. SEARCH
       ====================================================== */

    function initializeSearch() {
        const search = $(
            "#searchInput, #search-input, [data-search]"
        );

        if (!search) {
            return;
        }

        search.addEventListener("input", function () {
            const query = search.value.trim().toLowerCase();

            const items = $$(
                "[data-searchable], .lesson-card, .course-card, .project-card"
            );

            items.forEach(item => {
                const text = item.textContent.toLowerCase();

                item.hidden = query !== "" && !text.includes(query);
            });
        });
    }

    /* ======================================================
       16. PROJECT EXAMPLES
       ====================================================== */

    const PROJECTS = {
        profile: {
            html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Profile</title>
</head>
<body>
    <div class="profile">
        <div class="avatar">CM</div>
        <h1>My Profile</h1>
        <p>Computer Engineering Student</p>
        <p>I am learning HTML, CSS and JavaScript.</p>
        <button id="followButton">Follow Me</button>
    </div>
</body>
</html>`,
            css: `body {
    font-family: Arial, sans-serif;
    background: #e0f2fe;
    min-height: 100vh;
    display: grid;
    place-items: center;
}

.profile {
    background: white;
    padding: 35px;
    border-radius: 20px;
    text-align: center;
    max-width: 400px;
    box-shadow: 0 10px 30px #0001;
}

.avatar {
    width: 90px;
    height: 90px;
    margin: auto;
    display: grid;
    place-items: center;
    background: #0d9488;
    color: white;
    border-radius: 50%;
    font-size: 28px;
}

button {
    background: #0d9488;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 12px 20px;
    cursor: pointer;
}`,
            js: `const button = document.getElementById("followButton");

button.addEventListener("click", function () {
    button.textContent = "Following!";
    console.log("You are now following this profile.");
});`
        },

        counter: {
            html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Counter App</title>
</head>
<body>
    <div class="counter">
        <h1>Counter App</h1>
        <div id="count">0</div>
        <button id="decrease">-</button>
        <button id="reset">Reset</button>
        <button id="increase">+</button>
    </div>
</body>
</html>`,
            css: `body {
    font-family: Arial, sans-serif;
    min-height: 100vh;
    display: grid;
    place-items: center;
    background: #f1f5f9;
}

.counter {
    text-align: center;
    padding: 35px;
    background: white;
    border-radius: 16px;
    box-shadow: 0 8px 30px #0001;
}

#count {
    font-size: 60px;
    font-weight: bold;
    margin: 25px;
}

button {
    padding: 12px 20px;
    margin: 4px;
    border: none;
    border-radius: 8px;
    background: #0d9488;
    color: white;
    cursor: pointer;
}`,
            js: `let count = 0;

const display = document.getElementById("count");

document.getElementById("increase").addEventListener("click", function () {
    count++;
    display.textContent = count;
});

document.getElementById("decrease").addEventListener("click", function () {
    count--;
    display.textContent = count;
});

document.getElementById("reset").addEventListener("click", function () {
    count = 0;
    display.textContent = count;
});`
        },

        product: {
            html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product Card</title>
</head>
<body>
    <article class="product">
        <div class="product-image">Product Image</div>
        <h1>Smart Watch</h1>
        <p>A modern smartwatch for everyday use.</p>
        <strong>$49.99</strong>
        <button id="buyButton">Add to Cart</button>
        <p id="status"></p>
    </article>
</body>
</html>`,
            css: `body {
    font-family: Arial, sans-serif;
    min-height: 100vh;
    display: grid;
    place-items: center;
    background: #f8fafc;
}

.product {
    width: 280px;
    padding: 20px;
    border-radius: 16px;
    background: white;
    box-shadow: 0 8px 30px #0001;
}

.product-image {
    height: 150px;
    background: #ccfbf1;
    display: grid;
    place-items: center;
    border-radius: 10px;
}

strong {
    display: block;
    margin: 15px 0;
    font-size: 24px;
    color: #0d9488;
}

button {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 8px;
    background: #0d9488;
    color: white;
    cursor: pointer;
}`,
            js: `const buyButton = document.getElementById("buyButton");
const status = document.getElementById("status");

buyButton.addEventListener("click", function () {
    status.textContent = "Product added to cart!";
    console.log("Product added to cart.");
});`
        }
    };

    function loadProject(name) {
        const project = PROJECTS[name];

        if (!project) {
            showToast("Project not found.", "error");
            return;
        }

        const confirmed = window.confirm(
            "Load this project? Your current editor content will be replaced."
        );

        if (!confirmed) {
            return;
        }

        state.html = project.html;
        state.css = project.css;
        state.js = project.js;

        ["html", "css", "js"].forEach(file => {
            const editor = findEditor(file);

            if (editor) {
                editor.value = state[file];
            }

            if (
                state.monacoReady &&
                state.models &&
                state.models[file]
            ) {
                state.models[file].setValue(state[file]);
            }
        });

        switchFile("html");
        saveAll();
        updateEditorStats();

        showSection("playground");

        showToast("Project loaded successfully.", "success");
    }

    /* ======================================================
       17. EVENT DELEGATION
       ====================================================== */

    function initializeButtons() {
        document.addEventListener("click", function (event) {
            const button = event.target.closest("button, [role='button']");

            if (!button) {
                return;
            }

            if (button.matches("[data-run-code], #runCode, #run-code, .run-code")) {
                event.preventDefault();
                runCode();
                return;
            }

            if (button.matches("[data-reset-code], #resetCode, #reset-code")) {
                event.preventDefault();
                resetCode();
                return;
            }

            if (button.matches("[data-download-html]")) {
                event.preventDefault();
                downloadHTML();
                return;
            }

            if (button.matches("[data-download-css]")) {
                event.preventDefault();
                downloadCSS();
                return;
            }

            if (button.matches("[data-download-js]")) {
                event.preventDefault();
                downloadJS();
                return;
            }

            if (button.matches("[data-download-project], #downloadProject")) {
                event.preventDefault();
                downloadProject();
                return;
            }

            if (button.matches("[data-clear-console], #clearConsole, #clear-console")) {
                event.preventDefault();
                clearConsole();
                return;
            }

            if (button.matches("[data-theme-toggle], #themeToggle, #theme-toggle")) {
                event.preventDefault();
                toggleTheme();
                return;
            }

            if (button.matches("[data-reset-progress]")) {
                event.preventDefault();
                resetProgress();
                return;
            }

            if (button.matches("[data-complete-lesson], [data-lesson-complete], .complete-lesson")) {
                event.preventDefault();

                markLessonCompleted(getLessonId(button));
                return;
            }

            if (button.matches("[data-load-project]")) {
                event.preventDefault();

                loadProject(button.dataset.loadProject);
                return;
            }

            if (button.matches("[data-file-tab], [data-editor-tab], .file-tab")) {
                event.preventDefault();

                const file = (
                    button.dataset.fileTab ||
                    button.dataset.editorTab ||
                    button.dataset.file ||
                    ""
                ).toLowerCase();

                switchFile(file);
            }
        });
    }

    /* ======================================================
       18. GLOBAL ERROR HANDLING
       ====================================================== */

    function initializeGlobalErrors() {
        window.addEventListener("error", function (event) {
            if (
                event.filename &&
                event.filename.includes("codemasr")
            ) {
                console.error(
                    "CodeMasr application error:",
                    event.message
                );
            }
        });

        window.addEventListener("unhandledrejection", function (event) {
            console.error(
                "Unhandled application promise:",
                event.reason
            );
        });
    }

    /* ======================================================
       19. INITIALIZE EVERYTHING
       ====================================================== */

    function init() {
        if (state.initialized) {
            return;
        }

        state.initialized = true;

        initializeTheme();
        initializeEditors();
        initializeConsoleBridge();
        initializeNavigation();
        initializeSearch();
        initializeButtons();
        initializeGlobalErrors();
        initializeMonaco();

        updateDashboard();
        updateLessonButtons();

        console.log("CodeMasr initialized successfully.");

        const preview = findPreview();

        if (preview) {
            runCode();
        }
    }

    /* ======================================================
       20. PUBLIC METHODS
       ====================================================== */

    return {
        init,
        runCode,
        resetCode,
        switchFile,
        showSection,
        toggleTheme,
        markLessonCompleted,
        resetProgress,
        downloadHTML,
        downloadCSS,
        downloadJS,
        downloadProject,
        loadProject,
        updateDashboard,
        explainError
    };

})();
