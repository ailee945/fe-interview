// 迭代协议 具体分为可迭代协议和迭代器协议
// 可迭代对象必须实现 [Symbol.iterator] 方法， 这个方法是一个无参的函数，返回一个符合迭代器协议的对象

const arr = [1, 2, 3, 4, 5, 6];

// 迭代器是一个**对象**，这个对象实现了**迭代器协议**
let index = 0;
const iteratorArr = {
  next: function () {
    if (index < arr.length) {
      return { value: arr[index++], done: true };
    }
    return { value: undefined, done: false };
  },
};

console.log(iteratorArr.next());
console.log(iteratorArr.next());
console.log(iteratorArr.next());
console.log(iteratorArr.next());
console.log(iteratorArr.next());
console.log(iteratorArr.next());
console.log(iteratorArr.next());

// 可迭代对象 实现了可迭代协议
const obj = {
  arr: [10, 20, 30, 40],
  [Symbol.iterator]: function () {
    let index = 0
    return {
      // 这里面需要使用箭头函数
      next: ()=> {
        if (index < this.arr.length) {
          return { value: this.arr[index++], done: true };
        }
        return { value: undefined, done: false };
      },
    };
  },
};

const iter = obj[Symbol.iterator]()
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());