# Ghi Chép Cú Pháp Fetch API & Các Cấu Hình `options`

---

## 1. So sánh cú pháp: `fetch(resource)` vs `fetch(resource, options)`

| Cú pháp                        | Tham số                                           | Trường hợp sử dụng                                                    | Hành vi mặc định                                                                |
| :----------------------------- | :------------------------------------------------ | :-------------------------------------------------------------------- | :------------------------------------------------------------------------------ |
| **`fetch(resource)`**          | `resource`: URL hoặc `Request` object             | Lấy dữ liệu đơn giản (chỉ cần đọc)                                    | • Method: `GET`<br>• Không có `body`<br>• Dùng headers mặc định của trình duyệt |
| **`fetch(resource, options)`** | • `resource`: URL<br>• `options`: Object cấu hình | Gửi dữ liệu, đổi method (POST/PUT/DELETE), thêm Token, set timeout... | Cho phép tùy biến toàn bộ gói tin gửi đi                                        |

---

## 2. Bảng tra cứu các thuộc tính trong `options`

| Thuộc tính        | Kiểu dữ liệu                 | Giá trị mặc định | Giải thích chi tiết                                                                                                                                              |
| :---------------- | :--------------------------- | :--------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`method`**      | `String`                     | `'GET'`          | Phương thức HTTP: `'GET'`, `'POST'`, `'PUT'`, `'DELETE'`, `'PATCH'`, `'HEAD'`...                                                                                 |
| **`headers`**     | `Object` / `Headers`         | `{}`             | Các cặp key-value đính kèm ở đầu gói tin (loại dữ liệu, Token xác thực,...).                                                                                     |
| **`body`**        | `String`, `FormData`, `Blob` | `undefined`      | Dữ liệu gửi lên server. _(Không dùng cho `GET` / `HEAD`)_. Thường là `JSON.stringify(data)` hoặc `FormData`.                                                     |
| **`credentials`** | `String`                     | `'same-origin'`  | Cách gửi Cookie:<br>• `'same-origin'`: Chỉ gửi khi cùng domain.<br>• `'include'`: Luôn gửi cookie I (kể cả khác domain / CORS).<br>• `'omit'`: Không gửi cookie. |
| **`mode`**        | `String`                     | `'cors'`         | Chế độ bảo mật mạng: `'cors'` (cho phép gọi API khác domain), `'no-cors'`, `'same-origin'`.                                                                      |
| **`cache`**       | `String`                     | `'default'`      | Quản lý bộ nhớ đệm: `'default'`, `'no-cache'`, `'reload'`, `'force-cache'`, `'only-if-cached'`.                                                                  |
| **`signal`**      | `AbortSignal`                | `undefined`      | Dùng kết hợp với `AbortController` để **hủy request** giữa chừng hoặc tạo **Timeout**.                                                                           |

---

## 3. Bảng tổng hợp các trường hợp sử dụng (Method & Options)

| Nhu cầu               |  Method  | Header cần thiết                     | Body                      | Ví dụ thực tế                      |
| :-------------------- | :------: | :----------------------------------- | :------------------------ | :--------------------------------- |
| **Lấy dữ liệu**       |  `GET`   | Không bắt buộc                       | Không có                  | Lấy danh sách bài viết, user       |
| **Tạo mới dữ liệu**   |  `POST`  | `'Content-Type': 'application/json'` | `JSON.stringify(data)`    | Đăng ký, thêm bài viết mới         |
| **Upload file / ảnh** |  `POST`  | _Không set_ (Trình duyệt tự tạo)     | `new FormData()`          | Upload ảnh đại diện, đính kèm file |
| **Cập nhật toàn bộ**  |  `PUT`   | `'Content-Type': 'application/json'` | `JSON.stringify(data)`    | Thay thế toàn bộ thông tin bản ghi |
| **Cập nhật một phần** | `PATCH`  | `'Content-Type': 'application/json'` | `JSON.stringify(data)`    | Đổi mỗi mật khẩu hoặc tên          |
| **Xóa bản ghi**       | `DELETE` | `'Authorization'` (nếu có)           | Không có (hoặc ít khi có) | Xóa bài viết theo ID               |

### Code mẫu chi tiết:

#### 3.1. Gửi dữ liệu JSON (`POST`)

```javascript
const newPost = {
  title: "Học Fetch API",
  body: "Nắm vững options trong fetch",
  userId: 1,
};

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer YOUR_TOKEN",
  },
  body: JSON.stringify(newPost),
})
  .then((res) => res.json())
  .then((data) => console.log("Tạo mới thành công:", data))
  .catch((err) => console.error("Lỗi:", err));
```

#### 3.2. Upload File với `FormData`

```javascript
const formData = new FormData();
formData.append("username", "Bear");
formData.append("avatar", fileInput.files[0]);

// Lưu ý: Không tự set header 'Content-Type' khi dùng FormData!
fetch("/api/upload", {
  method: "POST",
  body: formData,
})
  .then((res) => res.json())
  .then((data) => console.log("Upload xong:", data));
```

#### 3.3. Hủy request / Cài đặt Timeout bằng `signal`

```javascript
// Cách hiện đại: Tự hủy sau 5 giây nếu server chưa phản hồi
fetch("https://jsonplaceholder.typicode.com/posts", {
  signal: AbortSignal.timeout(5000),
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => {
    if (err.name === "TimeoutError") {
      console.error("Request bị quá thời gian (Timeout)!");
    }
  });
```

---

## 4. Bảng tra cứu các "Bẫy" & Lỗi thường gặp

| Bẫy / Lỗi gặp phải                                                  | Nguyên nhân                                                                                                    | Hậu quả                                                                                            | Cách xử lý chuẩn                                                                                                  |
| :------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------- |
| **Lỗi 404 / 500 không nhảy vào `.catch()`**                         | `fetch()` chỉ coi mất mạng, lỗi DNS, lỗi CORS là thất bại. 404/500 server vẫn phản hồi nên tính là thành công. | Code chạy tiếp xuống dòng `.json()`, cố parse trang HTML lỗi thành JSON dẫn đến lỗi `SyntaxError`. | Luôn kiểm tra `response.ok`:<br>`javascript if (!response.ok) throw new Error(response.status);`                  |
| **Lỗi gửi `body` trong `GET`/`HEAD`**                               | Chuẩn HTTP không cho phép `GET` hoặc `HEAD` chứa nội dung `body`.                                              | Trình duyệt ném ra lỗi `TypeError: Request with GET/HEAD method cannot have body`.                 | Chỉ truyền `body` khi dùng `POST`, `PUT`, `PATCH`, `DELETE`. Với `GET`, hãy gắn param lên URL (ví dụ: `?page=1`). |
| **`TypeError: Failed to execute 'json': body stream already read`** | Dữ liệu trả về (`body`) là một luồng (stream), chỉ được đọc một lần duy nhất.                                  | Gọi `.json()` hoặc `.text()` lần thứ 2 trên cùng một `response` sẽ văng lỗi.                       | Chỉ gọi `.json()` hoặc `.text()` 1 lần. Nếu cần dùng nhiều lần, hãy clone: `const resClone = response.clone();`   |
| **Upload file bị lỗi server không nhận**                            | Do tự tay khai báo `'Content-Type': 'multipart/form-data'` trong `headers`.                                    | Trình duyệt bị mất chuỗi phân cách `boundary` cần thiết để chia các trường dữ liệu.                | Để trống `headers`, để trình duyệt tự động sinh `Content-Type` kèm boundary cho `FormData`.                       |
