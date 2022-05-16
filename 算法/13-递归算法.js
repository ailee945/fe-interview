function deepClone(obj) {
  if (typeof obj !== "object") return obj;
  const newObj = {};
  for (const key in obj) {
    newObj[key] = deepClone(obj[key]);
  }
  return newObj;
}

const obj = {
  name: "lee",
  age: 18,
  friend: {
    name: "jang",
    age: 18,
  },
};
const newObj = deepClone(obj);
console.log(newObj);
obj.friend.name = "leeeee";
console.log(newObj);
