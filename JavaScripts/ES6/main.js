// Arrow function

// const multiply = (x, y) => x * y;

// console.log(multiply(2, 3));

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
// };

// let { firstName, age } = person;

// console.log(firstName);
// console.log(age);

// Classes

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.getName = function () {
//     return this.name;
//   };
// }

// class Course {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
//   getName() {
//     return this.name;
//   }
//   getPrice() {
//     return this.price;
//   }
//   run() {
//     console.log("Course is running");
//   }
// }

// const jsCourse = new Course("JavaScript", 1000);
// const phpCourse = new Course("PHP", 2000);

// console.log(jsCourse);
// console.log(phpCourse);

// jsCourse.run();
// phpCourse.run();

// Default parameters values

// function logger(log, isAlert) {
//   if (isAlert === undefined) {
//     isAlert = false;
//   }
//   if (isAlert) {
//     console.log(`[ALERT] ${log}`);
//   } else {
//     console.log(log);
//   }
// }

// logger();
// logger("Custom log");
// logger("Custom log", true);

// Enhanced object literals

// 1. Địng nghĩa key:  value cho obj
// 2. Định nghĩa method cho obj
// 3. Định nghĩa key cho obj dưới dạng biến

// var name = "JavaScript";
// var price = 1000;

// var course = {
//   name: name,
//   price: price,
//   getName: function () {
//     return this.name;
//   },
//   getPrice: function () {
//     return this.price;
//   },
// };

// console.log(course);
// console.log(course.getName());
// console.log(course.getPrice());

// var fieldName = "name";
// var fieldPrice = "price";

// const course2 = {
//   [fieldName]: "JavaScript",
//   [fieldPrice]: 1000,
// };

// console.log(course2);

// const { name, price } = course2;
// console.log(name);
// console.log(price);

// Destructuring

var array = ["JavaScript", "PHP", "Ruby"];

// var a = array[0];
// var b = array[1];
// var c = array[2];

// var [a, b, c] = array;

// console.log(a, b, c);

// Rest parameters

var array = ["JavaScript", "PHP", "Ruby"];

var [a, ...rest] = array;

console.log(a, rest);

var course = {
  name: "JavaScript",
  price: 1000,
};

var { name, ...rest } = course;

console.log(name, rest);

function logger(...params) {
  console.log(params);
}
console.log(logger(1, 2, 3, 4, 5));
