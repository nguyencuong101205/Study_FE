//forEach

Array.prototype.forEach2 = function (callback) {
  for (var index in this) {
    // console.log(index, );
    if (this.hasOwnProperty(index)) {
      callback(this[index], index, this);
    }
    // callback(this[index], index, this);
  }
};

var courses = ["JavaScript", "PHP", "Ruby"];

courses.forEach(function (course, index, array) {
  console.log(index, course, array);
});
// courses.length = 1000;

// console.log(courses);

//

Array.prototype.myFilter = function (cb) {
  var output = [];
  for (var i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      output.push(this[i]);
    }
  }
  return output;
};

// some

Array.prototype.some2 = function (callback) {
  var output = false;
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      if (callback(this[index], index, this)) {
        output = true;
        break;
      }
    }
  }
  return output;
};

var courses = [
  {
    name: "JavaScript",
    coin: 6800,
    isFinish: true,
  },
  {
    name: "PHP",
    coin: 7800,
    isFinish: false,
  },
  {
    name: "Ruby",
    coin: 8800,
    isFinish: true,
  },
];

var result = courses.some(function (course, index, array) {
  return course.isFinish;
});

console.log(result);

var result2 = courses.some2(function (course, index, array) {
  return course.isFinish;
});

console.log(result2);

// every

Array.prototype.every2 = function (callback) {
  var output = true;
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = callback(this[index], index, this);
      if (!result) {
        output = false;
        break;
      }
    }
  }
  return output;
};

var result3 = courses.every2(function (course, index, array) {
  return course.isFinish;
});

console.log(result3);
