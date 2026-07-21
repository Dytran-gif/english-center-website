# 🧭 GIẢI THÍCH FLOW LÀM ĐỒ ÁN — Dành cho cả nhóm (Duy + Hoàng)

> Mục đích tài liệu này: giải thích **vì sao** làm theo thứ tự này, và **từng task cụ thể là làm gì, để làm gì** — để cả 2 người đều hiểu bức tranh chung, không chỉ làm task được giao mà không biết nó phục vụ cái gì.

---

## 🔗 Vì sao phải làm theo đúng thứ tự này?

Đồ án này không phải "nghĩ tính năng → code luôn" mà đi theo quy trình chuẩn của một dự án phần mềm thật: **Hiểu vấn đề → Nghiên cứu → Thiết kế → Code → Kiểm thử → Báo cáo**. Lý do:

- Nếu **code trước khi thiết kế dữ liệu (ERD)** → giữa chừng phát hiện thiếu bảng, phải sửa lại code đã viết → mất thời gian gấp đôi
- Nếu **không nghiên cứu trước** → tính năng làm ra có thể trùng lặp hoặc không có gì mới so với thị trường → bị thầy đánh giá thấp phần sáng tạo
- Nếu **2 người code song song mà chưa thống nhất tech stack + style guide** → giao diện các trang không đồng bộ, phải sửa lại toàn bộ

Nói ngắn gọn: **giai đoạn sau luôn dựa vào kết quả của giai đoạn trước**. Bỏ qua bước nào cũng sẽ phải quay lại làm bù sau.

```
Vấn đề (biết đang giải quyết gì)
   ↓
Nghiên cứu (biết người khác đã làm gì, mình khác gì)
   ↓
Thiết kế (biết chính xác cần bao nhiêu trang, bao nhiêu bảng dữ liệu)
   ↓
Code (dựa 100% vào thiết kế đã chốt, không đoán mò)
   ↓
Kiểm thử (đảm bảo mọi thứ chạy đúng như thiết kế)
   ↓
Báo cáo (kể lại toàn bộ quá trình trên cho thầy)
```

---

## 📌 GIAI ĐOẠN 1: Xác định vấn đề & Nghiên cứu

**Mục đích của cả giai đoạn:** Trả lời câu hỏi "web này sinh ra để giải quyết cái gì, và tại sao nó đáng làm". Nếu bỏ qua giai đoạn này, đồ án sẽ chỉ là "làm web đẹp" chứ không chứng minh được tư duy phân tích — điều thầy cô đánh giá cao nhất.

| Task | Giải thích cụ thể |
|---|---|
| **Viết Problem Statement** | Là bài viết 1-2 trang mô tả: hiện trạng các trung tâm tiếng Anh đang gặp vấn đề gì (VD: học viên không tự đăng ký được online, không biết trình độ mình tới đâu...). Đây là "lý do tồn tại" của cả đồ án — mọi tính năng sau này phải quay về giải quyết đúng những vấn đề liệt kê ở đây. |
| **Research 2-3 website tham khảo** | Vào thử các web trung tâm thật (ILA, Wall Street English...) để xem họ đã làm gì tốt, chưa làm gì. Mục đích **không phải để copy**, mà để tìm ra "khoảng trống" — thứ họ chưa làm mà nhóm mình có thể làm để tạo điểm khác biệt. |
| **Tổng hợp tính năng mới đề xuất** | Từ khoảng trống tìm được ở bước trên, liệt kê ra 3-5 tính năng nhóm sẽ làm thêm (VD: bài test trình độ, trang đánh giá giáo viên...). Đây chính là danh sách tính năng "ăn điểm sáng tạo". |
| **Họp nhóm chốt vấn đề + tính năng** | Cả 2 người cùng thống nhất — vì nếu 1 người tự quyết, người còn lại code sẽ không hiểu vì sao trang đó tồn tại, dễ làm sai hướng. |

---

## 📌 GIAI ĐOẠN 2: Requirements & Tech Stack

**Mục đích của cả giai đoạn:** Biến các ý tưởng ở Giai đoạn 1 thành **danh sách cụ thể, đo lường được** — để 2 người biết chính xác cần code bao nhiêu trang, dùng công nghệ gì, và ai làm phần nào.

| Task | Giải thích cụ thể |
|---|---|
| **Lập danh sách Requirements (Functional/Security/UI-UX/Performance)** | Chia nhỏ yêu cầu thành 4 loại chuẩn của ngành phần mềm: Functional = tính năng làm được gì; Security = ai được xem/sửa gì; UI/UX = trải nghiệm dùng có dễ không; Performance = web có chạy nhanh không. Việc phân loại này giúp không bỏ sót yêu cầu quan trọng (nhiều nhóm chỉ nghĩ đến Functional mà quên Security/Performance, bị trừ điểm). |
| **Chốt tech stack** | Quyết định dùng công nghệ gì (React/Vue/HTML thuần, Tailwind/Bootstrap...) — phải chốt **trước khi code** vì 2 người phải dùng chung 1 công nghệ mới ghép code lại được với nhau. Đổi giữa chừng sẽ phải viết lại từ đầu. |
| **Vẽ User Tree** | Xác định rõ có bao nhiêu loại người dùng (Khách/Học viên/Giáo viên/Admin) và mỗi loại được làm gì trên web. Đây là cơ sở để sau này biết trang nào cần đăng nhập, trang nào ai xem được. |
| **Vẽ Activity Diagram** | Vẽ ra từng bước cụ thể của 1 luồng thao tác (VD: học viên đăng ký khóa học thì bấm gì trước, gì sau). Mục đích: trước khi code trang đó, cả 2 người đã hình dung chính xác trang sẽ hoạt động ra sao, tránh code xong mới phát hiện thiếu bước. |

