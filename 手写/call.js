Function.prototype.customCall = function (thisArg, ...args) {
  // 获取执行的函数
  const fn = this;
  // 将thisArg转换为对象
  // 同时要考虑传入的0或者空数组
  thisArg =
    thisArg !== undefined && thisArg !== null ? Object(thisArg) : window;
  // 调用函数
  thisArg.fn = fn;
  const res = thisArg.fn(...args);
  delete thisArg.fn;
  // 将结果返回
  return res;
};

// 功能测试

function foo() {
  console.log(this, "1111");
}

foo.call(0);
foo.customCall(0);
