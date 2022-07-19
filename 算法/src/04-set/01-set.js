// 去重
const arr = [1, 2, 3, 3, 4];
const newArr = [...new Set(arr)];
console.log(newArr);

// 判断元素是否在集合中
const set = new Set(arr)
console.log(set.has(1));
console.log(set.has(5));

// 求交集
const newSet = new Set([2,3,5])
const intersection = new Set([...set].filter(item=>newSet.has(item)))
console.log(intersection);

// 迭代
// for of
// keys

// 和数组转换
// [...new Set()]
// Array.from(new Set())

// new Set([])

// 求差集
const deferenceSet = new Set([...set].filter((item) => !newSet.has(item)));
