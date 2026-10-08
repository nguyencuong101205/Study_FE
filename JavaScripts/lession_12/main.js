var date = 10;
switch (date) {
  case 1:
    console.log("Hôm nay là thứ 2");
    break;
  case 2:
    console.log("Hôm nay là thứ 3");
    break;
  case 3:
    console.log("Hôm nay là thứ 4");
    break;
  case 4:
    console.log("Hôm nay là thứ 5");
    break;
  default:
    console.log("Hôm nay là thứ 6");
    break;
}

// Toán tử  3 ngôi - Ternary Operator

if (coure.coin > 0) {
  console.log(`${coure.coin} Coins`);
} else {
  console.log("Bạn đã hết tiền để mua khóa học này");
}
//  vế thứ nhất là điều kiện nếu nó lớn hơn 0 thì sẽ trả về vế thứ 2 còn nếu không thì sẽ trả về vế thứ 3
var result =
  course.coin > 0
    ? `${course.coin} Coins`
    : "Bạn đã hết tiền để mua khóa học này";
