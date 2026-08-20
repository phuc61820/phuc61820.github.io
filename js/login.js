/**
 * Đăng nhập đơn giản — lưu tên người chơi vào localStorage
 */
(function() {
  var STORAGE_KEY = 'gamehub_player_name';

  // Lấy tên người chơi đã lưu (nếu có)
  function getPlayerName() {
    return localStorage.getItem(STORAGE_KEY) || '';
  }

  // Lưu tên người chơi
  function setPlayerName(name) {
    name = (name || '').trim();
    if (!name) return false;
    localStorage.setItem(STORAGE_KEY, name);
    return true;
  }

  // Xóa tên (đăng xuất)
  function clearPlayerName() {
    localStorage.removeItem(STORAGE_KEY);
  }

  // Hiển thị modal nhập tên
  function showLoginModal(currentName) {
    // Xóa modal cũ nếu có
    var old = document.getElementById('loginModal');
    if (old) old.remove();

    var modal = document.createElement('div');
    modal.id = 'loginModal';
    modal.className = 'login-modal-overlay';
    modal.innerHTML =
      '<div class="login-modal">' +
        '<div class="login-icon">🎮</div>' +
        '<h2>' + (currentName ? 'Đổi tên người chơi' : 'Chào mừng bạn!') + '</h2>' +
        '<p>' + (currentName ? 'Nhập tên mới của bạn:' : 'Bạn tên gì? Nhập để bắt đầu chơi nhé!') + '</p>' +
        '<input type="text" id="playerNameInput" maxlength="20" placeholder="Tên của bạn..." value="' + (currentName || '') + '">' +
        '<div class="login-buttons">' +
          (currentName ? '<button class="login-btn-secondary" id="logoutBtn">Đăng xuất</button>' : '') +
          '<button class="login-btn-primary" id="saveNameBtn">' + (currentName ? 'Lưu' : 'Bắt đầu') + '</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(modal);

    var input = document.getElementById('playerNameInput');
    input.focus();
    input.select();

    function save() {
      var val = input.value.trim();
      if (!val) {
        input.style.borderColor = '#ef4444';
        input.placeholder = 'Vui lòng nhập tên!';
        return;
      }
      setPlayerName(val);
      modal.remove();
      updateGreeting();
      // Re-render hub để áp dụng auto-unlock theo tên (Tiến Phúc → mở 3 game ẩn)
      if (typeof window.render === 'function') window.render();
    }

    function logout() {
      clearPlayerName();
      modal.remove();
      updateGreeting();
      if (typeof window.render === 'function') window.render();
      // Hỏi tên lại sau 300ms cho mượt
      setTimeout(function() { showLoginModal(''); }, 300);
    }

    document.getElementById('saveNameBtn').addEventListener('click', save);
    var logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) logoutBtn.addEventListener('click', logout);

    input.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') save();
      if (e.key === 'Escape' && currentName) modal.remove();
    });
  }

  // Cập nhật chữ "Xin chào" trên header
  function updateGreeting() {
    var el = document.getElementById('playerGreeting');
    if (!el) return;
    var name = getPlayerName();
    if (name) {
      el.innerHTML = '👋 Xin chào, <strong>' + escapeHTML(name) + '</strong>';
      el.style.display = 'inline-flex';
    } else {
      el.innerHTML = '👤 Đăng nhập';
      el.style.display = 'inline-flex';
    }
  }

  function escapeHTML(s) {
    return s.replace(/[&<>"']/g, function(c) {
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];
    });
  }

  // Attach click handler cho greeting (chạy lại được sau re-render)
  function attachGreetingHandler() {
    var greeting = document.getElementById('playerGreeting');
    if (!greeting || greeting.dataset.bound === '1') return;
    greeting.dataset.bound = '1';
    greeting.addEventListener('click', function() {
      showLoginModal(getPlayerName());
    });
  }

  // Khởi tạo: hỏi tên lần đầu, attach click handler
  function init() {
    var greeting = document.getElementById('playerGreeting');
    if (!greeting) {
      setTimeout(init, 100);
      return;
    }

    attachGreetingHandler();
    updateGreeting();

    // Lần đầu vào trang chưa có tên → hiện modal
    if (!getPlayerName()) {
      setTimeout(function() { showLoginModal(''); }, 500);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose ra global để các game khác dùng được
  window.GameHubAuth = {
    getName: getPlayerName,
    setName: setPlayerName,
    logout: clearPlayerName,
    showLogin: showLoginModal,
    // Để app.js gọi lại sau khi re-render hub
    refreshGreeting: function() {
      attachGreetingHandler();
      updateGreeting();
    }
  };
})();
