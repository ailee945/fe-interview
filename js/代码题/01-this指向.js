function foo() {
  console.log(this.a);
}
var a = 1;
foo(); // 浏览器中为 1; node中为undefined
console.log(global);

const obj = {
  a: 2,
  foo: foo,
};

obj.foo(); // 2

const c = new foo(); // undefined
