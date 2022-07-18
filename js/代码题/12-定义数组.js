// 1. Array.of()
console.log(Array.of(1, 2, 3)); //[1,2,3]
console.log(Array.of(1, 2)); // [1,2]
console.log(Array.of(1.0)); // [1]

// 2. 声明数组的几种方法
console.log(new Array(8.0).fill(8)); // [8,8,8,8,8,8,8,8]
console.log(Array.of(8.0)); // [8]

// 3. Array.from(arrayLike[, callback, thisArgs])
const obj1 = { 0: 1, 1: 2, length: 2 };
const set = new Set();
set.add(1);
set.add(2);
console.log(
  Array.from(obj1, (x) => {
    return x ** 2;
  })
); // [1,4]
console.log(Array.from(set)); // [1,2]
