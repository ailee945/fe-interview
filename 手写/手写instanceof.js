function customInstanceof(left, right) {
  // 判断基本数组类型
  if (typeof left !== "object" || left === null) return false;
  let rightPrototype = right.prototype;
  left = left.__proto__;
  while (true) {
    if (left === null) {
      return false;
    }
    if (left === rightPrototype) {
      return true;
    }
    left = left.__proto__;
  }
}
