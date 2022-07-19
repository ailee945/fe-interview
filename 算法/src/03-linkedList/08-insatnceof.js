function CustomInstanceof(a,b){
  let p = a
  while(p){
    if(Object.getPrototypeOf(p) === b.prototype) return true
    p = Object.getPrototypeOf(p)
  }
  return false
}

// 功能测试
console.log(CustomInstanceof([1, 2, 3], Object));
console.log(CustomInstanceof(() => {}, Function));
