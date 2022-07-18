const obj = {
  0: 1,
  1: 2,
  length: 2,
};

// 1. 判断数据类型
const type = Object.prototype.toString.call(obj);
console.log(type);

// 2. 类数组借用方法
Array.prototype.push.call(obj, 3, 4, 5);
console.log(obj); // { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, length: 5 }

// 3. 判断数组最大值和最小值
const arr = [1, 2, 3, 4, 5, 67];
console.log(Math.max(...arr));
console.log(Math.max.apply(Math, arr));
