/**
 * GAMES DATA - Metadata cho 23 game
 * Phuc61820 Game Collection
 */

const CATEGORIES = {
  ALL: { id: 'all', name: 'Tất cả', icon: '🎮' },
  ARCADE: { id: 'arcade', name: 'Arcade', icon: '👾' },
  TYCOON: { id: 'tycoon', name: 'Tycoon', icon: '🏭' },
  CLICKER: { id: 'clicker', name: 'Clicker', icon: '👆' },
  CARD: { id: 'card', name: 'Bài', icon: '🃏' },
  PUZZLE: { id: 'puzzle', name: 'Puzzle', icon: '🧩' },
  STRATEGY: { id: 'strategy', name: 'Chiến thuật', icon: '♟️' },
  SIMULATION: { id: 'simulation', name: 'Mô phỏng', icon: '🎲' }
};

const GAMES = [
  {
    id: 'fishing',
    name: 'Câu Cá Vạn Cân',
    icon: '🎣',
    desc: '125 map, 39 loài cá, thuyền viên, chiến đấu đêm...',
    category: 'simulation',
    tags: ['phiêu lưu', 'ngoài trời', 'thu thập'],
    bg: 'linear-gradient(135deg, #0c1929, #0a3060)',
    border: '#5eead4',
    file: 'fishing.html',
    featured: true
  },
  {
    id: 'snake',
    name: 'Rắn Săn Mồi',
    icon: '🐍',
    desc: 'Điều khiển rắn ăn mồi, không được đụng tường!',
    category: 'arcade',
    tags: ['kinh điển', 'phản xạ'],
    bg: 'linear-gradient(135deg, #14532d, #166534)',
    border: '#22c55e',
    file: 'snake.html'
  },
  {
    id: 'butterfly',
    name: 'Bắt Bướm',
    icon: '🦋',
    desc: 'Dùng lưới bắt bướm! Tránh bọ trừ điểm.',
    category: 'arcade',
    tags: ['phản xạ', 'dễ thương'],
    bg: 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
    border: '#93c5fd',
    file: 'butterfly.html'
  },
  {
    id: 'cards',
    name: 'Đánh Bài Tiến Lên',
    icon: '🃏',
    desc: 'Tiến lên đơn giản — đánh hết bài trước thắng!',
    category: 'card',
    tags: ['đối kháng', 'kinh điển'],
    bg: 'linear-gradient(135deg, #7c2d12, #dc2626)',
    border: '#fca5a5',
    file: 'cards.html'
  },
  {
    id: 'uno',
    name: 'UNO',
    icon: '🎴',
    desc: 'Đánh hết bài trước! Dùng lá đặc biệt, nhớ hô UNO!',
    category: 'card',
    tags: ['đối kháng', 'vui nhộn'],
    bg: 'linear-gradient(135deg, #1e1b4b, #3730a3)',
    border: '#818cf8',
    file: 'uno.html'
  },
  {
    id: 'animal',
    name: 'Mèo Vuông Gacha',
    icon: '🐱',
    desc: 'Bấm mèo lấy xu, mua trứng nhận thú! 7 độ hiếm siêu hiếm!',
    category: 'clicker',
    tags: ['gacha', 'thu thập', 'dễ thương'],
    bg: 'linear-gradient(135deg, #7c2d12, #c2410c)',
    border: '#fb923c',
    file: 'animal.html'
  },
  {
    id: 'tap',
    name: 'Bấm Đồ Vật',
    icon: '💎',
    desc: 'Bấm vào vật để lấy tiền! Trứng Vàng, Bạc, Kim Cương siêu hiếm!',
    category: 'clicker',
    tags: ['gacha', 'kiếm tiền'],
    bg: 'linear-gradient(135deg, #1c1c2e, #16213e)',
    border: '#c084fc',
    file: 'tap.html'
  },
  {
    id: 'math',
    name: 'Làm Toán Siêu Tốc',
    icon: '🧮',
    desc: 'Giải toán nhanh nhất có thể! Nhiều cấp độ, tăng dần khó!',
    category: 'puzzle',
    tags: ['học tập', 'tư duy'],
    bg: 'linear-gradient(135deg, #0f4c75, #1b6ca8)',
    border: '#38bdf8',
    file: 'math.html'
  },
  {
    id: 'cooking',
    name: 'Đầu Bếp Huyền Thoại',
    icon: '👨‍🍳',
    desc: 'Nấu món đúng công thức, phục vụ khách trước khi họ bỏ đi!',
    category: 'simulation',
    tags: ['quản lý', 'thời gian'],
    bg: 'linear-gradient(135deg, #78350f, #d97706)',
    border: '#fde68a',
    file: 'cooking.html'
  },
  {
    id: 'clicker',
    name: 'Bấm Vật Báu',
    icon: '🥚',
    desc: 'Bấm trứng, kim cương, vật hiếm để kiếm tiền! Càng hiếm càng giàu!',
    category: 'clicker',
    tags: ['gacha', 'thu thập'],
    bg: 'linear-gradient(135deg, #1c1237, #4c1d95)',
    border: '#c4b5fd',
    file: 'clicker.html'
  },
  {
    id: 'factory',
    name: 'Công Ty Vạn Năng',
    icon: '🏭',
    desc: 'Xây dây chuyền SX từ búa → robot → vũ khí hạt nhân!',
    category: 'tycoon',
    tags: ['xây dựng', 'sản xuất', 'nâng cấp'],
    bg: 'linear-gradient(135deg, #1c1917, #44403c)',
    border: '#a8a29e',
    file: 'factory.html'
  },
  {
    id: 'hotel',
    name: 'Khách Sạn Huyền Thoại',
    icon: '🏨',
    desc: 'Xây phòng, thuê nhân viên, đón khách VIP kiếm tiền tỷ!',
    category: 'tycoon',
    tags: ['quản lý', 'kinh doanh', 'nâng cấp'],
    bg: 'linear-gradient(135deg, #1e1b4b, #312e81)',
    border: '#a5b4fc',
    file: 'hotel.html'
  },
  {
    id: 'school',
    name: 'Trường Học Vũ Trụ',
    icon: '🏫',
    desc: 'Tuyển học sinh, thuê giáo viên, nâng cấp trường lên Đại Học!',
    category: 'tycoon',
    tags: ['quản lý', 'giáo dục', 'nâng cấp'],
    bg: 'linear-gradient(135deg, #1e3a5f, #1d4ed8)',
    border: '#93c5fd',
    file: 'school.html'
  },
  {
    id: 'chess',
    name: 'Cờ Vua',
    icon: '♟️',
    desc: 'Chơi cờ vua vs AI! 3 độ khó: Dễ, Trung, Khó.',
    category: 'strategy',
    tags: ['tư duy', 'đối kháng', 'kinh điển'],
    bg: 'linear-gradient(135deg, #1a1a1a, #3d3d3d)',
    border: '#e2e8f0',
    file: 'chess.html'
  },
  {
    id: 'racing',
    name: 'Đua Xe Siêu Tốc',
    icon: '🏎️',
    desc: 'Lái xe né chướng ngại vật, thu thập nitro, phá kỷ lục!',
    category: 'arcade',
    tags: ['tốc độ', 'phản xạ'],
    bg: 'linear-gradient(135deg, #1a0a00, #7c2d12)',
    border: '#fb923c',
    file: 'racing.html'
  },
  {
    id: 'bank',
    name: 'Ngân Hàng Tỷ Phú',
    icon: '🏦',
    desc: 'Cho vay tiền, thu lãi, mở chi nhánh, thống trị tài chính!',
    category: 'tycoon',
    tags: ['tài chính', 'kinh doanh', 'nâng cấp'],
    bg: 'linear-gradient(135deg, #0a1a0a, #052e16)',
    border: '#22c55e',
    file: 'bank.html'
  },
  {
    id: 'dino',
    name: 'Sở Thú Khủng Long',
    icon: '🦕',
    desc: 'Tìm trứng, ấp khủng long, xây chuồng, bán vé tham quan!',
    category: 'simulation',
    tags: ['thu thập', 'quản lý', 'dễ thương'],
    bg: 'linear-gradient(135deg, #1a0a00, #2d1810)',
    border: '#a3e635',
    file: 'dino.html'
  },
  {
    id: 'lego',
    name: 'Xếp Lego',
    icon: '🧱',
    desc: 'Đặt gạch Lego xây công trình! Càng hoành tráng càng nhiều điểm!',
    category: 'puzzle',
    tags: ['sáng tạo', 'xây dựng'],
    bg: 'linear-gradient(135deg, #1c0a2e, #3b0764)',
    border: '#f0abfc',
    file: 'lego.html'
  },
  {
    id: 'mining',
    name: 'Đào Mỏ Tỷ Phú',
    icon: '⛏️',
    desc: 'Đào đất tìm khoáng sản! Nâng cấp cuốc, thuê phu mỏ làm giàu!',
    category: 'tycoon',
    tags: ['khai thác', 'nâng cấp', 'kiếm tiền'],
    bg: 'linear-gradient(135deg, #1c1007, #3d2607)',
    border: '#f59e0b',
    file: 'mining.html'
  },
  {
    id: 'soda',
    name: 'Nhà Máy Nước Ngọt',
    icon: '🥤',
    desc: 'Pha chế, đóng chai, ra mắt thương hiệu, thống trị thị trường!',
    category: 'tycoon',
    tags: ['sản xuất', 'kinh doanh'],
    bg: 'linear-gradient(135deg, #7c0000, #b91c1c)',
    border: '#fca5a5',
    file: 'soda.html'
  },
  {
    id: 'weapons',
    name: 'Nhà Máy Xe & Súng',
    icon: '🔫',
    desc: 'SX xe tăng, súng máy, rocket, vũ khí hạt nhân! Bán cho quân đội!',
    category: 'tycoon',
    tags: ['sản xuất', 'quân sự'],
    bg: 'linear-gradient(135deg, #1a1a00, #3d3d00)',
    border: '#fde047',
    file: 'weapons.html'
  },
  {
    id: 'clothing',
    name: 'Công Ty May Đồ',
    icon: '👗',
    desc: 'Cắt vải, may đồ, ra mắt thương hiệu thời trang triệu đô!',
    category: 'tycoon',
    tags: ['thời trang', 'kinh doanh'],
    bg: 'linear-gradient(135deg, #2d1b69, #7e22ce)',
    border: '#d8b4fe',
    file: 'clothing.html'
  },
  {
    id: 'water',
    name: 'Nhà Máy Nước',
    icon: '💧',
    desc: 'Xây nhà máy, bơm nước, đóng chai, bán hàng làm giàu!',
    category: 'tycoon',
    tags: ['sản xuất', 'kinh doanh'],
    bg: 'linear-gradient(135deg, #0c4a6e, #0369a1)',
    border: '#7dd3fc',
    file: 'water.html'
  },
  {
    id: 'park',
    name: 'Công Viên Vui Chơi',
    icon: '🎡',
    desc: 'Xây đu quay, tàu lượn, vườn thú — vận hành công viên giải trí hàng đầu!',
    category: 'tycoon',
    tags: ['xây dựng', 'quản lý', 'lễ hội'],
    bg: 'linear-gradient(135deg, #0a0a1f, #1a1040)',
    border: '#a78bfa',
    file: 'park.html',
    featured: true
  },
  {
    id: 'petshop',
    name: 'Tiệm Thú Cưng',
    icon: '🐾',
    desc: 'Nhập thú cưng, chăm sóc, bán cho khách! 10 loài từ hamster đến Corgi siêu hiếm!',
    category: 'tycoon',
    tags: ['dễ thương', 'quản lý', 'kinh doanh'],
    bg: 'linear-gradient(135deg, #1a0a1a, #2d1b3d)',
    border: '#ec4899',
    file: 'petshop.html',
    featured: true
  },
  {
    id: 'fruit',
    name: 'Vườn Trái Cây',
    icon: '🍎',
    desc: 'Trồng 10 loại cây ăn trái, thuê công nhân, nâng cấp vườn — từ Xoài đến Sầu Riêng vua trái cây!',
    category: 'tycoon',
    tags: ['nông trại', 'quản lý', 'nâng cấp'],
    bg: 'linear-gradient(135deg, #0a1a00, #1a3300)',
    border: '#4ade80',
    file: 'fruit.html'
  }
,
{
  id: 'species',
  name: 'Động Vật Thông Minh',
  icon: '🦁',
  desc: '1000 loài động vật, thực vật, khủng long — chăm sóc, học hỏi, khám phá thế giới tự nhiên!',
  category: 'simulation',
  tags: ['giáo dục', 'thu thập', 'dễ thương'],
  bg: 'linear-gradient(135deg, #0a1f0a, #14532d)',
  border: '#4ade80',
  file: 'species.html',
  featured: true
}
,
{
  id: 'alien',
  name: 'Tiêu Diệt Người Ngoài HH',
  icon: '👽',
  desc: 'Bắn hạ người ngoài hành tinh! Waves tăng khó, boss khổng lồ, power-ups!',
  category: 'arcade',
  tags: ['bắn súng', 'phản xạ', 'không gian'],
  bg: 'linear-gradient(135deg, #1a0a2e, #4c1d95)',
  border: '#a78bfa',
  file: 'alien.html',
  featured: true
}
,
{
  id: 'harrypotter',
  name: 'Đọc Harry Potter',
  icon: '⚡',
  desc: 'Tóm tắt 7 cuốn Harry Potter + quiz kiểm tra kiến thức! 198 chương tóm lược.',
  category: 'puzzle',
  tags: ['học tập', 'tóm tắt', 'quiz'],
  bg: 'linear-gradient(135deg, #0a0520, #4c1d95)',
  border: '#fbbf24',
  file: 'harrypotter.html',
  featured: true
}
];

