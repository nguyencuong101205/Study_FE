# Khóa học ReactJS - F8

---

## 1. Tổng quan: SPA vs MPA

| Tiêu chí              | SPA (Single-Page App)                                   | MPA (Multi-Page App)                               |
| :-------------------- | :------------------------------------------------------ | :------------------------------------------------- |
| **Định nghĩa**        | Tải 1 file HTML duy nhất;<br>Cập nhật ngầm qua JS (API) | Tải lại toàn bộ trang HTML mới<br>khi chuyển trang |
| **Framework / Tech**  | ReactJS, VueJS, Angular                                 | Laravel, Django, ASP.NET, PHP                      |
| **Website tiêu biểu** | Facebook, YouTube, F8, Shopee                           | VnExpress, Dân Trí, Wikipedia                      |

---

## 2. So sánh chi tiết: SPA vs MPA

| Hạng mục              | SPA (Single-Page App)                    | MPA (Multi-Page App)                   |
| :-------------------- | :--------------------------------------- | :------------------------------------- |
| **Cơ chế hoạt động**  | Tải 1 lần, render lại DOM qua API        | Reload toàn trang (Full Page Reload)   |
| **Tải lần đầu**       | **Chậm hơn** (tải toàn bộ bundle JS/CSS) | **Nhanh hơn** (chỉ tải HTML/CSS trang) |
| **Tốc độ khi dùng**   | **Rất nhanh & mượt** (chỉ fetch JSON)    | **Chậm hơn** (tải lại toàn trang)      |
| **Trải nghiệm (UX)**  | Mượt mà, không chớp trắng màn hình       | Bị gián đoạn khi chuyển trang          |
| **Kiến trúc FE & BE** | **Tách biệt hoàn toàn** qua API          | **Gắn liền nhau**, chung 1 project     |
| **Tái sử dụng API**   | **Rất cao** (Web + iOS + Android)        | **Thấp** (chủ yếu render HTML web)     |
| **SEO**               | Cần cấu hình thêm (SSR / Next.js)        | **Rất tốt** mặc định                   |
| **Băng thông**        | Tiết kiệm sau lần đầu                    | Tốn hơn (tải lại header, footer...)    |

---

## 3. Ưu điểm của SPA (Bài 1.3)

| Ưu điểm                | Chi tiết                       | Lợi ích                             |
| :--------------------- | :----------------------------- | :---------------------------------- |
| **1. Trải nghiệm UX**  | Không chớp trắng màn hình      | Trải nghiệm mượt như Native App     |
| **2. Tối ưu mạng**     | Chỉ truyền nhận JSON nhẹ       | Tăng tốc độ, tiết kiệm băng thông   |
| **3. Bóc tách FE/BE**  | Làm việc độc lập qua API       | Phát triển song song, dễ bảo trì    |
| **4. Đa nền tảng**     | 1 backend phục vụ nhiều client | Tiết kiệm chi phí viết backend      |
| **5. Giảm tải Server** | Client đảm nhiệm việc render   | Server chịu tải được nhiều user hơn |

---

## 4. Khi nào nên dùng SPA hay MPA?

| Loại dự án                                         | Lựa chọn | Lý do                                   |
| :------------------------------------------------- | :------: | :-------------------------------------- |
| **App tương tác cao** (MXH, Dashboard, SaaS, Chat) | **SPA**  | Cần phản hồi tức thì, UX mượt mà        |
| **Đa nền tảng** (Web + Mobile App)                 | **SPA**  | Tái sử dụng chung hệ thống API          |
| **Đặt nặng SEO** (Báo chí, Blog tin tức)           | **MPA**  | Bot Google cào nội dung dễ dàng         |
| **Dự án nhỏ, đơn giản**                            | **MPA**  | Nhanh, không cần quản lý state phức tạp |
