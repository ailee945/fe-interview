console.log(true == "1"); // true
console.log(true == "2"); // false

// ==
// 1. 先判断类型
// 2. null == undefined
// 3. string和number转换为number进行比较
// 4. boolean和其他值进行比较时，转换为number进行比较
// 5. 判断其中一方是否为 object 且另一方为 string、number 或者 symbol，是的话就会把 object 转为原始类型再进行判断

// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 500);
// } // 5 5 5 5 5

// 闭包
for (var i = 0; i < 5; i++) {
  (function (j) {
    setTimeout(() => {
      console.log(j);
    }, j * 500);
  })(i);
}
// let
// 传入settimeout的第三个参数, 这个参数会被当作timer的参数传入
for (var i = 0; i < 5; i++) {
  setTimeout(
    function timer(j) {
      console.log(j);
    },
    i * 500,
    i
  );
}

// const/let存在暂存死区：块顶部到变量声明的暂存死区
function test() {
  var foo = 33;
  if (foo) {
    let foo = foo + 55; // ReferenceError
  }
}
test();

// 原型链实现继承
// 借用构造函数实现继承
// 组合继承(原型链继承+构造函数继承)
// 组合式继承
// 原型式继承函数
// 寄生式继承函数
// 寄生组合式继承函数
function create(o) {
  function Foo() {}
  Foo.prototype = o;
  return new Foo();
}
function inheritPrototype(sub, sup) {
  sub.prototype = create(sup.prototype);
  Object.defineProperty(sub, "constructor", {
    value: sub,
    writable: true,
    enumerable: false,
    configurable: true,
  });
}
