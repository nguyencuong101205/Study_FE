# Tổng Hợp Kiến Thức Về React Hooks (Dạng Bảng Tra Cứu)

---

## 1. Bảng So Sánh: React `useCallback` vs `JavaScript Callback`

| Tiêu chí                    | JavaScript Callback                                                                                 | React `useCallback`                                                                                                         |
| :-------------------------- | :-------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------- |
| **Bản chất**                | Khái niệm nền tảng của ngôn ngữ JavaScript.                                                         | Một Hook tối ưu hiệu năng của thư viện React.                                                                               |
| **Định nghĩa**              | Là một hàm được truyền làm đối số vào hàm khác để được gọi lại sau.                                 | Là công cụ ghi nhớ (**memoize**) tham chiếu của một hàm qua các lần re-render.                                              |
| **Cú pháp**                 | `someFunction(callbackFn)`                                                                          | `const cachedFn = useCallback(fn, [deps])`                                                                                  |
| **Vị trí viết code**        | Bất kỳ đâu trong JavaScript (trong hàm, ngoài hàm, loop, `if/else`).                                | Chỉ ở **cấp cao nhất (top-level)** của React Component hoặc Custom Hook.                                                    |
| **Cơ chế cấp phát ô nhớ**   | **Luôn tạo ô nhớ mới** mỗi khi luồng thực thi chạy qua dòng khai báo hàm.                           | **Tái sử dụng ô nhớ cũ** nếu mảng `deps` không đổi. Chỉ cấp ô nhớ mới khi `deps` thay đổi.                                  |
| **Khi nào NÊN dùng?**       | Khi cần xử lý bất đồng bộ (`setTimeout`, `fetch`), xử lý sự kiện DOM, duyệt mảng (`map`, `filter`). | 1. Khi truyền hàm xuống Component con được bọc `React.memo`.<br>2. Khi hàm được đưa vào `deps` của Hook khác (`useEffect`). |
| **Khi nào KHÔNG NÊN dùng?** | Hầu như không có hạn chế.                                                                           | 1. Gắn vào thẻ HTML thường (`<button onClick={...}>`).<br>2. Component con nhận hàm **không** dùng `React.memo`.            |

---

## 2. Bảng Chi Tiết Toàn Bộ 18 React Hooks

