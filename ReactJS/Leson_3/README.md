# So sánh và Phân biệt giữa React 17 và React 18 (ReactDOM)

> *Ghi chú:* React 18 là bước nhảy vọt quan trọng về mặt kiến trúc, chuyển đổi từ mô hình kết xuất đồng bộ (Synchronous Rendering) sang mô hình kết xuất đồng thời (**Concurrent Rendering**).

---

## 1. Khởi tạo Root API mới (`react-dom/client`)

Đây là thay đổi trực quan nhất khi làm việc với DOM (tương tự ví dụ thực hành trong `index.html`).

### React 17 (Legacy Root API)
Dùng `ReactDOM.render` gắn trực tiếp cây component vào DOM node.
```javascript
import ReactDOM from 'react-dom';
import App from './App';

const container = document.getElementById('root');
ReactDOM.render(<App />, container);

// Unmount component:
// ReactDOM.unmountComponentAtNode(container);
```

### React 18 (New Root API)
Tách biệt bước tạo **Root** thông qua `ReactDOM.createRoot` rồi mới gọi hàm `.render()`.
```javascript
import ReactDOM from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);

// Unmount component:
// root.unmount();
```

> **Tại sao phải đổi?**
> - Kích hoạt cơ chế **Concurrent Mode** trong React 18.
> - Nếu trong React 18 vẫn dùng `ReactDOM.render`, ứng dụng sẽ chạy ở chế độ **Legacy Mode** (tắt toàn bộ tính năng mới của React 18) và xuất hiện cảnh báo (warning) trên console.

---

## 2. Automatic Batching (Tự động gom nhóm cập nhật State)

Batching là kỹ thuật gom nhiều lần gọi `setState` thành 1 lần render duy nhất để cải thiện hiệu năng.

* **React 17:** Chỉ tự động gom nhóm bên trong các **React Event Handlers** (ví dụ: `onClick`, `onChange`). Các cập nhật bên trong `setTimeout`, `Promise`, `fetch` hoặc native DOM listeners sẽ **không** được batch (mỗi `setState` re-render 1 lần).
* **React 18:** Tự động gom nhóm ở **mọi nơi** theo mặc định (kể cả `Promise`, `setTimeout`, native events).

```javascript
// Ví dụ: Trong setTimeout hoặc fetch callback
setTimeout(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
  // React 17: Render 2 lần riêng biệt
  // React 18: Gom lại và chỉ Render 1 lần duy nhất!
}, 1000);
```

> **Mẹo:** Nếu cần ép buộc React render ngay lập tức mà không batching trong React 18, sử dụng hàm `ReactDOM.flushSync()`:
> ```javascript
> import { flushSync } from 'react-dom';
> flushSync(() => {
>   setCount(c => c + 1);
> });
> ```

---

## 3. Concurrent Features (Cơ chế render đồng thời)

* **React 17:** Quá trình render là **đồng bộ và chặn luồng (blocking)**. Một khi React bắt đầu tính toán và vẽ lại DOM, tiến trình sẽ không thể bị ngắt quãng cho đến khi hoàn thành, dẫn đến tình trạng đơ/giật lag giao diện nếu component render nặng.
* **React 18:** Quá trình render có thể **tạm dừng, hoãn lại hoặc hủy bỏ** nếu có thao tác người dùng quan trọng hơn xuất hiện (như click chuột, gõ phím).

### Các API Transitions mới:
* `startTransition` / `useTransition`: Đánh dấu các tác vụ cập nhật state là "độ ưu tiên thấp / không khẩn cấp" (non-urgent update) — ví dụ: lọc kết quả tìm kiếm danh sách lớn trong khi người dùng đang gõ phím.
* `useDeferredValue`: Trì hoãn việc cập nhật một giá trị phụ thuộc để ưu tiên phản hồi giao diện chính trước.

---

## 4. Server-Side Rendering (SSR) & Suspense cải tiến

* **React 17:** Dùng `renderToString()`. Toàn bộ trang HTML trên server phải được tạo xong rồi mới gửi về client, và client phải tải xong toàn bộ JS thì mới bắt đầu "hydrate" được trang.
* **React 18:** 
  * Giới thiệu **Streaming SSR** (`renderToPipeableStream` cho Node.js hoặc `renderToReadableStream` cho Web Streams / Cloudflare Workers). Server có thể stream từng phần HTML về client ngay khi sẵn sàng.
  * Hỗ trợ **Selective Hydration** kết hợp với `<Suspense>`: Phần nào của trang tải xong trước sẽ được hydrate và tương tác được ngay trước mà không phải chờ toàn bộ trang.

