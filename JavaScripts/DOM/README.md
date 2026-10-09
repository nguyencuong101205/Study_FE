# DOM (không phải riêng của 1 ngôn ngữ nào)

- Document Object là 1 đối tượng được tạo bởi trình duyệt web ngay khi trang đuọc tải
- DOM không phụ thuộc vào ngôn ngữ lập trình cụ thể nào, mà là 1 phần của môi trường trình duyệt
- DOM xem tài liệu HTML hoặc XML như 1 obj tree , trong đó mỗi node đại diện cho 1 document
- DOM bao gồm (document - <html> - (<head> - <body>) - <các loại thẻ>)
- Phân loại node:

* Document node
* Element nodes
* Text nodes
* Node thuộc tính
* Comment nodes

## 1. Document Properties & Methods

Đối tượng `document` đại diện cho toàn bộ trang web và là gốc (root) của cây HTML DOM.

### 📌 Document Properties (Thuộc tính)

| Thuộc tính (Property)            | Mô tả (Description)                                                                 |
| :------------------------------- | :---------------------------------------------------------------------------------- |
| `activeElement`                  | Trả về phần tử HTML hiện đang được focus (có tiêu điểm) trong tài liệu.             |
| `baseURI`                        | Trả về đường dẫn URI cơ sở (base URI) tuyệt đối của tài liệu.                       |
| `body`                           | Trả về hoặc thiết lập phần tử `<body>` của tài liệu.                                |
| `characterSet` / `inputEncoding` | Trả về bảng mã ký tự (encoding) của tài liệu (ví dụ: `UTF-8`).                      |
| `cookie`                         | Trả về hoặc thiết lập danh sách tất cả các cặp cookie (`name=value`) của tài liệu.  |
| `defaultView`                    | Trả về đối tượng `window` liên kết với tài liệu (hoặc `null` nếu không có).         |
| `designMode`                     | Bật/tắt chế độ cho phép người dùng chỉnh sửa toàn bộ trang (`"on"` hoặc `"off"`).   |
| `doctype`                        | Trả về khai báo kiểu tài liệu DTD (`DocumentType`) của trang HTML.                  |
| `documentElement`                | Trả về phần tử gốc của tài liệu (thường là thẻ `<html>`).                           |
| `documentURI`                    | Trả về đường dẫn URL của tài liệu.                                                  |
| `domain`                         | Trả về tên miền (domain) của máy chủ phân phối tài liệu _(đã lỗi thời/deprecated)_. |
| `embeds`                         | Trả về danh sách (`HTMLCollection`) tất cả các thẻ `<embed>` trong tài liệu.        |
| `forms`                          | Trả về danh sách (`HTMLCollection`) tất cả các biểu mẫu `<form>` trong tài liệu.    |
| `head`                           | Trả về phần tử `<head>` của tài liệu.                                               |
| `images`                         | Trả về danh sách (`HTMLCollection`) tất cả các thẻ hình ảnh `<img>` trong tài liệu. |
| `implementation`                 | Trả về đối tượng `DOMImplementation` quản lý việc hỗ trợ các tính năng DOM.         |
| `lastModified`                   | Trả về chuỗi ngày giờ tài liệu được sửa đổi lần cuối cùng.                          |
| `links`                          | Trả về danh sách tất cả các thẻ liên kết `<a>` và `<area>` có thuộc tính `href`.    |
| `readyState`                     | Trả về trạng thái tải tài liệu (`"loading"`, `"interactive"`, hoặc `"complete"`).   |
| `referrer`                       | Trả về URL của trang web đã dẫn/chuyển hướng người dùng đến trang hiện tại.         |
| `scripts`                        | Trả về danh sách (`HTMLCollection`) tất cả các thẻ `<script>` trong tài liệu.       |
| `title`                          | Trả về hoặc thiết lập tiêu đề của tài liệu (nội dung thẻ `<title>`).                |
| `URL`                            | Trả về đường dẫn URL đầy đủ của trang web hiện tại.                                 |

---

### ⚙️ Document Methods (Phương thức)

