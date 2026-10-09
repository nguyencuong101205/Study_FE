console.log(`getElementsByTagName("li")`);
let li_item = document.getElementsByTagName("li");
console.log(li_item);

var headingNode = document.getElementById("heading");

var headingNodes = document.getElementsByClassName("item1");
console.log(headingNodes);

console.log({
  element: headingNode,
  elementType: headingNode.nodeType,
  elementName: headingNode.nodeName,
  elementText: headingNode.innerText,
});
// document.
console.log(document);

// Cho trước file HTML, các bạn hãy sử dụng các phương thức truy vấn đến các element trong DOM được học ở bài trước để lấy ra các element sau:

// productsListElement: thẻ div có class là products-list.
// firstProductElement: thẻ div đầu tiên có class là product.
// buttonElements: tất cả các thẻ button.

var productsListElement = document.querySelector("div.products-list");
var firstProductElement = document.querySelectorAll("div.product")[0];
var buttonElements = document.getElementsByTagName("button");
