# 🌐 Website Trung tâm Tiếng Anh — Front-end

Đồ án môn học kỳ | Nhóm thực hiện: **Duy** + **Hoàng**

## 📁 Cấu trúc thư mục

```
english-center-website/
├── index.html              # Trang chủ
├── pages/                  # Các trang còn lại
│   ├── courses.html            # Danh sách khóa học
│   ├── course-detail.html      # Chi tiết khóa học
│   ├── login.html              # Đăng nhập
│   ├── register.html           # Đăng ký tài khoản
│   ├── profile.html            # Trang cá nhân học viên
│   ├── teachers.html           # Danh sách giáo viên
│   ├── blog.html                # Blog / Tin tức
│   └── contact.html             # Liên hệ
├── components/              # Phần dùng chung nhiều trang
│   ├── header.html
│   └── footer.html
├── assets/
│   ├── css/
│   │   ├── variables.css       # Bảng màu, font dùng chung (style guide)
│   │   └── style.css           # CSS chính
│   ├── js/
│   │   └── main.js             # JS chính (load data, xử lý sự kiện)
│   └── images/                 # Hình ảnh (logo, banner, avatar mẫu...)
├── data/                     # Mock data (dữ liệu giả lập, thay cho database)
│   ├── courses.json
│   ├── categories.json
│   ├── teachers.json
│   ├── users.json
│   ├── enrollments.json
│   └── reviews.json
└── docs/                     # Toàn bộ tài liệu phân tích - thiết kế của đồ án
```

## ✅ Việc cần làm khi bắt đầu

1. Mỗi người **kéo nhánh riêng** trước khi code (xem quy ước Git bên dưới)
2. Trang được giao nằm trong `pages/` — tạo file `.html` đúng tên đã liệt kê ở trên
3. Dữ liệu hiển thị lên trang thì **lấy từ file JSON trong `data/`**, không tự bịa dữ liệu ngay trong HTML — để đúng tinh thần dữ liệu tách biệt như thiết kế ERD
4. CSS chung (màu, font, spacing) đã có sẵn biến trong `assets/css/variables.css` — dùng lại thay vì tự đặt màu mới, để giao diện đồng bộ giữa 2 người
5. Xem lại toàn bộ tài liệu thiết kế trong thư mục `docs/` trước khi code trang được giao

## 🔀 Quy ước Git (đã thống nhất trong Schedule)

```bash
git checkout -b feature/ten-trang     # VD: feature/trang-chu
# ... code ...
git add .
git commit -m "Add: mô tả ngắn gọn"
git push origin feature/ten-trang
# Sau đó tạo Pull Request trên GitHub để 2 người review trước khi merge vào main
```

## 🧩 Công nghệ sử dụng

- HTML/CSS/JS thuần (chưa dùng framework — cập nhật lại phần này nếu nhóm đổi sang React/Vue)
- Dữ liệu: mock data dạng JSON, load bằng `fetch()` trong `main.js`

## 📚 Tài liệu liên quan

Toàn bộ Problem Statement, Research, ERD, Activity Diagram, Schedule, Tổng quan tiến độ nằm trong thư mục `docs/`.
# english-center-website
