function customNew(constructor, ...args) {
  // 0. 判断constructor是否是函数
  if (!typeof constructor === "function") throw new Error(" para error ");
  // 1. 创建一个空对象，继承 constructor 的原型
  const obj = Object.create(constructor.prototype);
  // 2. 执行constructor，并将obj作为内部this。使用 apply，改变构造函数 this 的指向到新建的对象，这样 obj 就可以访问到构造函数中的属性
  var res = constructor.apply(obj, args);
  // 4、如果fn有返回值，则将其作为new操作返回内容，否则返回obj
  return res instanceof Object ? res : obj;
}


// 功能测试
function Foo(name, n) {
  this.name = name;
  this.city = "北京";
  this.n = n;
}

const f2 = new Foo("jang", 100);
const f = customNew(Foo, "jang", 100);

console.log(f);
console.log(f2);
