// console.log(`getElementsByTagName("li")`);
// let li_item = document.getElementsByTagName("li");
// console.log(li_item);

// var headingNode = document.getElementById("heading");

// var headingNodes = document.getElementsByClassName("item1");
// console.log(headingNodes);

// console.log({
//   element: headingNode,
//   elementType: headingNode.nodeType,
//   elementName: headingNode.nodeName,
//   elementText: headingNode.innerText,
// });
// // document.
// console.log(document);

// Cho trước file HTML, các bạn hãy sử dụng các phương thức truy vấn đến các element trong DOM được học ở bài trước để lấy ra các element sau:

// productsListElement: thẻ div có class là products-list.
// firstProductElement: thẻ div đầu tiên có class là product.
// buttonElements: tất cả các thẻ button.

// var productsListElement = document.querySelector("div.products-list");
// var firstProductElement = document.querySelectorAll("div.product")[0];
// var buttonElements = document.getElementsByTagName("button");

// Element
// Attribute

// DOM Attribute
//

// var headingElement = document.querySelector("h1");

// console.log({
//   element: headingElement,
//   elementType: headingElement.nodeType,
//   elementName: headingElement.nodeName,
//   elementText: headingElement.innerText,
//   elementHTML: headingElement.innerHTML,
//   elementClass: headingElement.className,
//   elementId: headingElement.id,
//   elementStyle: headingElement.style,
//   elementAttribute: headingElement.getAttribute("id"),
//   elementAttribute2: headingElement.getAttribute("class"),
//   elementAttribute3: headingElement.getAttribute("style"),
// });

// Text nodes
// innerText, textContent, innerHTML, outerHTML
// innerText: lấy ra text hiển thị trên trình duyệt, bỏ qua các thẻ html
// textContent: lấy ra tất cả text, kể cả thẻ html
// innerHTML: lấy ra tất cả text, kể cả thẻ html, nhưng trả về dạng html
// outerHTML: lấy ra tất cả text, kể cả thẻ html, và trả về dạng html với chính thẻ đó
// geter and setter
// get: lấy ra giá trị
// set: gán giá trị

// var headingElement = document.querySelector("h1");
// headingElement.innerText = "Hello World";
// headingElement.textContent = "Hello World Bear";
// headingElement.innerHTML = "Hello World <strong>Bear</strong>";
// headingElement.outerHTML = "<h1>Hello World <strong>Bear</strong></h1>";

// var boxElement = document.querySelector("div.box");
// console.log((boxElement.innerText = "<h1>Hello World</h1>"));
// console.log((boxElement.textContent = "<h1>Hello World</h1>"));
// console.log((boxElement.innerHTML = "<h1>Hello World</h1>"));
// console.log((boxElement.outerHTML = "<h1>Hello World</h1>"));

// function render(html) {
//   var htmlElement = document.querySelector("ul");
//   htmlElement.innerHTML = html;
// }

// render(`
//     <li>Khóa học HTML</li>
//     <li>Khóa học JS</li>
//     <li>Khóa học PHP</li>
// `)

//  bài trước chúng ta đã tạo hàm render để thực hiện chèn 1 đoạn text HTML vào thẻ ul. Trong bài này chúng ta cùng làm 1 thử thách khó hơn nhé.

// Các bạn hãy viết hàm render có 1 tham số courses, hàm render sẽ thêm các item của mảng courses để tạo thành 1 danh sách các khóa học trên giao diện.

// Ví dụ: Với mảng var courses = ['ReactJS', 'AngularJS', 'VueJS'] sẽ thu được kết quả:

// ReactJS
// AngularJS
// VueJS
// Gợi ý:

// Sử dụng phương thức map kết hợp với join để tạo chuỗi HTML từ mảng courses.
// Gán chuỗi HTML vừa tạo vào thuộc innerHTML của thẻ ul giống bài trước nhé.
// Thêm danh sách khóa học
// courses.map is not a function

// var courses = ["HTML & CSS", "Javascript", "PHP", "Java"];

// function render(courses) {
//   var html = courses
//     .map(function (course) {
//       return `<li>${course}</li>`;
//     })
//     .join("");
//   var htmlElement = document.querySelector("ul");
//   htmlElement.innerHTML = html;
// }

// render(courses)

// DOM CSS
// style: là 1 object, chứa tất cả các thuộc tính css của element
// assign: gán
//

var boxElement = document.querySelector("div.box");
document.querySelector("div.box").style.width = "200px";
// boxElement.style.height = "200px";
// boxElement.style.backgroundColor = "red";
Object.assign(boxElement.style, {
  // height: "200px",
  // backgroundColor: "green",
});
console.log(boxElement.style);

// Các bạn hãy thay đổi màu nền của thẻ div có class là .red thành màu #f00
// và màu chữ của thẻ p thành màu #f05123.
var bearElement = document.querySelector("div.red");
Object.assign(bearElement.style, {
  backgroundColor: "#f00",
});

var pElement = document.querySelector("p");
Object.assign(pElement.style, {
  color: "#f05123",
});

// ClassList property
// classList: là 1 object, chứa tất cả các class của element
// sẽ trả về DOMTokenList
// 0: "box"   số lượng class của element
// length: 1  độ dài của classList
// values: ƒ values()
// add: thêm class
// remove: xóa class
// toggle: nếu có class thì xóa, nếu không có thì thêm class
// contains: kiểm tra xem có class hay không, trả về true hoặc false

var boxElement = document.querySelector("div.box");

boxElement.classList.add("red");
boxElement.classList.remove("box");
boxElement.classList.toggle("active");
boxElement.classList.contains("red");

setTimeout(() => {
  boxElement.classList.remove("red");
}, 2000);
console.log(boxElement.classList);

var divElement = document.querySelectorAll("div");
divElement.forEach(function (div) {
  div.classList.add("box");
});

// DOM event
// event: là 1 hành động xảy ra trên element
// event handler: là 1 hàm sẽ được gọi khi event xảy ra
// event listener: là 1 hàm sẽ được gọi khi event xảy ra, có thể thêm nhiều event listener cho 1 element

// 1. Sử dụng DOM event để khi click vào button "Mua ngay"
// sẽ hiển thị thông báo "Bạn đã mua khóa học HTML & CSS Pro" trên console.log
var ctaButtons = document.querySelectorAll(".cta-btn");
ctaButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    alert("Bạn đã mua khóa học HTML & CSS Pro");
    console.log("Bạn đã mua khóa học HTML & CSS Pro");
  });
});

// Cho trước thẻ button,
// Hãy viết code JS sao cho khi click vào button sẽ đổi màu chữ button sang màu #fff.
var clickButton = document.querySelector("button");
clickButton.addEventListener("click", function () {
  clickButton.style.color = "#fff";
});

// input / select
// keyup / down

var inputElement = document.querySelector("input[type='text']");
inputElement.onchange = function (e) {
  console.log(e.target.value);
};

var selectElement = document.querySelector("select");
selectElement.onchange = function (e) {
  console.log(e.target.value);
};

var inputElement2 = document.querySelector("input[type='checkbox']");
inputElement2.onchange = function (e) {
  console.log(e.target.checked);
};

var inputElement3 = document.querySelector("input[type='text']");
inputElement3.onkeyup = function (e) {
  console.log(e.target.value);
};

// DOM events
// preventDefault: ngăn chặn hành vi mặc định của element
// stopPropagation: ngăn chặn sự kiện lan truyền từ element này sang element khác
