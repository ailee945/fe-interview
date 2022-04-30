const arr = [1, 2, 3, 4, 5];

// 判断数组的方法

// isArray
console.log(Array.isArray(arr));

// instanceOf()
console.log(arr instanceof Array);
console.log(arr instanceof Object); // true

// constructor
console.log(arr.constructor === Array); // true
console.log(arr.constructor === Object); // false

// 变量提升
// console.log(username);
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

  add2: (v) => {
    console.log(this); // undefined
    v + this.base;
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

// forin
const obj = { 1: 111, 2: 222 };
for (const key in obj) {
  console.log(key);
}
for (const key in arr) {
  console.log(key);
}

// forof
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
  return Math.random() - 0.5;
});
console.log(arr);