---

## 📌 GIAI ĐOẠN 3: Thiết kế hệ thống & Giao diện

**Mục đích của cả giai đoạn:** Thiết kế "bộ khung" dữ liệu và giao diện trước khi code — vì sửa trên giấy/diagram nhanh hơn rất nhiều so với sửa code đã viết.

| Task | Giải thích cụ thể |
|---|---|
| **Thiết kế ERD** | Vẽ ra các "bảng dữ liệu" web sẽ cần (User, Course, Enrollment...) và mối quan hệ giữa chúng — dù đồ án là front-end (không có database thật), vẫn phải thiết kế để biết dữ liệu mock (giả) sẽ có cấu trúc gì, tránh code lung tung không nhất quán. |
| **Chuẩn hóa dữ liệu (Normalization)** | Kiểm tra lại ERD xem có bị lặp thông tin không (VD: tên giáo viên bị ghi lặp lại ở mỗi dòng khóa học) — chuẩn hóa giúp dữ liệu gọn, đúng chuẩn thiết kế phần mềm, và là phần thầy hay hỏi khi bảo vệ đồ án. |
| **Vẽ Wireframe/Mockup (Figma)** | Vẽ phác thảo giao diện từng trang trước khi code thật — như bản vẽ nháp của kiến trúc sư trước khi xây nhà. Giúp 2 người thống nhất trang sẽ trông ra sao trước khi 1 người code sai ý người kia. |
| **Chốt style guide chung (màu/font)** | Quyết định trước bảng màu, font chữ, khoảng cách chuẩn — để trang của Duy và trang của Hoàng nhìn "cùng 1 web" chứ không bị lệch phong cách khi ghép lại. |

---

## 📌 GIAI ĐOẠN 4: Code giao diện

**Mục đích của cả giai đoạn:** Biến toàn bộ thiết kế ở trên thành sản phẩm thật, chạy được trên trình duyệt.

| Task | Giải thích cụ thể |
|---|---|
| **Header/Footer/Navbar dùng chung** | Làm trước tiên vì đây là phần **xuất hiện trên mọi trang** — nếu làm sau, phải sửa lại ở tất cả các trang đã code. Làm chung 1 lần, cả 2 người cùng dùng lại. |
| **Từng trang riêng (Home, Khóa học, Đăng nhập...)** | Mỗi trang được giao cho 1 người, dựa đúng theo Wireframe và ERD đã chốt ở Giai đoạn 3 — không tự sáng tác thêm ngoài kế hoạch để tránh lệch hướng. |

---

## 📌 GIAI ĐOẠN 5: Ghép nối & Kiểm thử

**Mục đích của cả giai đoạn:** Đảm bảo các trang do 2 người làm riêng khi ghép lại thành 1 web hoàn chỉnh thì chạy đúng, không lỗi.

| Task | Giải thích cụ thể |
|---|---|
| **Ghép các trang thành 1 project** | Gộp code của Duy và Hoàng vào cùng 1 repo/project, kiểm tra đường link giữa các trang có hoạt động đúng không. |
| **Kiểm tra responsive** | Test web trên điện thoại/tablet — vì học viên thật thường xem web bằng điện thoại trước. |
| **Kiểm tra luồng chức năng end-to-end** | Thử đóng vai 1 học viên thật, đi từ trang chủ → xem khóa học → đăng ký → xem tài khoản, xem có bước nào bị đứt/lỗi không. |
| **Fix bug, tối ưu tốc độ** | Sửa các lỗi phát hiện được ở 2 bước trên. |

---

## 📌 GIAI ĐOẠN 6: Báo cáo & Bảo vệ

**Mục đích của cả giai đoạn:** Trình bày lại toàn bộ quá trình trên (từ Giai đoạn 1-5) cho thầy hiểu và đánh giá — vì thầy không nhìn thấy quá trình làm việc, chỉ nhìn thấy báo cáo + sản phẩm cuối.

| Task | Giải thích cụ thể |
|---|---|
| **Viết báo cáo Phân tích - Thiết kế** | Trình bày lại nội dung Giai đoạn 1-3 (vấn đề, research, ERD, diagram) thành văn bản báo cáo hoàn chỉnh. |
| **Viết báo cáo Công nghệ - Triển khai** | Trình bày lại Giai đoạn 4-5 (công nghệ dùng, cách code, cách kiểm thử) cho thầy thấy quá trình triển khai thực tế. |
| **Làm slide thuyết trình** | Tóm tắt báo cáo thành slide ngắn gọn, dễ trình bày trong thời gian giới hạn khi bảo vệ. |
| **Tập thuyết trình thử** | Diễn tập trước để tránh bị động khi thầy hỏi, và để cả 2 người phối hợp nhịp nhàng khi trình bày trước lớp. |

---

## ✅ Tóm tắt 1 câu cho mỗi giai đoạn (để nhớ nhanh)

1. **Vấn đề & Nghiên cứu** → Biết đang làm gì và tại sao
2. **Requirements & Tech stack** → Biết cần bao nhiêu tính năng và dùng công nghệ gì
3. **Thiết kế hệ thống** → Vẽ bản nháp trước khi code thật
4. **Code giao diện** → Biến bản nháp thành sản phẩm chạy được
5. **Ghép nối & Kiểm thử** → Đảm bảo mọi thứ khớp và chạy đúng
6. **Báo cáo & Bảo vệ** → Kể lại toàn bộ câu chuyện cho thầy nghe
