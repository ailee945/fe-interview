// 实现两个方法 hasNext() next()

// 数组实现一个迭代器
const arr = [1, 2, 3, 4, 5, 6];

function Iterator(items) {
  this.items = items;
  this.index = 0;
}

Iterator.prototype = {
  hasNext: function () {
    return this.index < this.items.length;
  },
  next: function () {
    return this.items[this.index++];
  },
};

const iterator = new Iterator(arr);
while(iterator.hasNext()){
  console.log(iterator.next());
}
//输出：1, red, false, 3.14