# DOM (không phải riêng của 1 ngôn ngữ nào)

- Document Object là 1 đối tượng được tạo bởi trình duyệt web ngay khi trang đuọc tải
- DOM không phụ thuộc vào ngôn ngữ lập trình cụ thể nào, mà là 1 phần của môi trường trình duyệt
- DOM xem tài liệu HTML hoặc XML như 1 obj tree , trong đó mỗi node đại diện cho 1 document
- DOM bao gồm (document - <html> - (<head> - <body>) - <các loại thẻ>)
- Phân loại node:

* Document node
* Element nodes
* Attribute nodes
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

---

## 3. HTML DOM Events (Sự kiện trong DOM)

Sự kiện HTML DOM (DOM Events) cho phép JavaScript đăng ký các hàm xử lý sự kiện (event handlers / listeners) trên các phần tử HTML khi có tương tác từ người dùng hoặc trình duyệt.

### 🖱️ Mouse Events (Sự kiện Chuột)

| Sự kiện (Event) | Thuộc tính HTML | Mô tả (Description)                                                                                  |
| :-------------- | :-------------- | :--------------------------------------------------------------------------------------------------- |
| `click`         | `onclick`       | Xảy ra khi người dùng click chuột (nhấn và thả) vào một phần tử.                                     |
| `contextmenu`   | `oncontextmenu` | Xảy ra khi người dùng click chuột phải vào phần tử để mở menu ngữ cảnh.                              |
| `dblclick`      | `ondblclick`    | Xảy ra khi người dùng nhấp đúp (double-click) vào một phần tử.                                       |
| `mousedown`     | `onmousedown`   | Xảy ra ngay tại thời điểm người dùng nhấn nút chuột xuống trên một phần tử.                          |
| `mouseenter`    | `onmouseenter`  | Xảy ra khi con trỏ chuột di chuyển đi vào vùng của phần tử (không nổi bọt / không tính phần tử con). |
| `mouseleave`    | `onmouseleave`  | Xảy ra khi con trỏ chuột di chuyển rời khỏi vùng của phần tử (không nổi bọt).                        |
| `mousemove`     | `onmousemove`   | Xảy ra liên tục khi con trỏ chuột đang di chuyển bên trên một phần tử.                               |
| `mouseover`     | `onmouseover`   | Xảy ra khi con trỏ chuột di chuyển lên trên một phần tử hoặc các phần tử con của nó (có nổi bọt).    |
| `mouseout`      | `onmouseout`    | Xảy ra khi con trỏ chuột di chuyển rời khỏi một phần tử hoặc các phần tử con của nó (có nổi bọt).    |
| `mouseup`       | `onmouseup`     | Xảy ra khi người dùng thả nút chuột ra trên một phần tử.                                             |
| `wheel`         | `onwheel`       | Xảy ra khi người dùng lăn con lăn chuột (mouse wheel) lên hoặc xuống trên phần tử.                   |

---

### ⌨️ Keyboard Events (Sự kiện Bàn phím)

| Sự kiện (Event) | Thuộc tính HTML | Mô tả (Description)                                                                              |
| :-------------- | :-------------- | :----------------------------------------------------------------------------------------------- |
| `keydown`       | `onkeydown`     | Xảy ra khi người dùng đang nhấn một phím bất kỳ xuống (lặp lại liên tục nếu giữ phím).           |
| `keypress`      | `onkeypress`    | Xảy ra khi người dùng nhấn một phím tạo ra ký tự _(đã lỗi thời/deprecated, nên dùng `keydown`)_. |
| `keyup`         | `onkeyup`       | Xảy ra khi người dùng nhả một phím trên bàn phím ra.                                             |

---

### 📝 Form & Input Events (Sự kiện Biểu mẫu & Nhập liệu)

