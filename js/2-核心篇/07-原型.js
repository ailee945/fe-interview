const obj = new Object();

const flag = obj.__proto__ === obj.constructor.prototype;
const flag2 = obj.constructor.prototype === Object.getPrototypeOf(obj);
const flag3 = Object.getPrototypeOf(obj) === Object.prototype;

console.log(flag); // true
console.log(flag2); // true
console.log(flag3); // true
