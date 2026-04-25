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
,
{
  id: 'makeup',
  name: 'Trang Điểm Công Chúa',
  icon: '💄',
  desc: 'Chọn công chúa yêu thích và trang điểm cho cô ấy! Son môi, tóc, váy, phụ kiện!',
  category: 'simulation',
  tags: ['sáng tạo', 'nữ tính', 'thời trang'],
  bg: 'linear-gradient(135deg, #ec4899, #f9a8d4)',
  border: '#fbcfe8',
  file: 'makeup.html',
  featured: true
}];

// ============================================================
// 100 Roblox-style games — auto-generated from 10 hub files
// Each entry deep-links into a specific level via URL hash
// ============================================================
const RBLX_GAMES = [
  // OBBY (10 levels)
  ['rblx-obby', 'classic',  'Obby Classic',    '🟩', 'Vượt chướng ngại vật cổ điển — spikes và vực sâu', '#14532d', '#22c55e'],
  ['rblx-obby', 'lava',     'Obby Lava',       '🌋', 'Nhảy qua hồ dung nham nóng bỏng', '#7c2d12', '#f97316'],
  ['rblx-obby', 'ice',      'Obby Băng',       '❄️', 'Sàn trơn trượt, khó kiểm soát', '#0c4a6e', '#38bdf8'],
  ['rblx-obby', 'jungle',   'Obby Rừng',       '🌴', 'Vượt rừng rậm với cá sấu', '#14532d', '#65a30d'],
  ['rblx-obby', 'space',    'Obby Vũ Trụ',     '🚀', 'Trọng lực thấp, né thiên thạch', '#1e1b4b', '#818cf8'],
  ['rblx-obby', 'sky',      'Obby Trên Mây',   '☁️', 'Nhảy mây, gió thổi bay', '#0369a1', '#93c5fd'],
  ['rblx-obby', 'desert',   'Obby Sa Mạc',     '🏜️', 'Cát lún và bọ cạp', '#92400e', '#f59e0b'],
  ['rblx-obby', 'candy',    'Obby Kẹo',        '🍭', 'Thế giới kẹo ngọt siêu dễ thương', '#9d174d', '#ec4899'],
  ['rblx-obby', 'neon',     'Obby Neon',       '💡', 'Ánh đèn laser nguy hiểm', '#3730a3', '#a78bfa'],
  ['rblx-obby', 'haunted',  'Obby Ma',         '👻', 'Ngôi mộ ma quái với ghost và pumpkin', '#581c87', '#c084fc'],

  // TOWER DEFENSE (10 maps)
  ['rblx-td', 'meadow',   'TD Đồng Cỏ',   '🌿', 'Phòng thủ trên đồng cỏ xanh, đường zigzag', '#1f3a1f', '#22c55e'],
  ['rblx-td', 'desert',   'TD Sa Mạc',    '🏜️', 'Phòng thủ trên sa mạc, đường S-curve', '#3d2a15', '#f59e0b'],
  ['rblx-td', 'mountain', 'TD Núi Cao',   '🏔️', 'Phòng thủ trên núi, đường xoắn ốc', '#2a3040', '#94a3b8'],
  ['rblx-td', 'volcano',  'TD Núi Lửa',   '🌋', 'Phòng thủ cạnh núi lửa, đường rẽ nhánh', '#3d1515', '#f87171'],
  ['rblx-td', 'ocean',    'TD Đại Dương', '🌊', 'Phòng thủ biển khơi, đường gợn sóng', '#0f2a3d', '#38bdf8'],
  ['rblx-td', 'tundra',   'TD Băng Giá',  '❄️', 'Phòng thủ vùng cực, đường zigzag băng', '#1a3a4a', '#7dd3fc'],
  ['rblx-td', 'space',    'TD Vũ Trụ',    '🌌', 'Phòng thủ trong không gian, đường chéo', '#0a0a2a', '#a78bfa'],
  ['rblx-td', 'castle',   'TD Lâu Đài',   '🏰', 'Phòng thủ lâu đài, đường hình U', '#2a2015', '#fbbf24'],
  ['rblx-td', 'farm',     'TD Nông Trại', '🌾', 'Phòng thủ trang trại, đường grid', '#2a3015', '#fde047'],
  ['rblx-td', 'crystal',  'TD Thủy Tinh', '💎', 'Phòng thủ hầm pha lê, đường kim cương', '#2a1a3d', '#c084fc'],

  // SIMULATOR (10 types)
  ['rblx-sim', 'strength', 'Sim Sức Mạnh',  '💪', 'Click để nâng tạ, mua gym, tăng sức mạnh', '#7f1d1d', '#ef4444'],
  ['rblx-sim', 'ninja',    'Sim Ninja',     '🥷', 'Click để luyện tập ninja, mua vũ khí', '#1e1b4b', '#6366f1'],
  ['rblx-sim', 'mining',   'Sim Đào Mỏ',    '⛏️', 'Click để đập đá, mua cuốc xịn hơn', '#451a03', '#f59e0b'],
  ['rblx-sim', 'fishing',  'Sim Câu Cá',    '🎣', 'Thả cần, câu cá hiếm, nâng cấp cần', '#0c4a6e', '#0ea5e9'],
  ['rblx-sim', 'farming',  'Sim Nông Trại', '🌾', 'Trồng, thu hoạch, mở rộng nông trại', '#14532d', '#84cc16'],
  ['rblx-sim', 'speed',    'Sim Tốc Độ',    '🏃', 'Chạy nhanh, mua giày siêu tốc', '#581c87', '#a78bfa'],
  ['rblx-sim', 'pizza',    'Sim Pizza',     '🍕', 'Làm pizza, nâng cấp lò, bán đắt', '#7c2d12', '#f97316'],
  ['rblx-sim', 'pet',      'Sim Thú Cưng',  '🐶', 'Thu thập pet, chúng giúp kiếm tiền', '#831843', '#ec4899'],
  ['rblx-sim', 'gem',      'Sim Đá Quý',    '💎', 'Đào kim cương, ngọc lục bảo quý hiếm', '#0f766e', '#14b8a6'],
  ['rblx-sim', 'rocket',   'Sim Tên Lửa',   '🚀', 'Xây tên lửa, kiếm nhiên liệu', '#1e40af', '#60a5fa'],

  // PARKOUR (10 maps)
  ['rblx-parkour', 'city',         'Parkour Thành Phố',  '🏙️', 'Nhảy trên mái nhà cao tầng', '#1e293b', '#64748b'],
  ['rblx-parkour', 'desert',       'Parkour Phế Tích',   '🏜️', 'Chạy qua phế tích sa mạc', '#92400e', '#fbbf24'],
  ['rblx-parkour', 'forest',       'Parkour Rừng',       '🌲', 'Nhảy trên tán rừng rậm', '#14532d', '#22c55e'],
  ['rblx-parkour', 'construction', 'Parkour Công Trình', '🏗️', 'Chạy qua công trường xây dựng', '#78350f', '#fde047'],
  ['rblx-parkour', 'train',        'Parkour Đường Ray',  '🚂', 'Chạy trên đường ray xe lửa', '#44403c', '#a8a29e'],
  ['rblx-parkour', 'temple',       'Parkour Đền Cổ',     '🏛️', 'Chạy qua đền cổ đại huyền bí', '#3f3f46', '#d4d4d8'],
  ['rblx-parkour', 'volcano',      'Parkour Núi Lửa',    '🌋', 'Nhảy né dung nham', '#7f1d1d', '#f87171'],
  ['rblx-parkour', 'ice',          'Parkour Băng Tuyết', '❄️', 'Chạy trên vách băng trơn', '#1e3a5f', '#7dd3fc'],
  ['rblx-parkour', 'bridge',       'Parkour Cây Cầu',    '🌉', 'Vượt chuỗi cầu nguy hiểm', '#334155', '#94a3b8'],
  ['rblx-parkour', 'neon',         'Parkour Neon',       '⚡', 'Cao tốc neon rực rỡ', '#1e1b4b', '#a78bfa'],

  // SURVIVAL (10 scenarios)
  ['rblx-survival', 'island',   'Sinh Tồn Đảo Hoang',  '🏝️', 'Sống sót 30 ngày trên đảo vắng', '#064e3b', '#34d399'],
  ['rblx-survival', 'arctic',   'Sinh Tồn Bắc Cực',    '❄️', 'Sống sót trong giá lạnh -40°C', '#0c4a6e', '#7dd3fc'],
  ['rblx-survival', 'volcano',  'Sinh Tồn Núi Lửa',    '🌋', 'Sống sót trên đảo núi lửa', '#7f1d1d', '#f87171'],
  ['rblx-survival', 'sahara',   'Sinh Tồn Sa Mạc',     '🏜️', 'Sống sót trong sa mạc Sahara', '#78350f', '#fbbf24'],
  ['rblx-survival', 'forest',   'Sinh Tồn Rừng Đen',   '🌲', 'Sống sót trong rừng đen bí ẩn', '#14532d', '#65a30d'],
  ['rblx-survival', 'mountain', 'Sinh Tồn Đỉnh Núi',   '🏔️', 'Sống sót trên đỉnh núi cao', '#1e293b', '#94a3b8'],
  ['rblx-survival', 'city',     'Sinh Tồn Thành Phố',  '🏚️', 'Sống sót trong thành phố bỏ hoang', '#3f3f46', '#a1a1aa'],
  ['rblx-survival', 'sea',      'Sinh Tồn Lạc Biển',   '🌊', 'Sống sót trên bè giữa biển khơi', '#0f172a', '#38bdf8'],
  ['rblx-survival', 'alien',    'Sinh Tồn Hành Tinh Lạ','🌌', 'Sống sót trên hành tinh ngoài vũ trụ', '#1e1b4b', '#a78bfa'],
  ['rblx-survival', 'castle',   'Sinh Tồn Lâu Đài Ma', '🏰', 'Sống sót trong lâu đài đầy ma quái', '#4c1d95', '#c084fc'],

  // RACING (10 tracks)
  ['rblx-racing', 'classic',  'Đua Cổ Điển',   '🏁', 'Đua trên đường đua truyền thống', '#1f2937', '#fbbf24'],
  ['rblx-racing', 'city',     'Đua Đêm',       '🌃', 'Đua trong thành phố ban đêm, neon sáng', '#1e1b4b', '#a78bfa'],
  ['rblx-racing', 'desert',   'Đua Rally',     '🏜️', 'Đua rally trên cát bụi', '#78350f', '#f59e0b'],
  ['rblx-racing', 'ice',      'Đua Băng',      '❄️', 'Đua trên băng trơn trượt', '#0c4a6e', '#7dd3fc'],
  ['rblx-racing', 'jungle',   'Đua Rừng',      '🌴', 'Đua trong rừng rậm, né động vật', '#14532d', '#65a30d'],
  ['rblx-racing', 'space',    'Đua Vũ Trụ',    '🚀', 'Đua trên xa lộ không gian', '#1e1b4b', '#818cf8'],
  ['rblx-racing', 'lava',     'Đua Dung Nham', '🌋', 'Đua né lửa trên đường dung nham', '#7f1d1d', '#f87171'],
  ['rblx-racing', 'mountain', 'Đua Đèo',       '🏔️', 'Đua đường đèo cong queo', '#374151', '#9ca3af'],
  ['rblx-racing', 'beach',    'Đua Bãi Biển',  '🏖️', 'Đua bờ biển, né vũng nước', '#0369a1', '#7dd3fc'],
  ['rblx-racing', 'portal',   'Đua Cổng Dịch', '🌀', 'Đua qua cổng không gian ngẫu nhiên', '#4c1d95', '#c084fc'],

  // PUZZLE (10 types)
  ['rblx-puzzle', 'memory',  'Puzzle Trí Nhớ',    '🎴', 'Lật thẻ tìm cặp giống nhau', '#4c1d95', '#c084fc'],
  ['rblx-puzzle', 'slide',   'Puzzle Trượt Số',   '🔢', 'Sắp xếp số 1-15 bằng cách trượt', '#1e40af', '#60a5fa'],
  ['rblx-puzzle', 'match3',  'Puzzle Match-3',    '🍭', 'Đổi chỗ kẹo để xếp 3 hàng', '#9d174d', '#f472b6'],
  ['rblx-puzzle', 'snake',   'Puzzle Vẽ Đường',   '🐍', 'Vẽ đường đi qua mọi ô', '#14532d', '#4ade80'],
  ['rblx-puzzle', 'fill',    'Puzzle Tô Màu',     '🎨', 'Flood fill toàn bảng cùng màu', '#7c2d12', '#fb923c'],
  ['rblx-puzzle', 'connect', 'Puzzle Nối Điểm',   '🔗', 'Nối các chấm cùng màu', '#0f766e', '#2dd4bf'],
  ['rblx-puzzle', 'sudoku',  'Puzzle Sudoku 4x4', '🔲', 'Sudoku mini 4x4', '#1f2937', '#9ca3af'],
  ['rblx-puzzle', 'math',    'Puzzle Toán Học',   '🧮', 'Điền số còn thiếu trong phương trình', '#0c4a6e', '#38bdf8'],
  ['rblx-puzzle', 'pattern', 'Puzzle Simon',      '🎭', 'Nhớ và lặp lại chuỗi màu', '#581c87', '#a78bfa'],
  ['rblx-puzzle', 'jigsaw',  'Puzzle Ghép Hình',  '🧩', 'Ghép 9 miếng puzzle thành tranh', '#164e63', '#22d3ee'],

  // SHOOTER (10 themes)
  ['rblx-shooter', 'target',  'Bắn Bia',         '🎯', 'Bắn bia tập với điểm số', '#7f1d1d', '#f87171'],
  ['rblx-shooter', 'duck',    'Bắn Vịt',         '🦆', 'Bắn vịt bay kinh điển', '#14532d', '#4ade80'],
  ['rblx-shooter', 'zombie',  'Bắn Zombie',      '🧟', 'Bắn zombie đang tiến tới', '#44403c', '#f87171'],
  ['rblx-shooter', 'apple',   'Bắn Táo',         '🍎', 'Bắn táo kiểu William Tell', '#7f1d1d', '#f87171'],
  ['rblx-shooter', 'balloon', 'Bắn Bóng Bay',    '🎈', 'Bắn bóng bay đủ màu', '#be185d', '#ec4899'],
  ['rblx-shooter', 'alien',   'Bắn Alien',       '👾', 'Bắn người ngoài hành tinh', '#1e1b4b', '#a78bfa'],
  ['rblx-shooter', 'bat',     'Bắn Dơi',         '🦇', 'Bắn dơi bay trong hang', '#18181b', '#a1a1aa'],
  ['rblx-shooter', 'snake',   'Bắn Rắn',         '🐍', 'Bắn rắn trong rừng', '#14532d', '#84cc16'],
  ['rblx-shooter', 'cowboy',  'Đấu Súng Cowboy', '🤠', 'Đấu súng kiểu miền Tây', '#78350f', '#fbbf24'],
  ['rblx-shooter', 'dragon',  'Diệt Rồng',       '🐉', 'Bắn hạ boss rồng khổng lồ', '#7f1d1d', '#f59e0b'],

  // PETS (10 activities)
  ['rblx-pets', 'hatch',   'Ấp Trứng',        '🥚', 'Mở trứng ngẫu nhiên nhận pet mới', '#831843', '#f472b6'],
  ['rblx-pets', 'feed',    'Cho Pet Ăn',      '🍖', 'Cho pet ăn, giữ stats cao', '#7c2d12', '#fb923c'],
  ['rblx-pets', 'race',    'Đua Pet',         '🏃', 'Chọn pet và cược đua', '#14532d', '#4ade80'],
  ['rblx-pets', 'battle',  'Pet Đấu Võ',      '⚔️', 'Pet vs Pet turn-based', '#7f1d1d', '#f87171'],
  ['rblx-pets', 'train',   'Huấn Luyện Pet',  '🎾', 'Click minigame để lên cấp', '#1e40af', '#60a5fa'],
  ['rblx-pets', 'evolve',  'Tiến Hóa Pet',    '🌟', 'Tiến hóa pet qua các giai đoạn', '#4c1d95', '#c084fc'],
  ['rblx-pets', 'dress',   'Trang Điểm Pet',  '🎀', 'Thay trang phục cho pet', '#9d174d', '#ec4899'],
  ['rblx-pets', 'contest', 'Thi Sắc Đẹp Pet', '🏆', 'Thi sắc đẹp, chấm điểm', '#78350f', '#fbbf24'],
  ['rblx-pets', 'groom',   'Tắm Pet',         '🛁', 'Tắm và chải lông cho pet', '#0c4a6e', '#38bdf8'],
  ['rblx-pets', 'parade',  'Diễu Hành Pet',   '🌈', 'Thu thập đủ pet cho cầu vồng', '#581c87', '#a78bfa'],

  // ADVENTURE (10 stories)
  ['rblx-adventure', 'princess',  'Giải Cứu Công Chúa', '🏰', 'Phiêu lưu trung cổ cứu công chúa', '#831843', '#ec4899'],
  ['rblx-adventure', 'pirate',    'Kho Báu Hải Tặc',    '🏴‍☠️', 'Vượt biển tìm kho báu', '#78350f', '#fbbf24'],
  ['rblx-adventure', 'alien',     'Trạm Không Gian',    '👽', 'Bí ẩn trạm không gian ngoài hành tinh', '#1e1b4b', '#a78bfa'],
  ['rblx-adventure', 'wizard',    'Học Viện Phù Thủy',  '🧙', 'Học phép thuật tại học viện', '#4c1d95', '#c084fc'],
  ['rblx-adventure', 'detective', 'Thám Tử Bí Ẩn',      '🕵️', 'Giải mã vụ án bí ẩn', '#1f2937', '#9ca3af'],
  ['rblx-adventure', 'desert',    'Thám Hiểm Sa Mạc',   '🏜️', 'Tìm thành phố cổ thất lạc', '#78350f', '#f59e0b'],
  ['rblx-adventure', 'dragon',    'Thợ Săn Rồng',       '🐉', 'Đánh bại rồng hung dữ', '#7f1d1d', '#f87171'],
  ['rblx-adventure', 'vampire',   'Lâu Đài Ma Cà Rồng', '🧛', 'Trốn thoát khỏi lâu đài undead', '#18181b', '#a1a1aa'],
  ['rblx-adventure', 'robot',     'Cuộc Nổi Dậy Robot', '🤖', 'Sống sót qua AI nổi loạn', '#0f172a', '#38bdf8'],
  ['rblx-adventure', 'atlantis',  'Lặn Atlantis',       '🌊', 'Khám phá thành phố dưới nước', '#0c4a6e', '#22d3ee'],
];

