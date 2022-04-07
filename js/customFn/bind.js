Function.prototype.customBind = function (thisArg, ...argArray) {
  // 1. 获取到真实需要的函数
  let fn = this;

  // 2. 绑定this
  thisArg =
    thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;

  function proxyFn(...args) {
    // 3.将函数放到thisArg中进行调用
    thisArg.fn = fn;
    // 特殊: 对两个传入的参数进行合并
    var finalArgs = [...argArray, ...args];
    var result = thisArg.fn(...finalArgs);
    delete thisArg.fn;

    // 4.返回结果
    return result;
  }

  return proxyFn;
};

// 功能测试
