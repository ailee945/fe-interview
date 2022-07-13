console.log(a); //a is not defined
if (true) {
  let a = "123";
  console.log(a); // 123
}
console.log(a); //a is not defined

// 两个独立的代码块
// console.log(a); // undefined
// if (true) {
//   var a = "123";
//   console.log(a); // 123
// }
// console.log(a); // 123
