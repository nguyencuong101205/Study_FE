// Toan Tu
/** 
 * So hoc
 * gan
 * so sanh
 * logic
 */

var a = 1 + 2;
console.log(a);

var fulName = 'Nguyen Ba Trung Cuong';
console.log(fulName);

var a = 1;
var b = 2;


if (a < b) {
    alert('True');
}

if (a > 0 && b > 0) {
    alert('a&b > 0');
}

/**
 * Toan tu  vi du   tuong duong
 * =        x = y   x = y
 * +=       x += y  (x = x + y)
 * -=       x -= y  (x = x - y)
 * *=       x *= y  (x = x * y)
 * /=       x /= y  (x = x / y)
 * **=      x **= y (x = x ** y)
 */

var a = 1;
a = a + 2;
a += 2;
a -= 2;
a *= 2;
a /= 2;
a **= 2;

console.log(a);

var number = 1;

number++; // dùng làm hậu tố, ++ ở phía sau biến
console.log(number); // 2

number++;
console.log(number); // 3

var number = 1;

++number; // dùng làm tiền tố, ++ ở phía trước biến
console.log(number); // 2

//perfix & postfix

// toan tu so sanh
/**
 * ==       Bang nhau
 * !=       Khong bang
 * >        Lớn hơn
 * <        Nho hon
 * >=       Lớn hơn hoặc bằng
 * <=       Nho hon hoặc bằng
 */

var a = 1;
var b = 2;

if (a == b) {
    console.log('a bang b');
}else {
    console.log('a khong bang b');
}

Boolean
var a = 1;
var b = 2;

var isSuccess = a > b;
 if (isSuccess) {
    console.log('true');
 }else {
    console.log('false');
 }

 /**
  * toan tu logic
  * &&      va
  * ||      hoac
  * !       phu dinh
  */

 /**
  * kieu du lieu
  * du lieu nguyen thuy
  * number
  * string
  * boolean
  * undefined
  * null
  * symbol
  * du lieu phuc tap
  * object
  * function
  */
 var a = 1; // number
 var b = 2;
 var c = 1.5;

 var fulName = 'Nguyen Ba Trung Cuong'; // string

 var age; // undefined

 var isSuccess = true; // boolean

 var user = null; // null

 var id = Symbol('id'); // symbol
var id2 = Symbol('id'); // symbol

// console.log(id === id2); // false

var myFunction = function() {
    alert('Hello');
}
myFunction();// function

var myObject = {
    name: 'Nguyen Ba Trung Cuong',
    age: 20,
    address: 'Ha Noi'
}; // object
console.log("myObject", myObject);

var myArray = [
    'Nguyen Ba Trung Cuong',
    20,
    'Ha Noi'
]; // array
console.log("myArray", myArray);

//toan tu so sanh
/**
 * ===      Bang nhau va cung kieu du lieu
 * !==     Khong bang va khac kieu du lieu
 */

var a = 1; 
var b = '1'; 
console.log(a === b);