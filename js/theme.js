/**
 * GAME HUB - Shared Theme Manager
 * Runs immediately on load to prevent flash of wrong theme.
 * Works on both hub (index.html) and individual game pages.
 */

(function () {
  var STORAGE_KEY = 'gameHubLightMode';
  var isGame = window.location.pathname.includes('/games/');

  // --- Apply theme to document ---
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
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  };

  function isLightMode() {
    return localStorage.getItem(STORAGE_KEY) === 'true';
  }

  // --- Inject CSS for light mode overrides (games only) ---
  function injectGameLightCSS() {
    if (!isGame) return;
    var style = document.createElement('style');
    style.id = 'theme-override';
    style.textContent = [
      /* body background override */
      'body.light-mode {',
      '  background: linear-gradient(160deg, #f0f4ff, #e8edf8) !important;',
      '  color: #1e293b !important;',
      '}',
      /* text in game containers */
      'body.light-mode * {',
      '  color: inherit;',
      '}',
      /* panels / cards with dark inline backgrounds */
      'body.light-mode [style*="background: #0"],',
      'body.light-mode [style*="background:#0"],',
      'body.light-mode [style*="background: rgba(0,0,0"],',
      'body.light-mode [style*="background:rgba(0,0,0"] {',
      '  background: rgba(255,255,255,0.75) !important;',
      '  color: #1e293b !important;',
      '}',
      /* white/light text on dark panels → dark text */
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
      /* borders */
      'body.light-mode [style*="border: 1px solid rgba(255,255,255"],',
      'body.light-mode [style*="border:1px solid rgba(255,255,255"] {',
      '  border-color: rgba(0,0,0,0.15) !important;',
      '}',
      /* Back button */
      'body.light-mode button[onClick*="onBack"],',
      'body.light-mode .back-btn {',
      '  background: rgba(0,0,0,0.06) !important;',
      '  border-color: rgba(0,0,0,0.15) !important;',
      '  color: #475569 !important;',
      '}',
      /* toggle button itself */
      '#themeToggle {',
      '  position: fixed;',
      '  top: 12px;',
      '  right: 12px;',
      '  z-index: 9999;',
      '  width: 40px;',
      '  height: 40px;',
      '  border-radius: 50%;',
      '  border: 2px solid rgba(255,255,255,0.2);',
      '  background: rgba(255,255,255,0.1);',
      '  backdrop-filter: blur(8px);',
      '  font-size: 18px;',
      '  cursor: pointer;',
      '  display: flex;',
      '  align-items: center;',
      '  justify-content: center;',
      '  box-shadow: 0 2px 12px rgba(0,0,0,0.3);',
      '  transition: transform 0.15s, border-color 0.2s;',
      '}',
      '#themeToggle:hover { transform: scale(1.1); border-color: rgba(255,255,255,0.5); }',
      'body.light-mode #themeToggle {',
      '  border-color: rgba(0,0,0,0.15);',
      '  background: rgba(255,255,255,0.85);',
      '  box-shadow: 0 2px 12px rgba(0,0,0,0.15);',
      '}',
    ].join('\n');
    document.head.appendChild(style);
  }

  // --- Inject toggle button into DOM ---
  function injectToggleButton() {
    if (document.getElementById('themeToggle')) return;
    var btn = document.createElement('button');
    btn.id = 'themeToggle';
    btn.onclick = window.toggleMode;
    btn.textContent = isLightMode() ? '🌙' : '☀️';
    btn.title = isLightMode() ? 'Chuyển tối' : 'Chuyển sáng';
    document.body.appendChild(btn);
  }

  // --- Run immediately (before paint) ---
  if (isGame) {
    injectGameLightCSS();
  }
  applyTheme(isLightMode());

  // --- After DOM ready: inject button ---
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectToggleButton);
  } else {
    injectToggleButton();
  }
})();
