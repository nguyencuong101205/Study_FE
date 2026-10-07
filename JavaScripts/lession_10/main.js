// Callback function

// là hàm được truyền qua đối số của một hàm khác và được gọi lại (gọi lại) trong hàm ngoài để thực hiện một tác vụ nào đó.
// 1 Là hàm
// 2 Truyền qua đối số
// 3 được gọi lại

// function myFunction(param) {
//   if (typeof param === "function") {
//     param(); // gọi lại hàm callback
//   }
//   console.log("Toi La Bear");
// }

// myFunction("Hello, World!");

// function myCallback(callback) {
//   console.log("Value", callback);
// }

// myFunction(myCallback); // truyền myCallback vào myFunction như một đối số

// Array.prototype.map2 = function (callback) {
//   var output = [];
//   var arrayLength = this.length;

//   for (var i = 0; i < arrayLength; i++) {
//     if (i in this) {
//       output.push(callback(this[i], i, this));
//     }
//   }

//   return output;
// };

// console.log(
//   [1, 2, 3, 4, 5].map2(function (number) {
//     return number * 2;
//   }),
// );

Array.prototype.foeEach2 = function (callback) {
  var output = [];
  var arrayLength = this.length;

  for (var i = 0; i < this.length; i++) {
    if (i in this) {
      output.push(callback(this[i], i, this));
    }
  }
  return output;
};

console.log(
  [1, 2, 3, 4, 5].foeEach2(function (number) {
    return number * 2;
  }),
);

// var courses = ["JavaScript", "PHP", "Ruby"];

// courses.map(function (course, index) {
//   console.log(index, course);
//   return course;
// });
