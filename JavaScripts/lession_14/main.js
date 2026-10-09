function myFunction(param) {
  console.log(typeof param);
}

function myCallback() {}

myFunction(myCallback);

//
function sumCb(a, b) {
  return a + b;
}

function subCb(a, b) {
  return a - b;
}

function multiCb(a, b) {
  return a * b;
}

function divCb(a, b) {
  return a / b;
}

function caculate(a, b, cb) {
  return cb(a, b);
}

console.log(caculate(1, 2, sumCb));
console.log(caculate(1, 2, subCb));
console.log(caculate(1, 2, multiCb));
console.log(caculate(3, 1, divCb));

// Callback - Part 2

//  Là hàm
//  Truyền qua đối số
//  Được gọi lại(trong hàm nhận đối số)

var course = [`JavaScript`, `PHP`, `Ruby`];

// function myMap(arr, cb) {
//   var output = [];
//   for (var i = 0; i < arr.length; i++) {
//     output.push(cb(arr[i]));
//   }
//   return output;
// }

// console.log(myMap(course));

//  tao ra 1 hàm map2 cho mảng, nó sẽ nhận vào 1 callback và trả về 1 mảng mới
Array.prototype.map2 = function (callback) {
  console.log(this);
  var output = [];
  var arrayLength = this.length;

  // Nhận kết quả trả về từ hàm callback và push vào mảng output
  for (var i = 0; i < arrayLength; i++) {
    var result = callback(this[i], i);
    console.log(`Result: ${result}`);
    output.push(result);
  }
  //   xong vòng lặp thì trả về mảng output
  return output;
};
// Mỗi lần lặp thì nó sẽ gọi lại hàm callback và truyền vào 2 đối số là phần tử hiện tại và index của phần tử đó
var htmls = course.map2(function (course) {
  return `<h2>${course}</h2>`;
});

console.log(htmls);

//

Array.prototype.myMap = function (cb) {
  console.log(this);
  var output = [];
  var arrayLength = this.length;
  for (var i = 0; i < arrayLength; i++) {
    var result = cb(this[i], i);
    console.log(result);
    output.push(result);
  }
  return output;
};

Array.prototype.myFilter = function (cb) {
  var output = [];
  var arrayLength = this.length;
  for (var i = 0; i < arrayLength; i++) {
    if (cb(this[i], i, this)) {
      output.push(this[i]);
    }
  }
  return output;
};

// Expected results
// const numbers = [1, 2, 3];

// console.log(numbers.myMap(function (number) {
//     return number * 2;
// })) // Output: [2, 4, 6]

// console.log(numbers.myMap(function (number, index) {
//     return number * index;
// })) // Output: [0, 2, 6]

// forEach, find, filter, some, every, reduce, includes
// empty x 8 (undefined)
var courses = ["JavaScript", "PHP", "Ruby"];

courses.length = 10;
console.log(courses.length);

for (var i = 0; i < courses.length; i++) {
  console.log(courses[i]);
}
// Chỉ in ra phần tử có giá trị, còn những phần tử không có giá trị thì không in ra
for (var index in courses) {
  console.log(courses[index]);
}

// Khi mnarg mảng với new Array() thì những phần tử không có giá trị sẽ được in ra là undefined
// Khi push vào mảng thì những phần tử không có giá trị sẽ được thay thế bằng giá trị mới
// Giá trị mới sẽ được thêm vào cuối mảng
// Sẽ được in ra tất cả các phần tử của mảng, kể cả những phần tử không có giá trị
var courses2 = new Array(10);
course2.push("JavaScript", "PHP", "Ruby");

console.log(courses2);

for (var index in courses2) {
  console.log(courses2[index]);
}

// Khi tạo mảng với new Array() và truyền vào 2 tham số thì nó sẽ tạo ra 1 mảng có 2 phần tử là 10 và 12
var courses3 = new Array(10, 12);
console.log(courses3);

for (var index in courses3) {
  console.log(courses3[index]);
}
