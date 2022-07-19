Function.prototype.customApply = function (thisArg, argArray) {
  const fn = this;
  thisArg =
    thisArg !== undefined && thisArg !== null ? Object(thisArg) : window;
  thisArg.fn = fn;
  // 需要第二个参数有没有传
  argArray = argArray || [];
  const res = thisArg.fn(...argArray);
  delete thisArg.fn;
  return res;
};

// 功能测试
function foo() {
  console.log(this, "para");
}

foo.customApply(0);
foo.apply(0);
