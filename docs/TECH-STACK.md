# Tech Stack — CHÍNH THỨC (đã chốt cả nhóm)

Danh sách này là nguồn sự thật duy nhất về công nghệ dùng trong dự án.
Docs khác và code phải khớp với đây. Muốn thêm/đổi thư viện → bàn nhóm trước.

## Đang dùng
- React 19
- react-router-dom v7        # định tuyến
- TypeScript
- Vite                       # dev server + build
- oxlint                     # lint

## Styling
- CSS THUẦN + design tokens (src/styles/tokens.css)
- KHÔNG dùng Tailwind, KHÔNG dùng Bootstrap
  (docs cũ từng ghi Tailwind/Bootstrap như phương án cân nhắc — nay đã BỎ, chốt CSS thuần)

## Dữ liệu
- Mock trong src/data/*.ts (chưa có backend/API)

## Chưa dùng (nếu cần sẽ bàn nhóm)
- State library (Redux/Zustand...)
- API client (axios/fetch wrapper)
- Thư viện form