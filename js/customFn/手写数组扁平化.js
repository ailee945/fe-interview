// 1. reduce + 递归
// function flat(arr) {
//   if (!Array.isArray(arr)) return arr;
//   const newArr = arr.reduce(
//     (prev, cur) => prev.concat(Array.isArray(cur) ? flat(cur) : cur),
//     []
//   );
//   return newArr;
// }

// 2. 普通的递归
// function flat(arr) {
//   let newArr = [];
//   arr.forEach((e) => {
//     if (Array.isArray(e)) {
//       newArr = newArr.concat(flat(e));
//     } else {
//       newArr.push(e);
//     }
//   });
//   return newArr;
// }

// 3. 展开运算符
// function flat(arr) {
//   while (arr.some((item) => Array.isArray(item))) {
//     arr = [].concat(...arr);
//   }
//   return arr;
// }

// 4. split
// function flat(arr) {
//   return arr.toString().split(",");
// } // 输出的元素都是字符串类型

// 5. ES6 flat方法
// const arr = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
// console.log(arr.flat(Infinity));
// console.log(arr);

// 6. JSON.stringify()方法
function flat(arr) {
  let str = JSON.stringify(arr);
  str = str.replace(/(\[|\])/g, "");
  str = "[" + str + "]";
  return JSON.parse(str);
}

// 功能测试
const arr = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
console.log(flat(arr));
