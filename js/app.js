/**
 * GAME HUB - Main Application
 * Pure JavaScript (No React/Babel)
 * Phuc61820 Game Collection
 */

// State
let currentCategory = 'all';
let searchQuery = '';
let activeTag = '';
let hubUnlocked = localStorage.getItem('gameHubUnlocked') === 'true';  // mở khóa 3 game bí mật
let showHubPwdModal = false;

// === Bí mật: 5 câu hỏi về tác giả để mở 3 game ẩn (vẫn giữ password cũ làm cửa sau) ===
const HUB_SECRET_PASSWORD = '1020304';
const HUB_QUIZ = [
  { q: 'Họ của tác giả?',                    a: ['nguyen'] },
  { q: 'Bộ truyện tác giả yêu thích nhất?',  a: ['harry potter', 'harrypotter'] },
  { q: 'Màu tác giả thích nhất?',            a: ['den', 'black'] },
  { q: 'Tác giả sinh ngày tháng năm nào?',   a: ['20/8/2016', '20/08/2016', '20-8-2016', '20-08-2016', '2082016', '20082016'] },
  { q: 'Trò chơi bí ẩn nhất?',               a: ['san khung long', 'sankhunglong', 'hunter', 'sankhunglongtycoon'] },
];

// Tự mở khóa khi tên người chơi là "Tiến Phúc" (không phân biệt hoa/thường, dấu)
function normalizeName(s) {
  return (s || '')
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/đ/g, 'd').replace(/Đ/g, 'D')
    .toLowerCase().trim().replace(/\s+/g, ' ');
}
function isOwner() {
  var name = (window.GameHubAuth && GameHubAuth.getName && GameHubAuth.getName())
    || localStorage.getItem('gamehub_player_name') || '';
  return normalizeName(name) === 'tien phuc';
}
// Trạng thái mở khóa hiệu lực = mở bằng password HOẶC là chủ vườn
function isUnlocked() {
  return hubUnlocked || isOwner();
}

window.openHubPwdModal = function() {
  showHubPwdModal = true;
  render();
};
window.closeHubPwdModal = function() {
  showHubPwdModal = false;
  render();
};
window.tryHubUnlock = function() {
  // Kiểm tra 5 câu trả lời quiz
  const wrongs = [];
  let allCorrect = true;
  // Cho phép bypass bằng password cũ ở câu 1 (cửa sau)
  const q1 = document.getElementById('hubQuizInput0');
  if (q1 && q1.value.trim() === HUB_SECRET_PASSWORD) {
    hubUnlocked = true;
    localStorage.setItem('gameHubUnlocked', 'true');
    showHubPwdModal = false;
    render();
    return;
  }
  for (let i = 0; i < HUB_QUIZ.length; i++) {
    const inp = document.getElementById('hubQuizInput' + i);
    if (!inp) { allCorrect = false; break; }
    const got = normalizeName(inp.value);
    const ok = HUB_QUIZ[i].a.some(ans => normalizeName(ans) === got);
    if (!ok) { allCorrect = false; wrongs.push(i); }
  }
  if (allCorrect) {
    hubUnlocked = true;
    localStorage.setItem('gameHubUnlocked', 'true');
    showHubPwdModal = false;
    render();
  } else {
    const err = document.getElementById('hubPwdErr');
    if (err) {
      err.textContent = '❌ Sai ' + wrongs.length + '/' + HUB_QUIZ.length + ' câu — thử lại đi!';
      err.style.display = 'block';
    }
    wrongs.forEach(i => {
      const inp = document.getElementById('hubQuizInput' + i);
      if (inp) {
        inp.style.borderColor = '#ef4444';
        setTimeout(() => { if (inp) inp.style.borderColor = ''; }, 1500);
      }
    });
    setTimeout(() => { if (err) err.style.display = 'none'; }, 1800);
  }
};
window.hubLock = function() {
  if (confirm('Khóa lại 3 game bí mật?')) {
    hubUnlocked = false;
    localStorage.removeItem('gameHubUnlocked');
    render();
  }
};

// Light/Dark mode — handled by js/theme.js (shared with games)

// DOM Elements
const app = document.getElementById('app');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  render();
});

// Main render function
function render() {
  renderHub();
  // Cập nhật lại các widget bên ngoài app.js sau khi DOM được tạo lại
  if (window.GameHubStats) window.GameHubStats.refresh();
  if (window.GameHubAuth && window.GameHubAuth.refreshGreeting) window.GameHubAuth.refreshGreeting();
}