| Sự kiện (Event) | Thuộc tính HTML | Mô tả (Description)                                                                                 |
| :-------------- | :-------------- | :-------------------------------------------------------------------------------------------------- |
| `blur`          | `onblur`        | Xảy ra khi một phần tử bị mất tiêu điểm (lose focus) — không nổi bọt (bubble).                      |
| `change`        | `onchange`      | Xảy ra khi giá trị của phần tử form (`<input>`, `<select>`, `<textarea>`) thay đổi và đã mất focus. |
| `focus`         | `onfocus`       | Xảy ra khi một phần tử nhận được tiêu điểm (focus) — không nổi bọt (bubble).                        |
| `focusin`       | `onfocusin`     | Xảy ra khi một phần tử chuẩn bị nhận focus (tương tự `focus` nhưng **có** nổi bọt).                 |
| `focusout`      | `onfocusout`    | Xảy ra khi một phần tử chuẩn bị mất focus (tương tự `blur` nhưng **có** nổi bọt).                   |
| `input`         | `oninput`       | Xảy ra ngay lập tức mỗi khi giá trị của thẻ `<input>` hoặc `<textarea>` bị thay đổi bởi người dùng. |
| `invalid`       | `oninvalid`     | Xảy ra khi một phần tử `<input>` không thỏa mãn điều kiện kiểm tra hợp lệ (validation) khi submit.  |
| `reset`         | `onreset`       | Xảy ra khi biểu mẫu (`<form>`) được đặt lại (reset) về giá trị mặc định.                            |
| `search`        | `onsearch`      | Xảy ra khi người dùng nhấn Enter hoặc nút xóa (`x`) trong ô `<input type="search">`.                |
| `select`        | `onselect`      | Xảy ra sau khi người dùng bôi đen (chọn) một đoạn văn bản trong `<input>` hoặc `<textarea>`.        |
| `submit`        | `onsubmit`      | Xảy ra khi một biểu mẫu (`<form>`) được gửi đi (submit).                                            |

---

### 🖼️ Frame / Window / Object Events (Sự kiện Cửa sổ & Tài liệu)

| Sự kiện (Event)    | Thuộc tính HTML      | Mô tả (Description)                                                                                |
| :----------------- | :------------------- | :------------------------------------------------------------------------------------------------- |
| `abort`            | `onabort`            | Xảy ra khi quá trình tải một tài nguyên/media bị hủy bỏ giữa chừng.                                |
| `afterprint`       | `onafterprint`       | Xảy ra sau khi tài liệu đã bắt đầu in hoặc hộp thoại in (print preview) đã đóng lại.               |
| `beforeprint`      | `onbeforeprint`      | Xảy ra ngay trước khi tài liệu chuẩn bị được in (trước khi mở hộp thoại in).                       |
| `beforeunload`     | `onbeforeunload`     | Xảy ra trước khi tài liệu sắp bị đóng/tải lại (dùng để cảnh báo người dùng lưu dữ liệu).           |
| `DOMContentLoaded` | _(Dùng Listener)_    | Xảy ra khi HTML đã được tải và phân tích cú pháp xong hoàn toàn (không cần đợi ảnh, CSS tải xong). |
| `error`            | `onerror`            | Xảy ra khi có lỗi trong quá trình tải một file ngoài (ảnh, script,...) hoặc lỗi thực thi.          |
| `fullscreenchange` | `onfullscreenchange` | Xảy ra khi một phần tử chuyển sang hoặc thoát khỏi chế độ toàn màn hình (fullscreen).              |
| `fullscreenerror`  | `onfullscreenerror`  | Xảy ra khi trình duyệt không thể chuyển sang chế độ toàn màn hình.                                 |
| `hashchange`       | `onhashchange`       | Xảy ra khi phần neo (`#hash`) trên URL của trang hiện tại bị thay đổi.                             |
| `load`             | `onload`             | Xảy ra khi một đối tượng (toàn bộ trang web, hình ảnh, iframe, script) đã tải xong hoàn toàn.      |
| `offline`          | `onoffline`          | Xảy ra khi trình duyệt bị mất kết nối mạng (chuyển sang chế độ ngoại tuyến).                       |
| `online`           | `ononline`           | Xảy ra khi trình duyệt có lại kết nối mạng (chuyển sang chế độ trực tuyến).                        |
| `pagehide`         | `onpagehide`         | Xảy ra khi người dùng rời khỏi trang web (chuyển sang trang khác).                                 |
| `pageshow`         | `onpageshow`         | Xảy ra khi người dùng điều hướng đến trang web (kể cả khi quay lại từ bộ nhớ đệm cache).           |
| `popstate`         | `onpopstate`         | Xảy ra khi lịch sử duyệt web (window history) thay đổi trạng thái hoạt động.                       |
| `resize`           | `onresize`           | Xảy ra khi kích thước cửa sổ trình duyệt (document view) bị thay đổi.                              |
| `scroll`           | `onscroll`           | Xảy ra khi thanh cuộn (scrollbar) của phần tử hoặc trang web đang được cuộn.                       |
| `storage`          | `onstorage`          | Xảy ra khi vùng lưu trữ Web Storage (`localStorage` / `sessionStorage`) được cập nhật.             |
| `unload`           | `onunload`           | Xảy ra khi trang web đã bị dỡ bỏ (đóng tab hoặc chuyển trang).                                     |