| Phương thức (Method)            | Mô tả (Description)                                                                             |
| :------------------------------ | :---------------------------------------------------------------------------------------------- |
| `addEventListener()`            | Gắn một hàm xử lý sự kiện (event handler) vào tài liệu.                                         |
| `adoptNode(node)`               | Nhận (di chuyển) một node từ tài liệu khác vào tài liệu hiện tại.                               |
| `close()`                       | Đóng luồng xuất dữ liệu đã mở bằng `document.open()`.                                           |
| `createAttribute(name)`         | Tạo một node thuộc tính (attribute node) mới với tên chỉ định.                                  |
| `createComment(text)`           | Tạo một node chú thích (comment node `<!-- ... -->`) mới.                                       |
| `createDocumentFragment()`      | Tạo một mảnh tài liệu ảo (`DocumentFragment`) dùng để gom nhóm các node trước khi chèn vào DOM. |
| `createElement(tagName)`        | Tạo một phần tử HTML mới với tên thẻ chỉ định (ví dụ: `'div'`, `'p'`).                          |
| `createEvent(type)`             | Tạo một đối tượng sự kiện mới.                                                                  |
| `createTextNode(text)`          | Tạo một node văn bản thuần (Text node) với chuỗi nội dung chỉ định.                             |
| `execCommand(command)`          | Thực thi một lệnh chỉnh sửa tài liệu trên vùng chọn _(đã lỗi thời/deprecated)_.                 |
| `getElementById(id)`            | Tìm và trả về phần tử đầu tiên có thuộc tính `id` khớp với giá trị truyền vào.                  |
| `getElementsByClassName(class)` | Trả về danh sách (`HTMLCollection`) các phần tử có tên class chỉ định.                          |
| `getElementsByName(name)`       | Trả về danh sách (`NodeList`) các phần tử có thuộc tính `name` chỉ định.                        |
| `getElementsByTagName(tag)`     | Trả về danh sách (`HTMLCollection`) các phần tử có tên thẻ chỉ định.                            |
| `hasFocus()`                    | Kiểm tra xem tài liệu hoặc bất kỳ phần tử nào bên trong có đang giữ tiêu điểm (focus) không.    |
| `importNode(node, deep)`        | Sao chép một node từ tài liệu khác sang tài liệu hiện tại (không làm mất node gốc).             |
| `normalize()`                   | Chuẩn hóa tài liệu bằng cách gộp các Text node liền kề và xóa Text node rỗng.                   |
| `open()`                        | Mở luồng ghi dữ liệu vào tài liệu để sử dụng với `document.write()`.                            |
| `querySelector(cssSelector)`    | Trả về phần tử đầu tiên khớp với bộ chọn CSS (CSS Selector).                                    |
| `querySelectorAll(cssSelector)` | Trả về danh sách tĩnh (`NodeList`) chứa tất cả các phần tử khớp với CSS Selector.               |
| `removeEventListener()`         | Gỡ bỏ hàm xử lý sự kiện đã gắn trước đó trên tài liệu.                                          |
| `write(content)`                | Ghi trực tiếp chuỗi HTML hoặc mã JavaScript vào tài liệu.                                       |
| `writeln(content)`              | Tương tự `write()`, nhưng tự động thêm ký tự xuống dòng `\n` sau mỗi lần ghi.                   |

---

## 2. Element Properties & Methods

Đối tượng `element` đại diện cho từng phần tử HTML riêng lẻ (ví dụ thẻ `<div>`, `<p>`, `<a>`,...).

### 📌 Element Properties (Thuộc tính)

