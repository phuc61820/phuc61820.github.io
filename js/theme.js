/**
 * GAME HUB - Shared Theme Manager
 * Runs immediately on load to prevent flash of wrong theme.
 * Works on both hub (index.html) and individual game pages.
 */

(function () {
  var STORAGE_KEY = 'gameHubLightMode';
  var isGame = window.location.pathname.includes('/games/');

  function isLightMode() {
    return localStorage.getItem(STORAGE_KEY) === 'true';
  }

  // --- Inject all CSS (runs once, in <head>) ---
  function injectCSS() {
    if (document.getElementById('theme-style')) return;
    var style = document.createElement('style');
    style.id = 'theme-style';
    style.textContent = [
      /* Toggle button — always visible, fixed position */
      '#themeToggle {',
      '  position: fixed;',
      '  top: 12px;',
      '  right: 12px;',
      '  z-index: 99999;',
      '  width: 40px;',
      '  height: 40px;',
      '  border-radius: 50%;',
      '  border: 2px solid rgba(255,255,255,0.25);',
      '  background: rgba(30,30,50,0.7);',
      '  backdrop-filter: blur(8px);',
      '  -webkit-backdrop-filter: blur(8px);',
      '  font-size: 18px;',
      '  line-height: 1;',
      '  cursor: pointer;',
      '  display: flex;',
      '  align-items: center;',
      '  justify-content: center;',
      '  box-shadow: 0 2px 12px rgba(0,0,0,0.4);',
      '  transition: transform 0.15s, border-color 0.2s;',
      '  pointer-events: auto;',
      '}',
      '#themeToggle:hover { transform: scale(1.12); border-color: rgba(255,255,255,0.6); }',
      'body.light-mode #themeToggle {',
      '  border-color: rgba(0,0,0,0.18);',
      '  background: rgba(255,255,255,0.9);',
      '  box-shadow: 0 2px 12px rgba(0,0,0,0.15);',
      '}',

      /* Hub light mode */
      'body.light-mode {',
      '  background: linear-gradient(160deg, #f0f4ff, #e8edf8) !important;',
      '  color: #1e293b !important;',
      '}',

      /* Game light mode — body background */
      isGame ? [
        'body.light-mode [style*="background: #0"],',
        'body.light-mode [style*="background:#0"],',
        'body.light-mode [style*="background: rgba(0,0,0"],',
        'body.light-mode [style*="background:rgba(0,0,0"] {',
        '  background: rgba(255,255,255,0.75) !important;',
        '  color: #1e293b !important;',
        '}',
        'body.light-mode [style*="color: #fff"],',
        'body.light-mode [style*="color:#fff"],',
        'body.light-mode [style*="color: white"],',
        'body.light-mode [style*="color:white"],',
        'body.light-mode [style*="color: #e2e8f0"],',
        'body.light-mode [style*="color: #f1f5f9"],',
        'body.light-mode [style*="color: #94a3b8"],',
        'body.light-mode [style*="color: #cbd5e1"] {',
        '  color: #334155 !important;',
        '}',
        'body.light-mode [style*="border: 1px solid rgba(255,255,255"],',
        'body.light-mode [style*="border:1px solid rgba(255,255,255"] {',
        '  border-color: rgba(0,0,0,0.15) !important;',
        '}',
      ].join('\n') : '',
    ].join('\n');
    // Insert as first child of <head> so it can be overridden
    var head = document.head || document.getElementsByTagName('head')[0];
    head.insertBefore(style, head.firstChild);
  }

  // --- Apply theme class + update button label ---
  function applyTheme(light) {
    document.documentElement.classList.toggle('light-mode', light);
    document.body.classList.toggle('light-mode', light);
    var btn = document.getElementById('themeToggle');
    if (btn) {
      btn.textContent = light ? '🌙' : '☀️';
      btn.title = light ? 'Chuyển tối' : 'Chuyển sáng';
    }
  }

  // --- Toggle and save ---
  window.toggleMode = function () {
    var next = !isLightMode();
    localStorage.setItem(STORAGE_KEY, String(next));
    applyTheme(next);
  };

  // --- Inject toggle button (appended to <body>, survives innerHTML rewrites of #app) ---
  function injectToggleButton() {
    if (document.getElementById('themeToggle')) return;
    var btn = document.createElement('button');
    btn.id = 'themeToggle';
    btn.onclick = window.toggleMode;
    var light = isLightMode();
    btn.textContent = light ? '🌙' : '☀️';
    btn.title = light ? 'Chuyển tối' : 'Chuyển sáng';
    document.body.appendChild(btn);
  }

  // --- Re-inject if lost (app.js rewrites innerHTML of #app, body stays) ---
  function ensureButton() {
    if (!document.getElementById('themeToggle')) {
      injectToggleButton();
    }
  }

  // Observe #app mutations so button survives re-renders
  function watchApp() {
    var target = document.getElementById('app') || document.body;
    if (!window.MutationObserver) return;
    var observer = new MutationObserver(ensureButton);
    observer.observe(target, { childList: true, subtree: false });
  }

  // --- Boot sequence ---
  injectCSS();
  applyTheme(isLightMode());

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      injectToggleButton();
      watchApp();
    });
  } else {
    injectToggleButton();
    watchApp();
  }
})();
