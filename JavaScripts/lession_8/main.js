// var myArray = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// for (var i = 0; i < myArray.length; i++) {
//   for (var j = 0; j < myArray[i].length; j++) {
//     console.log(myArray[i][j]);
//   }
// }

// for (var i = 100; i >= 0; i--) {
//   console.log(i);
// }

// for (i = 0; i <= 100; i += 5) {
//   console.log(i);
// }

// for (var i = 100; i >= 0; i -= 5) {
//   console.log(i);
// }

/* Array methots
    forEach()
    every() kiểm tra tất cả phần tử trong mảng có thỏa mãn điều kiện hay không
    some() kiểm tra ít nhất 1 phần tử trong mảng có thỏa mãn điều kiện hay không
    find() tìm kiếm phần tử trong mảng thỏa mãn điều kiện // không tìm thấy sẽ trả về undefined
    filter() lọc ra các phần tử thỏa mãn điều kiện
    map() tạp ra  1 mảng mới từ mảng cũ
    reduce() nhận 1 giá trị duy nhất từ mảng cũ
*/

var courses = [
  {
    id: 1,
    name: "JavaScript",
    coin: 250,
  },
  {
    id: 2,
    name: "HTML, CSS",
    coin: 0,
  },
  {
    id: 3,
    name: "Ruby",
    coin: 50,
  },
  {
    id: 4,
    name: "PHP",
    coin: 400,
  },
  {
    id: 5,
    name: "ReactJS",
    coin: 500,
  },
];

//  callback
// courses.forEach(function (course) {
//   console.log(course);
// });

// console.log(
//   courses.every(function (course) {
//     return course.coin > 0;
//   }),
// );

// dễ hiểu
// ngắn gọn
// Hiệu năng

// var newCourses = courses.map(function (course, index, originArray) {
//   return {
//     id: course.id,
//     // name: course.name,
//     name: `Khóa học: ${course.name}`,
//     coin: course.coin,
//     coinText: `Giá: ${course.coin}`,
//     index: index,
//     originArray: originArray,
//   };
// });
// console.log(newCourses);

// var totalCoin = 0;

// for (var course of courses) {
//   totalCoin += course.coin;
// }
// console.log(totalCoin);

// var i = 0;

// var totalCoin2 = courses.reduce(coinHandler, 0);

// function coinHandler(accumulator, currentValue, currentIndex, originArray) {
//   i++;
//   var total = accumulator + currentValue.coin;
//   console.log(i, total, currentValue.coin);
//   console.log(currentValue);
//   return total;
// }

var totalCoin3 = courses.reduce(function (total, course) {
  return total + course.coin;
}, 0);
//  initial value = 0 giá trị không bắt buộc phải có, nếu không có thì giá trị đầu tiên sẽ là phần tử đầu tiên của mảng

console.log(totalCoin3);

var number = [100, 200, 300, 400, 500];

var totalCoin4 = number.reduce(function (total, num) {
  return total + num;
}, 0);

console.log(totalCoin4);

//  Flat - làm phẳng mảng depthArray Mảng sâu
var depthArray = [1, 2, [3, 4], 5, [6, 7, 8]];

var flatArray = depthArray.reduce(function (flatOutput, depthItem) {
  return flatOutput.concat(depthItem);
}, []);

console.log(flatArray);

// Lấy ra các khóa học đưa vào 1 mảng mới
var topics = [
  {
    topic: "Front-end",
    courses: [
      {
        id: 1,
        title: "HTML, CSS",
      },
      {
        id: 2,
        title: "JavaScript",
      },
    ],
  },
  {
    topic: "Back-end",
    courses: [
      {
        id: 1,
        title: "PHP",
      },
      {
        id: 2,
        title: "NodeJS",
      },
    ],
  },
];

var newCourses = topics.reduce(function (accumulator, topic) {
  return accumulator.concat(topic.courses);
}, []);

console.log(newCourses);
