// call
Function.prototype.customCall = function (thisArg, ...restArg) {
  const _this = this;
  thisArg =
    thisArg !== undefined && thisArg !== null ? Object(thisArg) : window;
  thisArg.foo = _this;
  const res = thisArg.foo(...restArg);
  delete thisArg.fn;
  return res;
};

// apply
Function.prototype.customApply = function (thisArg, restArg) {
  const _this = this;
  thisArg =
    thisArg !== undefined && thisArg !== null ? Object(thisArg) : window;
  thisArg.foo = _this;
  restArg = restArg || [];
  const res = thisArg.foo(restArg);
  delete thisArg.foo;
  return res;
};

// bind
Function.prototype.customBind = function (thisArg, ...restArg1) {
  const _this = this;
  thisArg =
    thisArg !== undefined && thisArg !== null ? Object(thisArg) : window;
  function foo(...restArg2) {
    thisArg.foo = _this;
    const finalArgs = [...restArg1, ...restArg2];
    const res = thisArg.foo(...finalArgs);
    delete thisArg.foo;
    return res;
  }
  return foo;
};

// new
function customNew(constructor, ...args) {
  if (typeof constructor !== "function")
    throw new TypeError("传入的参数不是函数");
  const obj = Object.create(constructor.prototype);
  const res = constructor.apply(obj, args);
  return res instanceof constructor ? res : constructor(...args);
}

function foo(){
  this.name = 'lee'
  return {
    name:'jang'
  }
}

const info2 = customNew(foo)

const info = new foo()
console.log(info);
console.log(info2);
