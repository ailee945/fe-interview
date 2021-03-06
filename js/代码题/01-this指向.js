// ==================1==================
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

// ==================2==================
function fn() {
  console.log("real", this); // {a: 100} ，该作用域下的 this 的真实的值, call 显式绑定
  var arr = [1, 2, 3];
  // 普通 JS
  arr.map(function (item) {
    console.log("js", this); // window 。普通函数，这里打印出来的是全局变量，令人费解
    return item + 1;
  });
  // 箭头函数
  arr.map((item) => {
    console.log("es6", this); // {a: 100} 。箭头函数，这里打印的就是父作用域的 this
    return item + 1;
  });
}
fn.call({ a: 100 });