// Render Hub
function renderHub() {
  const filteredGames = getFilteredGames();
  const categories = getCategoryList();
  const allTags = getAllTags();

  app.innerHTML = `
    <div class="hub-container">
      <!-- Author Section -->
      <div class="author-section">
        <img src="img/avatar.jpg" alt="Avatar" class="author-avatar" onclick="openHubPwdModal()" style="cursor:pointer" title="Bí mật..." onerror="this.outerHTML='<div class=\\'author-avatar-placeholder\\' onclick=\\'openHubPwdModal()\\' style=\\'cursor:pointer\\'>👦</div>'">
        <div class="author-info">
          <h2>Tiến Phúc</h2>
          <p>Lập trình viên nhí yêu thích game và công nghệ</p>
          <div class="author-journey">
            <span class="journey-tag">🎮 Scratch</span>
            <span class="journey-tag">🤖 Micro:bit</span>
            <span class="journey-tag">💻 VS Code</span>
          </div>
        </div>
        <div id="playerGreeting" class="player-greeting" title="Click để đổi tên hoặc đăng xuất"></div>
      </div>

      <!-- Header -->
      <div class="hub-header">
        <div class="hub-icon">🎮</div>
        <h1 class="hub-title">GAME HUB</h1>
        <p class="hub-subtitle">${getVisibleGames().length} trò chơi${isUnlocked() ? ' 🔓' : ''} • Chọn game bạn muốn</p>
      </div>

      <!-- Search -->
      <div class="search-bar">
        <input
          type="text"
          class="search-input"
          id="searchInput"
          placeholder="🔍 Tìm game theo tên, mô tả hoặc tag..."
          value="${searchQuery}"
        />
      </div>

      <!-- Category Tags -->
      <div class="category-tags">
        ${categories.map(cat => `
          <button
            class="category-tag ${currentCategory === cat.id ? 'active' : ''}"
            onclick="selectCategory('${cat.id}')"
          >
            ${cat.icon} ${cat.name}
          </button>
        `).join('')}
      </div>

      <!-- Tag Filter -->
      <div class="tag-filter">
        <span class="tag-filter-label">Tags:</span>
        ${allTags.map(tag => `
          <button
            class="tag-btn ${activeTag === tag ? 'active' : ''}"
            onclick="selectTag('${tag}')"
          >
            #${tag}
          </button>
        `).join('')}
      </div>

      <!-- Results count -->
      <div class="results-count">
        ${filteredGames.length === getVisibleGames().length ? '' : `Tìm thấy ${filteredGames.length} game`}
      </div>

      <!-- Games Grid -->
      <div class="games-grid" id="gamesGrid">
        ${filteredGames.length > 0 ? filteredGames.map(game => `
          <a href="games/${game.file}" target="_blank" rel="noopener" class="game-card" style="background: ${game.bg}; border-color: ${game.border}33;">
            <span class="game-icon">${game.icon}</span>
            <p class="game-name">${game.name}</p>
            <p class="game-desc">${game.desc}</p>
            <div class="game-tags">
              ${(game.tags || []).map(t => `<span class="game-tag">#${t}</span>`).join('')}
            </div>
            <p class="game-category">${getCategoryIcon(game.category)} ${getCategoryName(game.category)}</p>
          </a>
        `).join('') : `
          <div class="no-results">
            <div class="no-results-icon">🔍</div>
            <h3>Không tìm thấy game</h3>
            <p>Thử tìm với từ khóa khác</p>
          </div>
        `}
      </div>

      <!-- Footer -->
      <div class="hub-footer">
        <div class="footer-left">
          <span class="version-badge">v5.0</span>
          ${getVisibleGames().length} games${isUnlocked() ? (hubUnlocked && !isOwner() ? ' <span style="color:#a78bfa;cursor:pointer" onclick="hubLock()" title="Khóa lại">🔓</span>' : ' <span style="color:#fde047" title="Chào chủ vườn!">👑</span>') : ''} • Made with ❤️ by Tiến Phúc
        </div>
        <div class="footer-right" id="visitorCount">👥 ...</div>
      </div>

      ${showHubPwdModal ? `
        <div class="hub-pwd-overlay" onclick="closeHubPwdModal()" style="
          position:fixed; inset:0; background:rgba(0,0,0,0.8);
          display:flex; align-items:center; justify-content:center;
          padding:20px; z-index:9999;
        ">
          <div onclick="event.stopPropagation()" style="
            background:linear-gradient(160deg,#1e1b4b,#4c1d95);
            padding:24px; border-radius:20px; max-width:420px; width:100%;
            max-height:90vh; overflow-y:auto;
            border:2px solid #fde047;
            box-shadow:0 0 32px rgba(253,224,71,0.4);
            color:#fff; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          ">
            <div style="text-align:center; font-size:44px">🧙‍♂️</div>
            <h3 style="text-align:center; margin-top:6px">Thử Thách Tác Giả</h3>
            <p style="text-align:center; font-size:12px; opacity:0.75; margin-top:4px; margin-bottom:14px">
              Trả lời đúng cả 5 câu để mở 3 game bí mật
            </p>
            ${HUB_QUIZ.map((q, i) => `
              <div style="margin-bottom:10px">
                <div style="font-size:12px; opacity:0.9; margin-bottom:4px">
                  <span style="color:#fde047; font-weight:700">${i + 1}.</span> ${q.q}
                </div>
                <input type="text" id="hubQuizInput${i}" maxlength="40"
                  ${i === 0 ? 'autofocus' : ''}
                  onkeydown="if(event.key==='Enter')tryHubUnlock()"
                  placeholder="Câu trả lời..."
                  style="
                  width:100%; padding:9px 12px; border-radius:8px;
                  border:2px solid rgba(254,243,199,0.25);
                  background:rgba(0,0,0,0.4); color:#fff;
                  font-size:14px; outline:none; font-family:inherit;
                ">
              </div>
            `).join('')}
            <div id="hubPwdErr" style="display:none; margin-top:6px; font-size:12px; color:#fca5a5; text-align:center; font-weight:700">
              ❌ Sai đáp án!
            </div>
            <div style="display:flex; gap:10px; margin-top:14px">
              <button onclick="closeHubPwdModal()" style="
                flex:1; padding:11px; border-radius:10px; border:none;
                background:rgba(0,0,0,0.5); color:#fff; font-weight:700;
                font-size:14px; cursor:pointer; font-family:inherit;
              ">Hủy</button>
              <button onclick="tryHubUnlock()" style="
                flex:1; padding:11px; border-radius:10px; border:none;
                background:#fde047; color:#451a03; font-weight:700;
                font-size:14px; cursor:pointer; font-family:inherit;
              ">🗝️ Mở khóa</button>
            </div>
          </div>
        </div>
      ` : ''}
    </div>
  `;

  // Add event listeners
  document.getElementById('searchInput').addEventListener('input', (e) => {
    searchQuery = e.target.value;
    activeTag = '';
    updateGamesGrid();
  });
}

// Bỏ dấu tiếng Việt + lowercase để search không phân biệt dấu
function normalizeVi(s) {
  return (s || '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/đ/g, 'd').replace(/Đ/g, 'D')
    .toLowerCase().trim();
}

// Lọc bỏ game bí mật khi chưa mở khóa
function getVisibleGames() {
  return isUnlocked() ? GAMES : GAMES.filter(g => !g.hidden);
}

// Get filtered games considering category, search, and tag
function getFilteredGames() {
  const pool = getVisibleGames();
  let results = currentCategory === 'all' ? [...pool] : pool.filter(g => g.category === currentCategory);
  if (searchQuery) {
    const q = normalizeVi(searchQuery);
    results = results.filter(game =>
      normalizeVi(game.name).includes(q) ||
      normalizeVi(game.desc).includes(q) ||
      normalizeVi((game.file || '').replace(/[-_.]/g, ' ')).includes(q) || // ['tsunami-zoo.html'] → tìm 'tsunami' / 'zoo'
      normalizeVi(game.id || '').includes(q) ||
      (game.tags && game.tags.some(t => normalizeVi(t).includes(q)))
    );
  }
  if (activeTag) {
    results = results.filter(game => game.tags && game.tags.includes(activeTag));
  }
  return results;
}

// Update games grid without full re-render
function updateGamesGrid() {
  const filteredGames = getFilteredGames();
  const gamesGrid = document.getElementById('gamesGrid');

  // Update results count
  const resultsCount = document.querySelector('.results-count');
  if (resultsCount) {
    resultsCount.textContent = filteredGames.length === getVisibleGames().length ? '' : `Tìm thấy ${filteredGames.length} game`;
  }

  // Update tag buttons
  document.querySelectorAll('.tag-btn').forEach(btn => {
    const tag = btn.textContent.trim().replace('#', '');
    btn.classList.toggle('active', tag === activeTag);
  });

  if (filteredGames.length > 0) {
    gamesGrid.innerHTML = filteredGames.map(game => `
      <a href="games/${game.file}" target="_blank" rel="noopener" class="game-card" style="background: ${game.bg}; border-color: ${game.border}33;">
        <span class="game-icon">${game.icon}</span>
        <p class="game-name">${game.name}</p>
        <p class="game-desc">${game.desc}</p>
        <div class="game-tags">
          ${(game.tags || []).map(t => `<span class="game-tag">#${t}</span>`).join('')}
        </div>
        <p class="game-category">${getCategoryIcon(game.category)} ${getCategoryName(game.category)}</p>
      </a>
    `).join('');
  } else {
    gamesGrid.innerHTML = `
      <div class="no-results">
        <div class="no-results-icon">🔍</div>
        <h3>Không tìm thấy game</h3>
        <p>Thử tìm với từ khóa khác</p>
      </div>
    `;
  }
}

// Select category
function selectCategory(categoryId) {
  currentCategory = categoryId;
  render();
}

// Select tag
function selectTag(tag) {
  activeTag = activeTag === tag ? '' : tag;
  searchQuery = '';
  updateGamesGrid();
}

// Get category name
function getCategoryName(categoryId) {
  const cat = Object.values(CATEGORIES).find(c => c.id === categoryId);
  return cat ? cat.name : '';
}

// Get category icon
function getCategoryIcon(categoryId) {
  const cat = Object.values(CATEGORIES).find(c => c.id === categoryId);
  return cat ? cat.icon : '🎮';
}
