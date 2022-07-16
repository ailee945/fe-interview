const arr = [1, 2, 3, 4, 5];

// 判断数组的方法

// isArray
console.log(Array.isArray(arr));

// instanceOf()
console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true

// constructor
console.log(arr.constructor === Array); // true
console.log(arr.constructor === Object); // false

console.log(Object.prototype.toString.call(arr) === "[object Array]"); // true

// 变量提升 暂时性死区
// console.log(username); // Cannot access 'username' before initialization
// let username = 'jang'

console.log(pwd); // undefined
var pwd = "123";

// 箭头函数this指向
var adder = {
  base: 1,

  add: function (a) {
    var f = (v) => v + this.base;
    return f(a);
  },
  add2: (a) => {
    // console.log("===", this);
    var f = (v) => {
      console.log("---", this);
      return v + this.base;
    };
    return f(a);
  },

  addThruCall: function (a) {
    var f = (v) => v + this.base;
    var b = {
      base: 2,
    };

    return f.call(b, a);
  },
};

console.log(adder.add(1)); // 2
console.log(adder.addThruCall(1)); // 2
console.log(adder.add2(1)); // NaN (1+undefined)

// 数组和对象的遍历

// for...in...
const obj = { 1: 111, 2: 222 };
for (const key in obj) {
  console.log(key);
}

// for...of...
for (const value of arr) {
  console.log(value);
}
// for (const iterator of obj) {
//   console.log(iterator); // obj is not iterable
// }

// forEach
arr.forEach((n) => console.log(n));

// 暂存死区

// 如何快速的让一个数组乱序
arr.sort(function () {
  // return Math.random() - 0.5;
  return -1 // [5, 4, 3, 2, 1]
});
console.log(arr);