---

### 📋 Clipboard, Drag & Drop, Touch Events (Sự kiện Bộ nhớ tạm, Kéo thả & Cảm ứng)

| Sự kiện (Event) | Nhóm sự kiện     | Mô tả (Description)                                                                               |
| :-------------- | :--------------- | :------------------------------------------------------------------------------------------------ |
| `copy`          | `ClipboardEvent` | Xảy ra khi người dùng sao chép (`Ctrl + C`) nội dung của một phần tử.                             |
| `cut`           | `ClipboardEvent` | Xảy ra khi người dùng cắt (`Ctrl + X`) nội dung của một phần tử.                                  |
| `paste`         | `ClipboardEvent` | Xảy ra khi người dùng dán (`Ctrl + V`) nội dung vào một phần tử.                                  |
| `drag`          | `DragEvent`      | Xảy ra liên tục trong khi một phần tử hoặc vùng văn bản đang được kéo.                            |
| `dragend`       | `DragEvent`      | Xảy ra khi thao tác kéo kết thúc (nhả nút chuột hoặc nhấn phím Esc).                              |
| `dragenter`     | `DragEvent`      | Xảy ra khi phần tử đang kéo đi vào một vùng đích hợp lệ (drop target).                            |
| `dragleave`     | `DragEvent`      | Xảy ra khi phần tử đang kéo rời khỏi một vùng đích hợp lệ.                                        |
| `dragover`      | `DragEvent`      | Xảy ra liên tục khi phần tử đang kéo nằm bên trên vùng đích (cần `preventDefault()` để cho phép). |
| `dragstart`     | `DragEvent`      | Xảy ra khi người dùng bắt đầu kéo một phần tử.                                                    |
| `drop`          | `DragEvent`      | Xảy ra khi phần tử đang kéo được thả vào vùng đích hợp lệ.                                        |
| `touchstart`    | `TouchEvent`     | Xảy ra khi ngón tay chạm vào màn hình cảm ứng.                                                    |
| `touchmove`     | `TouchEvent`     | Xảy ra khi ngón tay di chuyển trên màn hình cảm ứng.                                              |
| `touchend`      | `TouchEvent`     | Xảy ra khi ngón tay nhấc khỏi màn hình cảm ứng.                                                   |
| `touchcancel`   | `TouchEvent`     | Xảy ra khi thao tác chạm bị gián đoạn.                                                            |

---

### 🎬 Animation, Transition & Media Events (Sự kiện Hoạt ảnh & Đa phương tiện)

| Sự kiện (Event)      | Nhóm sự kiện      | Mô tả (Description)                                                                           |
| :------------------- | :---------------- | :-------------------------------------------------------------------------------------------- |
| `animationstart`     | `AnimationEvent`  | Xảy ra khi một hoạt ảnh CSS (`@keyframes`) bắt đầu chạy.                                      |
| `animationiteration` | `AnimationEvent`  | Xảy ra khi một hoạt ảnh CSS lặp lại một chu kỳ mới.                                           |
| `animationend`       | `AnimationEvent`  | Xảy ra khi một hoạt ảnh CSS đã hoàn thành.                                                    |
| `transitionend`      | `TransitionEvent` | Xảy ra khi một hiệu ứng chuyển đổi CSS (`transition`) đã hoàn tất.                            |
| `canplay`            | `Event` (Media)   | Xảy ra khi trình duyệt có thể bắt đầu phát media (video/audio) vì đã tải đủ dữ liệu tạm thời. |
| `ended`              | `Event` (Media)   | Xảy ra khi media đã phát đến cuối (hết bài hát hoặc hết video).                               |
| `pause`              | `Event` (Media)   | Xảy ra khi media bị tạm dừng (bởi người dùng hoặc bằng code).                                 |
| `play`               | `Event` (Media)   | Xảy ra khi media đã bắt đầu phát hoặc không còn ở trạng thái tạm dừng.                        |
| `playing`            | `Event` (Media)   | Xảy ra khi media đang phát sau khi đã bị tạm dừng hoặc dừng để nạp dữ liệu (buffering).       |
| `timeupdate`         | `Event` (Media)   | Xảy ra khi vị trí phát hiện tại của media thay đổi (khi video/audio đang chạy).               |
| `volumechange`       | `Event` (Media)   | Xảy ra khi âm lượng media thay đổi (bao gồm cả khi bật/tắt tiếng mute).                       |

