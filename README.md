# English Center Website

Website FE cho trung tâm tiếng Anh + quản lý sinh viên (đồ án nhóm 3 người).
Trang chủ công khai + dashboard theo vai trò (student / teacher / admin) sau đăng nhập.

## Chạy dự án
```bash
npm install     # cài lần đầu
npm run dev     # chạy local, mở http://localhost:5173
```

Trước khi push: `npm run lint && npm run typecheck` phải xanh.

## Đăng nhập thử (demo, chưa có backend)
Mật khẩu chung: `123456`
- `student@demo.com` → dashboard học viên
- `teacher@demo.com` → dashboard giáo viên
- `admin@demo.com` → trang quản trị

## Bắt đầu code
1. Đọc **`CLAUDE.md`** ở gốc repo — bản đồ đầy đủ (tech stack, cấu trúc, ai làm gì, luật, nền auth).
2. Xem tiến độ & việc tiếp theo ở **`docs/5-Tong-quan-tien-do.md`**.
3. Dùng agent (Claude Code / Copilot)? Bảo nó "đọc CLAUDE.md rồi làm theo".