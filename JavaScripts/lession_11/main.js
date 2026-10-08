// Date

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();

console.log(typeof date);
console.log(day);
console.log(`${day}/${month}/${year}`);

// Tạo hàm getNextYear khi in ra thì số năm cộng thêm 1
// Cách 1:
function getNextYear() {
  var date = new Date();
  var year = date.getFullYear() + 1;
  return year;
}
// Cách 2:
console.log(getNextYear);

function getNextYear() {
  return new Date().getFullYear() + 1;
}
