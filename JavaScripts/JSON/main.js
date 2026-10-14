// JSON
// JavaScript Object Notation
// Kí hiệu đối tượng JavaScript
// Định dạng dữ liệu (chuỗi)
// JSON: Number, String, Boolean, Null, Array, Object

// Mã hóa (Encode) - Chuyển đổi dữ liệu sang định dạng JSON
// JSON.stringify() - Mã hóa(From Javascript type -> JSON type)

// Giải mã (Decode) - Chuyển đổi dữ liệu từ định dạng JSON sang kiểu dữ liệu JavaScript
// JSON.parse() - Giải mã(From JSON type -> Javascript type)

var json = "1";
var json1 = '"Bear"';
var json2 = "true";
var json3 = "null";
var json4 = '["Hello Bear", "Hello, JavaScript"]';
var json5 = '{"name": "Bear", "age": 18}';

var a = "1";
console.log(JSON.parse(json));

console.log(JSON.stringify({ name: "Bear", age: 18 }));

// Promise
// Promise là một đối tượng đại diện cho một giá trị có thể có trong tương lai.
// Promise có 3 trạng thái: Pending, Fulfilled, Rejected
// sysnc: đồng bộ
// khi thực thi một đoạn code, các dòng code sẽ được thực hiện theo thứ tự từ trên xuống dưới,
// từng dòng một.
// async: bất đồng bộ
// khi thực thi một đoạn code, các dòng code sẽ không được thực hiện theo thứ tự từ trên xuống dưới,
// mà sẽ được thực hiện theo thứ tự mà chúng được gọi, và có thể sẽ được thực hiện song song với nhau.

// ==========================================
// NỖI ĐAU (PAIN) - CALLBACK HELL & PYRAMID OF DOOM
// ==========================================
// Callback Hell xảy ra khi các tác vụ bất đồng bộ phụ thuộc lẫn nhau
// (việc sau cần chờ việc trước xong mới chạy được), dẫn đến các hàm callback lồng vào nhau.

// --- VÍ DỤ 1: In ra lần lượt 1, 2, 3, 4 sau mỗi 1 giây (Kinh điển với setTimeout) ---
setTimeout(function () {
  console.log("Ví dụ 1 - Bước 1 (sau 1s)");
  setTimeout(function () {
    console.log("Ví dụ 1 - Bước 2 (sau 2s)");
    setTimeout(function () {
      console.log("Ví dụ 1 - Bước 3 (sau 3s)");
      setTimeout(function () {
        console.log("Ví dụ 1 - Bước 4 (sau 4s)");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

// --- VÍ DỤ 2: Công việc sau phụ thuộc vào kết quả trả về của công việc trước ---
function thucHienCongViec(value, callback) {
  setTimeout(function () {
    callback(value);
  }, 500);
}

thucHienCongViec(1, function (value1) {
  var result1 = value1 + 1; // 2
  thucHienCongViec(result1, function (value2) {
    var result2 = value2 + 1; // 3
    thucHienCongViec(result2, function (value3) {
      var result3 = value3 + 1; // 4
      console.log("Ví dụ 2 - Kết quả cuối cùng:", result3);
    });
  });
});

// --- VÍ DỤ 3: Thực tế - Lấy thông tin User -> Lấy bài viết (Post) -> Lấy bình luận (Comment) ---
function getUser(userId, callback) {
  setTimeout(function () {
    console.log("1. Đã lấy được User");
    callback({ id: userId, name: "Bear" });
  }, 500);
}

function getPosts(userId, callback) {
  setTimeout(function () {
    console.log("2. Đã lấy được danh sách bài viết của User ID:", userId);
    callback([
      { postId: 101, title: "Học JSON" },
      { postId: 102, title: "Học Promise" },
    ]);
  }, 500);
}

function getComments(postId, callback) {
  setTimeout(function () {
    console.log("3. Đã lấy được bình luận của bài viết ID:", postId);
    callback(["Bài viết hay quá!", "Cảm ơn tác giả"]);
  }, 500);
}

// Gọi lồng nhau (Callback Hell)
getUser(1, function (user) {
  getPosts(user.id, function (posts) {
    getComments(posts[0].postId, function (comments) {
      console.log("Ví dụ 3 - Bình luận thu được:", comments);
    });
  });
});

// Async
//  setTimeout, setInterval, fetch, XMLHttpRequest, Promise, async/await, file reading
// request animation frame, geolocation, web workers, indexedDB, service workers, streams, WebSockets

// promise(pain) -> async/await (solution)
// Callback Hell -> Promise -> Async/Await
// Pyramid of Doom -> Promise -> Async/Await

// setTimeout(function () {
//   console.log("Bắt đầu...");
//   setTimeout(function () {
//     console.log("Đang xử lý...");
//     setTimeout(function () {
//       console.log("Kết thúc!");
//       setTimeout(function () {
//         console.log("Bắt đầu lại...");
//         setTimeout(function () {
//           console.log("Đang xử lý lại...");
//           setTimeout(function () {
//             console.log("Kết thúc lại!");
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// promise(concept) -> async/await (solution)
// Lý thuyết, cách hoạt động, cách sử dụng, ví dụ về Promise trong JavaScript
// Promise là một đối tượng đại diện cho một giá trị có thể có trong tương lai.
// Promise có 3 trạng thái: Pending, Fulfilled, Rejected
// resolve: khi Promise được thực hiện thành công
// reject: khi Promise được thực hiện thất bại
// then: khi Promise được thực hiện thành công, sẽ gọi hàm then
// catch: khi Promise được thực hiện thất bại, sẽ gọi hàm catch
// finally: khi Promise được thực hiện xong, sẽ gọi hàm finally

// Ví dụ về Promise
// 1. new Promise
// 2. executor function

var promise = new Promise(
  // Executor- Hàm thực thi ngay lập tức khi Promise được tạo ra
  function (resolve, reject) {
    // logic
    // Thành công: resolve()
    // Thất bại: reject()

    // Fake call API
    // resolve(123);
    reject("Lỗi xảy ra");
  },
);

promise
  .then(function () {
    console.log(1);
  })
  .then(function () {
    console.log(2);
  })
  .then(function () {
    console.log(3);
  })
  .catch(function () {
    console.log("Thất bại");
  })
  .finally(function () {
    console.log("Done!");
  });

// Chain
promise
  .then(function () {
    console.log("Thành công");
  })
  .catch(function () {
    console.log("Thất bại:");
  })
  .finally(function () {
    console.log("Kết thúc");
  });

// Promise sinh ra cho việc xử lý bất đồng bộ, giúp tránh Callback Hell và Pyramid of Doom.
// Promise giúp viết code bất đồng bộ dễ đọc, dễ hiểu hơn, dễ bảo trì hơn.
// Async/Await là cú pháp được xây dựng trên Promise, giúp viết code bất đồng bộ dễ đọc, dễ hiểu hơn.
// Promise khi resolve trả về then
// Promise khi reject trả về catch
// Promise khi finally luôn được gọi, bất kể resolve hay reject

// khi trong then có setTimeout hoặc một hàm nào đó trả về 1 new Promise thì sẽ trả về 1 Promise mới các then ở sau sẽ phải chờ
// và Promise mới này sẽ được resolve hoặc reject dựa trên kết quả của Promise trong then.
// khi 1 chuỗi then đang chạy có reject() thì các then ở sau sẽ không được thực hiện và sẽ nhảy sang catch() hoặc finally() nếu có
// Promise methods: resove, reject, all, race, allSettled, any
