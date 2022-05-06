// Array.of()
console.log(Array.of(1, 2, 3));
console.log(Array.of(1, 2));
console.log(Array.of(1.0));

console.log(new Array(8.0).fill(8));
console.log(Array.of(8.0));

// Array.from(arrayLike[, callback, thisArgs])
const obj1 = { 0: 1, 1: 2, length: 2 };
const set = new Set();
set.add(1);
set.add(2);
console.log(
  Array.from(obj1, (x) => {
    return x ** 2;
  })
);
console.log(Array.from(set));

// Array.isArray()

// 改变自身值的方法：pop、push、reverse、shift、sort、splice、unshift，以及两个 ES6 新增的方法 copyWithin 和 fill
const arr1 = [9, 8, 7, 6, 5];
arr1.copyWithin(1, 2, 5);
console.log(arr1);

const arr2 = [4, 3, 2, 1, 0];
arr2.fill(0);
console.log(arr2);

// 不改变自身值的方法：concat、join、slice、toString、toLocaleString、indexOf、lastIndexOf，以及 ES7 新增的方法 includes

console.log(arr1.toString());
console.log(arr1.toLocaleString());

// forEach、every、some、filter、map、reduce、reduceRight，以及 ES6 新增的方法 entries、find、findIndex、keys、values
// some() 方法测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个Boolean类型的值。
console.log(arr1);
console.log(
  arr1.some((n) => {
    return n >= 8;
  })
);

/**
 * 1. 类数组对象有哪些
 * NodeList
 * HTMLCollections
 * arguments
 * 字符串
 *
 * 2. 类数组对象的应用场景
 * 遍历参数
 * 定义链接字符串函数
 * 传递参数
 */
function foo() {
  bar.apply(this, arguments);
}
function bar(a, b, c) {
  console.log(a, b, c);
}
foo(1, 2, 3); //1 2 3
