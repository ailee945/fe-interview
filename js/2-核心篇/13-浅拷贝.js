const obj1 = { a: 1, b: 2, c: { c1: 4 } };
const arr = [1, 2, 3, [4, 5]];
// Object.assign()
// 它不会拷贝对象的继承属性；
// 它不会拷贝对象的不可枚举的属性；
// 可以拷贝 Symbol 类型的属性。
const newObj = Object.assign({}, obj1);
console.log(newObj);
obj1.c.c1 = 41;
console.log(newObj);

// 展开运算符

// slice方法-数组

// concat方法-数组