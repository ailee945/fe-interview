class Event1 {
  constructor() {
    this._cache = {};
  }
  // 绑定事件
  on(type, callback) {
    let fns = this._cache[type] === undefined ? [] : this._cache[type];
    if (!fns.includes(callback)) fns.push(callback);
  }
  // 触发事件
  trigger(type, para) {
    let fns = this._cache[type];
    if (Array.isArray(fns)) {
      fns.forEach((fn) => {
        fn(para);
      });
    }
    return this;
  }
  // 解绑事件
  off(type, callback) {
    let fns = this._cache[type];
    if (Array.isArray(fns)) {
      if (callback) {
        let index = fns.indexOf(callback);
        if (index !== -1) {
          fns.splice(index, 1);
        }
      } else {
        fns = null;
      }
    }
  }
}

// 测试用例
const event1 = new Event1();
const print = function (a) {
  console.log(a);
};
event1.on("test", print);
event1.trigger("test", "a");