---

## 5. Strict Mode trong môi trường Development

* **React 17:** Strict Mode chỉ kiểm tra và cảnh báo các lifecycle cũ, side-effect ngoài ý muốn.
* **React 18:** Trong môi trường Dev (`NODE_ENV === 'development'`), React sẽ mô phỏng việc:
  > **Mount → Unmount → Mount lại**
  
  (Chạy `useEffect`, gọi hàm `cleanup`, sau đó chạy lại `useEffect`).
  * *Mục đích:* Giúp lập trình viên kiểm tra xem các hàm dọn dẹp (cleanup) có hoạt động chuẩn xác hay không, phục vụ cho tính năng giữ nguyên trạng thái component trong nền (Offscreen API / Reusable State).

---

## 6. Các Hooks mới được bổ sung trong React 18

1. **`useId()`**: Tạo ra một ID duy nhất và đồng nhất giữa Server và Client (tránh xung đột ID khi làm form/accessibility và lỗi mismatch hydration).
2. **`useTransition()`**: Quản lý trạng thái chuyển đổi giữa các tác vụ có độ ưu tiên thấp.
3. **`useDeferredValue()`**: Trì hoãn việc render giá trị của biến có độ ưu tiên thấp.
4. **`useSyncExternalStore()`**: Dành cho các thư viện quản lý state (Redux, Zustand, MobX,...) đọc store ngoài một cách an toàn trong môi trường Concurrent Rendering.
5. **`useInsertionEffect()`**: Dành riêng cho các thư viện CSS-in-JS (Styled-components, Emotion) để chèn `<style>` vào DOM trước khi tính toán layout.

---

## 7. Bổ sung: Kiến thức nền tảng về React & ReactDOM

Dựa trên các câu hỏi gợi mở ở đầu bài học:

### Tại sao lại tách `react` và `react-dom` ra riêng?
* Thư viện `react` chứa logic cốt lõi (tạo Virtual DOM, component lifecycle, quản lý state, hooks) độc lập với nền tảng hiển thị.
* Khi tách ra:
  * `react` được dùng chung cho mọi nền tảng.
  * `react-dom` đảm nhiệm việc chuyển đổi Virtual DOM thành HTML DOM trên trình duyệt web.
  * `react-native` đảm nhiệm việc chuyển đổi sang UI Native trên di động (iOS / Android).
  * `react-three-fiber` / `react-pdf` / `ink`... dùng để vẽ 3D, tạo PDF hoặc CLI terminal.

### Vai trò của ReactDOM là gì?
* Là cầu nối giữa **React (Virtual DOM)** và **Trình duyệt (Real DOM)**.
* Đảm nhận nhiệm vụ: Nhận cây phần tử do React tạo ra, tính toán sự khác biệt (diffing qua thuật toán Reconciliation) và cập nhật hiệu quả nhất vào cây DOM thật của trình duyệt.

---

## 8. Bảng tóm tắt so sánh nhanh

| Tiêu chí             | React 17                               | React 18                                                |
| :------------------- | :------------------------------------- | :------------------------------------------------------ |
| **Root API**         | `ReactDOM.render(<App />, root)`       | `ReactDOM.createRoot(root).render(<App />)`             |
| **Hydrate API**      | `ReactDOM.hydrate(<App />, root)`      | `ReactDOM.hydrateRoot(root, <App />)`                   |
| **Unmount API**      | `ReactDOM.unmountComponentAtNode(root)`| `root.unmount()`                                        |
| **Batching**         | Chỉ gom nhóm trong React Events        | Tự động gom nhóm ở mọi nơi (Promise, Timeout,...)       |
| **Render Engine**    | Render đồng bộ (Blocking)              | Render đồng thời (Concurrent Rendering)                 |
| **Transitions API**  | ❌ Không hỗ trợ                        | `startTransition`, `useTransition`                      |
| **SSR Streaming**    | ❌ Hạn chế                             | `renderToPipeableStream` + `<Suspense>`                 |
| **Strict Mode Dev**  | Mount bình thường                      | Mount → Unmount → Remount                               |
