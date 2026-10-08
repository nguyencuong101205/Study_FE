//  Gọi 2 lần functionmtfunction để log ra value123 và valuehehehe

function myFunction(callback) {
  if (typeof callback === "function") {
    callback();
  } else console.log("Toi La Bear");

  // console.log(typeof callback);
}

function createCallback(value) {
  // return function () {
  console.log("Value: ", value); //
  // };
}

// createCallback();

// function func1() {
//   createCallback("123");
// }

// function func2() {
//   createCallback("hehehe");
// }

// myFunction(func1);
// myFunction(func2);

myFunction(function () {
  createCallback("123");
});
myFunction(function () {
  createCallback("hehehe");
});

// var dataList = ["123", "hehehe"];

// for (var i = 0; i < dataList.length; i++) {
//   myFunction(createCallback(dataList[i]));
// }

// function myFunction(callback) {
//   if (typeof callback === "function") {
//     callback();
//   }
//   console.log("Toi La Bear");
// }

// function myCallback(pram) {
//   console.log("Value: ", pram);
// }

// // Bọc vào arrow function:
// myFunction(() => myCallback("123"));
// myFunction(() => myCallback("hehehe"));

// var callback = function () {
//   console.log("Value: ", "123");
//   console.log("Value: ", "hehehe");
// };
// function myFunction(callback) {
//   if (typeof callback === "function") {
//     callback();
//   }
//   console.log("Toi La Bear");
// }

// function createCallback(value) {
//   return function () {
//     console.log("Value: ", value);
//   };
// }

// myFunction(callback);
