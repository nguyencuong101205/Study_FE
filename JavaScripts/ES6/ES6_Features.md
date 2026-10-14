# Tổng Hợp Các Tính Năng Mới Trong JavaScript ES6 (ECMAScript 2015)

> Tài liệu tham khảo và tổng hợp chi tiết dựa trên nội dung chuẩn từ: [W3Schools JavaScript ES6 Guide](https://www.w3schools.com/js/js_es6.asp).

---

## Mục lục

1. [Tổng quan về ECMAScript 2015 (ES6)](#1-tổng-quan-về-ecmascript-2015-es6)
2. [Bảng tổng hợp tính năng mới](#2-bảng-tổng-hợp-tính-năng-mới)
3. [Khai báo biến: `let` và `const`](#3-khai-báo-biến-let-và-const)
4. [Hàm mũi tên (Arrow Functions)](#4-hàm-mũi-tên-arrow-functions)
5. [Cú pháp Destructuring (Phá vỡ cấu trúc)](#5-cú-pháp-destructuring-phá-vỡ-cấu-trúc)
6. [Toán tử Spread (`...`)](#6-toán-tử-spread-)
7. [Tham số còn lại (Rest Parameters)](#7-tham-số-còn-lại-rest-parameters)
8. [Vòng lặp `for...of`](#8-vòng-lặp-forof)
9. [Cấu trúc dữ liệu Map & Set](#9-cấu-trúc-dữ-liệu-map--set)
10. [Lớp đối tượng (JavaScript Classes)](#10-lớp-đối-tượng-javascript-classes)
11. [Xử lý bất đồng bộ với Promises](#11-xử-lý-bất-đồng-bộ-với-promises)
12. [Kiểu dữ liệu nguyên thủy mới: Symbol](#12-kiểu-dữ-liệu-nguyên-thủy-mới-symbol)
13. [Tham số mặc định (Default Parameters)](#13-tham-số-mặc-định-default-parameters)
14. [Template Literals (Chuỗi mẫu)](#14-template-literals-chuỗi-mẫu)
15. [Các phương thức chuỗi mới (String Methods)](#15-các-phương-thức-chuỗi-mới-string-methods)
16. [Các phương thức mảng mới (Array Methods)](#16-các-phương-thức-mảng-mới-array-methods)
17. [JavaScript Modules (`import` / `export`)](#17-javascript-modules-import--export)
18. [JavaScript Proxy & Reflect](#18-javascript-proxy--reflect)
19. [Phương thức đối tượng: `Object.assign()`](#19-phương-thức-đối-tượng-objectassign)
20. [Cải tiến Math & Number](#20-cải-tiến-math--number)
21. [Cờ mới trong Regular Expression (`/u` và `/y`)](#21-cờ-mới-trong-regular-expression-u-và-y)

---

## 1. Tổng quan về ECMAScript 2015 (ES6)

- **ES6** (tên chính thức là **ECMAScript 2015**) là phiên bản nâng cấp lớn thứ hai của chuẩn ngôn ngữ JavaScript kể từ ES5 (phát hành năm 2009).
- ES6 đem lại cuộc cách mạng cho việc lập trình JavaScript hiện đại: cú pháp ngắn gọn, cấu trúc hướng đối tượng chuẩn hóa hơn, quản lý module độc lập, và bổ sung hàng loạt API mạnh mẽ cho cấu trúc dữ liệu cũng như xử lý bất đồng bộ.

---

## 2. Bảng tổng hợp tính năng mới

| Tính năng                | Cú pháp / Từ khóa                                                                            | Mô tả tóm tắt                                                           |
| :----------------------- | :------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------- |
| **Block Scope Variable** | `let`                                                                                        | Khai báo biến có phạm vi khối (block-scoped).                           |
| **Block Scope Constant** | `const`                                                                                      | Khai báo hằng số không thể gán lại giá trị.                             |
| **Arrow Functions**      | `() => {}`                                                                                   | Cú pháp viết hàm ngắn gọn, chia sẻ lexical `this`.                      |
| **Object Destructuring** | `{ a, b } = obj`                                                                             | Trích xuất thuộc tính của object thành biến riêng.                      |
| **Array Destructuring**  | `[ a, b ] = arr`                                                                             | Trích xuất giá trị phần tử của array thành biến riêng.                  |
| **Spread Operator**      | `...iterable`                                                                                | Trải mảng hoặc đối tượng thành các phần tử rời rạc.                     |
| **Rest Parameter**       | `function(...args)`                                                                          | Gom số lượng tham số không cố định thành một mảng.                      |
| **For/Of Loop**          | `for (x of iterable)`                                                                        | Duyệt qua các giá trị của một đối tượng iterable.                       |
| **Map Objects**          | `new Map()`                                                                                  | Cấu trúc lưu trữ cặp key-value (key có thể là kiểu bất kỳ).             |
| **Set Objects**          | `new Set()`                                                                                  | Tập hợp lưu trữ các giá trị duy nhất (không trùng lặp).                 |
| **Classes**              | `class Person {}`                                                                            | Cú pháp hướng đối tượng hỗ trợ constructor, methods, kế thừa `extends`. |
| **Promises**             | `new Promise()`                                                                              | Đối tượng đại diện cho tác vụ bất đồng bộ thành công hoặc thất bại.     |
| **Symbol**               | `Symbol('desc')`                                                                             | Kiểu dữ liệu nguyên thủy duy nhất, không trùng lặp.                     |
| **Default Parameters**   | `fn(x = 10)`                                                                                 | Giá trị mặc định cho tham số nếu không được truyền vào.                 |
| **Template Literals**    | <code>`Hello ${name}`</code>                                                                 | Chuỗi nhiều dòng và nhúng biểu thức nội suy với <code>${...}</code>.    |
| **String Methods**       | `.includes()`, `.startsWith()`, `.endsWith()`                                                | Kiểm tra sự tồn tại và vị trí chuỗi con.                                |
| **Array Methods**        | `.from()`, `.keys()`, `.entries()`, `.find()`, `.findIndex()`                                | Tạo và tìm kiếm phần tử mảng mạnh mẽ hơn.                               |
| **Modules**              | `import` / `export`                                                                          | Tách và tải mã nguồn thành từng file module độc lập.                    |
| **Proxy & Reflect**      | `new Proxy()`, `Reflect`                                                                     | Can thiệp và tùy chỉnh các hành vi cơ bản trên object.                  |
| **Object.assign()**      | `Object.assign(target, src)`                                                                 | Sao chép thuộc tính từ object nguồn sang đích.                          |
| **Math Features**        | `Math.trunc()`, `Math.sign()`, `Math.cbrt()`, `Math.log2()`, `Math.log10()`                  | Các hàm toán học tính số nguyên, dấu, căn bậc 3, logarithm.             |
| **Number Features**      | `Number.EPSILON`, `MIN_SAFE_INTEGER`, `MAX_SAFE_INTEGER`, `.isInteger()`, `.isSafeInteger()` | Hằng số và hàm kiểm tra tính toàn vẹn của số.                           |
| **RegExp Flags**         | `/u`, `/y`                                                                                   | Hỗ trợ Unicode đầy đủ (`/u`) và tìm kiếm vị trí liên tục dính (`/y`).   |

---

## 3. Khai báo biến: `let` và `const`

Trước ES6, JavaScript chỉ có từ khóa `var` với phạm vi hàm (function scope) hoặc toàn cục (global scope), dễ dẫn đến lỗi rò rỉ biến. ES6 giới thiệu `let` và `const` với **phạm vi khối mã (block scope)**.

### `let`

- Có phạm vi trong cặp ngoặc nhọn `{}` gần nhất chứa nó.
- Có thể gán lại giá trị, nhưng **không** được khai báo lại trong cùng một phạm vi.

```javascript
var x = 10;
// Ở đây x là 10
{
  let x = 2;
  // Ở trong block này, x là 2
}
// Ra ngoài block, x vẫn là 10
```

### `const`

- Có phạm vi khối tương tự `let`.
- Bắt buộc phải khởi tạo giá trị khi khai báo và **không thể gán lại** giá trị mới (immutable binding).
- _Lưu ý:_ Với mảng hoặc đối tượng, bạn không thể gán lại biến thành một đối tượng khác, nhưng vẫn có thể sửa đổi nội dung bên trong nó (thêm/xóa/sửa property hoặc phần tử).

```javascript
const PI = 3.141592653589793;
// PI = 3.14; // TypeError: Assignment to constant variable.

const car = { type: "Fiat", model: "500", color: "white" };
car.color = "red"; // Hợp lệ: Sửa thuộc tính bên trong
car.owner = "Johnson"; // Hợp lệ: Thêm thuộc tính mới
// car = { type: "Volvo" }; // Lỗi: Không thể gán lại cả object
```

### So sánh nhanh: `var` vs `let` vs `const`

| Tiêu chí                          | `var`                     | `let`                             | `const`                           |
| :-------------------------------- | :------------------------ | :-------------------------------- | :-------------------------------- |
| **Phạm vi (Scope)**               | Function / Global         | Block `{}`                        | Block `{}`                        |
| **Khai báo lại trong cùng scope** | Cho phép                  | Bị lỗi (`SyntaxError`)            | Bị lỗi (`SyntaxError`)            |
| **Gán lại giá trị**               | Cho phép                  | Cho phép                          | Không cho phép                    |
| **Hoisting**                      | Có (khởi tạo `undefined`) | Có (nằm trong Temporal Dead Zone) | Có (nằm trong Temporal Dead Zone) |

---

## 4. Hàm mũi tên (Arrow Functions)

Hàm mũi tên mang lại cú pháp ngắn gọn để viết các biểu thức hàm (function expressions).

### Cú pháp cơ bản

```javascript
// Cú pháp ES5 cũ:
var multiply = function (x, y) {
  return x * y;
};

// Cú pháp ES6 Arrow function:
const multiply = (x, y) => x * y;
```

### Các quy tắc rút gọn:

1. **Một biểu thức duy nhất (Implicit return):** Nếu hàm chỉ có 1 dòng biểu thức, có thể bỏ dấu ngoặc nhọn `{}` và từ khóa `return`.
2. **Một tham số:** Nếu chỉ có đúng 1 tham số, có thể bỏ dấu ngoặc đơn `()`:
   ```javascript
   const square = (x) => x * x;
   ```
3. **Không có tham số:** Bắt buộc phải có cặp ngoặc đơn `()`:
   ```javascript
   const sayHello = () => "Hello World!";
   ```

### Đặc điểm quan trọng về `this` (Lexical `this`)

- Arrow function **không** có từ khóa `this` của riêng nó. Giá trị `this` bên trong arrow function sẽ kế thừa từ ngữ cảnh bao bọc nó (lexical context).
- Không thể sử dụng arrow function làm constructor (không gọi được với `new`).
- Không có đối tượng giả mảng `arguments`.

---

## 5. Cú pháp Destructuring (Phá vỡ cấu trúc)

Destructuring cho phép trích xuất các giá trị từ mảng hoặc thuộc tính của đối tượng và gán vào các biến riêng biệt một cách thuận tiện.

### Object Destructuring (Phá vỡ cấu trúc Object)

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

// Trích xuất thuộc tính vào biến có cùng tên:
let { firstName, age } = person;
console.log(firstName); // "John"
console.log(age); // 50

// Đổi tên biến khi trích xuất và đặt giá trị mặc định:
let { firstName: fName, country = "Vietnam" } = person;
console.log(fName); // "John"
console.log(country); // "Vietnam" (do person không có thuộc tính country)
```

### Array Destructuring (Phá vỡ cấu trúc Mảng)

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Lấy 2 phần tử đầu:
let [fruit1, fruit2] = fruits;
console.log(fruit1); // "Banana"
console.log(fruit2); // "Orange"

// Bỏ qua phần tử bằng dấu phẩy:
let [first, , third] = fruits;
console.log(third); // "Apple"

// Đảo giá trị giữa 2 biến cực kỳ đơn giản:
let a = 1,
  b = 2;
[a, b] = [b, a];
console.log(a, b); // 2, 1
```

---

## 6. Toán tử Spread (`...`)

Toán tử `...` (Spread) giúp "trải" các phần tử của một mảng hoặc các thuộc tính của một đối tượng có thể lặp (iterable) thành từng phần tử đơn lẻ.

### Ứng dụng thực tế:

```javascript
// 1. Truyền các phần tử của mảng vào làm đối số của hàm:
const numbers = [23, 55, 21, 87, 56];
let minValue = Math.min(...numbers); // Tương đương Math.min(23, 55, 21, 87, 56)
let maxValue = Math.max(...numbers);
console.log(minValue); // 21
console.log(maxValue); // 87

// 2. Nối / gộp các mảng:
const arr1 = ["Jan", "Feb", "Mar"];
const arr2 = ["Apr", "May", "Jun"];
const combined = [...arr1, ...arr2];
console.log(combined); // ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]

// 3. Sao chép nông (shallow copy) mảng hoặc object:
const original = [1, 2, 3];
const copy = [...original];
```

---

## 7. Tham số còn lại (Rest Parameters)

Cũng sử dụng ký hiệu `...`, nhưng khi nằm ở vị trí tham số hàm, nó được gọi là **Rest Parameters**. Nó cho phép hàm tiếp nhận số lượng đối số tùy ý và gom chúng lại thành **một mảng thực sự** (khắc phục nhược điểm của đối tượng giả mảng `arguments` thời ES5).

```javascript
function sum(...args) {
  let total = 0;
  for (let arg of args) {
    total += arg;
  }
  return total;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log(x); // 326
```

---

## 8. Vòng lặp `for...of`

Vòng lặp `for...of` dùng để lặp qua các **giá trị (values)** của các đối tượng có thể lặp (Iterable objects) như Array, String, Map, Set, NodeList,...

### Lặp qua Mảng (Array)

```javascript
const cars = ["BMW", "Volvo", "Mini"];
for (let car of cars) {
  console.log(car); // "BMW", "Volvo", "Mini"
}
```

### Lặp qua Chuỗi (String)

```javascript
let language = "JavaScript";
for (let char of language) {
  console.log(char); // In ra từng ký tự 'J', 'a', 'v', ...
}
```

> **Phân biệt `for...in` và `for...of`:**
>
> - `for...in`: Duyệt qua các **key / index (chỉ mục)** của object hoặc array.
> - `for...of`: Duyệt qua các **value (giá trị)** của iterable.

---

## 9. Cấu trúc dữ liệu Map & Set

ES6 mang đến hai kiểu cấu trúc dữ liệu tập hợp mạnh mẽ là `Map` và `Set`.

### JavaScript `Map`

Một `Map` lưu trữ dữ liệu dưới dạng cặp `[key, value]`. Điểm vượt trội so với Object thông thường là: **Key có thể là bất kỳ kiểu dữ liệu nào** (kể cả object, hàm, số, boolean).

```javascript
// Khởi tạo Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);

// Thêm hoặc cập nhật phần tử:
fruits.set("mango", 400);

// Truy xuất dữ liệu:
console.log(fruits.get("apples")); // 500
console.log(fruits.has("bananas")); // true
console.log(fruits.size); // 4

// Xóa phần tử:
fruits.delete("oranges");
```

### JavaScript `Set`

Một `Set` là tập hợp các **giá trị duy nhất** (mỗi giá trị chỉ xuất hiện đúng 1 lần, không bị trùng lặp).

```javascript
// Tạo một Set mới
const letters = new Set();

letters.add("a");
letters.add("b");
letters.add("c");
letters.add("a"); // Bị bỏ qua vì "a" đã tồn tại

console.log(letters.size); // 3
console.log(letters.has("b")); // true

// Ứng dụng phổ biến: Lọc các phần tử trùng lặp trong mảng:
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]
```

---

## 10. Lớp đối tượng (JavaScript Classes)

ES6 giới thiệu từ khóa `class`, giúp viết mã lập trình hướng đối tượng (OOP) rõ ràng, chuẩn hóa và quen thuộc hơn (bản chất phía dưới vẫn dựa trên cơ chế Prototype của JavaScript).

### Khởi tạo và sử dụng Class:

```javascript
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  // Khai báo phương thức
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

// Tạo đối tượng từ Class
const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

console.log(myCar1.name); // "Ford"
console.log(myCar1.age()); // Tuổi của xe
```

### Kế thừa với `extends` và `super`:

```javascript
class Model extends Car {
  constructor(name, year, model) {
    super(name, year); // Gọi constructor của lớp cha
    this.model = model;
  }

  show() {
    return `${this.name} ${this.model} (${this.year})`;
  }
}

const myCar3 = new Model("Ford", 2014, "Mustang");
console.log(myCar3.show()); // "Ford Mustang (2014)"
```

---

## 11. Xử lý bất đồng bộ với Promises

`Promise` là một đối tượng dùng để xử lý các thao tác bất đồng bộ (như gọi API mạng, đọc file, hẹn giờ), giúp mã nguồn dễ đọc hơn và tránh hiện tượng "Callback Hell".

Một Promise có 3 trạng thái:

- **Pending:** Đang chờ xử lý.
- **Fulfilled:** Hoàn thành thành công (kèm kết quả qua `resolve()`).
- **Rejected:** Bị từ chối / thất bại (kèm lý do qua `reject()`).

```javascript
const myPromise = new Promise(function (myResolve, myReject) {
  let success = true;

  // Thực thi tác vụ bất đồng bộ...
  if (success) {
    myResolve("Thao tác thành công!");
  } else {
    myReject("Đã xảy ra lỗi!");
  }
});

// Tiêu thụ Promise (Consuming code)
myPromise
  .then(function (result) {
    console.log(result); // "Thao tác thành công!"
  })
  .catch(function (error) {
    console.error(error);
  });
```

---

## 12. Kiểu dữ liệu nguyên thủy mới: Symbol

`Symbol` là kiểu dữ liệu nguyên thủy thứ 7 được thêm vào JavaScript trong ES6. Mỗi giá trị Symbol là **duy nhất (unique)** và **bất biến (immutable)**.

Thường được dùng làm định danh thuộc tính của object mà không sợ bị trùng tên với các thuộc tính khác.

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

let id = Symbol("id");
person[id] = 140353; // Thuộc tính được bảo vệ với key là Symbol

console.log(person[id]); // 140353
// Symbol không xuất hiện khi lặp bằng for...in hoặc Object.keys()
console.log(Object.keys(person)); // ["firstName", "lastName", "age", "eyeColor"]
```

---

## 13. Tham số mặc định (Default Parameters)

ES6 cho phép bạn thiết lập giá trị mặc định cho tham số của hàm ngay tại danh sách tham số. Nếu người gọi hàm không truyền đối số hoặc truyền `undefined`, giá trị mặc định sẽ được áp dụng.

```javascript
function myFunction(x, y = 10) {
  // y sẽ tự động mang giá trị 10 nếu không được truyền vào
  return x + y;
}

console.log(myFunction(5)); // 15 (x = 5, y = 10)
console.log(myFunction(5, 20)); // 25 (x = 5, y = 20)
```

---

## 14. Template Literals (Chuỗi mẫu)

Sử dụng dấu backtick (`` ` ``) thay cho dấu nháy đơn (`'`) hoặc nháy kép (`"`), hỗ trợ:

1. **Nội suy chuỗi (String Interpolation):** Nhúng biến và biểu thức trực tiếp bằng `${expression}`.
2. **Chuỗi nhiều dòng (Multiline Strings):** Không cần dùng ký tự `\n` hay dấu cộng `+`.

```javascript
let firstName = "John";
let lastName = "Doe";

// Nhúng biến
let text = `Welcome ${firstName}, ${lastName}!`;
console.log(text); // "Welcome John, Doe!"

// Chuỗi nhiều dòng:
let html = `
  <div>
    <h1>${firstName}</h1>
    <p>Age: ${30 + 20}</p>
  </div>
`;
```

---

## 15. Các phương thức chuỗi mới (String Methods)

ES6 bổ sung các phương thức tiện lợi để tìm kiếm và kiểm tra nội dung chuỗi:

### `String.prototype.includes()`

Kiểm tra xem một chuỗi có chứa chuỗi con được chỉ định hay không (trả về `true`/`false`).

```javascript
let text = "Hello world, welcome to the universe.";
console.log(text.includes("world")); // true
```

### `String.prototype.startsWith()`

Kiểm tra chuỗi có bắt đầu bằng một chuỗi con được chỉ định hay không.

```javascript
let text = "Hello world, welcome to the universe.";
console.log(text.startsWith("Hello")); // true
console.log(text.startsWith("world")); // false
```

### `String.prototype.endsWith()`

Kiểm tra chuỗi có kết thúc bằng chuỗi con được chỉ định hay không.

```javascript
let text = "John Doe";
console.log(text.endsWith("Doe")); // true
```

---

## 16. Các phương thức mảng mới (Array Methods)

### `Array.from()`

Tạo ra một phiên bản mảng mới từ bất kỳ đối tượng có thuộc tính length hoặc đối tượng lặp (iterable):

```javascript
// Tạo mảng từ một chuỗi:
const arr = Array.from("ABCDEFG");
console.log(arr); // ["A", "B", "C", "D", "E", "F", "G"]
```

### `Array.prototype.keys()`

Trả về một đối tượng Iterator chứa các chỉ mục (keys / indexes) của mảng:

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

for (let x of keys) {
  console.log(x); // 0, 1, 2, 3
}
```

### `Array.prototype.entries()`

Trả về một đối tượng Iterator chứa các cặp `[index, value]`:

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

for (let [index, fruit] of f) {
  console.log(index, fruit); // 0 "Banana", 1 "Orange", ...
}
```

### `Array.prototype.find()`

Trả về **giá trị** của phần tử đầu tiên thỏa mãn hàm điều kiện:

```javascript
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find((x) => x > 18);
console.log(first); // 25
```

### `Array.prototype.findIndex()`

Trả về **chỉ mục (index)** của phần tử đầu tiên thỏa mãn hàm điều kiện:

```javascript
const numbers = [4, 9, 16, 25, 29];
let firstIndex = numbers.findIndex((x) => x > 18);
console.log(firstIndex); // 3 (vị trí của số 25)
```

---

## 17. JavaScript Modules (`import` / `export`)

ES6 chính thức hỗ trợ hệ thống Module chuẩn trên JavaScript, cho phép chia tách code thành các file nhỏ độc lập, dễ tái sử dụng và bảo trì.

### Xuất khẩu (Export)

```javascript
// person.js
export const name = "Jesse";
export const age = 40;

// Hoặc export default:
const message = () => "Hello World";
export default message;
```

### Nhập khẩu (Import)

```javascript
// main.js
import { name, age } from "./person.js";
import message from "./person.js";

console.log(name, age);
console.log(message());
```

---

## 18. JavaScript Proxy & Reflect

### `Proxy`

Cho phép bạn tạo một đối tượng bọc ngoài (wrapper) đối tượng mục tiêu để đón chặn và tùy biến các thao tác cơ bản (như đọc thuộc tính `get`, ghi thuộc tính `set`, xóa thuộc tính `deleteProperty`,...):

```javascript
const user = { name: "Jan", age: 40 };

const proxy = new Proxy(user, {
  get(target, property) {
    if (property in target) {
      return target[property];
    }
    return `Thuộc tính '${property}' không tồn tại.`;
  },
});

console.log(proxy.name); // "Jan"
console.log(proxy.occupation); // "Thuộc tính 'occupation' không tồn tại."
```

### `Reflect`

Đối tượng `Reflect` cung cấp các phương thức tĩnh phục vụ cho các thao tác cấp thấp (low-level) trên đối tượng JavaScript:

```javascript
const person = { name: "John", lastname: "Doe" };

// Tương đương "name" in person
let answer = Reflect.has(person, "name");
console.log(answer); // true
```

---

## 19. Phương thức đối tượng: `Object.assign()`

`Object.assign()` sao chép tất cả các thuộc tính có thể liệt kê (enumerable own properties) từ một hoặc nhiều đối tượng nguồn (`sources`) sang một đối tượng đích (`target`).

```javascript
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

const person2 = { firstName: "Anne", color: "red" };

// Sao chép person2 vào person1:
Object.assign(person1, person2);

console.log(person1.firstName); // "Anne" (bị ghi đè)
console.log(person1.color); // "red" (thuộc tính mới được gộp vào)
```

---

## 20. Cải tiến Math & Number

### Các phương thức `Math` mới

ES6 bổ sung nhiều hàm toán học hữu ích:

| Phương thức     | Ví dụ             | Kết quả | Mô tả                                                      |
| :-------------- | :---------------- | :------ | :--------------------------------------------------------- |
| `Math.trunc(x)` | `Math.trunc(4.9)` | `4`     | Cắt bỏ phần thập phân, chỉ giữ lại phần nguyên của số `x`. |
| `Math.sign(x)`  | `Math.sign(-4)`   | `-1`    | Trả về `-1` (nếu âm), `0` (nếu bằng 0), `1` (nếu dương).   |
| `Math.cbrt(x)`  | `Math.cbrt(8)`    | `2`     | Tính căn bậc 3 (cube root) của số `x`.                     |
| `Math.log2(x)`  | `Math.log2(8)`    | `3`     | Tính logarithm cơ số 2 của `x`.                            |
| `Math.log10(x)` | `Math.log10(100)` | `2`     | Tính logarithm cơ số 10 của `x`.                           |

```javascript
// 1. Math.trunc(x): Cắt bỏ phần thập phân, giữ lại phần nguyên
Math.trunc(4.9); // 4
Math.trunc(-4.9); // -4

// 2. Math.sign(x): Trả về dấu (-1 nếu âm, 0 nếu bằng 0, 1 nếu dương)
Math.sign(-4); // -1
Math.sign(0); // 0
Math.sign(4); // 1

// 3. Math.cbrt(x): Căn bậc 3
Math.cbrt(8); // 2
Math.cbrt(64); // 4

// 4. Math.log2(x): Logarithm cơ số 2
Math.log2(8); // 3

// 5. Math.log10(x): Logarithm cơ số 10
Math.log10(100); // 2
```

### Các thuộc tính và phương thức `Number` mới

| Thuộc tính / Phương thức  | Giá trị / Ví dụ            | Kết quả             | Mô tả                                                          |
| :------------------------ | :------------------------- | :------------------ | :------------------------------------------------------------- |
| `Number.EPSILON`          | `Number.EPSILON`           | `~2.22e-16`         | Khoảng chênh lệch nhỏ nhất giữa 1 và số lớn hơn 1 tiếp theo.   |
| `Number.MIN_SAFE_INTEGER` | `Number.MIN_SAFE_INTEGER`  | `-9007199254740991` | Giá trị số nguyên an toàn nhỏ nhất trong JS (-(2^53 - 1)).     |
| `Number.MAX_SAFE_INTEGER` | `Number.MAX_SAFE_INTEGER`  | `9007199254740991`  | Giá trị số nguyên an toàn lớn nhất trong JS (2^53 - 1).        |
| `Number.isInteger(x)`     | `Number.isInteger(10.5)`   | `false`             | Kiểm tra xem đối số truyền vào có phải là số nguyên hay không. |
| `Number.isSafeInteger(x)` | `Number.isSafeInteger(10)` | `true`              | Kiểm tra xem đối số có phải là một số nguyên an toàn không.    |

```javascript
// Hằng số Number mới:
Number.EPSILON; // Khoảng chênh lệch nhỏ nhất giữa 1 và số lớn hơn 1 tiếp theo (~ 2.22e-16)
Number.MIN_SAFE_INTEGER; // -9007199254740991 (-(2^53 - 1))
Number.MAX_SAFE_INTEGER; // 9007199254740991 (2^53 - 1)

// Phương thức Number mới:
Number.isInteger(10); // true
Number.isInteger(10.5); // false

Number.isSafeInteger(10); // true
Number.isSafeInteger(12345678901234567890); // false (vượt quá giới hạn số an toàn)
```

### Phương thức toàn cục / Number: `isFinite()` và `isNaN()`

| Phương thức          | So sánh với hàm toàn cục (Global)                                                                                                   |
| :------------------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| `Number.isFinite(x)` | Chặt chẽ hơn `isFinite(x)`: Không tự động ép kiểu chuỗi sang số. Trả về `true` khi và chỉ khi `x` thực sự là kiểu `number` hữu hạn. |
| `Number.isNaN(x)`    | Chặt chẽ hơn `isNaN(x)`: Không ép kiểu chuỗi sang số. Chỉ trả về `true` khi giá trị truyền vào thực sự là `NaN`.                    |

```javascript
// Number.isFinite() kiểm tra chặt chẽ giá trị có phải số hữu hạn không (không tự động ép kiểu):
Number.isFinite(10 / 0); // false
Number.isFinite(10 / 1); // true
Number.isFinite("100"); // false (isFinite("100") toàn cục sẽ trả về true do ép kiểu)

// Number.isNaN() kiểm tra chặt chẽ giá trị có phải là NaN hay không:
Number.isNaN(NaN); // true
Number.isNaN("Hello"); // false (isNaN("Hello") toàn cục sẽ trả về true)
```

---

## 21. Cờ mới trong Regular Expression (`/u` và `/y`)

### Cờ `/u` (Unicode)

Bật chế độ hỗ trợ Unicode toàn diện cho biểu thức chính quy, cho phép nhận diện các ký tự surrogate pair (như emoji, ký tự đặc biệt) và các thuộc tính Unicode `\p{...}`:

```javascript
let text = "Hello 😄";
let pattern = /\p{Emoji}/u;
console.log(pattern.test(text)); // true
```

### Cờ `/y` (Sticky)

Thực hiện tìm kiếm kiểu "dính" (sticky) bắt đầu đúng tại chỉ mục được xác định bởi thuộc tính `lastIndex`:

```javascript
let text = "abc def ghi";
let pattern = /\w+/y;

// Tìm kiếm bắt đầu đúng từ vị trí index 4 (chữ 'def'):
pattern.lastIndex = 4;
let result = text.match(pattern);
console.log(result[0]); // "def"
```

---

## Lời kết

ES6 (ECMAScript 2015) là bước ngoặt quan trọng đưa JavaScript trở thành một ngôn ngữ mạnh mẽ, hoàn chỉnh cho cả lập trình Front-end (React, Vue, Angular) lẫn Back-end (Node.js). Nắm vững các tính năng của ES6 là nền tảng cốt lõi cho mọi lập trình viên JavaScript hiện đại.
