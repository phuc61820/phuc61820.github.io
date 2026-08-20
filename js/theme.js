/**
 * GAME HUB - Shared Theme Manager
 * Load in <head> — applies theme before first paint (no flash).
 * Button #themeToggle is hardcoded in each HTML file.
 */

(function () {
  var STORAGE_KEY = 'gameHubLightMode';
  var isGame = window.location.pathname.includes('/games/');

  function isLightMode() {
    return localStorage.getItem(STORAGE_KEY) === 'true';
  }

  function applyTheme(light) {
    document.documentElement.classList.toggle('light-mode', light);
    if (document.body) {
      document.body.classList.toggle('light-mode', light);
      // Override inline body background directly so game CSS doesn't win
      if (isGame) {
        document.body.style.background = light
          ? 'linear-gradient(160deg, #f0f4ff, #e8edf8)'
          : '';
      }
    }
    var btn = document.getElementById('themeToggle');
    if (btn) {
      btn.textContent = light ? '🌙' : '☀️';
      btn.title = light ? 'Chuyển tối' : 'Chuyển sáng';
    }
  }

  window.toggleMode = function () {
    var next = !isLightMode();
    localStorage.setItem(STORAGE_KEY, String(next));
    applyTheme(next);
  };

  // Inject CSS once into <head>
  var style = document.createElement('style');
  style.textContent = [
    '#themeToggle {',
    '  position: fixed; top: 12px; right: 12px; z-index: 99999;',
    '  width: 40px; height: 40px; border-radius: 50%;',
    '  border: 2px solid rgba(255,255,255,0.25);',
    '  background: rgba(30,30,50,0.75);',
    '  backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);',
    '  font-size: 18px; line-height: 1; cursor: pointer;',
    '  display: flex; align-items: center; justify-content: center;',
    '  box-shadow: 0 2px 12px rgba(0,0,0,0.4);',
    '  transition: transform 0.15s;',
    '}',
    '#themeToggle:hover { transform: scale(1.12); }',
    'body.light-mode #themeToggle {',
    '  border-color: rgba(0,0,0,0.18);',
    '  background: rgba(255,255,255,0.9);',
    '  box-shadow: 0 2px 12px rgba(0,0,0,0.15);',
    '}',

    /* Game light mode — override dark inline styles on React elements */
    isGame ? [
      /* containers / panels with dark bg */
      'body.light-mode [style*="background: #0"],',
      'body.light-mode [style*="background:#0"],',
      'body.light-mode [style*="background: #1"],',
      'body.light-mode [style*="background:#1"],',
      'body.light-mode [style*="background: #2"],',
      'body.light-mode [style*="background:#2"],',
      'body.light-mode [style*="background: rgba(0,0,0"],',
      'body.light-mode [style*="background:rgba(0,0,0"],',
      'body.light-mode [style*="background: linear-gradient"] {',
      '  background: rgba(255,255,255,0.8) !important;',
      '  color: #1e293b !important;',
      '}',
      /* white / light text → dark */
      'body.light-mode [style*="color: #fff"],',
      'body.light-mode [style*="color:#fff"],',
      'body.light-mode [style*="color: white"],',
      'body.light-mode [style*="color:white"],',
      'body.light-mode [style*="color: #e2e8f0"],',
      'body.light-mode [style*="color: #f1f5f9"],',
      'body.light-mode [style*="color: #f8fafc"],',
      'body.light-mode [style*="color: #94a3b8"],',
      'body.light-mode [style*="color: #64748b"],',
      'body.light-mode [style*="color: #cbd5e1"] {',
      '  color: #334155 !important;',
      '}',
      /* light borders → darker */
      'body.light-mode [style*="border: 1px solid rgba(255,255,255"],',
      'body.light-mode [style*="border:1px solid rgba(255,255,255"],',
      'body.light-mode [style*="borderColor: rgba(255,255,255"] {',
      '  border-color: rgba(0,0,0,0.15) !important;',
      '}',
    ].join('\n') : '',
  ].join('\n');
  (document.head || document.getElementsByTagName('head')[0]).appendChild(style);

  // Apply to <html> immediately (body may not exist yet)
  document.documentElement.classList.toggle('light-mode', isLightMode());

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      applyTheme(isLightMode());
    });
  } else {
    applyTheme(isLightMode());
  }
})();
