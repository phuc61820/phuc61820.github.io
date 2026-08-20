/**
 * Đếm lượt truy cập — fetch 1 lần, cache, hiển thị mỗi lần re-render
 */
(function() {
  // API chính: counterapi.dev (giữ data lịch sử)
  var ENDPOINT = 'https://api.counterapi.dev/v1/phuc61820-gamehub/visits/up';
  var cachedCount = null;
  var hasFetched = false;

  function render() {
    var el = document.getElementById('visitorCount');
    if (!el) return;
    if (cachedCount !== null) {
      el.innerHTML = '👥 <strong>' + cachedCount.toLocaleString('vi-VN') + '</strong> lượt ghé';
    } else if (hasFetched) {
      el.innerHTML = '👥 —';
    }
    // Nếu chưa fetch xong: giữ placeholder "👥 ..."
  }

  function fetchCount() {
    fetch(ENDPOINT)
      .then(function(r) { return r.json(); })
      .then(function(data) {
        cachedCount = data.count || data.value || 0;
        hasFetched = true;
        render();
      })
      .catch(function() {
        hasFetched = true;
        render();
      });
  }

  function start() {
    if (document.getElementById('visitorCount')) {
      fetchCount();
    } else {
      setTimeout(start, 100);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }

  // Cho app.js gọi lại sau khi re-render footer
  window.GameHubStats = { refresh: render };
})();