// Expand into full GAMES entries
RBLX_GAMES.forEach(([hub, hash, name, icon, desc, bgDark, border]) => {
  const categoryMap = {
    'rblx-obby': 'arcade', 'rblx-td': 'strategy', 'rblx-sim': 'clicker',
    'rblx-parkour': 'arcade', 'rblx-survival': 'simulation', 'rblx-racing': 'arcade',
    'rblx-puzzle': 'puzzle', 'rblx-shooter': 'arcade', 'rblx-pets': 'simulation',
    'rblx-adventure': 'simulation'
  };
  const tagMap = {
    'rblx-obby': ['Roblox', 'obby', 'nhảy nhót'],
    'rblx-td': ['Roblox', 'phòng thủ', 'chiến thuật'],
    'rblx-sim': ['Roblox', 'simulator', 'click'],
    'rblx-parkour': ['Roblox', 'parkour', 'chạy nhảy'],
    'rblx-survival': ['Roblox', 'sinh tồn', 'chiến lược'],
    'rblx-racing': ['Roblox', 'đua xe', 'tốc độ'],
    'rblx-puzzle': ['Roblox', 'puzzle', 'tư duy'],
    'rblx-shooter': ['Roblox', 'bắn súng', 'phản xạ'],
    'rblx-pets': ['Roblox', 'pet', 'thu thập'],
    'rblx-adventure': ['Roblox', 'phiêu lưu', 'kể chuyện']
  };
  GAMES.push({
    id: `${hub}-${hash}`,
    name: name,
    icon: icon,
    desc: desc,
    category: categoryMap[hub],
    tags: tagMap[hub],
    bg: `linear-gradient(135deg, #0a0a1e, ${bgDark})`,
    border: border,
    file: `${hub}.html#${hash}`
  });
});

