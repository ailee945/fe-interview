var arr = [
  1,
  1,
  "true",
  "true",
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  "NaN",
  0,
  0,
  "a",
  "a",
  {},
  {},
];

// 数组去重
// set
console.log([...new Set(arr)]);
console.log(Array.from(new Set(arr)));

// 遍历创建新数组
const newArr1 = [];
arr.forEach((element) => {
  // 无法判断NaN
  newArr1.indexOf(element) === -1 && newArr1.push(element) // 不能处理NaN
  
  // 可以判断NaN
  // !newArr1.includes(element) && newArr1.push(element);
});
console.log(newArr1);
// 利用对象的属性名不能重复的特点
// 对象的属性名之能事字符串或者可以转换成字符串，或者symbol

// 利用map
function removeDuplicate(arr) {
  const newArr = [];
  const map = new Map();
  arr.forEach((item) => {
    if (!map.has(item)) {
      newArr.push(item);
      map.set(item, true);
    }
  });
  return newArr;
}
const result = removeDuplicate(arr);
console.log(result);

// 利用reduce+includes
console.log(
  arr.reduce(
    (previousValue, currentValue) =>
      previousValue.includes(currentValue)
        ? previousValue
        : [...previousValue, currentValue],
    []
  )
);

//[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}, {}]