| Thuộc tính (Property)    | Mô tả (Description)                                                                                                          |
| :----------------------- | :--------------------------------------------------------------------------------------------------------------------------- |
| `accessKey`              | Thiết lập hoặc trả về phím tắt truy cập nhanh (access key) cho phần tử.                                                      |
| `attributes`             | Trả về danh sách (`NamedNodeMap`) tất cả các thuộc tính của phần tử.                                                         |
| `childElementCount`      | Trả về số lượng phần tử con (chỉ đếm thẻ HTML, bỏ qua text và comment).                                                      |
| `childNodes`             | Trả về danh sách (`NodeList`) tất cả các node con (bao gồm thẻ, văn bản, khoảng trắng, comment).                             |
| `children`               | Trả về danh sách (`HTMLCollection`) tất cả các phần tử con (chỉ gồm thẻ HTML).                                               |
| `classList`              | Trả về đối tượng `DOMTokenList` chứa danh sách các class của phần tử (hỗ trợ `add()`, `remove()`, `toggle()`, `contains()`). |
| `className`              | Thiết lập hoặc trả về giá trị của thuộc tính `class` (dưới dạng chuỗi).                                                      |
| `clientHeight`           | Chiều cao hiển thị của phần tử bao gồm nội dung và padding (không tính viền, thanh cuộn, margin).                            |
| `clientWidth`            | Chiều rộng hiển thị của phần tử bao gồm nội dung và padding (không tính viền, thanh cuộn, margin).                           |
| `clientLeft`             | Trả về độ dày của đường viền bên trái (`border-left`) của phần tử.                                                           |
| `clientTop`              | Trả về độ dày của đường viền phía trên (`border-top`) của phần tử.                                                           |
| `contentEditable`        | Thiết lập hoặc trả về trạng thái cho phép chỉnh sửa nội dung (`"true"`, `"false"`, `"inherit"`).                             |
| `dir`                    | Thiết lập hoặc trả về hướng văn bản của phần tử (`"ltr"` hoặc `"rtl"`).                                                      |
| `firstChild`             | Trả về node con đầu tiên (có thể là Text, Comment hoặc Element).                                                             |
| `firstElementChild`      | Trả về phần tử con HTML đầu tiên.                                                                                            |
| `id`                     | Thiết lập hoặc trả về giá trị thuộc tính `id` của phần tử.                                                                   |
| `innerHTML`              | Thiết lập hoặc trả về toàn bộ mã HTML bên trong phần tử.                                                                     |
| `innerText`              | Thiết lập hoặc trả về nội dung văn bản hiển thị của phần tử (bỏ qua các thẻ bị ẩn bởi CSS).                                  |
| `isContentEditable`      | Trả về `true` nếu nội dung phần tử có thể chỉnh sửa được, ngược lại trả về `false`.                                          |
| `lang`                   | Thiết lập hoặc trả về mã ngôn ngữ của phần tử (thuộc tính `lang`).                                                           |
| `lastChild`              | Trả về node con cuối cùng.                                                                                                   |
| `lastElementChild`       | Trả về phần tử con HTML cuối cùng.                                                                                           |
| `nextSibling`            | Trả về node anh/chị/em đứng liền sau (cùng cấp cha).                                                                         |
| `nextElementSibling`     | Trả về phần tử con HTML anh/chị/em đứng liền sau.                                                                            |
| `nodeName`               | Trả về tên của node (với Element là tên thẻ viết hoa, ví dụ: `"DIV"`, `"SPAN"`).                                             |
| `nodeType`               | Trả về số nguyên đại diện cho kiểu node (ví dụ: `1` là Element, `3` là Text).                                                |
| `nodeValue`              | Thiết lập hoặc trả về giá trị của node (đối với Element thường trả về `null`).                                               |
| `offsetHeight`           | Chiều cao đầy đủ của phần tử (gồm nội dung, padding, viền border và thanh cuộn ngang nếu có).                                |
| `offsetWidth`            | Chiều rộng đầy đủ của phần tử (gồm nội dung, padding, viền border và thanh cuộn dọc nếu có).                                 |
| `offsetLeft`             | Khoảng cách pixel từ cạnh trái phần tử tới cạnh trái của `offsetParent`.                                                     |
| `offsetTop`              | Khoảng cách pixel từ cạnh trên phần tử tới cạnh trên của `offsetParent`.                                                     |
| `offsetParent`           | Trả về phần tử cha gần nhất có định vị (`position` khác `static`).                                                           |
| `outerHTML`              | Thiết lập hoặc trả về toàn bộ mã HTML của chính phần tử đó kèm tất cả nội dung bên trong.                                    |
| `outerText`              | Thiết lập hoặc trả về nội dung văn bản của phần tử (khi gán sẽ thay thế toàn bộ phần tử bằng text).                          |
| `ownerDocument`          | Trả về đối tượng `document` gốc chứa phần tử này.                                                                            |
| `parentNode`             | Trả về node cha của phần tử.                                                                                                 |
| `parentElement`          | Trả về phần tử HTML cha của phần tử.                                                                                         |
| `previousSibling`        | Trả về node anh/chị/em đứng liền trước.                                                                                      |
| `previousElementSibling` | Trả về phần tử HTML anh/chị/em đứng liền trước.                                                                              |
| `scrollHeight`           | Trả về toàn bộ chiều cao của nội dung bên trong phần tử, bao gồm cả phần bị ẩn do thanh cuộn.                                |
| `scrollWidth`            | Trả về toàn bộ chiều rộng của nội dung bên trong phần tử, bao gồm cả phần bị ẩn do thanh cuộn.                               |
| `scrollLeft`             | Thiết lập hoặc trả về số pixel mà nội dung phần tử đã bị cuộn theo chiều ngang.                                              |
| `scrollTop`              | Thiết lập hoặc trả về số pixel mà nội dung phần tử đã bị cuộn theo chiều dọc.                                                |
| `style`                  | Trả về đối tượng `CSSStyleDeclaration` dùng để xem hoặc gán CSS inline cho phần tử.                                          |
| `tabIndex`               | Thiết lập hoặc trả về chỉ số thứ tự duyệt tab của phần tử.                                                                   |
| `tagName`                | Trả về tên thẻ HTML của phần tử (luôn viết hoa, ví dụ: `"BUTTON"`).                                                          |
| `textContent`            | Thiết lập hoặc trả về toàn bộ nội dung văn bản thô của phần tử và tất cả các node con.                                       |
| `title`                  | Thiết lập hoặc trả về giá trị thuộc tính `title` (hiển thị tooltip khi hover chuột).                                         |

