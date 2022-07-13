// 块级作用域
// let age = 19;

// {
//   var name = "zhang";
//   let age = 18;
//   console.log(age);
// }

// console.log(name);
// console.log(age);

// 暂时性死区TDZ

// const foo = "---";

// if (true) {
//   console.log(foo); // Cannot access 'foo' before initialization
//   let foo = "====";
// }

// 计算属性名
const foo = "zhang";
const obj2 = {
  user: "lee",
  height: 1.8,
  [foo + 22]: "计算属性名",
};

console.log(obj2.zhang22);
console.log(obj2[foo + 22]);

// Symbol
const s1 = Symbol('abc')
const s2 = Symbol('abc')
console.log(s1===s2); // false
console.log(s1.description); // 'abc'

// 创建两个一样的Symbol
const s3 = Symbol.for("abc");
const s4 = Symbol.for("abc");
console.log(s3===s4);
console.log(Symbol.keyFor(s3)); // 'abc'

// BingInt
const n = Number.MAX_SAFE_INTEGER //9007199254740991
const bigInt = 9007199254740992n


const bigInt2 = bigInt+1n
const bigInt3 = bigInt+BigInt(10)

console.log(bigInt2)
console.log(bigInt3)

const final = new Finalization