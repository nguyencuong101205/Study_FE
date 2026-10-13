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
// async: bất đồng bộ

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

