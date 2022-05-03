// 一. 通过原型链实现继承
// 1. 创建父类
// function Parent() {
//   this.name = "person";
// }
// // 2. 父类的原型上添加方法
// Parent.prototype.run = function () {
//   console.log("run",this.name);
// };
// // 3. 创建子类
// function Child() {
//   this.num = "100";
// }
// // 4. 子类的原型指向父类的实例
// const p = new Parent();
// Child.prototype = p;
// // 5. 子类的原型上添加方法
// Child.prototype.walk = function () {
//   console.log("walk",this.num);
// };

// const c = new Child();
// console.log(c);
// c.walk();
// c.run();
// 属性被多个对象引用

// 二. 借用构造函数实现继承（和下面的区别只是不传递参数）

// 三. 组合借用构造函数实现继承
// // 1. 创建父类
// function Parent(id) {
//   this.name = "person";
//   this.id = id
// }
// // 2. 父类的原型上添加方法
// Parent.prototype.run = function () {
//   console.log("parent",this.name);
// };
// // 3. 创建子类
// function Child(id,num) {
//   Parent.call(this,id)
//   this.num = num;
// }
// // 4. 子类的原型指向父类的实例
// const p = new Parent('p001');
// Child.prototype = p;
// // 5. 子类的原型上添加方法
// Child.prototype.walk = function () {
//   console.log("child",this.num);
// };

// const c = new Child('c001',100);
// console.log(c);
// c.walk();
// c.run();
// 缺点：创建子类的时候调用两次弗雷德构造函数
// 所有子类实例上面都会有两个父类的属性

// 四. 原型式继承函数
// function object(obj) {
//   function Func() {}
//   Func.prototype = obj;
//   return new Func();
// }
// function object(obj){
//   const newObj = {}
//   Object.setPrototypeOf(newObj,obj)
//   return newObj
// }
// var student = Object.create(parent,{
//   child:{
//     num:1,
//     name:'child'
//   }
// })

// 五. 寄生式继承函数(即创建一个封装继承过程的函数, 该函数在内部以某种方式来增强对象，最后再将这个对象返回)
// const parent = {name:'lee'}
// function createChild(parent){
//   const newObj = Object.create(parent)
//   newObj.num = '001'
//   return newObj
// }
// createChild(parent)
// console.log(createChild(parent).name); // lee

// 六. 组合寄生式继承函数
function object(o) {
  function Func() {}
  Func.prototype = o;
  return new Func();
}
function inheritPrototype(subType, superType) {
  subType.prototype = object(superType.prototype);
  subType.prototype.constructor = subType;
}
