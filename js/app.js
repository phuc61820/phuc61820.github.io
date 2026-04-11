/**
 * GAME HUB - Main Application
 * Pure JavaScript (No React/Babel)
 * Phuc61820 Game Collection
 */

// State
let currentCategory = 'all';
let searchQuery = '';
let activeTag = '';

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
        <img src="img/avatar.jpg" alt="Avatar" class="author-avatar" onerror="this.outerHTML='<div class=\\'author-avatar-placeholder\\'>👦</div>'">
        <div class="author-info">
          <h2>Tiến Phúc</h2>
          <p>Lập trình viên nhí yêu thích game và công nghệ</p>
          <div class="author-journey">
            <span class="journey-tag">🎮 Scratch</span>
            <span class="journey-tag">🤖 Micro:bit</span>
            <span class="journey-tag">💻 VS Code</span>
          </div>
        </div>
      </div>

      <!-- Header -->
      <div class="hub-header">
        <div class="hub-icon">🎮</div>
        <h1 class="hub-title">GAME HUB</h1>
        <p class="hub-subtitle">${GAMES.length} trò chơi • Chọn game bạn muốn</p>
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
        ${filteredGames.length === GAMES.length ? '' : `Tìm thấy ${filteredGames.length} game`}
      </div>

      <!-- Games Grid -->
      <div class="games-grid" id="gamesGrid">
        ${filteredGames.length > 0 ? filteredGames.map(game => `
          <a href="games/${game.file}" class="game-card" style="background: ${game.bg}; border-color: ${game.border}33;">
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
        <span class="version-badge">v3.3</span>
        ${GAMES.length} games • Made with ❤️ by Tiến Phúc
      </div>
    </div>
  `;

  // Add event listeners
  document.getElementById('searchInput').addEventListener('input', (e) => {
    searchQuery = e.target.value;
    activeTag = '';
    updateGamesGrid();
  });
}

// Get filtered games considering category, search, and tag
function getFilteredGames() {
  let results = currentCategory === 'all' ? [...GAMES] : GAMES.filter(g => g.category === currentCategory);
  if (searchQuery) {
    const q = searchQuery.toLowerCase().trim();
    results = results.filter(game =>
      game.name.toLowerCase().includes(q) ||
      game.desc.toLowerCase().includes(q) ||
      (game.tags && game.tags.some(t => t.toLowerCase().includes(q)))
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
    resultsCount.textContent = filteredGames.length === GAMES.length ? '' : `Tìm thấy ${filteredGames.length} game`;
  }

  // Update tag buttons
  document.querySelectorAll('.tag-btn').forEach(btn => {
    const tag = btn.textContent.trim().replace('#', '');
    btn.classList.toggle('active', tag === activeTag);
  });

  if (filteredGames.length > 0) {
    gamesGrid.innerHTML = filteredGames.map(game => `
      <a href="games/${game.file}" class="game-card" style="background: ${game.bg}; border-color: ${game.border}33;">
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
