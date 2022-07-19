function getType(target) {
  const type = typeof target;
  if (target === null) return "null";
  if (Number.isNaN(target)) return "NaN";
  if (type !== "object") {
    return type;
  } else {
    // 对于typeof返回结果是object的，再进行如下的判断，正则返回结果
    return Object.prototype.toString
      .call(target)
      .replace(/^\[object (\S+)\]$/, "$1")
      .toLowerCase(); // 注意正则中间有个空格
  }
}

console.log(getType(1)); // number
console.log(getType(NaN)); // NaN
console.log(getType(null)); // null
console.log(getType(undefined)); // undefined
console.log(getType([])); // array
console.log(getType(new Set())); // set
console.log(getType(() => {})); // function