// ============================================================
// 100 more themed games across 10 new hubs
// ============================================================
const MORE_GAMES = [
  // COOKING (10)
  ['cook-hub', 'pho',       'Nấu Phở Bò',       '🍜', 'Bấm nguyên liệu đúng thứ tự để nấu phở', 'simulation', '#7c2d12', '#fb923c'],
  ['cook-hub', 'banhmi',    'Làm Bánh Mì',      '🥖', 'Xếp lớp bánh mì Việt Nam', 'simulation', '#78350f', '#fbbf24'],
  ['cook-hub', 'bun',       'Bún Chả',          '🍲', 'Nướng thịt đúng thời gian', 'simulation', '#7c2d12', '#fdba74'],
  ['cook-hub', 'chao',      'Cháo Gà',          '🥣', 'Khuấy cháo, đừng để cháy', 'simulation', '#854d0e', '#fde047'],
  ['cook-hub', 'goicuon',   'Gỏi Cuốn',         '🌯', 'Cuốn đúng thứ tự nguyên liệu', 'simulation', '#166534', '#4ade80'],
  ['cook-hub', 'banhxeo',   'Bánh Xèo',         '🥞', 'Đổ bột, lật bánh đúng lúc', 'simulation', '#92400e', '#f59e0b'],
  ['cook-hub', 'chegio',    'Chả Giò',          '🥟', 'Cuốn đủ số chả giò yêu cầu', 'simulation', '#7c2d12', '#fb923c'],
  ['cook-hub', 'xoi',       'Xôi Đậu',          '🍚', 'Thêm topping xôi theo thứ tự', 'simulation', '#78350f', '#fde68a'],
  ['cook-hub', 'banhcuon',  'Bánh Cuốn',        '🌯', 'Hấp và cuốn bánh cuốn', 'simulation', '#854d0e', '#fde68a'],
  ['cook-hub', 'sinhto',    'Sinh Tố',          '🥤', 'Xay trái cây theo nhịp', 'simulation', '#9d174d', '#f472b6'],

  // SPORTS (10)
  ['sport-hub', 'soccer',    'Đá Phạt',         '⚽', 'Sút bóng vào lưới, né thủ môn', 'arcade', '#14532d', '#4ade80'],
  ['sport-hub', 'basketball','Ném Rổ',          '🏀', 'Tính toán lực ném vào rổ', 'arcade', '#7c2d12', '#fb923c'],
  ['sport-hub', 'tennis',    'Tennis',          '🎾', 'Đánh tennis kiểu pong với AI', 'arcade', '#14532d', '#a3e635'],
  ['sport-hub', 'golf',      'Đánh Golf',       '⛳', 'Đánh bóng golf qua 5 hố', 'arcade', '#166534', '#4ade80'],
  ['sport-hub', 'bowling',   'Bowling',         '🎳', 'Nhắm và ném đổ con boling', 'arcade', '#78350f', '#fbbf24'],
  ['sport-hub', 'archery',   'Bắn Cung',        '🏹', 'Bắn cung có yếu tố gió', 'arcade', '#7c2d12', '#f87171'],
  ['sport-hub', 'pingpong',  'Bóng Bàn',        '🏓', 'Đập bóng bàn đúng lúc', 'arcade', '#9d174d', '#f472b6'],
  ['sport-hub', 'badminton', 'Cầu Lông',        '🏸', 'Đập cầu 4 hướng theo mũi tên', 'arcade', '#1e40af', '#60a5fa'],
  ['sport-hub', 'boxing',    'Đấm Bốc',         '🥊', 'Quick-time event đấm và né', 'arcade', '#7f1d1d', '#f87171'],
  ['sport-hub', 'swimming',  'Bơi Lội',         '🏊', 'Luân phiên nhịp trái-phải để bơi', 'arcade', '#0c4a6e', '#38bdf8'],

  // MUSIC (10)
  ['music-hub', 'piano',     'Đàn Piano',       '🎹', '8 phím piano synth', 'simulation', '#1e1b4b', '#a78bfa'],
  ['music-hub', 'guitar',    'Đàn Guitar',      '🎸', '6 dây guitar, gẩy tạo âm', 'simulation', '#78350f', '#fbbf24'],
  ['music-hub', 'drums',     'Trống',           '🥁', '6 pad trống: kick, snare, hat...', 'simulation', '#7f1d1d', '#f87171'],
  ['music-hub', 'tap',       'Tap Nhịp',        '🎵', '4 làn nốt rơi theo nhịp', 'arcade', '#4c1d95', '#c084fc'],
  ['music-hub', 'synth',     'Synth Sequencer', '🎹', 'Lập trình 4x8 step sequencer', 'simulation', '#1e40af', '#60a5fa'],
  ['music-hub', 'xylophone', 'Xylophone',       '🎶', '8 thanh màu, chạm tạo note', 'simulation', '#be185d', '#ec4899'],
  ['music-hub', 'violin',    'Đàn Violin',      '🎻', 'Kéo đàn, di chuyển điều chỉnh cao độ', 'simulation', '#7c2d12', '#fbbf24'],
  ['music-hub', 'dj',        'DJ Scratch',      '🎧', 'Quay bàn DJ để scratch', 'simulation', '#0f172a', '#38bdf8'],
  ['music-hub', 'choir',     'Hát Hợp Xướng',   '🎤', 'Điều chỉnh giọng khớp cao độ mục tiêu', 'simulation', '#7e22ce', '#c084fc'],
  ['music-hub', 'beatbox',   'Beatbox',         '🎵', '3x3 pad beatbox vocal', 'arcade', '#18181b', '#a1a1aa'],

  // CARD (10)
  ['card-hub', 'solitaire', 'Solitaire Cổ Điển','🃏', 'Xếp bài A→K theo chất', 'card', '#064e3b', '#34d399'],
  ['card-hub', 'war',       'War Bài',          '⚔️', 'Bài lớn nhất thắng mỗi lượt', 'card', '#7f1d1d', '#f87171'],
  ['card-hub', 'blackjack', 'Blackjack 21',     '🎰', 'Đấu 21 với nhà cái', 'card', '#14532d', '#4ade80'],
  ['card-hub', 'war21',     'Gần 21',           '🎯', 'Ai gần 21 hơn thắng', 'card', '#78350f', '#fbbf24'],
  ['card-hub', 'speed',     'Speed Card',       '⚡', 'Đánh nhanh trong 30 giây', 'card', '#4c1d95', '#c084fc'],
  ['card-hub', 'snap',      'Snap!',            '🫰', 'Đập tay khi thấy bài trùng', 'card', '#9d174d', '#f472b6'],
  ['card-hub', 'higher',    'Cao Hay Thấp',     '⬆️', 'Đoán bài kế tiếp cao hay thấp', 'card', '#1e40af', '#60a5fa'],
  ['card-hub', 'memory',    'Nhớ Thứ Tự Bài',   '🧠', 'Simon với bài', 'card', '#581c87', '#a78bfa'],
  ['card-hub', 'pairs',     'Tìm Cặp',          '👯', 'Lật bài tìm 8 cặp trong 60s', 'card', '#0f766e', '#2dd4bf'],
  ['card-hub', 'crazy8',    'Crazy Eights',     '🎪', 'Đánh hết bài, số 8 wild', 'card', '#7c2d12', '#fb923c'],

  // EDUCATION (10)
  ['edu-hub', 'addition',       'Cộng Nhanh',        '➕', 'Làm phép cộng trong 60s', 'puzzle', '#0c4a6e', '#38bdf8'],
  ['edu-hub', 'subtraction',    'Trừ Nhanh',         '➖', 'Làm phép trừ trong 60s', 'puzzle', '#0c4a6e', '#60a5fa'],
  ['edu-hub', 'multiplication', 'Bảng Cửu Chương',   '✖️', 'Nhân 2-9 nhanh', 'puzzle', '#7c2d12', '#fb923c'],
  ['edu-hub', 'division',       'Chia Nhanh',        '➗', 'Chia không dư', 'puzzle', '#166534', '#4ade80'],
  ['edu-hub', 'alphabet',       'Ghép Chữ',          '🔤', 'Sắp xếp chữ thành từ tiếng Việt', 'puzzle', '#4c1d95', '#c084fc'],
  ['edu-hub', 'vocab',          'Từ Vựng Anh',       '📖', 'EN→VI trắc nghiệm', 'puzzle', '#1e40af', '#60a5fa'],
  ['edu-hub', 'typing',         'Gõ Phím',           '⌨️', 'Gõ từ chính xác', 'puzzle', '#18181b', '#a1a1aa'],
  ['edu-hub', 'geo',            'Thủ Đô Thế Giới',   '🌍', 'Trắc nghiệm thủ đô 30 nước', 'puzzle', '#0c4a6e', '#7dd3fc'],
  ['edu-hub', 'history',        'Lịch Sử Việt Nam',  '📜', 'Câu hỏi lịch sử VN', 'puzzle', '#78350f', '#fbbf24'],
  ['edu-hub', 'science',        'Khoa Học',          '🔬', 'Câu hỏi khoa học', 'puzzle', '#0f766e', '#2dd4bf'],

  // IDLE (10)
  ['idle-hub', 'cookie',  'Cookie Clicker',    '🍪', 'Click bánh cookie vô tận', 'clicker', '#78350f', '#fbbf24'],
  ['idle-hub', 'coin',    'Xếp Xu',            '💰', 'Click tích lũy xu', 'clicker', '#854d0e', '#fde047'],
  ['idle-hub', 'tree',    'Trồng Cây',         '🌳', 'Click để gieo hạt, lớn thành cây', 'clicker', '#166534', '#4ade80'],
  ['idle-hub', 'taco',    'Tiệm Taco',         '🌮', 'Làm taco liên tục', 'clicker', '#7c2d12', '#fb923c'],
  ['idle-hub', 'bitcoin', 'Đào Crypto',        '₿', 'Click để đào bitcoin', 'clicker', '#713f12', '#fbbf24'],
  ['idle-hub', 'robot',   'Đạo Quân Robot',    '🤖', 'Xây robot tự động', 'clicker', '#18181b', '#a1a1aa'],
  ['idle-hub', 'factory', 'Nhà Máy Click',     '🏭', 'Click sản xuất hàng loạt', 'clicker', '#1f2937', '#9ca3af'],
  ['idle-hub', 'gem',     'Nhặt Đá Quý',       '💎', 'Thu thập kim cương', 'clicker', '#0f766e', '#2dd4bf'],
  ['idle-hub', 'magic',   'Mana Phép',         '🔮', 'Click tích lũy phép thuật', 'clicker', '#4c1d95', '#c084fc'],
  ['idle-hub', 'farm',    'Thu Hoạch Nông',    '🚜', 'Thu hoạch nông sản', 'clicker', '#166534', '#65a30d'],

  // BRAIN (10)
  ['brain-hub', 'tictactoe',   'Cờ Ca-rô 3x3',    '⭕', 'Ca-rô 3 hàng vs AI', 'strategy', '#1e293b', '#94a3b8'],
  ['brain-hub', 'reaction',    'Thời Gian Phản Xạ','⚡', 'Click khi thấy màu xanh', 'puzzle', '#14532d', '#4ade80'],
  ['brain-hub', 'riddle',      'Câu Đố Logic',    '💭', '12 câu đố logic Việt Nam', 'puzzle', '#4c1d95', '#c084fc'],
  ['brain-hub', 'spot',        'Tìm Ô Khác Màu',  '🔍', 'Tìm ô màu khác trong lưới', 'puzzle', '#0c4a6e', '#38bdf8'],
  ['brain-hub', 'word',        'Điền Thành Ngữ',  '📝', 'Điền từ thiếu trong thành ngữ', 'puzzle', '#78350f', '#fbbf24'],
  ['brain-hub', 'anagram',     'Sắp Xếp Chữ',     '🔄', 'Sắp lại chữ cái thành từ', 'puzzle', '#7e22ce', '#d8b4fe'],
  ['brain-hub', 'nback',       'N-back Trí Nhớ',  '🎯', 'Test N-back spatial memory', 'puzzle', '#1e40af', '#60a5fa'],
  ['brain-hub', 'minesweeper', 'Dò Mìn 8x8',      '💣', 'Cổ điển Minesweeper 8x8', 'strategy', '#3f3f46', '#d4d4d8'],
  ['brain-hub', '2048',        '2048',            '🔢', 'Gộp số 2, 4, 8... lên 2048', 'puzzle', '#78350f', '#fde047'],
  ['brain-hub', 'tetris',      'Tetris',          '🧱', 'Xếp khối Tetris cổ điển', 'puzzle', '#1e293b', '#22d3ee'],

  // ART (10)
  ['art-hub', 'paint',    'Vẽ Tự Do',         '🎨', 'Canvas vẽ với cọ và màu', 'simulation', '#9d174d', '#f472b6'],
  ['art-hub', 'pixel',    'Pixel Art 16x16',  '🕹️', 'Vẽ pixel 16x16', 'simulation', '#4c1d95', '#c084fc'],
  ['art-hub', 'coloring', 'Tô Màu Theo Số',   '🖍️', 'Tô màu theo số trên SVG', 'simulation', '#1e40af', '#60a5fa'],
  ['art-hub', 'mandala',  'Vẽ Mandala',       '🌀', 'Vẽ đối xứng N-fold', 'simulation', '#7e22ce', '#d8b4fe'],
  ['art-hub', 'emoji',    'Nghệ Thuật Emoji', '😀', 'Xếp emoji tạo tác phẩm', 'simulation', '#be185d', '#f472b6'],
  ['art-hub', 'story',    'Viết Truyện',      '📖', 'Điền vào mẫu truyện', 'simulation', '#78350f', '#fbbf24'],
  ['art-hub', 'comic',    'Vẽ Truyện Tranh',  '💬', 'Tạo comic 3 khung', 'simulation', '#14532d', '#4ade80'],
  ['art-hub', 'flag',     'Thiết Kế Cờ',      '🏴', 'Tạo cờ với sọc + biểu tượng', 'simulation', '#7f1d1d', '#f87171'],
  ['art-hub', 'logo',     'Tạo Logo',         '🎨', 'Logo với hình + chữ + màu', 'simulation', '#0f766e', '#2dd4bf'],
  ['art-hub', 'tattoo',   'Thiết Kế Hình Xăm','✨', 'Đặt icon trên silhouette người', 'simulation', '#18181b', '#a1a1aa'],

  // HORROR/MYSTERY (10)
  ['horror-hub', 'ghost',     'Săn Ma',             '👻', 'Click ma trong 30 giây', 'arcade', '#18181b', '#a1a1aa'],
  ['horror-hub', 'escape',    'Phòng Bí Ẩn',        '🚪', 'Tìm manh mối thoát khỏi phòng', 'puzzle', '#0f172a', '#38bdf8'],
  ['horror-hub', 'murder',    'Ai Là Hung Thủ',     '🔪', 'Chọn nghi phạm từ manh mối', 'puzzle', '#7f1d1d', '#f87171'],
  ['horror-hub', 'haunted',   'Biệt Thự Ma Ám',     '🏚️', 'Phiêu lưu chọn lựa', 'simulation', '#3f3f46', '#a1a1aa'],
  ['horror-hub', 'seance',    'Cầu Cơ',             '🔮', 'Simon với biểu tượng', 'puzzle', '#4c1d95', '#c084fc'],
  ['horror-hub', 'ouija',     'Bảng Ouija',         '🕯️', 'Đoán chữ kiểu treo cổ', 'puzzle', '#1f2937', '#d4d4d8'],
  ['horror-hub', 'cursed',    'Vật Bị Nguyền',      '📜', 'Nhớ dãy màu tránh bẫy', 'puzzle', '#78350f', '#fbbf24'],
  ['horror-hub', 'exorcism',  'Trừ Tà',             '🧛', 'Khớp mẫu phép trừ tà', 'puzzle', '#581c87', '#a78bfa'],
  ['horror-hub', 'cemetery',  'Đào Mộ',             '⚰️', 'Đào 4x4 tìm cổ vật', 'puzzle', '#1f2937', '#6b7280'],
  ['horror-hub', 'witch',     'Pha Chế Phù Thủy',   '🧙‍♀️', 'Nhớ công thức thuốc phù thủy', 'puzzle', '#065f46', '#34d399'],

  // LIFE (10)
  ['life-hub', 'baby',       'Chăm Em Bé',       '👶', 'Cho ăn, ngủ, chơi', 'simulation', '#9d174d', '#f472b6'],
  ['life-hub', 'school',     'Đi Học',           '🏫', 'Xếp lịch học mỗi ngày', 'simulation', '#1e40af', '#60a5fa'],
  ['life-hub', 'date',       'Hẹn Hò',           '💕', 'Chọn lựa hội thoại tăng tình yêu', 'simulation', '#be185d', '#ec4899'],
  ['life-hub', 'wedding',    'Kế Hoạch Đám Cưới','💒', 'Quản lý ngân sách cưới', 'simulation', '#9d174d', '#f9a8d4'],
  ['life-hub', 'home',       'Trang Trí Nhà',    '🏠', 'Kéo thả nội thất 4x4', 'simulation', '#78350f', '#fbbf24'],
  ['life-hub', 'garden',     'Làm Vườn',         '🌱', '9 ô vườn trồng cây', 'simulation', '#166534', '#4ade80'],
  ['life-hub', 'cleaning',   'Dọn Nhà',          '🧹', 'Click các vết bẩn', 'simulation', '#0c4a6e', '#38bdf8'],
  ['life-hub', 'shopping',   'Đi Chợ',           '🛒', 'Quản lý ngân sách mua sắm', 'simulation', '#7e22ce', '#c084fc'],
  ['life-hub', 'travel',     'Du Lịch',          '✈️', 'Lên kế hoạch chuyến đi', 'simulation', '#0c4a6e', '#7dd3fc'],
  ['life-hub', 'retirement', 'Nghỉ Hưu',         '👴', 'Quản lý sinh hoạt hàng ngày', 'simulation', '#374151', '#9ca3af'],
];

