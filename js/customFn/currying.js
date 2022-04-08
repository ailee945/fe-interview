function customCurrying(fn) {
  return function (...args1) {
    if (args1.length >= fn.length) {
      return fn.apply(this, args1);
    } else {
      return function (...args2) {
        return currying.apply(this, args1.concat(args2));
      };
    }
  };
}

// 功能测试
function sum(x, y, z) {
  return x + y + z;
}

const sumCurring = customCurrying(sum);

console.log(sum(1, 2, 3));
console.log(sumCurring(1)(2, 3));
