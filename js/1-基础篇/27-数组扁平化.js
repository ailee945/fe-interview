function flatArray(arr) {
  if (!Array.isArray(arr)) return arr;
  return arr.reduce(
    (previousValue, currentValue) =>
      // 当箭头函数只有一个参数时，可以省略参数的圆括号
      previousValue.concat(
        Array.isArray(currentValue) ? flatArray(currentValue) : currentValue
      ),
    []
  );
}

// 功能测试
const arr = [1, 2, 4, 5, [3, 4, 5, 6, [345, 6]]];
console.log(flatArray(arr));

// console.log(
//   [15, 16, 17, 18, 19].reduce(
//     (previousValue, currentValue) =>
//       previousValue + currentValue,
//     10
//   )
// );