// ============================================================
// 100 Education games across 10 new hubs
// ============================================================
const EDU_GAMES = [
  // MATH (10)
  ['edu-math', 'fraction',  'Phân Số',          '🍰', 'So sánh và tính phân số', '#be185d', '#f472b6'],
  ['edu-math', 'decimal',   'Số Thập Phân',     '💲', 'Cộng trừ số thập phân', '#0c4a6e', '#38bdf8'],
  ['edu-math', 'percent',   'Phần Trăm',        '💯', 'Tính % của số', '#7c2d12', '#fb923c'],
  ['edu-math', 'equation',  'Giải Phương Trình','🔍', 'Tìm x trong phương trình', '#4c1d95', '#c084fc'],
  ['edu-math', 'geometry',  'Hình Học',         '📐', 'Chu vi, diện tích hình', '#166534', '#4ade80'],
  ['edu-math', 'graph',     'Đọc Đồ Thị',       '📊', 'Đọc biểu đồ cột đơn giản', '#1e40af', '#60a5fa'],
  ['edu-math', 'prime',     'Số Nguyên Tố',     '🔢', 'Nhận biết số nguyên tố', '#78350f', '#fbbf24'],
  ['edu-math', 'factor',    'Phân Tích Thừa Số','🔓', 'Tìm thừa số của số', '#0f766e', '#2dd4bf'],
  ['edu-math', 'negative',  'Số Âm',            '❄️', 'Cộng trừ số âm', '#1e293b', '#94a3b8'],
  ['edu-math', 'root',      'Căn Bậc 2',        '√', 'Tính căn bậc 2', '#581c87', '#a78bfa'],

  // ENGLISH (10)
  ['edu-english', 'family',  'Gia Đình',      '👪', 'Từ vựng gia đình EN-VI', '#be185d', '#f472b6'],
  ['edu-english', 'colors',  'Màu Sắc',       '🎨', 'Tên các màu trong tiếng Anh', '#7e22ce', '#d8b4fe'],
  ['edu-english', 'numbers', 'Số Đếm',        '🔢', 'One, two, three...', '#0c4a6e', '#38bdf8'],
  ['edu-english', 'food',    'Đồ Ăn',         '🍔', 'Bread, rice, fish...', '#7c2d12', '#fb923c'],
  ['edu-english', 'animals', 'Động Vật',      '🐶', 'Dog, cat, cow...', '#166534', '#4ade80'],
  ['edu-english', 'body',    'Cơ Thể',        '👁️', 'Eye, hand, leg...', '#9d174d', '#f9a8d4'],
  ['edu-english', 'school',  'Đồ Học Tập',    '✏️', 'Pen, book, bag...', '#1e40af', '#60a5fa'],
  ['edu-english', 'weather', 'Thời Tiết',     '☀️', 'Sunny, rainy, cold...', '#854d0e', '#fde047'],
  ['edu-english', 'verbs',   'Động Từ',       '🏃', 'Run, eat, sleep...', '#0f766e', '#2dd4bf'],
  ['edu-english', 'plural',  'Số Nhiều',      '👥', 'Cat → cats, man → men', '#4c1d95', '#a78bfa'],

  // VIETNAMESE (10)
  ['edu-viet', 'tuloai',    'Phân Loại Từ',    '📚', 'Danh từ, động từ, tính từ', '#7f1d1d', '#f87171'],
  ['edu-viet', 'dongtu',    'Động Từ',         '🏃', 'Chọn động từ trong câu', '#166534', '#4ade80'],
  ['edu-viet', 'danhtu',    'Danh Từ',         '🎒', 'Chọn danh từ trong câu', '#1e40af', '#60a5fa'],
  ['edu-viet', 'tinhtu',    'Tính Từ',         '✨', 'Chọn tính từ trong câu', '#854d0e', '#fde047'],
  ['edu-viet', 'dongnghia', 'Từ Đồng Nghĩa',   '🔁', 'Từ nghĩa tương đương', '#0f766e', '#2dd4bf'],
  ['edu-viet', 'trainghia', 'Từ Trái Nghĩa',   '⚖️', 'Từ đối nghĩa', '#7e22ce', '#c084fc'],
  ['edu-viet', 'thanh',     'Đánh Dấu Thanh',  '🎵', 'Huyền, sắc, hỏi, ngã, nặng', '#be185d', '#f472b6'],
  ['edu-viet', 'camtu',     'Ghép Âm Vần',     '🔤', 'Ghép âm vần thành tiếng', '#4c1d95', '#a78bfa'],
  ['edu-viet', 'chinhta',   'Chính Tả',        '✏️', 'd/gi, s/x, ch/tr', '#78350f', '#fbbf24'],
  ['edu-viet', 'thanhngu',  'Thành Ngữ',       '📜', 'Điền thành ngữ còn thiếu', '#92400e', '#f59e0b'],

  // SCIENCE (10)
  ['edu-science', 'body',      'Cơ Thể Người',   '🫀', 'Các cơ quan cơ thể', '#be123c', '#fb7185'],
  ['edu-science', 'plant',     'Thực Vật',       '🌱', 'Rễ, thân, lá, hoa, quả', '#166534', '#4ade80'],
  ['edu-science', 'animal',    'Động Vật',       '🐾', 'Có vú, bò sát, chim, cá', '#78350f', '#fbbf24'],
  ['edu-science', 'weather',   'Thời Tiết',      '🌦️', 'Hiện tượng khí hậu', '#0c4a6e', '#7dd3fc'],
  ['edu-science', 'planet',    'Hệ Mặt Trời',    '🪐', '8 hành tinh', '#1e1b4b', '#818cf8'],
  ['edu-science', 'chemistry', 'Hóa Học Cơ Bản', '⚗️', 'Rắn, lỏng, khí', '#0f766e', '#2dd4bf'],
  ['edu-science', 'physics',   'Vật Lý Cơ Bản',  '⚡', 'Lực và chuyển động', '#4c1d95', '#c084fc'],
  ['edu-science', 'electric',  'Điện',           '💡', 'Mạch điện, dòng điện', '#854d0e', '#fde047'],
  ['edu-science', 'ecosystem', 'Hệ Sinh Thái',   '🌳', 'Chuỗi thức ăn', '#065f46', '#34d399'],
  ['edu-science', 'human',     'Giác Quan',      '🧑', '5 giác quan', '#9d174d', '#f9a8d4'],

  // HISTORY (10)
  ['edu-history', 'vua',       'Vua Việt Nam',   '👑', 'Lê Lợi, Nguyễn Huệ...', '#78350f', '#fbbf24'],
  ['edu-history', 'chien',     'Trận Chiến Lớn', '⚔️', 'Bạch Đằng, Điện Biên Phủ', '#7f1d1d', '#f87171'],
  ['edu-history', 'danh',      'Danh Nhân',      '🏛️', 'Lý Thường Kiệt, Trần Hưng Đạo', '#1e293b', '#94a3b8'],
  ['edu-history', 'thoigian',  'Dòng Thời Gian', '⏰', 'Sắp xếp sự kiện', '#4c1d95', '#a78bfa'],
  ['edu-history', 'anhhung',   'Anh Hùng DT',    '🦸', 'Hai Bà Trưng, Kim Đồng', '#be123c', '#fb7185'],
  ['edu-history', 'lechoi',    'Lễ Hội',         '🎎', 'Giỗ Tổ, Tết, Trung Thu', '#9d174d', '#f472b6'],
  ['edu-history', 'trieu',     'Triều Đại',      '👑', 'Lý, Trần, Lê, Nguyễn', '#854d0e', '#fde68a'],
  ['edu-history', 'sukien',    'Năm Sự Kiện',    '📅', '1945, 1954, 1975', '#166534', '#4ade80'],
  ['edu-history', 'ww2',       'Thế Chiến 2',    '🌍', 'Thông tin cơ bản WW2', '#0c4a6e', '#38bdf8'],
  ['edu-history', 'ancient',   'Văn Minh Cổ',    '🏺', 'Ai Cập, La Mã, Hy Lạp', '#78350f', '#f59e0b'],

  // GEOGRAPHY (10)
  ['edu-geo', 'provinces',  'Tỉnh VN',         '🇻🇳', '63 tỉnh thành Việt Nam', '#7f1d1d', '#f87171'],
  ['edu-geo', 'capitals',   'Thủ Đô',          '🏛️', 'Paris, Tokyo, London...', '#0c4a6e', '#38bdf8'],
  ['edu-geo', 'rivers',     'Sông Lớn',        '🌊', 'Mekong, Amazon, Nile', '#0369a1', '#7dd3fc'],
  ['edu-geo', 'mountains',  'Núi Cao',         '🏔️', 'Everest, Fansipan', '#1e293b', '#94a3b8'],
  ['edu-geo', 'oceans',     '5 Đại Dương',     '🌊', 'Thái Bình, Đại Tây...', '#0c4a6e', '#22d3ee'],
  ['edu-geo', 'continents', '7 Châu Lục',      '🗺️', 'Á, Âu, Phi, Mỹ...', '#166534', '#4ade80'],
  ['edu-geo', 'flags',      'Cờ Quốc Gia',     '🏳️', 'Nhận diện cờ', '#4c1d95', '#c084fc'],
  ['edu-geo', 'climate',    'Khí Hậu',         '☀️', 'Nhiệt đới, ôn đới, hàn đới', '#854d0e', '#fde047'],
  ['edu-geo', 'population', 'Dân Số',          '👥', 'Top 10 nước đông dân', '#9d174d', '#f9a8d4'],
  ['edu-geo', 'landmarks',  'Địa Danh',        '🗽', 'Hạ Long, Kim Tự Tháp...', '#0f766e', '#2dd4bf'],

  // TYPING (10)
  ['edu-typing', 'letters',   'Gõ Chữ Cái',    '🔤', 'Gõ từng chữ cái xuất hiện', '#18181b', '#d4d4d8'],
  ['edu-typing', 'words',     'Gõ Từ',         '📝', 'Gõ từ tiếng Việt', '#1e293b', '#94a3b8'],
  ['edu-typing', 'sentences', 'Gõ Câu',        '📄', 'Gõ câu đơn giản', '#0f172a', '#60a5fa'],
  ['edu-typing', 'numbers',   'Gõ Số',         '🔢', 'Gõ dãy số ngẫu nhiên', '#44403c', '#d6d3d1'],
  ['edu-typing', 'symbols',   'Gõ Ký Hiệu',    '🔣', '@, #, $, %, ^', '#27272a', '#fbbf24'],
  ['edu-typing', 'code',      'Gõ Code',       '💻', 'Snippet lập trình', '#0f172a', '#38bdf8'],
  ['edu-typing', 'speed',     'Đua Tốc Độ',    '🏃', '60 giây gõ càng nhanh càng tốt', '#7c2d12', '#fb923c'],
  ['edu-typing', 'accuracy',  'Độ Chính Xác',  '🎯', 'Sai 1 từ là thua', '#7f1d1d', '#f87171'],
  ['edu-typing', 'blind',     'Gõ Mù',         '👁️‍🗨️', 'Không nhìn bàn phím', '#18181b', '#71717a'],
  ['edu-typing', 'zigzag',    'Chữ Rơi',       '🔀', 'Gõ chữ rơi ngẫu nhiên', '#4c1d95', '#a78bfa'],

  // CODING (10)
  ['edu-code', 'sequence',  'Sắp Xếp Bước',  '🔄', 'Đặt các bước đúng thứ tự', '#0f172a', '#38bdf8'],
  ['edu-code', 'loop',      'Vòng Lặp',      '🔁', 'Tính kết quả for/while', '#1e40af', '#60a5fa'],
  ['edu-code', 'variable',  'Biến',          '📦', 'Giá trị biến sau gán', '#166534', '#4ade80'],
  ['edu-code', 'condition', 'If/Else',       '❓', 'Dự đoán nhánh điều kiện', '#7c2d12', '#fb923c'],
  ['edu-code', 'function',  'Hàm',           '🛠️', 'Tính f(x)', '#4c1d95', '#a78bfa'],
  ['edu-code', 'debug',     'Tìm Lỗi',       '🐛', 'Phát hiện bug trong code', '#7f1d1d', '#f87171'],
  ['edu-code', 'output',    'Đoán Output',   '📤', 'console.log sẽ in gì?', '#0f766e', '#2dd4bf'],
  ['edu-code', 'operator',  'Toán Tử',       '➕', '++, +=, ==, &&', '#9d174d', '#f472b6'],
  ['edu-code', 'array',     'Mảng',          '📋', 'push, pop, length', '#854d0e', '#fde047'],
  ['edu-code', 'logic',     'Logic Bool',    '🧠', 'AND, OR, NOT bảng chân trị', '#1e1b4b', '#818cf8'],

  // MEMORY (10)
  ['edu-memory', 'digits',    'Nhớ Dãy Số',    '🔢', 'Xem rồi gõ lại dãy số', '#4c1d95', '#c084fc'],
  ['edu-memory', 'colors',    'Nhớ Màu',       '🎨', 'Simon says với màu', '#be185d', '#f472b6'],
  ['edu-memory', 'shapes',    'Nhớ Hình',      '🔺', 'Vị trí hình trong lưới', '#0c4a6e', '#38bdf8'],
  ['edu-memory', 'positions', 'Nhớ Vị Trí',    '📍', 'Ô sáng trong bảng', '#166534', '#4ade80'],
  ['edu-memory', 'faces',     'Nhớ Khuôn Mặt', '👥', 'Emoji và tên đi kèm', '#9d174d', '#f9a8d4'],
  ['edu-memory', 'words',     'Nhớ Từ',       '📝', 'Danh sách từ cần nhớ', '#854d0e', '#fde047'],
  ['edu-memory', 'order',     'Nhớ Thứ Tự',    '⏱️', 'Thứ tự vật xuất hiện', '#7e22ce', '#d8b4fe'],
  ['edu-memory', 'audio',     'Nhớ Nốt Nhạc',  '🔊', 'Dãy nốt Web Audio', '#0f766e', '#2dd4bf'],
  ['edu-memory', 'visual',    'Nhớ Hình Ảnh',  '👁️', 'Flash emoji 2s', '#7c2d12', '#fb923c'],
  ['edu-memory', 'mix',       'Kết Hợp',       '🎲', 'Kết hợp nhiều loại', '#1e1b4b', '#818cf8'],

  // QUIZ (10)
  ['edu-quiz', 'general', 'Kiến Thức Chung',    '🎓', 'Trắc nghiệm đa chủ đề', '#1e3a8a', '#60a5fa'],
  ['edu-quiz', 'sports',  'Thể Thao',           '⚽', 'Câu đố thể thao', '#166534', '#4ade80'],
  ['edu-quiz', 'music',   'Âm Nhạc',            '🎵', 'Nhạc cụ, nhịp điệu', '#4c1d95', '#c084fc'],
  ['edu-quiz', 'movies',  'Điện Ảnh',           '🎬', 'Thể loại phim, kỹ thuật', '#1e293b', '#94a3b8'],
  ['edu-quiz', 'food',    'Ẩm Thực',            '🍜', 'Món ăn thế giới', '#7c2d12', '#fb923c'],
  ['edu-quiz', 'tech',    'Công Nghệ',          '💻', 'Phát minh, IT', '#0c4a6e', '#38bdf8'],
  ['edu-quiz', 'art',     'Nghệ Thuật',         '🎨', 'Họa sĩ, phong trào', '#9d174d', '#f472b6'],
  ['edu-quiz', 'nature',  'Thiên Nhiên',        '🌿', 'Sinh thái, động thực vật', '#065f46', '#34d399'],
  ['edu-quiz', 'mixed',   'Tổng Hợp',           '🎲', 'Mọi chủ đề', '#7e22ce', '#d8b4fe'],
  ['edu-quiz', 'trivia',  'Câu Hỏi Kỳ Thú',     '🎯', 'Fun facts', '#854d0e', '#fde047'],
];