---

### 🧩 DOM Event Objects (Các Đối tượng Sự kiện)

Khi một sự kiện xảy ra, trình duyệt tự động tạo một đối tượng sự kiện (`event` / `e`) và truyền vào hàm xử lý. Mọi đối tượng sự kiện đều kế thừa từ đối tượng gốc `Event`.

| Đối tượng (Event Object) | Mô tả (Description)                                                                                   |
| :----------------------- | :---------------------------------------------------------------------------------------------------- |
| `Event`                  | Đối tượng cơ sở (gốc) cho tất cả các đối tượng sự kiện trong HTML DOM.                                |
| `AnimationEvent`         | Đại diện cho các sự kiện liên quan đến hoạt ảnh CSS (`animationstart`, `animationend`,...).           |
| `ClipboardEvent`         | Đại diện cho các sự kiện liên quan đến bộ nhớ tạm (`copy`, `cut`, `paste`).                           |
| `DragEvent`              | Đại diện cho các sự kiện kéo và thả phần tử (`drag`, `drop`, `dragover`,...).                         |
| `FocusEvent`             | Đại diện cho các sự kiện liên quan đến trạng thái tiêu điểm (`focus`, `blur`, `focusin`, `focusout`). |
| `HashChangeEvent`        | Đại diện cho sự kiện khi phần `#hash` của URL thay đổi (`hashchange`).                                |
| `InputEvent`             | Đại diện cho các sự kiện nhập liệu từ người dùng (`input`, `beforeinput`).                            |
| `KeyboardEvent`          | Đại diện cho các sự kiện tương tác với bàn phím (`keydown`, `keypress`, `keyup`).                     |
| `MouseEvent`             | Đại diện cho các sự kiện tương tác với chuột (`click`, `dblclick`, `mousedown`, `mousemove`,...).     |
| `PageTransitionEvent`    | Đại diện cho các sự kiện khi chuyển trang (`pagehide`, `pageshow`).                                   |
| `PopStateEvent`          | Đại diện cho sự kiện khi lịch sử trình duyệt thay đổi (`popstate`).                                   |
| `ProgressEvent`          | Đại diện cho tiến trình tải tài nguyên bên ngoài (như `loadstart`, `progress`, `loadend`).            |
| `StorageEvent`           | Đại diện cho sự kiện khi `localStorage` hoặc `sessionStorage` thay đổi (`storage`).                   |
| `TouchEvent`             | Đại diện cho các sự kiện thao tác trên màn hình cảm ứng (`touchstart`, `touchmove`, `touchend`).      |
| `TransitionEvent`        | Đại diện cho các sự kiện liên quan đến CSS Transition (`transitionend`).                              |
| `UIEvent`                | Đối tượng cơ sở cho các sự kiện giao diện người dùng (cha của `MouseEvent`, `KeyboardEvent`,...).     |
| `WheelEvent`             | Đại diện cho sự kiện lăn con lăn chuột (`wheel`).                                                     |

---

### 📌 Event Object Properties & Methods (Thuộc tính & Phương thức của `event`)

#### 1. Thuộc tính & Phương thức chuẩn của `Event` (Dùng chung cho mọi sự kiện)

