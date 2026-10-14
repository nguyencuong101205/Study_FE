// Fetch()
//  Fetch API là một API hiện đại để thực hiện các yêu cầu HTTP trong JavaScript.
//  Nó cung cấp một cách dễ dàng và linh hoạt để lấy dữ liệu từ máy chủ và xử lý các phản hồi. Fetch API sử dụng Promise, giúp viết code bất đồng bộ dễ đọc, dễ hiểu hơn.
// Cú pháp cơ bản của Fetch API:
//  fetch(url, options)
//    url: là địa chỉ của tài nguyên mà bạn muốn lấy dữ liệu từ đó.
//    options: là một đối tượng tùy chọn để cấu hình yêu cầu HTTP, bao gồm phương thức (method), tiêu đề (headers), thân yêu cầu (body), v.v.
// fetch thay thế cho XMLHttpRequest, giúp viết code bất đồng bộ dễ đọc, dễ hiểu hơn. Fetch API hỗ trợ các phương thức HTTP như GET, POST, PUT, DELETE, v.v. Fetch API trả về một Promise, giúp xử lý các phản hồi dễ dàng hơn. Fetch API có thể được sử dụng trong cả trình duyệt và Node.js (với các thư viện bổ sung). Fetch API hỗ trợ các tính năng như CORS (Cross-Origin Resource Sharing), JSON parsing, và streaming responses. Fetch API là một phần quan trọng của JavaScript hiện đại và được sử dụng rộng rãi trong phát triển web.

// 1. Font-end: Fetch API được sử dụng rộng rãi trong phát triển web front-end
// để lấy dữ liệu từ máy chủ và hiển thị nó trên giao diện người dùng.
// Nó giúp tạo ra các ứng dụng web động và tương tác hơn.

// 2. Back-end: Fetch API cũng có thể được sử dụng trong phát triển web back-end
// để thực hiện các yêu cầu HTTP đến các dịch vụ khác hoặc API bên ngoài.
// Nó giúp xây dựng các ứng dụng web phức tạp và tích hợp với các dịch vụ khác nhau.

// API(URL) -> Application Programming Interface

// Cổng giao tiếp giữa các PM

// Backend -> API -> Fetch -> JSON/XML

// JSON.parse() -> JavaScript types
// Render -> HTML

// var postApi = "https://jsonplaceholder.typicode.com/posts";

// fetch(postApi)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (post) {
//     var htmls = post.map(function (post) {
//       return `<li>
//         <h2>${post.title}</h2>
//         <p>${post.body}</p>
//       </li>`;
//     });
//     document.getElementById("postList").innerHTML = htmls.join("");
//   });
//   .catch(function (error) {
//     console.log("Lỗi xảy ra:", error);
//   });
//   .finally(function () {
//     console.log("Kết thúc quá trình fetch");
//   });

// JSON server: API server

var countryApi = "http://localhost:5000/posts";

fetch(countryApi)
  .then(function (response) {
    return response.json();
  })
  .then(function (posts) {
    console.log(posts);
    // var htmls = posts.map(function (post) {
    //   return `<li>
    //     <h2>${post.title}</h2>
    //     <p>${post.views}</p>
    //   </li>`;
    // });
    // document.getElementById("postList").innerHTML = htmls.join("");
  });
