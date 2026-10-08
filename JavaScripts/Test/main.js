//  Gọi 2 lần functionmtfunction để log ra value123 và valuehehehe

// function myFunction(callback) {
//   if (typeof callback === "function") {
//     callback();
//   } else console.log("Toi La Bear");

//   // console.log(typeof callback);
// }

// function createCallback(value) {
//   // return function () {
//   console.log("Value: ", value); //
//   // };
// }

// createCallback();

// function func1() {
//   createCallback("123");
// }

// function func2() {
//   createCallback("hehehe");
// }

// myFunction(func1);
// myFunction(func2);

// myFunction(function () {
//   createCallback("123");
// });
// myFunction(function () {
//   createCallback("hehehe");
// });

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

// const sports = [
//   {
//     name: "Bóng đá",
//     like: 100,
//   },
//   {
//     name: "Bóng rổ",
//     like: 200,
//   },
//   {
//     name: "Bóng chuyền",
//     like: 300,
//   },
// ];

// tìm ra các sport có like > 100
//tạo hàm có tham số là 1 function, function sẽ trả về các môn thể thao có điểm số lớn hơn 100
// function getMostFavoriteSport(sports) {
//   return sports.filter(function (sport) {
//     return sport.like > 100;
//   });
// }

// const filteredSports = filter(sports, (sport) => sport.like > 100);
// console.log(filteredSports);

// Tại sea game 31 VN dành 23 huy chương vàng
//  tạo hàm getTotalGold có tham số là 1 array
// Tính tổng số huy chương vàng mà VN đạt được
// const seaGame31 = [
//   {
//     name: "Bóng đá",
//     gold: 10,
//   },
//   {
//     name: "Bóng rổ",
//     gold: 5,
//   },
//   {
//     name: "Bóng chuyền",
//     gold: 8,
//   },
// ];

// function getTotalGold(seaGame) {
//   return seaGame.reduce(function (total, item) {
//     return total + item.gold;
//   }, 0);
// }

// console.log(getTotalGold(seaGame31));

// Cho trước danh sách một số bộ phim, hãy viết hàm calculateRating để tính điểm trung bình IMDB của những bộ phim mà Christopher Nolan làm đạo diễn.

// Gợi ý
// Dùng phương thức filter để lấy ra những bộ phim do Christopher Nolan làm đạo diễn
// Dùng phương thức reduce để tính tổng điểm IMDB
// Tính điểm IMDB trung bình
// var watchList = [
//   {
//     Title: "Inception",
//     Year: "2010",
//     Rated: "PG-13",
//     Released: "16 Jul 2010",
//     Runtime: "148 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer: "Christopher Nolan",
//     Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//     Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     Language: "English, Japanese, French",
//     Country: "USA, UK",
//     imdbRating: "8.8",
//     imdbVotes: "1,446,708",
//     imdbID: "tt1375666",
//     Type: "movie",
//   },
//   {
//     Title: "Interstellar",
//     Year: "2014",
//     Rated: "PG-13",
//     Released: "07 Nov 2014",
//     Runtime: "169 min",
//     Genre: "Adventure, Drama, Sci-Fi",
//     Director: "Christopher Nolan",
//     Writer: "Jonathan Nolan, Christopher Nolan",
//     Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     Language: "English",
//     Country: "USA, UK",
//     imdbRating: "8.6",
//     imdbVotes: "910,366",
//     imdbID: "tt0816692",
//     Type: "movie",
//   },
//   {
//     Title: "The Dark Knight",
//     Year: "2008",
//     Rated: "PG-13",
//     Released: "18 Jul 2008",
//     Runtime: "152 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer:
//       "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     Language: "English, Mandarin",
//     Country: "USA, UK",
//     imdbRating: "9.0",
//     imdbVotes: "1,652,832",
//     imdbID: "tt0468569",
//     Type: "movie",
//   },
//   {
//     Title: "Batman Begins",
//     Year: "2005",
//     Rated: "PG-13",
//     Released: "15 Jun 2005",
//     Runtime: "140 min",
//     Genre: "Action, Adventure",
//     Director: "Christopher Nolan",
//     Writer:
//       "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     Language: "English, Urdu, Mandarin",
//     Country: "USA, UK",
//     imdbRating: "8.3",
//     imdbVotes: "972,584",
//     imdbID: "tt0372784",
//     Type: "movie",
//   },
//   {
//     Title: "Avatar",
//     Year: "2009",
//     Rated: "PG-13",
//     Released: "18 Dec 2009",
//     Runtime: "162 min",
//     Genre: "Action, Adventure, Fantasy",
//     Director: "James Cameron",
//     Writer: "James Cameron",
//     Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     Language: "English, Spanish",
//     Country: "USA, UK",
//     imdbRating: "7.9",
//     imdbVotes: "876,575",
//     imdbID: "tt0499549",
//     Type: "movie",
//   },
// ];
// function calculateRating(watchList) {
//   return (
//     watchList
//       .filter(function (movie) {
//         return movie.Director === "Christopher Nolan";
//       })
//       .reduce(function (total, movie) {
//         return total + parseFloat(movie.imdbRating);
//       }, 0) /
//     watchList.filter(function (movie) {
//       return movie.Director === "Christopher Nolan";
//     }).length
//   );
// }

// Expected results
// console.log(calculateRating(watchList)); // Output: 8.675

// Array.prototype.reduce2 = function (callback, result) {
//   for (let i = 0; i < this.length; i++) {
//     result = callback(result, this[i], i, this);
//   }
//   return result;
// };

// const number = [1, 2, 3, 4, 5];

// const result = number.reduce2((total, number) => {
//   return total + number;
// }, 10);

// console.log(result);

// Tạo hàm arrToObj
// Hàm arrToObj hoạt động đúng như kỳ vọng

// function arrToObj(arr) {
//   return arr.reduce((obj, [key, value]) => {
//     obj[key] = value;
//     return obj;
//   }, {});
// }

// // Expected results:
// var arr = [
//   ["name", "Sơn Đặng"],
//   ["age", 18],
// ];
// console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }

var cars = ["Rolls-Royce", "Mercedes", "Lexus", "BMW", "Audi"];

function checkCar(cars) {
  return cars.includes("Mercedes", 2);
}

console.log(checkCar(cars)); // Output: ?