EDU_GAMES.forEach(([hub, hash, name, icon, desc, bgDark, border]) => {
  const tagMap = {
    'edu-math': ['học tập', 'toán', 'tư duy'],
    'edu-english': ['học tập', 'tiếng Anh', 'từ vựng'],
    'edu-viet': ['học tập', 'tiếng Việt', 'ngữ pháp'],
    'edu-science': ['học tập', 'khoa học', 'kiến thức'],
    'edu-history': ['học tập', 'lịch sử', 'Việt Nam'],
    'edu-geo': ['học tập', 'địa lý', 'thế giới'],
    'edu-typing': ['học tập', 'gõ phím', 'kỹ năng'],
    'edu-code': ['học tập', 'lập trình', 'tư duy'],
    'edu-memory': ['học tập', 'trí nhớ', 'luyện não'],
    'edu-quiz': ['học tập', 'đố vui', 'kiến thức']
  };
  GAMES.push({
    id: `${hub}-${hash}`,
    name: name,
    icon: icon,
    desc: desc,
    category: 'puzzle',
    tags: tagMap[hub],
    bg: `linear-gradient(135deg, #0a0a1e, ${bgDark})`,
    border: border,
    file: `${hub}.html#${hash}`
  });
});

MORE_GAMES.forEach(([hub, hash, name, icon, desc, category, bgDark, border]) => {
  const tagMap = {
    'cook-hub': ['nấu ăn', 'Việt Nam', 'timing'],
    'sport-hub': ['thể thao', 'phản xạ', 'vận động'],
    'music-hub': ['âm nhạc', 'nhạc cụ', 'synth'],
    'card-hub': ['bài', 'cổ điển', 'may rủi'],
    'edu-hub': ['học tập', 'trí tuệ', 'tư duy'],
    'idle-hub': ['idle', 'click', 'nâng cấp'],
    'brain-hub': ['luyện não', 'logic', 'tư duy'],
    'art-hub': ['nghệ thuật', 'sáng tạo', 'vẽ'],
    'horror-hub': ['bí ẩn', 'ma quái', 'rùng rợn'],
    'life-hub': ['cuộc sống', 'mô phỏng', 'thư giãn']
  };
  GAMES.push({
    id: `${hub}-${hash}`,
    name: name,
    icon: icon,
    desc: desc,
    category: category,
    tags: tagMap[hub],
    bg: `linear-gradient(135deg, #0a0a1e, ${bgDark})`,
    border: border,
    file: `${hub}.html#${hash}`
  });
});

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
