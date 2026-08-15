# English Center Website — Context & hướng dẫn cho nhóm + agent

ĐỌC FILE NÀY ĐẦU TIÊN (người và agent). Đây là bản đồ, không phải
tài liệu đầy đủ — chi tiết nằm ở các file được trỏ tới, và trong code src/.

## Dự án là gì
Website FE cho trung tâm tiếng Anh + quản lý sinh viên. Đồ án nhóm 3 người.
- TRANG CHỦ (public): landing thu hút học viên — do Hoàng làm.
- SAU ĐĂNG NHẬP (dashboard theo vai trò): student / teacher / admin
  — do 2 bạn còn lại làm.

## Tech stack (ĐÃ CHỐT — không tự ý thêm thư viện)
- React 19 + react-router-dom v7 + TypeScript
- Build: Vite | Lint: oxlint
- Styling: CSS THUẦN + design tokens (src/styles/tokens.css)
  → KHÔNG Tailwind, KHÔNG Bootstrap. Agent tuyệt đối không tự cài lib mới.
- Dữ liệu: MOCK trong src/data/*.ts (nguồn thật). Chưa có API/backend.
- Chưa dùng: state library, thư viện form.

## Lệnh
- npm install
- npm run dev
- npm run build
- npm run lint
- npm run typecheck
- BẮT BUỘC: `npm run lint && npm run typecheck` phải XANH trước khi push.

## Cấu trúc (thật)
- src/App.tsx, main.tsx, routes.tsx   # entry + khai báo route
- src/pages/                          # từng page (+ student/ teacher/ admin/)
- src/components/  ui/ (dùng chung) · sections/ (khối trang chủ) · layout/
- src/context/AuthContext.tsx         # nền đăng nhập dùng chung
- src/data/*.ts + index.ts            # mock data (barrel)
- src/types/*.ts + index.ts           # type theo entity (barrel)
- src/styles/  tokens.css + global/index/reset
Lưu ý: /data/*.json ở GỐC repo là dữ liệu cũ, APP KHÔNG dùng — chỉ import từ src/data/.

## ĐĂNG NHẬP — nền dùng chung ĐÃ CÓ (do Hoàng làm, đừng viết lại)
- Lấy người đang đăng nhập ở bất kỳ trang nào:
    import { useAuth } from "../../context/AuthContext";
    const { user, logout } = useAuth();   // user.role = "student" | "teacher" | "admin"
- Trang cần bảo vệ: bọc bằng <ProtectedRoute role="...">...</ProtectedRoute> trong routes.tsx.
- Route đã có: /student, /teacher, /admin (đều chặn theo vai trò).
- Tài khoản demo (mật khẩu 123456): student@demo.com / teacher@demo.com / admin@demo.com
→ 2 bạn CHỈ lấp nội dung vào src/pages/<role>/index.tsx, KHÔNG tự tạo auth/context mới.

## AI GIỮ PHẦN NÀO (chia theo thư mục để không đụng nhau)
- Hoàng — TRANG CHỦ + nền auth: src/pages/Home.tsx, src/components/sections/,
  src/context/, src/components/ProtectedRoute.tsx.
- ⟨Bạn 2⟩ — DASHBOARD: src/pages/student/  và/hoặc  src/pages/teacher/
- ⟨Bạn 3⟩ — DASHBOARD: src/pages/admin/   (2 bạn tự chia 3 vai trò cho đều)

## FILE DÙNG CHUNG — sửa phải báo nhóm trước
src/routes.tsx · src/styles/tokens.css · src/components/ui/ · src/context/ · src/data/ · src/types/
(chỗ dễ đẻ component trùng & gây conflict nhất — vd 3 người tự làm 3 cái Sidebar)

## Tài liệu (mỗi thứ 1 nơi, đừng chép lặp)
- Ai làm gì (đầy đủ): docs/4-Schedule-phan-cong-nhom.md
- Tiến độ + bàn giao (đọc để biết TIẾP TỪ ĐÂU): docs/5-Tong-quan-tien-do.md
- Thiết kế hệ thống: docs/3-So-do-thiet-ke-he-thong.md

## Nhịp làm việc (để không mất context giữa các buổi)
- ĐẦU buổi, nói với agent: "Đọc CLAUDE.md và docs/5-Tong-quan-tien-do.md,
  rồi làm tiếp phần [X] của tôi."
- CUỐI buổi: cập nhật khối bàn giao trong docs/5-Tong-quan-tien-do.md
  (xong gì / đang dở / việc tiếp theo / bẫy cần biết) → commit + push.
- Điều gì không ghi vào file đã commit = coi như mất.