|  STT   | Tên Hook               | Nhóm & Phiên bản          | Cú pháp mẫu                                                       | Mục đích & Cách hoạt động                                                                                  | Ví dụ thực tế                                                                            |
| :----: | :--------------------- | :------------------------ | :---------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------- |
| **1**  | `useState`             | State (Cơ bản)            | `const [val, setVal] = useState(init)`                            | Quản lý trạng thái cục bộ của component. Khi giá trị đổi $\rightarrow$ trigger re-render.                  | Lưu giá trị input, bật/tắt dropdown, modal.                                              |
| **2**  | `useReducer`           | State (Nâng cao)          | `const [state, dispatch] = useReducer(reducer, init)`             | Quản lý state phức tạp theo mô hình Redux (`action` $\rightarrow$ `reducer`).                              | Giỏ hàng, form nhiều bước, state có logic lồng nhau.                                     |
| **3**  | `useActionState`       | State / Form _(React 19)_ | `const [state, formAction, isPending] = useActionState(fn, init)` | Quản lý kết quả trả về, hàm submit và trạng thái đang chờ (`isPending`) của một async action.              | Submit Form đăng nhập, tự động có trạng thái Loading/Error.                              |
| **4**  | `useOptimistic`        | State _(React 19)_        | `const [optVal, setOptVal] = useOptimistic(val, updateFn)`        | Cập nhật giao diện tức thì theo giả định "lạc quan", tự khôi phục dữ liệu cũ nếu request lỗi.              | Thả tim (Like), gửi tin nhắn chat hiện ngay lập tức.                                     |
| **5**  | `useContext`           | Context                   | `const value = useContext(MyContext)`                             | Đọc dữ liệu từ Context Provider mà không cần truyền props qua từng tầng (tránh prop drilling).             | Lấy thông tin user đăng nhập, chuyển đổi Dark/Light theme, đổi ngôn ngữ.                 |
| **6**  | `useRef`               | Ref                       | `const ref = useRef(initialValue)`                                | 1. Trỏ vào thẻ DOM thật.<br>2. Lưu trữ biến qua các lần render **mà không gây re-render** khi đổi giá trị. | Tự động focus ô input khi mở trang, lưu `timerId` của `setInterval`.                     |
| **7**  | `useImperativeHandle`  | Ref                       | `useImperativeHandle(ref, createHandle, [deps])`                  | Tùy biến các hàm mà Component con cho phép Component cha gọi thông qua `ref` (kết hợp `forwardRef`).       | Modal con chỉ cho phép cha gọi hàm `open()` và `close()`.                                |
| **8**  | `useEffect`            | Effect                    | `useEffect(() => { ... return () => cleanup }, [deps])`           | Chạy tác vụ phụ (Side Effects) **sau khi component đã render và vẽ xong lên màn hình**.                    | Gọi API lấy dữ liệu, lắng nghe sự kiện `window`, thiết lập timer.                        |
| **9**  | `useLayoutEffect`      | Effect                    | `useLayoutEffect(() => { ... }, [deps])`                          | Chạy đồng bộ **ngay sau khi can thiệp DOM nhưng TRƯỚC KHI trình duyệt vẽ**. Tránh nháy giao diện.          | Đo kích thước phần tử DOM (width, height) để set vị trí tooltip/popup.                   |
| **10** | `useInsertionEffect`   | Effect                    | `useInsertionEffect(() => { ... }, [deps])`                       | Chạy **trước cả khi React can thiệp vào DOM**. Dành riêng cho thư viện CSS-in-JS.                          | Thư viện Styled-Components/Emotion chèn thẻ `<style>` vào DOM.                           |
| **11** | `useEffectEvent`       | Effect _(Experimental)_   | `const onEvent = useEffectEvent(callback)`                        | Tách logic khỏi `useEffect` để đọc được `state`/`props` mới nhất mà không bị tính là một dependency.       | Ghi log phân tích sự kiện mạng trong effect mà không làm effect chạy lại.                |
| **12** | `useMemo`              | Performance               | `const cached = useMemo(() => compute(a), [a])`                   | Lưu trữ (cache) **kết quả tính toán nặng**, chỉ tính toán lại khi dependencies thay đổi.                   | Lọc/sắp xếp danh sách 10.000 sản phẩm, tính toán báo cáo tài chính.                      |
| **13** | `useCallback`          | Performance               | `const cachedFn = useCallback(() => fn(a), [a])`                  | Lưu trữ (cache) **tham chiếu của một hàm**, tránh tạo mới ô nhớ giữa các lần render.                       | Truyền callback xuống Component con được bọc `React.memo`.                               |
| **14** | `useTransition`        | Concurrent                | `const [isPending, startTransition] = useTransition()`            | Đánh dấu một cập nhật state là "độ ưu tiên thấp" (không chặn luồng UI, giữ UI phản hồi mượt).              | Nhập từ khóa tìm kiếm: ô input gõ mượt, bảng kết quả lớn lọc ngầm.                       |
| **15** | `useDeferredValue`     | Concurrent                | `const deferredVal = useDeferredValue(val)`                       | Trì hoãn việc cập nhật một giá trị hiển thị để ưu tiên render các tác vụ quan trọng trước.                 | Nhận prop `searchTerm` từ cha và hoãn render danh sách kết quả nặng.                     |
| **16** | `useId`                | Utility                   | `const id = useId()`                                              | Sinh ra chuỗi ID ngẫu nhiên nhưng duy nhất và ổn định, an toàn cho cả SSR và Client.                       | Nối `<label htmlFor={id}>` với `<input id={id}>` cho chuẩn Accessibility (a11y).         |
| **17** | `useSyncExternalStore` | Advanced                  | `const state = useSyncExternalStore(sub, getSnap)`                | Đăng ký và đọc state từ các nguồn dữ liệu ngoài React an toàn, chống lỗi rách giao diện (Tearing).         | Đọc trạng thái mạng `navigator.onLine`, kết nối store Redux / Zustand.                   |
| **18** | `useDebugValue`        | Utility                   | `useDebugValue(value)`                                            | Hiển thị nhãn hoặc thông tin chẩn đoán cho Custom Hook trên công cụ **React DevTools**.                    | Hiển thị trạng thái `isOnline ? "Online" : "Offline"` của Custom Hook `useOnlineStatus`. |

---

## 3. Bảng Quyết Định Nhanh: Khi Nào Dùng Hook Nào?

| Bạn muốn làm gì?                                      | Hook nên dùng                        | Lưu ý quan trọng                                                |
| :---------------------------------------------------- | :----------------------------------- | :-------------------------------------------------------------- |
| Lưu trữ dữ liệu hiển thị lên màn hình                 | `useState`                           | Đổi state sẽ trigger component re-render.                       |
| Lưu dữ liệu không cần hiển thị / không muốn re-render | `useRef`                             | Thay đổi `ref.current` không làm re-render.                     |
| Gọi API hoặc tương tác mạng                           | `useEffect`                          | Luôn kiểm soát mảng `dependencies` cẩn thận.                    |
| Tránh giật hình khi đo kích thước DOM                 | `useLayoutEffect`                    | Hạn chế dùng vì có thể làm chậm tốc độ render ban đầu.          |
| Tối ưu một phép tính toán tốn nhiều CPU               | `useMemo`                            | Không dùng cho phép tính đơn giản vì chi phí cache còn tốn hơn. |
| Tối ưu hàm truyền xuống component con (`React.memo`)  | `useCallback`                        | Vô dụng nếu component con không được bọc `React.memo`.          |
| Gõ phím hoặc chuyển tab bị đơ do render dữ liệu lớn   | `useTransition` / `useDeferredValue` | Giúp giao diện luôn phản hồi ngay tức thì.                      |

# mindmap

- root((React Hooks))
  - Quản lý State
    - useState
    - useReducer
    - useActionState (React 19)
    - useOptimistic (React 19)
  - Context & Đọc dữ liệu
    - useContext
    - use (React 19)
  - DOM & Tham chiếu
    - useRef
    - useImperativeHandle
  - Tác vụ phụ Side Effects
    - useEffect
    - useLayoutEffect
    - useInsertionEffect
  - Tối ưu hiệu năng
    - useMemo
    - useCallback
  - Xử lý đồng thời Concurrent
    - useTransition
    - useDeferredValue
  - Nâng cao & Tiện ích
    - useId
    - useSyncExternalStore
    - useDebugValue
