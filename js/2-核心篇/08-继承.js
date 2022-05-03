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
