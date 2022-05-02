const info = {
  name: "lee",
  height: 1.9,
  age: 25,
  2: 2,
  0: 0,
  [Symbol()]:666

};

// 遍历属性
// 1
console.log(Object.keys(info)); 

// 2
for (const key in info) {
  console.log(key);
}

// 3
console.log(Object.getOwnPropertyNames(info));

// 4
console.log(Reflect.ownKeys(info)); 

// 需要注意的事情
// 首先遍历所有数值键，按照数值升序排列。
// 其次遍历所有字符串键，按照加入时间升序排列。
// 最后遍历所有 Symbol 键(Reflect.ownKeys())，按照加入时间升序排列。