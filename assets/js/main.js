/* ============================================
   MAIN.JS — hàm dùng chung để load mock data
   Mỗi trang tự gọi loadData('ten_file') để lấy dữ liệu
   ============================================ */

/**
 * Load 1 file JSON trong thư mục /data
 * @param {string} fileName - tên file không cần .json, VD: 'courses'
 * @returns {Promise<Array|Object>}
 */
async function loadData(fileName) {
  try {
    // Lưu ý: đường dẫn tới /data thay đổi tùy trang nằm ở root hay trong /pages
    // Nếu file đang code nằm trong pages/, dùng '../data/' thay vì '/data/'
    const res = await fetch(`/data/${fileName}.json`);
    if (!res.ok) throw new Error(`Không tải được ${fileName}.json`);
    return await res.json();
  } catch (err) {
    console.error('Lỗi load data:', err);
    return [];
  }
}

/* ===== VÍ DỤ SỬ DỤNG (xóa đoạn này khi bắt đầu code thật) =====
loadData('courses').then(courses => {
  console.log(courses);
  // TODO: render danh sách khóa học ra HTML ở đây
});
================================================================ */

// TODO: mỗi trang import/thêm JS riêng cho logic của trang đó
