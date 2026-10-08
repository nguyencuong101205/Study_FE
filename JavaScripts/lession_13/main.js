/*
        Vòng lặp - Loop
        1. for - Lặp với điều kiện đúng
        2. for/in - Lặp qua key của đối tượng
        3. for/of - Lặp qua value của đối tượng
        4. while - Lặp khi điều kiện đúng
        5. do/while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
        6. break - Dừng vòng lặp
        7. continue - Bỏ qua 1 lần lặp
*/

// for (var i = 1; i <= 1000; i++) {
//   console.log(i);
// }

// var myArray = ["Javascript", "PHP", "Ruby"];

// for (var i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

// var myInfo = {
//   name: "Bear",
//   age: 18,
//   address: "Ha Noi",
// };

// for (var key in myInfo) {
//   console.log(key, myInfo[key]);
// }

// For of
var languages = ["Javascript", "PHP", "Ruby"];

for (var value of languages) {
  console.log(value);
}

// Lấy giá trị của obj
var myInfo = {
  name: "Bear",
  age: 18,
  address: "Ha Noi",
};

for (var value of Object.keys(myInfo)) {
  console.log(myInfo[value]);
  // console.log(value(myInfo)); // ["name", "age", "address"]
}

// while loop
var i = 0;
while (i < 100) {
  i++;
  console.log(i);
}

var myArray = ["Javascript", "PHP", "Ruby"];
var i = 0;
while (i < myArray.length) {
  console.log(myArray[i]);
  i++;
}