// Get games by category
function getGamesByCategory(categoryId) {
  if (categoryId === 'all') return GAMES;
  return GAMES.filter(game => game.category === categoryId);
}

// Search games
function searchGames(query) {
  const q = query.toLowerCase().trim();
  if (!q) return GAMES;
  return GAMES.filter(game =>
    game.name.toLowerCase().includes(q) ||
    game.desc.toLowerCase().includes(q) ||
    (game.tags && game.tags.some(t => t.toLowerCase().includes(q)))
  );
}

// Filter and search combined
function filterGames(query, categoryId) {
  let results = categoryId === 'all' ? [...GAMES] : GAMES.filter(g => g.category === categoryId);
  if (query) {
    const q = query.toLowerCase().trim();
    results = results.filter(game =>
      game.name.toLowerCase().includes(q) ||
      game.desc.toLowerCase().includes(q) ||
      (game.tags && game.tags.some(t => t.toLowerCase().includes(q)))
    );
  }
  return results;
}

// Get all unique tags
function getAllTags() {
  const tags = new Set();
  GAMES.forEach(g => (g.tags || []).forEach(t => tags.add(t)));
  return [...tags].sort();
}

// Get category list
function getCategoryList() {
  return Object.values(CATEGORIES);
}

// Get featured games
function getFeaturedGames() {
  return GAMES.filter(game => game.featured);
}
