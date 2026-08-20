/**
 * GAME HUB - Shared Save Helper
 *
 * API (window.GameSave):
 *   GameSave.save(id, data)            -> ghi ngay (đồng bộ)
 *   GameSave.load(id, defaults)        -> đọc, trả defaults nếu chưa có / lỗi
 *   GameSave.clear(id)                 -> xoá save của 1 game
 *   GameSave.saveThrottled(id, data,
 *                          ms=500)     -> gộp ghi liên tục, chỉ flush sau ms
 *   GameSave.flush(id)                 -> ép ghi ngay save đang pending
 *   GameSave.migrate(oldKey, id)       -> chuyển save từ key cũ sang chuẩn mới
 *
 * Key chuẩn: gamehub_save_<id>   (ví dụ gamehub_save_tsunami-zoo)
 * Dữ liệu lưu là object JSON tuỳ game tự định nghĩa schema.
 */

(function () {
  var PREFIX = 'gamehub_save_';
  var pending = {};   // id -> { data, timer }

  function keyOf(id) { return PREFIX + id; }

  function save(id, data) {
    try {
      localStorage.setItem(keyOf(id), JSON.stringify(data));
      return true;
    } catch (e) {
      // Quota / privacy mode — bỏ qua nhẹ nhàng
      console.warn('[GameSave] save failed', id, e);
      return false;
    }
  }

  function load(id, defaults) {
    try {
      var raw = localStorage.getItem(keyOf(id));
      if (!raw) return defaults != null ? defaults : null;
      var parsed = JSON.parse(raw);
      if (defaults && typeof defaults === 'object' && !Array.isArray(defaults)) {
        // Merge nông để khi thêm field mới vẫn có giá trị mặc định
        return Object.assign({}, defaults, parsed);
      }
      return parsed;
    } catch (e) {
      console.warn('[GameSave] load failed', id, e);
      return defaults != null ? defaults : null;
    }
  }

  function clear(id) {
    try { localStorage.removeItem(keyOf(id)); } catch (e) {}
    if (pending[id] && pending[id].timer) {
      clearTimeout(pending[id].timer);
      delete pending[id];
    }
  }

  function saveThrottled(id, data, ms) {
    ms = ms || 500;
    if (pending[id] && pending[id].timer) clearTimeout(pending[id].timer);
    pending[id] = {
      data: data,
      timer: setTimeout(function () {
        save(id, pending[id].data);
        delete pending[id];
      }, ms),
    };
  }

  function flush(id) {
    if (!pending[id]) return;
    clearTimeout(pending[id].timer);
    save(id, pending[id].data);
    delete pending[id];
  }

  // Chuyển save từ key cũ (vd 'tsunamiZoo_v4') sang chuẩn mới.
  // Chỉ migrate nếu key mới chưa có, sau đó xoá key cũ.
  function migrate(oldKey, id) {
    try {
      var newKey = keyOf(id);
      if (localStorage.getItem(newKey)) return false;       // đã có save mới
      var old = localStorage.getItem(oldKey);
      if (!old) return false;
      localStorage.setItem(newKey, old);
      localStorage.removeItem(oldKey);
      return true;
    } catch (e) { return false; }
  }

  // Flush mọi save đang pending khi rời trang
  window.addEventListener('beforeunload', function () {
    Object.keys(pending).forEach(function (id) { flush(id); });
  });

  window.GameSave = {
    save: save,
    load: load,
    clear: clear,
    saveThrottled: saveThrottled,
    flush: flush,
    migrate: migrate,
    PREFIX: PREFIX,
  };
})();
