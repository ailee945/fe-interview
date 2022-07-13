function deepClone(obj) {
  if (typeof obj !== "object" || obj === null) return obj;
  const newObj = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    // 保证不是原型中的属性
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key]);
    }
  }
  return newObj;
}

const obj = {
  name: "lee",
  friend: {
    name: "lee",
  },
  nums:[1,2,3,4]
};
const obj2 = deepClone(obj);
obj.friend.name = "jang";
console.log(obj2);
