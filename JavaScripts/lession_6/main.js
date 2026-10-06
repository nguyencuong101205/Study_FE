/**
 * Kiểu số
 * 1. Tạo giá trị Number
 *  - Cách tạo giá trị Number
 *  -Dùng cách nào? Tại sao?
 *  - Kiểm tra kiểu dữ liệu Number
 * 2. Làm việc với Number
 *  -To string
 *  -To fixed
 */

var age = 21;
var PI = 3.14;

var otherNumber = new Number(21);

console.log(typeof age);
console.log(typeof otherNumber);

var result = 20 / 'abc';
console.log(result); 
//NaN là số không hợp lệ

console.log(isNaN(result));

//To string
console.log( typeof age.toString());

//To fixed
var result2 = PI.toFixed();
console.log(result2);