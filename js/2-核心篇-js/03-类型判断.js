function getType(para) {
  const type = typeof para;
  if (type !== "object") {
    // 先进行typeof判断，如果是基础数据类型，直接返回
    return type;
  }
  // 对于typeof返回结果是object的，再进行如下的判断，正则返回结果
  return Object.prototype.toString
    .call(para)
    .replace(/^\[object (\S+)\]$/, "$1"); // 注意正则中间有个空格
}


console.log(getType(1));
console.log(getType(null));
console.log(getType(undefined));
console.log(getType([]));