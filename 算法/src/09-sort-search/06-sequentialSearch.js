Array.prototype.sequentialSearch = function(item){
  for (let index = 0; index < this.length; index++) {
    if(this[index] === item) return index 
  }
  return -1
}

const arr = [1,2,3,4,5,6]
const res = arr.sequentialSearch(6)

// 时间复杂度O(n)