---

### ⚙️ Element Methods (Phương thức)

| Phương thức (Method)               | Mô tả (Description)                                                                                        |
| :--------------------------------- | :--------------------------------------------------------------------------------------------------------- |
| `addEventListener()`               | Đăng ký một hàm xử lý sự kiện cho phần tử.                                                                 |
| `after()`                          | Chèn thêm một hoặc nhiều node / chuỗi văn bản vào ngay phía sau phần tử.                                   |
| `append()`                         | Chèn thêm node hoặc chuỗi văn bản vào vị trí cuối cùng bên trong phần tử.                                  |
| `appendChild(node)`                | Thêm một node con vào cuối danh sách các con của phần tử.                                                  |
| `before()`                         | Chèn thêm một hoặc nhiều node / chuỗi văn bản vào ngay phía trước phần tử.                                 |
| `blur()`                           | Xóa bỏ trạng thái focus (hủy tiêu điểm) khỏi phần tử.                                                      |
| `click()`                          | Giả lập hành động click chuột vào phần tử.                                                                 |
| `cloneNode(deep)`                  | Tạo bản sao của phần tử (nếu `deep = true` sẽ sao chép cả cây con bên trong).                              |
| `closest(cssSelector)`             | Tìm phần tử tổ tiên gần nhất (kể cả chính nó) khớp với bộ chọn CSS.                                        |
| `compareDocumentPosition(node)`    | So sánh vị trí tài liệu giữa hai node trong cây DOM.                                                       |
| `contains(node)`                   | Kiểm tra xem một node có phải là hậu duệ (con, cháu,...) của phần tử hay không.                            |
| `focus()`                          | Đặt tiêu điểm (focus) vào phần tử.                                                                         |
| `getAttribute(name)`               | Trả về giá trị của thuộc tính có tên chỉ định.                                                             |
| `getAttributeNode(name)`           | Trả về node thuộc tính (`Attr`) theo tên.                                                                  |
| `getBoundingClientRect()`          | Trả về đối tượng `DOMRect` chứa kích thước và tọa độ vị trí của phần tử so với viewport.                   |
| `getElementsByClassName(class)`    | Trả về danh sách các phần tử con có class chỉ định.                                                        |
| `getElementsByTagName(tag)`        | Trả về danh sách các phần tử con có tên thẻ chỉ định.                                                      |
| `hasAttribute(name)`               | Kiểm tra xem phần tử có chứa thuộc tính chỉ định hay không (`true`/`false`).                               |
| `hasAttributes()`                  | Kiểm tra xem phần tử có bất kỳ thuộc tính nào hay không.                                                   |
| `hasChildNodes()`                  | Kiểm tra xem phần tử có chứa bất kỳ node con nào hay không.                                                |
| `insertAdjacentElement(pos, elem)` | Chèn một phần tử HTML vào vị trí tương đối (`'beforebegin'`, `'afterbegin'`, `'beforeend'`, `'afterend'`). |
| `insertAdjacentHTML(pos, html)`    | Phân tích chuỗi HTML và chèn vào vị trí tương đối chỉ định.                                                |
| `insertAdjacentText(pos, text)`    | Chèn chuỗi văn bản thuần vào vị trí tương đối chỉ định.                                                    |
| `insertBefore(newNode, refNode)`   | Chèn một node con mới vào trước một node con đã tồn tại.                                                   |
| `isDefaultNamespace(uri)`          | Kiểm tra xem namespaceURI truyền vào có phải là mặc định hay không.                                        |
| `isEqualNode(node)`                | Kiểm tra xem 2 node có hoàn toàn giống nhau về cấu trúc, kiểu và nội dung không.                           |
| `isSameNode(node)`                 | Kiểm tra xem 2 node có cùng trỏ tới một đối tượng trong bộ nhớ hay không.                                  |
| `matches(cssSelector)`             | Kiểm tra xem phần tử có khớp với chuỗi bộ chọn CSS hay không (`true`/`false`).                             |
| `normalize()`                      | Gộp các Text node liền kề và xóa Text node rỗng bên trong phần tử này.                                     |
| `prepend()`                        | Chèn thêm node hoặc chuỗi văn bản vào vị trí đầu tiên bên trong phần tử.                                   |
| `querySelector(cssSelector)`       | Tìm và trả về phần tử con đầu tiên khớp với CSS Selector.                                                  |
| `querySelectorAll(cssSelector)`    | Tìm và trả về danh sách tĩnh (`NodeList`) tất cả phần tử con khớp với CSS Selector.                        |
| `remove()`                         | Xóa chính phần tử này ra khỏi cây DOM.                                                                     |
| `removeAttribute(name)`            | Xóa bỏ một thuộc tính chỉ định khỏi phần tử.                                                               |
| `removeAttributeNode(attrNode)`    | Xóa bỏ node thuộc tính chỉ định khỏi phần tử.                                                              |
| `removeChild(node)`                | Xóa bỏ một node con cụ thể ra khỏi phần tử.                                                                |
| `removeEventListener()`            | Gỡ bỏ hàm xử lý sự kiện đã đăng ký trên phần tử.                                                           |
| `replaceChild(newNode, oldNode)`   | Thay thế một node con cũ bằng một node con mới.                                                            |
| `replaceWith(...nodes)`            | Thay thế chính phần tử này bằng các node hoặc chuỗi văn bản mới.                                           |
| `scroll(x, y)` / `scrollTo(x, y)`  | Cuộn nội dung phần tử tới tọa độ cụ thể.                                                                   |
| `scrollBy(x, y)`                   | Cuộn nội dung phần tử theo một khoảng cách tương đối.                                                      |
| `scrollIntoView(alignToTop)`       | Tự động cuộn trang để đưa phần tử vào vùng nhìn thấy của màn hình.                                         |
| `setAttribute(name, value)`        | Thiết lập hoặc cập nhật giá trị cho một thuộc tính.                                                        |
| `setAttributeNode(attrNode)`       | Thêm hoặc thay thế một node thuộc tính cho phần tử.                                                        |
| `toggleAttribute(name, force)`     | Bật/tắt một thuộc tính boolean (thêm vào nếu chưa có, xóa bỏ nếu đã có).                                   |
