// @ts-ignore
Function.prototype.customBind = function (context: any, ...bindArgs: any) {
  // context是bind传入的this
  // bindArgs是bind传入的参数
  const self = this; // 当前的函数本身
  return function (...args: any[]) {
    const newArgs = bindArgs.concat(args);
    return self.apply(context, newArgs);
  };
};
// 功能测试
function foo(this: any, a: any, b: any, c: any) {
  console.log(this, a, b, c);
}
// foo(1,2,3) // undefined, 1, 2, 3

const fn = foo.bind([1], 1, 2);
fn(3); // [1], 1, 2, 3 