| Thuộc tính / Phương thức           | Mô tả (Description)                                                                                                |
| :--------------------------------- | :----------------------------------------------------------------------------------------------------------------- |
| `event.bubbles`                    | Trả về `true` nếu sự kiện có nổi bọt (bubbling) ngược lên các phần tử cha trong DOM, ngược lại là `false`.         |
| `event.cancelable`                 | Trả về `true` nếu hành vi mặc định của sự kiện có thể bị hủy bỏ bằng `preventDefault()`.                           |
| `event.composed`                   | Trả về `true` nếu sự kiện có thể đi xuyên qua ranh giới Shadow DOM lên DOM chính.                                  |
| `event.currentTarget`              | Trả về phần tử hiện đang gắn hàm xử lý sự kiện (`addEventListener`) đang được thực thi.                            |
| `event.defaultPrevented`           | Trả về `true` nếu phương thức `event.preventDefault()` đã được gọi trên sự kiện này.                               |
| `event.eventPhase`                 | Trả về giai đoạn hiện tại của luồng sự kiện (`1`: Capturing, `2`: At Target, `3`: Bubbling).                       |
| `event.isTrusted`                  | Trả về `true` nếu sự kiện được tạo bởi thao tác thực của người dùng, `false` nếu tạo bằng code JS (`click()`,...). |
| `event.target`                     | Trả về phần tử HTML gốc nơi thực sự phát sinh ra sự kiện (phần tử trực tiếp bị click, gõ phím,...).                |
| `event.timeStamp`                  | Trả về thời điểm (tính bằng mili-giây) kể từ khi trang được tải cho đến khi sự kiện xảy ra.                        |
| `event.type`                       | Trả về tên loại sự kiện dưới dạng chuỗi (ví dụ: `"click"`, `"keydown"`, `"submit"`).                               |
| `event.preventDefault()`           | **Phương thức:** Ngăn chặn hành vi mặc định của trình duyệt (ví dụ: chặn thẻ `<a>` chuyển trang, chặn `<form>`).   |
| `event.stopPropagation()`          | **Phương thức:** Ngăn không cho sự kiện tiếp tục lan truyền (nổi bọt hoặc bắt giữ) sang các phần tử cha/con khác.  |
| `event.stopImmediatePropagation()` | **Phương thức:** Ngăn sự kiện lan truyền VÀ ngăn luôn các hàm listener khác đang gắn trên cùng phần tử đó chạy.    |

#### 2. Thuộc tính thông dụng của `MouseEvent` & `KeyboardEvent`

| Thuộc tính (Property)       | Đối tượng       | Mô tả (Description)                                                                                      |
| :-------------------------- | :-------------- | :------------------------------------------------------------------------------------------------------- |
| `event.clientX` / `clientY` | `MouseEvent`    | Tọa độ ngang (X) và dọc (Y) của con trỏ chuột tính theo vùng nhìn thấy hiện tại (viewport).              |
| `event.pageX` / `pageY`     | `MouseEvent`    | Tọa độ ngang (X) và dọc (Y) của con trỏ chuột tính theo toàn bộ tài liệu (bao gồm cả phần đã cuộn).      |
| `event.screenX` / `screenY` | `MouseEvent`    | Tọa độ ngang (X) và dọc (Y) của con trỏ chuột tính theo màn hình thiết bị của người dùng.                |
| `event.offsetX` / `offsetY` | `MouseEvent`    | Tọa độ ngang (X) và dọc (Y) của con trỏ chuột tính từ góc trên bên trái của chính phần tử `target`.      |
| `event.button`              | `MouseEvent`    | Trả về số biểu thị nút chuột vừa được nhấn (`0`: chuột trái, `1`: con lăn giữa, `2`: chuột phải).        |
| `event.relatedTarget`       | `MouseEvent`    | Trả về phần tử liên quan khi di chuột (phần tử vừa rời đi với `mouseover`, hoặc vừa tới với `mouseout`). |
| `event.key`                 | `KeyboardEvent` | Trả về giá trị ký tự hoặc tên phím được nhấn (ví dụ: `"a"`, `"A"`, `"Enter"`, `"Escape"`, `"ArrowUp"`).  |
| `event.code`                | `KeyboardEvent` | Trả về mã vị trí phím vật lý trên bàn phím (ví dụ: `"KeyA"`, `"Digit1"`, `"Space"`, `"ShiftLeft"`).      |
| `event.altKey`              | Cả hai          | Trả về `true` nếu phím `Alt` (hoặc `Option` trên Mac) đang được giữ khi sự kiện xảy ra.                  |
| `event.ctrlKey`             | Cả hai          | Trả về `true` nếu phím `Ctrl` đang được giữ khi sự kiện xảy ra.                                          |
| `event.shiftKey`            | Cả hai          | Trả về `true` nếu phím `Shift` đang được giữ khi sự kiện xảy ra.                                         |
| `event.metaKey`             | Cả hai          | Trả về `true` nếu phím `Meta` (phím `Windows` hoặc `Command ⌘` trên Mac) đang được giữ.                  |
| `event.repeat`              | `KeyboardEvent` | Trả về `true` nếu một phím đang được nhấn giữ liên tục khiến sự kiện `keydown` lặp lại.                  |
