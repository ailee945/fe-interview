obj = {
  a: 1,
  b: 2,
};
obj2 = {
  a: 1,
  b: 2,
};
obj3 = {
  a: 1,
  b: "2",
};

console.log(Object.is(obj, obj2)); // false
console.log(JSON.stringify(obj)===JSON.stringify(obj2)); // true
console.log(JSON.stringify(obj3)===JSON.stringify(obj2)); // false
